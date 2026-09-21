/* ============================================================
   الفصل الثالث: المحاضرة الثالثة (أمن المعلومات وتقنيات السلامة)
   بيانات المراحل والتحدي الختامي باللغة العربية
   المصدر: lect3ar.pdf ص ٣٠-٤٧ (٣-١ إلى ٣-٥)
   ============================================================ */

const LECT3_STAGES_AR = [
  {
    id: "cia-threats",
    category: "القسم الأول: التهديدات وأساسيات الأمن",
    title: "أركان أمن المعلومات الثلاثة",
    tagline: "ثلاثة أسئلة تحمي أي معلومة: من يراها؟ هل بقيت سليمة؟ وهل تفتح وقت الحاجة؟",
    glyph: "🛡️",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "أركان الحماية الثلاثة: السرية تمنع المتطفلين، والسلامة تمنع العبث، والتوافرية تضمن الوصول وقت الحاجة.",
    interactiveType: "cia_sorter",
    story: [
      `<p class="story-lead">تخيل أن درجاتك في المدرسة سُربت لزملائك، أو أن أحدهم غيّرها، أو أن الموقع لا يفتح يوم النتيجة. هذه الحالات الثلاث هي بالضبط ما يعالجه <strong>أمن المعلومات (Information Security)</strong>: إدارة المعلومات بشكل سليم والحفاظ عليها آمنة، ويقوم على <strong>ثلاثة أركان أساسية</strong>:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔒</span> ١. السرية (Confidentiality)</h4>
            <span class="card-badge badge-blue">من يرى المعلومة؟</span>
          </div>
          <p class="card-desc">أن تكون المعلومة متاحة <strong>للمصرح لهم فقط</strong>، فلا يطلع عليها غرباء.</p>
          <p class="card-example">🔍 <em>مثال:</em> كلمة مرورك ورسائلك الخاصة لا يراها إلا أنت.</p>
          <p class="card-example">⚠️ <em>تُنتهك بـ:</em> تسريب البيانات، التنصت على الشبكة، سرقة كلمات المرور.</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>✅</span> ٢. السلامة (Integrity)</h4>
            <span class="card-badge badge-amber">هل المعلومة سليمة؟</span>
          </div>
          <p class="card-desc">أن تبقى المعلومة <strong>صحيحة وكاملة</strong> دون تدمير أو عبث أو محو.</p>
          <p class="card-example">🔍 <em>مثال:</em> درجتك ٩٠ من ١٠٠ تبقى ٩٠ ولا تتحول إلى ٦٠ بخطأ أو عبث.</p>
          <p class="card-example">⚠️ <em>تُنتهك بـ:</em> أخطاء الإدخال، العبث المتعمد، حذف الملفات.</p>
        </div>
        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>⚡</span> ٣. التوافرية (Availability)</h4>
            <span class="card-badge badge-green">هل تفتح وقت الحاجة؟</span>
          </div>
          <p class="card-desc">أن تكون المعلومة <strong>متاحة وقابلة للوصول</strong> في أي وقت تحتاجها فيه.</p>
          <p class="card-example">🔍 <em>مثال:</em> موقع النتيجة يفتح يوم إعلان الدرجات رغم الزحام.</p>
          <p class="card-example">⚠️ <em>تُنتهك بـ:</em> الهجمات التي تُسقط المواقع، تعطل الأنظمة، انقطاع الكهرباء.</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-red">
        <div class="callout-header">
          <span class="callout-icon">🎯</span>
          <h4 class="callout-title">فخ الامتحان: فرّق بين الأركان الثلاثة</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">👁️</span> رأى المعلومة من لا يستحق ← <strong>السرية</strong> انكسرت.</li>
          <li><span class="list-bullet-icon">✏️</span> تغيرت المعلومة أو أصبحت خاطئة ← <strong>السلامة</strong> انكسرت.</li>
          <li><span class="list-bullet-icon">🚫</span> تعذر فتح المعلومة وقت الحاجة ← <strong>التوافرية</strong> انكسرت.</li>
        </ul>
      </div>`,
      `<div class="story-card card-red-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>🦠</span> البرمجيات الخبيثة (Malware): عائلة المهاجمين</h4>
          <span class="card-badge badge-red">سبعة أنواع في المنهج</span>
        </div>
        <p class="card-desc"><strong>البرمجيات الخبيثة</strong> برامج صُممت للإضرار بالحاسوب، وتتسرب عبر المواقع الملوثة أو مرفقات البريد أو وحدات USB أو الشبكات. احفظ كل نوع بفكرته المميزة:</p>
        <table class="l3-mini-table">
          <tr><th>النوع</th><th>فكرته بكلمات بسيطة</th><th>علامة تميزه في الامتحان</th></tr>
          <tr><td><strong>🦠 فيروس الكمبيوتر</strong></td><td>يدمر البيانات والبرامج عمدًا</td><td>التدمير والتخريب</td></tr>
          <tr><td><strong>🐴 حصان طروادة</strong></td><td>يتخفى في برنامج يبدو سليمًا ثم يهاجم من الداخل</td><td>التنكر والتسلل الهادئ</td></tr>
          <tr><td><strong>🪱 الدودة (Worm)</strong></td><td>تنسخ نفسها وتنتشر عبر الإنترنت كالعدوى</td><td>الانتشار الذاتي</td></tr>
          <tr><td><strong>👁️ برنامج التجسس</strong></td><td>يسرق معلوماتك سرًا ويرسلها لطرف ثالث</td><td>السرقة الصامتة</td></tr>
          <tr><td><strong>⌨️ مسجل اللوحة</strong></td><td>يسجل كل ما تكتبه على لوحة المفاتيح</td><td>مراقبة الكتابة</td></tr>
          <tr><td><strong>📢 برنامج الإعلانات</strong></td><td>يعرض إعلانات مزعجة دون إذنك</td><td>الإزعاج الإعلاني</td></tr>
          <tr><td><strong>💰 برنامج الفدية</strong></td><td>يمنع الوصول إلى بياناتك ويطلب مالًا مقابل إعادتها</td><td>المنع مقابل فدية</td></tr>
        </table>
        <p class="card-desc" style="margin-top:0.8rem;"><strong>الوصول غير المصرح به</strong> هو دخول نظام دون إذن. فإذا كان الدخول بغرض العبث أو المحو أو السرقة سُمي <strong>اختراقًا (Cracking)</strong> وفاعله <strong>مخترق (Cracker)</strong>. أما الجرائم المرتكبة عبر الشبكات عمومًا فتسمى <strong>الجريمة الإلكترونية (Cybercrime)</strong>، ومنها: مخالفة قانون الوصول، والعبث بالسجلات الإلكترونية، وجرائم الشبكة كالاحتيال والتشهير وانتهاك حقوق النشر.</p>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🗺️ خريطة ذهنية: الأركان الثلاثة في سؤال واحد لكل ركن</h4>
        <div class="l3-mindmap">
          <div class="l3-mind-center">🛡️ أمن المعلومات</div>
          <div class="l3-mind-branches">
            <div class="l3-mind-branch b-blue"><strong>🔒 السرية</strong><small>من يرى المعلومة؟<br>التسريب والتنصت يكسرها</small></div>
            <div class="l3-mind-branch b-amber"><strong>✅ السلامة</strong><small>هل بقيت سليمة؟<br>العبث والتدمير يكسرها</small></div>
            <div class="l3-mind-branch b-green"><strong>⚡ التوافرية</strong><small>هل تفتح عند الحاجة؟<br>التعطل والإسقاط يكسرها</small></div>
          </div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🦠 مخطط: كيف تصل البرمجية الخبيثة إلى جهازك؟</h4>
        <div class="l3-flow">
          <div class="l3-flow-node">🌐 موقع ملوث<br><small>صفحة مصابة</small></div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node">📧 مرفق بريد<br><small>ملف ملغوم</small></div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node">💾 وحدة USB<br><small>مشتركة وملوثة</small></div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node lock">💻 حاسوبك<br><small>الإصابة تمت</small></div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/digital_ethics.jpg" alt="أساسيات الأمن"><span>🔒 ثلاثة أركان تحميك</span></div>
          <div class="l3-photo"><img src="assets/images/smartphone.jpg" alt="طرق العدوى"><span>📲 العدوى عبر الويب والبريد</span></div>
          <div class="l3-photo"><img src="assets/images/personal_data_vault.jpg" alt="حماية البيانات"><span>🪪 التسريب يكسر السرية</span></div>
        </div>
        <figcaption>القاعدة الذهبية: اسأل نفسك عن كل حادثة — هل المشكلة في «من رأى» أم «ماذا تغير» أم «هل يفتح»؟ وستصل للركن الصحيح.</figcaption>
      </figure>`
    ],
    takeaway: "السرية: لا يراها إلا المصرح لهم ⬝ السلامة: تبقى صحيحة بلا عبث ⬝ التوافرية: تفتح وقت الحاجة ⬝ سبعة أنواع خبيثة لكل منها علامة مميزة ⬝ المخترق يقتحم للعبث أو السرقة.",
    funFact: "سُمي «حصان طروادة» على اسم الحصان الخشبي في الأسطورة الإغريقية: هدية تبدو بريئة من الخارج وتخفي جنودًا في الداخل — تمامًا مثل هذا النوع من البرمجيات!",
    quiz: {
      question: "تعطل موقع المدرسة بهجوم إلكتروني فلم يتمكن أحد من فتح صفحة النتيجة. أي الأركان انكسر هنا؟",
      options: [
        "التوافرية (تعذر الوصول للمعلومة وقت الحاجة)",
        "السلامة (أصبحت المعلومة غير دقيقة)",
        "السرية (اطلع عليها غير المصرح لهم)",
        "المصادقة (هوية المرسل مجهولة)"
      ],
      answer: 0,
      explain: "العبرة بالنتيجة: تعذر الفتح وقت الحاجة = التوافرية. ولو كانت الدرجات خاطئة لكانت السلامة، ولو رآها غرباء لكانت السرية."
    }
  },
  {
    id: "auth-measures",
    category: "القسم الثاني: كلمات المرور والدفاع",
    title: "كلمة المرور والمصادقة وخطوط الدفاع",
    tagline: "كلمة سر يصعب تخمينها، وطرق ثلاث للتحقق من هويتك، ودفاع يحرس البوابات.",
    glyph: "🔑",
    image: "assets/images/corporate_data_policy.jpg",
    visualCaption: "بوابات الحماية: كلمة مرور محكمة، وطرق تحقق متعددة، وجدار ناري ومكافح للفيروسات.",
    interactiveType: "auth_lab",
    story: [
      `<p class="story-lead"><strong>كلمة المرور (Password)</strong> هي الكلمة السرية التي تثبت أنك صاحب الحساب فعلًا. تخيلها كمفتاح بيتك: كلما كان أعقد وأطول صعُب نسخه. والقاعدة في المنهج أربعة شروط لكلمة قوية، تقابلها <strong>كلمة المرور لمرة واحدة (One-time Password)</strong> التي تتغير باستمرار ولا تُستخدم إلا مرة واحدة ثم تنتهي صلاحيتها.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>🔑</span> شروط كلمة المرور القوية الأربعة</h4>
          <span class="card-badge">احفظها بالترتيب</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">١</div><div><strong>طويلة</strong> قدر الإمكان — كل حرف إضافي يضاعف صعوبة الكسر.</div></div>
          <div class="checklist-step"><div class="step-number">٢</div><div><strong>مزيج</strong> من الحروف الكبيرة والصغيرة والأرقام والرموز.</div></div>
          <div class="checklist-step"><div class="step-number">٣</div><div><strong>لا</strong> تستخدم بياناتك الشخصية (عيد ميلادك، بريدك، اسمك).</div></div>
          <div class="checklist-step"><div class="step-number">٤</div><div><strong>لا</strong> تكرر نفس الكلمة في أكثر من خدمة.</div></div>
        </div>
        <p class="card-desc">واحذر الخطأ الأشهر: الاستمرار على كلمة المرور الافتراضية التي استلمتها أول مرة — فقد تكون مكشوفة لغيرك، لذا غيّرها فورًا.</p>
      </div>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
            <h4 class="card-title"><span>🪪</span> المصادقة (Authentication): طرق ثلاث لإثبات «أنا صاحب الحساب»</h4>
          <span class="card-badge badge-blue">سؤال واحد يفرق بينها</span>
        </div>
        <div class="content-grid-2">
          <div class="story-card">
            <div class="card-header-row">
              <h4 class="card-title"><span>🧠</span> المعرفة: ما تعرفه</h4>
            </div>
            <p class="card-desc">معلومة لا يعرفها سواك: اسم المستخدم وكلمة المرور، أو الرقم السري PIN.</p>
          </div>
          <div class="story-card">
            <div class="card-header-row">
              <h4 class="card-title"><span>👆</span> البيومترية: ما أنت عليه</h4>
            </div>
            <p class="card-desc">صفة في جسمك أو سلوكك: بصمة الإصبع، بصمة القزحية، نمط الأوردة، طريقة خط يدك.</p>
          </div>
          <div class="story-card">
            <div class="card-header-row">
              <h4 class="card-title"><span>📲</span> الحيازة: ما تملكه</h4>
            </div>
            <p class="card-desc">شيء في حوزتك: البطاقة الذكية، كلمة المرور لمرة واحدة، رمز التحقق المرسل لهاتفك.</p>
          </div>
          <div class="story-card card-red-accent">
            <div class="card-header-row">
              <h4 class="card-title"><span>🔐</span> المصادقة الثنائية ومتعددة الخطوات</h4>
            </div>
            <p class="card-desc"><strong>المصادقة الثنائية (Two-factor):</strong> تحققان من <strong>نوعين مختلفين</strong>، مثل: رمز PIN (معرفة) + رمز SMS على هاتفك (حيازة).</p>
            <p class="card-desc"><strong>المصادقة متعددة الخطوات (Two-step):</strong> تحققان من <strong>النوع نفسه</strong> مرتين، مثل: كلمة المرور + سؤال سري (كلاهما معرفة).</p>
          </div>
        </div>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">🧱</span>
          <h4 class="callout-title">خطوط الدفاع الثلاثة عن حاسوبك وشبكتك</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🚪</span> <strong>التحكم في الوصول (Access Control):</strong> قصر تشغيل النظام على مستخدمين محددين بعد التحقق من هويتهم — مثل بواب لا يفتح إلا لمن يحمل تصريحًا.</li>
          <li><span class="list-bullet-icon">🧱</span> <strong>جدار الحماية (Firewall):</strong> حارس عند مداخل الشبكة يمنع <strong>دخول المتسللين من الخارج</strong> ويمنع <strong>تسرب البيانات من الداخل</strong> — يعمل في الاتجاهين.</li>
          <li><span class="list-bullet-icon">🛡️</span> <strong>مكافحة الفيروسات:</strong> ثبّت <strong>برنامج مكافحة الفيروسات</strong> وحدّث قاعدة بياناته باستمرار، وحافظ على نظام التشغيل والتطبيقات <strong>محدثة</strong> لسد <strong>الثغرات الأمنية</strong>، واحتفظ <strong>بنسخ احتياطية</strong> من ملفاتك المهمة.</li>
        </ul>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🧱 مخطط: جدار الحماية يعمل في اتجاهين</h4>
        <div class="l3-fw">
          <div class="l3-fw-side">🌐 العالم الخارجي<small>مهاجمون ومواقع مجهولة</small></div>
          <div class="l3-fw-wall"><span>🧱 جدار الحماية</span></div>
          <div class="l3-fw-side">🏢 شبكتك الداخلية<small>حواسيبك وبياناتك</small></div>
        </div>
        <div class="l3-flow">
          <div class="l3-flow-node lock">✖ يصد الداخل<small>وصول غير مصرح به</small></div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node key">🧱 ترشيح بالاتجاهين</div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node open">⛔ يمنع الخارج<small>تسرب البيانات</small></div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🗺️ خريطة ذهنية: من أنت؟ ثلاث إجابات</h4>
        <div class="l3-mindmap">
          <div class="l3-mind-center">🔑 إثبات الهوية</div>
          <div class="l3-mind-branches">
            <div class="l3-mind-branch b-blue"><strong>🧠 ما تعرفه</strong><small>كلمة المرور ورمز PIN</small></div>
            <div class="l3-mind-branch b-amber"><strong>👆 ما أنت عليه</strong><small>بصمة وقزحية وخط اليد</small></div>
            <div class="l3-mind-branch b-green"><strong>📲 ما تملكه</strong><small>بطاقة ذكية ورمز الهاتف</small></div>
          </div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/corporate_data_policy.jpg" alt="التحكم في الوصول"><span>🚪 البواب لا يفتح إلا بتصريح</span></div>
          <div class="l3-photo"><img src="assets/images/smartphone.jpg" alt="رمز التحقق"><span>📲 رمز الهاتف إثبات حيازة</span></div>
          <div class="l3-photo"><img src="assets/images/info_characteristics.jpg" alt="التحديثات"><span>🛡️ حدّث نظامك واحتفظ بنسخة احتياطية</span></div>
        </div>
        <figcaption>احفظها هكذا: كلمة المرور الطويلة المميزة تحميك، والتحقق المزدوج من نوعين مختلفين يحميك أكثر، وجدار الحماية وبرنامج الحماية والنسخ الاحتياطي يكملون الحماية.</figcaption>
      </figure>`
    ],
    takeaway: "كلمة قوية: طويلة ومتنوعة وغير شخصية وغير مكررة ⬝ إثبات الهوية بطرق ثلاث: معرفة وحيوية وحيازة ⬝ نوعان مختلفان معًا = المصادقة الثنائية ⬝ جدار الحماية يصد هجمات الخارج ويمنع تسرب البيانات إلى الخارج ⬝ حدّث نظامك واحتفظ بنسخ احتياطية دائمًا.",
    funFact: "كلمة من ٣ رموز فقط (من ٣٦ رمزًا) لها ٤٦٬٦٥٦ احتمالًا يكسرها الحاسوب في لحظات، بينما كل حرف تضيفه يضرب الاحتمالات في ٣٦ — لهذا الطول هو أقوى سلاح!",
    quiz: {
      question: "تدخل برمز PIN ثم يصلك رمز على هاتفك لإتمام الدخول. هذا النوع من التحقق يسمى:",
      options: [
        "مصادقة ثنائية العامل (نوعان مختلفان: معرفة وحيازة)",
        "مصادقة متعددة الخطوات (النوع نفسه مرتين)",
        "مصادقة حيوية (صفات الجسم)",
        "كلمة مرور واحدة لكل الخدمات"
      ],
      answer: 0,
      explain: "رمز PIN معلومة تعرفها (معرفة)، ورمز الهاتف شيء تملكه (حيازة) — نوعان مختلفان معًا أي مصادقة ثنائية العامل."
    }
  },
  {
    id: "fraud-policy",
    category: "القسم الثاني: الاحتيال والسياسات",
    title: "الاحتيال والخداع وسياسة الحماية",
    tagline: "فاتورة وهمية، وضغطة مسمومة، وموقع مزيف، وخداع يستغل طيبتك — ثم سياسة تحمي المؤسسة.",
    glyph: "🎣",
    image: "assets/images/smartphone.jpg",
    visualCaption: "أساليب المحتالين الأربعة وطرق الخداع البشري، ثم هرم سياسة أمن المعلومات الذي ينظم الحماية.",
    interactiveType: "fraud_identifier",
    story: [
      `<p class="story-lead">يصلك إشعار بفاتورة خدمة لم تسمع عنها، أو تضغط رابطًا فتظهر رسالة تطالبك بآلاف الجنيهات، أو يصلك بريد من «البنك» يطلب بياناتك. هذه ليست أخطاء تقنية بل <strong>جرائم احتيال منظمة</strong>، والمنهج يحدد أربعة أنواع احفظها بمواقفها:</p>`,
      `<div class="content-grid-2">
        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🧾</span> الفاتورة الاحتيالية</h4>
            <span class="card-badge badge-red">تدفع مقابل لا شيء</span>
          </div>
          <p class="card-desc">مطالبتك بسداد مقابل <strong>خدمة وهمية لم تستخدمها أصلًا</strong> لسرقة مالك.</p>
          <p class="card-example">🔍 <em>مثال:</em> رسالة «عليك ٨٠٠ جنيه اشتراك خدمة لم تشترك فيها — سدد فورًا».</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>👆</span> الاحتيال بنقرة واحدة</h4>
            <span class="card-badge badge-amber">ضغطة واحدة توقعك</span>
          </div>
          <p class="card-desc">مجرد <strong>نقرة على رابط</strong> تظهر بعدها رسالة كاذبة تدعي أنك أبرمت عقدًا وتطالبك بمبلغ ضخم.</p>
          <p class="card-example">🔍 <em>مثال:</em> ضغطت إعلانًا فظهرت «تم تسجيل اشتراكك! ادفع ٢٠٠٠ جنيه».</p>
        </div>
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🎣</span> التصيد (Phishing)</h4>
            <span class="card-badge badge-blue">بنك مزيف يصطادك</span>
          </div>
          <p class="card-desc"><strong>مواقع مزيفة</strong> تنتحل البنوك والجهات الرسمية لسرقة أرقامك السرية وبيانات بطاقاتك.</p>
          <p class="card-example">🔍 <em>مثال:</em> بريد «من بنكك» يقودك لصفحة دخول مطابقة للأصل تطلب الرقم السري.</p>
        </div>
        <div class="story-card">
          <div class="card-header-row">
            <h4 class="card-title"><span>💳</span> التزوير (Skimming)</h4>
            <span class="card-badge">نسخة مزورة من بطاقتك</span>
          </div>
          <p class="card-desc"><strong>نسخ بيانات بطاقتك البنكية</strong> خلسة بأجهزة خفية لصنع بطاقة مزورة باسمك.</p>
          <p class="card-example">🔍 <em>مثال:</em> جهاز مزروع على ماكينة الصراف ينسخ بيانات كل بطاقة تُدخل فيه.</p>
        </div>
      </div>`,
      `<div class="story-card card-amber-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>🎭</span> الهندسة الاجتماعية: عندما تكون أنت الثغرة</h4>
          <span class="card-badge badge-amber">خداع البشر لا الأجهزة</span>
        </div>
        <p class="card-desc"><strong>الهندسة الاجتماعية (Social Engineering)</strong> هي انتزاع معلوماتك باستغلال <strong>ثقتك أو إهمالك أو قلة انتباهك</strong> بدل اختراق جهازك. طرقها الثلاث في المنهج:</p>
        <div class="pill-cloud">
          <span class="pill-item">📞 انتحال الشخصية: مكالمة باسم غيرك لسحب معلوماتك</span>
          <span class="pill-item">👀 التجسس المباشر: التلصص على شاشتك أثناء إدخال الرقم السري</span>
          <span class="pill-item">🗑️ البحث في المهملات: التنقيب في القمامة عن أوراق سرية مهملة</span>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">📜</span>
          <h4 class="callout-title">سياسة أمن المعلومات: دستور الحماية داخل أي مؤسسة</h4>
        </div>
        <p style="font-size:0.92rem; margin-bottom:0.6rem; color:var(--ink-soft);">هي القواعد الأساسية التي تضعها الشركة أو المؤسسة لحماية معلوماتها، وتتدرج من العام إلى التفصيل في ثلاث طبقات:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🏛️</span> <strong>السياسة الأساسية:</strong> المبادئ العامة وإعلان المؤسسة عن موقفها من أمن المعلومات.</li>
          <li><span class="list-bullet-icon">📏</span> <strong>معايير الأمان:</strong> القواعد العملية التي تترجم السياسة إلى التزامات واجبة.</li>
          <li><span class="list-bullet-icon">📋</span> <strong>إجراءات التنفيذ وقواعد التشغيل:</strong> الخطوات التفصيلية لكل فئة حسب استخدامها.</li>
        </ul>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🎣 مخطط: هجمة التصيد خطوة بخطوة</h4>
        <div class="l3-flow">
          <div class="l3-flow-node lock">🎣 بريد مستعجل<br><small>«حسابك سيُغلق!»</small></div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node lock">🌐 صفحة مزيفة<br><small>تشبه الأصل تمامًا</small></div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node lock">⌨️ تدخل بياناتك<br><small>الرقم السري والبطاقة</small></div><span class="l3-flow-arrow danger">←</span>
          <div class="l3-flow-node lock">💸 السرقة تتم<br><small>مالك وهويتك</small></div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🏛️ هرم السياسة: من المبدأ إلى الخطوة</h4>
        <div class="l3-pyramid">
          <div class="l3-pyramid-tier t1">🏛️ السياسة الأساسية<small>المبادئ والإعلانات العامة</small></div>
          <div class="l3-pyramid-tier t2">📏 معايير الأمان<small>قواعد ملزمة تطبق السياسة</small></div>
          <div class="l3-pyramid-tier t3">📋 الإجراءات والقواعد<small>خطوات تفصيلية لكل استخدام</small></div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/smartphone.jpg" alt="احتيال الهاتف"><span>📲 الاستعجال أول علامات التصيد</span></div>
          <div class="l3-photo"><img src="assets/images/personal_data_vault.jpg" alt="بيانات مسروقة"><span>🪪 هدفهم أرقامك وبطاقاتك</span></div>
          <div class="l3-photo"><img src="assets/images/digital_ethics.jpg" alt="ابق متيقظًا"><span>👀 لا تنقر — تحقق بنفسك</span></div>
        </div>
        <figcaption>القاعدة: أي رسالة تستعجلك + رابط غريب + طلب بيانات = تصيد. تجاهل الرابط وتعامل عبر التطبيق الرسمي.</figcaption>
      </figure>`
    ],
    takeaway: "فاتورة لخدمة وهمية = احتيالية ⬝ عقد مزيف بعد نقرة = نقرة واحدة ⬝ موقع بنك مزيف = تصيد ⬝ نسخ البطاقة = تزوير ⬝ خداع البشر بطرق ثلاث ⬝ والحماية المؤسسية هرم من ثلاث طبقات.",
    funFact: "بعض المحتالين يجمعون كشوف الحسابات وبطاقات الهوية من أكياس القمامة ويعيدون تركيبها — لهذا تنصح البنوك بتمزيق الأوراق المهمة قبل رميها!",
    quiz: {
      question: "وصلك بريد يبدو أنه من بنكك ويطلب الدخول عبر رابطه لتحديث بياناتك. ما التصرف الأسلم؟",
      options: [
        "تجاهل الرابط وافتح تطبيق البنك الرسمي بنفسك للتحقق",
        "النقر فورًا وإدخال الرقم السري قبل إغلاق الحساب",
        "إرسال الرقم السري ردًا على البريد للتأكد",
        "تحويل رصيدك لحساب آخر احتياطًا"
      ],
      answer: 0,
      explain: "هذه الصورة الكلاسيكية للتصيد: الاستعجال مع رابط. القاعدة الذهبية أن تتحقق دائمًا عبر القناة الرسمية لا عبر الرابط المرسل."
    }
  },
  {
    id: "encryption",
    category: "القسم الثالث: تقنيات السلامة",
    title: "التشفير: كيف تُخفى الرسائل؟",
    tagline: "رسالة تتحول لرموز لا يقرأها إلا صاحبها — بمفتاح واحد مشترك أم بقفل عام ومفتاح خاص؟",
    glyph: "🔐",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "الرسالة المغلقة: النص الواضح يتحول لرموز غامضة، والمفتاح الصحيح وحده يعيدها.",
    interactiveType: "encryption_lab",
    story: [
      `<p class="story-lead">تريد إرسال رسالة لصديقك دون أن يقرأها أحد في الطريق. الحل هو <strong>التشفير (Encryption)</strong>: تحويل النص المقروء <strong>(النص العادي Plaintext)</strong> إلى رموز غامضة <strong>(النص المشفر Ciphertext)</strong> لا تُفهم، ثم إعادتها لأصلها عند المستلم بعملية <strong>فك التشفير (Decryption)</strong> باستخدام سر متفق عليه يسمى <strong>المفتاح (Key)</strong>.</p>`,
      `<div class="versus-deck">
        <div class="versus-card versus-optin">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔑</span> التشفير بالمفتاح المتماثل</h4>
            <span class="card-badge badge-green">مفتاح واحد مشترك</span>
          </div>
          <div class="versus-status-pill">القفل والمفتاح <strong>نفس الشيء</strong></div>
          <p class="card-desc">المرسل والمستلم يستخدمان <strong>المفتاح المشترك نفسه</strong> في التشفير وفك التشفير، بعد تبادله سرًا من قبل.</p>
          <p class="card-example">🔍 <em>مثال:</em> اتفقت مع صديقك على كلمة سر واحدة تقفل بها الرسالة ويفتحها بها.</p>
          <div class="versus-rule-quote">✅ سريع جدًا · ❌ توصيل المفتاح سرًا لكل مرسل مهمة صعبة</div>
        </div>
        <div class="versus-card versus-optout">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔓</span> التشفير بالمفتاح العام</h4>
            <span class="card-badge badge-amber">قفل عام ومفتاح خاص</span>
          </div>
          <div class="versus-status-pill">التشفير بـ<strong>المفتاح العام للمستلم</strong></div>
          <p class="card-desc">الرسالة تُشفر <strong>بالمفتاح العام</strong> المعلن للمستلم، ولا يفكها إلا <strong>مفتاحه الخاص</strong> الذي لا يعرفه سواه.</p>
          <p class="card-example">🔍 <em>مثال:</em> صندوق بريد مفتوح للجميع يلقي فيه أي شخص رسالته، لكن فتحه بمفتاح واحد مع صاحبه فقط.</p>
          <div class="versus-rule-quote">✅ توزيع المفاتيح سهل وآمن · ❌ المعالجة أبطأ من المتماثل</div>
        </div>
      </div>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">⚡</span>
          <h4 class="callout-title">طريقة المفتاح المؤقت: تجمع الحسنيين</h4>
        </div>
        <p class="card-desc">تشفير هجين ذكي: يُرسل <strong>مفتاح جلسة مؤقت</strong> سريع (متماثل) مغلفًا بالتشفير العام الآمن — سرعة المتماثل مع أمان توزيع العام. وهو المحرك الذي يشفر تصفح الويب (SSL/TLS).</p>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🔑 مخطط: قارن الطريقتين في نظرة واحدة</h4>
        <div class="l3-flow">
          <div class="l3-flow-node">📝 نص واضح<br><small>مرحبًا</small></div><span class="l3-flow-arrow">←</span>
          <div class="l3-flow-node key">🔑 مفتاح مشترك<br><small>واحد ذهابًا وإيابًا</small></div><span class="l3-flow-arrow">←</span>
          <div class="l3-flow-node lock">🔒 رموز غامضة<br><small>&SA+F\\Cs+A</small></div><span class="l3-flow-arrow ok">←</span>
          <div class="l3-flow-node open">📝 نص واضح<br><small>نفس المفتاح يفتح</small></div>
        </div>
        <div class="l3-flow" style="margin-top:0.6rem;">
          <div class="l3-flow-node">📝 نص واضح<br><small>مرحبًا</small></div><span class="l3-flow-arrow">←</span>
          <div class="l3-flow-node key">🔓 قفل عام<br><small>متاح للجميع</small></div><span class="l3-flow-arrow">←</span>
          <div class="l3-flow-node lock">🔒 رموز غامضة<br><small>&SA+F\\Cs+A</small></div><span class="l3-flow-arrow ok">←</span>
          <div class="l3-flow-node open">🔑 مفتاح خاص<br><small>مع المستلم وحده</small></div>
        </div>
        <table class="l3-mini-table">
          <tr><th>وجه المقارنة</th><th>🔑 المتماثل</th><th>🔓 العام</th></tr>
          <tr><th>المفاتيح</th><td>مفتاح مشترك واحد للطرفين</td><td>عام يُقفل وخاص يفتح</td></tr>
          <tr><th>السرعة</th><td>⚡ أسرع</td><td>🐢 أبطأ</td></tr>
          <tr><th>توزيع المفاتيح</th><td>❌ صعب — مفتاح سري لكل مرسل</td><td>✅ سهل — العام معلن للجميع</td></tr>
        </table>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/data_info_knowledge.jpg" alt="الرسالة المغلقة"><span>✉️ من الواضح للغامض</span></div>
          <div class="l3-photo"><img src="assets/images/info_characteristics.jpg" alt="تبادل المفاتيح"><span>🤝 المؤقت يجمع الحسنيين</span></div>
          <div class="l3-photo"><img src="assets/images/media_types.jpg" alt="قناة آمنة"><span>📡 من يملك المفتاح يقرأ</span></div>
        </div>
        <figcaption>احفظها بصورة الصندوق: المتماثل = مفتاح واحد يفتح ويقفل، والعام = قفل مفتوح للجميع ومفتاح فتح واحد مع صاحبه.</figcaption>
      </figure>`
    ],
    takeaway: "الواضح يتحول لغامض بالمفتاح ويعود بالفك ⬝ المتماثل: مفتاح واحد مشترك وسريع لكن توزيعه صعب ⬝ العام: قفل معلن ومفتاح خاص وأسهل توزيعًا ⬝ والهجين المؤقت يجمع السرعة والأمان.",
    funFact: "فكرة المفتاح العام تشبه صندوق اقتراع: أي شخص يستطيع إلقاء ورقته في الفتحة، لكن لا أحد يستطيع إخراج الأوراق إلا من يملك مفتاح الصندوق!",
    quiz: {
      question: "تريد مراسلة ١٠٠ جهة مختلفة بأمان دون لقاء أي منها مسبقًا. أي الطريقتين أنسب ولماذا؟",
      options: [
        "المفتاح العام — لأن القفل معلن ولا يحتاج تبادلًا سريًا مسبقًا",
        "المتماثل — لأنه لا يحتاج أي مفاتيح أصلًا",
        "المتماثل — لأن توزيع ١٠٠ مفتاح سري أسهل دائمًا",
        "لا فرق — الطريقتان متطابقتان تمامًا"
      ],
      answer: 0,
      explain: "مع ١٠٠ طرف يستحيل تبادل ١٠٠ سر مسبقًا، بينما القفل العام معلن للجميع والمفتاح الخاص محفوظ — لهذا يتفوق العام في التوزيع."
    }
  },
  {
    id: "signature-tls",
    category: "القسم الثالث: تقنيات السلامة",
    title: "التوقيع الرقمي وتصفح آمن",
    tagline: "ختم يثبت من أرسل، وشهادة تثبت الموقع، وقفل يحمي تصفحك.",
    glyph: "✍️",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "منظومة الثقة الكاملة: البصمة تكشف العبث، والتوقيع يكشف المرسل، والشهادة تكشف الموقع المزيف.",
    interactiveType: "signature_lab",
    story: [
      `<p class="story-lead">وصلك ملف «من الشركة» — كيف تتأكد أنه منها فعلًا ولم يُعبث به في الطريق؟ الإجابة منظومة من ثلاث أدوات: <strong>بصمة</strong> تكشف أي تغيير، و<strong>توقيع</strong> يثبت هوية المرسل، و<strong>شهادة</strong> تثبت هوية الموقع الذي تتصفحه.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>#️⃣</span> دالة التجزئة: بصمة الملف التي لا تُزور</h4>
          <span class="card-badge">اتجاه واحد فقط</span>
        </div>
        <p class="card-desc"><strong>دالة التجزئة (Hash Function)</strong> تحسب من أي بيانات <strong>قيمة تجزئة (Hash Value)</strong> ثابتة الطول تميزها كبصمة الإصبع: تغيير حرف واحد في الملف يقلب البصمة كليًا، و<strong>يستحيل</strong> عكس العملية لاستعادة الأصل من البصمة.</p>
        <p class="card-example">🔍 <em>مثال:</em> كلمة «مدرسة» تعطي بصمة، وتغييرها إلى «مدرسه» (هاء بدل تاء مربوطة) يعطي بصمة مختلفة تمامًا.</p>
      </div>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>✍️</span> التوقيع الرقمي: ست خطوات بين المرسل والمستلم</h4>
          <span class="card-badge badge-blue">من يفعل ماذا؟</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">١</div><div><strong>المرسل</strong> يحسب <strong>بصمة</strong> النص المراد إرساله.</div></div>
          <div class="checklist-step"><div class="step-number">٢</div><div><strong>المرسل</strong> يشفر البصمة <strong>بمفتاحه الخاص</strong> — وهذا المشفر هو <strong>التوقيع الرقمي</strong>.</div></div>
          <div class="checklist-step"><div class="step-number">٣</div><div><strong>المرسل</strong> يبعث <strong>النص والتوقيع معًا</strong> للمستلم.</div></div>
          <div class="checklist-step"><div class="step-number">٤</div><div><strong>المستلم</strong> يفك التوقيع <strong>بالمفتاح العام للمرسل</strong> لاسترجاع البصمة الأصلية.</div></div>
          <div class="checklist-step"><div class="step-number">٥</div><div><strong>المستلم</strong> يحسب بصمة جديدة للنص المستلم <strong>بنفس الدالة</strong>.</div></div>
          <div class="checklist-step"><div class="step-number">٦</div><div><strong>المقارنة:</strong> تطابق البصمتين = المرسل موثوق والبيانات سليمة، واختلافهما = عبث أو انتحال.</div></div>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">🏅</span>
          <h4 class="callout-title">من يضمن أن المفتاح العام لصاحبه؟ ومن يحمي تصفحك؟</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🏛️</span> <strong>جهة التصديق (CA):</strong> جهة مستقلة موثوقة تتحقق أن كل مفتاح عام يخص صاحبه فعلًا، وتُصدر له <strong>شهادة رقمية (Digital Certificate)</strong> تضم المفتاح وبيانات صاحبه — مثل ختم رسمي على الهوية.</li>
          <li><span class="list-bullet-icon">🔒</span> <strong>تشفير التصفح (SSL/TLS):</strong> تقنية تشفر الاتصال بين متصفحك وخادم الموقع بطريقة <strong>المفتاح المؤقت</strong>، وتميز الصفحات المحمية ببادئة <strong>https://</strong> وعلامة القفل. وTLS هو الجيل الأحدث والأكثر أمانًا من SSL القديم.</li>
        </ul>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">✍️ مخطط: رحلة التوقيع من الإرسال للتحقق</h4>
        <div class="l3-flow">
          <div class="l3-flow-node">📝 بصمة<br><small>احسب من النص</small></div><span class="l3-flow-arrow ok">←</span>
          <div class="l3-flow-node key">🔑 وقّع<br><small>شفّر بالمفتاح الخاص</small></div><span class="l3-flow-arrow ok">←</span>
          <div class="l3-flow-node">📤 أرسل<br><small>نص + توقيع</small></div><span class="l3-flow-arrow ok">←</span>
          <div class="l3-flow-node">🔓 افتح<br><small>فك التشفير بالمفتاح العام</small></div><span class="l3-flow-arrow ok">←</span>
          <div class="l3-flow-node">🔁 احسب<br><small>بصمة جديدة</small></div><span class="l3-flow-arrow ok">←</span>
          <div class="l3-flow-node open">✅ قارن<br><small>تطابق = ثقة</small></div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🔒 مخطط: ماذا يتحقق منه متصفحك قبل القفل؟</h4>
        <div class="l3-browser">
          <div class="l3-browser-bar"><span class="lock">🔒</span><span><span class="https">https://</span>bank.example.com/login</span></div>
          <div class="l3-browser-body">🏛️ <strong>جهة التصديق</strong> تشهد أن المفتاح العام لصاحب الموقع فعلًا (شهادة رقمية) ← 📡 كل الحركة بعدها مغلفة بـ<strong>مفتاح جلسة</strong> سريع ← 🎣 أي موقع مزيف يسقط في فحص الشهادة.</div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/info_characteristics.jpg" alt="بصمة التجزئة"><span>#️⃣ البصمة تكشف أي تغيير</span></div>
          <div class="l3-photo"><img src="assets/images/corporate_data_policy.jpg" alt="الشهادة"><span>🏅 الشهادة هوية الموقع</span></div>
          <div class="l3-photo"><img src="assets/images/data_info_knowledge.jpg" alt="تصفح آمن"><span>🔒 القفل يعني جلسة مشفرة</span></div>
        </div>
        <figcaption>المعادلة: بصمتان متطابقتان = مرسل حقيقي وملف سليم. بصمتان مختلفتان = توقف فورًا وحمّل من المصدر الرسمي.</figcaption>
      </figure>`
    ],
    takeaway: "البصمة تكشف العبث ولا تُعكس ⬝ التوقيع بصمة مشفرة بالمفتاح الخاص للمرسل ⬝ التحقق فك التشفير بالمفتاح العام ثم مقارنة ⬝ جهة التصديق تختم هوية المفاتيح بالشهادات ⬝ والقفل في المتصفح يعني تصفحًا مشفرًا بمفتاح الجلسة.",
    funFact: "علامة القفل 🔒 في متصفحك تعني أن فكرتين من هذا الدرس تعملان معًا الآن: شهادة تثبت هوية الموقع، وجلسة مشفرة تحمي كل ما تكتبه!",
    quiz: {
      question: "حمّلت برنامجًا وفشل التحقق من توقيعه الرقمي (البصمتان مختلفتان). ما التصرف الأسلم؟",
      options: [
        "أوقف التثبيت وحمّل البرنامج من الموقع الرسمي ثم أعد التحقق",
        "أكمل التثبيت فالتوقيع مجرد شكل تجميلي",
        "عطّل برنامج الحماية حتى يمر التثبيت",
        "أرسل الملف لأصدقائي لتجربته على أجهزتهم"
      ],
      answer: 0,
      explain: "اختلاف البصمتين يعني عبثًا بالملف أو انتحالًا للمرسل — القاعدة: لا تثق أبدًا بملف فشل توقيعه."
    }
  }
];

