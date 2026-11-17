/**
 * Pages deploy se pehle ka pre-flight check.
 *
 * `wrangler pages deploy` me `--dry-run` flag hi nahi hota (wrangler 4.x), isliye
 * uski jagah ye script: upload se pehle wahi cheezein check karta hai jo deploy
 * ke baad tooti milti hain — dist maujood hai?, _headers/_redirects/404.html
 * gayab nahi?, koi stray functions/ ya _worker.js nahi?, contact form mailto
 * mode me hai (Pages par backend nahi hota)?, aur kitni files ja rahi hain.
 *
 * Kuch bhi galat mile to exit 1 — deploy rukega.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.argv[2] || 'dist';
const problems = [];
const notes = [];

const need = (path, why) => {
  if (!existsSync(path)) problems.push(`${path} gayab hai — ${why}`);
};
const want = (cond, why) => {
  if (!cond) problems.push(why);
};

// 1. build output
if (!existsSync(OUT)) {
  console.error(`✘ ${OUT}/ nahi mila — pehle \`npm run build\` chalao.`);
  process.exit(1);
}

// 2. Pages ko ye teeno chahiye
need(join(OUT, 'index.html'), 'home page nahi hoga');
need(join(OUT, '404.html'), 'Pages 404 page nahi dega');
need(join(OUT, '_headers'), 'security headers aur cache rules lagu nahi honge');
need(join(OUT, '_redirects'), 'purane bina-slash URLs 301 nahi honge');

// 3. Pages sirf static hai — koi server code upload na ho jaye
want(!existsSync(join(OUT, '_worker.js')), `${OUT}/_worker.js mila — Pages static site par worker serve ho jayega (build me galti se aaya hai)`);
want(!existsSync(join(OUT, '_routes.json')), `${OUT}/_routes.json mila — static-only Pages me iski zarurat nahi`);

// 4. headers file me jo promise hai wo sach ho
if (existsSync(join(OUT, '_headers'))) {
  const h = readFileSync(join(OUT, '_headers'), 'utf8');
  want(/X-Content-Type-Options: nosniff/.test(h), '_headers me nosniff nahi');
  want(/Strict-Transport-Security/.test(h), '_headers me HSTS nahi');
  want(/\/_astro\/\*/.test(h) && /immutable/.test(h), '_headers me /_astro/* ka immutable cache nahi');
}

// 5. contact form: Pages par backend nahi hota, isliye api path hona hi nahi chahiye
const contactPage = join(OUT, 'contact', 'index.html');
if (existsSync(contactPage)) {
  const html = readFileSync(contactPage, 'utf8');
  if (/data-api="\/api\//.test(html)) {
    problems.push('contact page par /api/contact path hai — Pages par wo endpoint maujood nahi hoga (build `PUBLIC_CONTACT_TRANSPORT=api` ke bina hona chahiye)');
  }
  want(/action="mailto:/.test(html), 'contact form ka mailto fallback gayab hai');
} else {
  problems.push('contact page build me nahi hai');
}

// 6. kitna upload jayega
let files = 0;
let bytes = 0;
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else {
      files += 1;
      bytes += st.size;
    }
  }
};
walk(OUT);
notes.push(`${files} files, ${(bytes / 1024 / 1024).toFixed(1)} MB upload honge`);
notes.push(`contact: mailto mode (koi backend nahi)`);

for (const note of notes) console.log(`· ${note}`);
if (problems.length) {
  console.error(`\n✘ ${problems.length} problem:`);
  for (const p of problems) console.error(`   - ${p}`);
  process.exit(1);
}
console.log(`\n✔ Pages deploy ke liye sab theek hai. Ab: npm run deploy`);
