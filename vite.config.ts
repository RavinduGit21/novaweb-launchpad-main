import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Manually adding Nitro support to ensure Vercel detection works perfectly
  vite: {
    plugins: []
  }
});
