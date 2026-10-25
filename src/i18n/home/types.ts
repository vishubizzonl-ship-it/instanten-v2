export interface HomeCopyLink {
  label: string;
  href: string;
}

export interface HomeCopyBlock {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: HomeCopyLink[];
}

export interface HomeCopy {
  howTitle: string;
  steps: Array<{ title: string; body: string }>;
  trustTitle: string;
  trustLead: string;
  trustCards: Array<{ title: string; body: string }>;
  explainTitle: string;
  explainLead: string;
  blocks: HomeCopyBlock[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
}
