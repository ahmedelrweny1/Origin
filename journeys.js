const journeys = [
  {
    id: 'info-and-ethics',
    title: {
      en: 'Information, Media & Cyber Ethics',
      ar: 'دراسة المعلومات والوسائط وأخلاقيات التكنولوجيا'
    },
    description: {
      en: 'Explore Data vs Information vs Knowledge, characteristics of digital media, cross-checking, and safe online conduct.',
      ar: 'استكشف الفرق بين البيانات والمعلومات والمعرفة، وسائط الاتصال، التحقق المتبادل، وقواعد السلوك والأمان الرقمي.'
    },
    url: 'lecture1.html',
    quizUrl: 'quiz.html?lecture=info-and-ethics',
    examUrl: 'quiz.html?lecture=info-and-ethics&mode=exam',
    hasQuizzes: true,
    status: 'active',
    icon: '🛡️',
    duration: {
      en: '~20 min',
      ar: '~٢٠ دقيقة'
    },
    tag: {
      en: 'Chapter 1 · 1st Secondary',
      ar: 'الفصل الأول · أولى ثانوي'
    }
  },
  {
    id: 'privacy-and-ip',
    title: {
      en: 'Personal Data & Intellectual Property',
      ar: 'البيانات الشخصية والملكية الفكرية'
    },
    description: {
      en: 'Master personal data protection, privacy rights, patents vs copyrights, quotation rules, and Creative Commons.',
      ar: 'احترف حماية البيانات والخصوصية، براءات الاختراع مقابل حقوق المؤلف، ضوابط الاقتباس القانوني، ورخص المشاع الإبداعي.'
    },
    url: 'lecture2.html',
    quizUrl: 'quiz.html?lecture=privacy-and-ip',
    examUrl: 'quiz.html?lecture=privacy-and-ip&mode=exam',
    hasQuizzes: true,
    status: 'active',
    icon: '⚖️',
    duration: {
      en: '~25 min',
      ar: '~٢٥ دقيقة'
    },
    tag: {
      en: 'Chapter 2 · 1st Secondary',
      ar: 'الفصل الثاني · أولى ثانوي'
    }
  },
  {
    id: 'security-and-safety',
    title: {
      en: 'Information Security & Safety Tech',
      ar: 'أمن المعلومات وتقنيات السلامة'
    },
    description: {
      en: 'Master the CIA triad, passwords and authentication, fraud and social engineering, encryption, signatures and SSL/TLS.',
      ar: 'احترف الأركان الأمنية الثلاثة، كلمات المرور والمصادقة، الاحتيال والهندسة الاجتماعية، التشفير والتوقيع الرقمي و SSL/TLS.'
    },
    url: 'lecture3.html',
    quizUrl: 'quiz.html?lecture=security-and-safety',
    examUrl: 'quiz.html?lecture=security-and-safety&mode=exam',
    hasQuizzes: true,
    status: 'active',
    icon: '🔐',
    duration: {
      en: '~25 min',
      ar: '~٢٥ دقيقة'
    },
    tag: {
      en: 'Chapter 3 · 1st Secondary',
      ar: 'الفصل الثالث · أولى ثانوي'
    }
  },
  {
    id: 'abacus-to-ai',
    title: {
      en: 'From Abacus to AI',
      ar: 'من العداد للذكاء الاصطناعي'
    },
    description: {
      en: 'Travel through 4,000 years of computer history—from wooden beads to thinking machines.',
      ar: 'سافر عبر ٤٠٠٠ سنة من تاريخ الكمبيوتر — من خرز الخشب للآلات اللي بتفكر.'
    },
    url: 'abacus.html',
    hasQuizzes: false,
    status: 'active',
    icon: '🚀',
    duration: {
      en: '~15 min',
      ar: '~١٥ دقيقة'
    },
    tag: {
      en: 'Introductory Journey',
      ar: 'محاضرة تمهيدية'
    }
  },
  {
    id: 'digital-data-representation',
    title: {
      en: 'Digital Data Representation & Multimedia',
      ar: 'التمثيل الرقمي للبيانات والوسائط المتعددة'
    },
    description: {
      en: 'Master analog vs digital, binary & hexadecimal systems, character encoding, sound/image/video digitization, compression, and information design.',
      ar: 'احترف التناظري والرقمي، النظام الثنائي والسادس عشر، ترميز الحروف، رقمنة الصوت والصور والفيديو، ضغط البيانات، وتصميم المعلومات.'
    },
    url: 'lecture4.html',
    quizUrl: 'quiz.html?lecture=digital-data-representation',
    examUrl: 'quiz.html?lecture=digital-data-representation&mode=exam',
    hasQuizzes: true,
    status: 'active',
    icon: '💾',
    duration: {
      en: '~30 min',
      ar: '~٣٠ دقيقة'
    },
    tag: {
      en: 'Chapter 4 · 1st Secondary',
      ar: 'الفصل الرابع · أولى ثانوي'
    }
  },
  {
    id: 'assembly-software-logic',
    title: {
      en: 'Computer Assembly, Software & Logic Circuits',
      ar: 'تجميع الكمبيوتر والبرمجيات والدوائر المنطقية'
    },
    description: {
      en: "Assemble the computer's five components, meet USB/HDMI/Ethernet interfaces, system software, OS & drivers, then build logic gates AND/OR/NOT and binary adders.",
      ar: 'اعرف المكونات الخمسة للكمبيوتر، الواجهات USB و HDMI و Ethernet، العتاد والبرمجيات والـ Drivers، وابنِ البوابات المنطقية ودوائر الجمع.'
    },
    url: 'lecture5.html',
    hasQuizzes: false,
    status: 'active',
    icon: '🧩',
    duration: {
      en: '~30 min',
      ar: '~٣٠ دقيقة'
    },
    tag: {
      en: 'Chapter 7 · 1st Secondary',
      ar: 'الفصل السابع · أولى ثانوي'
    }
  }
];

