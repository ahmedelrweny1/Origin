const STORE_KEY = "origin-progress";
let ERAS = currentLang === 'ar' ? ERAS_AR : ERAS_EN;
let CHALLENGE_ITEMS = currentLang === 'ar' ? CHALLENGE_ITEMS_AR : CHALLENGE_ITEMS_EN;

let state = {
  current: 0,
  visited: new Set()
};

try {
  const saved = JSON.parse(localStorage.getItem(STORE_KEY));
  if (saved && Array.isArray(saved.visited)) state.visited = new Set(saved.visited);
} catch (e) {}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify({ visited: [...state.visited] }));
}

const $ = (id) => document.getElementById(id);
const timelineEl = $("timeline");
const stagePanel = $("stagePanel");
const chipsEl = $("topicChips");

let guessPendingIndex = null;

function buildTimeline() {
  ERAS.forEach((era, i) => {
    const li = document.createElement("li");
    li.className = "tl-node";
    li.innerHTML = `
      <span class="tl-icon">${era.glyph}</span>
      <span class="tl-text">
        <span class="tl-label">${era.title}</span>
        <span class="tl-year">${era.year}</span>
      </span>`;
    li.addEventListener("click", () => goToEra(i));
    timelineEl.appendChild(li);

    const num = String(i + 1).padStart(2, '0');
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.innerHTML = `<span class="chip-num">${num}</span><span>${era.title}</span>`;
    chip.addEventListener("click", () => goToEra(i));
    chipsEl.appendChild(chip);
  });
}

function updateProgressUI() {
  const nodes = timelineEl.children;
  const chips = chipsEl.children;
  for (let i = 0; i < ERAS.length; i++) {
    nodes[i].classList.toggle("visited", state.visited.has(ERAS[i].id));
    nodes[i].classList.toggle("active", i === state.current);
    chips[i].classList.toggle("done", state.visited.has(ERAS[i].id));
    chips[i].classList.toggle("active", i === state.current);
  }
  const pct = Math.round((state.visited.size / ERAS.length) * 100);
  $("progressFill").style.width = pct + "%";
  $("progressLabel").textContent = pct + "%";
}

function quizHTML(quiz, eraId) {
  return `
    <div class="quiz" data-era="${eraId}">
      <p class="quiz-q">${t('quickCheck')} ${quiz.question}</p>
      <div class="quiz-options">
        ${quiz.options.map((opt, idx) =>
          `<button class="quiz-opt" data-idx="${idx}">${opt}</button>`).join("")}
      </div>
      <p class="quiz-feedback" aria-live="polite"></p>
    </div>`;
}

function bindQuiz(section) {
  const quizEl = section.querySelector(".quiz");
  if (!quizEl) return;
  const era = ERAS.find((e) => e.id === quizEl.dataset.era);
  const buttons = quizEl.querySelectorAll(".quiz-opt");
  const feedback = quizEl.querySelector(".quiz-feedback");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const picked = Number(btn.dataset.idx);
      buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === era.quiz.answer) b.classList.add("correct");
        else if (i === picked) b.classList.add("wrong");
      });
      const good = picked === era.quiz.answer;
      feedback.textContent = good
        ? (currentLang === 'ar' ? "✅ صح! " : "✅ Correct! ") + era.quiz.explain
        : (currentLang === 'ar' ? "❌ مش أوي — الإجابة المتحددة هي الصح. " : "❌ Not quite — the highlighted answer is correct. ") + era.quiz.explain;
      feedback.className = "quiz-feedback " + (good ? "good" : "bad");
    });
  });
}

