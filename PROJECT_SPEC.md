# Project Spec: instanten

## Overview
A modern SaaS directory website (instanten.com) — faster, cleaner, with working links and a Vercel-style design. No copied assets or UI.

## Competitor Analysis (compilefuture.com)
compilefuture.com is a blog/YouTube channel site with AI tool tutorials, not a SaaS directory. Key observations:
- Blog-style layout with categories, archives, pagination
- Search feature exists but limited to blog posts
- Heavy WordPress theme, slow loading, cluttered UI
- No dedicated tool cards with direct links, pricing, categories
- Social links (YouTube, X, Instagram, Telegram) prominent
- Content is tutorial/articles, not a curated tool directory

**How instanten is better:**
1. Purpose-built as a tool directory, not a blog
2. Direct working links to tools (no intermediary pages)
3. Clean Vercel-inspired design: near-white canvas, hairline borders, single hero gradient
4. Fast static generation (Astro), no WP overhead
5. Structured tool data: category, pricing, tags, description, long description
6. Responsive tool cards with 16:9 thumbnails, hover effects
7. Mobile-first header with hamburger menu
8. Zero dead UI controls (search/filter/theme hidden until implemented)
9. Accessibility: focus rings, reduced motion, semantic HTML, ARIA labels
10. SEO-ready: meta tags, Open Graph, sitemap-ready routes

## Design System (see DESIGN.md)
- Font: DM Sans (system fallback: sans-serif)
- Background: linear-gradient #FDFDFF → #F8F7FF
- Ink: #29294B | Muted: #828282 | Border: #E1E1E8 | Accent: #9895FF → #514DCC
- Max-width container: 1296px | Gutters: 24px | Header height: 88px
- No heavy shadows; 1px hairline borders only; minimal depth

## Phase 1 (Current — Foundation)
- [x] Astro 6 + TypeScript + Tailwind CSS v4
- [x] Content Collection (`tools`) with Zod schema
- [x] Original logo (SVG)
- [x] Sticky responsive header (desktop + mobile shell)
- [x] Centered hero with gradient text
- [x] Responsive grid: 3 desktop / 2 tablet / 1 mobile
- [x] Six original tool cards with 16:9 rounded images
- [x] Basic `/tools/[slug]` detail pages
- [x] Footer + custom 404
- [x] Local original SVG/WebP thumbnails
- [ ] Search/filter/theme controls (exposed only when implemented — hidden/dead controls not included)

## Phase 2 (Remaining)
- Search with instant results
- Category filters + sorting
- Pagination
- Dark/light theme toggle
- Mobile navigation with slide drawer
- Enhanced detail pages (tags, reviews, alternatives)
- SEO meta, Open Graph, sitemap
- Accessibility audit (focus rings, reduced motion, ARIA)
- Performance: lazy images, preconnect, font preload
- Unit/integration tests

## Tools (6)
1. Online Ruler — Utility / Free
2. Image Compressor — Developer / Freemium
3. QR Generator — Marketing / Free
4. JSON Formatter — Developer / Free
5. Word Counter — Writing / Free
6. Color Palette — Design / Paid

## Routes
- `/` — Homepage (hero + grid)
- `/tools/[slug]` — Tool detail
- `/404` — Custom 404

## Constraints
- Native Astro components only (no React/Vue/Svelte)
- Minimal JavaScript; no database
- Tailwind v4 (`@import "tailwindcss"`)
- Astro Assets for optimized images
- Strict schema validation for content