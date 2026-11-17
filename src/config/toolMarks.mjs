/**
 * Chaar sensor tools ke apne logo marks + favicons.
 *
 * Style: opendesignmd.com jaisa construction — 24×24 viewBox, filled squircle
 * (r 7.5/24), aur glyph `fill-rule="evenodd"` se andar knockout. Single colour
 * (`currentColor`), isliye light/dark dono me apne aap sahi dikhta hai.
 *
 * Yahan geometry hi source of truth hai: nav mark, favicon aur test — teeno isi
 * file se aate hain, taaki kabhi teen jagah alag na ho jayein.
 */

/** Squircle shell (24×24, corner radius ≈ 31%) — chaaron marks ka base. */
export const SQUIRCLE =
  'M7.5 0H16.5C22.65 0 24 1.35 24 7.5V16.5C24 22.65 22.65 24 16.5 24' +
  'H7.5C1.35 24 0 22.65 0 16.5V7.5C0 1.35 1.35 0 7.5 0Z';

/** Har tool ka knockout glyph (squircle ke andar). */
/** @type {Record<string, string>} */
export const TOOL_MARKS = {
  /** Compass: diamond ring (rose) + centre hole. */
  onlinecompass:
    'M12 4.9 19.1 12 12 19.1 4.9 12Z' +
    'M12 8.6 15.4 12 12 15.4 8.6 12Z' +
    'M12 10.7a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z',
  /** Bubble level: vial capsule + bubble. */
  onlinebubblelevel:
    'M7 9.4h10a2.6 2.6 0 0 1 0 5.2H7a2.6 2.6 0 0 1 0-5.2Z' +
    'M12 10.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z',
  /** Speedometer: half-ring dial + needle. */
  onlinespeedometer:
    'M4.4 12A7.6 7.6 0 0 1 19.6 12H16.9A4.9 4.9 0 0 0 7.1 12Z' +
    'M12 8.1 13.9 12.4H10.1Z',
  /** Qibla: Kaaba block with kiswa band and door. */
  onlineqibla:
    'M9.1 7.3h5.8a1.2 1.2 0 0 1 1.2 1.2v8.1a1.2 1.2 0 0 1-1.2 1.2H9.1' +
    'a1.2 1.2 0 0 1-1.2-1.2V8.5a1.2 1.2 0 0 1 1.2-1.2Z' +
    'M7.9 9.9h8.2v1.15H7.9Z' +
    'M11.2 12.7h1.6v4.9h-1.6Z',
};

/** Poora `d` attribute: squircle + glyph (evenodd se glyph andar se khud khulta hai). */
/** @param {string} slug @returns {string} */
export function toolMarkPath(slug) {
  return SQUIRCLE + (TOOL_MARKS[slug] ?? TOOL_MARKS.onlinecompass);
}

/** Favicon file ka path — har tool ka apna, silo ke root par. */
/** @param {string} slug @returns {string} */
export function toolFaviconPath(slug) {
  return `/${slug}/favicon.svg`;
}

/** Favicon SVG file ka content (server par <img>/<link> se load hota hai, isliye fixed colours). */
/** @param {string} slug @returns {string} */
export function toolFaviconSvg(slug) {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">\n' +
    '  <style>\n    path { fill: #29294B; }\n' +
    '    @media (prefers-color-scheme: dark) { path { fill: #F0F0F5; } }\n  </style>\n' +
    `  <path fill-rule="evenodd" d="${toolMarkPath(slug)}"/>\n</svg>\n`
  );
}
