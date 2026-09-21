/* ============================================================
   LECTURE 3 CONTROLLER (Information Security & Safety Tech)
   5 stages: cia_sorter / auth_lab / fraud_identifier /
             encryption_lab / signature_lab
   ============================================================ */

const LECT3_STORE_KEY = "origin-lect3-progress";
let LECT3_STAGES = currentLang === 'ar' ? LECT3_STAGES_AR : LECT3_STAGES_EN;
let LECT3_MATCH_ITEMS = currentLang === 'ar' ? LECT3_MATCH_ITEMS_AR : LECT3_MATCH_ITEMS_EN;

let lect3State = { current: 0, visited: new Set() };

try {
  const saved = JSON.parse(localStorage.getItem(LECT3_STORE_KEY));
  if (saved && Array.isArray(saved.visited)) lect3State.visited = new Set(saved.visited);
} catch (e) {}

function saveLect3State() {
  localStorage.setItem(LECT3_STORE_KEY, JSON.stringify({ visited: [...lect3State.visited] }));
}

const $ = (id) => document.getElementById(id);
const stagePanel = $("stagePanel");
const topicNodes = $("topicNodes");

function buildTopicNavigation() {
  if (!topicNodes) return;
  topicNodes.innerHTML = "";
  LECT3_STAGES.forEach((stage, i) => {
    const chip = document.createElement("button");
    chip.className = "topic-node";
    chip.innerHTML = `<span>${stage.glyph}</span> <span>${stage.title}</span>`;
    chip.addEventListener("click", () => goToStage(i));
    topicNodes.appendChild(chip);
  });
}

function updateProgressUI() {
  if (!topicNodes) return;
  const chips = topicNodes.children;
  for (let i = 0; i < LECT3_STAGES.length; i++) {
    if (chips[i]) {
      chips[i].classList.toggle("visited", lect3State.visited.has(LECT3_STAGES[i].id));
      chips[i].classList.toggle("active", i === lect3State.current);
    }
  }
  const pct = Math.round((lect3State.visited.size / LECT3_STAGES.length) * 100);
  if ($("progressFill")) $("progressFill").style.width = pct + "%";
  if ($("progressLabel")) $("progressLabel").textContent = pct + "%";
}

/* ============ WIDGET 1: CIA sorter ============ */
function renderCiaWidget() {
  const isAr = currentLang === 'ar';
  const items = isAr ? [
    { t: "تسريب بيانات العملاء للمنافسين", c: "conf" },
    { t: "خطأ إدخال يجعل الدرجات غير صحيحة", c: "integ" },
    { t: "هجوم يُسقط الموقع فلا يفتح", c: "avail" },
    { t: "التنصت على الشبكة وقراءة الرسائل", c: "conf" },
    { t: "فيروس يدمر ملفات المشروع", c: "integ" },
    { t: "انقطاع الكهرباء يوقف السيرفر", c: "avail" }
  ] : [
    { t: "Customer data leaked to competitors", c: "conf" },
    { t: "Typing error makes grades wrong", c: "integ" },
    { t: "Attack takes website offline", c: "avail" },
    { t: "Eavesdropping reads private messages", c: "conf" },
    { t: "Virus destroys project files", c: "integ" },
    { t: "Power cut stops the server", c: "avail" }
  ];
  return `
    <div class="interactive-widget" id="ciaWidget">
      <div class="widget-title"><span>🛡️</span> ${isAr ? "فرز الأركان: أي ركن انكسر؟" : "CIA Triage Lab: Which Element Broke?"}</div>
      <p class="widget-subtitle">${isAr ? "اضغط على الحادثة ثم على الركن الصحيح (سرية / سلامة / توافرية):" : "Click an incident, then click the correct CIA bucket:"}</p>
      <div class="cia-tray" id="ciaTray">
        ${items.map(it => `<button class="cia-chip" data-cat="${it.c}">📌 ${it.t}</button>`).join("")}
      </div>
      <div class="cia-grid">
        <div class="cia-bucket" data-target="conf"><h5>🔒 ${isAr ? "السرية" : "Confidentiality"}</h5><div class="bucket-content"></div></div>
        <div class="cia-bucket" data-target="integ"><h5>✅ ${isAr ? "السلامة" : "Integrity"}</h5><div class="bucket-content"></div></div>
        <div class="cia-bucket" data-target="avail"><h5>⚡ ${isAr ? "التوافرية" : "Availability"}</h5><div class="bucket-content"></div></div>
      </div>
      <div id="ciaFeedback" class="case-verdict-box"></div>
    </div>`;
}

