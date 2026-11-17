# Deploy — Cloudflare Workers (static assets + contact API)

Site **static** hai (Astro SSG, koi adapter nahi). Cloudflare par ise
**Workers + Static Assets** se serve karte hain: `dist/` ka har file free static
asset path se jaata hai, aur Worker code sirf `/api/contact` par chalta hai
(email `send_email` binding se). Request-level Worker usage bill nahi hoti.

## Ek baar ka setup

```bash
npx wrangler@4 login          # browser khulega, Cloudflare account authorize karo
npx wrangler@4 whoami         # kaunsa account/whoami — check
```

## Deploy

```bash
npm run deploy        # = npm run build && npx wrangler@4 deploy
```

Pehla deploy `instanten` naam ka Worker banata hai. Uske baad har deploy usi
Worker ko update karta hai (naya version, rollback dashboard se).

Bina upload kiya test karna ho (config + bundle check):

```bash
npm run deploy:dry    # = npm run build && npx wrangler@4 deploy --dry-run
```

## Custom domain

Workers → `instanten` → **Settings → Domains & Routes → Add custom domain** →
`instanten.com` (aur `www.instanten.com`). Agar domain pehle kisi purane Worker
par tha, to wahan se hata pehle — warna "domain already in use".

## Email ke liye 2 cheezein dashboard me

`send_email` binding tabhi kaam karti hai jab Email Routing setup ho:

1. **Email Routing → instanten.com** onboarded, aur `hello@instanten.com`
   (yahan `CONTACT_FROM` se aata hai) verified sender ho — warna
   `E_SENDER_NOT_VERIFIED`.
2. **Email Routing → Destination addresses** me `vishubizz.onl@gmail.com`
   **verified** ho — warna `E_RECIPIENT_NOT_ALLOWED`.

Free plan par sirf verified destinations par bhej sakte hain (yehi
`wrangler.jsonc` ki `allowed_destination_addresses` me listed hain). Random
recipients chahiye to Workers Paid ($5/mo) — abhi zarurat nahi.

## Local check, deploy se pehle

```bash
npm run build
npm run test:site      # 24 suites: build ke dist/ par
npm run test:worker    # worker/contact.test.mjs — email, honeypot, rate limit, origin
npm test               # vitest
npm run deploy:dry     # assets + bindings ka final check
```

## Config ka sabse zaroori hissa

```jsonc
"assets": {
  "directory": "./dist",
  "binding": "ASSETS",
  "not_found_handling": "404-page",
  "run_worker_first": ["/api/*"]
}
```

`run_worker_first` ke bina Worker sirf tab chalta jab koi matching file na mile.
`["/api/*"]` bolta hai: sirf API path pehle Worker par bhejo, baaki sab static
asset path se serve karo — matlab HTML/CSS/images Worker requests count nahi
karte.

## Rollback

Dashboard → Workers → `instanten` → **Deployments** → purana version →
**Rollback**. `wrangler rollback` bhi chalta hai.

## Cloudflare Pages?

Is repo me Pages ka rasta rakha nahi gaya: Pages Functions me `send_email`
binding available nahi hoti, isliye Pages par contact form ke liye ek alag
Worker + proxy Function chahiye tha. Workers me sab ek hi deploy me chalta hai.
Purana Pages setup (commit `3e3ae0e`) git history me hai, agar kabhi zarurat pade.
