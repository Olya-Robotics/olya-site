import {
  credentialsAreValid,
  createSession,
  getAuthConfig,
  json,
  sessionCookie,
} from "./_auth.mjs";

export default async function handler(request) {
  if (request.method !== "POST") {
    return json({ error: "method_not_allowed" }, 405, { Allow: "POST" });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_request" }, 400);
  }

  let config;
  try {
    config = getAuthConfig();
  } catch {
    return json({ error: "server_misconfigured" }, 503);
  }

  if (!credentialsAreValid(body?.email, body?.password, config)) {
    return json({ error: "invalid_credentials" }, 401);
  }

  const token = createSession(config.email, config.secret);
  return json({ ok: true }, 200, { "Set-Cookie": sessionCookie(token) });
}