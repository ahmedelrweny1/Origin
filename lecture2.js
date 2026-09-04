/* ============================================================
   LECTURE 2 CONTROLLER (Personal Data & Intellectual Property)
   Editorial Journal Interactive Experience
   ============================================================ */

const LECT2_STORE_KEY = "origin-lect2-progress";
let LECT2_STAGES = currentLang === 'ar' ? LECT2_STAGES_AR : LECT2_STAGES_EN;
let LECT2_MATCH_ITEMS = currentLang === 'ar' ? LECT2_MATCH_ITEMS_AR : LECT2_MATCH_ITEMS_EN;

let lect2State = {
  current: 0,
  visited: new Set()
};

try {
  const saved = JSON.parse(localStorage.getItem(LECT2_STORE_KEY));
  if (saved && Array.isArray(saved.visited)) lect2State.visited = new Set(saved.visited);
} catch (e) {}

function saveLect2State() {
  localStorage.setItem(LECT2_STORE_KEY, JSON.stringify({ visited: [...lect2State.visited] }));
}

const $ = (id) => document.getElementById(id);
const stagePanel = $("stagePanel");
const topicNodes = $("topicNodes");

function buildTopicNavigation() {
  if (!topicNodes) return;
  topicNodes.innerHTML = "";
  LECT2_STAGES.forEach((stage, i) => {
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
  for (let i = 0; i < LECT2_STAGES.length; i++) {
    if (chips[i]) {
      chips[i].classList.toggle("visited", lect2State.visited.has(LECT2_STAGES[i].id));
      chips[i].classList.toggle("active", i === lect2State.current);
    }
  }
  const pct = Math.round((lect2State.visited.size / LECT2_STAGES.length) * 100);
  if ($("progressFill")) $("progressFill").style.width = pct + "%";
  if ($("progressLabel")) $("progressLabel").textContent = pct + "%";
}

/* ========================================================
   WIDGET 1: Personal Data Classifier / Vault
   ======================================================== */
function renderDataClassifierWidget() {
  const isAr = currentLang === 'ar';
  const items = [
    { id: "d1", text: isAr ? "تاريخ الميلاد (Date of Birth)" : "Date of Birth", cat: "basic" },
    { id: "d2", text: isAr ? "رقم جواز السفر (Passport No)" : "Passport Number", cat: "id_code" },
    { id: "d3", text: isAr ? "بصمة حدقية العين (Iris Scan)" : "Iris Biometric Scan", cat: "sensitive" },
    { id: "d4", text: isAr ? "عنوان السكن (Home Address)" : "Home Address", cat: "basic" },
    { id: "d5", text: isAr ? "الرقم القومي (National ID)" : "National ID Number", cat: "id_code" },
    { id: "d6", text: isAr ? "السجل الطبي والأمراض (Medical Record)" : "Medical Health Record", cat: "sensitive" }
  ];

  return `
    <div class="interactive-widget" id="dataVaultWidget">
      <div class="widget-title">
        <span>🪪</span> ${isAr ? "مختبر تصنيف البيانات الشخصية وحساسيتها" : "Personal Data Classification Lab"}
      </div>
      <p class="widget-subtitle">
        ${isAr 
          ? "اضغط على أي عنصر من الصندوق ثم اضغط على الخزينة المناسبة له لتصنيفه وفق القانون:" 
          : "Click a data item, then click the correct legal category vault to classify it:"}
      </p>
      
      <div class="vault-items-tray" id="vaultTray">
        ${items.map(item => `
          <button class="vault-chip" data-id="${item.id}" data-cat="${item.cat}">
            <span>📌</span> ${item.text}
          </button>
        `).join("")}
      </div>

      <div class="vault-categories-grid">
        <div class="vault-bucket" data-target="basic">
          <h5>${isAr ? "١. الرباعي الأساسي (Four Basic)" : "1. The Four Basic Items"}</h5>
          <div class="bucket-content" id="bucket-basic"></div>
        </div>
        <div class="vault-bucket" data-target="id_code">
          <h5>${isAr ? "٢. أرقام الهوية (ID Codes)" : "2. Identification Codes"}</h5>
          <div class="bucket-content" id="bucket-id_code"></div>
        </div>
        <div class="vault-bucket" data-target="sensitive">
          <h5>${isAr ? "٣. بيانات حساسة (Sensitive)" : "3. Sensitive / Care-Required"}</h5>
          <div class="bucket-content" id="bucket-sensitive"></div>
        </div>
      </div>
      <div id="vaultFeedback" class="case-verdict-box"></div>
    </div>
  `;
}

function initDataClassifierEvents() {
  const widget = $("dataVaultWidget");
  if (!widget) return;
  const isAr = currentLang === 'ar';
  let activeChip = null;

  widget.querySelectorAll(".vault-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if (chip.classList.contains("assigned")) return;
      widget.querySelectorAll(".vault-chip").forEach(c => c.style.outline = "none");
      activeChip = chip;
      chip.style.outline = "3px solid var(--c-blue)";
    });
  });

  widget.querySelectorAll(".vault-bucket").forEach(bucket => {
    bucket.addEventListener("click", () => {
      if (!activeChip) return;
      const targetCat = bucket.dataset.target;
      const chipCat = activeChip.dataset.cat;
      const fb = $("vaultFeedback");

      if (targetCat === chipCat) {
        bucket.querySelector(".bucket-content").appendChild(activeChip);
        activeChip.classList.add("assigned");
        activeChip.style.outline = "none";
        activeChip = null;
        fb.className = "case-verdict-box show good";
        fb.innerHTML = isAr ? "✓ تصنيف صحيح ومطابق للمرجع القانوني!" : "✓ Correct legal classification!";
      } else {
        activeChip.classList.add("wrong-placement");
        setTimeout(() => activeChip.classList.remove("wrong-placement"), 500);
        fb.className = "case-verdict-box show bad";
        fb.innerHTML = isAr 
          ? "✕ تصنيف خاطئ! تذكر: الرباعي (اسم، عنوان، ميلاد، نوع) - أرقام الهوية (جواز، قومي، رخصة) - الحساسة (صحة، عرق، بيومتري)." 
          : "✕ Incorrect vault! Basic = Name/Address/DOB/Gender; ID Codes = Passports/Licenses; Sensitive = Health/Biometrics.";
      }
    });
  });
}

