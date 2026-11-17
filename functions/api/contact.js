/**
 * Pages Function — POST /api/contact ka proxy.
 *
 * Pages Functions me `send_email` binding nahi hoti, isliye email asal me
 * `instanten-api` Worker bhejta hai (wrangler.api.jsonc). Browser ke liye
 * route same-origin rehta hai: form `/api/contact` hi post karta hai.
 *
 * Pages project me environment variable set karna zaroori hai:
 *   API_ORIGIN = https://instanten-api.<your-subdomain>.workers.dev
 * Optional (spam guard, dono jagah same value):
 *   PROXY_SECRET
 */
const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export async function onRequestPost({ request, env }) {
  if (!env.API_ORIGIN) return json(503, { ok: false, error: 'api_origin_missing' });

  const target = new URL('/api/contact', env.API_ORIGIN);
  const headers = new Headers();
  headers.set('content-type', request.headers.get('content-type') || 'application/json');

  /* Rate limit Worker me IP par hai — proxy ke baad bhi wahi IP dikhna chahiye. */
  const ip = request.headers.get('cf-connecting-ip');
  if (ip) headers.set('cf-connecting-ip', ip);
  if (env.PROXY_SECRET) headers.set('x-instanten-proxy', env.PROXY_SECRET);

  let upstream;
  try {
    upstream = await fetch(target.toString(), { method: 'POST', headers, body: await request.text() });
  } catch {
    return json(502, { ok: false, error: 'proxy_failed' });
  }

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: {
      'content-type': upstream.headers.get('content-type') || 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

/** Same-origin form hai, phir bhi preflight aaye to saaf jawab. */
export function onRequestOptions() {
  return new Response(null, { status: 204, headers: { allow: 'POST, OPTIONS' } });
}

/** GET par saaf error — warna Pages 404 HTML lautata hai. */
export function onRequestGet() {
  return json(405, { ok: false, error: 'method_not_allowed' });
}
