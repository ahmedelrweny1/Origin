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
      'They are sensitive health data that need special written consent.',
      'They are the "Four Basic Items" the law uses to verify identity.',
      'They are government ID codes like a national ID or passport number.',
      'They are optional marketing details companies may share freely.'
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
      'It only exposes the Four Basic Items, which are low-risk identity details.',
      'It is allowed as an emergency exception to protect the patient’s health.',
      'It only breaks industrial-property rules about filing medical patents.',
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
      'The Four Basic Items used for everyday identity checks like name and address.',
      'A government ID code that can be cancelled and reissued if it leaks.',
      'Ordinary personal data with only basic protection like a shopping preference.'
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
      'Privacy rights only, because the dinner was private and no ad sale happened.',
      'Copyright infringement only, because the actor owns the rights in his own face.',
      'Image rights (photo without consent) and publicity rights (commercial use of a celebrity\'s likeness).',
      'No violation at all, because famous people lose all image rights in public life.'
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
      'When the hospital updates its privacy policy and posts it on its website.',
      'When researchers want to study patient files for a new medical paper.',
      'When the patient’s family asks for details because they are worried.',
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
      'A patent registration certificate filed with the patent office.',
      'A privacy policy.',
      'A cookie consent banner asking you to accept website tracking.',
      'A copyright notice claiming ownership of the website’s text.'
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
      'The opt-in system: it counts your silence as prior consent to promos.',
      'A privacy-policy exception where advertising emails are not personal data.',
      'The opt-out system: active by default until you object.',
      'The opt-in system: fully blocked until you actively tick agree first.'
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
      'Rights start automatically when you get the idea, with no filing needed.',
      'Filing is optional and only helps if you plan to sell the product abroad.',
      'Publishing the idea on social media automatically registers your ownership.'
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
      'Patents 7 years from filing; trademarks 20 years with no renewal.',
      'Patents 10 years renewable forever; trademarks 20 years from filing.',
      'Both last 20 years from filing, then both enter the public domain.',
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
      'Patent rights for the electric motor.',
      'Trademark rights for the brand logo.',
      'Industrial design rights.',
      'Utility model rights for a small improvement.'
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
      'No copyright exists until it is registered and official fees are paid.',
      'Protection starts automatically at creation (non-formality) — even for a minor amateur.',
      'Only economic rights exist at first; moral rights need a separate filing.',
      'Minors hold no copyright until they turn 18 and re-register the work.'
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
      'Moral rights last 20 years like patents; economic rights renew forever.',
      'Both rights end when the author dies and cannot pass to any heir.',
      'Economic rights are eternal and inalienable; moral rights can be sold.'
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
      'No permission is needed because the script’s age puts every version in the public domain.',
      'Only the writer’s moral rights still apply here, so giving credit alone is enough.',
      'The script may be public domain, but the modern recording has neighboring rights — get permission or use a free alternative.',
      'Nothing extra is needed because a non-profit school project counts as fair use.'
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
      'Proper quotation, because listing the book in the bibliography is enough.',
      'Fair use for research, because school projects never need quotation marks.',
      'Allowed sharing under Creative Commons because the book was legally published.',
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
      'Sell printed copies for profit as long as your name is clearly mentioned.',
      'Share it as-is with your credit, non-commercially, with zero changes.',
      'Share it freely online without credit since it was posted on the internet.',
      'Crop it, add filters, and repost it as a new original work of their own.'
    ],
    answer: 1,
    explain: 'BY-NC-ND = credit you (BY) + no money-making (NC) + no derivatives (ND). Share verbatim only.'
  }
];

if (typeof window !== 'undefined') {
  window.LECT2_EXAM_EN = LECT2_EXAM_EN;
}