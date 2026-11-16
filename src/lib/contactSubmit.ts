/**
 * Contact form ka submit logic — dono jagah se use hota hai:
 *   - src/components/ContactForm.astro      (chaar tool silo ke contact pages)
 *   - src/components/pages/ContactPage.astro (main /contact/ page)
 *
 * Do modes:
 *   1. LIVE  (Web3Forms key maujood)  → fetch() se message asli me bhejta hai.
 *   2. FALLBACK (key nahi)            → visitor ke mail app me ready message kholta hai.
 * Kabhi bhi "sent" ka jhootha green box nahi dikhta — success sirf tab jab bhejna
 * sach me ho gaya ho.
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

export function wireContactForm({ form, statusEl, errorEl, messages }: WireOptions) {
  const live = form.dataset.live === 'true';
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

  /** Key nahi hai (ya network fail) → visitor ke mail app me ready message kholo. */
  const openMailApp = (subject: string, body: string) => {
    const href =
      `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    show(statusEl, messages.mailto);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy) return;

    const data = new FormData(form);
    const name = val(data, 'name');
    const email = val(data, 'email');
    const topic = val(data, 'subject') || 'Website message';
    const message = val(data, 'message');

    hide(errorEl);
    hide(statusEl);

    if (!name || !email || !message || !EMAIL_RE.test(email)) {
      show(errorEl, messages.error);
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${topic}\n\n${message}`;
    const mailSubject = `[${topic}] ${name}`;

    if (!live || !key || !endpoint) {
      openMailApp(mailSubject, body);
      return;
    }

    setBusy(true);
    try {
      const payload = new FormData();
      payload.set('access_key', key);
      payload.set('subject', mailSubject);
      payload.set('from_name', name);
      payload.set('name', name);
      payload.set('email', email);
      payload.set('topic', topic);
      payload.set('message', message);
      payload.set('botcheck', '');

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

      if (res.ok && json.success) {
        show(statusEl, messages.sent);
        form.reset();
      } else {
        // Server ne mana kiya → visitor ko chup-chaap chhodne ke bajaye mail app do.
        openMailApp(mailSubject, body);
      }
    } catch {
      openMailApp(mailSubject, body);
    } finally {
      setBusy(false);
    }
  });
}