function initCiaEvents() {
  const w = $("ciaWidget");
  if (!w) return;
  const isAr = currentLang === 'ar';
  let active = null;
  w.querySelectorAll(".cia-chip").forEach(ch => {
    ch.addEventListener("click", () => {
      if (ch.classList.contains("assigned")) return;
      w.querySelectorAll(".cia-chip").forEach(c => c.style.outline = "none");
      active = ch;
      ch.style.outline = "3px solid var(--c-blue)";
    });
  });
  w.querySelectorAll(".cia-bucket").forEach(b => {
    b.addEventListener("click", () => {
      if (!active) return;
      const fb = $("ciaFeedback");
      if (b.dataset.target === active.dataset.cat) {
        b.querySelector(".bucket-content").appendChild(active);
        active.classList.add("assigned");
        active.style.outline = "none";
        active = null;
        fb.className = "case-verdict-box show good";
        fb.innerHTML = isAr ? "✓ صحيح! التسريب والتنصت يكشفان المعلومة للغرباء (سرية)، والعبث والتدمير يغيران الحقيقة (سلامة)، والتعطل يمنع الفتح وقت الحاجة (توافرية)." : "✓ Correct! Leak/eavesdrop = Confidentiality · tamper/destroy = Integrity · downtime = Availability.";
      } else {
        active.classList.add("wrong-placement");
        setTimeout(() => active && active.classList.remove("wrong-placement"), 500);
        fb.className = "case-verdict-box show bad";
        fb.innerHTML = isAr ? "✕ غير صحيح! اسأل نفسك: هل المشكلة فيمن رأى المعلومة (سرية)؟ أم في سلامة المعلومة نفسها (سلامة)؟ أم في تعذر فتحها وقت الحاجة (توافرية)؟" : "✕ Wrong! Confidentiality = who sees? Integrity = is truth intact? Availability = opens when needed?";
      }
    });
  });
}

