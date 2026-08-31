/* ============================================================
   Comprehensive Exam — Unit 1: Information, Media & Cyber Ethics
   15 questions, mixed difficulty, covers all 12 chapters.
   Pass threshold: 7 / 15.
   ============================================================ */

const LECT1_EXAM_EN = [
  {
    id: 'exam-1',
    stageId: 'dikw',
    difficulty: 'medium',
    question: 'A hospital database stores each patient\'s raw temperature readings. A doctor compares a patient\'s temperatures across the past week, spots a fever trend, and decides to increase the patient\'s checkup frequency. Which level of the DIKW pyramid does the doctor\'s decision represent?',
    options: [
      'Data — the raw temperature numbers.',
      'Information — temperatures with dates attached.',
      'Knowledge — interpretation that triggers an action.',
      'Wisdom — a life lesson about medicine.'
    ],
    answer: 2,
    explain: 'The decision combines the readings with medical context to produce an action (more frequent checkups). That leap — from "numbers" to "what to do" — is knowledge.'
  },
  {
    id: 'exam-2',
    stageId: 'characteristics',
    difficulty: 'medium',
    question: 'You upload a photo to a social network, then delete it. Two years later a friend finds it via a search engine. Which digital property explains this?',
    options: [
      'Reproducibility',
      'Propagation',
      'Persistence',
      'Encryption'
    ],
    answer: 2,
    explain: 'Persistence — server logs, search caches, and archive sites retained copies long after you deleted the original.'
  },
  {
    id: 'exam-3',
    stageId: 'primary-secondary',
    difficulty: 'medium',
    question: 'To study "how often my classmates exercise per week", the BEST first-hand data source is:',
    options: [
      'A Wikipedia article on exercise.',
      'A survey you design and distribute to your classmates.',
      'A news segment on youth fitness.',
      'A random YouTube video.'
    ],
    answer: 1,
    explain: 'Primary information is gathered by you, directly. A self-designed survey fits perfectly; the others are secondary.'
  },
  {
    id: 'exam-4',
    stageId: 'media-types',
    difficulty: 'medium',
    question: 'A school uses a fiber-optic cable network to send video lessons from a central server to every classroom. The fiber-optic network is an example of:',
    options: [
      'Expression media',
      'Transmission media',
      'Recording (storage) media',
      'A web browser'
    ],
    answer: 1,
    explain: 'Transmission media carry information between points — fiber, Wi-Fi, radio waves, copper wire.'
  },
  {
    id: 'exam-5',
    stageId: 'media-literacy',
    difficulty: 'hard',
    question: 'A 30-second viral video claims "drinking lemon water cures COVID in 3 days" with a confident speaker in a white coat. Applying the Media Literacy 4-lens test (Authority · Evidence · Funding · Omissions), what is the WEAKEST part of this content?',
    options: [
      'The 30-second length.',
      'The white coat — clothing is irrelevant.',
      'No verifiable evidence, no named expert, no credible institution, and an obvious omission (no medical studies cited).',
      'The lemon in the title.'
    ],
    answer: 2,
    explain: 'Authority is missing, evidence is missing, funding is hidden, and key context (studies, side-effects, peer review) is omitted. Three of the four lenses fail simultaneously.'
  },
  {
    id: 'exam-6',
    stageId: 'info-ethics',
    difficulty: 'hard',
    question: 'A shopping app asks for: contacts list, microphone, location "always", and photos — in exchange for a 10% discount coupon. Ethically, what is the main problem?',
    options: [
      'The discount is too small.',
      'Informed consent is missing: the app does not explain WHY each permission is needed, and refusal is treated as "no discount".',
      'Permissions are illegal — apps can never ask for them.',
      'There is no problem — users agreed.'
    ],
    answer: 1,
    explain: 'Coercive consent + opaque justification = unethical. Proper practice: granular permission requests with clear "why" explanations, and the service must work without unrelated permissions.'
  },
  {
    id: 'exam-7',
    stageId: 'copyright',
    difficulty: 'hard',
    question: 'You want to publish a free school magazine that includes 3 photographs. Photograph A is by a classmate with no visible license. Photograph B is licensed CC-BY (requires attribution). Photograph C is by a famous photographer with "© All rights reserved". Which combination is legally and ethically correct?',
    options: [
      'Use all three — they are on the internet.',
      'Use A and C, skip B because attribution is annoying.',
      'Use B with proper attribution, replace A and C with your own photos or licensed alternatives.',
      'Use only A — since it has no notice, it is free.'
    ],
    answer: 2,
    explain: 'A and C are copyrighted by default (no notice = no free pass). Only B is licensed for reuse, and only WITH attribution. The ethical path is to source properly or create your own.'
  },
  {
    id: 'exam-8',
    stageId: 'cyberbullying',
    difficulty: 'hard',
    question: 'You discover a group chat where classmates are sharing edited, embarrassing photos of another student. You are not the bully and not the target. Which combination of actions BEST counters the harm?',
    options: [
      'Stay silent — it is not your business.',
      'Forward to your own friends so they can see how bad it is.',
      'Refuse to engage, leave the group, report the content, save evidence, and privately support the targeted student.',
      'Send an emoji to lighten the mood.'
    ],
    answer: 2,
    explain: 'Bystanders have real power. The four moves — disengage, report, document, support — break the cycle and protect the target.'
  },
  {
    id: 'exam-9',
    stageId: 'geotagging',
    difficulty: 'medium',
    question: 'You want to share family photos publicly without revealing your home address. Which combination is SAFEST?',
    options: [
      'Post the photos with the camera GPS turned ON, but ask people not to look up the location.',
      'Disable Location permissions for the camera app, strip EXIF metadata before uploading, and avoid photographing house numbers or street signs.',
      'Post only at night when fewer people are online.',
      'Use a private account, then it does not matter.'
    ],
    answer: 1,
    explain: 'Layered protection: stop metadata at the source (disable GPS), strip any residual EXIF, and remove visual reveals. Privacy comes from design, not from asking strangers politely.'
  },
  {
    id: 'exam-10',
    stageId: 'disinformation',
    difficulty: 'hard',
    question: 'A chain message reads: "URGENT! Forward this to 20 friends or your phone will explode tomorrow! Share now!" Applying the STOP–READ–VERIFY–DECIDE model, what is the BEST response?',
    options: [
      'Forward quickly — better safe than sorry.',
      'Forward to 5 friends to be partially safe.',
      'STOP — recognize the emotional manipulation. READ the message critically (no source, impossible claim). VERIFY (no news outlet reports phone explosions). DECIDE not to share, delete, and warn the sender.',
      'Forward but change the number to 25.'
    ],
    answer: 2,
    explain: 'The message hits every hoax pattern: urgency + threat + reward (safety). Recognizing the pattern is the first step; the chain stops with you.'
  },
  {
    id: 'exam-11',
    stageId: 'smartphone-hazards',
    difficulty: 'hard',
    question: 'A scammer creates a fake account with your photo and name, then messages your friends asking for emergency money. Which combination is the CORRECT first response?',
    options: [
      'Reply to the scammer to argue.',
      'Send the scammer a small amount to test them.',
      'Report the fake account to the platform immediately, save screenshots, and warn your friends publicly.',
      'Create more fake accounts to confuse them.'
    ],
    answer: 2,
    explain: 'Identity theft is a crime. Speed matters: report + document + warn your network limits the damage. Screenshots are the evidence trail.'
  },
  {
    id: 'exam-12',
    stageId: 'dilemma-simulator',
    difficulty: 'creative',
    question: 'A classmate posts: "I made this awesome design!" but the image is clearly a stock illustration from a website. Combining Copyright and Media Literacy — what is the right action?',
    options: [
      'Publicly shame them — they are a fraud.',
      'Do nothing — calling it out is rude.',
      'Privately message them with the source, suggest crediting the original creator, and avoid amplifying the false claim. Privacy + accuracy both matter.',
      'Report them to the police.'
    ],
    answer: 2,
    explain: 'A private, factual correction protects the classmate\'s reputation AND the original creator\'s rights. Public shaming is disproportionate; silence normalizes the issue.'
  },
  {
    id: 'exam-13',
    stageId: 'dilemma-simulator',
    difficulty: 'creative',
    question: 'You receive a friend\'s photo that contains: (a) their face, (b) their home\'s street sign in the background, (c) embedded GPS coordinates. Which THREE rights or risks are simultaneously at stake?',
    options: [
      'Only privacy.',
      'Privacy (location + face), image rights (the friend\'s likeness), and possibly copyright (the photo itself).',
      'Only copyright.',
      'No rights — it is a private message.'
    ],
    answer: 1,
    explain: 'A single image can implicate location privacy, the depicted person\'s image rights, AND the photographer\'s copyright. Responsible sharing means checking all three.'
  },
  {
    id: 'exam-14',
    stageId: 'cyberbullying',
    difficulty: 'creative',
    question: 'A viral rumor names a specific student as "the hacker who broke the school network". Combining Disinformation and Cyberbullying — the strongest first move is:',
    options: [
      'Share the rumor to find out more.',
      'Refuse to amplify, verify with school administration, support the targeted student publicly, and report the original post.',
      'Argue with commenters.',
      'Wait for the rumor to die down.'
    ],
    answer: 1,
    explain: 'Disinformation × Cyberbullying = real harm. The four actions — refuse, verify, support, report — protect the named student and stop the chain.'
  },
  {
    id: 'exam-15',
    stageId: 'dilemma-simulator',
    difficulty: 'creative',
    question: 'Your school\'s IT team proposes installing classroom cameras that record students 24/7 "for safety", with footage stored on school servers "indefinitely". Combining Information Ethics, Geotagging/Privacy, and Media Literacy — what is the most responsible position?',
    options: [
      'Agree immediately — safety is more important than anything.',
      'Refuse all cameras — privacy is absolute.',
      'Question the necessity, the data retention period, who can access the footage, and propose limits (only public areas, only school hours, auto-delete after 30 days, with a clear access policy).',
      'Demand the cameras be hidden so no one knows they exist.'
    ],
    answer: 2,
    explain: 'Real digital citizenship is about proportional, transparent, time-bound solutions — not all-or-nothing. Privacy is balanced against legitimate needs through clear policies.'
  }
];

// Expose for cross-script access (fix for window scope bug)
if (typeof window !== 'undefined') {
  window.LECT1_EXAM_EN = LECT1_EXAM_EN;
}