const JOURNEY_TOTALS = {
  'info-and-ethics': 12,
  'privacy-and-ip': 7,
  'security-and-safety': 5,
  'abacus-to-ai': 11,
  'digital-data-representation': 11,
  'assembly-software-logic': 8
};

const JOURNEY_VISITED_KEYS = {
  'info-and-ethics': 'origin-lect1-progress',
  'privacy-and-ip': 'origin-lect2-progress',
  'security-and-safety': 'origin-lect3-progress',
  'abacus-to-ai': 'origin-progress',
  'digital-data-representation': 'origin-lect4-progress',
  'assembly-software-logic': 'origin-lect5-progress'
};

function getJourneyProgress(id) {
  const total = JOURNEY_TOTALS[id] || 0;
  let visited = 0;
  try {
    const raw = JSON.parse(localStorage.getItem(JOURNEY_VISITED_KEYS[id] || '') || 'null');
    if (raw && Array.isArray(raw.visited)) visited = raw.visited.length;
  } catch (e) {}
  let examBest = 0;
  let bankOpen = false;
  try {
    examBest = parseInt(localStorage.getItem(`origin-exam-${id}`) || '0', 10) || 0;
    bankOpen = localStorage.getItem(`origin-unlock-${id}`) === '1';
  } catch (e) {}
  const started = visited > 0 || examBest > 0;
  return {
    visited: Math.min(visited, total),
    total,
    pct: total ? Math.round((Math.min(visited, total) / total) * 100) : 0,
    examBest,
    examPassed: examBest >= 7,
    bankOpen,
    started
  };
}

const LECTURE_DATA_MAP = {
  'info-and-ethics': {
    stagesVar: 'LECT1_STAGES',
    stagesAr: 'LECT1_STAGES_AR',
    stagesEn: 'LECT1_STAGES_EN',
    scriptAr: 'data-lect1-ar.js',
    scriptEn: 'data-lect1-en.js',
    bankAr: 'quizbank-lect1-ar.js',
    bankEn: 'quizbank-lect1-en.js',
    bankArVar: 'LECT1_QUIZBANK_AR',
    bankEnVar: 'LECT1_QUIZBANK_EN',
    examAr: 'exam-lect1-ar.js',
    examEn: 'exam-lect1-en.js',
    examArVar: 'LECT1_EXAM_AR',
    examEnVar: 'LECT1_EXAM_EN',
    passThreshold: 7
  },
  'privacy-and-ip': {
    stagesVar: 'LECT2_STAGES',
    stagesAr: 'LECT2_STAGES_AR',
    stagesEn: 'LECT2_STAGES_EN',
    scriptAr: 'data-lect2-ar.js',
    scriptEn: 'data-lect2-en.js',
    bankAr: 'quizbank-lect2-ar.js',
    bankEn: 'quizbank-lect2-en.js',
    bankArVar: 'LECT2_QUIZBANK_AR',
    bankEnVar: 'LECT2_QUIZBANK_EN',
    examAr: 'exam-lect2-ar.js',
    examEn: 'exam-lect2-en.js',
    examArVar: 'LECT2_EXAM_AR',
    examEnVar: 'LECT2_EXAM_EN',
    passThreshold: 7
  },
  'security-and-safety': {
    stagesVar: 'LECT3_STAGES',
    stagesAr: 'LECT3_STAGES_AR',
    stagesEn: 'LECT3_STAGES_EN',
    scriptAr: 'data-lect3-ar.js',
    scriptEn: 'data-lect3-en.js',
    bankAr: 'quizbank-lect3-ar.js',
    bankEn: 'quizbank-lect3-en.js',
    bankArVar: 'LECT3_QUIZBANK_AR',
    bankEnVar: 'LECT3_QUIZBANK_EN',
    examAr: 'exam-lect3-ar.js',
    examEn: 'exam-lect3-en.js',
    examArVar: 'LECT3_EXAM_AR',
    examEnVar: 'LECT3_EXAM_EN',
    passThreshold: 7
  },
  'digital-data-representation': {
    stagesVar: 'LECT4_STAGES',
    stagesAr: 'LECT4_STAGES_AR',
    stagesEn: 'LECT4_STAGES_EN',
    scriptAr: 'data-lect4-ar.js',
    scriptEn: 'data-lect4-en.js',
    bankAr: 'quizbank-lect4-ar.js',
    bankEn: 'quizbank-lect4-en.js',
    bankArVar: 'LECT4_QUIZBANK_AR',
    bankEnVar: 'LECT4_QUIZBANK_EN',
    examAr: 'exam-lect4-ar.js',
    examEn: 'exam-lect4-en.js',
    examArVar: 'LECT4_EXAM_AR',
    examEnVar: 'LECT4_EXAM_EN',
    passThreshold: 7
  }
};
