/**
 * Contact form ka submit logic — dono jagah se use hota hai:
 *   - src/components/ContactForm.astro       (chaar tool silo ke contact pages)
 *   - src/components/pages/ContactPage.astro (main /contact/ page)
 *
 * Transport chain (pehla jo kaam kare, wahi):
 *   1. Cloudflare Worker  → POST /api/contact  (send_email binding; koi third-party nahi)
 *   2. Web3Forms          → sirf tab jab PUBLIC_WEB3FORMS_KEY set ho
 *   3. mailto:            → visitor ke mail app me poora message ready
 *
 * "Message sent" sirf tab dikhta hai jab kisi ne sach me bheja ho (1 ya 2). Warna
 * page saaf-saaf batata hai ki mail app khul raha hai — jhootha success kabhi nahi.
 */
export type ContactMessages = {
  sending: string;
  sent: string;
  mailto: string;
  error: string;
};

export type WireOptions = {
  form: HTMLFormElement;
  statusEl: HTMLElement | null;
  errorEl: HTMLElement | null;
  messages: ContactMessages;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function show(el: HTMLElement | null, text: string) {
  if (!el) return;
  el.textContent = text;
  el.hidden = false;
  el.style.display = 'block';
}

function hide(el: HTMLElement | null) {
  if (!el) return;
  el.textContent = '';
  el.hidden = true;
  el.style.display = 'none';
}

function val(data: FormData, key: string) {
  return String(data.get(key) ?? '').trim();
}

type Payload = { name: string; email: string; topic: string; message: string; botcheck: string };

/** 1. Cloudflare Worker — same origin, JSON. */
async function sendViaWorker(api: string, payload: Payload): Promise<'ok' | 'retry' | 'unavailable'> {
  try {
    const res = await fetch(api, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    // 404/405/501 = endpoint hi nahi (static hosting) → agla transport try karo.
    if (res.status === 404 || res.status === 405 || res.status === 501) return 'unavailable';
    if (res.ok) return 'ok';
    return 'retry';
  } catch {
    return 'unavailable';
  }
}

/** 2. Web3Forms — optional backup. */
async function sendViaWeb3Forms(endpoint: string, key: string, payload: Payload): Promise<'ok' | 'retry'> {
  try {
    const body = new FormData();
    body.set('access_key', key);
    body.set('subject', `[${payload.topic}] ${payload.name}`);
    body.set('from_name', payload.name);
    body.set('name', payload.name);
    body.set('email', payload.email);
    body.set('topic', payload.topic);
    body.set('message', payload.message);
    const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean };
    return res.ok && data.success ? 'ok' : 'retry';
  } catch {
    return 'retry';
  }
}

export function wireContactForm({ form, statusEl, errorEl, messages }: WireOptions) {
  const api = form.dataset.api || '';
  const endpoint = form.dataset.endpoint || '';
  const key = form.dataset.key || '';
  const fallbackEmail = form.dataset.email || '';
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const buttonLabel = button?.textContent ?? '';
  let busy = false;

  const setBusy = (state: boolean) => {
    busy = state;
    if (!button) return;
    button.disabled = state;
    button.setAttribute('aria-busy', state ? 'true' : 'false');
    button.textContent = state ? messages.sending : buttonLabel;
  };

  const openMailApp = (payload: Payload) => {
    const body = `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.topic}\n\n${payload.message}`;
    const href =
      `mailto:${fallbackEmail}?subject=` +
      encodeURIComponent(`[${payload.topic}] ${payload.name}`) +
      '&body=' +
      encodeURIComponent(body);
    window.location.href = href;
    show(statusEl, messages.mailto);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy) return;

    const data = new FormData(form);
    const payload: Payload = {
      name: val(data, 'name'),
      email: val(data, 'email'),
      topic: val(data, 'subject') || 'Website message',
      message: val(data, 'message'),
      botcheck: val(data, 'botcheck'),
    };

    hide(errorEl);
    hide(statusEl);

    if (!payload.name || !payload.email || !payload.message || !EMAIL_RE.test(payload.email)) {
      show(errorEl, messages.error);
      return;
    }

    setBusy(true);
    try {
      if (api) {
        const result = await sendViaWorker(api, payload);
        if (result === 'ok') {
          show(statusEl, messages.sent);
          form.reset();
          return;
        }
        if (result === 'retry') {
          // Endpoint hai par bhejne me dikkat aayi — mail app se pahuncha do.
          openMailApp(payload);
          return;
        }
      }
      if (key && endpoint) {
        const result = await sendViaWeb3Forms(endpoint, key, payload);
        if (result === 'ok') {
          show(statusEl, messages.sent);
          form.reset();
          return;
        }
      }
      openMailApp(payload);
    } finally {
      setBusy(false);
    }
  });
}
