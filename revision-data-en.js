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
  { id: 'k-cc', lecture: 'lect2', term: 'Creative Commons', brief: 'Standard sharing licenses: <strong>BY</strong> (credit) · <strong>NC</strong> (non-commercial) · <strong>ND</strong> (no changes) · <strong>SA</strong> (same license).' }
];

const REVISION_CROSS_EN = [
  {
    id: 'rev-1',
    difficulty: 'medium',
    question: 'A classmate photographs your national ID card and shares it in the class group "as a joke". Which TWO violations from the two lectures apply?',
    options: [
      'Only a joke — no violation at all.',
      'It breaks publicity rights only.',
      'It exposes a Personal ID code (Lect 2) and violates privacy + information ethics (Lect 1).',
      'It violates trademark law.'
    ],
    answer: 2,
    explain: 'An ID card holds Personal ID codes and sensitive data (Lect 2), and sharing it without consent breaches privacy and ethics (Lect 1).'
  },
  {
    id: 'rev-2',
    difficulty: 'hard',
    question: 'You want to use a classmate\'s photo in a school magazine. Combining both lectures, what is the fully correct procedure?',
    options: [
      'Just download it — it is on social media.',
      'Crop it so no one recognizes them.',
      'Get the classmate\'s explicit consent (image rights, Lect 2) AND credit the photographer (copyright attribution, Lect 1).',
      'Use it only if the magazine is printed in color.'
    ],
    answer: 2,
    explain: 'Two rights, two duties: the depicted person\'s consent (image rights) plus the photographer\'s credit (copyright).'
  },
  {
    id: 'rev-3',
    difficulty: 'hard',
    question: 'A vacation photo shows your house number in the background AND carries GPS coordinates. Which risks from both lectures combine here?',
    options: [
      'Only low photo quality.',
      'Geotagging exposure (Lect 1) plus sensitive location-data leak (Lect 2) — anyone can pinpoint your home.',
      'A copyright violation.',
      'An opt-out system error.'
    ],
    answer: 1,
    explain: 'Technical risk (embedded GPS) plus visual risk (house number) equals a full sensitive-data leak: strip EXIF and check the frame.'
  },
  {
    id: 'rev-4',
    difficulty: 'creative',
    question: 'A viral ad uses a celebrity\'s photo with a fake health claim to sell a product. Which TWO violations combine?',
    options: [
      'Bad graphic design only.',
      'Disinformation — a deliberately false claim (Lect 1) — plus publicity-rights violation for commercial use of the celebrity\'s face (Lect 2).',
      'A patent infringement.',
      'An opt-in system bug.'
    ],
    answer: 1,
    explain: 'Fake claim = disinformation; unpaid celebrity face in an ad = publicity-rights breach. Report it and never amplify it.'
  },
  {
    id: 'rev-5',
    difficulty: 'creative',
    question: 'You found a perfect image online for the school magazine. Combining media literacy (Lect 1) with CC licenses (Lect 2), what is the correct workflow?',
    options: [
      'Download and publish — online means free.',
      'Verify the source and claim (cross-checking), check the license badge, follow it (credit + non-commercial + no-changes as required).',
      'Only use it if it has many likes.',
      'Screenshot it so the license does not apply.'
    ],
    answer: 1,
    explain: 'Verify first (is it true? who made it?), then license second (BY/NC/ND/SA) — both lenses must pass.'
  },
  {
    id: 'rev-6',
    difficulty: 'medium',
    question: 'A free game demands your contacts, microphone, and always-on location for a 10% coupon. Which TWO concepts explain why this is wrong?',
    options: [
      'The discount is simply too small.',
      'Information ethics — coercive consent (Lect 1) — plus opt-in rules: unrelated permissions need clear justification (Lect 2).',
      'Patent law forbids all permissions.',
      'There is nothing wrong — users agreed.'
    ],
    answer: 1,
    explain: 'Forced "agree or lose out" consent is unethical, and opt-in requires each permission to be justified and optional.'
  }
];

if (typeof window !== 'undefined') {
  window.REVISION_KEYWORDS_EN = REVISION_KEYWORDS_EN;
  window.REVISION_CROSS_EN = REVISION_CROSS_EN;
}
