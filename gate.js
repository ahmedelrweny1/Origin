/* ============================================================
   Site gate — account check on exam/admin surfaces only.
   - Portals (home, lectures, quizzes, revision, account) stay
     open: the homepage is the first classroom.
   - Gated pages hide content until a cached login flag exists,
     then verify with Firebase when reachable and send signed-out
     visitors to login (returning them afterwards).
   - Fail-open: no Firebase setup, or no connection → allow.
     Real enforcement (attempts, roster) stays server-side.
   ============================================================ */
(function () {
  'use strict';

  var FLAG = 'origin-authed';
  var LOGIN_PAGE = 'login.html';
  var GATED = ['exams.html', 'exam.html', 'exam2.html', 'admin.html'];

  function here() {
    try {
      var parts = String(location.pathname || '').split('/');
      return (parts.pop() || 'index.html') + (location.search || '');
    } catch (e) { return 'index.html'; }
  }

  var base = '';
  try { base = here().split('?')[0]; } catch (e) {}
  // Only exam/admin surfaces require the account check.
  if (GATED.indexOf(base) === -1 || base === LOGIN_PAGE) return;

  // 1. Hide immediately unless a cached login exists.
  var cached = false;
  try { cached = localStorage.getItem(FLAG) === '1'; } catch (e) {}
  try {
    var style = document.createElement('style');
    style.textContent = 'html.gate-locked body{display:none!important}';
    document.head.appendChild(style);
  } catch (e) {}
  if (!cached) {
    try { document.documentElement.classList.add('gate-locked'); } catch (e) {}
  }

  function unlock() {
    try { document.documentElement.classList.remove('gate-locked'); } catch (e) {}
  }
  function toLogin() {
    try {
      location.replace(LOGIN_PAGE + '?next=' + encodeURIComponent(here()));
    } catch (e) { unlock(); }
  }

  // 2. Verify using the runtime already loaded by the page itself
  //    (each gated page includes the Firebase stack + remote.js).
  function verify() {
    try {
      if (typeof Remote === 'undefined') { unlock(); return; }
      Remote.init().then(function (ok) {
        if (!ok) { unlock(); return; } // unconfigured or unreachable → allow
        var u = null;
        try { u = Remote.currentUser(); } catch (e) {}
        if (u && u.uid) {
          try { localStorage.setItem(FLAG, '1'); } catch (e) {}
          unlock();
        } else {
          try { localStorage.removeItem(FLAG); } catch (e) {}
          toLogin();
        }
      }).catch(unlock);
    } catch (e) { unlock(); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', verify);
  } else {
    verify();
  }
})();
