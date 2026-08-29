import {
  getAuthConfig,
  json,
  readCookie,
  SESSION_COOKIE,
  verifySession,
} from "./_auth.mjs";

export default function handler(request) {
  if (request.method !== "GET") {
    return json({ error: "method_not_allowed" }, 405, { Allow: "GET" });
  }

  let config;
  try {
    config = getAuthConfig();
  } catch {
    return json({ error: "server_misconfigured" }, 503);
  }

  const session = verifySession(readCookie(request, SESSION_COOKIE), config);
  if (!session) return json({ authenticated: false }, 401);

  return json({ authenticated: true, email: session.sub });
}