const LECT1_STORE_KEY = "origin-lect1-progress";
let LECT1_STAGES = currentLang === 'ar' ? LECT1_STAGES_AR : LECT1_STAGES_EN;
let LECT1_MATCH_ITEMS = currentLang === 'ar' ? LECT1_MATCH_ITEMS_AR : LECT1_MATCH_ITEMS_EN;

let lect1State = {
  current: 0,
  visited: new Set()
};

try {
  const saved = JSON.parse(localStorage.getItem(LECT1_STORE_KEY));
  if (saved && Array.isArray(saved.visited)) lect1State.visited = new Set(saved.visited);
} catch (e) {}

function saveLect1State() {
  localStorage.setItem(LECT1_STORE_KEY, JSON.stringify({ visited: [...lect1State.visited] }));
}

const $ = (id) => document.getElementById(id);
const stagePanel = $("stagePanel");
const topicNodes = $("topicNodes");

function buildTopicNavigation() {
  if (!topicNodes) return;
  topicNodes.innerHTML = "";
  LECT1_STAGES.forEach((stage, i) => {
    const chip = document.createElement("button");
    chip.className = "topic-node";
    chip.innerHTML = `<span>${stage.glyph}</span> <span>${stage.title}</span>`;
    chip.addEventListener("click", () => goToStage(i));
    topicNodes.appendChild(chip);
  });
}

function updateProgressUI() {
  const chips = topicNodes.children;
  for (let i = 0; i < LECT1_STAGES.length; i++) {
    if (chips[i]) {
      chips[i].classList.toggle("visited", lect1State.visited.has(LECT1_STAGES[i].id));
      chips[i].classList.toggle("active", i === lect1State.current);
    }
  }
  const pct = Math.round((lect1State.visited.size / LECT1_STAGES.length) * 100);
  $("progressFill").style.width = pct + "%";
  $("progressLabel").textContent = pct + "%";
}

/* ========================================================
   WIDGET BUILDERS
   ======================================================== */

