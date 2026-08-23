const ERAS_EN = [
  {
    id: "abacus",
    year: "~2400 BC",
    title: "The Abacus",
    tagline: "The very first calculator—made of wood and beads.",
    glyph: "🧮",
    image: "assets/images/abacus.jpg",
    visualCaption: "Moving physical beads along rods = making math visible.",
    story: [
      "Long before electricity, people needed help with numbers. Merchants in ancient Mesopotamia, China, and Greece used a simple wooden frame with sliding beads: the abacus.",
      "Each rod stands for a place value — ones, tens, hundreds — just like the digits in a number. Slide the beads, and you can add, subtract, multiply, and divide surprisingly fast.",
      "Here's the amazing part: a trained abacus user could often out-calculate an early electronic computer. The abacus is still used in some shops today!"
    ],
    people: ["Ancient merchants in Mesopotamia, China & Greece"],
    invention: "A bead-frame that turned math into physical movement.",
    whyItMattered: "It was the first machine built to help the human brain compute. The idea of 'a device that stores and moves information' starts here.",
    funFact: "In 1946, a Japanese abacus master beat an American soldier using an electric mechanical calculator in a public adding-machine contest.",
    quiz: {
      question: "What does each rod on an abacus represent?",
      options: [
        "A place value (ones, tens, hundreds…)",
        "One year of history",
        " A different color of bead",
        "The speed of calculation"
      ],
      answer: 0,
      explain: "Exactly like digits in a number — moving beads between rods is how you add and carry."
    }
  },
  {
    id: "pascaline",
    year: "1642",
    title: "The Pascaline",
    tagline: "A 19-year-old builds a machine to calculate his father's taxes.",
    glyph: "⚙️",
    image: "assets/images/pascaline.jpg",
    visualCaption: "Gears and dials turning — calculation you can crank by hand.",
    story: [
      "Blaise Pascal was a teenager in France when he watched his father, a tax collector, spend hours doing painful arithmetic by hand. So he built him a machine.",
      "The Pascaline used rotating metal gears: each gear had 10 teeth for the digits 0–9. When a gear passed 9 and rolled over, it clicked the next gear forward — automatic carrying!",
      "About 50 machines were built. Some still work today, almost 400 years later."
    ],
    people: ["Blaise Pascal — French mathematician, inventor, later famous philosopher"],
    invention: "The first widely known mechanical calculator that could add and subtract on its own.",
    whyItMattered: "Pascal proved a machine could replace human effort in calculation. Every 'carry the one' you've ever done — his gears did it automatically.",
    funFact: "Pascal named his invention the 'Arithmometer' but everyone just called it 'la Pascaline'. Today, a popular programming language is named Pascal in his honor."
  },
  {
    id: "babbage",
    year: "1830s",
    title: "Charles Babbage",
    tagline: "The man who designed a computer 100 years too early.",
    glyph: "🔩",
    image: "assets/images/babbage.jpg",
    visualCaption: "The Analytical Engine — designed in brass, steam, and gears.",
    story: [
      "Charles Babbage, an English mathematician, was frustrated that printed math tables were full of errors. His solution? Build a machine that calculates them perfectly: the Difference Engine.",
      "But then he dreamed much bigger. His Analytical Engine design had something revolutionary: it could be programmed. It had a 'store' (memory), a 'mill' (processor), and used punched cards for instructions.",
      "Sound familiar? Store + processor + programs = the basic recipe of every computer you've ever used. Sadly, 1800s technology couldn't build his design accurately, and it was never completed in his lifetime."
    ],
    people: ["Charles Babbage — 'the father of the computer'"],
    invention: "The Analytical Engine — the first design of a general-purpose programmable computer.",
    whyItMattered: "Babbage imagined what a computer should be before electronics even existed. Modern computers follow his blueprint: memory, processor, input, output.",
    funFact: "In 1991, the Science Museum in London built Babbage's Difference Engine from his plans. It worked perfectly — proving his designs were right all along.",
    quiz: {
      question: "Which parts of Babbage's Analytical Engine exist inside your phone today?",
      options: [
        "Memory, processor, and programs",
        "Steam pipes and gears",
        "Punched wood cards",
        "Nothing — phones work completely differently"
      ],
      answer: 0,
      explain: "Your phone's memory = his 'store', its chip = his 'mill', its apps = his punched-card programs. Same idea, tiny size."
    }
  },
  {
    id: "lovelace",
    year: "1843",
    title: "Ada Lovelace",
    tagline: "The first programmer in the world—before computers even existed.",
    glyph: "✍️",
    image: "assets/images/lovelace.jpg",
    visualCaption: "Notes on the Analytical Engine — the first algorithm written down.",
    story: [
      "Ada Lovelace, daughter of the poet Lord Byron, grew up loving both poetry and mathematics. Her mother made sure she studied math intensely.",
      "When Ada translated an article about Babbage's Analytical Engine, she added her own notes — which ended up being three times longer than the article itself. In those notes, she wrote step-by-step instructions for the engine to compute a sequence of numbers: the first computer program in history.",
      "But Ada saw something even Babbage missed. She predicted such machines could one day create music and graphics — not just crunch numbers. Computers as creative tools: that idea is hers."
    ],
    people: ["Ada Lovelace — mathematician, writer of the first algorithm", "Charles Babbage — her mentor and collaborator"],
    invention: "The first published computer algorithm, plus the vision of computers beyond mere calculation.",
    whyItMattered: "Programming — giving machines instructions in precise steps — begins with Ada. She understood software 100 years before the first real computer was switched on.",
    funFact: "Every second Tuesday of October, the world celebrates 'Ada Lovelace Day' honoring women in science, technology, engineering and math."
  },
  {
    id: "eniac",
    year: "1945",
    title: "ENIAC",
    tagline: "30 tons of vacuum tubes that changed the world.",
    glyph: "💡",
    image: "assets/images/eniac.jpg",
    visualCaption: "18,000 glowing tubes — a room-sized 'brain'.",
    story: [
      "During World War II, the US Army needed to calculate artillery firing tables — and humans with calculators were too slow. The answer: ENIAC, the first general-purpose electronic computer.",
      "ENIAC was enormous: about 167 square meters (the size of a large classroom), weighing 27 tons, with around 18,000 vacuum tubes acting as tiny electronic switches.",
      "It could perform 5,000 additions per second — a thousand times faster than anything before it. When journalists saw it, they called it a 'giant brain'. Six women mathematicians programmed it, physically rearranging cables and switches — becoming the world's first electronic programmers."
    ],
    people: ["John Mauchly & J. Presper Eckert — ENIAC's designers", "The 'ENIAC Six' — Kathleen McNulty, Frances Bilas, Betty Jean Jennings, Ruth Lichterman, Elizabeth Snyder & Marlyn Wescoff, the first electronic programmers"],
    invention: "The first general-purpose electronic digital computer.",
    whyItMattered: "ENIAC replaced gears with electricity. Speed jumped from hundreds of operations per minute to thousands per second — the electronic age of computing began.",
    funFact: "ENIAC consumed 150 kilowatts of power. Legend says lights in parts of Philadelphia dimmed whenever it switched on.",
    quiz: {
      question: "What made ENIAC so much faster than earlier machines like the Pascaline?",
      options: [
        "It used electronic switches (vacuum tubes) instead of moving gears",
        "It was bigger and heavier",
        "It ran on steam power",
        "It had more buttons"
      ],
      answer: 0,
      explain: "Electricity travels fast; gears must physically turn. Swapping motion for electrons was the giant leap."
    }
  },
  {
    id: "transistor",
    year: "1947",
    title: "The Transistor",
    tagline: "The tiny switch that shrank the computer revolution to fit in your pocket.",
    glyph: "🔌",
    image: "assets/images/transistor.jpg",
    visualCaption: "Vacuum tube vs. Transistor: Same job, a fraction of the size.",
    story: [
      "Vacuum tubes worked, but they were huge, hot, fragile, and burned out constantly. ENIAC's tubes failed roughly every two days.",
      "At Bell Labs in 1947, three scientists built the transistor: a tiny piece of silicon that can switch electric current on and off — doing a tube's job with no heat, no glass, and almost no power.",
      "Why does a switch matter so much? Because all computing — every video, game, and app — boils down to billions of tiny on/off decisions. The transistor is the atom of the digital world."
    ],
    people: ["John Bardeen, Walter Brattain & William Shockley — Nobel Prize winners at Bell Labs"],
    invention: "The transistor — a miniature electronic switch made from silicon.",
    whyItMattered: "Transistors let computers shrink from room-sized to fridge-sized to palm-sized. Your phone contains billions of them, each smaller than a virus.",
    funFact: "The three inventors reportedly named it by combining 'transfer' and 'resistor'. Today, humanity manufactures more transistors every year than grains of rice are eaten."
  },
  {
    id: "integrated-circuit",
    year: "1958",
    title: "Integrated Circuits",
    tagline: "What if we just printed an entire circuit onto a tiny chip?",
    glyph: "🪙",
    image: "assets/images/ic.jpg",
    visualCaption: "Multiple transistors printed together on a single slice of silicon.",
    story: [
      "Even with transistors, connecting hundreds of them by hand-wiring was slow and error-prone. Engineers call this problem 'the tyranny of numbers'.",
      "In 1958, Jack Kilby at Texas Instruments had a breakthrough: build the whole circuit — transistors and connections together — on a single piece of semiconductor material. Months later, Robert Noyce at Fairchild improved the idea using silicon, making chips easy to mass-produce.",
      "This was the integrated circuit, or 'chip'. Suddenly, circuits that once filled a board fit on something the size of a fingernail — and got cheaper and more reliable with every batch."
    ],
    people: ["Jack Kilby — built the first working IC", "Robert Noyce — made it practical; later co-founded Intel"],
    invention: "The integrated circuit — many components fabricated together on one chip.",
    whyItMattered: "Chips made computers small, cheap, and reliable enough to go everywhere: planes, hospitals, schools, and eventually homes.",
    funFact: "Kilby built his first chip during summer break when most colleagues were on vacation, using borrowed equipment. He won the Nobel Prize in Physics for it — 42 years later.",
    quiz: {
      question: "What problem did the integrated circuit solve?",
      options: [
        "Hand-connecting thousands of separate parts was slow and unreliable",
        "Computers were too quiet",
        "Silicon was too cheap",
        "People wanted smaller keyboards"
      ],
      answer: 0,
      explain: "Printing a whole circuit onto one chip removed the messy wiring — and opened the road to miniaturization."
    }
  },
  {
    id: "microprocessor",
    year: "1971",
    title: "The Microprocessor",
    tagline: "A computer on a chip the size of your fingernail.",
    glyph: "🔲",
    image: "assets/images/microprocessor.jpg",
    visualCaption: "The Intel 4004: 2,300 transistors—the first 'brain' on a chip.",
    story: [
      "By 1971, engineers asked a bold question: could an entire computer 'brain' — the central processing unit — live on ONE chip?",
      "Intel answered with the 4004, the first commercial microprocessor, originally built for a Japanese calculator company. It packed 2,300 transistors onto a chip just 12 mm².",
      "For comparison: a modern processor packs tens of billions of transistors onto a similar-sized chip. But the 4004 started it all — a complete CPU you could hold between two fingers."
    ],
    people: ["Federico Faggin — led the chip's design", "Ted Hoff & Stan Mazor — conceived the architecture", "Masatoshi Shima — co-designer from the calculator company"],
    invention: "The microprocessor — an entire CPU manufactured on a single chip.",
    whyItMattered: "When the processor became a small, affordable part, anyone could build a computer. This single invention unlocked PCs, consoles, cars, washing machines — everything smart.",
    funFact: "The Intel 4004 clocked at 740 kHz. That's roughly 40,000 times slower than a modern laptop processor."
  },
  {
    id: "personal-computer",
    year: "1977–1981",
    title: "Personal Computers",
    tagline: "From corporate basements to childhood bedrooms everywhere.",
    glyph: "🖥️",
    image: "assets/images/pc.jpg",
    visualCaption: "One desk, one person, one whole computer.",
    story: [
      "Until the late 1970s, computers belonged to governments, universities, and big corporations — locked in special rooms and shared by dozens of people.",
      "Then came affordable kits and machines like the Apple II (1977) and the IBM PC (1981). For the first time, an ordinary family could own a computer. Students typed homework, played games, and wrote their first lines of code at home.",
      "Software became its own universe: spreadsheets, word processors, and eventually graphical windows and a mouse. The computer stopped being a giant calculator and became a personal tool for creating things."
    ],
    people: ["Steve Wozniak & Steve Jobs — the Apple II", "Bill Gates & Paul Allen — software for the IBM PC"],
    invention: "Affordable home computers with ready-made software anyone could use.",
    whyItMattered: "Computing became personal. A generation learned to code on these machines — including the people who would later build the internet, smartphones, and AI.",
    funFact: "The Apple II was so quiet because Wozniak designed a clever circuit instead of a cooling fan — unusual at a time when most PCs sounded like hairdryers.",
    quiz: {
      question: "What changed when personal computers arrived?",
      options: [
        "Individuals could own and use a computer themselves",
        "Computers became larger",
        "Programming became impossible at home",
        "Computers stopped using chips"
      ],
      answer: 0,
      explain: "'Personal' is the key word — computing moved from shared corporate rooms to everyday people's desks."
    }
  },
  {
    id: "smartphone",
    year: "2007",
    title: "Smartphones",
    tagline: "A supercomputer in everyone's pocket.",
    glyph: "📱",
    image: "assets/images/smartphone.jpg",
    visualCaption: "More computing power than Apollo 11—times a million.",
    story: [
      "In 2007, the iPhone launched with a bold pitch: a widescreen iPod, a phone, and an internet communicator… all in one device. It wasn't the first smartphone, but its touchscreen-first design redefined what a phone should be.",
      "Soon after, Android brought the same idea to many brands. App stores turned phones into platforms: maps, cameras, games, translators, music studios — all downloadable in seconds.",
      "Think about the journey: ENIAC filled a room and cost millions. The phone in your pocket is thousands of times faster, weighs 200 grams, and you complain if it's 2 millimeters thick."
    ],
    people: ["Steve Jobs — led the iPhone's creation", "Andy Rubin — led the team behind Android"],
    invention: "The modern touchscreen smartphone plus the app-store ecosystem.",
    whyItMattered: "Computing became constant and portable. Billions of people who never owned a computer now carry one everywhere — connected to nearly all human knowledge.",
    funFact: "The navigation computer that landed Apollo 11 on the Moon in 1969 had less power than today's simplest smartphone — by a factor of millions."
  },
  {
    id: "ai",
    year: "Today",
    title: "Artificial Intelligence",
    tagline: "Machines that learn—the newest chapter of the story.",
    glyph: "🤖",
    image: "assets/images/ai.jpg",
    visualCaption: "Instead of following rules, AI learns patterns from examples.",
    story: [
      "Every era so far gave machines faster instructions to follow. AI changes the game: instead of programming exact rules, we show machines millions of examples and let them find the patterns themselves. This approach is called machine learning.",
      "That's how AI can recognize faces in photos, translate languages, suggest videos you'll like, or chat naturally — systems like ChatGPT (2022) surprised the world by writing essays, answering questions, and even helping write code.",
      "AI already helps doctors spot diseases early, lets you unlock your phone with your face, and powers self-driving experiments. It also raises big questions: about privacy, fairness, and what jobs will look like. You'll be the first generation to grow up answering them.",
      "And here's the twist: the journey isn't finished. From beads on a frame to machines that learn — the next chapter might be written by someone sitting in this classroom."
    ],
    people: ["Geoffrey Hinton, Yann LeCun & Yoshua Bengio — pioneers of deep learning", "Demis Hassabis — DeepMind, taught AI to master Go"],
    invention: "Machine learning and large language models — software that learns from data instead of fixed rules.",
    whyItMattered: "AI is a general-purpose tool like electricity: it transforms every field it touches — medicine, art, science, education — and it's just getting started.",
    funFact: "In 1997, IBM's Deep Blue beat the world chess champion Garry Kasparov. In 2016, AlphaGo defeated the world Go champion — a game with more possible positions than atoms in the observable universe.",
    quiz: {
      question: "How does machine learning differ from classic programming?",
      options: [
        "It learns patterns from examples instead of following hand-written rules",
        "It doesn't use computers",
        "It only works with chess",
        "It needs no electricity"
      ],
      answer: 0,
      explain: "Classic software follows exact instructions; ML systems improve by finding patterns in huge amounts of data."
    }
  }
];

const CHALLENGE_ITEMS_EN = [
  { name: "🧮 Abacus", order: 1 },
  { name: "⚙️ Pascaline", order: 2 },
  { name: "🔩 Analytical Engine", order: 3 },
  { name: "✍️ First algorithm", order: 4 },
  { name: "💡 ENIAC", order: 5 },
  { name: "🔌 Transistor", order: 6 },
  { name: "🪙 Integrated circuit", order: 7 },
  { name: "🔲 Microprocessor", order: 8 },
  { name: "🖥️ Personal computer", order: 9 },
  { name: "📱 Smartphone", order: 10 },
  { name: "🤖 AI era", order: 11 }
];
