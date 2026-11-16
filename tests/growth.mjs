/**
 * Growth suite — SEO/listing ke wo checks jo turn 59 me add kiye gaye kaam ko
 * lock karte hain:
 *
 *  1. 12 tool pages par query-style `<title>` aur lamba meta description.
 *  2. Compass ka meta description bhi 140+ characters.
 *  3. Tool pages ke "Related tools" se andar ke internal links (>= 8 cards,
 *     aur site-wide har tool ko >= 18 inlinks).
 *  4. Do naye silo blog posts (compass + bubble level) — page, sitemap,
 *     blog index listing, word count, FAQ.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite, stripTags } from './lib.mjs';

const TOOLS = [
  'base64-encoder',
  'color-palette',
  'css-grid-generator',
  'image-compressor',
  'json-formatter',
  'markdown-editor',
  'meta-tag-generator',
  'online-ruler',
  'password-generator',
  'qr-generator',
  'regex-tester',
  'word-counter',
];

/** Query-style title me in me se kam se kam ek intent phrase hona chahiye. */
const TITLE_HINTS = [
  'measure',
  'format',
  'count',
  'generate',
  'make',
  'compress',
  'test',
  'build',
  'encode',
  'preview',
  'secure',
  'online',
];

const NEW_POSTS = [
  { url: '/onlinecompass/blog/online-compass-without-an-app/', silo: '/onlinecompass/sitemap.xml', index: '/onlinecompass/blog/' },
  { url: '/onlinebubblelevel/blog/how-to-check-if-a-surface-is-level/', silo: '/onlinebubblelevel/sitemap.xml', index: '/onlinebubblelevel/blog/' },
];

const metaOf = (html, name) =>
  (html.match(new RegExp(`<meta[^>]+name="${name}"[^>]+content="([^"]*)"`, 'i')) || [, ''])[1] ||
  (html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+name="${name}"`, 'i')) || [, ''])[1];

export function run(pages, outDir) {
  const suite = createSuite('growth');
  const { check } = suite;

  // --- 1. Tool titles + descriptions --------------------------------------
  for (const slug of TOOLS) {
    const url = `/tools/${slug}/`;
    const html = pages.get(url);
    check(Boolean(html), `${url}: page build mein nahi hai`);
    if (!html) continue;

    const title = (html.match(/<title>([^<]*)<\/title>/i) || [, ''])[1];
    check(title.length >= 35, `${url}: title chhota hai (${title.length} chars) -> "${title}"`);
    check(title.length <= 60, `${url}: title 60 se lamba (${title.length}) -> "${title}"`);
    check(
      TITLE_HINTS.some((hint) => title.toLowerCase().includes(hint)),
      `${url}: title me koi query-intent phrase nahi -> "${title}"`
    );

    const desc = metaOf(html, 'description');
    check(desc.length >= 120, `${url}: meta description chhota hai (${desc.length} chars)`);
    check(desc.length <= 320, `${url}: meta description bahut lamba (${desc.length} chars)`);
  }

  // --- 2. Compass meta description ---------------------------------------
  const compass = pages.get('/onlinecompass/');
  if (compass) {
    const desc = metaOf(compass, 'description');
    check(desc.length >= 140, `/onlinecompass/: meta description chhota hai (${desc.length} chars)`);
  }

  // --- 3. Internal links ---------------------------------------------------
  const toolLinksOn = (html) => new Set([...html.matchAll(/href="\/tools\/([a-z0-9-]+)\/"/g)].map((m) => m[1]));
  for (const slug of TOOLS) {
    const html = pages.get(`/tools/${slug}/`) || '';
    const links = toolLinksOn(html);
    links.delete(slug);
    check(links.size >= 8, `/tools/${slug}/: related tools sirf ${links.size} (8+ chahiye)`);
  }

  for (const slug of TOOLS) {
    const target = `/tools/${slug}/`;
    let inlinks = 0;
    for (const [url, html] of pages) {
      if (url === target) continue;
      if (html.includes(`href="${target}"`)) inlinks += 1;
    }
    check(inlinks >= 18, `${target}: site-wide inlinks sirf ${inlinks} (18+ chahiye)`);
  }

  // --- 4. Naye silo blog posts -------------------------------------------
  for (const post of NEW_POSTS) {
    const html = pages.get(post.url);
    check(Boolean(html), `${post.url}: naya blog post build mein nahi hai`);
    if (!html) continue;

    const title = (html.match(/<title>([^<]*)<\/title>/i) || [, ''])[1];
    const desc = metaOf(html, 'description');
    check(title.length >= 30, `${post.url}: title bahut chhota (${title.length})`);
    check(desc.length >= 120, `${post.url}: description chhota (${desc.length})`);

    const words = stripTags(html).split(/\s+/).filter(Boolean).length;
    check(words >= 600, `${post.url}: content sirf ~${words} words (600+ chahiye)`);

    const questions = (html.match(/"@type"\s*:\s*"Question"/g) || []).length;
    check(questions >= 4, `${post.url}: FAQ ke ${questions} sawaal (4+ chahiye)`);

    const sitemapPath = join(outDir, post.silo.replace(/^\//, ''));
    const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : '';
    check(sitemap.includes(post.url), `${post.silo}: naya post sitemap me nahi hai`);

    const index = pages.get(post.index) || '';
    check(index.includes(post.url), `${post.index}: index par naya post listed nahi hai`);
  }

  return suite;
}
