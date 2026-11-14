## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Rules

### Rule 1 (permanent, highest priority) — sirf wahi 8 cheezein

Site inhi 8 se bani hai, koi naya package/library/method nahi:

| # | Cheez | Version |
|---|---|---|
| 1 | astro | ^6.4.8 |
| 2 | @astrojs/sitemap | ^3.7.4 |
| 3 | tailwindcss | ^4.3.3 |
| 4 | @tailwindcss/vite | ^4.3.3 |
| 5 | typescript | ^6.0.3 |
| 6 | @astrojs/check | ^0.9.12 |
| 7 | puppeteer-core | ^25.16.0 |
| 8 | node | 22.x |

Koi naya npm package install nahi, koi naya framework nahi, koi naya tool nahi.
Tests bhi plain node se (koi test library nahi) — `tests/*.mjs`.

### Rule 2 — design ka source = compilefuture.com

In 8 mein se "vercel design md" use nahi hua tha; uski jagah design
**https://compilefuture.com/** se copy kiya gaya hai. Aage bhi design ka
reference wahi rahega (na vercel/v0 ka design system).

Us site ke tokens (asli CSS se liye gaye):

| Token | Value |
|---|---|
| Font | **DM Sans** (400 / 500 / 600 / 700 / 800) — headings bhi DM Sans |
| Site background (light) | gradient `#FDFDFF` → `#F8F7FF` |
| Layout / card | `#FFFFFF` |
| Primary (text/heading) | `#29294B` |
| Secondary (muted text) | `#696981` |
| Accent | `#5955D1` |
| Border | `#E1E1E8` |
| Header background | `#FDFDFF` (dark: `#1C1C1C`, submenu `#222222`) |
| Highlight background | `#F2F2F6` |
| Button | gradient `#9895FF` → `#514DCC` |

### Rule 3 — working style

- Do exactly what the user asks. Nothing more, nothing less.
- No proactive changes, suggestions, or extra work unless explicitly requested.
- Har change ke baad khud verify karo: "kya banaya → kaise check kiya → pass/fail".
- Simple rasta pehle; ek hi command se chale — options ka dher nahi.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
