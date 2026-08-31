const LECT1_STAGES_EN = [
  {
    id: "dikw",
    category: "Part 1: Information & Media",
    title: "Data, Information & Knowledge",
    tagline: "How silent numbers turn into intelligent decisions and real-world solutions",
    glyph: "🔄",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "The Transformation Journey: From scattered raw facts to meaningful information, and finally to problem-solving knowledge.",
    interactiveType: "pipeline",
    story: [
      "In the realm of computer and information science, three fundamental terms are frequently heard: Data, Information, and Knowledge. While people often treat them as synonyms, their distinctions are the cornerstone of the entire digital universe.",
      "<strong>1. Data (البيانات):</strong> Raw, unorganized facts in their purest form — such as standalone numbers, letters, or symbols without context. Seeing '75 - 80 - 90' gives your mind no indication whether these represent weights, test scores, or prices.",
      "<strong>2. Information (المعلومات):</strong> When raw data is structured, calculated, or placed in context, it gains meaning and value for the recipient: 'These are a student’s scores in 3 exams, with an average score of 81.67%'. Now it holds actionable significance.",
      "<strong>3. Knowledge (المعرفة):</strong> The deepest leap! When information is systematically analyzed and linked with experience: 'The student excels in English but struggles with Physics, so targeted lab tutorials are needed'. Knowledge empowers us to solve problems wisely!"
    ],
    takeaway: "Data = Raw facts ⬝ Information = Facts with meaning ⬝ Knowledge = Deep insight that solves problems",
    funFact: "Every single minute on Earth, humans generate over 500,000 hours of video and 300 million emails—all raw data converted into structured information by computing processors!",
    quiz: {
      question: "If you see on screen: 'Room temperature is currently 24°C, which is the optimal level for study focus', this represents:",
      options: [
        "Information & Knowledge (المعلومات والمعرفة)",
        "Meaningless raw data (مجرد بيانات خام)",
        "Recording Media (وسيط تسجيل)",
        "Geotag (علامة جغرافية)"
      ],
      answer: 0,
      explain: "Temperature data placed into context and combined with a recommendation represents information interpreted into actionable knowledge!"
    }
  },
  {
    id: "characteristics",
    category: "Part 1: Information & Media",
    title: "Digital Information Characteristics",
    tagline: "3 superpowers of digital information you must understand before clicking 'Post'",
    glyph: "🌐",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "Persistence, Reproducibility, and Propagation: Distinct properties making digital data immortal and borderless.",
    interactiveType: "characteristics_sim",
    story: [
      "Digital information behaves differently from physical objects. Authoritative computer science curricula emphasize three core characteristics:",
      "<strong>1. Persistence (الاستمرارية):</strong> Once uploaded to the internet, information does not vanish easily! Even if you tap 'Delete' on your personal account, server logs, search engine caches, archive bots, and user screenshots preserve copies indefinitely.",
      "<strong>2. Reproducibility (قابلية التكرار):</strong> You can produce millions of 100% identical digital copies with zero cost and zero degradation in quality. A printed book requires printing presses, while a PDF is duplicated in milliseconds.",
      "<strong>3. Propagation (الانتشار):</strong> Information travels at the speed of light from one individual to thousands and millions across social networks, creating an instant viral multiplier effect."
    ],
    takeaway: "Think twice before posting: What is shared online spreads instantly and rarely disappears completely!",
    funFact: "The internet archive 'Wayback Machine' has archived over 800 billion web pages—even sites and photos deleted a decade ago are still preserved there!",
    quiz: {
      question: "The property that enables you to duplicate your lecture notes onto your PC, USB flash drive, and phone identically is:",
      options: [
        "Reproducibility (قابلية التكرار)",
        "Propagation (الانتشار)",
        "Cyberbullying (التنمر الإلكتروني)",
        "Identity Theft (انتحال الشخصية)"
      ],
      answer: 0,
      explain: "Reproducibility is the effortless generation of multiple exact digital replicas."
    }
  },
  {
    id: "primary-secondary",
    category: "Part 1: Information & Media",
    title: "Primary vs. Secondary & Cross-Checking",
    tagline: "Don't believe everything online: How to trace information origins and verify facts",
    glyph: "🔍",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "Cross-checking is your intellectual shield against misinformation, bias, and unverified rumors.",
    interactiveType: "cross_checker",
    story: [
      "To be an effective scholar or digital citizen, you must identify where information originates:",
      "<strong>A) Primary Information (المعلومات الأولية):</strong> Information gathered directly through your first-hand experience, laboratory experiments, direct sensor telemetry, or questionnaires you distribute yourself.",
      "<strong>B) Secondary Information (المعلومات الثانوية):</strong> Information compiled, filtered, or reported by third parties, such as textbooks, encyclopedias, televised broadcasts, and online articles.",
      "<strong>C) Why is Cross-checking (التحقق المتبادل) vital?</strong> Because secondary sources may carry inaccuracies, selective editing, or deliberate falsehoods. Cross-checking means comparing reports across multiple independent, credible sources before accepting or sharing them."
    ],
    takeaway: "Primary = Collected directly by you | Secondary = Sourced from others and requires Cross-checking.",
    funFact: "Global news agencies enforce strict editorial policies: breaking news cannot be broadcast without independent confirmation from at least three verified sources!",
    quiz: {
      question: "A survey you conducted across your classmates to measure their daily smartphone usage is classified as:",
      options: [
        "Primary Information (معلومات أولية)",
        "Secondary Information (معلومات ثانوية)",
        "Transmission Media (وسائط نقل)",
        "Cybercrime (جريمة إلكترونية)"
      ],
      answer: 0,
      explain: "Because you collected the data and conducted the empirical research first-hand without intermediaries."
    }
  },
  {
    id: "media-types",
    category: "Part 1: Information & Media",
    title: "Media Categories (أنواع الوسائط)",
    tagline: "Expression, Transmission, and Recording Media: The triumvirate of modern communication",
    glyph: "🗂️",
    image: "assets/images/media_types.jpg",
    visualCaption: "The Media Trinity: Expression media to manifest thought, Transmission media to broadcast across distance, and Recording media to preserve memory.",
    interactiveType: "media_sorter",
    story: [
      "Curriculum standards define <strong>Media (الوسائط)</strong> as: 'The methods and channels used to convey information to individuals.' They are classified into three primary categories:",
      "<strong>1. Expression Media (وسائط التعبير):</strong> The formats used to formulate and express ideas: written text, digital photos, voice/sound recordings, and high-definition video.",
      "<strong>2. Transmission Media (وسائط النقل والإرسال):</strong> Channels and networks that transport information across distances: the internet, fiber optics, television broadcasts, radio waves, printed newspapers, and telephone networks.",
      "<strong>3. Recording Media (وسائط التسجيل والتخزين):</strong> Storage media designed to record, persist, and retrieve data whenever needed: SSDs, Hard Drives, USB Flash Drives, Cloud Vaults, and optical discs (DVDs/Blu-Ray)."
    ],
    takeaway: "Expression = Content format | Transmission = Travel vehicle | Recording = Storage vault.",
    funFact: "The earliest digital recording medium was punched paper cards in the 1800s. Today, a fingernail-sized MicroSD card stores up to 2 Terabytes of data!",
    quiz: {
      question: "A USB Flash Drive and Google Drive Cloud Storage are categorized under:",
      options: [
        "Recording Media (وسائط التسجيل والتخزين)",
        "Expression Media (وسائط التعبير)",
        "Analog Transmission Media only",
        "Primary Data Sources"
      ],
      answer: 0,
      explain: "Both serve to store, archive, and retrieve digital files over time."
    }
  },
  {
    id: "media-literacy",
    category: "Part 1: Information & Media",
    title: "Media Literacy (الثقافة الإعلامية)",
    tagline: "The essential 21st-century skill: Reading between the lines and critically analyzing media",
    glyph: "🧠",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "Media literacy means moving beyond passive consumption to asking: Who created this? Why? And is it verified?",
    interactiveType: "literacy_lens",
    story: [
      "In the age of algorithms and generative AI, simply knowing how to open an app or stream video is not enough. The genuine superpower is <strong>Media Literacy (الثقافة الإعلامية)</strong>.",
      "Defined as: <strong>The capacity to accurately interpret, evaluate, and critically analyze information acquired through diverse media.</strong>",
      "A media-literate thinker evaluates any post with four critical questions:",
      "1. Who created this message, and what are their qualifications?<br>2. What is the intent (educating, selling a product, causing outrage, or clickbait)?<br>3. Is there credible empirical evidence, or just emotional claims?<br>4. What critical context or perspective was intentionally omitted?"
    ],
    takeaway: "An intelligent consumer is not a sponge absorbing everything, but a fine filter separating truth from noise!",
    funFact: "Over 60% of social media users share news headlines without ever clicking the link to read the full article!",
    quiz: {
      question: "What is the precise definition of 'Media Literacy'?",
      options: [
        "The ability to critically interpret, evaluate, and verify media content",
        "Purchasing the newest smartphone camera gear",
        "Sharing every post appearing on your social feed",
        "Storing media files on DVD disks"
      ],
      answer: 0,
      explain: "Media literacy represents critical thinking and evaluation skills applied to media messages."
    }
  },
  {
    id: "info-ethics",
    category: "Part 2: Information Ethics",
    title: "Information Ethics & Privacy",
    tagline: "Your moral compass in cyberspace: When no one is looking, integrity is your guide",
    glyph: "🛡️",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "Information ethics safeguard human dignity, privacy, and rights across the global digital commons.",
    interactiveType: "privacy_shield",
    story: [
      "<strong>Information Ethics (أخلاقيات المعلومات)</strong> represents: The foundational moral concepts, guidelines, and responsibilities needed to conduct appropriate and constructive activities in the information society—whether enforced by explicit legislation or not.",
      "Even when no police officer or direct law is monitoring your screen, personal ethics guide honorable conduct.",
      "<strong>Protecting Personal Information (المعلومات الشخصية):</strong>",
      "Your personal data and that of your peers (full name, home address, phone numbers, private chat logs, passwords, national ID) are strictly confidential.",
      "Publishing private conversations or photos of others without explicit consent is a grave privacy violation and may incur ethical and legal penalties."
    ],
    takeaway: "Treat others online as you wish to be treated: Respect their privacy to safeguard your own!",
    funFact: "Modern data protection frameworks (like GDPR) impose fines up to tens of millions of dollars on entities that leak user personal data!",
    quiz: {
      question: "The ethical course of action when receiving a screenshot of a private chat between friends is:",
      options: [
        "Keep it strictly confidential and do not share it, out of respect for privacy",
        "Forward it to a group chat for entertainment",
        "Post it on a public story with names blurred out",
        "Save and distribute it to other peers"
      ],
      answer: 0,
      explain: "Protecting private correspondence is a cornerstone of digital ethics."
    }
  },
  {
    id: "copyright",
    category: "Part 2: Information Ethics",
    title: "Copyright & Intellectual Property",
    tagline: "Finding an image or article on Google does NOT make it yours to claim!",
    glyph: "©️",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "Copyright rewards human ingenuity and sustains innovation across software, arts, and science.",
    interactiveType: "copyright_badge",
    story: [
      "Many students mistakenly believe that anything accessible online is free public domain to be copied, renamed, and submitted as their own work. This is entirely false!",
      "<strong>Copyright (حقوق المؤلف):</strong> A legal and ethical right that grants creators (authors, coders, photographers, artists) exclusive authority over the usage, distribution, and attribution of their original works.",
      "<strong>The Right vs. Wrong Way:</strong>",
      "❌ Wrong: Downloading someone's design, code, or essay, erasing their name, and claiming it as yours (Plagiarism / السرقة الفكرية).",
      "✅ Right: Citing sources accurately (Citation), and verifying that the license permits reuse (such as Creative Commons licenses)."
    ],
    takeaway: "Respect others' intellectual labor, so that when you create original work, your rights will be honored too!",
    funFact: "Open-source software (like Linux or Python) is free to use, but still protected by copyright licenses that require preserving author attribution!",
    quiz: {
      question: "Taking an article from the web and claiming you wrote it without citing the author is called:",
      options: [
        "Copyright Infringement & Plagiarism (سرقة فكرية)",
        "Smart utilization of digital media",
        "Primary information research",
        "Application of cross-checking"
      ],
      answer: 0,
      explain: "Attributing others' work to oneself without citation is intellectual theft."
    }
  },
  {
    id: "cyberbullying",
    category: "Part 2: Information Ethics",
    title: "Combatting Cyberbullying",
    tagline: "Kind words build worlds: Screen anonymity does not excuse cruelty",
    glyph: "🤝",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "Cyberbullying causes real psychological harm. Be brave: refuse to participate and stand up for others.",
    interactiveType: "bully_defense",
    story: [
      "<strong>Cyberbullying (التنمر الإلكتروني)</strong> is: The deliberate, repeated use of digital communication and social networks to harass, intimidate, humiliate, or insult another person.",
      "Common manifestations: Hurtful comments, sharing embarrassing photos, intentional exclusion from group channels, or creating spoof accounts to ridicule someone.",
      "⚠️ <strong>'I only reposted a funny meme!'</strong>: Sharing or liking abusive content amplifies the harm and makes you an active participant in the bullying cycle.",
      "<strong>How to act responsibly:</strong><br>1. Never participate in mocking or circulating cruelty.<br>2. Utilize Block and Report tools immediately.<br>3. Preserve evidence (screenshots) and consult a trusted adult (parents or teachers)."
    ],
    takeaway: "Be an upstander, not a bystander. Stop the chain of harm and support vulnerable peers.",
    funFact: "Major platforms deploy natural language processing AI to detect toxic remarks and automatically shield young users from harassment!",
    quiz: {
      question: "When you see a post ridiculing a schoolmate online, the correct response is to:",
      options: [
        "Do not engage, report the post, and offer private support to the student",
        "Share it privately with your friends to laugh",
        "Add a mocking comment to fit in",
        "Encourage the poster to add more photos"
      ],
      answer: 0,
      explain: "Ethical conduct requires breaking the cycle of toxicity and reporting harmful posts."
    }
  },
  {
    id: "geotagging",
    category: "Part 2: Information Ethics",
    title: "Geotagging & Location Risks",
    tagline: "A casual photo at home can pinpoint your bedroom location on a map!",
    glyph: "📍",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "EXIF metadata embedded in photos can reveal your exact GPS coordinates and timestamps without your knowledge.",
    interactiveType: "geotag_inspector",
    story: [
      "When you snap a picture on your smartphone, the camera does not just capture pixels — it embeds a hidden metadata payload known as (EXIF Data).",
      "This file may include a <strong>Geotag (العلامة الجغرافية)</strong>: the exact GPS coordinates where the photo was taken, alongside the date, time, and device model!",
      "<strong>Why is this dangerous without precautions?</strong><br>Posting photos taken inside your home or school with active geotags allows strangers to deduce your physical address, daily routes, and when the house is empty.",
      "<strong>Safety Rule:</strong> Disable camera location permissions when taking everyday home photos and strip metadata before public sharing."
    ],
    takeaway: "Keep location data separate from private photos.. Don't let your images map out your home!",
    funFact: "Several high-profile burglaries occurred because vacationers posted live photos captioned 'At the airport, nobody is home for 2 weeks' with active GPS tags!",
    quiz: {
      question: "The process of embedding GPS coordinates inside digital image and video files is termed:",
      options: [
        "Geotagging (العلامة الجغرافية)",
        "Cross-checking (التحقق المتبادل)",
        "Persistence (الاستمرارية)",
        "Expression Media (وسائط التعبير)"
      ],
      answer: 0,
      explain: "Geotagging attaches geographic positioning data directly to multimedia files."
    }
  },
  {
    id: "disinformation",
    category: "Part 2: Information Ethics",
    title: "Disinformation, Fake News & Rumors",
    tagline: "How a rumor circles the globe in seconds: The 'Pause.. Think.. Verify' protocol",
    glyph: "🛑",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "Due to rapid propagation, disinformation spreads like wildfire unless halted by conscious critical thinking.",
    interactiveType: "rumor_buster",
    story: [
      "<strong>Disinformation and Rumors (المعلومات المضللة والشائعات)</strong> are: Fabricated, distorted, or unsubstantiated claims spread deliberately to incite panic, manipulate public opinion, or generate ad revenue.",
      "Thanks to the <strong>Propagation (الانتشار)</strong> characteristic of digital networks, rumors reach millions in minutes, misleading people into believing them purely due to repetition.",
      "<strong>The Digital Safety Protocol before clicking 'Share':</strong>",
      "1. <strong>Pause:</strong> Do not let emotional shock trigger an impulsive forward.<br>2. <strong>Read:</strong> Examine the entire story; beware of sensational clickbait headlines.<br>3. <strong>Verify:</strong> Search official institutional channels and authoritative fact-checkers.<br>4. <strong>Decide:</strong> If you are not 100% certain of authenticity, break the chain and do NOT forward!"
    ],
    takeaway: "Viral reach does not equal truth.. Be the barrier where false rumors stop!",
    funFact: "An MIT study found that false and sensational rumors travel six times faster on social networks than verified factual news!",
    quiz: {
      question: "If you receive a message saying 'Forward to 10 friends immediately or your account will be deleted tonight', you should:",
      options: [
        "Ignore and delete the message immediately as a classic hoax rumor",
        "Forward it rapidly to friends just to be safe",
        "Broadcast it across all school groups",
        "Search for new phone numbers to send it to"
      ],
      answer: 0,
      explain: "Such messages are classic spam chain hoaxes designed to spread fear; they should be deleted immediately."
    }
  },
  {
    id: "smartphone-hazards",
    category: "Part 2: Information Ethics",
    title: "Smartphone Hazards & Cybercrimes",
    tagline: "Screen addiction, distracted walking, identity theft: Guarding your digital and physical well-being",
    glyph: "📱",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "Smartphones are miraculous tools for learning, but irresponsible usage threatens physical health, safety, and privacy.",
    interactiveType: "hazards_grid",
    story: [
      "The curriculum highlights critical threats linked to uncontrolled technology usage:",
      "<strong>1. Internet Addiction (إدمان الإنترنت):</strong> Excessive screen immersion that destroys sleep schedules, hampers academic focus, and erodes family communication.",
      "<strong>2. Smartphone While Walking (استخدام الهاتف أثناء المشي):</strong> Severe visual and cognitive distraction while walking on streets, causing pedestrian accidents and collisions.",
      "<strong>3. Cybercrime (الجريمة الإلكترونية):</strong> Utilizing networks and computers for illegal activities such as hacking, extortion, data theft, and financial fraud.",
      "<strong>4. Identity Theft (انتحال الشخصية):</strong> Malicious actors stealing photos and credentials to impersonate individuals or organizations for fraud.",
      "<strong>5. Leakage of Personal Information (تسريب المعلومات الشخصية):</strong> Unintentional exposure of confidential records to unauthorized third parties."
    ],
    takeaway: "You control your smartphone.. Never let your smartphone control your time, focus, and life!",
    funFact: "Some modern cities have installed LED traffic warning lights embedded directly into sidewalk pavements for distracted smartphone pedestrians!",
    quiz: {
      question: "When an attacker sets up a fake profile using your photo and name to solicit money from your classmates, this crime is:",
      options: [
        "Identity Theft (انتحال الشخصية)",
        "Cross-checking (التحقق المتبادل)",
        "Expression Media (وسائط التعبير)",
        "Primary Information (معلومات أولية)"
      ],
      answer: 0,
      explain: "Identity theft occurs when an unauthorized person impersonates someone else for malicious gain."
    }
  },
  {
    id: "dilemma-simulator",
    category: "Part 2: Information Ethics",
    title: "The Safe Online Decision Lab",
    tagline: "Real-world dilemma simulator: Put your ethical reasoning to the ultimate test!",
    glyph: "🎯",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "The Safe Online Behavior Flowchart brings all unit concepts together into real-world decision mastery.",
    interactiveType: "dilemma_sim",
    story: [
      "Now that we have explored data, media, and digital ethics, it is time for practical mastery!",
      "Every single day, you encounter situations requiring rapid ethical decisions: Do I share this? Do I accept this request? Do I strip this location tag? Do I report this post?",
      "<strong>The Complete Safe Online Behavior Flow:</strong>",
      "• Is the source verified and trustworthy? ❌ No ➔ Do NOT amplify or forward.<br>• Does it contain private data of others? ✔️ Yes ➔ Respect privacy and obtain consent.<br>• Is it protected by copyright? ✔️ Yes ➔ Attribute the creator and obey licenses.<br>• Does it reveal sensitive geotags? ✔️ Yes ➔ Strip location coordinates before uploading.<br>• Are all criteria satisfied? ➔ Share and collaborate responsibly!"
    ],
    takeaway: "Exemplary digital citizenship begins with the small, conscious choices you make behind the screen.",
    funFact: "Top tech companies and universities routinely evaluate applicants' public digital footprints to assess ethical character and responsible communication!",
    quiz: {
      question: "What is the overarching golden rule for safe and responsible interaction with digital technology?",
      options: [
        "Understand the information, verify accuracy, respect privacy and copyright, and build positive society",
        "Share everything you find until someone explicitly asks you to take it down",
        "Stay glued to screens late at night and avoid real-world interactions",
        "Ignore copyright because the internet should be entirely free"
      ],
      answer: 0,
      explain: "This represents the grand concluding mission of Unit 1 in Information Studies and Ethics."
    }
  }
];

const LECT1_MATCH_ITEMS_EN = [
  { id: "m1", concept: "Data (البيانات)", match: "Raw unorganized facts in numbers/symbols without context" },
  { id: "m2", concept: "Information (المعلومات)", match: "Processed facts with clear meaning and decision-making value" },
  { id: "m3", concept: "Knowledge (المعرفة)", match: "Systematically analyzed information used to solve problems" },
  { id: "m4", concept: "Persistence (الاستمرارية)", match: "Digital information does not easily disappear after creation" },
  { id: "m5", concept: "Propagation (الانتشار)", match: "Rapid transmission and viral distribution to massive crowds" },
  { id: "m6", concept: "Recording Media (وسائط التسجيل)", match: "Hardware used to store and archive data (SSD, USB, Cloud)" },
  { id: "m7", concept: "Geotagging (العلامة الجغرافية)", match: "Geographic GPS coordinates embedded inside photo metadata" },
  { id: "m8", concept: "Identity Theft (انتحال الشخصية)", match: "Impersonating an individual or entity to steal data or scam" }
];


if (typeof window !== 'undefined') { window.LECT1_STAGES_EN = LECT1_STAGES_EN; window.LECT1_MATCH_ITEMS_EN = LECT1_MATCH_ITEMS_EN; }
