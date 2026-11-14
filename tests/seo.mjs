/**
 * SEO lock: on-page SEO, keyword coverage, word counts aur OG/Twitter meta.
 *
 * Ye checks build hui HTML par chalte hain (wahi bytes jo browser/crawler dekhta hai).
 * Rule: keyword duplicate spelling ek hi baar ginti hai, isliye list dedup hai.
 */
import { SITE, stripTags, createSuite } from './lib.mjs';

/** User ki di hui keyword list (dedup). Main keyword alag rakha hai. */
export const MAIN_KEYWORD = 'instanten';
export const SUPPORT_KEYWORDS = [
  'instant tool',
  'tools hub',
  'instant work',
  'online tools',
  'online tools hub',
  'multi tool website',
  'instant',
  'free online tools website',
  'online tools free',
  'web tools hub',
  'free online tools hub',
  'online tools list',
  'multi tools website',
];

/** Blog page par exactly itne blogs hone chahiye (user requirement). */
export const BLOG_PAGE_COUNT = 5;

/** Jo blogs delete hue — ye wapas nahi aane chahiye. */
export const DELETED_BLOG_SLUGS = [
  'css-container-queries-guide',
  'essential-git-workflows-developers',
  'free-developer-tools-2024',
  'macos-developer-setup-2024',
  'typescript-advanced-patterns',
  'unlocking-power-ai-future',
];

/** Naye 3 blog slugs — 800-1000 words each. */
export const NEW_BLOG_SLUGS = [
  'online-tools-hub-guide',
  'instant-tools-for-daily-work',
  'web-tools-hub-vs-subscriptions',
];

const wordsOf = (html) => stripTags(html).split(' ').filter(Boolean);
const metaOf = (html, prop) => {
  const m = html.match(new RegExp(`<meta (?:property|name)="${prop}" content="([^"]*)"`, 'i'));
  return m ? m[1] : null;
};
const countKeyword = (text, kw) =>
  text.split(kw).length - 1;

