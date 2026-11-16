/**
 * On-page SEO lock — **instanten route (root) + uske apne silo pages**.
 *
 * Scope (user rule "alag-alag separation"): sirf root route aur uske
 * About / Contact / Privacy / Terms / Blog silo pages. Har tool ka apna silo
 * (`/onlinecompass/…`, `/tools/<slug>/…`) bilkul alag hai — ye suite usme
 * kuch nahi maangta, ulta ye bhi check karta hai ki root ke SEO titles wahan
 * leak na hue hon.
 *
 * Rule: keyword ki duplicate spelling ek hi baar ginti hai (dedup list).
 */
import { SITE, stripTags, titleOf, canonicalOf, jsonLdOf, linksOf, createSuite } from './lib.mjs';

/** Main keyword. */
export const MAIN_KEYWORD = 'instanten';

/** Supporting keywords — duplicate spellings ek hi baar (user rule). */
export const SUPPORT_KEYWORDS = [
  'instant tool',
  'tools hub',
  'instant work',
  'online tools',
  'online tools hub',
  'multi tool website',
  'multi tools website',
  'instant',
  'free online tools website',
  'online tools free',
  'web tools hub',
  'free online tools hub',
  'online tools list',
];

export const ALL_KEYWORDS = [MAIN_KEYWORD, ...SUPPORT_KEYWORDS];

/** instanten route ke apne silo pages (root + uske company pages). */
export const ROOT_SILO = [
  { url: '/', label: 'home' },
  { url: '/about/', label: 'about' },
  { url: '/contact/', label: 'contact' },
  { url: '/privacy-policy/', label: 'privacy' },
  { url: '/terms/', label: 'terms' },
  { url: '/blog/', label: 'blog' },
];

/** Blog par ye 3 SEO posts 800-1000 words ke hone chahiye (user requirement). */
export const SEO_BLOG_SLUGS = [
  'online-tools-hub-guide',
  'instant-tools-for-daily-work',
  'web-tools-hub-vs-subscriptions',
];

const words = (html) => stripTags(html).split(' ').filter(Boolean);
const metaOf = (html, prop) =>
  (html.match(new RegExp(`<meta (?:property|name)="${prop}" content="([^"]*)"`, 'i')) || [, null])[1];
const countOf = (text, kw) => text.split(kw).length - 1;

