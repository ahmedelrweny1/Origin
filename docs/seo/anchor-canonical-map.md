# Anchor + Canonical Map (H5 fix) — prevents NEW cannibalization

## One intent = one URL (Arabic anchor only)
- `ونش انقاذ السويس` -> / ONLY (homepage + /winch/السويس/ uses `ونش السويس للأحياء` as H1 variant, canonical self, homepage canonical self — they target parent vs child: homepage = brand+hub, /winch/السويس/ = district table. Cross-link with exact anchors, no other page may use `ونش انقاذ السويس` in H1/title.
- `ونش انقاذ العين السخنة` -> /winch/العين-السخنة/ ONLY. Others link with this exact anchor, never repeat as H1.
- `ونش انقاذ طريق الجلالة` -> /winch/طريق-الجلالة/ ONLY.
- `ونش انقاذ الزعفرانة` -> /winch/الزعفرانة/ ONLY. `رأس غارب` -> /winch/رأس-غارب/ ONLY.
- `رقم ونش السويس` -> homepage tel block (no separate URL to avoid split).
- Districts use `ونش انقاذ [الحي]` H1 ONLY on their page (ex: الأربعين). Never on homepage body (homepage lists الحي as link text, not H2 with full keyword).

## Similarity rule (H4)
- Measured: exemplar Arbain vs money-suez = 14.2% (SequenceMatcher, PASS <60%).
- Outlines in areas-all-17 share skeleton = HIGH RISK. Before publish, each full page must test <60% vs siblings via `python -c difflib` and paste % into content-verify.md. Rewrite shared table headers with local words (not copy-paste).

## Image spec (M1 — fixes 404 risk)
- Required file BEFORE T006 deploy: `public/images/flatbed-suez-1200x630.webp` 1200x630 <150KB, alt `ونش مسطح لنقل سيارة في السويس`, original photo (not stock). OG + Twitter point here. Fallback while missing: keep logo.png BUT do not claim flatbed in tasks. Verify: `curl -I https://winch-elsuez.com/images/flatbed-suez-1200x630.webp` = 200.

## Drift/GA4/reviews notes (M2-M4)
- M2: drift-baseline.json updated: {"date":"2026-09-03-fix","sitemap_planned":36,"indexed_observed":817,"health":58} — observed vs planned split (was mixed).
- M3: analytics-setup.md G-XXXXXXX = PLACEHOLDER, task stays [ ] until owner pastes real ID + Realtime proof.
- M4: area pages with `شهادات قريبا` placeholder must carry `<meta name="robots" content="noindex">`?? NO — instead publish without testimonial section until real reviews (avoid thin placeholder index). Template updated: omit section pre-T027.
