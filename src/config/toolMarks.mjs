/**
 * Chaar sensor tools ke logo marks + favicons — "letter in a rounded square".
 *
 * Construction wahi hai jo opendesignmd.com ka logo use karta hai: ek filled
 * squircle (rounded square) aur uske andar ek letter knockout. Unka logo copy
 * nahi hota — sirf yahi construction apnayi hai, aur chaaron letters tools ke
 * naam se liye hain:
 *
 *   onlinecompass     → C
 *   onlinebubblelevel → B
 *   onlinespeedometer → S
 *   onlineqibla       → Q
 *
 * Har letter ek stroked path hai (cap height ≈ 11.6 in a 24×24 box) aur mask se
 * squircle me se kaat diya jaata hai, isliye light/dark dono me `currentColor`
 * apne aap sahi dikhta hai.
 *
 * Yahan geometry hi source of truth hai: nav mark, favicon aur test — teeno isi
 * file se aate hain.
 */

/** Squircle shell (24×24, corner radius ≈ 31%). */
export const SQUIRCLE =
  'M7.5 0H16.5C22.65 0 24 1.35 24 7.5V16.5C24 22.65 22.65 24 16.5 24' +
  'H7.5C1.35 24 0 22.65 0 16.5V7.5C0 1.35 1.35 0 7.5 0Z';

/**
 * Har tool ka letter aur uska stroked glyph.
 * `w` = stroke width (letter ki motai), vahi visual weight deta hai.
 *
 * @type {Record<string, {letter: string, path: string, w: number}>}
 */
export const TOOL_MARKS = {
  onlinecompass: {
    letter: 'C',
    path: 'M17.2 8.5A5.6 5.6 0 1 0 17.2 15.5',
    w: 2.6,
  },
  onlinebubblelevel: {
    letter: 'B',
    path: 'M8.9 6.6v10.8M8.9 6.6h3.5a2.7 2.7 0 0 1 0 5.4H8.9M8.9 12h3.9a2.7 2.7 0 0 1 0 5.4H8.9',
    w: 2.35,
  },
  onlinespeedometer: {
    letter: 'S',
    path: 'M16.3 8.3C14.6 6.3 9 6.4 9 9.9c0 3.1 6.6 2.1 6.6 5.1 0 3.2-5.6 2.8-7.2 0.8',
    w: 2.5,
  },
  onlineqibla: {
    letter: 'Q',
    path: 'M17 11.6a5.4 5.4 0 1 1-5.4-5.4 5.4 5.4 0 0 1 5.4 5.4ZM14.9 14.9 18.5 18.6',
    w: 2.5,
  },
};

/** Har mark ka mask id — ek page par unique hona chahiye. */
/** @param {string} slug @returns {string} */
export function toolMarkId(slug) {
  return `tool-mark-${slug}`;
}

/**
 * Nav/header ke liye inline SVG (background = currentColor, letter = knockout).
 *
 * @param {string} slug
 * @returns {string}
 */
export function toolMarkSvg(slug) {
  const mark = TOOL_MARKS[slug] ?? TOOL_MARKS.onlinecompass;
  const id = toolMarkId(slug);
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ' +
    'aria-hidden="true" style="display:block;width:100%;height:100%">' +
    `<mask id="${id}"><rect width="24" height="24" fill="#fff"/>` +
    `<path d="${mark.path}" fill="none" stroke="#000" stroke-width="${mark.w}" ` +
    'stroke-linecap="round" stroke-linejoin="round"/></mask>' +
    `<path fill-rule="evenodd" mask="url(#${id})" d="${SQUIRCLE}"/></svg>`
  );
}

/** Favicon file ka path — har tool ka apna, silo ke root par. */
/** @param {string} slug @returns {string} */
export function toolFaviconPath(slug) {
  return `/${slug}/favicon.svg`;
}

/** Favicon SVG (browser ise file ki tarah load karta hai, isliye fixed colours + dark mode). */
/** @param {string} slug @returns {string} */
export function toolFaviconSvg(slug) {
  const mark = TOOL_MARKS[slug] ?? TOOL_MARKS.onlinecompass;
  const id = toolMarkId(slug);
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">\n' +
    '  <style>\n    path.sq { fill: #29294B; }\n' +
    '    @media (prefers-color-scheme: dark) { path.sq { fill: #F0F0F5; } }\n  </style>\n' +
    `  <mask id="${id}"><rect width="24" height="24" fill="#fff"/>` +
    `<path d="${mark.path}" fill="none" stroke="#000" stroke-width="${mark.w}" ` +
    'stroke-linecap="round" stroke-linejoin="round"/></mask>\n' +
    `  <path class="sq" fill-rule="evenodd" mask="url(#${id})" d="${SQUIRCLE}"/>\n</svg>\n`
  );
}
