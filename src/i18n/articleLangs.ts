/**
 * Silo blog articles: kaunsi bhasha me asli translated content hai.
 *
 * Audit finding (item 3): `/de/…/blog/<slug>/` jaisi localized URL jab English
 * content dikhaye, tab `<html lang="de">` + 11-language hreflang cluster jhooth
 * bolta hai — "ye German version hai" jabki content English hai. Google aise
 * pages ko duplicate maan kar crawl budget waste karta hai, aur user ko galat
 * bhasha ka page milta hai.
 *
 * Do tarah ke articles hain:
 *   1. Chaar "how-to-use-…" articles — `src/i18n/blogs/<lang>.ts` se padhte hain
 *      (getToolBlog), jisme 8 bhashayein hain: en, de, es, fr, it, ja, ko, pt.
 *      nl aur sv ke liye koi content nahi — wahan English fallback chalta hai.
 *   2. Baaki 11 articles — poora content component me hard-coded English hai.
 *      Sirf `en` me asli content hai.
 *
 * Yahan list ek hi jagah rakhi hai taaki Layout aur tests dono ek hi sach
 * padhein. Jab koi article translate ho jaye, us bhasha ko uski list me jod
 * dena — bas.
 */

/** Silo blog content jitni bhashaon me maujood hai (src/i18n/blogs/*). */
export const BLOG_CONTENT_LANGS = ['en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt'] as const;

const ENGLISH_ONLY = ['en'] as const;

/**
 * Article slug → jin bhashaon me uska asli (translated) content hai.
 * Slug poore site par unique hai, isliye silo ka naam key me nahi chahiye.
 */
export const ARTICLE_LANGS: Record<string, readonly string[]> = {
  /* --- getToolBlog se aane wale, 8 bhashaon me translated --- */
  'how-to-use-an-online-compass': BLOG_CONTENT_LANGS,
  'how-to-use-an-online-bubble-level': BLOG_CONTENT_LANGS,
  'how-to-use-an-online-speedometer': BLOG_CONTENT_LANGS,
  'how-to-find-qibla-direction-anywhere': BLOG_CONTENT_LANGS,

  /* --- component me hard-coded English, koi translation nahi --- */
  'how-to-find-north-without-a-compass': ENGLISH_ONLY,
  'how-to-read-a-compass-dial': ENGLISH_ONLY,
  'online-compass-without-an-app': ENGLISH_ONLY,
  'bubble-level-vs-spirit-level': ENGLISH_ONLY,
  'how-accurate-is-a-phone-bubble-level': ENGLISH_ONLY,
  'how-to-check-if-a-surface-is-level': ENGLISH_ONLY,
  'level-furniture-shelves-appliances': ENGLISH_ONLY,
  'qibla-direction-compass-degrees': ENGLISH_ONLY,
  'why-is-my-qibla-direction-wrong': ENGLISH_ONLY,
  'how-accurate-is-a-phone-speedometer': ENGLISH_ONLY,
  'speedometer-units-kmh-mph-knots': ENGLISH_ONLY,
};

const SILOS = 'onlinecompass|onlinebubblelevel|onlineqibla|onlinespeedometer';

/** /de/onlinecompass/blog/how-to-read-a-compass-dial/ → match */
const SILO_ARTICLE_PATH = new RegExp(`^/(?:([a-z]{2})/)?(?:${SILOS})/blog/([a-z0-9-]+)/?$`);

/** Us article ke liye available bhashayein (unknown slug = sab allowed). */
export function getArticleLangs(slug: string): readonly string[] | null {
  return ARTICLE_LANGS[slug] ?? null;
}

/**
 * Kya ye URL aisa localized article hai jisme us bhasha ka asli content nahi?
 * `true` mile to page noindex hoga aur hreflang cluster nahi milega.
 *
 * English (`/onlinecompass/blog/…/`) hamesha `false` — wo source version hai.
 */
export function isUntranslatedArticlePath(pathname: string): boolean {
  const clean = (pathname.split(/[?#]/, 1)[0] || '/').replace(/\/{2,}/g, '/');
  const match = SILO_ARTICLE_PATH.exec(clean);
  if (!match) return false;

  const lang = match[1] ?? 'en';
  const slug = match[2];
  const langs = getArticleLangs(slug);
  // Anjaan slug — kuch na badlo (Layout ko policy nahi banani).
  if (!langs) return false;

  return !langs.includes(lang);
}
