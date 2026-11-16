/**
 * Functional suite — asli DOM me buttons/inputs chalake dekhta hai.
 *
 *   node tests/functional/run.mjs [distDir]
 *
 * 19 static suites HTML padhti hain; ye suite page ko jsdom me kholkar JS bhi
 * chalati hai (buttons, filters, sensors, contact form) — warna "button kaam
 * karta hai ya nahi" kabhi pakda hi nahi jaata.
 */
import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const dir = path.dirname(new URL(import.meta.url).pathname);
const distArg = process.argv[2] || 'dist';
const files = readdirSync(dir).filter((f) => /^\d\d-.*\.mjs$/.test(f)).sort();

let failed = 0;
for (const file of files) {
  const res = spawnSync(process.execPath, [path.join(dir, file), distArg], { stdio: 'inherit' });
  if (res.status !== 0) failed += 1;
}

console.log(failed ? `\n  FAIL — ${failed}/${files.length} functional file(s) fail` : `\n  PASS — ${files.length}/${files.length} functional file(s)`);
process.exit(failed ? 1 : 0);
