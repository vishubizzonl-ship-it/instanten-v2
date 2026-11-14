/**
 * Per-tool FAQ copy (English).
 *
 * Har tool page par 5 sawal — 3 tool-specific + 2 tools-hub wale — taaki
 * har page ka FAQ unique rahe (duplicate content na bane) aur FAQPage
 * JSON-LD ek hi block rahe.
 *
 * Answers must stay true to what the tool actually does (see
 * src/content/tools/*.json). "Google" shabd deliberately avoided.
 */

export type ToolFaq = { q: string; a: string };

export const toolFaqs: Record<string, ToolFaq[]> = {
  'json-formatter': [
    {
      q: 'How do I format a large JSON file without uploading it?',
      a: 'Paste the payload into the input panel and press Format. Parsing happens in your own browser, so a multi-megabyte API response never leaves your machine. The tree view collapses large objects so you can walk to the node you need instead of scrolling through thousands of lines.',
    },
    {
      q: 'Why does the formatter say my JSON is invalid?',
      a: 'The usual culprits are a trailing comma, single quotes instead of double quotes, an unquoted key, or an undefined value where null was expected. The validator reports the line where parsing stopped, and because it follows RFC 8259, anything it rejects will also be rejected by a strict JSON parser in code.',
    },
    {
      q: 'What is the difference between beautify and minify here?',
      a: 'Beautify adds indentation and line breaks so a payload is readable during debugging. Minify strips every optional space and newline to produce the smallest possible string for a request body or a config file. The data itself is identical — only whitespace changes.',
    },
    {
      q: 'Is this JSON formatter free and does it need an account?',
      a: 'Both are no. The tool is part of a free online tools hub, so there is no sign-up, no usage cap and no paid tier for formatting or validation. Open the page, paste, copy the result and close the tab.',
    },
    {
      q: 'Can I use the JSON formatter on a phone?',
      a: 'Yes. The layout is responsive and the input works with a mobile keyboard, so small payloads are easy to fix on the go. For very large files a desktop browser is more comfortable, because the tree view has more room to expand.',
    },
  ],
  'base64-encoder': [
    {
      q: 'How do I encode text to Base64 without sending it to a server?',
      a: 'Type or paste the text and the encoded string appears immediately. The conversion runs locally in the browser following RFC 4648, so nothing is transmitted and nothing is stored once you close the page.',
    },
    {
      q: 'Does Base64 encoding handle emoji and accented characters?',
      a: 'Yes. The tool encodes UTF-8 bytes first, so emoji, Arabic, Devanagari, Japanese and accented Latin text all round-trip correctly. Encoders that treat input as Latin-1 are the reason many people see question marks after decoding — this one avoids that by design.',
    },
    {
      q: 'Can I decode a Base64 image back into a file?',
      a: 'Yes. Paste a data URI or a raw Base64 string and the decoder returns the original bytes, which you can download as a file. That is the fastest way to recover an image that was embedded in an email template, a CSS file or an API payload.',
    },
    {
      q: 'Why does Base64 make my data about a third larger?',
      a: 'Base64 represents every three bytes as four printable characters, so the output is roughly 33% bigger than the input. That is a property of the encoding, not a fault of the tool: it exists so binary data can travel through systems that only handle text safely.',
    },
    {
      q: 'Is the Base64 tool free with no daily limit?',
      a: 'Yes. There is no counter, no quota and no account. You can encode or decode as many strings and files as a working session needs, which is the point of keeping an instant tool in a free online tools hub.',
    },
  ],
  'word-counter': [
    {
      q: 'How are words counted — by spaces or by tokens?',
      a: 'Words are counted by whitespace-separated sequences after trimming, which is the same convention most word processors and publishers use. Hyphenated words count once, so a piece of writing scores the same here as it does in an editor with a word limit.',
    },
    {
      q: 'Does the word counter include characters with and without spaces?',
      a: 'Both figures are shown separately, because limits differ: social posts and meta descriptions usually count characters including spaces, while some editorial systems count only letters. Sentences and paragraphs are reported alongside them so you can judge the shape of a draft, not just its length.',
    },
    {
      q: 'How is reading time estimated?',
      a: 'Reading time is calculated from a conventional adult silent-reading pace, and a slower speaking estimate is given for scripts and presentations. Both are estimates for planning, not a measurement, so treat them as a guide when you are deciding whether a section is too long.',
    },
    {
      q: 'Does the text I paste stay private?',
      a: 'Yes. Counting happens in your browser, so the draft is never uploaded and never stored. That matters for unpublished work, client copy and anything under embargo, which is why the tool can be used on real documents rather than only on test text.',
    },
    {
      q: 'Can I use the word counter offline?',
      a: 'Once the page has loaded, counting continues without a connection because nothing is being requested from a server. Reloading the page needs a connection, so keep the tab open if you are working somewhere without reliable data.',
    },
  ],
  'password-generator': [
    {
      q: 'Is the generated password actually random and safe?',
      a: 'The generator uses the browser\'s cryptographic random source, not a predictable pseudo-random function, so the output cannot be reproduced from the time or the page state. A password nobody can predict is the only kind worth storing.',
    },
    {
      q: 'How long should a generated password be?',
      a: 'Sixteen characters with mixed character sets is a sensible default for everyday accounts, and twenty or more is better for anything that protects money or infrastructure. The entropy readout shows what each extra character buys you, which is more useful than memorising arbitrary rules.',
    },
    {
      q: 'Is the password generated on a server I have to trust?',
      a: 'No. Generation runs entirely in your browser, so the password never travels over the network and is never logged anywhere. You can generate it, copy it into a password manager and close the tab without leaving a copy behind.',
    },
    {
      q: 'Should I use a passphrase or a random string?',
      a: 'A random string is stronger per character; a passphrase of several unrelated words is easier to type on a phone and easier to recall for the few secrets you must memorise. Use the random string for anything stored in a manager and a passphrase for the one or two you have to remember.',
    },
    {
      q: 'Is there a limit on how many passwords I can generate?',
      a: 'No. The tool is free with no cap and no account, so you can generate a fresh password for every new sign-up instead of reusing one. Batch generation makes that practical when you are setting up several accounts at once.',
    },
  ],
  'qr-generator': [
    {
      q: 'What kind of QR codes can I create for free?',
      a: 'The free tier covers a URL, plain text, Wi-Fi credentials, an SMS or email action, and a contact card, with colour options and PNG or SVG export at high resolution. Dynamic codes with scan analytics sit in the paid tier, and the page states that plainly rather than hiding it behind a sign-up.',
    },
    {
      q: 'Will my QR code ever stop working?',
      a: 'A code that encodes the destination directly never expires, because the data is inside the image itself. Codes that point at a short redirect can be switched off by whoever controls that redirect, which is why a printed code for a menu or a poster should encode the final address directly.',
    },
    {
      q: 'Which export format should I use for print?',
      a: 'Choose SVG for anything printed at scale — a poster, a label, packaging — because vector output stays sharp at any size. PNG is fine for screens, slides and email. Keep the code large enough to scan comfortably and leave a clear margin around it.',
    },
    {
      q: 'Is there a limit on how many QR codes I can generate?',
      a: 'No limit on static codes. Generate as many as a project needs and export each one immediately; nothing is stored between visits, so there is no library to manage and no account to maintain.',
    },
    {
      q: 'Do the QR codes work with any phone camera?',
      a: 'Yes. The codes follow the standard QR format, so the built-in camera on Android and iOS reads them without an app. Test one print at the real size before a large run, because a code that scans on screen can fail when it is printed too small.',
    },
  ],
  'image-compressor': [
    {
      q: 'Are my images uploaded when they are compressed?',
      a: 'No. Compression runs in your browser using the canvas APIs, so the file never leaves your device. That is what makes the tool safe for client mockups, unreleased product shots and anything under an NDA.',
    },
    {
      q: 'How much can I shrink an image without visible quality loss?',
      a: 'Most photographs drop 50–70% in file size at a quality setting where the difference is invisible on a phone screen. Start around 70–80% quality, compare the result at 100% zoom, and step down only while the image still holds up.',
    },
    {
      q: 'Which formats are supported, and should I switch to WebP?',
      a: 'JPEG, PNG, WebP and AVIF input are handled. WebP typically beats JPEG at the same visual quality and is supported by every current major browser, so it is a good default for web pages; keep PNG when you need transparency.',
    },
    {
      q: 'Does compressing an image remove its metadata?',
      a: 'Re-encoding through canvas drops most metadata, including camera information. That is usually good for privacy, but if you need to keep an ICC colour profile for print work, keep the original file instead of the compressed copy.',
    },
    {
      q: 'Can I compress several images at once?',
      a: 'The tool is built for a batch-friendly workflow, so a set of product or blog images can be handled in one session. It is free with no cap, which matters on a listing day when fifty images need to be under an upload limit.',
    },
  ],
  'color-palette': [
    {
      q: 'How does the palette tool check accessibility?',
      a: 'Every foreground and background pair is measured against WCAG 2.2 Level AA contrast — 4.5:1 for normal text and 3:1 for large text. The ratio is shown for each pair, so you can see how far a borderline colour is from passing rather than guessing.',
    },
    {
      q: 'Which harmony rules are available?',
      a: 'Complementary, analogous, triadic and monochromatic. Each produces a different relationship between hues, so the quickest workflow is to generate all four from one brand colour and keep the set that reads best in a real layout.',
    },
    {
      q: 'Can I export the palette into my project?',
      a: 'Yes — CSS variables, a Tailwind config, Figma JSON and Adobe ASE. That means the same values move from a moodboard into code without anyone re-typing hex codes and introducing a typo that is invisible until someone measures contrast.',
    },
    {
      q: 'What is colour blindness simulation for?',
      a: 'It shows how a palette reads with deuteranopia, protanopia or tritanopia, which is how a meaningful share of visitors will see it. If two status colours become indistinguishable in the simulation, the interface needs a second cue such as an icon or a label.',
    },
    {
      q: 'Is the colour tool free to use commercially?',
      a: 'Yes. There is no licence fee, no account and no attribution requirement, so palettes built here can ship in client work. The contrast checks are based on published WCAG maths, so the numbers you see are the numbers an auditor will get.',
    },
  ],
  'css-grid-generator': [
    {
      q: 'Is the generated CSS safe to paste into production?',
      a: 'Yes. The output is standard CSS Grid — nothing vendor-specific, no runtime library and no wrapper classes you have to adopt. Everything it emits follows the CSS Grid Layout specification, so it behaves the same way in Chrome, Safari, Firefox and Edge.',
    },
    {
      q: 'Can I build a responsive layout, or only a fixed one?',
      a: 'Both. Track sizing accepts fr, px, percentages, auto and minmax, so a grid can stretch fluidly and collapse at a breakpoint without rewriting it. Named grid areas keep the template readable when you come back to it months later.',
    },
    {
      q: 'Do I need to know CSS Grid to use this?',
      a: 'No, but the tool is a good way to learn it. Drag tracks, set gaps and alignment, and watch the CSS appear line by line; most people pick up the properties in a single session because they can see what each one changes.',
    },
    {
      q: 'How does this fit with the rest of the tools hub?',
      a: 'Layout and colour usually travel together, so the CSS Grid generator pairs with the colour palette builder and the meta tag generator when you are assembling a page. All three open from the same free online tools hub with no install and no account.',
    },
    {
      q: 'Is there a limit on how complex a grid I can generate?',
      a: 'Nested grids are supported, so a page-level layout with card-level grids inside it is fine. There is no usage cap; if a template gets unwieldy, that is usually a sign to simplify the layout rather than a limit of the tool.',
    },
  ],
  'markdown-editor': [
    {
      q: 'Does the preview match what other Markdown tools will render?',
      a: 'The editor targets CommonMark, the standardised Markdown specification, so headings, lists, tables and code fences render the same way in a repository, a docs site and this preview. Dialect-specific extensions are the usual reason previews disagree between tools.',
    },
    {
      q: 'Is my draft saved anywhere?',
      a: 'Nothing is uploaded and nothing is stored on a server, so treat the page as a scratchpad: export what you want to keep. That is a privacy feature rather than an omission — an unpublished draft never leaves your browser.',
    },
    {
      q: 'Can I export the document to HTML or PDF?',
      a: 'Yes. Export the rendered HTML, produce a PDF, or copy the raw Markdown into a README. Tables, task lists, footnotes and code blocks are kept, so a document written here survives the trip into a repository intact.',
    },
    {
      q: 'Does the editor count words while I write?',
      a: 'Yes, with a reading-time estimate alongside the count. That combination is useful when a piece has a hard limit: you can see the length climbing while the argument is still being written, instead of cutting it afterwards.',
    },
    {
      q: 'Is the Markdown editor free?',
      a: 'Yes — no account, no cost and no limit on how many documents you write. It is one of the writing tools in a free online tools hub, and it keeps working offline once the page has loaded.',
    },
  ],
  'meta-tag-generator': [
    {
      q: 'Which tags does the generator produce?',
      a: 'Title, description, viewport, robots and canonical URL, plus the Open Graph and Twitter Card tags that control how a link appears when it is shared. The output is a single copy-paste block in HTML, with a JSON export if your build pipeline prefers structured data.',
    },
    {
      q: 'How long should a title and description be?',
      a: 'Aim for roughly 50–60 characters in the title and 120–160 in the description, because longer values get truncated in search results and social previews. The generator shows the length as you type, which is easier than discovering the cutoff after publishing.',
    },
    {
      q: 'What is the difference between Open Graph and Twitter Card tags?',
      a: 'Open Graph is the wider standard used by most social platforms; Twitter Cards are X\'s own set. Emitting both costs four lines and guarantees a usable preview everywhere, so the generator writes both by default rather than making you choose.',
    },
    {
      q: 'Why does a shared link show a blank preview image?',
      a: 'Almost always because the image URL is relative, too large, or in a format the crawler cannot render — SVG is the classic offender. Use an absolute URL to a PNG or JPEG of roughly 1200 × 630 pixels, and re-check the preview after a fresh share.',
    },
    {
      q: 'Is this meta tag tool free?',
      a: 'Yes, with no sign-up and no limit. Generate tags for as many pages as a site has, copy them straight into your layout, and come back whenever a page changes.',
    },
  ],
  'online-ruler': [
    {
      q: 'How do I calibrate the ruler so the measurements are real?',
      a: 'Place a standard bank or ID card against the on-screen ruler and adjust until the drawn card outline matches it exactly. Every ID-1 card is 85.60 × 53.98 mm (3.370 × 2.125 in) by ISO/IEC 7810, so it is a reliable reference that everyone already has.',
    },
    {
      q: 'Why does the ruler show a different length than a physical one?',
      a: 'Because screen pixel density varies, an uncalibrated ruler measures pixels on a grid, not millimetres. Calibrate once per device and the scale becomes correct; a browser or display zoom level change means you should recalibrate.',
    },
    {
      q: 'Which units can I measure in?',
      a: 'Inches with 1/16, 1/8, 1/4 and 1/2 marks, plus centimetres, millimetres and pixels. The inch is defined as exactly 25.4 mm by the international yard and pound agreement, so a metric-to-imperial conversion on this page is exact rather than rounded.',
    },
    {
      q: 'Can I use the online ruler on a phone or tablet?',
      a: 'Yes, and a phone is often the most convenient screen to measure against an object. Calibrate on that device first; the pixel ratio differs from your laptop, so a calibration done elsewhere does not carry over.',
    },
    {
      q: 'Is the ruler accurate enough for design work?',
      a: 'After calibration it is typically good to within a millimetre, which is enough for checking component sizes, envelope dimensions and PCB footprints. For tolerances tighter than that, a physical instrument is still the right tool.',
    },
  ],
  'regex-tester': [
    {
      q: 'Which regular expression flavours are supported?',
      a: 'JavaScript, Python, PCRE and Go. Flavours differ in small but decisive ways — named groups, lookbehind support, how greedy quantifiers behave — so testing the pattern in the flavour you will actually ship saves a debugging round later.',
    },
    {
      q: 'How does the step-by-step explanation help?',
      a: 'It narrates the pattern one token at a time, so a regex someone else wrote becomes readable in a minute. That is usually faster than reasoning about a wall of brackets, and it makes the fix obvious when a group is doing the wrong thing.',
    },
    {
      q: 'Is the text I test sent anywhere?',
      a: 'No. Matching runs in your browser, so sample text, logs and customer data stay on your machine. That is why the tester can be used on real log lines rather than on invented examples.',
    },
    {
      q: 'Can it show capture groups and named groups?',
      a: 'Yes. Each match is listed with its numbered and named groups, which is where most bugs live — a pattern that matches overall but puts the wrong substring into group 2 looks correct until it is unpacked.',
    },
    {
      q: 'Is the regex tester free with no limit?',
      a: 'Yes. There is no account, no cap and no cost. The cheat sheet sits next to the tester, so you can look up a syntax detail and paste it into the pattern without leaving the page.',
    },
  ],
};

