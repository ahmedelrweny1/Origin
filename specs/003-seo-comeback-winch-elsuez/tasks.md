# Tasks: SEO Comeback winch-elsuez.com to Page 1

**Input**: Design documents from `/specs/003-seo-comeback-winch-elsuez/`
**Prerequisites**: plan.md (required), spec.md (required), constitution.md
**Tests**: Manual verification proofs required after EVERY task (GSC, curl, view-source, PageSpeed). No code unit tests — verification = grill gate.
**Organization**: Grouped by user story for independent delivery. MVP = US1+US2.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1-US5 maps to spec.md
- Include exact file paths

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inventory + tracking so nothing is assumed

- [x] T001 Export full sitemap URL inventory to docs/seo/url-inventory.csv
- [x] T002 [P] Capture baseline proofs to docs/seo/baseline.md
- [x] T003 [P] Setup rank + call tracking sheet in docs/seo/kpi-tracker.csv

**Checkpoint**: Inventory + baseline done — no prune without this. Grill: show csv with 817 rows + baseline screenshots.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Single canonical + measurable analytics MUST complete before any content work

- [x] T004 Verify and enforce www->non-www 301 + HSTS in docs/seo/redirect-proof.md
- [ ] T005 Configure GSC + GA4 + call/WhatsApp click events in docs/seo/analytics-setup.md
- [ ] T006 [P] Fix homepage title/desc/OG/H1-H2 in target site index.html
- [ ] T007 [P] Fix NAP/phones/counters/geo inconsistencies in target site footer + FAQ files

**Checkpoint**: Foundation ready — grill: curl -I www proof + GSC property + view-source title/desc.

---

## Phase 3: User Story 1 - Stop the bleed: prune doorway bloat (Priority: P1) 🎯 MVP

**Goal**: 817 -> <60 indexed URLs serving Suez intent only
**Independent Test**: GSC Indexed <100 within 21 days, sitemap <60 URLs, site: query shows no Cairo pages, typo slugs return 410.

- [x] T008 [US1] Mark keep/noindex/410 for all 817 URLs in docs/seo/url-inventory.csv
- [ ] T009 [US1] Deploy server noindex headers + delete pruned routes per docs/seo/T009-server-pack.md (target: .htaccess + src/App.js routes + src/components/Header/AreasMenu.js + src/pages/Home/AreasSection.js + src/components/Footer/Footer.js)
- [ ] T010 [US1] Upload docs/seo/T010-sitemap-clean.xml (36 URLs) to target public/sitemap.xml + resubmit GSC
- [ ] T011 [US1] Add 16× Redirect 410 per docs/seo/T011-410-deploy.md to target .htaccess + file GSC Removals (proof: docs/seo/prune-verify.md)
- [ ] T012 [US1] Verify prune: GSC index + site: + 410 checks in docs/seo/prune-verify.md

**Checkpoint**: US1 done = filter lift unblocked. Grill: sitemap URL count + 5x curl 410 + GSC indexed screenshot.

---

## Phase 4: User Story 2 - Technical foundation trustworthy (Priority: P1) 🎯 MVP

**Goal**: Clickable SERP + fast + trustworthy header/footer
**Independent Test**: Title 50-60 chars, desc 150-160, OG image flatbed 1200x630, LCP<=2.5 INP<=200 CLS<=0.1 lab, counters SSR numbers, single primary phone.

