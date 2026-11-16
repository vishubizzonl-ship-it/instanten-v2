# Functional suite (buttons/inputs asli DOM me)

Ye suite 19 static suites se alag hai: HAR page ko **jsdom** me kholkar uska
JavaScript chalati hai, phir asli user jaisa click/type karke result check
karti hai. Static suites sirf HTML padhti hain, isliye "button dabane par kuch
hota hai ya nahi" wahan pakda nahi jaata.

```bash
npm run build
npm install --no-save jsdom     # sirf is suite ke liye, package.json me nahi
node tests/functional/run.mjs dist
```

| File | Kya check karti hai |
|---|---|
| `01-links.mjs` | Har internal link/asset/#anchor ka target dist me hai |
| `02-tools.mjs` | 12 tools: input → button → output (JSON, base64, regex, password, QR…) |
| `03-chrome.mjs` | Theme, mobile drawer, language picker, search panel, scroll-top, 404 |
| `04-instruments.mjs` | Compass/bubble/speed/qibla — nakli sensors se |
| `05-library.mjs` | Directory filter, chips, sort, /search/?q=, blog, tags |
| `06-contact.mjs` | Contact form: validation, worker POST, fallback, reset |
| `07-sweep.mjs` | Har page type ka sample: JS errors + basics |
| `08-search.mjs` | Search entry point: 8 page types × button → panel → results (108 checks) |

`jsdom` package.json me jaan-boojh kar nahi hai: Rule hai ki site me koi naya
package na aaye. Ye sirf dev machine par `--no-save` se chalta hai.
