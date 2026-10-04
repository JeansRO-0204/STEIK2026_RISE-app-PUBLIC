# Aksang STEI-K

Static site for sharing Google Drive resources and blog posts. Built with [Astro](https://astro.build) and Tailwind CSS 4.

**Design:** team design file (shared privately, read-only)

## Getting started

Requires Node 22.12+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # outputs static files to dist/
```

## Editing content

All content is hard-coded in the repo — there is no CMS. Changes go live when merged and redeployed.

### Drive links

Edit `src/data/links.ts`. Links are grouped; each link needs a `label` and a full `href`. A malformed URL fails the build.

Make sure each Drive file/folder's sharing is set to **"Anyone with the link"** — the site is public and only links to Drive; access is controlled by Drive itself.

### Blog posts

Add a `.md` (or `.mdx`) file to `src/content/blog/`. The filename becomes the URL (`my-post.md` → `/blog/my-post`).

```md
---
title: Post title
description: One-line summary shown in listings.
pubDate: 2026-10-04
tags: [announcement]
draft: false
---

Post body in Markdown.
```

Posts with `draft: true` show up in `npm run dev` but are excluded from production builds.

## Project structure

```
src/
  consts.ts             site title, description, language, nav
  data/links.ts         Drive link groups
  content/blog/         blog posts (Markdown/MDX)
  content.config.ts     blog frontmatter schema
  layouts/BaseLayout.astro
  components/           LinkGroup, PostList
  pages/                /, /links, /blog, /blog/[slug]
```

## Deployment

Pure static output — no server needed. Recommended: **Cloudflare Pages** (free, works with private repos).

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22+
