# T011 410 Gone + GSC Removals — Ready to Apply

File: `docs/seo/T011-410-urls.txt` (16 typo/junk URLs).

## LiteSpeed/.htaccess 410 rules (dev adds, 10 min)
For each typo slug return 410, not 404/301 (prevents soft-doorway):
```
Redirect 410 /articles/omplete-guide-car-recovery/
Redirect 410 /articles/est-fastest-car-rescue-services/
Redirect 410 /articles/verything-about-best-car-rescue-services/
Redirect 410 /articles/best-fastest-car-recove/
Redirect 410 /articles/-24-/
Redirect 410 /articles/tawing-service-third-settlement/
Redirect 410 /articles/tahgom-alkhames-towing-service/
Redirect 410 /articles/winch-rescue-reh/
Redirect 410 /articles/car-rescue-winch-egypt-/
# + uppercase/space variants:
Redirect 410 /articles/winch-cars-suez-Industrial%20Zone/
Redirect 410 /articles/winch-cars-suez-Adabeya/
# + 5 more in T011-410-urls.txt — add all 16
```
React fallback: unknown article slug -> `<meta name="robots" content="noindex">` + HTTP 410 via server, render custom 410 page with link to `/` + Suez hubs (not Cairo).

## GSC Removals (owner, 15 min)
1. GSC > Removals > New Request > enter each of 16 URLs > Clear URL (410 already = auto-drop in days)
2. For 769 noindex-then-410: do NOT request removals yet — let noindex + sitemap prune drop naturally 21 days, then flip to 410 + request removals in bulk.
3. Proof: GSC Removals Approved + `curl -I <typo-url>` = `410 Gone`.

## Grill
- Why 410 not 301? Typos have no backlinks/value; 301 would pass thin signals to home. Only 301 if Majestic/Ahrefs shows backlinks (check first, none assumed).
