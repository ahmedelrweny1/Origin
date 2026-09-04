/* ============================================================
   الفصل الثاني: المحاضرة الثانية (البيانات الشخصية والملكية الفكرية)
   بيانات المراحل والتحدي الختامي باللغة العربية
   ============================================================ */

const LECT2_STAGES_AR = [
  {
    id: "personal-data",
    category: "القسم الأول: حماية البيانات والخصوصية",
    title: "البيانات الشخصية ورموز الهوية",
    tagline: "ما هي بصمتك الرقمية؟ كيف تميز بين البيانات العادية والشخصية والحساسة؟",
    glyph: "🪪",
    image: "assets/images/personal_data_vault.jpg",
    visualCaption: "خزينة الهوية: البيانات الأساسية الأربعة، وأرقام الهوية المشفرة، والبيانات الحساسة التي تستوجب عناية وحماية قصوى.",
    interactiveType: "data_classifier",
    story: [
      `<p class="story-lead">في عصر التحول الرقمي، أصبحت بياناتك الشخصية أغلى من الذهب. يُعرّف <strong>قانون حماية البيانات الشخصية</strong> البيانات بأنها: <em>«كل بيان أو معلومة تتعلق بشخص طبيعي محدد، أو يمكن تحديده بشكل مباشر أو غير مباشر من خلال الربط مع بيانات أخرى»</em>.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🪪</span> ١. البيانات الأساسية الأربعة (Four Basic Items)</h4>
            <span class="card-badge badge-blue">حجر الزاوية للهوية</span>
          </div>
          <p class="card-desc">الركائز الأربع المعتمدة قانونياً للتحقق من هوية أي شخص طبيعي بدقة تامة:</p>
          <div class="pill-cloud">
            <span class="pill-item">👤 الاسم بالكامل</span>
            <span class="pill-item">🏠 العنوان ومحل الإقامة</span>
            <span class="pill-item">📅 تاريخ الميلاد</span>
            <span class="pill-item">⚧️ النوع (الجنس)</span>
          </div>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔢</span> ٢. أرقام الهوية الشخصية (Personal ID Codes)</h4>
            <span class="card-badge badge-amber">بيانات سيادية فريدة</span>
          </div>
          <p class="card-desc">سلاسل رقمية حصرية تمنحها الدولة لتمييز كل مواطن بدقة، وتُعد بيانات شخصية مباشرة لأنها تدل فوراً على شخص محدد:</p>
          <div class="pill-cloud">
            <span class="pill-item">💳 الرقم القومي</span>
            <span class="pill-item">🛂 رقم جواز السفر</span>
            <span class="pill-item">🚗 رقم رخصة القيادة</span>
          </div>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔒</span> ٣. البيانات الحساسة فائقة العناية (Special Care / Sensitive)</h4>
            <span class="card-badge badge-red">حماية قصوى وعقوبات مشددة</span>
          </div>
          <p class="card-desc">معلومات بالغة الخطورة تتطلب عناية استثنائية لأن إفشاءها يسبب تمييزاً أو ضرراً جسيماً للفرد:</p>
          <div class="pill-cloud">
            <span class="pill-item">🏥 الحالة الصحية والطبية</span>
            <span class="pill-item">🧬 البيانات البيومترية (بصمة العين واليد)</span>
            <span class="pill-item">⚖️ السجل الجنائي</span>
            <span class="pill-item">🕌 المعتقدات والديانة</span>
            <span class="pill-item">🗳️ الآراء السياسية</span>
            <span class="pill-item">💰 الذمة المالية</span>
          </div>
        </div>
      </div>`
    ],
    takeaway: "البيانات الشخصية تشمل أي معلومة تحدد هويتك منفرداً أو بالدمج ⬝ الرباعي الأساسي: اسم، عنوان، ميلاد، ونوع ⬝ والبيانات البيومترية والصحية تقع في أعلى درجات الحساسية.",
    funFact: "بصمة حدقية العين (Iris Scan) تحتوي على أكثر من ٢٤٠ نقطة مميزة فريدة، مقارنة بحوالي ٤٠ نقطة فقط في بصمة الإصبع، مما يجعلها من أدق البيانات الحساسة عالمياً!",
    quiz: {
      question: "أي من الآتي يُعد من 'البيانات الأساسية الأربعة' (Four Basic Items) المحددة في المنهج وقوانين حماية البيانات؟",
      options: [
        "الاسم والعنوان وتاريخ الميلاد والنوع",
        "رقم الحساب البنكي والبريد الإلكتروني",
        "بصمة الأصابع وفصيلة الدم",
        "المسمى الوظيفي وعدد سنوات الخبرة"
      ],
      answer: 0,
      explain: "البيانات الأساسية الأربعة المعتمدة قانونياً وتعليمياً للتحقق من هوية الشخص الطبيعي هي: الاسم، العنوان، تاريخ الميلاد، والنوع."
    }
  },
  {
    id: "privacy-rights",
    category: "القسم الأول: حماية البيانات والخصوصية",
    title: "الحق في الخصوصية وحقوق الصورة والشهرة",
    tagline: "حقوق دستورية تحميك خلف الشاشة: متى يُحظر التصوير ومتى يجوز كشف البيانات؟",
    glyph: "🛡️",
    image: "assets/images/privacy_image_rights.jpg",
    visualCaption: "درع الحماية القانونية: الحق في الخصوصية وحق الصورة يحظران التعدي أو التصوير، وحق الدعاية يحمي القيمة الاقتصادية للمشاهير.",
    interactiveType: "privacy_rights_sim",
    story: [
      `<p class="story-lead">تمنح القوانين والدساتير الحديثة (وعلى رأسها <strong>المادة 57 من الدستور المصري</strong>) حماية مقدسة للحياة الخاصة للمواطنين، مؤكدة أن <em>«للحياة الخاصة حرمة، وهي مصونة لا تمس»</em>، وتتفرع الحماية إلى ثلاثة أركان:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🛡️</span> ١. الحق في الخصوصية (Right to Privacy)</h4>
            <span class="card-badge badge-blue">حق دستوري أصيل</span>
          </div>
          <p class="card-desc">حقك المطلق في الحفاظ على أسرار حياتك الخاصة ومعلوماتك الشخصية بعيداً عن التطفل والاطلاع غير المشروع.</p>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>📷</span> ٢. حقوق الصورة (Image / Portrait Rights)</h4>
            <span class="card-badge badge-amber">حظر التصوير دون إذن</span>
          </div>
          <p class="card-desc">حظر تصوير أو تسجيل أو نشر صورة أي فرد أو ملامح وجهه دون موافقته الصريحة المسبقة، حتى وإن كان من أصدقائك أو عائلتك!</p>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>⭐</span> ٣. حقوق الشهرة والدعاية (Publicity Rights)</h4>
            <span class="card-badge badge-red">المصلحة الاقتصادية للمشاهير</span>
          </div>
          <p class="card-desc">حماية القيمة التجارية والمالية لأسماء وصور المشاهير والرياضيين، فلا يجوز استغلال صورهم في إعلانات أو سلع تجارية دون ترخيص رسمي منهم.</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-red">
        <div class="callout-header">
          <span class="callout-icon">⚖️</span>
          <h4 class="callout-title">استثناءات قانونية: متى يجوز كشف البيانات لطرف ثالث دون إذن؟</h4>
        </div>
        <p style="font-size:0.92rem; margin-bottom:0.6rem; color:var(--ink-soft);">حدد القانون ٤ حالات طارئة واستثنائية فقط:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📜</span> <strong>تنفيذ القانون:</strong> نصوص القوانين واللوائح الرسمية للدولة.</li>
          <li><span class="list-bullet-icon">🛡️</span> <strong>المصلحة العامة:</strong> مقتضيات الأمن القومي ومكافحة الجرائم.</li>
          <li><span class="list-bullet-icon">🚑</span> <strong>إنقاذ الأرواح:</strong> حماية حياة الشخص أو صحته وسلامته في حالات الطوارئ الطبية.</li>
          <li><span class="list-bullet-icon">🏛️</span> <strong>أوامر القضاء:</strong> تنفيذ أحكام المحاكم وقرارات النيابة العامة وجهات التحقيق.</li>
        </ul>
      </div>`
    ],
    takeaway: "الخصوصية حق دستوري ⬝ لا تصوّر ولا تنشر صورة أحد دون إذنه ⬝ استغلال صور المشاهير تجارياً ينتهك حقوق الدعاية ⬝ والاستثناءات تنحصر في القانون والأمن وإنقاذ الأرواح.",
    funFact: "أول دعوى قضائية شهيرة في تاريخ حق الشهرة (Publicity Rights) رُفعت عام ١٩٥٣ في أمريكا بسبب طباعة صور لاعبي البيسبول على بطاقات علكة دون إذنهم!",
    quiz: {
      question: "قام شخص بالتقاط صورة لنجم كرة قدم مشهور وطباعتها على قمصان وعرضها للبيع عبر الإنترنت لجني أرباح، هذا التصرف ينتهك تحديداً:",
      options: [
        "حقوق الدعاية والشهرة (Publicity Rights)",
        "رخصة المشاع الإبداعي (Creative Commons)",
        "حقوق نموذج المنفعة (Utility Model)",
        "مبدأ الشكلية في الاختراعات (Formality Principle)"
      ],
      answer: 0,
      explain: "حقوق الدعاية والشهرة تحمي القيمة الاقتصادية الناتجة عن استغلال اسم وصورة الشخصية المشهورة في الأنشطة التجارية والترويجية."
    }
  },
  {
    id: "corporate-privacy",
    category: "القسم الأول: حماية البيانات والخصوصية",
    title: "حماية البيانات في الشركات والمؤسسات",
    tagline: "سياسات الخصوصية، علامة الثقة، والمواجهة بين نظام الموافقة المسبقة ونظام الاعتراض",
    glyph: "🏢",
    image: "assets/images/corporate_data_policy.jpg",
    visualCaption: "حوكمة البيانات في المؤسسات: سياسات واضحة، تراخيص نظامية، وخيارات تحكم للمستخدم بين Opt-In و Opt-Out.",
    interactiveType: "consent_opt_sim",
    story: [
      `<p class="story-lead">عند التعامل مع المنصات الرقمية وتطبيقات الهواتف، يخضع جمع البيانات لمعايير حوكمة صارمة تكفل الشفافية وتمنحك التحكم الكامل:</p>`,
      `<div class="content-grid-2">
        <div class="story-card">
          <div class="card-header-row">
            <h4 class="card-title"><span>📋</span> سياسة الخصوصية (Privacy Policy)</h4>
            <span class="card-badge">وثيقة شفافة وملزمة</span>
          </div>
          <p class="card-desc">إعلان قانوني يوضح للمستخدم بوضوح: ما البيانات التي تجمعها الشركة؟ ولماذا؟ وكيف تُخزنها وتؤمنها؟ ومن يحق له الاطلاع عليها؟</p>
        </div>

        <div class="story-card">
          <div class="card-header-row">
            <h4 class="card-title"><span>🏅</span> علامة الثقة والترخيص (Privacy Mark)</h4>
            <span class="card-badge badge-green">شهادة اعتماد رسمية</span>
          </div>
          <p class="card-desc">ترخيص تصدره الهيئة الوطنية لحماية البيانات للشركات التي تثبت امتثالها التام لأعلى معايير الأمان التقني والقانوني المعتمدة.</p>
        </div>
      </div>`,
      `<div class="versus-deck">
        <div class="versus-card versus-optin">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔒</span> نظام الموافقة المسبقة (Opt-in)</h4>
            <span class="card-badge badge-green">الأكثر أماناً وحماية</span>
          </div>
          <div class="versus-status-pill">الافتراضي: <strong>محظور تماماً</strong></div>
          <p class="card-desc">لا يجوز للشركة جمع البيانات أو إرسال عروض إعلانية إلا بعد أن يبادر المستخدم بنفسه بوضع علامة الموافقة الصريحة.</p>
          <div class="versus-rule-quote">«لا تفعل شيئاً حتى أطلب منك صراحة»</div>
        </div>

        <div class="versus-card versus-optout">
          <div class="card-header-row">
            <h4 class="card-title"><span>📡</span> نظام الاعتراض (Opt-out)</h4>
            <span class="card-badge badge-amber">شائع تجارياً</span>
          </div>
          <div class="versus-status-pill">الافتراضي: <strong>مفعّل ونشط تلقائياً</strong></div>
          <p class="card-desc">يتم جمع البيانات وإرسال الرسائل فور تسجيلك، ويستمر ذلك ما لم تتدخل بنفسك وتضغط على زر إلغاء الاشتراك أو الاعتراض.</p>
          <div class="versus-rule-quote">«مستمر في العمل حتى تأمرني بالتوقف»</div>
        </div>
      </div>`
    ],
    takeaway: "الشركات ملتزمة بنشر سياسة الخصوصية والحصول على ترخيص ⬝ Opt-in يعني: 'لا تفعل حتى أطلب منك' ⬝ Opt-out يعني: 'مستمر حتى تطلب الإيقاف'.",
    funFact: "في الاتحاد الأوروبي ومصر، يفرض قانون حماية البيانات نظام Opt-in كشرط أساسي لجمع البيانات الحساسة، مع غرامات تصل للملايين ضد الشركات المخالفة!",
    quiz: {
      question: "نظام لا يقوم بجمع بيانات المستخدم أو إرسال رسائل ترويجية له إلا بعد حصوله على موافقة صريحة ومسبقة منه يُعرف بنظام:",
      options: [
        "الموافقة المسبقة (Opt-in System)",
        "الاعتراض (Opt-out System)",
        "مبدأ الشكلية (Formality Principle)",
        "الحقوق المجاورة (Neighboring Rights)"
      ],
      answer: 0,
      explain: "نظام Opt-in يشترط الحصول على إذن مسبق وموافقة صريحة من صاحب البيانات قبل البدء في معالجتها أو تقديم الخدمة."
    }
  },
  {
    id: "industrial-property",
    category: "القسم الثاني: الملكية الفكرية والصناعية",
    title: "الملكية الفكرية وحقوق الملكية الصناعية",
    tagline: "مبدأ الشكلية والأركان الأربعة: البراءات، نماذج المنفعة، التصاميم، والعلامات التجارية",
    glyph: "⚙️",
    image: "assets/images/industrial_property_patents.jpg",
    visualCaption: "خريطة الملكية الصناعية: براءات الاختراع لحلول التكنولوجيا، ونماذج المنفعة للتحسينات الهيكلية، والرسوم للمظهر، والعلامات للشهرة.",
    interactiveType: "industrial_prop_matrix",
    story: [
      `<p class="story-lead"><strong>الملكية الفكرية (Intellectual Property):</strong> هي منظومة الحماية القانونية لنتاج العقل والإبداع البشري، وتنقسم إلى فرعين رئيسيين: <em>الملكية الصناعية والتجارية</em>، و<em>حقوق المؤلف والحقوق المجاورة</em>.</p>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">🏛️</span>
          <h4 class="callout-title">القاعدة الأساسية: مبدأ الشكلية (Formality Principle)</h4>
        </div>
        <p class="card-desc">في الملكية الصناعية، <strong>لا تنشأ الحماية القانونية تلقائياً أبداً</strong>، بل يجب اتباع إجراءات شكلية دقيقة بتقديم طلب وفحص وتسجيل لدى مكاتب براءات الاختراع والعلامات وسداد الرسوم المقررة.</p>
      </div>`,
      `<div class="content-grid-2">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>💡</span> براءات الاختراع (Patents)</h4>
            <span class="card-badge badge-blue">٢٠ عاماً</span>
          </div>
          <p class="card-desc"><strong>الموضوع:</strong> أفكار وتقنيات صناعية جديدة وغير مسبوقة وقابلة للتطبيق العملي الصناعي.</p>
          <p class="card-example">🔍 <em>مثال:</em> تركيبة عقار طبي مبتكر، معالج إلكتروني فائق السرعة.</p>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔧</span> نماذج المنفعة (Utility Models)</h4>
            <span class="card-badge badge-amber">٧ إلى ١٠ سنوات</span>
          </div>
          <p class="card-desc"><strong>الموضوع:</strong> تحسينات وإضافات عملية مفيدة على هيكل أو شكل منتج قائم لتسهيل استخدامه (براءة اختراع صغيرة).</p>
          <p class="card-example">🔍 <em>مثال:</em> تعديل ميكانيكي لشكل مجرى تصريف مياه الغسالة.</p>
        </div>

        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🎨</span> الرسوم والنماذج (Industrial Designs)</h4>
            <span class="card-badge badge-green">١٠ + ٥ سنوات</span>
          </div>
          <p class="card-desc"><strong>الموضوع:</strong> المظهر الخارجي والشكل الجمالي والتزييني للمنتج كالأبعاد والخطوط والألوان.</p>
          <p class="card-example">🔍 <em>مثال:</em> انحناءات هيكل سيارة رياضية، المظهر الخارجي للهاتف.</p>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🏷️</span> العلامات التجارية (Trademarks)</h4>
            <span class="card-badge badge-red">١٠ سنوات (تجدد دائماً)</span>
          </div>
          <p class="card-desc"><strong>الموضوع:</strong> الأسماء والشعارات والرموز والنغمات المميزة التي تفرق بين منتجات الشركات في السوق.</p>
          <p class="card-example">🔍 <em>مثال:</em> نجمة مرسيدس، علامة كوكاكولا، تفاحة أبل.</p>
        </div>
      </div>`
    ],
    takeaway: "الملكية الصناعية تشترط مبدأ الشكلية (التسجيل) ⬝ البراءة = ٢٠ سنة ⬝ نموذج المنفعة = ٧ إلى ١٠ سنوات ⬝ الرسوم الصناعية = ١٠+٥ سنوات ⬝ العلامة التجارية = ١٠ سنوات قابلة للتجديد دائماً.",
    funFact: "شعار كوكاكولا وعلامة مرسيدس كُتبتا وسُجلتا منذ أكثر من قرن، وبفضل ميزة تجديد العلامات التجارية كل ١٠ سنوات، ما زالتا محميتين قانونياً حتى اليوم!",
    quiz: {
      question: "ابتكر مهندس تصميماً جديداً لشكل مجرى المياه داخل الغسالة ليجعل التصريف أسرع وأسهل دون ابتكار تقنية معقدة جديدة بالكامل، ما الحق الذي يحمي هذا التحسين؟",
      options: [
        "حقوق نموذج المنفعة (Utility Model Rights)",
        "حقوق المؤلف (Copyrights)",
        "العلامات التجارية (Trademark Rights)",
        "الحقوق المجاورة (Neighboring Rights)"
      ],
      answer: 0,
      explain: "حقوق نموذج المنفعة تحمي التحسينات العملية والتعديلات الميكانيكية المفيدة على شكل وهيكل المنتجات القائمة."
    }
  },
  {
    id: "copyrights",
    category: "القسم الثالث: حقوق المؤلف واستخدام المعلومات",
    title: "حقوق المؤلف والحقوق المجاورة",
    tagline: "مبدأ عدم الشكلية التلقائي: حماية الأدباء والفنانين والمبرمجين والقُصّر دون تسجيل",
    glyph: "📜",
    image: "assets/images/copyright_creators.jpg",
    visualCaption: "حماية الإبداع: حقوق أدبية أبدية لا تسقط، وحقوق مالية تمتد لعقود بعد وفاة المؤلف، وحقوق مجاورة لفناني الأداء وهيئات البث.",
    interactiveType: "copyright_lifespan_calc",
    story: [
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">✨</span>
          <h4 class="callout-title">القاعدة الذهبية: مبدأ عدم الشكلية (Non-Formality Principle)</h4>
        </div>
        <p class="card-desc">على النقيض تماماً من الملكية الصناعية، <strong>تنشأ حماية حق المؤلف تلقائياً فور ابتكار العمل وتدوينه</strong>، دون حاجة إلى أي تسجيل أو إيداع رسمي أو رسوم، وتثبت الحماية للمبدع سواء كان هاوياً، محترفاً، أو حتى قاصراً وطفلاً!</p>
      </div>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>📚</span> ماذا يشمل حق المؤلف؟ (Scope of Works)</h4>
          <span class="card-badge">إبداعات فكرية ورقمية</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item">📖 الروايات والمقالات</span>
          <span class="pill-item">🎭 المسرحيات والأشعار</span>
          <span class="pill-item">🎨 اللوحات والرسومات</span>
          <span class="pill-item">📸 الصور الفوتوغرافية</span>
          <span class="pill-item">🎵 الألحان والموسيقى</span>
          <span class="pill-item">🎬 الأفلام والسينما</span>
          <span class="pill-item">🏛️ التصاميم المعمارية</span>
          <span class="pill-item">💻 برامج وشيفرات الحاسوب</span>
        </div>
      </div>`,
      `<div class="content-grid-2">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>⚖️</span> الحقوق الأدبية / المعنوية (Moral Rights)</h4>
            <span class="card-badge badge-blue">أبدية لا تسقط ولا تُباع</span>
          </div>
          <p class="card-desc">حقوق لصيقة بشخص المبدع لا تسقط بالتقادم ولا يجوز التنازل عنها أو التصرف فيها بأي ثمن:</p>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">✍️</span> <strong>حق نسبة المصنف:</strong> ذكر اسم المؤلف على عمله دائماً.</li>
            <li><span class="list-bullet-icon">🛡️</span> <strong>حق سلامة المصنف:</strong> منع أي تشويه أو تحريف أو تعديل يمس العمل.</li>
          </ul>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>💰</span> الحقوق المالية (Economic Rights)</h4>
            <span class="card-badge badge-amber">مؤقتة وقابلة للتنازل</span>
          </div>
          <p class="card-desc">حقوق الاستغلال التجاري للعمل وجني الأرباح، ويجوز للمؤلف بيعها أو التنازل عنها لناشر:</p>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">🖨️</span> <strong>الاستغلال المادي:</strong> الطباعة، النشر، البيع، الترجمة، والعرض العلني.</li>
            <li><span class="list-bullet-icon">🤝</span> <strong>عقود النشر:</strong> التنازل لدار نشر أو شركة إنتاج بمقابل مالي.</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-red-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>⏳</span> مدة الحماية والملكية العامة (Public Domain)</h4>
          <span class="card-badge badge-red">حياة المؤلف + ٥٠ / ٧٠ عاماً</span>
        </div>
        <p class="card-desc">تستمر حماية الحقوق المالية طوال حياة المؤلف <strong>بالإضافة إلى ٥٠ عاماً بعد وفاته</strong> في القانون المصري (أو ٧٠ عاماً في المعايير الدولية واليابانية). بعد انقضاء هذه المدة، يسقط العمل في <strong>«الملكية العامة»</strong> ويصبح حراً ومجاناً للجميع دون ترخيص (كروايات طه حسين وسيمفونيات بتهوفن).</p>
      </div>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>📻</span> الحقوق المجاورة (Neighboring Rights)</h4>
          <span class="card-badge">حماية ناقلي ومؤدي الفن</span>
        </div>
        <p class="card-desc">حقوق خاصة تُمنح لمن يقوم بنقل المصنفات وأدائها للجمهور، وتقتصر على ٣ فئات محددة:</p>
        <div class="content-grid-3" style="margin-top:0.8rem;">
          <div class="mini-feature-box">
            <div class="mini-icon">🎭</div>
            <strong>فنانو الأداء</strong>
            <p style="font-size:0.82rem; margin:0; color:var(--ink-soft);">المطربون والممثلون والعازفون.</p>
          </div>
          <div class="mini-feature-box">
            <div class="mini-icon">🎙️</div>
            <strong>منتجو التسجيلات</strong>
            <p style="font-size:0.82rem; margin:0; color:var(--ink-soft);">حماية التسجيلات الصوتية الحديثة.</p>
          </div>
          <div class="mini-feature-box">
            <div class="mini-icon">📡</div>
            <strong>هيئات البث</strong>
            <p style="font-size:0.82rem; margin:0; color:var(--ink-soft);">الإذاعة والتلفزيون وإشارات البث.</p>
          </div>
        </div>
      </div>`
    ],
    takeaway: "حق المؤلف ينشأ تلقائياً بمجرد الابتكار (عدم الشكلية) ⬝ الحقوق المعنوية أبدية لا تسقط ⬝ الحقوق المالية تنتهي بعد ٥٠ أو ٧٠ عاماً من وفاة المبدع ⬝ وأداء المصنفات القديمة يخضع للحقوق المجاورة.",
    funFact: "إذا سجلت سيمفونية لموزارت عزفها عازف بيانو معاصر، فموزارت مصنفه حر في الملكية العامة، ولكن تسجيل العازف محمي بالحقوق المجاورة ولا يمكنك نسخه دون إذنه!",
    quiz: {
      question: "متى تنشأ الحماية القانونية لحقوق المؤلف لبرنامج حاسوبي أو لوحة فنية؟",
      options: [
        "بمجرد ابتكار العمل وظهوره إلى الوجود تلقائياً (مبدأ عدم الشكلية)",
        "بعد التقدم بطلب تسجيل في مكتب براءات الاختراع ودفع الرسوم",
        "عند وصول المبدع إلى السن القانونية (١٨ عاماً)",
        "بعد مرور ٥٠ عاماً على وفاة صاحب العمل"
      ],
      answer: 0,
      explain: "حق المؤلف يقوم على مبدأ عدم الشكلية (Non-Formality)، حيث تثبت الحقوق فور إبداع العمل تلقائياً حتى للهواة والقُصّر."
    }
  },
  {
    id: "fair-use-quotation",
    category: "القسم الثالث: حقوق المؤلف واستخدام المعلومات",
    title: "الاستخدام العادل وضوابط الاقتباس القانوني",
    tagline: "كيف تستفيد من المصادر العلمية بأمان؟ الشروط الخمسة الصارمة للاقتباس المشروع",
    glyph: "📖",
    image: "assets/images/quotation_fair_use.jpg",
    visualCaption: "ميزان العدالة الثقافية: الموازنة بين حماية حقوق المؤلفين وتشجيع التعليم والبحث عبر استثناءات الاستخدام العادل والاقتباس المنضبط.",
    interactiveType: "quotation_validator",
    story: [
      `<p class="story-lead">الهدف الأسمى لقوانين حق المؤلف ليس احتكار المعرفة، بل إقامة توازن عادل بين: <strong>[1] إتاحة المصنفات لنشر الثقافة والتعليم</strong>، و<strong>[2] صيانة حقوق المبدعين المادية والأدبية</strong>.</p>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>⚖️</span> استثناءات الاستخدام الحر والمشروع (Fair Use)</h4>
          <span class="card-badge badge-green">دون إذن ودون مقابل</span>
        </div>
        <p class="card-desc">حالات حصرية يجوز فيها استغلال المصنفات المحمية قانوناً دون ترخيص مسبق:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🏠</span> <strong>الاستخدام الشخصي والخاص:</strong> كنسخ مقطع في دفترك الخاص أو حفظه على هاتفك (توزيع النسخ على أصدقائك أو بيعها جريمة قرصنة!).</li>
          <li><span class="list-bullet-icon">🏫</span> <strong>المؤسسات التعليمية:</strong> توزيع أوراق ومقتطفات في الفصول الدراسية للشرح والتدريس.</li>
          <li><span class="list-bullet-icon">🎪</span> <strong>العروض غير الربحية:</strong> تقديم مسرحية مدرسية مجانية دون تحصيل أي تذاكر ودون دفع أجر للممثلين.</li>
        </ul>
      </div>`,
      `<div class="story-card card-blue-accent" style="margin-top:1.2rem;">
        <div class="card-header-row">
          <h4 class="card-title"><span>📝</span> القواعد الذهبية الخمس للاقتباس القانوني (Quotation Rules)</h4>
          <span class="card-badge badge-blue">شروط إلزامية معاً</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step">
            <div class="step-number">١</div>
            <div><strong>التبعية (Subordination):</strong> عملك أنت هو الأصل والأساس، والمادة المقتبسة تابعة ومكملة وليست الأساسية.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">٢</div>
            <div><strong>الضرورة الملحة (Necessity):</strong> وجود مبرر علمي أو نقدي صريح يدعو للاستشهاد بالنص لدعم الفكرة.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">٣</div>
            <div><strong>التمييز البصري الصريح (Clear Demarcation):</strong> حصر النص المقتبس بين علامات تنصيص « » أو في فقرة مستقلة ومميزة.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">٤</div>
            <div><strong>عزو المصدر بدقة (Attribution):</strong> ذكر اسم المؤلف، عنوان المصنف، ورقم الصفحة أو سنة النشر بوضوح.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">٥</div>
            <div><strong>الامتناع التام عن التحريف (No Alteration):</strong> يُحظر تماماً تعديل كلمات النص أو تحريف سياقه الأصلي.</div>
          </div>
        </div>
      </div>`
    ],
    takeaway: "الاستثناءات تشمل التعليم والاستخدام الشخصي غير التجاري ⬝ الاقتباس له ٥ شروط: التبعية، الضرورة، علامات التنصيص، ذكر المصدر، والامتناع التام عن التحريف.",
    funFact: "أشهر قضايا السرقات الأدبية في الجامعات سببها نسيان علامات التنصيص؛ فحتى لو ذكرت المصدر في الهامش، إذا نقلت النص حرفياً دون أقواس اقتباس يعتبر ذلك سرقة فكرية!",
    quiz: {
      question: "أي من التصرفات الآتية يُعد انتهاكاً لحق المؤلف ولا يدخل ضمن استثناءات الاستخدام المشروع؟",
      options: [
        "نسخ أسطوانة موسيقية اشتريتها وتوزيع نسخ منها على أصدقائك في الفصل",
        "اقتباس سطرين من مرجع علمي داخل بحث مدرسي مع وضع علامات تنصيص وذكر المصدر",
        "عرض مسرحية مدرسية مجانية للطلاب دون تحصيل أي رسوم دخول",
        "تصوير صفحة واحدة من كتاب بواسطة المعلم لشرح قاعدة لطلابه في الفصل"
      ],
      answer: 0,
      explain: "الاستخدام الشخصي يقتصر عليك وحدك في حدود ضيقة، وتوزيع النسخ على الأصدقاء أو بيعها يتجاوز الاستخدام الشخصي ويشكل انتهاكاً لحق المؤلف."
    }
  },
  {
    id: "creative-commons",
    category: "القسم الثالث: حقوق المؤلف واستخدام المعلومات",
    title: "رخص المشاع الإبداعي (Creative Commons)",
    tagline: "أيقونات المشاركة العالمية: كيف تشارك أعمالك وتحدد شروط استخدامها بأربعة رموز؟",
    glyph: "🌐",
    image: "assets/images/creative_commons_licenses.jpg",
    visualCaption: "رموز المشاع الإبداعي: لغة الترخيص الرقمية الموحدة — الإسناد (BY)، غير تجاري (NC)، منع الاشتقاق (ND)، والترخيص بالمثل (SA).",
    interactiveType: "cc_license_builder",
    story: [
      `<p class="story-lead">في الفضاء الرقمي المفتوح، ابتكر المبدعون <strong>رخص المشاع الإبداعي (Creative Commons - CC)</strong>؛ كإعلان مسبق ومرن يحدد الشروط التي يسمح بموجبها للآخرين باستخدام العمل ومشاركته دون الحاجة لمراسلة المؤلف في كل مرة، وتقوم على <strong>أربعة رموز شرطية أساسية</strong>:</p>`,
      `<div class="content-grid-2">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>👤</span> BY: إسناد المصدر (Attribution)</h4>
            <span class="card-badge badge-blue">شرط إلزامي دائماً</span>
          </div>
          <p class="card-desc">يفرض على أي مستخدم ذكر اسم المبدع الأصلي، وعنوان العمل، ورابط المصدر عند مشاركة أو اقتباس المصنف.</p>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🚫💰</span> NC: غير تجاري (Non-Commercial)</h4>
            <span class="card-badge badge-red">حظر التربح المالي</span>
          </div>
          <p class="card-desc">يمنع منعاً باتاً استغلال المصنف أو أي عمل مشتق منه في أنشطة تجارية أو بيعه لجني أموال.</p>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🟰</span> ND: منع الاشتقاق (No Derivatives)</h4>
            <span class="card-badge badge-amber">كما هو دون تعديل</span>
          </div>
          <p class="card-desc">يسمح بنسخ وتداول العمل بحالته الأصلية فقط، ويحظر إعادة مزجه أو تعديله أو ترجمته أو البناء عليه.</p>
        </div>

        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔄</span> SA: الترخيص بالمثل (Share-Alike)</h4>
            <span class="card-badge badge-green">رخصة ويكيبيديا</span>
          </div>
          <p class="card-desc">إذا قمت بتعديل المصنف أو البناء عليه، فأنت ملزم قانوناً بنشر عملك الجديد تحت نفس حزمة الرخصة الأصلية تماماً.</p>
        </div>
      </div>`,
      `<div class="story-card" style="margin-top:1.2rem;">
        <div class="card-header-row">
          <h4 class="card-title"><span>🌐</span> باقات رخص CC القياسية الشائعة</h4>
          <span class="card-badge">٦ رخص رئيسية</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item"><strong>CC BY:</strong> الأكثر حرية (مشاركة وتعديل وتربح مع ذكر المصدر)</span>
          <span class="pill-item"><strong>CC BY-NC:</strong> حر للأغراض غير التجارية</span>
          <span class="pill-item"><strong>CC BY-SA:</strong> رخصة المشتق بالمثل (موسوعة ويكيبيديا)</span>
          <span class="pill-item"><strong>CC BY-NC-ND:</strong> الأكثر تقييداً (توزيع كما هو، بلا تعديل ولا تجارة)</span>
        </div>
      </div>`
    ],
    takeaway: "المشاع الإبداعي يبسط شروط الاستخدام ⬝ الرموز الأربعة: BY (ذكر المؤلف) ⬝ NC (غير تجاري) ⬝ ND (ممنوع التعديل) ⬝ SA (الترخيص بالمثل لنفس الشروط).",
    funFact: "أكثر من ملياري مصنف رقمي حول العالم — بما فيها كل مقالات موسوعة ويكيبيديا وملايين الصور والبرمجيات — منشورة تحت رخص المشاع الإبداعي!",
    quiz: {
      question: "تريد نشر صورة فوتوغرافية التقطتها على موقعك، وتريد السماح للآخرين باستخدامها بشرطين: 'ذكر اسم المصور' و'عدم استخدامها لأغراض تجارية'، ما الرمزان اللذان تضعهما؟",
      options: [
        "BY (ذكر المصدر) + NC (غير تجاري)",
        "ND (منع التعديل) + SA (الترخيص بالمثل)",
        "NC (غير تجاري) + ND (منع التعديل)",
        "SA (الترخيص بالمثل) فقط"
      ],
      answer: 0,
      explain: "رمز BY يلزم بذكر اسم المصور، ورمز NC يمنع الاستغلال التجاري والربحي، والجمع بينهما يعطي رخصة CC BY-NC."
    }
  }
];

const LECT2_MATCH_ITEMS_AR = [
  { id: "m1", concept: "البيانات الأساسية الأربعة", match: "الاسم والعنوان وتاريخ الميلاد والنوع للتحقق من هوية الشخص" },
  { id: "m2", concept: "حقوق الشهرة (Publicity Rights)", match: "حماية المصالح الاقتصادية للمشاهير في استغلال صورهم وأسمائهم" },
  { id: "m3", concept: "نظام الموافقة المسبقة (Opt-in)", match: "عدم جمع بيانات أو تقديم خدمة إلا بعد إذن صريح ومسبق من المستخدم" },
  { id: "m4", concept: "مبدأ الشكلية (Formality)", match: "اشتراط التسجيل لدى مكاتب براءات الاختراع لنشوء حقوق الملكية الصناعية" },
  { id: "m5", concept: "حقوق نموذج المنفعة (Utility Model)", match: "حماية الأفكار والحلول التقنية لهيكل وشكل منتج صناعي لتسهيل استخدامه" },
  { id: "m6", concept: "مبدأ عدم الشكلية (Non-Formality)", match: "نشوء حماية حق المؤلف تلقائياً فور ابتكار العمل دون حاجة لتسجيل" },
  { id: "m7", concept: "الحقوق المجاورة (Neighboring Rights)", match: "حقوق ممنوحة لفناني الأداء ومنتجي التسجيلات وهيئات البث الإذاعي" },
  { id: "m8", concept: "المشاع الإبداعي (CC License)", match: "رموز معيارية توضح شروط إعادة استخدام المصنف كالنسبة (BY) وغير التجاري (NC)" }
];

if (typeof window !== 'undefined') {
  window.LECT2_STAGES_AR = LECT2_STAGES_AR;
  window.LECT2_MATCH_ITEMS_AR = LECT2_MATCH_ITEMS_AR;
}
