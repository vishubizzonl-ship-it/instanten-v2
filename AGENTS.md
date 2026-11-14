## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Rules

### Rule 1 (permanent, highest priority) — sirf wahi 8 cheezein

Is site ko inhi 8 se banaya gaya tha:

| # | Cheez | Kaam |
|---|---|---|
| 1 | **Git** | version control, GitHub push |
| 2 | **Node.js v22.23.4** | build + server + tests |
| 3 | **Astro v7 project** | site ka framework |
| 4 | ~~Vercel DESIGN.md~~ → **Rule 2 dekho** | iski jagah compilefuture.com ka design |
| 5 | **web-design-guidelines skill** | layout/typography/accessibility ke rules |
| 6 | **tailwind-4-docs skill** | Tailwind v4 ka sahi tareeka |
| 7 | **Tailwind CSS v4** | saara styling |
| 8 | **Astro Docs MCP** (`https://mcp.docs.astro.build/mcp`) | Astro docs ka source of truth |

Abhi **7 chuninda cheezein** use hoti hain: 1, 2, 3, 5, 6, 7, 8 — aur #4 ki jagah compilefuture.com ka design.

Koi naya package/framework/tool nahi. Tests bhi plain node se (`tests/*.mjs`), server bhi zero-dependency (`serve-static.mjs`).

> Note: repo mein abhi `astro ^6.4.8` laga hua hai (v7 nahi). Upgrade tabhi karunga jab tum bologe.

### Rule 2 — design ka source = compilefuture.com

8 mein se #4 (Vercel DESIGN.md) ki jagah design **https://compilefuture.com/**
se copy kiya gaya hai. Aage bhi design ka reference wahi rahega — Vercel/v0 ka
design system nahi.

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
