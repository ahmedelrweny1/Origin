const LECT5_STORE_KEY = "origin-lect5-progress";
let LECT5_STAGES = (currentLang !== 'ar' && window.LECT5_STAGES_EN) ? window.LECT5_STAGES_EN : LECT5_STAGES_AR;
let LECT5_MATCH_ITEMS = (currentLang !== 'ar' && window.LECT5_MATCH_ITEMS_EN) ? window.LECT5_MATCH_ITEMS_EN : LECT5_MATCH_ITEMS_AR;

let lect5State = {
  current: 0,
  visited: new Set()
};

try {
  const saved = JSON.parse(localStorage.getItem(LECT5_STORE_KEY));
  if (saved && Array.isArray(saved.visited)) lect5State.visited = new Set(saved.visited);
  if (saved && Number.isInteger(saved.current)) lect5State.current = Math.min(Math.max(saved.current, 0), LECT5_STAGES.length - 1);
} catch (e) {}

function saveLect5State() {
  localStorage.setItem(LECT5_STORE_KEY, JSON.stringify({ visited: [...lect5State.visited], current: lect5State.current }));
}

const $ = (id) => document.getElementById(id);
const stagePanel = $("stagePanel");
const topicNodes = $("topicNodes");

/* ========================================================
   WIDGET STATE
   ======================================================== */
const lect5W = {
  fc: { idx: 0, comps: [] },
  iface: { idx: 0, defs: [] },
  tree: { step: -1 },
  driver: { step: -1 },
  and: { A: 0, B: 0 },
  onlab: { gate: "or", A: 0, B: 1 },
  half: { A: 0, B: 0 },
  full: { A: 0, B: 0, Cin: 0 }
};

function buildTopicNavigation() {
  if (!topicNodes) return;
  topicNodes.innerHTML = "";
  LECT5_STAGES.forEach((stage, i) => {
    const chip = document.createElement("button");
    chip.className = "topic-node";
    chip.innerHTML = `<span>${stage.glyph}</span> <span>${stage.title}</span>`;
    chip.addEventListener("click", () => goToStage(i));
    topicNodes.appendChild(chip);
  });
}

function updateProgressUI() {
  LectureShell.sync(LECT5_STAGES, lect5State.current, lect5State.visited);
  if (!topicNodes) return;
  const chips = topicNodes.children;
  for (let i = 0; i < LECT5_STAGES.length; i++) {
    if (chips[i]) {
      chips[i].classList.toggle("visited", lect5State.visited.has(LECT5_STAGES[i].id));
      chips[i].classList.toggle("active", i === lect5State.current);
    }
  }
  const pct = Math.round((lect5State.visited.size / LECT5_STAGES.length) * 100);
  if ($("progressFill")) $("progressFill").style.width = pct + "%";
  if ($("progressLabel")) $("progressLabel").textContent = pct + "%";
}

/* ========================================================
   WIDGET BUILDERS
   ======================================================== */

