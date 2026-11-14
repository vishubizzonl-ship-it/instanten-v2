# AGENTS.md — instanten-v2 (READ THIS FIRST, EVERY COMMAND)

> Ye file **automatically** har kaam se pehle padhi jati hai. Isme user ke saare
> rules combined hain (Rule 1 + Rule 2 + Rule 3 + Rule 3.1 + standing orders).
> **User ko ye rules dobara batane ki zarurat nahi** — bas command do.
> `RULES.md` isi ka detailed version hai; dono ek hi baat kehte hain.
> Automated lock: `tests/rules.mjs` (har build par chalta hai).

## Development

Dev server background mode mein:

```
astro dev --background
```

Manage: `astro dev stop` / `astro dev status` / `astro dev logs`.
Site chalane ka user-facing tareeka: `bash start.sh` (port 4322).

---

> **Ye file authoritative hai.** Har naye kaam se pehle ye padhi jati hai, aur har
> kaam ke baad isi ke hisaab se check hota hai. Dobara-dobara batane ki zarurat nahi.
> `AGENTS.md`, `PROJECT_SPEC.md` aur agent ki memory — sab isi file ko follow karte hain.
>
> Automated lock: `tests/rules.mjs` (har build par chalta hai, `node tests/run.mjs`).

---

## Rule 1 (permanent, highest priority) — sirf wahi 8 cheezein

Site inhi 8 se banti hai. **Koi naya package / framework / tool nahi.**

| # | Cheez | Kaam |
|---|---|---|
| 1 | **Git** | version control, GitHub push (GitHub — Google Drive nahi) |
| 2 | **Node.js v22.23.4** | build + server + tests |
| 3 | **Astro** project | site ka framework |
| 4 | ~~Vercel DESIGN.md~~ → **Rule 2 dekho** | iski jagah compilefuture.com ka design |
| 5 | **web-design-guidelines skill** | layout / typography / accessibility ke rules |
| 6 | **tailwind-4-docs skill** | Tailwind v4 ka sahi tareeka |
| 7 | **Tailwind CSS v4** | **saara** styling (alag hand-written CSS file nahi) |
| 8 | **Astro Docs MCP** (`https://mcp.docs.astro.build/mcp`) | Astro docs = source of truth |

Amal mein 7 use hote hain: 1, 2, 3, 5, 6, 7, 8 — aur #4 ki jagah compilefuture.com.

- `dependencies` **sirf** `astro` (devDependencies = Astro project ki pehle wali list).
- Naya kaam agar kisi library ko "chahta" hai, to **khud likho** (jaise QR encoder
  `src/lib/tools/qr.mjs` — koi npm package nahi).
- Tests bhi plain node (`tests/*.mjs`), server bhi zero-dependency (`serve-static.mjs`).

---

## Rule 2 (permanent) — design ka source = compilefuture.com

Design **https://compilefuture.com/** se. Vercel/v0 ka design system **nahi**.
Us site ke asli CSS se liye gaye tokens (yahi approved palette hai):

| Token | Value |
|---|---|
| Font | **DM Sans** (400 / 500 / 600 / 700 / 800) — headings bhi DM Sans |
| Site background (light) | gradient `#FDFDFF` → `#F8F7FF` |
| Layout / card | `#FFFFFF` |
| Primary (text/heading) | `#29294B` |
| Secondary (muted text) | `#696981` |
| Accent | `#5955D1` (`--accent: #514DCC` theme mein) |
| Border | `#E1E1E8` |
| Header background | `#FDFDFF` (dark: `#1C1C1C`, submenu `#222222`) |
| Highlight background | `#F2F2F6` |
| Button | gradient `#9895FF` → `#514DCC` |

- Rang hamesha token se: `text-ink`, `text-muted`, `border-border-hairline`,
  `bg-surface`, `bg-accent`, `text-danger` … **raw hex component mein nahi**.
- Naya rang chahiye to pehle `src/styles/app.css` mein token banao (`--x` + `@theme`
  ka `--color-x`), phir utility use karo.

---

## Rule 3 (permanent) — jo kaam bola hai, bas wahi karo

**"Jo kaam bola gaya hai, wahi karo — na kam, na zyada."**

- Exactly wahi kaam. **Nothing more, nothing less.**
- Bina bole koi change/suggestion/extra kaam nahi.
- Simple rasta pehle; ek hi command se chale (`bash start.sh`) — options ka dher nahi.
- Jo pehle se likha hai use **delete mat karo** (tool copy/FAQ/links waghairah).
- Jo cheez chhupani nahi: agar pichhle kaam mein rule toota ho to saaf batao aur theek karo.

---

## Rule 3.1 (permanent) — kaam hua ya nahi, zaroor check karo

Har edit/kaam ke **baad lazmi** check karo ki jo bola gaya tha wo sach mein hua:

1. **Jo maanga gaya, wahi hua?** — build/CSS/HTML mein proof (grep, rendered HTML,
   `tests/run.mjs`). "Kar diya" bol ke aage mat badho.
2. **Nahi hua to kaam pura karo** — adhoora chhodna mana hai.
3. **Galat hua to sahi karo** — revert/rewrite, phir dobara check.
4. **Jahan ho sake test likho** — taaki wahi galti dobara na ho sake (`tests/*.mjs`,
   plain node). Negative test bhi: jaan-boojh kar todkar dekho ki test pakadta hai.
5. **Report hamesha is format mein:**
   **kya banaya → kaise check kiya → pass/fail + saboot**
   (file/line, command ka output, ya test ka naam).

---

## Standing orders (user ke permanent instructions)

- **Domain:** `instanten.com`.
- **Mobile:** user phone Chrome par verify karta hai → mobile breakpoint lock + test.
- **Copy:** kabhi "Google" shabd nahi (GA ke technical URLs ke alawa).
- **Analytics:** ek hi shared code; per-tool `content_group`; error pages par tag nahi.
- **Routes:** `onlinecompass`, `onlinebubblelevel`, `onlinespeedometer`, `onlineqibla`;
  no redirects; locale-prefixed URLs.
- **Keywords:** duplicate spellings ek hi baar; **published blog rewrite nahi**;
  FAQ JSON-LD **max 1 per page**.
- **Error pages** 403/404/500/503 → `noindex, nofollow`, sitemap se bahar.
- **Top-bar pills:** `onlinecompass`, `BubbleLevel`, `Speedometer`, `Qibla`;
  logo = full `online<tool>`.
- **Footer language button:** circle **nahi** — pill + language ka naam (header circle rehta hai).
- **Undo** = sirf last edit.
- **User manually inspect na kare** → har fix ke saath automated test.
- **Server:** sirf `bash start.sh` (proot/container/cloud nahi). Complicated na karo.

---

## Kaam karne ka tareeka (har command par yahi)

1. Rule 1–3.1 yaad rakho — **user ko dobara batane ki zarurat nahi**.
2. Sirf bola gaya kaam karo (Rule 3).
3. Build + tests chalao (`node tests/run.mjs`, `node tests/tools-core.mjs`).
4. Rule 3.1 ka report do: **kya banaya → kaise check kiya → pass/fail + saboot**.
5. Commit + push (GitHub, PAT URL se).

---

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
