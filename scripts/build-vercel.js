import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Elite NovaWeb Build Process...');

// 1. Run the standard Vite build
console.log('📦 Bundling application...');
execSync('vite build', { stdio: 'inherit' });

// 2. Prepare Vercel Output directory
console.log('🛠️ Structuring Vercel Output API...');
const outputDir = path.resolve('.vercel/output');
if (fs.existsSync(outputDir)) fs.rmSync(outputDir, { recursive: true });
fs.mkdirSync(path.join(outputDir, 'static'), { recursive: true });
fs.mkdirSync(path.join(outputDir, 'functions/index.func'), { recursive: true });

// 3. Move static assets
console.log('🖼️  Moving static assets...');
fs.cpSync('dist/client', path.join(outputDir, 'static'), { recursive: true });

// 4. Create the Serverless Function
console.log('🧠  Generating Unified Standalone Bundle...');

// We run esbuild on the original server.js to bundle EVERYTHING including chunks
execSync('npx esbuild dist/server/server.js --bundle --minify --platform=node --target=node20 --format=esm --outfile=.vercel/output/functions/index.func/server.mjs', { stdio: 'inherit' });

const handlerPath = path.join(outputDir, 'functions/index.func/index.mjs');
const handlerContent = `
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import server from './server.mjs';

export default async function (req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['host'];
    const url = new URL(req.url, \`\${protocol}://\${host}\`);
    
    const requestHeaders = new Headers();
    Object.entries(req.headers).forEach(([key, value]) => {
      if (value && !['connection', 'keep-alive', 'transfer-encoding'].includes(key.toLowerCase())) {
        if (Array.isArray(value)) {
          value.forEach(v => requestHeaders.append(key, v));
        } else {
          requestHeaders.set(key, value);
        }
      }
    });
    requestHeaders.set('host', host);

    const request = new Request(url.href, {
      method: req.method,
      headers: requestHeaders,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
      duplex: 'half'
    });

    const response = await server.fetch(request);

    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    const body = await response.arrayBuffer();
    res.setHeader('x-novaweb-version', '1.0.2');
    res.send(Buffer.from(body));
    
  } catch (error) {
    console.error('CRITICAL SSR ERROR (v1.0.2):', error);
    res.status(500).json({ 
      version: '1.0.2',
      error: 'Internal Server Error',
      message: error.message,
      stack: error.stack 
    });
  }
}
`;
fs.writeFileSync(handlerPath, handlerContent);

// 5. Write Vercel Configurations
fs.writeFileSync(path.join(outputDir, 'functions/index.func/.vc-config.json'), JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'index.mjs',
  launcherType: 'Nodejs',
  shouldAddHelpers: true
}));

fs.writeFileSync(path.join(outputDir, 'config.json'), JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/' }
  ]
}));

console.log('✅ Build Complete! Your site is ready for Vercel.');
