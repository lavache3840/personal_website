# Personal website

The Rambling Somnambulist: a personal blog, about page, and interests. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Where to edit

| What | File |
| --- | --- |
| Site name, tagline, email, social links, your real name (About page only) | `src/consts.ts` |
| About page | `src/pages/about.astro` |
| Interests | `src/data/interests.ts` |
| Blog posts | `src/content/blog/*.md` (filename = URL) |
| Colors and fonts | `src/styles/global.css` |
| Images, CV, other files | `public/` (served from `/`) |
| Domain | `site` in `astro.config.mjs` and `public/CNAME` |

### New blog post

Create `src/content/blog/my-post.md`:

```md
---
title: 'My post'
description: 'One-sentence summary.'
pubDate: 2026-11-12
tags: ['notes']
draft: false
---

Post body in Markdown.
```

## Deploying (GitHub Pages)

Publishing is **manual**: pushing to `main` does not publish anything.

1. One-time setup: in the repo, **Settings → Pages → Source: GitHub Actions**.
2. To publish: **Actions → Publish site → Run workflow** (branch: `main`).
   This builds whatever is on `main` and deploys it via `.github/workflows/deploy.yml`.

### Custom domain

1. Put your domain in `public/CNAME` (one line, e.g. `example.com`) and in `site` in `astro.config.mjs`.
2. At your registrar, add DNS records:
   - Apex (`example.com`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: `CNAME` → `<your-github-username>.github.io`
3. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS** once the certificate is issued.
