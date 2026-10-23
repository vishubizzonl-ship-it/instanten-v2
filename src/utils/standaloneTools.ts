import fs from 'node:fs';
import path from 'node:path';
import { getCollection } from 'astro:content';
import type { ToolData } from './filters';

export interface ToolEntry {
  data: ToolData;
}

export interface StandaloneToolData extends ToolData {
  href: string;
  isStandalone: true;
}

const PUBLIC_DIR = path.join(process.cwd(), 'public');

function readMeta(html: string, name: string): string | undefined {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `<meta[^>]*\\bname=["']${escaped}["'][^>]*\\bcontent=["']([^"']*)["'][^>]*>|<meta[^>]*\\bcontent=["']([^"']*)["'][^>]*\\bname=["']${escaped}["'][^>]*>`,
    'i'
  );
  const match = html.match(pattern);
  return match ? (match[1] ?? match[2] ?? '').trim() : undefined;
}

function readProperty(html: string, property: string): string | undefined {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `<meta[^>]*\\bproperty=["']${escaped}["'][^>]*\\bcontent=["']([^"']*)["'][^>]*>|<meta[^>]*\\bcontent=["']([^"']*)["'][^>]*\\bproperty=["']${escaped}["'][^>]*>`,
    'i'
  );
  const match = html.match(pattern);
  return match ? (match[1] ?? match[2] ?? '').trim() : undefined;
}

function readTitle(html: string): string | undefined {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s+/g, ' ').trim() : undefined;
}

let cachedTools: StandaloneToolData[] | null = null;

export function getStandaloneTools(): StandaloneToolData[] {
  if (cachedTools) return cachedTools;

  const tools: StandaloneToolData[] = [];

  let dirEntries: fs.Dirent[] = [];
  try {
    dirEntries = fs.readdirSync(PUBLIC_DIR, { withFileTypes: true });
  } catch {
    cachedTools = [];
    return cachedTools;
  }

  for (const entry of dirEntries) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name.startsWith('_')) continue;

    const indexPath = path.join(PUBLIC_DIR, entry.name, 'index.html');
    if (!fs.existsSync(indexPath)) continue;

    let html = '';
    try {
      html = fs.readFileSync(indexPath, 'utf8');
    } catch {
      continue;
    }

    const slug = entry.name;
    const name = readMeta(html, 'tool:title') || readTitle(html) || slug;
    const description =
      readMeta(html, 'tool:description') ||
      readMeta(html, 'description') ||
      `${name} — free instant online tool by Instanten.`;
    const image =
      readMeta(html, 'tool:thumbnail') ||
      readProperty(html, 'og:image') ||
      `/${slug}/thumbnail.svg`;
    const category = readMeta(html, 'tool:category') || 'UTILITY';

    tools.push({
      slug,
      name,
      category,
      description,
      pricing: 'Free',
      image,
      url: `/${slug}/`,
      href: `/${slug}/`,
      tags: [],
      addedDate: undefined,
      updatedDate: undefined,
      featured: false,
      isStandalone: true,
    });
  }

  tools.sort((a, b) => a.name.localeCompare(b.name));
  cachedTools = tools;
  return cachedTools;
}

export async function getAllTools(): Promise<ToolEntry[]> {
  const collectionTools = await getCollection('tools');
  const merged = new Map<string, ToolEntry>();

  for (const tool of collectionTools) {
    merged.set(tool.data.slug, { data: tool.data as ToolData });
  }

  for (const standalone of getStandaloneTools()) {
    merged.set(standalone.slug, { data: standalone });
  }

  return Array.from(merged.values());
}
