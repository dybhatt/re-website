# Brand assets

Generated from the finalized design handoff (`design_handoff_finalized_brand_assets/`, Aug 2026). Exact hex/type/spacing/radii per that spec; rendered here as PNG exports since there's no live consuming surface (social bio, print, email signature) yet.

## `logo/`

The 6 approved lockups plus 4 standalone icon-tile masters, all built from the same gradient + Georgia serif "re:" mark system used for the app icon:

- `re-horizontal-day.png` / `re-horizontal-sunset.png` — icon tile + wordmark, side by side
- `re-stacked.png` — tile above wordmark, centered
- `re-wordmark-only.png` — "Re:" text mark, no icon, transparent background
- `re-single-color.png` — flat-ink tile, for single-ink print / embossing / small favicons
- `re-reversed.png` — white tile + ink wordmark, for use directly on the signature gradient
- `icon-tile-*-1024.png` — standalone 1024×1024 icon-tile masters (day / sunset / flat-favicon / dark-mode) for anywhere just the mark is needed at high resolution

Regenerate or extend via the script that built these (ask Claude — it lives in the session's scratchpad, not checked into this repo).

## Blog post headers

Not exported as static files — implemented directly as a CSS template in `css/style.css` (`.blog-header` and children) and applied inline in each post's HTML. No real photography was supplied with the handoff, so the header currently renders a gradient/texture placeholder in place of the spec'd full-bleed photo. To swap in a real photo per post, replace that post's `.bh-photo-placeholder` background with:

```css
background-image: url(/path/to/photo.jpg);
background-size: cover;
background-position: center;
```

Everything else (scrim, overline, headline, radius) stays as-is.
