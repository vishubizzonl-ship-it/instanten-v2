/**
 * 09 — Localized search: har bhasha me natural shabd se sahi tool milta hai.
 *
 * User ka case: site Japanese me hai, kisi ko compass chahiye aur usne
 * "コンパス" ya "方位磁針" search kiya — tool usi bhasha me result me aana chahiye.
 * Yahi 10 bhashaon ke liye. Aur English shabd bhi har localized page par
 * chalna chahiye ("compass" → /ja/ par オンラインコンパス).
 */
import { open, reporter } from './harness.mjs';
import { txt } from './routes.mjs';

const r = reporter();
r.section('09 — Localized search (har bhasha)');

const visible = (p) =>
  p.$$('[data-tool-card]')
    .filter((c) => c.style.display !== 'none' && !c.hasAttribute('hidden'))
    .map((c) => c.dataset.name || txt(c).slice(0, 24));

const CASES = [
  // [results page, query, expected substring in tool name]
  ['/ja/search/', 'コンパス', 'コンパス'],
  ['/ja/search/', '方位磁針', 'コンパス'],
  ['/ja/search/', '羅針盤', 'コンパス'],
  ['/ja/search/', '速度', 'スピード'],
  ['/ja/search/', '水準器', '水準器'],
  ['/ja/search/', 'メッカ', 'キブラ'],
  ['/ja/search/', '定規', '定規'],
  ['/ja/search/', '文字数', '文字数'],
  ['/ko/search/', '나침반', '나침반'],
  ['/ko/search/', '속도계', '속도계'],
  ['/ko/search/', '수평계', '수준기'],
  ['/de/search/', 'kompass', 'Kompass'],
  ['/de/search/', 'bussole', 'Kompass'],
  ['/de/search/', 'wasserwaage', 'Wasserwaage'],
  ['/de/search/', 'geschwindigkeit', 'Tachometer'],
  ['/fr/search/', 'boussole', 'Boussole'],
  ['/fr/search/', 'niveau à bulle', 'Niveau'],
  ['/es/search/', 'brújula', 'Brújula'],
  ['/es/search/', 'brujula', 'Brújula'], // bina accent likha — phir bhi match
  ['/es/search/', 'velocidad', 'Velocímetro'],
  ['/it/search/', 'bussola', 'Bussola'],
  ['/pt/search/', 'bússola', 'Bússola'],
  ['/nl/search/', 'waterpas', 'Waterpas'],
  ['/sv/search/', 'kompass', 'kompass'],
  // English shabd localized page par bhi
  ['/ja/search/', 'compass', 'コンパス'],
  ['/de/search/', 'qibla', 'Qibla'],
  // English page par natural English shabd (naam me nahi hote)
  ['/search/', 'compass', 'Online Compass'],
  ['/search/', 'spirit level', 'Bubble Level'],
  ['/search/', 'speed', 'Speedometer'],
  ['/search/', 'prettify', 'JSON Formatter'],
  ['/search/', 'prettify json', 'JSON Formatter'], // do-shabd query
];

for (const [route, query, expected] of CASES) {
  const p = await open(route, { query: `?q=${encodeURIComponent(query)}` });
  const names = visible(p);
  const found = names.some((n) => n.includes(expected));
  r.check(`${route.replace('search/', '')} "${query}" → ${expected}`, found, `mila: ${names.join(', ') || '(kuch nahi)'}`);
  await p.cleanup();
}

// ---- sirf relevant cards rehte hain
{
  const p = await open('/ja/search/', { query: '?q=' + encodeURIComponent('コンパス') });
  const names = visible(p);
  r.check('ja "コンパス" par sirf relevant cards', names.length > 0 && names.length <= 2, `${names.length} cards — ${names.join(', ')}`);
  await p.cleanup();
}

// ---- nonsense query par empty state
{
  const p = await open('/ja/search/', { query: '?q=' + encodeURIComponent('ぬえあｑｚｘ') });
  const names = visible(p);
  const empty = p.$('[data-lib-empty]');
  r.check('ja: koi match nahi to empty state', names.length === 0 && empty && !empty.hasAttribute('hidden'),
    `${names.length} cards, empty hidden=${empty?.hasAttribute('hidden')}`);
  await p.cleanup();
}

// ---- home/directory grid par bhi wahi behaviour (dusra entry point)
for (const [route, query, expected] of [
  ['/ja/', '方位磁針', 'コンパス'],
  ['/ja/', '速度', 'スピード'],
  ['/ko/', '나침반', '나침반'],
  ['/de/', 'bussole', 'Kompass'],
  ['/es/', 'brujula', 'Brújula'],
  ['/', 'spirit level', 'Bubble Level'],
]) {
  const p = await open(route);
  p.type(p.$('[data-lib-search]'), query);
  await p.settle(140);
  const names = visible(p);
  r.check(`home ${route} "${query}" → ${expected}`, names.some((n) => n.includes(expected)), `mila: ${names.join(', ') || '(kuch nahi)'}`);
  await p.cleanup();
}

