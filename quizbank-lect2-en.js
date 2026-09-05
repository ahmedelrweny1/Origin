/* ============================================================
   Practice Quiz Bank — Lecture 2
   (Personal Data, Privacy, IP & Information Utilization)
   52 questions: easy / medium / hard / creative per chapter.
   Same approach as Lecture 1: short, scenario-based, varied answers.
   ============================================================ */

const LECT2_QUIZBANK_EN = [
  // ==========================================
  // personal-data: Personal Information & Identification Codes
  // ==========================================
  {
    id: 'qb2-1',
    stageId: 'personal-data',
    difficulty: 'easy',
    question: 'Which of these best describes "personal information"?',
    options: [
      'Any public poster or flyer on a school wall.',
      'Computer programs registered at a patent office.',
      'Information about a living person that can identify them directly or when combined with other data.',
      'Daily weather temperatures in big cities.'
    ],
    answer: 2,
    explain: 'Personal information is any data about a living person that identifies them alone or in combination with other data.'
  },
  {
    id: 'qb2-2',
    stageId: 'personal-data',
    difficulty: 'easy',
    question: 'Which item belongs to the "Four Basic Items" used to verify identity?',
    options: [
      'Date of birth.',
      'Bank account number.',
      'Work email address.',
      'Blood type.'
    ],
    answer: 0,
    explain: 'The Four Basic Items are: name, address, date of birth, and gender.'
  },
  {
    id: 'qb2-3',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'Passport numbers, driver\'s license numbers, and national ID numbers are classified as:',
    options: [
      'Public numbers anyone can share freely.',
      'Registered trademarks.',
      'Creative Commons license codes.',
      'Personal Identification Codes — unique numbers that point to one specific person.'
    ],
    answer: 3,
    explain: 'They are Personal Identification Codes: unique official numbers tied decisively to one individual.'
  },
  {
    id: 'qb2-4',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'Why does the law demand extra-strict protection for sensitive data like religion, health, or criminal records?',
    options: [
      'Because companies want to buy it for ads.',
      'Because leaking it can cause discrimination, harm, or danger to the person.',
      'Because it enters the public domain after 50 years.',
      'Because it follows patent-office rules.'
    ],
    answer: 1,
    explain: 'Sensitive data needs the highest protection because exposure can lead to discrimination and serious personal harm.'
  },
  {
    id: 'qb2-5',
    stageId: 'personal-data',
    difficulty: 'hard',
    question: 'You use a random nickname in a gaming forum that cannot be linked to your real identity in any way. Is it personal information?',
    options: [
      'Yes, every nickname counts as sensitive personal data.',
      'It is automatically an international patent.',
      'No — a nickname that cannot identify a real living person is not personal data.',
      'It falls under trademark law.'
    ],
    answer: 2,
    explain: 'If a pseudonym cannot be linked to a real person, directly or by combination, it does not meet the definition of personal data.'
  },
  {
    id: 'qb2-6',
    stageId: 'personal-data',
    difficulty: 'hard',
    question: 'Which of these is biometric data of the highest sensitivity?',
    options: [
      'Iris scans, fingerprints, and DNA profiles.',
      'Your home zip code.',
      'The color of your bicycle.',
      'The location of a city park.'
    ],
    answer: 0,
    explain: 'Biometrics like fingerprints, face geometry, and iris scans are irreplaceable high-sensitivity identifiers.'
  },
  {
    id: 'qb2-7',
    stageId: 'personal-data',
    difficulty: 'creative',
    question: 'Your school builds a fitness app that tracks students\' health data. What is the most responsible way to handle it?',
    options: [
      'Post all measurements on the school board for competition.',
      'Sell the data to sportswear companies.',
      'Store everything in plain unencrypted files.',
      'Encrypt health fields, separate names from medical records, and get parents\' permission.'
    ],
    answer: 3,
    explain: 'Good practice: encryption, separating identity from health data, and verifiable parental consent.'
  },

  // ==========================================
  // privacy-rights: Privacy, Image Rights & Publicity Rights
  // ==========================================
  {
    id: 'qb2-8',
    stageId: 'privacy-rights',
    difficulty: 'easy',
    question: 'Which article of the Egyptian Constitution protects the privacy of citizens\' private lives?',
    options: [
      'Article 1 of the maritime code.',
      'Article 57.',
      'Article 20 of the traffic law.',
      'Article 70 of Creative Commons.'
    ],
    answer: 1,
    explain: 'Article 57 explicitly affirms that private life is inviolable and protected.'
  },
  {
    id: 'qb2-9',
    stageId: 'privacy-rights',
    difficulty: 'easy',
    question: 'Your right to stop others from photographing you or publishing your photo without permission is called:',
    options: [
      'Industrial invention rights.',
      'Creative Commons attribution.',
      'Image Rights (portrait rights).',
      'The formality doctrine.'
    ],
    answer: 2,
    explain: 'Image rights protect you against unauthorized photography or publishing of your likeness.'
  },
  {
    id: 'qb2-10',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'A student films a classmate in the school yard and posts it on TikTok as a prank, without asking. What is the legal view?',
    options: [
      'It violates the classmate\'s image rights and privacy because there was no consent.',
      'Fully fine — classmates are assumed to agree.',
      'It counts as an educational fair-use demo.',
      'It is automatically Creative Commons licensed.'
    ],
    answer: 0,
    explain: 'Friendship does not waive rights. Publishing someone\'s likeness without consent violates their image rights.'
  },
  {
    id: 'qb2-11',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'What right protects the money value of a celebrity\'s fame and face in ads?',
    options: [
      'Utility model rights.',
      'The non-formality doctrine.',
      'Moral rights.',
      'Publicity rights.'
    ],
    answer: 3,
    explain: 'Publicity rights protect the exclusive commercial value of a celebrity\'s recognizable likeness.'
  },
  {
    id: 'qb2-12',
    stageId: 'privacy-rights',
    difficulty: 'hard',
    question: 'Someone spreads a rumor that a person stole something, then posts their address, photo, and phone number "to warn the public". This is:',
    options: [
      'A great civic duty helping the police.',
      'Unlawful — a serious privacy violation and possible criminal defamation.',
      'A correct use of the opt-in system.',
      'Legal protection for nearby shops.'
    ],
    answer: 1,
    explain: 'Posting private details based on rumors (doxxing) is a grave privacy violation with criminal liability.'
  },
  {
    id: 'qb2-13',
    stageId: 'privacy-rights',
    difficulty: 'hard',
    question: 'When is an organization legally allowed to share your personal data with others without your consent?',
    options: [
      'To send you seasonal sale catalogs.',
      'When a coworker is just curious about your address.',
      'When the law requires it, to protect national security, or to save a life in an emergency.',
      'To sell your data in a public auction.'
    ],
    answer: 2,
    explain: 'Exceptions are strictly limited to legal mandates, life-threatening emergencies, national security, and court orders.'
  },
  {
    id: 'qb2-14',
    stageId: 'privacy-rights',
    difficulty: 'creative',
    question: 'You are writing a school newspaper profile of a star athlete. How do you respect privacy and image rights?',
    options: [
      'Get prior written consent from the athlete and their guardian before photos and publishing.',
      'Take secret photos at an off-campus gym and publish as a scoop.',
      'Publish their full report card and medical file.',
      'Edit their face with AI filters without asking.'
    ],
    answer: 0,
    explain: 'Ethical journalism needs affirmative written consent before taking and publishing someone\'s portrait.'
  },

  // ==========================================
  // corporate-privacy: Policies & Opt-in vs Opt-out
  // ==========================================
  {
    id: 'qb2-15',
    stageId: 'corporate-privacy',
    difficulty: 'easy',
    question: 'What document do companies publish to explain how they collect, use, and protect your data?',
    options: [
      'A patent specification.',
      'A Creative Commons certificate.',
      'A trademark deed.',
      'A privacy policy.'
    ],
    answer: 3,
    explain: 'A privacy policy states exactly how an organization handles and secures personal data.'
  },
  {
    id: 'qb2-16',
    stageId: 'corporate-privacy',
    difficulty: 'easy',
    question: 'A seal given by regulators to companies that prove they protect personal data properly is called:',
    options: [
      'A utility model patent.',
      'A privacy mark / data-protection license.',
      'A Creative Commons emblem.',
      'A non-commercial seal.'
    ],
    answer: 1,
    explain: 'A privacy mark shows the company passed audited data-protection checks.'
  },
  {
    id: 'qb2-17',
    stageId: 'corporate-privacy',
    difficulty: 'medium',
    question: 'In an "opt-in" system, when can a service start sending you promos or profiling your data?',
    options: [
      'Right when you install the app, no questions asked.',
      'Fifty years after you register.',
      'Only after you actively give explicit prior consent, like ticking an unchecked box.',
      'Whenever the promo contains a celebrity photo.'
    ],
    answer: 2,
    explain: 'Opt-in means: nothing happens until you actively say yes first.'
  },
  {
    id: 'qb2-18',
    stageId: 'corporate-privacy',
    difficulty: 'medium',
    question: 'How does an "opt-out" system work?',
    options: [
      'Data collection and promos run by default until you actively object and unsubscribe.',
      'All data collection is banned forever.',
      'You need a patent before opening an account.',
      'You must pay per page view.'
    ],
    answer: 0,
    explain: 'Opt-out is active by default — it continues until you expressly object.'
  },
  {
    id: 'qb2-19',
    stageId: 'corporate-privacy',
    difficulty: 'hard',
    question: 'A school keeps parents\' phone numbers in an encrypted database and refuses to share them with advertisers. This is:',
    options: [
      'A violation of the formality principle.',
      'An infringement of parents\' publicity rights.',
      'Blocking fair use for advertising.',
      'Fulfilling its legal duty to protect data and block unlawful sharing.'
    ],
    answer: 3,
    explain: 'Schools must safeguard family data and refuse unauthorized transfers to third parties.'
  },
  {
    id: 'qb2-20',
    stageId: 'corporate-privacy',
    difficulty: 'creative',
    question: 'You are building an online store checkout. How do you implement a true opt-in for the newsletter?',
    options: [
      'Pre-tick the box and force it to complete the purchase.',
      'Leave the newsletter box unticked by default and let the buyer choose freely.',
      'Hide the privacy policy on a broken page.',
      'Send daily promos with no unsubscribe link.'
    ],
    answer: 1,
    explain: 'Real opt-in = unchecked box, consent left entirely to the user\'s free choice.'
  },

  // ==========================================
  // industrial-property: Patents, Utility Models, Designs, Trademarks
  // ==========================================
  {
    id: 'qb2-21',
    stageId: 'industrial-property',
    difficulty: 'easy',
    question: 'Intellectual property splits into which two main branches?',
    options: [
      'Graphic design and video editing rights.',
      'Amateur and professional monopolies.',
      'Industrial property rights and copyrights.',
      'Open-data and server licenses.'
    ],
    answer: 2,
    explain: 'IP = industrial property (patents, designs, trademarks) + copyright (literature, art, software).'
  },
  {
    id: 'qb2-22',
    stageId: 'industrial-property',
    difficulty: 'easy',
    question: 'Which office examines and grants patents in Egypt?',
    options: [
      'The Egyptian Patent Office (Academy of Scientific Research).',
      'The Ministry of Tourism.',
      'The national postal authority.',
      'The food safety authority.'
    ],
    answer: 0,
    explain: 'The Egyptian Patent Office is the authority that examines and grants patents.'
  },
  {
    id: 'qb2-23',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'Which right protects a brand-new, non-obvious industrial invention, and for how long?',
    options: [
      'Trademarks, 5 years non-renewable.',
      'Copyrights, 10 years from publication.',
      'Moral rights, 7 years.',
      'Patent rights, 20 years from the application date.'
    ],
    answer: 3,
    explain: 'Patents protect breakthrough inventions for 20 years from filing.'
  },
  {
    id: 'qb2-24',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'Utility model rights protect:',
    options: [
      'Brand names and logos.',
      'Practical structural ideas and shape tweaks that improve how a product works.',
      'Theater scripts and poems.',
      'Songs and radio shows.'
    ],
    answer: 1,
    explain: 'Utility models (petty patents) cover practical mechanical and structural improvements.'
  },
  {
    id: 'qb2-25',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'How long does a utility model last under Egyptian law?',
    options: [
      '20 years like a full patent.',
      '50 years after death.',
      '7 years from application (up to 10 in countries like Japan).',
      'One year, renewed weekly.'
    ],
    answer: 2,
    explain: 'Utility models last 7 years in Egypt, versus 10 in Japan and some other systems.'
  },
  {
    id: 'qb2-26',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'A carmaker creates: a new hydrogen engine, a sculpted body shape, a silver star logo, and a better anti-slip pedal shape. What is the correct mapping?',
    options: [
      'Engine: patent | Body: industrial design | Logo: trademark | Pedal: utility model.',
      'Engine: copyright | Body: CC | Logo: patent | Pedal: trademark.',
      'All four in one inseparable patent.',
      'Engine: trademark | Body: patent | Logo: utility model | Pedal: copyright.'
    ],
    answer: 0,
    explain: 'Invention = patent; styling = design; logo = trademark; functional shape tweak = utility model.'
  },
  {
    id: 'qb2-27',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'Why are trademarks special when it comes to duration?',
    options: [
      'They expire after 2 years into the public domain.',
      'They follow the founder\'s lifetime.',
      'They need no registration (non-formality).',
      'They last 10 years but can be renewed forever in 10-year blocks.'
    ],
    answer: 3,
    explain: 'Trademarks are the one industrial right that can live indefinitely through renewal.'
  },
  {
    id: 'qb2-28',
    stageId: 'industrial-property',
    difficulty: 'creative',
    question: 'You design a phone accessory with a clever folding stand plus your own brand badge. How do you protect it?',
    options: [
      'Post a photo saying "do not steal".',
      'File a utility model / design for the stand mechanism and register a trademark for the badge.',
      'Rely on non-formality for hardware.',
      'Give ownership to the first factory you contact.'
    ],
    answer: 1,
    explain: 'Industrial property needs the formality principle: file and register, or you have no rights.'
  },
  {
    id: 'qb2-50',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'What is the core difference between the formality principle (industrial property) and non-formality (copyright)?',
    options: [
      'Industrial property starts automatically; copyright needs parliament approval.',
      'Both need a cash deposit in the central bank.',
      'Industrial property needs a formal application and registration; copyright starts automatically at creation.',
      'There is no legal difference at all.'
    ],
    answer: 2,
    explain: 'Formality = file and register first. Non-formality = rights exist from the moment of creation.'
  },

  // ==========================================
  // copyrights: Moral / Economic / Neighboring Rights
  // ==========================================
  {
    id: 'qb2-29',
    stageId: 'copyrights',
    difficulty: 'easy',
    question: 'What rule decides when copyright protection starts?',
    options: [
      'Non-formality: protection starts automatically at creation.',
      'The formality principle (must file first).',
      'Yearly fees to the chamber of commerce.',
      'Assignment to the ministry of education.'
    ],
    answer: 0,
    explain: 'Copyright vests automatically the instant an original work is fixed — no filing needed.'
  },
  {
    id: 'qb2-30',
    stageId: 'copyrights',
    difficulty: 'easy',
    question: 'Which of these does copyright protect?',
    options: [
      'Bulk sugar, rice, and grain.',
      'Random phone numbers.',
      'Daily temperature forecasts.',
      'Novels, paintings, music, and software.'
    ],
    answer: 3,
    explain: 'Copyright covers original works of the mind: literature, art, music, film, code.'
  },
  {
    id: 'qb2-31',
    stageId: 'copyrights',
    difficulty: 'medium',
    question: 'What are an author\'s "moral rights" and how long do they last?',
    options: [
      'The right to sell paperbacks for profit.',
      'Attribution plus integrity; perpetual, inalienable, cannot be sold or waived.',
      'Free use of municipal printing presses.',
      'Commercial rights expiring one year after publication.'
    ],
    answer: 1,
    explain: 'Moral rights stay with the creator forever and can never be transferred.'
  },
  {
    id: 'qb2-32',
    stageId: 'copyrights',
    difficulty: 'medium',
    question: 'How long do economic rights last under Egyptian copyright law?',
    options: [
      'Exactly 20 years from release.',
      '10 years, renewable once.',
      'The author\'s life plus 50 years after death (70 internationally).',
      'They end the day the author dies.'
    ],
    answer: 2,
    explain: 'In Egypt: life + 50 years for heirs. Internationally often life + 70.'
  },
  {
    id: 'qb2-33',
    stageId: 'copyrights',
    difficulty: 'hard',
    question: 'Taha Hussein died in 1973. What is the status of his books in Egypt today (50+ years later)?',
    options: [
      'Economic rights expired into the public domain — free to reprint — while moral attribution stays forever.',
      'Still under exclusive publisher monopoly for 200 years.',
      'Transferred to the patent bureau.',
      'Only readable with a Creative Commons paid permit.'
    ],
    answer: 0,
    explain: 'After 50 years post-mortem in Egypt, works enter the public domain; moral credit remains.'
  },
  {
    id: 'qb2-34',
    stageId: 'copyrights',
    difficulty: 'hard',
    question: 'Who holds "neighboring rights"?',
    options: [
      'Neighbors living next to the author.',
      'Shopkeepers near publishing houses.',
      'Only OS programmers.',
      'Performers (actors, singers, musicians), record producers, and broadcasters.'
    ],
    answer: 3,
    explain: 'Neighboring rights go to those who bring works to the public: performers, producers, broadcasters.'
  },
  {
    id: 'qb2-35',
    stageId: 'copyrights',
    difficulty: 'creative',
    question: 'Your school drama club wants to perform Shakespeare with a modern orchestra recording. How do you handle rights?',
    options: [
      'Shakespeare is patented; orchestra music is always free.',
      'Shakespeare\'s text is public domain and free, but the modern recording has neighboring rights — get a license or use a royalty-free version.',
      'Both are banned from school performances.',
      'Sell tickets commercially without asking anyone.'
    ],
    answer: 1,
    explain: 'Old texts are free; new performances of them are separately protected.'
  },
  {
    id: 'qb2-51',
    stageId: 'copyrights',
    difficulty: 'creative',
    question: 'Why is downloading pirated music for "personal listening only" still infringement?',
    options: [
      'Personal downloads are only allowed on holidays.',
      'Slow internet makes it illegal.',
      'Because the law bans downloading commercial works you know were uploaded illegally.',
      'The law punishes people who buy originals.'
    ],
    answer: 2,
    explain: 'Private-use exceptions do not cover knowingly downloading pirated uploads.'
  },

  // ==========================================
  // fair-use-quotation: Fair Use & the 5 Quotation Rules
  // ==========================================
  {
    id: 'qb2-36',
    stageId: 'fair-use-quotation',
    difficulty: 'easy',
    question: 'What is the main goal of copyright law?',
    options: [
      'Balancing fair use for education and culture with protecting authors.',
      'Stopping students from reading books.',
      'Letting governments seize all art for free.',
      'Forcing writers into factory work.'
    ],
    answer: 0,
    explain: 'Copyright balances two things: creators earn a living, and culture and education keep growing.'
  },
  {
    id: 'qb2-37',
    stageId: 'fair-use-quotation',
    difficulty: 'easy',
    question: 'Which of these is allowed fair use with no license needed?',
    options: [
      'Printing 1,000 pirate novels for the black market.',
      'Downloading a paid film from a piracy site.',
      'Selling bootleg concert discs.',
      'Photocopying a textbook chapter for classroom teaching.'
    ],
    answer: 3,
    explain: 'Classroom teaching is a classic statutory fair-use exception.'
  },
  {
    id: 'qb2-38',
    stageId: 'fair-use-quotation',
    difficulty: 'medium',
    question: 'You buy a music CD, burn copies, and hand them to classmates as gifts. Is this "private use"?',
    options: [
      'Yes, gifts are always fine.',
      'No — handing copies to classmates goes beyond personal domestic use and infringes copyright.',
      'Yes, because you bought the original.',
      'Yes, same school means same household.'
    ],
    answer: 1,
    explain: 'Private use is strictly you + your household. Distributing to friends breaks that limit.'
  },
  {
    id: 'qb2-39',
    stageId: 'fair-use-quotation',
    difficulty: 'medium',
    question: 'What does "subordination" mean in quotation rules?',
    options: [
      'Copying a whole book and adding your name.',
      'Paying all the author\'s heirs first.',
      'Your own writing stays primary; the quote is secondary support, not the main content.',
      'Needing every classmate\'s approval.'
    ],
    answer: 2,
    explain: 'Your work leads; the quote only supports it as evidence.'
  },
  {
    id: 'qb2-40',
    stageId: 'fair-use-quotation',
    difficulty: 'hard',
    question: 'Someone translates a Spanish novel into Arabic and sells it without permission, claiming "different language = new work". Verdict?',
    options: [
      'Direct infringement — translation rights belong exclusively to the original author.',
      'Fair use — translation is a brand-new creation.',
      'Covered by Creative Commons education rules.',
      'Legal because the author lives abroad.'
    ],
    answer: 0,
    explain: 'Translation is an exclusive economic right. Translating + publishing without permission is piracy.'
  },
  {
    id: 'qb2-41',
    stageId: 'fair-use-quotation',
    difficulty: 'hard',
    question: 'Which of these belongs to the 5 mandatory quotation rules?',
    options: [
      'Changing words to hide the source.',
      'Making quotes at least 95% of your paper.',
      'Quoting only pages with no author name.',
      'Not altering the text, putting it in quotes, and citing author + source.'
    ],
    answer: 3,
    explain: 'The five: subordination, necessity, quotation marks, attribution, no alteration.'
  },
  {
    id: 'qb2-42',
    stageId: 'fair-use-quotation',
    difficulty: 'creative',
    question: 'When can your school festival legally perform a commercial play script for free, with no royalties?',
    options: [
      'When tickets fund teacher vacations.',
      'When entry is completely free and student actors get zero pay.',
      'When it is recorded and sold to TV.',
      'When the audience pays a small fee to actors.'
    ],
    answer: 1,
    explain: 'Non-profit performance exception needs two zeros: zero admission, zero performer pay.'
  },

  // ==========================================
  // creative-commons: CC Badges & Licenses
  // ==========================================
  {
    id: 'qb2-43',
    stageId: 'creative-commons',
    difficulty: 'easy',
    question: 'What is Creative Commons mainly for?',
    options: [
      'Removing constitutional privacy rights.',
      'Fining companies in court.',
      'Standard licenses letting creators share work while stating reuse terms up front.',
      'Blocking books on the internet.'
    ],
    answer: 2,
    explain: 'CC is a flexible licensing system that makes sharing and reuse simple and clear.'
  },
  {
    id: 'qb2-44',
    stageId: 'creative-commons',
    difficulty: 'easy',
    question: 'Which CC badge appears in every CC license?',
    options: [
      'Attribution (BY).',
      'Non-commercial (NC).',
      'No derivatives (ND).',
      'Share-alike (SA).'
    ],
    answer: 0,
    explain: 'BY (credit the creator) is mandatory in all six standard CC licenses.'
  },
  {
    id: 'qb2-45',
    stageId: 'creative-commons',
    difficulty: 'medium',
    question: 'What does the "NC" (non-commercial) condition forbid?',
    options: [
      'Mentioning the author\'s name.',
      'Adapting while selling in stores.',
      'Print-only magazine publication.',
      'Using the work or derivatives for commercial profit.'
    ],
    answer: 3,
    explain: 'NC bans commercial exploitation and monetization.'
  },
  {
    id: 'qb2-46',
    stageId: 'creative-commons',
    difficulty: 'medium',
    question: 'The "ND" (no derivatives) badge means users must:',
    options: [
      'Change the work freely with new author names.',
      'Share it verbatim only — no remixes, edits, or adaptations.',
      'Translate it into ten languages for sale.',
      'Delete the photographer\'s name first.'
    ],
    answer: 1,
    explain: 'ND = as-is sharing only. No derivatives whatsoever.'
  },
  {
    id: 'qb2-47',
    stageId: 'creative-commons',
    difficulty: 'hard',
    question: 'You remix a work licensed "Share-Alike" (SA). What must you do with your remix?',
    options: [
      'Register it as an industrial patent.',
      'Sell it only to corporations.',
      'Release it under the exact same CC license combination.',
      'Block everyone else from seeing it.'
    ],
    answer: 2,
    explain: 'SA is viral: derivatives must carry identical license terms.'
  },
  {
    id: 'qb2-48',
    stageId: 'creative-commons',
    difficulty: 'hard',
    question: 'Which CC license is the most restrictive?',
    options: [
      'CC BY-NC-ND (credit required, no commercial use, no changes).',
      'CC BY (just credit, everything else allowed).',
      'CC BY-SA (commercial + remixes allowed with same license).',
      'CC0 (full public-domain waiver).'
    ],
    answer: 0,
    explain: 'BY-NC-ND blocks both money-making and any alteration — the tightest combination.'
  },
  {
    id: 'qb2-49',
    stageId: 'creative-commons',
    difficulty: 'creative',
    question: 'An artist posts an infographic as "CC BY-SA". You add school branding and publish it in the newsletter. What must you do?',
    options: [
      'Register it as your own trademark.',
      'Erase the artist\'s signature.',
      'Block the school from distributing it.',
      'Credit the artist and release your version under the same CC BY-SA license.'
    ],
    answer: 3,
    explain: 'BY-SA needs two things: attribution + identical license on the derivative.'
  },
  {
    id: 'qb2-52',
    stageId: 'personal-data',
    difficulty: 'creative',
    question: 'What single principle connects data protection, IP, and cyber ethics in a student\'s daily life?',
    options: [
      'Post everything online unless someone complains.',
      'Respect people\'s privacy and data, never share photos without consent, credit creators, and follow license terms.',
      'Ignore IP rights — tech belongs to everyone.',
      'Ignore passwords and privacy policies.'
    ],
    answer: 1,
    explain: 'One foundation: respect human dignity, honor creativity, and practice responsible digital citizenship.'
  }
];

if (typeof window !== 'undefined') {
  window.LECT2_QUIZBANK_EN = LECT2_QUIZBANK_EN;
}