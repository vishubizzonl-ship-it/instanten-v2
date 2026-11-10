import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const PORT = Number(process.env.PORT || 4321);
const ROOT = new URL('./dist/', import.meta.url).pathname;
const TYPES = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.woff2':'font/woff2'};

async function tryFile(p){try{const s=await stat(p);if(s.isFile())return p;if(s.isDirectory()){const i=join(p,'index.html');const s2=await stat(i);if(s2.isFile())return i;}}catch{}return null;}

createServer(async (req,res)=>{
  let url=(req.url||'/').split('?')[0];
  let file=await tryFile(join(ROOT, normalize(url)));
  if(!file) file=await tryFile(join(ROOT, url.replace(/\/$/,'')+'.html'));
  if(!file) file=await tryFile(join(ROOT,'404.html'));
  if(!file){res.writeHead(404);res.end('Not found');return;}
  const body=await readFile(file);
  res.writeHead(200,{'content-type':TYPES[extname(file)]||'application/octet-stream','cache-control':'no-cache'});
  res.end(body);
}).listen(PORT,'0.0.0.0',()=>console.log('Serving on 0.0.0.0:'+PORT));
