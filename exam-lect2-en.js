/* ============================================================
   Final Exam — Lecture 2
   (Personal Data, Privacy, IP & Information Utilization)
   15 questions covering all stages. Pass threshold: 7 / 15.
   Same approach as Lecture 1: short, scenario-based, varied answers.
   ============================================================ */

const LECT2_EXAM_EN = [
  {
    id: 'exam2-1',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'A school form asks for your name, address, date of birth, and gender. Why these four specifically?',
    options: [
      'They are just random questions.',
      'They are the "Four Basic Items" the law uses to verify identity.',
      'They are needed for the school canteen menu.',
      'They replace the need for any passwords.'
    ],
    answer: 1,
    explain: 'Name, address, date of birth, and gender are the four basic identity items recognized by data-protection law.'
  },
  {
    id: 'exam2-2',
    stageId: 'personal-data',
    difficulty: 'hard',
    question: 'A clinic posts a patient\'s diagnosis and national ID number on a public notice board "by mistake". What makes this especially serious?',
    options: [
      'Nothing — clinic boards are public anyway.',
      'Typos are always forgiven.',
      'It violates trademark law.',
      'It exposes sensitive data (health + ID code) that can cause discrimination and harm.'
    ],
    answer: 3,
    explain: 'Health records and ID numbers are high-sensitivity data; public exposure risks discrimination and identity harm.'
  },
  {
    id: 'exam2-3',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'Your fingerprint unlocks your phone. Legally, your fingerprint is:',
    options: [
      'Sensitive biometric data needing the strictest protection.',
      'A public number anyone can share.',
      'A trademark of the phone company.',
      'A Creative Commons work.'
    ],
    answer: 0,
    explain: 'Biometrics (fingerprints, iris, DNA) are irreplaceable sensitive identifiers with supreme safeguards.'
  },
  {
    id: 'exam2-4',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'You photograph a famous actor eating at a private restaurant and sell the photo to a company for a product ad, without permission. What did you violate?',
    options: [
      'A patent filing rule.',
      'Fair use for education.',
      'Image rights (photo without consent) and publicity rights (commercial use of a celebrity\'s likeness).',
      'The opt-in email system.'
    ],
    answer: 2,
    explain: 'Taking the photo without consent breaks image rights; selling a celebrity\'s face for ads breaks publicity rights.'
  },
  {
    id: 'exam2-5',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'When can a hospital share your medical file with emergency doctors without asking you first?',
    options: [
      'Whenever it wants more funding.',
      'To send you birthday greetings.',
      'To boost its social media followers.',
      'When it is necessary to save your life or health in an emergency.'
    ],
    answer: 3,
    explain: 'Life-and-health emergencies are a statutory exception: disclosure without consent is allowed to save life or body.'
  },
  {
    id: 'exam2-6',
    stageId: 'corporate-privacy',
    difficulty: 'easy',
    question: 'What must every company publish so you know how it collects, stores, and protects your data?',
    options: [
      'A patent certificate.',
      'A privacy policy.',
      'A moral-rights waiver.',
      'A concert ticket.'
    ],
    answer: 1,
    explain: 'The privacy policy is the binding public document explaining data collection, purpose, retention, and security.'
  },
  {
    id: 'exam2-7',
    stageId: 'corporate-privacy',
    difficulty: 'hard',
    question: 'A shopping site emails you promos you never asked for, with a tiny "click here to unsubscribe" at the bottom. Which system is this?',
    options: [
      'The copyright non-formality principle.',
      'Creative Commons Share-Alike.',
      'The opt-out system: active by default until you object.',
      'The opt-in system: blocked until you agree.'
    ],
    answer: 2,
    explain: 'Default-on tracking with an unsubscribe link is the textbook opt-out (objection) model.'
  },
  {
    id: 'exam2-8',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'What does the "formality principle" mean for industrial property?',
    options: [
      'No protection exists until you file an application and register with the patent office.',
      'Rights start automatically the moment you think of an idea.',
      'Only university graduates can manufacture products.',
      'Inventors must give all profits to the state.'
    ],
    answer: 0,
    explain: 'Patents, designs, utility models, and trademarks need formal filing, examination, and registration first.'
  },
  {
    id: 'exam2-9',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'How long do patents and trademarks last?',
    options: [
      'Patents 50 years; trademarks 2 years.',
      'Patents last the inventor\'s lifetime; trademarks 7 years.',
      'Both exactly 15 years, no renewal.',
      'Patents 20 years from filing; trademarks 10 years, renewable forever.'
    ],
    answer: 3,
    explain: 'Patents: 20 years from application. Trademarks: 10 years per registration, renewable indefinitely.'
  },
  {
    id: 'exam2-10',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'A carmaker designs a stunning new body shape for its electric car. Which right protects that look?',
    options: [
      'Utility model rights.',
      'Publicity rights.',
      'Industrial design rights.',
      'Broadcasting neighboring rights.'
    ],
    answer: 2,
    explain: 'Industrial designs protect the aesthetic exterior: contours, lines, shapes, and patterns.'
  },
  {
    id: 'exam2-11',
    stageId: 'copyrights',
    difficulty: 'medium',
    question: 'A 15-year-old writes an original game and shares it with classmates. Which statement about copyright is true?',
    options: [
      'No copyright without patent-office fees.',
      'Protection starts automatically at creation (non-formality) — even for a minor amateur.',
      'Only commercial rights exist; moral rights are lost.',
      'Minors get zero rights before age 18.'
    ],
    answer: 1,
    explain: 'Copyright needs no registration and no minimum age: it vests the instant the work is created.'
  },
  {
    id: 'exam2-12',
    stageId: 'copyrights',
    difficulty: 'hard',
    question: 'What is the key difference between an author\'s moral rights and economic rights?',
    options: [
      'Moral rights are eternal and inalienable (attribution + integrity); economic rights are temporary and transferable.',
      'Moral rights can be auctioned; economic rights end at creation.',
      'Economic rights end the day the author dies.',
      'Moral rights cover hardware; economic rights cover poetry.'
    ],
    answer: 0,
    explain: 'Moral rights (credit + no distortion) last forever and cannot be sold; economic rights can be licensed and expire.'
  },
  {
    id: 'exam2-13',
    stageId: 'copyrights',
    difficulty: 'creative',
    question: 'You want to use a famous old radio show recording in your school project. The script is 80 years old, but the recording was made last year by a modern station. What do you need?',
    options: [
      'A 20-year mechanical patent.',
      'A utility model from the commerce department.',
      'The script may be public domain, but the modern recording has neighboring rights — get permission or use a free alternative.',
      'Nothing — old means free for everything.'
    ],
    answer: 2,
    explain: 'Old texts can be free while new performances of them stay protected for performers, producers, and broadcasters.'
  },
  {
    id: 'exam2-14',
    stageId: 'fair-use-quotation',
    difficulty: 'creative',
    question: 'You quote a full paragraph word-for-word in your research, list the book in the bibliography, but forget the quotation marks. What is the verdict?',
    options: [
      'Perfect fair use.',
      'Covered by Share-Alike automatically.',
      'An opt-in system violation.',
      'A quotation-rule violation and plagiarism — without visible demarcation, readers are misled.'
    ],
    answer: 3,
    explain: 'Quotation marks are mandatory: omitting them while copying verbatim is plagiarism even with a bibliography entry.'
  },
  {
    id: 'exam2-15',
    stageId: 'creative-commons',
    difficulty: 'creative',
    question: 'You publish your photo as "CC BY-NC-ND" and a classmate wants to use it. What does your license allow them to do?',
    options: [
      'Sell prints of it for profit.',
      'Share it as-is with your credit, non-commercially, with zero changes.',
      'Skip crediting you since it is online.',
      'Crop it, add filters, and repost as their own.'
    ],
    answer: 1,
    explain: 'BY-NC-ND = credit you (BY) + no money-making (NC) + no derivatives (ND). Share verbatim only.'
  }
];

if (typeof window !== 'undefined') {
  window.LECT2_EXAM_EN = LECT2_EXAM_EN;
}