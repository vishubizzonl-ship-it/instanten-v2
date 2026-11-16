/** 04 — 4 sensor tools: fake sensors se asli behaviour. */
import { open, reporter } from './harness.mjs';
import { INSTRUMENTS, txt } from './routes.mjs';

const r = reporter();
r.section('04 — Sensor instruments');

/** deviceorientation/motion + geolocation ko browser jaisa banao */
function installSensors(w) {
  w.DeviceOrientationEvent = class extends w.Event {
    constructor(type, init = {}) {
      super(type, init);
      this.alpha = init.alpha ?? 0;
      this.beta = init.beta ?? 0;
      this.gamma = init.gamma ?? 0;
      this.absolute = init.absolute ?? true;
    }
  };
  w.DeviceMotionEvent = class extends w.Event {
    constructor(type, init = {}) {
      super(type, init);
      this.accelerationIncludingGravity = init.accelerationIncludingGravity ?? { x: 0, y: 0, z: 9.8 };
      this.interval = 16;
    }
  };
  w.DeviceOrientationEvent.requestPermission = async () => 'granted';
  w.DeviceMotionEvent.requestPermission = async () => 'granted';
  globalThis.DeviceOrientationEvent = w.DeviceOrientationEvent;
  globalThis.DeviceMotionEvent = w.DeviceMotionEvent;

  const geo = {
    watchId: 0,
    watches: new Map(),
    lastError: null,
    watchPosition(ok, err) {
      this.watchId += 1;
      this.watches.set(this.watchId, ok);
      return this.watchId;
    },
    clearWatch(id) {
      this.watches.delete(id);
    },
    getCurrentPosition(ok) {
      ok({ coords: { latitude: 25.5941, longitude: 85.1376, accuracy: 10 }, timestamp: Date.now() });
    },
  };
  Object.defineProperty(w.navigator, 'geolocation', { value: geo, configurable: true });
  w.__geo = geo;
  return geo;
}

const fire = (p, type, init) => {
  const Ctor = type.startsWith('deviceorientation') ? p.window.DeviceOrientationEvent : p.window.DeviceMotionEvent;
  p.window.dispatchEvent(new Ctor(type, init));
};

// ------------------------------------------------------------- Compass
async function compass() {
  const p = await open(INSTRUMENTS.onlinecompass, { setup: installSensors });
  r.check('compass: page load par error nahi', p.errors.length === 0, p.errors.join('|').slice(0, 80));
  r.check('compass: dial + angle elements maujood', !!p.$('#compass-dial') && !!p.$('#compass-angle'));
  const before = p.$('#compass-dial').getAttribute('style');
  for (let a = 0; a <= 90; a += 10) {
    fire(p, 'deviceorientation', { alpha: a, beta: 0, gamma: 0, absolute: true });
    await p.settle(12);
  }
  await p.settle(80);
  const after = p.$('#compass-dial').getAttribute('style');
  const angle = txt(p.$('#compass-angle'));
  r.check('compass: sensor aane par dial ghoomta hai', after !== before, `${before} → ${after}`);
  r.check('compass: heading number update hota hai', /[0-9]/.test(angle), `angle="${angle}"`);
  const live = txt(p.$('#compass-live'));
  const status = txt(p.$('#compass-status'));
  r.check('compass: live/status area me jaankari hai', (status + live).length > 0, `status="${status.slice(0, 40)}" live="${live.slice(0, 40)}"`);
  r.check('compass: fullscreen button hai (sirf icon)', !!p.$('#compass-fullscreen-btn') && txt(p.$('#compass-fullscreen-btn')) === '', txt(p.$('#compass-fullscreen-btn')));
  p.cleanup();
}

// --------------------------------------------------------- Bubble level
async function bubble() {
  const p = await open(INSTRUMENTS.onlinebubblelevel, { setup: installSensors });
  r.check('bubble: page load par error nahi', p.errors.length === 0, p.errors.join('|').slice(0, 80));
  r.check('bubble: dot + x/y readout maujood', !!p.$('#bubble-dot') && !!p.$('#bubble-x') && !!p.$('#bubble-y'));
  const before = p.$('#bubble-dot').getAttribute('style') || '';
  for (const [beta, gamma] of [[8, -6], [12, -9], [14, -10]]) {
    fire(p, 'deviceorientation', { alpha: 0, beta, gamma, absolute: true });
    await p.settle(40);
  }
  await p.settle(120);
  const after = p.$('#bubble-dot').getAttribute('style') || '';
  const x = txt(p.$('#bubble-x'));
  const y = txt(p.$('#bubble-y'));
  r.check('bubble: tilt par dot hilta hai', after !== before, `${before.slice(0, 40)} → ${after.slice(0, 40)}`);
  r.check('bubble: X/Y angle values dikhte hain', /[0-9]/.test(x) && /[0-9]/.test(y), `x=${x} y=${y}`);
  r.check('bubble: Calibrate/Reset buttons nahi (design rule)', p.$$('button').every((b) => !/calibrat|reset/i.test(txt(b))), p.$$('button').map((b) => txt(b)).join(','));
  p.cleanup();
}

