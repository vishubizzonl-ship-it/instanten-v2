/**
 * Contact details — ek hi jagah se poore site ke contact points control hote hain.
 *
 * PUBLIC_EMAIL      : site par dikhne wala address — hello@instanten.com.
 * DELIVERY_EMAIL    : form ki mail ka final dabba — vishubizz.onl@gmail.com.
 * CONTACT_API_PATH  : Cloudflare Worker ka endpoint (worker/index.mjs). Site Cloudflare
 *                     Workers par ho to yahi asli transport hai — koi third-party nahi.
 * WEB3FORMS_KEY     : optional backup (agar kabhi Cloudflare ke bina deploy karna pade).
 *
 * Fallback chain (src/lib/contactSubmit.ts): Worker API → Web3Forms (key ho to) → mailto.
 * Teeno fail ho jayein tab bhi visitor ka message waste nahi hota — uske mail app me
 * poora message ready khul jaata hai.
 */
export const PUBLIC_EMAIL = 'hello@instanten.com';
/**
 * Receiving dabba. Form submit hone par mail yahan jaati hai.
 * Cloudflare Email Routing `hello@instanten.com` ko vishubizz.onl@gmail.com par
 * forward karta hai (free), aur (worker ho to) send_email seedha Gmail par bhejta hai.
 */
export const DELIVERY_EMAIL = 'vishubizz.onl@gmail.com';
export const PUBLIC_EMAIL_MAILTO = `mailto:${PUBLIC_EMAIL}`;

/**
 * Transport mode. Do hi valid modes hain:
 *
 *   'mailto' (default) — site Pages par static hai, koi backend nahi. Form ka
 *                        submit seedha visitor ke mail app me same message
 *                        kholta hai, addressed to DELIVERY_EMAIL. Koi request
 *                        nahi jaati, koi jhootha "sent" nahi dikhta.
 *   'api'              — Cloudflare Worker deploy hua hai to `PUBLIC_CONTACT_TRANSPORT=api`
 *                        build ke waqt set karo; form `POST /api/contact` par
 *                        jaata hai aur `send_email` binding se mail jaati hai.
 *
 * Default 'mailto' hi rakha hai kyunki default deploy Pages par hota hai aur
 * wahan `/api/contact` maujood nahi hota — bekaar 404 probe se bachne ke liye
 * path hi khaali rakhte hain.
 */
export const CONTACT_TRANSPORT: 'mailto' | 'api' =
  (import.meta.env.PUBLIC_CONTACT_TRANSPORT ?? '').trim() === 'api' ? 'api' : 'mailto';

/** Cloudflare Worker endpoint — sirf 'api' mode me. Same-origin, koi CORS/key nahi. */
export const CONTACT_API_PATH = CONTACT_TRANSPORT === 'api' ? '/api/contact' : '';

/** optional backup transport */
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const rawKey = (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '').trim();
export const WEB3FORMS_KEY = rawKey;

/** true = Worker API maujood hai (Cloudflare deploy). Client khud 404 dekh kar fallback karta hai. */
export const CONTACT_FORM_LIVE = CONTACT_API_PATH.length > 0;