/* ========================================================
   WIDGET 2: Privacy Rights Legal Case Simulator
   ======================================================== */
function renderPrivacyRightsWidget() {
  const isAr = currentLang === 'ar';
  const scenarios = [
    {
      title: isAr ? "قضية ١: صورة صديقك" : "Case 1: Friend's Selfie",
      desc: isAr 
        ? "التقطت صورة رائعة لصديقك المقرب في المدرسة، ونشرتها على حسابك العام على إنستجرام دون أن تسأله."
        : "You took a great photo of your close schoolmate and posted it on your public social media account without asking.",
      verdict: isAr
        ? "انتهاك لحق الصورة (Image Rights)! حتى وإن كان صديقك أو أحد أفراد عائلتك، يحظر القانون نشر صور أي شخص دون إذنه الصريح."
        : "Infringement of Image Rights! Even for close friends or family, publishing a person's likeness requires explicit consent."
    },
    {
      title: isAr ? "قضية ٢: قمصان المشاهير" : "Case 2: Celebrity Merchandise",
      desc: isAr 
        ? "رسمت بنفسك صورة لنجم كرة قدم عالمي، وطبعت الرسمة على ١٠٠ قميص وبعتها عبر الإنترنت للتربح."
        : "You drew an original portrait of a world-famous football star, printed it on 100 t-shirts, and sold them online for profit.",
      verdict: isAr
        ? "انتهاك لحقوق الدعاية والشهرة (Publicity Rights)! على الرغم من أن الرسم من إبداعك، إلا أن استغلال صورة واسم المشهور تجارياً لجني أرباح يتطلب ترخيصاً رسمياً منه."
        : "Violation of Publicity Rights! While the drawing is your own work, commercial exploitation of a celebrity's economic likeness requires an official licensing contract."
    },
    {
      title: isAr ? "قضية ٣: حالة طوارئ طبية" : "Case 3: Medical Emergency",
      desc: isAr 
        ? "تعرض شخص لحادث خطير في الشارع، وقام المستشفى بتقديم فصيلة دمه وسجله الطبي لسيارة الإسعاف وطبيب الطوارئ دون موافقته."
        : "A pedestrian suffered a critical traffic collision. The hospital transmitted their blood type and medical history to emergency responders without prior consent.",
      verdict: isAr
        ? "تصرف قانوني ومشروع تماماً! القانون ينص صراحة على استثناء تقديم البيانات الشخصية دون إذن إذا كان ذلك ضرورياً لإنقاذ حياة الشخص أو حماية صحته."
        : "Completely lawful! Data protection laws explicitly permit disclosure without consent when essential to protect human life, physical body, or health."
    }
  ];

  return `
    <div class="interactive-widget" id="privacyCasesWidget">
      <div class="widget-title">
        <span>⚖️</span> ${isAr ? "محكمة الخصوصية: فحص القضايا والنزاعات اليومية" : "Privacy Tribunal: Case Law Simulator"}
      </div>
      <p class="widget-subtitle">
        ${isAr 
          ? "اختر سيناريو واقعياً واختبر معرفتك بالقانون والدستور:" 
          : "Select a real-world scenario to examine how the law governs everyday actions:"}
      </p>

      <div class="case-selector-tabs">
        ${scenarios.map((sc, i) => `
          <button class="case-tab-btn ${i === 0 ? 'active' : ''}" data-idx="${i}">
            ${sc.title}
          </button>
        `).join("")}
      </div>

      <div class="case-scenario-card">
        <div class="case-scenario-text" id="caseScenarioText">${scenarios[0].desc}</div>
        <div class="case-decision-grid">
          <button class="btn btn-sm btn-ghost" id="btnLegalAction">${isAr ? "تحليل الحكم القانوني 📜" : "Analyze Legal Verdict 📜"}</button>
        </div>
      </div>
      <div class="case-verdict-box show" id="caseVerdictBox">
        <strong>${isAr ? "الحكم والتحليل:" : "Legal Ruling:"}</strong> ${scenarios[0].verdict}
      </div>
    </div>
  `;
}

