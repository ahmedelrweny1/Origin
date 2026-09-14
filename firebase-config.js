/* ============================================================
   Firebase setup — paste your own values here.
   1. Go to https://console.firebase.google.com → Add project (free Spark plan).
   2. Build → Authentication → Sign-in method → enable
      "Anonymous" AND "Email/Password".
   3. Authentication → Users → Add user → create YOUR teacher
      account (email + password). Put that email below.
   4. Build → Firestore Database → Create database (production mode).
   5. Firestore → Rules → paste the contents of firestore.rules
      (replace TEACHER@EXAMPLE.COM with your email) → Publish.
   6. Project settings (gear) → Your apps → Web app → copy the
      firebaseConfig values into FIREBASE_CONFIG below.
   7. Authentication → Settings → Authorized domains → Add domain →
      your GitHub Pages domain (e.g. yourname.github.io).
   Until real values are pasted here, the site works exactly as
   before (local-only mode) — nothing breaks.
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: 'PASTE_ME',
  authDomain: 'PASTE_ME',
  projectId: 'PASTE_ME',
  appId: 'PASTE_ME'
};

/* Must be identical to the teacher email created in step 3
   AND to the email inside firestore.rules. */
window.TEACHER_EMAIL = 'teacher@example.com';