function renderComponentsMapWidget() {
  const isAr = currentLang === 'ar';
  lect5W.fc.comps = isAr ? [
    { icon: "🧠", name: "وحدة التحكم", role: "بتنفذ تعليمات الكمبيوتر وبتبعت أوامر لباقي الأجزاء", ex: "جزء من الـ CPU" },
    { icon: "📐", name: "وحدة الحساب", role: "مسؤولة عن الحسابات — جمع وطرح ومقارنات", ex: "جزء من الـ CPU" },
    { icon: "🧊", name: "الذاكرة الرئيسية", role: "بتخزن البرامج والبيانات مؤقتًا طول ما الجهاز شغال", ex: "Memory" },
    { icon: "💾", name: "التخزين (الذاكرة الثانوية)", role: "بتخزن لفترة طويلة — بتفضل شغالة حتى بعد ما تطفّي الجهاز", ex: "هارد ديسك • SSD • فلاشة USB" },
    { icon: "⌨️", name: "جهاز الإدخال", role: "يجيب المعلومات من برا الكمبيوتر", ex: "كيبورد • فأرة • سكانر" },
    { icon: "🖨️", name: "جهاز الإخراج", role: "يطلّع المعلومات برا الكمبيوتر", ex: "شاشة • طابعة" }
  ] : [
    { icon: "🧠", name: "Control Unit", role: "Executes computer instructions and sends commands to every part", ex: "Part of the CPU" },
    { icon: "📐", name: "Arithmetic Unit", role: "Responsible for calculations — add, subtract, compare", ex: "Part of the CPU" },
    { icon: "🧊", name: "Main Memory", role: "Stores programs and data temporarily while the machine is on", ex: "Memory (RAM)" },
    { icon: "💾", name: "Secondary Memory", role: "Long-term storage — keeps data even after power off", ex: "HDD • SSD • USB stick" },
    { icon: "⌨️", name: "Input Devices", role: "Receive information from outside the computer", ex: "Keyboard • Mouse • Scanner" },
    { icon: "🖨️", name: "Output Devices", role: "Send information out of the computer", ex: "Display • Printer" }
  ];
  const btns = lect5W.fc.comps.map((c, i) => `
    <button class="fc-btn${i === 0 ? " active" : ""}" data-idx="${i}" style="padding:6px 12px; border-radius:8px; border:1px solid var(--line); background:${i === 0 ? "var(--accent)" : "var(--card)"}; color:${i === 0 ? "#fff" : "var(--ink)"}; cursor:pointer; font-weight:600;">
      ${c.icon} ${c.name}
    </button>`).join("");
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🗺️</span> ${isAr ? "خريطة المكونات الخمسة — هات ما ينك" : "Five Components Map"}
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;">${btns}</div>
      <div class="ad-screen" id="fcScreen"></div>
    </div>
  `;
}

function updateFcMap() {
  const screen = $("fcScreen");
  if (!screen) return;
  const c = lect5W.fc.comps[lect5W.fc.idx];
  if (!c) return;
  screen.innerHTML = `
    <div style="text-align:center; padding:18px;">
      <div style="font-size:2.6rem; margin-bottom:8px;">${c.icon}</div>
      <p style="font-weight:800; margin-bottom:6px;">${c.name}</p>
      <p style="color:var(--ink-soft); font-size:0.92rem;">${c.role}</p>
      <div style="margin-top:12px; padding:8px 12px; background:var(--card); border-radius:8px; display:inline-block;">
        <strong>${currentLang === 'ar' ? "أمثلة:" : "Examples:"}</strong> ${c.ex}
      </div>
    </div>
  `;
}

function renderInterfacesWidget() {
  const isAr = currentLang === 'ar';
  lect5W.iface.defs = isAr ? [
    { name: "USB", icon: "🖱️", what: "أشهر واجهة في الأجهزة الملحقة بالكمبيوتر", who: "الطابعات • الكيبورد • الهارديسك الخارجي • فلاشات الذاكرة", how: "كل ما توصل فلاشة أو طابعة — الغالب دي USB" },
    { name: "HDMI", icon: "📺", what: "معيار بيبعت الفيديو والصوت مع بعض عبر كابل واحد", who: "التلفزيون الرقمي • أجهزة الصوت", how: "لو صلّت اللابتوب بتلفزيون بكابل واحد بيمشي فيه الصوت والصورة — ده HDMI" },
    { name: "Ethernet", icon: "🌐", what: "معيار الشبكات المحلية السلكية (LAN)", who: "الهاب • الراوتر", how: "الكابل اللي بيوصل جهازك بالراوتر في البيت — ده Ethernet" }
  ] : [
    { name: "USB", icon: "🖱️", what: "The most common interface for computer peripherals", who: "Printers • Keyboard • External HDD • USB sticks", how: "Whenever you plug a stick or printer — odds are it's USB" },
    { name: "HDMI", icon: "📺", what: "Sends video and audio together through one cable", who: "Digital TVs • Audio equipment", how: "Laptop to TV with a single video+audio cable — that's HDMI" },
    { name: "Ethernet", icon: "🌐", what: "The standard for wired local area networks (LAN)", who: "Hubs • Routers", how: "The cable between your PC and the home router — that's Ethernet" }
  ];
  const defs = lect5W.iface.defs;
  const btns = defs.map((d, i) => `
    <button class="iface-btn" data-idx="${i}" style="padding:6px 14px; border-radius:8px; border:1px solid var(--line); background:${i === 0 ? "var(--accent)" : "var(--card)"}; color:${i === 0 ? "#fff" : "var(--ink)"}; cursor:pointer; font-weight:600;">
      ${d.icon} ${d.name}
    </button>`).join("");
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔌</span> ${isAr ? "مستكشف الواجهات — اختار واجهة وشوف بتوصّل إيه" : "Interface Explorer"}
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;">${btns}</div>
      <div class="ad-screen" id="ifaceScreen"></div>
    </div>
  `;
}

