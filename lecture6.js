/* ============================================================
   Lecture 6 - Practical (QUREO JavaScript first steps)
   Renders structured stage data (AR/EN), builds interactive
   code labs, and runs the real Midway Code Test.
   ============================================================ */

const LECT6_STORE_KEY = "origin-lect6-progress";
let LECT6_STAGES = (currentLang !== 'ar' && window.LECT6_STAGES_EN) ? window.LECT6_STAGES_EN : LECT6_STAGES_AR;

let lect6State = {
  current: 0,
  visited: new Set()
};

try {
  const saved = JSON.parse(localStorage.getItem(LECT6_STORE_KEY));
  if (saved && Array.isArray(saved.visited)) lect6State.visited = new Set(saved.visited);
  if (saved && Number.isInteger(saved.current)) lect6State.current = Math.min(Math.max(saved.current, 0), LECT6_STAGES.length - 1);
} catch (e) {}

function saveLect6State() {
  localStorage.setItem(LECT6_STORE_KEY, JSON.stringify({ visited: [...lect6State.visited], current: lect6State.current }));
}

const $ = (id) => document.getElementById(id);
const stagePanel = $("stagePanel");
const topicNodes = $("topicNodes");

/* ========================================================
   HELPERS
   ======================================================== */
const lect6W = {
  lab: { stageId: null, code: null },
  calc: { a: 10, b: 5, op: "+" },
  str: { left: "Hello", right: "\" World\"" },
  varbox: { step: -1 },
  varcalc: { x: 10, y: 5 },
  review: { open: null },
  test: { codes: {}, passed: {}, results: {} }
};

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* Run user JavaScript in a sandbox with a captured console */
function runJs(codeText) {
  const logs = [];
  let error = null;
  const fakeConsole = {
    log: (...args) => logs.push(args.map((v) => (typeof v === "string" ? v : String(v))).join(" ")),
    warn: () => {}, error: () => {}, info: () => {}
  };
  try {
    const fn = new Function("console", String(codeText) + "\n");
    fn(fakeConsole);
  } catch (err) {
    const isAr = currentLang === "ar";
    if (err && err.name === "SyntaxError") {
      error = isAr ? "غلط كتابي (Syntax) — راجع الأقواس وعلامات التنصيص والفواصل المنقوطة." : "Syntax error - check brackets, quotes and semicolons.";
    } else {
      error = (isAr ? "غلط في التشغيل: " : "Run error: ") + (err && err.message ? err.message : String(err));
    }
  }
  return { logs, error };
}

/* ========================================================
   STORY RENDERING (from structured data)
   ======================================================== */
const LECT6_ACCENTS = ["blue", "amber", "green"];

function lect6CardHtml(card, i) {
  const accent = LECT6_ACCENTS.includes(card.accent) ? card.accent : LECT6_ACCENTS[i % 3];
  return `
    <div class="story-card card-${accent}-accent">
      <div class="card-header-row">
        <h4 class="card-title"><strong>${esc(card.icon)}</strong> ${esc(card.title)}</h4>
        <span class="card-badge badge-${accent}">${esc(card.badge)}</span>
      </div>
      <p class="card-desc">${esc(card.text)}</p>
    </div>`;
}

function lect6NoteHtml(note, i) {
  const isAr = currentLang === "ar";
  const accents = ["callout-blue", "callout-green", "callout-amber"];
  return `
    <div class="editorial-callout ${accents[i % 3]}">
      <div class="callout-header">
        <span class="callout-icon">${esc(note.icon)}</span>
        <h4 class="callout-title">${esc(note.title)}</h4>
      </div>
      <p class="card-desc"><strong>${esc(note.text)}</strong></p>
      ${note.example ? `<p class="card-example">🔍 <em>${isAr ? "جرّب بنفسك:" : "Try it yourself:"} ${esc(note.example)}</em></p>` : ""}
    </div>`;
}

