/* ============================================================
   Revision data — Lectures 1 + 2 combined (EN)
   - KEYWORDS: main terms with brief explanations
   - CROSS: new synthesis questions spanning both lectures
   ============================================================ */

const REVISION_KEYWORDS_EN = [
  // ---------- Lecture 1 ----------
  { id: 'k-data', lecture: 'lect1', term: 'Data', brief: 'Raw facts with <strong>no context</strong> — a lone number like "42" means nothing by itself.' },
  { id: 'k-info', lecture: 'lect1', term: 'Information', brief: '<strong>Data + meaning.</strong> "42°C in Cairo today" tells you something you can use.' },
  { id: 'k-know', lecture: 'lect1', term: 'Knowledge', brief: '<strong>Information + action.</strong> "It is hot, so drink water" solves a problem.' },
  { id: 'k-persist', lecture: 'lect1', term: 'Persistence', brief: 'Digital info <strong>rarely disappears</strong> — servers, caches, and screenshots keep copies.' },
  { id: 'k-repro', lecture: 'lect1', term: 'Reproducibility', brief: 'Perfect digital copies at <strong>zero cost</strong> and zero quality loss.' },
  { id: 'k-propa', lecture: 'lect1', term: 'Propagation', brief: 'Information travels at <strong>network speed</strong> — one post can reach millions in minutes.' },
  { id: 'k-primary', lecture: 'lect1', term: 'Primary information', brief: 'Data <strong>you collect yourself</strong> — your own survey or experiment.' },
  { id: 'k-secondary', lecture: 'lect1', term: 'Secondary information', brief: 'Info <strong>someone else gathered</strong> — books, news, websites. Verify it.' },
  { id: 'k-cross', lecture: 'lect1', term: 'Cross-checking', brief: 'Comparing a claim against <strong>independent reputable sources</strong> before trusting it.' },
  { id: 'k-expr', lecture: 'lect1', term: 'Expression media', brief: 'How content is <strong>created</strong> — text, photos, audio, video.' },
  { id: 'k-trans', lecture: 'lect1', term: 'Transmission media', brief: 'How content <strong>travels</strong> — internet, TV, radio.' },
  { id: 'k-rec', lecture: 'lect1', term: 'Recording media', brief: 'How content is <strong>stored</strong> — USB drives, SSDs, cloud.' },
  { id: 'k-medialit', lecture: 'lect1', term: 'Media literacy', brief: 'Reading media <strong>critically</strong>: who made this, why, and is it accurate?' },
  { id: 'k-ethics', lecture: 'lect1', term: 'Information ethics', brief: 'Doing the <strong>right thing</strong> with data — even when no law forces you.' },
  { id: 'k-copyright', lecture: 'lect1', term: 'Copyright', brief: 'The creator\'s <strong>exclusive right</strong> to their work. Assume everything is protected.' },
  { id: 'k-bully', lecture: 'lect1', term: 'Cyberbullying', brief: '<strong>Repeated, intentional harm</strong> through digital tools — not a one-time joke.' },
  { id: 'k-geo', lecture: 'lect1', term: 'Geotagging', brief: '<strong>GPS data hidden inside</strong> photos and videos, revealing exactly where they were taken.' },
  { id: 'k-disinfo', lecture: 'lect1', term: 'Disinformation', brief: '<strong>Deliberately false</strong> content made to deceive — different from an honest mistake.' },
  { id: 'k-idtheft', lecture: 'lect1', term: 'Identity theft', brief: '<strong>Stealing someone\'s identity</strong> — photo, name, data — to scam others.' },
  { id: 'k-addict', lecture: 'lect1', term: 'Internet addiction', brief: 'When screen use <strong>harms sleep, school, and relationships</strong> — past healthy habit.' },
  // ---------- Lecture 2 ----------
  { id: 'k-four', lecture: 'lect2', term: 'Four Basic Items', brief: 'The four identity pillars: <strong>name, address, date of birth, gender</strong>.' },
  { id: 'k-idcode', lecture: 'lect2', term: 'Personal ID codes', brief: '<strong>Unique official numbers</strong> — national ID, passport, driver\'s license.' },
  { id: 'k-sensitive', lecture: 'lect2', term: 'Sensitive data', brief: 'Health, biometrics, religion, criminal records — leaks cause <strong>discrimination and harm</strong>.' },
  { id: 'k-privacy', lecture: 'lect2', term: 'Right to privacy', brief: 'Your <strong>constitutional right</strong> to keep your private life private.' },
  { id: 'k-image', lecture: 'lect2', term: 'Image rights', brief: 'No one may <strong>photograph or publish you</strong> without your explicit consent.' },
  { id: 'k-publicity', lecture: 'lect2', term: 'Publicity rights', brief: 'Protects the <strong>commercial value</strong> of a celebrity\'s face and name.' },
  { id: 'k-policy', lecture: 'lect2', term: 'Privacy policy', brief: 'A company\'s <strong>binding public promise</strong> about how it handles your data.' },
  { id: 'k-mark', lecture: 'lect2', term: 'Privacy mark', brief: 'An official <strong>trust seal</strong> proving a company passed data-protection checks.' },
  { id: 'k-optin', lecture: 'lect2', term: 'Opt-in', brief: '<strong>Nothing happens until you say yes</strong> — consent first, then data collection.' },
  { id: 'k-optout', lecture: 'lect2', term: 'Opt-out', brief: '<strong>Active by default until you object</strong> — you must opt out to stop it.' },
  { id: 'k-indprop', lecture: 'lect2', term: 'Industrial property', brief: 'Patents, designs, trademarks — protects <strong>industry and commerce</strong>.' },
  { id: 'k-formality', lecture: 'lect2', term: 'Formality principle', brief: '<strong>No filing, no rights.</strong> Industrial property needs official registration.' },
  { id: 'k-patent', lecture: 'lect2', term: 'Patent', brief: 'Protects <strong>brand-new inventions</strong> for <strong>20 years</strong> from filing.' },
  { id: 'k-utility', lecture: 'lect2', term: 'Utility model', brief: 'Protects <strong>practical shape tweaks</strong> to products — the "petty patent", <strong>7 years</strong>.' },
  { id: 'k-design', lecture: 'lect2', term: 'Industrial design', brief: 'Protects the <strong>look</strong> — shapes, lines, patterns of products.' },
  { id: 'k-trademark', lecture: 'lect2', term: 'Trademark', brief: 'Protects <strong>brand identity</strong> — names, logos. <strong>10 years, renewable forever.</strong>' },
  { id: 'k-nonform', lecture: 'lect2', term: 'Non-formality', brief: 'Copyright starts <strong>automatically at creation</strong> — no filing needed.' },
  { id: 'k-moral', lecture: 'lect2', term: 'Moral rights', brief: 'Attribution + integrity. <strong>Forever, inalienable</strong> — never sold, never lost.' },
  { id: 'k-economic', lecture: 'lect2', term: 'Economic rights', brief: 'The money rights — selling, licensing. <strong>Temporary and transferable.</strong>' },
  { id: 'k-pubdom', lecture: 'lect2', term: 'Public domain', brief: 'Works whose economic rights <strong>expired</strong> — free for everyone (moral credit stays).' },
  { id: 'k-neighbor', lecture: 'lect2', term: 'Neighboring rights', brief: 'Rights of <strong>performers, producers, broadcasters</strong> who bring works to the public.' },
  { id: 'k-fairuse', lecture: 'lect2', term: 'Fair use', brief: 'Limited <strong>free uses</strong> — classroom teaching, private study, non-profit shows.' },
  { id: 'k-quote', lecture: 'lect2', term: 'Quotation rules (5)', brief: 'Subordination, necessity, <strong>quotation marks</strong>, attribution, <strong>no alteration</strong>.' },
  { id: 'k-cc', lecture: 'lect2', term: 'Creative Commons', brief: 'Standard sharing licenses: <strong>BY</strong> (credit) · <strong>NC</strong> (non-commercial) · <strong>ND</strong> (no changes) · <strong>SA</strong> (same license).' },
  // ---------- Lecture 3 ----------
  { id: 'k-cia', lecture: 'lect3', term: 'CIA triad', brief: 'Three pillars that must stand together: <strong>Confidentiality + Integrity + Availability</strong>. One pillar falls, the system is weak.' },
  { id: 'k-cia-i', lecture: 'lect3', term: 'Confidentiality', brief: 'Only <strong>authorized people</strong> can see the data — encryption and permissions guard it.' },
  { id: 'k-cia-c', lecture: 'lect3', term: 'Integrity', brief: 'Nobody <strong>changed</strong> the data without approval — the digital signature proves it is untouched.' },
  { id: 'k-cia-a', lecture: 'lect3', term: 'Availability', brief: 'The service is <strong>working when you need it</strong> — backups and redundancy protect it from outages.' },
  { id: 'k-password', lecture: 'lect3', term: 'Strong password', brief: 'Long, <strong>mixed (cases, digits, symbols)</strong>, and different for every account. The worst habit: reusing one password.' },
  { id: 'k-mfa', lecture: 'lect3', term: 'Multi-factor auth', brief: 'Password <strong>plus a second proof</strong> (code, fingerprint) — a huge wall even if the password leaks.' },
  { id: 'k-phish', lecture: 'lect3', term: 'Phishing', brief: 'A message or site <strong>pretending to be official</strong> to steal your password — check sender and link before clicking.' },
  { id: 'k-soceng', lecture: 'lect3', term: 'Social engineering', brief: 'They hack <strong>the person, not the device</strong> — urgency, fear, and trust are the doors they walk through.' },
  { id: 'k-encrypt', lecture: 'lect3', term: 'Encryption', brief: 'Scramble data <strong>with a key</strong> — without the key it is just meaningless noise.' },
  { id: 'k-sig', lecture: 'lect3', term: 'Digital signature', brief: 'A fingerprint signed with your private key — it proves <strong>who sent it and that nothing changed</strong>.' },
  { id: 'k-tls', lecture: 'lect3', term: 'SSL/TLS', brief: 'It encrypts <strong>the path between you and the site</strong> — its badge is the padlock and HTTPS in the address bar.' },
  { id: 'k-firewall', lecture: 'lect3', term: 'Firewall', brief: 'The gatekeeper of your device/network — it <strong>filters what comes in and out</strong> by rules.' },
  { id: 'k-malware', lecture: 'lect3', term: 'Malware', brief: 'Viruses, worms, trojans, spyware — <strong>their sources: links, downloads, unknown flash drives</strong>.' },
  { id: 'k-ransom', lecture: 'lect3', term: 'Ransomware', brief: 'It encrypts your files and demands money — what saves you: <strong>a backup</strong>; paying is not a guarantee.' },
  { id: 'k-backup', lecture: 'lect3', term: 'Backup (3-2-1)', brief: 'Rule 3-2-1: <strong>3 copies on 2 different media, one outside the place</strong> — the last line of defense.' },
  { id: 'k-update', lecture: 'lect3', term: 'Security updates', brief: 'Updates close the holes — <strong>delaying helps the hacker, not you</strong>; turn on auto-update.' },
  { id: 'k-firstaid', lecture: 'lect3', term: 'Digital first aid', brief: 'Breach? <strong>Disconnect, change passwords, report</strong> — in that order, and fast.' },
  // ---------- Lecture 4 ----------
  { id: 'k-analog', lecture: 'lect4', term: 'Analog signal', brief: 'Values that are <strong>connected, with no steps</strong> — like the real wave of your voice.' },
  { id: 'k-digit', lecture: 'lect4', term: 'Digital signal', brief: 'Values that are <strong>stepped (0 and 1)</strong> — easy to copy, fix, and encrypt. That is the power of the digital world.' },
  { id: 'k-bit', lecture: 'lect4', term: 'Bit', brief: 'Smallest unit: <strong>0 or 1</strong> — the atom of every image, sound, and text in your device.' },
  { id: 'k-byte', lecture: 'lect4', term: 'Byte', brief: '<strong>8 bits</strong> ≈ one English character — 2^8 = 256 different combinations.' },
  { id: 'k-bin', lecture: 'lect4', term: 'Binary system', brief: 'Base 2 — <strong>every place has a power (128, 64, 32…)</strong>: 1010 in binary = 10.' },
  { id: 'k-hex', lecture: 'lect4', term: 'Hexadecimal', brief: 'Digits 0-9 and A-F — a <strong>tidy shorthand for binary: each hex digit = 4 bits</strong> (A2 = 10100010).' },
  { id: 'k-ascii', lecture: 'lect4', term: 'ASCII', brief: 'A code table of <strong>7 bits = 128 symbols</strong> (letters, digits, signs) — "A" = 65, "a" = 97.' },
  { id: 'k-unicode', lecture: 'lect4', term: 'Unicode', brief: 'A universal code <strong>for all languages (Arabic/Chinese/emoji)</strong> — UTF-8 is the most used; without it Arabic text breaks on another device.' },
  { id: 'k-pixel', lecture: 'lect4', term: 'Pixel', brief: 'The smallest light dot of an image — <strong>each dot has red/green/blue values</strong> stored bit by bit.' },
  { id: 'k-rgb', lecture: 'lect4', term: 'RGB', brief: 'Colors by light: <strong>red + green + blue</strong> — full mix gives white. This is the world of screens.' },
  { id: 'k-cmy', lecture: 'lect4', term: 'CMY', brief: 'Colors by ink: <strong>cyan + magenta + yellow</strong> — mixing gives near-black. This is the world of printing.' },
  { id: 'k-res', lecture: 'lect4', term: 'Resolution', brief: 'The number of pixels in an image — <strong>more = finer detail</strong>, but a bigger file.' },
  { id: 'k-sample', lecture: 'lect4', term: 'Sampling', brief: 'Reading the sound value <strong>many times per second</strong> — higher rate = more detail and bigger file.' },
  { id: 'k-rate', lecture: 'lect4', term: 'Sample rate', brief: 'Nyquist rule: <strong>more than double the highest frequency</strong> to rebuild the sound correctly (CD: 44.1 kHz).' },
  { id: 'k-quant', lecture: 'lect4', term: 'Quantization', brief: 'Rounding each sample <strong>to the nearest stored value</strong> — 16-bit depth is more realistic than 8-bit.' },
  { id: 'k-bandwidth', lecture: 'lect4', term: 'Bitrate (bandwidth)', brief: 'How many bits per second for audio/video — <strong>higher quality = bigger file = more data use</strong>.' },
  { id: 'k-lossless', lecture: 'lect4', term: 'Lossless compression', brief: 'Unpacking gives back <strong>the exact original</strong> — required for texts and important files.' },
  { id: 'k-lossy', lecture: 'lect4', term: 'Lossy compression', brief: 'It throws away <strong>details the eye and ear barely notice</strong> — JPG/MP3: smaller size at acceptable quality.' },
  { id: 'k-huffman', lecture: 'lect4', term: 'Huffman coding', brief: '<strong>Short codes for common symbols, long for rare</strong> — and no code is the start of a longer one.' },
  { id: 'k-idesign', lecture: 'lect4', term: 'Information design', brief: 'Organizing data <strong>so the reader gets the message fast</strong> — contrast, size, and logical order that respect the eye.' }
];

