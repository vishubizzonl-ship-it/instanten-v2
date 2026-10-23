import { fuzzyMatches } from './fuzzy';

export const PER_PAGE = 10;
export const PRICINGS = ['Free', 'Freemium', 'Paid'] as const;

export type Pricing = (typeof PRICINGS)[number];
export type SortOption = 'featured' | 'newest' | 'name';

export interface ToolData {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  pricing: Pricing;
  pricingDetails?: string;
  image: string;
  url: string;
  href?: string;
  isStandalone?: boolean;
  tags?: string[];
  maker?: string;
  addedDate?: string;
  updatedDate?: string;
  features?: string[];
  useCases?: string[];
  featured?: boolean;
}

export interface ToolEntryLike {
  data: ToolData;
}

export interface ToolFilters {
  q?: string;
  category?: string;
  pricing?: string;
  tags?: string[];
  sort?: SortOption;
  page?: number;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function pricingSlug(pricing: string): string {
  return pricing.toLowerCase();
}

export function toolHref(tool: Pick<ToolData, 'slug' | 'href'>): string {
  return tool.href || `/tools/${tool.slug}/`;
}

export function formatDate(value?: string): string {
  if (!value) return '';
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function buildSearchText(tool: ToolData): string {
  return [
    tool.name,
    tool.description,
    tool.longDescription || '',
    tool.category,
    tool.pricing,
    tool.maker || '',
    ...(tool.tags || []),
    ...(tool.features || []),
    ...(tool.useCases || []),
  ]
    .join(' ')
    .toLowerCase();
}

export function parseFilters(searchParams: URLSearchParams): ToolFilters {
  const filters: ToolFilters = {};

  const q = searchParams.get('q')?.trim();
  if (q) filters.q = q;

  const category = searchParams.get('category') || undefined;
  if (category) filters.category = category;

  const pricing = searchParams.get('pricing') || undefined;
  if (pricing && PRICINGS.some((item) => item.toLowerCase() === pricing.toLowerCase())) {
    filters.pricing = pricing;
  }

  const tags = searchParams.get('tags');
  if (tags) {
    const seen = new Set<string>();
    filters.tags = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => {
        if (!tag) return false;
        const key = tag.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
  }

  const sort = searchParams.get('sort');
  if (sort && ['featured', 'newest', 'name'].includes(sort)) {
    filters.sort = sort as SortOption;
  }

  const page = searchParams.get('page');
  if (page) {
    const pageNumber = Number.parseInt(page, 10);
    if (Number.isFinite(pageNumber) && pageNumber > 0) filters.page = pageNumber;
  }

  return filters;
}

export function buildUrl(basePath: string, filters: ToolFilters): string {
  const params = new URLSearchParams();

  if (filters.q) params.set('q', filters.q);
  if (filters.category) params.set('category', filters.category);
  if (filters.pricing) params.set('pricing', filters.pricing);
  if (filters.tags?.length) params.set('tags', filters.tags.join(','));
  if (filters.sort && filters.sort !== 'featured') params.set('sort', filters.sort);
  if (filters.page && filters.page > 1) params.set('page', String(filters.page));

  const query = params.toString();
  return query ? `${basePath}?${query}` : basePath;
}

export function filterTools<T extends ToolEntryLike>(tools: T[], filters: ToolFilters): T[] {
  return tools.filter((tool) => {
    const data = tool.data;

    if (filters.q) {
      const haystack = buildSearchText(data);
      const matched = fuzzyMatches(filters.q, { name: data.name, text: haystack });
      if (!matched) return false;
    }

    if (filters.category && slugify(data.category) !== slugify(filters.category)) {
      return false;
    }

    if (filters.pricing && data.pricing.toLowerCase() !== filters.pricing.toLowerCase()) {
      return false;
    }

    if (filters.tags?.length) {
      const toolTags = (data.tags || []).map((tag) => tag.toLowerCase());
      if (!filters.tags.every((tag) => toolTags.includes(tag.toLowerCase()))) {
        return false;
      }
    }

    return true;
  });
}

export function sortTools<T extends ToolEntryLike>(tools: T[], sort: SortOption = 'featured'): T[] {
  const sorted = [...tools];

  sorted.sort((a, b) => {
    if (sort === 'name') return a.data.name.localeCompare(b.data.name);

    if (sort === 'newest') {
      const dateA = a.data.addedDate ? new Date(a.data.addedDate).getTime() : 0;
      const dateB = b.data.addedDate ? new Date(b.data.addedDate).getTime() : 0;
      if (dateA !== dateB) return dateB - dateA;
      return a.data.name.localeCompare(b.data.name);
    }

    const featuredA = a.data.featured ? 1 : 0;
    const featuredB = b.data.featured ? 1 : 0;
    if (featuredA !== featuredB) return featuredB - featuredA;
    return a.data.name.localeCompare(b.data.name);
  });

  return sorted;
}

export function paginateTools<T>(tools: T[], page: number, perPage = PER_PAGE): T[] {
  const safePage = Math.max(1, page);
  const start = (safePage - 1) * perPage;
  return tools.slice(start, start + perPage);
}

export function getTotalPages(total: number, perPage = PER_PAGE): number {
  return Math.max(1, Math.ceil(total / perPage));
}

export function getFilterOptions(filters: ToolFilters) {
  return {
    hasFilters: Boolean(filters.q || filters.category || filters.pricing || filters.tags?.length),
    activeCount: [
      filters.q ? 1 : 0,
      filters.category ? 1 : 0,
      filters.pricing ? 1 : 0,
      filters.tags?.length || 0,
    ].reduce((total, value) => total + value, 0),
  };
}

export function uniqueCategories<T extends ToolEntryLike>(tools: T[]): string[] {
  return [...new Set(tools.map((tool) => tool.data.category))].sort((a, b) => a.localeCompare(b));
}

export function uniqueTags<T extends ToolEntryLike>(tools: T[]): string[] {
  return [...new Set(tools.flatMap((tool) => tool.data.tags || []))].sort((a, b) =>
    a.localeCompare(b)
  );
}

export function uniqueMakers<T extends ToolEntryLike>(tools: T[]): string[] {
  return [...new Set(tools.map((tool) => tool.data.maker).filter((maker): maker is string => Boolean(maker)))]
    .sort((a, b) => a.localeCompare(b));
}

export function toCardData(tool: ToolEntryLike): ToolData {
  return {
    slug: tool.data.slug,
    name: tool.data.name,
    category: tool.data.category,
    description: tool.data.description,
    longDescription: tool.data.longDescription,
    pricing: tool.data.pricing,
    pricingDetails: tool.data.pricingDetails,
    image: tool.data.image,
    url: tool.data.url,
    href: tool.data.href,
    isStandalone: tool.data.isStandalone,
    tags: tool.data.tags,
    maker: tool.data.maker,
    addedDate: tool.data.addedDate,
    updatedDate: tool.data.updatedDate,
    features: tool.data.features,
    useCases: tool.data.useCases,
    featured: tool.data.featured,
  };
}
