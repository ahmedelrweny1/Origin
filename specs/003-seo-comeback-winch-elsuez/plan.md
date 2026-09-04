# Implementation Plan: SEO Comeback winch-elsuez.com

## Architecture & Stack
- **Stack**: External site is React CRA (div#root + /static/js/main.*.js) with prerender snapshot. No change of framework. Fix prerender/SSG, split bundle, WebP + lazy-load.
- **Canonical host**: `https://winch-elsuez.com/` non-www. Enforce `www -> non-www` 301 + HSTS + trailing slash consistent.
- **File/structure changes on target site**:
  - Prune `sitemap.xml` 817 -> <60 URLs
  - Keep: `/`, `/about/`, `/services/` (+6 service sections), `/areas/` hub, `/contact/`, `/call/`, `/reviews/`, `/faq/`, `/emergency/`, 3 money `/winch/` + 17 area `/winch/`, 6 guides `/articles/`
  - Delete/noindex: all Cairo/Giza/Alex/Delta/Upper-Egypt location pages, all `/articles/winch-*` + `/articles/car-rescue-*` spam, typo slugs
  - Add: `portal` sticky call bar, map iframe lazy, reviews widget, GBP link
- **Data model (SEO)**:
  - `Location { slug-ar, city, landmarks[], arrival_min, price_egp, testimonial, geo }`
  - `Service { slug, title-ar, price_from, equipment }`
  - `Review { author, area, date, rating, source: google }`
  - `Guide { slug, title-ar, words>=800, author-bio }`

## Phases
### Phase 1 Structure Reorg (US1)
- Export all 817 sitemap URLs to `docs/seo/url-inventory.csv`, mark keep/noindex/410
- Deploy noindex + remove internal links to pruned, regenerate sitemap with real lastmod/priority, GSC remove + resubmit

### Phase 2 Portal Foundation (US2)
- Rewrite `<title>` 55 chars + meta desc 155 chars, OG image flatbed 1200x630, fix H2 hierarchy, fix counters SSR, lock NAP phones, verify 301, INP/LCP/CLS lab pass

### Phase 3 UI & Data Integration (US3-US4)
- Build 3 money pages + 17 area pages from `Location` data, hub-and-spoke links, price/time tables per حي, map + schema per page, GBP SAB + citations + review push

### Phase 4 Authority (US5)
- Rewrite 6 guides Arabic unique, 1 video + transcript, 1 PR, AI citation check on ChatGPT/Perplexity + Bing/Apple/Yelp NAP

## Verification per task (grill rule)
Each task in tasks.md has Independent Test: command or URL + expected output + GSC/field proof. Implementer must paste proof, reviewer grills: fail -> redo, pass -> next. No skipping.
