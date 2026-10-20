import { describe, it, expect } from 'vitest';
import {
  parseFilters,
  filterTools,
  sortTools,
  paginateTools,
  getTotalPages,
  slugify,
  buildSearchText,
} from './filters';

describe('slugify', () => {
  it('converts text to slug format', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('handles special characters', () => {
    expect(slugify("It's a test!")).toBe('its-a-test');
  });
});

describe('parseFilters', () => {
  it('parses query parameters', () => {
    const params = new URLSearchParams('q=test&category=developer');
    const filters = parseFilters(params);
    expect(filters.q).toBe('test');
    expect(filters.category).toBe('developer');
  });

  it('ignores invalid pricing values', () => {
    const params = new URLSearchParams('pricing=invalid');
    const filters = parseFilters(params);
    expect(filters.pricing).toBeUndefined();
  });
});

describe('filterTools', () => {
  const mockTools = [
    { data: { name: 'A', category: 'Developer', pricing: 'Free', tags: ['js'] } },
    { data: { name: 'B', category: 'Design', pricing: 'Paid', tags: ['css'] } },
  ] as any;

  it('filters by category', () => {
    expect(filterTools(mockTools, { category: 'developer' })).toHaveLength(1);
  });

  it('filters by pricing', () => {
    expect(filterTools(mockTools, { pricing: 'paid' })).toHaveLength(1);
  });
});

describe('sortTools', () => {
  const mockTools = [
    { data: { name: 'B', featured: false } },
    { data: { name: 'A', featured: true } },
  ] as any;

  it('sorts by featured first', () => {
    const sorted = sortTools(mockTools, 'featured');
    expect(sorted[0].data.name).toBe('A');
  });

  it('sorts by name', () => {
    const sorted = sortTools(mockTools, 'name');
    expect(sorted[0].data.name).toBe('A');
  });
});

describe('paginateTools', () => {
  const mockTools = Array.from({ length: 15 }, (_, i) => ({ data: { name: `Tool ${i}` } })) as any;

  it('paginates correctly', () => {
    expect(paginateTools(mockTools, 1, 10)).toHaveLength(10);
    expect(paginateTools(mockTools, 2, 10)).toHaveLength(5);
  });

  it('calculates total pages', () => {
    expect(getTotalPages(15, 10)).toBe(2);
  });
});

describe('buildSearchText', () => {
  it('includes all searchable fields', () => {
    const text = buildSearchText({
      name: 'Test Tool',
      description: 'A tool',
      category: 'Developer',
      pricing: 'Free',
      maker: 'Maker',
      tags: ['tag1'],
      features: ['feat'],
      useCases: ['use'],
    } as any);
    expect(text).toContain('test tool');
    expect(text).toContain('developer');
  });
});
