# Site tests

Built HTML par chalta hai (wahi bytes jo browser ko milte hain). Teeno suite:

| Suite | Kya check karta hai |
|---|---|
| `site-integrity` | title/description length, canonical, robots, JSON-LD valid (`@context`, `@type`), sitemap count, error pages sitemap se bahar |
| `links` | har internal `<a href>` resolve hona chahiye (1040 pages, ~73,000 links) |
| `i18n-silo` | har locale = English jitne hi page, har page par poora hreflang cluster (10 locales + x-default), canonical = apna hreflang, localized page par English leak nahi |

## Chalana

```bash
npm run build
npm run test:site            # baseline se compare (ratchet)
npm run test:site:update     # fix karne ke baad baseline refresh
```

Build folder: `releases/current` → `dist` fallback, ya seedha path de do: `node tests/run.mjs some/dir`.

## Baseline ratchet

`tests/baseline.json` mein aaj ke known issues likhe hain. Isliye:

- purana bug galti se badh gaya → **FAIL**
- naya bug aaya → **FAIL**
- bug fix hua → PASS + "Sudhar gaya" line, phir `--update-baseline` chala do

Isse CI/`start.sh` ko har baar red hone ki aadat nahi padegi, par regression kabhi chhup nahi sakta.
