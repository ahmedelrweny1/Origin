const fs = require('fs');
const path = require('path');
const vm = require('vm');

function runInContext(code, sandbox = {}) {
  const context = vm.createContext(sandbox);
  vm.runInContext(code + '\n;if (typeof EXAMS !== "undefined") globalThis.EXAMS = EXAMS;', context);
  return sandbox;
}

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    process.exit(1);
  }
}

console.log('--- Step 1: Checking question files ---');
const arPath = path.join(__dirname, '..', 'exam-lect4-50-ar.js');
const enPath = path.join(__dirname, '..', 'exam-lect4-50-en.js');

assert(fs.existsSync(arPath), 'exam-lect4-50-ar.js must exist');
assert(fs.existsSync(enPath), 'exam-lect4-50-en.js must exist');

const arCode = fs.readFileSync(arPath, 'utf8');
const enCode = fs.readFileSync(enPath, 'utf8');

const arSandbox = runInContext(arCode);
const enSandbox = runInContext(enCode);

const arQuestions = arSandbox.LECT4_FULL_EXAM_AR;
const enQuestions = enSandbox.LECT4_FULL_EXAM_EN;

assert(Array.isArray(arQuestions), 'LECT4_FULL_EXAM_AR must be an array');
assert(Array.isArray(enQuestions), 'LECT4_FULL_EXAM_EN must be an array');
assert(arQuestions.length === 50, `LECT4_FULL_EXAM_AR must contain exactly 50 questions (found ${arQuestions.length})`);
assert(enQuestions.length === 50, `LECT4_FULL_EXAM_EN must contain exactly 50 questions (found ${enQuestions.length})`);

const diffCounts = { easy: 0, medium: 0, hard: 0 };

for (let i = 0; i < 50; i++) {
  const qAr = arQuestions[i];
  const qEn = enQuestions[i];

  assert(qAr.id && qEn.id, `Question at index ${i} must have an id`);
  assert(qAr.id === qEn.id, `ID mismatch at index ${i}: AR=${qAr.id}, EN=${qEn.id}`);
  assert(qAr.difficulty === qEn.difficulty, `Difficulty mismatch at index ${i} (${qAr.id})`);
  assert(diffCounts[qAr.difficulty] !== undefined, `Invalid difficulty "${qAr.difficulty}" at index ${i}`);
  diffCounts[qAr.difficulty]++;

  assert(Array.isArray(qAr.options) && qAr.options.length === 4, `Question ${qAr.id} (AR) must have exactly 4 options`);
  assert(Array.isArray(qEn.options) && qEn.options.length === 4, `Question ${qEn.id} (EN) must have exactly 4 options`);

  assert(typeof qAr.answer === 'number' && qAr.answer >= 0 && qAr.answer < 4, `Question ${qAr.id} (AR) answer must be 0..3`);
  assert(typeof qEn.answer === 'number' && qEn.answer >= 0 && qEn.answer < 4, `Question ${qEn.id} (EN) answer must be 0..3`);
  assert(qAr.answer === qEn.answer, `Question ${qAr.id} correct answer index mismatch: AR=${qAr.answer}, EN=${qEn.answer}`);

  assert(typeof qAr.question === 'string' && qAr.question.trim().length > 0, `Question ${qAr.id} (AR) has empty question text`);
  assert(typeof qEn.question === 'string' && qEn.question.trim().length > 0, `Question ${qEn.id} (EN) has empty question text`);

  assert(typeof qAr.explain === 'string' && qAr.explain.trim().length > 0, `Question ${qAr.id} (AR) has empty explanation`);
  assert(typeof qEn.explain === 'string' && qEn.explain.trim().length > 0, `Question ${qEn.id} (EN) has empty explanation`);
}

console.log(`Difficulty distribution: Easy=${diffCounts.easy}, Medium=${diffCounts.medium}, Hard=${diffCounts.hard}`);
assert(diffCounts.easy === 10, `Expected exactly 10 direct (easy) questions, got ${diffCounts.easy}`);
assert(diffCounts.medium === 20, `Expected exactly 20 attention (medium) questions, got ${diffCounts.medium}`);
assert(diffCounts.hard === 20, `Expected exactly 20 tricky (hard) questions, got ${diffCounts.hard}`);

console.log('--- Step 2: Checking exams.js and admin.js integration ---');
const examsPath = path.join(__dirname, '..', 'exams.js');
const examsCode = fs.readFileSync(examsPath, 'utf8');
const examsSandbox = runInContext(examsCode, {
  window: { addEventListener: () => {} },
  document: { getElementById: () => null, addEventListener: () => {} },
  localStorage: { getItem: () => null }
});

const examsList = examsSandbox.EXAMS;
assert(Array.isArray(examsList), 'EXAMS in exams.js must be an array');
const l4Exam = examsList.find(e => e.id === 'final-l4');
assert(l4Exam, 'final-l4 exam must be registered in exams.js EXAMS array');
assert(l4Exam.total === 50, `final-l4 total must be 50, got ${l4Exam.total}`);
assert(l4Exam.runUrl === 'exam3.html', `final-l4 runUrl must be exam3.html, got ${l4Exam.runUrl}`);
assert(l4Exam.seed.durationMin === 60, `final-l4 durationMin must be 60, got ${l4Exam.seed.durationMin}`);
assert(l4Exam.seed.attemptLimit === 1, `final-l4 attemptLimit must be 1, got ${l4Exam.seed.attemptLimit}`);
assert(l4Exam.seed.windowEnabled === true, 'final-l4 windowEnabled must be true');

const endDate = new Date(l4Exam.seed.windowEnd);
assert(endDate.getFullYear() === 2026 && endDate.getMonth() === 9 && endDate.getDate() === 26,
  `Window end date must be Monday Oct 26, 2026. Got: ${endDate.toISOString()}`);

console.log('--- Step 3: Checking runner files ---');
assert(fs.existsSync(path.join(__dirname, '..', 'exam3.html')), 'exam3.html must exist');
assert(fs.existsSync(path.join(__dirname, '..', 'exam3.js')), 'exam3.js must exist');

console.log('✅ ALL 50-QUESTION EXAM VERIFICATIONS PASSED SUCCESSFULLY!');
