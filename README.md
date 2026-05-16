# MLB Edge — Landing Page

Static promo landing page for **MLB Edge**, a baseball analytics workspace. Built as plain HTML/CSS/JS so it deploys cleanly to GitHub Pages (or any static host).

## Stack

- Single-page static site — no framework, no build step
- One HTML file, one CSS file, one tiny JS file
- Inline SVG logo + inline SVG favicon (data URI)
- Google Fonts (Inter + JetBrains Mono) via CDN
- No tracking, no cookies, no external API calls, no backend

## Files

```
.
├── index.html        # Page markup
├── styles.css        # All styling (dark sports/data aesthetic)
├── script.js         # Screens tab switcher + footer year + email stub
├── assets/
│   └── og.svg        # Open Graph / Twitter card image
├── .nojekyll         # Tells GitHub Pages to serve files as-is
├── robots.txt
└── README.md
```

All asset paths are **relative** (`./styles.css`, `./assets/og.svg`) so the site works under any GitHub Pages base path, e.g. `https://<user>.github.io/<repo>/`.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `mlb-edge-site`).
2. In **Settings → Pages**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
3. Save. Pages will publish at `https://<user>.github.io/<repo>/`.

The `.nojekyll` file disables Jekyll preprocessing so any future `_` prefixed files are served unchanged.

### Custom domain (optional)

Add a `CNAME` file at the repo root containing your apex/subdomain, configure DNS, and enforce HTTPS in Pages settings.

## Local preview

Any static server works. From the project folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Design decisions

- **Aesthetic:** premium purple/gold sports/data — deep purple background (`#12031f`), logo-gold accent (`#ffd000`), electric-violet secondary (`#9b2dff`).
- **Type:** Inter for UI (weights 400–800), JetBrains Mono for tabular stats. Tabular-nums for all numeric data.
- **Layout:** mobile-first, single-column under 640 px; grid scales up at 640 / 880 / 980 / 1200 breakpoints.
- **Logo:** uploaded MLB Edge logo added as optimized WebP for the header/footer and PNG favicon.
- **Motion:** restrained — `prefers-reduced-motion` respected, hover lifts only.
- **Accessibility:** semantic landmarks, visible focus, color contrast meets WCAG AA on dark surface, tabs are keyboard-navigable (←/→).

## Content guardrails

The copy is deliberately conservative:

- No claims of guaranteed profit or +EV outcomes
- No "insider" or proprietary-data implications — only public sources mentioned
- No real user counts or testimonials — social-proof row uses clearly-styled placeholder badges
- No team logos, no MLB marks, no sportsbook names
- No paid-plan or paywall claims — the access section presents MLB Edge as free to use
- Explicit disclaimer in hero, access section, FAQ, and footer that MLB Edge is independent and unaffiliated with MLB or any sportsbook

## What to swap in as the app evolves

- Replace placeholder publisher names in the social-proof row (`DIAMOND DIGEST`, etc.) with real logos when available.
- Replace the three illustrative app mocks under **Screens** with real product screenshots when ready.
- The app launch links use the branded shortcut `https://app.themlbedge.com/`, which currently redirects to the underlying Streamlit deployment (`https://mrbets850.streamlit.app/`). Update both pointers if the app moves again.
- Update OG/Twitter `og:url` once a final domain is chosen.
```
