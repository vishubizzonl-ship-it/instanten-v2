export interface BlogArticleSection {
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
  quote?: string;
}

export interface BlogArticleData {
  byline: string;
  sections: BlogArticleSection[];
  keyTakeaways?: string[];
  takeawaysTitle?: string;
  callToAction?: {
    heading: string;
    text: string;
    contactLabel: string;
  };
}

export type BlogArticlesBySlug = Record<string, BlogArticleData>;
