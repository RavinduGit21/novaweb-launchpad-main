import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This override tells TanStack Start to generate static files
  // so that Vercel can find an index.html file.
  start: {
    prerender: {
      routes: ["/"]
    }
  }
});
