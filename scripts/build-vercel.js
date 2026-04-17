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
console.log('🧠  Configuring SSR Bridge...');
fs.cpSync('dist/server', path.join(outputDir, 'functions/index.func'), { recursive: true });

const handlerPath = path.join(outputDir, 'functions/index.func/index.js');
const handlerContent = `
import server from './server.js';

export default async function (req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['host'];
    const url = new URL(req.url, \`\${protocol}://\${host}\`);
    
    // Convert Node.js request to Web Request
    const request = new Request(url.href, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
      duplex: 'half'
    });

    const response = await server.fetch(request);

    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    const body = await response.arrayBuffer();
    res.send(Buffer.from(body));
    
  } catch (error) {
    console.error('SSR Entry Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
`;
fs.writeFileSync(handlerPath, handlerContent);

// 5. Write Vercel Configurations
fs.writeFileSync(path.join(outputDir, 'functions/index.func/.vc-config.json'), JSON.stringify({
  runtime: 'nodejs20.x',
  handler: 'index.js',
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
