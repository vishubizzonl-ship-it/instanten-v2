/**
 * Tag ka URL slug — ek hi jagah se.
 *
 * Pehle slug seedha `tag.toLowerCase()` tha, isliye "instant convert" jaisa
 * space wala tag `/tag/instant%20convert/` ban jaata tha: URL me space,
 * sitemap me %20, aur kai hosts par ye bilkul kaam nahi karta. Ab har tag ka
 * ek saaf slug banta hai — `/tag/instant-convert/`.
 *
 * Filtering (kaunsa tool kis tag par hai) abhi bhi asli tag naam se hoti hai,
 * sirf URL badalta hai.
 */
export function tagSlug(tag: string): string {
  const slug = tag
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // accents hata do
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'tag';
}

/** Slug se asli tag naam dhoondo (filter ke liye). */
export function tagFromSlug<T extends string>(tags: readonly T[], slug: string): T | undefined {
  return tags.find((tag) => tagSlug(tag) === slug);
}
