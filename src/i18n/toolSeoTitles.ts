/**
 * English `<title>` overrides for the 12 generic tool pages.
 *
 * Pehle title sirf `<tool name> — Instanten` tha (24-34 chars) — SERP me jagah
 * bachi rehti thi aur koi search-intent phrase nahi hota tha. Yahan har tool ke
 * liye wahi phrase likha hai jo log asal me type karte hain ("measure in cm",
 * "format json online", "free secure passwords").
 *
 * Rules:
 *   - 60 characters se kam (seoTitle() se pehle hi fit).
 *   - Brand "Instanten" sirf tab jab jagah bache — warna chhod diya.
 *   - Page ka <h1> aur visible copy isse nahi badalte, sirf title tag.
 *
 * Localized pages (`/ja/tools/...`) apna localized naam hi use karte hain —
 * wahan query phrase pehle se wahi bhasha me hota hai.
 */
export const toolSeoTitles: Record<string, string> = {
  'base64-encoder': 'Base64 Encoder & Decoder — Encode Text Online',
  'color-palette': 'Color Palette Generator — Free Online Tool',
  'css-grid-generator': 'CSS Grid Generator — Build Layouts Online',
  'image-compressor': 'Image Compressor — Compress Images Online',
  'json-formatter': 'JSON Formatter & Validator — Format JSON Online',
  'markdown-editor': 'Markdown Editor — Live Preview & Export',
  'meta-tag-generator': 'Meta Tag Generator — Generate SEO & OG Tags',
  'online-ruler': 'Online Ruler — Measure in cm & Inches',
  'password-generator': 'Password Generator — Free Secure Passwords',
  'qr-generator': 'QR Code Generator — Free Online QR Maker',
  'regex-tester': 'Regex Tester — Test Regular Expressions Online',
  'word-counter': 'Word Counter — Count Words & Characters',
};
