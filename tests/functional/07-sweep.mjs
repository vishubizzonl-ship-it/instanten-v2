/** 07 — Poore site ka sweep: har page type ka ek sample, JS errors + basics. */
import { open, reporter } from './harness.mjs';
import { readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const r = reporter();
r.section('07 — Page sweep (har page type)');

const ROUTES = [
  '/', '/de/', '/ja/', '/ko/', '/pt/',
  '/about/', '/contact/', '/terms/', '/privacy-policy/', '/privacy/',
  '/submit/', '/search/', '/tags/', '/tag/json/', '/tag/instant-help/',
  '/blog/', '/blog/page/2/', '/blog/complete-guide-to-instanten-tools-and-instant-online-workflows/',
  '/de/blog/', '/ja/tags/', '/ko/submit/',
  '/tools/json-formatter/', '/de/tools/json-formatter/', '/ja/tools/word-counter/',
  '/onlinecompass/', '/de/onlinecompass/', '/onlinebubblelevel/', '/onlinespeedometer/', '/onlineqibla/',
  '/onlinecompass/blog/', '/onlinecompass/contact/', '/onlinecompass/faq/'.replace('/faq/', '/'),
  '/compassinstant/',
  '/404.html', '/500.html',
  '/onlinecompass/404.html',
];

let errors = 0;
for (const route of ROUTES) {
  let p;
  try {
    p = await open(route);
  } catch (e) {
    r.fail(`${route}: page khulta hai`, e.message);
    errors += 1;
    continue;
  }
  const scriptErrs = p.errors;
  const h1 = p.$('h1');
  const hasNav = !!p.$('header');
  const hasFooter = !!p.$('footer');
  const themeBtn = !!p.$('[data-cf-theme-toggle], [data-cf-theme-toggle]');
  const searchBtn = !!p.$('[data-search-open]');
  // /privacy/ = noindex redirect stub (jaan-boojh kar minimal), sensor silos ka
  // apna header/footer hai (global site chrome nahi) — dono expected hain.
  const isStub = route === '/privacy/';
  const isSilo = /^\/(de\/)?(onlinecompass|onlinebubblelevel|onlinespeedometer|onlineqibla)\//.test(route) || route === '/compassinstant/';
  const ok = scriptErrs.length === 0 && (isStub || !!h1) && (isStub || isSilo || (hasNav && hasFooter));
  if (!ok) errors += 1;
  const detail = [
    scriptErrs.length ? `JS: ${scriptErrs.slice(0, 2).join(' | ').slice(0, 120)}` : 'JS clean',
    h1 ? `h1="${(h1.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 34)}"` : 'h1 GAYAB',
    hasNav ? '' : (isStub ? 'stub' : isSilo ? 'silo-nav' : 'header GAYAB'),
    hasFooter ? '' : (isStub ? '' : isSilo ? '' : 'footer GAYAB'),
    isSilo ? `siloLinks=${p.$$('a[href^="/online"], a[href="/"], a[href^="/tools/"]').length}` : '',
    searchBtn ? 'search✓' : 'search✗',
  ].filter(Boolean).join(' · ');
  ok ? r.ok(`${route}`, detail) : r.fail(`${route}`, detail);
  await p.cleanup();
}

console.log(`\n  ${ROUTES.length} routes · ${errors} problem routes`);
const fails = r.summary();
process.exit(fails.length ? 1 : 0);