function updateInterfaces() {
  const screen = $("ifaceScreen");
  if (!screen) return;
  const d = lect5W.iface.defs[lect5W.iface.idx];
  if (!d) return;
  screen.innerHTML = `
    <div style="text-align:center; padding:18px;">
      <div style="font-size:2.6rem; margin-bottom:8px;">${d.icon}</div>
      <p style="font-weight:800; margin-bottom:6px;">${d.name}</p>
      <p style="color:var(--ink-soft); font-size:0.92rem;">${d.what}</p>
      <div style="margin-top:12px; padding:8px 12px; background:var(--card); border-radius:8px;">
        <strong>${currentLang === 'ar' ? "بيشتغل مع:" : "Works with:"}</strong> ${d.who}
      </div>
      <div style="margin-top:8px; padding:8px 12px; background:var(--card); border-radius:8px;">
        🔍 ${d.how}
      </div>
    </div>
  `;
}

function renderSoftwareTreeWidget() {
  const isAr = currentLang === 'ar';
  const layers = isAr
    ? [
        { icon: "🤖", label: "برمجيات التطبيقات — فوق", note: "اللي بتخدمك مباشرة: Word وExcel والألعاب" },
        { icon: "⚙️", label: "برمجيات النظام — في الوسط (ومنها الـ OS)", note: "بتشغّل العتاد وتديره من غيرها الأول" },
        { icon: "🔩", label: "العتاد — الأساس", note: "القطع المادية: CPU والذاكرة والتخزين" }
      ]
    : [
        { icon: "🤖", label: "Application Software — top", note: "Serves you directly: Word, Excel, games" },
        { icon: "⚙️", label: "System Software — middle (incl. the OS)", note: "Runs and manages the hardware below" },
        { icon: "🔩", label: "Hardware — the base", note: "Physical parts: CPU, memory, storage" }
      ];
  lect5W.tree.layers = layers;
  const rows = layers.map((l, i) => `
    <div class="tree-layer" data-idx="${i}" style="padding:12px 16px; border-radius:10px; border:2px solid var(--line); background:var(--card); display:flex; align-items:center; gap:10px; opacity:0.55; transition:all .2s;">
      <span style="font-size:1.6rem;">${l.icon}</span>
      <div>
        <strong>${l.label}</strong>
        <p style="margin:2px 0 0; color:var(--ink-soft); font-size:0.85rem;">${l.note}</p>
      </div>
    </div>`).join("");
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🪜</span> ${isAr ? "بناء الطوابق الثلاثة — جرب الترتيب: الكمبيوتر مكوّن من تحت لفوق" : "The Three-Layer Stack"}
      </div>
      <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">${rows}</div>
      <button class="btn btn-primary" id="treeNextBtn" style="width:100%;">${isAr ? "➡️ اكشف الطبقة اللي بعدها" : "Reveal next layer"}</button>
      <p id="treeHint" style="margin-top:8px; color:var(--ink-soft); font-size:0.85rem; text-align:center;">
        ${isAr ? "القاعدة: التطبيقات ماتشتغلش غير فوق برمجيات النظام — Word مش هيفتح من غير ويندوز!" : "Applications only run on top of system software — Word cannot open without Windows!"}
      </p>
    </div>
  `;
}

function updateSoftwareTree() {
  const rows = document.querySelectorAll(".tree-layer");
  const btn = $("treeNextBtn");
  if (!rows.length) return;
  const isAr = currentLang === 'ar';
  const step = lect5W.tree.step;
  rows.forEach((row, i) => {
    if (step === -1 || i === step) {
      row.style.opacity = (step === -1) ? "0.55" : "1";
      row.style.borderColor = (i === step) ? "var(--accent)" : "var(--line)";
      row.style.boxShadow = (i === step) ? "0 0 0 3px rgba(56,189,248,0.25)" : "none";
    } else {
      row.style.opacity = "0.55";
      row.style.borderColor = "var(--line)";
      row.style.boxShadow = "none";
    }
  });
  if (btn) {
    if (step === -1) btn.textContent = isAr ? "➡️ اكشف الطبقة اللي بعدها" : "Reveal next layer";
    else if (step < 2) btn.textContent = isAr ? "➡️ برضه؟ كشف الطبقة اللي بعدها" : "Reveal next layer";
    else btn.textContent = isAr ? "✅ ده مبنى الكمبيوتر كله!" : "✅ That's the whole building!";
  }
}

function renderDriverFlowWidget() {
  const isAr = currentLang === 'ar';
  const steps = isAr
    ? [
        { icon: "🔌", label: "توصّل جهاز جديد بالكمبيوتر", note: "طابعة أو سكانر أو أي جهاز — أول مرة" },
        { icon: "🔎", label: "الـ Driver بيركب", note: "الكمبيوتر بيركب برنامج التحكم الخاص بالجهاز" },
        { icon: "🌐", label: "الترجمة بتبدأ", note: "الـ Driver بيترجم كلام الجهاز لكلام السوفتوير والويندوز" },
        { icon: "✅", label: "الجهاز اشتغل فورًا", note: "من غير أي إعدادات إضافية منك" }
      ]
    : [
        { icon: "🔌", label: "Plug in a new device", note: "A printer, scanner, or any device — first time" },
        { icon: "🔎", label: "The driver gets installed", note: "The computer installs the device's control program" },
        { icon: "🌐", label: "Translation begins", note: "The driver translates between the device and the software" },
        { icon: "✅", label: "The device works instantly", note: "No extra setup needed from you" }
      ];
  lect5W.driver.steps = steps;
  const rows = steps.map((s, i) => `
    <div class="driver-step" style="padding:10px 14px; border-radius:10px; border:2px solid var(--line); background:var(--card); display:flex; align-items:center; gap:10px; opacity:0.55;">
      <span style="font-size:1.5rem;">${s.icon}</span>
      <div>
        <strong>${isAr ? "خطوة " + (i + 1) + ": " : "Step " + (i + 1) + ": "}${s.label}</strong>
        <p style="margin:2px 0 0; color:var(--ink-soft); font-size:0.85rem;">${s.note}</p>
      </div>
    </div>`).join("");
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🎛️</span> ${isAr ? "رحلة الـ Driver — اضغط وشوف التتابع" : "Driver Flow"}
      </div>
      <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">${rows}</div>
      <button class="btn btn-primary" id="driverNextBtn" style="width:100%;">${isAr ? "▶️ ابدأ المحاكاة" : "Start simulation"}</button>
    </div>
  `;
}

