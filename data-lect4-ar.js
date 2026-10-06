/* ============================================================
   الفصل الرابع: المحاضرة الرابعة (التمثيل الرقمي للبيانات والوسائط)
   بيانات المراحل والتحدي الختامي باللغة العربية
   المصدر: lect4ar.pdf ص ٦٢-٩٥ (٦-١ إلى ٦-١٠)
   ============================================================ */

const LECT4_STAGES_AR = [
  {
    id: "analog-digital",
    category: "القسم الأول: أساسيات التمثيل الرقمي",
    title: "التناظري والرقمي",
    tagline: "من العالم المستمر إلى العالم المنفصل: كيف يتحول الصوت والصورة إلى أصفار وآحاد؟",
    glyph: "🔄",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "التناظري يتغير باستمرار مثل درجة الحرارة، بينما الرقمي يتغير في خطوات منفصلة مثل عداد الكهرباء.",
    interactiveType: "analog_digital_sim",
    story: [
      `<p class="story-lead">في عالمنا الحقيقي، الأشياء بتتغير <strong>بشكل مستمر</strong> — درجة الحرارة بترتفع وتنزل بسلاسة، والوقت بيجري من غير ما يقف. لكن الكمبيوتر مش بيفهم إلا <strong>خطوات منفصلة</strong>. هنا يجي دور التمثيل الرقمي:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📊</strong> ١. التناظري (Analog)</h4>
            <span class="card-badge badge-blue">كميات مستمرة</span>
          </div>
          <p class="card-desc">كميات بتتغير <strong>تدريجياً وبشكل مستمر</strong> وقابلة للقياس بدقة فائقة، زي: الكتلة، الوقت، درجة الحرارة.</p>
          <p class="card-example">🔍 <em>مثال:</em> مقياس الحرارة الزئبقي — عمود الزئبق بيتحرك بسلاسة من غير قفزات.</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>💻</strong> ٢. الرقمي (Digital)</h4>
            <span class="card-badge badge-amber">كميات منفصلة</span>
          </div>
          <p class="card-desc">كميات بتتغير في <strong>خطوات محددة ومنفصلة</strong> وبتتمثل رقمياً بتقسيمها لفترات منتظمة.</p>
          <p class="card-example">🔍 <em>مثال:</em> عداد الكهرباء — بيعد بوحدات منفصلة من غير كسور.</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">🔄</span>
          <h4 class="callout-title">التحويل بين العالمين</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📥</span> <strong>تحويل من تناظري إلى رقمي (A/D):</strong> عملية تحويل البيانات التناظرية إلى بيانات رقمية — وده اللي بيحصل لما بتسجل صوتك بالميكروفون.</li>
          <li><span class="list-bullet-icon">📤</span> <strong>تحويل من رقمي إلى تناظري (D/A):</strong> تحويل البيانات الرقمية مرة أخرى لتناظرية — وده اللي بيحصل لما بتسمع الصوت من السماعات.</li>
        </ul>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>✨</strong> مزايا البيانات الرقمية</h4>
          <span class="card-badge badge-green">ليه الرقمي أفضل؟</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item">📋 يمكن استنساخها دون إهدار تجميع البيانات</span>
          <span class="pill-item">✏️ من السهل تعديل وتحرير البيانات</span>
          <span class="pill-item">🚀 من الممكن نقل البيانات بكفاءة</span>
          <span class="pill-item">🎨 من الممكن دمج أنواع مختلفة من الوسائط</span>
        </div>
      </div>`
    ],
    takeaway: "التناظري = كميات مستمرة ⬝ الرقمي = كميات منفصلة ⬝ A/D تحويل من تناظري لرقمي ⬝ D/A العكس ⬝ الرقمي أسهل في التعديل والنقل والدمج.",
    funFact: "أول ما بتتكلم في الميكروفون، صوتك (تناظري) بيتحول لأرقام (رقمي) في أجزاء من الثانية — وده اللي بيخلي المكالمات التليفونية تشتغل!",
    quiz: {
      question: "مقياس حرارة يمثل كمية مستمرة باستخدام طول عمود الزئبق — ده مثال على:",
      options: [
        "البيانات التناظرية (Analog Data)",
        "البيانات الرقمية (Digital Data)",
        "النظام الثنائي (Binary System)",
        "التحويل من رقمي إلى تناظري (D/A)"
      ],
      answer: 0,
      explain: "مقياس الحرارة الزئبقي بيمثل كمية مستمرة بتتغير تدريجياً — وده تعريف البيانات التناظرية."
    }
  },
  {
    id: "binary-bits-bytes",
    category: "القسم الأول: أساسيات التمثيل الرقمي",
    title: "النظام الثنائي وكمية البيانات",
    tagline: "البت والبايت: أصغر وحدات المعلومات اللي بيبني عليها الكمبيوتر كل حاجة",
    glyph: "🔢",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "البت أصغر وحدة معلومات (0 أو 1)، والبايت = 8 بت، وكل وحدة أكبر بتساوي ١٠٢٤ من اللي قبلها.",
    interactiveType: "bits_bytes_calc",
    story: [
      `<p class="story-lead">الكمبيوتر بيفهم حاجتين بس: <strong>تشغيل وإيقاف</strong> — زي المفتاح الكهربائي. وده اللي بنسميه <strong>النظام الثنائي (Binary System)</strong>، واللي بيستخدم رقمين بس: <strong>0 و 1</strong>.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>⚡</strong> البت (Bit): أصغر وحدة معلومات</h4>
          <span class="card-badge">حالتين بس: 0 أو 1</span>
        </div>
        <p class="card-desc">البت ليه <strong>حالتين فقط</strong>: "المفتاح مفتوح أو مغلق"، "الجهد عالي أو منخفض"، "المغناطيس شمال أو جنوب".</p>
        <p class="card-desc">كل بت إضافي <strong>يضاعف</strong> عدد الاحتمالات:</p>
        <div class="pill-cloud">
          <span class="pill-item">1 بت = احتمالان (0 أو 1)</span>
          <span class="pill-item">2 بت = ٤ احتمالات (00, 01, 10, 11)</span>
          <span class="pill-item">3 بت = ٨ احتمالات</span>
          <span class="pill-item">n بت = 2ⁿ احتمال</span>
        </div>
      </div>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📦</strong> البايت (Byte): وحدة العملية</h4>
          <span class="card-badge badge-blue">1 بايت = 8 بت</span>
        </div>
        <p class="card-desc">البايت هو الوحدة الأساسية اللي بيتعامل معاها الكمبيوتر. بيتكون من <strong>8 بت</strong> وبيقدر يمثل <strong>256 قيمة مختلفة</strong> (2⁸).</p>
        <p class="card-example">🔍 <em>مثال:</em> الحرف "A" في الكمبيوتر بيتخزن كبايت واحد: 01000001</p>
      </div>`,
      `<div class="story-card card-amber-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📐</strong> وحدات البيانات: من البايت للتيرابايت</h4>
          <span class="card-badge badge-amber">كل وحدة = ١٠٢٤ من اللي قبلها</span>
        </div>
        <table class="l3-mini-table">
          <tr><th>الوحدة</th><th>اختصار</th><th>تساوي</th></tr>
          <tr><td>كيلوبايت</td><td>KB</td><td>1,024 بايت</td></tr>
          <tr><td>ميجابايت</td><td>MB</td><td>1,024 كيلوبايت</td></tr>
          <tr><td>جيجابايت</td><td>GB</td><td>1,024 ميجابايت</td></tr>
          <tr><td>تيرابايت</td><td>TB</td><td>1,024 جيجابايت</td></tr>
        </table>
      </div>`
    ],
    takeaway: "البت = أصغر وحدة (0 أو 1) ⬝ البايت = 8 بت = 256 قيمة ⬝ كل وحدة أكبر = 1024 من اللي قبلها ⬝ n بت يمثل 2ⁿ احتمال.",
    funFact: "لو عندك 1 تيرابايت (TB) من المساحة، تقدر تخزن حوالي 250,000 صورة عالية الجودة أو 500 ساعة فيديو!",
    quiz: {
      question: "كم عدد القيم المختلفة اللي ممكن يمثلها 1 بايت (8 بت)؟",
      options: [
        "256 قيمة (2⁸)",
        "8 قيم",
        "64 قيمة (2⁶)",
        "1024 قيمة (2¹⁰)"
      ],
      answer: 0,
      explain: "1 بايت = 8 بت، وكل بت ليه حالتين، يعني 2⁸ = 256 قيمة مختلفة."
    }
  },
  {
    id: "decimal-binary-conversion",
    category: "القسم الأول: أساسيات التمثيل الرقمي",
    title: "التحويل بين العشري والثنائي",
    tagline: "إزاي تحول الأرقام العادية (اللي بنستخدمها يومياً) لأرقام الكمبيوتر الثنائية؟",
    glyph: "🔁",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "التحويل من ثنائي لعشري: اضرب كل رقم في قوة 2 واجمع. التحويل من عشري لثنائي: اقسم على 2 واكتب البواقي من الآخر للأول.",
    interactiveType: "base_converter",
    story: [
      `<p class="story-lead">إحنا بنستخدم <strong>النظام العشري</strong> (من 0 لـ 9) في حياتنا اليومية، لكن الكمبيوتر بيستخدم <strong>النظام الثنائي</strong> (0 و 1 بس). علشان كده لازم نعرف نحول بينهم:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➡️</strong> من ثنائي إلى عشري</h4>
            <span class="card-badge badge-blue">اضرب واجمع</span>
          </div>
          <p class="card-desc">اضرب كل رقم ثنائي في <strong>قوة 2</strong> حسب موقعه (بدءاً من اليمين بـ 2⁰)، ثم اجمع النتائج.</p>
          <p class="card-example">🔍 <em>مثال:</em> 1011(2) = (1×2⁰) + (1×2¹) + (0×2²) + (1×2³) = 1 + 2 + 0 + 8 = <strong>11</strong></p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>⬅️</strong> من عشري إلى ثنائي</h4>
            <span class="card-badge badge-amber">اقسم على 2 واجمع البواقي</span>
          </div>
          <p class="card-desc">اقسم العدد العشري على 2 بشكل متكرر، وخذ <strong>باقي القسمة</strong> في كل مرة، ثم اكتب البواقي من <strong>الأخير إلى الأول</strong>.</p>
          <p class="card-example">🔍 <em>مثال:</em> 6 عشري → 6÷2=3 والباقي 0 → 3÷2=1 والباقي 1 → 1÷2=0 والباقي 1 → النتيجة: <strong>110(2)</strong></p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <h4 class="callout-title">قاعدة سريعة للتحويل</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🔢</span> قوى العدد 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024...</li>
          <li><span class="list-bullet-icon">📝</span> من ثنائي لعشري: اكتب قوى 2 تحت كل رقم، واجمع اللي تحتها 1</li>
          <li><span class="list-bullet-icon">📝</span> من عشري لثنائي: اقسم على 2 واكتب البواقي من الأسفل للأعلى</li>
        </ul>
      </div>`
    ],
    takeaway: "من ثنائي لعشري: اضرب كل رقم في قوة 2 واجمع ⬝ من عشري لثنائي: اقسم على 2 واكتب البواقي من الآخر للأول ⬝ قوى 2: 1,2,4,8,16,32,64,128...",
    funFact: "الرقم 10 في النظام العشري هو 1010 في النظام الثنائي — لو لاحظت، الأرقام الثنائية بتطول بسرعة لأن كل خانة بتضاعف القيم!",
    quiz: {
      question: "حوّل العدد الثنائي 1010(2) إلى النظام العشري:",
      options: [
        "10",
        "12",
        "8",
        "5"
      ],
      answer: 0,
      explain: "1010(2) = (0×2⁰) + (1×2¹) + (0×2²) + (1×2³) = 0 + 2 + 0 + 8 = 10"
    }
  },
  {
    id: "hexadecimal",
    category: "القسم الأول: أساسيات التمثيل الرقمي",
    title: "النظام السادس عشر (Hexadecimal)",
    tagline: "لما الأرقام الثنائية بتطول أوي، بنختصرها بالنظام السادس عشر — حروف وأرقام في نظام واحد",
    glyph: "🔤",
    image: "assets/images/media_types.jpg",
    visualCaption: "النظام السادس عشر يستخدم 16 رمز: الأرقام 0-9 والحروف A-F، وكل رقم ست عشري = 4 بت بالظبط.",
    interactiveType: "hex_converter",
    story: [
      `<p class="story-lead">الأرقام الثنائية بتطول بسرعة وبتبقى صعبة القراءة. علشان كده بنستخدم <strong>النظام السادس عشر (Hexadecimal)</strong> — نظام مختصر بيستخدم <strong>16 رمز</strong>: الأرقام من 0 لـ 9 والحروف من A لـ F.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📊</strong> جدول المراسلة بين الأنظمة الثلاثة</h4>
          <span class="card-badge">احفظ أول 16 قيمة</span>
        </div>
        <table class="l3-mini-table">
          <tr><th>عشري</th><th>ثنائي</th><th>ست عشري</th><th>عشري</th><th>ثنائي</th><th>ست عشري</th></tr>
          <tr><td>0</td><td>0000</td><td>0</td><td>8</td><td>1000</td><td>8</td></tr>
          <tr><td>1</td><td>0001</td><td>1</td><td>9</td><td>1001</td><td>9</td></tr>
          <tr><td>2</td><td>0010</td><td>2</td><td>10</td><td>1010</td><td>A</td></tr>
          <tr><td>3</td><td>0011</td><td>3</td><td>11</td><td>1011</td><td>B</td></tr>
          <tr><td>4</td><td>0100</td><td>4</td><td>12</td><td>1100</td><td>C</td></tr>
          <tr><td>5</td><td>0101</td><td>5</td><td>13</td><td>1101</td><td>D</td></tr>
          <tr><td>6</td><td>0110</td><td>6</td><td>14</td><td>1110</td><td>E</td></tr>
          <tr><td>7</td><td>0111</td><td>7</td><td>15</td><td>1111</td><td>F</td></tr>
        </table>
      </div>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➡️</strong> من ثنائي إلى ست عشري</h4>
            <span class="card-badge badge-blue">اقسم لمجموعات من 4</span>
          </div>
          <p class="card-desc">افصل الرقم الثنائي إلى <strong>مجموعات من 4 أرقام</strong> بدءاً من اليمين، وحول كل مجموعة لقيمتها الست عشرية.</p>
          <p class="card-example">🔍 <em>مثال:</em> 10011010(2) → 1001/1010 → 9/A → <strong>9A(16)</strong></p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>⬅️</strong> من ست عشري إلى ثنائي</h4>
            <span class="card-badge badge-amber">حول كل رقم لـ 4 بت</span>
          </div>
          <p class="card-desc">حول كل رقم ست عشري إلى <strong>4 بت ثنائية</strong>، ورتبهم بالتسلسل.</p>
          <p class="card-example">🔍 <em>مثال:</em> A4(16) → A=1010, 4=0100 → <strong>10100100(2)</strong></p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <h4 class="callout-title">ليه النظام السادس عشر مهم؟</h4>
        </div>
        <p class="card-desc">كل رقم ست عشري = <strong>4 بت بالظبط</strong>. يعني بايت واحد (8 بت) = رقمين ست عشرين بس! ده بيخلي قراءة البيانات أسهل بكتير من الثنائي الطويل.</p>
      </div>`
    ],
    takeaway: "النظام السادس عشر = 16 رمز (0-9 + A-F) ⬝ كل رقم ست عشري = 4 بت ⬝ من ثنائي: اقسم لمجموعات 4 من اليمين ⬝ من ست عشري: حول كل رقم لـ 4 بت.",
    funFact: "المبرمجين بيستخدموا النظام السادس عشر في كل حتة — عناوين الذاكرة، أكواد الألوان (زي #FF5733)، وأكواد الأخطاء كلها بالست عشري!",
    quiz: {
      question: "حوّل العدد الثنائي 11011011(2) إلى النظام السادس عشر:",
      options: [
        "DB(16)",
        "BD(16)",
        "6D(16)",
        "B7(16)"
      ],
      answer: 0,
      explain: "11011011(2) → 1101/1011 → D/B → DB(16)"
    }
  },
  {
    id: "character-codes",
    category: "القسم الثاني: تمثيل البيانات",
    title: "التمثيل الرقمي للحروف",
    tagline: "إزاي الكمبيوتر بيفهم الحروف؟ من ASCII لليونيكود — كل حرف ليه رقم كودي خاص بيه",
    glyph: "🔡",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "كل حرف في الكمبيوتر ليه رقم كودي فريد — ASCII للإنجليزي، ويونيكود لكل لغات العالم.",
    interactiveType: "char_code_explorer",
    story: [
      `<p class="story-lead">الكمبيوتر مش بيفهم حروف — بيفهم <strong>أرقام</strong> بس. علشان كده كل حرف ليه <strong>رقم كودي (Character Code)</strong> فريد بيمثله.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔤</strong> كود ASCII</h4>
            <span class="card-badge badge-blue">128 حرف (1 بايت)</span>
          </div>
          <p class="card-desc">نظام ترميز بيمثل <strong>الحروف الإنجليزية والأرقام والرموز</strong> وحروف التحكم. كل حرف = 1 بايت (8 بت) = 256 قيمة ممكنة.</p>
          <p class="card-example">🔍 <em>مثال:</em> الحرف "A" = 65 عشري = 01000001 ثنائي = 41 ست عشري</p>
          <p class="card-example">⚠️ <em>عيبه:</em> مش بيدعم لغات غير الإنجليزية (زي العربية واليابانية)</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🌍</strong> يونيكود (Unicode)</h4>
            <span class="card-badge badge-amber">كل لغات العالم</span>
          </div>
          <p class="card-desc">نظام ترميز موحد بيجمع <strong>حروف كل لغات العالم</strong> في نظام واحد. فيه أنواع زي UTF-8 و UTF-16.</p>
          <p class="card-example">🔍 <em>مثال:</em> الحرف "م" العربي ليه كود يونيكود مختلف عن الحرف "M" الإنجليزي</p>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🔄</strong> التشفير وفك التشفير</h4>
          <span class="card-badge badge-green">Encoding & Decoding</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📝</span> <strong>التشفير (Encoding):</strong> تحويل النص لأكواد رقمية عشان الكمبيوتر يخزنها</li>
          <li><span class="list-bullet-icon">📖</span> <strong>فك التشفير (Decoding):</strong> تحويل الأكواد الرقمية لحروف مرة أخرى عشان نقراها</li>
          <li><span class="list-bullet-icon">⚠️</span> <strong>فساد الحروف (Character Corruption):</strong> بيحصل لما طريقة التشفير وفك التشفير مش متطابقة — فتطلع حروف غريبة زي "?????"</li>
        </ul>
      </div>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>✏️</strong> الخط (Font): شكل الحرف</h4>
          <span class="card-badge">الكود + الخط = الحرف الظاهر</span>
        </div>
        <p class="card-desc">عشان تظهر الحروف على الشاشة أو الطابعة، محتاجين حاجتين: <strong>رمز الحرف (Character Code)</strong> و<strong>الخط (Font)</strong>. نفس الكود ممكن يظهر بشكل مختلف حسب الخط المستخدم.</p>
        <div class="pill-cloud">
          <span class="pill-item">Sans-serif (غير مزخرف)</span>
          <span class="pill-item">Serif (مزخرف)</span>
          <span class="pill-item">Semi-cursive (شبه مخطوط)</span>
        </div>
      </div>`
    ],
    takeaway: "كل حرف ليه رقم كودي فريد ⬝ ASCII = 128 حرف إنجليزي (1 بايت) ⬝ يونيكود = كل لغات العالم ⬝ التشفير وفك التشفير لازم يكونوا متطابقين ⬝ الخط هو شكل الحرف الظاهر.",
    funFact: "رسالة "Hello" في الكمبيوتر بتتخزن كالأرقام التالية: 72-101-108-108-111 — وكل رقم ده كود ASCII لحرف من الحروف!",
    quiz: {
      question: "في نظام ASCII، الحرف "A" بيمثل بأي رقم عشري؟",
      options: [
        "65",
        "97",
        "48",
        "32"
      ],
      answer: 0,
      explain: "في جدول ASCII، الحرف الكبير A = 65 عشري = 01000001 ثنائي."
    }
  },
  {
    id: "binary-arithmetic",
    category: "القسم الثاني: تمثيل البيانات",
    title: "جمع وطرح الأرقام الثنائية",
    tagline: "الكمبيوتر بيجمع ويطرح بطريقة مختلفة شوية — بس نفس الفكرة اللي بنعملها في العشري",
    glyph: "➕",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "الجمع الثنائي: 1+1=10 (مش 2!). الطرح الثنائي: بنستعير من الخانة اللي قبلها.",
    interactiveType: "binary_calc",
    story: [
      `<p class="story-lead">الكمبيوتر بيجمع ويطرح الأرقام الثنائية <strong>خانة بخانة</strong>، زي ما بنعمل في النظام العشري بالظبط — بس الفرق إن عندنا رقمين بس: 0 و 1.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➕</strong> الجمع الثنائي</h4>
            <span class="card-badge badge-blue">قواعد بسيطة</span>
          </div>
          <table class="l3-mini-table">
            <tr><th>العملية</th><th>النتيجة</th><th>ملاحظة</th></tr>
            <tr><td>0 + 0</td><td>0</td><td>من غير حمل</td></tr>
            <tr><td>0 + 1</td><td>1</td><td>من غير حمل</td></tr>
            <tr><td>1 + 1</td><td>10</td><td>0 مع حمل 1 للخانة الجاية</td></tr>
            <tr><td>1 + 1 + 1</td><td>11</td><td>1 مع حمل 1 للخانة الجاية</td></tr>
          </table>
          <p class="card-example">🔍 <em>مثال:</em> 0101(2) + 1001(2) = 1100(2) — نفس فكرة 5 + 9 = 14 في العشري</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➖</strong> الطرح الثنائي</h4>
            <span class="card-badge badge-amber">الاستيعار</span>
          </div>
          <table class="l3-mini-table">
            <tr><th>العملية</th><th>النتيجة</th><th>ملاحظة</th></tr>
            <tr><td>0 - 0</td><td>0</td><td>من غير استيعار</td></tr>
            <tr><td>1 - 0</td><td>1</td><td>من غير استيعار</td></tr>
            <tr><td>1 - 1</td><td>0</td><td>من غير استيعار</td></tr>
            <tr><td>0 - 1</td><td>1</td><td>مع استيعار 1 من الخانة الجاية</td></tr>
          </table>
          <p class="card-example">🔍 <em>مثال:</em> 1010(2) - 0110(2) = 0100(2) — نفس فكرة 10 - 6 = 4 في العشري</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-red">
        <div class="callout-header">
          <span class="callout-icon">⚠️</span>
          <h4 class="callout-title">قاعدة مهمة: الحمل والاستيعار</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">⬆️</span> <strong>الحمل (Carry):</strong> لما 1 + 1 = 10، بنحمل 1 للخانة الجاية — زي "معانا الواحد" في الجمع العشري</li>
          <li><span class="list-bullet-icon">⬇️</span> <strong>الاستيعار (Borrow):</strong> لما نطرح 1 من 0، بنستعير 1 من الخانة الجاية وبتبقى 2 — زي الاستيعار في الطرح العشري</li>
        </ul>
      </div>`
    ],
    takeaway: "1+1=10 في الثنائي (مش 2!) ⬝ الحمل زي "معانا الواحد" ⬝ الاستيعار بنستعير من الخانة الجاية ⬝ نفس قواعد العشري بس بأرقام أقل.",
    funFact: "معالج الكمبيوتر فيه ملايين الترانزستورات بتعمل عمليات جمع وطرح ثنائية في الثانية الواحدة — وده أساس كل حاجة بتعملها على الجهاز!",
    quiz: {
      question: "ما نتيجة الجمع الثنائي: 1010(2) + 0101(2)؟",
      options: [
        "1111(2)",
        "1100(2)",
        "1011(2)",
        "1001(2)"
      ],
      answer: 0,
      explain: "1010 + 0101 = 1111 — نفس فكرة 10 + 5 = 15 في النظام العشري."
    }
  },
  {
    id: "complements",
    category: "القسم الثاني: تمثيل البيانات",
    title: "تمثيل الأرقام السالبة بالمتممات",
    tagline: "الكمبيوتر معندوش علامة ناقص! إزاي بيمثل الأرقام السالبة؟ بطريقة المتممات الذكية",
    glyph: "🔄",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "المتمم الثنائي: عكس كل بت (0→1 و 1→0) ثم أضف 1 — ده بيمثل نفس الرقم  but سالب.",
    interactiveType: "complement_calculator",
    story: [
      `<p class="story-lead">الكمبيوتر معندوش علامة "ناقص" — بيمثل الأرقام السالبة بطريقة ذكية اسمها <strong>المتممات (Complements)</strong>. الفكرة إننا بنحول الطرح لجمع!</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔄</strong> المتمم الثنائي (2's Complement)</h4>
            <span class="card-badge badge-blue">الطريقة الأساسية</span>
          </div>
          <p class="card-desc">خطوات حساب المتمم الثنائي لأي رقم:</p>
          <div class="rule-checklist">
            <div class="checklist-step"><div class="step-number">١</div><div><strong>عكس كل بت:</strong> حوّل كل 0 لـ 1 وكل 1 لـ 0 (ده اسمه متمم الآحاد)</div></div>
            <div class="checklist-step"><div class="step-number">٢</div><div><strong>أضف 1:</strong> ضيف 1 للنتيجة النهائية (ده متمم الاثنين)</div></div>
          </div>
          <p class="card-example">🔍 <em>مثال:</em> متمم 0101(2): العكس = 1010، ثم +1 = <strong>1011(2)</strong> (ده تمثيل -5)</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➖</strong> الطرح باستخدام المتممات</h4>
            <span class="card-badge badge-amber">الطرح = جمع مع المتمم</span>
          </div>
          <p class="card-desc">الكمبيوتر بيعمل الطرح كده:</p>
          <div class="rule-checklist">
            <div class="checklist-step"><div class="step-number">١</div><div>أوجد <strong>متمم</strong> المطروح</div></div>
            <div class="checklist-step"><div class="step-number">٢</div><div>اجمع المطروح منه مع المتمم</div></div>
            <div class="checklist-step"><div class="step-number">٣</div><div><strong>تجاهل</strong> الخانة الرئيسية (الحمل الزائد)</div></div>
          </div>
          <p class="card-example">🔍 <em>مثال:</em> 1000(2) - 0111(2) → 1000 + 1001 = 10001 → تجاهل الأول → <strong>0001(2)</strong> = 1</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <h4 class="callout-title">ليه المتممات مهمة؟</h4>
        </div>
        <p class="card-desc">المتممات بتخلي الكمبيوتر يستخدم <strong>نفس الدوائر</strong> في الجمع والطرح — من غير ما يحتاج دوائر إضافية للطرح. ده بيوفر في التصميم والتكلفة!</p>
      </div>`
    ],
    takeaway: "المتمم الثنائي = عكس كل بت + 1 ⬝ الطرح بالمتممات: اجمع مع متمم المطروح وتجاهل الحمل ⬝ نفس الدوائر بتعمل جمع وطرح.",
    funFact: "في نظام 8 بت، الأرقام من -128 لـ +127 ممكن تتمثل — وده لأن أول بت بيكون علامة (0 موجب، 1 سالب) والباقي بيمثل القيمة!",
    quiz: {
      question: "ما هو المتمم الثنائي (2's Complement) للرقم 0101(2)؟",
      options: [
        "1011(2)",
        "1010(2)",
        "0101(2)",
        "1101(2)"
      ],
      answer: 0,
      explain: "عكس 0101 = 1010، ثم +1 = 1011 — ده تمثيل الرقم -5 في نظام المتممات."
    }
  },
  {
    id: "sound-digitization",
    category: "القسم الثالث: رقمنة الوسائط",
    title: "رقمنة الصوت",
    tagline: "من الموجة التناظرية المستمرة إلى ملف رقمي — خطوات أخذ العينات والتحويل الكمي والترميز",
    glyph: "🎵",
    image: "assets/images/smartphone.jpg",
    visualCaption: "الموجة الصوتية التناظرية بتتقطع لنقاط (أخذ العينات)، كل نقطة بتتقرب لأقرب قيمة (تحويل كمي)، وبعدين بتتحول لأرقام ثنائية (ترميز).",
    interactiveType: "pcm_visualizer",
    story: [
      `<p class="story-lead">الصوت في الطبيعة <strong>تناظري</strong> — موجة مستمرة بتتحرك في الهواء. عشان نخزنه في الكمبيوتر، لازم نحوله لرقمي بطريقة اسمها <strong>PCM (Pulse Code Modulation)</strong>.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📊</strong> خطوات رقمنة الصوت (PCM)</h4>
          <span class="card-badge">٣ خطوات أساسية</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">١</div><div><strong>أخذ العينات (Sampling):</strong> تقسيم المحور الزمني لفترات منتظمة واستخراج ارتفاع الموجة عند كل نقطة. التردد = عدد العينات في الثانية (Hz).</div></div>
          <div class="checklist-step"><div class="step-number">٢</div><div><strong>التحويل الكمي (Quantization):</strong> تقسيم المحور الرأسي (الجهد) لفترات وتقريب كل قيمة لأقرب مستوى. العمق = عدد المستويات (bit depth).</div></div>
          <div class="checklist-step"><div class="step-number">٣</div><div><strong>الترميز (Encoding):</strong> تحويل القيم الكمية لأرقام ثنائية (0 و 1).</div></div>
        </div>
      </div>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📈</strong> جودة الصوت وحجم البيانات</h4>
            <span class="card-badge badge-blue">كل ما زادت الجودة زاد الحجم</span>
          </div>
          <p class="card-desc">كلما زاد <strong>تردد أخذ العينات</strong> و<strong>عمق التحويل الكمي</strong>، الصوت بيبقى أقرب للأصل — بس حجم البيانات بيزيد.</p>
          <p class="card-example">🔍 <em>مثال:</em> صوت CD جودته 44,100 Hz و 16 bit — يعني 44,100 عينة في الثانية، كل عينة 16 بت</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📐</strong> نظرية أخذ العينات</h4>
            <span class="card-badge badge-amber">قاعدة ذهبية</span>
          </div>
          <p class="card-desc">لو تردد أخذ العينات <strong>أكتر من ضعف</strong> أعلى تردد في الموجة الأصلية، نقدر نعيد بناء الموجة الأصلية بدقة من البيانات الرقمية.</p>
          <p class="card-example">🔍 <em>مثال:</em> لو أعلى تردد في الصوت 20,000 Hz، لازم نأخذ عينات بتردد أكتر من 40,000 Hz</p>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🔊</strong> حساب حجم البيانات الصوتية</h4>
          <span class="card-badge badge-green">معادلة بسيطة</span>
        </div>
        <p class="card-desc"><strong>حجم البيانات (بت/ثانية) = تردد أخذ العينات × عمق التحويل الكمي × عدد القنوات</strong></p>
        <div class="pill-cloud">
          <span class="pill-item">أحادية (Monaural) = قناة واحدة</span>
          <span class="pill-item">ستيريو (Stereo) = قناتين</span>
        </div>
        <p class="card-example">🔍 <em>مثال:</em> صوت CD في الثانية = 44,100 × 16 × 2 = 1,411,200 بت = 176,400 بايت ≈ 176 KB</p>
      </div>`
    ],
    takeaway: "PCM = أخذ العينات + تحويل كمي + ترميز ⬝ كل ما زاد التردد والعمق زادت الجودة والحجم ⬝ نظرية أخذ العينات: التردد لازم يكون أكتر من ضعف أعلى تردد ⬝ الحجم = التردد × العمق × القنوات.",
    funFact: "جودة صوت CD (44,100 Hz) مختارة لأن أذن البشرية بتسمع ترددات من 20 Hz لحد 20,000 Hz — وضعف 20,000 = 40,000، و 44,100 أكتر من كده بشوية!",
    quiz: {
      question: "ما الترتيب الصحيح لخطوات رقمنة الصوت (PCM)؟",
      options: [
        "أخذ العينات ← التحويل الكمي ← الترميز",
        "الترميز ← التحويل الكمي ← أخذ العينات",
        "التحويل الكمي ← أخذ العينات ← الترميز",
        "التحويل الكمي ← الترميز ← أخذ العينات"
      ],
      answer: 0,
      explain: "الترتيب الصحيح: أولاً أخذ العينات (تقسيم الزمن)، ثم التحويل الكمي (تقريب القيم)، وأخيراً الترميز (تحويل لثنائي)."
    }
  },
  {
    id: "image-digitization",
    category: "القسم الثالث: رقمنة الوسائط",
    title: "رقمنة الصور",
    tagline: "من الصورة الحقيقية إلى شبكة بكسلات — إزاي الكاميرا بتحوّل الصورة لأرقام؟",
    glyph: "🖼️",
    image: "assets/images/media_types.jpg",
    visualCaption: "الصورة بتقسم لبكسلات (أخذ العينات)، كل بكسل بياخد قيمة سطوع (تحويل كمي)، وبعدين القيم بتتحول لثنائي (ترميز).",
    interactiveType: "pixel_grid_sim",
    story: [
      `<p class="story-lead">الصورة الرقمية بتتكون من <strong>بكسلات (Pixels)</strong> — نقاط صغيرة مرتبة في شبكة. كل بكسل ليه <strong>قيمة سطوع</strong> رقمية.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📸</strong> خطوات رقمنة الصور</h4>
          <span class="card-badge">نفس خطوات الصوت بالظبط</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">١</div><div><strong>أخذ العينات (Sampling):</strong> تقسيم الصورة لبكسلات. الدقة (Resolution) = عدد البكسلات الأفقية × الرأسية. وحدة القياس = dpi (نقطة في البوصة).</div></div>
          <div class="checklist-step"><div class="step-number">٢</div><div><strong>التحويل الكمي (Quantization):</strong> تحويل سطوع كل بكسل لقيمة رقمية. التدرج (Gradation) = عدد المستويات — 8 بت = 256 مستوى (من 0 لـ 255).</div></div>
          <div class="checklist-step"><div class="step-number">٣</div><div><strong>الترميز (Encoding):</strong> تحويل القيم لأرقام ثنائية.</div></div>
        </div>
      </div>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📐</strong> حساب حجم بيانات الصورة</h4>
            <span class="card-badge badge-blue">معادلة بسيطة</span>
          </div>
          <p class="card-desc"><strong>حجم الصورة (بت) = عدد البكسلات (أفقي × رأسي) × عدد بتات اللون</strong></p>
          <p class="card-example">🔍 <em>مثال:</em> صورة 1280×720 بـ 24 بت لون = 1280 × 720 × 24 = 22,118,400 بت = 2,764,800 بايت ≈ 2.76 MB</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🎨</strong> تنسيقات الصور: نقطي ومتجه</h4>
            <span class="card-badge badge-amber">نوعان رئيسيان</span>
          </div>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">📊</span> <strong>النقطي (Raster):</strong> شبكة بكسلات — بيظهر متعرج (Jaggies) عند التكبير. مناسب للصور الفوتوغرافية. برامج: Photoshop</li>
            <li><span class="list-bullet-icon">📐</span> <strong>المتجهي (Vector):</strong> معادلات رياضية للنقاط والخطوط — مش بيتمتق عند التكبير. مناسب للشعارات. برامج: Illustrator</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🌈</strong> تمثيل الألوان</h4>
          <span class="card-badge badge-green">RGB و CMY</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🔴</span> <strong>الألوان الأساسية للضوء (RGB):</strong> أحمر، أخضر، أزرق — بتتجمع فتقترب من الأبيض. مستخدمة في الشاشات</li>
          <li><span class="list-bullet-icon">🟡</span> <strong>الألوان الأساسية للصبغة (CMY):</strong> سماوي، أرجواني، أصفر — بتتجمع فتقترب من الأسود. مستخدمة في الطابعات</li>
          <li><span class="list-bullet-icon">🎨</span> <strong>24-bit Full Color:</strong> كل لون (R, G, B) = 8 بت = 256 مستوى × 3 = 24 بت = 16.7 مليون لون</li>
        </ul>
      </div>`
    ],
    takeaway: "الصورة = شبكة بكسلات ⬝ الدقة = أفقي × رأسي ⬝ الحجم = البكسلات × بتات اللون ⬝ النقطي للصور والمتجهي للشعارات ⬝ RGB للشاشات و CMY للطابعات.",
    funFact: "صورة 1280×720 بكسل بـ 24 بت لون = 2.76 MB — يعني صورة واحدة بتاخد مساحة أكبر من صفحة نص كاملة!",
    quiz: {
      question: "ما حجم بيانات صورة بدقة 1280×720 بكسل ولون كامل 24 بت؟",
      options: [
        "2.76 MB",
        "1.38 MB",
        "5.52 MB",
        "0.69 MB"
      ],
      answer: 0,
      explain: "1280 × 720 × 24 = 22,118,400 بت ÷ 8 = 2,764,800 بايت ÷ 1000 ÷ 1000 ≈ 2.76 MB"
    }
  },
  {
    id: "video-compression",
    category: "القسم الثالث: رقمنة الوسائط",
    title: "التمثيل الرقمي وضغط الفيديو",
    tagline: "الفيديو = صور سريعة + ضغط ذكي — إزاي بنوفر 90% من الحجم من غير ما نحس؟",
    glyph: "🎬",
    image: "assets/images/smartphone.jpg",
    visualCaption: "الفيديو بيتكون من إطارات متتالية، وكل إطار صورة. الضغط بيقلل الحجم عن طريق إزالة التكرار.",
    interactiveType: "compression_demo",
    story: [
      `<p class="story-lead">الفيديو بيشتغل بعرض <strong>صور ثابتة بسرعة</strong> — عين الإنسان بتروهم إنها بتتحرك (ظاهرة الصورة الباقية). كل صورة اسمها <strong>إطار (Frame)</strong>، وعدد الإطارات في الثانية اسمه <strong>معدل الإطارات (fps)</strong>.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🎞️</strong> حساب حجم بيانات الفيديو</h4>
            <span class="card-badge badge-blue">معادلة بسيطة</span>
          </div>
          <p class="card-desc"><strong>حجم الفيديو = حجم الصورة (بايت) × معدل الإطارات (fps) × الزمن (ثانية)</strong></p>
          <p class="card-example">🔍 <em>مثال:</em> فيديو 10 ثواني بـ 30 fps وكل إطار 500×200 بـ 24 بت = 300,000 × 30 × 10 = 90,000,000 بايت = 90 MB</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🗜️</strong> ضغط البيانات</h4>
            <span class="card-badge badge-amber">تقليل الحجم بذكاء</span>
          </div>
          <p class="card-desc">الضغط بيقلل حجم البيانات مع الحفاظ على المحتوى. نوعان رئيسيان:</p>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">✅</span> <strong>ضغط غير فاقد (Lossless):</strong> استعادة كاملة للبيانات الأصلية — زي ملفات النصوص والبرامج</li>
            <li><span class="list-bullet-icon">⚠️</span> <strong>ضغط فاقد (Lossy):</strong> مش بيرجع البيانات الأصلية بالظبط — بس الفرق مش ملحوظ للبشر. زي الصور والصوت والفيديو</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📊</strong> أنواع الضغط غير الفاقد</h4>
          <span class="card-badge badge-green">ترميز طول التشغيل وهوفمان</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🔁</span> <strong>ترميز طول التشغيل (Run-length):</strong> استبدال التكرارات المتتالية بعدد التكرار — زي "AAAAA" تبقى "A5". فعال لما يكون في تكرارات كتير</li>
          <li><span class="list-bullet-icon">🌳</span> <strong>ترميز هوفمان (Huffman):</strong> إعطاء أكواد أقصر للحروف الأكثر تكراراً وأطول لأقلها — زي شفرة مورس</li>
        </ul>
        <p class="card-example">🔍 <em>مثال Run-length:</em> "AAAAABBAAAABBBBBBBBAAAAAA" (25 حرف) → "A5B2A4B8A6" (10 حروف) — نسبة الضغط 40%</p>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">📐</span>
          <h4 class="callout-title">نسبة الضغط</h4>
        </div>
        <p class="card-desc"><strong>نسبة الضغط (%) = (حجم البيانات بعد الضغط ÷ حجم البيانات الأصلي) × 100</strong></p>
        <p class="card-example">🔍 <em>مثال:</em> فيديو 90 MB اتضغط لـ 30 MB → النسبة = (30 ÷ 90) × 100 = 33%</p>
      </div>`
    ],
    takeaway: "الفيديو = إطارات متتالية ⬝ الحجم = حجم الصورة × fps × الزمن ⬝ الضغط غير فاقد بيرجع الأصل بالظبط ⬝ الضغط فاقد بينقص الحجم كتير بس مش بيرجع الأصل ⬝ Run-length و Huffman من أشهر طرق الضغط.",
    funFact: "فيديو 10 ثواني بدقة 500×200 بياخد 90 MB — لو ضغطته لـ 30 MB، بتوفر 60 MB! وده اللي بيخلي يوتيوب يشغل فيديوهات من غير ما يعلق.",
    quiz: {
      question: "فيديو حجمه 90 MB اتضغط لـ 30 MB — ما نسبة الضغط؟",
      options: [
        "33%",
        "50%",
        "66%",
        "30%"
      ],
      answer: 0,
      explain: "نسبة الضغط = (30 ÷ 90) × 100 = 33.3% ≈ 33%"
    }
  },
  {
    id: "information-design",
    category: "القسم الرابع: تصميم المعلومات",
    title: "تصميم المعلومات",
    tagline: "مش بس بيانات — بيانات منظمة وجميلة ومفهومة — إزاي نصمم المعلومات عشان توصل بوضوح؟",
    glyph: "🎨",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "تصميم المعلومات بيجمع بين التجريد والتصور والهيكلة عشان يوصل الرسالة بوضوح للجمهور المستهدف.",
    interactiveType: "design_principles",
    story: [
      `<p class="story-lead"><strong>تصميم المعلومات (Information Design)</strong> هو عملية تنظيم وتعبير إبداعي عن البيانات حسب الغرض منها — عشان الرسالة توصل بوضوح للجمهور المستهدف.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔍</strong> طرق تصميم المعلومات</h4>
            <span class="card-badge badge-blue">٣ طرق رئيسية</span>
          </div>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">📊</span> <strong>التجريد (Abstraction):</strong> نقل المعلومة المقصودة ببساطة من وسط كمية ضخمة من البيانات — زي الرسم التصويري (Pictogram) والأيقونة (Icon)</li>
            <li><span class="list-bullet-icon">📈</span> <strong>التصور (Visualization):</strong> تمثيل المعلومات بصرياً عشان تبقى أسهل فهم — زي الجداول والرسوم البيانية</li>
            <li><span class="list-bullet-icon">🏗️</span> <strong>الهيكلة (Structuring):</strong> تنظيم وترتيب المعلومات حسب العلاقات والمستويات والمراحل — زي القوائم الهرمية في صفحات الويب</li>
          </ul>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🖥️</strong> واجهة المستخدم (UI) وتجربة المستخدم (UX)</h4>
            <span class="card-badge badge-amber">مش بس شكل — تجربة كاملة</span>
          </div>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">⌨️</span> <strong>واجهة سطر الأوامر (CUI):</strong> إدخال أوامر بالحروف من لوحة المفاتيح — زي الشاشة السوداء القديمة</li>
            <li><span class="list-bullet-icon">🖱️</span> <strong>واجهة المستخدم الرسومية (GUI):</strong> أيقونات وأزرار وفأرة — زي الويندوز والماك</li>
            <li><span class="list-bullet-icon">💡</span> <strong>تجربة المستخدم (UX):</strong> الإحساس اللي بياخده المستخدم من التعامل مع المنتج — مش بس سهولة الاستخدام لكن الراحة كمان</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>♿</strong> مبادئ التصميم الجيد</h4>
          <span class="card-badge badge-green">للجميع</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item">🎯 قابلية الاستخدام (Usability): سهل الاستخدام</span>
          <span class="pill-item">♿ إمكانية الوصول (Accessibility): متاح للجميع</span>
          <span class="pill-item">🌍 التصميم الشامل (Universal Design): لكل الأعمار والقدرات</span>
          <span class="pill-item">🔔 الدلالة (Signifier): إشارات تدفع المستخدم يتصرف</span>
          <span class="pill-item">👆 الإمكانية (Affordance): إمكانية تنفيذ إجراء على كائن</span>
        </div>
      </div>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">📋</span>
          <h4 class="callout-title">مبدأ LATCH: تنظيم المعلومات</h4>
        </div>
        <p class="card-desc">طريقة لتنظيم المعلومات وعرضها بشكل سهل الفهم، حسب ٥ معايير:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📍</span> <strong>الموقع (Location):</strong> تصنيف حسب المكان الفعلي</li>
          <li><span class="list-bullet-icon">🔤</span> <strong>الأبجدية (Alphabet):</strong> تصنيف حسب الترتيب الأبجدي</li>
          <li><span class="list-bullet-icon">⏰</span> <strong>الوقت (Time):</strong> تصنيف حسب التسلسل الزمني</li>
          <li><span class="list-bullet-icon">🏷️</span> <strong>الفئة (Category):</strong> تصنيف حسب الاختلافات بين الأشياء</li>
          <li><span class="list-bullet-icon">📊</span> <strong>الهرمية (Hierarchy):</strong> تصنيف حسب الحجم أو المستوى</li>
        </ul>
      </div>`
    ],
    takeaway: "تصميم المعلومات = تجريد + تصور + هيكلة ⬝ CUI للأوامر النصية و GUI للأيقونات ⬝ UX مش بس سهولة لكن الراحة كمان ⬝ التصميم الشامل لكل الناس ⬝ LATCH = موقع، أبجدية، وقت، فئة، هرمية.",
    funFact: "مبدأ LATCH بيستخدم في تصميم المواقع والتطبيقات — لما تلاقي موقع سهل الاستخدام، غالباً المصمم استخدم واحد من المبادئ دي!",
    quiz: {
      question: "تصميم معلومات بيسمح لجميع الناس باستخدامه من غير صعوبة — بغض النظر عن العمر أو القدرة — بيسمى:",
      options: [
        "التصميم الشامل (Universal Design)",
        "واجهة المستخدم (UI)",
        "تجربة المستخدم (UX)",
        "قابلية الاستخدام (Usability)"
      ],
      answer: 0,
      explain: "التصميم الشامل (Universal Design) هو تصميم مقصود بعناية عشان كل الناس تقدر تستخدمه بسهولة."
    }
  }
];