function lect6TableHtml(table) {
  const isAr = currentLang === "ar";
  const badge = esc(isAr ? "احفظه كويس" : "Save it");
  const rows = table.rows.map((r) => `
      <tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("");
  const head = table.head.map((h) => `<th>${esc(h)}</th>`).join("");
  return `
    <div class="story-card card-blue-accent">
      <div class="card-header-row">
        <h4 class="card-title"><strong>📊</strong> ${esc(table.title)}</h4>
        <span class="card-badge badge-blue">${badge}</span>
      </div>
      <table class="l3-mini-table">
        <tr>${head}</tr>
        ${rows}
      </table>
    </div>`;
}

function lect6CodeShellHtml(code) {
  const isAr = currentLang === "ar";
  const badge = esc(isAr ? "كود" : "Code");
  return `
    <div class="story-card card-green-accent">
      <div class="card-header-row">
        <h4 class="card-title"><strong>💾</strong> ${esc(code.title)}</h4>
        <span class="card-badge badge-green">${badge}</span>
      </div>
      <pre class="code-shell">${code.lines.map((l) => esc(l)).join("\n")}</pre>
    </div>`;
}

function lect6StoryHtml(stage) {
  let html = `<p class="story-lead">${esc(stage.lead)}</p>`;
  const items = stage.cards || [];
  if (items.length) {
    html += `<div class="content-cards-stack">` + items.map(lect6CardHtml).join("") + `</div>`;
  }
  (stage.notes || []).forEach((note, i) => { html += lect6NoteHtml(note, i); });
  if (stage.table) html += lect6TableHtml(stage.table);
  if (stage.code) html += lect6CodeShellHtml(stage.code);
  return html;
}

/* ========================================================
   WIDGETS
   ======================================================== */

/* --- Mini code editor with captured console (code_lab / comments_lab) --- */
function lect6DefaultLabCode(stage) {
  return stage.code ? stage.code.lines.join("\n") : "";
}

function renderCodeLabWidget(stage, withCommentToggle) {
  const isAr = currentLang === "ar";
  if (lect6W.lab.stageId !== stage.id) {
    lect6W.lab.stageId = stage.id;
    lect6W.lab.code = lect6DefaultLabCode(stage);
  }
  const title = isAr ? "✍️ محرر الأكواد — اضغط تشغيل وشوف الكونسول" : "✍️ Code editor - press Run and watch the console";
  const cmtLabel = isAr ? "💬 فعّل/بطّل التعليق" : "💬 Toggle comment";
  const resetLabel = isAr ? "🔄 ارجع للكود الأصلي" : "🔄 Restore original code";
  return `
    <div class="interactive-widget code-editor-wrap">
      <div class="widget-title"><span>🖥️</span> ${esc(title)}</div>
      <textarea class="code-editor" id="labEditor" rows="4" spellcheck="false">${esc(lect6W.lab.code)}</textarea>
      <div class="console-head"><span>${isAr ? "console — النتايج" : "console — output"}</span><span>JavaScript</span></div>
      <div class="console-screen" id="labOut"></div>
      <div class="mt-actions">
        <button class="btn btn-primary" id="labRun">▶️ ${isAr ? "تشغيل" : "Run"}</button>
        ${withCommentToggle ? `<button class="btn btn-ghost" id="labCmt">${esc(cmtLabel)}</button>` : ""}
        <button class="btn btn-ghost" id="labReset">${esc(resetLabel)}</button>
      </div>
    </div>`;
}

function renderConsoleLines(out, res) {
  if (res.error) {
    out.innerHTML = `<span class="cs-err">${esc(res.error)}</span>`;
    return;
  }
  if (!res.logs.length) {
    out.innerHTML = `<span class="cs-empty">${currentLang === "ar" ? "مفيش مخرجات — اتأكد إنك استخدمت console.log" : "No output - make sure you used console.log"}</span>`;
    return;
  }
  out.innerHTML = res.logs.map((l) => `<span class="cs-line">${esc(l)}</span>`).join("");
}

/* --- Calculator lab (calc_lab) --- */
function lect6ApplyOp(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  return a / b;
}

function renderCalcWidget() {
  const isAr = currentLang === "ar";
  const nums = [2, 5, 10, 15, 20];
  const ops = ["+", "-", "*", "/"];
  const chipRow = (kind, val, active) => `
    <button class="lab-btn ${active ? "active" : ""}" data-kind="${kind}" data-val="${val}">${esc(String(val))}</button>`;
  const aRow = `<div class="lab-bar">${nums.map((n) => chipRow("a", n, lect6W.calc.a === n)).join("")}</div>`;
  const bRow = `<div class="lab-bar">${nums.map((n) => chipRow("b", n, lect6W.calc.b === n)).join("")}</div>`;
  const opRow = `<div class="lab-bar">${ops.map((o) => chipRow("op", o, lect6W.calc.op === o)).join("")}</div>`;
  const res = lect6ApplyOp(lect6W.calc.a, lect6W.calc.b, lect6W.calc.op);
  const codeLine = `console.log(${lect6W.calc.a} ${lect6W.calc.op} ${lect6W.calc.b});`;
  const title = isAr ? "🧮 حاسبة الكونسول — اختار رقمين وعملية" : "🧮 Console calculator - pick two numbers and one operation";
  return `
    <div class="interactive-widget">
      <div class="widget-title"><span>✅</span> ${esc(title)}</div>
      ${aRow}
      ${opRow}
      ${bRow}
      <pre class="lab-preview">${esc(codeLine)}</pre>
      <div class="console-head"><span>${isAr ? "console — النتايج" : "console — output"}</span><span>JavaScript</span></div>
      <div class="console-screen">${res ? `<span class="cs-line">${esc(String(res))}</span>` : `<span class="cs-empty">?</span>`}</div>
      <p style="margin-top:8px; color:var(--ink-soft,#999); font-size:0.85rem; text-align:center;">${isAr ? "دوس على الأرقام والعملية — السطر والناتج بيتحدثوا فورًا" : "Tap numbers and operation - the code line and result update live"}</p>
    </div>`;
}

/* --- String lab (string_lab) --- */
function renderStringWidget() {
  const isAr = currentLang === "ar";
  const lefts = ["Hello", "Good morning", "My age is "];
  const rights = ['" World"', '"!!!"', "16"];
  const left = lect6W.str.left;
  const right = lect6W.str.right;
  /* Construct the quoted strings manually to keep it simple */
  const lq = `"${left}"`;
  const rq = right.match(/^"(.*?)"$/) ? `"${right.match(/^"(.*?)"$/)[1]}"` : "16";
  const isNum = !/^"/.test(right);
  const out = isNum ? (lq.replace(/"$/, "") + `" ${right}`) : (lq.replace(/"$/, "") + rq.replace(/^"/, ""));
  let realOut;
  if (isNum) realOut = `${left} ${right}`;
  else realOut = `${left}${right.replace(/^"/, "").replace(/"$/, "")}`;
  const codeLine = `console.log(${lq} + ${isNum ? right : rq});`;
  const leftRow = `<div class="lab-bar">${lefts.map((s) => `<button class="lab-btn ${left === s ? "active" : ""}" data-slot="left" data-val="${esc(s)}">${esc(`"${s}"`)}</button>`).join("")}</div>`;
  const rightRow = `<div class="lab-bar">${rights.map((s) => `<button class="lab-btn ${right === s ? "active" : ""}" data-slot="right" data-val="${esc(s)}">${esc(s)}</button>`).join("")}</div>`;
  const title = isAr ? "🔤 مختبر النصوص — وصّل نصين وشوف الـ+" : "🔤 String lab - join a string with a string or a number";
  return `
    <div class="interactive-widget">
      <div class="widget-title"><span>✅</span> ${esc(title)}</div>
      ${leftRow}
      ${rightRow}
      <pre class="lab-preview">${esc(codeLine)}</pre>
      <div class="console-head"><span>${isAr ? "console — النتايج" : "console — output"}</span><span>JavaScript</span></div>
      <div class="console-screen"><span class="cs-line">${esc(realOut)}</span></div>
      <p style="margin-top:8px; color:var(--ink-soft,#999); font-size:0.85rem; text-align:center;">${isAr ? "لاحظ مسافة داخل النص بتخلق المسافة الفاصلة، والرقم بيتلزق فورًا" : "Note the space inside the string, and how the number sticks to the text"}</p>
    </div>`;
}

/* --- Variable box stepper (var_box) --- */
function renderVarBoxWidget() {
  const isAr = currentLang === "ar";
  const steps = isAr ? [
    { icon: "📦", label: "let number = 10;", note: "اعمل علبة اسمها number وحط فيها 10" },
    { icon: "🔄", label: "number = 20;", note: "غيّر القيمة — القيمة القديمة بتروح والعلبة بقت فيها 20 (من غير let)" },
    { icon: "🖨️", label: "console.log(number);", note: "اطبع قيمة العلبة — هتلاقي آخر قيمة: 20" }
  ] : [
    { icon: "📦", label: "let number = 10;", note: "Create a box called number and put 10 inside" },
    { icon: "🔄", label: "number = 20;", note: "Reassign - the old value is gone, the box now holds 20 (no let)" },
    { icon: "🖨️", label: "console.log(number);", note: "Print the box - it shows the latest value: 20" }
  ];
  const step = lect6W.varbox.step;
  const rows = steps.map((s, i) => `
    <div class="review-item ${i <= step ? "open" : ""}" style="cursor:default;">
      <div class="rv-head" style="cursor:default;">
        <span class="rv-num">${i + 1}</span>
        <span style="direction:ltr; font-family:var(--font-mono,'JetBrains Mono',monospace); font-size:0.9rem;">${esc(s.label)}</span>
      </div>
      <div class="rv-solution"><p class="card-desc" style="margin:0;">${esc(s.icon)} ${esc(s.note)}</p></div>
    </div>`).join("");
  const boxVisible = step >= 0;
  const value = step === 0 ? "10" : (step >= 1 ? "20" : "");
  const btnLabel = step >= steps.length - 1
    ? (isAr ? "🔄 إعادة المحاكاة" : "🔄 Restart simulation")
    : (isAr ? "▶️ نفّذ السطر اللي بعده" : "▶️ Run the next line");
  const title = isAr ? "📦 محاكي المتغير — العلبة بتتغير بالحياة" : "📦 Variable simulator - watch the box change";
  return `
    <div class="interactive-widget">
      <div class="widget-title"><span>✅</span> ${esc(title)}</div>
      ${rows}
      <div class="var-box-row" id="vbRow" style="${boxVisible ? "" : "display:none;"}">
        <div class="var-box ${step === 1 ? "bumped" : ""}" id="vbBox">
          <div class="vb-name">number =</div>
          <div class="vb-value">${value}</div>
        </div>
        ${step >= 1 ? `<div><span class="var-old">10 (القديمة)</span><br><span class="var-new">20 (الجديدة)</span></div>` : ""}
      </div>
      <div class="console-head"><span>${isAr ? "console — النتايج" : "console — output"}</span><span>JavaScript</span></div>
      <div class="console-screen" id="vbOut">${step >= 2 ? `<span class="cs-line">${esc(step >= 2 ? "20" : "")}</span>` : `<span class="cs-empty">${isAr ? "لسه — نفّذ السطر الأخير" : "Not yet - run the last line"}</span>`}</div>
      <div class="mt-actions">
        <button class="btn btn-primary" id="vbNext" style="width:100%;">${esc(btnLabel)}</button>
      </div>
    </div>`;
}

/* --- x + y sliders (var_calc) --- */
function renderVarCalcWidget() {
  const isAr = currentLang === "ar";
  const { x, y } = lect6W.varcalc;
  const title = isAr ? "⚡ تحريك القيم — شوف الحسبة بتتحدث" : "⚡ Slide the values - watch the calculation change";
  const slider = (k, val) => `
    <div class="slider-row">
      <label>${k} =</label>
      <input type="range" min="0" max="50" value="${val}" data-key="${k}">
      <span class="sl-val" id="sl_${k}">${val}</span>
    </div>`;
  const line = `console.log(x + y);`;
  return `
    <div class="interactive-widget">
      <div class="widget-title"><span>✅</span> ${esc(title)}</div>
      ${slider("x", x)}
      ${slider("y", y)}
      <pre class="lab-preview" id="vcPreview">let x = ${x};\nlet y = ${y};\n${line}</pre>
      <div class="console-head"><span>${isAr ? "console — النتايج" : "console — output"}</span><span>JavaScript</span></div>
      <div class="console-screen"><span class="cs-line" id="vcOut">${esc(String(x + y))}</span></div>
      <p style="margin-top:8px; color:var(--ink-soft,#999); font-size:0.85rem; text-align:center;">${isAr ? "حرّك أي شريط — السطر والناتج بيتحدثوا فورًا" : "Drag any slider - the code and result update live"}</p>
    </div>`;
}

/* --- Review checklist (review_checklist) --- */
const LECT6_REVIEW_TASKS = [
  {
    q: { ar: "1. اطبع Hello World باستخدام console.log", en: "1. Print Hello World with console.log" },
    code: 'console.log("Hello World");',
    out: ["Hello World"]
  },
  {
    q: { ar: "2. اطبع ناتج 15 + 20", en: "2. Print the result of 15 + 20" },
    code: "console.log(15 + 20);",
    out: ["35"]
  },
  {
    q: { ar: "3. اطبع ناتج 50 - 10", en: "3. Print the result of 50 - 10" },
    code: "console.log(50 - 10);",
    out: ["40"]
  },
  {
    q: { ar: "4. وصّل نصين مع بعض", en: "4. Join two strings together" },
    code: 'console.log("Hello" + " World");',
    out: ["Hello World"]
  },
  {
    q: { ar: "5. متغير name واعطه قيمة واطبعه", en: "5. Create a variable name, assign a value, print it" },
    code: 'let name = "Ahmed";\nconsole.log(name);',
    out: ["Ahmed"]
  },
  {
    q: { ar: "6. متغيرين واطبع مجموعهم", en: "6. Two variables and print their sum" },
    code: "let x = 10;\nlet y = 5;\nconsole.log(x + y);",
    out: ["15"]
  },
  {
    q: { ar: "7. غيّر قيمة متغير واطبع القيمة الجديدة", en: "7. Change a variable and print its new value" },
    code: "let number = 10;\nnumber = 20;\nconsole.log(number);",
    out: ["20"]
  }
];

function renderReviewWidget() {
  const isAr = currentLang === "ar";
  const openIdx = lect6W.review.open;
  const title = isAr ? "📋 تمارين المراجعة السبعة — افتح كل تمرين وشوف حله" : "📋 The 7 review exercises - open each one to see its solution";
  const items = LECT6_REVIEW_TASKS.map((t, i) => {
    const isOpen = openIdx === i;
    return `
      <div class="review-item ${isOpen ? "open" : ""}">
        <button class="rv-head" data-rev="${i}">
          <span class="rv-num">${i + 1}</span>
          <span>${esc(currentLang === "ar" ? t.q.ar : t.q.en)}</span>
          <span class="rv-toggle">${isOpen ? "▾" : "▸"}</span>
        </button>
        <div class="rv-solution">
          <pre class="code-shell">${t.code.split("\n").map((l) => esc(l)).join("\n")}</pre>
          <div class="console-head"><span>${isAr ? "console — النتايج" : "console — output"}</span><span>JavaScript</span></div>
          <div class="console-screen">${t.out.map((o) => `<span class="cs-line">${esc(o)}</span>`).join("")}</div>
        </div>
      </div>`;
  }).join("");
  return `
    <div class="interactive-widget">
      <div class="widget-title"><span>✅</span> ${esc(title)}</div>
      <div class="review-list">${items}</div>
      <p style="margin-top:10px; color:var(--ink-soft,#999); font-size:0.85rem; text-align:center;">${isAr ? "جرب تكتب الحل بإيدك الأول — وبعدين افتح التمرين وقارن" : "Write it yourself first - then open each item and compare"}</p>
    </div>`;
}

/* ========================================================
   WIDGET DISPATCH
   ======================================================== */
function lect6WidgetFor(stage) {
  switch (stage.interactiveType) {
    case "code_lab": return renderCodeLabWidget(stage, false);
    case "comments_lab": return renderCodeLabWidget(stage, true);
    case "calc_lab": return renderCalcWidget();
    case "string_lab": return renderStringWidget();
    case "var_box": return renderVarBoxWidget();
    case "var_calc": return renderVarCalcWidget();
    case "review_checklist": return renderReviewWidget();
    default: return "";
  }
}

/* ========================================================
   STAGE RENDER
   ======================================================== */
function renderStage(i) {
  const stage = LECT6_STAGES[i];
  lect6State.current = i;
  lect6State.visited.add(stage.id);
  saveLect6State();

  const isAr = currentLang === "ar";
  const widgetHTML = lect6WidgetFor(stage);

  stagePanel.innerHTML = `
    <div class="stage-header">
      <div class="stage-eyebrow">
        <span class="stage-category">${esc(stage.category)}</span>
        <span class="stage-num">${isAr ? "محطة " + String(i + 1).padStart(2, "0") + " من " + String(LECT6_STAGES.length).padStart(2, "0") : "Stage " + String(i + 1).padStart(2, "0") + " / " + String(LECT6_STAGES.length).padStart(2, "0")}</span>
      </div>
      <h2 class="stage-title"><span>${stage.glyph}</span> <span>${esc(stage.title)}</span></h2>
      <p class="stage-tagline">${esc(stage.tagline)}</p>
    </div>

    <div class="stage-text">
      ${lect6StoryHtml(stage)}
      ${widgetHTML}
    </div>

    <div class="stage-quiz">
      <h4 class="quiz-question"><span>🧠</span> ${isAr ? "سؤال التحدي السريع:" : "Quick Challenge Check:"} ${esc(stage.quiz.question)}</h4>
      <div class="quiz-options-list">
        ${stage.quiz.options.map((opt, idx) => `<button class="quiz-btn" data-idx="${idx}">${esc(opt)}</button>`).join("")}
      </div>
      <div class="quiz-feedback-box" aria-live="polite"></div>
    </div>
  `;

  /* Bind quiz */
  const quizBtns = stagePanel.querySelectorAll(".quiz-btn");
  const quizFb = stagePanel.querySelector(".quiz-feedback-box");
  quizBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const picked = Number(btn.dataset.idx);
      quizBtns.forEach((b, idx) => {
        b.disabled = true;
        if (idx === stage.quiz.answer) b.classList.add("correct");
        else if (idx === picked) b.classList.add("wrong");
      });
      const good = picked === stage.quiz.answer;
      quizFb.textContent = good
        ? (isAr ? "✅ إجابة ممتازة وصحيحة! " : "✅ Spot on! ") + stage.quiz.explain
        : (isAr ? "❌ محاولة جيدة — الإجابة الصحيحة محددة بالأخضر. " : "❌ Not quite - the correct option is highlighted in green. ") + stage.quiz.explain;
      quizFb.className = "quiz-feedback-box " + (good ? "good" : "bad");
    });
  });

  /* Bind widgets */
  const labEditor = $("labEditor");
  const labRun = $("labRun");
  const labOut = $("labOut");
  const labReset = $("labReset");
  const labCmt = $("labCmt");

  labRun && labRun.addEventListener("click", () => {
    lect6W.lab.code = labEditor.value;
    renderConsoleLines(labOut, runJs(labEditor.value));
  });
  labReset && labReset.addEventListener("click", () => {
    lect6W.lab.code = lect6DefaultLabCode(stage);
    labEditor.value = lect6W.lab.code;
    if (labOut) labOut.innerHTML = `<span class="cs-empty">${isAr ? "الكونسول فاضي — دوس تشغيل في الأوامر" : "Console cleared - press Run"}</span>`;
  });
  labCmt && labCmt.addEventListener("click", () => {
    /* Simple switch: if first line starts with a JS comment marker, uncomment; else comment it */
    const lines = labEditor.value.split("\n");
    if (lines[0].trim().startsWith("//")) {
      lines[0] = lines[0].replace(/^(\s*)\/\/\s?/, "$1");
    } else {
      lines[0] = "// " + lines[0];
    }
    labEditor.value = lines.join("\n");
    lect6W.lab.code = labEditor.value;
  });

  /* Calc lab */
  stagePanel.querySelectorAll(".lab-btn[data-kind]").forEach((b) => {
    b.addEventListener("click", () => {
      const k = b.dataset.kind;
      const v = b.dataset.val;
      if (k === "a") lect6W.calc.a = Number(v);
      else if (k === "b") lect6W.calc.b = Number(v);
      else if (k === "op") lect6W.calc.op = v;
      renderStage(i);
    });
  });

  /* String lab */
  stagePanel.querySelectorAll(".lab-btn[data-slot]").forEach((b) => {
    b.addEventListener("click", () => {
      lect6W.str[b.dataset.slot] = b.dataset.val;
      renderStage(i);
    });
  });

  /* Var box stepper */
  const vbNext = $("vbNext");
  vbNext && vbNext.addEventListener("click", () => {
    lect6W.varbox.step = lect6W.varbox.step >= 2 ? -1 : lect6W.varbox.step + 1;
    renderStage(i);
  });

  /* Var calc sliders */
  stagePanel.querySelectorAll(".slider-row input[type=\"range\"]").forEach((r) => {
    r.addEventListener("input", () => {
      const k = r.dataset.key;
      lect6W.varcalc[k] = Number(r.value);
      const sl = $("sl_" + k);
      if (sl) sl.textContent = r.value;
      const preview = $("vcPreview");
      preview && (preview.textContent = "let x = " + lect6W.varcalc.x + ";\nlet y = " + lect6W.varcalc.y + ";\nconsole.log(x + y);");
      const out = $("vcOut");
      out && (out.textContent = String(lect6W.varcalc.x + lect6W.varcalc.y));
    });
  });

  /* Review accordion */
  stagePanel.querySelectorAll(".rv-head[data-rev]").forEach((b) => {
    b.addEventListener("click", () => {
      const idx = Number(b.dataset.rev);
      lect6W.review.open = (lect6W.review.open === idx) ? null : idx;
      renderStage(i);
    });
  });

  /* Nav buttons */
  $("prevBtn").disabled = i === 0;
  $("nextBtn").innerHTML = i === LECT6_STAGES.length - 1
    ? (isAr ? "🏁 الانتقال للاختبار النصفي &rarr;" : "🏁 Go to the Midway Test &rarr;")
    : (isAr ? "&larr; المحطة التالية" : "Next stage &rarr;");

  updateProgressUI();
}