export function run(pages, outDir) {
  const suite = createSuite('seo');
  const { check } = suite;

  const home = pages.get('/');
  check(Boolean(home), 'home page build mein nahi mila');

  if (home) {
    // --- 1. Home par long-form SEO copy 800-1200 words -------------------
    const block = home.match(/<section[^>]*data-seo-longform[^>]*>[\s\S]*?<\/section>/i);
    check(Boolean(block), 'home par data-seo-longform section nahi mila');

    const homeText = block ? stripTags(block[0]) : '';
    const homeWords = homeText ? homeText.split(' ').filter(Boolean).length : 0;
    check(
      homeWords >= 800 && homeWords <= 1200,
      `home long-form copy 800-1200 words honi chahiye, mili ${homeWords}`
    );

    // --- 2. Keyword coverage home par ------------------------------------
    const lower = homeText.toLowerCase();
    check(countKeyword(lower, MAIN_KEYWORD) >= 3, 'main keyword "instanten" home copy mein 3+ baar nahi hai');
    for (const kw of SUPPORT_KEYWORDS) {
      check(lower.includes(kw), `supporting keyword home copy mein nahi mila: "${kw}"`);
    }

    // --- 2b. Long-form copy se tools tak internal links -------------------
    const longformHtml = block ? block[0] : '';
    const toolLinks = (longformHtml.match(/href="\/tools\/[a-z0-9-]+\/"/g) || []).length;
    check(toolLinks >= 5, `home long-form copy se tools tak ${toolLinks} internal links (5+ chahiye)`);

    // --- 3. Title / description / keywords meta --------------------------
    const title = (home.match(/<title>([^<]*)<\/title>/i) || [, ''])[1];
    check(/instanten/i.test(title), 'home title mein "Instanten" nahi hai');
    check(
      /online tools hub|instant work/i.test(title),
      'home title mein primary phrase (online tools hub / instant work) nahi hai'
    );
    check(title.length <= 70, `home title 70 chars se lamba hai (${title.length})`);

    const desc = metaOf(home, 'description') || '';
    check(desc.length >= 120 && desc.length <= 165, `home meta description 120-165 chars (mili ${desc.length})`);
    check(/instanten/i.test(desc), 'home meta description mein "Instanten" nahi hai');

    const kw = metaOf(home, 'keywords') || '';
    for (const k of [MAIN_KEYWORD, ...SUPPORT_KEYWORDS]) {
      check(kw.toLowerCase().includes(k), `home keywords meta mein nahi: "${k}"`);
    }

    // --- 4. OG + Twitter tags --------------------------------------------
    const ogRequired = [
      'og:type',
      'og:site_name',
      'og:locale',
      'og:title',
      'og:description',
      'og:url',
      'og:image',
      'og:image:secure_url',
      'og:image:alt',
    ];
    for (const prop of ogRequired) {
      const val = metaOf(home, prop);
      check(Boolean(val && val.trim()), `home par ${prop} missing hai`);
    }
    const ogImage = metaOf(home, 'og:image') || '';
    check(ogImage.startsWith(SITE), `og:image absolute URL nahi hai: ${ogImage}`);
    check(
      !ogImage.toLowerCase().endsWith('.svg'),
      `og:image SVG hai — social crawlers SVG render nahi karte: ${ogImage}`
    );
    check(ogImage.toLowerCase().endsWith('.png'), `og:image PNG hona chahiye: ${ogImage}`);
    check(metaOf(home, 'og:image:width') === '1200', 'og:image:width 1200 nahi hai');
    check(metaOf(home, 'og:image:height') === '630', 'og:image:height 630 nahi hai');
    check(metaOf(home, 'og:image:type') === 'image/png', 'og:image:type image/png nahi hai');

    check(metaOf(home, 'twitter:card') === 'summary_large_image', 'twitter:card summary_large_image nahi hai');
    check((metaOf(home, 'twitter:image') || '').startsWith(SITE), 'twitter:image absolute nahi hai');
    check(Boolean(metaOf(home, 'twitter:image:alt')), 'twitter:image:alt missing');

    // og:image ek hi baar aaye (duplicate tags crawler confuse karte hain)
    const ogImageCount = (home.match(/<meta property="og:image"/g) || []).length;
    check(ogImageCount === 1, `home par og:image ${ogImageCount} baar hai (1 hona chahiye)`);
  }

  // --- 4b. Home FAQ: visible accordion + single FAQPage JSON-LD ----------
  if (home) {
    const faqBlocks = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((m) => m[1])
      .filter((raw) => raw.includes('FAQPage'));
    check(faqBlocks.length === 1, `home par FAQPage JSON-LD ${faqBlocks.length} baar hai (1 hona chahiye)`);

    let faqData = null;
    try {
      const parsed = JSON.parse(faqBlocks[0] ?? '{}');
      faqData = Array.isArray(parsed)
        ? parsed.find((n) => n['@type'] === 'FAQPage') ?? null
        : parsed;
    } catch {
      check(false, 'home ka FAQPage JSON-LD valid JSON nahi hai');
    }

    const visibleFaqs = (home.match(/class="ffa-faq-item"/g) || []).length;
    check(visibleFaqs === 10, `home par ${visibleFaqs} visible FAQ items (exactly 10 chahiye)`);

    const ldQuestions = faqData?.mainEntity ?? [];
    check(ldQuestions.length === 10, `home FAQPage JSON-LD mein ${ldQuestions.length} questions (exactly 10 chahiye)`);
    check(
      ldQuestions.length === visibleFaqs,
      `home FAQ mismatch: visible ${visibleFaqs}, JSON-LD ${ldQuestions.length}`
    );
    for (const q of ldQuestions) {
      check(
        Boolean(q.name) && Boolean(q.acceptedAnswer?.text) && q.acceptedAnswer.text.length >= 80,
        `home FAQ answer chhota/khali hai: ${String(q.name).slice(0, 50)}`
      );
    }

    // 10 tools-hub questions jo search se aate hain (purane FAQ delete ho chuke)
    const expected = [
      'What is Instanten and how is it different from other free online tools websites?',
      'Which online tools are available on this tools hub right now?',
      'Are these online tools really free, or is there a hidden limit?',
      'Is it safe to paste passwords, tokens or client documents into an online tool?',
      'Do these browser tools work on mobile phones and tablets?',
      'Do I need to install an app or create an account to use instant tools?',
      'Do the tools keep working when the internet connection drops?',
      'How accurate are the online ruler, speedometer and measurement style tools?',
      'How do I pick the right tool for a task on a multi tool website?',
      'Why use a web tools hub instead of five single-purpose subscriptions?',
    ];
    check(expected.length === 10, 'expected FAQ list 10 honi chahiye');
    for (const q of expected) {
      check(home.includes(q), `home FAQ visible nahi hai: ${q}`);
      check(ldQuestions.some((item) => item.name === q), `home FAQ JSON-LD mein nahi hai: ${q}`);
    }

    // har FAQ answer SEO ke liye kaafi detail ka ho (>= 200 chars) aur
    // question hub-keyword wala ho
    for (const item of ldQuestions) {
      check(
        item.acceptedAnswer.text.length >= 200,
        `home FAQ answer bahut chhota (${item.acceptedAnswer.text.length} chars): ${item.name.slice(0, 50)}`
      );
    }

    // purane 13 FAQ ke questions wapas na aayein
    const oldFaqs = [
      'Can I open every instant tool on mobile as well as desktop?',
      'Does Instanten work as an instant online platform in any browser?',
      'How accurate and fast are instant convert workflows on Instanten?',
    ];
    for (const q of oldFaqs) {
      check(!home.includes(q), `purana FAQ wapas aa gaya: ${q}`);
    }

    // FAQPage JSON-LD ka shape: @context + @type + mainEntity + Question/Answer
    check(faqData?.['@context'] === 'https://schema.org', 'home FAQPage mein @context schema.org nahi');
    check(faqData?.['@type'] === 'FAQPage', 'home FAQPage ka @type galat');
    for (const item of ldQuestions) {
      check(item['@type'] === 'Question', 'FAQ mainEntity item ka @type Question nahi');
      check(item.acceptedAnswer?.['@type'] === 'Answer', 'FAQ acceptedAnswer ka @type Answer nahi');
    }

    // FAQ copy mein "Google" nahi
    const faqSection = (home.match(/<section[^>]*id="faq"[\s\S]*?<\/section>/i) || [''])[0];
    check(faqSection.length > 0, 'home FAQ section (id="faq") nahi mila');
    check(!/google/i.test(stripTags(faqSection)), 'FAQ copy mein "Google" shabd hai');
  }

  // --- 4c. Tool pages: per-tool FAQ + single FAQPage JSON-LD -------------
  const TOOL_SLUGS = [
    'json-formatter', 'base64-encoder', 'word-counter', 'password-generator',
    'qr-generator', 'image-compressor', 'color-palette', 'css-grid-generator',
    'markdown-editor', 'meta-tag-generator', 'online-ruler', 'regex-tester',
  ];
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
    return { count: blocks.length, questions: faq?.mainEntity ?? [], invalid: !faq };
  };

  for (const slug of TOOL_SLUGS) {
    const url = `/tools/${slug}/`;
    const html = pages.get(url);
    check(Boolean(html), `tool page build mein nahi: ${url}`);
    if (!html) continue;

    const { count, questions, invalid } = faqPageOf(html);
    check(!invalid, `${slug}: FAQPage JSON-LD parse nahi hua`);
    check(count === 1, `${slug}: FAQPage blocks ${count} (1 hona chahiye)`);
    check(questions.length >= 5, `${slug}: FAQ JSON-LD mein ${questions.length} questions (5 chahiye)`);

    const visible = (html.match(/<summary class="flex items-center justify-between/g) || []).length;
    check(visible === questions.length, `${slug}: visible FAQ ${visible} vs JSON-LD ${questions.length}`);
    check(/data-tool-faq/.test(html), `${slug}: FAQ section page par render nahi hui`);

    const names = questions.map((q) => String(q.name));
    const dupes = names.filter((q, i) => names.indexOf(q) !== i);
    check(dupes.length === 0, `${slug}: duplicate FAQ questions`);
    check(
      questions.every((q) => q.acceptedAnswer?.text && q.acceptedAnswer.text.length >= 90),
      `${slug}: koi FAQ answer chhota hai`
    );
    // FAQ copy tool-specific ho, generic boilerplate nahi
    const tokens = slug.split('-').filter((w) => w.length >= 2);
    const faqText = questions.map((q) => `${q.name} ${q.acceptedAnswer?.text ?? ''}`).join(' ').toLowerCase();
    check(
      tokens.some((word) => faqText.includes(word)),
      `${slug}: FAQ copy mein tool ka zikr (${tokens.join('/')}) nahi hai`
    );

    // "Google" shabd FAQ copy mein nahi
    const faqBlock = (html.match(/<section[^>]*data-tool-faq[\s\S]*?<\/section>/i) || [''])[0];
    check(!/google/i.test(stripTags(faqBlock)), `${slug}: FAQ copy mein "Google" shabd hai`);

    // localized tool pages: English FAQ leak nahi
    const de = pages.get(`/de/tools/${slug}/`);
    check(Boolean(de), `${slug}: /de/ version nahi bana`);
    if (de) {
      check(!/data-tool-faq/.test(de), `${slug}: /de/ par English FAQ leak ho raha hai`);
      const deFaq = faqPageOf(de);
      check(deFaq.count === 0, `${slug}: /de/ par FAQPage JSON-LD hai (English copy ke bina nahi hona chahiye)`);
    }
  }

  // --- 4d. Tools hub listing page FAQ ------------------------------------
  const toolsIndex = pages.get('/tools/');
  check(Boolean(toolsIndex), '/tools/ build mein nahi hai');
  if (toolsIndex) {
    const { count, questions } = faqPageOf(toolsIndex);
    check(count === 1, `/tools/: FAQPage blocks ${count} (1 hona chahiye)`);
    check(questions.length >= 5, `/tools/: hub FAQ mein ${questions.length} questions (5 chahiye)`);
    check(questions.every((q) => q.acceptedAnswer?.text?.length >= 90), '/tools/: koi hub answer chhota hai');
    const hubNames = questions.map((q) => String(q.name));
    const homeFaqNames = [
      ...[...home.matchAll(/"name":"([^"]+)"[^}]*"acceptedAnswer"/g)].map((m) => m[1]),
    ];
    const shared = hubNames.filter((q) => homeFaqNames.includes(q));
    check(shared.length === 0, `/tools/ aur home par same FAQ repeat: ${shared.slice(0, 2).join(' | ')}`);
  }

  // --- 4b. Blog page par exactly 5 blogs, deleted wale gayab --------------
  const blogIndex = pages.get('/blog/');
  check(Boolean(blogIndex), '/blog/ page build mein nahi');
  if (blogIndex) {
    const listed = [
      ...new Set([...blogIndex.matchAll(/href="\/blog\/([a-z0-9-]+)\//g)].map((m) => m[1])),
    ].filter((slug) => !['page', 'index.html'].includes(slug));
    check(
      listed.length === BLOG_PAGE_COUNT,
      `/blog/ par ${BLOG_PAGE_COUNT} blogs hone chahiye, mile ${listed.length} (${listed.join(', ')})`
    );
  }

  for (const slug of DELETED_BLOG_SLUGS) {
    check(!pages.has(`/blog/${slug}/`), `deleted blog ka page abhi bhi build mein hai: ${slug}`);
    check(
      ![...pages.values()].some((html) => html.includes(`/blog/${slug}/`)),
      `deleted blog ka link site par abhi bhi hai: ${slug}`
    );
  }

  // --- 5. Naye blog posts: 800-1000 words + article OG tags --------------
  for (const slug of NEW_BLOG_SLUGS) {
    const url = `/blog/${slug}/`;
    const html = pages.get(url);
    check(Boolean(html), `blog page build mein nahi: ${url}`);
    if (!html) continue;

    const article = html.match(/<article[\s\S]*?<\/article>/i);
    check(Boolean(article), `${slug}: <article> block nahi mila`);
    const words = article ? wordsOf(article[0]).length : 0;
    check(
      words >= 800 && words <= 1000,
      `${slug}: 800-1000 words chahiye, mile ${words}`
    );

    const text = article ? stripTags(article[0]).toLowerCase() : '';
    check(text.includes(MAIN_KEYWORD), `${slug}: main keyword "instanten" article mein nahi hai`);
    check(
      SUPPORT_KEYWORDS.some((k) => text.includes(k)),
      `${slug}: koi bhi supporting keyword article mein nahi mila`
    );

    check(metaOf(html, 'og:type') === 'article', `${slug}: og:type article nahi hai`);
    const blogOg = metaOf(html, 'og:image') || '';
    check(blogOg.startsWith(SITE), `${slug}: og:image absolute nahi (${blogOg})`);
    check(!blogOg.toLowerCase().endsWith('.svg'), `${slug}: og:image SVG hai (${blogOg})`);
    check(blogOg.includes(slug), `${slug}: per-page og:image nahi laga (${blogOg})`);
    check(blogOg === metaOf(html, 'twitter:image'), `${slug}: twitter:image og:image se match nahi karta`);
    check(Boolean(metaOf(html, 'og:image:alt')), `${slug}: og:image:alt missing`);
    check(Boolean(metaOf(html, 'article:published_time')), `${slug}: article:published_time missing`);
    check(Boolean(metaOf(html, 'article:author')), `${slug}: article:author missing`);
    check(Boolean(metaOf(html, 'article:section')), `${slug}: article:section missing`);
    check(metaOf(html, 'og:image:width') === '1200', `${slug}: og:image:width 1200 nahi`);
    check(metaOf(html, 'og:image:height') === '630', `${slug}: og:image:height 630 nahi`);

    const title = (html.match(/<title>([^<]*)<\/title>/i) || [, ''])[1];
    check(title.length <= 75, `${slug}: title bahut lamba (${title.length})`);
    const desc = metaOf(html, 'description') || '';
    check(desc.length >= 110 && desc.length <= 210, `${slug}: meta description length ${desc.length}`);

    // Locale versions bhi exist karein + canonical self-referencing ho
    for (const lang of ['de', 'ja', 'pt']) {
      check(pages.has(`/${lang}/blog/${slug}/`), `${slug}: /${lang}/ version nahi bana`);
    }
  }

  // --- 7. Purane blogs ka OG image bhi SVG nahi hona chahiye ------------
  for (const [url, html] of pages) {
    if (!/^\/blog\/[^/]+\/$/.test(url)) continue;
    const og = metaOf(html, 'og:image') || '';
    check(!og.toLowerCase().endsWith('.svg'), `${url}: og:image abhi bhi SVG hai (${og})`);
    // jhoothe dimensions: sirf apne /og-*.png card par 1200x630
    if (!/\/og-[a-z0-9-]+\.png$/i.test(og)) {
      check(
        metaOf(html, 'og:image:width') === null,
        `${url}: third-party image par galat og:image:width lagaya gaya hai (${og})`
      );
    }
  }

  // --- 8. Naye SEO copy mein "Google" shabd nahi -------------------------
  // (purane pages par pehle se maujood hai — wo is task ka scope nahi.)
  const newContent = [
    ['/ (long-form SEO copy)', home && (home.match(/<section[^>]*data-seo-longform[^>]*>[\s\S]*?<\/section>/i) || [''])[0]],
    ...NEW_BLOG_SLUGS.map((slug) => [
      `/blog/${slug}/ (article)`,
      pages.has(`/blog/${slug}/`)
        ? (pages.get(`/blog/${slug}/`).match(/<article[\s\S]*?<\/article>/i) || [''])[0]
        : '',
    ]),
  ];
  for (const [url, html] of newContent) {
    if (!html) continue;
    check(!/google/i.test(stripTags(html)), `${url}: naye copy mein "Google" shabd hai`);
  }

  return suite;
}
