/**
 * Tool page ka "Guides" block — har tool ke apne blog articles ke cards.
 *
 * Har card tool ke APNE sub-page par jaata hai (`/<tool>/blog/<slug>/`,
 * locale ke saath `/<lang>/<tool>/blog/<slug>/`), site ke global blog par
 * nahi. Isliye source bhi per-tool copy hai: qibla/bubble ke prose mein
 * guides pehle se hain, compass ke `supportCopy`, speedometer ke
 * `speedometerSupport.posts` mein.
 */
import { supportCopy } from '../supportCopy';
import { qiblaProse } from './qiblaProse';
import { bubbleProse } from './bubbleProse';
import { speedometerSupport } from './speedometerSupport';

export type ToolGuide = { href: string; title: string; desc: string };
export type ToolGuides = { heading: string; allLabel: string; items: ToolGuide[] };

/** Supports jinke paas apni translated copy hai; baaki English par fall back. */
const COPY_LANGS = ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];

function pick<T>(map: Record<string, T>, lang: string): T {
  return (COPY_LANGS.includes(lang) ? map[lang] : undefined) ?? map.en;
}

/** Prefix-free EN href (`/onlineqibla/blog/x/`) → locale ke saath href. */
export function localeHref(href: string, lang: string): string {
  if (!href.startsWith('/') || lang === 'en') return href;
  return `/${lang}${href}`;
}

export function getToolGuides(slug: string, lang: string): ToolGuides {
  const allLabel = lang === 'en' ? 'All guides' : 'All guides';

  if (slug === 'onlineqibla') {
    const copy = pick(qiblaProse as any, lang) as any;
    return { heading: copy.guidesH ?? 'Qibla guides', allLabel, items: copy.guides ?? [] };
  }
  if (slug === 'onlinebubblelevel') {
    const copy = pick(bubbleProse as any, lang) as any;
    return { heading: copy.guidesH ?? 'Bubble level guides', allLabel, items: copy.guides ?? [] };
  }
  if (slug === 'onlinespeedometer') {
    const copy = pick(speedometerSupport as any, lang) as any;
    return { heading: copy.blogTitle ?? 'Speedometer guides', allLabel, items: copy.posts ?? [] };
  }
  // compass (aur koi bhi naya instrument jo supportCopy use kare)
  const copy = pick(supportCopy as any, lang) as any;
  return {
    heading: copy?.blog?.title ?? 'Compass guides',
    allLabel,
    items: copy?.blog?.posts ?? [],
  };
}

/**
 * Silo pages ka `<title>`: "Privacy Policy — Online Compass".
 *
 * Sirf page ka naam kaafi nahi tha (14 chars, SEO test 15+ maangta hai), aur
 * poora tool title (bubble ka 50+ chars) 70 se upar chala jaata hai — isliye
 * chhota layout-brand name.
 */
const SHORT_NAME: Record<string, Record<string, string>> = {
  en: { onlinecompass: 'Online Compass', onlinebubblelevel: 'Bubble Level', onlinespeedometer: 'Speedometer', onlineqibla: 'Qibla Finder' },
  de: { onlinecompass: 'Online-Kompass', onlinebubblelevel: 'Wasserwaage', onlinespeedometer: 'Tachometer', onlineqibla: 'Qibla-Finder' },
  ja: { onlinecompass: 'オンラインコンパス', onlinebubblelevel: '水準器', onlinespeedometer: '速度計', onlineqibla: 'キブラ' },
  fr: { onlinecompass: 'Boussole en ligne', onlinebubblelevel: 'Niveau à bulle', onlinespeedometer: 'Tachymètre', onlineqibla: 'Qibla' },
  es: { onlinecompass: 'Brújula en línea', onlinebubblelevel: 'Nivel de burbuja', onlinespeedometer: 'Velocímetro', onlineqibla: 'Alquibla' },
  ko: { onlinecompass: '온라인 나침반', onlinebubblelevel: '수평계', onlinespeedometer: '속도계', onlineqibla: '키블라' },
  nl: { onlinecompass: 'Online kompas', onlinebubblelevel: 'Waterpas', onlinespeedometer: 'Snelheidsmeter', onlineqibla: 'Qibla' },
  sv: { onlinecompass: 'Online kompass', onlinebubblelevel: 'Vattenpass', onlinespeedometer: 'Hastighetsmätare', onlineqibla: 'Qibla' },
  it: { onlinecompass: 'Bussola online', onlinebubblelevel: 'Livella', onlinespeedometer: 'Tachimetro', onlineqibla: 'Qibla' },
  pt: { onlinecompass: 'Bússola online', onlinebubblelevel: 'Nível de bolha', onlinespeedometer: 'Velocímetro', onlineqibla: 'Alquibla' },
};

export function shortToolName(slug: string, lang: string): string {
  return SHORT_NAME[lang]?.[slug] ?? SHORT_NAME.en[slug] ?? slug;
}

export function siloTitle(slug: string, pageTitle: string, lang: string): string {
  return `${pageTitle} — ${shortToolName(slug, lang)}`;
}
