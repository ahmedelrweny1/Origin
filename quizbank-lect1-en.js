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
      'Information (e.g. "42 degrees today")',
      'Knowledge (e.g. "drink water today")',
      'Wisdom (e.g. "be patient in life")'
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
      'Data (raw scores listed without any average yet)',
      'Information (the average 81.67% shown without any advice)',
      'Knowledge (information + interpretation + action)',
      'Wisdom (general life advice about working hard)'
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
      'Both apps give the same value — they show the same temperature reading.',
      'The second app — it turns information into knowledge by linking it to a recommended action.',
      'The first app — it shows raw numbers faster so it must be more accurate.',
      'Neither app gives knowledge — apps only store numbers without meaning.'
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
      'All four inputs are data — the dashboard should only list raw numbers and charts without advice.',
      'Numbers are data; "your average is 78%" is information; "you should sleep 1h more to lift your Physics grade" is knowledge — and that advice is the action.',
      'The assignment average is information — attendance, sleep and screen time stay as raw data.',
      'Sleep and screen time are personal habits — they cannot become knowledge for study decisions.'
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
      'Because of Reproducibility — others saved perfect copies before you deleted it.',
      'Because of Propagation — the post had already spread quickly to followers.',
      'Because of Encryption — deleted posts stay hidden inside your account storage.'
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
      'Persistence — the rumor stays saved on servers longer than the correction.',
      'Reproducibility — copies of the rumor look clearer than the correction.',
      'Propagation (combined with human bias toward emotional content)',
      'Encryption — the rumor was less protected so it spread more easily.'
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
      'Delete quickly if you regret it — deleting removes it from everywhere.',
      '"Never post anything you wouldn\'t want a stranger — or your future boss — to see forever."',
      'A private account protects you — only friends can ever copy or share it.',
      'Use a nickname online — then nothing you post can be linked to you.'
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
      'Accept the article as correct — a professional layout, logo and photos mean facts were checked.',
      'Read three more pages from the same website — several pages from one site confirm accuracy.',
      'Compare with at least two independent, reputable sources (e.g. the university\'s official site, an encyclopedia, or an academic database).',
      'Ask classmates on WhatsApp — if most friends agree with the article then it must be true.'
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
      'The screenshot was edited — the headline text itself must have been faked by someone.',
      'The headline was taken out of context — proper verification means reading the full original article AND confirming it is still accurate today.',
      'Cross-checking is unnecessary here — one real headline online is enough proof by itself.',
      'The problem is the political view — any headline supporting an opinion must be false.'
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
      'Use only encyclopedia articles to save time — secondary sources alone are enough for research.',
      'Run a small survey of 30 classmates (primary) AND cite 2 academic articles from a university database (secondary). Compare results before drawing conclusions.',
      'Collect three different websites and combine them — more secondary sources mean stronger work.',
      'Write from personal experience and memory only — your opinion counts as primary data.'
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
      'Expression media — the TV set itself creates and performs the match.',
      'Transmission media — it carries the signal from the studio to your screen.',
      'Recording media — the TV saves a copy of the match inside the device.',
      'Display media — the screen size determines which category it belongs to.'
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
      'Only expression media — the camera and photo define the whole process.',
      'Expression (camera + photo), Recording (server storage), Transmission (internet + cellular network).',
      'Only transmission media — the internet alone defines the whole process.',
      'Recording media only — because the photo ends up stored on a server.'
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
      'Phone camera (expression) — USB drive (recording) — printed handouts (transmission) for sharing.',
      'Phone camera (expression) — cloud storage (recording) — YouTube (transmission) — because it reaches a wide audience and is reusable.',
      'A TV channel alone is enough — it can record, store and broadcast the video by itself.',
      'A USB drive alone is enough — storing the video privately covers all three media roles.'
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
      'Being able to read newspapers and watch TV channels every day.',
      'The ability to interpret, evaluate and analyze information from media accurately and objectively.',
      'Knowing how to film and edit a short video for social media.',
      'Following many influencers and sharing their posts with friends.'
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
      'The ad uses capital letters and flashy colors to grab attention.',
      'A clickbait-style promise that is too good to be true, with no evidence and no source.',
      'The ad is marked as sponsored content somewhere on the page.',
      'The ad uses the word trick to sound clever and curious.'
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
      'How many views and likes does it have? Is the editing smooth and in HD?',
      'Who is the speaker and what are their credentials? What evidence is shown? Who funded it? What information is missing or omitted?',
      'Does the speaker sound confident? Is the studio lighting professional?',
      'Did friends and family share it widely? Do comments mostly agree?'
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
      'Have them memorize names and logos of famous news channels and their evening presenters.',
      'Show two short videos on the same topic — one reliable, one with subtle manipulation — and ask them to find 3 differences that signal reliability.',
      'Have them watch news videos all day to absorb presenter style and copy how anchors speak.',
      'Ban social media for a week so they learn only from printed textbooks and avoid examples.'
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
      'Your favorite color and favorite meal.',
      'Your national ID number and home address.',
      'The name of your school and your grade.',
      'Your age group and general city area.'
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
      'Copyright and ownership of the chat text itself.',
      'Privacy and the right to confidentiality of others.',
      'Netiquette about polite language and emoji use in groups.',
      'There is no ethical rule — forwarding chats is normal gossip.'
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
      'Collect data silently in the background — installing the game itself counts as full agreement.',
      'Get clear, informed consent: explain exactly what data is collected, why, how long it is kept, and let users opt out without losing the service.',
      'Hide details inside a long Terms of Service — pressing one Accept button counts as consent.',
      'Ask for one-time consent during install — a single approval covers every future data use.'
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
      'Allow fully anonymous posts with no moderation — total freedom encourages honesty and openness.',
      'Allow anonymity but require teacher moderation, clear community rules, and a way to report harmful content. Explain this in a visible policy.',
      'Force everyone to post with full real name and class — identity alone keeps the blog safe.',
      'Disable comments and interaction entirely — with no discussion there can be no problems.'
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
      'Yes — if no copyright notice is shown then the work has no owner.',
      'No — almost all original work is copyrighted by default. The creator owns it whether or not a notice is shown.',
      'Yes — if an image was shared hundreds of times it becomes free.',
      'Yes — anything found through a search engine is free for school use.'
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
      'Use it directly without credit — anything visible on Google is free for anyone to reuse.',
      'Crop or filter the image slightly — small edits fully remove the original copyright claim.',
      'Use it with proper citation: name the author, link the source, and check the license (e.g. Creative Commons) permits your use.',
      'Copy it into your school project and list your name as the creator and owner.'
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
      'No rules at all — free to download means free from license duties and attribution.',
      'Open source has licenses (GPL, MIT, Apache). Some require you to publish your own source code; all require you to keep the original copyright notices.',
      'Yes — open source projects give up copyright so no credit or license text is needed.',
      'Only large companies must follow licenses — small student projects are automatically exempt.'
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
      'Any image found online — search results form a free library for student apps to reuse.',
      'Use royalty-free icons, Creative Commons-licensed photos (with attribution), and your own original code — and document every source clearly in the app.',
      'Buy one set of stock photos once and resell them inside your app to cover costs.',
      'Use music shared by a friend — personal sharing and spoken permission need no credit.'
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
      'A single rude message sent once during a heated argument online.',
      'Using digital tools to harass, threaten or embarrass someone repeatedly and intentionally.',
      'A light joke between friends that stops at once when someone feels hurt.',
      'An accidental tag in a group photo without harmful intent.'
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
      'Forward the screenshots to others so everyone knows what is happening.',
      'Stay silent and watch — intervening will make you the next target.',
      'Refuse to participate, block/report the content, and reach out privately to the classmate with support.',
      'Add a laughing emoji to lighten the mood and keep it friendly.'
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
      'Jokes about feelings are always fine — people are too sensitive and should quietly ignore harsh words.',
      'Cyberbullying is defined by impact + repetition + intent, not by the speaker\'s intention. If the target is harmed and the behavior is repeated, it qualifies — regardless of "just joking".',
      'The friend is right — targets should build resilience quietly instead of complaining to others.',
      'Cyberbullying only counts if threats arrive every single day without any pause or break.'
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
      'Print a large poster with anti-bullying slogans and hang it in the main hallway.',
      'Run an empathy exercise: students spend a day using a shared anonymous account, then discuss how words felt when they could not see who said them.',
      'Ban all phones during school hours so no online messaging can happen at school.',
      'Give a long lecture explaining legal punishments and school rules for harassment.'
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
      'A small caption added below a photo for decoration.',
      'Geographic GPS data embedded in a photo or video.',
      'A hashtag added to a post to show the city name.',
      'A filter that improves the colors of travel photos.'
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
      'It only shares the general city name so your street stays hidden.',
      'Anyone who downloads the photo can read the GPS coordinates and identify your home address or routine.',
      'It only works outdoors in public so home photos stay safe.',
      'It only affects battery life because location runs constantly.'
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
      'Keep camera location switched on — GPS tags help friends find vacation spots easily.',
      'Disable location permissions for the camera, strip EXIF metadata before uploading, and never photograph documents or house numbers.',
      'Post vacation photos while still traveling — live daily updates prove the trip is real.',
      'Rely on the platform privacy settings — uploads remove any risky or private details.'
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
      'Location tags help friends find you — keep them on so friends see the house number, street and Wi-Fi.',
      '"Before you post a photo from inside, turn off Location for the camera and check the picture for anything that shows our address — like the house number, a street sign, or our Wi-Fi name."',
      'A photo filter hides background details — editing brightness and colors alone protects your address.',
      'A private account hides everything you post — followers can never copy, save or share it further.'
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
      'A small spelling mistake that changes a word by accident.',
      'False information deliberately created or spread to deceive people.',
      'False information shared by mistake without intent to harm.',
      'An exaggerated ad that makes a product sound better.'
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
      'Forward it quickly to be safe — warning others cannot cause harm.',
      'Forward it only to family — a small circle stays safe to share.',
      'Recognize it as a hoax, do not forward, delete it, and warn the sender briefly.',
      'Forward it after editing — changing a few words makes it safe.'
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
      'STOP — readers forwarded it instantly without pausing to think.',
      'READ — skimming only the headline gives enough context to judge.',
      'VERIFY — without a verifiable source, the chain breaks here.',
      'DECIDE — personal excitement alone justifies pressing share.'
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
      'A quick quiz matching viral headlines to newspaper logos, fonts and page layouts.',
      'A "reaction test": show 3 viral headlines, give 30 seconds per headline to decide SHARE / WAIT / DISCARD and justify — then reveal which were real.',
      'Have students memorize names of famous outlets, reporters and evening bulletins.',
      'Give a long lecture explaining why lying online is morally wrong for students.'
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
      'Checking the time on your phone once or twice during the day.',
      'Sleep loss, falling grades and skipping family time because of excessive screen use.',
      'Charging your phone overnight so it is ready in the morning.',
      'Using a calculator app briefly to check math homework.'
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
      'Treat it as a harmless joke and ignore it — fake accounts disappear if you wait.',
      'Identity Theft. First step: report the fake account to the platform, warn your friends publicly, and save screenshots as proof.',
      'Message the scammer and send a small amount of money to test if they are real.',
      'Create several fake accounts yourself with similar names to confuse the scammer.'
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
      'Your connection will be slower because many strangers share the Wi-Fi.',
      'A "man-in-the-middle" attack: someone on the same network could read your unencrypted traffic or steal your login.',
      'The cafe owner will automatically save copies of your photos.',
      'There is no real risk — a familiar cafe name means it is safe.'
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
      'You are right — skilled users who avoid strange sites and odd links stay completely safe without extra steps.',
      '"Cybercrime targets anyone — kids, gamers, shoppers. Your data, accounts and photos are valuable. One weak password or one fake link is enough. Protecting yourself is a basic life skill, like locking the front door."',
      'Only careless older users get hacked — young gamers playing daily can spot every fake link and message.',
      'Just avoid online shopping and banking — without shop accounts or saved cards nothing can be stolen.'
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
      'How many followers the author has on the platform.',
      'How quickly the post is spreading among friends.'
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
      'Forward it immediately — urgent news should always be shared fast.',
      'Strip the personal data OR get the person\'s consent. Otherwise, respect their privacy and do not forward.',
      'Forward it with a warning emoji — an emoji shows you care.',
      'Forward it only from a private account — few followers means no harm.'
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
      'Only location privacy — faces shown in public need no permission.',
      'Privacy (location), image rights (the friend\'s face), and possibly copyright (the photo itself).',
      'Only copyright — only the photographer ownership matters here.',
      'No rights apply — anything visible online is free to repost.'
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
      'Post quickly to stay popular — attention and speed matter more than checking facts.',
      '"Treat people online the way you want to be treated: check before you share, ask before you tag, and never take what is not yours."',
      'Stay offline as much as possible — avoiding the internet avoids every possible problem.',
      'Always be kind and polite online — kindness and manners alone cover every duty.'
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
      'Nothing is wrong — downloading an image from search gives shared ownership and full rights to reuse it.',
      'It is Copyright infringement AND a Media Literacy failure (no verification). You should privately tell them the truth, suggest crediting the original creator, and not amplify the claim.',
      'Comment publicly under the post to expose the lie and warn every classmate in front of everyone.',
      'Report the account to the platform and police at once so they face immediate harsh punishment.'
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
      'Share it in a small funny group — close trusted friends will never spread it further.',
      'Strip the Geotag, blur the house number, ask the friend for consent before sharing — and if unsure, do not share.',
      'Share it with one trusted friend only — a single person cannot cause any leak.',
      'Take a screenshot and repost it — screenshots remove all location metadata.'
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
      'Share the rumor briefly in a small chat to see how classmates react to it.',
      'Refuse to spread it, verify with school administration, support the targeted student, and report the original post.',
      'Argue with everyone in the comments until they admit they are wrong.',
      'Wait quietly for the rumor to fade — stepping in will only spread it more.'
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
      'Be the first to share breaking news quickly with all your friends.',
      '"Verify before you amplify. Credit before you copy. Ask before you tag. Support before you scroll."',
      'Always be polite and use kind words in every comment you write.',
      'Never argue with anyone online — staying silent keeps every space safe.'
    ],
    answer: 1,
    explain: 'A great pledge is short, memorable and action-oriented. The four clauses each anchor one chapter — turning knowledge into habits.'
  }
];

if (typeof window !== 'undefined') { window.LECT1_QUIZBANK_EN = LECT1_QUIZBANK_EN; }
