/** Shared page-route lists + helpers for the functional suite. */
export const TOOL_ROUTES = {
  'json-formatter': '/tools/json-formatter/',
  'base64-encoder': '/tools/base64-encoder/',
  'word-counter': '/tools/word-counter/',
  'regex-tester': '/tools/regex-tester/',
  'password-generator': '/tools/password-generator/',
  'markdown-editor': '/tools/markdown-editor/',
  'meta-tag-generator': '/tools/meta-tag-generator/',
  'css-grid-generator': '/tools/css-grid-generator/',
  'color-palette': '/tools/color-palette/',
  'image-compressor': '/tools/image-compressor/',
  'qr-generator': '/tools/qr-generator/',
  'online-ruler': '/tools/online-ruler/',
};

export const INSTRUMENTS = {
  onlinecompass: '/onlinecompass/',
  onlinebubblelevel: '/onlinebubblelevel/',
  onlinespeedometer: '/onlinespeedometer/',
  onlineqibla: '/onlineqibla/',
};

export const txt = (el) => (el?.textContent || '').replace(/\s+/g, ' ').trim();
