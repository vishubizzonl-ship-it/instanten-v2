import type { LangCode } from './ui';
import type { HomeCopy } from './home/types';
import { home as en } from './home/en';
import { home as de } from './home/de';
import { home as ja } from './home/ja';
import { home as fr } from './home/fr';
import { home as es } from './home/es';
import { home as ko } from './home/ko';
import { home as nl } from './home/nl';
import { home as sv } from './home/sv';
import { home as it } from './home/it';
import { home as pt } from './home/pt';

export const homeContent: Record<LangCode, HomeCopy> = {
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

export function getHomeCopy(lang: LangCode): HomeCopy {
  return homeContent[lang] || homeContent.en;
}
