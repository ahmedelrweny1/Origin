# Lecture 4 50-Question Timed Exam Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and integrate a 50-question timed exam on Lecture 4 with a 60-minute countdown, 1 attempt limit, window ending Monday Oct 26, 2026, and a 10 direct / 20 attention / 20 tricky difficulty balance in Egyptian Arabic and English.

**Architecture:** Create bilingual question data files (`exam-lect4-50-ar.js`, `exam-lect4-50-en.js`), a standalone exam runner (`exam3.html`, `exam3.js`), and register the exam in the central exam list (`exams.js`), admin control panel (`admin.js`), and localization table (`i18n.js`). Validate question parity, counts, difficulty distribution, and timer window via an automated verification script.

**Tech Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3, Firebase compat SDK, Node.js for validation testing.

**Spec:** `docs/superpowers/specs/2026-10-24-lecture4-50q-timed-exam-design.md`

## Global Constraints
- Total questions: Exactly 50 questions in both Arabic and English arrays.
- Difficulty distribution: Exactly 10 easy, 20 medium, 20 hard.
- Timer: 60 minutes countdown (`durationMin: 60`).
- Attempt limit: 1 attempt per student (`attemptLimit: 1`).
- Active window: Starts Oct 24, 2026 and ends Oct 26, 2026 at 23:59:59.
- Egyptian Arabic: Questions must use clear, idiomatic Egyptian colloquial phrasing.
- Tricky questions: Distractors must be plausible and conceptually nuanced without obvious giveaway clues.

## Review Focus
- Question array length mismatch between Arabic and English files.
- Difficulty tag distribution drifting from 10 easy / 20 medium / 20 hard.
- Option index out-of-bounds (answer index not matching an existing 0..3 option).
- Date window timezone offset calculation breaking the Monday Oct 26 end deadline.
- localStorage / remote exam state collision between `final-l1l2`, `mid-l1l2`, and `final-l4`.

---

### Task 1: Automated Verification Test Harness

**Files:**
- Create: `tests/verify-exam-l4.js`

**Interfaces:**
- Consumes: `exam-lect4-50-ar.js`, `exam-lect4-50-en.js`, `exams.js`, `admin.js`.
- Produces: Test runner exit code 0 on valid parity, structure, distribution, and timing.

- [ ] **Step 1: Write the validation test harness**
  Create `tests/verify-exam-l4.js` checking:
  - Both arrays exist (`LECT4_FULL_EXAM_AR` and `LECT4_FULL_EXAM_EN`).
  - Both arrays have length === 50.
  - IDs and answer indices match 1-to-1 between AR and EN.
  - Exactly 10 questions with `difficulty === 'easy'`.
  - Exactly 20 questions with `difficulty === 'medium'`.
  - Exactly 20 questions with `difficulty === 'hard'`.
  - Each item has `options` of length 4, non-empty `question`, non-empty `explain`, and `answer` in 0..3.
  - Window configuration in `exams.js` has `durationMin: 60`, `attemptLimit: 1`, `windowEnabled: true`, and `windowEnd` on Oct 26, 2026.

- [ ] **Step 2: Run verification test to verify it fails initially**
  Run: `node tests/verify-exam-l4.js`
  Expected: FAIL with "Cannot find module" or missing arrays.

---

### Task 2: Question Data Files Creation (AR & EN)

**Files:**
- Create: `exam-lect4-50-ar.js`
- Create: `exam-lect4-50-en.js`

**Interfaces:**
- Consumes: Lecture 4 syllabus and concepts (`analog-digital`, `binary-system`, `units-scale`, `char-encoding`, `pixel-colors`, `sound-digital`, `video-digital`, `compression`, `info-design`).
- Produces: Global variables `LECT4_FULL_EXAM_AR` and `LECT4_FULL_EXAM_EN`.

