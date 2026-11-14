#!/usr/bin/env node
/**
 * Test runner: `node tests/run.mjs [outDir]`
 *
 * Compares every suite's failures against tests/baseline.json, so the suite is
 * a ratchet: existing bugs are recorded, a NEW bug (or one that got bigger)
 * fails the run. After fixing things, refresh with `--update-baseline`.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolveOutDir, loadPages, ruleOf } from './lib.mjs';

const SUITES = ['site-integrity', 'links', 'i18n-silo'];
const BASELINE = 'tests/baseline.json';
const updateBaseline = process.argv.includes('--update-baseline');
const outDir = resolveOutDir(process.argv.find((a) => !a.startsWith('-') && a !== process.argv[1]));
const pages = loadPages(outDir);

const baseline = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, 'utf8')) : null;
const snapshot = {};
const regressions = [];
const improvements = [];

console.log(`\n  instanten test suite — ${pages.size} pages from ${outDir}\n`);

for (const name of SUITES) {
  const { run } = await import(`./${name}.mjs`);
  const suite = run(pages, outDir);

  const counts = {};
  for (const fail of suite.fails) counts[ruleOf(fail)] = (counts[ruleOf(fail)] ?? 0) + 1;
  snapshot[name] = counts;

  const known = baseline?.[name] ?? {};
  const fresh = [];
  for (const [rule, count] of Object.entries(counts)) {
    const was = known[rule] ?? 0;
    if (count > was) fresh.push(`${rule}  ×${count} (baseline ${was})`);
  }
  for (const [rule, was] of Object.entries(known)) {
    const now = counts[rule] ?? 0;
    if (now < was) improvements.push(`${name}: ${rule} ${was} → ${now}`);
  }

  const ok = fresh.length === 0;
  if (!ok) regressions.push(name);
  const mark = ok ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
  const total = suite.fails.length;
  console.log(
    `  ${mark}  ${name.padEnd(15)} ${suite.checked} checks, ${total} known issue(s)` +
      (fresh.length ? `, \x1b[31m${fresh.length} new\x1b[0m` : '')
  );
  for (const line of fresh.slice(0, 10)) console.log(`         + ${line}`);
  if (fresh.length > 10) console.log(`         + … ${fresh.length - 10} more`);
}

if (improvements.length) {
  console.log('\n  Sudhar gaya (baseline update kar dena):');
  for (const line of improvements.slice(0, 8)) console.log(`         · ${line}`);
}

if (updateBaseline) {
  writeFileSync(BASELINE, JSON.stringify(snapshot, null, 2) + '\n');
  console.log(`\n  Baseline likh diya: ${BASELINE}\n`);
  process.exit(0);
}

console.log(
  regressions.length === 0
    ? '\n  PASS — koi naya issue nahi.\n'
    : `\n  FAIL — ${regressions.join(', ')} mein naya issue.\n`
);
process.exit(regressions.length === 0 ? 0 : 1);
