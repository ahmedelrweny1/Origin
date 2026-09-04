# Feature Specification: SEO Comeback winch-elsuez.com to Page 1

**Feature Branch**: `003-seo-comeback-winch-elsuez`
**Status**: Approved for implementation
**Business type**: Local Service (tow truck / ونش انقاذ السويس)
**Site**: https://winch-elsuez.com/ (canonical non-www)

## Goal
Bring back rankings for core Arabic terms to first page + local pack in 90-180 days by pruning doorway bloat, fixing technical foundation, rebuilding Suez relevance, and proving E-E-A-T.

## User Stories (priority ordered)

### US1 P1 — Stop the bleed: prune doorway bloat
As Google, I see <60 indexed URLs all serving Suez intent instead of 817 thin pages targeting all Egypt, so I can lift scaled-content filter.
Accept: GSC Indexed <100, sitemap <60 URLs, typo slugs 410, no internal links to Cairo/Giza/Alex pages.

### US2 P1 — Technical foundation trustworthy
As a mobile user, I get correct title/desc, single canonical, fast page, working counters/phones, so I click and call.
Accept: title 50-60 chars, desc 150-160, www->non-www 301 verified, LCP<=2.5s INP<=200ms CLS<=0.1 field or lab, counters show real numbers, phones single primary.

### US3 P2 — Suez money pages win clicks
As a stranded driver in Suez/Sokhna/Galala, I land on a dedicated page for my area with price/time/map/call, so I call within 30 sec.
Accept: 3 money pages live (/winch/السويس/ /winch/العين-السخنة/ /winch/طريق-الجلالة/) + 17 area pages 500+ words 40%+ unique, hub-and-spoke internal links, sticky call bar.

### US4 P2 — Local trust verifiable
As Google Maps user, I find verified GBP + consistent NAP + real reviews, so I trust and call.
Accept: GBP SAB live with cities only, NAP identical everywhere, 15+ real reviews 4.8+, citations 15+, map embed, LocalBusiness schema complete with aggregateRating only from real reviews.

### US5 P3 — Authority + AI visibility
As ChatGPT/Perplexity user, I see winch-elsuez cited for ونش السويس, so I click.
Accept: 6 guides rewritten Arabic 800+ words, 1 video, 1 PR, NAP consistent on Bing/Apple/Yelp, quotable price/time snippets, AI citation check.

## Functional Requirements
- FR1: sitemap.xml contains max 60 URLs, real lastmod, correct priority (1.0 / 0.9 hubs / 0.5 areas / 0.3 guides)
- FR2: robots.txt Allow:/ Disallow:/admin + sitemap line, no blocking of CSS/JS
- FR3: each kept URL returns 200, pruned returns 410 (typos) or noindex then 410, no soft-404
- FR4: homepage H1 1x unique vs title, no footer keyword farm
- FR5: LocalBusiness/AutomotiveBusiness JSON-LD on home+location with geo 5 decimals, areaServed cities, openingHours 24/7, telephone +201063186992
- FR6: GBP Service Area Business uses cities/postals only, no state/country, hours 24/7 accurate, WhatsApp connected
- FR7: call tracking: tel: clicks + WhatsApp clicks events in analytics

## Non-Functional
- NFR1: Arabic RTL, mobile-first, tap targets >=48px, sticky bar not covering form
- NFR2: No HowTo schema ever. FAQPage kept as-is INFO only (retired May 7 2026), no new FAQPage for SERP benefit
- NFR3: Location pages: WARNING 30+, HARD STOP 50+. Final kept <=28 location-like pages
- NFR4: Unique content: primary location 600+ words 60%+ unique, service-area 500+ 40%+, service 800+ 100%

## Edge Cases
- EC1: old /winch/القاهرة/ backlinks -> 410 not 301 to Suez (avoid soft doorway). Only 301 top 3 money terms if backlinks verified
- EC2: www vs non-www both indexed -> enforce single 301, set GSC preferred
- EC3: JS counters show 0 when JS fails -> server-render numbers
- EC4: WhatsApp number mismatch -> single primary everywhere

## Out of Scope
- Rebrand domain (keep hyphen, counter exact-match with content not domain change)
- Buying reviews/links
- Targeting all Egypt (explicitly excluded to recover Suez)