function updateDriverFlow() {
  const rows = document.querySelectorAll(".driver-step");
  const btn = $("driverNextBtn");
  if (!rows.length) return;
  const isAr = currentLang === 'ar';
  const step = lect5W.driver.step;
  rows.forEach((row, i) => {
    if (step >= 0 && i <= step) {
      row.style.opacity = "1";
      row.style.borderColor = (i === step) ? "var(--accent)" : "var(--line)";
      row.style.boxShadow = (i === step) ? "0 0 0 3px rgba(56,189,248,0.25)" : "none";
    } else {
      row.style.opacity = "0.55";
      row.style.borderColor = "var(--line)";
      row.style.boxShadow = "none";
    }
  });
  if (btn) {
    if (step === -1) btn.textContent = isAr ? "▶️ ابدأ المحاكاة" : "Start simulation";
    else if (step < 3) btn.textContent = isAr ? "▶️ التالي" : "Next";
    else btn.textContent = isAr ? "🔄 إعادة المحاكاة" : "Restart simulation";
  }
}

/* --- Gate/Truth-table labs (AND, OR/NOT, Half Adder, Full Adder) --- */

function bitBtn(id, label, val) {
  return `
    <button class="gb-btn" data-key="${id}" style="padding:10px 18px; border-radius:10px; border:2px solid ${val ? "var(--accent)" : "var(--line)"}; background:${val ? "var(--accent)" : "var(--card)"}; color:${val ? "#fff" : "var(--ink)"}; cursor:pointer; font-weight:800; font-size:1rem;">
      ${label} = ${val}
    </button>`;
}

