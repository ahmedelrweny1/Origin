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
      'Information about a living person that counts only if it includes an official ID number.',
      'Only sensitive data like religion or health that is already published online.',
      'Information about a living person that can identify them directly or when combined with other data.',
      'Anonymous statistics that can never identify anyone even when combined.'
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
      'Phone number.',
      'Fingerprint scan.',
      'Passport number.'
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
      'General personal data that needs only basic protection measures.',
      'Sensitive data like religion or health that needs special consent.',
      'Biometric data such as fingerprints that can never be replaced.',
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
      'Because sensitive data is harder to store on school computers.',
      'Because leaking it can cause discrimination, harm, or danger to the person.',
      'Because companies pay higher prices for sensitive data files.',
      'Because sensitive data loses legal protection after a few years.'
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
      'Yes — every nickname and avatar always counts as personal data.',
      'Yes — it counts as sensitive data because it shows your hobbies.',
      'No — a nickname that cannot identify a real living person is not personal data.',
      'Only if you have used the same nickname for over a year.'
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
      'Home address, phone number, and email address.',
      'Full name, gender, and date of birth.',
      'School grades, attendance dates, and class number.'
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
      'Keep health data in a shared sheet, limit access to coaches, and inform students.',
      'Store names together with health data under one password for office staff.',
      'Collect only weight data, delete names monthly, and skip parental consent.',
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
      'Article 56.',
      'Article 57.',
      'Article 58.',
      'Article 59.'
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
      'Publicity rights (commercial value of fame).',
      'Privacy rights (protection of private life).',
      'Image Rights (portrait rights).',
      'Copyright in photographic works.'
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
      'Allowed because filming at school counts as classroom fair use.',
      'Allowed if the video gets few views and is deleted in a week.',
      'Allowed because friendship implies consent to share photos.'
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
      'Image rights (control over one\'s likeness).',
      'Moral rights (attribution and integrity).',
      'Neighboring rights (performers and broadcasters).',
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
      'Lawful because warning the public justifies sharing private details.',
      'Unlawful — a serious privacy violation and possible criminal defamation.',
      'A minor school violation that needs only a quick apology.',
      'Lawful consent because the address was already partly known.'
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
      'When a company wants to improve ads or offer seasonal discounts.',
      'When a relative or coworker asks out of curiosity or concern.',
      'When the law requires it, to protect national security, or to save a life in an emergency.',
      'When the data was already posted once on social media.'
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
      'Photograph the athlete in public and publish quickly without asking.',
      'Publish the athlete\'s grades and health file to complete the profile.',
      'Reuse last year\'s photos with AI edits and no new permission.'
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
      'A terms-of-service agreement.',
      'A cookie consent notice.',
      'A data-breach notification letter.',
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
      'A trademark registration certificate.',
      'A privacy mark / data-protection license.',
      'A Creative Commons license badge.',
      'An ISO quality management certificate.'
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
      'As soon as you install the app, with consent assumed by default.',
      'After you receive the first promo, unless you complain quickly.',
      'Only after you actively give explicit prior consent, like ticking an unchecked box.',
      'Whenever you leave a pre-ticked box unchanged at signup.'
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
      'Nothing is collected until you tick a box to allow it first.',
      'Promos stop permanently after you ignore the first message.',
      'You need court approval before any data can be stored.'
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
      'Violating advertisers\' right to fair use of school data.',
      'Breaching parents\' publicity rights by hiding their names.',
      'Ignoring the formality rule for registering phone numbers.',
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
      'Pre-tick the newsletter box but add a small unsubscribe link.',
      'Leave the newsletter box unticked by default and let the buyer choose freely.',
      'Require newsletter signup as a mandatory step to finish purchase.',
      'Subscribe the buyer automatically until they actively object.'
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
      'Patent rights and trademark rights.',
      'Moral rights and economic rights.',
      'Industrial property rights and copyrights.',
      'Public domain and open-license collections.'
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
      'The Egyptian Trademark Office (Commercial Registry).',
      'The National Library and Archives Authority.',
      'The Consumer Protection Agency for Markets.'
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
      'Patent rights, 10 years from the application date.',
      'Patent rights, life plus 50 years after death.',
      'Trademark rights, 10 years renewable indefinitely.',
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
      'Brand names and logos that distinguish a company.',
      'Practical structural ideas and shape tweaks that improve how a product works.',
      'Novels and songs as original artistic works.',
      'New chemical processes as breakthrough inventions.'
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
      '20 years from application, like a full patent.',
      '10 years renewable forever in 10-year blocks.',
      '7 years from application (up to 10 in countries like Japan).',
      'Life plus 50 years after the inventor\'s death.'
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
      'Engine: utility model | Body: trademark | Logo: patent | Pedal: design.',
      'Engine: trademark | Body: patent | Logo: design | Pedal: copyright.',
      'Engine: design | Body: patent | Logo: utility model | Pedal: trademark.'
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
      'They last 20 years from filing and then expire permanently.',
      'They last for the founder\'s life plus 50 years.',
      'They need no registration and start automatically at first use.',
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
      'Post photos online with a watermark and rely on automatic rights.',
      'File a utility model / design for the stand mechanism and register a trademark for the badge.',
      'Keep the design secret and trust the first factory to respect it.',
      'Register only a trademark and assume it covers the mechanism too.'
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
      'Both rights need formal registration before any protection starts.',
      'Both rights start automatically with no paperwork at all.',
      'Industrial property needs a formal application and registration; copyright starts automatically at creation.',
      'Copyright needs a patent filing while industrial rights are automatic.'
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
      'Formality: protection starts only after official registration.',
      'Renewal: protection needs yearly fees to stay valid.',
      'Deposit: protection starts after submitting copies to a bank.'
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
      'Ideas, facts, procedures, and official news.',
      'Names, slogans, logos, and brand colors.',
      'Phone numbers, temperatures, scores, and zip codes.',
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
      'Commercial exploitation rights; transferable, lasting life plus 50 years.',
      'Attribution plus integrity; perpetual, inalienable, cannot be sold or waived.',
      'Neighboring rights for performers; lasting 50 years from performance.',
      'Trademark renewal rights; lasting 10 years with indefinite renewal.'
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
      '20 years from the filing date, like a patent.',
      '10 years renewable forever, like a trademark.',
      'The author\'s life plus 50 years after death (70 internationally).',
      '7 years from creation, like a utility model.'
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
      'Still under exclusive protection for heirs because Egypt uses 70 years, not 50.',
      'Moved to the patent office for a fresh 20-year term after copyright ends.',
      'Locked behind a paid Creative Commons permit before anyone may reprint it.'
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
      'Authors, poets, painters, and novelists.',
      'Heirs, publishers, printers, and booksellers.',
      'Trademark owners, patent holders, and designers.',
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
      'Both the old text and the new recording are free because Shakespeare died long ago.',
      'Shakespeare\'s text is public domain and free, but the modern recording has neighboring rights — get a license or use a royalty-free version.',
      'Both need the heirs\' permission because any use of classics stays restricted.',
      'The text is free and you may sell the orchestra recording commercially without limits.'
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
      'Because private listening always allows any download source.',
      'Because buying one original allows sharing copies with friends.',
      'Because the law bans downloading commercial works you know were uploaded illegally.',
      'Because only uploading pirated files is banned, not downloading them.'
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
      'Giving publishers permanent control over all reading and lending.',
      'Blocking schools from quoting any text without paying fees.',
      'Letting the state use any artwork for free without credit.'
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
      'Copying a full textbook for every student to avoid buying it.',
      'Downloading a pirated film to show for weekend entertainment.',
      'Selling printed song lyrics at the school festival for profit.',
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
      'Yes — buying the original allows gifts to any number of friends.',
      'No — handing copies to classmates goes beyond personal domestic use and infringes copyright.',
      'Yes — classmates count as household for private-use rules.',
      'Yes — gifts without profit are always exempt from copyright.'
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
      'Your quote must dominate and your own words stay minimal for proof.',
      'You must copy long passages to prove you really read the source.',
      'Your own writing stays primary; the quote is secondary support, not the main content.',
      'You must place long quotes first and add comments only at the end.'
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
      'Fair use — changing language creates a brand-new independent work.',
      'Legal after 7 years because translation rights expire quickly.',
      'Legal if the author lives abroad and sells in another language.'
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
      'Copying long passages without marks as long as you list the source.',
      'Translating freely and claiming the translation as your own words.',
      'Quoting anonymous pages without author or title to stay neutral.',
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
      'When tickets are cheap and profits fund school activities.',
      'When entry is completely free and student actors get zero pay.',
      'When actors get small fees but entry stays free for students.',
      'When the play is recorded and shared only within the school.'
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
      'Automatic waivers that send every work straight to the public domain.',
      'Paid permits for commercial broadcasting of music and films.',
      'Standard licenses letting creators share work while stating reuse terms up front.',
      'Privacy seals for companies that handle personal data safely.'
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
      'Crediting the author by name in publications.',
      'Sharing copies verbatim for classroom teaching.',
      'Adapting the work for non-profit school projects.',
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
      'Translate and adapt it freely with proper credit.',
      'Share it verbatim only — no remixes, edits, or adaptations.',
      'Remix it for commercial ads once the author is credited.',
      'Share adaptations under the same license terms.'
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
      'Release it under any looser license you prefer.',
      'Credit the author once and keep your remix all rights reserved.',
      'Release it under the exact same CC license combination.',
      'Ask for payment before allowing others to view it.'
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
      'Credit the artist once but keep your version all rights reserved.',
      'Pay the artist a fee and drop the share-alike requirement.',
      'Use the poster in print only and forbid digital copies.',
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
      'Post photos freely online and delete only if someone complains.',
      'Respect people\'s privacy and data, never share photos without consent, credit creators, and follow license terms.',
      'Reuse any text without credit because school use covers everything.',
      'Skip passwords and privacy settings to save time and effort.'
    ],
    answer: 1,
    explain: 'One foundation: respect human dignity, honor creativity, and practice responsible digital citizenship.'
  }
];

if (typeof window !== 'undefined') {
  window.LECT2_QUIZBANK_EN = LECT2_QUIZBANK_EN;
}