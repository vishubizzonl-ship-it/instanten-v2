/**
 * Chaar sensor tools ke logo marks + favicons — "letter in a rounded square".
 *
 * Construction opendesignmd.com ke logo jaisa hai: filled squircle (rounded
 * square) aur uske andar ek letter knockout. Unka logo copy nahi hota — sirf
 * construction apnayi hai.
 *
 * **Font wahi hai jo site ka logo use karta hai:** Montserrat Black Italic
 * (`src/components/Logo.astro` me font-weight 900 + font-style italic). Letters
 * font se outline paths me convert kiye gaye hain (fontTools), isliye SVG kahin
 * bhi chalti hai — Montserrat load hua ho ya na ho. Montserrat SIL OFL hai.
 *
 *   onlinecompass     -> C
 *   onlinebubblelevel -> B
 *   onlinespeedometer -> S
 *   onlineqibla       -> Q
 *
 * Cap-height 11.8 (24x24 box). Q ka tail baseline ke neeche jaata hai, isliye wo
 * poore bbox par centre hota hai. Letter mask se squircle me se kaat diya jaata
 * hai, isliye light/dark dono me `currentColor` sahi rehta hai.
 *
 * Yahan geometry hi source of truth hai: nav mark, favicon aur test — teeno isi
 * file se aate hain.
 */

/** Squircle shell (24x24, corner radius ~31%). */
export const SQUIRCLE =
  'M7.5 0H16.5C22.65 0 24 1.35 24 7.5V16.5C24 22.65 22.65 24 16.5 24' +
  'H7.5C1.35 24 0 22.65 0 16.5V7.5C0 1.35 1.35 0 7.5 0Z';

/** Jis font se letters liye gaye — documentation + test ke liye. */
export const MARK_FONT = 'Montserrat Black Italic';

/**
 * Har tool ka letter aur uska filled glyph (Montserrat Black Italic ke outlines).
 *
 * @type {Record<string, {letter: string, path: string}>}
 */
