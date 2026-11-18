# Abhishek P Suresh — Portfolio

A single-page, dark editorial portfolio (plain HTML, CSS and JavaScript, no build step).

- `index.html` — the whole site
- `vercel.json` — Vercel settings and security headers
- `.github/workflows/ci-cd.yml` — lint, link check, and optional Vercel deploy
- `scripts/check-links.js` — fails the build if an in-page `#link` is broken

## 1. Push to GitHub

Create an empty `portfolio` repository on GitHub first (no README, no .gitignore), then:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/abhishekpsuresh/portfolio.git
git push -u origin main
```

## 2. Host on Vercel (simplest CI/CD)

1. Sign in at vercel.com with your GitHub account.
2. **Add New → Project**, then import the `portfolio` repository.
3. Framework preset: **Other**. Leave build and output settings empty. Click **Deploy**.

After this, every push to `main` deploys to production and every pull request gets a preview URL. The GitHub Actions workflow runs the lint and link checks on every push and pull request.

## Alternative: deploy from GitHub Actions

Use this only if you are not using Vercel's own GitHub integration, otherwise you get two deployments.

1. Run `npx vercel link` once locally and note `orgId` and `projectId` in `.vercel/project.json`.
2. Create a token at vercel.com/account/tokens.
3. In GitHub go to **Settings → Secrets and variables → Actions** and add `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`.

## Resume download button

The button appears only when a file named `resume.pdf` exists next to `index.html`. Add a version without your phone number, because a public repository and site expose anything you put in them.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
