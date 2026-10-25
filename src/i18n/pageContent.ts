import type { LangCode } from './ui';
import type { PageCopy } from './pages/types';
import { page as en } from './pages/en';
import { page as de } from './pages/de';
import { fr, es } from './pages/fr-es';
import { ja, ko } from './pages/ja-ko';
import { nl, sv } from './pages/nl-sv';
import { it, pt } from './pages/it-pt';

export const pageContent: Record<LangCode, PageCopy> = {
  en,
  de,
  ja,
  fr,
  es,
  ko,
  nl,
  sv,
  it,
  pt,
};

export function getPageCopy(lang: LangCode): PageCopy {
  return pageContent[lang] || pageContent.en;
}