/* ============ WIDGET 2: Auth lab ============ */
function renderAuthWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget" id="authWidget">
      <div class="widget-title"><span>🔑</span> ${isAr ? "مختبر كلمات المرور والمصادقة" : "Password & Authentication Lab"}</div>
      <p class="widget-subtitle">${isAr ? "اكتب كلمة مرور وشاهد قوتها، ثم اختبر تمييز عوامل المصادقة:" : "Type a password to test its strength, then identify authentication factors:"}</p>
      <div class="auth-meter-box">
        <label style="font-weight:800;">${isAr ? "جرّب كلمة مرور:" : "Try a password:"}</label>
        <input type="text" id="pwInput" placeholder="${isAr ? "مثال: Ahmed2026! أو 12345" : "e.g. Ahmed2026! or 12345"}" style="width:100%;padding:0.6rem;margin-top:0.4rem;border:2px solid var(--ink);font-family:monospace;">
        <div class="auth-meter-bar"><div class="auth-meter-fill" id="pwFill"></div></div>
        <div id="pwVerdict" style="font-weight:800;font-size:0.9rem;">${isAr ? "ابدأ الكتابة…" : "Start typing…"}</div>
        <div class="auth-checklist" id="pwChecks"></div>
      </div>
      <div class="auth-factor-row" id="factorRow">
        <div class="auth-factor-card" data-ok="1">👆 ${isAr ? "بصمة الإصبع = بيومترية" : "Fingerprint = Biometric"}</div>
        <div class="auth-factor-card" data-ok="1">📲 ${isAr ? "رمز SMS = حيازة" : "SMS code = Possession"}</div>
        <div class="auth-factor-card" data-ok="0">🔑 ${isAr ? "كلمة المرور = بيومترية" : "Password = Biometric"}</div>
        <div class="auth-factor-card" data-ok="1">🧠 ${isAr ? "PIN = معرفة" : "PIN = Knowledge"}</div>
      </div>
      <div id="authFeedback" class="case-verdict-box"></div>
    </div>`;
}

function initAuthEvents() {
  const w = $("authWidget");
  if (!w) return;
  const isAr = currentLang === 'ar';
  const input = $("pwInput"), fill = $("pwFill"), verdict = $("pwVerdict"), checks = $("pwChecks");
  input?.addEventListener("input", () => {
    const v = input.value || "";
    let score = 0;
    const hasLen = v.length >= 8, hasLong = v.length >= 12;
    const hasMix = /[A-Z]/.test(v) && /[a-z]/.test(v);
    const hasNum = /[0-9]/.test(v), hasSym = /[^A-Za-z0-9]/.test(v);
    if (hasLen) score += 25; if (hasLong) score += 15; if (hasMix) score += 25; if (hasNum) score += 15; if (hasSym) score += 20;
    score = Math.min(100, score);
    fill.style.width = Math.max(8, score) + "%";
    fill.style.background = score < 40 ? "var(--c-red)" : score < 75 ? "var(--c-amber)" : "var(--c-green)";
    verdict.textContent = score < 40 ? (isAr ? "❌ ضعيفة — قصيرة ومتوقعة" : "❌ Weak — short & guessable")
      : score < 75 ? (isAr ? "⚠️ متوسطة — أضف رموزاً وطولاً" : "⚠️ Medium — add length + symbols")
      : (isAr ? "✅ قوية — طويلة ومتنوعة وفريدة" : "✅ Strong — long, mixed & unique");
    const row = (ok, label) => `<div>${ok ? "✅" : "❌"} ${label}</div>`;
    checks.innerHTML = row(hasLen, isAr ? "٨ أحرف على الأقل (طويلة)" : "8+ chars (long)")
      + row(hasMix, isAr ? "كبير + صغير" : "Upper + lower")
      + row(hasNum, isAr ? "أرقام" : "Numbers")
      + row(hasSym, isAr ? "رموز (!@#)" : "Symbols (!@#)");
  });
  w.querySelectorAll(".auth-factor-card").forEach(c => {
    c.addEventListener("click", () => {
      const fb = $("authFeedback");
      if (c.dataset.ok === "1") {
        c.classList.add("picked");
        fb.className = "case-verdict-box show good";
        fb.innerHTML = isAr ? "✓ صحيح! بصمة الإصبع إثبات حيوي، ورمز SMS إثبات حيازة، ورمز PIN إثبات معرفة. أما كلمة المرور فهي معرفة وليست حيوية." : "✓ Right! Fingerprint = biometric, SMS = possession, PIN = knowledge. Password is knowledge, not biometric.";
      } else {
        fb.className = "case-verdict-box show bad";
        fb.innerHTML = isAr ? "✕ خطأ! كلمة المرور «معرفة» (ما تعرفه) وليست بيومترية (ما أنت عليه)." : "✕ Wrong! A password is knowledge (what you know), not biometric (what you are).";
      }
    });
  });
}

/* ============ WIDGET 3: Fraud identifier ============ */
function renderFraudWidget() {
  const isAr = currentLang === 'ar';
  const cases = isAr ? [
    { q: "«مبروك! ادفع ٥٠٠ جنيه رسوم شحن لجائزة لم تشترك فيها» — فاتورة لخدمة وهمية.", a: "فاتورة احتيالية" },
    { q: "ضغطة واحدة على إعلان أدت لرسالة «تم اشتراكك! ادفع ٢٠٠٠ جنيه» — عقد مزيف.", a: "احتيال بنقرة واحدة" },
    { q: "بريد «من البنك» يقودك لموقع دخول مزيف يطلب PIN ورقم البطاقة.", a: "تصيد" },
    { q: "شخص يراقب كتفك أثناء إدخال PIN في الماكينة.", a: "تجسس مباشر (هندسة اجتماعية)" }
  ] : [
    { q: "'Congrats! Pay $50 shipping for a prize you never entered' — bill for a fake service.", a: "Fraudulent billing" },
    { q: "One tap on an ad triggers 'Subscribed! Pay $200' — fake contract.", a: "One-click fraud" },
    { q: "A 'bank' email leads to a fake login harvesting PIN + card number.", a: "Phishing" },
    { q: "Someone watches over your shoulder as you type your PIN at the ATM.", a: "Shoulder surfing (social engineering)" }
  ];
  return `
    <div class="interactive-widget" id="fraudWidget">
      <div class="widget-title"><span>🎣</span> ${isAr ? "مختبر كشف الاحتيال" : "Fraud Detection Lab"}</div>
      <p class="widget-subtitle">${isAr ? "اقرأ كل حالة واضغط عليها لكشف نوع الاحتيال الصحيح:" : "Read each case and click it to reveal the fraud type:"}</p>
      <div class="fraud-options">
        ${cases.map(c => `<button class="fraud-opt" data-ans="${c.a}">❓ ${c.q}</button>`).join("")}
      </div>
    </div>`;
}

function initFraudEvents() {
  const w = $("fraudWidget");
  if (!w) return;
  w.querySelectorAll(".fraud-opt").forEach(b => {
    b.addEventListener("click", () => {
      if (b.classList.contains("correct")) return;
      b.classList.add("correct");
      b.innerHTML = `✅ <strong>${b.dataset.ans}</strong> — ${b.textContent.slice(2)}`;
    });
  });
}

/* ============ WIDGET 4: Encryption lab ============ */
function renderEncryptionWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget" id="encWidget">
      <div class="widget-title"><span>🔐</span> ${isAr ? "مختبر التشفير: المتماثل مقابل العام" : "Encryption Lab: Symmetric vs Public"}</div>
      <p class="widget-subtitle">${isAr ? "بدّل بين الطريقتين وشاهد مسار المفتاح والسرعة:" : "Toggle between methods to see key flow and speed:"}</p>
      <div class="enc-toggle-row">
        <div class="enc-mode-card active" data-mode="sym">🔑 ${isAr ? "<strong>المتماثل:</strong> مفتاح مشترك واحد" : "<strong>Symmetric:</strong> one shared key"}</div>
        <div class="enc-mode-card" data-mode="pub">🔓 ${isAr ? "<strong>العام:</strong> عام يُقفل + خاص يفتح" : "<strong>Public:</strong> public locks + private opens"}</div>
      </div>
      <div class="enc-flow-box" id="encFlow"></div>
    </div>`;
}