export const TOOL_MARKS = {
  onlinecompass: {
    letter: 'C',
    path:
      'M11.84 18.17Q10.02 18.17 8.65 17.5Q7.29 16.84 6.54 15.65Q5.79 14.46 5.79 12.89Q5.79 11.34 6.34 10.04Q6.88 8.75 7.88 7.8Q8.87 6.86 10.24 6.34Q11.6 5.83 13.24 5.83Q14.94 5.83 16.26 6.44Q17.57 7.04 18.21 8.19L15.35 10.43Q14.98 9.77 14.39 9.41Q13.8 9.05 12.99 9.05Q12.06 9.05 11.33 9.51Q10.61 9.96 10.2 10.77Q9.8 11.58 9.8 12.64Q9.8 13.67 10.47 14.31Q11.13 14.95 12.23 14.95Q12.92 14.95 13.58 14.63Q14.25 14.31 14.86 13.58L17.2 15.83Q16.12 17.14 14.8 17.66Q13.47 18.17 11.84 18.17Z',
  },
  onlinebubblelevel: {
    letter: 'B',
    path:
      'M5.58 17.9 7.94 6.1H14.19Q16.3 6.1 17.36 6.83Q18.42 7.57 18.42 8.92Q18.42 9.94 17.86 10.68Q17.29 11.41 16.32 11.83Q17.07 12.17 17.49 12.75Q17.9 13.33 17.9 14.14Q17.9 15.44 17.15 16.27Q16.4 17.11 15.15 17.5Q13.9 17.9 12.39 17.9ZM10.04 15.12H12.61Q13.2 15.12 13.58 14.85Q13.96 14.58 13.96 14.04Q13.96 13.65 13.66 13.46Q13.37 13.26 12.98 13.26H10.42ZM10.94 10.63H12.96Q13.65 10.63 13.96 10.36Q14.28 10.08 14.28 9.61Q14.28 9.24 14 9.06Q13.72 8.88 13.23 8.88H11.29Z',
  },
  onlinespeedometer: {
    letter: 'S',
    path:
      'M11.18 18.17Q9.6 18.17 8.26 17.83Q6.92 17.5 6.07 16.97L7.61 14.04Q8.6 14.61 9.61 14.87Q10.61 15.14 11.59 15.14Q12.36 15.14 12.76 14.95Q13.15 14.76 13.15 14.44Q13.15 14.12 12.75 13.95Q12.35 13.77 11.71 13.62Q11.06 13.47 10.35 13.26Q9.63 13.05 8.99 12.7Q8.35 12.35 7.95 11.76Q7.54 11.17 7.54 10.26Q7.54 8.92 8.26 7.92Q8.97 6.93 10.31 6.38Q11.65 5.83 13.51 5.83Q14.82 5.83 15.96 6.09Q17.1 6.35 17.93 6.84L16.49 9.74Q15.78 9.3 14.95 9.08Q14.12 8.86 13.26 8.86Q12.38 8.86 11.95 9.11Q11.52 9.35 11.52 9.66Q11.52 9.98 11.92 10.16Q12.33 10.35 12.97 10.49Q13.61 10.63 14.33 10.84Q15.06 11.04 15.7 11.38Q16.34 11.71 16.75 12.29Q17.15 12.86 17.15 13.77Q17.15 15.08 16.43 16.07Q15.7 17.06 14.36 17.61Q13.02 18.17 11.18 18.17Z',
  },
  onlineqibla: {
    letter: 'Q',
    path:
      'M14.43 19.53Q12.66 19.53 11.38 18.8Q10.11 18.08 9.27 16.58Q7.4 16.09 6.34 14.75Q5.29 13.41 5.29 11.54Q5.29 9.97 5.84 8.68Q6.39 7.39 7.38 6.45Q8.38 5.5 9.74 4.99Q11.11 4.47 12.72 4.47Q14.56 4.47 15.9 5.15Q17.24 5.82 17.98 7.01Q18.71 8.2 18.71 9.75Q18.71 11.38 18.11 12.73Q17.51 14.08 16.42 15.03Q15.32 15.97 13.87 16.43Q14.04 16.61 14.27 16.69Q14.49 16.76 14.8 16.76Q15.73 16.76 16.55 16.04L17.98 18.35Q17.34 18.94 16.42 19.23Q15.49 19.53 14.43 19.53ZM11.61 13.59Q12.59 13.59 13.28 13.1Q13.97 12.6 14.33 11.77Q14.7 10.95 14.7 9.99Q14.7 8.96 14.09 8.33Q13.48 7.69 12.39 7.69Q11.41 7.69 10.72 8.19Q10.03 8.69 9.67 9.51Q9.3 10.32 9.3 11.3Q9.3 12.33 9.92 12.96Q10.53 13.59 11.61 13.59Z',
  },
};

/** Har mark ka mask id — ek page par unique hona chahiye. */
/** @param {string} slug @returns {string} */
export function toolMarkId(slug) {
  return 'tool-mark-' + slug;
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
    '<mask id="' + id + '"><rect width="24" height="24" fill="#fff"/>' +
    '<path d="' + mark.path + '" fill="#000"/></mask>' +
    '<path fill-rule="evenodd" mask="url(#' + id + ')" d="' + SQUIRCLE + '"/></svg>'
  );
}

/** Favicon file ka path — har tool ka apna, silo ke root par. */
/** @param {string} slug @returns {string} */
export function toolFaviconPath(slug) {
  return '/' + slug + '/favicon.svg';
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
    '  <mask id="' + id + '"><rect width="24" height="24" fill="#fff"/>' +
    '<path d="' + mark.path + '" fill="#000"/></mask>\n' +
    '  <path class="sq" fill-rule="evenodd" mask="url(#' + id + ')" d="' + SQUIRCLE + '"/>\n</svg>\n'
  );
}
