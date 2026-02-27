import { defineConfig } from "astro/config";

// Basic Astro config for a GitHub Pages–hosted blog.
// You will later set `site` to your actual GitHub Pages URL.

export default defineConfig({
  site: "https://skorulis.github.io",
  // If you use a project repo (e.g. ai.skorulis.com),
  // update base to `'/ai.skorulis.com'`.
  // base: "/ai.skorulis.com",
});

