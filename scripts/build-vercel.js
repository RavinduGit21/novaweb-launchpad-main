import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting NovaWeb Build (v2.0 - CJS Mode)...');

// 1. Run the standard Vite build
console.log('📦 Bundling application...');
execSync('vite build', { stdio: 'inherit' });

// DEBUG: Check what was produced
console.log('🔍 Checking build output...');
try {
  const distExists = fs.existsSync('dist');
  console.log(`dist folder exists: ${distExists}`);
  if (distExists) {
    const serverFolder = path.join('dist', 'server');
    if (fs.existsSync(serverFolder)) {
      console.log('dist/server contents:', fs.readdirSync(serverFolder));
    } else {
      console.log('dist/server does NOT exist');
    }
  }
} catch (e) {
  console.error('Debug listing failed:', e);
}

// 2. Prepare Vercel Output directory
console.log('🛠️  Structuring Vercel Output API...');
const outputDir = path.resolve('.vercel/output');
if (fs.existsSync(outputDir)) fs.rmSync(outputDir, { recursive: true });
fs.mkdirSync(path.join(outputDir, 'static'), { recursive: true });
fs.mkdirSync(path.join(outputDir, 'functions/index.func'), { recursive: true });

// 3. Move static assets to be served as-is
console.log('🖼️   Moving static assets...');
fs.cpSync('dist/client', path.join(outputDir, 'static'), { recursive: true });

// 4. Bundle the server as CJS (CommonJS) - this is the KEY fix.
// CJS natively handles require() calls from Node built-ins like 'util', 'path', etc.
// 4. Bundle the server with a Vercel-compatible wrapper
console.log('🧠  Bundling SSR engine (CJS mode)...');
const wrapperPath = path.join(outputDir, 'functions/index.func/wrapper.js');
const serverEntry = fs.existsSync(path.resolve('dist/server/index.js')) 
  ? 'dist/server/index.js' 
  : 'dist/server/server.js';
fs.writeFileSync(wrapperPath, `
import server from '${path.resolve(serverEntry).replace(/\\\\/g, '/')}';
import { Readable } from 'node:stream';

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['host'];
    const url = new URL(req.url, \`\${protocol}://\${host}\`);
    
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: (req.method === 'GET' || req.method === 'HEAD') ? null : Readable.toWeb(req),
      duplex: 'half'
    });

    const response = await server.fetch(request);
    
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'set-cookie') {
        res.appendHeader(key, value);
      } else {
        res.setHeader(key, value);
      }
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error('Vercel Handler Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
`);

execSync(
  'npx esbuild ' + wrapperPath + ' --bundle --minify --platform=node --target=node20 --format=cjs --outfile=.vercel/output/functions/index.func/index.js',
  { stdio: 'inherit' }
);
fs.rmSync(wrapperPath);

// 5. Write Vercel Function Configuration
// Using .js with CJS format - no .mjs needed
fs.writeFileSync(path.join(outputDir, 'functions/index.func/.vc-config.json'), JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'index.js',
  launcherType: 'Nodejs',
  shouldAddHelpers: true
}));

// 6. Write the Vercel routing config
fs.writeFileSync(path.join(outputDir, 'config.json'), JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/_serverFn/(.*)', dest: '/index' },
    { src: '/(.*)', dest: '/index' }
  ]
}));

console.log('✅ Build Complete! NovaWeb v2.0 is ready for Vercel.');