function initEncryptionEvents() {
  const w = $("encWidget");
  if (!w) return;
  const isAr = currentLang === 'ar';
  const flow = $("encFlow");
  const paint = (mode) => {
    flow.innerHTML = mode === "sym"
      ? (isAr ? "📝 «مرحباً» + 🔑 مفتاح المرسل المشترك ← 🔒 &SA+F\\Cs+A ← إرسال المفتاح سراً مسبقاً ← 🔓 نفس المفتاح ← 📝 «مرحباً»<br>⚡ <strong>سريع</strong> · ❌ توصيل المفتاح صعب (مفتاح لكل مرسل)"
                 : "📝 'Hello' + 🔑 sender shared key → 🔒 &SA+F\\Cs+A → secret key sent in advance → 🔓 same key → 📝 'Hello'<br>⚡ <strong>Fast</strong> · ❌ key exchange hard (key per sender)")
      : (isAr ? "📝 «مرحباً» + 🔓 المفتاح العام للمستلم ← 🔒 &SA+F\\Cs+A ← إرسال ← 🔑 المفتاح الخاص للمستلم وحده ← 📝 «مرحباً»<br>✅ <strong>إدارة سهلة</strong> (العام حر) · 🐢 أبطأ معالجة"
                 : "📝 'Hello' + 🔓 recipient public key → 🔒 &SA+F\\Cs+A → send → 🔑 recipient private key only → 📝 'Hello'<br>✅ <strong>Easy management</strong> (public is free) · 🐢 slower processing");
  };
  paint("sym");
  w.querySelectorAll(".enc-mode-card").forEach(c => {
    c.addEventListener("click", () => {
      w.querySelectorAll(".enc-mode-card").forEach(x => x.classList.remove("active"));
      c.classList.add("active");
      paint(c.dataset.mode);
    });
  });
}

