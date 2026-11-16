import type { APIRoute } from 'astro';

const SITEMAP_PATH = '/sitemap.xml';

const getRobotsTxt = (sitemapURL: URL) => `# Instanten — Production SEO robots.txt
# Search engines & social preview crawlers explicitly allowed

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TelegramBot
Allow: /

# Block AI model training scrapers while keeping search indexing open
User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: MistralAI-Training
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: PetalBot
Disallow: /

# Global default rule for all standard search crawlers
User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /
Disallow: /api/
# Error pages (403/404/500/503) ko block NAHI karte: agar crawler unhe padh hi
# nahi sakta to unka "noindex, nofollow" bhi nahi dikhega. Block karne se
# URL index mein aa sakta hai — noindex zyada safe hai.

# ---------------------------------------------------------------- silos
# Instanten route page aur uska silo (blog, about, contact, privacy, terms)
# ko alag website maan kar chala rahe hain — isliye uske pages yahan alag se
# allow hain, taaki crawl priority saaf rahe.
Allow: /
Allow: /blog/
Allow: /about/
Allow: /contact/
Allow: /privacy-policy/
Allow: /terms/

# Chaar sensor tools ke apne silo — har SDK par us tool ka apna robots.txt
# (/onlinecompass/robots.txt aadi) aur apna sitemap hai.
Allow: /onlinecompass/
Allow: /onlinebubblelevel/
Allow: /onlinespeedometer/
Allow: /onlineqibla/

# -------------------------------------------------------------- sitemaps
# Sitemaps for the instanten website: route + silo ka apna sitemap, site-wide
# sitemap, index, aur chaar tool silos ke sitemaps.
Sitemap: ${new URL('sitemap.xml', sitemapURL.origin).href}
Sitemap: ${new URL('sitemap-index.xml', sitemapURL.origin).href}
Sitemap: ${new URL('sitemap-instanten.xml', sitemapURL.origin).href}
Sitemap: ${new URL('onlinecompass/sitemap.xml', sitemapURL.origin).href}
Sitemap: ${new URL('onlinebubblelevel/sitemap.xml', sitemapURL.origin).href}
Sitemap: ${new URL('onlinespeedometer/sitemap.xml', sitemapURL.origin).href}
Sitemap: ${new URL('onlineqibla/sitemap.xml', sitemapURL.origin).href}
`;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://instanten.com');
  const sitemapURL = new URL(SITEMAP_PATH, baseUrl);

  return new Response(getRobotsTxt(sitemapURL), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