function initPrivacyRightsEvents() {
  const widget = $("privacyCasesWidget");
  if (!widget) return;
  const isAr = currentLang === 'ar';
  const scenarios = [
    {
      desc: isAr 
        ? "التقطت صورة رائعة لصديقك المقرب في المدرسة، ونشرتها على حسابك العام على إنستجرام دون أن تسأله."
        : "You took a great photo of your close schoolmate and posted it on your public social media account without asking.",
      verdict: isAr
        ? "انتهاك لحق الصورة (Image Rights)! حتى وإن كان صديقك أو أحد أفراد عائلتك، يحظر القانون نشر صور أي شخص دون إذنه الصريح."
        : "Infringement of Image Rights! Even for close friends or family, publishing a person's likeness requires explicit consent."
    },
    {
      desc: isAr 
        ? "رسمت بنفسك صورة لنجم كرة قدم عالمي، وطبعت الرسمة على ١٠٠ قميص وبعتها عبر الإنترنت للتربح."
        : "You drew an original portrait of a world-famous football star, printed it on 100 t-shirts, and sold them online for profit.",
      verdict: isAr
        ? "انتهاك لحقوق الدعاية والشهرة (Publicity Rights)! على الرغم من أن الرسم من إبداعك، إلا أن استغلال صورة واسم المشهور تجارياً لجني أرباح يتطلب ترخيصاً رسمياً منه."
        : "Violation of Publicity Rights! While the drawing is your own work, commercial exploitation of a celebrity's economic likeness requires an official licensing contract."
    },
    {
      desc: isAr 
        ? "تعرض شخص لحادث خطير في الشارع، وقام المستشفى بتقديم فصيلة دمه وسجله الطبي لسيارة الإسعاف وطبيب الطوارئ دون موافقته."
        : "A pedestrian suffered a critical traffic collision. The hospital transmitted their blood type and medical history to emergency responders without prior consent.",
      verdict: isAr
        ? "تصرف قانوني ومشروع تماماً! القانون ينص صراحة على استثناء تقديم البيانات الشخصية دون إذن إذا كان ذلك ضرورياً لإنقاذ حياة الشخص أو حماية صحته."
        : "Completely lawful! Data protection laws explicitly permit disclosure without consent when essential to protect human life, physical body, or health."
    }
  ];

  widget.querySelectorAll(".case-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      widget.querySelectorAll(".case-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const idx = parseInt(btn.dataset.idx, 10);
      $("caseScenarioText").textContent = scenarios[idx].desc;
      $("caseVerdictBox").innerHTML = `<strong>${isAr ? "الحكم والتحليل:" : "Legal Ruling:"}</strong> ${scenarios[idx].verdict}`;
    });
  });
}

/* ========================================================
   WIDGET 3: Corporate Opt-in vs Opt-out Consent Engine
   ======================================================== */
function renderConsentOptWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget" id="consentEngineWidget">
      <div class="widget-title">
        <span>🔄</span> ${isAr ? "محاكي أنظمة الموافقة في الشركات: Opt-in مقابل Opt-out" : "Corporate Consent Engine: Opt-in vs Opt-out"}
      </div>
      <p class="widget-subtitle">
        ${isAr 
          ? "اختبر كيف يؤثر كل نظام على طريقة جمع وتتبع بيانات المستخدم خلف الكواليس:" 
          : "Toggle between consent regimes to see how user tracking and data collection behave behind the scenes:"}
      </p>

      <div class="consent-engine-display">
        <div class="consent-mode-panel active-mode" id="panelOptIn">
          <div class="consent-badge-row">
            <strong>${isAr ? "نظام الموافقة المسبقة (Opt-in)" : "Opt-in System (Prior Consent)"}</strong>
            <span class="chip chip-solid">${isAr ? "الأكثر أماناً" : "User-First"}</span>
          </div>
          <p style="font-size:0.85rem; color:var(--ink-soft); margin-bottom:8px;">
            ${isAr 
              ? "الافتراضي: ممنوع جمع أي بيانات حتى يضغط المستخدم بالموافقة بنفسه." 
              : "Default state: No data collected until user explicitly checks the box."}
          </p>
          <div class="toggle-switch-wrapper">
            <input type="checkbox" id="checkOptIn" style="width:20px; height:20px; cursor:pointer;">
            <label for="checkOptIn" style="font-weight:700; cursor:pointer;">
              ${isAr ? "أوافق على جمع البيانات وإرسال النشرة الإعلانية" : "I agree to data collection & promotional emails"}
            </label>
          </div>
          <div class="live-flow-tracer" id="tracerOptIn">
            ${isAr ? "حالة البيانات: 🔒 محظورة المعالجة تماماً في انتظار نقرة المستخدم." : "Status: 🔒 Processing blocked awaiting user affirmative action."}
          </div>
        </div>

        <div class="consent-mode-panel" id="panelOptOut">
          <div class="consent-badge-row">
            <strong>${isAr ? "نظام الاعتراض (Opt-out)" : "Opt-out System (Objection)"}</strong>
            <span class="chip">${isAr ? "نشط افتراضياً" : "Active Default"}</span>
          </div>
          <p style="font-size:0.85rem; color:var(--ink-soft); margin-bottom:8px;">
            ${isAr 
              ? "الافتراضي: البيانات تُجمع والخدمة تعمل حتى يعترض المستخدم ويطلب الإلغاء." 
              : "Default state: Tracking is active until the user proactively cancels."}
          </p>
          <div class="toggle-switch-wrapper">
            <input type="checkbox" id="checkOptOut" checked style="width:20px; height:20px; cursor:pointer;">
            <label for="checkOptOut" style="font-weight:700; cursor:pointer;">
              ${isAr ? "الاشتراك مفعّل تلقائياً (ألغِ التحديد للاعتراض)" : "Subscribed by default (Uncheck to object)"}
            </label>
          </div>
          <div class="live-flow-tracer" id="tracerOptOut">
            ${isAr ? "حالة البيانات: 📡 يتم جمع البيانات وإرسال الإعلانات تلقائياً!" : "Status: 📡 Collecting data and sending emails automatically!"}
          </div>
        </div>
      </div>
    </div>
  `;
}

function initConsentOptEvents() {
  const widget = $("consentEngineWidget");
  if (!widget) return;
  const isAr = currentLang === 'ar';

  const checkOptIn = $("checkOptIn");
  const tracerOptIn = $("tracerOptIn");
  checkOptIn?.addEventListener("change", () => {
    if (checkOptIn.checked) {
      tracerOptIn.innerHTML = isAr 
        ? "حالة البيانات: ✅ تم منح الموافقة الصريحة! سُمح بجمع البيانات وإرسال العروض."
        : "Status: ✅ Affirmative consent granted! Data pipeline and marketing enabled.";
    } else {
      tracerOptIn.innerHTML = isAr 
        ? "حالة البيانات: 🔒 محظورة المعالجة تماماً في انتظار نقرة المستخدم."
        : "Status: 🔒 Processing blocked awaiting user affirmative action.";
    }
  });

  const checkOptOut = $("checkOptOut");
  const tracerOptOut = $("tracerOptOut");
  checkOptOut?.addEventListener("change", () => {
    if (checkOptOut.checked) {
      tracerOptOut.innerHTML = isAr 
        ? "حالة البيانات: 📡 يتم جمع البيانات وإرسال الإعلانات تلقائياً!"
        : "Status: 📡 Collecting data and sending emails automatically!";
    } else {
      tracerOptOut.innerHTML = isAr 
        ? "حالة البيانات: 🛑 تم تسجيل اعتراض المستخدم (Opted Out)! توقف جمع البيانات فوراً."
        : "Status: 🛑 User objection recorded! Data collection halted immediately.";
    }
  });
}

/* ========================================================
   WIDGET 4: Industrial Property Matrix & Filing Desk
   ======================================================== */
function renderIndustrialPropWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget" id="ipMatrixWidget">
      <div class="widget-title">
        <span>⚙️</span> ${isAr ? "مكتب تسجيل الملكية الصناعية: مبدأ الشكلية والأركان الأربعة" : "Industrial Property Registry: Formality Principle & The 4 Pillars"}
      </div>
      <p class="widget-subtitle">
        ${isAr 
          ? "تذكر: الملكية الصناعية لا تثبت إلا بالتسجيل الرسمي. استعرض الفروق بين الأنواع الأربعة واختبر تصنيفك للمنتجات:" 
          : "Remember: Industrial property requires formal registration. Review the comparison matrix and test your classification skills:"}
      </p>

      <div class="ip-matrix-table-wrap">
        <table class="ip-matrix-table">
          <thead>
            <tr>
              <th>${isAr ? "النوع" : "Right Type"}</th>
              <th>${isAr ? "الموضوع المحمي" : "Subject Matter"}</th>
              <th>${isAr ? "مدة الحماية" : "Protection Period"}</th>
              <th>${isAr ? "مثال من الواقع" : "Real-World Example"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>${isAr ? "براءات الاختراع (Patents)" : "Patent Rights"}</strong></td>
              <td>${isAr ? "أفكار وتقنيات صناعية جديدة وغير مسبوقة" : "Novel, inventive industrial technologies"}</td>
              <td><span class="chip chip-solid">${isAr ? "٢٠ عاماً" : "20 years"}</span></td>
              <td>${isAr ? "تركيبة دواء مبتكر، محرك هيدروجيني" : "New drug formula, hydrogen engine"}</td>
            </tr>
            <tr>
              <td><strong>${isAr ? "نماذج المنفعة (Utility Models)" : "Utility Models"}</strong></td>
              <td>${isAr ? "تحسينات عملية على شكل وهيكل المنتجات" : "Practical structural/shape improvements"}</td>
              <td><span class="chip">${isAr ? "٧ إلى ١٠ سنوات" : "7 to 10 years"}</span></td>
              <td>${isAr ? "تعديل مجرى تصريف مياه الغسالة" : "Washing machine drainage shape alteration"}</td>
            </tr>
            <tr>
              <td><strong>${isAr ? "الرسوم والنماذج (Designs)" : "Industrial Designs"}</strong></td>
              <td>${isAr ? "المظهر الخارجي الجمالي والأشكال والألوان" : "Aesthetic exterior shape, lines & patterns"}</td>
              <td><span class="chip">${isAr ? "١٠ + ٥ سنوات" : "10 + 5 years"}</span></td>
              <td>${isAr ? "هيكل سيارة رياضية، تصميم الهاتف الخارجي" : "Sports car chassis, phone exterior contour"}</td>
            </tr>
            <tr>
              <td><strong>${isAr ? "العلامات التجارية (Trademarks)" : "Trademark Rights"}</strong></td>
              <td>${isAr ? "الأسماء والشعارات والرموز والأصوات المميزة" : "Distinctive brand names, logos, symbols"}</td>
              <td><span class="chip chip-solid">${isAr ? "١٠ سنوات (تجدد دائماً)" : "10 yrs (Renewable forever)"}</span></td>
              <td>${isAr ? "شعار مرسيدس، علامة كوكاكولا" : "Mercedes star logo, Nike swoosh"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="ip-interactive-tester">
        <div class="ip-item-card" id="ipTesterPrompt">
          ${isAr ? "اختبر نفسك: 'شعار تفاحة مقضومة يوضع على أجهزة الكمبيوتر والهواتف الذكية'" : "Test yourself: 'A bitten apple logo placed on laptops and smartphones'"}
        </div>
        <div class="ip-choice-row">
          <button class="btn btn-sm ip-opt-btn" data-type="patent">${isAr ? "براءة اختراع" : "Patent"}</button>
          <button class="btn btn-sm ip-opt-btn" data-type="utility">${isAr ? "نموذج منفعة" : "Utility Model"}</button>
          <button class="btn btn-sm ip-opt-btn" data-type="design">${isAr ? "رسم ونموذج صناعي" : "Industrial Design"}</button>
          <button class="btn btn-sm ip-opt-btn" data-type="trademark">${isAr ? "علامة تجارية" : "Trademark"}</button>
        </div>
        <div id="ipTesterFeedback" class="case-verdict-box" style="margin-top:10px;"></div>
      </div>
    </div>
  `;
}