/* ============ WIDGET 5: Signature lab ============ */
function renderSignatureWidget() {
  const isAr = currentLang === 'ar';
  const steps = isAr ? [
    "المرسل يولّد قيمة تجزئة من النص «مرحباً» → 06fe3f3e",
    "المرسل يشفر القيمة بمفتاحه الخاص → التوقيع الرقمي",
    "المرسل يرسل النص + التوقيع للمستلم",
    "المستلم يفك التوقيع بالمفتاح العام للمرسل",
    "المستلم يعيد تجزئة النص بنفس الدالة → 06fe3f3e",
    "مقارنة القيمتين: تطابق! ✅ مرسل موثوق + بلا عبث"
  ] : [
    "Sender hashes plaintext 'Hello' → 06fe3f3e",
    "Sender encrypts hash with sender private key → digital signature",
    "Sender transmits plaintext + signature",
    "Recipient decrypts signature with sender public key",
    "Recipient re-hashes plaintext with same function → 06fe3f3e",
    "Compare hashes: Match! ✅ authentic sender + untampered"
  ];
  return `
    <div class="interactive-widget" id="sigWidget">
      <div class="widget-title"><span>✍️</span> ${isAr ? "محاكي التوقيع الرقمي خطوة بخطوة" : "Step-by-Step Digital Signature Simulator"}</div>
      <p class="widget-subtitle">${isAr ? "اضغط الخطوات بالترتيب من ١ إلى ٦ لإتمام التحقق:" : "Click the steps in order 1 → 6 to complete verification:"}</p>
      <div class="sig-steps">
        ${steps.map((s, i) => `<div class="sig-step" data-i="${i}"><div class="step-number">${i + 1}</div><div>${s}</div></div>`).join("")}
      </div>
      <div class="sig-compare-box" id="sigCompare">${isAr ? "🎉 06fe3f3e = 06fe3f3e — التوقيع سليم! + تذكر: https تعني SSL/TLS بمفتاح الجلسة." : "🎉 06fe3f3e = 06fe3f3e — Signature valid! + Remember: https means SSL/TLS with session key."}</div>
    </div>`;
}

function initSignatureEvents() {
  const w = $("sigWidget");
  if (!w) return;
  let next = 0;
  const steps = [...w.querySelectorAll(".sig-step")];
  steps.forEach(s => {
    s.addEventListener("click", () => {
      const i = Number(s.dataset.i);
      if (i === next) {
        s.classList.add("lit");
        next++;
        if (next === steps.length) $("sigCompare")?.classList.add("show");
      } else if (i > next) {
        s.style.animation = "shake 0.3s ease";
        setTimeout(() => s.style.animation = "", 350);
      }
    });
  });
}

