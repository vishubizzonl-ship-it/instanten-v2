import "./dev-guard.mjs";
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://instanten.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ja', 'fr', 'es', 'ko', 'nl', 'sv', 'it', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    {
      name: 'error-pages',
      // 404.astro / 500.astro Astro khud dist/404.html, dist/500.html par deta hai.
      // 403/503 directory ke roop mein bante hain — unhe root par .html bana do,
      // taaki koi bhi host (nginx, Netlify, Vercel, serve-static) unhe dhoondh le.
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const fs = await import('node:fs/promises');
          const path = await import('node:path');
          const root = dir.pathname;
          const flat = async (dir, code) => {
            const from = path.join(dir, code, 'index.html');
            const to = path.join(dir, `${code}.html`);
            try {
              await fs.rename(from, to);
              await fs.rm(path.join(dir, code), { recursive: true, force: true });
            } catch {
              // page generate nahi hua — build fail karne ki zarurat nahi
            }
          };

          for (const code of ['403', '503']) await flat(root, code);

          /**
           * Per-tool error pages (compassinstant pattern):
           * dist/<tool>/403/index.html → dist/<tool>/403.html
           * Har tool ke apne 403/404/500/503 — noindex hain aur kisi sitemap
           * mein nahi, isliye flat .html shape host ke liye simplest hai.
           */
          for (const tool of ['onlinecompass', 'onlinebubblelevel', 'onlinespeedometer', 'onlineqibla']) {
            for (const code of ['403', '404', '500', '503']) await flat(path.join(root, tool), code);
          }
        },
      },
    },
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de',
          ja: 'ja',
          fr: 'fr',
          es: 'es',
          ko: 'ko',
          nl: 'nl',
          sv: 'sv',
          it: 'it',
          pt: 'pt',
        },
      },
      // Error pages (403/404/500/503) kabhi sitemap mein nahi — wo noindex hain.
      filter: (page) =>
        !page.endsWith('.xml') &&
        !/\/(403|404|500|503)(\/|\.html)?$/.test(page) &&
        // blog pagination ka pehla page /blog/ ka duplicate hai (noindex)
        !/\/blog\/page\/1\/?$/.test(page) &&
        // /privacy/ sirf redirect stub hai (asli page /privacy-policy/)
        !/\/privacy\/?$/.test(page),
      serialize: (item) => {
        item.lastmod = new Date().toISOString();
        if (item.url === 'https://instanten.com/' || item.url === 'https://instanten.com') {
          item.changefreq = ChangeFreqEnum.DAILY;
          item.priority = 1.0;
        } else if (item.url.includes('/blog/')) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 0.85;
        } else if (item.url.endsWith('/blog') || item.url.endsWith('/about') || item.url.endsWith('/contact')) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 0.8;
        } else {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.6;
        }
        return item;
      },
    }),
    {
      /**
       * Per-tool silo sitemaps ko sitemap-index.xml mein register karta hai.
       *
       * @astrojs/sitemap index khud likhta hai (sirf sitemap-0), isliye build ke
       * baad usme chaar tool sitemaps add ho jaate hain:
       *   /onlinecompass/sitemap.xml, /onlinebubblelevel/sitemap.xml,
       *   /onlinespeedometer/sitemap.xml, /onlineqibla/sitemap.xml
       * Root robots.txt bhi inhe list karta hai — dono raaste se discover ho jaate hain.
       */
      name: 'per-tool-sitemaps',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          const fs = await import('node:fs/promises');
          const path = await import('node:path');
          const root = dir.pathname;
          // Chaar per-tool silo sitemaps + instanten route ka apna sitemap.
          const extraSitemaps = [
            'onlinecompass/sitemap.xml',
            'onlinebubblelevel/sitemap.xml',
            'onlinespeedometer/sitemap.xml',
            'onlineqibla/sitemap.xml',
            'sitemap-instanten.xml',
          ];
          const indexFile = path.join(root, 'sitemap-index.xml');
          try {
            const xml = await fs.readFile(indexFile, 'utf8');
            // integration index ko ek hi line par likhta hai — isliye naye
            // entries bhi usi compact shape mein add hote hain.
            const missing = extraSitemaps.filter((path) => !xml.includes(`/${path}`));
            if (missing.length) {
              const entries = missing
                .map(
                  (path) =>
                    `<sitemap><loc>https://instanten.com/${path}</loc><lastmod>${new Date().toISOString()}</lastmod></sitemap>`
                )
                .join('');
              const next = xml.replace('</sitemapindex>', `${entries}</sitemapindex>`);
              await fs.writeFile(indexFile, next, 'utf8');
              logger.info(`sitemap-index: ${missing.length} extra sitemaps added`);
            }
          } catch {
            // index na ho to build fail karne ki zarurat nahi
          }
        },
      },
    },
    {
      /**
       * Sitemap se wo URLs hataata hai jinke page par `noindex` lagta hai.
       *
       * Do jagah se noindex aata hai:
       *   1. Patle tag pages (3 se kam tools — dekho src/utils/tagIndexable.ts)
       *   2. Untranslated silo blog articles (dekho src/i18n/articleLangs.ts)
       *
       * Noindex page sitemap me nahi hona chahiye — warna Search Console
       * "Submitted URL marked noindex" error deta hai. Build ke baad dist ki
       * HTML padh ke wo URLs sitemap se nikal diye jaate hain, taaki dono jagah
       * ek hi sach rahe. Ye hook har sitemap URL par chalta hai (sirf tags par
       * nahi), isliye aage jo bhi noindex page aaye wo khud hi nikal jayega.
       */
      name: 'drop-thin-tags-from-sitemap',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          const fs = await import('node:fs/promises');
          const path = await import('node:path');
          const root = dir.pathname;
          const indexFile = path.join(root, 'sitemap-0.xml');
          try {
            const xml = await fs.readFile(indexFile, 'utf8');
            const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
            const noindexed = [];
            /* robots meta ka attribute order guarantee nahi hota — pehle tag
               nikaalo, phir usme noindex dhoondo (warna #828282 wali galti). */
            const robotsIsNoindex = (html) => {
              for (const tag of html.match(/<meta\b[^>]*\bname=["']robots["'][^>]*>/gi) ?? []) {
                if (/noindex/i.test(tag)) return true;
              }
              return false;
            };
            for (const loc of locs) {
              const rel = loc.replace('https://instanten.com/', '').replace(/\/$/, '');
              const file = path.join(root, rel, 'index.html');
              try {
                const html = await fs.readFile(file, 'utf8');
                if (robotsIsNoindex(html)) noindexed.push(loc);
              } catch {
                // page hi nahi — koi baat nahi, sitemap suite wo alag pakadti hai
              }
            }
            if (!noindexed.length) return;

            /* Sirf <loc> hatana kaafi nahi — sitemap har <url> ke andar
               <xhtml:link rel="alternate" hreflang="…"> bhi likhta hai, jo
               noindex pages ko dobara advertise kar deta hai (galat bhasha ka
               wahi jhooth, bas XML me). Isliye wo alternates bhi hatate hain. */
            const noindexPaths = new Set(noindexed.map((loc) => loc.replace(/\/$/, '')));

            const next = xml
              .replace(/<url>[\s\S]*?<\/url>/g, (block) =>
                noindexed.some((loc) => block.includes(`<loc>${loc}</loc>`)) ? '' : block
              )
              .replace(/<xhtml:link\b[^>]*\/>/g, (tag) => {
                const href = (tag.match(/href="([^"]+)"/) ?? [])[1];
                return href && noindexPaths.has(href.replace(/\/$/, '')) ? '' : tag;
              })
              .replace(/\n{2,}/g, '\n');
            await fs.writeFile(indexFile, next, 'utf8');
            logger.info(`sitemap-0: ${noindexed.length} noindex URLs removed (loc + hreflang alternates)`);
          } catch {
            // sitemap-0 na ho to build fail karne ki zarurat nahi
          }
        },
      },
    },
  ],
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
  },
  content: {
    collections: {
      tools: {
        type: 'data',
        schema: ({ z }) => z.object({
          name: z.string(),
          category: z.string(),
          description: z.string(),
          pricing: z.enum(['Free', 'Freemium', 'Paid']),
          image: z.string(),
          url: z.string(),
          tags: z.array(z.string()).optional(),
          maker: z.string().optional(),
          addedDate: z.string().optional(),
          updatedDate: z.string().optional(),
          featured: z.boolean().optional(),
        }),
      },
      blog: {
        type: 'data',
        schema: ({ z }) => z.object({
          slug: z.string(),
          title: z.string(),
          excerpt: z.string(),
          thumbnail: z.string(),
          thumbnailAlt: z.string(),
          categories: z.array(z.object({
            name: z.string(),
            slug: z.string(),
          })),
          author: z.object({
            name: z.string(),
            slug: z.string(),
          }),
          publishedAt: z.string(),
          readingTime: z.number(),
        }),
      },
    },
  },
});
