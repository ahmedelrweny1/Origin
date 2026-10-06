const LECT4_STORE_KEY = "origin-lect4-progress";
let LECT4_STAGES = currentLang === 'ar' ? LECT4_STAGES_AR : LECT4_STAGES_EN;
let LECT4_MATCH_ITEMS = currentLang === 'ar' ? LECT4_MATCH_ITEMS_AR : LECT4_MATCH_ITEMS_EN;

let lect4State = {
  current: 0,
  visited: new Set()
};

try {
  const saved = JSON.parse(localStorage.getItem(LECT4_STORE_KEY));
  if (saved && Array.isArray(saved.visited)) lect4State.visited = new Set(saved.visited);
} catch (e) {}

function saveLect4State() {
  localStorage.setItem(LECT4_STORE_KEY, JSON.stringify({ visited: [...lect4State.visited] }));
}

const $ = (id) => document.getElementById(id);
const stagePanel = $("stagePanel");
const topicNodes = $("topicNodes");

function buildTopicNavigation() {
  if (!topicNodes) return;
  topicNodes.innerHTML = "";
  LECT4_STAGES.forEach((stage, i) => {
    const chip = document.createElement("button");
    chip.className = "topic-node";
    chip.innerHTML = `<span>${stage.glyph}</span> <span>${stage.title}</span>`;
    chip.addEventListener("click", () => goToStage(i));
    topicNodes.appendChild(chip);
  });
}

function updateProgressUI() {
  const chips = topicNodes.children;
  for (let i = 0; i < LECT4_STAGES.length; i++) {
    if (chips[i]) {
      chips[i].classList.toggle("visited", lect4State.visited.has(LECT4_STAGES[i].id));
      chips[i].classList.toggle("active", i === lect4State.current);
    }
  }
  const pct = Math.round((lect4State.visited.size / LECT4_STAGES.length) * 100);
  $("progressFill").style.width = pct + "%";
  $("progressLabel").textContent = pct + "%";
}

/* ========================================================
   WIDGET BUILDERS
   ======================================================== */

function renderAnalogDigitalWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔄</span> ${isAr ? "محاكي التناظري والرقمي" : "Analog vs Digital Simulator"}
      </div>
      <div class="ad-tabs">
        <button class="ad-tab-btn active" data-type="analog">${isAr ? "📊 التناظري" : "📊 Analog"}</button>
        <button class="ad-tab-btn" data-type="digital">${isAr ? "💻 الرقمي" : "💻 Digital"}</button>
      </div>
      <div class="ad-screen" id="adScreen"></div>
    </div>
  `;
}

function updateAdScreen(type) {
  const screen = $("adScreen");
  if (!screen) return;
  const isAr = currentLang === 'ar';

  if (type === "analog") {
    screen.innerHTML = `
      <div style="text-align:center; padding:20px;">
        <div style="font-size:3rem; margin-bottom:10px;">🌡️</div>
        <p style="font-weight:700; margin-bottom:8px;">${isAr ? "مقياس حرارة زئبقي" : "Mercury Thermometer"}</p>
        <div style="background:linear-gradient(90deg, #38bdf8, #f43f5e); height:30px; border-radius:15px; position:relative; margin:15px 0;">
          <div style="position:absolute; right:60%; top:-5px; width:4px; height:40px; background:#fff; border-radius:2px;"></div>
        </div>
        <p style="color:var(--ink-soft); font-size:0.9rem;">${isAr ? "الزئبق بيتحرك باستمرار من غير قفزات — كل قيمة ممكنة" : "Mercury moves continuously without jumps — every value possible"}</p>
        <div style="margin-top:15px; padding:10px; background:var(--card); border-radius:8px;">
          <strong>${isAr ? "مثال:" : "Example:"}</strong> ${isAr ? "٢٣.٧° مئوية — قيمة دقيقة جداً" : "23.7°C — very precise value"}
        </div>
      </div>
    `;
  } else {
    screen.innerHTML = `
      <div style="text-align:center; padding:20px;">
        <div style="font-size:3rem; margin-bottom:10px;">💻</div>
        <p style="font-weight:700; margin-bottom:8px;">${isAr ? "عداد كهرباء رقمي" : "Digital Electricity Meter"}</p>
        <div style="display:flex; justify-content:center; gap:5px; margin:15px 0;">
          ${[0,1,0,1,1,0,1,0].map(b => `<div style="width:35px; height:50px; background:${b ? 'var(--accent)' : 'var(--card)'}; border-radius:4px; display:flex; align-items:center; justify-content:center; font-weight:800; color:#fff; font-size:1.2rem;">${b}</div>`).join('')}
        </div>
        <p style="color:var(--ink-soft); font-size:0.9rem;">${isAr ? "الأرقام بتتغير في خطوات منفصلة — 0 أو 1 بس" : "Numbers change in discrete steps — only 0 or 1"}</p>
        <div style="margin-top:15px; padding:10px; background:var(--card); border-radius:8px;">
          <strong>${isAr ? "مثال:" : "Example:"}</strong> ${isAr ? "10101010 = 170 وحدة كهرباء" : "10101010 = 170 electricity units"}
        </div>
      </div>
    `;
  }
}

function renderBitsBytesWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔢</span> ${isAr ? "حاسبة البت والبايت" : "Bits & Bytes Calculator"}
      </div>
      <div class="bb-calculator">
        <div class="bb-input-group">
          <label>${isAr ? "عدد البتات:" : "Number of bits:"}</label>
          <input type="number" id="bitsInput" value="8" min="1" max="32" style="width:80px; padding:5px 10px; border-radius:6px; border:1px solid var(--line); background:var(--card); color:var(--ink);">
        </div>
        <div class="bb-result" id="bbResult">
          <div class="bb-result-item">
            <span>${isAr ? "عدد الاحتمالات:" : "Possibilities:"}</span>
            <strong id="bbPossibilities">256</strong>
          </div>
          <div class="bb-result-item">
            <span>${isAr ? "عدد البايتات:" : "Bytes:"}</span>
            <strong id="bbBytes">1</strong>
          </div>
          <div class="bb-result-item">
            <span>${isAr ? "النظام الثنائي:" : "Binary:"}</span>
            <strong id="bbBinary">00000000</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateBitsBytes() {
  const input = $("bitsInput");
  if (!input) return;
  const bits = Math.max(1, Math.min(32, parseInt(input.value) || 1));
  const possibilities = Math.pow(2, bits);
  const bytes = bits / 8;
  const binary = '0'.repeat(bits);

  const possEl = $("bbPossibilities");
  const bytesEl = $("bbBytes");
  const binaryEl = $("bbBinary");

  if (possEl) possEl.textContent = possibilities.toLocaleString();
  if (bytesEl) bytesEl.textContent = bytes % 1 === 0 ? bytes : bytes.toFixed(2);
  if (binaryEl) binaryEl.textContent = binary;
}

function renderBaseConverterWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔁</span> ${isAr ? "محول الأنظمة العددية" : "Number System Converter"}
      </div>
      <div class="converter-tabs">
        <button class="conv-tab-btn active" data-dir="bin2dec">${isAr ? "ثنائي ← عشري" : "Binary → Decimal"}</button>
        <button class="conv-tab-btn" data-dir="dec2bin">${isAr ? "عشري ← ثنائي" : "Decimal → Binary"}</button>
      </div>
      <div class="converter-body">
        <input type="text" id="convInput" placeholder="${isAr ? "أدخل الرقم..." : "Enter number..."}" style="width:100%; padding:10px; border-radius:8px; border:1px solid var(--line); background:var(--card); color:var(--ink); margin-bottom:10px;">
        <button class="btn btn-primary" id="convBtn">${isAr ? "تحويل" : "Convert"}</button>
        <div class="conv-result" id="convResult"></div>
      </div>
    </div>
  `;
}

