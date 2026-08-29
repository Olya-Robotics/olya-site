import { expiredSessionCookie, json } from "./_auth.mjs";

export default function handler(request) {
  if (request.method !== "POST") {
    return json({ error: "method_not_allowed" }, 405, { Allow: "POST" });
  }

  return json({ ok: true }, 200, { "Set-Cookie": expiredSessionCookie() });
}