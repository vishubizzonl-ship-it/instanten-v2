/**
 * Instanten — Cloudflare Worker (static assets + contact form API).
 *
 * Site ki saari HTML/CSS/JS `dist/` se serve hoti hai (`env.ASSETS`), aur sirf
 * `POST /api/contact` is Worker ko chalta hai. Email Cloudflare ke apne
 * `send_email` binding se jaata hai — koi third-party form service nahi,
 * koi API key nahi, koi monthly fee nahi (verified destination = free).
 *
 * Zaroori: `from` address us domain par hona chahiye jo Email Routing par
 * onboarded hai (jaise contact@instanten.com), aur `to` wahi verified
 * destination address hona chahiye jo Cloudflare dashboard me verify kiya hai.
 */

const LIMITS = { name: 80, email: 120, topic: 90, message: 5000 };
const RATE = { windowMs: 10 * 60 * 1000, max: 5 };
const hits = new Map(); // ip -> number[] (per-isolate; best-effort)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

const str = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

/** Header injection se bachne ke liye: newline/tab hata do. */
const oneLine = (value) => value.replace(/[\r\n\t]+/g, ' ').trim();

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE.windowMs);
  if (recent.length >= RATE.max) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // memory blow-up se bacho
  return false;
}

async function readBody(request) {
  const type = request.headers.get('content-type') ?? '';
  if (type.includes('application/json')) {
    return await request.json().catch(() => null);
  }
  if (type.includes('application/x-www-form-urlencoded') || type.includes('multipart/form-data')) {
    const form = await request.formData().catch(() => null);
    return form ? Object.fromEntries(form.entries()) : null;
  }
  return null;
}

async function handleContact(request, env) {
  const url = new URL(request.url);

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
  }

  // Same-origin only — doosri site se spam POST block.
  const origin = request.headers.get('origin');
  if (origin) {
    let originHost = '';
    try {
      originHost = new URL(origin).host;
    } catch {
      return json(403, { ok: false, error: 'bad_origin' });
    }
    if (originHost !== url.host) return json(403, { ok: false, error: 'bad_origin' });
  }

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  if (rateLimited(ip)) return json(429, { ok: false, error: 'rate_limited' });

  const body = await readBody(request);
  if (!body) return json(400, { ok: false, error: 'bad_body' });

  // Honeypot: bot bharta hai, insaan nahi. Chup-chaap success dikhao, mail mat bhejo.
  if (str(body.botcheck, 200)) return json(200, { ok: true, skipped: true });

  const name = oneLine(str(body.name, LIMITS.name));
  const email = oneLine(str(body.email, LIMITS.email));
  const topic = oneLine(str(body.subject ?? body.topic, LIMITS.topic)) || 'Website message';
  const message = str(body.message, LIMITS.message);

  if (name.length < 2 || email.length < 5 || !EMAIL_RE.test(email) || message.length < 5) {
    return json(400, { ok: false, error: 'invalid' });
  }

  if (!env.EMAIL || typeof env.EMAIL.send !== 'function') {
    // Binding nahi lagi → client mailto fallback par chala jayega.
    return json(501, { ok: false, error: 'email_not_configured' });
  }

  const to = str(env.CONTACT_TO, 200);
  const from = str(env.CONTACT_FROM, 200) || 'contact@instanten.com';
  const site = str(env.CONTACT_SITE, 200) || url.host;

  const text =
    `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nReceived: ${new Date().toISOString()}\n\n${message}\n`;
  const html =
    `<h2 style="font:600 16px system-ui,sans-serif">New message from ${escapeHtml(site)}</h2>` +
    `<p style="font:14px system-ui,sans-serif;line-height:1.6">` +
    `<strong>Name:</strong> ${escapeHtml(name)}<br>` +
    `<strong>Email:</strong> ${escapeHtml(email)}<br>` +
    `<strong>Topic:</strong> ${escapeHtml(topic)}<br>` +
    `<strong>Received:</strong> ${new Date().toISOString()}` +
    `</p><hr>` +
    `<pre style="white-space:pre-wrap;font:14px system-ui,sans-serif">${escapeHtml(message)}</pre>`;

  try {
    await env.EMAIL.send({
      from: { name: 'Instanten Contact Form', email: from },
      ...(to ? { to } : {}),
      replyTo: { name, email },
      subject: `[Contact] ${topic} — ${name}`,
      text,
      html,
    });
    return json(200, { ok: true });
  } catch (error) {
    // Server log me sirf code — visitor ka content log nahi hota.
    console.error('contact email failed', error && (error.code || error.name || 'unknown'));
    return json(502, { ok: false, error: 'send_failed' });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') return handleContact(request, env);
    return env.ASSETS.fetch(request);
  },
};
