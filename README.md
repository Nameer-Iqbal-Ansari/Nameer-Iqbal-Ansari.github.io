# Portfolio — Nameer Iqbal Ansari

Static site: `index.html` + `style.css` + `script.js`. No build step, no dependencies to install.

## Publish with GitHub Pages (free `github.io` domain, or GitHub Student Developer Pack domain)

1. Create a new GitHub repo — for a *user site* name it exactly `<your-username>.github.io` (e.g. `Nameer-Iqbal-Ansari.github.io`). For a *project site* any name works and the URL will be `<username>.github.io/<repo-name>`.
2. Push these three files (`index.html`, `style.css`, `script.js`) to the repo root:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `root`**. Save.
4. Wait ~1 minute, then visit `https://<your-username>.github.io/` (user site) or `https://<your-username>.github.io/<repo-name>/` (project site).

## Using a custom domain (e.g. via the GitHub Student Developer Pack, Namecheap/.me domain, etc.)

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `nameeransari.dev`) and save — this creates a `CNAME` file in the repo automatically.
2. At your domain registrar, add a `CNAME` record pointing to `<your-username>.github.io` (for a subdomain like `www`), or `A` records pointing to GitHub's Pages IPs (for an apex domain) — GitHub's Pages docs list the current IPs.
3. Re-check "Enforce HTTPS" once DNS propagates (can take up to 24h).

## Editing content later

All copy lives in two places:
- `index.html` — hero, about, education, contact section text.
- `script.js` — the `EXPERIENCE`, `PROJECTS`, and `REGMAP` arrays at the top of the file. Add a new project by copying an existing object in `PROJECTS` and giving it a unique `id`.

No rebuild needed — just edit and refresh.