// 1. DIKW Interactive Pipeline
function renderDikwWidget() {
  const isAr = currentLang === 'ar';
  const presets = [
    {
      title: isAr ? "درجات الطلاب" : "Student Test Scores",
      data: isAr ? "٧٥ - ٨٠ - ٩٠ (أرقام خام)" : "75 - 80 - 90 (Raw numbers)",
      info: isAr ? "درجات طالب في ٣ اختبارات، متوسط الدرجات = ٨١.٦٧%" : "Student exam scores in 3 tests. Average = 81.67%",
      know: isAr ? "الطالب مستواه جيد ويحتاج فقط مراجعة بعض النقاط لتخطي الـ ٩٠%" : "Student is proficient and needs targeted review to exceed 90%"
    },
    {
      title: isAr ? "حرارة الطقس" : "Weather Sensor",
      data: isAr ? "٤٢ (رقم مجرد)" : "42 (Standalone integer)",
      info: isAr ? "درجة الحرارة في الظهيرة ٤٢° مئوية في الصيف" : "Afternoon outdoor temperature is 42°C in peak summer",
      know: isAr ? "يجب تجنب التعرض المباشر للشمس وشرب كميات وفيرة من المياه" : "Avoid direct midday sun exposure and drink abundant water"
    }
  ];

  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔄</span> ${isAr ? "مختبر تحويل البيانات إلى معلومات ومعرفة" : "Interactive DIKW Pipeline Lab"}
      </div>
      <p style="font-size:0.9rem; color:var(--ink-soft); margin-bottom:12px;">
        ${isAr ? "اختر سيناريو لتشاهد كيف تتحول الأرقام الصامتة إلى قرارات ذكية:" : "Select a scenario to watch raw data transform into actionable intelligence:"}
      </p>
      <div style="display:flex; gap:8px; margin-bottom:14px;">
        ${presets.map((p, idx) => `
          <button class="btn btn-sm dikw-preset-btn ${idx === 0 ? 'btn-primary' : ''}" data-idx="${idx}">
            ${p.title}
          </button>
        `).join("")}
      </div>
      <div class="dikw-pipeline">
        <div class="dikw-step active" id="dikwStepData">
          <div class="dikw-step-icon">🔢</div>
          <div class="dikw-step-title">${isAr ? "١. البيانات (Data)" : "1. Data"}</div>
          <div class="dikw-step-desc">${isAr ? "حقائق خام" : "Raw facts"}</div>
        </div>
        <div class="dikw-arrow">➔</div>
        <div class="dikw-step active" id="dikwStepInfo">
          <div class="dikw-step-icon">📊</div>
          <div class="dikw-step-title">${isAr ? "٢. المعلومات (Info)" : "2. Information"}</div>
          <div class="dikw-step-desc">${isAr ? "سياق وقيمة" : "Context & value"}</div>
        </div>
        <div class="dikw-arrow">➔</div>
        <div class="dikw-step active" id="dikwStepKnow">
          <div class="dikw-step-icon">🧠</div>
          <div class="dikw-step-title">${isAr ? "٣. المعرفة (Knowledge)" : "3. Knowledge"}</div>
          <div class="dikw-step-desc">${isAr ? "فعل وحل مشكلات" : "Action & solution"}</div>
        </div>
      </div>
      <div class="dikw-demo-box">
        <div id="dikwOutput" class="dikw-live-output">
          <strong>${isAr ? "البيانات:" : "Data:"}</strong> &nbsp;${presets[0].data}<br>
          <strong>${isAr ? "المعلومة:" : "Info:"}</strong> &nbsp;${presets[0].info}<br>
          <strong>${isAr ? "المعرفة:" : "Knowledge:"}</strong> &nbsp;${presets[0].know}
        </div>
      </div>
    </div>
  `;
}

// 2. Characteristics Simulator
function renderCharacteristicsWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🌐</span> ${isAr ? "محاكي خصائص المعلومات الرقمية" : "Digital Information Superpowers Simulator"}
      </div>
      <div class="chars-tabs">
        <button class="char-tab-btn active" data-sim="persist">
          ${isAr ? "١. الاستمرارية (Persistence)" : "1. Persistence"}
        </button>
        <button class="char-tab-btn" data-sim="reproduce">
          ${isAr ? "٢. التكرار (Reproducibility)" : "2. Reproducibility"}
        </button>
        <button class="char-tab-btn" data-sim="propagate">
          ${isAr ? "٣. الانتشار (Propagation)" : "3. Propagation"}
        </button>
      </div>
      <div class="char-screen" id="charSimScreen">
        <!-- Injected dynamically -->
      </div>
    </div>
  `;
}

