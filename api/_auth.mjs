import { createHmac, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "olya_session";
export const SESSION_MAX_AGE = 60 * 60 * 8;

export function getAuthConfig() {
  const email = String(process.env.AUTH_EMAIL || "").trim().toLowerCase();
  const password = String(process.env.AUTH_PASSWORD || "");
  const secret = String(process.env.AUTH_SESSION_SECRET || "");

  if (!email || !password || secret.length < 32) {
    throw new Error("Authentication environment is not configured");
  }

  return { email, password, secret };
}

function constantTimeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && timingSafeEqual(a, b);
}

export function credentialsAreValid(email, password, config) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const suppliedPassword = String(password ?? "");
  return constantTimeEqual(normalizedEmail, config.email) &&
    constantTimeEqual(suppliedPassword, config.password);
}

export function createSession(email, secret) {
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(JSON.stringify({
    sub: email,
    iat: now,
    exp: now + SESSION_MAX_AGE,
  })).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifySession(token, config) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payload, signature] = parts;
  const expected = createHmac("sha256", config.secret).update(payload).digest("base64url");
  if (!constantTimeEqual(signature, expected)) return null;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    const now = Math.floor(Date.now() / 1000);
    if (data.sub !== config.email || !Number.isSafeInteger(data.exp) || data.exp <= now) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export function readCookie(request, name) {
  const header = request.headers.get("cookie") || "";
  for (const part of header.split(";")) {
    const separator = part.indexOf("=");
    if (separator < 0) continue;
    const key = part.slice(0, separator).trim();
    if (key === name) return decodeURIComponent(part.slice(separator + 1).trim());
  }
  return null;
}

export function sessionCookie(token) {
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}`;
}

export function expiredSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}