function renderGateLabWidget(kind) {
  const isAr = currentLang === 'ar';
  const titles = {
    and:      isAr ? "مختبر بوابة AND — ولّع المفتاحين" : "AND Gate Lab",
    ornot:    isAr ? "مختبر OR و NOT — اختار البوابة والمدخلات" : "OR / NOT Gate Lab",
    half:     isAr ? "محاكي نصف الجامع — اجمع 1 و 0" : "Half Adder Simulator",
    full:     isAr ? "محاكي الجامع الكامل — A + B + الحمل" : "Full Adder Simulator"
  };
  const icons = { and: "🚪", ornot: "🔀", half: "➕", full: "🔢" };

  let gateTabs = "";
  if (kind === "ornot") {
    gateTabs = `
      <div style="display:flex; gap:8px; margin-bottom:12px;">
        <button class="gk-btn" data-gate="or" style="padding:6px 16px; border-radius:8px; cursor:pointer; font-weight:700; border:2px solid ${lect5W.onlab.gate === "or" ? "var(--accent)" : "var(--line)"}; background:${lect5W.onlab.gate === "or" ? "var(--accent)" : "var(--card)"}; color:${lect5W.onlab.gate === "or" ? "#fff" : "var(--ink)"};">OR</button>
        <button class="gk-btn" data-gate="not" style="padding:6px 16px; border-radius:8px; cursor:pointer; font-weight:700; border:2px solid ${lect5W.onlab.gate === "not" ? "var(--accent)" : "var(--line)"}; background:${lect5W.onlab.gate === "not" ? "var(--accent)" : "var(--card)"}; color:${lect5W.onlab.gate === "not" ? "#fff" : "var(--ink)"};">NOT</button>
      </div>`;
  }

  const showA = kind !== "ornot" || lect5W.onlab.gate === "not";
  const showB = kind !== "ornot" || lect5W.onlab.gate === "or";

  let inputs = "";
  if (kind === "and") inputs = bitBtn("A", "A", lect5W.and.A) + bitBtn("B", "B", lect5W.and.B);
  else if (kind === "ornot") inputs = (showA ? bitBtn("A", "A", lect5W.onlab.A) : "") + (showB ? bitBtn("B", "B", lect5W.onlab.B) : "");
  else if (kind === "half") inputs = bitBtn("A", "A", lect5W.half.A) + bitBtn("B", "B", lect5W.half.B);
  else if (kind === "full") inputs = bitBtn("A", "A", lect5W.full.A) + bitBtn("B", "B", lect5W.full.B) + bitBtn("Cin", "Cin", lect5W.full.Cin);

  return `
    <div class="interactive-widget">
      <div class="widget-title"><span>${icons[kind]}</span> ${titles[kind]}</div>
      ${gateTabs}
      <div style="display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin-bottom:12px;">${inputs}</div>
      <div class="ad-screen" id="gateScreen"></div>
      <p style="margin-top:8px; color:var(--ink-soft); font-size:0.85rem; text-align:center;">
        ${isAr ? "دوس على أي مفتاح يقلب قيمته — المخرجات بتتحدث عطش في شاشة" : "Click any switch to flip its bit — outputs update live"}
      </p>
    </div>
  `;
}

