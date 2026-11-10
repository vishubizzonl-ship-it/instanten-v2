export type Post = {
  slug: string;
  tool: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  minutes: number;
  keywords: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: 'how-to-find-true-north',
    tool: 'compass',
    title: 'How to Find True North With Your Phone (Step by Step)',
    description:
      'Magnetic north and true north are not the same thing. Here is how to find real north with a phone compass, correct for declination, and check the result.',
    date: '2026-11-06',
    minutes: 6,
    keywords: 'how to find true north, magnetic vs true north, declination, phone compass accuracy',
    body: `
<p class="lead">Pointing north sounds like the simplest thing a compass can do — and it is where most phone compasses quietly mislead you, because the needle points at <em>magnetic</em> north, which is not the north on your map.</p>
<h2>Magnetic north vs true north</h2>
<p>Magnetic north is where a compass needle is pulled: a spot in the Arctic that drifts a few kilometres every year. True north is the axis your map grid and GPS bearings are built on. The gap between them at your location is called <strong>magnetic declination</strong>, and it ranges from about −15° to +20° worldwide.</p>
<table>
<thead><tr><th>City</th><th>Approximate declination</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Patna, India</td><td>~0° to +1° E</td><td>True and magnetic north nearly coincide</td></tr>
<tr><td>London, UK</td><td>~0° to +1° E</td><td>Almost no correction needed</td></tr>
<tr><td>New York, USA</td><td>~−13° W</td><td>Needle points west of true north</td></tr>
<tr><td>Sydney, Australia</td><td>~+12° E</td><td>Needle points east of true north</td></tr>
</tbody>
</table>
<p>Values shift slowly; treat the table as orientation, not as a survey figure.</p>
<h2>Step by step</h2>
<ol>
<li><strong>Open the compass</strong> in a browser and allow motion access. On iPhone this prompt appears once.</li>
<li><strong>Hold the phone flat</strong>, face up, at waist height. Tilting more than about 20° adds error.</li>
<li><strong>Calibrate.</strong> Sweep the phone in a slow figure-8 two or three times. This is the single biggest accuracy win.</li>
<li><strong>Step away from metal.</strong> A car, a steel desk, a laptop or a magnetic case will bend the reading.</li>
<li><strong>Switch to true north</strong> if you are matching a map, or keep magnetic north if you are aligning with a physical compass.</li>
<li><strong>Read the bearing</strong> and turn your whole body until the dial reads 0° / N.</li>
</ol>
<h2>How to sanity-check the result</h2>
<p>Two cheap checks: the sun rises roughly in the east and sets roughly in the west, and at local solar noon in the northern hemisphere it sits due south. Neither is precise enough for navigation, but both will catch a compass that is 90° out.</p>
<p>If your reading disagrees with a friend’s phone by a few degrees, that is normal sensor variance. If it disagrees by a lot, recalibrate before you trust either.</p>
<h2>When not to trust it</h2>
<p>A phone compass is a convenience instrument. It drifts with temperature, hates magnets and metal, and can be wrong by 10° or more when uncalibrated. For hiking in featureless terrain, marine navigation or any situation where being 10° off matters, carry a baseplate compass and a paper map.</p>
<p><a href="/compass/">Open the free online compass →</a></p>`,
  },
  {
    slug: 'why-phone-compass-shows-wrong-direction',
    tool: 'compass',
    title: 'Why Your Phone Compass Shows the Wrong Direction (and How to Fix It)',
    description:
      'A stuck needle, a compass that spins, or one that is consistently 20 degrees off — the usual causes, in the order you should check them.',
    date: '2026-10-29',
    minutes: 5,
    keywords: 'phone compass wrong, compass spinning, compass calibration, fix compass accuracy',
    body: `
<p class="lead">Almost every “my compass is broken” case has one of five causes, and four of them you can fix in under a minute.</p>
<h2>1. It has not been calibrated</h2>
<p>Phone magnetometers learn the local magnetic environment. Travel 500 km, use a new case, or leave the phone in a bag for a month, and the learned offset is wrong. The fix is a slow figure-8 motion, three passes, phone flat. This resolves the majority of drift and spin problems.</p>
<h2>2. Something magnetic is nearby</h2>
<p>Ranked by how often they ruin readings: car dashboards, magnetic phone mounts, laptop speakers, steel desks, metal watch straps, and magnetic cases. Even a few centimetres matters. Move one to two metres away and watch the needle settle.</p>
<h2>3. Your phone is not flat</h2>
<p>Many phone compasses assume the device is horizontal. Hold it upright like a camera and the heading can skew by 10° or more. Either lay it flat, or use a tool that compensates for tilt.</p>
<h2>4. The browser lacks permission</h2>
<p>iOS Safari asks once for motion access. If you tapped “Don’t allow”, the page cannot read the sensors and will show a permission notice rather than a heading. Re-enable it in Settings › Safari › Motion &amp; Orientation Access.</p>
<h2>5. You are reading magnetic north</h2>
<p>If your compass agrees with a friend’s but disagrees with the map, neither is broken — you are comparing magnetic and true north. In New York the difference is around 13°, which is enough to send you down the wrong street.</p>
<h2>Fast diagnostic order</h2>
<ol>
<li>Figure-8 calibrate.</li>
<li>Move away from metal and magnets.</li>
<li>Lay the phone flat.</li>
<li>Check motion permission.</li>
<li>Confirm which north you are reading.</li>
</ol>
<p>If it is still wrong after all five, the sensor itself may be failing — a hardware fault that no software fix will solve. Test with the phone’s built-in compass app: if that is wrong too, it is the device.</p>
<p><a href="/compass/">Try the calibrated online compass →</a></p>`,
  },

  {
    slug: 'how-to-find-qibla-direction',
    tool: 'qibla-finder',
    title: 'How to Find the Qibla Direction From Any Location',
    description:
      'A practical method for finding the qibla with a phone: get your bearing, verify it, and avoid the mistakes that put people a few degrees off.',
    date: '2026-11-05',
    minutes: 6,
    keywords: 'how to find qibla, qibla direction, qibla compass, find qibla with phone',
    body: `
<p class="lead">The qibla is not a rough compass direction — it is the exact great-circle bearing from your coordinates to the Kaaba. On a phone you can get within a few degrees of it in under a minute, provided you do three things right.</p>
<h2>What the bearing actually is</h2>
<p>From Patna, the qibla is roughly west-north-west. From Jakarta it is west-north-west as well, but the number differs: every location on Earth has its own bearing, calculated with the great-circle formula using your latitude and longitude against the Kaaba at 21.4225° N, 39.8262° E.</p>
<h2>Three steps that matter</h2>
<ol>
<li><strong>Get a real location fix.</strong> Indoors, GPS may be hundreds of metres off — usually harmless for direction, but it can matter near the antipode band where the bearing is sensitive.</li>
<li><strong>Calibrate the compass.</strong> Figure-8 the phone. A 10° sensor error is far more visible than any GPS error.</li>
<li><strong>Turn your body, not the phone.</strong> Rotate on the spot until the arrow points ahead of you; the direction you face is the qibla.</li>
</ol>
<h2>How to verify</h2>
<p>Three independent checks:</p>
<ul>
<li><strong>A mosque nearby</strong> — most have a marked qibla wall, though older buildings can drift.</li>
<li><strong>A physical qibla compass</strong> — the brass dial type sold for travel.</li>
<li><strong>The sun-shadow method</strong> — on 27–28 May and 15–16 July the sun is almost directly over the Kaaba, so shadows at solar noon point directly away from the qibla.</li>
</ul>
<h2>Common mistakes</h2>
<p>Using the phone while it charges (heat and current disturb the sensor), reading the arrow while the phone is upright instead of flat, standing next to a steel pillar, and trusting an app that defaults to a country-level bearing instead of your own coordinates.</p>
<p>If two methods agree, you can pray with confidence. If they disagree by more than about 10°, find out which one is wrong before deciding.</p>
<p><a href="/qibla-finder/">Find your qibla direction now →</a></p>`,
  },
  {
    slug: 'qibla-compass-accuracy',
    tool: 'qibla-finder',
    title: 'How Accurate Is a Phone Qibla Finder? An Honest Answer',
    description:
      'The maths behind the qibla bearing is exact. The sensor is not. Here is what accuracy a phone qibla finder really delivers, and how to improve it.',
    date: '2026-10-24',
    minutes: 5,
    keywords: 'qibla accuracy, phone qibla finder accuracy, qibla compass degrees off',
    body: `
<p class="lead">People ask whether a phone can really find the qibla. The answer is: the calculation is perfect, the hardware is approximately fine, and the difference between those two statements is where every dispute comes from.</p>
<h2>The calculation is exact</h2>
<p>The initial bearing from your position to the Kaaba is a closed-form trigonometric result. Given correct coordinates, it is correct to many decimal places. No approximation, no guesswork.</p>
<h2>The sensor is the limit</h2>
<p>Consumer magnetometers are specified around ±3° to ±5° in good conditions, and worse after drift, near metal, or in a phone case with magnets. Add tilt error if the phone is not flat, and a realistic figure is <strong>±5° after calibration</strong>, occasionally ±10° in bad conditions.</p>
<h2>What ±5° means in a room</h2>
<p>At three metres from you, 5° is about 26 cm sideways. In a small room that is comfortable. For a mosque-sized hall, it is noticeable — which is why large mosques use surveyed qibla lines rather than a phone.</p>
<h2>Distant locations are less forgiving</h2>
<p>In India, Pakistan or Indonesia the qibla is a broad west-north-westerly direction and small errors are easy to live with. In northern Europe or North America the bearing is shallower relative to the map grid, so the same sensor error translates into a larger apparent miss.</p>
<h2>How to get the best reading</h2>
<ol>
<li>Go outdoors or near a window for a clean GPS fix.</li>
<li>Calibrate with a figure-8 motion.</li>
<li>Hold the phone flat, away from metal and magnets.</li>
<li>Unplug the charger.</li>
<li>Wait for the accuracy indicator to stabilise before trusting the arrow.</li>
<li>Verify once against a mosque or a physical compass.</li>
</ol>
<h2>The honest conclusion</h2>
<p>A phone qibla finder is a good tool used well and a bad tool used carelessly. Calibrate, verify once, and you will be within a few degrees — which is what the majority of scholarly opinion treats as sufficient when a precise direction is not available.</p>
<p><a href="/qibla-finder/">Open the qibla finder →</a></p>`,
  },

  {
    slug: 'use-phone-as-spirit-level',
    tool: 'bubble-level',
    title: 'How to Use Your Phone as a Spirit Level (Properly)',
    description:
      'A phone level is accurate to a fraction of a degree — if you calibrate it and stop holding it in your hand. A practical guide.',
    date: '2026-11-03',
    minutes: 5,
    keywords: 'phone as spirit level, bubble level app, calibrate phone level, phone level accuracy',
    body: `
<p class="lead">Every phone contains an accelerometer good enough to level a shelf. The reason people distrust phone levels is almost always technique, not hardware.</p>
<h2>Step 1: calibrate on something you trust</h2>
<p>Put the phone, case on, on a surface you believe is flat — a machined countertop, a glass table, a table saw top. Tap calibrate. This tells the tool what zero looks like for your specific phone and case. Skip this and a perfectly flat surface may read 0.4°.</p>
<h2>Step 2: stop holding it</h2>
<p>Your hand introduces more tilt than the surface does. Place the phone on the surface and step back. If you must hold it, hold it by the edges and let the reading settle.</p>
<h2>Step 3: pick the right mode</h2>
<ul>
<li><strong>Horizontal</strong> — shelves, tables, floors, worktops.</li>
<li><strong>Plumb / vertical</strong> — picture frames, posts, door hinges, wall cabinets.</li>
<li><strong>Bull’s-eye</strong> — tripods, appliances, anything that needs both axes at once.</li>
</ul>
<h2>Step 4: use the number, not the bubble</h2>
<p>The bubble is a glanceable summary; the degree readout is the measurement. If you need a 2° slope for drainage, tilt until the number says 2.0°, not until the bubble “looks about right”.</p>
<h2>Where a phone level stops being enough</h2>
<p>Structural work, load-bearing installs, gas and plumbing, anything inspected, and anything where rework is expensive. A phone drifts with temperature and cannot match a machined vial. Use it for furniture, frames, appliances, tripods and quick checks — use a real level when it matters.</p>
<h2>Common mistakes</h2>
<p>Calibrating on a surface that is not actually flat (the most common one), leaving a magnetic mount attached, and testing on a table that has its own lean. Always test two surfaces to see whether the error is the phone or the furniture.</p>
<p><a href="/bubble-level/">Open the free bubble level →</a></p>`,
  },
  {
    slug: 'bubble-level-vs-spirit-level',
    tool: 'bubble-level',
    title: 'Phone Level vs Real Spirit Level: What the Difference Actually Is',
    description:
      'A machined vial resolves a fraction of a millimetre per metre. A phone accelerometer resolves a fraction of a degree. Here is how they compare in practice.',
    date: '2026-10-20',
    minutes: 4,
    keywords: 'bubble level vs spirit level, phone level accuracy vs real level, digital level accuracy',
    body: `
<p class="lead">Both measure gravity. The differences are resolution, stability and how much you can trust a dropped tool.</p>
<h2>Resolution</h2>
<p>A good 600 mm spirit level vial is sensitive to about 0.5 mm per metre — roughly 0.03°. A phone accelerometer resolves about 0.1° at best, and usually 0.3–0.5° in practice. For a 2 m shelf, that is the difference between “flat” and “a millimetre or two out”, which nobody will see.</p>
<h2>Stability</h2>
<p>A vial is a sealed glass tube with a fluid that does not drift. An accelerometer drifts with temperature, is affected by nearby magnets if it shares a package with the magnetometer, and changes behaviour after a drop. This is the real argument for a physical level on critical work.</p>
<h2>Convenience</h2>
<p>This is where the phone wins outright. It is already in your pocket, it gives you a numeric angle (something a vial cannot), it lights up in the dark, and it fits in spaces a 600 mm level never will — behind a toilet, inside a cabinet, under a table.</p>
<h2>Practical split</h2>
<table>
<thead><tr><th>Task</th><th>Phone level</th><th>Spirit level</th></tr></thead>
<tbody>
<tr><td>Hanging a picture</td><td>Yes</td><td>Overkill</td></tr>
<tr><td>Shelf, table, appliance</td><td>Yes</td><td>Good</td></tr>
<tr><td>Door hinge / frame</td><td>Yes, plumb mode</td><td>Better</td></tr>
<tr><td>Deck, floor joists</td><td>No</td><td>Required</td></tr>
<tr><td>Drainage slope to spec</td><td>Check only</td><td>Required</td></tr>
</tbody>
</table>
<h2>Bottom line</h2>
<p>Use the phone for everything that is not structural and keep a real level in the toolbox for the work that gets inspected. That is not a compromise — it is what professionals with both tools actually do.</p>
<p><a href="/bubble-level/">Try the phone level →</a></p>`,
  },

  {
    slug: 'gps-speed-vs-car-speedometer',
    tool: 'speedometer',
    title: 'GPS Speed vs Your Car Speedometer: Why They Disagree',
    description:
      'Your dashboard reads high by design. GPS measures ground truth. Here is why the two numbers differ by 2–5% and which one is right.',
    date: '2026-11-02',
    minutes: 5,
    keywords: 'gps speed vs car speedometer, speedometer accuracy, gps speed accuracy, car speedo reads high',
    body: `
<p class="lead">Check a GPS speedometer on a straight motorway and you will usually find your dashboard is 2–5% optimistic. That is not a fault — it is the law in most countries.</p>
<h2>Why speedometers read high</h2>
<p>Regulations generally allow a speedometer to over-read but never under-read, because under-reading would mean drivers unknowingly break the limit. Manufacturers therefore calibrate slightly high, and the margin grows as tyres wear or you fit a different size.</p>
<h2>Why GPS is usually more truthful</h2>
<p>GPS derives speed from changing position over time, which is true ground speed independent of wheel size, tyre pressure or gearing. The trade-off is latency: GPS smooths over a second or two, so hard acceleration and braking are reported slightly late.</p>
<h2>Where GPS loses</h2>
<ul>
<li><strong>Tunnels and underpasses</strong> — no sky, no fix, no speed.</li>
<li><strong>Urban canyons</strong> — signals bounce off buildings and produce position jumps.</li>
<li><strong>Dense tree cover and storms</strong> — degraded accuracy.</li>
<li><strong>Stationary drift</strong> — a phone can show 1–2 km/h while parked, because satellite geometry noise looks like movement.</li>
</ul>
<h2>Which number should you believe?</h2>
<p>For steady speed on open road, GPS. For instant reaction at a speed limit, your dashboard, because it never lags. Neither is a legal instrument you can quote in a dispute.</p>
<h2>Using a phone speedometer well</h2>
<p>Mount the phone with a clear view of the sky, wait until the accuracy figure is below 15 m, and ignore the first few seconds. In a vehicle, set it up before you move — never tap a screen while driving.</p>
<p><a href="/speedometer/">Open the online speedometer →</a></p>`,
  },
  {
    slug: 'gps-speedometer-accuracy',
    tool: 'speedometer',
    title: 'How Accurate Is a Phone GPS Speedometer?',
    description:
      'Typical error, what degrades it, and how to read the accuracy figure so you know when a speed reading is trustworthy.',
    date: '2026-10-18',
    minutes: 4,
    keywords: 'gps speedometer accuracy, phone gps accuracy, speedometer error, gps speed metres accuracy',
    body: `
<p class="lead">A modern phone under open sky is within about 1–2 km/h of true speed at a steady pace. Getting there depends on three things.</p>
<h2>1. Satellite geometry</h2>
<p>More satellites in a wider spread means a tighter position fix. A phone typically uses 8–20 satellites; with only four or five low on the horizon, the computed track zig-zags and the speed figure inflates.</p>
<h2>2. Sky view</h2>
<p>Every obstruction degrades the fix. A pocket, a glovebox, a bag or a windowless building can cost you most of your accuracy before the app even sees the data.</p>
<h2>3. How the speed is computed</h2>
<p>A good speedometer smooths over a short rolling window. Too little smoothing and the number twitches; too much and it lags behind braking. The accuracy figure displayed on the page is your guide: under 10 m is good, 10–20 m is usable, above 25 m ignore the speed entirely.</p>
<h2>Expected real-world error</h2>
<table>
<thead><tr><th>Condition</th><th>Typical speed error</th></tr></thead>
<tbody>
<tr><td>Open sky, steady speed</td><td>±1–2 km/h</td></tr>
<tr><td>City street with buildings</td><td>±3–5 km/h</td></tr>
<tr><td>Under trees / bridge</td><td>±5–10 km/h</td></tr>
<tr><td>Tunnel</td><td>No reliable reading</td></tr>
</tbody>
</table>
<h2>How to get the best reading</h2>
<p>Mount the phone where it can see the sky, wait for the accuracy figure to settle before starting, keep the screen dim for long trips, and close other apps that use GPS. For a measured run, hold a steady speed for ten seconds instead of glancing at a single instant.</p>
<h2>What it will never be</h2>
<p>A legal instrument. GPS speed has no standing in a speeding dispute, and consumer phones are not calibrated devices. Use it to learn your real speed, to check a dashboard, or to pace a ride — not to prove a point.</p>
<p><a href="/speedometer/">Try the GPS speedometer →</a></p>`,
  },
];

export const postsByTool = (slug: string) => posts.filter((p) => p.tool === slug);
export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