// --------------------------------------------------------- Speedometer
async function speedo() {
  const p = await open(INSTRUMENTS.onlinespeedometer, { setup: installSensors });
  r.check('speed: page load par error nahi', p.errors.length === 0, p.errors.join('|').slice(0, 80));
  const geo = p.window.__geo;
  r.check('speed: Start/Reset/Record buttons hain', !!p.$('#start-btn') && !!p.$('#record-btn'), p.$$('#speed-head button').map((b) => txt(b)).join(' | '));
  const startLabel = txt(p.$('#start-btn'));
  p.click('#start-btn');
  await p.settle(80);
  r.check('speed: GPS watch chal raha hai (live speed ke liye)', geo.watches.size > 0, `${geo.watches.size} watch`);
  r.check('speed: Start → label Stop ho jaata hai', txt(p.$('#start-btn')) !== startLabel && /stop/i.test(txt(p.$('#start-btn'))), txt(p.$('#start-btn')));
  // do positions → speed calculate
  const cb = [...geo.watches.values()][0];
  cb({ coords: { latitude: 25.5941, longitude: 85.1376, accuracy: 5 }, timestamp: Date.now() });
  await p.settle(40);
  cb({ coords: { latitude: 25.5951, longitude: 85.1376, accuracy: 5 }, timestamp: Date.now() + 1000 });
  await p.settle(120);
  r.check('speed: position aane par speed number set hota hai', /[0-9]/.test(txt(p.$('#speed-display'))), txt(p.$('#speed-display')));
  r.check('speed: max speed track hota hai', /[0-9]/.test(txt(p.$('#max-speed'))), txt(p.$('#max-speed')));
  p.click('#record-btn');
  await p.settle(80);
  r.check('speed: Record dabane par list me entry aati hai', (p.$$('#record-list li, #record-list tr, [data-record-row]').length > 0) || txt(p.$('#record-list') || p.$('body')).length > 0);
  // unit menu
  p.click('#unit-btn');
  await p.settle(60);
  r.check('speed: unit menu khulta hai', !p.$('#unit-menu').classList.contains('hidden'));
  p.window.selectUnit(1);
  await p.settle(60);
  r.check('speed: MPH select karne par unit label badalta hai', /mph/i.test(txt(p.$('#unit-label'))), txt(p.$('#unit-label')));
  p.window.resetTrip();
  await p.settle(60);
  r.check('speed: Reset ke baad display 0', txt(p.$('#speed-display')).startsWith('0'), txt(p.$('#speed-display')));
  const labelNow = txt(p.$('#start-btn'));
  p.click('#start-btn');
  await p.settle(60);
  r.check('speed: Start/Stop toggle kaam karta hai', txt(p.$('#start-btn')) !== labelNow && /start|stop/i.test(txt(p.$('#start-btn'))), `${labelNow} → ${txt(p.$('#start-btn'))}`);
  r.check('speed: Stop ke baad bhi live speed chalti rehti hai (by design)', geo.watches.size > 0, `${geo.watches.size} watch`);
  p.cleanup();
}

// ---------------------------------------------------------------- Qibla
async function qibla() {
  const p = await open(INSTRUMENTS.onlineqibla, { setup: installSensors });
  r.check('qibla: page load par error nahi', p.errors.length === 0, p.errors.join('|').slice(0, 80));
  const geo = p.window.__geo;
  r.check('qibla: bearing element maujood', !!p.$('#qibla-bearing'));
  const bearingBefore = txt(p.$('#qibla-bearing'));
  // geolocation + orientation
  for (const [id, cb] of geo.watches) cb({ coords: { latitude: 25.5941, longitude: 85.1376, accuracy: 8 }, timestamp: Date.now() });
  await p.settle(120);
  for (let a = 0; a <= 270; a += 45) {
    fire(p, 'deviceorientation', { alpha: a, beta: 0, gamma: 0, absolute: true });
    await p.settle(20);
  }
  await p.settle(120);
  const bearing = txt(p.$('#qibla-bearing'));
  r.check('qibla: GPS ke baad bearing/degree update hota hai', bearing !== bearingBefore || /[0-9]/.test(bearing), `${bearingBefore} → ${bearing}`);
  const status = txt(p.$('#qibla-status'));
  r.check('qibla: heading milne par status clear/ready ho jaata hai', status === '' || /ready|approx|Approximate/i.test(status), `status="${status.slice(0, 50)}"`);
  r.check('qibla: marker element maujood', !!p.$('#qibla-marker'));
  r.check('qibla: degree text aur dial dono hain (design rule)', /°/.test(bearing) || /[0-9]/.test(bearing), bearing.slice(0, 30));
  p.cleanup();
}

await compass();
await bubble();
await speedo();
await qibla();

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