function updateGateLab(kind) {
  const screen = $("gateScreen");
  if (!screen) return;
  const isAr = currentLang === 'ar';
  const lamp = (b) => b ? "🟢" : "⚫";
  const bitName = (b) => `<strong style="color:${b ? "#10b981" : "var(--ink-soft)"};">${b}</strong>`;

  let html = "";
  if (kind === "and") {
    const X = lect5W.and.A && lect5W.and.B ? 1 : 0;
    html = `${lamp(X)} ${isAr ? "المخرج" : "Output X"}: ${bitName(X)} — ${isAr ? (X ? "المفتاحين ولعوا فالمخرج 1" : "ولع مفتاح واحد بس؟ المخرج 0") : (X ? "Both inputs 1, so output is 1" : "Any input 0 keeps the output 0")}`;
  } else if (kind === "ornot") {
    if (lect5W.onlab.gate === "or") {
      const X = (lect5W.onlab.A || lect5W.onlab.B) ? 1 : 0;
      html = `${lamp(X)} ${isAr ? "OR →" : "OR →"} X = ${bitName(X)} — ${isAr ? (X ? "فيه مدخل 1 فالمخرج 1 — يكفي واحد" : "المدخلين 0 فالمخرج 0") : (X ? "At least one input is 1" : "Both inputs are 0")}`;
    } else {
      const X = lect5W.onlab.A ? 0 : 1;
      html = `${lamp(X)} ${isAr ? "NOT →" : "NOT →"} X = ${bitName(X)} — ${isAr ? (X ? "المدخل 0 فالمخرج عكسه: 1" : "المدخل 1 فالمخرج عكسه: 0") : (X ? "Input 0 inverted to 1" : "Input 1 inverted to 0")}`;
    }
  } else if (kind === "half") {
    const S = lect5W.half.A ^ lect5W.half.B;
    const C = lect5W.half.A && lect5W.half.B ? 1 : 0;
    html = `
      ${isAr ? "المجموع" : "Sum"} S: ${bitName(S)} &nbsp;&nbsp; ${isAr ? "الحمل" : "Carry"} C: ${bitName(C)}<br>
      <span style="color:var(--ink-soft); font-size:0.85rem;">${isAr ? "1+1 → اكتب 0 وارشّل 1 (S=0 وC=1) زي الورق بالظبط" : "1+1 → write 0 and carry 1 (S=0, C=1)"}</span>`;
  } else if (kind === "full") {
    const S = lect5W.full.A ^ lect5W.full.B ^ lect5W.full.Cin;
    const Cout = ((lect5W.full.A && lect5W.full.B) || (lect5W.full.Cin && (lect5W.full.A ^ lect5W.full.B))) ? 1 : 0;
    html = `
      ${isAr ? "المجموع" : "Sum"} S: ${bitName(S)} &nbsp;&nbsp; ${isAr ? "الحمل الخارج" : "Carry out"} Cout: ${bitName(Cout)}<br>
      <span style="color:var(--ink-soft); font-size:0.85rem;">${isAr ? "بيحسب A و B والحمل الجاي من العمود اللي قبله — زي الجمع على الورق" : "It adds A, B and the carry from the previous column"}</span>`;
  }
  screen.innerHTML = `<div style="text-align:center; padding:14px; font-size:1.05rem;">${html}</div>`;
}