const REVISION_CROSS_EN = [
  {
    id: 'rev-1',
    difficulty: 'medium',
    question: 'A classmate photographs your national ID card and shares it in the class group "as a joke". Which TWO violations from the two lectures apply?',
    options: [
      'It only breaks information ethics (Lect 1) for sharing a joke, but ID numbers are not sensitive data (Lect 2).',
      'It only breaks publicity rights (Lect 2) because your photo is on the card, not privacy rules (Lect 1).',
      'It exposes a Personal ID code (Lect 2) and violates privacy + information ethics (Lect 1).',
      'It only exposes secondary information (Lect 1) so cross-checking the number makes sharing it acceptable.'
    ],
    answer: 2,
    explain: 'An ID card holds Personal ID codes and sensitive data (Lect 2), and sharing it without consent breaches privacy and ethics (Lect 1).'
  },
  {
    id: 'rev-2',
    difficulty: 'hard',
    question: 'You want to use a classmate\'s photo in a school magazine. Combining both lectures, what is the fully correct procedure?',
    options: [
      'Get the classmate\'s consent (Lect 2) but skip credit since school magazines always count as fair use (Lect 2).',
      'Credit the photographer (Lect 1) but skip consent since the photo is already on social media (Lect 2).',
      'Get the classmate\'s explicit consent (image rights, Lect 2) AND credit the photographer (copyright attribution, Lect 1).',
      'Get consent from the magazine editor (Lect 1) and add the school trademark logo (Lect 2) to make it legal.'
    ],
    answer: 2,
    explain: 'Two rights, two duties: the depicted person\'s consent (image rights) plus the photographer\'s credit (copyright).'
  },
  {
    id: 'rev-3',
    difficulty: 'hard',
    question: 'A vacation photo shows your house number in the background AND carries GPS coordinates. Which risks from both lectures combine here?',
    options: [
      'House-number exposure only (Lect 2) — the embedded GPS coordinates (Lect 1) are harmless metadata.',
      'Geotagging exposure (Lect 1) plus sensitive location-data leak (Lect 2) — anyone can pinpoint your home.',
      'Geotagging exposure only (Lect 1) — a visible house number (Lect 2) is not sensitive personal data.',
      'A copyright problem with the camera (Lect 1) plus a missing privacy-mark seal (Lect 2) on the photo file.'
    ],
    answer: 1,
    explain: 'Technical risk (embedded GPS) plus visual risk (house number) equals a full sensitive-data leak: strip EXIF and check the frame.'
  },
  {
    id: 'rev-4',
    difficulty: 'creative',
    question: 'A viral ad uses a celebrity\'s photo with a fake health claim to sell a product. Which TWO violations combine?',
    options: [
      'Disinformation only (Lect 1) — using a celebrity face in ads is allowed without consent (Lect 2).',
      'Disinformation — a deliberately false claim (Lect 1) — plus publicity-rights violation for commercial use of the celebrity\'s face (Lect 2).',
      'Publicity-rights violation only (Lect 2) — a viral health claim needs no cross-checking (Lect 1).',
      'Identity theft of the seller (Lect 1) plus trademark protection of the product name (Lect 2).'
    ],
    answer: 1,
    explain: 'Fake claim = disinformation; unpaid celebrity face in an ad = publicity-rights breach. Report it and never amplify it.'
  },
  {
    id: 'rev-5',
    difficulty: 'creative',
    question: 'You found a perfect image online for the school magazine. Combining media literacy (Lect 1) with CC licenses (Lect 2), what is the correct workflow?',
    options: [
      'Cross-check the source and claim (Lect 1) but skip the license badge since school use is always fair use (Lect 2).',
      'Verify the source and claim (cross-checking), check the license badge, follow it (credit + non-commercial + no-changes as required).',
      'Follow the CC badge rules (Lect 2) but skip cross-checking since a licensed image must be truthful (Lect 1).',
      'Treat it as public domain (Lect 2) once saved, since persistence (Lect 1) removes the license.'
    ],
    answer: 1,
    explain: 'Verify first (is it true? who made it?), then license second (BY/NC/ND/SA) — both lenses must pass.'
  },
  {
    id: 'rev-6',
    difficulty: 'medium',
    question: 'A free game demands your contacts, microphone, and always-on location for a 10% coupon. Which TWO concepts explain why this is wrong?',
    options: [
      'An ethics problem only (Lect 1) — any permission is fine if the privacy policy mentions it (Lect 2).',
      'Information ethics — coercive consent (Lect 1) — plus opt-in rules: unrelated permissions need clear justification (Lect 2).',
      'An opt-in problem only for location (Lect 2) — contacts and microphone need no justification (Lect 1).',
      'No violation if the game shows a privacy-mark seal (Lect 2) and the coupon proves fair exchange (Lect 1).'
    ],
    answer: 1,
    explain: 'Forced "agree or lose out" consent is unethical, and opt-in requires each permission to be justified and optional.'
  },
  {
    id: 'rev-7',
    difficulty: 'medium',
    question: 'You get a text: "Your account closes in 24 hours - re-login here" with a link. Combine security thinking (L3) with information verification (L1): what is the right response?',
    options: [
      'Log in from the link immediately so the account is not closed - verification matters only later.',
      'Notice that urgency is a manipulation tool, inspect sender and link critically, and open the site yourself without the link if in doubt.',
      'Type your password into the reply assuming the bank stores it safely - HTTPS makes any message safe.',
      'Share the message in the school group saying "definitely phishing" without any inspection - sharing is the fastest protection.'
    ],
    answer: 1,
    explain: 'The same verification rules apply to messages: urgency = manipulation, inspect the source, and log in directly on the official site, never via the link.'
  },
  {
    id: 'rev-8',
    difficulty: 'hard',
    question: 'Someone calls claiming to be from the bank: "We are stopping a theft on your account - send me the verification code you received". What attack is this, and what is the right response?',
    options: [
      'An official procedure - send the code quickly so the account is secured.',
      'Social engineering - hang up, call the bank yourself from an official number; nobody ever asks for your verification code.',
      'Ransomware - the device encrypts everything on its own from the system.',
      'A system notice - the code is sent to the authorities automatically without you.'
    ],
    answer: 1,
    explain: 'Banks never ask for your verification code on a call. Urgency and fear are social engineering tools: stop, and call an official number from the bank site.'
  },
  {
    id: 'rev-9',
    difficulty: 'medium',
    question: 'You have a weekly backup on a flash drive that stays plugged into the computer. How safe is this against ransomware?',
    options: [
      'Ready - a weekly copy is enough, and a plugged drive protects it even more.',
      'Not ready - ransomware encrypts the plugged drive same as the machine; you need a disconnected copy outside the place (3-2-1).',
      'Not needed - ransomware has nothing to do with backups at all.',
      'Almost ready - double the copies to twice a day and everything is guaranteed.'
    ],
    answer: 1,
    explain: 'Ransomware encrypts every available connected medium. The only confirmed protection: a copy that is disconnected, not plugged in, and stored elsewhere.'
  }
];

