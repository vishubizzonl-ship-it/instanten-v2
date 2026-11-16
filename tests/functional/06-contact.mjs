/** 06 — Contact form (asli component): validation, worker, fallbacks. */
import { open, reporter } from './harness.mjs';
import { txt } from './routes.mjs';
import { readFileSync } from 'node:fs';

const r = reporter();
r.section('06 — Contact form');

/** fetch ko scriptable banao: har call par ek scripted jawab */
function installFetch(p, script) {
  const calls = [];
  let i = 0;
  p.window.fetch = async (url, init) => {
    const step = script[Math.min(i, script.length - 1)];
    i += 1;
    calls.push({ url: String(url), init, step });
    if (step === 'throw') throw new Error('network down');
    if (step === '404') return { ok: false, status: 404, json: async () => ({}), text: async () => '' };
    if (step === '500') return { ok: false, status: 500, json: async () => ({}), text: async () => '' };
    if (step === 'bad-json') return { ok: true, status: 200, json: async () => ({ success: false }), text: async () => '' };
    return { ok: true, status: 200, json: async () => ({ success: true }), text: async () => '' };
  };
  p.window.__fetchCalls = calls;
  // module scripts Node ke global fetch ko dekhte hain (window ka nahi)
  globalThis.fetch = p.window.fetch;
  return calls;
}

const fill = async (p, { name = 'Ravi Kumar', email = 'ravi@example.com', message = 'The compass tool shows 0 on my phone.', subject = 'bug' } = {}) => {
  p.type('#cf-name', name);
  p.type('#cf-email', email);
  const sel = p.$('#cf-subject');
  sel.value = subject;
  sel.dispatchEvent(new p.window.Event('change', { bubbles: true }));
  p.type('#cf-message', message);
  await p.settle(20);
};

// ---- 1. structure
let p = await open('/contact/');
r.check('contact: form maujood hai', !!p.$('#contact-form'));
r.check('contact: fields name/email/topic/message', ['#cf-name', '#cf-email', '#cf-subject', '#cf-message'].every((s) => !!p.$(s)));
r.check('contact: honeypot field hai', !!p.$('input[name="botcheck"]'));
r.check('contact: submit button hai', !!p.$('#contact-form button[type="submit"]'));
r.check('contact: success/error alert elements hain', !!p.$('#cf-success') && !!p.$('#cf-error'));

// ---- 2. khaali submit → client-side error, koi network nahi
const calls0 = installFetch(p, ['ok']);
p.click('#contact-form button[type="submit"]');
await p.settle(120);
r.check('contact: khaali form par error message', !p.$('#cf-error').hasAttribute('hidden') && txt(p.$('#cf-error')).length > 0, txt(p.$('#cf-error')).slice(0, 60));
r.check('contact: khaali form par koi request nahi jaati', calls0.length === 0, `${calls0.length} calls`);

// ---- 3. galat email
p.type('#cf-name', 'Ravi');
p.type('#cf-email', 'not-an-email');
p.type('#cf-message', 'Hello');
p.click('#contact-form button[type="submit"]');
await p.settle(120);
r.check('contact: galat email par submit rukta hai', calls0.length === 0 && !p.$('#cf-error').hasAttribute('hidden'), `${calls0.length} calls`);
await p.cleanup();

// ---- 4. success path (worker 200)
p = await open('/contact/');
const calls4 = installFetch(p, ['ok']);
await fill(p);
p.click('#contact-form button[type="submit"]');
await p.settle(250);
r.check('contact: worker par POST jaata hai', calls4.length === 1 && calls4[0].url.includes('/api/contact'), `${calls4.length} → ${calls4[0]?.url}`);
r.check('contact: JSON body me naam/email/message', (calls4[0]?.init?.body || '').includes('ravi@example.com'), String(calls4[0]?.init?.body || '').slice(0, 80));
r.check('contact: success message dikhta hai', !p.$('#cf-success').hasAttribute('hidden') && txt(p.$('#cf-success')).length > 0, txt(p.$('#cf-success')).slice(0, 60));
r.check('contact: success ke baad form reset', p.$('#cf-name').value === '' && p.$('#cf-message').value === '');
r.check('contact: submit button wapas enable', p.$('#contact-form button[type="submit"]').disabled === false);
await p.cleanup();

// ---- 5. worker 500 → mailto fallback
p = await open('/contact/');
installFetch(p, ['500']);
await fill(p);
p.click('#contact-form button[type="submit"]');
await p.settle(300);
const status5 = txt(p.$('#cf-success')) + txt(p.$('#cf-error'));
r.check('contact: worker fail par user ko mail-app fallback bataya jaata hai', status5.length > 0, status5.slice(0, 70));
await p.cleanup();

// ---- 6. worker 404 (static host, deploy nahi hua) → agla transport
p = await open('/contact/');
const calls6 = installFetch(p, ['404', 'ok']);
await fill(p);
p.click('#contact-form button[type="submit"]');
await p.settle(350);
r.check('contact: /api/contact na ho to fallback transport try hota hai', calls6.length >= 1, `${calls6.length} calls → ${calls6.map((c) => c.url).join(' , ')}`);
r.check('contact: fallback ke baad bhi user ko result dikhta hai', (txt(p.$('#cf-success')) + txt(p.$('#cf-error'))).length > 0, (txt(p.$('#cf-success')) + txt(p.$('#cf-error'))).slice(0, 60));
await p.cleanup();

// ---- 7. config sanity
const htmlSrc = readFileSync('dist/contact/index.html', 'utf8');
r.check('contact: api path same-origin hai', /data-api="\/api\//.test(htmlSrc), (htmlSrc.match(/data-api="[^"]*"/) || ['none'])[0]);
r.check('contact: contact page par koi secret key nahi', !/data-key="[A-Za-z0-9-]{20,}"/.test(htmlSrc), 'no key attr');

const fails = r.summary();
process.exit(fails.length ? 1 : 0);