- [ ] **Step 1: Write `exam-lect4-50-ar.js`**
  Craft 50 questions in authentic, pure Egyptian Arabic covering:
  - 10 Direct (easy): Direct definitions of analog/digital, bit/byte, ASCII, RGB, sampling rate, lossy/lossless.
  - 20 Attention (medium): Calculation of pixel storage, audio recording size, binary to decimal/hex conversions, byte multipliers (KiB vs KB), Unicode multi-byte encoding.
  - 20 Tricky (hard): Subtle distractors targeting Nyquist rate misconceptions, additive vs subtractive color mixing under ambient light, lossless text preservation, Huffman tree prefix ambiguities, quantization bit depth vs dynamic range.
  Tag each with appropriate `id: 'l4-01'` to `'l4-50'`, `lecture: 'l4'`, `stageId`, `difficulty`, `options` (4 items), `answer` (0..3), and `explain`.

- [ ] **Step 2: Write `exam-lect4-50-en.js`**
  Craft the matching English mirror with identical IDs, options ordering, correct answer indices, and explanations.

- [ ] **Step 3: Run the test harness on the question files**
  Run: `node tests/verify-exam-l4.js`
  Expected: Passes question-level assertions, proceeds to exam config check.

---

### Task 3: Exam Runner UI & Controller (`exam3.html` & `exam3.js`)

**Files:**
- Create: `exam3.html`
- Create: `exam3.js`

**Interfaces:**
- Consumes: `exam-lect4-50-ar.js`, `exam-lect4-50-en.js`, `atlas.css`, `exam.css`, `i18n.js`.
- Produces: Complete timed exam runner interface with 50-node question palette, 60-minute countdown, answer state saving, and mistake report.

- [ ] **Step 1: Create `exam3.html`**
  Clone structure from `exam2.html`, updating page title to "Third Exam · Lecture 4", referencing `exam-lect4-50-en.js`, `exam-lect4-50-ar.js`, and `exam3.js`.
  Update eyebrow and title data-i18n tags (`exGateEyebrow3`, `exGateTitle3`, etc.).

- [ ] **Step 2: Create `exam3.js`**
  Set `EXAM_ID = 'final-l4'`, initialize bank mapping to load `LECT4_FULL_EXAM_AR` and `LECT4_FULL_EXAM_EN`.
  Configure `seedConfig()`:
  - `durationMin: 60`
  - `passMark: 25`
  - `attemptLimit: 1`
  - `windowEnabled: true`
  - `windowStart: new Date(2026, 9, 24, 12, 0, 0).getTime()`
  - `windowEnd: new Date(2026, 9, 26, 23, 59, 59).getTime()`

---

### Task 4: System Integration (`exams.js`, `admin.js`, `i18n.js`)

**Files:**
- Modify: `exams.js`
- Modify: `admin.js`
- Modify: `i18n.js`

**Interfaces:**
- Consumes: `final-l4` exam configuration.
- Produces: Third exam card on `exams.html`, administrative dashboard controls on `admin.html`, bilingual translations.

- [ ] **Step 1: Update `exams.js`**
  Add `'final-l4'` object to `EXAMS` array:
  - `id: 'final-l4'`
  - `total: 50`
  - `runUrl: 'exam3.html'`
  - `tag: 'Lecture 4'`
  - `titleEn: 'Third Exam · Lecture 4 (Digital Representation)'`
  - `titleAr: 'الامتحان الثالث · المحاضرة الرابعة (التمثيل الرقمي)'`
  - `descKey: 'tx3CardDesc'`
  - `seed`: duration 60, passMark 25, attemptLimit 1, windowEnabled true, windowStart Oct 24, windowEnd Oct 26 23:59:59.

- [ ] **Step 2: Update `admin.js`**
  Add `'final-l4'` to `EXAMS` object, `EXAM_ORDER` array, and `examShort(id)` mapping.
  Update combined roster aggregation to handle 3 exams if viewing all.

- [ ] **Step 3: Update `i18n.js`**
  Add `tx3CardDesc`, `txGateEyebrow3`, `txGateTitle3`, `txGateSub3` in English and Arabic.

---

### Task 5: End-to-End Verification

**Files:**
- Test: `tests/verify-exam-l4.js`

- [ ] **Step 1: Run complete verification test suite**
  Run: `node tests/verify-exam-l4.js`
  Expected: PASS (All 50 questions verified, bilingual parity confirmed, difficulty distribution verified, integration keys and dates verified).

- [ ] **Step 2: Commit all changes**
  Commit feature changes with descriptive message:
  `feat(exams): add 50-question 60-min timed exam for lecture 4 with window to monday`