/* ============================================================
   True / False bank
   ============================================================ */
const REVISION_TF_EN = [
  { id: 'tf-1', src: 'lect1', difficulty: 'easy', statement: 'Deleting a post from your account removes it from the internet completely.', answer: false, explain: 'Persistence: server logs, search caches, archives, and screenshots keep copies.' },
  { id: 'tf-2', src: 'lect1', difficulty: 'easy', statement: 'A USB flash drive is a transmission medium.', answer: false, explain: 'A USB drive stores data, so it is recording (storage) media — transmission media carry data, like the internet or TV.' },
  { id: 'tf-3', src: 'lect1', difficulty: 'medium', statement: 'Information becomes knowledge when it leads to a decision or an action.', answer: true, explain: 'That leap — from meaningful facts to "what to do" — is exactly what knowledge means.' },
  { id: 'tf-4', src: 'lect2', difficulty: 'easy', statement: 'A trademark lasts 10 years and can be renewed again and again with no end.', answer: true, explain: 'Trademarks renew every 10 years indefinitely — the only industrial right that can live forever.' },
  { id: 'tf-5', src: 'lect2', difficulty: 'medium', statement: 'You must register your story at the patent office before copyright protects it.', answer: false, explain: 'Non-formality: copyright starts automatically at creation. Only industrial property needs registration.' },
  { id: 'tf-6', src: 'lect2', difficulty: 'easy', statement: 'In an opt-out system, nothing is collected until you actively agree first.', answer: false, explain: 'That describes opt-in. Opt-out is active by default until you object.' },
  { id: 'tf-7', src: 'combined', difficulty: 'medium', statement: 'Sharing a classmate\'s photo without permission is fine as long as your account is private.', answer: false, explain: 'Image rights need explicit consent regardless of account privacy — and forwarding still spreads it.' },
  { id: 'tf-8', src: 'combined', difficulty: 'hard', statement: 'A CC BY-NC photo may be used in a paid online course as long as you credit the photographer.', answer: false, explain: 'NC bans commercial use. Credit (BY) is not enough — a paid course needs a license that allows commercial use.' },
  { id: 'tf-9', src: 'lect3', difficulty: 'medium', statement: 'Any site with HTTPS means the site itself is trustworthy and safe.', answer: false, explain: 'HTTPS encrypts the path only - the site itself can be phishing. The padlock is not a trust badge.' },
  { id: 'tf-10', src: 'lect3', difficulty: 'easy', statement: 'If support staff call and ask for your verification code, it is fine to give it.', answer: false, explain: 'The verification code is secret - neither banks nor official staff ever ask for it on a call.' },
  { id: 'tf-11', src: 'lect3', difficulty: 'medium', statement: 'Rule 3-2-1 means: 3 copies on 2 different media and 1 copy outside the place.', answer: true, explain: 'It is the golden backup rule - you need one copy that is separated and not connected to protect you from ransomware too.' },
  { id: 'tf-12', src: 'lect3', difficulty: 'easy', statement: 'It is better to postpone device updates so the device stays as it is.', answer: false, explain: 'Updates close the security holes - turn on auto-update and stop delaying.' },
  { id: 'tf-13', src: 'lect4', difficulty: 'easy', statement: 'A byte = 8 bits, and 8 bits give 256 different combinations.', answer: true, explain: '2^8 = 256 - the base rule behind storing letters and symbols in every device.' },
  { id: 'tf-14', src: 'lect4', difficulty: 'medium', statement: 'RGB is used in printing, and CMY in screens.', answer: false, explain: 'It is the other way around: RGB for screens (light), CMY for printing (ink).' },
  { id: 'tf-15', src: 'lect4', difficulty: 'medium', statement: 'Lossless compression discards details the eye and ear barely notice.', answer: false, explain: 'That describes lossy compression. Lossless returns the exact original - required for texts and important files.' },
  { id: 'tf-16', src: 'lect4', difficulty: 'medium', statement: 'ASCII supports only 128 symbols, while Unicode supports all world languages.', answer: true, explain: 'ASCII covers Latin letters, digits, and signs - Unicode extends encoding to every language, like Arabic.' }
];

