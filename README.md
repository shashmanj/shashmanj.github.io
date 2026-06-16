# shashmanj.github.io

Personal founder portfolio for **Shashi Kiran Manju** — founder of BodySense AI.
Cinematic, dark, video-led design (the "Velorah" aesthetic) built as a static site.

**Live:** https://shashmanj.github.io/
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

## Deploy / update

The site is served from the **`gh-pages`** branch (the built `dist/`), with Pages set to
**Settings → Pages → Deploy from a branch → `gh-pages` → `/ (root)`**. Source lives on `main`.

To publish changes after editing:

```bash
./deploy.sh      # rebuilds and force-pushes dist/ to the gh-pages branch
```

Pages redeploys in ~1 minute.

> A GitHub Actions workflow (`.github/workflows/deploy.yml`, kept locally but not committed)
> can replace `deploy.sh` if your GitHub token is granted the `workflow` scope.

## Editing

- **Content** lives in `src/components/` (Hero, Story, Product, Proof, Background, Footer).
- **Theme tokens** (colors, fonts) are in `src/index.css` (`:root`) and `tailwind.config.js`.
- **Hero background video** is set in `src/components/Hero.tsx` (`VIDEO_SRC`). It is
  currently hot-linked; drop an `.mp4` in `public/` and point `VIDEO_SRC` at
  `/your-clip.mp4` to self-host.
- **Certificates** are served from `public/certificates/`.

Generated with [Claude Code](https://claude.com/claude-code).
