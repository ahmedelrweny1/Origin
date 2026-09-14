/* ============================================================
   Student account page — tabs for log in / sign up,
   account panel when signed in. Local-only mode shows a note.
   ============================================================ */

const $ = (id) => document.getElementById(id);

function nextUrl() {
  try {
    const p = new URLSearchParams(window.location.search);
    const n = p.get('next') || 'exams.html';
    if (/^(https?:)?\/\//i.test(n) || n.includes('..')) return 'exams.html';
    return n;
  } catch (e) { return 'exams.html'; }
}

function friendly(code) {
  const map = {
    'auth/email-already-in-use': 'errEmailUsed',
    'auth/invalid-credential': 'errBadLogin',
    'auth/wrong-password': 'errBadLogin',
    'auth/user-not-found': 'errBadLogin',
    'auth/invalid-email': 'errBadEmail',
    'auth/weak-password': 'errPassShort',
    'auth/network-request-failed': 'errNet',
    'offline': 'errNet'
  };
  return t(map[code] || 'errUnknown');
}

function showErr(key) {
  $('authErr').textContent = key ? t(key) : '';
}
function showCode(code) {
  $('authErr').textContent = friendly(code);
}

function paint() {
  const u = (typeof Remote !== 'undefined') ? Remote.currentUser() : null;
  const logged = !!(u && u.uid);
  $('authCard').classList.toggle('hidden', logged);
  $('meCard').classList.toggle('hidden', !logged);
  if (logged) {
    $('meName').textContent = u.name || u.email;
    $('meEmail').textContent = u.email || '';
  }
}

function setTab(which) {
  const login = which === 'login';
  $('tabLogin').classList.toggle('active', login);
  $('tabSignup').classList.toggle('active', !login);
  $('loginForm').classList.toggle('hidden', !login);
  $('signupForm').classList.toggle('hidden', login);
  showErr(null);
}

async function boot() {
  $('goExams').href = nextUrl();
  let ok = false;
  try {
    if (typeof Remote !== 'undefined') ok = await Remote.init();
  } catch (e) { ok = false; }
  if (!ok) {
    $('offlineCard').classList.remove('hidden');
    $('authCard').classList.add('hidden');
    $('meCard').classList.add('hidden');
    return;
  }
  $('offlineCard').classList.add('hidden');
  $('authCard').classList.remove('hidden');
  try { Remote.onAuth(() => paint()); } catch (e) {}
  paint();
}

document.addEventListener('DOMContentLoaded', () => {
  boot();

  $('tabLogin').addEventListener('click', () => setTab('login'));
  $('tabSignup').addEventListener('click', () => setTab('signup'));

  $('doLoginBtn').addEventListener('click', async () => {
    const email = $('loginEmail').value.trim();
    const pass = $('loginPass').value;
    if (!email || !pass) { showErr('errFillAll'); return; }
    if (pass.length < 6) { showErr('errPassShort'); return; }
    const b = $('doLoginBtn');
    b.disabled = true;
    try {
      await Remote.login(email, pass);
      showErr(null);
      window.location.href = nextUrl();
    } catch (e) {
      showCode(e && e.code);
    }
    b.disabled = false;
  });

  $('doSignupBtn').addEventListener('click', async () => {
    const name = $('suName').value.trim();
    const email = $('suEmail').value.trim();
    const pass = $('suPass').value;
    if (!name || !email || !pass) { showErr('errFillAll'); return; }
    if (name.length < 2) { showErr('errFillAll'); return; }
    if (pass.length < 6) { showErr('errPassShort'); return; }
    const b = $('doSignupBtn');
    b.disabled = true;
    try {
      await Remote.signup(name, email, pass);
      showErr(null);
      window.location.href = nextUrl();
    } catch (e) {
      showCode(e && e.code);
    }
    b.disabled = false;
  });

  $('doLogoutBtn').addEventListener('click', async () => {
    try { await Remote.logout(); } catch (e) {}
    paint();
  });
});
