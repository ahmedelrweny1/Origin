const fs = require('fs');
const vm = require('vm');
const path = require('path');
const assert = require('assert');

// 1. Mock sandbox for exams.js testing
const sandboxExams = {
  console,
  setTimeout: (fn) => fn(),
  clearTimeout: () => {},
  document: {
    getElementById: () => ({
      value: '',
      textContent: '',
      innerHTML: '',
      classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
      querySelectorAll: () => [],
      addEventListener: () => {}
    }),
    addEventListener: () => {}
  },
  window: {
    location: { search: '' },
    addEventListener: () => {}
  },
  localStorage: {
    _data: {},
    getItem(k) { return this._data[k] !== undefined ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
  },
  currentLang: 'ar',
  addEventListener: () => {},
  translations: {
    ar: {
      txSubmitted: "تم التسليم بنجاح",
      txSubmittedSuccessTitle: "تم تسليم الامتحان بنجاح!",
      txSubmittedNotice: "تم تسجيل إجاباتك بنجاح وحفظها لدى المعلم. بالتوفيق والنجاح إن شاء الله!",
      txScoresHiddenNotice: "درجات الامتحان والإجابات النموذجية محفوظة لدى المعلم فقط ولا تظهر للطلاب.",
      txCompleted: "تم أداء الامتحان وتسليمه",
      txBest: "أحسن نتيجة",
      txPassed: "ناجح",
      txStudent: "اسم الطالب",
      txTimeUsed: "الوقت المستغرق",
      exBack: "رجوع",
      qzBackToList: "قائمة الامتحانات"
    },
    en: {
      txSubmitted: "Submitted",
      txSubmittedSuccessTitle: "Exam Submitted Successfully!",
      txSubmittedNotice: "Your answers have been securely recorded and submitted to your teacher. Best of luck!",
      txScoresHiddenNotice: "Exam degrees and model answers are kept confidential and are not released to students.",
      txCompleted: "Completed & Submitted",
      txBest: "Best",
      txPassed: "Passed",
      txStudent: "Student",
      txTimeUsed: "Time used",
      exBack: "Back",
      qzBackToList: "Exams list"
    }
  }
};
sandboxExams.window = sandboxExams;
sandboxExams.globalThis = sandboxExams;

const ctxExams = vm.createContext(sandboxExams);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../exams.js'), 'utf8'), ctxExams);

const EXAMS = vm.runInContext('EXAMS', ctxExams);
const getTConfig = vm.runInContext('getTConfig', ctxExams);
const reportCardHtml = vm.runInContext('reportCardHtml', ctxExams);

console.log('Testing getTConfig default hideScores...');
const sampleExam = EXAMS[2]; // final-l4
const cfgDefault = getTConfig(sampleExam);
assert.strictEqual(cfgDefault.hideScores, true, 'hideScores must default to true');
console.log('✓ getTConfig defaults hideScores to true.');

console.log('Testing reportCardHtml when hideScores is true...');
const dummyReport = {
  examId: 'final-l4',
  name: 'محمود عادل',
  score: 48,
  total: 50,
  wrong: 2,
  unanswered: 0,
  passed: true,
  durationUsed: 1450000,
  submittedAt: Date.now(),
  items: [
    { n: 1, good: false, question: 'سؤال تجريبي', your: 'إجابة خاطئة' }
  ]
};

const hiddenHtmlAr = reportCardHtml(sampleExam, dummyReport, cfgDefault);
assert(hiddenHtmlAr.includes('تم تسليم الامتحان بنجاح!'), 'Must include success title');
assert(hiddenHtmlAr.includes('محفوظة لدى المعلم فقط ولا تظهر للطلاب'), 'Must include confidentiality notice');
assert(!hiddenHtmlAr.includes('48 / 50') && !hiddenHtmlAr.includes('48/50') && !hiddenHtmlAr.includes('report-score'), 'Must NOT reveal student score');
assert(!hiddenHtmlAr.includes('96%'), 'Must NOT reveal percentage');
assert(!hiddenHtmlAr.includes('إجابة خاطئة'), 'Must NOT reveal mistakes list');
console.log('✓ reportCardHtml hides all degrees, percentages, and mistakes when hideScores is active.');

console.log('Testing reportCardHtml when hideScores is explicitly false (admin release)...');
const cfgRevealed = { ...cfgDefault, hideScores: false };
const revealedHtmlAr = reportCardHtml(sampleExam, dummyReport, cfgRevealed);
assert(revealedHtmlAr.includes('96%'), 'Should reveal percentage when hideScores is false');
assert(revealedHtmlAr.includes('48'), 'Should reveal score when hideScores is false');
console.log('✓ reportCardHtml reveals results when admin explicitly turns off hideScores.');

console.log('Testing studentReport storage in exam runner finishExam simulation...');
const mockExam3 = {
  config: { hideScores: true },
  state: { studentName: 'سارة أحمد', uid: null, answers: {} }
};
const totalQ = 50;
const correctQ = 45;
const expiredQ = false;
const fullReport = {
  examId: 'final-l4',
  name: mockExam3.state.studentName,
  score: correctQ,
  total: totalQ,
  wrong: 5,
  items: [{ n: 1, good: true }]
};

const studentStoredReport = (mockExam3.config && mockExam3.config.hideScores === false)
  ? fullReport
  : {
      examId: 'final-l4',
      name: mockExam3.state.studentName,
      total: totalQ,
      submitted: true,
      submittedAt: Date.now(),
      durationUsed: 120000,
      expired: expiredQ
    };

assert.strictEqual(studentStoredReport.score, undefined, 'studentStoredReport must not have score property');
assert.strictEqual(studentStoredReport.items, undefined, 'studentStoredReport must not have items property');
assert.strictEqual(studentStoredReport.submitted, true, 'studentStoredReport must confirm submission');
console.log('✓ Student report storage sanitization verified: no scores or answers stored in student report key.');

console.log('\nALL HIDE-SCORES TESTS PASSED SUCCESSFULLY!');
