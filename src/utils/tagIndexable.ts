/**
 * Tag pages kab index honi chahiye — ek hi jagah se tay hota hai.
 *
 * Problem: 53 tags × 10 bhashayein = 530 pages. Unme se 45 tags par sirf
 * 1–2 tools hain — yaani page par ek hi card, jo tool page par bhi maujood hai.
 * Google ke liye ye "thin / near-duplicate" pages hain aur site ka overall
 * quality signal neeche karte hain.
 *
 * Faisla:
 *   - 2 ya kam tools  → page rehta hai (links/UX ke liye), par `noindex` aur
 *                       sitemap se bahar.
 *   - 3 ya zyada tools → index + sitemap (inme asli listing value hai).
 *
 * Threshold badalna ho to sirf yahi constant badlo.
 */
export const MIN_TOOLS_FOR_INDEX = 3;

export function isTagIndexable(toolCount: number): boolean {
  return toolCount >= MIN_TOOLS_FOR_INDEX;
}
