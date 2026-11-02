/* ============================================================
   Lecture 1 - Practical: First steps in JavaScript (QUREO)
   Stage data in English (structured schema - rendered in lecture6.js)
   Source: Content/المحاضره الاولي -عملي.md
   ============================================================ */

const LECT6_STAGES_EN = [

  {
    id: "what-is-programming",
    category: "Chapter 1: Introduction to Programming",
    title: "What is Programming?",
    tagline: "The computer waits for clear, step-by-step instructions.",
    glyph: "⌨️",
    interactiveType: "code_lab",
    lead: "The computer cannot figure anything out alone - it waits for instructions.",
    cards: [
      {
        accent: "blue",
        icon: "🍳",
        title: "Programming is like a recipe",
        badge: "Precise steps, in order",
        text: "A human cook understands \"a bit of sugar\" and improvises. The computer never guesses - you must say exactly: \"add 2 cups of sugar\", step by step."
      },
      {
        accent: "amber",
        icon: "🌐",
        title: "The JavaScript language",
        badge: "A bridge between you and the machine",
        text: "The computer does not understand normal Arabic or English - it needs a language with fixed rules. Ours is JavaScript: it runs in every browser, and the rules are strict - one wrong letter can stop the program."
      },
      {
        accent: "green",
        icon: "🛠️",
        title: "Code editor + Console",
        badge: "Where you write, where you see",
        text: "The Code Editor is where we write the code - on top. The Console is the results screen - below."
      }
    ],
    notes: [
      {
        icon: "🖨️",
        title: "First command to remember: console.log()",
        text: "The command console.log prints whatever you write onto the console.",
        example: "In the interactive widget below: press Run and watch the text appear in the console."
      }
    ],
    table: null,
    code: {
      title: "Your first program",
      lines: [
        "console.log(\"Hello\");",
        "console.log(\"Good morning\");"
      ]
    },
    quiz: {
      question: "Which command prints text to the console in JavaScript?",
      options: [
        "console.log(\"Hello\");",
        "print \"Hello\";",
        "echo \"Hello\";",
        "show \"Hello\";"
      ],
      answer: 0,
      explain: "console.log is JavaScript's print command - print lives in Python and echo in PHP, not here."
    },
    takeaway: "Programming = writing precise instructions for the computer.",
    funFact: "The first program most programmers write prints Hello World on the screen!"
  },

  {
    id: "console-comments",
    category: "Chapter 1: Introduction to Programming",
    title: "The Console & Comments",
    tagline: "Every print writes one ordered line, and comments are notes for humans.",
    glyph: "💬",
    interactiveType: "comments_lab",
    lead: "Every print command writes a new line in order, and a comment is a line for humans that the computer ignores.",
    cards: [
      {
        accent: "blue",
        icon: "💬",
        title: "The Comment",
        badge: "Starts with //",
        text: "Any line starting with // is ignored completely by the computer: it is neither executed nor printed."
      },
      {
        accent: "amber",
        icon: "🖥️",
        title: "Console order",
        badge: "One line per command",
        text: "Two print commands give two separate lines: the first on top, the second below."
      }
    ],
    notes: [
      {
        icon: "🤔",
        title: "Why write comments at all?",
        text: "A month later you come back and forget the idea - the comment reminds you in one line.",
        example: "When code gets long, short comments explain the purpose of each part."
      }
    ],
    table: null,
    code: {
      title: "Try a comment",
      lines: [
        "// This is a comment",
        "console.log(\"Hello World\");"
      ]
    },
    quiz: {
      question: "What happens when the computer reaches a line starting with //?",
      options: [
        "It is ignored and it moves to the next line",
        "The program breaks",
        "An Error appears",
        "The program stops"
      ],
      answer: 0,
      explain: "A comment is written for humans, not the machine - it just moves on without executing anything."
    },
    takeaway: "The console writes results in order; the comment is never executed.",
    funFact: "Professional programmers drop tiny comments next to every tricky part."
  },

  {
    id: "arith-ops",
    category: "Chapter 2: Calculations and Strings",
    title: "Arithmetic Operations",
    tagline: "The console is a calculator: + - * / without quotation marks.",
    glyph: "🧮",
    interactiveType: "calc_lab",
    lead: "The console calculates for you: without quotes, the operation actually runs and the result appears.",
    cards: [],
    notes: [
      {
        icon: "⚖️",
        title: "A number without quotes is not text",
        text: "console.log(10 + 5); computes and prints 15.",
        example: "console.log(\"10 + 5\"); is text - it prints exactly: 10 + 5."
      }
    ],
    table: {
      title: "The four basic operations",
      head: ["Operation", "Symbol", "Example", "Result"],
      rows: [
        ["Addition", "+", "console.log(10 + 5)", "15"],
        ["Subtraction", "-", "console.log(10 - 5)", "5"],
        ["Multiplication", "*", "console.log(10 * 5)", "50"],
        ["Division", "/", "console.log(10 / 5)", "2"]
      ]
    },
    code: {
      title: "Printing calculations",
      lines: [
        "console.log(10 + 5);",
        "console.log(10 - 5);",
        "console.log(10 * 5);",
        "console.log(10 / 5);"
      ]
    },
    quiz: {
      question: "What does this line print? console.log(10 / 5);",
      options: ["2", "10 / 5", "5", "Error"],
      answer: 0,
      explain: "The division really runs: 10 divided by 5 equals 2."
    },
    takeaway: "+ - * / without quotes = real calculated results.",
    funFact: "The computer performs billions of these tiny calculations every second."
  },

  {
    id: "strings",
    category: "Chapter 2: Calculations and Strings",
    title: "Strings",
    tagline: "Text lives between quotes, and + joins it.",
    glyph: "🔤",
    interactiveType: "string_lab",
    lead: "Anything between quotation marks is a String - and + with strings joins them instead of calculating.",
    cards: [
      {
        accent: "blue",
        icon: "🔗",
        title: "Joining strings",
        badge: "string + string = longer string",
        text: "console.log(\"Hello\" + \" World\"); prints Hello World as one longer text."
      },
      {
        accent: "amber",
        icon: "🪢",
        title: "String + number",
        badge: "The result is text",
        text: "console.log(\"My age is \" + 16); prints My age is 16 - the number sticks to the text."
      }
    ],
    notes: [
      {
        icon: "🧠",
        title: "Important note: \"5\" + \"5\"",
        text: "Both are strings, and + joins them - so you get 55, not 10.",
        example: "string + string = longer string, but number + number = a calculation."
      }
    ],
    table: null,
    code: {
      title: "String examples",
      lines: [
        "console.log(\"Hello\" + \" World\");",
        "console.log(\"My age is \" + 16);"
      ]
    },
    quiz: {
      question: "What does this line print? console.log(\"5\" + \"5\");",
      options: ["55", "10", "Error", "5"],
      answer: 0,
      explain: "Both are strings - + glues them together letter by letter: 55."
    },
    takeaway: "string + string = longer string, and string + number = string too.",
    funFact: "The + with strings works exactly like gluing two sentences on the board."
  },

  {
    id: "variables",
    category: "Chapter 3: Variables",
    title: "What is a Variable?",
    tagline: "A labeled box that stores a value - and you can change it.",
    glyph: "📦",
    interactiveType: "var_box",
    lead: "A variable is a box with a name - it stores a value, and you can change it any time.",
    cards: [
      {
        accent: "blue",
        icon: "📦",
        title: "Declaring with let",
        badge: "let name = value;",
        text: "let age = 16; means: create a box called age and put 16 inside."
      },
      {
        accent: "green",
        icon: "🔄",
        title: "Changing the value",
        badge: "No let after declaring",
        text: "let number = 10; then number = 20; - the old value is gone, the box now holds 20."
      }
    ],
    notes: [
      {
        icon: "⚠️",
        title: "Most common mistake",
        text: "Using let twice with the same name is an error.",
        example: "Declare once with let - then reassign without let."
      }
    ],
    table: null,
    code: {
      title: "Variable examples",
      lines: [
        "let age = 16;",
        "console.log(age);",
        "let number = 10;",
        "number = 20;",
        "console.log(number);"
      ]
    },
    quiz: {
      question: "let number = 10; then number = 20; then console.log(number); - what prints?",
      options: ["20", "10", "number", "Error"],
      answer: 0,
      explain: "The last assignment was 20 - so 20 prints."
    },
    takeaway: "let declares a new variable; assigning later without let changes it.",
    funFact: "Without variables you could never reuse a value twice."
  },

  {
    id: "var-calcs",
    category: "Chapter 3: Variables",
    title: "Variables in Calculations",
    tagline: "The calculation uses the values at the moment you run it.",
    glyph: "✖️",
    interactiveType: "var_calc",
    lead: "The code calculates from the variables' values - change them and the result changes.",
    cards: [
      {
        accent: "blue",
        icon: "⚡",
        title: "Calculating from current values",
        badge: "x + y",
        text: "let x = 10; let y = 5; console.log(x + y); prints 15."
      },
      {
        accent: "green",
        icon: "🔁",
        title: "Change it and run again",
        badge: "A new result",
        text: "Change x to 500 and you only touch one line - no rewriting the whole program."
      }
    ],
    notes: [],
    table: null,
    code: {
      title: "Calculating with variables",
      lines: [
        "let x = 10;",
        "let y = 5;",
        "console.log(x + y);"
      ]
    },
    quiz: {
      question: "let x = 10; let y = 5; - what does console.log(x + y); print?",
      options: ["15", "105", "x + y", "25"],
      answer: 0,
      explain: "The computer substitutes each variable with its current value: 10 + 5 = 15."
    },
    takeaway: "The calculation reads the variables' values at run time.",
    funFact: "Change one value, run again - a fresh result without rewriting everything."
  },

  {
    id: "review-midway",
    category: "Chapter 4: Review and Midway Test",
    title: "Review & the Midway Test",
    tagline: "7 review exercises + a real code test.",
    glyph: "🎯",
    interactiveType: "review_checklist",
    lead: "The first four chapters are done: programming, console and comments, arithmetic and strings, and variables. Time to review and test.",
    cards: [],
    notes: [
      {
        icon: "🏁",
        title: "How the midway test works",
        text: "The test has 7 hands-on tasks covering what we learned.",
        example: "Write the code, press Run, and compare the console output with the expected one."
      }
    ],
    table: {
      title: "The test - 7 tasks",
      head: ["#", "Task", "Expected output"],
      rows: [
        ["1", "Print Hello World", "Hello World"],
        ["2", "Print the result of 15 + 20", "35"],
        ["3", "Print the result of 50 - 10", "40"],
        ["4", "Join two strings to print Hello World", "Hello World"],
        ["5", "A variable name holding Ahmed", "Ahmed"],
        ["6", "Two variables 10 and 5, print the sum", "15"],
        ["7", "Change a variable to 20 and print it", "20"]
      ]
    },
    code: null,
    quiz: {
      question: "Which line changes a variable that was declared earlier?",
      options: [
        "number = 20;",
        "let number = 20;",
        "number == 20;",
        "print number = 20;"
      ],
      answer: 0,
      explain: "Plain assignment without let - the variable already exists."
    },
    takeaway: "One review skill set: printing, calculating, joining strings, and variables.",
    funFact: "Redoing exercises by hand beats reading them alone."
  }
];

const LECT6_MATCH_ITEMS_EN = [];

if (typeof window !== 'undefined') {
  window.LECT6_STAGES_EN = LECT6_STAGES_EN;
  window.LECT6_MATCH_ITEMS_EN = LECT6_MATCH_ITEMS_EN;
}
