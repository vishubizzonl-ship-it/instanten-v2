/**
 * Contact details — ek hi jagah se poore site ke contact points control hote hain.
 *
 * PUBLIC_EMAIL      : jo address site par dikhta hai aur mailto: links me jaata hai.
 * DELIVERY_EMAIL    : form submit hone par mail yahan pahunchna chahiye.
 * CONTACT_API_PATH  : Cloudflare Worker ka endpoint (worker/index.mjs). Site Cloudflare
 *                     Workers par ho to yahi asli transport hai — koi third-party nahi.
 * WEB3FORMS_KEY     : optional backup (agar kabhi Cloudflare ke bina deploy karna pade).
 *
 * Fallback chain (src/lib/contactSubmit.ts): Worker API → Web3Forms (key ho to) → mailto.
 * Teeno fail ho jayein tab bhi visitor ka message waste nahi hota — uske mail app me
 * poora message ready khul jaata hai.
 */
export const PUBLIC_EMAIL = 'helloinstanten@gmail.com';
/**
 * Receiving mailbox — Worker ka CONTACT_TO aur ye dono ek hi hone chahiye
 * (warna form ka mail kisi aur dabbe me chala jayega). Worker ke bina deploy
 * (pure static) par bhi form isi address par mailto karta hai.
 */
export const DELIVERY_EMAIL = 'helloinstanten@gmail.com';
export const PUBLIC_EMAIL_MAILTO = `mailto:${PUBLIC_EMAIL}`;

/** Cloudflare Worker endpoint — same-origin, isliye koi CORS/key nahi. */
export const CONTACT_API_PATH = '/api/contact';

/** optional backup transport */
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const rawKey = (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '').trim();
export const WEB3FORMS_KEY = rawKey;

/** true = Worker API maujood hai (Cloudflare deploy). Client khud 404 dekh kar fallback karta hai. */
export const CONTACT_FORM_LIVE = CONTACT_API_PATH.length > 0;
