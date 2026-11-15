import type { ToolBlogContent } from "./en";
import { en } from "./en";
import { es } from "./es";
import { ja } from "./ja";
import { fr } from "./fr";
import { de } from "./de";
import { pt } from "./pt";
import { ko } from "./ko";
import { it } from "./it";

export type { ToolBlogContent, BlogSection, BlogFaq } from "./en";

const all: Record<string, Record<string, ToolBlogContent>> = {
  en,
  es,
  ja,
  fr,
  de,
  pt,
  ko,
  it,
};

export function getToolBlog(
  tool: string,
  lang: string,
): ToolBlogContent | undefined {
  const langBlogs = all[lang] ?? all.en;
  return langBlogs?.[tool] ?? all.en?.[tool];
}

export function getBlogLanguages(): string[] {
  return Object.keys(all);
}
