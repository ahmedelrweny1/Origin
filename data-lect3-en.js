/* ============================================================
   Chapter 3: Lecture 3 (Information Security & Safety Technology)
   Stage Content & Final Challenge in English
   Source: lect3en.pdf pp.24-47 (3-1 to 3-5)
   ============================================================ */

const LECT3_STAGES_EN = [
  {
    id: "cia-threats",
    category: "Part 1: Threats & Security Basics",
    title: "CIA Triad & Security Threats",
    tagline: "Confidentiality, Integrity, Availability — and the malware zoo trying to break them.",
    glyph: "🛡️",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "The CIA Fortress: Confidentiality locks the doors, Integrity guards the truth, Availability keeps the lights on.",
    interactiveType: "cia_sorter",
    story: [
      `<p class="story-lead">Imagine your school grades leak to classmates, someone alters them, or the results site won't open on results day. These three nightmares are exactly what <strong>information security</strong> prevents: properly managing information and keeping it safe, built on <strong>three essential elements</strong>:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔒</span> 1. Confidentiality</h4>
            <span class="card-badge badge-blue">Who may see it?</span>
          </div>
          <p class="card-desc">A state in which <strong>only authorized individuals</strong> can access the information.</p>
          <p class="card-example">🔍 <em>Example:</em> your passwords and private messages stay visible to you alone.</p>
          <p class="card-example">⚠️ <em>Broken by:</em> leaks, eavesdropping, password theft.</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>✅</span> 2. Integrity</h4>
            <span class="card-badge badge-amber">Is it still true?</span>
          </div>
          <p class="card-desc">A state in which information is <strong>not destroyed, tampered with, or erased</strong>.</p>
          <p class="card-example">🔍 <em>Example:</em> your 90/100 score stays 90 — never altered by error or malice.</p>
          <p class="card-example">⚠️ <em>Broken by:</em> typing errors, deliberate tampering, file deletion.</p>
        </div>
        <div class="story-card card-green-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>⚡</span> 3. Availability</h4>
            <span class="card-badge badge-green">Opens when needed?</span>
          </div>
          <p class="card-desc">A state in which information can be <strong>accessed at any time when needed</strong>.</p>
          <p class="card-example">🔍 <em>Example:</em> the results site opens on announcement day despite heavy traffic.</p>
          <p class="card-example">⚠️ <em>Broken by:</em> cyberattacks, system downtime, power loss.</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-red">
        <div class="callout-header">
          <span class="callout-icon">🎯</span>
          <h4 class="callout-title">Exam trap: tell the three apart</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">👁️</span> Wrong person saw it → <strong>Confidentiality</strong> broke.</li>
          <li><span class="list-bullet-icon">✏️</span> Data changed or became wrong → <strong>Integrity</strong> broke.</li>
          <li><span class="list-bullet-icon">🚫</span> Couldn't open it when needed → <strong>Availability</strong> broke.</li>
        </ul>
      </div>`,
      `<div class="story-card card-red-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>🦠</span> Malware: the attacker family</h4>
          <span class="card-badge badge-red">Seven types in the syllabus</span>
        </div>
        <p class="card-desc"><strong>Malware</strong> = programs designed to harm computers, sneaking in via infected websites, email attachments, USB drives, or networks. Learn each by its signature trick:</p>
        <table class="l3-mini-table">
          <tr><th>Type</th><th>Its trick in plain words</th><th>Exam keyword</th></tr>
          <tr><td><strong>🦠 Computer virus</strong></td><td>Deliberately destroys data and programs</td><td>Destruction</td></tr>
          <tr><td><strong>🐴 Trojan horse</strong></td><td>Hides inside innocent-looking software, then attacks from within</td><td>Disguise + silent infiltration</td></tr>
          <tr><td><strong>🪱 Worm</strong></td><td>Copies itself and spreads across the internet like an infection</td><td>Self-replication</td></tr>
          <tr><td><strong>👁️ Spyware</strong></td><td>Secretly steals your info and sends it to third parties</td><td>Silent theft</td></tr>
          <tr><td><strong>⌨️ Keylogger</strong></td><td>Records everything you type</td><td>Keystroke watch</td></tr>
          <tr><td><strong>📢 Adware</strong></td><td>Shows unwanted ads without consent</td><td>Ad nuisance</td></tr>
          <tr><td><strong>💰 Ransomware</strong></td><td>Locks your data and demands money to release it</td><td>Lock for ransom</td></tr>
        </table>
        <p class="card-desc" style="margin-top:0.8rem;"><strong>Unauthorized access</strong> = entering a system without permission. Done to tamper, erase, or steal, it is called <strong>cracking</strong> and its actor a <strong>cracker</strong>. Crimes committed over networks in general are <strong>cybercrime</strong>: Unauthorized Access Law violations, tampering with electronic records, and network crimes like fraud, defamation, and copyright infringement.</p>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🗺️ Mind-map: the CIA fortress</h4>
        <div class="l3-mindmap">
          <div class="l3-mind-center">🛡️ Information Security</div>
          <div class="l3-mind-branches">
            <div class="l3-mind-branch b-blue"><strong>🔒 Confidentiality</strong><small>Who may see it?<br>Leak / eavesdrop breaks it</small></div>
            <div class="l3-mind-branch b-amber"><strong>✅ Integrity</strong><small>Is it still true?<br>Tamper / destroy breaks it</small></div>
            <div class="l3-mind-branch b-green"><strong>⚡ Availability</strong><small>Opens when needed?<br>Downtime breaks it</small></div>
          </div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🦠 Diagram: where malware sneaks in</h4>
        <div class="l3-flow">
          <div class="l3-flow-node">🌐 Website<br><small>infected page</small></div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node">📧 Email<br><small>attachment</small></div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node">💾 USB<br><small>shared stick</small></div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node lock">💻 Your PC<br><small>malware inside</small></div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/digital_ethics.jpg" alt="Security basics"><span>🔒 CIA: lock the doors</span></div>
          <div class="l3-photo"><img src="assets/images/smartphone.jpg" alt="Infection vectors"><span>📲 Infection via web & mail</span></div>
          <div class="l3-photo"><img src="assets/images/personal_data_vault.jpg" alt="Protect data"><span>🪪 Leaks break confidentiality</span></div>
        </div>
        <figcaption>Read the triangle clockwise: who sees → is it true → does it open. Every threat in 3-1 targets one corner.</figcaption>
      </figure>`
    ],
    takeaway: "CIA = Confidentiality (authorized only) ⬝ Integrity (untampered) ⬝ Availability (accessible anytime) ⬝ Malware: virus, trojan, worm, spyware, ransomware ⬝ Cracker breaks in to steal/destroy.",
    funFact: "The term 'Trojan horse' comes from ancient Greek myth — just like the wooden horse of Troy, the malware pretends to be a gift while hiding attackers inside!",
    quiz: {
      question: "A cyberattack takes a school website offline so nobody can open it. Which CIA element is compromised?",
      options: [
        "Availability (information unreachable when needed)",
        "Integrity (information became inaccurate)",
        "Confidentiality (unauthorized people viewed it)",
        "Authenticity (sender identity is unknown)"
      ],
      answer: 0,
      explain: "When information becomes unavailable, Availability is compromised. Inaccurate data = Integrity; leaked to outsiders = Confidentiality."
    }
  },
  {
    id: "auth-measures",
    category: "Part 2: Passwords & Defense",
    title: "Passwords, Authentication & Defense",
    tagline: "Long secrets, one-time codes, three authentication factors, and the firewall wall.",
    glyph: "🔑",
    image: "assets/images/corporate_data_policy.jpg",
    visualCaption: "The Gatekeeper: Strong passwords, biometric scans, possession tokens, and firewall walls.",
    interactiveType: "auth_lab",
    story: [
      `<p class="story-lead">A <strong>password</strong> is the secret proving you own the account — like your house key: the longer and more intricate, the harder to copy. The syllabus sets <strong>four rules</strong> for a strong one, plus a special <strong>one-time password</strong> that changes constantly and works only once before expiring.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>🔑</span> Four rules of a strong password</h4>
          <span class="card-badge">Memorize in order</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">1</div><div><strong>Long</strong> as possible — every extra character multiplies cracking effort.</div></div>
          <div class="checklist-step"><div class="step-number">2</div><div><strong>Mix</strong> uppercase, lowercase, numbers, and symbols.</div></div>
          <div class="checklist-step"><div class="step-number">3</div><div><strong>Never</strong> use personal info (birthday, email, username).</div></div>
          <div class="checklist-step"><div class="step-number">4</div><div><strong>Never</strong> reuse the same password across services.</div></div>
        </div>
        <p class="card-desc">And avoid the classic mistake: sticking with the default initial password you first received — it may already be exposed, so change it immediately.</p>
      </div>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>🪪</span> Authentication: three ways to prove "it's me"</h4>
          <span class="card-badge badge-blue">One question tells them apart</span>
        </div>
        <div class="content-grid-2">
          <div class="story-card">
            <div class="card-header-row">
              <h4 class="card-title"><span>🧠</span> Knowledge: what you know</h4>
            </div>
            <p class="card-desc">Something only you know: user ID + password, or PIN code.</p>
          </div>
          <div class="story-card">
            <div class="card-header-row">
              <h4 class="card-title"><span>👆</span> Biometric: what you are</h4>
            </div>
            <p class="card-desc">A body or behavior trait: fingerprint, iris, vein pattern, handwriting.</p>
          </div>
          <div class="story-card">
            <div class="card-header-row">
              <h4 class="card-title"><span>📲</span> Possession: what you have</h4>
            </div>
            <p class="card-desc">An object you hold: IC card, one-time password, SMS verification code.</p>
          </div>
          <div class="story-card card-red-accent">
            <div class="card-header-row">
              <h4 class="card-title"><span>🔐</span> Two-factor vs two-step</h4>
            </div>
            <p class="card-desc"><strong>Two-factor:</strong> checks from <strong>two different types</strong> — e.g. PIN (knowledge) + SMS code (possession).</p>
            <p class="card-desc"><strong>Two-step:</strong> two checks from the <strong>same type</strong> — e.g. password + security question (both knowledge).</p>
          </div>
        </div>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">🧱</span>
          <h4 class="callout-title">Three defense lines for your computer and network</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🚪</span> <strong>Access control:</strong> restrict operation to specific verified users — like a guard who opens only for permit holders.</li>
          <li><span class="list-bullet-icon">🧱</span> <strong>Firewall:</strong> a guard at network entrances blocking <strong>intruders from outside</strong> and <strong>data leaks from inside</strong> — it works both directions.</li>
          <li><span class="list-bullet-icon">🛡️</span> <strong>Anti-virus:</strong> install <strong>antivirus software</strong> and keep its definitions current; keep the OS and apps <strong>updated</strong> to close <strong>security holes</strong>; keep regular <strong>backups</strong> of important files.</li>
        </ul>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🧱 Diagram: the firewall wall</h4>
        <div class="l3-fw">
          <div class="l3-fw-side">🌐 Outside world<small>attackers · fake sites</small></div>
          <div class="l3-fw-wall"><span>🧱 FIREWALL</span></div>
          <div class="l3-fw-side">🏢 Inner network<small>your PCs & data</small></div>
        </div>
        <div class="l3-flow">
          <div class="l3-flow-node lock">✖ Block in<small>unauthorized access</small></div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node key">🧱 Filter both ways</div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node open">⛔ Stop out<small>data leaks</small></div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🗺️ Mind-map: the 3 authentication factors</h4>
        <div class="l3-mindmap">
          <div class="l3-mind-center">🔑 Authentication: who are you?</div>
          <div class="l3-mind-branches">
            <div class="l3-mind-branch b-blue"><strong>🧠 Knowledge</strong><small>what you KNOW<br>password · PIN</small></div>
            <div class="l3-mind-branch b-amber"><strong>👆 Biometric</strong><small>what you ARE<br>fingerprint · iris</small></div>
            <div class="l3-mind-branch b-green"><strong>📲 Possession</strong><small>what you HAVE<br>IC card · SMS code</small></div>
          </div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/corporate_data_policy.jpg" alt="Access policy"><span>🚪 Access control first</span></div>
          <div class="l3-photo"><img src="assets/images/smartphone.jpg" alt="SMS code"><span>📲 SMS = possession</span></div>
          <div class="l3-photo"><img src="assets/images/info_characteristics.jpg" alt="Updates"><span>🛡️ Update + back up</span></div>
        </div>
        <figcaption>Two-factor = two DIFFERENT branches (e.g. knowledge + possession). Two-step = twice on the SAME branch.</figcaption>
      </figure>`
    ],
    takeaway: "Strong password = long + mixed + no personal info + unique ⬝ Auth = knowledge / biometric / possession ⬝ Two-factor = 2 different factors ⬝ Firewall blocks outside attacks + inside leaks ⬝ Update + antivirus + backup.",
    funFact: "A 3-character password using 36 symbols (0-9 + a-z) has only 36³ = 46,656 combos — a computer cracks it in milliseconds. Add length and each character multiplies security by 36!",
    quiz: {
      question: "Logging in with a PIN code (knowledge) plus an SMS code sent to your phone (possession) is an example of:",
      options: [
        "Two-factor authentication (two different factor types)",
        "Two-step authentication (same factor twice)",
        "Biometric authentication (body characteristics)",
        "Single sign-on (one password everywhere)"
      ],
      answer: 0,
      explain: "PIN = knowledge factor, SMS token = possession factor. Two different types combined = two-factor authentication."
    }
  },
  {
    id: "fraud-policy",
    category: "Part 2: Fraud & Policy",
    title: "Fraud, Social Engineering & Policy",
    tagline: "One-click traps, fake banks, shoulder surfers, and the policy pyramid.",
    glyph: "🎣",
    image: "assets/images/smartphone.jpg",
    visualCaption: "The Con Artist Gallery: Fake bills, fake banks, human hacking, and card skimmers.",
    interactiveType: "fraud_identifier",
    story: [
      `<p class="story-lead">A bill arrives for a service you never heard of, one click spawns a payment demand for thousands, or a "bank" email asks for your details. These aren't glitches — they are <strong>organized fraud</strong>. The syllabus names four types; learn each by its scene:</p>`,
      `<div class="content-grid-2">
        <div class="story-card card-red-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🧾</span> Fraudulent billing</h4>
            <span class="card-badge badge-red">Pay for nothing</span>
          </div>
          <p class="card-desc">Demanding payment for a <strong>fictitious service never used</strong>.</p>
          <p class="card-example">🔍 <em>Scene:</em> "You owe $50 for a subscription you never joined — pay now."</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>👆</span> One-click fraud</h4>
            <span class="card-badge badge-amber">One tap traps you</span>
          </div>
          <p class="card-desc">A single <strong>click on a link</strong> triggers a fake contract claim plus a huge demand.</p>
          <p class="card-example">🔍 <em>Scene:</em> you tap an ad and read "Subscribed! Pay $200."</p>
        </div>
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><span>🎣</span> Phishing</h4>
            <span class="card-badge badge-blue">A fake bank fishes you</span>
          </div>
          <p class="card-desc"><strong>Fake sites</strong> impersonating banks and agencies to steal PINs and card numbers.</p>
          <p class="card-example">🔍 <em>Scene:</em> a "bank" email leads to a pixel-perfect login page asking for your PIN.</p>
        </div>
        <div class="story-card">
          <div class="card-header-row">
            <h4 class="card-title"><span>💳</span> Skimming</h4>
            <span class="card-badge">A cloned copy of your card</span>
          </div>
          <p class="card-desc">Secretly <strong>copying bank-card data</strong> with hidden readers to forge counterfeits.</p>
          <p class="card-example">🔍 <em>Scene:</em> a planted device on an ATM copies every card inserted.</p>
        </div>
      </div>`,
      `<div class="story-card card-amber-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>🎭</span> Social engineering: when YOU are the vulnerability</h4>
          <span class="card-badge badge-amber">Hacking humans, not machines</span>
        </div>
        <p class="card-desc"><strong>Social engineering</strong> extracts your secrets by exploiting <strong>trust, carelessness, or inattention</strong> instead of breaking your device. Its three syllabus methods:</p>
        <div class="pill-cloud">
          <span class="pill-item">📞 Impersonation: a call in someone else's name to pump you for info</span>
          <span class="pill-item">👀 Shoulder surfing: peeking at your screen while you type your PIN</span>
          <span class="pill-item">🗑️ Dumpster diving: digging through trash for discarded secrets</span>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">📜</span>
          <h4 class="callout-title">Information Security Policy: an organization's protection constitution</h4>
        </div>
        <p style="font-size:0.92rem; margin-bottom:0.6rem; color:var(--ink-soft);">The core rules a company sets to protect its information, layered from general to specific:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🏛️</span> <strong>Basic Policy:</strong> general principles and the organization's declared stance.</li>
          <li><span class="list-bullet-icon">📏</span> <strong>Security Standards:</strong> binding rules translating policy into obligations.</li>
          <li><span class="list-bullet-icon">📋</span> <strong>Procedures & Operational Rules:</strong> detailed steps for each group and use.</li>
        </ul>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🎣 Diagram: anatomy of a phishing attack</h4>
        <div class="l3-flow">
          <div class="l3-flow-node lock">🎣 Fake bank mail<br><small>urgent lure</small></div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node lock">🌐 Fake login page<br><small>looks real</small></div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node lock">⌨️ Victim types PIN<br><small>credential harvest</small></div><span class="l3-flow-arrow danger">→</span>
          <div class="l3-flow-node lock">💸 Attacker steals<br><small>money / identity</small></div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🏛️ Mind-map: the policy pyramid</h4>
        <div class="l3-pyramid">
          <div class="l3-pyramid-tier t1">🏛️ Basic Policy<small>principles & declarations</small></div>
          <div class="l3-pyramid-tier t2">📏 Security Standards<small>rules putting policy into practice</small></div>
          <div class="l3-pyramid-tier t3">📋 Procedures & Rules<small>concrete steps per audience</small></div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/smartphone.jpg" alt="Phone fraud"><span>📲 One tap can trap you</span></div>
          <div class="l3-photo"><img src="assets/images/personal_data_vault.jpg" alt="Stolen data"><span>🪪 Stolen PINs & cards</span></div>
          <div class="l3-photo"><img src="assets/images/digital_ethics.jpg" alt="Stay alert"><span>👀 Humans are the target</span></div>
        </div>
        <figcaption>Urgency + strange link + credential request = phishing. Verify through the official app, never the link.</figcaption>
      </figure>`
    ],
    takeaway: "One-click = fake contract after 1 tap ⬝ Phishing = fake bank site steals PIN ⬝ Social engineering hacks humans (impersonation, shoulder surfing, dumpster diving) ⬝ Skimming clones cards ⬝ Policy = basic → standards → procedures.",
    funFact: "Dumpster diving is real: attackers reconstruct shredded-adjacent trash — bank statements, IDs, passwords — which is why cross-cut shredders exist!",
    quiz: {
      question: "You receive a mail that looks like it's from your bank, urging you to log in through its link and update your details. What is the safest move?",
      options: [
        "Ignore the link and open the bank's official app yourself to verify",
        "Click immediately and enter your PIN before the account closes",
        "Reply with your PIN so they can confirm",
        "Move your balance to another account just in case"
      ],
      answer: 0,
      explain: "This is the classic phishing picture: urgency plus a link. The golden rule is to always verify through the official channel, never the delivered link."
    }
  },
  {
    id: "encryption",
    category: "Part 3: Safety Technology",
    title: "Encryption: Symmetric vs Public Key",
    tagline: "Plaintext to ciphertext: who holds the key decides everything.",
    glyph: "🔐",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "The Locked Letter: Plaintext becomes ciphertext; only the right key restores it.",
    interactiveType: "encryption_lab",
    story: [
      `<p class="story-lead">You want to message a friend so nobody in between can read it. The answer is <strong>encryption</strong>: turning readable <strong>plaintext</strong> into puzzling <strong>ciphertext</strong> nobody understands, then restoring it at the recipient with <strong>decryption</strong> using an agreed secret called the <strong>key</strong>.</p>`,
      `<div class="versus-deck">
        <div class="versus-card versus-optin">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔑</span> Symmetric key</h4>
            <span class="card-badge badge-green">One shared key</span>
          </div>
          <div class="versus-status-pill">Lock and key are <strong>the same thing</strong></div>
          <p class="card-desc">Sender and receiver share <strong>the same key</strong> for locking and unlocking, exchanged secretly beforehand.</p>
          <p class="card-example">🔍 <em>Example:</em> you and a friend agree on one secret word to lock and open messages.</p>
          <div class="versus-rule-quote">✅ Very fast · ❌ Secretly delivering the key to every sender is hard</div>
        </div>
        <div class="versus-card versus-optout">
          <div class="card-header-row">
            <h4 class="card-title"><span>🔓</span> Public key</h4>
            <span class="card-badge badge-amber">Public lock, private key</span>
          </div>
          <div class="versus-status-pill">Encrypt with the <strong>recipient's public key</strong></div>
          <p class="card-desc">Messages are locked with the recipient's published <strong>public key</strong>; only their secret <strong>private key</strong> opens them.</p>
          <p class="card-example">🔍 <em>Example:</em> an open mailbox anyone can drop letters into, but only the owner holds the opening key.</p>
          <div class="versus-rule-quote">✅ Easy, safe key distribution · ❌ Slower than symmetric</div>
        </div>
      </div>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">⚡</span>
          <h4 class="callout-title">Session key method: the best of both</h4>
        </div>
        <p class="card-desc">A clever hybrid: a fast temporary <strong>session key</strong> (symmetric) is delivered wrapped in secure public-key encryption — symmetric speed with public-key distribution safety. It powers web browsing encryption (SSL/TLS).</p>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">🔑 Diagram: symmetric vs public key at a glance</h4>
        <div class="l3-flow">
          <div class="l3-flow-node">📝 Plaintext<br><small>Hello</small></div><span class="l3-flow-arrow">→</span>
          <div class="l3-flow-node key">🔑 Shared key<br><small>same both ways</small></div><span class="l3-flow-arrow">→</span>
          <div class="l3-flow-node lock">🔒 Ciphertext<br><small>&SA+F\\Cs+A</small></div><span class="l3-flow-arrow ok">→</span>
          <div class="l3-flow-node open">📝 Plaintext<br><small>same key opens</small></div>
        </div>
        <div class="l3-flow" style="margin-top:0.6rem;">
          <div class="l3-flow-node">📝 Plaintext<br><small>Hello</small></div><span class="l3-flow-arrow">→</span>
          <div class="l3-flow-node key">🔓 Public key<br><small>locks freely</small></div><span class="l3-flow-arrow">→</span>
          <div class="l3-flow-node lock">🔒 Ciphertext<br><small>&SA+F\\Cs+A</small></div><span class="l3-flow-arrow ok">→</span>
          <div class="l3-flow-node open">🔑 Private key<br><small>only recipient</small></div>
        </div>
        <table class="l3-mini-table">
          <tr><th></th><th>🔑 Symmetric</th><th>🔓 Public key</th></tr>
          <tr><th>Keys</th><td>One shared key</td><td>Public locks, private opens</td></tr>
          <tr><th>Speed</th><td>⚡ Fast</td><td>🐢 Slower</td></tr>
          <tr><th>Key sharing</th><td>❌ Hard per sender</td><td>✅ Easy, public is free</td></tr>
        </table>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/data_info_knowledge.jpg" alt="Locked letter"><span>✉️ Plaintext → ciphertext</span></div>
          <div class="l3-photo"><img src="assets/images/info_characteristics.jpg" alt="Key exchange"><span>🤝 Session key = hybrid</span></div>
          <div class="l3-photo"><img src="assets/images/media_types.jpg" alt="Secure channel"><span>📡 Keys decide everything</span></div>
        </div>
        <figcaption>Padlock rule: anyone may snap it shut (public), only you hold the opener (private).</figcaption>
      </figure>`
    ],
    takeaway: "Plaintext → (key) → ciphertext → (key) → plaintext ⬝ Symmetric = same shared key, fast, hard to distribute ⬝ Public = public locks / private opens, slower, easy management ⬝ Hybrid = session key method.",
    funFact: "Public-key encryption is like a padlock anyone can snap shut but only you can open — you hand out open padlocks (public keys) freely and keep the only key (private key)!",
    quiz: {
      question: "You must securely message 100 different parties you have never met. Which method fits best, and why?",
      options: [
        "Public key — its lock is published, no secret pre-exchange needed",
        "Symmetric — it needs no keys at all",
        "Symmetric — secretly exchanging 100 keys is always easier",
        "No difference — the methods are identical"
      ],
      answer: 0,
      explain: "Exchanging 100 secrets in advance is impractical, while a published public lock with a kept private key scales effortlessly — public-key's distribution advantage."
    }
  },
  {
    id: "signature-tls",
    category: "Part 3: Safety Technology",
    title: "Digital Signatures & SSL/TLS",
    tagline: "Hash it, sign it, verify it — then browse with https confidence.",
    glyph: "✍️",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "The Wax Seal: Hash proves integrity, private key proves sender, certificate proves identity.",
    interactiveType: "signature_lab",
    story: [
      `<p class="story-lead">A file arrives "from the company" — how do you know it's really theirs and untouched on the way? The answer is a trio: a <strong>fingerprint</strong> exposing any change, a <strong>signature</strong> proving the sender, and a <strong>certificate</strong> proving the site you're browsing.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><span>#️⃣</span> Hash function: the file's unforgeable fingerprint</h4>
          <span class="card-badge">One direction only</span>
        </div>
        <p class="card-desc">A <strong>hash function</strong> computes a fixed-length <strong>hash value</strong> for any data, like a fingerprint: changing one character flips the print entirely, and reversing the process to recover the original is <strong>impossible</strong>.</p>
        <p class="card-example">🔍 <em>Example:</em> "school" yields one print, while "schools" yields a totally different one.</p>
      </div>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><span>✍️</span> Digital signature: six steps between sender and receiver</h4>
          <span class="card-badge badge-blue">Who does what?</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">1</div><div><strong>Sender</strong> computes the <strong>fingerprint</strong> of the message.</div></div>
          <div class="checklist-step"><div class="step-number">2</div><div><strong>Sender</strong> encrypts the print with their <strong>private key</strong> — this cipher is the <strong>digital signature</strong>.</div></div>
          <div class="checklist-step"><div class="step-number">3</div><div><strong>Sender</strong> transmits <strong>message plus signature</strong> together.</div></div>
          <div class="checklist-step"><div class="step-number">4</div><div><strong>Receiver</strong> decrypts the signature with the <strong>sender's public key</strong> to recover the original print.</div></div>
          <div class="checklist-step"><div class="step-number">5</div><div><strong>Receiver</strong> computes a fresh print of the received message with the <strong>same function</strong>.</div></div>
          <div class="checklist-step"><div class="step-number">6</div><div><strong>Compare:</strong> matching prints = trusted sender and intact data; mismatch = tampering or impersonation.</div></div>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">🏅</span>
          <h4 class="callout-title">Who guarantees the public key? And what protects browsing?</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🏛️</span> <strong>Certification Authority (CA):</strong> an independent trusted party verifying every public key truly belongs to its owner, issuing a <strong>digital certificate</strong> bundling the key with its owner's details — like an official ID stamp.</li>
          <li><span class="list-bullet-icon">🔒</span> <strong>Browsing encryption (SSL/TLS):</strong> technology encrypting browser-to-server traffic with the <strong>session key method</strong>; protected pages carry the <strong>https://</strong> prefix and a padlock. TLS is the newer, safer generation of old SSL.</li>
        </ul>
      </div>`,
      `<figure class="l3-figure">
        <h4 class="l3-figure-title">✍️ Diagram: the 6-step wax seal</h4>
        <div class="l3-flow">
          <div class="l3-flow-node">📝 Hash it<br><small>Hello → 06fe3f3e</small></div><span class="l3-flow-arrow ok">→</span>
          <div class="l3-flow-node key">🔑 Sign it<br><small>private key</small></div><span class="l3-flow-arrow ok">→</span>
          <div class="l3-flow-node">📤 Send both<br><small>text + signature</small></div><span class="l3-flow-arrow ok">→</span>
          <div class="l3-flow-node">🔓 Open seal<br><small>public key</small></div><span class="l3-flow-arrow ok">→</span>
          <div class="l3-flow-node">🔁 Re-hash<br><small>same function</small></div><span class="l3-flow-arrow ok">→</span>
          <div class="l3-flow-node open">✅ Compare<br><small>match = trust</small></div>
        </div>
        <h4 class="l3-figure-title" style="margin-top:1rem;">🔒 Diagram: what your browser checks</h4>
        <div class="l3-browser">
          <div class="l3-browser-bar"><span class="lock">🔒</span><span><span class="https">https://</span>bank.example.com/login</span></div>
          <div class="l3-browser-body">🏛️ <strong>CA</strong> vouched for the public key (digital certificate) → 📡 traffic wrapped in a <strong>session key</strong> → 🎣 fake sites fail the certificate check.</div>
        </div>
        <div class="l3-photos">
          <div class="l3-photo"><img src="assets/images/info_characteristics.jpg" alt="Hash fingerprint"><span>#️⃣ Hash = one-way print</span></div>
          <div class="l3-photo"><img src="assets/images/corporate_data_policy.jpg" alt="Certificate"><span>🏅 CA issues certificates</span></div>
          <div class="l3-photo"><img src="assets/images/data_info_knowledge.jpg" alt="Secure browsing"><span>🔒 https = session key</span></div>
        </div>
        <figcaption>Match = authentic sender + untampered data. Mismatch = stop, do not install, re-fetch from the official source.</figcaption>
      </figure>`
    ],
    takeaway: "Hash = one-way fingerprint ⬝ Sign = encrypt hash with sender's private key ⬝ Verify = decrypt with sender's public key + compare ⬝ CA issues digital certificates ⬝ SSL/TLS + https protects web traffic.",
    funFact: "That little 🔒 padlock in your browser means a CA vouched for the site's public key AND all traffic is wrapped in a super-fast session key — both Lec3 ideas working together!",
    quiz: {
      question: "You download a program but its signature check fails (the two prints differ). What is the safest action?",
      options: [
        "Stop the install, re-download from the official site, and re-verify",
        "Install anyway — signatures are decoration",
        "Disable protection software to force it through",
        "Send the file to friends to test on their machines"
      ],
      answer: 0,
      explain: "Differing prints mean tampering or impersonation — the rule is to never trust a file whose signature fails."
    }
  }
];

const LECT3_MATCH_ITEMS_EN = [
  { id: "m1", concept: "Confidentiality", match: "Only authorized individuals can access the information" },
  { id: "m2", concept: "Trojan horse", match: "Malware disguised as legitimate software that infiltrates silently" },
  { id: "m3", concept: "Two-factor authentication", match: "Combining two different factors: knowledge + biometrics + possession" },
  { id: "m4", concept: "Firewall", match: "Blocks outside unauthorized access and stops inside data leaks" },
  { id: "m5", concept: "Phishing", match: "Fake bank sites stealing PINs and card numbers" },
  { id: "m6", concept: "Symmetric key encryption", match: "Same shared key for encryption and decryption — fast but hard to distribute" },
  { id: "m7", concept: "Digital signature", match: "Hash encrypted with sender's private key; verified with sender's public key" },
  { id: "m8", concept: "SSL/TLS (https)", match: "Encrypts browser-server traffic using the session key method" }
];

if (typeof window !== 'undefined') {
  window.LECT3_STAGES_EN = LECT3_STAGES_EN;
  window.LECT3_MATCH_ITEMS_EN = LECT3_MATCH_ITEMS_EN;
}
