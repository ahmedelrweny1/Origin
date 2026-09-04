# T009-SERVER — LiteSpeed Noindex/410 (stronger than Helmet CSR)

> Helmet meta alone may not be seen pre-render. Use server headers + route deletion as primary, Helmet as fallback.

## .htaccess (web root, LiteSpeed compatible)
```
# PRUNED: 769 noindex-then-410 — Phase 1 noindex, Phase 2 flip to 410 after 21d
<IfModule mod_rewrite.c>
RewriteEngine On
# Cairo/Giza/Alex winch doorways -> noindex header (keep 200 for 21d, then change to Gone)
RewriteCond %{REQUEST_URI} ^/winch/(%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9|%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9|%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9)/ [OR]
RewriteCond %{REQUEST_URI} ^/articles/(winch-cars-|winch-enqaz-|winch-rescue-|car-rescue-)
RewriteRule .* - [E=PRUNED:1]
</IfModule>
<IfModule mod_headers.c>
Header set X-Robots-Tag "noindex, nofollow" env=PRUNED
</IfModule>
# TYPO 410s — immediate (16 URLs from T011-410-urls.txt, add all)
Redirect 410 /articles/omplete-guide-car-recovery/
Redirect 410 /articles/est-fastest-car-rescue-services/
Redirect 410 /articles/verything-about-best-car-rescue-services/
Redirect 410 /articles/best-fastest-car-recove/
Redirect 410 /articles/-24-/
```
## React deletion (primary)
- Delete route files for pruned slugs (do not just hide links). Exact paths owner must confirm via `grep -r "القاهرة" src/ --include="*.js"`: files listed in T009-link-removal.md: `src/components/Header/AreasMenu.js`, `src/pages/Home/AreasSection.js`, `src/components/Footer/Footer.js`, `src/pages/Areas/AreasPage.js` (names — adjust to actual repo, verify with grep before edit).
- Verify: `curl -I pruned-URL` shows `X-Robots-Tag: noindex` pre-410, then `410 Gone` post-flip. GSC Inspection shows Excluded.

## Grill
- Why server not Helmet only? CSR meta missed by crawlers on slow JS; header always seen.
