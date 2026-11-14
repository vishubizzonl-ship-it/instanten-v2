/**
 * Shape of the localised speedometer tool-page copy (see speedometerProse.ts).
 *
 * `paras` may contain two markup conventions that CopyText turns into real
 * markup: `**bold**` → <strong> and `*italic*` → <em>. `list`, when present,
 * renders as a <ul> straight after `paras[listAt]` (default: the last
 * paragraph), which keeps the original bullet list where it belongs.
 */
export type SpeedSection = {
  h: string;
  paras: string[];
  list?: string[];
  listAt?: number;
};

export type SpeedProse = {
  /** H2 above the long-form copy. */
  aboutH: string;
  /** Opening paragraphs under the H2. */
  intro: string[];
  /** H3 sections, in order. */
  sections: SpeedSection[];
  /** H2 above the "latest guides" list. */
  guidesH: string;
  guides: { href: string; title: string; desc: string }[];
  /** "See all … guides →" link label. */
  guidesAll: string;
  /** H2 above the FAQ accordion. */
  faqH: string;
  faq: { q: string; a: string }[];
};
