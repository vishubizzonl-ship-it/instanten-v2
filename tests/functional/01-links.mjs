/** 01 — poora link graph: har internal link/asset ka target hai ya nahi. */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { DIST, reporter } from './harness.mjs';

const r = reporter();
const pages = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['_astro', 'pagefind'].includes(e.name)) continue;
      walk(p);
    } else if (e.name.endsWith('.html')) pages.push(p);
  }
})(DIST);

const rel = (p) => '/' + path.relative(DIST, p).replace(/\\/g, '/').replace(/\/index\.html$/, '/').replace(/^index\.html$/, '/');
const fileFor = (urlPath) => {
  const clean = urlPath.split('#')[0].split('?')[0];
  const p = clean.replace(/^\//, '');
  if (clean.endsWith('/') || clean === '') return path.join(DIST, p, 'index.html');
  const direct = path.join(DIST, p);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  return path.join(DIST, p, 'index.html');
};

const brokenLinks = new Map();
const brokenAssets = new Map();
const badAnchors = new Map();
const seen = new Set();
let linkCount = 0;
let assetCount = 0;

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const from = rel(page);
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

  for (const m of html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>/g)) {
    const href = m[1];
    if (!href || /^(mailto:|tel:|javascript:|data:)/.test(href)) continue;
    let urlPath = href;
    if (/^https?:\/\//.test(href)) {
      if (!href.startsWith('https://instanten.com')) continue;
      urlPath = href.slice('https://instanten.com'.length) || '/';
    }
    if (!urlPath.startsWith('/')) continue;
    linkCount++;
    const key = from + ' -> ' + href;
    if (seen.has(key)) continue;
    seen.add(key);
    const [p, hash] = urlPath.split('#');
    const target = fileFor(p);
    if (!existsSync(target)) {
      brokenLinks.set(href, from);
      continue;
    }
    if (hash) {
      const tIds = new Set([...readFileSync(target, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
      if (!tIds.has(hash) && !ids.has(hash)) badAnchors.set(href, from);
    }
  }

  for (const m of html.matchAll(/<(?:img|script|link)\b[^>]*(?:src|href)="([^"]*)"[^>]*>/g)) {
    const src = m[1];
    if (!src || /^(https?:|data:|mailto:)/.test(src) || src.startsWith('//')) continue;
    if (!src.startsWith('/')) continue;
    assetCount++;
    const f = path.join(DIST, src.split('?')[0].replace(/^\//, ''));
    if (!existsSync(f)) brokenAssets.set(src, from);
  }
}

r.section('01 — Link graph');
r.check('saare internal links ka target maujood hai', brokenLinks.size === 0,
  `${linkCount} links, ${pages.length} pages${brokenLinks.size ? ' :: ' + [...brokenLinks].slice(0, 8).map(([h, f]) => `${h} @ ${f}`).join(' | ') : ''}`);
r.check('saare local assets maujood hain', brokenAssets.size === 0,
  `${assetCount} refs${brokenAssets.size ? ' :: ' + [...brokenAssets].slice(0, 8).map(([s, f]) => `${s} @ ${f}`).join(' | ') : ''}`);
r.check('#anchor targets exist karte hain', badAnchors.size === 0,
  badAnchors.size ? [...badAnchors].slice(0, 8).map(([h, f]) => `${h} @ ${f}`).join(' | ') : 'sab anchors resolve');

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
