/**
 * Qibla-specific clauses for the Privacy and Terms pages.
 *
 * The legal pages themselves are shared with the rest of the site
 * (src/i18n/supportCopy.ts), but a Qibla finder needs clauses a compass does
 * not: what the page does with your location, the IP fallback when the location
 * prompt is blocked, and why a compass bearing is never a surveyed direction.
 * These strings are spliced into the shared section list, so the numbered
 * sections stay identical across the whole site.
 */
export type QiblaLegal = {
  /** Heading of the extra privacy section, numbered "1a" to keep the order intact. */
  privacy1aH: string;
  privacy1a: string[];
  /** Heading of the second extra privacy section, numbered "1b". */
  privacy1bH: string;
  privacy1b: string[];
  /** Heading of the extra section slotted in after "2. Cookies", numbered "2a". */
  privacy2aH: string;
  privacy2a: string[];
  /** Terms intro, naming the Qibla finder instead of "the service". */
  termsIntro: string;
  /** First paragraph of "1. Use of the Service". */
  termsUse: string;
  /** Caveats inserted into "2. Accuracy Disclaimer", after the bullet list. */
  termsAccuracy: string[];
};