// ---- aadha shabd (prefix) bhi chale
for (const [route, query] of [['/ja/search/', '方位'], ['/de/search/', 'komp'], ['/fr/search/', 'bous']]) {
  const p = await open(route, { query: '?q=' + encodeURIComponent(query) });
  const names = visible(p);
  r.check(`${route} aadha shabd "${query}"`, names.length > 0, names.join(', ') || '(kuch nahi)');
  await p.cleanup();
}

// ---- har bhasha ka apna results page khulta hai (404 nahi)
for (const lang of ['de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt']) {
  const p = await open(`/${lang}/search/`, { query: '?q=a' });
  r.check(`/${lang}/search/ khulta hai`, !!p.$('h1') && p.$$('[data-tool-card]').length > 0, `${p.$$('[data-tool-card]').length} cards`);
  await p.cleanup();
}


// ---- Extra coverage: log jo sach me likhte hain (loanwords + concepts)
const EXTRA = [
  // bubble level — "mujhe bubble level chahiye" har bhasha me
  ['/ja/search/', '水準器', '水準器'],
  ['/ja/search/', '水平器', '水準器'],
  ['/ja/search/', 'バブルレベル', '水準器'],
  ['/ja/search/', 'レベル', '水準器'],
  ['/ja/search/', '傾斜計', '水準器'],
  ['/ja/search/', '角度', '水準器'],
  ['/ko/search/', '수평계', '수준기'],
  ['/ko/search/', '버블레벨', '수준기'],
  ['/ko/search/', '각도', '수준기'],
  ['/de/search/', 'libelle', 'Wasserwaage'],
  ['/de/search/', 'neigung', 'Wasserwaage'],
  ['/fr/search/', 'niveaux', 'Niveau'],
  ['/es/search/', 'nivel de burbuja', 'Nivel'],
  ['/it/search/', 'livella', 'Livella'],
  ['/pt/search/', 'bolha', 'Nível'],
  ['/nl/search/', 'helling', 'Waterpas'],
  ['/sv/search/', 'vattenpass', 'Vattenpass'],
  // compass
  ['/ja/search/', '磁石', 'コンパス'],
  ['/ja/search/', '北', 'コンパス'],
  ['/ko/search/', '방위', '나침반'],
  ['/de/search/', 'waage', 'Wasserwaage'],
  ['/pt/search/', 'norte', 'Bússola'],
  // speed
  ['/ja/search/', '時速', 'スピード'],
  ['/ja/search/', 'メーター', 'スピード'],
  ['/ko/search/', '시속', '속도계'],
  ['/fr/search/', 'vitesse', 'Tachymètre'],
  ['/it/search/', 'tachimetro', 'Tachimetro'],
  // qibla
  ['/ja/search/', '礼拝', 'キブラ'],
  ['/ko/search/', '메카', '키블라'],
  ['/fr/search/', 'prière', 'Qibla'],
  // ruler / word counter / password / qr
  ['/ja/search/', '長さ', '定規'],
  ['/ja/search/', 'センチ', '定規'],
  ['/ko/search/', '길이', '자'],
  ['/ja/search/', '原稿', '文字数'],
  ['/ja/search/', '乱数', 'パスワード'],
  ['/ko/search/', '비밀번호 만들기', '비밀번호'],
  ['/ja/search/', '二次元', 'QR'],
  // speedometer — har translated bhasha me natural shabd (turn 57)
  ['/search/', 'speedometer', 'Speedometer'],
  ['/search/', 'gps speed', 'Speedometer'],
  ['/ja/search/', '速度計', 'スピード'],
  ['/ja/search/', '速度', 'スピード'],
  ['/ja/search/', 'スピード', 'スピード'],
  ['/ko/search/', '속도계', '속도계'],
  ['/ko/search/', '속력', '속도계'],
  ['/ko/search/', '스피드', '속도계'],
  ['/de/search/', 'geschwindigkeit', 'Tachometer'],
  ['/de/search/', 'tempo', 'Tachometer'],
  ['/de/search/', 'tacho', 'Tachometer'],
  ['/de/search/', 'kmh', 'Tachometer'],
  ['/fr/search/', 'compteur de vitesse', 'Tachymètre'],
  ['/fr/search/', 'tachymètre', 'Tachymètre'],
  ['/es/search/', 'velocidad', 'Velocímetro'],
  ['/es/search/', 'velocimetro', 'Velocímetro'],
  ['/it/search/', 'velocità', 'Tachimetro'],
  ['/it/search/', 'contachilometri', 'Tachimetro'],
  ['/pt/search/', 'velocidade', 'Velocímetro'],
  ['/nl/search/', 'snelheidsmeter', 'Snelheidsmeter'],
  ['/nl/search/', 'vaart', 'Snelheidsmeter'],
  ['/sv/search/', 'hastighetsmätare', 'Hastighetsmätare'],
  ['/sv/search/', 'fart', 'Hastighetsmätare'],
];

for (const [route, query, expected] of EXTRA) {
  const p = await open(route, { query: `?q=${encodeURIComponent(query)}` });
  const names = visible(p);
  r.check(`${route.replace('search/', '')} "${query}" → ${expected}`, names.some((n) => n.includes(expected)), `mila: ${names.join(', ') || '(kuch nahi)'}`);
  await p.cleanup();
}

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
