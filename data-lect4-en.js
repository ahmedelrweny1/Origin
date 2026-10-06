/* ============================================================
   Lecture 4: Digital Data Representation & Multimedia
   Stage data and final challenge in English
   Source: lect4en.pdf pp. 53-84 (6-1 to 6-10)
   ============================================================ */

const LECT4_STAGES_EN = [
  {
    id: "analog-digital",
    category: "Part 1: Digital Representation Basics",
    title: "Analog and Digital",
    tagline: "From continuous world to discrete steps: how sound and images become zeros and ones",
    glyph: "🔄",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "Analog changes continuously like temperature, while digital changes in discrete steps like an electricity meter.",
    interactiveType: "analog_digital_sim",
    story: [
      `<p class="story-lead">In our real world, things change <strong>continuously</strong> — temperature rises and falls smoothly, time flows without stopping. But computers only understand <strong>discrete steps</strong>. This is where digital representation comes in:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📊</strong> 1. Analog</h4>
            <span class="card-badge badge-blue">Continuous quantities</span>
          </div>
          <p class="card-desc">Quantities that change <strong>gradually and continuously</strong> and can be measured with fine precision, such as: mass, time, temperature.</p>
          <p class="card-example">🔍 <em>Example:</em> Mercury thermometer — the mercury column moves smoothly without jumps.</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>💻</strong> 2. Digital</h4>
            <span class="card-badge badge-amber">Discrete quantities</span>
          </div>
          <p class="card-desc">Quantities that change in <strong>specific, discrete steps</strong> and are represented numerically by dividing into regular intervals.</p>
          <p class="card-example">🔍 <em>Example:</em> Electricity meter — counts in discrete units without fractions.</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">🔄</span>
          <h4 class="callout-title">Converting Between Worlds</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📥</span> <strong>A/D Conversion (Digitization):</strong> Converting analog data into digital data — this happens when you record your voice with a microphone.</li>
          <li><span class="list-bullet-icon">📤</span> <strong>D/A Conversion:</strong> Converting digital data back into analog — this happens when you hear sound from speakers.</li>
        </ul>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>✨</strong> Advantages of Digital Data</h4>
          <span class="card-badge badge-green">Why digital is better?</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item">📋 Can be duplicated without degradation</span>
          <span class="pill-item">✏️ Easy to modify and edit</span>
          <span class="pill-item">🚀 Efficient to transmit</span>
          <span class="pill-item">🎨 Can combine different media types</span>
        </div>
      </div>`
    ],
    takeaway: "Analog = continuous quantities ⬝ Digital = discrete quantities ⬝ A/D converts analog to digital ⬝ D/A is the reverse ⬝ Digital is easier to edit, transmit, and combine.",
    funFact: "When you speak into a microphone, your voice (analog) is converted to numbers (digital) in fractions of a second — that's what makes phone calls work!",
    quiz: {
      question: "A thermometer that represents a continuous quantity using the length of a mercury column is an example of:",
      options: [
        "Analog Data",
        "Digital Data",
        "Binary System",
        "D/A Conversion"
      ],
      answer: 0,
      explain: "The mercury thermometer represents a continuously changing quantity that varies gradually — that's the definition of analog data."
    }
  },
  {
    id: "binary-bits-bytes",
    category: "Part 1: Digital Representation Basics",
    title: "Binary System and Amount of Data",
    tagline: "Bits and Bytes: the smallest units of information that build everything in computing",
    glyph: "🔢",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "Bit is the smallest unit (0 or 1), Byte = 8 bits, and each larger unit equals 1024 of the previous one.",
    interactiveType: "bits_bytes_calc",
    story: [
      `<p class="story-lead">Computers only understand two things: <strong>on and off</strong> — like a light switch. This is called the <strong>Binary System</strong>, which uses only two digits: <strong>0 and 1</strong>.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>⚡</strong> Bit: The Smallest Unit</h4>
          <span class="card-badge">Only two states: 0 or 1</span>
        </div>
        <p class="card-desc">A bit has only <strong>two states</strong>: "switch on or off", "voltage high or low", "magnet north or south".</p>
        <p class="card-desc">Each additional bit <strong>doubles</strong> the number of possibilities:</p>
        <div class="pill-cloud">
          <span class="pill-item">1 bit = 2 possibilities (0 or 1)</span>
          <span class="pill-item">2 bits = 4 possibilities (00, 01, 10, 11)</span>
          <span class="pill-item">3 bits = 8 possibilities</span>
          <span class="pill-item">n bits = 2ⁿ possibilities</span>
        </div>
      </div>`,
      `<div class="story-card card-blue-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📦</strong> Byte: The Working Unit</h4>
          <span class="card-badge badge-blue">1 Byte = 8 bits</span>
        </div>
        <p class="card-desc">The byte is the basic unit computers work with. It consists of <strong>8 bits</strong> and can represent <strong>256 different values</strong> (2⁸).</p>
        <p class="card-example">🔍 <em>Example:</em> The letter "A" is stored as one byte: 01000001</p>
      </div>`,
      `<div class="story-card card-amber-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📐</strong> Data Units: From Byte to Terabyte</h4>
          <span class="card-badge badge-amber">Each unit = 1024 of the previous</span>
        </div>
        <table class="l3-mini-table">
          <tr><th>Unit</th><th>Abbreviation</th><th>Equals</th></tr>
          <tr><td>Kilobyte</td><td>KB</td><td>1,024 Bytes</td></tr>
          <tr><td>Megabyte</td><td>MB</td><td>1,024 KB</td></tr>
          <tr><td>Gigabyte</td><td>GB</td><td>1,024 MB</td></tr>
          <tr><td>Terabyte</td><td>TB</td><td>1,024 GB</td></tr>
        </table>
      </div>`
    ],
    takeaway: "Bit = smallest unit (0 or 1) ⬝ Byte = 8 bits = 256 values ⬝ Each larger unit = 1024 of the previous ⬝ n bits represents 2ⁿ possibilities.",
    funFact: "If you have 1 terabyte (TB) of storage, you can store about 250,000 high-quality photos or 500 hours of video!",
    quiz: {
      question: "How many different values can 1 byte (8 bits) represent?",
      options: [
        "256 values (2⁸)",
        "8 values",
        "64 values (2⁶)",
        "1024 values (2¹⁰)"
      ],
      answer: 0,
      explain: "1 byte = 8 bits, each bit has 2 states, so 2⁸ = 256 different values."
    }
  },
  {
    id: "decimal-binary-conversion",
    category: "Part 1: Digital Representation Basics",
    title: "Decimal-Binary Conversion",
    tagline: "How to convert normal numbers (we use daily) to computer binary numbers",
    glyph: "🔁",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "Binary to decimal: multiply each digit by a power of 2 and sum. Decimal to binary: divide by 2 and write remainders in reverse.",
    interactiveType: "base_converter",
    story: [
      `<p class="story-lead">We use the <strong>Decimal System</strong> (0-9) in daily life, but computers use the <strong>Binary System</strong> (0 and 1 only). So we need to convert between them:</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➡️</strong> Binary to Decimal</h4>
            <span class="card-badge badge-blue">Multiply and sum</span>
          </div>
          <p class="card-desc">Multiply each binary digit by a <strong>power of 2</strong> based on its position (starting from the right with 2⁰), then sum the results.</p>
          <p class="card-example">🔍 <em>Example:</em> 1011(2) = (1×2⁰) + (1×2¹) + (0×2²) + (1×2³) = 1 + 2 + 0 + 8 = <strong>11</strong></p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>⬅️</strong> Decimal to Binary</h4>
            <span class="card-badge badge-amber">Divide by 2, collect remainders</span>
          </div>
          <p class="card-desc">Divide the decimal number by 2 repeatedly, take the <strong>remainder</strong> each time, then write remainders from <strong>last to first</strong>.</p>
          <p class="card-example">🔍 <em>Example:</em> 6 decimal → 6÷2=3 r0 → 3÷2=1 r1 → 1÷2=0 r1 → Result: <strong>110(2)</strong></p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <h4 class="callout-title">Quick Conversion Rule</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🔢</span> Powers of 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024...</li>
          <li><span class="list-bullet-icon">📝</span> Binary to decimal: write powers of 2 under each digit, sum the ones with 1</li>
          <li><span class="list-bullet-icon">📝</span> Decimal to binary: divide by 2, write remainders bottom to top</li>
        </ul>
      </div>`
    ],
    takeaway: "Binary to decimal: multiply each digit by power of 2 and sum ⬝ Decimal to binary: divide by 2, write remainders in reverse ⬝ Powers of 2: 1,2,4,8,16,32,64,128...",
    funFact: "The number 10 in decimal is 1010 in binary — notice how binary numbers get long quickly because each position doubles the values!",
    quiz: {
      question: "Convert the binary number 1010(2) to decimal:",
      options: [
        "10",
        "12",
        "8",
        "5"
      ],
      answer: 0,
      explain: "1010(2) = (0×2⁰) + (1×2¹) + (0×2²) + (1×2³) = 0 + 2 + 0 + 8 = 10"
    }
  },
  {
    id: "hexadecimal",
    category: "Part 1: Digital Representation Basics",
    title: "Hexadecimal System",
    tagline: "When binary numbers get too long, we shorten them with hexadecimal — letters and digits in one system",
    glyph: "🔤",
    image: "assets/images/media_types.jpg",
    visualCaption: "Hexadecimal uses 16 symbols: digits 0-9 and letters A-F, and each hex digit = exactly 4 bits.",
    interactiveType: "hex_converter",
    story: [
      `<p class="story-lead">Binary numbers get long and hard to read quickly. That's why we use the <strong>Hexadecimal System</strong> — a compact system using <strong>16 symbols</strong>: digits 0-9 and letters A-F.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📊</strong> Correspondence Table Between Three Systems</h4>
          <span class="card-badge">Memorize the first 16 values</span>
        </div>
        <table class="l3-mini-table">
          <tr><th>Decimal</th><th>Binary</th><th>Hex</th><th>Decimal</th><th>Binary</th><th>Hex</th></tr>
          <tr><td>0</td><td>0000</td><td>0</td><td>8</td><td>1000</td><td>8</td></tr>
          <tr><td>1</td><td>0001</td><td>1</td><td>9</td><td>1001</td><td>9</td></tr>
          <tr><td>2</td><td>0010</td><td>2</td><td>10</td><td>1010</td><td>A</td></tr>
          <tr><td>3</td><td>0011</td><td>3</td><td>11</td><td>1011</td><td>B</td></tr>
          <tr><td>4</td><td>0100</td><td>4</td><td>12</td><td>1100</td><td>C</td></tr>
          <tr><td>5</td><td>0101</td><td>5</td><td>13</td><td>1101</td><td>D</td></tr>
          <tr><td>6</td><td>0110</td><td>6</td><td>14</td><td>1110</td><td>E</td></tr>
          <tr><td>7</td><td>0111</td><td>7</td><td>15</td><td>1111</td><td>F</td></tr>
        </table>
      </div>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➡️</strong> Binary to Hexadecimal</h4>
            <span class="card-badge badge-blue">Split into groups of 4</span>
          </div>
          <p class="card-desc">Split the binary number into <strong>groups of 4 digits</strong> starting from the right, convert each group to its hex value.</p>
          <p class="card-example">🔍 <em>Example:</em> 10011010(2) → 1001/1010 → 9/A → <strong>9A(16)</strong></p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>⬅️</strong> Hexadecimal to Binary</h4>
            <span class="card-badge badge-amber">Convert each digit to 4 bits</span>
          </div>
          <p class="card-desc">Convert each hex digit to <strong>4 binary bits</strong>, then arrange sequentially.</p>
          <p class="card-example">🔍 <em>Example:</em> A4(16) → A=1010, 4=0100 → <strong>10100100(2)</strong></p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <h4 class="callout-title">Why is Hexadecimal Important?</h4>
        </div>
        <p class="card-desc">Each hex digit = <strong>exactly 4 bits</strong>. So one byte (8 bits) = just 2 hex digits! This makes reading data much easier than long binary.</p>
      </div>`
    ],
    takeaway: "Hexadecimal = 16 symbols (0-9 + A-F) ⬝ Each hex digit = 4 bits ⬝ From binary: split into groups of 4 from right ⬝ From hex: convert each digit to 4 bits.",
    funFact: "Programmers use hexadecimal everywhere — memory addresses, color codes (like #FF5733), and error codes are all in hex!",
    quiz: {
      question: "Convert the binary number 11011011(2) to hexadecimal:",
      options: [
        "DB(16)",
        "BD(16)",
        "6D(16)",
        "B7(16)"
      ],
      answer: 0,
      explain: "11011011(2) → 1101/1011 → D/B → DB(16)"
    }
  },
  {
    id: "character-codes",
    category: "Part 2: Data Representation",
    title: "Digital Representation of Characters",
    tagline: "How does a computer understand letters? From ASCII to Unicode — every character has a unique code",
    glyph: "🔡",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "Every character in a computer has a unique code — ASCII for English, Unicode for all world languages.",
    interactiveType: "char_code_explorer",
    story: [
      `<p class="story-lead">Computers don't understand letters — they only understand <strong>numbers</strong>. That's why every character has a unique <strong>Character Code</strong> that represents it.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔤</strong> ASCII Code</h4>
            <span class="card-badge badge-blue">128 characters (1 byte)</span>
          </div>
          <p class="card-desc">A coding system that represents <strong>English letters, digits, symbols</strong> and control characters. Each character = 1 byte (8 bits) = 256 possible values.</p>
          <p class="card-example">🔍 <em>Example:</em> Letter "A" = 65 decimal = 01000001 binary = 41 hex</p>
          <p class="card-example">⚠️ <em>Limitation:</em> Doesn't support non-English languages (like Arabic or Japanese)</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🌍</strong> Unicode</h4>
            <span class="card-badge badge-amber">All world languages</span>
          </div>
          <p class="card-desc">A unified coding system that consolidates <strong>characters from all languages</strong> into one system. Includes UTF-8 and UTF-16.</p>
          <p class="card-example">🔍 <em>Example:</em> Arabic letter "م" has a different Unicode code than English "M"</p>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🔄</strong> Encoding and Decoding</h4>
          <span class="card-badge badge-green">Encoding & Decoding</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📝</span> <strong>Encoding:</strong> Converting text to numeric codes so the computer can store it</li>
          <li><span class="list-bullet-icon">📖</span> <strong>Decoding:</strong> Converting numeric codes back to characters so we can read them</li>
          <li><span class="list-bullet-icon">⚠️</span> <strong>Character Corruption:</strong> Happens when encoding and decoding methods don't match — showing weird characters like "?????"</li>
        </ul>
      </div>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>✏️</strong> Font: The Shape of Characters</h4>
          <span class="card-badge">Code + Font = Visible Character</span>
        </div>
        <p class="card-desc">To display characters on screen or printer, you need two things: <strong>Character Code</strong> and <strong>Font</strong>. The same code can look different depending on the font used.</p>
        <div class="pill-cloud">
          <span class="pill-item">Sans-serif</span>
          <span class="pill-item">Serif</span>
          <span class="pill-item">Semi-cursive</span>
        </div>
      </div>`
    ],
    takeaway: "Every character has a unique code ⬝ ASCII = 128 English chars (1 byte) ⬝ Unicode = all world languages ⬝ Encoding and decoding must match ⬝ Font is the visible shape of the character.",
    funFact: "The word \"Hello\" is stored in the computer as: 72-101-108-108-111 — each number is the ASCII code for one letter!",
    quiz: {
      question: "In ASCII, the letter \"A\" is represented by which decimal number?",
      options: [
        "65",
        "97",
        "48",
        "32"
      ],
      answer: 0,
      explain: "In the ASCII table, uppercase A = 65 decimal = 01000001 binary."
    }
  },
  {
    id: "binary-arithmetic",
    category: "Part 2: Data Representation",
    title: "Binary Addition and Subtraction",
    tagline: "Computers add and subtract differently — but same idea as decimal, just with fewer digits",
    glyph: "➕",
    image: "assets/images/data_info_knowledge.jpg",
    visualCaption: "Binary addition: 1+1=10 (not 2!). Binary subtraction: borrow from the next position.",
    interactiveType: "binary_calc",
    story: [
      `<p class="story-lead">Computers add and subtract binary numbers <strong>digit by digit</strong>, just like we do in decimal — the difference is we only have two digits: 0 and 1.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➕</strong> Binary Addition</h4>
            <span class="card-badge badge-blue">Simple rules</span>
          </div>
          <table class="l3-mini-table">
            <tr><th>Operation</th><th>Result</th><th>Note</th></tr>
            <tr><td>0 + 0</td><td>0</td><td>No carry</td></tr>
            <tr><td>0 + 1</td><td>1</td><td>No carry</td></tr>
            <tr><td>1 + 1</td><td>10</td><td>0 with carry 1 to next position</td></tr>
            <tr><td>1 + 1 + 1</td><td>11</td><td>1 with carry 1 to next position</td></tr>
          </table>
          <p class="card-example">🔍 <em>Example:</em> 0101(2) + 1001(2) = 1100(2) — same as 5 + 9 = 14 in decimal</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➖</strong> Binary Subtraction</h4>
            <span class="card-badge badge-amber">Borrowing</span>
          </div>
          <table class="l3-mini-table">
            <tr><th>Operation</th><th>Result</th><th>Note</th></tr>
            <tr><td>0 - 0</td><td>0</td><td>No borrow</td></tr>
            <tr><td>1 - 0</td><td>1</td><td>No borrow</td></tr>
            <tr><td>1 - 1</td><td>0</td><td>No borrow</td></tr>
            <tr><td>0 - 1</td><td>1</td><td>Borrow 1 from next position</td></tr>
          </table>
          <p class="card-example">🔍 <em>Example:</em> 1010(2) - 0110(2) = 0100(2) — same as 10 - 6 = 4 in decimal</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-red">
        <div class="callout-header">
          <span class="callout-icon">⚠️</span>
          <h4 class="callout-title">Important Rule: Carry and Borrow</h4>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">⬆️</span> <strong>Carry:</strong> When 1 + 1 = 10, we carry 1 to the next position — like "carry the one" in decimal addition</li>
          <li><span class="list-bullet-icon">⬇️</span> <strong>Borrow:</strong> When subtracting 1 from 0, we borrow 1 from the next position making it 2 — like borrowing in decimal subtraction</li>
        </ul>
      </div>`
    ],
    takeaway: "1+1=10 in binary (not 2!) ⬝ Carry is like \"carry the one\" ⬝ Borrow from next position ⬝ Same rules as decimal but with fewer digits.",
    funFact: "Your computer's processor has millions of transistors doing binary addition and subtraction every second — that's the basis of everything your device does!",
    quiz: {
      question: "What is the result of binary addition: 1010(2) + 0101(2)?",
      options: [
        "1111(2)",
        "1100(2)",
        "1011(2)",
        "1001(2)"
      ],
      answer: 0,
      explain: "1010 + 0101 = 1111 — same as 10 + 5 = 15 in decimal."
    }
  },
  {
    id: "complements",
    category: "Part 2: Data Representation",
    title: "Representing Negative Numbers with Complements",
    tagline: "Computers don't have a minus sign! How do they represent negative numbers? With smart complements",
    glyph: "🔄",
    image: "assets/images/info_characteristics.jpg",
    visualCaption: "2's Complement: flip every bit (0→1, 1→0) then add 1 — this represents the same number but negative.",
    interactiveType: "complement_calculator",
    story: [
      `<p class="story-lead">Computers don't have a \"minus\" sign — they represent negative numbers using a clever method called <strong>Complements</strong>. The idea is to turn subtraction into addition!</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔄</strong> 2's Complement</h4>
            <span class="card-badge badge-blue">The standard method</span>
          </div>
          <p class="card-desc">Steps to calculate 2's complement of any number:</p>
          <div class="rule-checklist">
            <div class="checklist-step"><div class="step-number">1</div><div><strong>Flip every bit:</strong> Convert each 0 to 1 and each 1 to 0 (this is 1's complement)</div></div>
            <div class="checklist-step"><div class="step-number">2</div><div><strong>Add 1:</strong> Add 1 to the final result (this is 2's complement)</div></div>
          </div>
          <p class="card-example">🔍 <em>Example:</em> Complement of 0101(2): flip = 1010, then +1 = <strong>1011(2)</strong> (this represents -5)</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>➖</strong> Subtraction Using Complements</h4>
            <span class="card-badge badge-amber">Subtraction = Addition with complement</span>
          </div>
          <p class="card-desc">Computers do subtraction like this:</p>
          <div class="rule-checklist">
            <div class="checklist-step"><div class="step-number">1</div><div>Find the <strong>complement</strong> of the subtrahend</div></div>
            <div class="checklist-step"><div class="step-number">2</div><div>Add the minuend to the complement</div></div>
            <div class="checklist-step"><div class="step-number">3</div><div><strong>Ignore</strong> the leading digit (overflow carry)</div></div>
          </div>
          <p class="card-example">🔍 <em>Example:</em> 1000(2) - 0111(2) → 1000 + 1001 = 10001 → ignore first → <strong>0001(2)</strong> = 1</p>
        </div>
      </div>`,
      `<div class="editorial-callout callout-green">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <h4 class="callout-title">Why are complements important?</h4>
        </div>
        <p class="card-desc">Complements let computers use the <strong>same circuits</strong> for both addition and subtraction — without needing extra circuits for subtraction. This saves design complexity and cost!</p>
      </div>`
    ],
    takeaway: "2's complement = flip all bits + 1 ⬝ Subtraction with complements: add with complement of subtrahend and ignore carry ⬝ Same circuits do both addition and subtraction.",
    funFact: "In 8-bit system, numbers from -128 to +127 can be represented — this is because the first bit is the sign (0 positive, 1 negative) and the rest represent the value!",
    quiz: {
      question: "What is the 2's complement of 0101(2)?",
      options: [
        "1011(2)",
        "1010(2)",
        "0101(2)",
        "1101(2)"
      ],
      answer: 0,
      explain: "Flip 0101 = 1010, then +1 = 1011 — this represents -5 in the complement system."
    }
  },
  {
    id: "sound-digitization",
    category: "Part 3: Media Digitization",
    title: "Sound Digitization",
    tagline: "From continuous analog wave to digital file — sampling, quantization, and encoding steps",
    glyph: "🎵",
    image: "assets/images/smartphone.jpg",
    visualCaption: "The analog sound wave is cut into points (sampling), each point is rounded to nearest value (quantization), then converted to binary (encoding).",
    interactiveType: "pcm_visualizer",
    story: [
      `<p class="story-lead">Sound in nature is <strong>analog</strong> — a continuous wave traveling through air. To store it in a computer, we must convert it to digital using a method called <strong>PCM (Pulse Code Modulation)</strong>.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📊</strong> Steps of Sound Digitization (PCM)</h4>
          <span class="card-badge">3 essential steps</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">1</div><div><strong>Sampling:</strong> Divide the time axis at regular intervals and extract the wave height at each point. Frequency = samples per second (Hz).</div></div>
          <div class="checklist-step"><div class="step-number">2</div><div><strong>Quantization:</strong> Divide the voltage axis at regular intervals and round each value to nearest level. Depth = number of levels (bit depth).</div></div>
          <div class="checklist-step"><div class="step-number">3</div><div><strong>Encoding:</strong> Convert quantized values to binary numbers (0 and 1).</div></div>
        </div>
      </div>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📈</strong> Sound Quality and Data Size</h4>
            <span class="card-badge badge-blue">Higher quality = larger size</span>
          </div>
          <p class="card-desc">The higher the <strong>sampling frequency</strong> and <strong>quantization depth</strong>, the closer the sound is to the original — but the data size increases.</p>
          <p class="card-example">🔍 <em>Example:</em> CD quality is 44,100 Hz and 16 bit — meaning 44,100 samples per second, each 16 bits</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📐</strong> Sampling Theorem</h4>
            <span class="card-badge badge-amber">Golden rule</span>
          </div>
          <p class="card-desc">If the sampling frequency is <strong>more than twice</strong> the highest frequency in the original wave, we can accurately reconstruct the original wave from digital data.</p>
          <p class="card-example">🔍 <em>Example:</em> If highest frequency is 20,000 Hz, we must sample at more than 40,000 Hz</p>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🔊</strong> Calculating Audio Data Size</h4>
          <span class="card-badge badge-green">Simple equation</span>
        </div>
        <p class="card-desc"><strong>Data size (bits/second) = Sampling frequency × Quantization bit depth × Number of channels</strong></p>
        <div class="pill-cloud">
          <span class="pill-item">Monaural = 1 channel</span>
          <span class="pill-item">Stereo = 2 channels</span>
        </div>
        <p class="card-example">🔍 <em>Example:</em> CD audio per second = 44,100 × 16 × 2 = 1,411,200 bits = 176,400 bytes ≈ 176 KB</p>
      </div>`
    ],
    takeaway: "PCM = Sampling + Quantization + Encoding ⬝ Higher frequency and depth = higher quality and larger size ⬝ Sampling theorem: frequency must be more than twice the highest frequency ⬝ Size = Frequency × Depth × Channels.",
    funFact: "CD quality (44,100 Hz) was chosen because human hearing ranges from 20 Hz to 20,000 Hz — double 20,000 = 40,000, and 44,100 is a bit more than that!",
    quiz: {
      question: "What is the correct order of PCM sound digitization steps?",
      options: [
        "Sampling → Quantization → Encoding",
        "Encoding → Quantization → Sampling",
        "Quantization → Sampling → Encoding",
        "Quantization → Encoding → Sampling"
      ],
      answer: 0,
      explain: "Correct order: first Sampling (divide time), then Quantization (round values), finally Encoding (convert to binary)."
    }
  },
  {
    id: "image-digitization",
    category: "Part 3: Media Digitization",
    title: "Image Digitization",
    tagline: "From real image to pixel grid — how cameras convert images to numbers",
    glyph: "🖼️",
    image: "assets/images/media_types.jpg",
    visualCaption: "Image is divided into pixels (sampling), each pixel gets a brightness value (quantization), then values are converted to binary (encoding).",
    interactiveType: "pixel_grid_sim",
    story: [
      `<p class="story-lead">A digital image consists of <strong>Pixels</strong> — small dots arranged in a grid. Each pixel has a digital <strong>brightness value</strong>.</p>`,
      `<div class="story-card">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📸</strong> Steps of Image Digitization</h4>
          <span class="card-badge">Same as sound!</span>
        </div>
        <div class="rule-checklist">
          <div class="checklist-step"><div class="step-number">1</div><div><strong>Sampling:</strong> Divide image into pixels. Resolution = horizontal × vertical pixels. Unit = dpi (dots per inch).</div></div>
          <div class="checklist-step"><div class="step-number">2</div><div><strong>Quantization:</strong> Convert each pixel's brightness to a numeric value. Gradation = number of levels — 8 bits = 256 levels (0 to 255).</div></div>
          <div class="checklist-step"><div class="step-number">3</div><div><strong>Encoding:</strong> Convert values to binary numbers.</div></div>
        </div>
      </div>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>📐</strong> Calculating Image Data Size</h4>
            <span class="card-badge badge-blue">Simple equation</span>
          </div>
          <p class="card-desc"><strong>Image size (bits) = Number of pixels (horizontal × vertical) × Number of color bits</strong></p>
          <p class="card-example">🔍 <em>Example:</em> 1280×720 image at 24-bit color = 1280 × 720 × 24 = 22,118,400 bits = 2,764,800 bytes ≈ 2.76 MB</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🎨</strong> Image Formats: Raster and Vector</h4>
            <span class="card-badge badge-amber">Two main types</span>
          </div>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">📊</span> <strong>Raster:</strong> Grid of pixels — appears jagged when enlarged. Good for photos. Software: Photoshop</li>
            <li><span class="list-bullet-icon">📐</span> <strong>Vector:</strong> Mathematical equations for points and lines — doesn't pixelate when enlarged. Good for logos. Software: Illustrator</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>🌈</strong> Color Representation</h4>
          <span class="card-badge badge-green">RGB and CMY</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🔴</span> <strong>RGB (Light):</strong> Red, Green, Blue — mixing approaches white. Used in screens</li>
          <li><span class="list-bullet-icon">🟡</span> <strong>CMY (Pigment):</strong> Cyan, Magenta, Yellow — mixing approaches black. Used in printers</li>
          <li><span class="list-bullet-icon">🎨</span> <strong>24-bit Full Color:</strong> Each color (R,G,B) = 8 bits = 256 levels × 3 = 24 bits = 16.7 million colors</li>
        </ul>
      </div>`
    ],
    takeaway: "Image = grid of pixels ⬝ Resolution = horizontal × vertical ⬝ Size = pixels × color bits ⬝ Raster for photos, Vector for logos ⬝ RGB for screens, CMY for printers.",
    funFact: "A 1280×720 image at 24-bit color = 2.76 MB — one image takes more space than a full text page!",
    quiz: {
      question: "What is the data size of a 1280×720 pixel image at 24-bit full color?",
      options: [
        "2.76 MB",
        "1.38 MB",
        "5.52 MB",
        "0.69 MB"
      ],
      answer: 0,
      explain: "1280 × 720 × 24 = 22,118,400 bits ÷ 8 = 2,764,800 bytes ÷ 1000 ÷ 1000 ≈ 2.76 MB"
    }
  },
  {
    id: "video-compression",
    category: "Part 3: Media Digitization",
    title: "Digital Video Representation and Compression",
    tagline: "Video = fast images + smart compression — how we save 90% of size without noticing",
    glyph: "🎬",
    image: "assets/images/smartphone.jpg",
    visualCaption: "Video consists of sequential frames, each frame is an image. Compression reduces size by removing redundancy.",
    interactiveType: "compression_demo",
    story: [
      `<p class="story-lead">Video works by displaying <strong>still images rapidly</strong> — the human eye perceives them as moving (afterimage phenomenon). Each image is called a <strong>Frame</strong>, and frames per second is <strong>fps</strong>.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🎞️</strong> Calculating Video Data Size</h4>
            <span class="card-badge badge-blue">Simple equation</span>
          </div>
          <p class="card-desc"><strong>Video size = Image size (bytes) × Frame rate (fps) × Time (seconds)</strong></p>
          <p class="card-example">🔍 <em>Example:</em> 10-sec video at 30 fps, each frame 500×200 at 24-bit = 300,000 × 30 × 10 = 90,000,000 bytes = 90 MB</p>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🗜️</strong> Data Compression</h4>
            <span class="card-badge badge-amber">Smart size reduction</span>
          </div>
          <p class="card-desc">Compression reduces data size while preserving content. Two main types:</p>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">✅</span> <strong>Lossless:</strong> Complete restoration of original data — like text files and programs</li>
            <li><span class="list-bullet-icon">⚠️</span> <strong>Lossy:</strong> Cannot restore original data exactly — but difference is imperceptible to humans. Like images, audio, video</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>📊</strong> Types of Lossless Compression</h4>
          <span class="card-badge badge-green">Run-length and Huffman</span>
        </div>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">🔁</span> <strong>Run-length encoding:</strong> Replace consecutive repetitions with count — like "AAAAA" becomes "A5". Effective with many repetitions</li>
          <li><span class="list-bullet-icon">🌳</span> <strong>Huffman coding:</strong> Assign shorter codes to more frequent characters and longer codes to less frequent — like Morse code</li>
        </ul>
        <p class="card-example">🔍 <em>Run-length example:</em> "AAAAABBAAAABBBBBBBBAAAAAA" (25 chars) → "A5B2A4B8A6" (10 chars) — compression ratio 40%</p>
      </div>`,
      `<div class="editorial-callout callout-blue">
        <div class="callout-header">
          <span class="callout-icon">📐</span>
          <h4 class="callout-title">Compression Ratio</h4>
        </div>
        <p class="card-desc"><strong>Compression ratio (%) = (Compressed size ÷ Original size) × 100</strong></p>
        <p class="card-example">🔍 <em>Example:</em> 90 MB video compressed to 30 MB → Ratio = (30 ÷ 90) × 100 = 33%</p>
      </div>`
    ],
    takeaway: "Video = sequential frames ⬝ Size = image size × fps × time ⬝ Lossless restores original exactly ⬝ Lossy reduces size greatly but doesn't restore original ⬝ Run-length and Huffman are popular lossless methods.",
    funFact: "A 10-second video at 500×200 resolution takes 90 MB — if compressed to 30 MB, you save 60 MB! That's what makes YouTube play videos without buffering.",
    quiz: {
      question: "A 90 MB video was compressed to 30 MB — what is the compression ratio?",
      options: [
        "33%",
        "50%",
        "66%",
        "30%"
      ],
      answer: 0,
      explain: "Compression ratio = (30 ÷ 90) × 100 = 33.3% ≈ 33%"
    }
  },
  {
    id: "information-design",
    category: "Part 4: Information Design",
    title: "Information Design",
    tagline: "Not just data — organized, beautiful, understandable data — how to design information for clarity",
    glyph: "🎨",
    image: "assets/images/digital_ethics.jpg",
    visualCaption: "Information design combines abstraction, visualization, and structuring to deliver messages clearly to the target audience.",
    interactiveType: "design_principles",
    story: [
      `<p class="story-lead"><strong>Information Design</strong> is the process of organizing and creatively expressing data according to its purpose — so the message reaches the target audience clearly.</p>`,
      `<div class="content-cards-stack">
        <div class="story-card card-blue-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🔍</strong> Information Design Methods</h4>
            <span class="card-badge badge-blue">3 main methods</span>
          </div>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">📊</span> <strong>Abstraction:</strong> Convey intended information simply from within large data — like Pictograms and Icons</li>
            <li><span class="list-bullet-icon">📈</span> <strong>Visualization:</strong> Represent information visually for easier understanding — like tables and graphs</li>
            <li><span class="list-bullet-icon">🏗️</span> <strong>Structuring:</strong> Organize and arrange information by relationships, levels, stages — like hierarchical menus on websites</li>
          </ul>
        </div>
        <div class="story-card card-amber-accent">
          <div class="card-header-row">
            <h4 class="card-title"><strong>🖥️</strong> UI and UX</h4>
            <span class="card-badge badge-amber">Not just looks — full experience</span>
          </div>
          <ul class="structured-list">
            <li><span class="list-bullet-icon">⌨️</span> <strong>CUI (Command UI):</strong> Text commands from keyboard — like old black screens</li>
            <li><span class="list-bullet-icon">🖱️</span> <strong>GUI (Graphical UI):</strong> Icons, buttons, and mouse — like Windows and Mac</li>
            <li><span class="list-bullet-icon">💡</span> <strong>UX (User Experience):</strong> The feeling users get from interacting with a product — not just ease of use but comfort too</li>
          </ul>
        </div>
      </div>`,
      `<div class="story-card card-green-accent">
        <div class="card-header-row">
          <h4 class="card-title"><strong>♿</strong> Good Design Principles</h4>
          <span class="card-badge badge-green">For everyone</span>
        </div>
        <div class="pill-cloud">
          <span class="pill-item">🎯 Usability: Easy to use</span>
          <span class="pill-item">♿ Accessibility: Available to all</span>
          <span class="pill-item">🌍 Universal Design: For all ages and abilities</span>
          <span class="pill-item">🔔 Signifier: Cues that prompt action</span>
          <span class="pill-item">👆 Affordance: Possibility of performing an action</span>
        </div>
      </div>`,
      `<div class="editorial-callout callout-amber">
        <div class="callout-header">
          <span class="callout-icon">📋</span>
          <h4 class="callout-title">LATCH Principle: Organizing Information</h4>
        </div>
        <p class="card-desc">A method to organize and present information in an easy-to-understand way, by 5 criteria:</p>
        <ul class="structured-list">
          <li><span class="list-bullet-icon">📍</span> <strong>Location:</strong> Classification by physical location</li>
          <li><span class="list-bullet-icon">🔤</span> <strong>Alphabet:</strong> Classification by alphabetical order</li>
          <li><span class="list-bullet-icon">⏰</span> <strong>Time:</strong> Classification by chronological sequence</li>
          <li><span class="list-bullet-icon">🏷️</span> <strong>Category:</strong> Classification by differences between things</li>
          <li><span class="list-bullet-icon">📊</span> <strong>Hierarchy:</strong> Classification by size or level</li>
        </ul>
      </div>`
    ],
    takeaway: "Information design = abstraction + visualization + structuring ⬝ CUI for text commands, GUI for icons ⬝ UX is not just ease but comfort ⬝ Universal design for everyone ⬝ LATCH = Location, Alphabet, Time, Category, Hierarchy.",
    funFact: "The LATCH principle is used in website and app design — when you find a site easy to use, the designer likely used one of these principles!",
    quiz: {
      question: "A design that allows all people to use it without difficulty — regardless of age or ability — is called:",
      options: [
        "Universal Design",
        "User Interface (UI)",
        "User Experience (UX)",
        "Usability"
      ],
      answer: 0,
      explain: "Universal Design is carefully created so that everyone can use it easily."
    }
  }
];

