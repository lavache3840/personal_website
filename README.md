# Personal website

Personal blog, about page, and research interests. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Where to edit

| What | File |
| --- | --- |
| Name, tagline, email, social links | `src/consts.ts` |
| About page | `src/pages/about.astro` |
| Research interests and publications | `src/data/research.ts` |
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
tags: ['research']
draft: false
---

Post body in Markdown.
```

## Deploying (GitHub Pages)

1. Create a GitHub repo and push this project to `main`.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

### Custom domain

1. Put your domain in `public/CNAME` (one line, e.g. `example.com`) and in `site` in `astro.config.mjs`.
2. At your registrar, add DNS records:
   - Apex (`example.com`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: `CNAME` → `<your-github-username>.github.io`
3. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS** once the certificate is issued.
