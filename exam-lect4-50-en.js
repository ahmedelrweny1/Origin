/* ============================================================
   Third Comprehensive Timed Exam — Lecture 4
   (Digital Representation of Data and Media)
   50 Questions with Progressive Difficulty (10 Direct + 20 Moderate + 20 Tricky)
   Time: 60 Minutes — Exactly 1 Attempt
   Bilingual English Mirror
   ============================================================ */

const LECT4_FULL_EXAM_EN = [
  // ============================================================
  // Station 1: Analog vs Digital - 5 Questions
  // ============================================================
  {
    id: 'l4-01',
    lecture: 'l4',
    stageId: 'analog-digital',
    difficulty: 'easy',
    question: 'What is the fundamental difference between an analog signal and a digital signal?',
    options: [
      'Analog changes gradually and continuously, while digital uses discrete, separate values (0s and 1s).',
      'Analog operates using electricity only, while digital operates using sound waves only.',
      'Analog is always perfectly accurate with no noise, while digital is always distorted.',
      'Analog is designed for computers only, while digital exists only in physical nature.'
    ],
    answer: 0,
    explain: 'Analog signals are continuous across time and amplitude (such as temperature), while digital signals represent information using discrete steps and numerical values (0 and 1).'
  },
  {
    id: 'l4-02',
    lecture: 'l4',
    stageId: 'analog-digital',
    difficulty: 'medium',
    question: 'Why can digital signals resist noise and be copied millions of times without quality degradation compared to analog signals?',
    options: [
      'Because digital signals travel so fast that physical noise cannot attach to them.',
      'Because digital receivers only check two distinct voltage levels (above threshold = 1, below = 0), ignoring small fluctuations.',
      'Because digital signals are saved on flash drives rather than magnetic tape.',
      'Because digital signal transmission cables are made exclusively of gold and pure fiber.'
    ],
    answer: 1,
    explain: 'In digital systems, the receiver only needs to decide if a pulse represents high (1) or low (0). Minor electrical noise is easily discarded, allowing clean regeneration.'
  },
  {
    id: 'l4-03',
    lecture: 'l4',
    stageId: 'analog-digital',
    difficulty: 'hard',
    question: 'When you speak on a phone call and your friend hears you on their phone, what is the precise end-to-end signal conversion sequence?',
    options: [
      'Analog sound ← A/D conversion via microphone circuitry ← digital cellular transmission ← D/A conversion on friend’s phone ← analog sound from speaker.',
      'Digital voice from vocal cords ← D/A conversion at mic ← analog broadcast across cellular towers ← A/D conversion at speaker ← analog sound.',
      'Analog sound ← D/A conversion at mic ← digital encryption ← analog decryption ← direct digital acoustic output from speaker.',
      'Analog sound ← temporary MP3 buffering ← A/D conversion inside cellular towers only ← D/A conversion before battery charging.'
    ],
    answer: 0,
    explain: 'The human voice is an analog acoustic wave. The microphone and ADC digitize it into bits, which travel across networks. At the receiving end, the DAC reconstructs an analog electrical waveform to drive the physical speaker diaphragm.'
  },
  {
    id: 'l4-04',
    lecture: 'l4',
    stageId: 'analog-digital',
    difficulty: 'medium',
    question: 'Which of the following devices operates and displays purely analog data?',
    options: [
      'A classic mechanical wall clock whose hands sweep smoothly and continuously using gears and a spring.',
      'A modern digital car speedometer displaying an LED numeric readout jumping 60, 61, then 62.',
      'A digital wristwatch counting seconds with numeric LCD digits.',
      'An electronic supermarket scale showing weight as decimal numbers on a digital screen.'
    ],
    answer: 0,
    explain: 'Traditional clock hands, mercury thermometers, and spring scales are analog because physical movement and measurement are completely continuous without stepped discrete jumps.'
  },
  {
    id: 'l4-05',
    lecture: 'l4',
    stageId: 'analog-digital',
    difficulty: 'hard',
    question: 'In the Analog-to-Digital (A/D) conversion process, why is any digital recording fundamentally an "approximation" rather than an infinitely identical copy of the analog reality?',
    options: [
      'Because quantization rounds infinite continuous real-world values to fixed discrete levels, introducing quantization error.',
      'Because microphones and camera lenses are manufactured from plastic rather than pure optical crystal.',
      'Because the speed of electricity in copper traces is significantly slower than the speed of light.',
      'Because computer operating systems automatically delete 10% of raw data to save disk space.'
    ],
    answer: 0,
    explain: 'Nature contains an infinite continuum of values between any two points. Digitization samples time and rounds amplitudes to discrete finite levels (quantization). The difference between the true analog value and the rounded step is quantization error.'
  },

  // ============================================================
  // Station 2: Number Systems & Conversions - 6 Questions
  // ============================================================
  {
    id: 'l4-06',
    lecture: 'l4',
    stageId: 'binary-system',
    difficulty: 'easy',
    question: 'What is the base and digit set of the binary number system used by modern computers?',
    options: [
      'Base 2, consisting of exactly two symbols: 0 and 1.',
      'Base 10, consisting of ten digits from 0 to 9.',
      'Base 8, consisting of eight digits from 0 to 7.',
      'Base 16, consisting of sixteen symbols from 0 to F.'
    ],
    answer: 0,
    explain: 'The binary system is Base-2 and consists only of digits 0 and 1, perfectly matching the on/off state of semiconductor transistors.'
  },
  {
    id: 'l4-07',
    lecture: 'l4',
    stageId: 'binary-system',
    difficulty: 'medium',
    question: 'What is the equivalent decimal value of the binary number 11010(2)?',
    options: [
      '26',
      '24',
      '28',
      '18'
    ],
    answer: 0,
    explain: 'Evaluate positional weights from right to left: (0 × 1) + (1 × 2) + (0 × 4) + (1 × 8) + (1 × 16) = 0 + 2 + 0 + 8 + 16 = 26.'
  },
  {
    id: 'l4-08',
    lecture: 'l4',
    stageId: 'binary-system',
    difficulty: 'hard',
    question: 'When converting the binary number 11011110(2) to hexadecimal (Hex), what is the correct result?',
    options: [
      'DE(16) — because grouping 4 bits from the right gives 1110 = E, and the next group 1101 = D.',
      'ED(16) — because grouping from the left gives 1101 = E, and 1110 = D.',
      'D7(16) — because the final nibble evaluates to 7.',
      '7E(16) — because digits are grouped into sets of three.'
    ],
    answer: 0,
    explain: 'Group into 4-bit nibbles from right to left: 1110(2) = 14 = E in hex; 1101(2) = 13 = D in hex. Concatenating gives DE(16).'
  },
  {
    id: 'l4-09',
    lecture: 'l4',
    stageId: 'binary-system',
    difficulty: 'hard',
    question: 'If you have an n-bit binary representation and add exactly 1 additional bit to make it (n + 1) bits, what happens to the total number of distinct values you can represent?',
    options: [
      'The number of possible values doubles exactly (multiplied by 2).',
      'The number of possible values increases by exactly 1.',
      'The number of possible values is squared.',
      'The number of possible values remains unchanged while only precision shifts.'
    ],
    answer: 0,
    explain: 'Total representable states with n bits is 2ⁿ. Adding 1 bit gives 2ⁿ⁺¹ = 2 × 2ⁿ. Every additional bit doubles the state capacity (e.g., 2 bits = 4 states, 3 bits = 8 states).'
  },
  {
    id: 'l4-10',
    lecture: 'l4',
    stageId: 'binary-system',
    difficulty: 'medium',
    question: 'What is the correct binary representation of the decimal number 45?',
    options: [
      '101101',
      '110101',
      '100111',
      '111001'
    ],
    answer: 0,
    explain: '45 = 32 + 8 + 4 + 1. Checking weights (32, 16, 8, 4, 2, 1) yields: 1, 0, 1, 1, 0, 1, which gives 101101(2).'
  },
  {
    id: 'l4-11',
    lecture: 'l4',
    stageId: 'binary-system',
    difficulty: 'medium',
    question: 'Why do programmers and network engineers frequently write memory addresses and color codes in Hexadecimal rather than binary?',
    options: [
      'Because each hexadecimal character maps cleanly to exactly 4 binary bits, creating compact and human-readable notation.',
      'Because modern CPU hardware calculates Hexadecimal arithmetic much faster than binary.',
      'Because Hexadecimal notation prevents malware from infecting memory pointers.',
      'Because display graphics cards exclusively accept Hexadecimal code in raw processing.'
    ],
    answer: 0,
    explain: 'Hexadecimal provides concise human readability: a full byte (11111111) is neatly written in two hex characters (FF). The computer hardware itself executes binary.'
  },

  // ============================================================
  // Station 3: Storage Units & Scale - 5 Questions
  // ============================================================
  {
    id: 'l4-12',
    lecture: 'l4',
    stageId: 'units-scale',
    difficulty: 'easy',
    question: 'How many bits make up one Byte?',
    options: [
      '8 bits',
      '4 bits',
      '16 bits',
      '1024 bits'
    ],
    answer: 0,
    explain: '1 Byte = 8 bits. The bit is the fundamental atomic binary unit (0 or 1).'
  },
  {
    id: 'l4-13',
    lecture: 'l4',
    stageId: 'units-scale',
    difficulty: 'medium',
    question: 'You have a USB flash drive with a capacity of 4 Gigabytes (4 GB). In Megabytes (MB) using standard binary computing (multiplier of 1024), how many MB is that?',
    options: [
      '4096 Megabytes (MB)',
      '4000 Megabytes (MB)',
      '1024 Megabytes (MB)',
      '8192 Megabytes (MB)'
    ],
    answer: 0,
    explain: '1 GB = 1024 MB. Therefore, 4 GB × 1024 = 4096 MB.'
  },
  {
    id: 'l4-14',
    lecture: 'l4',
    stageId: 'units-scale',
    difficulty: 'hard',
    question: 'You subscribe to a home broadband plan advertised at 100 Mbps (Megabits per second). What is the theoretical maximum file download speed in Megabytes per second (MB/s)?',
    options: [
      '12.5 Megabytes per second (MB/s) — because 1 Byte = 8 bits (100 ÷ 8).',
      '100 Megabytes per second (MB/s) — because Megabits and Megabytes are identical.',
      '800 Megabytes per second (MB/s) — by multiplying bandwidth by 8.',
      '50 Megabytes per second (MB/s) — because half the bandwidth is consumed by uplink.'
    ],
    answer: 0,
    explain: 'ISPs quote speeds in bits (lowercase b = bits), while file downloads are tracked in Bytes (uppercase B = Bytes). Since 1 Byte = 8 bits: 100 Mbps ÷ 8 = 12.5 MB/s.'
  },
  {
    id: 'l4-15',
    lecture: 'l4',
    stageId: 'units-scale',
    difficulty: 'medium',
    question: 'What is the correct ascending order of digital storage units from smallest to largest?',
    options: [
      'Bit ← Byte ← Kilobyte (KB) ← Megabyte (MB) ← Gigabyte (GB) ← Terabyte (TB)',
      'Byte ← Bit ← Megabyte (MB) ← Kilobyte (KB) ← Terabyte (TB) ← Gigabyte (GB)',
      'Bit ← Byte ← Gigabyte (GB) ← Megabyte (MB) ← Kilobyte (KB) ← Terabyte (TB)',
      'Kilobyte (KB) ← Megabyte (MB) ← Gigabyte (GB) ← Terabyte (TB) ← Byte ← Bit'
    ],
    answer: 0,
    explain: 'The correct ascending progression is: Bit (0/1), Byte (8 bits), KB (1024 B), MB (1024 KB), GB (1024 MB), and TB (1024 GB).'
  },
  {
    id: 'l4-16',
    lecture: 'l4',
    stageId: 'units-scale',
    difficulty: 'hard',
    question: 'You purchase an external hard drive labeled 1 Terabyte (1 TB) on the packaging, but upon connecting it to a Windows PC, it displays approximately 931 GB of free space. What is the real technical reason for this difference?',
    options: [
      'Manufacturers calculate capacity in decimal units (1000³), whereas the operating system calculates in binary units (1024³), causing the mathematical discrepancy.',
      'The drive contains 7% factory-damaged bad sectors out of the box.',
      'Windows automatically reserves 70 GB for temporary paging files and recycle bin overhead.',
      'The USB cable used is an older standard unable to transfer the full capacity address space.'
    ],
    answer: 0,
    explain: 'Manufacturers calculate 1 TB as 1,000,000,000,000 bytes (decimal powers of 10). Windows displays GiB using binary powers of 2 (1024⁴): 10¹² ÷ (1024⁴) ≈ 931.32 GiB.'
  },

  // ============================================================
  // Station 4: Character Encoding (ASCII & Unicode) - 5 Questions
  // ============================================================
  {
    id: 'l4-17',
    lecture: 'l4',
    stageId: 'char-encoding',
    difficulty: 'easy',
    question: 'How many bits were used by standard original ASCII to encode each character and control symbol?',
    options: [
      '7 bits (representing 128 characters)',
      '8 bits (representing 256 characters)',
      '16 bits (representing 65536 characters)',
      '32 bits (representing billions of characters)'
    ],
    answer: 0,
    explain: 'Standard ASCII uses 7 bits per character (2⁷ = 128 possible codes), encompassing Latin letters, numbers, punctuation, and control characters.'
  },
  {
    id: 'l4-18',
    lecture: 'l4',
    stageId: 'char-encoding',
    difficulty: 'medium',
    question: 'In the ASCII table, if uppercase "A" is represented by decimal code 65, what is the code for uppercase "C"?',
    options: [
      '67',
      '66',
      '68',
      '99'
    ],
    answer: 0,
    explain: 'ASCII Latin letters are sequentially indexed: A = 65, B = 66, C = 67.'
  },
  {
    id: 'l4-19',
    lecture: 'l4',
    stageId: 'char-encoding',
    difficulty: 'hard',
    question: 'You open an Arabic text document on an older system and it displays garbled symbols and question marks (Mojibake). What is the exact technical explanation for this failure?',
    options: [
      'The file was encoded in UTF-8, but the legacy software decoded the bytes using a single-byte legacy charset like ASCII or ISO-8859-1.',
      'The computer display card lacks hardware circuitry for rendering curved Arabic typography.',
      'The hard drive suffered magnetic flux decay affecting only Arabic glyph data.',
      'A virus selectively stripped the diacritic dots above and below Arabic characters.'
    ],
    answer: 0,
    explain: 'Mojibake happens when binary byte sequences are decoded using a different character mapping table than was used to encode them. UTF-8 multi-byte Arabic sequences are misinterpreted as disjoint Latin-1 glyphs.'
  },
  {
    id: 'l4-20',
    lecture: 'l4',
    stageId: 'char-encoding',
    difficulty: 'medium',
    question: 'Why was Unicode (UTF-8) developed and adopted worldwide instead of remaining with standard ASCII?',
    options: [
      'Because ASCII was restricted to basic English and Latin characters, while Unicode was created to encompass all world writing systems including Arabic and emojis.',
      'Because ASCII consumed laptop battery power much faster than Unicode.',
      'Because ASCII files were technically incompatible with internet transmission.',
      'Because Microsoft patented the ASCII charset and prohibited free global usage.'
    ],
    answer: 0,
    explain: 'Unicode unified fragmented national character sets, providing a universal standard capable of representing every global language, mathematical symbol, and emoji.'
  },
  {
    id: 'l4-21',
    lecture: 'l4',
    stageId: 'char-encoding',
    difficulty: 'hard',
    question: 'How does UTF-8 encoding efficiently allocate byte storage between English characters and Arabic characters?',
    options: [
      'English characters take 1 byte each (identical to ASCII), while Arabic characters generally consume 2 bytes in the extended table.',
      'English characters always take 4 bytes, while Arabic characters take 1 byte because Arabic words are shorter.',
      'All characters across all languages strictly take 3 bytes each without exception.',
      'Arabic characters are stored as 8-byte raster bitmaps rather than numeric codes.'
    ],
    answer: 0,
    explain: 'UTF-8 is variable-length: standard ASCII English characters use 1 byte for backward compatibility, while Arabic, Hebrew, and Cyrillic script utilize 2 bytes.'
  },

  // ============================================================
  // Station 5: Digital Images & Color Models - 6 Questions
  // ============================================================
  {
    id: 'l4-22',
    lecture: 'l4',
    stageId: 'pixel-colors',
    difficulty: 'easy',
    question: 'What is the smallest individual picture element or addressable light point in a digital raster image?',
    options: [
      'Pixel',
      'Frame',
      'Vector',
      'Hertz'
    ],
    answer: 0,
    explain: 'A pixel (short for Picture Element) is the smallest discrete dot of color on a display matrix.'
  },
  {
    id: 'l4-23',
    lecture: 'l4',
    stageId: 'pixel-colors',
    difficulty: 'medium',
    question: 'An uncompressed grayscale digital image has dimensions of 800 pixels width × 600 pixels height with an 8-bit color depth (1 Byte per pixel). What is its raw file size in Bytes?',
    options: [
      '480,000 Bytes',
      '60,000 Bytes',
      '3,840,000 Bytes',
      '1,400 Bytes'
    ],
    answer: 0,
    explain: 'Raw size = Total Pixels × Bytes per Pixel = (800 × 600) × 1 Byte = 480,000 Bytes.'
  },
  {
    id: 'l4-24',
    lecture: 'l4',
    stageId: 'pixel-colors',
    difficulty: 'hard',
    question: 'Why does blending Red, Green, and Blue light at maximum intensity (255, 255, 255) on a computer monitor yield pure White, while mixing Cyan, Magenta, and Yellow ink on paper yields dark muddy Black?',
    options: [
      'Because RGB is an additive light model where light waves add together toward white, while CMY is a subtractive pigment model where inks absorb and subtract reflected light.',
      'Because computer screens emit heat while paper printing absorbs atmospheric humidity.',
      'Because liquid ink contains chemicals that constantly scatter incident white light.',
      'Because graphics software intentionally applies mathematical inversion between web and print.'
    ],
    answer: 0,
    explain: 'Displays emit colored light directly into the eye (Additive: R+G+B = White). Printing inks act as filters absorbing specific wavelengths from white ambient light (Subtractive: C+M+Y absorbs all light, leaving darkness/black).'
  },
  {
    id: 'l4-25',
    lecture: 'l4',
    stageId: 'pixel-colors',
    difficulty: 'medium',
    question: 'In a 24-bit True Color system (8 bits Red, 8 bits Green, 8 bits Blue), approximately how many distinct colors can be rendered?',
    options: [
      'Approximately 16.7 million distinct colors (2²⁴ colors).',
      'Exactly 256 colors.',
      'Approximately 65 thousand colors.',
      'Exactly one billion colors.'
    ],
    answer: 0,
    explain: 'Each channel has 2⁸ = 256 discrete levels: 256 × 256 × 256 = 16,777,216 distinct color combinations, surpassing human visual discrimination limits.'
  },
  {
    id: 'l4-26',
    lecture: 'l4',
    stageId: 'pixel-colors',
    difficulty: 'hard',
    question: 'A digital image has dimensions of 1000 × 1000 pixels. If you adjust camera settings to 2000 × 2000 pixels while maintaining the same color depth, by what factor does raw uncompressed data size increase?',
    options: [
      '4 times (quadrupled).',
      '2 times (doubled).',
      '8 times.',
      '16 times.'
    ],
    answer: 0,
    explain: 'Image pixel area equals width × height. Doubling width (×2) and doubling height (×2) results in 2 × 2 = 4 times the total pixel count (from 1 million to 4 million pixels).'
  },
  {
    id: 'l4-27',
    lecture: 'l4',
    stageId: 'pixel-colors',
    difficulty: 'medium',
    question: 'Why do graphic designers create company brand logos in Vector graphics format rather than raster Bitmap format?',
    options: [
      'Because vector graphics are composed of mathematical geometric paths, allowing infinite scaling to billboard size without pixelation or loss of crispness.',
      'Because vector files inherently support a million more colors than raster formats.',
      'Because vector design programs permit royalty-free copyright bypass.',
      'Because raster bitmaps can only be displayed on mobile devices.'
    ],
    answer: 0,
    explain: 'Raster bitmaps consist of a fixed pixel grid that loses quality and exhibits jagged edges when enlarged. Vectors use scalable geometric formulas recalculated at any display scale.'
  },

  // ============================================================
  // Station 6: Digital Audio & Sampling - 6 Questions
  // ============================================================
  {
    id: 'l4-28',
    lecture: 'l4',
    stageId: 'sound-digital',
    difficulty: 'easy',
    question: 'What physical unit is used to measure audio sampling rate (samples captured per second)?',
    options: [
      'Hertz (Hz) or Kilohertz (kHz)',
      'Decibels (dB)',
      'Pixels per inch (PPI)',
      'Bytes per second (Bps)'
    ],
    answer: 0,
    explain: 'Sampling rate represents the frequency of audio measurement snapshots per second, measured in Hertz (Hz).'
  },
  {
    id: 'l4-29',
    lecture: 'l4',
    stageId: 'sound-digital',
    difficulty: 'medium',
    question: 'According to the Nyquist-Shannon sampling theorem, if human hearing tops out at 20,000 Hz (20 kHz), what is the minimum sampling frequency required to capture the signal without distortion?',
    options: [
      'Greater than 40,000 Hz (more than twice the highest frequency).',
      'Exactly 20,000 Hz (equal to the maximum frequency).',
      '10,000 Hz (half the frequency to economize bandwidth).',
      'At least 100,000 Hz.'
    ],
    answer: 0,
    explain: 'The Nyquist theorem establishes that to accurately reconstruct a continuous signal, the sampling rate must exceed double the highest frequency component (f_sample > 2 × f_max).'
  },
  {
    id: 'l4-30',
    lecture: 'l4',
    stageId: 'sound-digital',
    difficulty: 'hard',
    question: 'What acoustic distortion artifact occurs if an analog audio signal is sampled below the Nyquist rate (f_sample < 2 × f_max)?',
    options: [
      'Aliasing, which creates false, ghost frequencies and dissonance in the audible spectrum.',
      'The sound signal automatically converts into silent electromagnetic waves.',
      'The digital file size inexplicably multiplies by a factor of 10.',
      'The audio plays in reverse from right to left.'
    ],
    answer: 0,
    explain: 'Aliasing happens when high frequencies are sampled too sparsely, causing the ADC to misread them as lower, distorted ghost frequencies that did not exist in the original acoustic event.'
  },
  {
    id: 'l4-31',
    lecture: 'l4',
    stageId: 'sound-digital',
    difficulty: 'medium',
    question: 'What is the primary technical function of Bit Depth in digital audio recording (such as 16-bit vs 24-bit)?',
    options: [
      'It determines the vertical resolution of amplitude measurement, dictating dynamic range between the softest whisper and loudest sound.',
      'It dictates the physical velocity of sound emerging from the loudspeaker in cm/s.',
      'It dictates the total playback duration in minutes and seconds.',
      'It dictates whether vocal lyrics are classified as native or foreign language.'
    ],
    answer: 0,
    explain: 'Bit depth defines the precision of vertical amplitude quantization. Greater bit depth broadens the dynamic range and lowers the quantization noise floor.'
  },
  {
    id: 'l4-32',
    lecture: 'l4',
    stageId: 'sound-digital',
    difficulty: 'hard',
    question: 'Standard Audio CD quality specifies a 44,100 Hz sampling rate, 16-bit depth, and 2 channels (Stereo). What is the exact uncompressed raw data bitrate per second?',
    options: [
      '1,411,200 bits per second (approximately 1411.2 kbps).',
      '705,600 bits per second.',
      '44,100 bits per second.',
      '2,822,400 bits per second.'
    ],
    answer: 0,
    explain: 'Bitrate = Sampling Rate × Bit Depth × Channels = 44,100 × 16 × 2 = 1,411,200 bps (1411.2 kbps ≈ 176.4 KB/s).'
  },
  {
    id: 'l4-33',
    lecture: 'l4',
    stageId: 'sound-digital',
    difficulty: 'hard',
    question: 'A sound engineer evaluates two audio masters: Track A is recorded at 44.1 kHz / 24-bit, and Track B is recorded at 96 kHz / 16-bit. Which track provides a wider dynamic range between quiet details and loud peaks?',
    options: [
      'Track A — because dynamic range and amplitude resolution depend directly on bit depth (24-bit vs 16-bit).',
      'Track B — because higher sampling frequency (96 kHz) is the sole governor of dynamic range.',
      'Both tracks have identical dynamic range because their numerical products are similar.',
      'Dynamic range does not exist in digital audio recording.'
    ],
    answer: 0,
    explain: 'Dynamic range is governed by bit depth (16-bit provides ~96 dB of dynamic range, while 24-bit provides ~144 dB). Sampling frequency (kHz) governs upper frequency response, not dynamic range.'
  },

  // ============================================================
  // Station 7: Digital Video & Transmission - 5 Questions
  // ============================================================
  {
    id: 'l4-34',
    lecture: 'l4',
    stageId: 'video-digital',
    difficulty: 'easy',
    question: 'What physiological optical phenomenon enables human vision to perceive a rapid succession of still frames as fluid continuous motion?',
    options: [
      'Persistence of Vision',
      'Corneal Light Refraction',
      'Discrete Visual Quantization',
      'Temporary Color Blindness'
    ],
    answer: 0,
    explain: 'Persistence of vision causes the retina and visual cortex to retain an image brief fractions of a second after it disappears, blending consecutive frames above ~24 fps into continuous motion.'
  },
  {
    id: 'l4-35',
    lecture: 'l4',
    stageId: 'video-digital',
    difficulty: 'medium',
    question: 'A video clip has a duration of 10 seconds and plays at 30 frames per second (30 fps). How many distinct still picture frames make up this clip?',
    options: [
      '300 frames',
      '30 frames',
      '3000 frames',
      '150 frames'
    ],
    answer: 0,
    explain: 'Total frames = Frame Rate × Duration = 30 fps × 10 seconds = 300 frames.'
  },
  {
    id: 'l4-36',
    lecture: 'l4',
    stageId: 'video-digital',
    difficulty: 'medium',
    question: 'In video compression algorithms, what is the distinction between Spatial Redundancy and Temporal Redundancy?',
    options: [
      'Spatial redundancy is pixel repetition within a single frame; temporal redundancy is pixel repetition across consecutive frames over time.',
      'Spatial redundancy relates exclusively to audio; temporal redundancy relates exclusively to video.',
      'Spatial redundancy signifies lossless compression; temporal redundancy signifies mandatory lossy compression.',
      'Spatial redundancy is used only in cinema projection; temporal redundancy is used only on mobile screens.'
    ],
    answer: 0,
    explain: 'Spatial redundancy exploits similarity among neighboring pixels inside the same image. Temporal redundancy exploits static areas that remain unchanged across sequential frames in time.'
  },
  {
    id: 'l4-37',
    lecture: 'l4',
    stageId: 'video-digital',
    difficulty: 'medium',
    question: 'When streaming video online, if you elevate the playback resolution from 1080p (FHD) to 4K (UHD) at the same frame rate and codec, how does network bandwidth demand scale?',
    options: [
      'Bandwidth demand increases roughly 4 times — because 4K contains 4 times as many pixels as 1080p.',
      'Bandwidth demand increases by only 2 times — because 4K is double 2K.',
      'Bandwidth demand does not change because the video codec is unchanged.',
      'Bandwidth demand strictly increases by 8 times in all cases.'
    ],
    answer: 0,
    explain: '1080p has ~2.07 million pixels (1920×1080), while 4K has ~8.29 million pixels (3840×2160). Since pixel payload quadruples, streaming bandwidth scales by approximately 4×.'
  },
  {
    id: 'l4-38',
    lecture: 'l4',
    stageId: 'video-digital',
    difficulty: 'hard',
    question: 'Why do fast-motion scenes (such as soccer matches or car chases) often display blocky pixelation artifacts (macroblocking) during streaming, while static dialogue scenes remain crisp on the same internet connection?',
    options: [
      'Rapid motion destroys temporal redundancy across frames, forcing the compression encoder to drop spatial detail to maintain playback within the fixed bitrate cap.',
      'Television display panels overheat during high-motion scenes, causing temporary rendering errors.',
      'Broadcasting cameras operate in analog mode during sports broadcasts.',
      'Physical internet cables constrict throughput during high-motion events.'
    ],
    answer: 0,
    explain: 'Video codecs achieve high compression by recycling static background pixels across frames. High-speed action changes nearly every pixel simultaneously, eliminating temporal redundancy and forcing aggressive lossy quantization to avoid buffering.'
  },

  // ============================================================
  // Station 8: Data Compression - 6 Questions
  // ============================================================
  {
    id: 'l4-39',
    lecture: 'l4',
    stageId: 'compression',
    difficulty: 'easy',
    question: 'Which category of data compression guarantees 100% exact reconstruction of the original file without losing a single bit upon decompression?',
    options: [
      'Lossless Compression',
      'Lossy Compression',
      'Dynamic Variable Compression',
      'Analog Audio Compression'
    ],
    answer: 0,
    explain: 'Lossless compression (such as ZIP or PNG) removes statistical redundancy, ensuring that decompressed data is mathematically identical bit-for-bit to the source.'
  },
  {
    id: 'l4-40',
    lecture: 'l4',
    stageId: 'compression',
    difficulty: 'medium',
    question: 'Why is lossy compression (such as JPEG or MP3) entirely unacceptable for compressing executable programs (.exe), databases, or text documents?',
    options: [
      'Because losing or altering even a single bit in an executable code crashes execution, and in text alters critical words or numbers.',
      'Because lossy compression algorithms are restricted exclusively to Apple operating systems.',
      'Because text documents and software executables are inherently too small to be compressed.',
      'Because antivirus software classifies all lossy compressed files as malware.'
    ],
    answer: 0,
    explain: 'Lossy compression discards data deemed imperceptible to human senses. In computer code or textual data, every bit is critical; changing a single byte corrupts program logic or alters factual content.'
  },
  {
    id: 'l4-41',
    lecture: 'l4',
    stageId: 'compression',
    difficulty: 'hard',
    question: 'In Huffman coding, what is the mandatory Prefix Property that guarantees unambiguous decoding of variable-length binary streams?',
    options: [
      'No character code can be a prefix of any other character’s code in the codebook.',
      'Every binary code must start with 1 and terminate with 0.',
      'Every character code must strictly have an identical bit length.',
      'Longer codes must be reserved exclusively for the most frequently occurring characters.'
    ],
    answer: 0,
    explain: 'The Prefix Property guarantees that no assigned bit string forms the initial prefix of another code. This allows instant, deterministic decoding from left to right without delimiter markers.'
  },
  {
    id: 'l4-42',
    lecture: 'l4',
    stageId: 'compression',
    difficulty: 'hard',
    question: 'A text message contains 1000 characters: "A" occurs 800 times, "B" occurs 150 times, "C" occurs 40 times, and "D" occurs 10 times. In a Huffman coding tree, which character will be assigned the shortest binary code?',
    options: [
      'Character "A" — because the most frequent character receives the shortest code to optimize overall size.',
      'Character "D" — because rare characters are granted priority short codes.',
      'Character "B" — because it represents the median distribution frequency.',
      'All characters are assigned uniform 4-bit codes regardless of frequency.'
    ],
    answer: 0,
    explain: 'Huffman trees place high-frequency symbols closest to the root, assigning them the fewest bits (e.g., a single bit "0" for "A"), maximizing data compression.'
  },
  {
    id: 'l4-43',
    lecture: 'l4',
    stageId: 'compression',
    difficulty: 'medium',
    question: 'Run-Length Encoding (RLE) compresses "AAAAABBBB" into "5A4B". Under what circumstances does RLE actually enlarge file size instead of compressing it?',
    options: [
      'When data consists of constantly changing characters with zero consecutive repeats (e.g. "ABCDEF" expanding to "1A1B1C1D1E1F").',
      'When the file contains cartoon imagery with broad uniform white backgrounds.',
      'When compression is performed on high-speed flash memory.',
      'When data is recorded in binary rather than hexadecimal notation.'
    ],
    answer: 0,
    explain: 'Without consecutive duplicate runs, storing run counts prefixes every single character with a counter byte, doubling uncompressed file size.'
  },
  {
    id: 'l4-44',
    lecture: 'l4',
    stageId: 'compression',
    difficulty: 'hard',
    question: 'If you open a JPEG image in photo editing software, make a minor edit, and re-save it as JPEG repeatedly 30 times, what happens to image quality compared to performing the same cycle on a PNG?',
    options: [
      'The JPEG degrades progressively with accumulating compression artifacts with each save, whereas the PNG remains 100% pristine.',
      'The JPEG image quality improves over time because photo editing software repairs degraded pixels.',
      'Both formats behave identically with zero discernable difference.',
      'The PNG image degrades because file size expands with repeated editing.'
    ],
    answer: 0,
    explain: 'Generation loss occurs because lossy JPEG re-quantizes Discrete Cosine Transform coefficients on every save, compounding permanent visual degradation. PNG is lossless and preserves exact pixel matrices across revisions.'
  },

  // ============================================================
  // Station 9: Information Design & Ethics - 3 Questions
  // ============================================================
  {
    id: 'l4-45',
    lecture: 'l4',
    stageId: 'info-design',
    difficulty: 'easy',
    question: 'What is the primary objective of Information Design?',
    options: [
      'To structure and present complex data clearly and accurately so users can interpret insights and make sound decisions efficiently.',
      'To encrypt proprietary data so that only programmers can decipher it.',
      'To artificially bloat file sizes to accelerate network download velocity.',
      'To alter factual metrics to flatter organizational leadership.'
    ],
    answer: 0,
    explain: 'Information design translates intricate data and quantitative metrics into intuitive, ethical visual displays that optimize human cognitive comprehension.'
  },
  {
    id: 'l4-46',
    lecture: 'l4',
    stageId: 'info-design',
    difficulty: 'medium',
    question: 'A financial report charts corporate profits starting the vertical Y-axis at $90,000 rather than zero, making a minor 2% revenue growth appear as an enormous 500% surge. What is this unethical data visualization flaw called?',
    options: [
      'A truncated graph distortion that manipulates visual scale and misleads perception.',
      'A legitimate artistic styling technique with no bearing on comprehension.',
      'A proper application of the Nyquist theorem to chart drafting.',
      'An internationally approved standard for printing ink conservation.'
    ],
    answer: 0,
    explain: 'Truncating the baseline axis of a bar chart exaggerates minute proportional differences, visually deceiving audiences into misinterpreting statistical trends.'
  },
  {
    id: 'l4-47',
    lecture: 'l4',
    stageId: 'info-design',
    difficulty: 'hard',
    question: 'When designing a hospital monitoring dashboard accessible to color-blind practitioners (such as red-green deuteranopia), which approach adheres best to information design principles?',
    options: [
      'Do not rely on color alone; supplement colors with distinct geometric shapes, icons (check/cross), high contrast, and textual indicators.',
      'Use extremely pale pastel tints of red and green to heighten differentiation.',
      'Eliminate all iconography and display solely raw black text on a white background.',
      'Require hospital staff to purchase specialized prism eyeglasses to operate monitors.'
    ],
    answer: 0,
    explain: 'Accessibility guidelines mandate redundant visual encoding: critical status alerts must never depend exclusively on color hues; they must incorporate symbols, shapes, text, or patterns.'
  },

  // ============================================================
  // Station 10: Multi-concept Integration - 3 Questions
  // ============================================================
  {
    id: 'l4-48',
    lecture: 'l4',
    stageId: 'summary-integration',
    difficulty: 'easy',
    question: 'Which of the following digital file formats utilizes lossless compression and natively supports transparent image backgrounds?',
    options: [
      'PNG format',
      'JPEG format',
      'MP3 format',
      'MP4 format'
    ],
    answer: 0,
    explain: 'PNG is the open lossless standard for raster imagery, supporting 24-bit True Color and 8-bit alpha transparency channels.'
  },
  {
    id: 'l4-49',
    lecture: 'l4',
    stageId: 'summary-integration',
    difficulty: 'hard',
    question: 'An educational portal transmits spoken lectures to students in remote rural communities with severely bandwidth-constrained mobile data. Which engineering combination minimizes file size most drastically while preserving spoken vocal clarity?',
    options: [
      'Convert audio from Stereo to Mono + reduce sampling rate to 16 kHz or 22 kHz + apply a speech-optimized lossy codec.',
      'Record audio at 96 kHz / 24-bit and save as uncompressed WAV.',
      'Increase sampling rate to 44.1 kHz across 2 stereo channels and apply RLE compression.',
      'Convert spoken audio into plain ASCII text documents and purge multi-syllable vocabulary.'
    ],
    answer: 0,
    explain: 'Human speech frequencies sit predominantly below 8 kHz. Downmixing to mono immediately halves data size, 16 kHz sampling cleanly covers speech fundamentals under Nyquist, and speech lossy compression slashes footprint by >90% without loss of intelligibility.'
  },
  {
    id: 'l4-50',
    lecture: 'l4',
    stageId: 'summary-integration',
    difficulty: 'hard',
    question: 'A student downloads a 720 Megabyte (720 MB) video lecture over a stable 12 Mbps (Megabits per second) internet connection. Assuming theoretical 100% throughput with zero protocol overhead, how many minutes will the download take?',
    options: [
      'Exactly 8 minutes — because 720 MB = 5760 Mb; dividing by 12 Mbps yields 480 seconds (480 ÷ 60 = 8 minutes).',
      '60 full minutes — by directly dividing 720 by 12.',
      'Exactly 1 minute — because connection throughput is 12 megabytes per second.',
      'Exactly 10 minutes.'
    ],
    answer: 0,
    explain: 'Convert file size from Bytes to bits: 720 MB × 8 = 5760 Megabits (Mb). Divide by transmission throughput: 5760 Mb ÷ 12 Mbps = 480 seconds. Convert to minutes: 480 seconds ÷ 60 = 8 minutes.'
  }
];

if (typeof globalThis !== 'undefined') globalThis.LECT4_FULL_EXAM_EN = LECT4_FULL_EXAM_EN;
if (typeof window !== 'undefined') window.LECT4_FULL_EXAM_EN = LECT4_FULL_EXAM_EN;
if (typeof module !== 'undefined' && module.exports) module.exports = { LECT4_FULL_EXAM_EN };

