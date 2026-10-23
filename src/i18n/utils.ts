import { ui, defaultLang, showDefaultLang, languages, type LangCode } from './ui';

export function getLangFromUrl(url: URL): LangCode {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in ui) return maybeLang as LangCode;
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

export function useTranslations(lang: LangCode) {
  const localized: Record<string, string> = ui[lang] || ui[defaultLang];
  const fallback: Record<string, string> = ui[defaultLang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (key in localized ? localized[key] : fallback[key]) as string;
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

export function getHreflangAlternates(pathname: string, baseUrl: string) {
  const cleanBase = baseUrl.replace(/\/$/, '');
  const baseRoute = stripLangFromPath(pathname);
  const translate = useTranslatedPath(defaultLang);

  const items = (Object.keys(languages) as LangCode[]).map((code) => ({
    hreflang: code,
    href: `${cleanBase}${translate(baseRoute, code)}`,
  }));

  items.unshift({
    hreflang: 'x-default',
    href: `${cleanBase}${translate(baseRoute, defaultLang)}`,
  });

  return items;
}