- [ ] T013 [P] [US2] Optimize target build/static/js/main.*.js (code-split) + public/images/*.webp + public/index.html fonts per docs/seo/T013-perf-pack.md
- [ ] T014 [P] [US2] Paste docs/seo/T014-schema-pack.md JSON-LD into target public/index.html <head> (no postal/sameAs until verified)
- [ ] T015 [US2] Implement docs/seo/T015-mobile-pack.md sticky bar + calculator in target src/components/CallBar.js + src/pages/Home/Calculator.js + src/components/LeadForm.js
- [ ] T016 [US2] PageSpeed + view-source verification in docs/seo/cwv-proof.md

**Checkpoint**: US2 done = MVP shippable. Grill: PageSpeed screenshots + view-source schema validator pass.

---

## Phase 5: User Story 3 - Suez money pages win clicks (Priority: P2)

**Goal**: 3 money + 17 area pages with price/time/map/call, hub-and-spoke
**Independent Test**: Each page 500+ words 40%+ unique (primary 600+ 60%+), 1x H1 unique, price/time table per حي, map embed, internal links verified via crawler, sticky bar present.

- [ ] T017 [P] [US3] Publish docs/seo/content/money-suez.md (expand to 1000+ w) to target src/pages/Winch/Suez.js at /winch/السويس/
- [ ] T018 [P] [US3] Publish docs/seo/content/money-sokhna.md (expand to 1000+ w) to target src/pages/Winch/Sokhna.js at /winch/العين-السخنة/
- [ ] T019 [P] [US3] Publish docs/seo/content/money-galala.md (expand to 1000+ w) to target src/pages/Winch/Galala.js at /winch/طريق-الجلالة/
- [ ] T020 [US3] Build 9x Suez district area pages (الأربعين/فيصل/عتاقة/الجناين/بور-توفيق/الأدبية/الملاحة/جنيفة/المثلث) on target site /winch/
- [ ] T021 [US3] Build 8x corridor area pages (بورتو-السخنة/الزعفرانة/رأس-غارب/طريق-السويس/نفق-الشهيد-احمد-حمدى/محور-30-يونيو/ميناء-السخنة/وادي-حجول) on target site /winch/
- [ ] T022 [US3] Edit target src/pages/Home.js + src/pages/Areas.js + src/components/Footer/Footer.js: keep 5 Suez hubs only per docs/seo/T017-T023-content-pack.md
- [ ] T023 [US3] Verify uniqueness + internal links + call bar in docs/seo/content-verify.md

**Checkpoint**: US3 done = Suez relevance restored. Grill: Copyscape/unique % + link crawl + 3x mobile call test.

---

## Phase 6: User Story 4 - Local trust verifiable (Priority: P2)

**Goal**: GBP + NAP + real reviews + citations
**Independent Test**: GBP SAB live cities-only, NAP identical 5 places, 15+ Google reviews 4.8+, map embed live, aggregateRating only from real reviews.

- [ ] T024 [US4] Claim + verify GBP SAB + hours 24/7 + WhatsApp + photos in docs/seo/gbp-proof.md
- [ ] T025 [P] [US4] Build /reviews/ + /contact/ with NAP + map + review widget on target site
- [ ] T026 [P] [US4] Build 15 Arabic citations with identical NAP in docs/seo/citations.csv
- [ ] T027 [US4] Launch review push + responses + add aggregateRating schema in target site index.html
- [ ] T028 [US4] Verify GBP insights + NAP + reviews in docs/seo/trust-verify.md

**Checkpoint**: US4 done = local pack eligible. Grill: GBP link + 5x citation URLs + review screenshots.

---

## Phase 7: User Story 5 - Authority + AI visibility (Priority: P3)

**Goal**: 6 guides + video + PR cited by AI
**Independent Test**: 6 guides Arabic 800+ words with author bio, 1 video + transcript, 1 PR live, Bing/Apple/Yelp NAP live, ChatGPT/Perplexity mention check.

- [ ] T029 [P] [US5] Rewrite 6 guides Arabic unique with author bios on target site /articles/
- [ ] T030 [P] [US5] Publish fleet video + transcript + service schema on target site /about/
- [ ] T031 [US5] Earn 1 Suez PR + 3 garage/dealer/hotel links in docs/seo/links.csv
- [ ] T032 [US5] Sync Bing Places + Apple Maps + Yelp NAP + AI citation check in docs/seo/geo-verify.md

**Checkpoint**: All stories functional. Grill: word counts + video URL + PR URL + AI screenshots.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Harden + monitor, no new location pages

- [ ] T033 Remove footer keyword farm + bottom keyword paragraph in target site footer component
- [ ] T034 [P] Final sitemap + robots + hreflang + 404/410 audit in docs/seo/final-audit.md
- [ ] T035 Setup monthly drift baseline + monitoring in docs/seo/drift-baseline.json

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: No dependencies - start immediately
- **Foundational (Phase 2)**: Depends on Setup - BLOCKS all stories
- **User Stories (Phase 3-7)**: Depend on Foundational. US1 before US3 (prune before new pages). US2 before US3 (CWV before content). US3 before US4 (pages before reviews link to them). US5 last.
  - Sequential for 1 person: US1 -> US2 -> US3 -> US4 -> US5
  - Parallel if staffed: US1+US2 together after Foundation, then US3, then US4+US5
- **Polish (Phase 8)**: Depends on all desired stories

### Within Each Story
- Inventory before deploy, deploy before verify, verify proof pasted before next task
- Grill rule: after EACH task, implementer pastes proof (curl/GSC/screenshot/URL), reviewer asks 2-3 hard questions, fail = redo same ID, pass = next ID

### Parallel Opportunities
- T002 + T003 parallel (different files)
- T006 + T007 parallel (head vs footer)
- T013 + T014 parallel (perf vs schema)
- T017 + T018 + T019 parallel (3 money pages, different files)
- T025 + T026 parallel (site vs citations)
- T029 + T030 parallel (guides vs video)

---

## Parallel Example: User Story 3

```bash
# 3 money pages in parallel (different slugs, no shared file):
Task: "Build /winch/السويس/ money page on target site"
Task: "Build /winch/العين-السخنة/ money page on target site"
Task: "Build /winch/طريق-الجلالة/ money page on target site"
```

---

## Implementation Strategy

### MVP First (US1 + US2 Only)
1. Complete Phase 1 Setup (T001-T003)
2. Complete Phase 2 Foundational (T004-T007)
3. Complete US1 Prune (T008-T012)
4. Complete US2 Technical (T013-T016)
5. **STOP and VALIDATE**: GSC indexed dropping + CWV pass + calls tracked. This alone can start recovery.

### Incremental Delivery
1. Setup+Foundational -> measurable
2. +US1 -> filter lift unblocked -> demo GSC
3. +US2 -> CTR up -> demo PageSpeed
4. +US3 -> Suez relevance -> demo rankings top 20
5. +US4 -> pack eligible -> demo GBP
6. +US5 -> authority -> demo AI citations

### Grill After Each Task (mandatory)
For T001-T035: implementer outputs file/URL + proof. Reviewer verifies live (curl/view-source/GSC) and grills: What did you assume? Show diff? What breaks if reverted? No proof = not done.

---

## Notes
- [P] = different files, no dependencies
- [USx] maps to spec.md stories
- Each story independently testable
- No vague tasks — all have exact paths
- No HowTo schema, no new FAQPage for SERP, INP not FID, location HARD STOP 50