export function run(pages) {
  const suite = createSuite('onpage-root');
  const { check } = suite;

  for (const { url, label } of ROOT_SILO) {
    const html = pages.get(url);
    if (!check(Boolean(html), `root silo page build mein nahi :: ${url}`)) continue;

    const path = url;
    const body = stripTags(html).toLowerCase();

    // --- 1. Ek hi H1, aur wo keyword wala -------------------------------
    const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/gi)];
    check(h1s.length === 1, `${label}: ${h1s.length} <h1> (exactly 1 chahiye) :: ${path}`);

    // --- 2. Title: 20-60 chars, "Instanten" + primary phrase ------------
    const title = titleOf(html) ?? '';
    check(title.length >= 20 && title.length <= 60, `${label}: title ${title.length} chars (20-60 chahiye) :: ${path}`);
    check(/instanten/i.test(title), `${label}: title mein "Instanten" nahi :: ${path}`);
    check(
      /online tools hub|instant work|instant tool|blog/i.test(title),
      `${label}: title mein primary phrase nahi :: ${path}`,
    );

    // --- 3. Meta description: 120-160 chars, keyword wala --------------
    const desc = metaOf(html, 'description') ?? '';
    check(desc.length >= 120 && desc.length <= 160, `${label}: description ${desc.length} chars (120-160 chahiye) :: ${path}`);
    check(/instanten/i.test(desc), `${label}: description mein "Instanten" nahi :: ${path}`);
    check(
      /instant tool|instant work|online tools|tools hub/i.test(desc),
      `${label}: description mein supporting keyword nahi :: ${path}`,
    );

    // --- 4. Keywords meta: poori list, koi duplicate nahi --------------
    const kwRaw = metaOf(html, 'keywords') ?? '';
    const kwList = kwRaw.split(',').map((k) => k.trim().toLowerCase()).filter(Boolean);
    for (const kw of ALL_KEYWORDS) {
      check(kwList.includes(kw), `${label}: keywords meta mein nahi "${kw}" :: ${path}`);
    }
    const dupes = kwList.filter((k, i) => kwList.indexOf(k) !== i);
    check(dupes.length === 0, `${label}: keywords meta mein duplicate (${[...new Set(dupes)].join(', ')}) :: ${path}`);

    // --- 5. Canonical self-referencing ---------------------------------
    const canonical = canonicalOf(html) ?? '';
    check(canonical === `${SITE}${path}`, `${label}: canonical galat (${canonical}) :: ${path}`);

    // --- 6. Open Graph: poora set + title/desc/url match ---------------
    for (const prop of [
      'og:type',
      'og:site_name',
      'og:locale',
      'og:title',
      'og:description',
      'og:url',
      'og:image',
      'og:image:secure_url',
      'og:image:type',
      'og:image:width',
      'og:image:height',
      'og:image:alt',
    ]) {
      check(Boolean((metaOf(html, prop) ?? '').trim()), `${label}: ${prop} missing :: ${path}`);
    }
    check(metaOf(html, 'og:type') === 'website', `${label}: og:type website nahi :: ${path}`);
    check(metaOf(html, 'og:title') === title, `${label}: og:title title se match nahi :: ${path}`);
    check(metaOf(html, 'og:description') === desc, `${label}: og:description description se match nahi :: ${path}`);
    check(metaOf(html, 'og:url') === canonical, `${label}: og:url canonical se match nahi :: ${path}`);
    const ogImage = metaOf(html, 'og:image') ?? '';
    check(ogImage.startsWith(SITE), `${label}: og:image absolute nahi (${ogImage}) :: ${path}`);
    check(/\.png$/i.test(ogImage), `${label}: og:image PNG nahi (${ogImage}) :: ${path}`);
    check(!/\.svg$/i.test(ogImage), `${label}: og:image SVG hai (crawlers SVG nahi lete) :: ${path}`);
    check(metaOf(html, 'og:image:width') === '1200', `${label}: og:image:width 1200 nahi :: ${path}`);
    check(metaOf(html, 'og:image:height') === '630', `${label}: og:image:height 630 nahi :: ${path}`);
    check(metaOf(html, 'og:image:type') === 'image/png', `${label}: og:image:type image/png nahi :: ${path}`);
    check((metaOf(html, 'og:image:alt') ?? '').length >= 20, `${label}: og:image:alt chhota hai :: ${path}`);
    const ogImageTags = (html.match(/<meta property="og:image"/g) || []).length;
    check(ogImageTags === 1, `${label}: og:image ${ogImageTags} baar (1 hona chahiye) :: ${path}`);

    // --- 7. Twitter card ----------------------------------------------
    check(metaOf(html, 'twitter:card') === 'summary_large_image', `${label}: twitter:card galat :: ${path}`);
    check(metaOf(html, 'twitter:title') === title, `${label}: twitter:title match nahi :: ${path}`);
    check(metaOf(html, 'twitter:description') === desc, `${label}: twitter:description match nahi :: ${path}`);
    check(metaOf(html, 'twitter:image') === ogImage, `${label}: twitter:image og:image se match nahi :: ${path}`);
    check(Boolean(metaOf(html, 'twitter:image:alt')), `${label}: twitter:image:alt missing :: ${path}`);

    // --- 8. Robots: indexable (root silo noindex nahi) -----------------
    const robots = metaOf(html, 'robots') ?? '';
    check(/index/.test(robots) && !/noindex/.test(robots), `${label}: robots meta indexable nahi (${robots}) :: ${path}`);

    // --- 9. Breadcrumb schema ------------------------------------------
    const graphs = jsonLdOf(html).filter((b) => b.ok).flatMap((b) => (Array.isArray(b.data) ? b.data : [b.data]));
    const crumbs = graphs.filter((g) => g['@type'] === 'BreadcrumbList');
    check(crumbs.length === 1, `${label}: BreadcrumbList ${crumbs.length} baar (1 chahiye) :: ${path}`);
    const items = crumbs[0]?.itemListElement ?? [];
    // home par sirf "Home" hi hota hai; baaki silo pages par 2+ crumbs
    const minCrumbs = label === 'home' ? 1 : 2;
    check(items.length >= minCrumbs, `${label}: breadcrumb items ${items.length} (${minCrumbs}+ chahiye) :: ${path}`);
    check(
      String(items[0]?.name ?? '').toLowerCase() === 'home',
      `${label}: breadcrumb ka pehla item Home nahi :: ${path}`,
    );

    // --- 10. Body copy mein keyword presence (root silo aggregate) -----
    check(body.includes(MAIN_KEYWORD), `${label}: body mein "instanten" nahi :: ${path}`);

    // --- 11. Root silo ke andar internal linking -----------------------
    const hrefs = linksOf(html);
    const has = (target) => hrefs.includes(target);
    if (label !== 'home') check(has('/'), `${label}: home ka internal link nahi :: ${path}`);
    if (label !== 'blog') check(has('/blog/'), `${label}: blog ka internal link nahi :: ${path}`);
    if (label !== 'contact') check(has('/contact/'), `${label}: contact ka internal link nahi :: ${path}`);
    if (label !== 'about') check(has('/about/'), `${label}: about ka internal link nahi :: ${path}`);

    // --- 12. Root silo copy mein "Google" nahi (naya copy) -------------
    // (purane legal/about text par pehle se hai — wo scope nahi; yahan sirf
    //  naya blog intro + long-form blocks dekhte hain.)
  }

  // ================= home: long-form 800-1200 words ====================
  const home = pages.get('/');
  if (home) {
    const block = home.match(/<section[^>]*data-seo-longform[^>]*>[\s\S]*?<\/section>/i);
    if (check(Boolean(block), 'home par data-seo-longform block nahi mila')) {
      const text = stripTags(block[0]);
      const count = words(text).length;
      check(count >= 800 && count <= 1200, `home long-form copy ${count} words (800-1200 chahiye)`);
      const lower = text.toLowerCase();
      for (const kw of ALL_KEYWORDS) {
        check(lower.includes(kw), `home long-form copy mein keyword nahi: "${kw}"`);
      }
      check(countOf(lower, MAIN_KEYWORD) >= 3, `home copy mein "instanten" ${countOf(lower, MAIN_KEYWORD)} baar (3+ chahiye)`);
      // keyword stuffing guard: main keyword 60 baar se zyada nahi
      check(countOf(lower, MAIN_KEYWORD) <= 60, `home copy mein "instanten" bahut zyada (${countOf(lower, MAIN_KEYWORD)})`);
    }
  }

  // ================= blog index: intro + 5 posts =======================
  const blogIndex = pages.get('/blog/');
  if (blogIndex) {
    const intro = blogIndex.match(/<section[^>]*data-blog-intro[^>]*>[\s\S]*?<\/section>/i);
    if (check(Boolean(intro), 'blog index par data-blog-intro block nahi mila')) {
      const introText = stripTags(intro[0]).toLowerCase();
      check(introText.includes(MAIN_KEYWORD), 'blog intro mein "instanten" nahi');
      check(introText.includes('instant work'), 'blog intro mein "instant work" nahi');
      check(introText.includes('online tools hub'), 'blog intro mein "online tools hub" nahi');
      check(introText.includes('free online tools hub'), 'blog intro mein "free online tools hub" nahi');
      check(introText.includes('web tools hub'), 'blog intro mein "web tools hub" nahi');
      check(!/google/.test(introText), 'blog intro mein "Google" shabd hai');
      const introWords = words(introText).length;
      check(introWords >= 90 && introWords <= 220, `blog intro ${introWords} words (90-220 chahiye)`);
    }

    const listed = [...new Set([...blogIndex.matchAll(/href="\/blog\/([a-z0-9-]+)\//g)].map((m) => m[1]))].filter(
      (slug) => slug !== 'page',
    );
    check(listed.length === 5, `blog index par ${listed.length} posts (5 chahiye)`);
    for (const slug of SEO_BLOG_SLUGS) {
      check(listed.includes(slug), `blog index par SEO post listed nahi: ${slug}`);
    }
  }

  // ================= 3 SEO blog posts: 800-1000 words ==================
  for (const slug of SEO_BLOG_SLUGS) {
    const html = pages.get(`/blog/${slug}/`);
    if (!check(Boolean(html), `SEO blog page build mein nahi :: /blog/${slug}/`)) continue;

    const article = html.match(/<article[\s\S]*?<\/article>/i);
    if (!check(Boolean(article), `${slug}: <article> block nahi mila`)) continue;

    const text = stripTags(article[0]);
    const count = words(text).length;
    check(count >= 800 && count <= 1000, `${slug}: article ${count} words (800-1000 chahiye)`);

    const lower = text.toLowerCase();
    check(lower.includes(MAIN_KEYWORD), `${slug}: article mein "instanten" nahi`);
    check(countOf(lower, MAIN_KEYWORD) >= 2, `${slug}: article mein "instanten" 2+ baar nahi`);
    const supported = SUPPORT_KEYWORDS.filter((k) => lower.includes(k));
    check(supported.length >= 2, `${slug}: article mein sirf ${supported.length} supporting keyword`);

    // article OG tags
    check(metaOf(html, 'og:type') === 'article', `${slug}: og:type article nahi`);
    const og = metaOf(html, 'og:image') ?? '';
    check(/\.png$/i.test(og), `${slug}: og:image PNG nahi (${og})`);
    check(og.includes(slug), `${slug}: per-post og:image nahi (${og})`);
    check(metaOf(html, 'twitter:image') === og, `${slug}: twitter:image og:image se match nahi`);
    check(Boolean(metaOf(html, 'og:image:alt')), `${slug}: og:image:alt missing`);
    check(Boolean(metaOf(html, 'article:published_time')), `${slug}: article:published_time missing`);
    check(Boolean(metaOf(html, 'article:section')), `${slug}: article:section missing`);
    check(Boolean(metaOf(html, 'article:author')), `${slug}: article:author missing`);
    check(canonicalOf(html) === `${SITE}/blog/${slug}/`, `${slug}: canonical galat`);
  }

  // ================= FAQ section + JSON-LD (root silo) =================
  /**
   * User rule: har root silo page par ek SEO-friendly FAQ section, aur uska
   * structured data **ek hi** FAQPage JSON-LD se (duplicate kabhi nahi).
   * Home ka FAQ 15 questions ka hai (10 purane + 5 naye hub questions),
   * baaki silo pages par 5-5 page-specific questions.
   */
  const QUALITY = { min: 200, max: 620 };
  const seenQuestions = new Map(); // question -> page label (cross-page duplicate guard)

  const faqPageOf = (html) => {
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((m) => m[1])
      .filter((raw) => raw.includes('FAQPage'));
    if (!blocks.length) return { count: 0, questions: [] };
    let parsed;
    try {
      parsed = JSON.parse(blocks[0]);
    } catch {
      return { count: blocks.length, questions: [], invalid: true };
    }
    const nodes = Array.isArray(parsed) ? parsed : (parsed['@graph'] ?? [parsed]);
    const faq = nodes.find((n) => n && n['@type'] === 'FAQPage');
    return { count: blocks.length, questions: faq?.mainEntity ?? [], invalid: !faq, node: faq };
  };

  const expectedFaqCount = (label) => (label === 'home' ? 15 : 5);

  for (const { url, label } of ROOT_SILO) {
    const html = pages.get(url);
    if (!html) continue;

    const { count, questions, invalid, node } = faqPageOf(html);
    check(!invalid, `${label}: FAQPage JSON-LD parse nahi hua`);
    check(count === 1, `${label}: FAQPage JSON-LD ${count} baar (exactly 1 chahiye)`);
    check(node?.['@context'] === 'https://schema.org', `${label}: FAQPage ka @context schema.org nahi`);
    check(node?.['@type'] === 'FAQPage', `${label}: FAQPage ka @type galat`);

    const want = expectedFaqCount(label);
    check(questions.length === want, `${label}: FAQ JSON-LD mein ${questions.length} questions (${want} chahiye)`);

    // visible accordion bhi utna hi (Google ke rules: schema = visible content)
    const visible = label === 'home'
      ? (html.match(/class="ffa-faq-item"/g) || []).length
      : (html.match(/<section[^>]*data-root-faq[^>]*>[\s\S]*?<\/section>/i) || [''])[0].includes('data-root-faq')
        ? (html.match(/<details class="group border-b border-border-hairline/g) || []).length
        : 0;
    check(visible === questions.length, `${label}: visible FAQ ${visible} vs JSON-LD ${questions.length}`);
    check(
      label === 'home' ? /id="faq"/.test(html) : /data-root-faq/.test(html),
      `${label}: FAQ section page par render nahi hui`,
    );

    const names = questions.map((q) => String(q.name));
    const dupesInPage = names.filter((q, i) => names.indexOf(q) !== i);
    check(dupesInPage.length === 0, `${label}: page par duplicate FAQ question`);

    for (const item of questions) {
      const name = String(item?.name ?? '');
      const answer = String(item?.acceptedAnswer?.text ?? '');
      check(item?.['@type'] === 'Question', `${label}: FAQ item ka @type Question nahi`);
      check(item?.acceptedAnswer?.['@type'] === 'Answer', `${label}: acceptedAnswer ka @type Answer nahi`);
      check(name.endsWith('?'), `${label}: FAQ question "?" par khatam nahi hota :: ${name.slice(0, 60)}`);
      check(name.length >= 25, `${label}: FAQ question bahut chhota :: ${name}`);
      check(
        answer.length >= QUALITY.min && answer.length <= QUALITY.max,
        `${label}: FAQ answer ${answer.length} chars (${QUALITY.min}-${QUALITY.max}) :: ${name.slice(0, 50)}`,
      );
      check(!/google/i.test(`${name} ${answer}`), `${label}: FAQ copy mein "Google" shabd :: ${name.slice(0, 40)}`);

      // cross-page duplicate: ek hi question do pages par nahi
      const prev = seenQuestions.get(name);
      check(!prev || prev === label, `${label}: FAQ question "${name.slice(0, 40)}…" pehle ${prev} par hai`);
      seenQuestions.set(name, label);
    }

    // FAQ copy hub keyword ke bina generic nahi lagni chahiye
    if (label !== 'home') {
      const faqText = questions.map((q) => `${q.name} ${q.acceptedAnswer?.text ?? ''}`).join(' ').toLowerCase();
      check(/instanten|tools hub|instant tool|online tools/.test(faqText), `${label}: FAQ copy mein hub keyword nahi`);
    }
  }

  // localized root silo pages par English FAQ leak nahi (aur koi FAQPage nahi)
  for (const lang of ['de', 'ja', 'pt']) {
    for (const { url, label } of ROOT_SILO) {
      if (url === '/') continue; // home ka JSON-LD site-wide English hi rehta hai
      const localized = pages.get(`/${lang}${url}`);
      if (!localized) continue;
      check(!/data-root-faq/.test(localized), `/${lang}${url}: English FAQ block leak (${label})`);
      check(faqPageOf(localized).count === 0, `/${lang}${url}: localized page par FAQPage JSON-LD hai`);
    }
  }

  // ============ separation: root SEO per-tool silos mein leak na ho ====
  const rootTitles = ROOT_SILO.map(({ url }) => titleOf(pages.get(url) ?? '') ?? '').filter(Boolean);
  const toolPages = [...pages.keys()].filter((u) =>
    /^\/(onlinecompass|onlinebubblelevel|onlinespeedometer|onlineqibla|tools)\//.test(u),
  );
  check(toolPages.length > 50, `tool pages kam mile (${toolPages.length})`);
  for (const url of toolPages) {
    const html = pages.get(url);
    const t = titleOf(html) ?? '';
    // Root silo ka koi bhi title per-tool page par nahi hona chahiye
    check(!rootTitles.includes(t), `root silo title tool page par leak :: ${url}`);
  }

  // per-tool silo pages ka apna metadata abhi bhi mojood hai (kuch bhi toota nahi)
  for (const tool of ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla']) {
    for (const page of ['about', 'contact', 'privacy', 'terms', 'blog']) {
      const url = `/${tool}/${page}/`;
      check(pages.has(url), `${tool} silo page missing :: ${url}`);
    }
  }

  return suite;
}
