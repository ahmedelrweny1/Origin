/* ============================================================
   Unit 1: Lecture 2 (Personal Information & Intellectual Property)
   Stage Content & Final Challenge in English
   ============================================================ */

const LECT2_STAGES_EN = [
  {
    id: "personal-data",
    category: "Part 1: Data Protection & Privacy",
    title: "Personal Information & Identification Codes",
    tagline: "What is your digital footprint? Distinguishing between basic, ID codes, and sensitive data.",
    glyph: "🪪",
    image: "assets/images/personal_data_vault.jpg",
    visualCaption: "Identity Vault: The four basic items, sovereign identification codes, and special care-required sensitive data.",
    interactiveType: "data_classifier",
    story: [
      "In the age of pervasive digital networks, your personal data is more valuable than gold. The <strong>Act on the Protection of Personal Information</strong> defines personal data as: 'Information related to a living person, including information that can be combined with other data to identify a specific individual.'",
      "<strong>1. The Four Basic Items:</strong> The bedrock of legal identity verification, comprising specifically: <em>Name, Address, Date of Birth, and Gender</em>.",
      "<strong>2. Personal Identification Codes:</strong> Unique numeric or alphanumeric sequences officially assigned by governments, such as: <em>National ID / My Number, Passport Numbers, and Driver's License Numbers</em>. Even though they appear as bare numbers, they constitute sovereign personal data because they point directly to one individual.",
      "<strong>3. Special Care-Required Personal Information (Sensitive Data):</strong> High-risk information requiring extraordinary protection because unauthorized exposure may cause prejudice, discrimination, or severe harm. This includes: <em>Race, creed, religion, political opinion, criminal record, medical history, economic status, and biometric data</em> (such as iris scans and fingerprints)."
    ],
    takeaway: "Personal info identifies a living individual directly or through combination ⬝ The Four Basic Items: Name, Address, Date of Birth, Gender ⬝ Biometrics and health records require supreme care.",
    funFact: "An iris scan evaluates more than 240 unique biometric reference points, compared to roughly 40 points in a fingerprint, making it one of the most foolproof sensitive identifiers in existence!",
    quiz: {
      question: "Which of the following groupings represents the 'Four Basic Items' specified in data protection law for identity verification?",
      options: [
        "Name, Address, Date of Birth, and Gender",
        "Bank account number, Phone number, and Email",
        "Fingerprint data, Blood type, and Height",
        "Job title, Company name, and Years of experience"
      ],
      answer: 0,
      explain: "The Four Basic Items universally designated for fundamental identity verification are: Name, Address, Date of Birth, and Gender."
    }
  },
  {
    id: "privacy-rights",
    category: "Part 1: Data Protection & Privacy",
    title: "Right to Privacy, Image Rights & Publicity Rights",
    tagline: "Constitutional armor behind the screen: When is photographing banned, and when is data disclosure permitted?",
    glyph: "🛡️",
    image: "assets/images/privacy_image_rights.jpg",
    visualCaption: "Legal Armor: The Right to Privacy and Image Rights shield private life from cameras, while Publicity Rights guard the commercial value of celebrities.",
    interactiveType: "privacy_rights_sim",
    story: [
      "Modern constitutions (such as <strong>Article 57 of the Egyptian Constitution</strong>) explicitly safeguard individual private life. Rights concerning human personhood fall into three vital pillars:",
      "<strong>1. Right to Privacy:</strong> The fundamental constitutional right of an individual to protect personal information, domestic peace, and confidential matters that they do not wish others to know without lawful justification.",
      "<strong>2. Image Rights (Portrait Rights):</strong> The right of an individual to prevent others from photographing, recording, or using their face and likeness without prior consent. Even if the person is a close friend or family member, publishing their face on social media without permission violates their image rights.",
      "<strong>3. Publicity Rights:</strong> The right that protects the economic and commercial value inherent in the likeness, name, and reputation of celebrities, athletes, and public figures. For instance, printing a famous footballer's portrait onto t-shirts and selling them for profit without an authorized license constitutes a direct infringement.",
      "<strong>Permissible Third-Party Disclosures Without Consent:</strong> The law establishes strict exceptions where personal information can be transferred without prior consent: <em>[1] When grounded in statutory laws and regulations, [2] When necessary to preserve national security and vital public interest, [3] When indispensable to protect human life, physical health, or property in emergencies, [4] When fulfilling judicial rulings or subpoenas from investigative authorities</em>."
    ],
    takeaway: "Privacy is a constitutional right ⬝ Never photograph or publish anyone's image without consent ⬝ Commercializing celebrity likenesses violates Publicity Rights ⬝ Disclosures without consent are restricted to statutory law and life preservation.",
    funFact: "The legal doctrine of 'Right of Publicity' originated in 1953 in the landmark American case Haelan Laboratories v. Topps Chewing Gum over baseball trading cards!",
    quiz: {
      question: "An entrepreneur photographs a renowned singer at a public concert, prints the photo onto custom hoodies, and sells them online for commercial profit. This violates:",
      options: [
        "Publicity Rights (economic likeness exploitation)",
        "Creative Commons Non-Commercial license",
        "Utility Model structural rights",
        "The Formality Principle in mechanical design"
      ],
      answer: 0,
      explain: "Publicity Rights protect the exclusive economic interests of celebrities and public figures from unauthorized commercial exploitation of their likeness and identity."
    }
  },
  {
    id: "corporate-privacy",
    category: "Part 1: Data Protection & Privacy",
    title: "Corporate Protection & Consent Systems",
    tagline: "Privacy policies, certification seals, and the showdown between Opt-in and Opt-out regimes.",
    glyph: "🏢",
    image: "assets/images/corporate_data_policy.jpg",
    visualCaption: "Enterprise Data Governance: Transparent privacy disclosures, certification seals, and user-empowered consent switches (Opt-In vs Opt-Out).",
    interactiveType: "consent_opt_sim",
    story: [
      "When using mobile applications and online platforms, your data is governed by stringent enterprise compliance standards:",
      "<strong>1. Privacy Policy:</strong> A legally binding declaration published by corporations detailing what data is collected, the computational purposes of processing, retention periods, security controls, and third-party recipients.",
      "<strong>2. Privacy Mark / Regulatory License:</strong> A formal certification awarded by national data protection authorities to companies that successfully verify robust administrative and technical defenses conforming to data protection statutes.",
      "<strong>3. Opt-in System (Prior Approval):</strong> A user-first model where the service provider is strictly forbidden from collecting personal data or sending marketing material unless the user gives affirmative, explicit prior consent (e.g., promotional checkboxes left blank by default).",
      "<strong>4. Opt-out System (Objection Regime):</strong> A model where data processing or auxiliary services proceed by default until the user takes proactive action to object and demand cessation (e.g., unsubscribing from a default mailer)."
    ],
    takeaway: "Enterprises must publish clear Privacy Policies ⬝ Opt-in means: 'Do nothing until I actively say yes' ⬝ Opt-out means: 'Active by default until I object and stop you'.",
    funFact: "Global privacy frameworks like GDPR in Europe and the Egyptian Personal Data Protection Law mandate Opt-in for all sensitive profiling, with non-compliance penalties reaching millions in fines!",
    quiz: {
      question: "A system in which a digital provider cannot collect user data or deliver promotional services without explicit prior consent from the individual is known as:",
      options: [
        "Opt-in System (Prior Approval)",
        "Opt-out System (Objection Scheme)",
        "Formality Principle",
        "Neighboring Transmission Rights"
      ],
      answer: 0,
      explain: "The Opt-in system mandates that affirmative prior consent must be secured before any personal data processing or optional marketing commences."
    }
  },
  {
    id: "industrial-property",
    category: "Part 2: Intellectual & Industrial Property",
    title: "Intellectual Property & Industrial Property Rights",
    tagline: "The Formality Principle and the four pillars: Patents, Utility Models, Industrial Designs, and Trademarks.",
    glyph: "⚙️",
    image: "assets/images/industrial_property_patents.jpg",
    visualCaption: "Industrial Property Blueprint: Patents protect breakthrough inventions, Utility Models protect practical structures, Designs protect appearance, and Trademarks protect brand identity.",
    interactiveType: "industrial_prop_matrix",
    story: [
      "<strong>Intellectual Property Rights:</strong> The umbrella legal framework protecting creations resulting from human mental ingenuity. It bifurcates into two broad territories: <em>Industrial Property Rights</em> (industry and commerce) and <em>Copyrights</em> (arts, culture, and software).",
      "Industrial property is governed by the <strong>Formality Principle</strong>: Rights do not arise automatically. Instead, creators must formally file an application and secure registration with the competent authority (such as the Patent Office) before legal protection takes effect.",
      "<strong>The Four Pillars of Industrial Property:</strong>",
      "• <strong>1. Patent Rights:</strong> Protect highly novel, non-obvious technological inventions applicable in industry (e.g., a groundbreaking pharmaceutical compound or quantum microchip architecture). Duration: <em>20 years from the date of application</em>.",
      "• <strong>2. Utility Model Rights:</strong> Often called 'petty patents', these protect practical structural modifications or shape ideas that enhance the functionality of existing products (e.g., a novel vortex baffle improving water drainage in washing machines). Duration: <em>7 years in Egypt / 10 years internationally</em>.",
      "• <strong>3. Industrial Design Rights:</strong> Protect the aesthetic exterior appearance, contours, patterns, and ornamentation of an industrial product (e.g., the sleek chassis styling of a sports car or smartphone silhouette). Duration: <em>10 years (renewable for 5 additional years to total 15)</em>.",
      "• <strong>4. Trademark Rights:</strong> Protect distinctive brand names, logos, typographic symbols, and audio cues distinguishing goods or services in the marketplace. Duration: <em>10 years from registration, indefinitely renewable in 10-year increments</em>."
    ],
    takeaway: "Industrial Property requires registration (Formality Principle) ⬝ Patents = 20 years ⬝ Utility Models = 7 to 10 years ⬝ Designs = 10+5 years ⬝ Trademarks = 10 years renewable indefinitely.",
    funFact: "Historic trademarks like Coca-Cola and Mercedes-Benz have been protected for well over a century because trademark registrations can be renewed every 10 years without limitation!",
    quiz: {
      question: "An engineer devises an ingenious shape alteration to the drainage valve of a household washing machine that speeds up water evacuation without requiring an entirely new scientific breakthrough. Which right protects this structural idea?",
      options: [
        "Utility Model Rights (practical product structure/shape)",
        "Copyrights (artistic creations)",
        "Trademark Rights (brand logo distinction)",
        "Moral Rights of the Creator"
      ],
      answer: 0,
      explain: "Utility Model Rights protect practical technical modifications and shape improvements to the structure and functional mechanics of existing industrial products."
    }
  },
  {
    id: "copyrights",
    category: "Part 3: Copyrights & Information Utilization",
    title: "Copyrights & Neighboring Rights",
    tagline: "The automatic Non-Formality Principle: Protecting authors, artists, and software coders from the instant of creation.",
    glyph: "📜",
    image: "assets/images/copyright_creators.jpg",
    visualCaption: "Creative Legacy: Perpetual moral rights that can never be forfeited, economic exploitation rights lasting decades past death, and neighboring rights for performers and broadcasters.",
    interactiveType: "copyright_lifespan_calc",
    story: [
      "In sharp contrast to industrial property, <strong>Copyright</strong> is governed by the <strong>Non-Formality Principle</strong>: Legal protection springs into existence automatically the exact instant an original work is authored and fixed in tangible expression, without requiring registration, official stamps, or fees. It protects creators regardless of whether they are amateur or professional, adult or minor.",
      "Scope of protected works: Novels, poetry, theatrical scripts, musical scores, paintings, photographs, motion pictures, architectural blueprints, and <em>computer programs and software code</em>.",
      "<strong>The Dual Bundle of Rights:</strong>",
      "• <strong>Moral Rights (Inalienable):</strong> Rights preserving the author's sacred personal bond with the work. They are perpetual, non-transferable, and cannot be forfeited. They include: <em>the right of attribution (name credit)</em> and <em>the right of integrity (prohibiting unauthorized modification, distortion, or mutilation)</em>.",
      "• <strong>Economic / Property Rights:</strong> Rights enabling commercial exploitation, including reproduction, public performance, broadcast, distribution, translation, and adaptation. These rights can be licensed or sold to publishers.",
      "<strong>Duration & Public Domain:</strong> Economic rights persist for the author's entire lifetime plus <em>50 years after death under Egyptian law (70 years under international/Japanese standards)</em>. Upon expiration, works enter the 'Public Domain' and can be freely utilized by anyone without permission.",
      "<strong>Neighboring Rights:</strong> Granted to those who interpret and transmit copyrighted works to the public: <em>[1] Performers (singers, actors, musicians), [2] Phonogram / Audio Record Producers, [3] Broadcasting Organizations</em>."
    ],
    takeaway: "Copyright protection is automatic upon creation (Non-Formality) ⬝ Moral rights are eternal and inalienable ⬝ Economic rights last lifetime + 50/70 years ⬝ Modern performers hold Neighboring Rights over performances of public domain works.",
    funFact: "While Beethoven's 5th Symphony is in the public domain because the composer died over 70 years ago, a modern orchestra's recorded performance is protected by Neighboring Rights and cannot be copied without permission!",
    quiz: {
      question: "When does copyright protection legally attach to a student's newly programmed computer application or digital artwork?",
      options: [
        "The moment the work is created and fixed, automatically without registration (Non-Formality Principle)",
        "Only after submitting official deposit forms to the Patent Office and paying registration fees",
        "When the creator attains legal age (18 years)",
        "Fifty years following commercial publication"
      ],
      answer: 0,
      explain: "Copyright is governed by the Non-Formality Principle; protection attaches spontaneously at the instant of creative expression, regardless of age or official registration."
    }
  },
  {
    id: "fair-use-quotation",
    category: "Part 3: Copyrights & Information Utilization",
    title: "Fair Use & Rules of Legal Quotation",
    tagline: "Balancing cultural access and creator rights: The 5 strict criteria for permissible quotation.",
    glyph: "📖",
    image: "assets/images/quotation_fair_use.jpg",
    visualCaption: "Scales of Cultural Justice: Harmonizing author rights protection with academic research, classroom teaching, and fair quotation.",
    interactiveType: "quotation_validator",
    story: [
      "The underlying objective of copyright legislation is not to build knowledge monopolies, but to foster cultural flourishing by balancing: <strong>[1] Fair use of creative works for public education</strong>, and <strong>[2] Robust protection of creator rights</strong>.",
      "To serve this balance, statutory frameworks provide <strong>specific exceptions</strong> where works can be utilized without author permission or royalties:",
      "• <em>Reproduction for Private / Personal Use:</em> Recording a purchased CD onto your own smartphone or notebook. (Crucially: Distributing copies to classmates or uploading them online is illegal piracy!).<br>• <em>Educational Institutions:</em> Teachers photocopying excerpts for classroom instruction.<br>• <em>Non-Profit Performances:</em> Staging a school play where no admission fee is charged and performers receive no compensation.",
      "<strong>The 5 Golden Rules of Lawful Quotation:</strong>",
      "1. <strong>Subordination:</strong> Your own original work must remain primary and predominant; the quoted passage must serve as an auxiliary, subordinate reference.<br>2. <strong>Necessity:</strong> There must be an authentic, justifiable scholarly or argumentative requirement to cite the text.<br>3. <strong>Clear Demarcation:</strong> The quoted excerpt must be visually and typographically set apart (e.g., enclosed in quotation marks « » or blockquoted).<br>4. <strong>Explicit Source Attribution:</strong> The author's name, book title, publisher, and edition must be explicitly cited.<br>5. <strong>No Alteration:</strong> Quoted text must be reproduced verbatim without modification, omission, or distortion."
    ],
    takeaway: "Exceptions encompass classroom education, non-profit events, and private personal use ⬝ Lawful quotation mandates 5 rules: Subordination, Necessity, Quotes, Attribution, and Absolute Non-Alteration.",
    funFact: "The majority of academic plagiarism violations in universities occur not from lack of citations, but from forgetting quotation marks—reproducing words verbatim without quotation marks is legally treated as copyright infringement!",
    quiz: {
      question: "Which of the following actions constitutes an illegal copyright infringement rather than a permissible statutory fair use exception?",
      options: [
        "Burning duplicates of a commercially purchased music CD and distributing them to classmates",
        "Citing a two-sentence excerpt in quotation marks with full bibliographic source attribution in a school term paper",
        "A student drama club staging a free theatrical play for parents without charging tickets or paying actors",
        "A chemistry teacher photocopying a single textbook diagram to distribute to students during a lab demonstration"
      ],
      answer: 0,
      explain: "Personal use is strictly confined to personal and domestic spheres; distributing duplicates to friends or classmates exceeds personal use and constitutes copyright infringement."
    }
  },
  {
    id: "creative-commons",
    category: "Part 3: Copyrights & Information Utilization",
    title: "Creative Commons & Digital Open Sharing",
    tagline: "Universal sharing icons: How to license your works and define usage terms with four simple badges.",
    glyph: "🌐",
    image: "assets/images/creative_commons_licenses.jpg",
    visualCaption: "Creative Commons Badges: The standardized digital licensing language — Attribution (BY), Non-Commercial (NC), No Derivatives (ND), and Share-Alike (SA).",
    interactiveType: "cc_license_builder",
    story: [
      "In the interconnected digital ecosystem, creators sought a nimble bridge between 'all rights reserved' and copyright abandonment. The result was the <strong>Creative Commons (CC)</strong> licensing framework.",
      "A CC license is a public declaration attached to a work informing the world in advance of the exact conditions under which anyone may reproduce, share, or build upon the creation without having to individually negotiate permission. It rests on <strong>four foundational modular conditions</strong>:",
      "• <strong>1. Attribution (BY):</strong> Mandatory in all CC licenses; requires that users clearly credit the original creator, provide the work's title, and link to the source.<br>• <strong>2. Non-Commercial (NC):</strong> Forbids any commercial exploitation or monetary resale of the work or its remixes.<br>• <strong>3. No Derivatives (ND):</strong> Allows verbatim copying and distribution, but strictly forbids altering, transforming, translating, or creating derivative works from the original.<br>• <strong>4. Share-Alike (SA):</strong> Mandates that if you alter, remix, or adapt the work, you must distribute your derivative creation under the exact same CC license combination.",
      "These conditions combine into standard global licenses such as <em>CC BY-NC</em> (Attribution + Non-Commercial) and <em>CC BY-SA</em> (used by Wikipedia)."
    ],
    takeaway: "Creative Commons simplifies permissions ⬝ 4 core conditions: BY (Attribution) ⬝ NC (Non-commercial) ⬝ ND (No alterations) ⬝ SA (Share adaptations under identical terms).",
    funFact: "Over two billion digital creative works worldwide—including all Wikipedia articles, millions of Flickr photographs, and major open-source datasets—are licensed under Creative Commons!",
    quiz: {
      question: "You publish a photo you took on a blog and wish to allow others to reuse it on two conditions: 'Credit the photographer' and 'Do not use for commercial purposes'. Which two CC badges must be displayed?",
      options: [
        "BY (Attribution) + NC (Non-Commercial)",
        "ND (No Derivatives) + SA (Share-Alike)",
        "NC (Non-Commercial) + ND (No Derivatives)",
        "SA (Share-Alike) only"
      ],
      answer: 0,
      explain: "BY mandates attribution to the photographer, and NC prohibits commercial exploitation, yielding the standard CC BY-NC license."
    }
  }
];

const LECT2_MATCH_ITEMS_EN = [
  { id: "m1", concept: "Four Basic Items", match: "Name, Address, Date of Birth, and Gender for living identity verification" },
  { id: "m2", concept: "Publicity Rights", match: "Protects the commercial and economic likeness value of celebrities" },
  { id: "m3", concept: "Opt-in System", match: "Prohibits data collection or marketing without affirmative prior consent" },
  { id: "m4", concept: "Formality Principle", match: "Requires official application and patent office registration for rights to exist" },
  { id: "m5", concept: "Utility Model Rights", match: "Protects practical structural and shape improvements to industrial products" },
  { id: "m6", concept: "Non-Formality Principle", match: "Copyright attaches automatically the instant of creation without registration" },
  { id: "m7", concept: "Neighboring Rights", match: "Rights granted to performers, audio producers, and broadcasting agencies" },
  { id: "m8", concept: "Creative Commons (CC)", match: "Modular badges defining reuse terms such as Attribution (BY) and Non-Commercial (NC)" }
];

if (typeof window !== 'undefined') {
  window.LECT2_STAGES_EN = LECT2_STAGES_EN;
  window.LECT2_MATCH_ITEMS_EN = LECT2_MATCH_ITEMS_EN;
}
