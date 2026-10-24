# Design Document: Lecture 4 50-Question Timed Exam

## 1. Intent & Purpose
Create a high-stakes, 50-question timed exam specifically covering **Lecture 4: Digital Representation of Data and Media (التمثيل الرقمي للبيانات والوسائط)** in the Origin Atlas curriculum. The exam evaluates student mastery under authentic testing conditions with a strict 60-minute countdown, a single attempt limit, and an active window spanning from upload (Saturday, Oct 24, 2026) until Monday, Oct 26, 2026 at 23:59:59.

## 2. Goals, Non-Goals & Anti-Goals
- **Goals:**
  - Build exactly 50 varied questions covering all core stages of Lecture 4.
  - Deliver a strict 10 Easy (direct), 20 Medium (attention-needed), and 20 Hard (tricky) distribution.
  - Ensure tricky questions feature close, plausible distractors requiring conceptual differentiation.
  - Write pure, natural, simple Egyptian Arabic alongside bilingual English equivalents.
  - Fully integrate into Origin Atlas with `exam3.html`, `exam3.js`, `exams.js`, and `admin.js`.
- **Non-Goals:**
  - Covering content outside Lecture 4 (Lectures 1, 2, 3 are out of scope for this specific exam).
  - Changing existing Exam 1 (`final-l1l2`) or Exam 2 (`mid-l1l2`).
- **Anti-Goals:**
  - Obvious "giveaway" answers or silly throwaway distractors in medium and tricky questions.
  - Literal, stiff machine translation in Arabic phrasing.

## 3. Constraints
- **Total Questions:** 50.
- **Duration:** 60 minutes (`durationMin: 60`).
- **Attempt Limit:** 1 attempt (`attemptLimit: 1`).
- **Pass Mark:** 25 out of 50 (`passMark: 25`).
- **Window:** Saturday, Oct 24, 2026 12:00:00 to Monday, Oct 26, 2026 23:59:59.
- **Language:** Egyptian Arabic dialect + English counterpart.

## 4. Architectural Decisions
- Data files: `exam-lect4-50-ar.js` (`LECT4_FULL_EXAM_AR`) and `exam-lect4-50-en.js` (`LECT4_FULL_EXAM_EN`).
- Runner page: `exam3.html` referencing `exam3.js`.
- Registry: `exams.js` (`EXAMS` array with `id: 'final-l4'`).
- Admin: `admin.js` (`EXAMS` object, `EXAM_ORDER`, and `examShort` resolver).
- i18n: `i18n.js` with bilingual strings for `tx3CardDesc` and titles.
