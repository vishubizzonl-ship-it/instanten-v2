/**
 * Chaar sensor tools ke logo marks + favicons — "letter in a rounded square".
 *
 * Construction opendesignmd.com ke logo jaisa hai: filled pure-black squircle
 * (rounded square, 24x24, corner radius ~31%) aur uske andar ek letter knockout.
 * Unka logo copy nahi hota — sirf construction apnayi hai.
 *
 * **Font bhi wahi hai jo opendesignmd.com ka logo use karta hai: Inter.**
 * Site header/wordmark Inter Bold (wght 700) me hai, `letter-spacing: -0.03em`
 * (unke CSS ka `tracking-[-0.03em]`), isliye marks aur "instanten" wordmark dono
 * Inter ke *asli* glyph outlines hain (fontTools se convert kiye gaye) — runtime
 * par koi webfont load nahi hota, SVG kahin bhi chalti hai. Inter SIL OFL hai.
 *
 *   instanten         -> I
 *   onlinecompass     -> C
 *   onlinebubblelevel -> B
 *   onlinespeedometer -> S
 *   onlineqibla       -> Q
 *
 * Cap-height 11.8 (24x24 box), glyph poore bbox par centre. Letter mask se
 * squircle me se kaat diya jaata hai, isliye light/dark dono me `currentColor`
 * sahi rehta hai.
 *
 * Yahan geometry hi source of truth hai: nav mark, favicon aur test — teeno isi
 * file se aate hain.
 */

/** Squircle shell (24x24, corner radius ~31%) — opendesignmd ke logo jaisa hi. */
export const SQUIRCLE =
  'M7.5 0H16.5C22.65 0 24 1.35 24 7.5V16.5C24 22.65 22.65 24 16.5 24' +
  'H7.5C1.35 24 0 22.65 0 16.5V7.5C0 1.35 1.35 0 7.5 0Z';

/** Jis font se letters/wordmark liye gaye — documentation + test ke liye. */
export const MARK_FONT = 'Inter Bold';

/** Wordmark ka tracking (em me) — opendesignmd ke `tracking-[-0.03em]` jaisa. */
export const MARK_TRACKING = -0.03;

/**
 * Site ka wordmark "instanten" — Inter Bold outlines, ek hi path me (tracking
 * apply kiya hua). `Logo.astro` isi ko inline SVG ki tarah render karta hai,
 * isliye wordmark ka font har device par ek jaisa dikhta hai.
 *
 * @type {{word: string, viewBox: string, path: string}}
 */
