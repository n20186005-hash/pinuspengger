import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Production domain. Hardcoded so canonical tags, Open Graph absolute URLs and the
// XML sitemap are always generated. Override at build time with SITE_URL if needed.
const site = process.env.SITE_URL || "https://pinuspengger.com";

export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
