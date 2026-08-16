# mariiagladkova.github.io

Personal academic homepage — a single-page static site (plain HTML/CSS/JS, no build step), inspired by [Jon Barron's](https://jonbarron.info) and [Weirong Chen's](https://wrchen530.github.io) layouts.

## Structure

- `index.html` — the homepage
- `static/css/`, `static/js/`, `static/img/` — styles, scripts, images
- `projects/` — individual project pages linked from the Projects section

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the repo root to the `gh-pages` branch (no build step needed).
