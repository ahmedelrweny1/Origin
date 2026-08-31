/* ============================================================
   Question Bank — Unit 1: Information, Media & Cyber Ethics
   Each stage gets: 1 easy + 1 medium + 1 hard + 1 creative.
   Plus 4 cross-stage "creative" questions.
   Total: 48 + 4 = 52 questions.
   ============================================================ */

const LECT1_QUIZBANK_EN = [
  /* ========================================================
     01. DIKW — Data, Information, Knowledge
     ======================================================== */
  {
    id: 'q-dikw-easy',
    stageId: 'dikw',
    difficulty: 'easy',
    question: 'Which of the following is the simplest form: just a raw fact without context?',
    options: [
      'Data (e.g. the number "42")',
      'Information (e.g. "42 degrees in Cairo today")',
      'Knowledge (e.g. "drink water because it is hot")',
      'Wisdom (a life lesson)'
    ],
    answer: 0,
    explain: 'Data is the rawest layer — a single fact or symbol. Context and meaning are added later to turn data into information, then knowledge.'
  },
  {
    id: 'q-dikw-medium',
    stageId: 'dikw',
    difficulty: 'medium',
    question: 'Your teacher calculates the average of three exam scores for a student and writes "Average = 81.67% — the student needs help with Physics." Which level of the DIKW pyramid is this?',
    options: [
      'Pure data',
      'Pure information',
      'Knowledge (information + interpretation + action)',
      'Wisdom'
    ],
    answer: 2,
    explain: 'The number 81.67% is information (data with meaning). The recommendation about Physics turns it into knowledge — it implies an action to solve a problem.'
  },
  {
    id: 'q-dikw-hard',
    stageId: 'dikw',
    difficulty: 'hard',
    question: 'A weather app shows "30°C in Cairo at 3 PM, humidity 40%, feels like 32°C". A second app shows the same number plus "Outdoor workers: take a 10-minute shade break every hour." Which app gives the higher DIKW value, and why?',
    options: [
      'Both are the same — temperature is temperature.',
      'The second app — it turns information into knowledge by linking it to a recommended action.',
      'The first app — fewer words mean higher accuracy.',
      'Neither — only human reasoning can produce knowledge.'
    ],
    answer: 1,
    explain: 'The second app adds interpretation + a decision-ready action. That move from "data + context" to "what to do" is the leap from information to knowledge.'
  },
  {
    id: 'q-dikw-creative',
    stageId: 'dikw',
    difficulty: 'creative',
    question: 'You are designing a school dashboard for students. You have these raw inputs: attendance %, assignment scores, sleep hours, screen time. Which of these is data, which is information, and which becomes knowledge? And what is ONE action the dashboard should suggest?',
    options: [
      'All are data — the dashboard shows numbers only.',
      'Numbers are data; "your average is 78%" is information; "you should sleep 1h more to lift your Physics grade" is knowledge — and that advice is the action.',
      'Only the average score counts as information; the rest is data only.',
      'Sleep and screen time are private and should never appear on a dashboard.'
    ],
    answer: 1,
    explain: 'The DIKW chain works best when raw inputs become a clear recommendation. The dashboard\'s value is the action — not the chart.'
  },

  /* ========================================================
     02. Characteristics — Persistence, Reproducibility, Propagation
     ======================================================== */
  {
    id: 'q-char-easy',
    stageId: 'characteristics',
    difficulty: 'easy',
    question: 'Which digital property means a piece of information can be copied thousands of times with zero loss in quality?',
    options: [
      'Persistence',
      'Reproducibility',
      'Propagation',
      'Encryption'
    ],
    answer: 1,
    explain: 'Reproducibility — perfect digital copies at almost no cost. A printed book degrades with each photocopy; a PDF does not.'
  },
  {
    id: 'q-char-medium',
    stageId: 'characteristics',
    difficulty: 'medium',
    question: 'You delete a post from your account. Why might the post still exist somewhere else?',
    options: [
      'Because of Persistence — server logs, search caches, archive sites and other people\'s screenshots keep copies.',
      'Because of Reproducibility — copies are perfect.',
      'Because of Propagation — it travels fast.',
      'Because deleting only works on weekends.'
    ],
    answer: 0,
    explain: 'Persistence is the property that makes digital information hard to destroy. Even when you remove the original, traces remain on servers, caches, archives and screenshots.'
  },
  {
    id: 'q-char-hard',
    stageId: 'characteristics',
    difficulty: 'hard',
    question: 'A rumor spreads to 100,000 people in 2 hours, while a correction from an official source reaches only 8,000 in the same time. Which digital property best explains this asymmetry?',
    options: [
      'Persistence',
      'Reproducibility',
      'Propagation (combined with human bias toward emotional content)',
      'Encryption'
    ],
    answer: 2,
    explain: 'Propagation — information travels at the speed of networks, and emotionally charged content propagates much faster than dry corrections. This is why fake news often beats the truth.'
  },
  {
    id: 'q-char-creative',
    stageId: 'characteristics',
    difficulty: 'creative',
    question: 'You want to teach your little brother ONE rule that uses ALL three digital properties (Persistence, Reproducibility, Propagation) to keep him safe. What is the rule?',
    options: [
      '"Never use the internet."',
      '"Never post anything you wouldn\'t want a stranger — or your future boss — to see forever."',
      '"Always post to private accounts."',
      '"Use a different name online."'
    ],
    answer: 1,
    explain: 'Because of persistence + reproducibility + propagation, anything you post can be copied, archived and shared widely. The safest assumption is permanence and reach.'
  },

  /* ========================================================
     03. Primary / Secondary / Cross-checking
     ======================================================== */
  {
    id: 'q-src-easy',
    stageId: 'primary-secondary',
    difficulty: 'easy',
    question: 'You distribute a survey to your class asking how many hours per day they spend on their phone. What kind of information did you collect?',
    options: [
      'Primary information — you gathered it yourself directly.',
      'Secondary information — you read it from a website.',
      'Tertiary information — found in an encyclopedia.',
      'Recorded information — copied from a USB drive.'
    ],
    answer: 0,
    explain: 'Primary information is data you collect yourself through direct methods like surveys, experiments or observation.'
  },
  {
    id: 'q-src-medium',
    stageId: 'primary-secondary',
    difficulty: 'medium',
    question: 'You read in a news article that "Cairo University is the oldest university in Egypt." To apply Cross-checking, the BEST next step is:',
    options: [
      'Trust the article — it has a logo.',
      'Read three more articles from the same website.',
      'Compare with at least two independent, reputable sources (e.g. the university\'s official site, an encyclopedia, or an academic database).',
      'Ask your friend on WhatsApp.'
    ],
    answer: 2,
    explain: 'Cross-checking means comparing independent reputable sources, not just reading more of the same. The official source + an academic source is the strongest check.'
  },
  {
    id: 'q-src-hard',
    stageId: 'primary-secondary',
    difficulty: 'hard',
    question: 'A classmate shares a screenshot of a news headline that supports their political view. The headline is real, but the original article was published 8 years ago in a different context. What is the main problem here?',
    options: [
      'The screenshot is fake.',
      'The headline was taken out of context — proper verification means reading the full original article AND confirming it is still accurate today.',
      'Cross-checking does not apply to news.',
      'The classmate is a hacker.'
    ],
    answer: 1,
    explain: 'A real headline can still mislead. Cross-checking includes checking the date, original context and whether the information is still valid — not just whether it exists.'
  },
  {
    id: 'q-src-creative',
    stageId: 'primary-secondary',
    difficulty: 'creative',
    question: 'Your school project is on "the effect of social media on teenagers". You have ONE week. Design a quick research plan that mixes Primary and Secondary sources properly.',
    options: [
      'Use only Wikipedia to save time.',
      'Run a small survey of 30 classmates (primary) AND cite 2 academic articles from a university database (secondary). Compare results before drawing conclusions.',
      'Copy from three different websites and combine them.',
      'Make up a story based on personal opinion.'
    ],
    answer: 1,
    explain: 'Good research combines first-hand evidence (primary) with verified existing knowledge (secondary). Triangulating the two gives credibility and originality.'
  },

  /* ========================================================
     04. Media Types — Expression / Transmission / Recording
     ======================================================== */
  {
    id: 'q-media-easy',
    stageId: 'media-types',
    difficulty: 'easy',
    question: 'A USB Flash drive is an example of which kind of media?',
    options: [
      'Expression media',
      'Transmission media',
      'Recording (storage) media',
      'Live broadcast media'
    ],
    answer: 2,
    explain: 'Recording media store data so it can be retrieved later. USB drives, SSDs and cloud storage all belong here.'
  },
  {
    id: 'q-media-medium',
    stageId: 'media-types',
    difficulty: 'medium',
    question: 'You watch a live football match on TV. The TV broadcast is an example of:',
    options: [
      'Expression media — the TV creates the match.',
      'Transmission media — it carries the signal from the studio to your screen.',
      'Recording media — it stores the match.',
      'A web browser.'
    ],
    answer: 1,
    explain: 'TV, radio and the internet are transmission media — channels that carry information from one place to another.'
  },
  {
    id: 'q-media-hard',
    stageId: 'media-types',
    difficulty: 'hard',
    question: 'A photographer takes a photo and posts it on Instagram. Which categories of media are involved in this single act?',
    options: [
      'Only expression media.',
      'Expression (camera + photo), Recording (server storage), Transmission (internet + cellular network).',
      'Only transmission media.',
      'Recording only — because the photo is stored on a server.'
    ],
    answer: 1,
    explain: 'Most digital actions involve all three. The photo is created (expression), stored on Instagram\'s servers (recording), and delivered to viewers through the internet (transmission).'
  },
  {
    id: 'q-media-creative',
    stageId: 'media-types',
    difficulty: 'creative',
    question: 'Your class is making a short educational video about online safety. Which ONE item for each category would you choose, and why?',
    options: [
      'Phone camera (expression) — USB drive (recording) — printed handouts (transmission).',
      'Phone camera (expression) — cloud storage (recording) — YouTube (transmission) — because it reaches a wide audience and is reusable.',
      'Only a TV channel.',
      'Only a USB drive — to keep it private.'
    ],
    answer: 1,
    explain: 'A modern educational pipeline picks one tool per category. Cloud storage preserves the file, YouTube is the transmission channel, and the camera creates the expression.'
  },

  /* ========================================================
     05. Media Literacy
     ======================================================== */
  {
    id: 'q-lit-easy',
    stageId: 'media-literacy',
    difficulty: 'easy',
    question: 'What is Media Literacy?',
    options: [
      'Being able to read a newspaper.',
      'The ability to interpret, evaluate and analyze information from media accurately and objectively.',
      'Knowing how to film a video.',
      'Following lots of influencers.'
    ],
    answer: 1,
    explain: 'Media literacy is about critical interpretation — asking who made the content, why, and whether it is accurate.'
  },
  {
    id: 'q-lit-medium',
    stageId: 'media-literacy',
    difficulty: 'medium',
    question: 'You see a flashy ad saying "This ONE trick will make you rich in 7 days!" What is the most likely red flag?',
    options: [
      'The use of capital letters.',
      'A clickbait-style promise that is too good to be true, with no evidence and no source.',
      'The fact that it is an advertisement.',
      'The use of the word "trick".'
    ],
    answer: 1,
    explain: 'Clickbait promises with no evidence are a hallmark of low-quality content. A media-literate reader asks: who is saying this? where is the proof? what is the source?'
  },
  {
    id: 'q-lit-hard',
    stageId: 'media-literacy',
    difficulty: 'hard',
    question: 'A viral video shows a "scientist" claiming a miracle cure. The video looks professional and has 5 million views. What 4 questions should a media-literate viewer ask?',
    options: [
      'How many likes? How fast does it load? Is the volume loud enough? Is it in HD?',
      'Who is the speaker and what are their credentials? What evidence is shown? Who funded it? What information is missing or omitted?',
      'Is the lighting good? Is the speaker wearing a lab coat? Are there ads before the video?',
      'Did my friend share it?'
    ],
    answer: 1,
    explain: 'Authority + evidence + funding + omissions — these four lenses reveal whether a piece of media is trustworthy, no matter how polished it looks.'
  },
  {
    id: 'q-lit-creative',
    stageId: 'media-literacy',
    difficulty: 'creative',
    question: 'You are designing a "spot the fake news" workshop for younger students. Pick ONE short exercise that best teaches Media Literacy.',
    options: [
      'Have them memorize famous journalists\' names.',
      'Show two short videos on the same topic — one reliable, one with subtle manipulation — and ask them to find 3 differences that signal reliability.',
      'Make them watch news all day.',
      'Ban them from using social media for a week.'
    ],
    answer: 1,
    explain: 'Comparative analysis — comparing trustworthy vs manipulated content — is one of the most effective ways to build critical reading habits.'
  },

  /* ========================================================
     06. Information Ethics — Personal Information & Privacy
     ======================================================== */
  {
    id: 'q-eth-easy',
    stageId: 'info-ethics',
    difficulty: 'easy',
    question: 'Which of the following is considered personal information that should be protected?',
    options: [
      'Your favorite color.',
      'Your national ID number and home address.',
      'The name of your school.',
      'Your age.'
    ],
    answer: 1,
    explain: 'Personal identifying information (national ID, address, phone, passwords) is the most sensitive and the most legally protected.'
  },
  {
    id: 'q-eth-medium',
    stageId: 'info-ethics',
    difficulty: 'medium',
    question: 'A friend shares a screenshot of a private chat between two classmates in the class WhatsApp group. What ethical principle has been broken?',
    options: [
      'Copyright',
      'Privacy and the right to confidentiality of others.',
      'Netiquette about emoji use.',
      'There is no rule — it is just gossip.'
    ],
    answer: 1,
    explain: 'Sharing someone\'s private conversations without consent is a serious breach of privacy, even if the content feels "harmless".'
  },
  {
    id: 'q-eth-hard',
    stageId: 'info-ethics',
    difficulty: 'hard',
    question: 'A company offers you a free game in exchange for access to your contacts, microphone and location "always". Ethically, what should the company do FIRST?',
    options: [
      'Take the data silently — users agreed.',
      'Get clear, informed consent: explain exactly what data is collected, why, how long it is kept, and let users opt out without losing the service.',
      'Hide the policy in a long Terms of Service nobody reads.',
      'Only ask for consent on the user\'s birthday.'
    ],
    answer: 1,
    explain: 'Informed, granular consent is the foundation of information ethics. Coercive consent (you must give us everything or you cannot use the service) is unethical.'
  },
  {
    id: 'q-eth-creative',
    stageId: 'info-ethics',
    difficulty: 'creative',
    question: 'You start a class blog where students can post opinions anonymously. What is the most ethical design choice?',
    options: [
      'Allow truly anonymous posts — no questions asked.',
      'Allow anonymity but require teacher moderation, clear community rules, and a way to report harmful content. Explain this in a visible policy.',
      'Force everyone to use their full real name.',
      'Disable comments entirely.'
    ],
    answer: 1,
    explain: 'Good design balances free expression with safety. Anonymity + clear rules + moderation + reporting is the most ethical and practical approach.'
  },

  /* ========================================================
     07. Copyright
     ======================================================== */
  {
    id: 'q-cp-easy',
    stageId: 'copyright',
    difficulty: 'easy',
    question: 'You find a beautiful illustration online with no copyright notice. Can you assume it is free to use?',
    options: [
      'Yes — no notice means no rights.',
      'No — almost all original work is copyrighted by default. The creator owns it whether or not a notice is shown.',
      'Yes — if it has been shared more than 100 times.',
      'Only on Tuesdays.'
    ],
    answer: 1,
    explain: 'In most countries, original work is automatically copyrighted the moment it is created — even without a notice. Always assume rights exist unless a clear license says otherwise.'
  },
  {
    id: 'q-cp-medium',
    stageId: 'copyright',
    difficulty: 'medium',
    question: 'Which of the following is the correct way to use someone else\'s image in your school project?',
    options: [
      'Use it without saying anything — it is on Google.',
      'Crop it slightly so no one notices.',
      'Use it with proper citation: name the author, link the source, and check the license (e.g. Creative Commons) permits your use.',
      'Copy it and put your name on it.'
    ],
    answer: 2,
    explain: 'Citation + license compliance is the ethical and legal standard. Open licenses like CC-BY explicitly require attribution.'
  },
  {
    id: 'q-cp-hard',
    stageId: 'copyright',
    difficulty: 'hard',
    question: 'Open-source software (e.g. Linux) is "free" to use. Does that mean there are NO rules?',
    options: [
      'No rules at all — it is free.',
      'Open source has licenses (GPL, MIT, Apache). Some require you to publish your own source code; all require you to keep the original copyright notices.',
      'Yes — open source means no copyright.',
      'Only rules on weekends.'
    ],
    answer: 1,
    explain: 'Open-source licenses grant freedoms but still impose conditions. Ignoring them is a form of copyright infringement and can put your project at legal risk.'
  },
  {
    id: 'q-cp-creative',
    stageId: 'copyright',
    difficulty: 'creative',
    question: 'You build a free app that helps students revise. You want to be respectful of creators\' rights. What is the most ethical combination of assets to use?',
    options: [
      'Any image you find online.',
      'Use royalty-free icons, Creative Commons-licensed photos (with attribution), and your own original code — and document every source clearly in the app.',
      'Use only paid stock photos and resell them.',
      'Use music from a friend without credit.'
    ],
    answer: 1,
    explain: 'Mixing public-domain, CC-licensed, and self-made assets — with proper attribution — is the cleanest ethical path for any student project.'
  },

  /* ========================================================
     08. Cyberbullying
     ======================================================== */
  {
    id: 'q-bully-easy',
    stageId: 'cyberbullying',
    difficulty: 'easy',
    question: 'What is cyberbullying?',
    options: [
      'A computer virus.',
      'Using digital tools to harass, threaten or embarrass someone repeatedly and intentionally.',
      'A funny meme.',
      'A new social network.'
    ],
    answer: 1,
    explain: 'Cyberbullying is intentional, repeated harm through digital means. The repetition and intent are what make it bullying, not a one-time joke.'
  },
  {
    id: 'q-bully-medium',
    stageId: 'cyberbullying',
    difficulty: 'medium',
    question: 'You see a classmate being mocked in a viral group chat. You are not the bully, and you are not the victim. What is the BEST response?',
    options: [
      'Share the screenshots to spread it more.',
      'Stay silent — it is not your business.',
      'Refuse to participate, block/report the content, and reach out privately to the classmate with support.',
      'Add an emoji to make it lighter.'
    ],
    answer: 2,
    explain: 'Bystanders have power. Not laughing, refusing to forward, reporting, and supporting the target are the actions that break the cycle.'
  },
  {
    id: 'q-bully-hard',
    stageId: 'cyberbullying',
    difficulty: 'hard',
    question: 'A friend says: "I just made a joke — it is not bullying, they should learn to take a joke." Which reasoning best challenges this view?',
    options: [
      'Jokes about feelings are fine — people are too sensitive.',
      'Cyberbullying is defined by impact + repetition + intent, not by the speaker\'s intention. If the target is harmed and the behavior is repeated, it qualifies — regardless of "just joking".',
      'The friend is right — victims should learn resilience.',
      'Cyberbullying is only about hacking.'
    ],
    answer: 1,
    explain: 'Intent is only one piece. Repeated harm through a digital channel, where the target cannot easily escape, qualifies as cyberbullying even when framed as humor.'
  },
  {
    id: 'q-bully-creative',
    stageId: 'cyberbullying',
    difficulty: 'creative',
    question: 'You are elected to lead an "Anti-Cyberbullying Week" at your school. Pick ONE creative project that would change behavior, not just spread posters.',
    options: [
      'Print a giant poster and put it in the hallway.',
      'Run an empathy exercise: students spend a day using a shared anonymous account, then discuss how words felt when they could not see who said them.',
      'Ban all phones at school.',
      'Give a long lecture about the law.'
    ],
    answer: 1,
    explain: 'Empathy-based exercises change behavior because students feel the impact, not just hear the rule. Behavioral change beats information dumps.'
  },

  /* ========================================================
     09. Geotagging & EXIF
     ======================================================== */
  {
    id: 'q-geo-easy',
    stageId: 'geotagging',
    difficulty: 'easy',
    question: 'What is a Geotag?',
    options: [
      'A type of emoji.',
      'Geographic GPS data embedded in a photo or video.',
      'A hashtag for geography.',
      'A new social media platform.'
    ],
    answer: 1,
    explain: 'A Geotag is GPS metadata added to media files, recording exactly where they were taken.'
  },
  {
    id: 'q-geo-medium',
    stageId: 'geotagging',
    difficulty: 'medium',
    question: 'Why is posting a photo taken at home with Geotagging enabled a privacy risk?',
    options: [
      'It lowers photo quality.',
      'Anyone who downloads the photo can read the GPS coordinates and identify your home address or routine.',
      'It uses more data.',
      'It makes the photo look bad.'
    ],
    answer: 1,
    explain: 'EXIF GPS tags reveal precise location. Combined with visual cues (front door, street sign), anyone can pinpoint where you live.'
  },
  {
    id: 'q-geo-hard',
    stageId: 'geotagging',
    difficulty: 'hard',
    question: 'You want to share vacation photos publicly but you do NOT want strangers to know your home address. What is the SAFEST plan?',
    options: [
      'Post all photos with the camera GPS on.',
      'Disable location permissions for the camera, strip EXIF metadata before uploading, and never photograph documents or house numbers.',
      'Post only at night.',
      'Just trust the platform.'
    ],
    answer: 1,
    explain: 'Layered protection works best: stop the data at the source (disable GPS) AND strip what already exists (EXIF removal) AND avoid visual reveals of sensitive locations.'
  },
  {
    id: 'q-geo-creative',
    stageId: 'geotagging',
    difficulty: 'creative',
    question: 'Your younger sibling wants to post a photo from inside your home. Teach them ONE clear rule about Geotagging in your own words.',
    options: [
      '"Tags are boring."',
      '"Before you post a photo from inside, turn off Location for the camera and check the picture for anything that shows our address — like the house number, a street sign, or our Wi-Fi name."',
      '"Always use a filter."',
      '"Use a private account and it is fine."'
    ],
    answer: 1,
    explain: 'A clear, practical rule combines source control (camera permissions) and output check (visual + metadata review). Easy to remember and to follow.'
  },

  /* ========================================================
     10. Disinformation & Rumors
     ======================================================== */
  {
    id: 'q-rumor-easy',
    stageId: 'disinformation',
    difficulty: 'easy',
    question: 'What is disinformation?',
    options: [
      'A typo on a website.',
      'False information deliberately created or spread to deceive people.',
      'A type of software update.',
      'A new brand of phone.'
    ],
    answer: 1,
    explain: 'Disinformation is intentionally false content — distinct from a mistake. The intent to deceive is what defines it.'
  },
  {
    id: 'q-rumor-medium',
    stageId: 'disinformation',
    difficulty: 'medium',
    question: 'You receive a chain message: "Forward this to 10 friends or your WhatsApp will be deleted today!" What is the correct response?',
    options: [
      'Forward it to be safe.',
      'Forward it only to your family.',
      'Recognize it as a hoax, do not forward, delete it, and warn the sender briefly.',
      'Forward it but change the number to 5.'
    ],
    answer: 2,
    explain: 'Classic chain-hoax pattern: urgency + threats. It exploits Propagation. Stopping the chain protects everyone — including the sender.'
  },
  {
    id: 'q-rumor-hard',
    stageId: 'disinformation',
    difficulty: 'hard',
    question: 'A news article claims a "medical breakthrough" but cites no study, no expert, and uses emotional language. It went viral in hours. Using the STOP–READ–VERIFY–DECIDE model, which step fails FIRST?',
    options: [
      'STOP — there was no pause before sharing.',
      'READ — reading is unnecessary if the headline is strong.',
      'VERIFY — without a verifiable source, the chain breaks here.',
      'DECIDE — you can still decide to share.'
    ],
    answer: 2,
    explain: 'A claim with no traceable source fails at the VERIFY step — and without verification, sharing is irresponsible regardless of how emotional or viral it is.'
  },
  {
    id: 'q-rumor-creative',
    stageId: 'disinformation',
    difficulty: 'creative',
    question: 'Design a one-minute classroom activity that trains students to "Stop before they Share".',
    options: [
      'A quiz on grammar.',
      'A "reaction test": show 3 viral headlines, give 30 seconds per headline to decide SHARE / WAIT / DISCARD and justify — then reveal which were real.',
      'Memorizing famous news outlets.',
      'A long lecture about lies.'
    ],
    answer: 1,
    explain: 'Active practice with real headlines builds the "stop and check" reflex — far more effective than passive warnings.'
  },

  /* ========================================================
     11. Smartphone Hazards & Cybercrime
     ======================================================== */
  {
    id: 'q-haz-easy',
    stageId: 'smartphone-hazards',
    difficulty: 'easy',
    question: 'Which of these is a sign of Internet Addiction?',
    options: [
      'Checking the time on your phone once a day.',
      'Sleep loss, falling grades and skipping family time because of excessive screen use.',
      'Charging your phone at night.',
      'Using a calculator app for math homework.'
    ],
    answer: 1,
    explain: 'When screen use harms sleep, school and relationships, it crosses from healthy habit into addiction territory.'
  },
  {
    id: 'q-haz-medium',
    stageId: 'smartphone-hazards',
    difficulty: 'medium',
    question: 'A scammer creates a new account using your photo and name, then messages your friends asking for money. What is this called, and what is the FIRST thing you should do?',
    options: [
      'It is a joke — ignore it.',
      'Identity Theft. First step: report the fake account to the platform, warn your friends publicly, and save screenshots as proof.',
      'Send the scammer money to test them.',
      'Create more fake accounts to confuse them.'
    ],
    answer: 1,
    explain: 'Identity Theft is a cybercrime. Quick reporting and warning your network limits the damage. Screenshots are essential evidence.'
  },
  {
    id: 'q-haz-hard',
    stageId: 'smartphone-hazards',
    difficulty: 'hard',
    question: 'You get a "free Wi-Fi" network at a café that has no password. You connect and log into your email. What is the most likely risk?',
    options: [
      'Your battery will drain faster.',
      'A "man-in-the-middle" attack: someone on the same network could read your unencrypted traffic or steal your login.',
      'The café will see your photos.',
      'There is no risk — free Wi-Fi is always safe.'
    ],
    answer: 1,
    explain: 'Open Wi-Fi can be intercepted. Sensitive logins should only happen over HTTPS (look for the lock icon) or, ideally, through a trusted VPN.'
  },
  {
    id: 'q-haz-creative',
    stageId: 'smartphone-hazards',
    difficulty: 'creative',
    question: 'Your friend asks: "Why should I care about cybercrime? It only happens to old people who don\'t understand tech." What is the strongest one-paragraph reply?',
    options: [
      '"You are right, it does not matter."',
      '"Cybercrime targets anyone — kids, gamers, shoppers. Your data, accounts and photos are valuable. One weak password or one fake link is enough. Protecting yourself is a basic life skill, like locking the front door."',
      '"Only old people get hacked."',
      '"Just delete your account."'
    ],
    answer: 1,
    explain: 'A strong reply uses one real example (kids/gamers/shoppers), explains why anyone is a target, and reframes digital safety as a basic habit — not an old-person problem.'
  },

  /* ========================================================
     12. Decision Lab — Cross-cutting ethics
     ======================================================== */
  {
    id: 'q-lab-easy',
    stageId: 'dilemma-simulator',
    difficulty: 'easy',
    question: 'When you are about to share digital content, what is the FIRST thing to check?',
    options: [
      'The number of likes it might get.',
      'Whether the source is reliable.',
      'The font of the text.',
      'Whether it is in color.'
    ],
    answer: 1,
    explain: 'Source reliability comes first. Everything else (timing, format, audience) is downstream of "is this true?".'
  },
  {
    id: 'q-lab-medium',
    stageId: 'dilemma-simulator',
    difficulty: 'medium',
    question: 'A post contains personal data of a third party. What should you do BEFORE forwarding?',
    options: [
      'Forward immediately — it is news.',
      'Strip the personal data OR get the person\'s consent. Otherwise, respect their privacy and do not forward.',
      'Forward but with a sad emoji.',
      'Only forward if your account is private.'
    ],
    answer: 1,
    explain: 'Personal data of others deserves the same protection you would want for your own. Either redact or get consent — otherwise do not share.'
  },
  {
    id: 'q-lab-hard',
    stageId: 'dilemma-simulator',
    difficulty: 'hard',
    question: 'You spot a Geotag in a photo you want to share, AND the photo contains a friend\'s face. Which rights are simultaneously at stake?',
    options: [
      'Only privacy — faces do not matter.',
      'Privacy (location), image rights (the friend\'s face), and possibly copyright (the photo itself).',
      'Only copyright.',
      'No rights — anything online is free.'
    ],
    answer: 1,
    explain: 'A single image can implicate multiple rights: location privacy, the depicted person\'s image rights, and the photographer\'s copyright. Good sharing means checking all three.'
  },
  {
    id: 'q-lab-creative',
    stageId: 'dilemma-simulator',
    difficulty: 'creative',
    question: 'Write the single "Golden Rule" of Digital Citizenship in one sentence that a 10-year-old can understand.',
    options: [
      '"Post anything — attention is what matters."',
      '"Treat people online the way you want to be treated: check before you share, ask before you tag, and never take what is not yours."',
      '"Stay offline forever."',
      '"Use the biggest font possible."'
    ],
    answer: 1,
    explain: 'A good Golden Rule combines empathy (treat others as you wish to be treated) with three concrete habits: verify, ask, and respect ownership.'
  },

  /* ========================================================
     CROSS-STAGE CREATIVE QUESTIONS
     ======================================================== */
  {
    id: 'q-cross-creative-1',
    stageId: null,
    difficulty: 'creative',
    question: 'A classmate posts: "I made this!" about an image they actually downloaded from Google. Combining your knowledge of Copyright and Media Literacy — what is wrong, and what would you do?',
    options: [
      'Nothing — they did not technically lie.',
      'It is Copyright infringement AND a Media Literacy failure (no verification). You should privately tell them the truth, suggest crediting the original creator, and not amplify the claim.',
      'Publicly shame them in front of the class.',
      'Report to the police immediately.'
    ],
    answer: 1,
    explain: 'Two chapters apply at once. A respectful, private correction protects both the classmate\'s reputation and the original creator\'s rights.'
  },
  {
    id: 'q-cross-creative-2',
    stageId: null,
    difficulty: 'creative',
    question: 'You receive a private photo of a friend that contains a visible house number and a Geotag. Combining Privacy and Geotagging chapters — what is the most protective action?',
    options: [
      'Share it in a "funny" group.',
      'Strip the Geotag, blur the house number, ask the friend for consent before sharing — and if unsure, do not share.',
      'Share only with one trusted friend.',
      'Screenshot and repost.'
    ],
    answer: 1,
    explain: 'Layered protection: remove the technical risk (Geotag) and the visual risk (house number), and respect consent. When in doubt, do not share.'
  },
  {
    id: 'q-cross-creative-3',
    stageId: null,
    difficulty: 'creative',
    question: 'A viral rumor names a specific student as "the hacker who broke the school network." Combining Disinformation and Cyberbullying — what is the strongest first move?',
    options: [
      'Share the rumor to see reactions.',
      'Refuse to spread it, verify with school administration, support the targeted student, and report the original post.',
      'Argue with everyone in the comments.',
      'Wait for the rumor to die down.'
    ],
    answer: 1,
    explain: 'Disinformation + Cyberbullying = real harm. Refusing to amplify, verifying, supporting the target, and reporting are the four actions that protect the named student.'
  },
  {
    id: 'q-cross-creative-4',
    stageId: null,
    difficulty: 'creative',
    question: 'You want to design your school\'s "Digital Citizenship Pledge." Combining Ethics, Copyright, Privacy and Cyberbullying — pick the ONE most powerful line to include.',
    options: [
      '"Be the first to share."',
      '"Verify before you amplify. Credit before you copy. Ask before you tag. Support before you scroll."',
      '"Always use emojis."',
      '"Never delete a post."'
    ],
    answer: 1,
    explain: 'A great pledge is short, memorable and action-oriented. The four clauses each anchor one chapter — turning knowledge into habits.'
  }
];