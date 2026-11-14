## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Rules

> **⚠️ Sabse pehle [`RULES.md`](./RULES.md) padho — wahi authoritative rule file hai.**
> Usme Rule 1 (sirf wahi 8 cheezein), Rule 2 (compilefuture.com design tokens),
> Rule 3 (jo kaam bola hai wahi karo) aur Rule 3.1 (check + report format) ek jagah
> combined hain, plus saare standing orders. Neeche wahi rules summary ke liye hain.
> Automated lock: `tests/rules.mjs`.

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

- **"Jo kaam bola gaya hai, wahi karo — na kam, na zyada."**
- Do exactly what the user asks. Nothing more, nothing less.
- No proactive changes, suggestions, or extra work unless explicitly requested.
- Simple rasta pehle; ek hi command se chale — options ka dher nahi.

### Rule 3.1 (permanent) — kaam hua ya nahi, zaroor check karo

Jab bhi main website mein kuch edit karun ya koi kaam karun, **kaam khatam hone ke
baad lazmi check karna hai** ki jo kaam bola gaya tha wo sach mein hua hai:

1. **Jo maanga gaya, wahi hua?** — build/CSS/HTML mein uska proof dekho (grep,
   rendered HTML, ya `tests/run.mjs`), "kar diya" bol ke aage mat badho.
2. **Nahi hua to kaam pura karo** — adhoora chhodna mana hai.
3. **Galat hua to sahi karo** — galat version revert/rewrite karo, phir dobara check.
4. **Jahan ho sake, test likho** — taaki wahi galti dobara na ho sake
   (`tests/*.mjs`, plain node).
5. Report hamesha is format mein: **kya banaya → kaise check kiya → pass/fail**,
   aur pass/fail ka saboot (line, command ka output, ya test ka naam).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