function updateCharSim(simType) {
  const screen = $("charSimScreen");
  if (!screen) return;
  const isAr = currentLang === 'ar';

  if (simType === "persist") {
    screen.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span>${isAr ? "منشورك على البروفايل: [ صورة خاصة 🖼️ ]" : "Your Post: [ Private Photo 🖼️ ]"}</span>
          <button class="btn btn-sm btn-primary" id="deletePostBtn">${isAr ? "اضغط حذف Delete 🗑️" : "Click Delete 🗑️"}</button>
        </div>
        <div id="persistLog" style="font-size:0.88rem; color:var(--ink-soft); line-height:1.6; border-top:1px solid var(--line); padding-top:8px;">
          ${isAr ? "📌 المنشور متاح الآن على الخادم العام." : "📌 Post is live on public servers."}
        </div>
      </div>
    `;
    const delBtn = screen.querySelector("#deletePostBtn");
    delBtn.addEventListener("click", () => {
      delBtn.disabled = true;
      const log = screen.querySelector("#persistLog");
      log.innerHTML = `
        <span style="color:var(--red); font-weight:800;">${isAr ? "❌ حذفت المنشور من حسابك!" : "❌ Deleted from your profile!"}</span><br>
        <span style="color:var(--amber);">⚠️ ${isAr ? "لكن: محركات البحث أرشفته في الكاش + ٣ أشخاص أخذوا Screenshots + الخادم محتفظ بنسخة احتياطية!" : "However: Search engines cached it + 3 users took screenshots + Backup servers retain copies!"}</span><br>
        <strong style="color:var(--green);">🎯 ${isAr ? "النتيجة: الاستمرارية (Persistence) تجعل المحتوى لا يختفي بسهولة." : "Conclusion: Digital Persistence preserves data across mirrors."}</strong>
      `;
    });
  } else if (simType === "reproduce") {
    let copies = 1;
    screen.innerHTML = `
      <div style="text-align:center;">
        <p style="margin-bottom:10px;">
          ${isAr ? "الملف الرقمي الأصلي (كتاب PDF أو بحث):" : "Original Digital Master File (PDF or Document):"}
        </p>
        <div style="font-size:2rem; margin:10px 0;" id="copiesEmoji">📄</div>
        <p style="font-weight:800; font-size:1.1rem;" id="copiesCount">${isAr ? "عدد النسخ المتطابقة: ١" : "Identical Copies: 1"}</p>
        <button class="btn btn-primary" id="cloneBtn" style="margin-top:10px;">
          ${isAr ? "اضغط للنسخ المضاعف ⚡ (Clone x10)" : "Click to Clone x10 ⚡"}
        </button>
      </div>
    `;
    const cloneBtn = screen.querySelector("#cloneBtn");
    cloneBtn.addEventListener("click", () => {
      copies *= 10;
      screen.querySelector("#copiesCount").textContent = isAr ? `عدد النسخ المتطابقة: ${copies.toLocaleString()}` : `Identical Copies: ${copies.toLocaleString()}`;
      screen.querySelector("#copiesEmoji").textContent = "📄".repeat(Math.min(copies, 12)) + (copies > 12 ? " ➕..." : "");
    });
  } else if (simType === "propagate") {
    let reach = 1;
    screen.innerHTML = `
      <div style="text-align:center;">
        <p style="margin-bottom:8px;">${isAr ? "خبر أو منشور يتم مشاركته عبر الشبكة:" : "A news post being broadcast across networks:"}</p>
        <div style="font-size:1.6rem; color:var(--accent); margin:8px 0;" id="propagateTree">👤</div>
        <p style="font-weight:800; font-size:1.1rem; color:var(--purple);" id="reachCount">
          ${isAr ? "عدد الأشخاص الذين وصلت لهم المعلومة: ١" : "Audience reached: 1 person"}
        </p>
        <button class="btn btn-primary" id="shareViralBtn" style="margin-top:10px;">
          ${isAr ? "اضغط مشاركة Share 📢 (x5)" : "Click Share 📢 (x5)"}
        </button>
      </div>
    `;
    const shareBtn = screen.querySelector("#shareViralBtn");
    shareBtn.addEventListener("click", () => {
      reach *= 5;
      screen.querySelector("#reachCount").textContent = isAr 
        ? `عدد الأشخاص الذين وصلت لهم المعلومة: ${reach.toLocaleString()} مستخدم 🌍`
        : `Audience reached: ${reach.toLocaleString()} global users 🌍`;
      screen.querySelector("#propagateTree").textContent = "👤 ".repeat(Math.min(Math.floor(Math.log10(reach) + 1) * 3, 15));
    });
  }
}

// 3. Cross-Checking Lab
function renderCrossCheckerWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔍</span> ${isAr ? "مختبر التحقق المتبادل (Cross-Checking Lab)" : "Cross-Checking Credibility Lab"}
      </div>
      <p style="font-size:0.9rem; color:var(--ink-soft);">
        ${isAr ? "وصلك خبر: 'تأجيل الامتحانات أسبوعين بسبب الأمطار'. افحص المصادر الثلاثة للوصول للحقيقة:" : "You received a headline: 'Exams postponed by 2 weeks'. Inspect all 3 sources to uncover the verified truth:"}
      </p>
      <div class="sources-grid">
        <div class="source-card" data-src="1">
          <span class="source-badge badge-rumor">${isAr ? "جروب واتساب غير موثق" : "Unverified Chat Group"}</span>
          <p style="font-size:0.9rem; font-weight:700;">${isAr ? "📢 'عاجل وهام: تأجيل كل الامتحانات رسمياً!'" : "📢 'URGENT: All exams postponed!'"}</p>
        </div>
        <div class="source-card" data-src="2">
          <span class="source-badge badge-official">${isAr ? "الصفحة الرسمية للوزارة" : "Official Ministry Portal"}</span>
          <p style="font-size:0.9rem; font-weight:700;">${isAr ? "🏛️ 'الامتحانات في مواعيدها المحددة ولا صحة للشائعات.'" : "🏛️ 'Exams proceed as scheduled; rumors denied.'"}</p>
        </div>
        <div class="source-card" data-src="3">
          <span class="source-badge badge-academic">${isAr ? "موقع المدرسة الرسمي" : "Official School Site"}</span>
          <p style="font-size:0.9rem; font-weight:700;">${isAr ? "🏫 'جدول الامتحانات معتمد ولا تعديل.'" : "🏫 'Exam schedule confirmed without changes.'"}</p>
        </div>
      </div>
      <div id="crossCheckVerdict" style="padding:10px; background:var(--card); border-radius:8px; font-weight:700; font-size:0.92rem; color:var(--accent);">
        ${isAr ? "👉 اضغط على المصادر لمقارنتها." : "👉 Click the sources to compare findings."}
      </div>
    </div>
  `;
}

// 4. Media Classification Lab
function renderMediaSorterWidget() {
  const isAr = currentLang === 'ar';
  const items = isAr ? [
    { name: "فيديو 4K", type: "exp" },
    { name: "كابل فايبر نت", type: "trans" },
    { name: "فلاش ميموري USB", type: "rec" },
    { name: "تسجيل صوتي", type: "exp" },
    { name: "قمر صناعي وبث راديو", type: "trans" },
    { name: "تخزين سحابي Cloud", type: "rec" }
  ] : [
    { name: "4K Video Clip", type: "exp" },
    { name: "Fiber Optic Cable", type: "trans" },
    { name: "USB Flash Drive", type: "rec" },
    { name: "Voice Audio", type: "exp" },
    { name: "Satellite Broadcast", type: "trans" },
    { name: "Cloud Storage Vault", type: "rec" }
  ];

  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🗂️</span> ${isAr ? "تحدي تصنيف أنواع الوسائط (Media Sorter)" : "Media Types Classification Lab"}
      </div>
      <p style="font-size:0.9rem; color:var(--ink-soft);">
        ${isAr ? "اضغط على أي عنصر لتصنيفه في مكانه الصحيح:" : "Click any item below to classify it into its correct media container:"}
      </p>
      <div class="media-items-pool" id="mediaPool">
        ${items.map(it => `<button class="draggable-item" data-type="${it.type}">${it.name}</button>`).join("")}
      </div>
      <div class="media-categories-row">
        <div class="media-bucket" id="bucketExp">
          <h5>🎨 ${isAr ? "وسائط التعبير" : "Expression Media"}</h5>
          <div class="bucket-content" style="font-size:0.85rem;"></div>
        </div>
        <div class="media-bucket" id="bucketTrans">
          <h5>📡 ${isAr ? "وسائط النقل والإرسال" : "Transmission Media"}</h5>
          <div class="bucket-content" style="font-size:0.85rem;"></div>
        </div>
        <div class="media-bucket" id="bucketRec">
          <h5>💾 ${isAr ? "وسائط التسجيل والتخزين" : "Recording Media"}</h5>
          <div class="bucket-content" style="font-size:0.85rem;"></div>
        </div>
      </div>
    </div>
  `;
}

// 5. Geotag EXIF Inspector
function renderGeotagWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>📍</span> ${isAr ? "فاحص العلامات الجغرافية المخفية (Geotag Inspector)" : "EXIF Geotag Metadata Inspector"}
      </div>
      <div class="exif-card">
        <div class="exif-preview">
          <img src="assets/images/digital_ethics.jpg" style="width:100%; height:100%; object-fit:cover; opacity:0.85;" alt="Photo">
          <div style="position:absolute; background:rgba(0,0,0,0.7); padding:4px 10px; border-radius:20px; font-size:0.8rem; color:#fff;">
            📸 photo_home.jpg
          </div>
        </div>
        <div class="exif-data-rows">
          <div class="exif-row">
            <span>${isAr ? "الكاميرا:" : "Device:"}</span> <strong>iPhone 15 Pro</strong>
          </div>
          <div class="exif-row">
            <span>${isAr ? "التاريخ والوقت:" : "Timestamp:"}</span> <strong>2026-08-27 15:30:12</strong>
          </div>
          <div class="exif-row exif-danger">
            <span>${isAr ? "إحداثيات GPS:" : "GPS Coordinates:"}</span> <strong>30.0444° N, 31.2357° E 📍</strong>
          </div>
          <div class="exif-row exif-danger">
            <span>${isAr ? "الموقع التقريبي:" : "Deduced Location:"}</span> <strong>${isAr ? "شارع التحرير، القاهرة، مصر" : "Tahrir St, Cairo, Egypt"}</strong>
          </div>
          <p style="font-size:0.82rem; color:var(--red); margin-top:6px; font-weight:700;">
            ⚠️ ${isAr ? "تحذير أمني: الصورة تكشف موقع منزلك بدقة لأي شخص يحملها!" : "Security Alert: This image reveals your exact residence coordinates to anyone downloading it!"}
          </p>
        </div>
      </div>
    </div>
  `;
}

// 6. Dilemma Simulator
function renderDilemmaWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🎯</span> ${isAr ? "مختبر القرارات الأخلاقية الواقعية" : "Real-World Ethical Dilemma Simulator"}
      </div>
      <div class="dilemma-box">
        <p class="dilemma-scenario">
          ${isAr 
            ? "💡 الموقف: زميل لك أرسل لك لقطة شاشة (Screenshot) لمحادثة خاصة بين طالبين وقال لك: 'انشرها في جروب الفصل عشان نضحك سوا'." 
            : "💡 Scenario: A classmate sends you a private screenshot of a chat between two peers and asks: 'Post this in our school group for fun'."}
        </p>
        <div class="dilemma-choices">
          <button class="choice-btn" data-correct="true">
            ✅ ${isAr ? "أرفض النشر فوراً وأنصح زميلي باحترام خصوصية الآخرين وعدم تداول أسرارهم." : "Refuse immediately and advise my classmate to respect private correspondence."}
          </button>
          <button class="choice-btn" data-correct="false">
            ❌ ${isAr ? "أنشرها بسرعة لأنني لست من أخذ لقطة الشاشة ولا أتحمل المسؤولية." : "Post it anyway because I was not the one who took the screenshot."}
          </button>
        </div>
        <div id="dilemmaFeedback" style="margin-top:12px; font-weight:700; font-size:0.95rem;"></div>
      </div>
    </div>
  `;
}

/* ========================================================
   RENDER STAGE
   ======================================================== */
function renderStage(i) {
  const stage = LECT1_STAGES[i];
  lect1State.current = i;
  lect1State.visited.add(stage.id);
  saveLect1State();

  let widgetHTML = "";
  if (stage.interactiveType === "pipeline") widgetHTML = renderDikwWidget();
  else if (stage.interactiveType === "characteristics_sim") widgetHTML = renderCharacteristicsWidget();
  else if (stage.interactiveType === "cross_checker") widgetHTML = renderCrossCheckerWidget();
  else if (stage.interactiveType === "media_sorter") widgetHTML = renderMediaSorterWidget();
  else if (stage.interactiveType === "geotag_inspector") widgetHTML = renderGeotagWidget();
  else if (stage.interactiveType === "dilemma_sim") widgetHTML = renderDilemmaWidget();

  const isAr = currentLang === 'ar';

  stagePanel.innerHTML = `
    <div class="stage-header">
      <div class="stage-eyebrow">
        <span class="stage-category">${stage.category}</span>
        <span class="stage-num">${isAr ? 'محطة ' + String(i + 1).padStart(2,'0') + ' من ' + String(LECT1_STAGES.length).padStart(2,'0') : 'Stage ' + String(i + 1).padStart(2,'0') + ' / ' + String(LECT1_STAGES.length).padStart(2,'0')}</span>
      </div>
      <h2 class="stage-title"><span>${stage.glyph}</span> <span>${stage.title}</span></h2>
      <p class="stage-tagline">${stage.tagline}</p>
    </div>

    <div class="stage-grid">
      <div class="stage-text">
        ${stage.story.map(p => `<p>${p}</p>`).join("")}
        ${widgetHTML}
      </div>

      <div class="stage-visual-container">
        <div class="stage-visual-box">
          <img src="${stage.image}" alt="${stage.title}" class="stage-img">
          <p class="stage-caption">${stage.visualCaption}</p>
        </div>

        <div class="fact-grid">
          <div class="fact-item highlight-takeaway">
            <h4>🎯 ${isAr ? "الخلاصة الذهبية" : "Core Takeaway"}</h4>
            <p>${stage.takeaway}</p>
          </div>
          <div class="fact-item fun-fact">
            <h4>💡 ${isAr ? "هل تعلم؟" : "Did You Know?"}</h4>
            <p>${stage.funFact}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="stage-quiz">
      <h4 class="quiz-question"><span>🧠</span> ${isAr ? "سؤال التحدي السريع:" : "Quick Challenge Check:"} ${stage.quiz.question}</h4>
      <div class="quiz-options-list">
        ${stage.quiz.options.map((opt, idx) => `
          <button class="quiz-btn" data-idx="${idx}">${opt}</button>
        `).join("")}
      </div>
      <div class="quiz-feedback-box" aria-live="polite"></div>
    </div>
  `;

  // Bind Quiz
  const quizBtns = stagePanel.querySelectorAll(".quiz-btn");
  const quizFb = stagePanel.querySelector(".quiz-feedback-box");
  quizBtns.forEach(btn => {
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
        : (isAr ? "❌ محاولة جيدة — الإجابة الصحيحة محددة بالأخضر. " : "❌ Not quite — the correct option is highlighted in green. ") + stage.quiz.explain;
      quizFb.className = "quiz-feedback-box " + (good ? "good" : "bad");
    });
  });

  // Bind DIKW Preset Buttons
  stagePanel.querySelectorAll(".dikw-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      stagePanel.querySelectorAll(".dikw-preset-btn").forEach(b => b.classList.remove("btn-primary"));
      btn.classList.add("btn-primary");
      const idx = Number(btn.dataset.idx);
      const isAr = currentLang === 'ar';
      const presets = [
        {
          data: isAr ? "٧٥ - ٨٠ - ٩٠ (أرقام خام)" : "75 - 80 - 90 (Raw numbers)",
          info: isAr ? "درجات طالب في ٣ اختبارات، متوسط الدرجات = ٨١.٦٧%" : "Student exam scores in 3 tests. Average = 81.67%",
          know: isAr ? "الطالب مستواه جيد ويحتاج فقط مراجعة بعض النقاط لتخطي الـ ٩٠%" : "Student is proficient and needs targeted review to exceed 90%"
        },
        {
          data: isAr ? "٤٢ (رقم مجرد)" : "42 (Standalone integer)",
          info: isAr ? "درجة الحرارة في الظهيرة ٤٢° مئوية في الصيف" : "Afternoon outdoor temperature is 42°C in peak summer",
          know: isAr ? "يجب تجنب التعرض المباشر للشمس وشرب كميات وفيرة من المياه" : "Avoid direct midday sun exposure and drink abundant water"
        }
      ];
      $("dikwOutput").innerHTML = `
        <strong>${isAr ? "البيانات:" : "Data:"}</strong> &nbsp;${presets[idx].data}<br>
        <strong>${isAr ? "المعلومة:" : "Info:"}</strong> &nbsp;${presets[idx].info}<br>
        <strong>${isAr ? "المعرفة:" : "Knowledge:"}</strong> &nbsp;${presets[idx].know}
      `;
    });
  });

  // Bind Characteristics Tabs
  stagePanel.querySelectorAll(".char-tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      stagePanel.querySelectorAll(".char-tab-btn").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      updateCharSim(tab.dataset.sim);
    });
  });
  if (stage.interactiveType === "characteristics_sim") {
    updateCharSim("persist");
  }

  // Bind Cross Checker
  stagePanel.querySelectorAll(".source-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("checked");
      const isAr = currentLang === 'ar';
      const checkedCount = stagePanel.querySelectorAll(".source-card.checked").length;
      const verdict = $("crossCheckVerdict");
      if (checkedCount >= 2) {
        verdict.innerHTML = `<span style="color:var(--green);">✅ ${isAr ? "نتيجة التحقق المتبادل: تم التأكد من الصفحة الرسمية أن الامتحانات في موعدها وأن خبر التأجيل شائعة لا أساس لها!" : "Cross-Checking Verdict: Verified via official channels that exams proceed as scheduled and rumors are false!"}</span>`;
      }
    });
  });

  // Bind Media Sorter
  stagePanel.querySelectorAll(".draggable-item").forEach(item => {
    item.addEventListener("click", () => {
      const type = item.dataset.type;
      let targetBucket = null;
      if (type === "exp") targetBucket = $("bucketExp");
      else if (type === "trans") targetBucket = $("bucketTrans");
      else if (type === "rec") targetBucket = $("bucketRec");

      if (targetBucket) {
        targetBucket.classList.add("highlight");
        const content = targetBucket.querySelector(".bucket-content");
        content.innerHTML += `<span style="display:inline-block; background:rgba(56,189,248,0.15); padding:3px 8px; border-radius:12px; margin:2px;">${item.textContent} ✅</span> `;
        item.remove();
      }
    });
  });

  // Bind Dilemma Simulator
  stagePanel.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.correct === "true";
      stagePanel.querySelectorAll(".choice-btn").forEach(b => b.disabled = true);
      const isAr = currentLang === 'ar';
      const fb = $("dilemmaFeedback");
      if (isCorrect) {
        btn.classList.add("correct");
        fb.innerHTML = `<span style="color:var(--green);">🏆 ${isAr ? "أحسنت! هذا هو السلوك الأخلاقي القويم الذي يحفظ خصوصية وكرامة زملائك." : "Excellent! This is the moral high ground that safeguards peers' dignity and privacy."}</span>`;
      } else {
        btn.classList.add("wrong");
        fb.innerHTML = `<span style="color:var(--red);">⚠️ ${isAr ? "تصرف خاطئ: نشر محادثات الآخرين انتهاك صارخ للأمانة والخصوصية." : "Incorrect: Broadcasting private chat records is a severe ethical and privacy breach."}</span>`;
      }
    });
  });

  // Navigation Buttons State
  $("prevBtn").disabled = i === 0;
  $("nextBtn").innerHTML = i === LECT1_STAGES.length - 1
    ? (isAr ? "🏁 الانتقال للتحدي الختامي &rarr;" : "🏁 Go to Final Challenge &rarr;")
    : (isAr ? "&larr; المحطة التالية" : "Next stage &rarr;");

  updateProgressUI();
}

function goToStage(i) {
  renderStage(i);
  document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ========================================================
   FINAL MATCH GAME
   ======================================================== */
let selectedMatchCard = null;
let matchedPairs = 0;

function renderFinalMatchGame() {
  const isAr = currentLang === 'ar';
  const board = $("matchBoard");
  if (!board) return;
  board.innerHTML = "";
  matchedPairs = 0;
  selectedMatchCard = null;

  // Flatten concepts and matches and shuffle
  const cards = [];
  LECT1_MATCH_ITEMS.forEach(item => {
    cards.push({ id: item.id, text: item.concept, type: "concept" });
    cards.push({ id: item.id, text: item.match, type: "match" });
  });
  cards.sort(() => Math.random() - 0.5);

  cards.forEach(c => {
    const cardBtn = document.createElement("button");
    cardBtn.className = "match-card";
    cardBtn.textContent = c.text;
    cardBtn.dataset.id = c.id;
    cardBtn.dataset.type = c.type;

    cardBtn.addEventListener("click", () => {
      if (cardBtn.classList.contains("matched")) return;

      if (!selectedMatchCard) {
        selectedMatchCard = cardBtn;
        cardBtn.classList.add("selected");
      } else if (selectedMatchCard === cardBtn) {
        selectedMatchCard.classList.remove("selected");
        selectedMatchCard = null;
      } else {
        // Compare
        if (selectedMatchCard.dataset.id === cardBtn.dataset.id && selectedMatchCard.dataset.type !== cardBtn.dataset.type) {
          selectedMatchCard.classList.remove("selected");
          selectedMatchCard.classList.add("matched");
          cardBtn.classList.add("matched");
          matchedPairs++;
          selectedMatchCard = null;

          if (matchedPairs === LECT1_MATCH_ITEMS.length) {
            $("matchResult").classList.remove("hidden");
            $("matchResult").innerHTML = isAr 
              ? `🏆 <strong>رائع جداً!</strong> لقد وفقت بين جميع مفاهيم وتعريفات الوحدة الأولى بنجاح تام!`
              : `🏆 <strong>Brilliant!</strong> You matched all Unit 1 core concepts and definitions perfectly!`;
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

/* ========================================================
   INITIALIZATION & LISTENERS
   ======================================================== */
document.addEventListener("DOMContentLoaded", () => {
  buildTopicNavigation();
  updateProgressUI();

  $("startLectureBtn")?.addEventListener("click", () => {
    $("lectureExperience").classList.remove("hidden");
    renderStage(lect1State.visited.size >= LECT1_STAGES.length ? lect1State.current : 0);
    document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth" });
  });

  $("prevBtn")?.addEventListener("click", () => {
    if (lect1State.current > 0) goToStage(lect1State.current - 1);
  });

  $("nextBtn")?.addEventListener("click", () => {
    if (lect1State.current === LECT1_STAGES.length - 1) {
      $("finalChallengeSection").classList.remove("hidden");
      renderFinalMatchGame();
      document.getElementById("finalChallengeSection").scrollIntoView({ behavior: "smooth" });
    } else {
      goToStage(lect1State.current + 1);
    }
  });

  $("resetMatchBtn")?.addEventListener("click", () => {
    $("matchResult").classList.add("hidden");
    renderFinalMatchGame();
  });
});

window.addEventListener('langChanged', () => {
  LECT1_STAGES = currentLang === 'ar' ? LECT1_STAGES_AR : LECT1_STAGES_EN;
  LECT1_MATCH_ITEMS = currentLang === 'ar' ? LECT1_MATCH_ITEMS_AR : LECT1_MATCH_ITEMS_EN;

  buildTopicNavigation();
  updateProgressUI();

  if (!$("lectureExperience")?.classList.contains("hidden")) {
    renderStage(lect1State.current);
  }

  if (!$("finalChallengeSection")?.classList.contains("hidden")) {
    renderFinalMatchGame();
  }
});
