# Redirect Proof — T004 — 2026-09-03

Verified via curl.exe -I:

## https://www.winch-elsuez.com/
- HTTP/1.1 301 Moved Permanently
- Location: https://winch-elsuez.com/
- Server: LiteSpeed
- Strict-Transport-Security: max-age=31536000; includeSubDomains
- Result: PASS — www -> non-www 301 correct, matches canonical https://winch-elsuez.com/

## https://winch-elsuez.com/
- HTTP/1.1 200 OK
- Content-Length: 172548
- HSTS present, X-Content-Type-Options nosniff, X-Frame-Options SAMEORIGIN
- Result: PASS — single canonical live

## Action
No fix needed. Keep as-is. Set GSC preferred domain to non-www. Do NOT create www sitemap or www internal links (current HTML has 0 www — good).

## Grill answers
- Assumed? No — live headers pasted above.
- Breaks if reverted? Duplicate index www vs non-www, split equity.
- Diff? None required.