/* ============ RENDER STAGE ============ */
function renderStage(index) {
  if (index < 0 || index >= LECT3_STAGES.length) return;
  lect3State.current = index;
  const stage = LECT3_STAGES[index];
  lect3State.visited.add(stage.id);
  saveLect3State();
  updateProgressUI();

  let widgetHtml = "";
  if (stage.interactiveType === "cia_sorter") widgetHtml = renderCiaWidget();
  else if (stage.interactiveType === "auth_lab") widgetHtml = renderAuthWidget();
  else if (stage.interactiveType === "fraud_identifier") widgetHtml = renderFraudWidget();
  else if (stage.interactiveType === "encryption_lab") widgetHtml = renderEncryptionWidget();
  else if (stage.interactiveType === "signature_lab") widgetHtml = renderSignatureWidget();

  const isAr = currentLang === 'ar';

  // Split story: cards & leads stay in the 2-col grid; wide reference
  // blocks (figures, callouts) span full width below so no empty void
  // is left beside the visual column on long stages.
  const gridItems = [];
  const wideItems = [];
  stage.story.forEach(item => {
    const t = item.trim();
    if (t.startsWith('<figure') || t.includes('editorial-callout') || t.includes('<table')) wideItems.push(t);
    else gridItems.push(t);
  });
  const renderItem = (t) => {
    if (t.startsWith('<div') || t.startsWith('<ul') || t.startsWith('<ol') || t.startsWith('<blockquote') || t.startsWith('<section') || t.startsWith('<p')) return t;
    return `<p class="story-lead">${t}</p>`;
  };

  stagePanel.innerHTML = `
    <div class="stage-header">
      <div class="stage-eyebrow">
        <span class="stage-category">${stage.category}</span>
        <span class="stage-num">${isAr ? 'محطة ' + String(index + 1).padStart(2,'0') + ' من ' + String(LECT3_STAGES.length).padStart(2,'0') : 'Stage ' + String(index + 1).padStart(2,'0') + ' / ' + String(LECT3_STAGES.length).padStart(2,'0')}</span>
      </div>
      <h2 class="stage-title"><span>${stage.glyph}</span> <span>${stage.title}</span></h2>
      <p class="stage-tagline">${stage.tagline}</p>
    </div>
    <div class="stage-grid">
      <div class="stage-text">
        ${gridItems.map(renderItem).join("")}
        ${widgetHtml}
      </div>
      <div class="stage-visual-container">
        <div class="stage-visual-box">
          <img src="${stage.image}" alt="${stage.title}" class="stage-img">
          <p class="stage-caption">${stage.visualCaption}</p>
        </div>
        <div class="fact-grid">
          <div class="fact-item highlight-takeaway">
            <h4>💡 ${isAr ? "الخلاصة الذهبية" : "Core Takeaway"}</h4>
            <p>${stage.takeaway}</p>
          </div>
          <div class="fact-item fun-fact">
            <h4>🎉 ${isAr ? "معلومة إثرائية" : "Fun Fact"}</h4>
            <p>${stage.funFact}</p>
          </div>
        </div>
      </div>
    </div>
    ${wideItems.length ? `<div class="stage-wide">${wideItems.join("")}</div>` : ""}
    <div class="stage-quiz" id="stageQuizBox">
      <h3 class="quiz-question"><span>🧠</span> ${isAr ? "سؤال التحدي السريع:" : "Quick Challenge Check:"} ${stage.quiz.question}</h3>
      <div class="quiz-options-list">
        ${stage.quiz.options.map((opt, optIdx) => `<button class="quiz-btn" data-opt="${optIdx}">${opt}</button>`).join("")}
      </div>
      <div class="quiz-feedback-box" id="quizFeedback"></div>
    </div>
  `;

  if (stage.interactiveType === "cia_sorter") initCiaEvents();
  else if (stage.interactiveType === "auth_lab") initAuthEvents();
  else if (stage.interactiveType === "fraud_identifier") initFraudEvents();
  else if (stage.interactiveType === "encryption_lab") initEncryptionEvents();
  else if (stage.interactiveType === "signature_lab") initSignatureEvents();

  const quizBtns = stagePanel.querySelectorAll(".quiz-btn");
  const fbBox = stagePanel.querySelector("#quizFeedback");
  quizBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = parseInt(btn.dataset.opt, 10);
      quizBtns.forEach(b => b.disabled = true);
      if (selected === stage.quiz.answer) {
        btn.classList.add("correct");
        fbBox.className = "quiz-feedback-box good";
        fbBox.innerHTML = `✓ ${isAr ? "إجابة صحيحة ومتميزة!" : "Correct answer!"} ${stage.quiz.explain}`;
      } else {
        btn.classList.add("wrong");
        quizBtns[stage.quiz.answer].classList.add("correct");
        fbBox.className = "quiz-feedback-box bad";
        fbBox.innerHTML = `✕ ${isAr ? "إجابة خاطئة!" : "Incorrect."} ${stage.quiz.explain}`;
      }
    });
  });

  if ($("prevBtn")) $("prevBtn").disabled = (index === 0);
  if ($("nextBtn")) {
    const isLast = (index === LECT3_STAGES.length - 1);
    $("nextBtn").textContent = isLast
      ? (isAr ? "🏁 الانتقال للتحدي الختامي" : "🏁 Go to Final Challenge")
      : (isAr ? "المحطة التالية &rarr;" : "Next Stop &rarr;");
  }
}