function renderEra(i) {
  const era = ERAS[i];
  state.current = i;
  state.visited.add(era.id);
  saveState();

  const funBlock = `
    <div class="fact-blocks">
      <div class="fact-card">
        <h4>${t('keyPeople')}</h4>
        <p>${era.people.join("<br>")}</p>
      </div>
      <div class="fact-card">
        <h4>${t('theInvention')}</h4>
        <p>${era.invention}</p>
      </div>
      <div class="fact-card">
        <h4>${t('whyMattered')}</h4>
        <p>${era.whyItMattered}</p>
      </div>
      <div class="fact-card fun" style="grid-column: 1 / -1;">
        <h4>${t('funFact')}</h4>
        <p class="fun-text hidden">${era.funFact}</p>
        <button class="reveal-btn">${t('revealBtn')}</button>
      </div>
    </div>`;

  stagePanel.innerHTML = `
    <header class="stage-eyebrow">
      <span class="chapter-num">${currentLang === 'ar' ? 'الفصل ' + (i + 1) + ' من ' + ERAS.length : 'Chapter ' + String(i + 1).padStart(2,'0') + ' / ' + String(ERAS.length).padStart(2,'0')}</span>
      <span class="chapter-year">${era.year}</span>
    </header>
    <h3 class="stage-title"><span class="glyph">${era.glyph}</span><span>${era.title}</span></h3>
    <p class="stage-tagline">${era.tagline}</p>
    <div class="stage-grid">
      <div class="stage-body">
        ${era.story.map((p) => `<p>${p}</p>`).join("")}
        ${era.quiz ? quizHTML(era.quiz, era.id) : ""}
      </div>
      <figure class="stage-visual">
        <img src="${era.image}" class="era-img" alt="${era.title}">
        <figcaption>${era.visualCaption}</figcaption>
      </figure>
    </div>
    ${funBlock}`;

  const revealBtn = stagePanel.querySelector(".reveal-btn");
  revealBtn.addEventListener("click", () => {
    stagePanel.querySelector(".fun-text").classList.remove("hidden");
    revealBtn.remove();
  });

  bindQuiz(stagePanel);

  $("prevBtn").disabled = i === 0;
  $("nextBtn").innerHTML = i === ERAS.length - 1
    ? t('btnFinal')
    : t('btnNext');

  updateProgressUI();
}

