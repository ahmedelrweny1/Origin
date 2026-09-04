/* ============================================================
   Final Exam - Unit 1: Lecture 2
   (Personal Information, Intellectual Property & Information Utilization)
   15 Comprehensive Questions covering all stages.
   Pass threshold: 7 / 15.
   ============================================================ */

const LECT2_EXAM_EN = [
  {
    id: 'exam2-1',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'Which of the following groupings strictly represents the "Four Basic Items" universally recognized in data protection law for identity verification?',
    options: [
      'Name, Address, Date of Birth, and Gender.',
      'Telephone number, Email address, Bank account, and Occupation.',
      'Fingerprint data, Blood type, Body weight, and Height.',
      'National ID number, Passport number, and Driver’s license number.'
    ],
    answer: 0,
    explain: 'The Four Basic Items established in Information Study curricula and statutory data protection laws are: Name, Address, Date of Birth, and Gender.'
  },
  {
    id: 'exam2-2',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'Although passport numbers and driver’s license numbers are merely sequences of numbers, the law considers them personal data because they:',
    options: [
      'Serve as Personal Identification Codes that uniquely and decisively pinpoint living individuals.',
      'Fall under Creative Commons licensing protocols.',
      'Are governed automatically by the Non-Formality Principle in copyright.',
      'Are treated as open public information accessible to everyone without restriction.'
    ],
    answer: 0,
    explain: 'Passport numbers, driver’s licenses, and national identity numbers are Personal Identification Codes that directly link to a single living person.'
  },
  {
    id: 'exam2-3',
    stageId: 'personal-data',
    difficulty: 'hard',
    question: 'Which of the following belongs to the highest tier of Special Care-Required Personal Information (Sensitive Data) requiring strict safeguards to prevent discrimination?',
    options: [
      'Criminal records, religious creed, biometric data, and medical health history.',
      'An online gaming pseudonym used on public forums.',
      'The public URL of an educational student blog.',
      'The name of a secondary school or local sports club.'
    ],
    answer: 0,
    explain: 'Sensitive personal information encompasses religious beliefs, political affiliations, criminal records, health conditions, and biometric parameters like iris and fingerprints.'
  },
  {
    id: 'exam2-4',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'A photographer takes a photo of a famous movie actor dining at a private venue and sells the picture to a corporate firm to use as an official product ad without consent. This action violates:',
    options: [
      'Image / Portrait Rights and Publicity Rights.',
      'Industrial utility model rights and patent registrations.',
      'The fair use exception for non-profit education.',
      'The formality filing requirements of the patent office.'
    ],
    answer: 0,
    explain: 'Photographing someone without consent infringes Image Rights, while commercial exploitation of a celebrity’s economic likeness without a license violates Publicity Rights.'
  },
  {
    id: 'exam2-5',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'In which of the following scenarios does the law permit an institution to disclose an individual’s personal data to a third party without obtaining prior consent?',
    options: [
      'When mandated by statutory laws, to safeguard national security, or to preserve human life and physical health in emergencies.',
      'When an e-commerce firm wishes to send promotional seasonal discounts.',
      'When a store manager wants to surprise an acquaintance with a marketing gift.',
      'To increase advertising revenues for an internet service provider.'
    ],
    answer: 0,
    explain: 'Statutory exceptions permitting disclosure without consent are strictly limited to statutory legal mandates, urgent life/health protection, national security, and judicial subpoenas.'
  },
  {
    id: 'exam2-6',
    stageId: 'corporate-privacy',
    difficulty: 'easy',
    question: 'What is the mandatory legal document that corporations must publish to transparently disclose how customer data is collected, stored, and protected?',
    options: [
      'Privacy Policy.',
      'Mechanical Patent Certificate.',
      'Moral Rights Waiver Agreement.',
      'Creative Commons No-Derivatives License (CC ND).'
    ],
    answer: 0,
    explain: 'A corporate Privacy Policy details the exact rules and security parameters governing the collection, processing, and storage of user personal data.'
  },
  {
    id: 'exam2-7',
    stageId: 'corporate-privacy',
    difficulty: 'hard',
    question: 'A shopping platform sends promotional mailers to a customer by default without prior request, stating at the bottom: "If you do not wish to receive further emails, click here to unsubscribe". This company utilizes:',
    options: [
      'The Opt-out System (Objection Regime).',
      'The Opt-in System (Prior Consent Regime).',
      'The Non-Formality Principle of automatic copyright.',
      'The Creative Commons Share-Alike framework.'
    ],
    answer: 0,
    explain: 'An Opt-out system activates data delivery or tracking by default, continuing until the user takes proactive affirmative action to object and cancel.'
  },
  {
    id: 'exam2-8',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'What is the "Formality Principle" that governs Industrial Property Rights?',
    options: [
      'Legal rights and protection do not arise until an application is formally filed and registered with the competent patent authority.',
      'Rights attach automatically and spontaneously at the instant of creative ideation without any official paperwork.',
      'Industrial products can only be manufactured by accredited university graduates.',
      'Inventors must surrender all financial proceeds to the state without compensation.'
    ],
    answer: 0,
    explain: 'Under the Formality Principle, industrial property rights (patents, designs, utility models, trademarks) do not exist until official examination and registration are completed.'
  },
  {
    id: 'exam2-9',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'What are the legal terms of protection for: [1] Patent Rights, and [2] Trademark Rights (from filing/registration)?',
    options: [
      'Patents: 20 years; Trademarks: 10 years indefinitely renewable in 10-year increments.',
      'Patents: 50 years; Trademarks: 2 years non-renewable.',
      'Patents: Lifetime of inventor; Trademarks: 7 years fixed.',
      'Both are protected for exactly 15 years without renewal.'
    ],
    answer: 0,
    explain: 'Patents are protected for 20 years from application date, while trademarks are protected for 10 years from registration and can be renewed indefinitely.'
  },
  {
    id: 'exam2-10',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'An automotive manufacturer conceives an aerodynamic, visually striking exterior chassis contour for a new electric roadster. Which right protects this aesthetic shape?',
    options: [
      'Industrial Design Rights.',
      'Utility Model Rights.',
      'Publicity Rights.',
      'Broadcasting Neighboring Rights.'
    ],
    answer: 0,
    explain: 'Industrial Design Rights protect the aesthetic exterior visual contours, lines, and patterns of industrial manufactured goods.'
  },
  {
    id: 'exam2-11',
    stageId: 'copyrights',
    difficulty: 'medium',
    question: 'A 15-year-old student programs an original computer video game and shares it with classmates. Which of the following statements regarding copyright is true?',
    options: [
      'Copyright protection attaches automatically the instant the game code is created (Non-Formality Principle), even though the author is an amateur and a minor.',
      'No copyright exists unless the minor pays registration fees to the Patent Office.',
      'All rights are null and void because the creator has not reached the age of majority (18).',
      'The student only possesses commercial property rights and forfeits all moral rights.'
    ],
    answer: 0,
    explain: 'Copyright operates on the Non-Formality Principle: protection springs to life spontaneously upon creation, protecting amateurs and minors alike without registration.'
  },
  {
    id: 'exam2-12',
    stageId: 'copyrights',
    difficulty: 'hard',
    question: 'What is the fundamental difference between the Moral Rights and Economic (Property) Rights of an author?',
    options: [
      'Moral rights are eternal, inalienable, and cannot be assigned or sold, whereas economic rights are temporary and can be commercially licensed or transferred.',
      'Moral rights can be auctioned commercially, whereas economic rights expire immediately upon creation.',
      'Economic rights automatically expire on the exact day of the author’s death.',
      'Moral rights apply only to industrial hardware, while economic rights apply to poetry.'
    ],
    answer: 0,
    explain: 'Moral rights (attribution and integrity) are perpetual and inalienable, while economic property rights can be licensed/sold and endure for a finite period post-mortem.'
  },
  {
    id: 'exam2-13',
    stageId: 'copyrights',
    difficulty: 'medium',
    question: 'If a modern digital creator wishes to sample an audio recording of a classic radio broadcast performed decades ago, authorization is required because the recording is protected by:',
    options: [
      'Neighboring Rights granted to performers, record producers, and broadcasting agencies.',
      'A 20-year mechanical industrial patent.',
      'A utility model registration from the Department of Commerce.',
      'A non-renewable 7-year design patent.'
    ],
    answer: 0,
    explain: 'Neighboring Rights protect the actors, singers, audio producers, and broadcasting networks who transmit and perform works.'
  },
  {
    id: 'exam2-14',
    stageId: 'fair-use-quotation',
    difficulty: 'hard',
    question: 'An author cites a full paragraph verbatim from another scholar’s monograph and lists the book in the bibliography, but neglects to enclose the passage in quotation marks « ». This practice:',
    options: [
      'Violates the mandatory rules of lawful quotation and constitutes academic plagiarism due to lack of distinct demarcation.',
      'Conforms impeccably to all statutory fair use standards.',
      'Automatically falls under the Creative Commons Share-Alike license.',
      'Constitutes a technical violation of the Opt-in corporate consent system.'
    ],
    answer: 0,
    explain: 'One of the five golden rules of quotation is clear visual identification using quotation marks; omitting quotes misleads readers and constitutes plagiarism.'
  },
  {
    id: 'exam2-15',
    stageId: 'creative-commons',
    difficulty: 'medium',
    question: 'The Creative Commons licensing configuration designated as "CC BY-NC-ND" allows public sharing of the work on condition that:',
    options: [
      'Credit is given to the author (BY), the work is not used commercially (NC), and no derivatives or alterations are made (ND).',
      'Commercial exploitation is permitted along with the sale of modified derivative editions.',
      'Attribution is waived and only identical licensing is required.',
      'Only governmental agencies are allowed to access and alter the material.'
    ],
    answer: 0,
    explain: 'BY mandates attribution, NC prohibits commercial exploitation, and ND strictly forbids creating derivative works or making alterations.'
  }
];

if (typeof window !== 'undefined') {
  window.LECT2_EXAM_EN = LECT2_EXAM_EN;
}
