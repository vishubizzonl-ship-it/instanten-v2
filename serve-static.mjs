/**
 * Zero-dependency static server for the built site (dist/).
 *
 * Directory indexes, a 404.html fallback and no caching, so a rebuild shows up
 * on the next refresh. Same behaviour as the compassinstant server.
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const PORT = Number(process.env.PORT) || 4322;
const ROOT = new URL('./dist/', import.meta.url).pathname;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

async function fileFor(target) {
  try {
    const info = await stat(target);
    if (info.isFile()) return target;
    if (info.isDirectory()) {
      const index = join(target, 'index.html');
      if ((await stat(index)).isFile()) return index;
    }
  } catch {}
  return null;
}

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  let file = await fileFor(join(ROOT, normalize(url)));
  if (!file) file = await fileFor(join(ROOT, url.replace(/\/$/, '') + '.html'));

  let status = 200;
  if (!file) {
    file = await fileFor(join(ROOT, '404.html'));
    status = 404;
  }
  if (!file) {
    res.writeHead(404);
    return res.end('404');
  }
  res.writeHead(status, {
    'content-type': TYPES[extname(file)] || 'application/octet-stream',
    'cache-control': 'no-cache',
  });
  res.end(await readFile(file));
}).listen(PORT, '0.0.0.0', () => console.log('Serving ' + PORT));
