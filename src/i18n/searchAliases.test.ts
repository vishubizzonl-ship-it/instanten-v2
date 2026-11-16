import { describe, it, expect } from 'vitest';
import { readdirSync } from 'node:fs';
import { toolSearchAliases, aliasedSlugs } from './searchAliases';
import { languages } from './ui';

const toolSlugs = readdirSync('src/content/tools')
  .filter((file) => file.endsWith('.json'))
  .map((file) => file.replace(/\.json$/, ''));

const langs = Object.keys(languages) as (keyof typeof languages)[];

describe('search aliases', () => {
  it('har tool ke liye alias entry maujood hai', () => {
    expect(toolSlugs.filter((slug) => !aliasedSlugs().includes(slug))).toEqual([]);
  });

  it('har bhasha ke liye kuch na kuch alias hai', () => {
    for (const slug of toolSlugs) {
      for (const lang of langs) {
        expect(toolSearchAliases(slug, lang as never).length, `${slug} / ${lang}`).toBeGreaterThan(3);
      }
    }
  });

  it('English shabd har locale me shaamil hote hain', () => {
    for (const slug of toolSlugs) {
      for (const word of toolSearchAliases(slug, 'en').split(' ')) {
        for (const lang of langs) {
          expect(toolSearchAliases(slug, lang as never), `${slug}/${lang}`).toContain(word);
        }
      }
    }
  });

  it('duplicate shabd repeat nahi hote', () => {
    for (const slug of toolSlugs) {
      for (const lang of langs) {
        const words = toolSearchAliases(slug, lang as never).split(' ');
        expect(new Set(words).size).toBe(words.length);
      }
    }
  });

  it('natural shabd har bhasha me hain', () => {
    expect(toolSearchAliases('onlinecompass', 'ja')).toContain('方位磁針');
    expect(toolSearchAliases('onlinecompass', 'de')).toContain('bussole');
    expect(toolSearchAliases('onlinecompass', 'fr')).toContain('boussole');
    expect(toolSearchAliases('onlinecompass', 'ko')).toContain('나침반');
    expect(toolSearchAliases('onlinecompass', 'es')).toContain('brújula');
  });
});