function goToStage(i) {
  renderStage(i);
  document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ========================================================
   FINAL: MIDWAY CODE TEST
   ======================================================== */
const LECT6_TEST_STARTERS = {
  1: '// اكتب سطر يطبع Hello World:\n',
  2: '// اطبع ناتج 15 + 20 (من غير علامات تنصيص):\n',
  3: '// اطبع ناتج 50 - 10:\n',
  4: '// وصّل النصين دول في نص واحد:\n',
  5: '// اعمل متغير name بقيمة "Ahmed" واطبعه:\n',
  6: '// اعمل متغيرين x = 10 و y = 5 واطبع مجموعهم:\n',
  7: '// ابدا بـ let number = 10; ثم غيّر القيمة لـ 20 واطبعها:\n'
};

/* Convert starter comments to English when the page runs in EN mode */
function lect6Starter(idx) {
  const isAr = currentLang === "ar";
  const en = {
    1: "// Write one line that prints Hello World:\n",
    2: "// Print the result of 15 + 20 (no quotes):\n",
    3: "// Print the result of 50 - 10:\n",
    4: "// Join these two strings into one:\n",
    5: "// Create a variable name = \"Ahmed\" and print it:\n",
    6: "// Create x = 10 and y = 5, print their sum:\n",
    7: "// Start with let number = 10; then change it to 20 and print:\n"
  };
  return isAr ? LECT6_TEST_STARTERS[idx] : en[idx];
}

function renderFinalMidwayTest() {
  const board = $("testBoard");
  const isAr = currentLang === "ar";
  if (!board) return;
  board.innerHTML = "";

  const desc = {
    5: isAr ? "قيمته لازم تبقى Ahmed بالظبط" : "Its value must be exactly Ahmed",
    4: isAr ? "استخدم \"Hello\" و\" World\"" : "Use \"Hello\" and \" World\""
  };

  let score = 0;
  LECT6_REVIEW_TASKS.forEach((t, i) => {
    const idx = i + 1;
    const passed = lect6W.test.passed[i] === true;
    if (passed) score++;
    const code = lect6W.test.codes[i] !== undefined ? lect6W.test.codes[i] : lect6Starter(idx);
    const qText = isAr ? t.q.ar : t.q.en;
    const el = document.createElement("div");
    el.className = "mt-task" + (passed ? " passed" : "");
    el.innerHTML = `
      <div class="mt-title">
        <span>${esc(qText)}</span>
        <span class="mt-status">${passed ? "✅" : "⬜"}</span>
      </div>
      <div class="mt-expected">${isAr ? "الناتج المتوقع:" : "Expected output:"} <strong style="direction:ltr;">${t.out.map((o) => esc(o)).join(" | ")}</strong>${idx === 5 ? ` <em style="opacity:.75;">(${esc(desc[5])})</em>` : ""}${idx === 4 ? ` <em style="opacity:.75;">(${esc(desc[4])})</em>` : ""}</div>
      <textarea class="code-editor" data-idx="${i}" rows="3" spellcheck="false" style="border-radius:10px 10px 0 0;">${esc(code)}</textarea>
      <div class="console-head"><span>${isAr ? "console — النتايج" : "console — output"}</span><span>JavaScript</span></div>
      <div class="console-screen" data-out="${i}"></div>
      <div class="mt-actions">
        <button class="btn btn-primary" data-run="${i}">▶️ ${isAr ? "تشغيل وتصحيح" : "Run & check"}</button>
      </div>
      <div class="mt-result" data-res="${i}">${passed ? (isAr ? "✅ التمرين ده كامل وصح" : "✅ This task is complete") : ""}</div>
    `;
    board.appendChild(el);

    /* repaint saved console output + result of the last run for this task */
    const saved = lect6W.test.results[i];
    if (saved) {
      renderConsoleLines(el.querySelector(`[data-out="${i}"]`), saved);
      if (!passed) {
        const resEl = el.querySelector(`[data-res="${i}"]`);
        if (resEl) {
          resEl.className = "mt-result bad";
          resEl.textContent = isAr
            ? "❌ لسه — قارن الناتج بالمتوقع وعدّل الكود."
            : "❌ Not yet - compare the actual output with the expected one and edit.";
        }
      }
    }
  });

  /* progress bar */
  const progress = document.createElement("div");
  progress.className = "midway-progress";
  const pct = Math.round((score / LECT6_REVIEW_TASKS.length) * 100);
  progress.innerHTML = `
    <span>${isAr ? "تقديم الاختبار بالكود" : "Midway code test"} · ${isAr ? String(LECT6_REVIEW_TASKS.length) + " تمرين" : LECT6_REVIEW_TASKS.length + " tasks"}</span>
    <span class="mt-score">${score} / ${LECT6_REVIEW_TASKS.length} (${pct}%)</span>
  `;
  board.prepend(progress);

  /* bind run buttons */
  board.querySelectorAll("[data-run]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.run);
      const editor = board.querySelector(`.code-editor[data-idx="${idx}"]`);
      const out = board.querySelector(`[data-out="${idx}"]`);
      const res = board.querySelector(`[data-res="${idx}"]`);
      if (!editor || !out) return;
      lect6W.test.codes[idx] = editor.value;
      const r = runJs(editor.value);
      lect6W.test.results[idx] = { logs: r.logs, error: r.error };
      renderConsoleLines(out, r);
      const expected = LECT6_REVIEW_TASKS[idx].out;
      const actual = r.error ? [] : r.logs.map((l) => String(l).trim());
      const ok = actual.join("\n") === expected.join("\n");
      lect6W.test.passed[idx] = ok;
      if (res) {
        res.className = "mt-result " + (ok ? "good" : "bad");
        res.textContent = ok
          ? (isAr ? "✅ برافو — الناتج مطابق تمامًا!" : "✅ Brilliant - output matches exactly!")
          : (isAr ? "❌ لسه — قارن الناتج بالمتوقع وعدّل الكود." : "❌ Not yet - compare the actual output with the expected one and edit.");
      }
      renderFinalMidwayTest();
      /* Re-scroll to the clicked task card */
      const cardAgain = board.querySelector(`[data-run="${idx}"]`);
      if (cardAgain) cardAgain.closest(".mt-task") && cardAgain.closest(".mt-task").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  /* banner */
  const resultBox = $("testResult");
  if (resultBox) {
    if (score === LECT6_REVIEW_TASKS.length) {
      resultBox.classList.remove("hidden");
      resultBox.innerHTML = `<div class="midway-banner">🏆 ${isAr ? "مبروك! طلعت النتيجة " + score + " / " + LECT6_REVIEW_TASKS.length + " في الاختبار النصفي — الكود كله صح!" : "Brilliant! You scored " + score + " / " + LECT6_REVIEW_TASKS.length + " on the midway test - every task passed!"}</div>`;
    } else if (score > 0) {
      resultBox.classList.remove("hidden");
      resultBox.innerHTML = `<div class="midway-progress" style="margin:1.4rem 0 0; text-align:center;"><span>${isAr ? "نقاطك الحالية:" : "Your current score:"}</span><span class="mt-score">${score} / ${LECT6_REVIEW_TASKS.length}</span></div>`;
    } else {
      resultBox.classList.add("hidden");
      resultBox.innerHTML = "";
    }
  }
}

function openFinalChallenge() {
  $("finalChallengeSection").classList.remove("hidden");
  renderFinalMidwayTest();
  document.getElementById("finalChallengeSection").scrollIntoView({ behavior: "smooth" });
}

/* ========================================================
   PROGRESS / SIDEBAR
   ======================================================== */
function updateProgressUI() {
  LectureShell.sync(LECT6_STAGES, lect6State.current, lect6State.visited);
}

/* ========================================================
   INIT
   ======================================================== */
function buildTopicNavigation() {
  if (!topicNodes) return;
  topicNodes.innerHTML = "";
  LECT6_STAGES.forEach((stage, i) => {
    const chip = document.createElement("button");
    chip.className = "topic-node";
    chip.innerHTML = `<span>${stage.glyph}</span> <span>${esc(stage.title)}</span>`;
    chip.addEventListener("click", () => goToStage(i));
    topicNodes.appendChild(chip);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  /* Apply saved language to document direction */
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  LectureShell.init({ onNavigate: goToStage, onFinal: openFinalChallenge });
  buildTopicNavigation();
  updateProgressUI();

  if (lect6State.visited.size > 0) {
    $("heroSection").classList.add("hidden");
    $("lectureExperience").classList.remove("hidden");
    renderStage(lect6State.current);
    LectureShell.show();
  } else {
    LectureShell.hide();
  }

  $("startLectureBtn")?.addEventListener("click", () => {
    $("lectureExperience").classList.remove("hidden");
    renderStage(lect6State.current);
    LectureShell.show();
    document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth" });
  });

  $("prevBtn")?.addEventListener("click", () => {
    if (lect6State.current > 0) goToStage(lect6State.current - 1);
  });

  $("nextBtn")?.addEventListener("click", () => {
    if (lect6State.current === LECT6_STAGES.length - 1) {
      openFinalChallenge();
    } else {
      goToStage(lect6State.current + 1);
    }
  });

  $("resetTestBtn")?.addEventListener("click", () => {
    lect6W.test.codes = {};
    lect6W.test.passed = {};
    lect6W.test.results = {};
    const resultBox = $("testResult");
    if (resultBox) { resultBox.classList.add("hidden"); resultBox.innerHTML = ""; }
    renderFinalMidwayTest();
  });
});

window.addEventListener("langChanged", () => {
  LECT6_STAGES = (currentLang !== "ar" && window.LECT6_STAGES_EN) ? window.LECT6_STAGES_EN : LECT6_STAGES_AR;
  buildTopicNavigation();
  updateProgressUI();

  if (!$("lectureExperience")?.classList.contains("hidden")) {
    renderStage(lect6State.current);
  }

  if (!$("finalChallengeSection")?.classList.contains("hidden")) {
    renderFinalMidwayTest();
  }
});
