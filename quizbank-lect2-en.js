/* ============================================================
   Practice Quiz Bank - Unit 1: Lecture 2
   (Personal Information, Intellectual Property & Information Utilization)
   52 Comprehensive questions classified by chapter & difficulty.
   Directly derived and adapted from the curriculum textbook & exercises.
   ============================================================ */

const LECT2_QUIZBANK_EN = [
  // ==========================================
  // Chapter 1: Personal Information & Identification Codes
  // ==========================================
  {
    id: 'qb2-1',
    stageId: 'personal-data',
    difficulty: 'easy',
    question: 'What is the authoritative legal definition of "Personal Information"?',
    options: [
      'Information relating to a living individual that can identify a specific person directly or by combination with other data.',
      'Any text or media file accessible publicly on the internet without credentials.',
      'Software programs and algorithmic source codes registered at a patent office.',
      'Atmospheric weather sensor readings and seasonal temperatures in metropolitan cities.'
    ],
    answer: 0,
    explain: 'Personal information encompasses any data related to a living person that identifies them either directly or through associative combination.'
  },
  {
    id: 'qb2-2',
    stageId: 'personal-data',
    difficulty: 'easy',
    question: 'Which of the following items belongs to the "Four Basic Items" recognized for fundamental identity verification?',
    options: [
      'Date of Birth.',
      'Bank Account Number.',
      'Corporate Email Address.',
      'Blood Group Type.'
    ],
    answer: 0,
    explain: 'The Four Basic Items consist of: Name, Address, Date of Birth, and Gender.'
  },
  {
    id: 'qb2-3',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'Numbers stamped on passports, driver’s licenses, and national ID cards are legally classified as:',
    options: [
      'Personal Identification Codes.',
      'Unprotected anonymous public numbers.',
      'Individually registered trademarks.',
      'Creative Commons license parameters.'
    ],
    answer: 0,
    explain: 'They are Personal Identification Codes because they are unique sovereign identifiers linked decisively to an individual.'
  },
  {
    id: 'qb2-4',
    stageId: 'personal-data',
    difficulty: 'medium',
    question: 'Why do data protection statutes mandate stringent safeguards for "Special Care-Required Personal Information" (e.g. creed, health, criminal record)?',
    options: [
      'Because unauthorized leakage may cause severe social prejudice, unjust discrimination, or physical harm to the individual.',
      'Because they are commercially reserved for sale to digital marketing agencies.',
      'Because they automatically enter the public domain 50 years after creation.',
      'Because they are subject exclusively to the Formality Principle in patent tribunals.'
    ],
    answer: 0,
    explain: 'Sensitive personal information requires heightened security because wrongful exposure can lead to severe personal discrimination and disadvantage.'
  },
  {
    id: 'qb2-5',
    stageId: 'personal-data',
    difficulty: 'hard',
    question: 'A user creates a random alphanumeric pseudonym for an online gaming forum. Is this pseudonym considered personal information if it cannot be linked to any real living individual?',
    options: [
      'No, a bare pseudonym that cannot be combined with other data to determine real identity does not constitute personal information.',
      'Yes, any nickname or digital handle is legally treated as sensitive personal data.',
      'It is automatically protected as an international industrial patent.',
      'It falls under industrial property trademark law.'
    ],
    answer: 0,
    explain: 'If an arbitrary pseudonym cannot be linked directly or by combination to identify a living individual, it does not meet the statutory criteria of personal data.'
  },
  {
    id: 'qb2-6',
    stageId: 'personal-data',
    difficulty: 'hard',
    question: 'Which of the following constitutes biometric personal data of the highest sensitivity?',
    options: [
      'Iris scans, fingerprint records, and genetic DNA profiles.',
      'Residential postal zip code.',
      'Color and model of a bicycle.',
      'Geographical coordinates of a municipal city park.'
    ],
    answer: 0,
    explain: 'Biometric measurements such as fingerprints, facial geometry, and iris scans are irreplaceable high-sensitivity identifiers.'
  },
  {
    id: 'qb2-7',
    stageId: 'personal-data',
    difficulty: 'creative',
    question: 'A high school develops a smart fitness portal tracking student health metrics. What represents the most legally compliant approach to safeguarding this data?',
    options: [
      'Encrypting sensitive health fields, decoupling student names from medical records, and obtaining explicit parental consent.',
      'Posting full health measurements on the central school bulletin board to foster friendly competition.',
      'Selling the dataset to commercial sportswear manufacturers to tailor PE uniforms.',
      'Storing student records in unencrypted plain text files on an open shared drive.'
    ],
    answer: 0,
    explain: 'Best-practice compliance requires strict encryption, data pseudonymization/segregation, and verifiable parental consent.'
  },

  // ==========================================
  // Chapter 2: Right to Privacy, Image Rights & Publicity Rights
  // ==========================================
  {
    id: 'qb2-8',
    stageId: 'privacy-rights',
    difficulty: 'easy',
    question: 'Which constitutional article in the Egyptian Constitution explicitly guarantees the inviolability of citizens’ private lives?',
    options: [
      'Article 57 of the Egyptian Constitution.',
      'Article 1 of the Commercial Maritime Code.',
      'Article 20 of the Highway Traffic Law.',
      'Article 70 of the Creative Commons Foundation.'
    ],
    answer: 0,
    explain: 'Article 57 of the Egyptian Constitution explicitly affirms the sacrosanct right to privacy for all citizens.'
  },
  {
    id: 'qb2-9',
    stageId: 'privacy-rights',
    difficulty: 'easy',
    question: 'The right of an individual to prevent others from photographing them or publishing their likeness without prior consent is known as:',
    options: [
      'Image Rights (Portrait Rights).',
      'Industrial Invention Rights.',
      'Creative Commons Attribution Right.',
      'Photographic Formality Doctrine.'
    ],
    answer: 0,
    explain: 'Image Rights protect an individual against unauthorized photography, display, or distribution of their facial likeness and appearance.'
  },
  {
    id: 'qb2-10',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'A student records a candid video of a classmate in the school courtyard and posts it onto TikTok as a prank. What is the legal assessment of this act?',
    options: [
      'It violates the classmate’s Image Rights and privacy because publication occurred without affirmative consent.',
      'It is fully permissible because classmates are presumed to share mutual social consent.',
      'It qualifies as an authorized educational fair use demonstration.',
      'It is automatically licensed under Creative Commons.'
    ],
    answer: 0,
    explain: 'Personal familiarity or friendship does not waive legal rights; publishing an individual’s likeness without consent violates their image rights.'
  },
  {
    id: 'qb2-11',
    stageId: 'privacy-rights',
    difficulty: 'medium',
    question: 'What right safeguards the economic and advertising value derived from the fame and likeness of athletes and celebrities?',
    options: [
      'Publicity Rights.',
      'Utility Model Rights.',
      'The Non-Formality Doctrine in Fine Arts.',
      'Inalienable Moral Rights.'
    ],
    answer: 0,
    explain: 'Publicity Rights protect the exclusive financial benefits and commercial licensing of a celebrity’s recognizable likeness.'
  },
  {
    id: 'qb2-12',
    stageId: 'privacy-rights',
    difficulty: 'hard',
    question: 'Rumors circulate online accusing an acquaintance of theft. An internet user reshapes and disseminates their address, photo, and phone number to "warn the public". This behavior:',
    options: [
      'Is completely unlawful and constitutes a grave privacy infringement and potential criminal defamation.',
      'Represents commendable civic duty aiding investigative authorities.',
      'Is a legitimate execution of the Opt-in consent regime.',
      'Lawfully protects the commercial interests of surrounding merchants.'
    ],
    answer: 0,
    explain: 'Doxxing or publicizing private details based on rumors is an egregious violation of privacy law subject to severe penal liability.'
  },
  {
    id: 'qb2-13',
    stageId: 'privacy-rights',
    difficulty: 'hard',
    question: 'Under statutory data protection law, when is an institution legally permitted to disclose personal information to third parties without subject consent?',
    options: [
      'When fulfilling mandatory statutory duties, protecting national security, or preserving human life and health in emergencies.',
      'When an e-commerce enterprise wishes to market seasonal sale catalogues.',
      'When an employee shares a coworker’s address out of casual curiosity.',
      'When monetizing consumer records in an online public auction.'
    ],
    answer: 0,
    explain: 'Statutory exceptions permitting disclosure without consent are strictly confined to legal mandates, life-threatening emergencies, and judicial orders.'
  },
  {
    id: 'qb2-14',
    stageId: 'privacy-rights',
    difficulty: 'creative',
    question: 'A student journalist profiling a star athlete for the school newspaper wants to balance editorial reporting with privacy and image rights. What is the correct procedure?',
    options: [
      'Obtaining prior informed written consent from the student athlete and their guardian before photography and publication.',
      'Capturing surreptitious photos at an off-campus gym and publishing them as an investigative scoop.',
      'Publishing the athlete’s complete academic report card and medical records without warning.',
      'Digitally distorting the athlete’s face using AI filters without consultation.'
    ],
    answer: 0,
    explain: 'Ethical and lawful journalism requires obtaining affirmative written consent prior to taking and publishing an individual’s portrait.'
  },

  // ==========================================
  // Chapter 3: Corporate Protection & Consent Systems
  // ==========================================
  {
    id: 'qb2-15',
    stageId: 'corporate-privacy',
    difficulty: 'easy',
    question: 'What formal document published by companies outlines their commitments regarding user data collection, processing, and security?',
    options: [
      'Privacy Policy.',
      'Industrial Patent Specification.',
      'Creative Commons Certificate.',
      'Trademark Assignment Deed.'
    ],
    answer: 0,
    explain: 'A corporate Privacy Policy details the exact rules and policies by which an organization manages and secures personal data.'
  },
  {
    id: 'qb2-16',
    stageId: 'corporate-privacy',
    difficulty: 'easy',
    question: 'A certification mark awarded by regulatory authorities to organizations proving compliance with personal data protection standards is called:',
    options: [
      'Privacy Mark / Data Protection Center License.',
      'Utility Model Patent.',
      'Creative Commons BY Emblem.',
      'Non-Commercial Distribution Seal.'
    ],
    answer: 0,
    explain: 'A Privacy Mark or Regulatory License demonstrates that an enterprise maintains audited protective measures for user data.'
  },
  {
    id: 'qb2-17',
    stageId: 'corporate-privacy',
    difficulty: 'medium',
    question: 'In an "Opt-in" consent system, when is a service provider permitted to initiate promotional communications or data profiling?',
    options: [
      'Only after the user proactively delivers explicit, affirmative prior consent (e.g., ticking an unchecked opt-in box).',
      'Immediately upon initial app installation without requiring any user input.',
      '50 years following account registration.',
      'Whenever promotional mailings contain celebrity photographs.'
    ],
    answer: 0,
    explain: 'Opt-in requires affirmative, active prior consent before any non-essential data collection or marketing begins.'
  },
  {
    id: 'qb2-18',
    stageId: 'corporate-privacy',
    difficulty: 'medium',
    question: 'What is the operational premise of an "Opt-out" system in consumer digital services?',
    options: [
      'Data processing and promotional delivery proceed by default until the consumer actively objects and unsubscribes.',
      'All data collection is permanently prohibited under all circumstances.',
      'Users must obtain a mechanical patent before opening an account.',
      'Consumers are legally mandated to pay monetary royalties per page view.'
    ],
    answer: 0,
    explain: 'Under Opt-out, processing is active by default and continues until the user expressly objects.'
  },
  {
    id: 'qb2-19',
    stageId: 'corporate-privacy',
    difficulty: 'hard',
    question: 'A school stores parent telephone numbers and addresses in an encrypted student database and refuses external advertising requests. This measure:',
    options: [
      'Fulfills the school’s legal duty to safeguard personal data and prevent unlawful third-party disclosures.',
      'Violates the Formality Principle in information exchange.',
      'Infringes the publicity rights of parents.',
      'Impedes the statutory fair use doctrine for commercial advertising.'
    ],
    answer: 0,
    explain: 'Educational institutions are legally obliged to protect family confidential data and bar unauthorized third-party transfers.'
  },
  {
    id: 'qb2-20',
    stageId: 'corporate-privacy',
    difficulty: 'creative',
    question: 'When engineering an e-commerce checkout workflow, how should a developer implement an Opt-in design for newsletter marketing?',
    options: [
      'Leaving the newsletter subscription checkbox unchecked by default, allowing the buyer to opt in voluntarily.',
      'Pre-checking the box and making subscription mandatory to finalize purchase.',
      'Hiding the privacy policy on an inaccessible web page.',
      'Sending daily marketing mailers without providing an unsubscribe link.'
    ],
    answer: 0,
    explain: 'An authentic Opt-in architecture presents an unchecked box, leaving consent entirely to the user’s voluntary choice.'
  },

  // ==========================================
  // Chapter 4: Intellectual Property & Industrial Property Rights
  // ==========================================
  {
    id: 'qb2-21',
    stageId: 'industrial-property',
    difficulty: 'easy',
    question: 'Intellectual Property Rights broadly divide into which two principal domains?',
    options: [
      'Industrial Property Rights and Copyrights.',
      'Graphic design rights and cinematic editing rights.',
      'Amateur privileges and professional monopolies.',
      'Open data protocols and proprietary server licenses.'
    ],
    answer: 0,
    explain: 'Intellectual Property divides into Industrial Property (patents, designs, trademarks) and Copyright (literature, art, software).'
  },
  {
    id: 'qb2-22',
    stageId: 'industrial-property',
    difficulty: 'easy',
    question: 'What is the official state authority responsible for examining and issuing patent rights in Egypt?',
    options: [
      'The Egyptian Patent Office (Academy of Scientific Research & Technology).',
      'The Ministry of Tourism and Antiquities.',
      'The National Postal Authority.',
      'The Consumer Protection Food Authority.'
    ],
    answer: 0,
    explain: 'The Egyptian Patent Office is the competent governmental agency examining and granting industrial patents.'
  },
  {
    id: 'qb2-23',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'Which right protects novel, non-obvious industrial technical inventions, and what is its term of protection?',
    options: [
      'Patent Rights, lasting 20 years from the date of application.',
      'Trademarks, lasting 5 years non-renewable.',
      'Copyrights, lasting 10 years from publication date.',
      'Moral Inventions, lasting 7 years.'
    ],
    answer: 0,
    explain: 'Patents protect groundbreaking technological inventions for 20 years from the formal application filing date.'
  },
  {
    id: 'qb2-24',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'Utility Model Rights specifically protect:',
    options: [
      'Practical structural ideas and shape modifications improving the functional utility of industrial products.',
      'Brand names and corporate promotional logos.',
      'Theatrical manuscripts and lyrical poetry.',
      'Symphonic musical compositions and radio broadcasts.'
    ],
    answer: 0,
    explain: 'Utility models protect practical mechanical and structural improvements made to existing physical products.'
  },
  {
    id: 'qb2-25',
    stageId: 'industrial-property',
    difficulty: 'medium',
    question: 'What is the term of protection for Utility Model Rights under Egyptian legislation?',
    options: [
      '7 years from the date of application (extending to 10 years in jurisdictions like Japan).',
      '20 full years identical to major technical patents.',
      '50 years post-mortem.',
      'One year renewed on a weekly basis.'
    ],
    answer: 0,
    explain: 'Utility models endure for 7 years in Egyptian law, compared to 10 years in Japanese and international patent frameworks.'
  },
  {
    id: 'qb2-26',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'An automaker creates: a novel hydrogen engine (invention), a sculpted aerodynamic body (exterior styling), a distinctive silver star logo, and an anti-slip pedal shape (structural improvement). What is the correct classification?',
    options: [
      'Engine: Patent | Body: Industrial Design | Logo: Trademark | Pedal: Utility Model.',
      'Engine: Copyright | Body: Creative Commons | Logo: Patent | Pedal: Trademark.',
      'All four must be bundled into a single non-severable patent.',
      'Engine: Trademark | Body: Patent | Logo: Utility Model | Pedal: Copyright.'
    ],
    answer: 0,
    explain: 'Invention = Patent; Exterior styling = Design Right; Logo = Trademark; Functional structural shape = Utility Model.'
  },
  {
    id: 'qb2-27',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'Why do Trademark Rights differ uniquely from other industrial property rights regarding duration?',
    options: [
      'Because they last 10 years from registration but can be renewed indefinitely in 10-year increments.',
      'Because they expire after 2 years and immediately enter the public domain.',
      'Because they are tied to the biological lifespan of the corporate founder.',
      'Because they do not require registration and operate on the Non-Formality Principle.'
    ],
    answer: 0,
    explain: 'Trademarks can endure indefinitely because their 10-year registration terms are renewable perpetually.'
  },
  {
    id: 'qb2-28',
    stageId: 'industrial-property',
    difficulty: 'creative',
    question: 'If you design a smartphone accessory featuring an ingenious folding kickstand mechanism and an original brand badge, how do you secure legal protection?',
    options: [
      'File for a utility model / industrial design for the kickstand mechanism, and register a trademark for the brand badge at the patent office.',
      'Post a photo on social media with "Do not steal" in the caption.',
      'Rely on the Non-Formality Principle to protect hardware without filing.',
      'Surrender ownership rights to the first manufacturing plant you contact.'
    ],
    answer: 0,
    explain: 'Industrial property demands strict adherence to the Formality Principle; official filing and registration are indispensable.'
  },

  // ==========================================
  // Chapter 5: Copyrights & Neighboring Rights
  // ==========================================
  {
    id: 'qb2-29',
    stageId: 'copyrights',
    difficulty: 'easy',
    question: 'What fundamental legal doctrine governs the inception of copyright protection?',
    options: [
      'The Non-Formality Principle; protection springs into being automatically upon creation.',
      'The Formality Principle requiring commercial registry filing.',
      'Mandatory annual registration dues paid to the Chamber of Commerce.',
      'Compulsory state assignment to the Ministry of Education.'
    ],
    answer: 0,
    explain: 'Copyright adheres to the Non-Formality Principle: rights vest automatically the instant an original work is fixed.'
  },
  {
    id: 'qb2-30',
    stageId: 'copyrights',
    difficulty: 'easy',
    question: 'Which of the following creations is protected under copyright law?',
    options: [
      'Novels, oil paintings, musical compositions, and computer software programs.',
      'Commodity goods like bulk sugar, rice, and grain.',
      'Random cellular telephone numbers.',
      'Daily meteorological temperature forecasts.'
    ],
    answer: 0,
    explain: 'Copyright protects original works of the mind across literature, music, fine art, cinematography, and computer code.'
  },
  {
    id: 'qb2-31',
    stageId: 'copyrights',
    difficulty: 'medium',
    question: 'What are the author’s "Moral Rights" and what is their legal durability?',
    options: [
      'The right of attribution and the right to preserve the work’s integrity; they are perpetual, inalienable, and cannot be waived or sold.',
      'The exclusive right to sell paperback copies for financial gain.',
      'The privilege to utilize municipal printing presses free of charge.',
      'Commercial privileges that expire one year following publication.'
    ],
    answer: 0,
    explain: 'Moral rights are perpetual and inalienable, permanently securing attribution and protecting against distortions.'
  },
  {
    id: 'qb2-32',
    stageId: 'copyrights',
    difficulty: 'medium',
    question: 'How long do economic property rights endure under Egyptian copyright law?',
    options: [
      'The author’s biological lifetime plus 50 years after their death (70 years in international and Japanese frameworks).',
      'Exactly 20 years from initial release.',
      '10 years renewable once.',
      'They terminate immediately upon the creator’s decease.'
    ],
    answer: 0,
    explain: 'Under Egyptian law, economic rights persist throughout the author’s life plus 50 years post-mortem.'
  },
  {
    id: 'qb2-33',
    stageId: 'copyrights',
    difficulty: 'hard',
    question: 'Author Taha Hussein passed away in 1973. What is the current legal status of his literary works in Egypt after more than 50 years?',
    options: [
      'The economic rights have lapsed into the Public Domain, allowing anyone to reprint or publish the text freely, while moral attribution remains perpetual.',
      'They remain under exclusive monopoly by the original publisher for two centuries.',
      'They have been transferred to the International Patent Bureau.',
      'They can only be read with paid permission from Creative Commons.'
    ],
    answer: 0,
    explain: 'After 50 years post-mortem in Egypt, works enter the Public Domain, freely accessible for reproduction while moral credit remains.'
  },
  {
    id: 'qb2-34',
    stageId: 'copyrights',
    difficulty: 'hard',
    question: 'Who are the rightful holders of "Neighboring Rights" in the media and publishing sectors?',
    options: [
      'Performers (actors, singers, instrumentalists), phonogram record producers, and broadcasting networks.',
      'Neighbors residing adjacent to the author’s home.',
      'Retail shopkeepers located near publishing houses.',
      'Computer programmers who engineer operating systems exclusively.'
    ],
    answer: 0,
    explain: 'Neighboring Rights are granted to the entities who convey works to the public: performers, audio producers, and broadcasters.'
  },
  {
    id: 'qb2-35',
    stageId: 'copyrights',
    difficulty: 'creative',
    question: 'A high school drama troupe wishes to perform a Shakespearean play accompanied by a modern symphonic recording. How must they navigate copyright?',
    options: [
      'Shakespeare’s text is in the public domain and free to perform, but the modern orchestra’s audio recording is protected by Neighboring Rights and requires licensing or a royalty-free substitute.',
      'Shakespeare is protected by an industrial patent, while orchestral music is always free.',
      'Both works are strictly barred from high school performances.',
      'Tickets can be sold commercially without consulting any rights holders.'
    ],
    answer: 0,
    explain: 'Historical texts are in the public domain, but contemporary recorded performances carry distinct Neighboring Rights.'
  },

  // ==========================================
  // Chapter 6: Fair Use & Rules of Legal Quotation
  // ==========================================
  {
    id: 'qb2-36',
    stageId: 'fair-use-quotation',
    difficulty: 'easy',
    question: 'What is the primary socio-cultural purpose of copyright legislation?',
    options: [
      'Balancing fair use to advance education and culture with the robust protection of author rights.',
      'Preventing students from reading books and literature.',
      'Empowering governments to confiscate all artistic creations without payment.',
      'Forcing creative writers to abandon literature for factory labor.'
    ],
    answer: 0,
    explain: 'Copyright seeks an equitable equilibrium between protecting creator livelihoods and enabling cultural dissemination.'
  },
  {
    id: 'qb2-37',
    stageId: 'fair-use-quotation',
    difficulty: 'easy',
    question: 'Which of the following actions constitutes an authorized fair use exception exempt from author licensing?',
    options: [
      'Photocopying a textbook chapter for classroom teaching and discussion.',
      'Photocopying an entire novel to print 1,000 illicit commercial copies for black market sale.',
      'Downloading a paid cinematic film from an unauthorized piracy site.',
      'Recording a live concert to sell bootleg discs online.'
    ],
    answer: 0,
    explain: 'Classroom teaching in educational institutions is a recognized statutory exception to copyright licensing.'
  },
  {
    id: 'qb2-38',
    stageId: 'fair-use-quotation',
    difficulty: 'medium',
    question: 'A student buys a music CD, burns copies, and distributes them as gifts to classmates. Does this qualify as "Reproduction for Private Use"?',
    options: [
      'No, because distributing copies to classmates exceeds the narrow boundaries of personal domestic use and constitutes copyright infringement.',
      'Yes, because the copies were given as gifts without charging money.',
      'Yes, because the student originally bought the CD.',
      'Yes, because all recipients attend the same school.'
    ],
    answer: 0,
    explain: 'Private use is strictly limited to personal and domestic spheres; distributing copies to friends constitutes copyright infringement.'
  },
  {
    id: 'qb2-39',
    stageId: 'fair-use-quotation',
    difficulty: 'medium',
    question: 'What is the meaning of "Subordination" in the rules of lawful quotation?',
    options: [
      'Your own original scholarly text must remain primary and predominant, while the quoted passage serves an auxiliary, subordinate function.',
      'Copying an entire book and merely appending your name to the front cover.',
      'Paying monetary compensation to all heirs of an author prior to citing.',
      'Requiring unanimous student approval before quoting.'
    ],
    answer: 0,
    explain: 'Subordination ensures the user’s original writing is the primary subject, with quoted text acting only as supporting evidence.'
  },
  {
    id: 'qb2-40',
    stageId: 'fair-use-quotation',
    difficulty: 'hard',
    question: 'A scholar translates a Spanish novel into Arabic and publishes it commercially without permission, claiming the languages are different. What is the legal verdict?',
    options: [
      'A direct copyright infringement, because translation and adaptation rights are exclusive economic property rights of the original author.',
      'Permissible fair use, because translation represents an entirely new independent creation.',
      'Authorized under Creative Commons open educational licenses.',
      'Lawful because the original author resides in a foreign nation.'
    ],
    answer: 0,
    explain: 'Translation is an exclusive right reserved to the copyright holder; translating and publishing without permission is infringement.'
  },
  {
    id: 'qb2-41',
    stageId: 'fair-use-quotation',
    difficulty: 'hard',
    question: 'Which of the following belongs to the 5 mandatory rules of lawful quotation?',
    options: [
      'Refraining from altering the quoted text, setting it inside quotation marks, and explicitly citing author and source.',
      'Changing words to conceal the source from readers.',
      'Ensuring that quoted passages constitute at least 95% of total paper length.',
      'Quoting exclusively from web pages that do not mention author names.'
    ],
    answer: 0,
    explain: 'Lawful quotation requires: Subordination, Necessity, Quotation Marks, Source Attribution, and Absolute Non-Alteration.'
  },
  {
    id: 'qb2-42',
    stageId: 'fair-use-quotation',
    difficulty: 'creative',
    question: 'At a high school cultural festival, students perform a script from a commercial collection. When is this performance legally exempt from copyright royalties?',
    options: [
      'When admission is completely free to attendees and the student actors receive no financial compensation or salary.',
      'When tickets are sold to finance teacher vacation trips.',
      'When the performance is recorded and sold to commercial television networks.',
      'When audience members pay a nominal fee to support actors.'
    ],
    answer: 0,
    explain: 'Non-profit performance exceptions require zero admission charges and zero compensation for performers.'
  },

  // ==========================================
  // Chapter 7: Creative Commons & Open Digital Culture
  // ==========================================
  {
    id: 'qb2-43',
    stageId: 'creative-commons',
    difficulty: 'easy',
    question: 'What is the principal objective of the Creative Commons (CC) licensing framework?',
    options: [
      'Providing standardized digital licenses allowing creators to share works while clearly pre-declaring reuse terms.',
      'Abolishing constitutional rights safeguarding personal privacy.',
      'Enforcing mandatory monetary fines against corporations in court.',
      'Preventing the exchange of books and media on the internet.'
    ],
    answer: 0,
    explain: 'Creative Commons provides a flexible licensing framework simplifying reuse and collaboration across global digital culture.'
  },
  {
    id: 'qb2-44',
    stageId: 'creative-commons',
    difficulty: 'easy',
    question: 'Which Creative Commons badge is mandatory and present in every single CC license configuration?',
    options: [
      'Attribution (BY).',
      'Non-Commercial (NC).',
      'No Derivatives (ND).',
      'Share-Alike (SA).'
    ],
    answer: 0,
    explain: 'BY (Attribution) is mandatory across all standard Creative Commons licenses.'
  },
  {
    id: 'qb2-45',
    stageId: 'creative-commons',
    difficulty: 'medium',
    question: 'What restriction is imposed by the "NC" (Non-Commercial) condition in Creative Commons?',
    options: [
      'Prohibits using the work or its derivatives for commercial purposes or monetary profit.',
      'Forbids mentioning the original author’s name.',
      'Permits adaptations while allowing marketplace retail sales.',
      'Restricts publication to physical paper print magazines only.'
    ],
    answer: 0,
    explain: 'NC prohibits commercial exploitation and financial monetization of the licensed work.'
  },
  {
    id: 'qb2-46',
    stageId: 'creative-commons',
    difficulty: 'medium',
    question: 'The "ND" (No Derivatives) badge in a Creative Commons license mandates that users:',
    options: [
      'May copy and distribute the work only in its verbatim original form, prohibiting any modification, remix, or adaptation.',
      'May alter the work freely while substituting new author names.',
      'Must translate the work into ten languages for commercial release.',
      'Must delete the photographer’s name prior to uploading.'
    ],
    answer: 0,
    explain: 'ND prohibits creating derivative works, remixes, or alterations; verbatim reproduction only is permitted.'
  },
  {
    id: 'qb2-47',
    stageId: 'creative-commons',
    difficulty: 'hard',
    question: 'What is required by the "Share-Alike" (SA) condition when a creator modifies a licensed work?',
    options: [
      'The new derivative work must be distributed under the identical Creative Commons license combination as the original.',
      'The work must be registered as an industrial patent with the state.',
      'The adapted work must be sold exclusively to commercial corporations.',
      'Other individuals must be forbidden from accessing the modified work.'
    ],
    answer: 0,
    explain: 'SA mandates that any adaptations or remixes must carry identical CC license terms.'
  },
  {
    id: 'qb2-48',
    stageId: 'creative-commons',
    difficulty: 'hard',
    question: 'Which of the following Creative Commons licenses represents the most restrictive tier of public sharing?',
    options: [
      'CC BY-NC-ND (requires credit, prohibits commercial exploitation, and bans any alterations).',
      'CC BY (merely requires author credit and allows all other uses).',
      'CC BY-SA (permits commercial use and modifications with identical licensing).',
      'CC0 (complete waiver into the universal public domain).'
    ],
    answer: 0,
    explain: 'CC BY-NC-ND is the most restrictive license, barring both commercial use and all derivative adaptations.'
  },
  {
    id: 'qb2-49',
    stageId: 'creative-commons',
    difficulty: 'creative',
    question: 'An artist publishes an infographic under "CC BY-SA". A student adds school branding to the infographic and publishes it in a student newsletter. What must the student do?',
    options: [
      'Credit the original artist and release the adapted graphic under the identical CC BY-SA license.',
      'Register the poster as their own private trademark and prohibit distribution.',
      'Erase the original artist’s signature and replace it with their own.',
      'Block the school administration from distributing the newsletter.'
    ],
    answer: 0,
    explain: 'CC BY-SA requires proper attribution and licensing of the modified derivative under the identical CC BY-SA terms.'
  },

  // ==========================================
  // Cross-Topic Synthesis & Advanced Practice
  // ==========================================
  {
    id: 'qb2-50',
    stageId: 'industrial-property',
    difficulty: 'hard',
    question: 'Compare the Formality Principle in Industrial Property with the Non-Formality Principle in Copyright regarding the moment rights attach:',
    options: [
      'Industrial property requires formal application and registration with the patent office, whereas copyright vests spontaneously the moment of creative expression.',
      'Industrial property vests spontaneously, while copyright requires parliamentary approval.',
      'Both require a monetary bond deposited in the central reserve bank.',
      'There is no legal difference between them in how rights originate.'
    ],
    answer: 0,
    explain: 'Industrial property demands formal registration (Formality), whereas copyright arises automatically upon creation (Non-Formality).'
  },
  {
    id: 'qb2-51',
    stageId: 'copyrights',
    difficulty: 'creative',
    question: 'Why is downloading pirated music or movies from illegal servers deemed copyright infringement even if done purely for personal listening?',
    options: [
      'Because the law explicitly prohibits downloading commercial works when the user knows they were uploaded unlawfully without authorization.',
      'Because personal downloads are only permitted on statutory public holidays.',
      'Because internet connection speed decreases during download.',
      'Because the legal code penalizes those who buy genuine editions.'
    ],
    answer: 0,
    explain: 'Personal use exceptions do not protect downloading pirated materials known to have been uploaded illegally.'
  },
  {
    id: 'qb2-52',
    stageId: 'personal-data',
    difficulty: 'creative',
    question: 'What overarching guiding principle unifies personal data protection, intellectual property, and cyber ethics in daily student life?',
    options: [
      'Respecting human privacy and data, never sharing photos without consent, honoring creator rights through attribution, and observing legal licenses.',
      'Publishing everything accessible online as long as no one requests its removal.',
      'Ignoring intellectual property rights because technology belongs to everyone.',
      'Disregarding account passwords and privacy policies on modern web platforms.'
    ],
    answer: 0,
    explain: 'The unifying ethical and legal foundation is respecting individual dignity, honoring human creativity, and practicing responsible digital citizenship.'
  }
];

if (typeof window !== 'undefined') {
  window.LECT2_QUIZBANK_EN = LECT2_QUIZBANK_EN;
}
