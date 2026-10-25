# i18n Audit — Before Changes

Date: 2026-10-25
Project: instanten-v2 (Astro 6, static build)

## 0. Concurrent sessions

`ps aux | grep opencode` showed exactly one OpenCode process, the audit/build session itself. No second session was editing the project.

Working tree already contained uncommitted i18n work before this audit. That work was inspected, not discarded.

## 1. Languages shown by the language switcher

`src/components/LanguagePicker.astro` reads `languages` from `src/i18n/ui.ts`.
It shows **10 languages**:

| Code | Label |
|---|---|
| en | English (default, no URL prefix) |
| de | Deutsch |
| ja | 日本語 |
| fr | Français |
| es | Español |
| ko | 한국어 |
| nl | Nederlands |
| sv | Svenska |
| it | Italiano |
| pt | Português |

The header (mobile + desktop) and footer all render `LanguagePicker`.
The mobile drawer has no language switcher, matching the design.

## 2. Page files

### English routes (`src/pages`)

| File | Renders | Has back link (EN) | Localized copy route exists |
|---|---|---|---|
| `index.astro` | home + tool grid + SEO sections | no | `[lang]/index.astro` |
| `page/[page].astro` | home pagination | no | `[lang]/page/[page].astro` |
| `about.astro` | long About article, last-reviewed line | yes | `[lang]/about.astro` |
| `contact.astro` | long contact page + form + channels | yes | `[lang]/contact.astro` |
| `privacy-policy.astro` | 10-section privacy policy, last-updated line | yes | `[lang]/privacy-policy.astro` |
| `terms.astro` | 9-section terms, last-updated line | yes | `[lang]/terms.astro` |
| `blog/index.astro` | blog list | yes | `[lang]/blog/index.astro` |
| `blog/[slug].astro` | full article | yes (All posts) | `[lang]/blog/[slug].astro` |
| `blog/page/[page].astro` | blog pagination | no | **missing** |
| `tools/index.astro` | tool directory | no | `[lang]/tools/index.astro` |
| `tools/[slug].astro` | full tool details (features, use cases, related) | no | `[lang]/tools/[slug].astro` |
| `categories.astro` | category cards | no | `[lang]/categories.astro` |
| `category/[slug].astro` | category tool list | no | `[lang]/category/[slug].astro` |
| `tags.astro` | tag cloud | no | `[lang]/tags.astro` |
| `tag/[slug].astro` | tag tool list | no | `[lang]/tag/[slug].astro` |
| `makers.astro` | maker cards | no | `[lang]/makers.astro` |
| `maker/[slug].astro` | maker tool list | no | `[lang]/maker/[slug].astro` |
| `pricing.astro` | pricing cards | no | `[lang]/pricing/index.astro` |
| `pricing/[slug].astro` | pricing tool list | no | `[lang]/pricing/[slug].astro` |
| `search.astro` | search results | no | `[lang]/search.astro` |
| `submit.astro` | submission guide | no | `[lang]/submit.astro` |
| `404.astro` | not found | no | **missing** (not normally routable per language) |
| `privacy.astro` | meta-refresh redirect to `/privacy-policy/` | no | **missing** |

### Localized route generation

All `[lang]` pages use `getStaticPaths()` over `nonDefaultLangs` (9 languages) and read `Astro.params.lang`.
They do **not** use `Astro.currentLocale` and they do not serve the English route themselves.
English is served by separate root files with different markup.

## 3. Components and layouts containing text

| File | Text source | Notes |
|---|---|---|
| `layouts/Layout.astro` | `skip.link`; passes title/description | default SEO strings hard-coded in English |
| `components/Header.astro` | nav labels, submit, aria labels | localized via `useTranslations` |
| `components/Footer.astro` | description, rights, quick links, aria labels | localized; social labels are brand names |
| `components/MobileDrawer.astro` | nav, categories, archives, submit, aria labels | localized; social labels are brand names |
| `components/LanguagePicker.astro` | language names, select/options aria | complete 10-language list |
| `components/SearchPanel.astro` | heading, placeholder, submit, category labels | localized |
| `components/ThemeToggle.astro` | aria label | localized |
| `components/ScrollToTop.astro` | aria/title | localized |
| `components/Logo.astro` | aria label, wordmark "instanten" | wordmark is a brand name |
| `components/QuickLinksBar.astro` | quick links | localized |
| `components/EditorialHero.astro` | hero title/subtitle | localized |
| `components/HomeSeoSection.astro` | full SEO/FAQ copy | localized through `src/i18n/home/*` |
| `components/ToolCard.astro` | category, pricing, maker, dates, aria | localized through `toolContent` |
| `components/BlogCard.astro` | date, search button, author | localized through `blogContent` |
| `components/FilterBar.astro` | filters, sort labels | localized |
| `components/Pagination.astro`, `BlogPagination.astro` | page/prev/next aria | localized |
| `components/Breadcrumbs.astro` | receives labels | labels hard-coded per page |
| `components/SeoHead.astro` | meta defaults, JSON-LD prose | mostly English |

## 4. Dictionary files before changes

| File | Content |
|---|---|
| `src/i18n/ui.ts` | 10-language UI dictionary (subset per language, incomplete) |
| `src/i18n/uiExtra.ts` | 10-language additional UI dictionary |
| `src/i18n/utils.ts` | `getLangFromUrl`, `useTranslations`, path helpers, date formatting |
| `src/i18n/pageContent.ts` + `src/i18n/pages/*` | short per-page copy (not full translations) |
| `src/i18n/seoContent.ts` | per-page SEO titles/descriptions |
| `src/i18n/homeContent.ts` + `src/i18n/home/*` | full home/FAQ translations |
| `src/i18n/toolContent.ts` | tool names/descriptions/pricing notes per language |
| `src/i18n/blogContent.ts` | blog titles/excerpts per language |
| `src/i18n/submitContent.ts` | submit page copy per language |