export const WORDMARK = {
  word: 'instanten',
  viewBox: '100.0 -1568 8648.48 1598',
  path:
    'M124.0 0.0V-1108.0H423.0V0.0ZM273.0 -1251.0Q204.0 -1251.0 156.0 -1296.5Q108.0 -1342.0 108.0 -1406.0Q108.0 -1471.0 156.0 -1515.5Q204.0 -1560.0 273.0 -1560.0Q342.0 -1560.0 390.0 -1515.5Q438.0 -1471.0 438.0 -1406.0Q438.0 -1342.0 390.0 -1296.5Q342.0 -1251.0 273.0 -1251.0ZM908.56 -637.0V0.0H609.56V-1108.0H893.56L897.56 -829.0H874.56Q919.56 -969.0 1009.56 -1046.0Q1099.56 -1123.0 1241.56 -1123.0Q1357.56 -1123.0 1443.06 -1073.0Q1528.56 -1023.0 1576.06 -928.5Q1623.56 -834.0 1623.56 -703.0V0.0H1324.56V-650.0Q1324.56 -755.0 1271.56 -813.5Q1218.56 -872.0 1123.56 -872.0Q1060.56 -872.0 1012.06 -844.5Q963.56 -817.0 936.06 -765.0Q908.56 -713.0 908.56 -637.0ZM2253.12 22.0Q2118.12 22.0 2013.62 -17.0Q1909.12 -56.0 1843.62 -130.5Q1778.12 -205.0 1760.12 -310.0L2041.12 -350.0Q2061.12 -274.0 2115.12 -235.0Q2169.12 -196.0 2260.12 -196.0Q2345.12 -196.0 2394.12 -228.5Q2443.12 -261.0 2443.12 -310.0Q2443.12 -354.0 2407.62 -381.5Q2372.12 -409.0 2300.12 -424.0L2109.12 -463.0Q1948.12 -496.0 1868.62 -575.0Q1789.12 -654.0 1789.12 -779.0Q1789.12 -885.0 1846.62 -962.0Q1904.12 -1039.0 2009.12 -1081.0Q2114.12 -1123.0 2254.12 -1123.0Q2388.12 -1123.0 2485.62 -1085.0Q2583.12 -1047.0 2642.62 -978.5Q2702.12 -910.0 2720.12 -815.0L2452.12 -776.0Q2438.12 -834.0 2389.12 -871.5Q2340.12 -909.0 2259.12 -909.0Q2185.12 -909.0 2136.12 -877.5Q2087.12 -846.0 2087.12 -796.0Q2087.12 -754.0 2119.62 -725.5Q2152.12 -697.0 2228.12 -681.0L2429.12 -641.0Q2591.12 -608.0 2669.62 -534.0Q2748.12 -460.0 2748.12 -341.0Q2748.12 -232.0 2685.12 -150.0Q2622.12 -68.0 2510.12 -23.0Q2398.12 22.0 2253.12 22.0ZM3446.68 -1108.0V-879.0H2778.68V-1108.0ZM2936.68 -1377.0H3235.68V-327.0Q3235.68 -274.0 3259.18 -249.5Q3282.68 -225.0 3337.68 -225.0Q3356.68 -225.0 3388.18 -228.5Q3419.68 -232.0 3435.68 -235.0L3471.68 -9.0Q3425.68 3.0 3376.68 8.0Q3327.68 13.0 3281.68 13.0Q3112.68 13.0 3024.68 -66.5Q2936.68 -146.0 2936.68 -297.0ZM3886.24 21.0Q3780.24 21.0 3696.24 -16.0Q3612.24 -53.0 3564.24 -126.5Q3516.24 -200.0 3516.24 -310.0Q3516.24 -403.0 3550.24 -465.5Q3584.24 -528.0 3643.24 -565.5Q3702.24 -603.0 3777.74 -623.0Q3853.24 -643.0 3936.24 -651.0Q4032.24 -661.0 4091.74 -669.5Q4151.24 -678.0 4178.24 -696.0Q4205.24 -714.0 4205.24 -750.0V-755.0Q4205.24 -802.0 4184.74 -834.5Q4164.24 -867.0 4125.24 -884.5Q4086.24 -902.0 4030.24 -902.0Q3973.24 -902.0 3930.74 -884.5Q3888.24 -867.0 3861.24 -837.5Q3834.24 -808.0 3823.24 -771.0L3548.24 -809.0Q3573.24 -909.0 3638.74 -979.0Q3704.24 -1049.0 3804.24 -1086.0Q3904.24 -1123.0 4032.24 -1123.0Q4125.24 -1123.0 4210.24 -1101.0Q4295.24 -1079.0 4361.24 -1033.5Q4427.24 -988.0 4465.74 -917.0Q4504.24 -846.0 4504.24 -747.0V0.0H4219.24V-154.0H4210.24Q4183.24 -102.0 4138.74 -62.5Q4094.24 -23.0 4031.74 -1.0Q3969.24 21.0 3886.24 21.0ZM3970.24 -188.0Q4041.24 -188.0 4094.74 -216.0Q4148.24 -244.0 4177.74 -291.5Q4207.24 -339.0 4207.24 -397.0V-516.0Q4194.24 -507.0 4168.24 -499.0Q4142.24 -491.0 4110.24 -485.0Q4078.24 -479.0 4046.24 -474.0Q4014.24 -469.0 3987.24 -465.0Q3932.24 -458.0 3890.74 -440.5Q3849.24 -423.0 3825.74 -393.0Q3802.24 -363.0 3802.24 -319.0Q3802.24 -276.0 3823.74 -247.0Q3845.24 -218.0 3883.24 -203.0Q3921.24 -188.0 3970.24 -188.0ZM4988.79 -637.0V0.0H4689.79V-1108.0H4973.79L4977.79 -829.0H4954.79Q4999.79 -969.0 5089.79 -1046.0Q5179.79 -1123.0 5321.79 -1123.0Q5437.79 -1123.0 5523.29 -1073.0Q5608.79 -1023.0 5656.29 -928.5Q5703.79 -834.0 5703.79 -703.0V0.0H5404.79V-650.0Q5404.79 -755.0 5351.79 -813.5Q5298.79 -872.0 5203.79 -872.0Q5140.79 -872.0 5092.29 -844.5Q5043.79 -817.0 5016.29 -765.0Q4988.79 -713.0 4988.79 -637.0ZM6454.35 -1108.0V-879.0H5786.35V-1108.0ZM5944.35 -1377.0H6243.35V-327.0Q6243.35 -274.0 6266.85 -249.5Q6290.35 -225.0 6345.35 -225.0Q6364.35 -225.0 6395.85 -228.5Q6427.35 -232.0 6443.35 -235.0L6479.35 -9.0Q6433.35 3.0 6384.35 8.0Q6335.35 13.0 6289.35 13.0Q6120.35 13.0 6032.35 -66.5Q5944.35 -146.0 5944.35 -297.0ZM7081.91 22.0Q6911.91 22.0 6788.91 -48.0Q6665.91 -118.0 6599.41 -246.5Q6532.91 -375.0 6532.91 -549.0Q6532.91 -720.0 6599.41 -849.0Q6665.91 -978.0 6785.91 -1050.5Q6905.91 -1123.0 7066.91 -1123.0Q7177.91 -1123.0 7272.91 -1087.5Q7367.91 -1052.0 7439.41 -981.0Q7510.91 -910.0 7550.91 -804.5Q7590.91 -699.0 7590.91 -560.0V-476.0H6653.91V-665.0H7444.91L7305.91 -615.0Q7305.91 -701.0 7278.91 -764.5Q7251.91 -828.0 7199.41 -863.0Q7146.91 -898.0 7069.91 -898.0Q6992.91 -898.0 6938.91 -862.5Q6884.91 -827.0 6856.41 -766.0Q6827.91 -705.0 6827.91 -626.0V-494.0Q6827.91 -400.0 6859.91 -334.5Q6891.91 -269.0 6950.41 -236.0Q7008.91 -203.0 7086.91 -203.0Q7139.91 -203.0 7183.41 -218.0Q7226.91 -233.0 7257.41 -262.5Q7287.91 -292.0 7303.91 -335.0L7574.91 -293.0Q7548.91 -198.0 7481.41 -127.5Q7413.91 -57.0 7312.41 -17.5Q7210.91 22.0 7081.91 22.0ZM8025.47 -637.0V0.0H7726.47V-1108.0H8010.47L8014.47 -829.0H7991.47Q8036.47 -969.0 8126.47 -1046.0Q8216.47 -1123.0 8358.47 -1123.0Q8474.47 -1123.0 8559.97 -1073.0Q8645.47 -1023.0 8692.97 -928.5Q8740.47 -834.0 8740.47 -703.0V0.0H8441.47V-650.0Q8441.47 -755.0 8388.47 -813.5Q8335.47 -872.0 8240.47 -872.0Q8177.47 -872.0 8128.97 -844.5Q8080.47 -817.0 8052.97 -765.0Q8025.47 -713.0 8025.47 -637.0Z',
};

