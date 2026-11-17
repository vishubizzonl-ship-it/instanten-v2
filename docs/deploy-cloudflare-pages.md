# Deploy — Cloudflare Pages (static site, mailto contact form)

Site **poori static** hai: Astro SSG, koi adapter nahi, koi server code nahi.
Cloudflare Pages par `dist/` jaata hai, bas.

Contact form ka transport **mailto** hai — submit par visitor ka mail app khulta hai
jisme naam, email, subject aur message pehle se bhara hota hai, addressed to
`vishubizz.onl@gmail.com`. Kyun? Cloudflare ke `send_email` binding **Pages
Functions me available nahi** hoti, sirf Workers me. Pages par form ko sach me
network se bhejne ka koi free Cloudflare-native rasta nahi hai — isliye jhootha
"Message sent" dikhane ke bajaye mail app kholte hain.

## Ek baar ka setup

```bash
npx wrangler@4 login                     # browser me authorize
npx wrangler@4 whoami                    # account check
npm run pages:create                     # 'instanten' Pages project (ek hi baar)
```

## Deploy

```bash
npm run deploy        # = build + pre-flight check ke bina seedha upload
npm run deploy:dry    # = build + node scripts/pages-check.mjs  (upload nahi)
```

`npm run deploy` = `npm run build && npx wrangler@4 pages deploy dist --project-name=instanten`.

> `wrangler pages deploy` me `--dry-run` flag hota hi nahi, isliye pre-flight ke liye
> `scripts/pages-check.mjs` likha gaya hai: dist, `_headers`, `_redirects`, `404.html`,
> stray `_worker.js`, contact form ka mailto mode, aur kitni files/kitna MB upload
> hoga — sab check karke exit code deta hai.

## Git se auto-deploy (optional, isi se best)

Dashboard → Workers & Pages → Create → **Pages** → Connect to Git → repo
`instanten-v2`, branch `main`:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(khaali)* |

`NODE_VERSION` ki zarurat nahi — repo me `.nvmrc` = `22` hai, Pages usi ko padhta hai.

## Custom domain

Pages project → **Custom domains** → `instanten.com` (+ `www.instanten.com`).
Agar domain abhi kisi purane Worker par route hai, pehle wahan se hatao — warna
"domain already in use".

## Contact form kaise behave karta hai (honest)

| Step | Kya hota hai |
|---|---|
| Visitor form bharke Send dabata hai | validation (name, email, message) — galat/khali par error message |
| Sab theek | `mailto:vishubizz.onl@gmail.com?subject=[bug] Naam&body=...` banta hai aur mail app khulta hai |
| Screen par message | "Your email app is opening with this message ready to send. Press Send there — nothing is sent until you do." (10 bhashaon me) |
| Network requests | **0** — koi backend, koi third-party form service |

Matlab: message tabhi jaata hai jab visitor apne mail app me Send dabata hai. Site
kabhi "Message sent" ka jhooth nahi bolti.

## Agar sach me server-side email chahiye (Workers rasta)

Tab deploy Workers par karo (Pages par nahi):

```bash
npm run deploy:workers                # build + wrangler deploy
PUBLIC_CONTACT_TRANSPORT=api npm run build   # build ke waqt form ko API mode me daalo
```

Us mode me `POST /api/contact` + `send_email` binding chalti hai (verified
destination par free). Detail: `docs/deploy-cloudflare-workers.md`.
`wrangler.jsonc` aur `worker/` isi optional raste ke liye repo me rakhe hain.

## Rollback

Dashboard → Pages → `instanten` → **Deployments** → kisi bhi purane deployment par
**Rollback**. (Pages har deploy ka poora snapshot rakhta hai.)

## Free plan

- 500 builds/month, unlimited requests, unlimited bandwidth, free SSL.
- 20,000 files per deployment / 25 MiB per file — yahan ~1,300 files, 99 MB total.
- Email form ka koi cost nahi (mailto — visitor ka apna mail app).