const LECT3_MATCH_ITEMS_AR = [
  { id: "m1", concept: "السرية", match: "لا يطلع على المعلومة إلا المصرح لهم" },
  { id: "m2", concept: "حصان طروادة", match: "برنامج يتنكر في صورة برنامج سليم ليتسلل ويهاجم" },
  { id: "m3", concept: "المصادقة الثنائية", match: "تحققان معًا من نوعين مختلفين: معرفة وحيازة مثلًا" },
  { id: "m4", concept: "جدار الحماية", match: "يصد المتسللين من الخارج ويمنع تسرب البيانات إلى الخارج" },
  { id: "m5", concept: "التصيد", match: "مواقع مزيفة تنتحل البنوك لسرقة الأرقام السرية" },
  { id: "m6", concept: "التشفير المتماثل", match: "مفتاح واحد مشترك للتشفير والفك — سريع وصعب التوزيع" },
  { id: "m7", concept: "التوقيع الرقمي", match: "بصمة مشفرة بالمفتاح الخاص للمرسل تُفك بالمفتاح العام للمقارنة" },
  { id: "m8", concept: "SSL/TLS (https)", match: "تشفير حركة المتصفح بمفتاح الجلسة مع شهادة موثقة" }
];

if (typeof window !== 'undefined') {
  window.LECT3_STAGES_AR = LECT3_STAGES_AR;
  window.LECT3_MATCH_ITEMS_AR = LECT3_MATCH_ITEMS_AR;
}
