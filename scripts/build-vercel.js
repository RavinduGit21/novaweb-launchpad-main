import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting NovaWeb Build (v2.0 - CJS Mode)...');

// 1. Run the standard Vite build
console.log('📦 Bundling application...');
execSync('vite build', { stdio: 'inherit' });

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
console.log('🧠  Bundling SSR engine (CJS mode)...');
execSync(
  'npx esbuild dist/server/server.js --bundle --minify --platform=node --target=node20 --format=cjs --outfile=.vercel/output/functions/index.func/index.js',
  { stdio: 'inherit' }
);

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
    { src: '/(.*)', dest: '/' }
  ]
}));

console.log('✅ Build Complete! NovaWeb v2.0 is ready for Vercel.');