function goToEra(i) {
  renderEra(i);
  document.querySelector("#journey .journey-head").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openGuess(nextIndex) {
  guessPendingIndex = nextIndex;
  const next = ERAS[nextIndex];

  const decoys = ERAS
    .filter((e) => e.id !== next.id && e.id !== ERAS[nextIndex - 1].id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  const options = [...decoys.map((d) => ({ title: d.title, ok: false })), { title: next.title, ok: true }]
    .sort(() => Math.random() - 0.5);

  $("guessPrompt").textContent = currentLang === 'ar' 
    ? `إنت سايب دلوقتي "${ERAS[nextIndex - 1].title}". إيه الاختراع اللي جيه بعده في التاريخ؟`
    : `You're leaving "${ERAS[nextIndex - 1].title}". Which invention came NEXT in history?`;
  $("guessFeedback").textContent = "";
  $("guessFeedback").className = "guess-feedback";

  const optsEl = $("guessOptions");
  optsEl.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = opt.title;
    btn.addEventListener("click", () => {
      Array.from(optsEl.children).forEach((b) => (b.disabled = true));
      const fb = $("guessFeedback");
      if (opt.ok) {
        fb.textContent = currentLang === 'ar' ? "✅ صح! يالا بينا على " + next.title + "." : "✅ Correct! Onward to " + next.title + ".";
        fb.classList.add("good");
      } else {
        fb.textContent = currentLang === 'ar' ? "❌ الحقيقة إنها كانت: " + next.title + ". تعالى نشوفها!" : "❌ It was actually: " + next.title + ". Let's go see!";
        fb.classList.add("bad");
      }
      setTimeout(() => {
        closeGuess();
        renderEra(guessPendingIndex);
        document.querySelector("#journey .journey-head").scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1400);
    });
    optsEl.appendChild(btn);
  });

  $("guessBackdrop").classList.remove("hidden");
}

function closeGuess() {
  $("guessBackdrop").classList.add("hidden");
}

$("guessBackdrop").addEventListener("click", (ev) => {
  if (ev.target === $("guessBackdrop")) {
    closeGuess();
    if (guessPendingIndex !== null) {
      renderEra(guessPendingIndex);
      document.querySelector("#journey .journey-head").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

$("startBtn").addEventListener("click", () => {
  $("journey").classList.remove("hidden");
  renderEra(state.visited.size >= ERAS.length ? state.current : firstUnvisited());
  document.getElementById("journey").scrollIntoView({ behavior: "smooth" });
});

function firstUnvisited() {
  for (let i = 0; i < ERAS.length; i++) {
    if (!state.visited.has(ERAS[i].id)) return i;
  }
  return 0;
}

$("prevBtn").addEventListener("click", () => {
  if (state.current > 0) renderEra(state.current - 1);
});

$("nextBtn").addEventListener("click", () => {
  if (state.current === ERAS.length - 1) {
    showChallenge();
    return;
  }
  openGuess(state.current + 1);
});

let board = [];
let swaps = 0;
let selectedCard = null;

function shuffled() {
  let arr;
  do {
    arr = [...CHALLENGE_ITEMS].sort(() => Math.random() - 0.5);
  } while (arr.every((item, i) => item.order === i + 1));
  return arr;
}

function renderBoard() {
  const boardEl = $("challengeBoard");
  boardEl.innerHTML = "";
  board.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.className = "order-card";
    if (item.locked) btn.classList.add("locked");
    if (selectedCard === idx) btn.classList.add("selected");
    btn.innerHTML = `${idx + 1}.<br>${item.name}`;
    btn.addEventListener("click", () => onCardClick(idx));
    boardEl.appendChild(btn);
  });
  $("swapCount").textContent = t('swapsCount') + " " + swaps;
  const solvedCount = board.filter((it) => it.locked).length;
  $("orderHint").textContent = solvedCount > 0
    ? (currentLang === 'ar' ? `🔒 ${solvedCount} في مكانهم الصح!` : `🔒 ${solvedCount} in the right place!`)
    : t('hintDefault');
}

function onCardClick(idx) {
  if (board[idx].locked) return;
  if (selectedCard === null) {
    selectedCard = idx;
    renderBoard();
    return;
  }
  if (selectedCard === idx) {
    selectedCard = null;
    renderBoard();
    return;
  }

  [board[selectedCard], board[idx]] = [board[idx], board[selectedCard]];
  swaps++;
  selectedCard = null;

  let changed = true;
  while (changed) {
    changed = false;
    board.forEach((item, i) => {
      if (!item.locked && item.order === i + 1) {
        item.locked = true;
        changed = true;
      }
    });
  }
  renderBoard();

  if (board.every((item, i) => item.order === i + 1)) finishChallenge();
}

function finishChallenge() {
  const res = $("challengeResult");
  res.classList.remove("hidden");
  res.classList.add("win");
  res.textContent = currentLang === 'ar' 
    ? `🏆 مبروك! إنت رتبت كل الاختراعات الـ ${CHALLENGE_ITEMS.length} في ${swaps} تبديلات. إنت خلصت الرحلة — من العداد للذكاء الاصطناعي!`
    : `🏆 Perfect! You ordered all ${CHALLENGE_ITEMS.length} inventions in ${swaps} swaps. You've completed the journey — from Abacus to AI!`;
}

function showChallenge() {
  $("challengeSection").classList.remove("hidden");
  startChallengeRound();
  document.getElementById("challengeSection").scrollIntoView({ behavior: "smooth" });
}

function startChallengeRound() {
  board = shuffled().map((item) => ({ ...item }));
  swaps = 0;
  selectedCard = null;
  $("challengeResult").classList.add("hidden");
  renderBoard();
}

$("shuffleBtn").addEventListener("click", startChallengeRound);

buildTimeline();
updateProgressUI();

window.addEventListener('langChanged', () => {
  ERAS = currentLang === 'ar' ? ERAS_AR : ERAS_EN;
  CHALLENGE_ITEMS = currentLang === 'ar' ? CHALLENGE_ITEMS_AR : CHALLENGE_ITEMS_EN;
  
  timelineEl.innerHTML = '';
  chipsEl.innerHTML = '';
  buildTimeline();
  updateProgressUI();
  
  if (state.visited.size > 0) {
    renderEra(state.current);
  }
  
  if (!$("challengeSection").classList.contains("hidden")) {
    startChallengeRound();
  }
});
