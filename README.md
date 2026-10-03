# 🛍️ SupraBazar — UX Prototype

Responsive UX/UI prototype for Supra Bazar's webshop, built with Astro + Bootstrap 5.


---


## 1.0 📂 Project Structure

```
.
├── project-inputs/              ← Source material (screenshots, notes, briefs)
├── project-outputs/
│   ├── prototype-astro/         ← Main deliverable: Astro + Bootstrap prototype
│   ├── 01-category-filters/     ← Static HTML prototype + audit
│   └── 02-account-pages/        ← Static HTML prototype + audit
├── PROJECT-STATUS.md            ← Living project journal (decisions, progress)
└── CLAUDE.md                    ← Working instructions for Claude Code
```


---


## 2.0 🚀 Running the Prototype

The main deliverable is in `project-outputs/prototype-astro/`.

```bash
cd project-outputs/prototype-astro
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/suprabazar/ux/` (see `astro.config.mjs` for the base path).


---


## 3.0 🧩 Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Component-based static site generator |
| Bootstrap 5.3 | Grid system & utility classes |
| Bootstrap Icons | Iconography |

Pages (`src/pages/`) compose shared components (`src/components/`) — header, nav, footer — inside `BaseLayout.astro`, which holds the global design-token CSS (`--g-*` greyscale custom properties).


---


## 4.0 📋 Project Memory

`PROJECT-STATUS.md` tracks completed work, key decisions, and next steps. Check it before starting new work.


---


## 5.0 🤝 Working with Claude Code

This repo is set up for [Claude Code](https://claude.com/claude-code):

- `CLAUDE.md` — project instructions loaded every session
- `project-inputs/` — drop new briefs, screenshots, or docs here
- `.claude/settings.local.json` (gitignored) — your personal API key, never committed
