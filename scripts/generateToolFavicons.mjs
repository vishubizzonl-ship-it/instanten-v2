/**
 * Chaar sensor tools ke favicon files likhta hai: public/<slug>/favicon.svg
 *
 * Geometry `src/config/toolMarks.mjs` se aati hai — wahi file nav mark aur ye
 * favicon dono chalati hai, isliye dono kabhi alag nahi ho sakte.
 * `npm run build` se pehle chalta hai (prebuild), aur test bhi isi ko verify karta hai.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { TOOL_MARKS, toolFaviconSvg } from '../src/config/toolMarks.mjs';

/* Site ka apna favicon bhi isi geometry se banta hai (mark = "I"). */
writeFileSync('public/favicon.svg', toolFaviconSvg('instanten'), 'utf8');
console.log('· public/favicon.svg');

/* Chaar tool silos ke apne favicons. */
for (const slug of Object.keys(TOOL_MARKS)) {
  if (slug === 'instanten') continue;
  mkdirSync(`public/${slug}`, { recursive: true });
  writeFileSync(`public/${slug}/favicon.svg`, toolFaviconSvg(slug), 'utf8');
  console.log(`· public/${slug}/favicon.svg`);
}