const LECT4_MATCH_ITEMS_AR = [
  { id: "m1", concept: "التناظري (Analog)", match: "كميات تتغير تدريجياً وبشكل مستمر مثل درجة الحرارة" },
  { id: "m2", concept: "البت (Bit)", match: "أصغر وحدة معلومات ليه حالتين فقط: 0 أو 1" },
  { id: "m3", concept: "البايت (Byte)", match: "وحدة تتكون من 8 بت وتمثل 256 قيمة مختلفة" },
  { id: "m4", concept: "النظام السادس عشر (Hex)", match: "نظام عد يستخدم 16 رمز (0-9 + A-F) وكل رقم = 4 بت" },
  { id: "m5", concept: "ASCII", match: "نظام ترميز بيمثل الحروف الإنجليزية والأرقام بـ 1 بايت لكل حرف" },
  { id: "m6", concept: "المتمم الثنائي (2's Complement)", match: "عكس كل بت ثم إضافة 1 — لتمثيل الأرقام السالبة" },
  { id: "m7", concept: "PCM", match: "طريقة رقمنة الصوت: أخذ العينات ← التحويل الكمي ← الترميز" },
  { id: "m8", concept: "البكسل (Pixel)", match: "أصغر وحدة بتكون الصورة الرقمية" },
  { id: "m9", concept: "ضغط فاقد (Lossy)", match: "ضغط بينقص الحجم كتير لكن مش بيرجع البيانات الأصلية بالظبط" },
  { id: "m10", concept: "مبدأ LATCH", match: "٥ معايير لتنظيم المعلومات: موقع، أبجدية، وقت، فئة، هرمية" }
];

if (typeof window !== 'undefined') {
  window.LECT4_STAGES_AR = LECT4_STAGES_AR;
  window.LECT4_MATCH_ITEMS_AR = LECT4_MATCH_ITEMS_AR;
}