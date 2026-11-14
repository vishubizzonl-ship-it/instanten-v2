/**
 * Shape of the localised copy for the Qibla silo pages (about, blog index,
 * contact). Privacy and terms reuse the shared policy in supportCopy.ts and
 * only add the Qibla-specific clauses from qiblaLegal.ts.
 */
export type QiblaSiloCopy = {
  /** "Back to Qibla Finder" link label. */
  back: string;
  /** Localised <title> for the Qibla tool page. */
  toolTitle: string;
  /** Localised meta description for the tool page. */
  toolDesc: string;
  /** Localised og:image:alt for the tool page. */
  ogAlt: string;
  /** Local-language keyword list for the tag. */
  keywords: string;
  aboutTitle: string;
  aboutDesc: string;
  about: {
    whatH: string;
    what: string[];
    howH: string;
    how: string[];
    missionH: string;
    mission: string[];
    featuresH: string;
    features: string[];
    whoH: string;
    who: string[];
    accuracyH: string;
    accuracy: string[];
  };
  blogTitle: string;
  blogDesc: string;
  /** Intro paragraphs above the post list. */
  blogIntro: string[];
  posts: { href: string; date: string; title: string; desc: string }[];
  contact: {
    contactTitle: string;
    contactDesc: string;
    contactIntro: string;
    howH: string;
    how: string[];
    fixesH: string;
    fixes: { h: string; p: string }[];
    tellH: string;
    tell: string[];
    emailH: string;
    emailPre: string;
    emailPost: string;
    sendH: string;
    extraH: string;
    extra: string[];
    responseH: string;
    response: string[];
    guidesPre: string;
    guidesLink: string;
    guidesPost: string;
  };
};