function goToStage(idx) {
  renderStage(idx);
  stagePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ============ FINAL MATCH GAME ============ */
let selectedMatchCard = null;
let matchedPairs = 0;

function renderFinalMatchGame() {
  const board = $("matchBoard");
  if (!board) return;
  board.innerHTML = "";
  selectedMatchCard = null;
  matchedPairs = 0;
  $("matchResult")?.classList.add("hidden");

  const cards = [];
  LECT3_MATCH_ITEMS.forEach(item => {
    cards.push({ id: item.id, text: item.concept, type: "concept" });
    cards.push({ id: item.id, text: item.match, type: "match" });
  });
  cards.sort(() => Math.random() - 0.5);
  const isAr = currentLang === 'ar';

  cards.forEach(card => {
    const cardBtn = document.createElement("button");
    cardBtn.className = "match-card";
    cardBtn.dataset.id = card.id;
    cardBtn.dataset.type = card.type;
    cardBtn.innerHTML = `<span>${card.text}</span>`;
    cardBtn.addEventListener("click", () => {
      if (cardBtn.classList.contains("matched")) return;
      if (!selectedMatchCard) {
        selectedMatchCard = cardBtn;
        cardBtn.classList.add("selected");
      } else if (selectedMatchCard === cardBtn) {
        cardBtn.classList.remove("selected");
        selectedMatchCard = null;
      } else {
        if (selectedMatchCard.dataset.id === cardBtn.dataset.id && selectedMatchCard.dataset.type !== cardBtn.dataset.type) {
          selectedMatchCard.classList.remove("selected");
          selectedMatchCard.classList.add("matched");
          cardBtn.classList.add("matched");
          matchedPairs++;
          selectedMatchCard = null;
          if (matchedPairs === LECT3_MATCH_ITEMS.length) {
            $("matchResult").classList.remove("hidden");
            $("matchResult").innerHTML = isAr
              ? `🏆 <strong>إنجاز رائع!</strong> لقد طابقت جميع مفاهيم الأمن والتشفير بنجاح!`
              : `🏆 <strong>Outstanding!</strong> You matched all Security & Encryption concepts perfectly!`;
          }
        } else {
          selectedMatchCard.classList.remove("selected");
          cardBtn.classList.add("selected");
          setTimeout(() => cardBtn.classList.remove("selected"), 400);
          selectedMatchCard = null;
        }
      }
    });
    board.appendChild(cardBtn);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildTopicNavigation();
  updateProgressUI();
  $("startLectureBtn")?.addEventListener("click", () => {
    $("lectureExperience").classList.remove("hidden");
    renderStage(lect3State.visited.size >= LECT3_STAGES.length ? lect3State.current : 0);
    document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth" });
  });
  $("prevBtn")?.addEventListener("click", () => {
    if (lect3State.current > 0) goToStage(lect3State.current - 1);
  });
  $("nextBtn")?.addEventListener("click", () => {
    if (lect3State.current === LECT3_STAGES.length - 1) {
      $("finalChallengeSection").classList.remove("hidden");
      renderFinalMatchGame();
      document.getElementById("finalChallengeSection").scrollIntoView({ behavior: "smooth" });
    } else {
      goToStage(lect3State.current + 1);
    }
  });
  $("resetMatchBtn")?.addEventListener("click", () => {
    $("matchResult").classList.add("hidden");
    renderFinalMatchGame();
  });
});

window.addEventListener('langChanged', () => {
  LECT3_STAGES = currentLang === 'ar' ? LECT3_STAGES_AR : LECT3_STAGES_EN;
  LECT3_MATCH_ITEMS = currentLang === 'ar' ? LECT3_MATCH_ITEMS_AR : LECT3_MATCH_ITEMS_EN;
  buildTopicNavigation();
  updateProgressUI();
  if (!$("lectureExperience")?.classList.contains("hidden")) renderStage(lect3State.current);
  if (!$("finalChallengeSection")?.classList.contains("hidden")) renderFinalMatchGame();
});