/**
 * Har mark ka letter aur uska filled glyph (Inter Bold ke outlines).
 *
 * @type {Record<string, {letter: string, path: string}>}
 */
export const TOOL_MARKS = {
  /** Site ka apna mark — "instanten" wordmark ka pehla akshar. */
  instanten: {
    letter: 'I',
    path:
      'M13.20 6.09V17.9H10.78V6.09Z',
  },
  onlinecompass: {
    letter: 'C',
    path:
      'M12.19 18.06Q10.61 18.06 9.37 17.34Q8.13 16.62 7.41 15.27Q6.69 13.91 6.69 12.00Q6.69 10.08 7.41 8.72Q8.14 7.37 9.38 6.65Q10.63 5.93 12.19 5.93Q13.20 5.93 14.07 6.22Q14.95 6.50 15.62 7.05Q16.29 7.59 16.72 8.37Q17.16 9.16 17.29 10.15H14.84Q14.75 9.66 14.53 9.28Q14.30 8.89 13.96 8.62Q13.62 8.36 13.18 8.22Q12.75 8.08 12.24 8.08Q11.31 8.08 10.61 8.54Q9.91 9.01 9.53 9.88Q9.14 10.76 9.14 12.00Q9.14 13.26 9.53 14.14Q9.92 15.01 10.61 15.46Q11.31 15.91 12.23 15.91Q12.74 15.91 13.18 15.77Q13.61 15.63 13.95 15.37Q14.30 15.10 14.53 14.71Q14.76 14.33 14.85 13.84H17.30Q17.19 14.69 16.79 15.45Q16.40 16.21 15.74 16.80Q15.08 17.39 14.19 17.72Q13.29 18.06 12.19 18.06Z',
  },
  onlinebubblelevel: {
    letter: 'B',
    path:
      'M7.47 17.9V6.09H12.16Q13.45 6.09 14.32 6.49Q15.19 6.88 15.63 7.56Q16.06 8.24 16.06 9.13Q16.06 9.82 15.79 10.34Q15.52 10.86 15.04 11.19Q14.56 11.53 13.95 11.67V11.77Q14.62 11.81 15.21 12.16Q15.79 12.51 16.16 13.14Q16.52 13.76 16.52 14.63Q16.52 15.57 16.06 16.31Q15.60 17.05 14.70 17.47Q13.79 17.9 12.46 17.9ZM9.88 15.92H12.00Q13.04 15.92 13.54 15.51Q14.03 15.10 14.03 14.42Q14.03 13.92 13.79 13.54Q13.55 13.16 13.11 12.94Q12.67 12.73 12.06 12.73H9.88ZM9.88 11.04H11.83Q12.35 11.04 12.76 10.86Q13.16 10.67 13.39 10.33Q13.63 9.99 13.63 9.51Q13.63 8.86 13.17 8.46Q12.71 8.06 11.87 8.06H9.88Z',
  },
  onlinespeedometer: {
    letter: 'S',
    path:
      'M12.08 18.07Q10.64 18.07 9.59 17.62Q8.54 17.18 7.95 16.32Q7.37 15.45 7.34 14.19H9.69Q9.73 14.80 10.04 15.21Q10.35 15.62 10.87 15.83Q11.39 16.03 12.06 16.03Q12.71 16.03 13.19 15.84Q13.68 15.66 13.95 15.32Q14.22 14.98 14.22 14.53Q14.22 14.12 13.98 13.85Q13.75 13.57 13.29 13.38Q12.84 13.18 12.17 13.02L10.88 12.71Q9.34 12.34 8.49 11.56Q7.64 10.77 7.64 9.49Q7.64 8.42 8.22 7.62Q8.79 6.82 9.79 6.37Q10.80 5.93 12.09 5.93Q13.41 5.93 14.38 6.38Q15.36 6.83 15.90 7.63Q16.45 8.44 16.47 9.50H14.14Q14.08 8.77 13.53 8.36Q12.98 7.95 12.07 7.95Q11.46 7.95 11.02 8.13Q10.58 8.31 10.35 8.62Q10.11 8.94 10.11 9.34Q10.11 9.76 10.37 10.04Q10.62 10.33 11.06 10.51Q11.49 10.69 12.03 10.82L13.10 11.08Q13.88 11.25 14.53 11.54Q15.18 11.83 15.66 12.24Q16.13 12.66 16.39 13.22Q16.65 13.78 16.65 14.51Q16.65 15.59 16.11 16.39Q15.56 17.19 14.54 17.63Q13.51 18.07 12.08 18.07Z',
  },
  onlineqibla: {
    letter: 'Q',
    path:
      'M11.22 13.43H13.28L14.37 14.83L15.35 15.97L17.33 18.47H15.08L13.73 16.79L13.06 15.85ZM12.00 17.65Q10.43 17.65 9.18 16.93Q7.93 16.21 7.21 14.86Q6.48 13.50 6.48 11.60Q6.48 9.67 7.21 8.32Q7.93 6.96 9.18 6.24Q10.43 5.52 12.00 5.52Q13.57 5.52 14.81 6.24Q16.06 6.96 16.78 8.32Q17.51 9.67 17.51 11.60Q17.51 13.51 16.78 14.86Q16.06 16.22 14.81 16.93Q13.57 17.65 12.00 17.65ZM12.00 15.50Q12.91 15.50 13.60 15.05Q14.29 14.60 14.67 13.73Q15.06 12.85 15.06 11.60Q15.06 10.32 14.67 9.45Q14.29 8.57 13.60 8.12Q12.91 7.67 12.00 7.67Q11.08 7.67 10.39 8.12Q9.71 8.58 9.32 9.45Q8.93 10.33 8.93 11.60Q8.93 12.85 9.32 13.73Q9.71 14.60 10.39 15.05Q11.08 15.50 12.00 15.50Z',
  },
};

