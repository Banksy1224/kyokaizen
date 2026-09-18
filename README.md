# Kyokaizen, LLC

Public marketing site for **Kyokaizen, LLC**, a Florida company that develops and sells AI software tools for businesses and institutions.

## Live site

**https://banksy1224.github.io/kyokaizen/**

GitHub Pages serves the built files in `docs/` from the `main` branch.

## Local development

```bash
npm install
npm run dev
```

The Vite app uses `base: "/kyokaizen/"`, matching the GitHub Pages project URL.

## Update and publish

1. Edit the source in `src/` (and `index.html` for document meta).
2. Rebuild the static files:

   ```bash
   npm run build
   ```

   This writes to `docs/`.
3. Commit the source **and** the updated `docs/` output, then push to `main`.
4. GitHub Pages usually refreshes within a minute or two.

A workflow in `.github/workflows/pages.yml` can also build and deploy on every push to `main` if the repo’s Pages source is set to **GitHub Actions**.

## GitHub Pages setup

If the live URL is not serving yet:

1. Open **Settings → Pages**.
2. Prefer **Deploy from a branch**:
   - Branch: `main`
   - Folder: `/docs`
3. Or set the source to **GitHub Actions** and rely on `.github/workflows/pages.yml`.

The site is a project page, so the homepage must stay at `/kyokaizen/` (already set in `vite.config.js`).

## Contact

[robertkeiser50@gmail.com](mailto:robertkeiser50@gmail.com)
