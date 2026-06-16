# shashmanj.github.io

Personal founder portfolio for **Shashi Kiran Manju** — founder of BodySense AI.
Cinematic, dark, video-led design (the "Velorah" aesthetic) built as a static site.

**Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

## Run locally

```bash
npm install      # first time only
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks + bundles into ./dist
npm run preview  # serve the production build locally
```

## Deploy to GitHub Pages (https://shashmanj.github.io)

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site and publishes it to Pages on every push to `main`.

1. Create a **public** repo named exactly **`shashmanj.github.io`** on GitHub.
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/shashmanj/shashmanj.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow runs automatically; the site goes live at **https://shashmanj.github.io**
   in ~1 minute. Re-deploys happen on every push to `main`.

## Editing

- **Content** lives in `src/components/` (Hero, Story, Product, Proof, Background, Footer).
- **Theme tokens** (colors, fonts) are in `src/index.css` (`:root`) and `tailwind.config.js`.
- **Hero background video** is set in `src/components/Hero.tsx` (`VIDEO_SRC`). It is
  currently hot-linked; drop an `.mp4` in `public/` and point `VIDEO_SRC` at
  `/your-clip.mp4` to self-host.
- **Certificates** are served from `public/certificates/`.

Generated with [Claude Code](https://claude.com/claude-code).
