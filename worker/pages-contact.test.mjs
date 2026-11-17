/**
 * Pages Function `functions/api/contact.js` ka test — `node --test worker/`
 *
 * Function ka kaam sirf itna hai: browser ka POST `/api/contact` utha kar
 * chhote API Worker tak pahunchana, taaki email `send_email` binding se jaye
 * (Pages Functions me wo binding nahi hoti). Yahan `fetch` ko stub karke
 * dikhaya jaata hai ki URL, body, IP aur secret theek ja rahe hain.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost, onRequestGet, onRequestOptions } from '../functions/api/contact.js';

function capture(response = new Response('{"ok":true}', { status: 200, headers: { 'content-type': 'application/json' } })) {
  const calls = [];
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init });
    return response;
  };
  return calls;
}

const request = (headers = {}) =>
  new Request('https://instanten.com/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'cf-connecting-ip': '203.0.113.9', ...headers },
    body: JSON.stringify({ name: 'A', email: 'a@b.co', message: 'hi' }),
  });

test('API_ORIGIN par POST proxy hota hai', async () => {
  const calls = capture();
  const res = await onRequestPost({ request: request(), env: { API_ORIGIN: 'https://instanten-api.example.workers.dev' } });
  assert.equal(res.status, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://instanten-api.example.workers.dev/api/contact');
  assert.equal(calls[0].init.method, 'POST');
  assert.match(calls[0].init.body, /"name":"A"/);
});

test('IP aage jaata hai taaki rate limit sahi lage', async () => {
  const calls = capture();
  await onRequestPost({ request: request(), env: { API_ORIGIN: 'https://api.example.dev' } });
  assert.equal(calls[0].init.headers.get('cf-connecting-ip'), '203.0.113.9');
});

test('PROXY_SECRET set ho to header bhi jaata hai', async () => {
  const calls = capture();
  await onRequestPost({ request: request(), env: { API_ORIGIN: 'https://api.example.dev', PROXY_SECRET: 's3cr3t' } });
  assert.equal(calls[0].init.headers.get('x-instanten-proxy'), 's3cr3t');
});

test('upstream ka status aur body wapas milte hain', async () => {
  capture(new Response('{"ok":false,"error":"rate_limited"}', { status: 429, headers: { 'content-type': 'application/json' } }));
  const res = await onRequestPost({ request: request(), env: { API_ORIGIN: 'https://api.example.dev' } });
  assert.equal(res.status, 429);
  assert.match(await res.text(), /rate_limited/);
});

test('API_ORIGIN missing ho to 503 (deploy bhoolne par saaf error)', async () => {
  const res = await onRequestPost({ request: request(), env: {} });
  assert.equal(res.status, 503);
  assert.equal((await res.json()).error, 'api_origin_missing');
});

test('network fail ho to 502', async () => {
  globalThis.fetch = async () => { throw new Error('boom'); };
  const res = await onRequestPost({ request: request(), env: { API_ORIGIN: 'https://api.example.dev' } });
  assert.equal(res.status, 502);
});

test('GET par 405, OPTIONS par 204', async () => {
  assert.equal((await onRequestGet()).status, 405);
  assert.equal((await onRequestOptions()).status, 204);
});
