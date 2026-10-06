/* ============================================================
   Quiz Bank - Unit 4: Digital Data Representation & Multimedia
   Each stage: 1 easy + 1 medium + 1 hard + 1 creative.
   + 4 mixed creative questions.
   Total: 44 questions.
   ============================================================ */

const LECT4_QUIZBANK_EN = [
  /* ========================================================
     01. Analog and Digital
     ======================================================== */
  {
    id: 'q-ad-easy',
    stageId: 'analog-digital',
    difficulty: 'easy',
    question: 'Room temperature changes continuously without jumps — this is an example of:',
    options: [
      'Analog data',
      'Digital data',
      'Binary system',
      'D/A conversion'
    ],
    answer: 0,
    explain: 'Analog data changes gradually and continuously — like temperature and time.'
  },
  {
    id: 'q-ad-medium',
    stageId: 'analog-digital',
    difficulty: 'medium',
    question: 'The process of converting sound from a microphone to a computer is called:',
    options: [
      'A/D conversion (Analog to Digital)',
      'D/A conversion (Digital to Analog)',
      'Data compression',
      'Character encoding'
    ],
    answer: 0,
    explain: 'The microphone captures analog sound (continuous wave) and the computer converts it to digital numbers — this is A/D conversion.'
  },
  {
    id: 'q-ad-hard',
    stageId: 'analog-digital',
    difficulty: 'hard',
    question: 'Which of the following is an advantage of digital data?',
    options: [
      'Changes continuously without jumps',
      'Can be copied without any loss in quality',
      'Cannot be modified or edited',
      'Cannot be transmitted efficiently'
    ],
    answer: 1,
    explain: 'One of the main advantages of digital data is that you can copy it millions of times without any loss in quality — unlike analog.'
  },
  {
    id: 'q-ad-creative',
    stageId: 'analog-digital',
    difficulty: 'creative',
    question: 'If you want to record your voice and store it on a computer, what happens to the sound?',
    options: [
      'It is stored as an analog wave on the hard disk',
      'It is converted to digital numbers through sampling and quantization',
      'It is stored as plain text without any conversion',
      'It is converted to images instead of numbers'
    ],
    answer: 1,
    explain: 'Analog sound goes through PCM stages: Sampling (dividing time), Quantization (rounding values), and Encoding (converting to binary).'
  },

  /* ========================================================
     02. Binary System and Amount of Data
     ======================================================== */
  {
    id: 'q-bb-easy',
    stageId: 'binary-bits-bytes',
    difficulty: 'easy',
    question: 'The smallest unit of information in a computer is called:',
    options: [
      'Bit',
      'Byte',
      'Kilobyte',
      'Megabyte'
    ],
    answer: 0,
    explain: 'The bit is the smallest unit of information — it has only two states: 0 or 1.'
  },
  {
    id: 'q-bb-medium',
    stageId: 'binary-bits-bytes',
    difficulty: 'medium',
    question: 'How many different values can 1 byte represent?',
    options: [
      '256 values',
      '8 values',
      '64 values',
      '1024 values'
    ],
    answer: 0,
    explain: '1 byte = 8 bits, each bit has 2 states, so 2⁸ = 256 different values.'
  },
  {
    id: 'q-bb-hard',
    stageId: 'binary-bits-bytes',
    difficulty: 'hard',
    question: 'How many bits are needed to represent 52 playing cards (without jokers)?',
    options: [
      '6 bits',
      '5 bits',
      '7 bits',
      '8 bits'
    ],
    answer: 0,
    explain: '2⁵ = 32 (less than 52) and 2⁶ = 64 (more than 52) — so you need at least 6 bits.'
  },
  {
    id: 'q-bb-creative',
    stageId: 'binary-bits-bytes',
    difficulty: 'creative',
    question: 'If you have 1 gigabyte (GB) of storage, how many megabytes (MB) is that?',
    options: [
      '1024 MB',
      '1000 MB',
      '512 MB',
      '2048 MB'
    ],
    answer: 0,
    explain: '1 GB = 1024 MB — each larger unit equals 1024 of the previous one in the binary system.'
  },

  /* ========================================================
     03. Decimal-Binary Conversion
     ======================================================== */
  {
    id: 'q-cv-easy',
    stageId: 'decimal-binary-conversion',
    difficulty: 'easy',
    question: 'Convert the binary number 10(2) to decimal:',
    options: [
      '2',
      '10',
      '1',
      '0'
    ],
    answer: 0,
    explain: '10(2) = (0×2⁰) + (1×2¹) = 0 + 2 = 2 decimal.'
  },
  {
    id: 'q-cv-medium',
    stageId: 'decimal-binary-conversion',
    difficulty: 'medium',
    question: 'Convert the decimal number 13 to binary:',
    options: [
      '1101(2)',
      '1011(2)',
      '1110(2)',
      '1001(2)'
    ],
    answer: 0,
    explain: '13 ÷ 2 = 6 r1 → 6 ÷ 2 = 3 r0 → 3 ÷ 2 = 1 r1 → 1 ÷ 2 = 0 r1 → Result: 1101(2)'
  },
  {
    id: 'q-cv-hard',
    stageId: 'decimal-binary-conversion',
    difficulty: 'hard',
    question: 'What is the result of binary addition: 1011(2) + 0110(2)?',
    options: [
      '10001(2)',
      '1101(2)',
      '1111(2)',
      '10101(2)'
    ],
    answer: 0,
    explain: '1011(2) = 11 decimal, 0110(2) = 6 decimal → 11 + 6 = 17 = 10001(2)'
  },
  {
    id: 'q-cv-creative',
    stageId: 'decimal-binary-conversion',
    difficulty: 'creative',
    question: 'In decimal-to-binary conversion, why do we write remainders from last to first?',
    options: [
      'Because the first remainder is the least significant bit (rightmost)',
      'Because it is easier to read',
      'Because computers read left to right',
      'There is no specific reason'
    ],
    answer: 0,
    explain: 'The first remainder from division is the least significant bit (2⁰) — so it must be written on the right, and the rest arranged left to right.'
  },

  /* ========================================================
     04. Hexadecimal System
     ======================================================== */
  {
    id: 'q-hx-easy',
    stageId: 'hexadecimal',
    difficulty: 'easy',
    question: 'How many symbols does the hexadecimal system use?',
    options: [
      '16 symbols (0-9 + A-F)',
      '10 symbols (0-9)',
      '2 symbols (0-1)',
      '8 symbols (0-7)'
    ],
    answer: 0,
    explain: 'The hexadecimal system uses 16 symbols: digits 0-9 and letters A-F.'
  },
  {
    id: 'q-hx-medium',
    stageId: 'hexadecimal',
    difficulty: 'medium',
    question: 'Convert the binary number 1111(2) to hexadecimal:',
    options: [
      'F(16)',
      'E(16)',
      '15(16)',
      '17(16)'
    ],
    answer: 0,
    explain: '1111(2) = 15 decimal = F(16) — because 15 in hexadecimal is represented by the letter F.'
  },
  {
    id: 'q-hx-hard',
    stageId: 'hexadecimal',
    difficulty: 'hard',
    question: 'Each hexadecimal digit equals how many bits?',
    options: [
      '4 bits',
      '2 bits',
      '8 bits',
      '16 bits'
    ],
    answer: 0,
    explain: 'Each hexadecimal digit equals exactly 4 bits — that is why 1 byte (8 bits) = 2 hex digits.'
  },
  {
    id: 'q-hx-creative',
    stageId: 'hexadecimal',
    difficulty: 'creative',
    question: 'Why do programmers prefer hexadecimal over binary?',
    options: [
      'It is shorter and easier to read than long binary',
      'It is faster in calculations',
      'It is more accurate than binary',
      'It is the only system computers understand'
    ],
    answer: 0,
    explain: 'Hexadecimal shortens long binary numbers — every 4 bits becomes one hex digit, making it easier to read and write.'
  },

  /* ========================================================
     05. Digital Representation of Characters
     ======================================================== */
  {
    id: 'q-cc-easy',
    stageId: 'character-codes',
    difficulty: 'easy',
    question: 'In ASCII, the letter "A" is represented by which decimal number?',
    options: [
      '65',
      '97',
      '48',
      '32'
    ],
    answer: 0,
    explain: 'In the ASCII table, uppercase A = 65 decimal = 01000001 binary.'
  },
  {
    id: 'q-cc-medium',
    stageId: 'character-codes',
    difficulty: 'medium',
    question: 'What is the difference between ASCII and Unicode?',
    options: [
      'Unicode supports all world languages while ASCII is English only',
      'ASCII is larger than Unicode',
      'Unicode is older than ASCII',
      'There is no difference'
    ],
    answer: 0,
    explain: 'ASCII represents 128 English characters only, while Unicode represents characters from all world languages in one system.'
  },
  {
    id: 'q-cc-hard',
    stageId: 'character-codes',
    difficulty: 'hard',
    question: 'What happens when encoding and decoding methods do not match?',
    options: [
      'Character Corruption',
      'Text quality improves',
      'Text is automatically compressed',
      'Text is converted to images'
    ],
    answer: 0,
    explain: 'When encoding and decoding do not match, characters appear strangely like "?????" — this is called Character Corruption.'
  },
  {
    id: 'q-cc-creative',
    stageId: 'character-codes',
    difficulty: 'creative',
    question: 'To display characters on screen, you need two things — what are they?',
    options: [
      'Character Code and Font',
      'Code and Sound',
      'Font and Image',
      'Code and Video'
    ],
    answer: 0,
    explain: 'The character code defines what the character is, and the font defines how it looks — without both, the character will not display correctly.'
  },

  /* ========================================================
     06. Binary Addition and Subtraction
     ======================================================== */
  {
    id: 'q-ba-easy',
    stageId: 'binary-arithmetic',
    difficulty: 'easy',
    question: 'What is the result of 1 + 1 in binary?',
    options: [
      '10',
      '2',
      '11',
      '0'
    ],
    answer: 0,
    explain: 'In binary, 1 + 1 = 10 — meaning 0 with a carry of 1 to the next position.'
  },
  {
    id: 'q-ba-medium',
    stageId: 'binary-arithmetic',
    difficulty: 'medium',
    question: 'What is the result of binary subtraction: 1000(2) - 0001(2)?',
    options: [
      '0111(2)',
      '1111(2)',
      '1001(2)',
      '0001(2)'
    ],
    answer: 0,
    explain: '1000(2) = 8 decimal, 0001(2) = 1 decimal → 8 - 1 = 7 = 0111(2)'
  },
  {
    id: 'q-ba-hard',
    stageId: 'binary-arithmetic',
    difficulty: 'hard',
    question: 'In binary addition, what happens when 1 + 1 + 1?',
    options: [
      '11 (1 with carry 1)',
      '10 (0 with carry 1)',
      '01 (1 without carry)',
      '00 (0 without carry)'
    ],
    answer: 0,
    explain: '1 + 1 + 1 = 3 decimal = 11 binary — meaning 1 in current position with carry 1 to next position.'
  },
  {
    id: 'q-ba-creative',
    stageId: 'binary-arithmetic',
    difficulty: 'creative',
    question: 'Why does a computer use the same circuits for addition and subtraction?',
    options: [
      'Because subtraction is converted to addition using complements',
      'Because computers cannot subtract',
      'Because addition is faster than subtraction',
      'There is no specific reason'
    ],
    answer: 0,
    explain: 'Computers convert subtraction to addition using complements — so the same circuits do both without needing extra circuits.'
  },

  /* ========================================================
     07. Representing Negative Numbers with Complements
     ======================================================== */
  {
    id: 'q-cp-easy',
    stageId: 'complements',
    difficulty: 'easy',
    question: 'The 2\'s Complement of 0101(2) is:',
    options: [
      '1011(2)',
      '1010(2)',
      '0101(2)',
      '1101(2)'
    ],
    answer: 0,
    explain: 'Flip 0101 = 1010, then +1 = 1011 — this represents -5 in the complement system.'
  },
  {
    id: 'q-cp-medium',
    stageId: 'complements',
    difficulty: 'medium',
    question: 'What happens in subtraction using complements?',
    options: [
      'Subtraction is converted to addition with complement of subtrahend',
      'Special circuits are used for subtraction',
      'Numbers are converted to decimal first',
      'Fractions are used'
    ],
    answer: 0,
    explain: 'Computers convert subtraction to addition: A - B = A + (complement of B) — this saves extra circuits.'
  },
  {
    id: 'q-cp-hard',
    stageId: 'complements',
    difficulty: 'hard',
    question: 'In an 8-bit system, what is the representation of -1?',
    options: [
      '11111111(2)',
      '10000001(2)',
      '00000001(2)',
      '01111111(2)'
    ],
    answer: 0,
    explain: 'In 8-bit system, -1 = 11111111 — first bit is 1 (negative) and the rest represent the value.'
  },
  {
    id: 'q-cp-creative',
    stageId: 'complements',
    difficulty: 'creative',
    question: 'Why do computers represent negative numbers with complements instead of using a minus sign?',
    options: [
      'To use the same circuits for addition and subtraction',
      'To make numbers longer',
      'To make calculations slower',
      'There is no specific reason'
    ],
    answer: 0,
    explain: 'Complements let computers use the same addition circuits for subtraction — without needing extra circuits, saving design complexity and cost.'
  },

  /* ========================================================
     08. Sound Digitization
     ======================================================== */
  {
    id: 'q-sd-easy',
    stageId: 'sound-digitization',
    difficulty: 'easy',
    question: 'What is the correct order of PCM sound digitization steps?',
    options: [
      'Sampling → Quantization → Encoding',
      'Encoding → Quantization → Sampling',
      'Quantization → Sampling → Encoding',
      'Quantization → Encoding → Sampling'
    ],
    answer: 0,
    explain: 'Correct order: first Sampling (divide time), then Quantization (round values), finally Encoding (convert to binary).'
  },
  {
    id: 'q-sd-medium',
    stageId: 'sound-digitization',
    difficulty: 'medium',
    question: 'CD quality is 44,100 Hz — why this specific number?',
    options: [
      'It is more than twice the highest frequency humans can hear (20,000 Hz)',
      'It is a random number',
      'It is less than twice the highest frequency',
      'It is faster to process'
    ],
    answer: 0,
    explain: 'The sampling theorem says: frequency must be more than twice the highest frequency in the sound — and 44,100 Hz covers human hearing range (20 Hz - 20,000 Hz).'
  },
  {
    id: 'q-sd-hard',
    stageId: 'sound-digitization',
    difficulty: 'hard',
    question: 'The data size of CD audio per second (44,100 Hz, 16 bit, stereo) is approximately:',
    options: [
      '176 KB',
      '88 KB',
      '352 KB',
      '44 KB'
    ],
    answer: 0,
    explain: '44,100 × 16 × 2 = 1,411,200 bits ÷ 8 = 176,400 bytes ≈ 176 KB'
  },
  {
    id: 'q-sd-creative',
    stageId: 'sound-digitization',
    difficulty: 'creative',
    question: 'What happens if you increase sampling frequency and quantization depth?',
    options: [
      'Sound becomes closer to original but size increases',
      'Sound becomes further from original',
      'Size decreases',
      'No change'
    ],
    answer: 0,
    explain: 'Higher sampling frequency and quantization depth mean more accurate capture of the original wave — but data size also increases.'
  },

  /* ========================================================
     09. Image Digitization
     ======================================================== */
  {
    id: 'q-id-easy',
    stageId: 'image-digitization',
    difficulty: 'easy',
    question: 'The smallest unit that makes up a digital image is called:',
    options: [
      'Pixel',
      'Bit',
      'Byte',
      'Dot'
    ],
    answer: 0,
    explain: 'The pixel is the smallest unit in a digital image — images are made of millions of pixels.'
  },
  {
    id: 'q-id-medium',
    stageId: 'image-digitization',
    difficulty: 'medium',
    question: 'The size of a 1280×720 pixel image at 24-bit color is approximately:',
    options: [
      '2.76 MB',
      '1.38 MB',
      '5.52 MB',
      '0.69 MB'
    ],
    answer: 0,
    explain: '1280 × 720 × 24 = 22,118,400 bits ÷ 8 = 2,764,800 bytes ÷ 1000 ÷ 1000 ≈ 2.76 MB'
  },
  {
    id: 'q-id-hard',
    stageId: 'image-digitization',
    difficulty: 'hard',
    question: 'What is the difference between Raster and Vector images?',
    options: [
      'Raster appears jagged when enlarged, Vector does not',
      'Vector appears jagged when enlarged, Raster does not',
      'Both behave the same way',
      'Raster is always smaller in size'
    ],
    answer: 0,
    explain: 'Raster images are made of pixels so they pixelate when enlarged, while Vector images use mathematical equations so they do not pixelate.'
  },
  {
    id: 'q-id-creative',
    stageId: 'image-digitization',
    difficulty: 'creative',
    question: 'In 24-bit Full Color system, each color (R, G, B) is represented by how many bits?',
    options: [
      '8 bits (256 levels)',
      '4 bits (16 levels)',
      '12 bits (4096 levels)',
      '24 bits (16.7 million levels)'
    ],
    answer: 0,
    explain: 'In 24-bit system, each primary color (Red, Green, Blue) = 8 bits = 256 levels, and all three together = 24 bits = 16.7 million colors.'
  },

  /* ========================================================
     10. Digital Video Representation and Compression
     ======================================================== */
  {
    id: 'q-vc-easy',
    stageId: 'video-compression',
    difficulty: 'easy',
    question: 'Video works by displaying a series of:',
    options: [
      'Still images rapidly',
      'Sequential sounds',
      'Sequential texts',
      'Sequential numbers'
    ],
    answer: 0,
    explain: 'Video consists of still images (frames) displayed rapidly — the human eye perceives them as moving.'
  },
  {
    id: 'q-vc-medium',
    stageId: 'video-compression',
    difficulty: 'medium',
    question: 'A 90 MB video was compressed to 30 MB — what is the compression ratio?',
    options: [
      '33%',
      '50%',
      '66%',
      '30%'
    ],
    answer: 0,
    explain: 'Compression ratio = (30 ÷ 90) × 100 = 33.3% ≈ 33%'
  },
  {
    id: 'q-vc-hard',
    stageId: 'video-compression',
    difficulty: 'hard',
    question: 'What is the difference between lossless and lossy compression?',
    options: [
      'Lossless restores original exactly, Lossy does not restore exactly',
      'Lossy restores original exactly, Lossless does not',
      'Both restore original exactly',
      'Neither restores original'
    ],
    answer: 0,
    explain: 'Lossless compression restores original data exactly, while Lossy compression reduces size greatly but does not restore original exactly.'
  },
  {
    id: 'q-vc-creative',
    stageId: 'video-compression',
    difficulty: 'creative',
    question: 'In Run-length encoding, the sequence "AAAAA" becomes:',
    options: [
      'A5',
      '5A',
      'AAAAA',
      'A4'
    ],
    answer: 0,
    explain: 'Run-length encoding replaces repetitions with count — "AAAAA" (5 A characters) becomes "A5" (just 2 characters).'
  },

  /* ========================================================
     11. Information Design
     ======================================================== */
  {
    id: 'q-ds-easy',
    stageId: 'information-design',
    difficulty: 'easy',
    question: 'A design that allows all people to use it without difficulty — regardless of age or ability — is called:',
    options: [
      'Universal Design',
      'User Interface (UI)',
      'User Experience (UX)',
      'Usability'
    ],
    answer: 0,
    explain: 'Universal Design is carefully created so that everyone can use it easily.'
  },
  {
    id: 'q-ds-medium',
    stageId: 'information-design',
    difficulty: 'medium',
    question: 'What is the difference between CUI and GUI?',
    options: [
      'CUI uses text commands, GUI uses icons and buttons',
      'GUI is older than CUI',
      'CUI is easier to use than GUI',
      'There is no difference'
    ],
    answer: 0,
    explain: 'CUI (Command UI) uses text commands from keyboard, while GUI (Graphical UI) uses icons, buttons, and mouse.'
  },
  {
    id: 'q-ds-hard',
    stageId: 'information-design',
    difficulty: 'hard',
    question: 'The LATCH principle organizes information by how many criteria?',
    options: [
      '5 criteria (Location, Alphabet, Time, Category, Hierarchy)',
      '3 criteria',
      '7 criteria',
      '10 criteria'
    ],
    answer: 0,
    explain: 'LATCH uses 5 criteria: Location, Alphabet, Time, Category, and Hierarchy.'
  },
  {
    id: 'q-ds-creative',
    stageId: 'information-design',
    difficulty: 'creative',
    question: 'What is the difference between UI and UX?',
    options: [
      'UI is the system users interact with, UX is the feeling users get',
      'UX is the system, UI is the feeling',
      'They are the same thing',
      'UI is for sound, UX is for images'
    ],
    answer: 0,
    explain: 'UI (User Interface) is the system users interact with (buttons, menus), while UX (User Experience) is the overall feeling and experience users get.'
  },

  /* ========================================================
     Mixed Creative Questions
     ======================================================== */
  {
    id: 'q-mixed-1',
    stageId: 'mixed',
    difficulty: 'creative',
    question: 'If you have a 1920×1080 image at 24-bit color and convert it to 8-bit color (256 colors), what happens?',
    options: [
      'Image size reduces by about one third',
      'Image size increases by three times',
      'Image size does not change',
      'Image becomes black and white'
    ],
    answer: 0,
    explain: '24 bits per pixel → 8 bits per pixel = size reduced by one third (8/24 = 1/3).'
  },
  {
    id: 'q-mixed-2',
    stageId: 'mixed',
    difficulty: 'creative',
    question: 'In an 8-bit system, how many negative numbers can be represented?',
    options: [
      '128 numbers (from -128 to -1)',
      '256 numbers',
      '127 numbers',
      '64 numbers'
    ],
    answer: 0,
    explain: 'In 8-bit system, numbers range from -128 to +127 — meaning 128 negative numbers and 127 positive numbers plus zero.'
  },
  {
    id: 'q-mixed-3',
    stageId: 'mixed',
    difficulty: 'creative',
    question: 'What is the relationship between sampling frequency and sound quality?',
    options: [
      'Higher frequency means higher quality and larger size',
      'Higher frequency means lower quality',
      'Frequency does not affect quality',
      'Lower frequency means higher quality'
    ],
    answer: 0,
    explain: 'Higher sampling frequency means more accurate capture of the original wave — but data size also increases.'
  },
  {
    id: 'q-mixed-4',
    stageId: 'mixed',
    difficulty: 'creative',
    question: 'If you want to upload a video to the internet as fast as possible, which compression type do you choose?',
    options: [
      'Lossy compression for smaller size',
      'Lossless compression for higher quality',
      'No compression at all',
      'Image compression instead of video'
    ],
    answer: 0,
    explain: 'Lossy compression reduces size greatly — that is what makes videos upload quickly on the internet without taking too much space.'
  }
];

if (typeof window !== 'undefined') {
  window.LECT4_QUIZBANK_EN = LECT4_QUIZBANK_EN;
}