const LECT4_MATCH_ITEMS_EN = [
  { id: "m1", concept: "Analog", match: "Quantities that change gradually and continuously like temperature" },
  { id: "m2", concept: "Bit", match: "Smallest unit of information with only two states: 0 or 1" },
  { id: "m3", concept: "Byte", match: "Unit of 8 bits representing 256 different values" },
  { id: "m4", concept: "Hexadecimal", match: "Number system using 16 symbols (0-9 + A-F), each digit = 4 bits" },
  { id: "m5", concept: "ASCII", match: "Coding system representing English letters and digits with 1 byte per character" },
  { id: "m6", concept: "2's Complement", match: "Flip all bits then add 1 — to represent negative numbers" },
  { id: "m7", concept: "PCM", match: "Sound digitization method: Sampling → Quantization → Encoding" },
  { id: "m8", concept: "Pixel", match: "Smallest unit composing a digital image" },
  { id: "m9", concept: "Lossy Compression", match: "Compression that reduces size greatly but doesn't restore original exactly" },
  { id: "m10", concept: "LATCH Principle", match: "5 criteria for organizing information: Location, Alphabet, Time, Category, Hierarchy" }
];

if (typeof window !== 'undefined') {
  window.LECT4_STAGES_EN = LECT4_STAGES_EN;
  window.LECT4_MATCH_ITEMS_EN = LECT4_MATCH_ITEMS_EN;
}