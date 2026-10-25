import { ui, defaultLang, showDefaultLang, languages, type LangCode } from './ui';
import { uiExtra, type ExtraUiKey } from './uiExtra';
import { aboutUi } from './aboutUi';
import { contactUi } from './contactUi';
import { privacyUi } from './privacyUi';
import { termsUi } from './termsUi';

export type { LangCode };
export type UiKey = keyof (typeof ui)[typeof defaultLang] | ExtraUiKey | `about.${string}` | `contact.${string}` | `privacy.${string}` | `terms.${string}` | `blog.${string}`;

const localeCodes: Record<LangCode, string> = {
  en: 'en-US',
  de: 'de-DE',
  ja: 'ja-JP',
  fr: 'fr-FR',
  es: 'es-ES',
  ko: 'ko-KR',
  nl: 'nl-NL',
  sv: 'sv-SE',
  it: 'it-IT',
  pt: 'pt-PT',
};

export function getLangFromUrl(url: URL): LangCode {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as LangCode;
  return defaultLang;
}

export function stripLangFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    const rest = '/' + segments.slice(1).join('/');
    return rest === '/' ? '/' : rest;
  }
  return pathname || '/';
}

function getDictionary(lang: LangCode): Record<string, string> {
  return {
    ...ui[defaultLang],
    ...ui[lang],
    ...uiExtra[defaultLang],
    ...uiExtra[lang],
    ...aboutUi[defaultLang],
    ...aboutUi[lang],
    ...contactUi[defaultLang],
    ...contactUi[lang],
    ...privacyUi[defaultLang],
    ...privacyUi[lang],
    ...termsUi[defaultLang],
    ...termsUi[lang],
  };
}

export function t(lang: LangCode, key: UiKey): string {
  const dictionary = getDictionary(lang);
  return dictionary[key] ?? dictionary[String(key)] ?? String(key);
}

export function useTranslations(lang: LangCode) {
  const dictionary = getDictionary(lang);
  return function translate(key: UiKey): string {
    return dictionary[key] ?? dictionary[String(key)] ?? String(key);
  };
}

export function useTranslatedPath(lang: LangCode) {
  return function translatePath(path: string, targetLang: LangCode = lang): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (!showDefaultLang && targetLang === defaultLang) {
      return cleanPath === '/' ? '/' : cleanPath;
    }
    return cleanPath === '/' ? `/${targetLang}/` : `/${targetLang}${cleanPath}`;
  };
}

const localizedPrefixes = [
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/blog',
  '/tools',
  '/categories',
  '/category',
  '/pricing',
  '/makers',
  '/maker',
  '/tags',
  '/tag',
  '/submit',
  '/search',
  '/page',
];

export function isLocalizedPath(path: string): boolean {
  const clean = stripLangFromPath(path.split(/[?#]/, 1)[0] || '/');
  if (clean === '/') return true;
  const normalized = clean.replace(/\/+$/, '') || '/';
  return localizedPrefixes.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
  );
}

export function translatePathSafe(path: string, targetLang: LangCode = defaultLang): string {
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : path.slice(suffixIndex);
  const cleanPath = stripLangFromPath(pathname.startsWith('/') ? pathname : `/${pathname}`);

  if (isLocalizedPath(cleanPath) && targetLang !== defaultLang && !showDefaultLang) {
    return (cleanPath === '/' ? `/${targetLang}/` : `/${targetLang}${cleanPath}`) + suffix;
  }
  return cleanPath + suffix;
}

export function formatLocalizedDate(value: string | undefined, lang: LangCode): string {
  if (!value) return '';
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(localeCodes[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function localeCode(lang: LangCode): string {
  return localeCodes[lang];
}

export function getHreflangAlternates(pathname: string, baseUrl: string) {
  const cleanBase = baseUrl.replace(/\/$/, '');
  const baseRoute = stripLangFromPath(pathname.split(/[?#]/, 1)[0] || '/');
  const translate = useTranslatedPath(defaultLang);

  const items = (Object.keys(languages) as LangCode[]).map((code) => ({
    hreflang: code,
    href: `${cleanBase}${translate(baseRoute, code)}`,
  }));

  items.unshift({
    hreflang: 'x-default' as any,
    href: `${cleanBase}${translate(baseRoute, defaultLang)}`,
  });

  return items;
}
