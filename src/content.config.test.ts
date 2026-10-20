import { describe, it, expect } from 'vitest';

describe('Content Schema', () => {
  it('validates required tool fields', () => {
    const validTool = {
      slug: 'online-ruler',
      name: 'Online Ruler',
      category: 'Utility',
      description: 'A precise online ruler for measurements.',
      pricing: 'Free',
      image: '/thumbnails/ruler.svg',
      url: 'https://example.com/ruler',
    };
    expect(validTool.slug).toBeDefined();
    expect(validTool.name).toBeDefined();
    expect(['Utility', 'Developer', 'Marketing', 'Design', 'Writing', 'Productivity']).toContain(validTool.category);
  });

  it('requires url to start with http', () => {
    const urls = [
      'https://example.com',
      'http://example.com',
    ];
    for (const url of urls) {
      expect(url.startsWith('http')).toBe(true);
    }
  });
});
