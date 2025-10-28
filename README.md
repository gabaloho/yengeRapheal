# yengeRapheal — Hon. Yenge Raphael (Static Site)

A small static website for Hon. Yenge Raphael (Executive Chairman, Tarka LGA). Built with Bootstrap and a tiny custom stylesheet + script. Intended for quick local preview and lightweight deployment (GitHub Pages, static host).

## Quick overview
- Home: [index.html](index.html)
- About: [about.html](about.html)
- Achievements: [achievements.html](achievements.html)
- News: [news.html](news.html)
- Contact: [contact.html](contact.html)
- Styles: [css/style.css](css/style.css)
- Scripts: [js/script.js](js/script.js)
- This file: [README.md](README.md)

## Features
- Responsive layout via Bootstrap (CDN).
- Hero, news teasers, achievements, and contact form placeholder.
- Minor JS for smooth scrolling and basic load logging: [`smoothScroll`](js/script.js), [`DOMContentLoaded listener`](js/script.js).

## Local preview
1. Serve the folder (from repository root):
   ```bash
   python3 -m http.server 8000
   ```
2. Open in host browser:
   ```
   $BROWSER http://localhost:8000
   ```

## Notes / To do
- Replace placeholder images and map coordinates with real assets.
- Update contact form action in [contact.html](contact.html) (Formspree ID).
- Review accessibility (alt text, color contrast); styles in [css/style.css](css/style.css).
- Expand news and achievements cards in [news.html](news.html) and [achievements.html](achievements.html).

## Deployment suggestions
- Push to GitHub and enable GitHub Pages (serve from root).
- Or deploy to any static host (Netlify, Vercel, Surge).

## License
Add a license file if needed.