/**
 * Tools hub (listing page) FAQ — 5 hub-level questions.
 * Home page ka FAQ isse alag hai, taaki dono pages duplicate na lagein.
 */
export const hubFaqs: ToolFaq[] = [
  {
    q: 'What is the difference between this tools hub and installing separate apps?',
    a: 'An app has to be found, installed, updated and often licensed before it can do a thirty-second job. Everything in this tools hub opens in a browser tab that is already one click away, needs no install, and stops consuming space the moment you close it. The trade-off is honest: the hub covers frequent everyday tasks, not heavy production work like video editing.',
  },
  {
    q: 'How is the tools hub organised, and how do I find a tool quickly?',
    a: 'Tools are grouped into six categories — Utility, Developer, Marketing, Design, Writing and Productivity — and you can filter by category, pricing or tag on this page. If you already know roughly what the tool is called, the search box on the homepage is faster than scanning a category grid.',
  },
  {
    q: 'Is every tool listed in the hub completely free?',
    a: 'Everything listed as Free is free with no account, no daily cap and no watermark. A small number of tools are labelled Freemium because advanced features sit in a paid tier — those labels are shown before you open a tool, not discovered halfway through a task.',
  },
  {
    q: 'Can I use the tools in this hub for client work and commercial projects?',
    a: 'Yes. Output from the formatter, generator, editor and design tools can be used in commercial work with no licence fee and no attribution requirement. Because processing happens in your browser, client documents are also safer here than on a service that uploads every input.',
  },
  {
    q: 'Does the tools hub work on mobile, and does it need a fast connection?',
    a: 'The layouts are responsive and every tool is usable on a phone, which is where many of these small tasks actually happen. Pages are static with almost no client-side JavaScript, so they load on a weak connection, and once a tool page is open the work itself continues offline.',
  },
];
