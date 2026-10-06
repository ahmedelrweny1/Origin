/* ============================================================
   Exam - Unit 4: Digital Data Representation & Multimedia
   10 comprehensive questions covering all stages
   ============================================================ */

const LECT4_EXAM_EN = [
  {
    id: 'exam-q1',
    question: 'Which of the following describes analog data?',
    options: [
      'Quantities that change in discrete steps',
      'Quantities that change gradually and continuously',
      'Quantities represented by only 0 and 1',
      'Quantities that cannot be measured precisely'
    ],
    answer: 1,
    explain: 'Analog data changes gradually and continuously — like temperature and time.'
  },
  {
    id: 'exam-q2',
    question: 'How many different values can 1 byte (8 bits) represent?',
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
    id: 'exam-q3',
    question: 'Convert the binary number 1010(2) to decimal:',
    options: [
      '10',
      '12',
      '8',
      '5'
    ],
    answer: 0,
    explain: '1010(2) = (0×2⁰) + (1×2¹) + (0×2²) + (1×2³) = 0 + 2 + 0 + 8 = 10'
  },
  {
    id: 'exam-q4',
    question: 'Convert the binary number 11011011(2) to hexadecimal:',
    options: [
      'DB(16)',
      'BD(16)',
      '6D(16)',
      'B7(16)'
    ],
    answer: 0,
    explain: '11011011(2) → 1101/1011 → D/B → DB(16)'
  },
  {
    id: 'exam-q5',
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
    id: 'exam-q6',
    question: 'What is the result of binary addition: 1010(2) + 0101(2)?',
    options: [
      '1111(2)',
      '1100(2)',
      '1011(2)',
      '1001(2)'
    ],
    answer: 0,
    explain: '1010 + 0101 = 1111 — same as 10 + 5 = 15 in decimal.'
  },
  {
    id: 'exam-q7',
    question: 'What is the 2\'s Complement of 0101(2)?',
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
    id: 'exam-q8',
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
    id: 'exam-q9',
    question: 'What is the data size of a 1280×720 pixel image at 24-bit full color?',
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
    id: 'exam-q10',
    question: 'A 90 MB video was compressed to 30 MB — what is the compression ratio?',
    options: [
      '33%',
      '50%',
      '66%',
      '30%'
    ],
    answer: 0,
    explain: 'Compression ratio = (30 ÷ 90) × 100 = 33.3% ≈ 33%'
  }
];

if (typeof window !== 'undefined') {
  window.LECT4_EXAM_EN = LECT4_EXAM_EN;
}