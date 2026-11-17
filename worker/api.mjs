/**
 * Instanten — contact-API Worker (Pages ke saath chalne wala chhota bhai).
 *
 * Pages Functions me Cloudflare ka `send_email` binding available nahi hota
 * (Cloudflare docs: sirf Workers me). Isliye static site Pages par rehti hai
 * aur sirf email bhejne wala hissa is alag Worker par: `instanten-api`.
 * Pages ka Function `/api/contact` ko yahan proxy karta hai, taaki browser ke
 * liye sab kuch same-origin rahe (koi CORS nahi).
 *
 * Deploy: npx wrangler deploy --config wrangler.api.jsonc
 */
import site from './index.mjs';

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return json(404, { ok: false, error: 'not_found' });

    /* Optional spam guard: PROXY_SECRET set ho to sirf hamara Pages Function
       hi yahan aa sakta hai (warna workers.dev URL public hai). Set na karo
       to guard chalta hi nahi — kuch toota nahi. */
    if (env.PROXY_SECRET && request.headers.get('x-instanten-proxy') !== env.PROXY_SECRET) {
      return json(403, { ok: false, error: 'forbidden' });
    }

    /* Asli Worker ka same-origin check `origin` aur `url.host` compare karta
       hai. Proxy ke through origin instanten.com hota hai par host
       *.workers.dev — isliye proxy par origin hata dete hain. */
    const headers = new Headers(request.headers);
    headers.delete('origin');

    /* Body text ke roop me — form chhota hai (5 KB limit), aur stream pass
       karne par Node ke undici ko duplex chahiye hota hai. */
    const body =
      request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.text();

    const forwarded = new Request(request.url, { method: request.method, headers, body });

    const inner = Object.create(env);
    inner.ASSETS = { fetch: () => json(404, { ok: false, error: 'not_found' }) };

    return site.fetch(forwarded, inner);
  },
};
