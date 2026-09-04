/* ============================================================
   Chapter 2: Lecture 2 (Personal Information & Intellectual Property)
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
      `<p class="story-lead">In the age of pervasive digital networks, your personal data is more valuable than gold. The <strong>Act on the Protection of Personal Information</strong> defines personal data as: <em>«Information related to a living person, including data that can be readily combined with other records to identify a specific individual»</em>.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🪪</span> 1. The Four Basic Items</h4>
            <span class="card-badge badge-blue">Bedrock of Identity</span>
          </div>
          <p class="card-desc">The four fundamental pillars legally established for precise identity verification:</p>
          <div class="pill-cloud">
            <span class="pill-item">👤 Full Legal Name</span>
            <span class="pill-item">🏠 Residential Address</span>
            <span class="pill-item">📅 Date of Birth</span>
            <span class="pill-item">⚧️ Biological Gender</span>
          </div>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔢</span> 2. Personal Identification Codes</h4>
            <span class="card-badge badge-amber">Sovereign Identifiers</span>
          </div>
          <p class="card-desc">Unique numeric or alphanumeric sequences officially assigned by governments that immediately identify one individual:</p>
          <div class="pill-cloud">
            <span class="pill-item">💳 National ID Number</span>
            <span class="pill-item">🛂 Passport Number</span>
            <span class="pill-item">🚗 Driver's License Number</span>
          </div>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔒</span> 3. Special Care-Required Personal Information (Sensitive Data)</h4>
            <span class="card-badge badge-red">Supreme Safeguards & Penalties</span>
          </div>
          <p class="card-desc">High-risk personal records where unauthorized exposure causes prejudice, discrimination, or severe detriment:</p>
          <div class="pill-cloud">
            <span class="pill-item">🏥 Medical & Health Records</span>
            <span class="pill-item">🧬 Biometrics (Iris Scan & Fingerprints)</span>
            <span class="pill-item">⚖️ Criminal Background</span>
            <span class="pill-item">🕌 Religious Faith & Creeds</span>
            <span class="pill-item">🗳️ Political Opinions</span>
            <span class="pill-item">💰 Financial Standing</span>
          </div>
        </div>
      </div>`
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
      `<p class="story-lead">Modern constitutions (including <strong>Article 57 of the Egyptian Constitution</strong>) provide unshakeable protection for private life, affirming that <em>«Private life is inviolable, and its sanctity is constitutionally protected»</em>. This protection branches into three key rights:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🛡️</span> 1. Right to Privacy</h4>
            <span class="card-badge badge-blue">Constitutional Fundamental</span>
          </div>
          <p class="card-desc">The absolute right of an individual to preserve confidential domestic matters, private communications, and personal affairs from unlawful intrusion.</p>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>📷</span> 2. Image Rights (Portrait Rights)</h4>
            <span class="card-badge badge-amber">Consent-First Photography</span>
          </div>
          <p class="card-desc">Prohibits taking, recording, or publishing photographs of any individual or their facial likeness without prior explicit consent—even for family and classmates!</p>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>⭐</span> 3. Publicity Rights</h4>
            <span class="card-badge badge-red">Celebrity Economic Value</span>
          </div>
          <p class="card-desc">Protects the commercial market value of public figures' names and likenesses, prohibiting commercial merchandising without formal contractual licensing.</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-red">
        <div class="callout-header">
          <span class="callout-icon">⚖️</span>
          <h4 class="callout-title">Statutory Exceptions: When may personal data be disclosed without consent?</h4>
        </div>
        <p style="font-size:0.92rem; margin-bottom:0.6rem; color:var(--ink-soft);">The law permits third-party disclosure in four extraordinary circumstances only:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📜</span> <strong>Statutory Mandate:</strong> Specific requirements prescribed directly in laws and executive decrees.</li>
          <li><span class="list-bullet-icon">🛡️</span> <strong>Public Security:</strong> National security defense, border control, and crime prevention.</li>
          <li><span class="list-bullet-icon">🚑</span> <strong>Emergency Life Saving:</strong> Urgent hospital scenarios to save life, bodily integrity, or emergency health.</li>
          <li><span class="list-bullet-icon">🏛️</span> <strong>Judicial Subpoenas:</strong> Formal court warrants and investigatory subpoenas by public prosecutors.</li>
        </ul>
      </div>`
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
      `<p class="story-lead">When engaging with mobile applications and digital platforms, your personal data is shielded by formal enterprise compliance standards designed to guarantee transparency and user sovereignty:</p>`,
      `<div class="content-grid-2">
        <div class="story-card">
          <div class="card-header-row">
            <h4 class="card-title"><span>📋</span> Privacy Policy</h4>
            <span class="card-badge">Transparent Legal Contract</span>
          </div>
          <p class="card-desc">A legally binding public disclosure detailing: what data is collected, for what purpose, how long it is retained, security controls, and authorized third-party recipients.</p>
        </div>

        <div class="story-card">
          <div class="card-header-row">
            <h4 class="card-title"><span>🏅</span> Privacy Mark & Regulatory License</h4>
            <span class="card-badge badge-green">Official Accreditation</span>
          </div>
          <p class="card-desc">An official seal of trust awarded by national data protection authorities to companies demonstrating complete technical and statutory privacy compliance.</p>
        </div>
      </div>`,
      `<div class="versus-deck">
        <div class="versus-card versus-optin">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔒</span> Opt-in System (Prior Consent)</h4>
            <span class="card-badge badge-green">Maximum User Security</span>
          </div>
          <div class="versus-status-pill">Default: <strong>Completely Blocked</strong></div>
          <p class="card-desc">Providers cannot collect data or send promotional materials until the user deliberately clicks an affirmative consent checkbox.</p>
          <div class="versus-rule-quote">«Do nothing until I actively say YES»</div>
        </div>

        <div class="versus-card versus-optout">
          <div class="card-header-row">
            <h4 class="card-title"><span>📡</span> Opt-out System (Objection Model)</h4>
            <span class="card-badge badge-amber">Commercially Common</span>
          </div>
          <div class="versus-status-pill">Default: <strong>Active & Tracking Automatically</strong></div>
          <p class="card-desc">Data collection and service delivery proceed automatically upon registration until the user actively intervenes to uncheck or object.</p>
          <div class="versus-rule-quote">«Active by default until I instruct you to STOP»</div>
        </div>
      </div>`
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
      `<p class="story-lead"><strong>Intellectual Property Rights:</strong> The comprehensive legal framework protecting creations resulting from human mental ingenuity, divided into: <em>Industrial Property Rights</em> (industry and commerce) and <em>Copyrights</em> (arts, literature, and software).</p>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">🏛️</span>
          <h4 class="callout-title">The Foundational Rule: Formality Principle</h4>
        </div>
        <p class="card-desc">In industrial property, <strong>rights never arise spontaneously</strong>. Creators must complete formal procedures by filing an application, undergoing examination, and securing registration with the Patent and Trademark Office.</p>
      </div>`,
      `<div class="content-grid-2">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>💡</span> Patent Rights</h4>
            <span class="card-badge badge-blue">20 Years</span>
          </div>
          <p class="card-desc"><strong>Subject:</strong> Novel, inventive, and non-obvious industrial technologies with practical application.</p>
          <p class="card-example">🔍 <em>Example:</em> Breakthrough oncology drug formula, ultra-efficient processor.</p>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔧</span> Utility Model Rights</h4>
            <span class="card-badge badge-amber">7 to 10 Years</span>
          </div>
          <p class="card-desc"><strong>Subject:</strong> Practical structural improvements and mechanical adaptations to existing products (petty patent).</p>
          <p class="card-example">🔍 <em>Example:</em> Re-engineered water drainage contour in washing machine tubs.</p>
        </div>

        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🎨</span> Industrial Design Rights</h4>
            <span class="card-badge badge-green">10 + 5 Years</span>
          </div>
          <p class="card-desc"><strong>Subject:</strong> Aesthetic exterior contours, shapes, surface patterns, and decorative lines of industrial products.</p>
          <p class="card-example">🔍 <em>Example:</em> Aerodynamic sports car chassis, smartphone silhouette.</p>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🏷️</span> Trademark Rights</h4>
            <span class="card-badge badge-red">10 Yrs (Renewable Forever)</span>
          </div>
          <p class="card-desc"><strong>Subject:</strong> Distinctive names, logos, symbols, and audio cues distinguishing goods or services in commerce.</p>
          <p class="card-example">🔍 <em>Example:</em> Mercedes three-pointed star, Nike swoosh, Apple silhouette.</p>
        </div>
      </div>`
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
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">✨</span>
          <h4 class="callout-title">The Golden Rule: The Non-Formality Principle</h4>
        </div>
        <p class="card-desc">In sharp contrast to industrial property, <strong>copyright protection attaches automatically the exact instant a work is created and fixed</strong>, without requiring registration, official stamps, or fees. It protects creators regardless of whether they are amateur or professional, adult or minor!</p>
      </div>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>📚</span> Scope of Protected Works</h4>
          <span class="card-badge">Intellectual & Digital Works</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item">📖 Novels & Literary Articles</span>
          <span class="pill-item">🎭 Theater & Poems</span>
          <span class="pill-item">🎨 Paintings & Fine Art</span>
          <span class="pill-item">📸 Photography</span>
          <span class="pill-item">🎵 Musical Scores & Melodies</span>
          <span class="pill-item">🎬 Cinematographic Films</span>
          <span class="pill-item">🏛️ Architectural Blueprints</span>
          <span class="pill-item">💻 Computer Software & Source Code</span>
        </div>
      </div>`,
      `<div class="content-grid-2">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>⚖️</span> Moral Rights</h4>
            <span class="card-badge badge-blue">Perpetual & Inalienable</span>
          </div>
          <p class="card-desc">Intrinsically tied to the person of the creator; can never be sold, forfeited, or expire over time:</p>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">✍️</span> <strong>Right of Attribution:</strong> Author name credit must accompany the work forever.</li>
            <li><span class="list-bullet-icon">🛡️</span> <strong>Right of Integrity:</strong> Right to prevent any distortion, mutilation, or detrimental alteration.</li>
          </ul>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>💰</span> Economic Rights</h4>
            <span class="card-badge badge-amber">Temporary & Transferable</span>
          </div>
          <p class="card-desc">Rights governing commercial exploitation, profits, and public performance, transferable to publishers:</p>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">🖨️</span> <strong>Exploitation:</strong> Reproduction, publishing, sales, translation, and broadcasting.</li>
            <li><span class="list-bullet-icon">🤝</span> <strong>Publishing Contracts:</strong> Licensing to publishers or production studios for royalties.</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-red-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>⏳</span> Duration of Protection & The Public Domain</h4>
          <span class="card-badge badge-red">Lifetime + 50 / 70 Years</span>
        </div>
        <p class="card-desc">Economic rights persist throughout the creator's lifetime <strong>plus 50 years after death</strong> under Egyptian law (or 70 years internationally). Upon expiry, the work enters the <strong>«Public Domain»</strong> and becomes free for the world without license (e.g., novels of Taha Hussein or symphonies of Beethoven).</p>
      </div>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>📻</span> Neighboring Rights</h4>
          <span class="card-badge">Performers & Distributors</span>
        </div>
        <p class="card-desc">Specialized auxiliary rights granted to intermediaries who communicate works to society across 3 sectors:</p>
        <div class="content-grid-3" style="margin-top:0.8rem;">
          <div class="mini-feature-box">
            <div class="mini-icon">🎭</div>
            <strong>Performers</strong>
            <p style="font-size:0.82rem; margin:0; color:var(--ink-soft);">Singers, actors, and orchestra musicians.</p>
          </div>
          <div class="mini-feature-box">
            <div class="mini-icon">🎙️</div>
            <strong>Phonogram Producers</strong>
            <p style="font-size:0.82rem; margin:0; color:var(--ink-soft);">Protection of modern studio audio recordings.</p>
          </div>
          <div class="mini-feature-box">
            <div class="mini-icon">📡</div>
            <strong>Broadcasters</strong>
            <p style="font-size:0.82rem; margin:0; color:var(--ink-soft);">Radio, television networks, and carrier signals.</p>
          </div>
        </div>
      </div>`
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
      `<p class="story-lead">The underlying objective of copyright legislation is not to build knowledge monopolies, but to foster cultural flourishing by balancing: <strong>[1] Fair use of creative works for public education</strong>, and <strong>[2] Robust protection of creator rights</strong>.</p>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>⚖️</span> Statutory Exceptions for Fair & Lawful Use</h4>
          <span class="card-badge badge-green">Zero Fees & No License Needed</span>
        </div>
        <p class="card-desc">Exclusive statutory categories where protected works can be utilized without author pre-authorization:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🏠</span> <strong>Private & Domestic Personal Use:</strong> Copying an excerpt into your study journal or personal phone (distributing duplicates to classmates is illegal piracy!).</li>
          <li><span class="list-bullet-icon">🏫</span> <strong>Educational Institutions:</strong> Teachers photocopying short excerpts for classroom teaching.</li>
          <li><span class="list-bullet-icon">🎪</span> <strong>Non-Profit Performances:</strong> Free school festivals where no admission tickets are sold and performers receive zero wages.</li>
        </ul>
      </div>`,
      `<div class="story-card card-blue-accent" style="margin-top:1.2rem;">
        <div class="card-header-row">
          <h4 class="card-title"><span>📝</span> The 5 Golden Rules of Lawful Quotation</h4>
          <span class="card-badge badge-blue">Jointly Mandatory</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step">
            <div class="step-number">1</div>
            <div><strong>Subordination:</strong> Your own original scholarship must be primary; the quoted passage must remain secondary and auxiliary.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">2</div>
            <div><strong>Necessity:</strong> A genuine scholarly, scientific, or critical necessity must justify citing the excerpt.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">3</div>
            <div><strong>Clear Demarcation:</strong> The quoted text must be distinctly isolated inside quotation marks « » or an indented block.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">4</div>
            <div><strong>Rigorous Attribution:</strong> The author's name, work title, publisher, and page or year must be explicitly cited.</div>
          </div>
          <div class="checklist-step">
            <div class="step-number">5</div>
            <div><strong>Zero Alteration:</strong> You are strictly forbidden from modifying, distorting, or twisting the quoted text.</div>
          </div>
        </div>
      </div>`
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
      `<p class="story-lead">In the interconnected digital ecosystem, creators created <strong>Creative Commons (CC)</strong> licenses as a flexible declaration specifying in advance the exact terms for sharing and adapting works, governed by <strong>four modular condition badges</strong>:</p>`,
      `<div class="content-grid-2">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>👤</span> BY: Attribution</h4>
            <span class="card-badge badge-blue">Mandatory Always</span>
          </div>
          <p class="card-desc">Obligates users to credit the creator, state the work's title, and provide a hyperlink to the original source.</p>
        </div>

        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🚫💰</span> NC: Non-Commercial</h4>
            <span class="card-badge badge-red">No Commercial Profit</span>
          </div>
          <p class="card-desc">Strictly forbids using the creation or its derivatives for commercial sale, revenue generation, or advertising.</p>
        </div>

        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🟰</span> ND: No Derivatives</h4>
            <span class="card-badge badge-amber">Share As-Is Only</span>
          </div>
          <p class="card-desc">Allows verbatim distribution only; altering, translating, remixing, or building upon the work is prohibited.</p>
        </div>

        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔄</span> SA: Share-Alike</h4>
            <span class="card-badge badge-green">Wikipedia License</span>
          </div>
          <p class="card-desc">If you adapt or transform the original work, you must release your remix under the exact same CC license combination.</p>
        </div>
      </div>`,
      `<div class="story-card" style="margin-top:1.2rem;">
        <div class="card-header-row">
          <h4 class="card-title"><span>🌐</span> Standard Creative Commons Bundles</h4>
          <span class="card-badge">6 Primary Frameworks</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item"><strong>CC BY:</strong> Most permissive (share, adapt, monetize with credit)</span>
          <span class="pill-item"><strong>CC BY-NC:</strong> Free non-commercial distribution</span>
          <span class="pill-item"><strong>CC BY-SA:</strong> Share-Alike derivative license (Wikipedia standard)</span>
          <span class="pill-item"><strong>CC BY-NC-ND:</strong> Most restrictive (download and share verbatim only)</span>
        </div>
      </div>`
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