## 5. Element / sentence differences found

### About — known bug confirmed

English `about.astro`:
- back link `← Back to Instanten`
- `Last reviewed: October 23, 2026`
- 7 `<section>` blocks, 9 `<h2>`, 16 `<p>`, 9 key-feature `<li>`
- inline links to Online Ruler, Image Compressor, Color Palette, JSON Formatter, contact, privacy, terms, NIST, W3C, IETF, CommonMark, CSS Grid, Google Search Central

Every localized `[lang]/about.astro`:
- **no back link at all**
- **no last-reviewed line**
- 0 `<section>`, 2 `<h2>`, 7 `<p>`
- only 3 short paragraphs, so sentences are not translations of the English article
- different CSS classes and layout (`site-container py-16` instead of `ror-main`)

This is exactly the reported bug and it also affects the other long pages.

### Contact

- English: back link, long lead with email link, 4 form fields (name, email, topic, message), "Verified Contact Channels" section, 3-item list, closing note.
- Localized: no back link, no name/topic fields, no channels section, short copy. Different markup and content.

### Privacy Policy

- English: back link, last-updated line, 10 numbered sections, 13 `<h2>`, 21 `<p>`, lists, many links.
- Localized: no back link, no last-updated line, 2 headings, 6 `<p>`, 3 short paragraphs only. Not a translation.

### Terms & Conditions

- English: back link, last-updated line, 9 numbered sections, 11 `<h2>`, 18 `<p>`, lists, disclaimer paragraphs.
- Localized: no back link, no last-updated line, 2 headings, 6 `<p>`, 3 short paragraphs only. Not a translation.

### Blog index

- English: back link, `ror-main`/`ror-container`, `ror-h1`, `ror-lead`, `ror-blog-list` cards.
- Localized: no back link, different classes (`site-container py-16`), different list classes.
- Link count differs by 1 (back link) and class count differs.

### Blog article

- English: back link "All posts", date, full article body, `<h2>`/`<h3>`/lists/blockquote.
- Localized: no back link, short 3-paragraph summary instead of the article, different class names.
- Two English posts have Markdown bodies; JSON posts use the same generated fallback in English.

### Blog pagination

- English `/blog/page/1/`, `/blog/page/2/` exist.
- No localized equivalents exist and the switcher can produce broken links for those routes.

### Tool detail

- English: full template with pricing details, key features, use cases, tags, 4 related tools, visit button, maker/added/updated footer. Image count and section count differ per tool.
- Localized: shortened template with pricing note, how-to text, visit button, no features/use cases/tags/related tools/maker footer.
- Different `<section>`, `<footer>`, `<img>`, `<p>` and heading counts.

### Home pagination (`/page/[page]/`)

- Localized pages include `HomeSeoSection`; English pages do not.
- That adds 4 sections, 29 paragraphs, 16 headings and many links in localized pages.

### Redirect page

- `/privacy/` exists only in English.

### Structure otherwise already equal

`/`, `/categories/`, `/category/*/`, `/makers/`, `/maker/*/`, `/tags/`, `/tag/*/`, `/pricing/`, `/pricing/*/`, `/search/`, `/submit/`, `/tools/` already produce the same element counts in all languages.
Their remaining issues are text keys and back-link absence only on pages where English has a back link.

## 6. Hard-coded English strings found outside dictionaries

- `src/pages/index.astro`: page title/description/aria/breadcrumb/category text, img alt, pagination labels.
- `src/pages/about.astro`, `contact.astro`, `privacy-policy.astro`, `terms.astro`: full English articles.
- `src/pages/blog/index.astro`, `blog/[slug].astro`, `blog/page/[page].astro`: titles, leads, dates, fallback article text.
- `src/pages/tools/index.astro`, `tools/[slug].astro`: page copy, features/use case headings, aria labels, "Featured", "Visit Tool", "Maker", "Added", "Last Updated".
- `src/pages/categories.astro`, `makers.astro`, `tags.astro`, `pricing.astro`, `search.astro`, `submit.astro`, `404.astro`: page headings/leads/body.
- `src/pages/category/[slug].astro`, `tag/[slug].astro`, `maker/[slug].astro`, `pricing/[slug].astro`: eyebrow "Category/Tag/Maker/Pricing", counts, aria.
- `src/pages/page/[page].astro`: page title, descriptions, aria, category, alt.
- `src/pages/[lang]/**`: localized variants with a separate, shorter English-derived copy in `pageContent.ts`.
- `src/layouts/Layout.astro` and `components/SeoHead.astro`: English meta defaults/JSON-LD.

## 7. Required correction strategy

1. Keep `i18n` config (already correct: `defaultLocale: 'en'`, all 10 locales, `prefixDefaultLocale: false`).
2. Make one template per page. The template must render English and all 9 translations from `Astro.currentLocale`.
3. Use `getRelativeLocaleUrl` for the language switcher and for the shared back link.
4. Add `BackLink.astro` and use it wherever English currently shows a back link.
5. Put full translations for the long pages (about, contact, privacy, terms) in the dictionary, preserving every sentence, heading, link, list item and line (last reviewed / last updated).
6. Keep all classes, element order, attributes, images and counts identical across languages.
7. Generate localized versions of every English route, including blog pagination and the legacy privacy redirect.
