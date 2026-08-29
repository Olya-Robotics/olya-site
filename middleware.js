import { createHmac, timingSafeEqual } from "node:crypto";

const SESSION_COOKIE = "olya_session";

function constantTimeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && timingSafeEqual(a, b);
}

function readCookie(request, name) {
  const header = request.headers.get("cookie") || "";
  for (const part of header.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0) continue;
    if (part.slice(0, separator).trim() === name) {
      return decodeURIComponent(part.slice(separator + 1).trim());
    }
  }
  return null;
}

function hasValidSession(request) {
  const email = String(process.env.AUTH_EMAIL || "").trim().toLowerCase();
  const secret = String(process.env.AUTH_SESSION_SECRET || "");
  const token = readCookie(request, SESSION_COOKIE);
  if (!email || secret.length < 32 || !token) return false;

  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payload, signature] = parts;
  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  if (!constantTimeEqual(signature, expected)) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.sub === email && Number.isSafeInteger(data.exp) && data.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export const config = {
  matcher: ["/area-cliente.html"],
  runtime: "nodejs",
};

export default function middleware(request) {
  if (hasValidSession(request)) return;

  const loginUrl = new URL("/login.html", request.url);
  loginUrl.searchParams.set("redirect", "area-cliente.html");
  return Response.redirect(loginUrl, 302);
}