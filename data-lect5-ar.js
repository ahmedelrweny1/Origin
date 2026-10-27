/* ============================================================
   الفصل السابع: المحاضرة الخامسة (تجميع الكمبيوتر والبرمجيات والدوائر المنطقية)
   بيانات المراحل والتحدي الختامي باللغة العربية
   المصدر: lect5en.pdf ص ٨٥-٩٤ (٧-١ إلى ٧-٣)
   ============================================================ */

const LECT5_STAGES_AR = [

  {
    id: "five-components",
    category: "القسم الأول: تجميع الكمبيوتر (7-1)",
    title: "المكونات الخمسة الأساسية للكمبيوتر",
    tagline: "إزاي الكمبيوتر متكوّن من جوه؟ ٥ قطع رئيسية شغالة مع بعض زي فريق واحد",
    glyph: "🖥️",
    image: "assets/images/microprocessor.jpg",
    visualCaption: "وحدة التحكم بتدي الأوامر، وحدة الحساب بتحسب، الذاكرة الرئيسية بتخزن مؤقت، الذاكرة الثانوية بتحتفظ للأبد، الإدخال بيجيب البيانات من برا والمخرج بيطلعها لبرا.",
    interactiveType: "five_components_map",
    story: [
      `<p class="story-lead">بص على أي جهاز كمبيوتر شغال قدامك — لعبة أو بحث أو فيديو. كل ده محتاج <strong>فريق من القطع</strong> شغالين مع بعض، كل واحدة عارفة شغلتها. الكمبيوتر بيتكون من <strong>خمس مكونات أساسية (The Five Major Components)</strong> — يعني خمس قطع، كل واحدة ليها دور محدد زي أعضاء الفريق:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🧩</strong> جهاز الكمبيوتر والأجهزة الطرفية</h4>
            <span class="card-badge badge-blue">الأساس والتجهيزات</span>
          </div>
          <p class="card-desc"><strong>جهاز الكمبيوتر نفسه (Hardware):</strong> القطع <strong>المادية</strong> اللي تقدر تلمسها بإيدك — زي وحدة الكمبيوتر الرئيسية.</p>
          <p class="card-desc"><strong>الأجهزة الطرفية (Peripheral Devices):</strong> أجهزة بنستخدمها عن طريق <strong>توصيلها</strong> بالكمبيوتر، مش جوه الكمبيوتر نفسه.</p>
          <p class="card-example">🔍 <em>أمثلة الأجهزة الطرفية:</em> الكيبورد، الفأرة، الشاشة، الطابعة.</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🧠</strong> العقل المدبّر: CPU</h4>
            <span class="card-badge badge-amber">وحدة التحكم + وحدة الحساب</span>
          </div>
          <p class="card-desc"><strong>وحدة التحكم (Control Unit):</strong> بتنفذ <strong>التعليمات</strong> بتاعة الكمبيوتر وبتبعت <strong>أوامر</strong> لكل جزء تاني — زي قائد فريق الكورة اللي بيدي إشارة لكل لاعب.</p>
          <p class="card-desc"><strong>وحدة الحساب (Arithmetic Unit):</strong> مسؤولة عن <strong>الحسابات</strong> — جمع وطرح ومقارنات.</p>
          <p class="card-desc">الاتنين مع بعض بيبقوا اسمهم <strong>المعالج المركزي (CPU — Central Processing Unit)</strong>.</p>
        </div>
        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🗄️</strong> جهاز التخزين: اتنين مش واحد!</h4>
            <span class="card-badge badge-green">مؤقت ودائم</span>
          </div>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">⚡</span> <strong>الذاكرة الرئيسية (Main Memory):</strong> بتخزن البرامج والبيانات <strong>مؤقتًا</strong> — بتفضل شغالة طول ما الجهاز شغال</li>
            <li><span class="list-bullet-icon">💾</span> <strong>الذاكرة الثانوية (Secondary Memory) — التخزين (Storage):</strong> بتخزّن البيانات <strong>لفترة طويلة</strong> — بتحتفظ بيها حتى بعد ما تطفّي الجهاز</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📋</strong> جدول المكونات الخمسة: الدور والأمثلة</h4>
          <span class="card-badge">احفظه كويس</span>
        </div>
        <table class="l3-mini-table">
          <tr><th>المكون</th><th>دوره</th><th>أمثلة المكونات</th></tr>
          <tr><td>وحدة التحكم <span class="mono">(جزء من CPU)</span></td><td>تنفيذ التعليمات وإرسال الأوامر لباقي الأجزاء</td><td>CPU</td></tr>
          <tr><td>وحدة الحساب <span class="mono">(جزء من CPU)</span></td><td>أداء الحسابات</td><td>CPU</td></tr>
          <tr><td>الذاكرة الرئيسية</td><td>تخزين <strong>مؤقت</strong> للبرامج والبيانات</td><td>الذاكرة (Memory)</td></tr>
          <tr><td>الذاكرة الثانوية (التخزين)</td><td>تخزين <strong>دائم</strong> للبرامج والبيانات</td><td>هارد ديسك • SSD • فلاشة USB</td></tr>
          <tr><td>جهاز الإدخال</td><td>يجيب المعلومات من <strong>برا</strong> الكمبيوتر</td><td>كيبورد • فأرة • سكانر</td></tr>
          <tr><td>جهاز الإخراج</td><td>يطلّع المعلومات <strong>برا</strong> الكمبيوتر</td><td>شاشة • طابعة</td></tr>
        </table>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">🔄</span>
          <h4 class="callout-title">العلاقة بين المكونات: رحلة البيانات</h4>
        </div>
        <p class="card-desc"><strong>البيانات</strong> ليها مسار ثابت بتمشي فيه، و<strong>التحكم</strong> — يعني أوامر وحدة التحكم — بيوصل لكل الأجزاء. بص على الرحلة خطوة خطوة:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">1️⃣</span> <strong>جهاز الإدخال</strong> هو نقطة البداية — بيجيب البيانات من برا</li>
          <li><span class="list-bullet-icon">2️⃣</span> البيانات بتتوصل <strong>بالذاكرة الرئيسية</strong> مباشرة (لأنها اللي بتتبادل مباشرة مع الـ CPU)</li>
          <li><span class="list-bullet-icon">3️⃣</span> الأوامر بتوصل من <strong>وحدة التحكم</strong> لكل الأجزاء</li>
          <li><span class="list-bullet-icon">4️⃣</span> <strong>جهاز الإخراج</strong> هو آخر محطة في رحلة البيانات — بيطّلع النتيجة برا</li>
          <li><span class="list-bullet-icon">5️⃣</span> <strong>الذاكرة الثانوية</strong> بتخزّن البيانات لفترة طويلة — دي وحدة التخزين</li>
        </ul>
      </div>`
    ],
    takeaway: "العتاد = القطع المادية (الجهاز الرئيسي) ⬝ الطرفية = أجهزة بنوصلها بالكمبيوتر ⬝ وحدة التحكم = الأوامر ⬝ وحدة الحساب = الحسابات ⬝ الاتنين مع بعض = CPU ⬝ الذاكرة الرئيسية = تخزين مؤقت ⬝ الثانوية = تخزين دائم ⬝ الإدخال بيجيب من برا والمخرج بيطّلع برا.",
    funFact: "لما تضغط حرف على الكيبورد، البيانات بتاخد رحلة سريعة: من الكيبورد للذاكرة الرئيسية، والأوامر جاية من وحدة التحكم، والمعالجة من وحدة الحساب — وبعد كده الحرف يظهر على الشاشة. كل ده في أجزاء من الثانية!",
    quiz: {
      question: "أي من الأجهزة دي من أجهزة الإخراج؟",
      options: [
        "الشاشة (Display) والطابعة (Printer)",
        "الذاكرة (Memory) والفأرة (Mouse)",
        "الهارد ديسك (HDD) والفلاشة (USB Memory)",
        "الكيبورد (Keyboard) والسكانر (Scanner)"
      ],
      answer: 0,
      explain: "جهاز الإخراج بيطلّع المعلومات برا من الكمبيوتر — زي الشاشة والطابعة. الفأرة والكيبورد أجهزة إدخال، والذاكرة والفلاشة أجهزة تخزين."
    }
  },

  {
    id: "interfaces",
    category: "القسم الأول: تجميع الكمبيوتر (7-1)",
    title: "الواجهات (Interfaces): لغة التوصيل",
    tagline: "USB و HDMI و Ethernet: ثلاث واجهات بتخلّي الكمبيوتر يتكلم مع الأجهزة الطرفية",
    glyph: "🔌",
    image: "assets/images/pc.jpg",
    visualCaption: "الواجهة وسيط بيتبادل من خلاله المعلومات بين وحدة الكمبيوتر الرئيسية والأجهزة الطرفية.",
    interactiveType: "interface_matcher",
    story: [
      `<p class="story-lead">طيب إزاي الفأرة والشاشة والطابعة بتتكلم مع الكمبيوتر؟ محتاجين <strong>وسيط</strong> يربطهم — وده اسمه <strong>الواجهة (Interface)</strong>.</p>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🤝</strong> الواجهة (Interface)</h4>
          <span class="card-badge badge-blue">الوسيط اللي بيوصّل</span>
        </div>
        <p class="card-desc">الواجهة هيا الوسيط اللي <strong>بيتم من خلاله تبادل المعلومات</strong> — بنستخدمها عشان <strong>نوصّل</strong> وحدة الكمبيوتر الرئيسية بالأجهزة الطرفية.</p>
        <p class="card-example">🔍 <em>تشبيه:</em> زي جسر بيربط الضِفّتين — لو مش موجود، مفيش تبادل ممكن يحصل.</p>
      </div>`,
      `<div class="content-cards-stack">
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🖱️</strong> USB</h4>
            <span class="card-badge badge-amber">الأشهر على الإطلاق</span>
          </div>
          <p class="card-desc">أشهر واجهة مستخدمة في الأجهزة الملحقة بالكمبيوتر. متوافقة مع <strong>الطابعات والكيبورد والهارديسك الخارجي</strong>.</p>
          <p class="card-example">🔍 <em>مثال:</em> كل ما بتوصل فلاشة أو طابعة — غالباً دي واجهة USB.</p>
        </div>
        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📺</strong> HDMI</h4>
            <span class="card-badge badge-green">كابل واحد، صوت + فيديو</span>
          </div>
          <p class="card-desc">معيار تواصل بيسمح بنقل <strong>الفيديو والصوت</strong> وغيره من البيانات عبر <strong>كابل واحد</strong>. متوافقة مع <strong>التلفزيون الرقمي وأجهزة الصوت</strong>.</p>
          <p class="card-example">🔍 <em>مثال:</em> لما توصل اللابتوب بشاشة أو تلفزيون بكابل واحد — الكابل ده HDMI.</p>
        </div>
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🌐</strong> Ethernet</h4>
            <span class="card-badge badge-blue">انترنت سلكي</span>
          </div>
          <p class="card-desc">معيار تواصل مستخدم في <strong>الشبكات المحلية السلكية (LAN)</strong> في البيوت والمكاتب. متوافق مع <strong>الهاب والراوتر</strong>.</p>
          <p class="card-example">🔍 <em>مثال:</em> الكابل اللي بيوصل جهاز الكمبيوتر بالراوتر في البيت — ده Ethernet.</p>
        </div>
      </div>`
    ],
    takeaway: "الواجهة = وسيط تبادل المعلومات بين وحدة الكمبيوتر الرئيسية والأجهزة الطرفية ⬝ USB = الأكثر استخداماً (طابعة، كيبورد، هارد خارجي) ⬝ HDMI = فيديو + صوت عبر كابل واحد ⬝ Ethernet = الشبكات السلكية (هاب وراوتر).",
    funFact: "لو أهلك ركبوا راوتر أو وصلوا شاشة بأي كابل، يبقى استخدموا Ethernet أو HDMI من غير ما يعرفوا اسمها أصلاً! الواجهات دي موجودة في كل بيت.",
    quiz: {
      question: "عايز تبعت الصوت والفيديو من الكمبيوتر للتلفزيون الرقمي أو جهاز الصوت في كابل واحد — تستخدم أنهي واجهة؟",
      options: [
        "HDMI",
        "USB",
        "Ethernet",
        "KB"
      ],
      answer: 0,
      explain: "HDMI معيار تواصل بيسمح بنقل الفيديو والصوت وغيره من البيانات عبر كابل واحد، ومتوافقة مع التلفزيون الرقمي وأجهزة الصوت."
    }
  },

  {
    id: "hardware-software",
    category: "القسم الثاني: برمجيات الكمبيوتر (7-2)",
    title: "العتاد والبرمجيات",
    tagline: "العتاد هو الجسم والبرمجيات هي الروح — من غير واحدة فيهم، الكمبيوتر مالوش لازمة",
    glyph: "🧩",
    image: "assets/images/ic.jpg",
    visualCaption: "العتاد هو القطع المادية زي الـ CPU والذاكرة، والبرمجيات هي البرامج والبيانات اللي بتشتغل على العتاد.",
    interactiveType: "software_tree",
    story: [
      `<p class="story-lead">الكمبيوتر زي جسم إنسان: <strong>العتاد (Hardware)</strong> هو الجسم الملموس اللي تشوفه وتلمسه، و<strong>البرمجيات (Software)</strong> هي الروح اللي بتشغّل الجسم ده. الاتنين محتاجين بعض!</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔩</strong> العتاد (Hardware)</h4>
            <span class="card-badge badge-blue">قطع مادية بتلمسها بيديك</span>
          </div>
          <p class="card-desc">قطع مادية زي جهاز الكمبيوتر نفسه والأجهزة الطرفية.</p>
          <p class="card-example">🔍 <em>أمثلة:</em> CPU، الذاكرة، وحدات التخزين (الـ Storage).</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>💿</strong> البرمجيات (Software)</h4>
            <span class="card-badge badge-amber">برامج + بيانات</span>
          </div>
          <p class="card-desc">البرامج والبيانات اللي بتشتغل على العتاد — وليها <strong>نوعين رئيسيين</strong>:</p>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">⚙️</span> <strong>برمجيات النظام (System Software):</strong> برمجيات <strong>ضرورية</strong> لتشغيل العتاد — دي لازم تكون الأول</li>
            <li><span class="list-bullet-icon">🤖</span> <strong>نظام التشغيل (Operating System / OS):</strong> نوع من برمجيات النظام مسؤول عن <strong>الوظائف الأساسية</strong> للكمبيوتر، وليه <strong>وظائف إدارة</strong> زي إدارة المهام وإدارة الذاكرة وإدارة الملفات</li>
            <li><span class="list-bullet-icon">📋</span> <strong>برمجيات التطبيقات (Application Software):</strong> برامج بتشتغل <strong>فوق</strong> برمجيات النظام — ودي اللي بنعرفها باسم "التطبيقات"</li>
          </ul>
          <p class="card-example">🔍 <em>أمثلة نظام التشغيل:</em> Windows • macOS • Android OS</p>
          <p class="card-example">🔍 <em>أمثلة التطبيقات:</em> برامج معالجة النصوص (Word) • برامج جداول البيانات (Excel)</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">🪜</span>
          <h4 class="callout-title">فكر فيها بناء ٣ طوابق</h4>
        </div>
        <p class="card-desc"><strong>العتاد</strong> هو الأساس ⬝ <strong>برمجيات النظام (ومنها الـ OS)</strong> في الوسط بتشغّل العتاد ⬝ <strong>برمجيات التطبيقات</strong> فوق بتخدمك مباشرة.</p>
        <p class="card-example">🔍 <em>قاعدة دهبية:</em> التطبيقات <strong>ماتشتغلش غير</strong> فوق برمجيات النظام — Word مش هيفتح من غير ويندوز!</p>
      </div>`
    ],
    takeaway: "العتاد = القطع المادية (CPU • Memory • Storage) ⬝ البرمجيات = برامج وبيانات بتشتغل على العتاد ⬝ برمجيات النظام ضرورية لتشغيل العتاد ⬝ OS = مسؤول عن الوظائف الأساسية والإدارة (مهام • ذاكرة • ملفات) ⬝ التطبيقات بتشتغل فوق النظام.",
    funFact: "التليفون اللي في إيدك دلوقتي فيه حاجتين: الألعاب والتطبيقات اللي بتستخدمها هي <strong>برمجيات تطبيقات</strong>، أما iOS أو Android اللي شغّالين التليفون من أول ما بيفتح — دول <strong>نظام التشغيل (OS)</strong>!",
    quiz: {
      question: "أي نوع من البرمجيات مسؤول عن الوظائف الأساسية للكمبيوتر — زي إدارة المهام وإدارة الذاكرة وإدارة الملفات؟",
      options: [
        "نظام التشغيل (Operating System / OS)",
        "برمجيات التطبيقات (Application Software)",
        "العتاد (Hardware)",
        "برنامج التحكم بالجهاز (Device Driver)"
      ],
      answer: 0,
      explain: "نظام التشغيل (OS) نوع من برمجيات النظام مسؤول عن الوظائف الأساسية، وبيشتغل عليه وظائف إدارة زي إدارة المهام والذاكرة والملفات. أمثلة: Windows وmacOS وAndroid."
    }
  },

  {
    id: "os-drivers",
    category: "القسم الثاني: برمجيات الكمبيوتر (7-2)",
    title: "برنامج التحكم بالجهاز (Device Driver)",
    tagline: "المترجم الصغير اللي بيخلي كل جهاز جديد يشتغل مع الكمبيوتر من غير أي مشكلة",
    glyph: "🎛️",
    image: "assets/images/pc.jpg",
    visualCaption: "الـ Driver برنامج بيتحكم في التواصل بين الجهاز المتصل بالكمبيوتر والسوفتوير.",
    interactiveType: "driver_flow",
    story: [
      `<p class="story-lead">لما توصّل <strong>طابعة جديدة</strong> أو أي جهاز جديد بالكمبيوتر، الكمبيوتر يقدر يتعامل معاه على طول من غير إعدادات زيادة — والفضل يرجع لبرنامج اسمه <strong>برنامج التحكم بالجهاز (Device Driver)</strong>.</p>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🎛️</strong> تعريف الـ Driver</h4>
          <span class="card-badge badge-blue">المترجم الفوري</span>
        </div>
        <p class="card-desc">هو برنامج يتحكم في <strong>التواصل</strong> بين <strong>الجهاز المتصل بالكمبيوتر</strong> والسوفتوير (البرمجيات) اللي شغال على الكمبيوتر. وبنسميه باختصار <strong>"Driver"</strong>.</p>
        <p class="card-example">🔍 <em>تشبيه:</em> زي المترجم الفوري — بيخلي الجهاز الجديد يتكلم مع الويندوز من غير ما تفهم أي تفاصيل تقنية.</p>
        <p class="card-desc">لما توصل جهاز لأول مرة، الكمبيوتر بيركب الـ Driver بتاعه — وده اللي بيخلي الجهاز <strong>يشتغل فورًا</strong> من غير أي إعدادات إضافية.</p>
      </div>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">⚠️</span>
          <h4 class="callout-title">تنبيه مهم: مش كله برمجيات يبقى نظام تشغيل</h4>
        </div>
        <p class="card-desc">الـ Driver <strong>مش</strong> نظام تشغيل و<strong>مش</strong> برمجيات تطبيقية! خد بالك من الفروق:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">❌</span> <strong>مش نظام تشغيل (OS)</strong> — الـ OS زي Windows وmacOS هو اللي بيقوم بالإدارة (مهام • ذاكرة • ملفات)</li>
          <li><span class="list-bullet-icon">❌</span> <strong>مش برمجيات تطبيقية (Application)</strong> — زي Word وExcel</li>
          <li><span class="list-bullet-icon">✅</span> <strong>هو</strong> برنامج بيتحكم في التواصل بين الجهاز المتصل بالكمبيوتر والسوفتوير — ده دوره بالظبط</li>
        </ul>
      </div>`
    ],
    takeaway: "الـ Device Driver = برنامج يتحكم في التواصل بين الجهاز المتصل بالكمبيوتر والسوفتوير ⬝ بيسموه باختصار Driver ⬝ مش نظام تشغيل ومش برمجيات تطبيقية ⬝ نظام التشغيل (OS) هو اللي مسؤول عن الوظائف الأساسية والإدارة ⬝ التطبيقات ماتشتغلش غير فوق النظام.",
    funFact: "لو وصّلت جهاز جديد وما اشتغلش، الغالب السبب إن الـ <strong>Driver مش مثبت</strong> — والمشكلة بتتحل بتحميل الـ Driver المناسب من موقع المصنّع الرسمي.",
    quiz: {
      question: "إيه اسم البرنامج اللي بيتحكم في جهاز متصل بالكمبيوتر؟",
      options: [
        "برنامج يتحكم في التواصل بين الجهاز المتصل بالكمبيوتر والسوفتوير (Device Driver)",
        "نوع من نظام التشغيل",
        "العتاد بتاع الأجهزة الطرفية",
        "واجهة فيزيائية للتوصيل"
      ],
      answer: 0,
      explain: "برنامج التحكم (Device Driver) هو برنامج يتحكم في <strong>التواصل</strong> بين الجهاز المتصل بالكمبيوتر والسوفتوير (البرمجيات)."
    }
  },

  {
    id: "logic-intro-and",
    category: "القسم الثالث: الدوائر المنطقية (7-3)",
    title: "العمليات المنطقية وبوابة AND",
    tagline: "1 يعني صح و0 يعني غلط — ابدأ رحلة تفكير الكمبيوتر بالمنطق",
    glyph: "🚪",
    image: "assets/images/transistor.jpg",
    visualCaption: "بوابة AND بتطلّع 1 بس لما كل المدخلات تكون 1 — زي الباب اللي لازم مفتاحين يتفتحوا مع بعض.",
    interactiveType: "truth_table_lab",
    story: [
      `<p class="story-lead">الصوت والصور والأرقام — كلها <strong>1 و 0</strong> من جوه. والكمبيوتر بيتعامل مع الـ 1 و0 دي بالعمليات المنطقية في <strong>الدوائر المنطقية (Logic Circuits)</strong>.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔁</strong> العملية المنطقية (Logical Operation)</h4>
            <span class="card-badge badge-blue">1 = صح • 0 = غلط</span>
          </div>
          <p class="card-desc">الكمبيوتر مش بيعرف يرد بس "شوية صح" — كل حاجة بتوصله لازم تكون إجابة على سؤال بسيط: <strong>صح ولا غلط؟</strong> فبنرمّز الإجابات بالرقمين: <strong>1 = صح (True)</strong> و <strong>0 = غلط (False)</strong>.</p>
          <p class="card-desc"><strong>الدائرة المنطقية (Logic Circuit):</strong> قطعة صغيرة جوه الشريحة بتستقبل 1 و 0 من مدخلاتها وتقرر الإجابة النهائية على أساسها — زي حكم يسمع الناحيتين ويطلّع قرار واحد.</p>
          <p class="card-desc"><strong>جدول الحقيقة (Truth Table):</strong> جدول بيكتب الإجابة لكل حالة ممكنة — بيجرب كل احتمالات المدخلات ويكتب المخرج جنبها، فمش بيخلي ولا حالة من غير إجابة.</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🚪</strong> بوابة AND (بالإنجليزي: Logical Conjunction)</h4>
            <span class="card-badge badge-amber">لما كل المدخلات تتحقق</span>
          </div>
          <p class="card-desc">تخيل <strong>لمبة موصلة بسلك فيه مفتاحين ورا بعض</strong>: لازم تدوس على المفتاحين الاتنين علشان الكهربا تلاقي طريقها وتوصل لللمبة وتنورها. ولعت مفتاح واحد بس؟ اللمبة ماتنورش، خلاص.</p>
          <p class="card-desc">وبوابة AND شغالة بنفس المنطق: بتطلّع المخرج <strong>1 بس لما كل المدخلات تكون 1</strong> — لو أي مدخل 0، المخرج 0 على طول.</p>
          <p style="text-align:center; font-size:0.85rem; color:#666; margin:1rem 0 0.3rem;"><strong>A</strong> و <strong>B</strong> مدخلتين و <strong>X</strong> هو المخرج</p>
          <table class="l3-mini-table">
            <tr><th colspan="2">المدخلات</th><th>المخرج</th></tr>
            <tr><th>A</th><th>B</th><th>X</th></tr>
            <tr><td>0</td><td>0</td><td><strong>0</strong></td></tr>
            <tr><td>0</td><td>1</td><td><strong>0</strong></td></tr>
            <tr><td>1</td><td>0</td><td><strong>0</strong></td></tr>
            <tr><td>1</td><td>1</td><td><strong style="color:#10b981;">1</strong></td></tr>
          </table>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <h4 class="callout-title">حفظها بسهولة</h4>
        </div>
        <p class="card-desc"><strong>AND بمعنى "و" بالعربي</strong> — زي لما تقول: "النت شغال <strong>و</strong> الكهربا شغالة". الـ"و" دي معناها إن الشرطين لازم ضبط فيهم مع بعض، مش أي واحد فيهم لوحده.</p>
        <p class="card-example">🔍 <em>مثال من الحياة:</em> عشان تتفرج على فلم أونلاين لازم <strong>النت</strong> <strong>و</strong> <strong>الكهربا</strong> يشتغلوا مع بعض — لو واحد فيهم راح، مفيش فلم (دي AND بالظبط).</p>
      </div>`
    ],
    takeaway: "1 = صح و 0 = غلط ⬝ الدائرة المنطقية بتقرر صح/غلط على أساس المدخلات ⬝ جدول الحقيقة بيكتب إجابة كل حالة ممكنة ⬝ AND = مفتاحين ورا بعض: المخرج 1 <strong>فقط لما كل</strong> المدخلات 1 — لو مدخل 0 المخرج 0.",
    funFact: "البوابات المنطقية بتتصنع من <strong>الترانزستور (Transistor)</strong> — والمعالج الحديث ممكن يكون فيه <strong>مليارات الترانزستورات</strong>! يعني مليارات البوابات الصغيرة بتشتغل بالـ 1 و0 طول اليوم.",
    quiz: {
      question: "في بوابة AND: لو المدخل A = 0 والمدخل B = 1، ما هو المخرج X؟",
      options: [
        "0 — لأن أي مدخل 0 يخلّي المخرج 0",
        "1 — لأن أي مدخل صح يكفي",
        "يعتمد على ترتيب المدخلات — A الأول ولا B الأول",
        "مفيش مخرج أصلاً لما المدخلين مختلفين"
      ],
      answer: 0,
      explain: "بوابة AND بتطلّع <strong>1 فقط لما كل</strong> المدخلات 1. أي مدخل 0 يكفي علشان المخرج يبقى 0."
    }
  },

  {
    id: "or-not-gates",
    category: "القسم الثالث: الدوائر المنطقية (7-3)",
    title: "بوابات OR و NOT",
    tagline: "OR يكتفي بأي مدخل صح و NOT يعكس أي مدخل — البوابات اللي بيكملوا الصورة",
    glyph: "🔀",
    image: "assets/images/transistor.jpg",
    visualCaption: "بوابة OR بتطلع 1 لو أي مدخل 1، وبوابة NOT بتعكس المدخل تمامًا (0→1 و 1→0).",
    interactiveType: "or_not_lab",
    story: [
      `<p class="story-lead">بعد ما عرفنا بوابة AND، نكمل بباقي البوابات الأساسية: بوابة <strong>OR</strong> اللي بيكفيها مدخل واحد، وبوابة <strong>NOT</strong> اللي بتعكس القيمة.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔓</strong> بوابة OR (بالإنجليزي: Logical Disjunction)</h4>
            <span class="card-badge badge-blue">واحدة كافية</span>
          </div>
          <p class="card-desc">تخيل <strong>مفتاحين جنب بعض في خطين متوازيين</strong> ولمبة واحدة في الآخر: تدوس على أي مفتاح منهم → اللمبة تنور. ولعت الاتنين؟ تنور برضه — لأن الكهربا دايمًا لاقي طريق فاضي.</p>
          <p class="card-desc">وبوابة OR شغالة بنفس الصورة: بتطلّع <strong>1 لو واحد من المدخلات على الأقل = 1</strong> — يكفي مدخل واحد صح والنتيجة تبقى صح.</p>
          <table class="l3-mini-table">
            <tr><th colspan="2">المدخلات</th><th>المخرج</th></tr>
            <tr><th>A</th><th>B</th><th>X</th></tr>
            <tr><td>0</td><td>0</td><td><strong>0</strong></td></tr>
            <tr><td>0</td><td>1</td><td><strong style="color:#10b981;">1</strong></td></tr>
            <tr><td>1</td><td>0</td><td><strong style="color:#10b981;">1</strong></td></tr>
            <tr><td>1</td><td>1</td><td><strong style="color:#10b981;">1</strong></td></tr>
          </table>
          <p class="card-example">🔍 <em>مثال يومي:</em> عشان تروح الجامعة: <strong>مترو <strong>أو</strong> ميكروباص</strong> — يكفي واحدة منهم توصلك.</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔄</strong> بوابة NOT (دائرة العاكس — Inverter)</h4>
            <span class="card-badge badge-amber">عاكس القيمة</span>
          </div>
          <p class="card-desc">بوابة NOT بتاخد المدخل و<b>ترجعه بالعكس</b>: تحط 0 يطلع 1، وتحط 1 يطلع 0. عشان كده اسمها <strong>دائرة العاكس (Inverter Circuit)</strong>.</p>
          <table class="l3-mini-table">
            <tr><th>المدخل</th><th>المخرج</th></tr>
            <tr><th>A</th><th>X</th></tr>
            <tr><td>0</td><td><strong style="color:#10b981;">1</strong></td></tr>
            <tr><td>1</td><td><strong style="color:#f59e0b;">0</strong></td></tr>
          </table>
          <p class="card-example">🔍 <em>مثال يومي:</em> لمبة الشوارع اللي بتنور لوحدها بالليل: لما تحس بالضلمة (مدخل <strong>0</strong> = مفيش شمس) المخرج يبقى <strong>1</strong> فتنور، ولما الشمس تطلع (مدخل <strong>1</strong>) المخرج يبقى <strong>0</strong> فتتطفي — بالعكس بالظبط.</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">🧠</span>
          <h4 class="callout-title">التخيل في 3 ثواني</h4>
        </div>
        <p class="card-desc">افكر فيهم بمشاهد حواليك: <strong>AND = مفتاحين ورا بعض</strong> (لازم الاتنين يولعوا) ⬝ <strong>OR = مفتاحين جنب بعض</strong> (يكفي واحد) ⬝ <strong>NOT = عكس لازم</strong> (شغّال → مطفي، مطفي → شغّال).</p>
      </div>`
    ],
    takeaway: "OR = مفتاحين جنب بعض: المخرج 1 لو <strong>أي</strong> مدخل = 1 — يكفي واحد ⬝ NOT = المخرج <strong>عكس</strong> المدخل (0→1 و1→0) ⬝ AND + OR + NOT هي البوابات الأساسية، ومن تركيباتهم بنعمل أي دايرة متقدمة.",
    funFact: "البوابات الثلاثة (AND • OR • NOT) هي اللبنات اللي بتتبني منها دوائر جمع أرقام حقيقية جوه المعالج — يعني كل عملية حسابية بتعملها الموبايل هي بوابات بسيطة شغالة بسرعة مليارات المرات في الثانية!",
    quiz: {
      question: "في بوابة NOT: المدخل A = 0. ما هو المخرج X؟",
      options: [
        "1 — لأن NOT بتطلع معاكس للمدخل",
        "0 — لأن NOT بتطلع نفس القيمة",
        "10 في الثنائي — لأن NOT بتزوّد 1",
        "يعتمد على البوابة اللي قبلها"
      ],
      answer: 0,
      explain: "بوابة NOT (عاكس القيمة) بتطلع <strong>عكس</strong> المدخل: مدخل 0 بتطلع <strong>1</strong>، ومدخل 1 بتطلع <strong>0</strong>."
    }
  },

  {
    id: "half-adder",
    category: "القسم الثالث: الدوائر المنطقية (7-3)",
    title: "دائرة نصف الجامع (Half Adder)",
    tagline: "جمع عمود عمود زي ما بتعمل على الورق — بس بالـ 1 و 0",
    glyph: "➕",
    image: "assets/images/babbage.jpg",
    visualCaption: "نصف الجامع دائرة من AND وOR وNOT بتحسب عمود واحد في الثنائي وبتطلع المجموع (S) والحمل (C) — زي «اكتب واحمل» في الجمع على الورق.",
    interactiveType: "half_adder_sim",
    story: [
      `<p class="story-lead">الكمبيوتر مبيجمعش رقمين كبيرين دفعة واحدة — بيجمع بنفس طريقتك على الورق: <strong>عمود عمود</strong>. والدائرة اللي بتحسب عمود واحد اسمها <strong>دائرة نصف الجامع (Half Adder Circuit)</strong>.</p>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🧮</strong> الفكرة الأساسية</h4>
          <span class="card-badge badge-blue">مدخلات A وB — مخرجات S وC</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🎯</span> بتحسب <strong>عمود واحد</strong> بس من عملية جمع بالثنائي — زي لما بتجمع على الورق عمود عمود</li>
          <li><span class="list-bullet-icon">📥</span> ليها <strong>مدخلين</strong>: <strong>A</strong> و <strong>B</strong> — الرقمين اللي جايين من العمود ده</li>
          <li><span class="list-bullet-icon">📤</span> وبيطلّع مخرجين: <strong>S</strong> الرقم اللي بتحطه تحت الخط (المجموع Sum) و <strong>C</strong> اللي بترشّله للعمود اللي بعده (الحمل Carry)</li>
        </ul>
        <p class="card-example">🔍 <em>زي الجمع على الورق:</em> 7 + 8 = 15 — بتكتب 5 في العمود وترشّل 1 للعشرات. هنا نفس الكلام بالـ 1 و 0: 1 + 1 → بيكتب <strong>S=0</strong> ويرشّل <strong>C=1</strong> (عدد 10 في الثنائي معناه 2 في العشري).</p>
      </div>`,
      `<div class="story-card card-amber-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📊</strong> جدول الحقيقة لنصف الجامع</h4>
          <span class="card-badge badge-amber">احفظه كويس</span>
        </div>
        <table class="l3-mini-table">
          <tr><th colspan="2">المدخلات</th><th colspan="2">المخرجات</th></tr>
          <tr><th>A</th><th>B</th><th>C (حمل)</th><th>S (مجموع)</th></tr>
          <tr><td>0</td><td>0</td><td>0</td><td><strong>0</strong></td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td><strong>1</strong></td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td><strong>1</strong></td></tr>
          <tr><td>1</td><td>1</td><td><strong style="color:#f59e0b;">1</strong></td><td><strong style="color:#f59e0b;">0</strong></td></tr>
        </table>
        <p class="card-desc">السطر الأخير هو بس اللي بيطلّع حمل: <strong>1 + 1 → اكتب 0 وارشّل 1</strong> (S=0 وC=1) — يعني النتيجة <strong>10</strong> في الثنائي (يعني 2 في العشري).</p>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">💪</span>
          <h4 class="callout-title">قاعدة سريعة</h4>
        </div>
        <p class="card-desc">الحمل <strong>C ما بيطلعش غير في حالة واحدة</strong>: لما المدخلين الاتنين 1 (يعني 1+1) — وقتها <strong>S=0 وC=1</strong>: اكتب 0 وارشّل 1 زي الورق بالظبط. في أي حالة تانية: <strong>C=0</strong> و <strong>S = مجموع المدخلات نفسها</strong>.</p>
      </div>`
    ],
        takeaway: "نصف الجامع = حاسبة عمود واحد — «اكتب واحمل» زي الورق ⬝ مكوّنة من AND + OR + NOT ⬝ المدخلات: A وB ⬝ المخرجات: S (المجموع اللي بتكتبه) و C (الحمل اللي بترشّله) ⬝ 1+1 → S=0 وC=1 (10 في الثنائي = 2 في العشري).",
    funFact: "قاعدة المعالجات الحقيقية: لما المدخلين الاتنين 1، المجموع يبقى 0 والحمل يبقى 1 — نفس قاعدة الجمع اللي بتحسب بيها على الورق، بس هنا كل حاجة 1 و 0!",
    quiz: {
      question: "في نصف الجامع، المدخل A = 1 والمدخل B = 1. ما هو المخرج S (مجموع) و المخرج C (حمل)؟",
      options: [
        "S = 0، C = 1",
        "S = 1، C = 1",
        "S = 1، C = 0",
        "S = 0، C = 0"
      ],
      answer: 0,
      explain: "1+1 في الثنائي = 10 — زي «اكتب 0 وارشّل 1» على الورق: الحمل C = 1 والمجموع S = 0."
    }
  },

  {
    id: "full-adder",
    category: "القسم الثالث: الدوائر المنطقية (7-3)",
    title: "دائرة الجامع الكامل (Full Adder)",
    tagline: "بياخد حمل العمود اللي قبله زي الجمع على الورق — عشان كده الكمبيوتر يقدر يجمع أرقام بأي حجم",
    glyph: "🔢",
    image: "assets/images/babbage.jpg",
    visualCaption: "الجامع الكامل — مكوّن من نصف جامعين — بياخد حمل العمود اللي قبله (Cin) ويرشّل الحمل للعمود اللي بعده (Cout)، نفس مخطط الجمع على الورق.",
    interactiveType: "full_adder_sim",
    story: [
      `<p class="story-lead">نصف الجامع كويس في عموده، بس لازم نفتكر حاجة: لما بتجمع على الورق، كل عمود بيجي ماسك <strong>حمل من العمود اللي قبله</strong> — ونصف الجامع ملوش دخل بالحمل ده خلاص! هنا بيجيلك <strong>الجامع الكامل (Full Adder Circuit)</strong>: نفس الفكرة، بس <strong>الحمل بيدخل الحسبة زي باقي الأرقام</strong>.</p>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🧠</strong> الفكرة</h4>
          <span class="card-badge badge-blue">مكوّن من نصف جامعين</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🎯</span> بياخد الحمل <strong>الجاي من العمود اللي قبله (Cin)</strong> وبيبعت الحمل <strong>للعمود اللي بعده (Cout)</strong> — زي ما بتعمل على الورق بالظبط</li>
          <li><span class="list-bullet-icon">🏗️</span> مكوّن من <strong>نصف جامعين</strong> موصولين ورا بعض + بوابة OR</li>
          <li><span class="list-bullet-icon">🔢</span> عدد المدخلات: <strong>A</strong> و <strong>B</strong> و <strong>Cin</strong> ⬝ المخرجات: <strong>S</strong> و <strong>Cout</strong></li>
        </ul>
      </div>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">🧗</span>
          <h4 class="callout-title">مثال كامل خطوة بخطوة (A=1، B=1، Cin=0)</h4>
        </div>
        <p class="card-desc">الجامع الكامل جوّاه نصف جامعين شغالين ورا بعض — تتبع خطواتهم:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">1️⃣</span> <strong>نصف الجامع الأول:</strong> يجمع A=1 وB=1 → يطلع S₁=0 وC₁=1 (حمل داخلي)</li>
          <li><span class="list-bullet-icon">2️⃣</span> <strong>نصف الجامع الثاني:</strong> يجمع S₁=0 مع الحمل الجاي Cin=0 → يطلع S=0 وC₂=0</li>
          <li><span class="list-bullet-icon">3️⃣</span> <strong>بوابة OR في الأخير:</strong> C₁=1 وC₂=0 → <strong>Cout=1</strong></li>
        </ul>
        <p class="card-desc"><strong>النتيجة النهائية:</strong> S=0 و <strong>Cout=1</strong> — يعني 1+1+0 = <strong>10</strong> في الثنائي: اكتب 0 في العمود وارشّل 1 للي بعده ✅</p>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">🌈</span>
          <h4 class="callout-title">السلسلة الكاملة للكمبيوتر</h4>
        </div>
        <p class="card-desc">لما تحب تجمع رقمين كبيرين، الكمبيوتر بيركّب <strong>جامع كامل في كل عمود</strong> من العدد — بالظبط زي عملية الجمع على الورق: كل عمود بياخد الحمل من اللي قبله (<strong>Cin</strong>) ويرشّل حمل للي بعده (<strong>Cout</strong>)، ويمشي مئات وخانات من غير مشاكل.</p>
        <p class="card-example">🔍 <em>ببساطة:</em> كل عمود بيدخل: <strong>A + B + الحمل الجاي</strong>، ويردّ: اكتب وارشّل — نفس مخطط الجمع على الورق.</p>
      </div>`
    ],
        takeaway: "الجامع الكامل = نصف الجامع + الحمل: بياخد <strong>Cin</strong> من العمود اللي قبله ويرشّل <strong>Cout</strong> للعمود اللي بعده ⬝ مكوّن من نصف جامعين + بوابة OR ⬝ مثال: 1+1+0 → S=0 وCout=1 — اكتب 0 وارشّل 1.",
    funFact: "كل الجمع الكبير في الكمبيوتر — من فاتورة حسابات لعملية في لعبة — بيتم بجامعات كاملة واقفة ورا بعض، كل واحدة بتمرر الحمل للي بعده!",
    quiz: {
      question: "في الجامع الكامل، المدخلات A=1 و B=0 و Cin=1. ما هي النتيجة (S و Cout)؟",
      options: [
        "S = 0، Cout = 1",
        "S = 1، Cout = 0",
        "S = 1، Cout = 1",
        "S = 0، Cout = 0"
      ],
      answer: 0,
      explain: "1+0+1 = 2 = 10 في الثنائي — اكتب 0 وارشّل 1: المجموع S=0، والحمل Cout=1."
    }
  }
];

