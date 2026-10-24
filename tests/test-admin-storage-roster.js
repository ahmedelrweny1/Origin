const fs = require('fs');
const vm = require('vm');
const path = require('path');
const assert = require('assert');

// Setup mock browser environment
const domHtml = `
  <div id="rosterList"></div>
  <div id="rosterSummary"></div>
  <select id="rosterView"><option value="all">All</option></select>
  <select id="examSelect"><option value="final-l4">final-l4</option></select>
  <div id="logMsg" class="hidden"></div>
`;

const sandbox = {
  console,
  setTimeout: (fn) => fn(),
  clearTimeout: () => {},
  document: {
    getElementById: (id) => {
      if (!sandbox._elements[id]) {
        sandbox._elements[id] = {
          id,
          value: '',
          textContent: '',
          innerHTML: '',
          classList: {
            add: () => {},
            remove: () => {},
            contains: () => false,
            toggle: () => {}
          },
          querySelectorAll: () => [],
          addEventListener: () => {},
          dataset: {}
        };
      }
      return sandbox._elements[id];
    },
    addEventListener: () => {}
  },
  _elements: {},
  window: {
    addEventListener: () => {}
  },
  addEventListener: () => {},
  localStorage: {
    _data: {},
    getItem(k) { return this._data[k] !== undefined ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
  },
  sessionStorage: {
    _data: {},
    getItem(k) { return this._data[k] !== undefined ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
  },
  currentLang: 'ar',
  translations: {
    ar: {
      roFirst: 'الأول',
      roSecond: 'التاني',
      roThird: 'التالت',
      roBoth: 'الاتنين',
      roAllExams: 'كل الامتحانات',
      roTabMistakes: 'الأخطاء فقط',
      roTabWritten: 'الإجابات المكتوبة',
      roTabAll: 'كل الأسئلة',
      roMistakes: 'أخطاء',
      roWritten: 'إجابة مكتوبة',
      roYourAns: 'إجابة الطالب:',
      roYourWritten: 'الإجابة المكتوبة للطالب:',
      roCorrectAns: 'الإجابة النموذجية / الصحيحة:',
      roExplain: 'التوضيح والشرح:',
      roNoWrong: 'درجة نهائية! مفيش أي أخطاء.',
      roNoWritten: 'مفيش أسئلة مقالية مكتوبة.',
      roUnanswered: 'لم يجب عليه',
      roAttempts: 'محاولات',
      roAvg: 'المتوسط',
      roPassed: 'ناجح',
      roEmpty: 'مفيش محاولات لسه',
      roMissing: 'لم يدخل الامتحان',
      type_mcq: 'اختيار من متعدد',
      type_tf: 'صح وغلط',
      type_typing: 'كتابة ومصطلح',
      type_multi: 'اختيار متعدد'
    },
    en: {}
  }
};

sandbox.window = sandbox;
sandbox.globalThis = sandbox;

const context = vm.createContext(sandbox);

// Load question banks
vm.runInContext(fs.readFileSync(path.join(__dirname, '../exam-lect4-50-ar.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../exam-final-l1l2-ar.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../exam-mid-l1l2-ar.js'), 'utf8'), context);

// Load admin.js
vm.runInContext(fs.readFileSync(path.join(__dirname, '../admin.js'), 'utf8'), context);

console.log('Testing question banks loaded in admin context...');
assert(Array.isArray(sandbox.LECT4_FULL_EXAM_AR), 'LECT4_FULL_EXAM_AR must be loaded');
assert.strictEqual(sandbox.LECT4_FULL_EXAM_AR.length, 50, 'LECT4_FULL_EXAM_AR length must be 50');
console.log('✓ Question banks loaded.');

console.log('Testing enrichItem for newly submitted attempt...');
const sampleEnrichedItem = {
  n: 1,
  id: 'l4-01',
  type: 'mcq',
  good: false,
  question: 'إيه الفرق الأساسي بين الإشارة التناظرية (Analog) والإشارة الرقمية (Digital)؟',
  your: 2,
  correct: 'التناظرية بتتغير تدريجياً وبشكل مستمر، والرقمية قيم متقطعة ومنفصلة (0 و 1).',
  explain: 'الإشارة التناظرية مستمرة في الزمان والقيمة (زي درجة الحرارة)، أما الرقمية فبتمثل البيانات بخطوات وأرقام متقطعة (0 و 1).'
};
const resEnriched = sandbox.enrichItem(sampleEnrichedItem, 'final-l4', 'ar');
assert.strictEqual(resEnriched.good, false);
assert(resEnriched.yourFormatted.includes('التناظرية أدق دايماً'), 'Should resolve yourFormatted from bank options');
assert(resEnriched.correct.includes('التناظرية بتتغير تدريجياً'), 'Should preserve correct answer');
console.log('✓ enrichItem formats new attempts correctly.');

console.log('Testing backward-compatibility for legacy attempts without question text...');
const legacyItem = {
  n: 2,
  id: 'l4-02',
  type: 'mcq',
  good: false,
  your: 0 // picked wrong index 0
};
const resLegacy = sandbox.enrichItem(legacyItem, 'final-l4', 'ar');
assert(resLegacy.question.includes('ليه الإشارة الرقمية بتقدر تقاوم التشويش'), 'Should look up question text from bank');
assert(resLegacy.correct.includes('مستويين محددين'), 'Should look up correct answer text from bank');
assert(resLegacy.yourFormatted.includes('عشان الإشارة الرقمية سريعة جداً'), 'Should look up option index from bank');
assert(resLegacy.explain.includes('في النظام الرقمي'), 'Should look up explanation from bank');
console.log('✓ Backward compatibility works: legacy items fully backfilled with question, options, and explanations.');

console.log('Testing written/typing questions...');
const writtenItem = {
  n: 12,
  id: 'l4-12',
  type: 'typing',
  good: true,
  your: 'Sampling',
  question: 'ما هي العملية المسؤولة عن أخذ عينات في الزمن؟',
  correct: 'Sampling / أخذ العينات',
  accepted: ['Sampling', 'أخذ العينات']
};
const resWritten = sandbox.enrichItem(writtenItem, 'final-l4', 'ar');
assert.strictEqual(resWritten.type, 'typing');
assert.strictEqual(resWritten.good, true);
assert.strictEqual(resWritten.yourFormatted, 'Sampling');
console.log('✓ Written/typing questions enriched properly.');

console.log('Testing renderQuestionCards filtering...');
const testItems = [
  resEnriched, // bad mcq
  resLegacy,   // bad mcq
  resWritten,  // good typing
  {
    n: 13,
    id: 'l4-13',
    type: 'typing',
    good: false,
    your: 'xyz',
    question: 'ما هو مصطلح التكميم؟',
    correct: 'Quantization',
    accepted: ['Quantization']
  }
];

const cardsMistakes = sandbox.renderQuestionCards(testItems, 'mistakes', true);
assert(cardsMistakes.includes('item-bad'), 'Should render item-bad cards');
assert(!cardsMistakes.includes('>#12<'), 'Should not include correct question #12 in mistakes');
assert(cardsMistakes.includes('>#1<') && cardsMistakes.includes('>#2<') && cardsMistakes.includes('>#13<'), 'Should include all 3 wrong questions');

const cardsWritten = sandbox.renderQuestionCards(testItems, 'written', true);
assert(cardsWritten.includes('>#12<') && cardsWritten.includes('>#13<'), 'Should include both written questions');
assert(!cardsWritten.includes('>#1<') && !cardsWritten.includes('>#2<'), 'Should not include MCQ questions in written filter');

const cardsAll = sandbox.renderQuestionCards(testItems, 'all', true);
assert(cardsAll.includes('>#1<') && cardsAll.includes('>#2<') && cardsAll.includes('>#12<') && cardsAll.includes('>#13<'), 'All filter must include all 4 items');
console.log('✓ renderQuestionCards filters (mistakes, written, all) verified.');

console.log('Testing multi-exam dynamic merging across EXAM_ORDER...');
const studentAttempt1 = {
  name: 'أحمد محمود',
  score: 45,
  total: 50,
  submittedAt: 1000,
  items: [sampleEnrichedItem]
};
const studentAttempt3 = {
  name: 'أحمد محمود',
  score: 48,
  total: 50,
  submittedAt: 2000,
  items: [writtenItem]
};
const rowsByExam = {
  'final-l1l2': [sandbox.toRow(studentAttempt1, 'doc1', 'final-l1l2')],
  'mid-l1l2': [],
  'final-l4': [sandbox.toRow(studentAttempt3, 'doc3', 'final-l4')]
};

const merged = sandbox.mergeRowsDynamic(rowsByExam);
assert.strictEqual(merged.length, 1, 'Should merge into 1 student row');
assert.strictEqual(merged[0].exams['final-l1l2'].score, 45, 'Final-l1l2 score must be 45');
assert.strictEqual(merged[0].exams['final-l4'].score, 48, 'Final-l4 score must be 48');
assert.strictEqual(merged[0].first.score, 45, 'Backward-compatible .first must be populated');
assert.strictEqual(merged[0].third.score, 48, 'Backward-compatible .third must be populated');
console.log('✓ Multi-exam dynamic merging verified across all exams.');

console.log('\nALL ADMIN TESTS PASSED PERFECTLY!');
