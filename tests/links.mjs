/**
 * Internal links must resolve. A 404 inside the site is the cheapest SEO bug
 * to ship and the cheapest to catch — so it runs on every commit.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { createSuite, linksOf } from './lib.mjs';

/** Files served straight from disk (assets, xml, txt …). */
const isAsset = (path) => /\.[a-z0-9]+$/i.test(path) && !path.endsWith('.html');

export function run(pages, outDir) {
  const suite = createSuite('links');
  const { check } = suite;

  const resolve = (href) => {
    const path = href.split('#')[0].split('?')[0];
    if (!path.startsWith('/') || path.startsWith('//')) return 'external';
    if (existsSync(join(outDir, path))) return 'ok';
    const candidates = [
      path.endsWith('/') ? `${path}index.html` : `${path}/index.html`,
      `${path.replace(/\/$/, '')}.html`,
    ];
    if (isAsset(path) && candidates.some((c) => existsSync(join(outDir, c)))) return 'ok';
    if (pages.has(path) || pages.has(path.endsWith('/') ? path : `${path}/`)) return 'ok';
    if (candidates.some((c) => existsSync(join(outDir, c)))) return 'ok';
    return 'broken';
  };

  for (const [url, html] of pages) {
    for (const href of linksOf(html)) {
      const verdict = resolve(href);
      if (verdict === 'external') continue;
      // tag links point at encoded slugs; decode before reporting so the fix is obvious
      check(verdict === 'ok', `broken link :: ${url} -> ${href}`);
    }
  }

  return suite;
}