/* ============================================================
   Complete-the-sentence bank (choose the missing word)
   ============================================================ */
const REVISION_COMPLETE_EN = [
  { id: 'cp-1', src: 'lect1', difficulty: 'easy', sentence: 'Raw facts without any context are called ___.', options: ['knowledge', 'wisdom', 'data', 'rumors'], answer: 2, explain: 'Data = raw facts. Meaning turns it into information; action turns that into knowledge.' },
  { id: 'cp-2', src: 'lect1', difficulty: 'medium', sentence: 'Checking a claim against independent reputable sources is called ___.', options: ['propagation', 'encryption', 'cross-checking', 'geotagging'], answer: 2, explain: 'Cross-checking means comparing independent sources before trusting or sharing.' },
  { id: 'cp-3', src: 'lect2', difficulty: 'medium', sentence: 'A patent lasts ___ from the filing date.', options: ['10 years', '7 years', '50 years', '20 years'], answer: 3, explain: 'Patents: 20 years. Utility models: 7. Trademarks: 10, renewable forever.' },
  { id: 'cp-4', src: 'lect2', difficulty: 'medium', sentence: 'The Creative Commons badge that bans commercial use is ___.', options: ['BY', 'SA', 'ND', 'NC'], answer: 3, explain: 'NC = non-commercial. BY = credit, ND = no changes, SA = same license.' },
  { id: 'cp-5', src: 'combined', difficulty: 'hard', sentence: 'Posting someone\'s photo without permission violates their ___.', options: ['patent rights', 'neighboring rights', 'image rights', 'trademark'], answer: 2, explain: 'Image rights: no photo or publishing of a person without explicit consent.' },
  { id: 'cp-6', src: 'combined', difficulty: 'hard', sentence: 'Translating a novel and selling it without permission is ___.', options: ['fair use', 'lawful quotation', 'public domain', 'copyright infringement'], answer: 3, explain: 'Translation is an exclusive economic right of the original author.' },
  { id: 'cp-7', src: 'lect3', difficulty: 'medium', sentence: 'The security pillar saying nobody changes data without permission is ___.', options: ['confidentiality', 'integrity', 'availability', 'encoding'], answer: 1, explain: 'Confidentiality: not seen. Integrity: not changed. Availability: keeps working.' },
  { id: 'cp-8', src: 'lect3', difficulty: 'medium', sentence: 'The biggest sign of social engineering in messages is ___.', options: ['urgency and fear', 'long links', 'typos', 'attached videos'], answer: 0, explain: 'Urgency and fear shut down your thinking - exactly the environment an attacker wants.' },
  { id: 'cp-9', src: 'lect4', difficulty: 'easy', sentence: 'The smallest storage unit in any device is the ___.', options: ['byte', 'bit', 'pixel', 'hertz'], answer: 1, explain: 'A bit = 0 or 1. A byte = 8 bits, enough for one letter.' },
  { id: 'cp-10', src: 'lect4', difficulty: 'medium', sentence: 'The encoding system that supports all world languages is ___.', options: ['ASCII', 'Unicode', 'Huffman', 'Morse'], answer: 1, explain: 'ASCII is Latin-only, 128 symbols - Unicode covers Arabic and much more.' },
  { id: 'cp-11', src: 'combined', difficulty: 'hard', sentence: 'Encoding an Arabic caption and the color values of a poster uses ___ together.', options: ['ASCII and RGB', 'Unicode and RGB', 'Morse and CMY', 'Huffman and ASCII'], answer: 1, explain: 'Unicode encodes the Arabic text, RGB encodes the colors - the code system depends on the data type.' }
];

