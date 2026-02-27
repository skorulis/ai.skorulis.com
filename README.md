# Learning AI – Blog

Static blog about my journey learning AI, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Then visit `http://localhost:4321` in your browser.

## Writing posts

- Add a new Markdown file under `src/content/posts/`.
- Use frontmatter like:

```yaml
---
title: "My post title"
description: "Optional short summary."
pubDate: 2026-03-01
tags:
  - weekly-notes
  - experiments
draft: false
---
```

- Write your content in Markdown below the frontmatter.
- Commit and push to the `main` branch; GitHub Actions will build and deploy.

## GitHub Pages setup

1. Create a repo on GitHub (for example `ai.skorulis.com`) and push this project there.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Merge/push to `main` to trigger the `Deploy Astro site to GitHub Pages` workflow.
4. Your site will be available at your GitHub Pages URL, e.g. `https://<your-username>.github.io/ai.skorulis.com/`.

To use a root user site (e.g. `username.github.io`), you can instead create a repo named `username.github.io` and optionally update `astro.config.mjs` with:

```js
export default defineConfig({
  site: "https://username.github.io",
});
```

## Suggested workflow

- Keep a running list of post ideas (questions, concepts, experiments).
- Each week, pick a small number of ideas and:
  - run experiments or write code locally,
  - capture your notes in a new Markdown post,
  - push to `main` so the site stays fresh.
- When you make a bigger structural change (new section, new navigation), update this `README` with any new conventions you want to keep.

