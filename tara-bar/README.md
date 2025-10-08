Tara Bar — Pre‑Launch Landing Page

Overview

- Minimal static site for Tara Bar pre‑launch with hero, about, visuals, trust badges, and email signup.

Local Preview

1. Using any simple HTTP server:

```bash
cd /workspace/tara-bar
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

Customization

- Update copy in `index.html` as needed.
- Replace placeholder visuals by adding images under `assets/` and applying them in `css/styles.css`.
- Wire the form to your backend by editing `submitToBackend` in `js/script.js`.

Deployment

- Host on static hosting (Vercel, Netlify, GitHub Pages, S3+CloudFront). Point root to the `tara-bar/` directory.

Assets

- Add your `assets/og.png` for social previews.
- Add logo SVGs or raster images to `assets/` and reference in HTML/CSS.

License

© Tara Bar. All rights reserved.

