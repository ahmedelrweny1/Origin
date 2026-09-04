# T010 Regenerate Sitemap — Ready to Upload

File: `docs/seo/T010-sitemap-clean.xml` (32 URLs, verified count).
Keep list: `docs/seo/T010-keep-urls.txt` (32 lines).

## Priority rules applied (no fake freshness)
- `/` 1.0 daily
- `/winch/السويس/` + `/areas/` + `/services/` 0.9 weekly
- Other `/winch/` 0.7 monthly
- Guides `/articles/real-*` 0.6 monthly
- Core `/about/ /contact/ /call/` 0.8 monthly
- lastmod = real publish date (today 2026-09-03 only because rewritten; after this update only on change)

## Deploy (dev, 10 min)
1. Replace `public/sitemap.xml` with `T010-sitemap-clean.xml` content
2. Rebuild + verify `https://winch-elsuez.com/sitemap.xml` shows 32 locs
3. GSC > Sitemaps > Remove old > Add new > Request re-index of `/` + 3 money pages
4. Keep `robots.txt` Sitemap line unchanged (already correct)

## Verify
`curl -s https://winch-elsuez.com/sitemap.xml | grep -c '<loc>'` = 32. GSC Discovered = 32.

## C3+C4 FIX 2026-09-03: 32 -> 36 (added محور-30-يونيو + /reviews/ /faq/ /emergency/), lastmods staggered (only 4x 2026-09-03 for new/rewritten, guides Jun-Jul, areas Aug). Update lastmod ONLY on real change.
