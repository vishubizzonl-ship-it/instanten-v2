/**
 * Chaar sensor tools ke logo marks + favicons — "letter in a rounded square".
 *
 * Construction opendesignmd.com ke logo jaisa hai: filled pure-black squircle
 * (rounded square) aura uske andar **letter + full stop** knockout (unke "D."
 * jaisa). Unka logo copy nahi hota — sirf construction apnayi hai.
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
  /** Site ka apna mark — "INSTANTEN" logo ka pehla akshar. */
  instanten: {
    letter: 'I',
    path:
      'M7.52 17.85 9.64 7.25H13.22L11.10 17.85ZM14.59 15.35H15.85A0.62 0.62 0 0 1 16.47 15.97V17.23A0.62 0.62 0 0 1 15.85 17.85H14.59A0.62 0.62 0 0 1 13.97 17.23V15.97A0.62 0.62 0 0 1 14.59 15.35Z',
  },
  onlinecompass: {
    letter: 'C',
    path:
      'M10.23 18.09Q8.59 18.09 7.36 17.49Q6.14 16.89 5.46 15.82Q4.79 14.76 4.79 13.35Q4.79 11.95 5.28 10.79Q5.77 9.62 6.67 8.77Q7.56 7.93 8.79 7.46Q10.01 7.00 11.48 7.00Q13.01 7.00 14.19 7.55Q15.37 8.09 15.95 9.12L13.38 11.14Q13.04 10.55 12.51 10.22Q11.98 9.90 11.26 9.90Q10.42 9.90 9.77 10.30Q9.12 10.71 8.76 11.44Q8.39 12.17 8.39 13.12Q8.39 14.04 8.99 14.62Q9.59 15.20 10.57 15.20Q11.20 15.20 11.79 14.91Q12.39 14.62 12.94 13.97L15.04 15.98Q14.07 17.16 12.88 17.63Q11.7 18.09 10.23 18.09ZM17.33 15.35H18.59A0.62 0.62 0 0 1 19.21 15.97V17.23A0.62 0.62 0 0 1 18.59 17.85H17.33A0.62 0.62 0 0 1 16.71 17.23V15.97A0.62 0.62 0 0 1 17.33 15.35Z',
  },
  onlinebubblelevel: {
    letter: 'B',
    path:
      'M4.60 17.85 6.72 7.25H12.34Q14.23 7.25 15.19 7.90Q16.14 8.56 16.14 9.77Q16.14 10.70 15.63 11.36Q15.12 12.02 14.25 12.39Q14.93 12.70 15.30 13.22Q15.67 13.74 15.67 14.47Q15.67 15.63 15.00 16.38Q14.32 17.13 13.20 17.49Q12.08 17.85 10.72 17.85ZM8.61 15.35H10.92Q11.45 15.35 11.79 15.10Q12.13 14.86 12.13 14.38Q12.13 14.03 11.86 13.85Q11.60 13.68 11.25 13.68H8.95ZM9.42 11.32H11.23Q11.85 11.32 12.13 11.07Q12.41 10.82 12.41 10.39Q12.41 10.06 12.16 9.90Q11.91 9.74 11.48 9.74H9.73ZM17.51 15.35H18.77A0.62 0.62 0 0 1 19.39 15.97V17.23A0.62 0.62 0 0 1 18.77 17.85H17.51A0.62 0.62 0 0 1 16.89 17.23V15.97A0.62 0.62 0 0 1 17.51 15.35Z',
  },
  onlinespeedometer: {
    letter: 'S',
    path:
      'M9.64 18.09Q8.21 18.09 7.01 17.78Q5.80 17.48 5.05 17.01L6.43 14.38Q7.32 14.89 8.22 15.13Q9.12 15.36 10.00 15.36Q10.70 15.36 11.05 15.20Q11.41 15.03 11.41 14.74Q11.41 14.45 11.04 14.29Q10.68 14.14 10.11 14.00Q9.53 13.86 8.89 13.67Q8.24 13.48 7.67 13.17Q7.09 12.86 6.73 12.33Q6.36 11.80 6.36 10.99Q6.36 9.77 7.01 8.88Q7.65 7.99 8.86 7.49Q10.06 7.00 11.73 7.00Q12.91 7.00 13.93 7.24Q14.95 7.47 15.69 7.91L14.41 10.52Q13.77 10.12 13.02 9.93Q12.27 9.73 11.50 9.73Q10.71 9.73 10.32 9.95Q9.94 10.17 9.94 10.44Q9.94 10.73 10.30 10.89Q10.67 11.06 11.24 11.19Q11.82 11.32 12.47 11.50Q13.12 11.68 13.69 11.98Q14.27 12.29 14.63 12.80Q15.00 13.32 15.00 14.14Q15.00 15.32 14.34 16.20Q13.69 17.09 12.49 17.59Q11.29 18.09 9.64 18.09ZM17.07 15.35H18.33A0.62 0.62 0 0 1 18.95 15.97V17.23A0.62 0.62 0 0 1 18.33 17.85H17.07A0.62 0.62 0 0 1 16.45 17.23V15.97A0.62 0.62 0 0 1 17.07 15.35Z',
  },
  onlineqibla: {
    letter: 'Q',
    path:
      'M12.55 20.53Q10.96 20.53 9.82 19.87Q8.67 19.22 7.92 17.88Q6.24 17.44 5.29 16.23Q4.34 15.03 4.34 13.35Q4.34 11.94 4.84 10.78Q5.33 9.62 6.22 8.77Q7.11 7.93 8.34 7.46Q9.57 7.00 11.02 7.00Q12.67 7.00 13.88 7.61Q15.08 8.21 15.74 9.28Q16.40 10.35 16.40 11.74Q16.40 13.21 15.86 14.42Q15.32 15.63 14.34 16.48Q13.35 17.33 12.05 17.74Q12.20 17.91 12.41 17.97Q12.61 18.04 12.88 18.04Q13.72 18.04 14.46 17.39L15.75 19.47Q15.17 20.00 14.34 20.26Q13.50 20.53 12.55 20.53ZM10.02 15.20Q10.90 15.20 11.52 14.75Q12.14 14.30 12.47 13.56Q12.79 12.82 12.79 11.95Q12.79 11.03 12.25 10.46Q11.70 9.90 10.72 9.90Q9.84 9.90 9.22 10.34Q8.60 10.79 8.27 11.52Q7.95 12.26 7.95 13.14Q7.95 14.06 8.50 14.63Q9.05 15.20 10.02 15.20ZM17.77 15.35H19.03A0.62 0.62 0 0 1 19.65 15.97V17.23A0.62 0.62 0 0 1 19.03 17.85H17.77A0.62 0.62 0 0 1 17.15 17.23V15.97A0.62 0.62 0 0 1 17.77 15.35Z',
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
    '  <style>\n    path.sq { fill: #000000; }\n' +
    '    @media (prefers-color-scheme: dark) { path.sq { fill: #FFFFFF; } }\n  </style>\n' +
    '  <mask id="' + id + '"><rect width="24" height="24" fill="#fff"/>' +
    '<path d="' + mark.path + '" fill="#000"/></mask>\n' +
    '  <path class="sq" fill-rule="evenodd" mask="url(#' + id + ')" d="' + SQUIRCLE + '"/>\n</svg>\n'
  );
}