function initIndustrialPropEvents() {
  const widget = $("ipMatrixWidget");
  if (!widget) return;
  const isAr = currentLang === 'ar';

  widget.querySelectorAll(".ip-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const fb = $("ipTesterFeedback");
      if (btn.dataset.type === "trademark") {
        fb.className = "case-verdict-box show good";
        fb.innerHTML = isAr 
          ? "✓ أحسنت! الشعار المميز للسلع هو 'علامة تجارية' (Trademark) تحميه الدولة لمدة ١٠ سنوات قابلة للتجديد المستمر."
          : "✓ Correct! A distinctive logo is a Trademark, protected for 10 years renewable indefinitely.";
      } else {
        fb.className = "case-verdict-box show bad";
        fb.innerHTML = isAr 
          ? "✕ غير صحيح! الشعارات والأسماء تتبع العلامات التجارية (Trademarks)، بينما الاختراعات تتبع البراءات، والمظهر يتبع التصاميم."
          : "✕ Incorrect! Logos and brand names are Trademarks; inventions are Patents; shape aesthetics are Industrial Designs.";
      }
    });
  });
}

/* ========================================================
   WIDGET 5: Copyright Lifespan & Public Domain Calculator
   ======================================================== */
function renderCopyrightLifespanWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget" id="copyrightCalcWidget">
      <div class="widget-title">
        <span>📜</span> ${isAr ? "حاسبة الملكية العامة وحقوق المؤلف والحقوق المجاورة" : "Copyright Lifespan & Public Domain Calculator"}
      </div>
      <p class="widget-subtitle">
        ${isAr 
          ? "حرّك شريط السنوات منذ وفاة المؤلف لتشاهد متى يسقط العمل في الملكية العامة (Public Domain) وما موقف الأداء الحديث:" 
          : "Drag the slider of years elapsed since the author's death to observe when works transition into the Public Domain:"}
      </p>

      <div class="lifespan-calc-box">
        <div class="lifespan-slider-group">
          <label id="sliderLabel">
            ${isAr ? "السنوات المنقضية منذ وفاة المؤلف: " : "Years elapsed since creator's death: "}
            <span id="yearsVal" style="color:var(--c-red); font-size:1.1rem; font-weight:800;">30</span> ${isAr ? "سنة" : "years"}
          </label>
          <input type="range" min="0" max="100" value="30" class="lifespan-range-input" id="copyrightRange">
        </div>

        <div class="lifespan-timeline-bar">
          <div class="timeline-zone zone-life">${isAr ? "طوال حياة المؤلف (محمي بالكامل)" : "Author's Lifetime (Fully Protected)"}</div>
          <div class="timeline-zone zone-post" id="postDeathZone">${isAr ? "٥٠-٧٠ سنة بعد الوفاة (محمي للورثة)" : "50-70 Years Post-Mortem (Protected for Heirs)"}</div>
          <div class="timeline-zone zone-public" id="publicDomainZone">${isAr ? "الملكية العامة (متاح للجميع مجاناً)" : "Public Domain (Free for All)"}</div>
        </div>

        <div class="lifespan-status-card" id="lifespanStatusCard">
          <strong>${isAr ? "الوضع القانوني الحالي:" : "Current Legal Status:"}</strong><br>
          ${isAr 
            ? "العمل ما زال محمياً قانونياً لصالح ورثة المؤلف والناشر. لا يجوز طباعته أو نشره دون الحصول على ترخيص." 
            : "The work remains legally protected for the author's heirs and publisher. Reproduction without a license is illegal."}
        </div>
      </div>
    </div>
  `;
}

function initCopyrightLifespanEvents() {
  const slider = $("copyrightRange");
  if (!slider) return;
  const isAr = currentLang === 'ar';

  slider.addEventListener("input", () => {
    const years = parseInt(slider.value, 10);
    $("yearsVal").textContent = years;
    const card = $("lifespanStatusCard");

    if (years < 50) {
      card.innerHTML = `
        <strong>${isAr ? "الوضع القانوني (أقل من ٥٠ سنة):" : "Legal Status (< 50 years):"}</strong><br>
        ${isAr 
          ? "🔒 <strong>محمي بالكامل بحقوق المؤلف المالية:</strong> الحقوق مملوكة للورثة ودار النشر. يلزم الحصول على إذن ودفع حقوق الاستغلال." 
          : "🔒 <strong>Fully Protected by Economic Rights:</strong> Rights belong to heirs/publishers. Permission and licensing required."}
      `;
    } else if (years < 70) {
      card.innerHTML = `
        <strong>${isAr ? "الوضع القانوني (بين ٥٠ و ٧٠ سنة):" : "Legal Status (50 - 70 years):"}</strong><br>
        ${isAr 
          ? "⚖️ <strong>سقط في الملكية العامة بموجب القانون المصري (٥٠ سنة):</strong> يمكن طباعة النص الأصلي، لكن في الدول ذات الـ ٧٠ سنة يظل محمياً." 
          : "⚖️ <strong>Public Domain in 50-year regimes (e.g. Egypt), but protected in 70-year regimes (e.g. Japan/EU/US).</strong>"}
      `;
    } else {
      card.innerHTML = `
        <strong>${isAr ? "الوضع القانوني (أكثر من ٧٠ سنة):" : "Legal Status (> 70 years):"}</strong><br>
        ${isAr 
          ? "🌍 <strong>ملكية عامة عالمية (Universal Public Domain):</strong> النص حر للجميع بلا استئذان! ولكن انتبه: أي تسجيل موسيقي حديث أو أداء مسرحي للمصنف محمي بالحقوق المجاورة (Neighboring Rights)." 
          : "🌍 <strong>Universal Public Domain:</strong> The original text/score is free for everyone! Note: Any modern recorded performance remains protected by Neighboring Rights."}
      `;
    }
  });
}

/* ========================================================
   WIDGET 6: Legal Quotation & Fair Use Validator
   ======================================================== */
function renderQuotationValidatorWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget" id="quoteValidatorWidget">
      <div class="widget-title">
        <span>📖</span> ${isAr ? "مدقق شروط الاقتباس القانوني الخمسة" : "Legal Quotation Compliance Validator"}
      </div>
      <p class="widget-subtitle">
        ${isAr 
          ? "لكي يكون اقتباسك من مصادر الآخرين قانونياً ولا يشكل سرقة أدبية، يجب أن تلتزم بالشروط الخمسة التالية معاً:" 
          : "For an excerpt to qualify as lawful quotation without infringing copyright, all 5 strict criteria must be satisfied:"}
      </p>

      <div class="quote-checklist-grid">
        <div class="quote-rule-item checked" data-rule="1">
          <div class="quote-checkbox">✓</div>
          <div><strong>${isAr ? "١. التبعية (Subordination):" : "1. Subordination:"}</strong> ${isAr ? "بحثك أنت هو الأساس والمقتبس تابع وثانوي." : "Your own work is primary; quoted text is subordinate."}</div>
        </div>
        <div class="quote-rule-item checked" data-rule="2">
          <div class="quote-checkbox">✓</div>
          <div><strong>${isAr ? "٢. الضرورة الملحة (Necessity):" : "2. Necessity:"}</strong> ${isAr ? "وجود سبب علمي أو نقدي يدعو للاستشهاد بالنص." : "A genuine argumentative or academic necessity exists."}</div>
        </div>
        <div class="quote-rule-item checked" data-rule="3">
          <div class="quote-checkbox">✓</div>
          <div><strong>${isAr ? "٣. علامات التنصيص (Clear Demarcation):" : "3. Quotation Marks:"}</strong> ${isAr ? "وضع المقتبس بين أقواس « » أو تمييزه بوضوح." : "Enclosing the quoted excerpt inside quotation marks."}</div>
        </div>
        <div class="quote-rule-item checked" data-rule="4">
          <div class="quote-checkbox">✓</div>
          <div><strong>${isAr ? "٤. عزو المصدر (Attribution):" : "4. Source Attribution:"}</strong> ${isAr ? "ذكر اسم المؤلف، الكتاب، وسنة النشر صراحة." : "Explicitly specifying the author, work title, and year."}</div>
        </div>
        <div class="quote-rule-item checked" data-rule="5">
          <div class="quote-checkbox">✓</div>
          <div><strong>${isAr ? "٥. عدم التحريف (No Alteration):" : "5. No Alteration:"}</strong> ${isAr ? "عدم تغيير أو تعديل أو تشويه النص المقتبس." : "Never modifying or twisting the quoted text."}</div>
        </div>
      </div>

      <div class="quote-sample-container">
        <strong>${isAr ? "نموذج تطبيقي صحيح داخل بحث مدرسي:" : "Compliant Sample in a High School Research Paper:"}</strong>
        <p style="margin:8px 0; font-style:italic; color:var(--ink);">
          ${isAr 
            ? "«ولقد ذكر طه حسين في كتابه الأيام (الجزء الأول، ص ٢٣): \"كان لا يرى النور ولكنه كان يرى ببصيرته ما لا يراه المبصرون\"، وهذا يوضح إرادته الصلبة في مواجهة التحديات.»" 
            : "«As author Taha Hussein wrote in The Days (Vol. 1, p. 23): \"He could not see the light, yet with his insight he perceived what sighted men could not\", which vividly demonstrates his fortitude in overcoming adversity.»"}
        </p>
        <span class="chip chip-solid">${isAr ? "✓ اقتباس قانوني ١٠٠٪ محقق للشروط الخمسة" : "✓ 100% Lawful Quotation Satisfying All 5 Rules"}</span>
      </div>
    </div>
  `;
}

