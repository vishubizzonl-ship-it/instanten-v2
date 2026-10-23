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
      filter: (page) =>
        !page.endsWith('.xml') &&
        !page.endsWith('/404/') &&
        !page.endsWith('/404') &&
        !page.endsWith('/500/') &&
        !page.endsWith('/500'),
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
