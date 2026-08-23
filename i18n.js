const translations = {
  en: {
    portalBadge: "Origin Interactive",
    portalTitle: "Explore the <span class=\"text-glow\">Digital Cosmos</span>",
    portalDesc: "Immersive, story-driven journeys into the history and science of computers. Select your destination.",
    footerText: "Made for curious minds · Intro to Computer Science",
    btnStart: "Begin Journey &rarr;",
    btnLocked: "Locked",
    
    abacusHeroKicker: "An interactive journey through time",
    abacusHeroTitle: "From <span class=\"hl-abacus\">Abacus</span><br>to <span class=\"hl-ai\">AI</span>",
    abacusHeroIntro: "Before we start learning computers, programming, and the main curriculum, let's ask a simple question:<br><br><strong>How did we get from this... to this?</strong><br><br>Computers did not appear suddenly. They are the result of hundreds of years of people trying to solve one basic problem:<br><strong>How can we make calculations and work easier and faster?</strong><br><br>An old calculator or abacus eventually led to the computers, smartphones, and AI systems we use today. You're about to travel through that story, one stop at a time.",
    abacusBtnStart: "Start the journey &rarr;",
    heroMeta1: "⏱ ~15 min",
    heroMeta2: "🗺 11 stops",
    heroMeta3: "🧩 1 final challenge",
    
    timelineTitle: "The Timeline",
    timelineSub: "Click any stop on the map — or travel in order with the arrows.",
    
    btnPrev: "&larr; Previous",
    btnNext: "Next stop &rarr;",
    btnFinal: "🏁 Go to final challenge &rarr;",
    
    keyPeople: "👤 Key people",
    theInvention: "💡 The invention",
    whyMattered: "🌍 Why it mattered",
    funFact: "🎉 Fun fact",
    revealBtn: "👀 Click to reveal a fun fact",
    
    quickCheck: "🧠 Quick check:",
    
    guessTitle: "🔮 Guess what comes next…",
    
    challengeTitle: "🏁 Final Challenge",
    challengeSub: "You made it to the end! Now prove it: tap two cards to swap them until the inventions are in the correct order — oldest first.",
    swapsCount: "Swaps:",
    hintDefault: "Tip: tap a card, then tap where you think it belongs.",
    btnShuffle: "🔄 Shuffle again"
  },
  ar: {
    portalBadge: "باكالوريا التفاعلية",
    portalTitle: "استكشف <span class=\"text-glow\">الكون الرقمي</span>",
    portalDesc: "رحلات تفاعلية ممتعة في تاريخ وعلوم الكمبيوتر. اختار وجهتك.",
    footerText: "عشان العقول الفضولية · مقدمة في علوم الكمبيوتر",
    btnStart: "&larr; ابدأ الرحلة",
    btnLocked: "مقفول",
    
    abacusHeroKicker: "المحاضرة الأولى - تعريفية",
    abacusHeroTitle: "من <span class=\"hl-abacus\">العداد</span><br>لـ <span class=\"hl-ai\">الذكاء الاصطناعي</span>",
    abacusHeroIntro: "قبل ما ندخل في المنهج ونبدأ نتكلم عن الكمبيوتر والبرمجة، تعالوا نسأل نفسنا سؤال بسيط جداً:<br><br><strong>إزاي وصلنا من ده... لده؟ 🤔</strong><br><br>الكمبيوترات دي مطلعتش فجأة كده زي السحر. دي نتيجة مئات السنين من محاولات الناس إنهم يحلو مشكلة واحدة بس:<br><strong>إزاي نقدر نحسب ونخلص شغلنا أسهل وأسرع؟ 🚀</strong><br><br>متخيلين إن آلة حاسبة قديمة (العداد) هي اللي وصلتنا للكمبيوترات والموبايلات والذكاء الاصطناعي اللي في إيدينا النهاردة؟ يالا بينا نسافر عبر الزمن ونشوف القصة دي محطة بمحطة!",
    abacusBtnStart: "&larr; يالا نبدأ الرحلة",
    heroMeta1: "⏱ ~١٥ دقيقة",
    heroMeta2: "🗺 ١١ محطة",
    heroMeta3: "🧩 تحدي أخير",
    
    timelineTitle: "الخط الزمني (Timeline)",
    timelineSub: "دوس على أي محطة في الخريطة — أو سافر بالترتيب باستخدام الأسهم.",
    
    btnPrev: "السابق &rarr;",
    btnNext: "&larr; المحطة اللي بعدها",
    btnFinal: "&larr; 🏁 روح للتحدي الأخير",
    
    keyPeople: "👤 أهم الشخصيات",
    theInvention: "💡 الاختراع",
    whyMattered: "🌍 ليه كان مهم؟",
    funFact: "🎉 معلومة في السريع",
    revealBtn: "👀 دوس هنا عشان تشوف المعلومة",
    
    quickCheck: "🧠 سؤال عالسريع:",
    
    guessTitle: "🔮 تفتكر إيه اللي هييجي بعد كده؟",
    
    challengeTitle: "🏁 التحدي الأخير",
    challengeSub: "وصلت للنهاية! وريني شطارتك: دوس على كارتين عشان تبدلهم لحد ما ترتب الاختراعات كلها صح — من الأقدم للأحدث.",
    swapsCount: "عدد التبديلات:",
    hintDefault: "تلميح: دوس على كارت، وبعدين دوس على المكان اللي تفتكر إنه الصح.",
    btnShuffle: "🔄 لخبطهم وجرب تاني"
  }
};

let currentLang = localStorage.getItem('origin-lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('origin-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
  
  // Dispatch event so other scripts can re-render dynamic content
  window.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));
}

function t(key) {
  return translations[currentLang][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Setup language toggle buttons if they exist
  document.querySelectorAll('#langToggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = document.documentElement.getAttribute('lang') === 'ar' ? 'en' : 'ar';
      setLang(newLang);
    });
  });
  
  // Theme Toggle Logic
  const storedTheme = localStorage.getItem('origin-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);
  
  document.querySelectorAll('#themeToggle').forEach(btn => {
    btn.textContent = storedTheme === 'light' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('origin-theme', next);
      
      document.querySelectorAll('#themeToggle').forEach(b => {
        b.textContent = next === 'light' ? '☀️' : '🌙';
      });
    });
  });

  // Initial application of translation and document direction
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
});
