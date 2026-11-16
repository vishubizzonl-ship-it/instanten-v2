/**
 * Worker ka apna test — `node --test worker/contact.test.mjs`
 *
 * Koi package nahi (node:test built-in). Email binding ko fake karke har rasta
 * check hota hai: valid send, honeypot, validation, origin, rate limit,
 * binding missing, send failure, aur static-asset passthrough.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from './index.mjs';

const BASE = 'https://instanten.com';

function makeEnv(overrides = {}) {
  const sent = [];
  const env = {
    EMAIL: {
      async send(message) {
        sent.push(message);
        return { messageId: 'msg_1' };
      },
    },
    ASSETS: {
      async fetch(request) {
        return new Response(`asset:${new URL(request.url).pathname}`, { status: 200 });
      },
    },
    CONTACT_TO: 'vishubizz.onl@gmail.com',
    CONTACT_FROM: 'contact@instanten.com',
    CONTACT_SITE: 'instanten.com',
    ...overrides,
  };
  return { env, sent };
}

let ipCounter = 0;
const nextIp = () => `203.0.113.${++ipCounter}`;

function post(body, headers = {}) {
  return new Request(`${BASE}/api/contact`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: BASE,
      'cf-connecting-ip': nextIp(),
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

const valid = {
  name: 'Asha Verma',
  email: 'asha@example.com',
  subject: 'Bug report',
  message: 'The compass needle sticks at 180 degrees on my phone.',
};

test('valid message is emailed to the owner with Reply-To set', async () => {
  const { env, sent } = makeEnv();
  const res = await worker.fetch(post(valid), env);
  assert.equal(res.status, 200);
  assert.equal((await res.json()).ok, true);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].to, 'vishubizz.onl@gmail.com');
  assert.equal(sent[0].from.email, 'contact@instanten.com');
  assert.equal(sent[0].replyTo.email, 'asha@example.com');
  assert.match(sent[0].subject, /Bug report/);
  assert.match(sent[0].text, /sticks at 180/);
});

test('honeypot submission pretends success but sends nothing', async () => {
  const { env, sent } = makeEnv();
  const res = await worker.fetch(post({ ...valid, botcheck: 'http://spam.example' }), env);
  assert.equal(res.status, 200);
  assert.equal(sent.length, 0);
});

test('invalid input is rejected with 400 and never sent', async () => {
  const { env, sent } = makeEnv();
  for (const bad of [
    { ...valid, email: 'not-an-email' },
    { ...valid, name: '' },
    { ...valid, message: 'hi' },
  ]) {
    const res = await worker.fetch(post(bad), env);
    assert.equal(res.status, 400);
  }
  assert.equal(sent.length, 0);
});

test('cross-origin POST is refused', async () => {
  const { env, sent } = makeEnv();
  const res = await worker.fetch(post(valid, { origin: 'https://evil.example' }), env);
  assert.equal(res.status, 403);
  assert.equal(sent.length, 0);
});

test('GET /api/contact is 405', async () => {
  const { env } = makeEnv();
  const res = await worker.fetch(new Request(`${BASE}/api/contact`), env);
  assert.equal(res.status, 405);
});

test('rate limit kicks in after 5 messages from one IP', async () => {
  const { env, sent } = makeEnv();
  const ip = '198.51.100.7';
  let last = 0;
  for (let i = 0; i < 7; i++) {
    const res = await worker.fetch(post(valid, { 'cf-connecting-ip': ip }), env);
    last = res.status;
  }
  assert.equal(last, 429);
  assert.ok(sent.length <= 5, `sent ${sent.length}`);
});

test('missing binding returns 501 so the browser falls back to mailto', async () => {
  const { env } = makeEnv({ EMAIL: undefined });
  const res = await worker.fetch(post(valid), env);
  assert.equal(res.status, 501);
  assert.equal((await res.json()).error, 'email_not_configured');
});

test('send failure returns 502 and does not leak the message', async () => {
  const { env } = makeEnv({
    EMAIL: {
      async send() {
        const err = new Error('boom');
        err.code = 'E_DELIVERY_FAILED';
        throw err;
      },
    },
  });
  const res = await worker.fetch(post(valid), env);
  assert.equal(res.status, 502);
  const body = await res.text();
  assert.ok(!body.includes('sticks at 180'), 'error body leaked the message');
});

test('non-API paths are served from static assets', async () => {
  const { env } = makeEnv();
  const res = await worker.fetch(new Request(`${BASE}/onlinecompass/`), env);
  assert.equal(await res.text(), 'asset:/onlinecompass/');
});

test('newlines in the name cannot inject headers', async () => {
  const { env, sent } = makeEnv();
  await worker.fetch(post({ ...valid, name: 'Asha\nBcc: victim@example.com' }), env);
  assert.ok(!sent[0].subject.includes('\n'));
  assert.ok(!sent[0].to.includes('victim'));
});

test('form-encoded bodies work too (no-JS friendly)', async () => {
  const { env, sent } = makeEnv();
  const body = new URLSearchParams(valid).toString();
  const res = await worker.fetch(
    post(body, { 'content-type': 'application/x-www-form-urlencoded' }),
    env
  );
  assert.equal(res.status, 200);
  assert.equal(sent.length, 1);
});