/** Har mark ka masked id — page par ek hi mark ho to bhi unique rehta hai. */
export function toolMarkId(slug) {
  return `tool-mark-${slug}`;
}

/**
 * Mark ka poora SVG (squircle + knocked-out letter). Rang `currentColor` se
 * aata hai, isliye light mode me black aur dark mode me white ho jaata hai.
 */
export function toolMarkSvg(slug, { size = '100%', title = '' } = {}) {
  const mark = TOOL_MARKS[slug];
  if (!mark) throw new Error(`Unknown tool mark: ${slug}`);
  const id = toolMarkId(slug);
  const label = title ? `<title>${title}</title>` : '';
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:block;width:${size};height:${size}">` +
    label +
    `<mask id="${id}"><rect width="24" height="24" fill="#fff"/><path d="${mark.path}" fill="#000"/></mask>` +
    `<path fill-rule="evenodd" mask="url(#${id})" d="${SQUIRCLE}"/>` +
    `</svg>`
  );
}

/**
 * Site wordmark ka SVG. `height` px me; width viewBox se nikal aati hai.
 * `currentColor` use hota hai taaki Layout ka black/white rule lagoo rahe.
 */
export function wordmarkSvg(height = 20) {
  const [x, y, w, h] = WORDMARK.viewBox.split(' ').map(Number);
  const width = ((w / h) * height).toFixed(2);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${WORDMARK.viewBox}" width="${width}" height="${height}" fill="currentColor" role="img" aria-label="${WORDMARK.word}" style="display:block;overflow:visible">` +
    `<path d="${WORDMARK.path}"/>` +
    `</svg>`
  );
}

/** Har tool ka apna favicon path — silo ke andar, site ke icon se alag. */
export function toolFaviconPath(slug) {
  return slug === 'instanten' ? '/favicon.svg' : `/${slug}/favicon.svg`;
}

/**
 * Favicon ka SVG — squircle shell `fill: #000000` (light) / `#FFFFFF` (dark),
 * letter knockout. Stored as a file in `public/`, isliye `currentColor` nahi
 * chalega: media query hi hai.
 */
export function toolFaviconSvg(slug) {
  const mark = TOOL_MARKS[slug];
  if (!mark) throw new Error(`Unknown tool mark: ${slug}`);
  const id = toolMarkId(slug);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">` +
    `<style>path.sq { fill: #000000; } @media (prefers-color-scheme: dark) { path.sq { fill: #FFFFFF; } }</style>` +
    `<mask id="${id}"><rect width="24" height="24" fill="#fff"/><path d="${mark.path}" fill="#000"/></mask>` +
    `<path class="sq" fill-rule="evenodd" mask="url(#${id})" d="${SQUIRCLE}"/>` +
    `</svg>\n`
  );
}
