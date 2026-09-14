/* ============================================================
   Site gate — login required before any page (except login).
   - Instant: hides content unless a cached login flag exists.
   - Verifies with Firebase when reachable; sends signed-out
     visitors to login (returning them afterwards).
   - Fail-open: no Firebase setup, or no connection → allow.
     Real enforcement (attempts, roster) stays server-side.
   ============================================================ */
(function () {
  'use strict';

  var FLAG = 'origin-authed';
  var LOGIN_PAGE = 'login.html';
  var SDK = 'https://www.gstatic.com/firebasejs/10.12.0/';
  var V = '?v=6';

  function here() {
    try {
      var parts = String(location.pathname || '').split('/');
      return (parts.pop() || 'index.html') + (location.search || '');
    } catch (e) { return 'index.html'; }
  }

  // Never gate the login page itself.
  try {
    if (here().split('?')[0] === LOGIN_PAGE) return;
  } catch (e) { return; }

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
  function load(src, done, fail) {
    try {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { done(); };
      s.onerror = function () { fail(); };
      document.head.appendChild(s);
    } catch (e) { fail(); }
  }

  // 2. Load the stack, then verify (any failure → allow).
  var stack = [
    SDK + 'firebase-app-compat.js',
    SDK + 'firebase-auth-compat.js',
    SDK + 'firebase-firestore-compat.js',
    'firebase-config.js' + V,
    'remote.js' + V
  ];
  (function next(i) {
    if (i >= stack.length) { verify(); return; }
    load(stack[i], function () { next(i + 1); }, unlock);
  })(0);

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
})();
