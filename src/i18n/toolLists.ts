import type { LangCode } from './ui';
import { de } from './toolLists/de';
import { es } from './toolLists/es';
import { fr } from './toolLists/fr';
import { it } from './toolLists/it';
import { ja } from './toolLists/ja';
import { ko } from './toolLists/ko';
import { pt } from './toolLists/pt';

/**
 * Tool page ki do listein — features aur useCases — `src/content/tools/*.json`
 * mein English hain. Localized pages par English bullets duplicate content
 * banate hain, isliye har requested language ke liye native copy yahan hai.
 *
 * English default hai (JSON hi source of truth), baaki locales override karte
 * hain. Koi locale missing ho to page chupchaap English par gir jaata hai —
 * build kabhi fail nahi hota.
 */
export interface ToolListCopy {
  features: string[];
  useCases: string[];
}

export type ToolLists = Record<string, ToolListCopy>;

const localized: Partial<Record<LangCode, ToolLists>> = {
  de,
  es,
  fr,
  it,
  ja,
  ko,
  pt,
};

export function localizeToolLists(
  lang: LangCode,
  slug: string,
  fallback: ToolListCopy
): ToolListCopy {
  const copy = localized[lang]?.[slug];
  if (!copy) return fallback;
  return {
    features: copy.features.length ? copy.features : fallback.features,
    useCases: copy.useCases.length ? copy.useCases : fallback.useCases,
  };
}

/** Test/debug ke liye: kis-kis language ka data maujood hai. */
export const toolListLanguages = Object.keys(localized) as LangCode[];
