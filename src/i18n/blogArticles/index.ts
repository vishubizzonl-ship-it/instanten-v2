import type { LangCode } from '../ui';
import type { BlogArticleData, BlogArticlesBySlug } from './types';
import { enArticles } from './en';
import { deArticles } from './de';
import { jaArticles } from './ja';
import { frArticles } from './fr';
import { esArticles } from './es';
import { koArticles } from './ko';
import { nlArticles } from './nl';
import { svArticles } from './sv';
import { itArticles } from './it';
import { ptArticles } from './pt';

export type { BlogArticleSection, BlogArticleData, BlogArticlesBySlug } from './types';

export const blogArticles: Record<LangCode, BlogArticlesBySlug> = {
  en: enArticles,
  de: deArticles,
  ja: jaArticles,
  fr: frArticles,
  es: esArticles,
  ko: koArticles,
  nl: nlArticles,
  sv: svArticles,
  it: itArticles,
  pt: ptArticles,
};

export function getBlogArticle(slug: string, lang: LangCode): BlogArticleData | undefined {
  return blogArticles[lang]?.[slug] || blogArticles.en?.[slug];
}