const LECT5_MATCH_ITEMS_AR = [
  { id: "m1", concept: "العتاد (Hardware)", match: "أجهزة مادية ملموسة زي وحدة الكمبيوتر الرئيسية والأجهزة الطرفية" },
  { id: "m2", concept: "وحدة التحكم (Control Unit)", match: "بتنفذ تعليمات الكمبيوتر وتبعت أوامر لكل الأجزاء" },
  { id: "m3", concept: "وحدة الحساب (Arithmetic Unit)", match: "الجزء المسؤول عن أداء الحسابات" },
  { id: "m4", concept: "الذاكرة الرئيسية (Main Memory)", match: "بتخزن البرامج والبيانات بشكل مؤقت وبتتبادل مباشرة مع الـ CPU" },
  { id: "m5", concept: "الذاكرة الثانوية (Secondary Memory)", match: "بتخزّن لفترة طويلة — زي الهارد ديسك وSSD والفلاشة" },
  { id: "m6", concept: "CPU", match: "وحدة التحكم + وحدة الحساب مع بعض — عقل الكمبيوتر" },
  { id: "m7", concept: "الواجهة (Interface)", match: "وسيط بيتم تبادل المعلومات من خلاله بين وحدة الكمبيوتر الرئيسية والأجهزة الطرفية" },
  { id: "m8", concept: "HDMI", match: "معيار بيمرر الفيديو والصوت عبر كابل واحد — للتلفزيون الرقمي وأجهزة الصوت" },
  { id: "m9", concept: "Ethernet", match: "معيار الشبكات المحلية السلكية (LAN) في البيت والمكتب — هاب وراوتر" },
  { id: "m10", concept: "نظام التشغيل (OS)", match: "برمجيات نظام مسؤولة عن الوظائف الأساسية — إدارة المهام والذاكرة والملفات (Windows / macOS / Android)" },
  { id: "m11", concept: "برنامج التحكم بالجهاز (Device Driver)", match: "برنامج بيتحكم في التواصل بين الجهاز المتصل بالكمبيوتر والسوفتوير" },
  { id: "m12", concept: "بوابة AND", match: "بتطلع 1 فقط لما كل المدخلات تكون 1" },
  { id: "m13", concept: "بوابة OR", match: "بتطلع 1 لو أي واحد من المدخلات = 1" },
  { id: "m14", concept: "بوابة NOT", match: "بتطلع عكس المدخل (0→1 و 1→0)" },
  { id: "m15", concept: "نصف الجامع (Half Adder)", match: "دائرة جمع خانة واحدة — مكونة من AND وOR وNOT، بتطلع S (مجموع) وC (حمل)" },
  { id: "m16", concept: "الجامع الكامل (Full Adder)", match: "بياخد الحمل من المرحلة السابقة (Cin) وبيبعت الحمل للمرحلة اللاحقة (Cout) — مكوّن من نصف جامعين" }
];

if (typeof window !== 'undefined') {
  window.LECT5_STAGES_AR = LECT5_STAGES_AR;
  window.LECT5_MATCH_ITEMS_AR = LECT5_MATCH_ITEMS_AR;
}

