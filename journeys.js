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
      en: 'Unit 1 · 1st Secondary',
      ar: 'الوحدة الأولى · أولى ثانوي'
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
      en: 'Unit 1 · 1st Secondary',
      ar: 'الوحدة الأولى · أولى ثانوي'
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
  }
];

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
  }
};
