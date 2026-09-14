/* ============================================================
   Remote layer (Firebase Firestore + Auth) — optional.
   If Firebase is not configured, every function safely no-ops
   and the site keeps its current local-only behavior.
   ============================================================ */

const Remote = {
  enabled: false,
  db: null,
  auth: null,
  teacher: false,
  teacherEmail: null,
  _authCbs: [],

  /* Returns true when Firebase is configured AND signed in (anon). */
  async init() {
    try {
      if (this.enabled && this.db) return true;
      const cfg = window.FIREBASE_CONFIG || {};
      if (typeof firebase === 'undefined') return false;
      if (!cfg.apiKey || cfg.apiKey.indexOf('PASTE') === 0) return false;
      if (!firebase.apps.length) firebase.initializeApp(cfg);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
      this.auth.onAuthStateChanged((u) => {
        this.teacher = !!(u && u.email && window.TEACHER_EMAIL &&
          u.email.toLowerCase() === String(window.TEACHER_EMAIL).toLowerCase());
        this.teacherEmail = (u && u.email) || null;
        this._authCbs.forEach((cb) => { try { cb(this.teacher); } catch (err) {} });
      });
      // Respect an existing session (e.g. persisted teacher login) —
      // only fall back to anonymous when nobody is signed in.
      const existing = await this._timeout(new Promise((res) => {
        const unsub = this.auth.onAuthStateChanged((u) => { unsub(); res(u || null); });
      }), 9000);
      if (!existing) await this._timeout(this.auth.signInAnonymously(), 9000);
      this.enabled = true;
      return true;
    } catch (e) {
      this.enabled = false;
      return false;
    }
  },

  onAuth(cb) { this._authCbs.push(cb); },

  _timeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))
    ]);
  },

  docId(examId, nameKey) {
    return `${examId}_${encodeURIComponent(nameKey || 'unknown')}`;
  },

  /* ---- shared exam config (window, duration, attempts) ---- */
  async syncConfig(examId) {
    // Returns normalized remote config object, or null.
    if (!this.enabled) return null;
    try {
      const snap = await this._timeout(this.db.collection('config').doc(examId).get(), 8000);
      if (!snap.exists) return null;
      const c = snap.data() || {};
      return {
        durationMin: c.durationMin,
        passMark: c.passMark,
        attemptLimit: c.attemptLimit,
        windowEnabled: c.windowEnabled,
        windowStart: c.windowStart,
        windowEnd: c.windowEnd
      };
    } catch (e) { return null; }
  },

  /* ---- attempts ---- */
  async submitAttempt(examId, nameKey, record) {
    // record: {name,score,total,pct,passed,perType,wrong,unanswered,
    //          durationUsed,expired,clientAt,lang,items:[{n,type,good,your}]}
    if (!this.enabled) throw new Error('offline');
    const clean = {
      name: String(record.name || '').slice(0, 60),
      owner: record.owner || null,
      score: record.score | 0,
      total: record.total | 0,
      pct: record.pct | 0,
      passed: !!record.passed,
      perType: record.perType || {},
      wrong: record.wrong | 0,
      unanswered: record.unanswered | 0,
      durationUsed: record.durationUsed | 0,
      expired: !!record.expired,
      clientAt: record.clientAt | 0,
      lang: record.lang === 'ar' ? 'ar' : 'en',
      items: (record.items || []).slice(0, 60).map((it) => ({
        n: it.n | 0,
        type: String(it.type || 'mcq').slice(0, 12),
        good: !!it.good,
        your: it.your === null || it.your === undefined ? null : String(it.your).slice(0, 300)
      })),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    await this._timeout(
      this.db.collection('attempts').doc(this.docId(examId, nameKey)).set(clean),
      9000
    );
  },

  outboxKey(examId) { return `origin-timed-exam-${examId}-outbox`; },

  queueOutbox(examId, entry) {
    // entry: {nameKey, record}
    try {
      const k = this.outboxKey(examId);
      const box = JSON.parse(localStorage.getItem(k) || '[]');
      box.push(entry);
      while (box.length > 20) box.shift();
      localStorage.setItem(k, JSON.stringify(box));
    } catch (e) {}
  },

  outboxCount(examId) {
    try {
      const box = JSON.parse(localStorage.getItem(this.outboxKey(examId)) || '[]');
      return Array.isArray(box) ? box.length : 0;
    } catch (e) { return 0; }
  },

  /* Returns {synced, dropped, pending} */
  async retryOutbox(examId, onPermissionDenied) {
    const res = { synced: 0, dropped: 0, pending: 0 };
    if (!this.enabled) {
      res.pending = this.outboxCount(examId);
      return res;
    }
    let box = [];
    try { box = JSON.parse(localStorage.getItem(this.outboxKey(examId)) || '[]') || []; }
    catch (e) { box = []; }
    const rest = [];
    for (const entry of box) {
      const docKey = entry.docKey !== undefined ? entry.docKey : entry.nameKey;
      const slot = entry.slot !== undefined ? entry.slot : entry.nameKey;
      try {
        await this.submitAttempt(examId, docKey, entry.record);
        res.synced++;
      } catch (e) {
        const msg = String((e && e.code) || e);
        if (msg.indexOf('permission-denied') >= 0) {
          // Already submitted from elsewhere — count the attempt locally, drop.
          res.dropped++;
          try { if (onPermissionDenied) onPermissionDenied(slot); } catch (err) {}
        } else {
          rest.push(entry);
        }
      }
    }
    try { localStorage.setItem(this.outboxKey(examId), JSON.stringify(rest)); } catch (e) {}
    res.pending = rest.length;
    return res;
  },

  /* ---- teacher ---- */
  async teacherLogin(email, pass) {
    return this.login(email, pass);
  },

  async logout() {
    try { if (this.auth) await this.auth.signOut(); } catch (e) {}
    try { if (this.auth) await this._timeout(this.auth.signInAnonymously(), 9000); } catch (e) {}
    try { localStorage.removeItem('origin-profile'); } catch (e) {}
  },

  async teacherLogout() { return this.logout(); },

  /* ---- student accounts ---- */
  async signup(name, email, pass) {
    if (!this.enabled && !(await this.init())) throw this._err('offline');
    const clean = String(name || '').trim().slice(0, 60);
    if (clean.length < 2) throw this._err('errFillAll');
    const cred = await this._timeout(
      this.auth.createUserWithEmailAndPassword(email.trim(), pass), 12000);
    const uid = cred.user.uid;
    try {
      // NOTE: email stored exactly as typed so it matches the auth
      // token email checked by Firestore rules. Do not lowercase.
      await this._timeout(this.db.collection('users').doc(uid).set({
        name: clean,
        email: email.trim(),
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }), 9000);
    } catch (e) {}
    try {
      localStorage.setItem('origin-profile',
        JSON.stringify({ uid, email: email.trim(), name: clean }));
    } catch (e) {}
    return { uid, email: email.trim(), name: clean };
  },

  async login(email, pass) {
    if (!this.enabled && !(await this.init())) throw this._err('offline');
    const cred = await this._timeout(
      this.auth.signInWithEmailAndPassword(email.trim(), pass), 12000);
    await this.refreshProfile();
    return cred.user;
  },

  currentUser() {
    try {
      const u = this.auth && this.auth.currentUser;
      if (!u || u.isAnonymous || !u.email) return null;
      let name = '';
      try {
        const p = JSON.parse(localStorage.getItem('origin-profile') || 'null');
        if (p && p.uid === u.uid) name = p.name || '';
      } catch (e) {}
      return { uid: u.uid, email: u.email, name };
    } catch (e) { return null; }
  },

  async refreshProfile() {
    try {
      const u = this.auth && this.auth.currentUser;
      if (!u || u.isAnonymous) return null;
      const snap = await this._timeout(this.db.collection('users').doc(u.uid).get(), 8000);
      const d = snap.exists ? (snap.data() || {}) : {};
      const p = { uid: u.uid, email: u.email, name: d.name || '' };
      try { localStorage.setItem('origin-profile', JSON.stringify(p)); } catch (e) {}
      return p;
    } catch (e) { return null; }
  },

  async getOwnAttempt(examId) {
    if (!this.enabled) return null;
    const u = this.auth && this.auth.currentUser;
    if (!u || u.isAnonymous) return null;
    try {
      const snap = await this._timeout(
        this.db.collection('attempts').doc(this.docId(examId, u.uid)).get(), 8000);
      return snap.exists ? (snap.data() || {}) : null;
    } catch (e) { return null; }
  },

  _err(code) {
    const e = new Error(code);
    e.code = code;
    return e;
  },

  async fetchRoster(examId) {
    if (!this.enabled || !this.teacher) throw new Error('forbidden');
    const snap = await this._timeout(
      this.db.collection('attempts')
        .where('total', '>', 0)
        .get(),
      12000
    );
    const rows = [];
    snap.forEach((d) => {
      if (d.id.indexOf(examId + '_') !== 0) return;
      const r = d.data() || {};
      rows.push({
        id: d.id,
        name: r.name || '',
        score: r.score | 0,
        total: r.total | 0,
        pct: r.pct | 0,
        passed: !!r.passed,
        perType: r.perType || {},
        wrong: r.wrong | 0,
        unanswered: r.unanswered | 0,
        durationUsed: r.durationUsed | 0,
        expired: !!r.expired,
        submittedAt: (r.createdAt && r.createdAt.toMillis) ? r.createdAt.toMillis() : (r.clientAt || 0),
        items: Array.isArray(r.items) ? r.items : []
      });
    });
    rows.sort((a, b) => b.submittedAt - a.submittedAt);
    return rows;
  },

  async deleteAttempt(docId) {
    if (!this.enabled || !this.teacher) throw new Error('forbidden');
    await this._timeout(this.db.collection('attempts').doc(docId).delete(), 8000);
  },

  async clearRoster(examId) {
    if (!this.enabled || !this.teacher) throw new Error('forbidden');
    const snap = await this._timeout(this.db.collection('attempts').get(), 12000);
    const batch = this.db.batch();
    let n = 0;
    snap.forEach((d) => {
      if (d.id.indexOf(examId + '_') === 0) { batch.delete(d.ref); n++; }
    });
    if (n) await this._timeout(batch.commit(), 12000);
    return n;
  },

  async saveConfig(examId, cfg) {
    if (!this.enabled || !this.teacher) throw new Error('forbidden');
    await this._timeout(this.db.collection('config').doc(examId).set({
      durationMin: cfg.durationMin | 0,
      passMark: cfg.passMark | 0,
      attemptLimit: cfg.attemptLimit | 0,
      windowEnabled: !!cfg.windowEnabled,
      windowStart: cfg.windowStart | 0,
      windowEnd: cfg.windowEnd | 0,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }), 9000);
  }
};
