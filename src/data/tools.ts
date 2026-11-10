/**
 * Single source of truth for every tool on instanten.com.
 * Each tool is its own SEO silo: /<slug>/ + /<slug>/blog/ + /<slug>/{about,contact,privacy,terms}/
 */

export type Faq = { q: string; a: string };

export type Tool = {
  slug: string;
  name: string;
  /** One line shown on the hub card. */
  tagline: string;
  /** Hub card + silo accent (tailwind-safe hex). */
  accent: string;
  accentSoft: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  /** Hero paragraph on the tool page. */
  intro: string;
  features: { title: string; body: string }[];
  howTo: { title: string; body: string }[];
  deviceSupport: { device: string; works: string }[];
  faqs: Faq[];
};

export const SITE = {
  name: 'instanten',
  url: 'https://instanten.com',
  tagline: 'Free precision tools in your browser',
  email: 'hello@instanten.com',
};

export const tools: Tool[] = [
  {
    slug: 'compass',
    name: 'Online Compass',
    tagline: 'Find north, south, east and west in one tap — straight from your phone.',
    accent: '#2563EB',
    accentSoft: '#DBEAFE',
    seoTitle: 'Online Compass — Find North Instantly (Free, No App) | instanten',
    seoDescription:
      'Free online compass that reads your phone or laptop magnetometer to show accurate north, south, east and west. Works offline, no sign-up, no ads. Includes calibration help and true vs magnetic north explained.',
    keywords:
      'online compass, free online compass, compass online, digital compass, find north, compass direction, magnetic north, true north, compass for phone, browser compass',
    intro:
      'A real compass in your browser. instanten reads your device’s magnetometer and orientation sensors directly — no install, no account, no tracking — and shows your heading the moment the page loads. Hold your phone flat, tap allow, and the needle settles on north.',
    features: [
      {
        title: 'Live heading in degrees',
        body: 'Your bearing updates continuously from 0° to 359° with a needle that follows the direction you are facing, not a static image.',
      },
      {
        title: 'True north and magnetic north',
        body: 'Switch between the two so your reading matches a paper map (true north) or the raw sensor (magnetic north).',
      },
      {
        title: 'Works offline',
        body: 'After the first load the compass keeps working with no connection, which matters on trails, boats and basements.',
      },
      {
        title: 'Four calibration methods',
        body: 'Figure-8 wave, tap-to-set, north-lock and manual offset fix the wobble that phone compasses get near metal or magnets.',
      },
      {
        title: 'Readable in sunlight',
        body: 'High-contrast dial, large cardinal letters and a dark mode for night use.',
      },
    ],
    howTo: [
      {
        title: '1. Allow motion access',
        body: 'On iPhone, iOS asks for permission the first time — tap “Allow” (Settings › Safari › Motion & Orientation Access must be on). Android Chrome usually starts immediately.',
      },
      {
        title: '2. Hold the phone flat',
        body: 'Lay the phone face-up, level with the ground. Tilting it more than about 20° adds error, so rest it on your palm or a flat surface.',
      },
      {
        title: '3. Calibrate with a figure 8',
        body: 'If the needle drifts, move your phone in a slow figure-8 motion two or three times. This re-learns the local magnetic field and usually fixes a stuck reading.',
      },
      {
        title: '4. Step away from metal',
        body: 'Cars, steel desks, magnets, speakers and phone cases with magnets all bend the reading. Move one to two metres away from them.',
      },
    ],
    deviceSupport: [
      { device: 'iPhone (iOS 13+)', works: 'Yes — allow motion access' },
      { device: 'Android Chrome', works: 'Yes — sensor starts automatically' },
      { device: 'Android Firefox', works: 'Mostly — needs motion permission' },
      { device: 'iPad / Android tablet', works: 'Yes' },
      { device: 'Laptop (no magnetometer)', works: 'No — shows a “not supported” notice' },
    ],
    faqs: [
      {
        q: 'Why does my browser compass point the wrong way?',
        a: 'Almost always calibration or interference. Do a figure-8 motion, step away from metal and magnets, and avoid charging your phone while using the compass. If it is still wrong, use north-lock or the manual offset to correct it.',
      },
      {
        q: 'Does it show true north or magnetic north?',
        a: 'Both. Magnetic north is what the sensor reads; true north is corrected for your local magnetic declination. Use true north when you are matching a map or GPS bearing.',
      },
      {
        q: 'Do I need to install an app?',
        a: 'No. The compass is a web page. Add it to your home screen and it opens like an app, and it keeps working offline after the first load.',
      },
      {
        q: 'Is a phone compass accurate enough for hiking?',
        a: 'Typically ±5° after calibration, which is fine for choosing a trail direction or orienting a map. For precise surveying or marine navigation use a dedicated magnetic compass.',
      },
      {
        q: 'Why does the compass ask for permission on iPhone?',
        a: 'Safari requires explicit permission before a website may read motion and orientation sensors. The permission is one-tap and nothing leaves your device.',
      },
      {
        q: 'Does the compass work without internet?',
        a: 'Yes. Sensors are local, so once the page is cached the compass runs offline.',
      },
    ],
  },
  {
    slug: 'qibla-finder',
    name: 'Qibla Finder',
    tagline: 'Find the exact direction of the Kaaba from wherever you are standing.',
    accent: '#10B981',
    accentSoft: '#D1FAE5',
    seoTitle: 'Qibla Finder — Accurate Qibla Direction Online (Free) | instanten',
    seoDescription:
      'Find the qibla direction from your location in seconds. Free browser qibla finder using GPS and your phone compass, with the exact bearing to the Kaaba, distance and accuracy tips. No app required.',
    keywords:
      'qibla finder, qibla direction, find qibla, qibla compass, qibla online, kaaba direction, qibla direction from my location, qibla finder online free, prayer direction',
    intro:
      'Your qibla bearing is the great-circle direction from your coordinates to the Kaaba at 21.4225° N, 39.8262° E. instanten calculates that bearing from your GPS position, then uses your phone’s compass to point you at it — no app, no account.',
    features: [
      {
        title: 'Exact great-circle bearing',
        body: 'The bearing is computed from your latitude and longitude to the Kaaba, not guessed from a country-level default.',
      },
      {
        title: 'Distance to Makkah',
        body: 'See how far you are from the Kaaba in kilometres, which doubles as a sanity check on your location.',
      },
      {
        title: 'Live dial that follows you',
        body: 'Rotate your phone and the qibla arrow rotates with you, so you can align with the room rather than a fixed map.',
      },
      {
        title: 'Manual location fallback',
        body: 'No GPS indoors? Pick your city or enter coordinates and the bearing still resolves.',
      },
      {
        title: 'Accuracy indicator',
        body: 'A visible compass-accuracy figure tells you when to recalibrate before you trust the arrow.',
      },
    ],
    howTo: [
      {
        title: '1. Allow location access',
        body: 'The browser asks once. Location is used only on your device to compute the bearing — it is never stored or sent to a server.',
      },
      {
        title: '2. Let the compass settle',
        body: 'Hold the phone flat and away from laptops, speakers and metal furniture for a few seconds until the accuracy figure stops changing.',
      },
      {
        title: '3. Rotate until the arrow aligns',
        body: 'Turn your body (not just the phone) until the qibla arrow points straight ahead. The direction you now face is the qibla.',
      },
      {
        title: '4. Verify with a second method',
        body: 'Cross-check with a mosque direction, a building’s qibla wall or the sun-shadow method if precision matters, especially above the 45th parallel where small errors matter more.',
      },
    ],
    deviceSupport: [
      { device: 'iPhone (Safari)', works: 'Yes — allow location + motion' },
      { device: 'Android Chrome', works: 'Yes' },
      { device: 'Desktop browser', works: 'Bearing only — no live arrow' },
      { device: 'Offline', works: 'Manual location mode only' },
    ],
    faqs: [
      {
        q: 'How is the qibla direction calculated?',
        a: 'With the great-circle bearing formula: the initial bearing from your latitude and longitude to the Kaaba at 21.4225° N, 39.8262° E. It is the same maths used by Islamic astronomy tables and GPS units.',
      },
      {
        q: 'How accurate is a phone qibla finder?',
        a: 'The maths is exact; the sensor is the limit. A calibrated phone is usually within ±5°, which is enough for prayer in most rooms. Metal, magnets and phone cases degrade this — recalibrate with a figure-8 motion when in doubt.',
      },
      {
        q: 'Why does the qibla direction differ from a mosque near me?',
        a: 'Most mosques are built to a recognised qibla bearing, but apps and older buildings can drift a few degrees. If the difference is large, check that your location is correct before trusting either.',
      },
      {
        q: 'Can I find the qibla without internet?',
        a: 'Yes, if you already know your coordinates. Enter them manually and the bearing is computed locally with no connection.',
      },
      {
        q: 'Does the qibla change during the year?',
        a: 'No. The bearing from a fixed location is constant. What changes is the sun’s position, which is why the sun-shadow verification method is only usable on two dates a year.',
      },
      {
        q: 'Do you store my location?',
        a: 'No. Coordinates stay in your browser and are used only to compute the bearing.',
      },
    ],
  },
  {
    slug: 'bubble-level',
    name: 'Bubble Level',
    tagline: 'Check if any surface is perfectly flat, plumb or at an exact angle.',
    accent: '#65A30D',
    accentSoft: '#ECFCCB',
    seoTitle: 'Bubble Level Online — Free Spirit Level on Your Phone | instanten',
    seoDescription:
      'Turn your phone into a bubble level. Free online spirit level for horizontal, vertical and bull’s-eye checking, with live angle in degrees and one-tap calibration. No app, no sign-up.',
    keywords:
      'bubble level, spirit level online, online level, phone level tool, digital level, level app online, check if surface is level, angle measure, plumb level',
    intro:
      'A bubble level that lives in your browser. instanten reads your device accelerometer to show tilt in degrees, a horizontal bubble, a plumb (vertical) mode and a bull’s-eye mode — accurate to a fraction of a degree once calibrated.',
    features: [
      {
        title: 'Three level modes',
        body: 'Horizontal for shelves and tables, vertical for picture frames and posts, bull’s-eye for both axes at once.',
      },
      {
        title: 'Live angle readout',
        body: 'Exact tilt in degrees, so you can set a 3° drain slope as easily as a flat surface.',
      },
      {
        title: 'One-tap calibration',
        body: 'Phone cases and camera bumps offset the sensor. Put the phone on a surface you trust, tap calibrate, and the zero point resets.',
      },
      {
        title: 'Audio and haptic feedback',
        body: 'A subtle click when you hit level, useful when the screen is at an awkward angle.',
      },
    ],
    howTo: [
      {
        title: '1. Place the phone on the surface',
        body: 'Rest it flat, screen up, without holding it — your hand introduces more tilt than the surface itself.',
      },
      {
        title: '2. Calibrate once',
        body: 'On a known-flat surface (a countertop, a table saw top), tap Calibrate so the tool learns your device’s offset.',
      },
      {
        title: '3. Read the bubble',
        body: 'The bubble sits in the centre when the surface is level. The degree readout tells you how far off you are and in which direction.',
      },
      {
        title: '4. Use plumb mode for walls',
        body: 'Stand the phone against a vertical surface or hold it edge-on for frames, posts and door hinges.',
      },
    ],
    deviceSupport: [
      { device: 'iPhone (Safari)', works: 'Yes — allow motion access' },
      { device: 'Android Chrome', works: 'Yes' },
      { device: 'Tablet', works: 'Yes — larger, easier to read' },
      { device: 'Desktop / laptop', works: 'No accelerometer — not supported' },
    ],
    faqs: [
      {
        q: 'How accurate is a phone bubble level?',
        a: 'Most phones resolve about 0.1° to 0.5° after calibration. That is enough for shelves, frames and furniture, but for structural or load-bearing work always use a certified spirit level.',
      },
      {
        q: 'Why does my level not read zero on a flat table?',
        a: 'The sensor has a manufacturing offset and your case adds more. Place the phone on a surface you trust and tap Calibrate to zero it.',
      },
      {
        q: 'Can I measure a specific angle, like a 3° slope?',
        a: 'Yes. Use the degree readout and tilt until you reach the angle you need, or use the bull’s-eye mode to watch both axes at the same time.',
      },
      {
        q: 'Does the level work in a phone case?',
        a: 'It can, but thick or uneven cases tilt the phone. Calibrate while the case is on, or remove the case for the most accurate result.',
      },
      {
        q: 'Is it a replacement for a real spirit level?',
        a: 'For casual work yes, for anything structural no. A phone sensor drifts with temperature and cannot match a machined vial.',
      },
      {
        q: 'Does it need internet?',
        a: 'No. The accelerometer is local, so the level runs offline once cached.',
      },
    ],
  },
  {
    slug: 'speedometer',
    name: 'Speedometer',
    tagline: 'GPS speed, trip time, average and altitude — live in your browser.',
    accent: '#EA580C',
    accentSoft: '#FFEDD5',
    seoTitle: 'Online Speedometer — GPS Speed Tracker in Your Browser | instanten',
    seoDescription:
      'Free online speedometer using GPS. See live speed, max speed, average speed, trip distance and altitude in your phone browser — no app, no ads, works on any modern phone.',
    keywords:
      'online speedometer, gps speedometer, speed tracker, free speedometer, speedometer online, bike speedometer, speed test gps, trip speedometer, mph kmh speed',
    intro:
      'A speedometer that needs no install. instanten reads your device GPS and shows live speed in km/h or mph, plus maximum speed, average speed, trip distance and altitude — useful for cycling, running, boating or checking a dashboard.',
    features: [
      {
        title: 'Live speed with large digits',
        body: 'A dial and a big number you can read at a glance while riding, with km/h and mph switchable.',
      },
      {
        title: 'Trip statistics',
        body: 'Max speed, average speed, distance travelled and elapsed time, all tracked from the moment you start.',
      },
      {
        title: 'Altitude and GPS accuracy',
        body: 'See elevation and the current GPS accuracy figure so you know when a reading is trustworthy.',
      },
      {
        title: 'Keeps the screen awake',
        body: 'An optional wake-lock keeps the display on so your run or ride is not interrupted mid-trip.',
      },
    ],
    howTo: [
      {
        title: '1. Allow location access',
        body: 'GPS needs location permission. Choose “precise” if your browser offers it — an approximate location gives useless speed.',
      },
      {
        title: '2. Wait for a fix',
        body: 'The first fix indoors can take 30 seconds. Step outside, and wait until accuracy settles before trusting the number.',
      },
      {
        title: '3. Start moving',
        body: 'Speed is computed from position deltas, so it stays at zero until you actually change location.',
      },
      {
        title: '4. Mount or pocket the phone',
        body: 'A handlebar mount gives the best sky view. In a pocket, expect gaps in tunnels, underpasses and dense trees.',
      },
    ],
    deviceSupport: [
      { device: 'iPhone (Safari)', works: 'Yes — allow precise location' },
      { device: 'Android Chrome', works: 'Yes' },
      { device: 'Laptop with GPS', works: 'Rarely — depends on hardware' },
      { device: 'Offline', works: 'No — GPS based speed needs a fix' },
    ],
    faqs: [
      {
        q: 'How accurate is a GPS speedometer?',
        a: 'On open sky, modern phones are within about 1–2 km/h at steady speeds. Bridges, tunnels, tall buildings and tree cover reduce accuracy.',
      },
      {
        q: 'Is this the same as my car speedometer?',
        a: 'Not exactly. Car speedometers legally read slightly high, while GPS measures ground speed. A 2–5% difference between them is normal.',
      },
      {
        q: 'Can I use it for cycling or running?',
        a: 'Yes. It works for any movement; over short distances GPS smoothing can lag a second or two behind sudden speed changes.',
      },
      {
        q: 'Why does it show 0 km/h while I am moving?',
        a: 'Usually a denied or approximate location permission, or a weak sky view. Check the accuracy figure and move outdoors.',
      },
      {
        q: 'Does it drain the battery?',
        a: 'GPS does use more battery than a static page. For long trips, lower the screen brightness or use wake-lock only when the phone is mounted.',
      },
      {
        q: 'Can I use it to prove I was not speeding?',
        a: 'No. This is a consumer tool, not a calibrated instrument, and its readings carry no legal standing.',
      },
    ],
  },
];

export const toolBySlug = (slug: string) => tools.find((t) => t.slug === slug);

/** Silo sub-pages every tool has. */
export const siloPages = ['about', 'contact', 'privacy', 'terms'] as const;
export type SiloPage = (typeof siloPages)[number];
