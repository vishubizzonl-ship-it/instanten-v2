/**
 * `worker/api.mjs` (Pages ke saath chalne wala contact-API) ka test —
 * `node --test worker/`
 *
 * Yahan asli baat ye check hoti hai: Pages ka Function `origin` header hata
 * kar bhejta hai, taaki asli Worker ka same-origin guard proxy ke through bhi
 * sahi rahe — aur bina hatae (ya galat secret ke saath) request ruk jaaye.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import api from './api.mjs';

const BASE = 'https://instanten-api.example.workers.dev';
const HOST_ORIGIN = 'https://instanten.com';

function makeEnv(overrides = {}) {
  const sent = [];
  const env = {
    EMAIL: { async send(m) { sent.push(m); return { messageId: 'msg_1' }; } },
    CONTACT_TO: 'vishubizz.onl@gmail.com',
    CONTACT_FROM: 'hello@instanten.com',
    CONTACT_SITE: 'instanten.com',
    ...overrides,
  };
  return { env, sent };
}

let ip = 0;
function post(headers = {}) {
  return new Request(`${BASE}/api/contact`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'cf-connecting-ip': `198.51.100.${++ip}`,
      ...headers,
    },
    body: JSON.stringify({ name: 'Test', email: 't@example.com', topic: 'other', message: 'hello there' }),
  });
}

test('proxied POST (origin hataya hua) par mail chala jaata hai', async () => {
  const { env, sent } = makeEnv();
  const res = await api.fetch(post({ 'cf-connecting-ip': '198.51.100.201' }), env);
  assert.equal(res.status, 200);
  assert.equal(sent.length, 1);
});

test('origin header aage bhejne par asli Worker ka same-origin guard pakadta hai', async () => {
  const { env, sent } = makeEnv();
  const res = await api.fetch(post({ origin: HOST_ORIGIN, 'cf-connecting-ip': '198.51.100.202' }), env);
  assert.equal(res.status, 200); // api.mjs origin hata deta hai
  assert.equal(sent.length, 1);
});

test('non-API path 404 deta hai (ASSETS stub)', async () => {
  const { env } = makeEnv();
  const res = await api.fetch(new Request(`${BASE}/nl/onlinecompass/`), env);
  assert.equal(res.status, 404);
  assert.equal((await res.json()).error, 'not_found');
});

test('PROXY_SECRET set ho to bina header ke request 403', async () => {
  const { env } = makeEnv({ PROXY_SECRET: 's3cr3t' });
  const res = await api.fetch(post({ 'cf-connecting-ip': '198.51.100.203' }), env);
  assert.equal(res.status, 403);
});

test('PROXY_SECRET ke saath sahi header par mail jaata hai', async () => {
  const { env, sent } = makeEnv({ PROXY_SECRET: 's3cr3t' });
  const res = await api.fetch(post({ 'x-instanten-proxy': 's3cr3t', 'cf-connecting-ip': '198.51.100.204' }), env);
  assert.equal(res.status, 200);
  assert.equal(sent.length, 1);
});
