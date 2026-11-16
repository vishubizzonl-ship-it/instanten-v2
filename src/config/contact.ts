/**
 * Contact details — ek hi jagah se poore site ke contact points control hote hain.
 *
 * PUBLIC_EMAIL      : jo address site par dikhta hai aur mailto: links me jaata hai.
 * DELIVERY_EMAIL    : form submit hone par mail yahan pahunchna chahiye (fallback mailto).
 * WEB3FORMS_KEY     : form ko asli bhejne ke liye. `PUBLIC_WEB3FORMS_KEY` env var se aata
 *                     hai (public key hai by design — HTML me dikhna normal hai).
 *                     Key na ho to form toota nahi — wahi message visitor ke mail app se
 *                     DELIVERY_EMAIL par chala jaata hai (mailto fallback).
 */
export const PUBLIC_EMAIL = 'helloinstanten@gmail.com';
export const DELIVERY_EMAIL = 'vishubizz.onl@gmail.com';
export const PUBLIC_EMAIL_MAILTO = `mailto:${PUBLIC_EMAIL}`;

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const rawKey = (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '').trim();
export const WEB3FORMS_KEY = rawKey;
/** true = form khud bhejta hai (Web3Forms). false = mailto fallback. */
export const CONTACT_FORM_LIVE = rawKey.length > 0;