/* ========================================================
   RENDER STAGE
   ======================================================== */
function renderStage(i) {
  const stage = LECT5_STAGES[i];
  lect5State.current = i;
  lect5State.visited.add(stage.id);
  saveLect5State();

  let widgetHTML = "";
  const GATE_KIND_MAP = { truth_table_lab: "and", or_not_lab: "ornot", half_adder_sim: "half", full_adder_sim: "full" };
  if (stage.interactiveType === "five_components_map") widgetHTML = renderComponentsMapWidget();
  else if (stage.interactiveType === "interface_matcher") widgetHTML = renderInterfacesWidget();
  else if (stage.interactiveType === "software_tree") widgetHTML = renderSoftwareTreeWidget();
  else if (stage.interactiveType === "driver_flow") widgetHTML = renderDriverFlowWidget();
  else if (GATE_KIND_MAP[stage.interactiveType]) widgetHTML = renderGateLabWidget(GATE_KIND_MAP[stage.interactiveType]);

  const isAr = currentLang === 'ar';

  stagePanel.innerHTML = `
    <div class="stage-header">
      <div class="stage-eyebrow">
        <span class="stage-category">${stage.category}</span>
        <span class="stage-num">${isAr ? 'محطة ' + String(i + 1).padStart(2,'0') + ' من ' + String(LECT5_STAGES.length).padStart(2,'0') : 'Stage ' + String(i + 1).padStart(2,'0') + ' / ' + String(LECT5_STAGES.length).padStart(2,'0')}</span>
      </div>
      <h2 class="stage-title"><span>${stage.glyph}</span> <span>${stage.title}</span></h2>
      <p class="stage-tagline">${stage.tagline}</p>
    </div>

    <div class="stage-text">
      ${stage.story.map(p => `<p>${p}</p>`).join("")}
      ${widgetHTML}
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

  // Bind widgets
  stagePanel.querySelectorAll(".fc-btn").forEach(b => {
    b.addEventListener("click", () => {
      lect5W.fc.idx = Number(b.dataset.idx);
      stagePanel.querySelectorAll(".fc-btn").forEach((x) => {
        const on = Number(x.dataset.idx) === lect5W.fc.idx;
        x.style.background = on ? "var(--accent)" : "var(--card)";
        x.style.color = on ? "#fff" : "var(--ink)";
        x.style.borderColor = on ? "var(--accent)" : "var(--line)";
      });
      updateFcMap();
    });
  });
  if (stage.interactiveType === "five_components_map") { lect5W.fc.idx = 0; updateFcMap(); }

  stagePanel.querySelectorAll(".iface-btn").forEach(b => {
    b.addEventListener("click", () => {
      lect5W.iface.idx = Number(b.dataset.idx);
      stagePanel.querySelectorAll(".iface-btn").forEach((x) => {
        const on = Number(x.dataset.idx) === lect5W.iface.idx;
        x.style.background = on ? "var(--accent)" : "var(--card)";
        x.style.color = on ? "#fff" : "var(--ink)";
        x.style.borderColor = on ? "var(--accent)" : "var(--line)";
      });
      updateInterfaces();
    });
  });
  if (stage.interactiveType === "interface_matcher") { lect5W.iface.idx = 0; updateInterfaces(); }

  const treeBtn = $("treeNextBtn");
  if (treeBtn) {
    treeBtn.addEventListener("click", () => {
      lect5W.tree.step = lect5W.tree.step >= 2 ? -1 : lect5W.tree.step + 1;
      updateSoftwareTree();
    });
    lect5W.tree.step = -1;
    updateSoftwareTree();
  }

  const driverBtn = $("driverNextBtn");
  if (driverBtn) {
    driverBtn.addEventListener("click", () => {
      lect5W.driver.step = lect5W.driver.step >= 3 ? -1 : lect5W.driver.step + 1;
      updateDriverFlow();
    });
    lect5W.driver.step = -1;
    updateDriverFlow();
  }

  const gKind = GATE_KIND_MAP[stage.interactiveType];
  const gateStateMap = { and: lect5W.and, ornot: lect5W.onlab, half: lect5W.half, full: lect5W.full };
  if (["and", "ornot", "half", "full"].includes(gKind)) {
    stagePanel.querySelectorAll(".gb-btn").forEach(b => {
      b.addEventListener("click", () => {
        const key = b.dataset.key;
        const st = gateStateMap[gKind];
        st[key] = st[key] ? 0 : 1;
        renderStage(i);
      });
    });
    stagePanel.querySelectorAll(".gk-btn").forEach(b => {
      b.addEventListener("click", () => {
        lect5W.onlab.gate = b.dataset.gate;
        renderStage(i);
      });
    });
    updateGateLab(gKind);
  }

  // Navigation Buttons State
  $("prevBtn").disabled = i === 0;
  $("nextBtn").innerHTML = i === LECT5_STAGES.length - 1
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

  const cards = [];
  LECT5_MATCH_ITEMS.forEach(item => {
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
        if (selectedMatchCard.dataset.id === cardBtn.dataset.id && selectedMatchCard.dataset.type !== cardBtn.dataset.type) {
          selectedMatchCard.classList.remove("selected");
          selectedMatchCard.classList.add("matched");
          cardBtn.classList.add("matched");
          matchedPairs++;
          selectedMatchCard = null;

          if (matchedPairs === LECT5_MATCH_ITEMS.length) {
            $("matchResult").classList.remove("hidden");
            $("matchResult").innerHTML = isAr
              ? `🏆 <strong>رائع جداً!</strong> وفّقت بين كل مفاهيم وتعريفات الفصل السابع بنجاح تام!`
              : `🏆 <strong>Brilliant!</strong> You matched all Chapter 7 concepts and definitions perfectly!`;
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
function openFinalChallenge() {
  $("finalChallengeSection").classList.remove("hidden");
  renderFinalMatchGame();
  document.getElementById("finalChallengeSection").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  LectureShell.init({ onNavigate: goToStage, onFinal: openFinalChallenge });
  buildTopicNavigation();
  updateProgressUI();

  if (lect5State.visited.size > 0) {
    $("heroSection").classList.add("hidden");
    $("lectureExperience").classList.remove("hidden");
    renderStage(lect5State.current);
    LectureShell.show();
  } else {
    LectureShell.hide();
  }

  $("startLectureBtn")?.addEventListener("click", () => {
    $("lectureExperience").classList.remove("hidden");
    renderStage(lect5State.current);
    LectureShell.show();
    document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth" });
  });

  $("prevBtn")?.addEventListener("click", () => {
    if (lect5State.current > 0) goToStage(lect5State.current - 1);
  });

  $("nextBtn")?.addEventListener("click", () => {
    if (lect5State.current === LECT5_STAGES.length - 1) {
      openFinalChallenge();
    } else {
      goToStage(lect5State.current + 1);
    }
  });

  $("resetMatchBtn")?.addEventListener("click", () => {
    $("matchResult").classList.add("hidden");
    renderFinalMatchGame();
  });
});

window.addEventListener('langChanged', () => {
  LECT5_STAGES = (currentLang !== 'ar' && window.LECT5_STAGES_EN) ? window.LECT5_STAGES_EN : LECT5_STAGES_AR;
  LECT5_MATCH_ITEMS = (currentLang !== 'ar' && window.LECT5_MATCH_ITEMS_EN) ? window.LECT5_MATCH_ITEMS_EN : LECT5_MATCH_ITEMS_AR;

  buildTopicNavigation();
  updateProgressUI();

  if (!$("lectureExperience")?.classList.contains("hidden")) {
    renderStage(lect5State.current);
  }

  if (!$("finalChallengeSection")?.classList.contains("hidden")) {
    renderFinalMatchGame();
  }
});
