/**
 * Tool URL ka ek hi source of truth.
 *
 * Chaar sensor tools (compass, bubble level, speedometer, Qibla) site ke root
 * par rehte hain — `/onlinebubblelevel/`, `/<lang>/onlinebubblelevel/` — kyunki
 * ye apne poore page ke saath aate hain (compassinstant silo jaisa). Silo ke
 * bahar ka koi tool nahi hai, isliye `/tools/<slug>/` branch sirf safety ke
 * liye rakha hai. Dono jagah se link banane ke liye yahi function use karo,
 * taaki URL kahin bhi hard-code na ho.
 */
export const INSTRUMENT_SLUGS = [
  'onlinecompass',
  'onlinebubblelevel',
  'onlinespeedometer',
  'onlineqibla',
] as const;

export type InstrumentSlug = (typeof INSTRUMENT_SLUGS)[number];

export function isInstrument(slug: string): slug is InstrumentSlug {
  return (INSTRUMENT_SLUGS as readonly string[]).includes(slug);
}

/** Prefix-free tool path: `/onlinecompass/` ya `/onlineqibla/`. */
export function toolPath(slug: string): string {
  return isInstrument(slug) ? `/${slug}/` : `/tools/${slug}/`;
}

/** Absolute URL (schema, canonical, sitemap ke liye). */
export function toolUrl(slug: string, siteUrl: string, lang?: string): string {
  const path = toolPath(slug);
  return `${siteUrl}${lang && lang !== 'en' ? `/${lang}` : ''}${path}`;
}