/* ============================================================
   Written questions (self-check with model answers)
   ============================================================ */
const REVISION_WRITTEN_EN = [
  { id: 'wr-1', topics: 'DIKW', prompt: 'Your school tracks attendance %, assignment scores, sleep hours, and screen time. Explain what is data, what is information, and what becomes knowledge here — with one concrete action the school should take.', model: 'Numbers alone (attendance %, scores) are data. "Average is 78%" is information. "Sleep one extra hour to lift Physics" is knowledge — and that advice is the action.' },
  { id: 'wr-2', topics: 'Privacy + Geotagging', prompt: 'Before posting a photo taken at home, list the exact checks you would do (technical + visual + consent).', model: 'Turn off camera location permission; strip EXIF before uploading; check the frame for house numbers, street signs, school uniforms; get consent from everyone visible.' },
  { id: 'wr-3', topics: 'Opt-in vs Opt-out', prompt: 'A game asks for contacts + microphone + always-on location for a discount. Explain the problem using both information ethics and opt-in rules, then describe the correct design.', model: 'Coercive consent is unethical; each permission needs a clear "why" and must be optional. Correct design: ask per feature, explain why, work fully without unrelated permissions.' },
  { id: 'wr-4', topics: 'Industrial property', prompt: 'You invented a new bottle cap mechanism, designed a unique bottle shape, and created a brand logo. Which right protects each part, and what must you do first?', model: 'Mechanism idea may suit a patent or utility model; the shape is an industrial design; the logo is a trademark. First step for all three: file and register (formality principle) — no filing, no rights.' },
  { id: 'wr-5', topics: 'Verification + CC', prompt: 'You found an image online for the school magazine. Write the full workflow: how do you verify it, and how do you use it legally?', model: 'Verify: cross-check the source, author, and claim. License: read the CC badge (BY/NC/ND/SA) and obey it — credit always, no commercial use under NC, no edits under ND, same license under SA.' },
  { id: 'wr-6', topics: 'Disinformation + Bullying', prompt: 'A rumor names a specific student as a hacker and classmates start mocking them. Write your response plan combining both chapters.', model: 'Do not amplify; verify with school administration; support the targeted student privately; report the original post; refuse to forward or laugh along.' },
  { id: 'wr-7', topics: 'Digital security', prompt: 'A school computer stores grades and runs class software. Design a simple security plan: passwords, updates, backups, and suspicious messages.', model: 'A different password for every account plus multi-factor authentication. Auto-updates on. Backups on rule 3-2-1: 3 copies, 2 media, one outside the place and disconnected. Any message pushing urgency or asking for a code: stop and call the official number from the organization site.' },
  { id: 'wr-8', topics: 'Information design', prompt: 'You are making an infographic of exam results in the school magazine: explain how raw data becomes readable through grouping and design.', model: 'Numbers are raw data. Grouping them per class builds information. Design turns it into instant knowledge: a clear visual comparison, consistent color, and logical order that respects the reader eye.' }
];

if (typeof window !== 'undefined') {
  window.REVISION_KEYWORDS_EN = REVISION_KEYWORDS_EN;
  window.REVISION_CROSS_EN = REVISION_CROSS_EN;
  window.REVISION_TF_EN = REVISION_TF_EN;
  window.REVISION_COMPLETE_EN = REVISION_COMPLETE_EN;
  window.REVISION_WRITTEN_EN = REVISION_WRITTEN_EN;
}
