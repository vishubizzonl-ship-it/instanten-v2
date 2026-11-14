/**
 * Analytics configuration — instanten.com
 *
 * Yahan sirf EK jagah ID badalni hai. Baaki poora wiring automatic hai.
 *
 * ── Kaunsa ID use karna hai? ──────────────────────────────────────────────
 * GA4 mein har property ka apna "Measurement ID" hota hai (G-XXXXXXXXXX).
 * instanten.com aur compassinstant.com do alag products hain, isliye GA4
 * mein instanten.com ke liye ALAG property banani chahiye:
 *
 *   1. analytics.google.com → Admin → Create property → "instanten.com"
 *   2. Data stream → Web → https://instanten.com
 *   3. Measurement ID copy karo (G-XXXXXXXXXX)
 *   4. Neeche DEFAULT_GA_MEASUREMENT_ID ki jagah paste karo
 *      (ya build karte waqt PUBLIC_GA_ID=G-XXXXXXXXXX set karo)
 *
 * Default jaan-bujh kar purana compassinstant wala ID hai taaki tracking aaj
 * se chalu rahe. Naya ID paste karte hi data naye property mein jayega —
 * code mein aur kuch badalna nahi padega.
 *
 * Ek hi property mein dono sites rakhna ho to koi dikkat nahi: GA4 reports
 * mein Hostname dimension se instanten.com aur compassinstant.com alag-alag
 * dekh sakte ho.
 */

export const DEFAULT_GA_MEASUREMENT_ID = 'G-N3YD3ZXYKZ';

/** Build-time override: PUBLIC_GA_ID=G-ABC123XYZ bash start.sh */
export const GA_MEASUREMENT_ID: string =
  (import.meta.env.PUBLIC_GA_ID as string | undefined)?.trim() || DEFAULT_GA_MEASUREMENT_ID;

/** Empty ID (PUBLIC_GA_ID="") = analytics bilkul off, koi script nahi. */
export const analyticsEnabled = GA_MEASUREMENT_ID.length > 0;
