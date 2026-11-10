/**
 * Unique long-form copy for each tool silo page.
 * Nothing here is shared between tools — duplicate copy would sink the SEO silos.
 */

export type SiloCopy = { h1: string; title: string; description: string; body: string };

const updated = 'Last updated: 8 November 2026';

export const siloContent: Record<string, Record<'about' | 'contact' | 'privacy' | 'terms', SiloCopy>> = {
  compass: {
    about: {
      h1: 'About the Online Compass',
      title: 'About — Online Compass | instanten',
      description:
        'How the instanten online compass works, which sensors it reads, how accurate it is and which devices support a live heading.',
      body: `
<p class="lead">The online compass exists because a compass is the one tool you always need at the worst possible moment — and the one you never have. This page explains exactly what the tool does under the hood, so you can judge whether it fits your use.</p>
<h2>What it actually measures</h2>
<p>The compass reads two sensors through standard browser APIs. The <strong>magnetometer</strong> (or the platform compass on iOS) supplies magnetic heading; the <strong>accelerometer and gyroscope</strong> supply tilt, which is used to compensate the heading when your phone is not perfectly flat. Nothing is inferred from GPS, so the needle still works with no signal.</p>
<h2>Magnetic north vs true north</h2>
<p>Sensors report magnetic heading. That differs from the true north on a map by the local <em>magnetic declination</em>, which ranges from roughly −15° to +20° depending on where you are. The tool lets you switch between the two: pick magnetic north when you are lining up with a physical compass, true north when you are following a map or a GPS bearing.</p>
<h2>How accurate it is</h2>
<p>After calibration a modern phone typically lands within ±5°. That is enough to choose a trail, orient a map or point at a landmark. It is not enough for surveying or marine navigation — for those, use a dedicated magnetic compass and account for local deviation.</p>
<h2>What breaks the reading</h2>
<p>Magnets, speakers, car dashboards, steel desks, laptop fans and magnetic phone cases all distort the local magnetic field. Holding the phone over a metal surface is the single most common cause of a wrong reading. The second is skipping calibration: phones need a figure-8 motion after long periods unused or after travelling.</p>
<h2>Which devices work</h2>
<p>Phones and tablets with a magnetometer work fully. Desktop and laptop browsers almost never have one, so the tool shows an honest “sensor not available” notice instead of faking a heading. iPhone users must allow motion access once, because Safari requires explicit permission before a page may read orientation data.</p>
<p class="meta">${updated}</p>`,
    },
    contact: {
      h1: 'Contact — Online Compass',
      title: 'Contact — Online Compass Support | instanten',
      description:
        'Report a compass bug, a wrong heading on your device, or suggest a feature for the instanten online compass.',
      body: `
<p class="lead">Using the compass and something is off? Tell us which device and browser you are on and what the needle does — that is usually enough to reproduce it.</p>
<h2>Before you write</h2>
<ul>
<li>Run a figure-8 calibration and step away from metal. Nine out of ten “wrong direction” reports are interference.</li>
<li>Check whether you are reading magnetic or true north — a 10° difference may simply be declination.</li>
<li>Confirm motion access is allowed for your browser.</li>
</ul>
<h2>What to include in a bug report</h2>
<ul>
<li>Device and OS version (e.g. Pixel 7, Android 15)</li>
<li>Browser and version (Chrome 141, Safari 19)</li>
<li>What you expected, and the heading you actually saw</li>
<li>Whether you were indoors, in a vehicle, or near metal</li>
</ul>
<h2>Email</h2>
<p>Write to <a href="mailto:hello@instanten.com">hello@instanten.com</a>. We read everything and reply to bug reports; feature requests get queued but not always answered individually.</p>
<p class="meta">${updated}</p>`,
    },
    privacy: {
      h1: 'Privacy — Online Compass',
      title: 'Privacy Policy — Online Compass | instanten',
      description:
        'What the online compass does with your motion and orientation data: it never leaves your device. No accounts, no profiles, no sale of sensor data.',
      body: `
<p class="lead">The short version: your compass heading is computed in your browser and never transmitted. This page explains what that means in practice for this specific tool.</p>
<h2>Sensor data</h2>
<p>The compass reads <strong>device orientation</strong> (magnetometer, accelerometer, gyroscope) through the browser APIs <code>DeviceOrientationEvent</code> and, on iOS, <code>webkitCompassHeading</code>. These readings are processed entirely in memory on your device. They are not sent to any server, not stored, and not shared with third parties.</p>
<h2>Location</h2>
<p>This tool does not request your location. A compass needs no GPS.</p>
<h2>Calendar and motion permission</h2>
<p>iOS shows a one-time “Allow motion access” prompt. You can revoke it at any time in Settings › Safari › Motion &amp; Orientation Access; the compass will then show a permission notice instead of a heading.</p>
<h2>Local storage</h2>
<p>We store a small amount of preference data in your browser’s local storage: theme choice, last calibration offset and whether you prefer true or magnetic north. This never leaves your device and is cleared if you clear site data.</p>
<h2>Analytics and cookies</h2>
<p>This tool sets no advertising cookies and builds no user profile. Aggregate page-view counts are used to understand which tools people use, without identifiers linked to an individual.</p>
<h2>Children</h2>
<p>The tool is suitable for all ages and collects no personal information from anyone, including children under 13.</p>
<h2>Contact</h2>
<p>Privacy questions: <a href="mailto:hello@instanten.com">hello@instanten.com</a>. See also the <a href="/compass/terms/">terms of use</a>.</p>
<p class="meta">${updated}</p>`,
    },
    terms: {
      h1: 'Terms — Online Compass',
      title: 'Terms of Use — Online Compass | instanten',
      description:
        'Terms for the free instanten online compass, including the accuracy disclaimer that applies because phone sensors are not survey instruments.',
      body: `
<p class="lead">By using the online compass you accept these terms. They are short because the tool is simple, and the most important clause is the accuracy disclaimer.</p>
<h2>1. Free licence to use</h2>
<p>The compass is provided free of charge for personal and commercial use. You may not resell, rebrand, or repackage the tool as your own product, or attempt to overload the service.</p>
<h2>2. Accuracy disclaimer</h2>
<p><strong>This is not a navigation-grade instrument.</strong> A phone compass depends on consumer sensors that drift with temperature, nearby metal and magnetic interference, and it can be wrong by several degrees even after calibration. Do not rely on it as the sole means of navigation on water, in mountains, in deserts or in any situation where an incorrect heading could cause injury or loss. Always carry a magnetic compass and a map where that matters.</p>
<h2>3. Availability</h2>
<p>The tool is offered “as is” and may change or be unavailable without notice. Some devices lack the required sensors; the page states this plainly rather than showing a fake reading.</p>
<h2>4. Limitation of liability</h2>
<p>To the maximum extent permitted by law, instanten is not liable for any loss or damage arising from use of the compass, including decisions made using its readings.</p>
<h2>5. Privacy</h2>
<p>Sensor readings stay on your device; see the <a href="/compass/privacy/">privacy policy</a>.</p>
<h2>6. Changes</h2>
<p>These terms may be updated as the tool changes. The date above shows the current version.</p>
<p class="meta">${updated}</p>`,
    },
  },

  'qibla-finder': {
    about: {
      h1: 'About the Qibla Finder',
      title: 'About — Qibla Finder | instanten',
      description:
        'How the qibla bearing is calculated, how accurate a phone qibla finder can be, and how to verify the direction independently.',
      body: `
<p class="lead">The qibla is not an approximate “south-east” — it is a specific great-circle bearing from your exact position to the Kaaba. This page explains how that bearing is computed and where the uncertainty really comes from.</p>
<h2>The calculation</h2>
<p>The tool takes your latitude and longitude, taken from the browser geolocation API, and computes the <strong>initial great-circle bearing</strong> to the Kaaba at 21.4225° N, 39.8262° E. The formula is the same one used in Islamic astronomy:</p>
<p><code>θ = atan2( sin Δλ · cos φ₂ , cos φ₁ · sin φ₂ − sin φ₁ · cos φ₂ · cos Δλ )</code></p>
<p>where φ₁, λ₁ are your coordinates, φ₂, λ₂ are the Kaaba’s, and Δλ is the longitude difference. The maths is exact; the result is then combined with your phone’s compass heading so the arrow points at the qibla as you rotate.</p>
<h2>Where error actually comes from</h2>
<p>Not from the formula. Error comes from two places: <strong>your location</strong>, if GPS is approximate or you are indoors, and <strong>your compass sensor</strong>, which is typically ±5° after calibration and can be much worse near metal. In cities like Patna, a 1 km location error shifts the bearing by a few hundredths of a degree — negligible. A 10° compass error, however, is very visible.</p>
<h2>Why direction matters more at high latitudes</h2>
<p>The further you are from Makkah, the more a small compass error compounds over distance. In Indonesia or India the qibla is a comfortable south-west or west direction; in northern Europe or North America the bearing is much shallower, so a few degrees of sensor error translate into a longer sideways miss over a mosque-length distance.</p>
<h2>Independent verification</h2>
<p>Check your reading against the qibla wall of a nearby mosque, a printed qibla compass, or the sun-shadow method (the sun passes directly over the Kaaba on 27–28 May and 15–16 July, when shadows point exactly away from the qibla). Two agreeing methods are worth more than one confident app.</p>
<p class="meta">${updated}</p>`,
    },
    contact: {
      h1: 'Contact — Qibla Finder',
      title: 'Contact — Qibla Finder Support | instanten',
      description:
        'Report a wrong qibla bearing, a location problem or a UI issue with the instanten qibla finder.',
      body: `
<p class="lead">If the qibla arrow looks wrong, the fastest fix is usually a location or calibration problem. Send us the details below and we will check the bearing maths for your coordinates.</p>
<h2>Quick checks first</h2>
<ul>
<li>Is the location shown on the page actually where you are? Indoor GPS can be off by hundreds of metres.</li>
<li>Has the compass been calibrated? A slow figure-8 motion fixes most drift.</li>
<li>Are you near a steel structure, a speaker or a magnet?</li>
</ul>
<h2>For a bearing report, include</h2>
<ul>
<li>Your city and the coordinates shown by the tool</li>
<li>The bearing in degrees that the tool displayed</li>
<li>The bearing your mosque or a physical compass gives, if you have one</li>
<li>Device, OS and browser</li>
</ul>
<h2>Email</h2>
<p>Write to <a href="mailto:hello@instanten.com">hello@instanten.com</a>. Reports about incorrect bearings are treated as priority, because prayer direction is not a cosmetic detail.</p>
<p class="meta">${updated}</p>`,
    },
    privacy: {
      h1: 'Privacy — Qibla Finder',
      title: 'Privacy Policy — Qibla Finder | instanten',
      description:
        'How the qibla finder handles your location: coordinates are used in your browser to compute the bearing and are never stored or sent to a server.',
      body: `
<p class="lead">A qibla finder needs your location, so it is fair to be careful about it. Here is exactly what happens to your coordinates.</p>
<h2>Location data</h2>
<p>When you allow location access, the browser passes your latitude and longitude to the page. The qibla bearing is calculated <strong>locally in JavaScript</strong>. Your coordinates are not uploaded, not logged, and not stored in a database — there is no server-side endpoint that receives them.</p>
<h2>Precise vs approximate location</h2>
<p>Some browsers offer an approximate option. We recommend precise location: an approximate position can shift the bearing by several degrees. You can revoke the permission at any time in your browser’s site settings.</p>
<h2>Motion and orientation</h2>
<p>To rotate the arrow with your phone, the tool reads device orientation sensors locally. These values are also never transmitted.</p>
<h2>Local storage</h2>
<p>We keep your last manually entered city or coordinates in local storage so the page is useful on a return visit. It stays on your device and can be cleared from your browser settings.</p>
<h2>No account, no tracking profile</h2>
<p>There is no sign-in, no advertising cookie and no profile built from your location history. We do not sell or share location data, because we never receive it.</p>
<h2>Contact</h2>
<p>Privacy questions: <a href="mailto:hello@instanten.com">hello@instanten.com</a>. See also the <a href="/qibla-finder/terms/">terms of use</a>.</p>
<p class="meta">${updated}</p>`,
    },
    terms: {
      h1: 'Terms — Qibla Finder',
      title: 'Terms of Use — Qibla Finder | instanten',
      description:
        'Terms for the instanten qibla finder, including the disclaimer that a phone compass is a helpful guide, not a substitute for a verified qibla.',
      body: `
<p class="lead">The qibla finder is a calculation aid. These terms set out what it can and cannot be relied on for.</p>
<h2>1. Free licence to use</h2>
<p>The tool is free for personal use, including in mosques, homes and workplaces. Do not resell, rebrand or embed it as your own product.</p>
<h2>2. Accuracy disclaimer</h2>
<p><strong>The bearing calculation is exact; the sensors are not.</strong> A phone compass can be wrong by several degrees near metal, in vehicles or when uncalibrated, and indoor GPS can place you far from your real position. Use the result as a strong indication and verify with a mosque qibla direction, a physical qibla compass or the sun-shadow method where precision matters. instanten is not responsible for prayer offered on the basis of an incorrect reading.</p>
<h2>3. Location permission</h2>
<p>The tool cannot calculate a bearing without your location. If you decline, only the manual city/coordinate mode is available.</p>
<h2>4. Availability</h2>
<p>The service is provided “as is” and may change without notice.</p>
<h2>5. Limitation of liability</h2>
<p>To the maximum extent permitted by law, instanten is not liable for any loss arising from use of this tool.</p>
<h2>6. Privacy</h2>
<p>Coordinates stay on your device; see the <a href="/qibla-finder/privacy/">privacy policy</a>.</p>
<p class="meta">${updated}</p>`,
    },
  },

  'bubble-level': {
    about: {
      h1: 'About the Bubble Level',
      title: 'About — Bubble Level | instanten',
      description:
        'How a phone bubble level works, why calibration matters, and how accurate an accelerometer-based spirit level really is.',
      body: `
<p class="lead">A spirit level works because gravity is predictable. So does this one — it just reads gravity through your phone’s accelerometer instead of a bubble in a vial.</p>
<h2>How the sensor works</h2>
<p>The accelerometer measures the direction of gravity relative to the device. With the phone flat on a surface, gravity points straight down through the screen; tilt the surface and the gravity vector tilts with it. The tool converts that vector into degrees of pitch and roll, then draws it as a bubble. There is no GPS involved and no internet needed.</p>
<h2>Why calibration is essential</h2>
<p>Every phone has a small factory offset, and a case, a camera bump or a worn table adds more. The tool therefore lets you set a zero point: place the phone on a surface you trust — a machined countertop, a table saw top, a glass table — and tap calibrate. Until you do that, a perfect surface may read 0.4°.</p>
<h2>Realistic accuracy</h2>
<p>Expect roughly 0.1°–0.5° after calibration. Temperature changes and cheap sensors push it toward the worse end. That is fine for hanging a shelf, levelling a frame, checking a table or setting a 2° drain slope. It is not fine for structural work, load-bearing installations, or anything where a bubble level would be specified in a contract.</p>
<h2>Modes explained</h2>
<p><strong>Horizontal</strong> checks a surface across both axes. <strong>Vertical (plumb)</strong> checks a vertical face — picture frames, posts, door hinges. <strong>Bull’s-eye</strong> shows both axes at once, which is what you want when levelling a table or a tripod.</p>
<h2>Practical tips</h2>
<p>Place the phone on the surface itself instead of holding it — your hand tilts more than the surface does. Keep the phone away from speakers and magnets, which can disturb the other sensors inside the same package. And if you need an exact angle, use the numeric readout rather than eyeballing the bubble.</p>
<p class="meta">${updated}</p>`,
    },
    contact: {
      h1: 'Contact — Bubble Level',
      title: 'Contact — Bubble Level Support | instanten',
      description:
        'Report a bubble level calibration problem or accuracy issue on your device.',
      body: `
<p class="lead">Reporting a level problem? The two details that matter most are your device model and whether the offset survived a calibration.</p>
<h2>Quick checks first</h2>
<ul>
<li>Calibrate on a surface you know is flat, with the case on.</li>
<li>Remove magnetic accessories — some cases and mounts include magnets.</li>
<li>Test on two different surfaces to see whether the error is the phone or the table.</li>
</ul>
<h2>Include in your report</h2>
<ul>
<li>Device and OS version</li>
<li>The reading you get on a known-flat surface, in degrees</li>
<li>Whether the phone was in a case</li>
<li>Browser and version</li>
</ul>
<h2>Email</h2>
<p>Write to <a href="mailto:hello@instanten.com">hello@instanten.com</a>. If a specific phone model reads consistently wrong, we can add a note or a device-specific hint to the page.</p>
<p class="meta">${updated}</p>`,
    },
    privacy: {
      h1: 'Privacy — Bubble Level',
      title: 'Privacy Policy — Bubble Level | instanten',
      description:
        'The bubble level reads your accelerometer locally. No location, no account, no sensor data leaves the device.',
      body: `
<p class="lead">The bubble level asks for no permissions beyond motion access, and it sends nothing anywhere. Details below.</p>
<h2>Sensor data</h2>
<p>The tool reads <strong>device orientation and acceleration</strong> to determine tilt. Processing happens entirely in your browser. No tilt values, calibration values or device identifiers are transmitted or stored on a server.</p>
<h2>No location</h2>
<p>This tool does not request geolocation. A level does not need to know where you are, and we do not ask.</p>
<h2>Local storage</h2>
<p>Your calibration offset and theme preference are saved in your browser’s local storage so the level stays accurate between visits. Clearing site data removes them. Nothing is synced anywhere.</p>
<h2>Cookies and analytics</h2>
<p>No advertising cookies, no cross-site tracking, no user profiles. Aggregate page views may be counted without identifiers.</p>
<h2>Motion permission</h2>
<p>On iOS, motion access is a one-time prompt you can revoke in Settings. Without it the level cannot read tilt and will say so.</p>
<h2>Contact</h2>
<p>Privacy questions: <a href="mailto:hello@instanten.com">hello@instanten.com</a>. See also the <a href="/bubble-level/terms/">terms of use</a>.</p>
<p class="meta">${updated}</p>`,
    },
    terms: {
      h1: 'Terms — Bubble Level',
      title: 'Terms of Use — Bubble Level | instanten',
      description:
        'Terms for the free online bubble level, including the limit that a phone sensor is not a certified spirit level.',
      body: `
<p class="lead">These terms cover the online bubble level. The key point: it is a convenience tool, not a certified measuring instrument.</p>
<h2>1. Free licence to use</h2>
<p>Free for personal and professional use. Do not resell or rebrand the tool, or present it as a certified measuring device.</p>
<h2>2. Accuracy disclaimer</h2>
<p><strong>A phone accelerometer is not a calibrated spirit level.</strong> Readings drift with temperature and handling, and depend on how well you calibrated. Do not rely on this tool alone for load-bearing structures, structural carpentry, gas or plumbing installations, or any work where an error could cause damage, injury or a failed inspection. Use a certified spirit level or a professional for that work.</p>
<h2>3. No warranty</h2>
<p>The tool is provided “as is”, without warranty of accuracy, fitness for a particular purpose or uninterrupted availability.</p>
<h2>4. Limitation of liability</h2>
<p>To the maximum extent permitted by law, instanten is not liable for any damage or loss resulting from use of this tool, including rework caused by an incorrect reading.</p>
<h2>5. Privacy</h2>
<p>Sensor data stays on your device; see the <a href="/bubble-level/privacy/">privacy policy</a>.</p>
<p class="meta">${updated}</p>`,
    },
  },

  speedometer: {
    about: {
      h1: 'About the Speedometer',
      title: 'About — Online Speedometer | instanten',
      description:
        'How a GPS speedometer calculates speed, why it differs from your car dashboard, and what affects accuracy.',
      body: `
<p class="lead">This speedometer measures ground speed from GPS position changes — the same principle as a fitness watch or a boat plotter, without the hardware.</p>
<h2>How speed is calculated</h2>
<p>The browser’s geolocation API reports latitude, longitude and altitude with a timestamp. The tool computes the distance between consecutive fixes using the haversine formula and divides by the elapsed time. Averaging over a short window smooths the jitter that raw fixes produce, which is why the number feels steady instead of twitching.</p>
<h2>Why it differs from your car’s speedometer</h2>
<p>Two reasons. Car speedometers are deliberately calibrated to read slightly high — typically 2–5% — so they never under-report. And they measure wheel rotation, which changes with tyre wear and pressure. GPS measures actual ground speed, so on a flat straight road the two will disagree, and the GPS figure is usually the more truthful one.</p>
<h2>What reduces accuracy</h2>
<p>Weak sky view is the main factor. Tunnels, underpasses, dense tree cover, tall buildings and a phone in a pocket or glovebox all cause position jumps that look like sudden acceleration. The page shows the current GPS accuracy in metres so you can tell a trustworthy reading from a noisy one.</p>
<h2>Good uses</h2>
<p>Cycling and running speed, checking a boat or a tractor, verifying how far off a dashboard is, measuring average speed on a fixed route, and confirming a speed limiter works. It is not a legal instrument and should never be used to dispute a speeding ticket.</p>
<h2>Battery and data</h2>
<p>GPS is the most power-hungry sensor on a phone. For long trips, dim the screen, keep the phone mounted with a clear sky view, and close other apps using location.</p>
<p class="meta">${updated}</p>`,
    },
    contact: {
      h1: 'Contact — Speedometer',
      title: 'Contact — Speedometer Support | instanten',
      description:
        'Speedometer not showing speed or reading too low? Report a GPS issue with your device details.',
      body: `
<p class="lead">If the speedometer sits at zero or jumps around, GPS is almost always the cause. Here is how to narrow it down before writing.</p>
<h2>Quick checks first</h2>
<ul>
<li>Location permission must be <em>precise</em>, not approximate.</li>
<li>Step outdoors and wait for the accuracy figure to settle below about 15 m.</li>
<li>Disable battery-saver mode, which can throttle background location.</li>
</ul>
<h2>Include in your report</h2>
<ul>
<li>Device, OS and browser</li>
<li>The accuracy figure the page displayed</li>
<li>Where you were: open sky, city street, vehicle, indoors</li>
<li>Whether another GPS app showed speed at the same time</li>
</ul>
<h2>Email</h2>
<p>Write to <a href="mailto:hello@instanten.com">hello@instanten.com</a>. Screenshots of the accuracy figure alongside the speed reading help a lot.</p>
<p class="meta">${updated}</p>`,
    },
    privacy: {
      h1: 'Privacy — Speedometer',
      title: 'Privacy Policy — Speedometer | instanten',
      description:
        'The online speedometer uses GPS locally to compute speed. Your route is not recorded, uploaded or shared.',
      body: `
<p class="lead">A speedometer sees where you move, so this page is explicit: no route is stored and no position is uploaded.</p>
<h2>Location data</h2>
<p>Your position is read through the browser geolocation API and used to compute distance, speed and altitude <strong>in memory on your device</strong>. Positions are overwritten on each new fix; there is no route history, no database record and no server transmission of coordinates.</p>
<h2>Trip statistics</h2>
<p>Max speed, average speed, distance and elapsed time are displayed only. They are not saved after you close the tab unless you keep the page open.</p>
<h2>No account</h2>
<p>There is no login, so speed data cannot be tied to an identity. We do not sell or share location data.</p>
<h2>Permissions</h2>
<p>Location permission is required for the tool to work and can be revoked at any time in your browser’s site settings. On some browsers you may also see a motion permission prompt if wake-lock or orientation features are used.</p>
<h2>Cookies and analytics</h2>
<p>No advertising cookies and no cross-site profiling. Aggregate, non-identifying page-view counts may be collected.</p>
<h2>Contact</h2>
<p>Privacy questions: <a href="mailto:hello@instanten.com">hello@instanten.com</a>. See also the <a href="/speedometer/terms/">terms of use</a>.</p>
<p class="meta">${updated}</p>`,
    },
    terms: {
      h1: 'Terms — Speedometer',
      title: 'Terms of Use — Online Speedometer | instanten',
      description:
        'Terms for the free online speedometer, including that GPS speed readings are not a legal or calibrated measurement.',
      body: `
<p class="lead">These terms cover the online speedometer. Read the disclaimer before relying on a reading.</p>
<h2>1. Free licence to use</h2>
<p>Free for personal and commercial use. Do not resell or rebrand the tool, or present its output as a certified measurement.</p>
<h2>2. Accuracy disclaimer</h2>
<p><strong>GPS speed is an estimate.</strong> Accuracy depends on sky view, your device hardware and satellite geometry, and can degrade sharply in tunnels, urban canyons and under heavy tree cover. Never use this tool as the sole instrument for speed-sensitive decisions, and never use it while driving in a way that distracts you. Do not use it to contest a legal speed measurement — it carries no legal standing.</p>
<h2>3. Distracted driving</h2>
<p>Do not interact with the page while operating a vehicle. Mount the phone and set it before you start moving.</p>
<h2>4. Availability</h2>
<p>The service is provided “as is” and may change or be interrupted without notice.</p>
<h2>5. Limitation of liability</h2>
<p>To the maximum extent permitted by law, instanten is not liable for any loss, fine or damage arising from use of this tool.</p>
<h2>6. Privacy</h2>
<p>Positions are processed on your device only; see the <a href="/speedometer/privacy/">privacy policy</a>.</p>
<p class="meta">${updated}</p>`,
    },
  },
};
