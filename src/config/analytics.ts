/**
 * Analytics configuration — instanten.com
 *
 * ── Alag-alag data chahiye? Yahan 5 slots hain ────────────────────────────
 *
 * Site par paanch silos hain aur har silo ka GA4 data alag chahiye:
 *
 *   instanten         → route page + blog / about / contact / privacy / terms
 *   onlinecompass     → /onlinecompass/  + uska poora silo
 *   onlinebubblelevel → /onlinebubblelevel/ + uska poora silo
 *   onlinespeedometer → /onlinespeedometer/ + uska poora silo
 *   onlineqibla       → /onlineqibla/ + uska poora silo
 *
 * Har slot apna GA4 Measurement ID (G-XXXXXXXXXX) le sakta hai. Sabse aasan
 * tareeka: neeche SILO_MEASUREMENT_IDS mein apne property ka ID paste karo.
 * Jab tak koi ID nahi daala, wahi purana shared ID chalta rahega (data aana
 * band nahi hota) — aur content_group (`instanten-home`, `onlinecompass`, …)
 * us ek property ke andar bhi paanch silos alag-alag dikhata rehta hai.
 *
 * Build-time override bhi chalta hai (Termux mein ID daalne ke liye):
 *
 *   PUBLIC_GA_ID_INSTANTEN=G-AAAAAA1111 \
 *   PUBLIC_GA_ID_ONLINECOMPASS=G-BBBBBB2222 \
 *   PUBLIC_GA_ID_ONLINEBUBBLELEVEL=G-CCCCCC3333 \
 *   PUBLIC_GA_ID_ONLINESPEEDOMETER=G-DDDDDD4444 \
 *   PUBLIC_GA_ID_ONLINEQIBLA=G-EEEEEE5555 \
 *   bash start.sh
 *
 * Khaali string (`PUBLIC_GA_ID_INSTANTEN=`) = us silo par analytics bilkul
 * off (koi script nahi).
 */

/** Sab silos ka fallback — jab tak alag ID nahi daala jaata. */
export const DEFAULT_GA_MEASUREMENT_ID = 'G-N3YD3ZXYKZ';

/** GA4 silos — Layout har page ko inme se ek mein daalta hai. */
export type AnalyticsSilo =
  | 'instanten'
  | 'onlinecompass'
  | 'onlinebubblelevel'
  | 'onlinespeedometer'
  | 'onlineqibla';

const env = (key: string): string | undefined => {
  const raw = import.meta.env[key] as string | undefined;
  return raw === undefined ? undefined : raw.trim();
};

/**
 * Per-silo IDs. Apne GA4 property ke IDs yahan paste karo — bas.
 * (env var diya gaya ho to wo jeetta hai, taaki ek hi code base se
 * staging/production alag chale.)
 */
const SILO_MEASUREMENT_IDS: Record<AnalyticsSilo, string> = {
  instanten: 'G-N3YD3ZXYKZ',
  onlinecompass: 'G-N3YD3ZXYKZ',
  onlinebubblelevel: 'G-N3YD3ZXYKZ',
  onlinespeedometer: 'G-N3YD3ZXYKZ',
  onlineqibla: 'G-N3YD3ZXYKZ',
};

const ENV_KEYS: Record<AnalyticsSilo, string> = {
  instanten: 'PUBLIC_GA_ID_INSTANTEN',
  onlinecompass: 'PUBLIC_GA_ID_ONLINECOMPASS',
  onlinebubblelevel: 'PUBLIC_GA_ID_ONLINEBUBBLELEVEL',
  onlinespeedometer: 'PUBLIC_GA_ID_ONLINESPEEDOMETER',
  onlineqibla: 'PUBLIC_GA_ID_ONLINEQIBLA',
};

/** Purana single-ID override — sab slots par lagta hai (backward compatible). */
const sharedOverride = env('PUBLIC_GA_ID');

/** Kisi ek silo ka measurement ID (`''` = us silo par analytics off). */
export function gaIdForSilo(silo: AnalyticsSilo): string {
  const dedicated = env(ENV_KEYS[silo]);
  if (dedicated !== undefined) return dedicated;
  if (sharedOverride !== undefined) return sharedOverride;
  return SILO_MEASUREMENT_IDS[silo] ?? DEFAULT_GA_MEASUREMENT_ID;
}

/** Default silo (route page) ka ID — purane imports ke liye. */
export const GA_MEASUREMENT_ID: string = gaIdForSilo('instanten');

/** Empty ID (PUBLIC_GA_ID="") = analytics bilkul off, koi script nahi. */
export const analyticsEnabled = GA_MEASUREMENT_ID.length > 0;
