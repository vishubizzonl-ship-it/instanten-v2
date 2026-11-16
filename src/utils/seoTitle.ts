/**
 * `<title>` ko SERP-friendly lambai par rakhta hai.
 *
 * Search results me ~60 characters ke baad title kat jaata hai. Isliye:
 *   1. agar title lamba hai to pehle brand suffix (" — Instanten") hata do —
 *      copy bilkul wahi rehti hai, sirf suffix jaata hai;
 *   2. phir bhi lamba ho to aakhri poore shabd par kaat do (beech me "…" nahi,
 *      kyunki results khud ellipsis lagate hain).
 *
 * Page ka `<h1>` aur visible copy is function se nahi badalte — sirf title tag.
 */
const MAX = 60;

export function seoTitle(raw: string, max: number = MAX): string {
  const title = (raw || '').replace(/\s+/g, ' ').trim();
  if (title.length <= max) return title;

  const withoutBrand = title.replace(/\s+[—–-]\s+(Instanten|instanten)$/i, '').trim();
  if (withoutBrand.length <= max) return withoutBrand;

  // Aakhri poore shabd par kaato — beech ka shabd kabhi nahi.
  const clipped = withoutBrand.slice(0, max);
  const lastSpace = clipped.lastIndexOf(' ');
  const cut = lastSpace > max * 0.6 ? clipped.slice(0, lastSpace) : clipped;
  return cut.replace(/[\s,;:—–-]+$/, '');
}
