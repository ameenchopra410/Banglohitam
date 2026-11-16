# Banglo Hitam website

Static site (HTML/CSS/JS, no database, no server code, no forms).

## Before you upload
1. Find & replace `https://YOUR-SITE-URL` with your real site address (no trailing slash) in: index.html, terms.html, privacy.html, cookies.html, 404.html, robots.txt, sitemap.xml. Needed for WhatsApp/Instagram previews and Google.
2. Upload ALL files and the `images` folder to your GitHub repo root.

## Host free
- GitHub Pages: repo > Settings > Pages > Deploy from branch (main, /root). Turn on "Enforce HTTPS".
- Better security: Cloudflare Pages or Netlify (connect the GitHub repo). They read the `_headers` file and send full security headers. GitHub Pages ignores `_headers`.

## After going live
- Test previews: https://developers.facebook.com/tools/debug/ (WhatsApp/Facebook), then share a link to clear caches.
- Submit sitemap.xml in Google Search Console.
- Turn on 2-factor login for GitHub and your domain registrar.