function updateConverter() {
  const input = $("convInput");
  const result = $("convResult");
  if (!input || !result) return;
  const isAr = currentLang === 'ar';
  const dir = document.querySelector(".conv-tab-btn.active")?.dataset.dir || "bin2dec";
  const val = input.value.trim();

  if (dir === "bin2dec") {
    if (!/^[01]+$/.test(val)) {
      result.innerHTML = `<span style="color:var(--red);">${isAr ? "أدخل أرقام ثنائية صحيحة (0 و 1 فقط)" : "Enter valid binary digits (0 and 1 only)"}</span>`;
      return;
    }
    const dec = parseInt(val, 2);
    result.innerHTML = `<strong>${isAr ? "النتيجة:" : "Result:"}</strong> ${val}(2) = ${dec}(10)`;
  } else {
    if (!/^\d+$/.test(val)) {
      result.innerHTML = `<span style="color:var(--red);">${isAr ? "أدخل رقم عشري صحيح" : "Enter valid decimal number"}</span>`;
      return;
    }
    const bin = parseInt(val, 10).toString(2);
    result.innerHTML = `<strong>${isAr ? "النتيجة:" : "Result:"}</strong> ${val}(10) = ${bin}(2)`;
  }
}

function renderHexConverterWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔤</span> ${isAr ? "محول النظام السادس عشر" : "Hexadecimal Converter"}
      </div>
      <div class="hex-table">
        <table class="l3-mini-table">
          <tr><th>${isAr ? "عشري" : "Dec"}</th><th>${isAr ? "ثنائي" : "Bin"}</th><th>${isAr ? "ست عشري" : "Hex"}</th></tr>
          <tr><td>0</td><td>0000</td><td>0</td></tr>
          <tr><td>1</td><td>0001</td><td>1</td></tr>
          <tr><td>2</td><td>0010</td><td>2</td></tr>
          <tr><td>3</td><td>0011</td><td>3</td></tr>
          <tr><td>4</td><td>0100</td><td>4</td></tr>
          <tr><td>5</td><td>0101</td><td>5</td></tr>
          <tr><td>6</td><td>0110</td><td>6</td></tr>
          <tr><td>7</td><td>0111</td><td>7</td></tr>
          <tr><td>8</td><td>1000</td><td>8</td></tr>
          <tr><td>9</td><td>1001</td><td>9</td></tr>
          <tr><td>10</td><td>1010</td><td>A</td></tr>
          <tr><td>11</td><td>1011</td><td>B</td></tr>
          <tr><td>12</td><td>1100</td><td>C</td></tr>
          <tr><td>13</td><td>1101</td><td>D</td></tr>
          <tr><td>14</td><td>1110</td><td>E</td></tr>
          <tr><td>15</td><td>1111</td><td>F</td></tr>
        </table>
      </div>
    </div>
  `;
}

function renderCharCodeWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔡</span> ${isAr ? "مستكشف رموز الحروف" : "Character Code Explorer"}
      </div>
      <div class="char-code-demo">
        <div class="char-demo-row">
          <span class="char-demo-label">${isAr ? "الحرف:" : "Character:"}</span>
          <span class="char-demo-char">A</span>
        </div>
        <div class="char-demo-row">
          <span class="char-demo-label">${isAr ? "كود ASCII (عشري):" : "ASCII Code (Decimal):"}</span>
          <span class="char-demo-value">65</span>
        </div>
        <div class="char-demo-row">
          <span class="char-demo-label">${isAr ? "ثنائي:" : "Binary:"}</span>
          <span class="char-demo-value">01000001</span>
        </div>
        <div class="char-demo-row">
          <span class="char-demo-label">${isAr ? "ست عشري:" : "Hexadecimal:"}</span>
          <span class="char-demo-value">41</span>
        </div>
      </div>
      <div class="char-code-note">
        <p>${isAr ? "كل حرف في الكمبيوتر ليه رقم كودي فريد — ده اللي بيخلي الكمبيوتر يفهم النصوص" : "Every character in a computer has a unique code — that's how computers understand text"}</p>
      </div>
    </div>
  `;
}

function renderBinaryCalcWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>➕</span> ${isAr ? "حاسبة الجمع والطرح الثنائي" : "Binary Addition & Subtraction Calculator"}
      </div>
      <div class="binary-calc">
        <div class="calc-row">
          <input type="text" id="binA" placeholder="${isAr ? "مثال: 1010" : "e.g., 1010"}" style="width:100px; padding:8px; border-radius:6px; border:1px solid var(--line); background:var(--card); color:var(--ink);">
          <select id="binOp" style="padding:8px; border-radius:6px; border:1px solid var(--line); background:var(--card); color:var(--ink);">
            <option value="+">+</option>
            <option value="-">−</option>
          </select>
          <input type="text" id="binB" placeholder="${isAr ? "مثال: 0101" : "e.g., 0101"}" style="width:100px; padding:8px; border-radius:6px; border:1px solid var(--line); background:var(--card); color:var(--ink);">
          <button class="btn btn-primary" id="binCalcBtn">${isAr ? "احسب" : "Calculate"}</button>
        </div>
        <div class="calc-result" id="binCalcResult"></div>
      </div>
    </div>
  `;
}

function updateBinaryCalc() {
  const a = $("binA")?.value.trim();
  const b = $("binB")?.value.trim();
  const op = $("binOp")?.value;
  const result = $("binCalcResult");
  if (!a || !b || !result) return;
  const isAr = currentLang === 'ar';

  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) {
    result.innerHTML = `<span style="color:var(--red);">${isAr ? "أدخل أرقام ثنائية صحيحة" : "Enter valid binary numbers"}</span>`;
    return;
  }

  const decA = parseInt(a, 2);
  const decB = parseInt(b, 2);
  let decResult = op === "+" ? decA + decB : decA - decB;
  if (decResult < 0) decResult = 0;
  const binResult = decResult.toString(2);

  result.innerHTML = `
    <strong>${isAr ? "النتيجة:" : "Result:"}</strong><br>
    ${a}(2) ${op} ${b}(2) = ${binResult}(2)<br>
    <span style="color:var(--ink-soft); font-size:0.85rem;">${decA} ${op} ${decB} = ${decResult} (عشري)</span>
  `;
}

function renderComplementWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🔄</span> ${isAr ? "حاسبة المتمم الثنائي" : "2's Complement Calculator"}
      </div>
      <div class="complement-calc">
        <div class="calc-row">
          <input type="text" id="compInput" placeholder="${isAr ? "مثال: 0101" : "e.g., 0101"}" style="width:120px; padding:8px; border-radius:6px; border:1px solid var(--line); background:var(--card); color:var(--ink);">
          <button class="btn btn-primary" id="compBtn">${isAr ? "احسب المتمم" : "Calculate Complement"}</button>
        </div>
        <div class="calc-result" id="compResult"></div>
      </div>
    </div>
  `;
}

function updateComplement() {
  const input = $("compInput")?.value.trim();
  const result = $("compResult");
  if (!input || !result) return;
  const isAr = currentLang === 'ar';

  if (!/^[01]+$/.test(input)) {
    result.innerHTML = `<span style="color:var(--red);">${isAr ? "أدخل رقم ثنائي صحيح" : "Enter valid binary number"}</span>`;
    return;
  }

  const flipped = input.split('').map(b => b === '0' ? '1' : '0').join('');
  const comp = (parseInt(flipped, 2) + 1).toString(2).padStart(input.length, '0');

  result.innerHTML = `
    <strong>${isAr ? "الخطوات:" : "Steps:"}</strong><br>
    ${isAr ? "الأصلي:" : "Original:"} ${input}<br>
    ${isAr ? "بعد العكس:" : "After flip:"} ${flipped}<br>
    ${isAr ? "بعد +1:" : "After +1:"} ${comp}<br>
    <span style="color:var(--ink-soft); font-size:0.85rem;">${isAr ? `المتمم الثنائي لـ ${input} هو ${comp}` : `2's complement of ${input} is ${comp}`}</span>
  `;
}

function renderPCMWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🎵</span> ${isAr ? "محاكي رقمنة الصوت (PCM)" : "Sound Digitization Simulator (PCM)"}
      </div>
      <div class="pcm-visual">
        <div class="pcm-wave" id="pcmWave">
          <svg viewBox="0 0 400 100" style="width:100%; height:100px;">
            <path d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50" fill="none" stroke="var(--accent)" stroke-width="2"/>
            <line x1="0" y1="50" x2="400" y2="50" stroke="var(--line)" stroke-width="1" stroke-dasharray="5,5"/>
          </svg>
        </div>
        <div class="pcm-steps">
          <div class="pcm-step">
            <span class="pcm-step-num">1</span>
            <span>${isAr ? "أخذ العينات" : "Sampling"}</span>
          </div>
          <div class="pcm-step">
            <span class="pcm-step-num">2</span>
            <span>${isAr ? "التحويل الكمي" : "Quantization"}</span>
          </div>
          <div class="pcm-step">
            <span class="pcm-step-num">3</span>
            <span>${isAr ? "الترميز" : "Encoding"}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPixelGridWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🖼️</span> ${isAr ? "محاكي البكسلات" : "Pixel Grid Simulator"}
      </div>
      <div class="pixel-grid" id="pixelGrid">
        ${Array.from({length: 25}, (_, i) => `<div class="pixel-cell" data-idx="${i}" style="background:${i % 2 === 0 ? 'var(--accent)' : 'var(--card)'};"></div>`).join('')}
      </div>
      <p style="text-align:center; margin-top:10px; color:var(--ink-soft); font-size:0.85rem;">
        ${isAr ? "كل خلية = بكسل — الصورة الرقمية بتتكون من ملايين البكسلات دي" : "Each cell = a pixel — digital images are made of millions of these pixels"}
      </p>
    </div>
  `;
}

function renderCompressionWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🗜️</span> ${isAr ? "محاكي ضغط البيانات" : "Data Compression Simulator"}
      </div>
      <div class="compression-demo">
        <div class="comp-row">
          <span class="comp-label">${isAr ? "قبل الضغط:" : "Before:"}</span>
          <span class="comp-value" id="compBefore">AAAAABBAAAABBBBBBBBAAAAAA</span>
        </div>
        <div class="comp-row">
          <span class="comp-label">${isAr ? "بعد الضغط:" : "After:"}</span>
          <span class="comp-value" id="compAfter">A5B2A4B8A6</span>
        </div>
        <div class="comp-row">
          <span class="comp-label">${isAr ? "نسبة الضغط:" : "Ratio:"}</span>
          <span class="comp-value" id="compRatio">40%</span>
        </div>
      </div>
    </div>
  `;
}

function renderDesignPrinciplesWidget() {
  const isAr = currentLang === 'ar';
  return `
    <div class="interactive-widget">
      <div class="widget-title">
        <span>🎨</span> ${isAr ? "مبادئ تصميم المعلومات" : "Information Design Principles"}
      </div>
      <div class="design-principles">
        <div class="principle-card">
          <span class="principle-icon">📊</span>
          <strong>${isAr ? "التجريد" : "Abstraction"}</strong>
          <p>${isAr ? "نقل المعلومة ببساطة من وسط بيانات ضخمة" : "Convey information simply from large data"}</p>
        </div>
        <div class="principle-card">
          <span class="principle-icon">📈</span>
          <strong>${isAr ? "التصور" : "Visualization"}</strong>
          <p>${isAr ? "تمثيل المعلومات بصرياً لسهولة الفهم" : "Represent information visually for clarity"}</p>
        </div>
        <div class="principle-card">
          <span class="principle-icon">🏗️</span>
          <strong>${isAr ? "الهيكلة" : "Structuring"}</strong>
          <p>${isAr ? "تنظيم المعلومات حسب العلاقات والمستويات" : "Organize information by relationships and levels"}</p>
        </div>
      </div>
    </div>
  `;
}

/* ========================================================
   RENDER STAGE
   ======================================================== */
function renderStage(i) {
  const stage = LECT4_STAGES[i];
  lect4State.current = i;
  lect4State.visited.add(stage.id);
  saveLect4State();

  let widgetHTML = "";
  if (stage.interactiveType === "analog_digital_sim") widgetHTML = renderAnalogDigitalWidget();
  else if (stage.interactiveType === "bits_bytes_calc") widgetHTML = renderBitsBytesWidget();
  else if (stage.interactiveType === "base_converter") widgetHTML = renderBaseConverterWidget();
  else if (stage.interactiveType === "hex_converter") widgetHTML = renderHexConverterWidget();
  else if (stage.interactiveType === "char_code_explorer") widgetHTML = renderCharCodeWidget();
  else if (stage.interactiveType === "binary_calc") widgetHTML = renderBinaryCalcWidget();
  else if (stage.interactiveType === "complement_calculator") widgetHTML = renderComplementWidget();
  else if (stage.interactiveType === "pcm_visualizer") widgetHTML = renderPCMWidget();
  else if (stage.interactiveType === "pixel_grid_sim") widgetHTML = renderPixelGridWidget();
  else if (stage.interactiveType === "compression_demo") widgetHTML = renderCompressionWidget();
  else if (stage.interactiveType === "design_principles") widgetHTML = renderDesignPrinciplesWidget();

  const isAr = currentLang === 'ar';

  stagePanel.innerHTML = `
    <div class="stage-header">
      <div class="stage-eyebrow">
        <span class="stage-category">${stage.category}</span>
        <span class="stage-num">${isAr ? 'محطة ' + String(i + 1).padStart(2,'0') + ' من ' + String(LECT4_STAGES.length).padStart(2,'0') : 'Stage ' + String(i + 1).padStart(2,'0') + ' / ' + String(LECT4_STAGES.length).padStart(2,'0')}</span>
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

  // Bind Analog/Digital Tabs
  stagePanel.querySelectorAll(".ad-tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      stagePanel.querySelectorAll(".ad-tab-btn").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      updateAdScreen(tab.dataset.type);
    });
  });
  if (stage.interactiveType === "analog_digital_sim") {
    updateAdScreen("analog");
  }

  // Bind Bits/Bytes Calculator
  const bitsInput = $("bitsInput");
  if (bitsInput) {
    bitsInput.addEventListener("input", updateBitsBytes);
    updateBitsBytes();
  }

  // Bind Base Converter
  stagePanel.querySelectorAll(".conv-tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      stagePanel.querySelectorAll(".conv-tab-btn").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      updateConverter();
    });
  });
  const convBtn = $("convBtn");
  if (convBtn) {
    convBtn.addEventListener("click", updateConverter);
    const convInput = $("convInput");
    if (convInput) convInput.addEventListener("input", updateConverter);
  }

  // Bind Binary Calculator
  const binCalcBtn = $("binCalcBtn");
  if (binCalcBtn) {
    binCalcBtn.addEventListener("click", updateBinaryCalc);
  }

  // Bind Complement Calculator
  const compBtn = $("compBtn");
  if (compBtn) {
    compBtn.addEventListener("click", updateComplement);
  }

  // Navigation Buttons State
  $("prevBtn").disabled = i === 0;
  $("nextBtn").innerHTML = i === LECT4_STAGES.length - 1
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
  LECT4_MATCH_ITEMS.forEach(item => {
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

          if (matchedPairs === LECT4_MATCH_ITEMS.length) {
            $("matchResult").classList.remove("hidden");
            $("matchResult").innerHTML = isAr
              ? `🏆 <strong>رائع جداً!</strong> لقد وفقت بين جميع مفاهيم وتعريفات الوحدة الرابعة بنجاح تام!`
              : `🏆 <strong>Brilliant!</strong> You matched all Unit 4 core concepts and definitions perfectly!`;
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
    renderStage(lect4State.visited.size >= LECT4_STAGES.length ? lect4State.current : 0);
    document.getElementById("lectureExperience").scrollIntoView({ behavior: "smooth" });
  });

  $("prevBtn")?.addEventListener("click", () => {
    if (lect4State.current > 0) goToStage(lect4State.current - 1);
  });

  $("nextBtn")?.addEventListener("click", () => {
    if (lect4State.current === LECT4_STAGES.length - 1) {
      $("finalChallengeSection").classList.remove("hidden");
      renderFinalMatchGame();
      document.getElementById("finalChallengeSection").scrollIntoView({ behavior: "smooth" });
    } else {
      goToStage(lect4State.current + 1);
    }
  });

  $("resetMatchBtn")?.addEventListener("click", () => {
    $("matchResult").classList.add("hidden");
    renderFinalMatchGame();
  });
});

window.addEventListener('langChanged', () => {
  LECT4_STAGES = currentLang === 'ar' ? LECT4_STAGES_AR : LECT4_STAGES_EN;
  LECT4_MATCH_ITEMS = currentLang === 'ar' ? LECT4_MATCH_ITEMS_AR : LECT4_MATCH_ITEMS_EN;

  buildTopicNavigation();
  updateProgressUI();

  if (!$("lectureExperience")?.classList.contains("hidden")) {
    renderStage(lect4State.current);
  }

  if (!$("finalChallengeSection")?.classList.contains("hidden")) {
    renderFinalMatchGame();
  }
});