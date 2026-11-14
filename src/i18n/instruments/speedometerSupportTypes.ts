/**
 * Shape of the localised copy for the speedometer silo pages (about, blog
 * index, contact). Privacy and terms come from the shared supportCopy table,
 * so only the parts that genuinely differ for a speedometer live here.
 */
export type SpeedSiloCopy = {
  /** "Back to Speedometer" link label. */
  back: string;
  /** Localised <title> for the speedometer tool page. */
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
  /** Link label used by the {accuracyGuide} token. */
  guideLabel: string;
  blogTitle: string;
  blogDesc: string;
  blogIntro: string;
  blogIntro2: string;
  blogExtra: string[];
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
