# Origin Atlas — UX Audit (2026-10-18)

Scope: full platform (portal, lectures 1–4, quizzes/exams, revision, account, admin) — code + live browser passes
(desktop 1440, mobile 390, AR/EN). Server: local via http.server; Firebase blocked to test designed offline mode.

## A. What works well (preserve)
- Editorial identity is strong and consistent: oversized display type, blue-underline accent solids,
  red/amber/green stamps, mono labels, numbered TOC rows, 4px rules. Dark default (origin-theme=dark) reads
  like "ink night paper" — coherent, no dark-theme drift found.
- RTL-first portals render correctly; no horizontal overflow on any page at 390px.
- Lecture engine: stage chips + visited/active states + progress % all work (LECTn_STORE_KEY progress keys).
- Quiz system: picker (stage × difficulty), instant feedback, results breakdown — solid.
- Mini-exam gating design is coherent: 15Q exam always open → pass ≥7/15 → unlocks 52Q practice bank
  (`origin-unlock-<id>`); statuses show ✓ with best score after pass.
- Timed exams (exam.html/exam2.html): deadline-epoch state, resume-safe persistence, auto-submit on expiry
  (even offline), short-window warning, attempt caps keyed by name/uid, remote roster sync w/ outbox.
- i18n full AR/EN coverage incl. colloquial-but-correct Egyptian copy (earlier "garble" impressions were
  low-res screenshot artifacts; actual strings verified clean).

## B. Findings

### Blockers / high impact
1. G1 — Wall-first entry: signed-out visitor lands on login.html, NOT the homepage. gate.js redirects
   every page until Firebase auth succeeds; with Firebase unavailable entirely offline-only students see
   only the offline card. Homepage vision ("first classroom") never gets seen pre-login.
   Also: `html.gate-locked body{display:none}` can leave a blank screen while Remote.init()
   resolves on slow networks (FCP blank → flash).
2. G2 — Firebase stack double-load on exam.html / exam2.html / exams.html / admin.html: the page's own
   `<script>` tags AND gate.js's injected copy both run → "Firebase already defined" warning +
   `Identifier 'Remote' has already been declared` pageerror + duplicate ~300KB downloads.
3. G3 — exams.html name-first dead-end: name input is below the cards; no-name state shows disabled
   ابدأ + cryptic status; exam 1 (final-l1l2) window ended 15 Sep 2026 → permanently blocked card
   still occupies hero position with a start-shaped UI.
4. G4 — quiz.html mini-exam gate banner is advisory not enforced: banner says pass 7/15 first, but
   start button stays active for every difficulty. (Design intent in exams list says exam unlocks
   practice — reverse relationship. Confirm intent: enforce or reword banner.)

### Medium
5. M1 — No "continue where you left off" anywhere: homepage ignores origin-lect*-progress keys;
   journeys rows show no completion state. Portal card says "save your progress" but portal never shows it.
6. M2 — revision.html is L1+L2 only ("المحاضرتين الأولى والتانية في مكان واحد"); 8 keyword categories
   don't cover L3 (security) / L4 (digital representation); with 5 journeys live it reads stale.
7. M3 — quizzes.js hardcodes "٥٢ سؤال / 52 questions" in the practice-card description; real banks:
   L1=52, L2=52, L3=56, L4=48. Also exam description hardcodes "١٥" (verified correct =15 today, fragile).
8. M4 — tocCount "04 entries / ٤ رحلات" outdated (5 journeys + abacus). Same for any "both lectures"
   copy on quizzes.html dated from the 2-lecture era.
9. M5 — Cache-bust drift: i18n/atlas/portal/rtl v5 vs v6 across pages; lecture data v5–v7. Stale-asset
   risk on GitHub Pages after deploy.
10. M6 — Particle system: 40 animated divs on all 4 portal pages; invisible (z-index:-1 behind grain)
    yet created every load per page (createParticles duplicated in exams.js & quizzes.js & index inline).
11. M7 — exam gate topbar counter "50 / 01" bidi inversion (should read 01/50); stats boxes collide
    borders at 1000–1200px widths; palette legend chips have tiny touch targets (<32px).
12. M8 — Lectures: back path is brand-only. No "← إلى الفهرس" contextual return, and visited-state is
    only visible via the top progress %.
13. M9 — login.html uses inline styles + admin-main classes (defined in another stylesheet) — fragile
    coupling; error text only color-coded.

### Low
14. L1 — Exam hero composition (blue italic أنت colliding with strikethrough line) reads messy at 1440.
15. L2 — Admin passcode default "1234" documented in code (client-side only; roster protection is
    Firebase rules — noted, no change unless flagged).
16. L3 — quizzes.html/lecture shells carry mesh-bg/particles markup even though styling neutralized.

## C. Key decisions needed (UX forks)
- D1 Lock-in scope: keep login-first gate for everything vs open the homepage+journeys to all-signed-out
  visitors while exams/admin/login stay gated. (Brief vision favors open homepage; exam integrity is
  handled inside exam.js itself, so opening the homepage does NOT weaken attempts/roster.)
- D2 qz-practice unlock relationship (G4) — enforce direction: exam→practice, or make practice free and
  drop the banner.
- D3 Revision center: extend decks to L3+L4 now, or restage copy-only this round.
- D4 Default theme: keep dark default (recommended; no churn) vs paper default.

## D. Evidence
- audit_results.json / shots/ (17 page screenshots + closeups) in opencode temp dir.
- Code refs: gate.js:37-39 (blank-screen lock), 60-70 (stack inject); quizzes.js:176 (hardcode 52),
  154-158 (gate); exams.js:180-224 (name gate), 286-362 (status/CTA); exam.html:126-131 (own SDK tags).