function initQuotationValidatorEvents() {
  const widget = $("quoteValidatorWidget");
  if (!widget) return;
  widget.querySelectorAll(".quote-rule-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      const box = item.querySelector(".quote-checkbox");
      box.textContent = item.classList.contains("checked") ? "✓" : "";
    });
  });
}

/* ========================================================
   WIDGET 7: Creative Commons License Builder & Badge Matrix
   ======================================================== */
function renderCcBuilderWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget" id="ccBuilderWidget">
      <div class="widget-title">
        <span>🌐</span> ${isAr ? "مُركّب رخص المشاع الإبداعي (Creative Commons Builder)" : "Interactive Creative Commons License Builder"}
      </div>
      <p class="widget-subtitle">
        ${isAr 
          ? "اضغط على الشروط لتجميع رخصتك المخصصة وشاهد التراخيص الناتجة وحقوق المستخدمين:" 
          : "Click condition badges to assemble your custom CC license and observe permissions granted:"}
      </p>

      <div class="cc-badge-toggle-row">
        <div class="cc-toggle-card active" data-badge="by">
          <span class="cc-icon-large">👤</span>
          <strong>BY</strong>
          <div>${isAr ? "إسناد المصدر (إلزامي)" : "Attribution (Always)"}</div>
        </div>
        <div class="cc-toggle-card" data-badge="nc">
          <span class="cc-icon-large">🚫💰</span>
          <strong>NC</strong>
          <div>${isAr ? "غير تجاري" : "Non-Commercial"}</div>
        </div>
        <div class="cc-toggle-card" data-badge="nd">
          <span class="cc-icon-large">🟰</span>
          <strong>ND</strong>
          <div>${isAr ? "منع التعديل" : "No Derivatives"}</div>
        </div>
        <div class="cc-toggle-card" data-badge="sa">
          <span class="cc-icon-large">🔄</span>
          <strong>SA</strong>
          <div>${isAr ? "الترخيص بالمثل" : "Share-Alike"}</div>
        </div>
      </div>

      <div class="cc-result-preview">
        <div class="cc-result-badges" id="ccBadgesDisplay">🅭 👤</div>
        <div class="cc-result-title" id="ccTitleDisplay">CC BY</div>
        <div class="cc-result-summary" id="ccSummaryDisplay">
          ${isAr 
            ? "يسمح للآخرين بمشاركة وتعديل واستغلال عملك حتى تجارياً، بشرط وحيد هو نسب العمل الأصلي إليك." 
            : "Allows others to distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you."}
        </div>
      </div>
    </div>
  `;
}

function initCcBuilderEvents() {
  const widget = $("ccBuilderWidget");
  if (!widget) return;
  const isAr = currentLang === 'ar';

  const cards = widget.querySelectorAll(".cc-toggle-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const badge = card.dataset.badge;
      if (badge === "by") return; // BY is always active

      if (badge === "nd") {
        card.classList.toggle("active");
        if (card.classList.contains("active")) {
          // ND and SA are mutually exclusive in CC
          const saCard = widget.querySelector('[data-badge="sa"]');
          if (saCard) saCard.classList.remove("active");
        }
      } else if (badge === "sa") {
        card.classList.toggle("active");
        if (card.classList.contains("active")) {
          const ndCard = widget.querySelector('[data-badge="nd"]');
          if (ndCard) ndCard.classList.remove("active");
        }
      } else {
        card.classList.toggle("active");
      }

      updateCcPreview();
    });
  });

  function updateCcPreview() {
    const hasNc = widget.querySelector('[data-badge="nc"]')?.classList.contains("active");
    const hasNd = widget.querySelector('[data-badge="nd"]')?.classList.contains("active");
    const hasSa = widget.querySelector('[data-badge="sa"]')?.classList.contains("active");

    let code = "CC BY";
    let icons = "🅭 👤";
    let summary = "";

    if (hasNc) { code += "-NC"; icons += " 🚫💰"; }
    if (hasNd) { code += "-ND"; icons += " 🟰"; }
    if (hasSa) { code += "-SA"; icons += " 🔄"; }

    if (!hasNc && !hasNd && !hasSa) {
      summary = isAr 
        ? "أكثر الرخص انفتاحاً: مشاركة وتعديل وتربح تجاري، بشرط وحيد هو ذكر اسمك."
        : "Most open license: share, adapt, and monetize commercially with author credit.";
    } else if (hasNc && !hasNd && !hasSa) {
      summary = isAr 
        ? "مسموح بالمشاركة والتعديل والتطوير، ولكن يمنع منعاً باتاً أي استغلال تجاري أو بيع."
        : "Permits sharing and adapting for non-commercial purposes only, with credit.";
    } else if (hasNc && hasNd) {
      summary = isAr 
        ? "أكثر الرخص تقييداً: يسمح فقط بنسخ العمل كما هو، مع حظر التعديل وحظر البيع التجاري."
        : "Most restrictive: download and share verbatim with credit, no commercial use, no modifications.";
    } else if (hasNc && hasSa) {
      summary = isAr 
        ? "مسموح بالتعديل غير التجاري، على أن ينشر أي عمل مشتق بنفس هذه الشروط تماماً."
        : "Non-commercial remixing allowed, provided adaptations are released under identical CC terms.";
    } else if (hasNd) {
      summary = isAr 
        ? "مسموح بالنشر حتى للأغراض التجارية، ولكن كما هو فقط دون أي تعديل أو تحريف."
        : "Redistribution allowed commercially and non-commercially, as long as unchanged and credited.";
    } else if (hasSa) {
      summary = isAr 
        ? "رخصة ويكيبيديا الشهيرة: مسموح بالتعديل حتى تجارياً، بشرط ترخيص المشتقات بالمثل."
        : "The Wikipedia license: commercial adaptations permitted, provided derivatives carry identical CC terms.";
    }

    $("ccBadgesDisplay").textContent = icons;
    $("ccTitleDisplay").textContent = code;
    $("ccSummaryDisplay").textContent = summary;
  }
}

/* ========================================================
   RENDER CURRENT STAGE
   ======================================================== */
function renderStage(index) {
  if (index < 0 || index >= LECT2_STAGES.length) return;
  lect2State.current = index;
  const stage = LECT2_STAGES[index];
  lect2State.visited.add(stage.id);
  saveLect2State();
  updateProgressUI();

  let widgetHtml = "";
  if (stage.interactiveType === "data_classifier") widgetHtml = renderDataClassifierWidget();
  else if (stage.interactiveType === "privacy_rights_sim") widgetHtml = renderPrivacyRightsWidget();
  else if (stage.interactiveType === "consent_opt_sim") widgetHtml = renderConsentOptWidget();
  else if (stage.interactiveType === "industrial_prop_matrix") widgetHtml = renderIndustrialPropWidget();
  else if (stage.interactiveType === "copyright_lifespan_calc") widgetHtml = renderCopyrightLifespanWidget();
  else if (stage.interactiveType === "quotation_validator") widgetHtml = renderQuotationValidatorWidget();
  else if (stage.interactiveType === "cc_license_builder") widgetHtml = renderCcBuilderWidget();

  const isAr = currentLang === 'ar';

  stagePanel.innerHTML = `
    <div class="stage-header">
      <div class="stage-eyebrow">
        <span class="stage-category">${stage.category}</span>
        <span class="stage-num">${isAr ? 'محطة ' + String(index + 1).padStart(2,'0') + ' من ' + String(LECT2_STAGES.length).padStart(2,'0') : 'Stage ' + String(index + 1).padStart(2,'0') + ' / ' + String(LECT2_STAGES.length).padStart(2,'0')}</span>
      </div>
      <h2 class="stage-title"><span>${stage.glyph}</span> <span>${stage.title}</span></h2>
      <p class="stage-tagline">${stage.tagline}</p>
    </div>

    <div class="stage-grid">
      <div class="stage-text">
        ${stage.story.map(item => {
          const t = item.trim();
          if (t.startsWith('<div') || t.startsWith('<ul') || t.startsWith('<ol') || t.startsWith('<blockquote') || t.startsWith('<section') || t.startsWith('<p')) {
            return t;
          }
          return `<p class="story-lead">${t}</p>`;
        }).join("")}
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

    <div class="stage-quiz" id="stageQuizBox">
      <h3 class="quiz-question"><span>🧠</span> ${isAr ? "سؤال التحدي السريع:" : "Quick Challenge Check:"} ${stage.quiz.question}</h3>
      <div class="quiz-options-list">
        ${stage.quiz.options.map((opt, optIdx) => `
          <button class="quiz-btn" data-opt="${optIdx}">${opt}</button>
        `).join("")}
      </div>
      <div class="quiz-feedback-box" id="quizFeedback"></div>
    </div>
  `;

  // Bind widget-specific JS
  if (stage.interactiveType === "data_classifier") initDataClassifierEvents();
  else if (stage.interactiveType === "privacy_rights_sim") initPrivacyRightsEvents();
  else if (stage.interactiveType === "consent_opt_sim") initConsentOptEvents();
  else if (stage.interactiveType === "industrial_prop_matrix") initIndustrialPropEvents();
  else if (stage.interactiveType === "copyright_lifespan_calc") initCopyrightLifespanEvents();
  else if (stage.interactiveType === "quotation_validator") initQuotationValidatorEvents();
  else if (stage.interactiveType === "cc_license_builder") initCcBuilderEvents();

  // Bind stage quiz
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

  // Nav buttons
  if ($("prevBtn")) $("prevBtn").disabled = (index === 0);
  if ($("nextBtn")) {
    const isLast = (index === LECT2_STAGES.length - 1);
    $("nextBtn").textContent = isLast 
      ? (isAr ? "🏁 الانتقال للتحدي الختامي" : "🏁 Go to Final Challenge")
      : (isAr ? "المحطة التالية &rarr;" : "Next Stop &rarr;");
  }
}

function goToStage(idx) {
  renderStage(idx);
  stagePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ========================================================
   FINAL CHALLENGE: CONCEPT MATCHING GAME
   ======================================================== */
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
  LECT2_MATCH_ITEMS.forEach(item => {
    cards.push({ id: item.id, text: item.concept, type: "concept" });
    cards.push({ id: item.id, text: item.match, type: "match" });
  });

  // Shuffle
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
        // Compare
        if (selectedMatchCard.dataset.id === cardBtn.dataset.id && selectedMatchCard.dataset.type !== cardBtn.dataset.type) {
          selectedMatchCard.classList.remove("selected");
          selectedMatchCard.classList.add("matched");
          cardBtn.classList.add("matched");
          matchedPairs++;
          selectedMatchCard = null;

          if (matchedPairs === LECT2_MATCH_ITEMS.length) {
            $("matchResult").classList.remove("hidden");
            $("matchResult").innerHTML = isAr 
              ? `🏆 <strong>إنجاز رائع ومبهر!</strong> لقد قمت بمطابقة جميع مفاهيم الملكية الفكرية والبيانات الشخصية بنجاح تام!`
              : `🏆 <strong>Outstanding!</strong> You have matched all Personal Data and Intellectual Property concepts perfectly!`;
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
   LIFECYCLE & EVENT LISTENERS
   ======================================================== */
document.addEventListener("DOMContentLoaded", () => {
  buildTopicNavigation();
  updateProgressUI();

  $("startLectureBtn")?.addEventListener("click", () => {
    $("lectureExperience").classList.remove("hidden");
    renderStage(lect2State.visited.size >= LECT2_STAGES.length ? lect2State.current : 0);
    document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth" });
  });

  $("prevBtn")?.addEventListener("click", () => {
    if (lect2State.current > 0) goToStage(lect2State.current - 1);
  });

  $("nextBtn")?.addEventListener("click", () => {
    if (lect2State.current === LECT2_STAGES.length - 1) {
      $("finalChallengeSection").classList.remove("hidden");
      renderFinalMatchGame();
      document.getElementById("finalChallengeSection").scrollIntoView({ behavior: "smooth" });
    } else {
      goToStage(lect2State.current + 1);
    }
  });

  $("resetMatchBtn")?.addEventListener("click", () => {
    $("matchResult").classList.add("hidden");
    renderFinalMatchGame();
  });
});

window.addEventListener('langChanged', () => {
  LECT2_STAGES = currentLang === 'ar' ? LECT2_STAGES_AR : LECT2_STAGES_EN;
  LECT2_MATCH_ITEMS = currentLang === 'ar' ? LECT2_MATCH_ITEMS_AR : LECT2_MATCH_ITEMS_EN;

  buildTopicNavigation();
  updateProgressUI();

  if (!$("lectureExperience")?.classList.contains("hidden")) {
    renderStage(lect2State.current);
  }

  if (!$("finalChallengeSection")?.classList.contains("hidden")) {
    renderFinalMatchGame();
  }
});
