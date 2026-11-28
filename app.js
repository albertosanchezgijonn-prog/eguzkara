/* ============================================================
   eGuzkara · interfaz (PWA / Capacitor) — vanilla JS
   ============================================================ */
(function () {
'use strict';
const root = document.getElementById('app');

/* ---------- helpers DOM ---------- */
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  if (attrs) for (const k in attrs) {
    const v = attrs[k]; if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat(3)) {
    if (c == null || c === false) continue;
    el.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
  }
  return el;
}
const clear = (el) => { while (el.firstChild) el.removeChild(el.firstChild); };

/* ---------- estado persistente ---------- */
const KEY = 'euskara-ab-v1';
const DEF = { xp: 0, streak: 0, last: '', days: {}, prog: {}, weak: [], exams: [], guz: { hp: 80, tick: '', asked: false }, set: { rate: 0.85, voice: '', mic: true, unlockAll: false, goal: 30, fallbackEs: true, remind: false, remindHour: 19 } };
let S;
function load() {
  try { const j = JSON.parse(localStorage.getItem(KEY) || 'null') || {}; return Object.assign({}, DEF, j, { set: Object.assign({}, DEF.set, j.set || {}) }); }
  catch (e) { return JSON.parse(JSON.stringify(DEF)); }
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* almacenamiento lleno */ } }
function fixS() { S.guz = Object.assign({}, DEF.guz, S.guz || {}); S.set = Object.assign({}, DEF.set, S.set || {}); }
S = load(); fixS();
const dfmt = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const today = () => dfmt(new Date());
const addDays = (ds, n) => { const d = new Date(ds + 'T12:00:00'); d.setDate(d.getDate() + n); return dfmt(d); };
const dayDiff = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000);
/* acceso a plugins nativos de Capacitor (sin bundler) */
const _pl = {};
function plugin(name) {
  const C = window.Capacitor; if (!C || !(C.isNativePlatform && C.isNativePlatform())) return null;
  if (_pl[name]) return _pl[name];
  try { _pl[name] = (C.Plugins && C.Plugins[name]) || (C.registerPlugin ? C.registerPlugin(name) : null); } catch (e) { _pl[name] = null; }
  return _pl[name];
}
function addXp(n) {
  const t = today();
  if (S.last !== t) {
    const ys = addDays(t, -1);
    S.streak = S.last === ys ? S.streak + 1 : 1; S.last = t;
  }
  S.xp += n; S.days[t] = (S.days[t] || 0) + n; save();
}
const stars = (uid, lid) => (S.prog[uid] && S.prog[uid][lid]) || 0;
function setStars(uid, lid, n) { S.prog[uid] = S.prog[uid] || {}; S.prog[uid][lid] = Math.max(stars(uid, lid), n); save(); }
const weakKey = (it) => it.t + '|' + (it.q || it.eu || it.es || it.prompt || '') + '|' + (it.a || '');
function weakAdd(it) {
  const k = weakKey(it); if (S.weak.some(w => w.k === k)) return;
  const c = Object.assign({}, it); delete c._retry; S.weak.push({ k, it: c }); if (S.weak.length > 80) S.weak.shift(); save();
}
function weakRemove(it) { const k = weakKey(it); const n = S.weak.length; S.weak = S.weak.filter(w => w.k !== k); if (n !== S.weak.length) save(); }

/* ---------- audio: síntesis de voz y clips opcionales ---------- */
const Snd = {
  voices: [], clips: {}, cur: null,
  init() {
    if ('speechSynthesis' in window) {
      const l = () => { this.voices = speechSynthesis.getVoices() || []; };
      l(); try { speechSynthesis.onvoiceschanged = l; } catch (e) { /* noop */ }
    }
    fetch('audio/index.json').then(r => (r.ok ? r.json() : {})).then(j => { this.clips = j || {}; }).catch(() => { /* sin clips */ });
  },
  eu() { return this.voices.find(v => /^eu/i.test(v.lang)); },
  hasEu() { return !!this.eu() || !!plugin('TextToSpeech'); },
  chosen() {
    if (S.set.voice) { const v = this.voices.find(x => x.voiceURI === S.set.voice); if (v) return v; }
    return this.eu() || (S.set.fallbackEs ? this.voices.find(v => /^es/i.test(v.lang)) : null) || null;
  },
  stop() { try { speechSynthesis.cancel(); } catch (e) { /* noop */ } if (this.cur) { try { this.cur.pause(); } catch (e) { /* noop */ } this.cur = null; } },
  speak(text, o) {
    o = o || {};
    const clip = this.clips[E.norm(text)];
    if (clip) return new Promise((res) => { const a = new window.Audio('audio/' + clip); this.cur = a; a.playbackRate = o.slow ? 0.8 : 1; a.onended = res; a.onerror = res; a.play().catch(res); });
    const cap = plugin('TextToSpeech');
    const rate = (o.slow ? 0.6 : 1) * S.set.rate;
    if (cap) return cap.speak({ text, lang: 'eu-ES', rate, pitch: o.pitch || 1, volume: 1 }).catch(() => cap.speak({ text, lang: 'es-ES', rate, pitch: o.pitch || 1, volume: 1 }).catch(() => { /* noop */ }));
    if (!('speechSynthesis' in window)) return Promise.resolve();
    return new Promise((res) => {
      this.stop();
      const u = new SpeechSynthesisUtterance(text);
      const v = this.chosen(); u.lang = v ? v.lang : 'eu-ES'; if (v) u.voice = v;
      u.rate = rate; u.pitch = o.pitch || 1;
      let done = false; const fin = () => { if (!done) { done = true; res(); } };
      u.onend = fin; u.onerror = fin; setTimeout(fin, 2500 + text.length * 140 / rate);
      speechSynthesis.speak(u);
    });
  },
  async seq(lines, onLine) {
    this.stop(); this.seqId = (this.seqId || 0) + 1; const id = this.seqId;
    const who = {}; let n = 0;
    for (let i = 0; i < lines.length; i++) {
      if (id !== this.seqId) return;
      const sp = lines[i][0]; if (!(sp in who)) who[sp] = n++ % 2 ? 1.25 : 0.9;
      if (onLine) onLine(i);
      await this.speak(lines[i][1], { pitch: who[sp] });
      await new Promise(r => setTimeout(r, 250));
    }
    if (onLine) onLine(-1);
  },
};
Snd.init();

/* ---------- reconocimiento de voz ---------- */
const Rec = {
  cap() { return plugin('SpeechRecognition'); },
  supported() { return !!(this.cap() || window.SpeechRecognition || window.webkitSpeechRecognition); },
  listen() {
    const cap = this.cap();
    if (cap) {
      return (async () => {
        const p = await cap.requestPermissions(); if (p && p.speechRecognition === 'denied') throw new Error('not-allowed');
        const r = await cap.start({ language: 'eu-ES', maxResults: 5, prompt: 'Esaldia esan', partialResults: false, popup: false });
        return (r && r.matches) || [];
      })();
    }
    return new Promise((res, rej) => {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const r = new SR(); r.lang = 'eu-ES'; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
      let got = false;
      r.onresult = (e) => { got = true; const a = []; for (const x of e.results[0]) a.push(x.transcript); res(a); };
      r.onerror = (e) => rej(new Error(e.error || 'error'));
      r.onend = () => { if (!got) rej(new Error('no-speech')); };
      try { r.start(); } catch (e) { rej(e); }
      Rec.inst = r;
    });
  },
  stop() { try { if (this.inst) this.inst.stop(); } catch (e) { /* noop */ } },
};

/* ---------- Guzki: ánimo, salud y avisos ---------- */
const Guz = {
  gain(n) { S.guz.hp = Math.min(100, S.guz.hp + n); save(); },
  /* cada día completo sin estudiar le quita 20 de salud */
  tick() {
    const g = S.guz, t = today();
    if (!g.tick) { g.tick = t; save(); return; }
    if (g.tick === t) return;
    const n = Math.min(14, dayDiff(g.tick, t));
    for (let i = 0; i < n; i++) { if (!(S.days[addDays(g.tick, i)] > 0)) g.hp = Math.max(0, g.hp - 20); }
    g.tick = t; save();
  },
  wilt() { return Math.min(1, Math.max(0, (70 - S.guz.hp) / 60)); },
  level() { const hp = S.guz.hp; return hp >= 85 ? { name: 'Floreciendo', icon: '🌻' } : hp >= 60 ? { name: 'Sano', icon: '🌼' } : hp >= 35 ? { name: 'Mustio', icon: '🌿' } : hp >= 15 ? { name: 'Marchitándose', icon: '🥀' } : { name: 'Marchito', icon: '🥀' }; },
  away() { return S.last ? dayDiff(S.last, today()) : -1; },
  homeMood() {
    const t = today(), xp = S.days[t] || 0, goal = S.set.goal, hr = new Date().getHours(), away = this.away(), hp = S.guz.hp;
    if (!S.last) return { mood: 'acierto', msg: '¡Kaixo! Soy Guzki, tu compañero de euskera. ¿Empezamos con la primera lección?' };
    if (xp >= goal) {
      if (S.streak >= 7) return { mood: 'euforia', msg: '¡ESTOY FLORECIENDO! ' + S.streak + ' días seguidos, eres imparable.' };
      if (S.streak >= 3) return { mood: 'racha', msg: '¡Imparable! Racha de ' + S.streak + ' días y objetivo de hoy cumplido.' };
      return { mood: 'acierto', msg: 'Bai! Ederki! Objetivo de hoy cumplido.' };
    }
    if (xp > 0) return { mood: 'bien', msg: '¡Aurrera! Te faltan ' + (goal - xp) + ' XP para el objetivo de hoy.' };
    if (away >= 4 || hp < 20) return { mood: 'depresivo', msg: 'Me estoy marchitando… Una lección y revivo.' };
    if (away === 3) return { mood: 'toxico', msg: 'Esto ya es personal… Tres días sin euskera.' };
    if (away === 2) return { mood: 'enfadado', msg: '¡Ea, ea! Dos días sin venir. Me estoy poniendo mustio.' };
    if (hr >= 20) return { mood: 'enfadado', msg: S.streak > 0 ? '¡Tu racha de ' + S.streak + ' días se acaba hoy! ¡Ea, ea!' : '¡Ea, ea! Hoy no hemos estudiado nada.' };
    if (hr >= 17) return { mood: 'impaciente', msg: '¿Seguimos? Hoy aún no hemos estudiado nada.' };
    return { mood: 'duda', msg: 'Hmm… ¿qué aprendemos hoy?' };
  },
};
const Notif = {
  p() { return plugin('LocalNotifications'); },
  available() { return !!this.p(); },
  async enable() { const p = this.p(); if (!p) return false; try { const r = await p.requestPermissions(); return !!r && r.display === 'granted'; } catch (e) { return false; } },
  list() {
    const H = S.set.remindHour, now = new Date(), out = [];
    for (let k = 0; k < 7; k++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + k, H, 0, 0);
      if (d <= now) continue;
      const ds = dfmt(d); if (S.last === ds) continue;
      const away = S.last ? dayDiff(S.last, ds) : k + 1;
      out.push({ id: 101 + k, title: 'Guzki 🌻', body: Guzki.reminder(away, S.streak), schedule: { at: d, allowWhileIdle: true } });
    }
    return out;
  },
  async reschedule() {
    const p = this.p(); if (!p) return;
    try {
      await p.cancel({ notifications: [101, 102, 103, 104, 105, 106, 107].map(id => ({ id })) });
      if (!S.set.remind) return;
      const perm = await p.checkPermissions(); if (!perm || perm.display !== 'granted') return;
      const n = this.list(); if (n.length) await p.schedule({ notifications: n });
    } catch (e) { /* sin avisos */ }
  },
  async test() { const p = this.p(); if (!p) return false; try { await p.schedule({ notifications: [{ id: 199, title: 'Guzki 🌻', body: Guzki.reminder(3, 0), schedule: { at: new Date(Date.now() + 5000) } }] }); return true; } catch (e) { return false; } },
  async offer() {
    if (!this.available() || S.guz.asked) return;
    S.guz.asked = true; save();
    if (confirm('¿Quieres que Guzki te avise cada día? Si no estudias, se enfadará… y se irá marchitando 🥀')) {
      if (await this.enable()) { S.set.remind = true; save(); this.reschedule(); }
    }
  },
};

/* ---------- componentes pequeños ---------- */
const speakBtn = (text, slow, label) => h('button', { class: 'spk' + (slow ? ' slow' : ''), type: 'button', 'aria-label': 'Escuchar', onclick: () => Snd.speak(text, { slow }) }, slow ? '🐢' : '🔊', label ? ' ' + label : '');
const sentenceOf = (it) => it.q && it.q.indexOf('___') >= 0 ? it.q.replace(/\s*\([^)]*\)/g, '').replace('___', String(it.a).split('|')[0]).replace(/[«»]/g, '') : '';

/* ---------- tipos de ejercicio ---------- */
const Ex = {};
function optionList(opts, onPick) {
  const btns = [];
  const box = h('div', { class: 'opts' });
  opts.forEach((o) => {
    const b = h('button', { class: 'opt', type: 'button', onclick: () => { btns.forEach(x => x.classList.remove('sel')); b.classList.add('sel'); onPick(o); } }, o);
    b._v = o; btns.push(b); box.appendChild(b);
  });
  box.mark = (correct, chosen) => btns.forEach(b => { if (b._v === correct) b.classList.add('ok'); else if (b._v === chosen) b.classList.add('bad'); b.disabled = true; });
  return box;
}
Ex.mc = (it, c) => {
  let sel = null;
  const box = optionList(E.shuffle(E.uniq([it.a].concat(it.w || []))), (o) => { sel = o; c.ready(true); });
  const head = h('div', { class: 'qrow' }, h('h2', { class: 'q' }, it.q), it.aud ? speakBtn(it.aud) : null);
  if (it.aud) setTimeout(() => Snd.speak(it.aud), 250);
  return { el: h('div', null, head, box), check() { box.mark(it.a, sel); return { ok: sel === it.a, correct: it.a }; } };
};
Ex.vl = (it, c) => { // oír una palabra y elegir
  let sel = null;
  const box = optionList(E.shuffle(E.uniq([it.a].concat(it.w))), (o) => { sel = o; c.ready(true); });
  setTimeout(() => Snd.speak(it.eu), 250);
  return { el: h('div', null, h('h2', { class: 'q' }, 'Escucha y elige lo que oyes'), h('div', { class: 'big' }, speakBtn(it.eu), speakBtn(it.eu, true)), box),
    check() { box.mark(it.a, sel); return { ok: sel === it.a, correct: it.a, note: it.es }; } };
};
Ex.ls = (it, c) => { // oír una frase y elegir su significado
  let sel = null;
  const box = optionList(E.shuffle(E.uniq([it.a].concat(it.w))), (o) => { sel = o; c.ready(true); });
  setTimeout(() => Snd.speak(it.eu), 250);
  return { el: h('div', null, h('h2', { class: 'q' }, '¿Qué significa lo que oyes?'), h('div', { class: 'big' }, speakBtn(it.eu), speakBtn(it.eu, true)), box),
    check() { box.mark(it.a, sel); return { ok: sel === it.a, correct: it.a, note: it.eu }; } };
};
Ex.fl = (it, c) => {
  let val = '';
  const blank = h('span', { class: 'blank' }, '\u00a0\u00a0\u00a0\u00a0\u00a0');
  const parts = it.q.split('___');
  const line = parts.length > 1 ? h('p', { class: 'fl' }, parts[0], blank, parts[1]) : h('p', { class: 'fl' }, it.q);
  const body = h('div', null, h('h2', { class: 'q' }, 'Completa'), line);
  let input = null, chips = null;
  const setVal = (v) => { val = v; blank.textContent = v || '\u00a0\u00a0\u00a0\u00a0\u00a0'; c.ready(v.trim().length > 0); };
  if (it.opts) {
    const all = E.shuffle(E.uniq([it.a].concat(it.opts)));
    chips = optionList(all, (o) => setVal(o)); body.appendChild(chips);
  } else {
    input = h('input', { class: 'inp', type: 'text', autocapitalize: 'none', autocomplete: 'off', autocorrect: 'off', spellcheck: 'false', placeholder: 'Escribe en euskera…' });
    input.addEventListener('input', () => setVal(input.value));
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') c.submit(); });
    body.appendChild(input); setTimeout(() => { try { input.focus(); } catch (e) { /* noop */ } }, 200);
  }
  return { el: body, check() {
    const ok = E.matches(it.a, val);
    if (chips) chips.mark(String(it.a).split('|')[0], val);
    if (input) input.disabled = true;
    return { ok, correct: String(it.a).split('|')[0], speak: sentenceOf(it) };
  } };
};
function bankBuilder(it, c, label, withAudio) {
  const bank = E.shuffle(it.bank), chosen = [];
  const ans = h('div', { class: 'ans' }), pool = h('div', { class: 'pool' });
  const draw = () => {
    clear(ans); clear(pool);
    chosen.forEach((t, i) => ans.appendChild(h('button', { class: 'tok', type: 'button', onclick: () => { chosen.splice(i, 1); draw(); } }, t.w)));
    bank.forEach((w, i) => pool.appendChild(h('button', { class: 'tok' + (chosen.some(t => t.i === i) ? ' used' : ''), type: 'button', onclick: () => { if (!chosen.some(t => t.i === i)) { chosen.push({ w, i }); draw(); } } }, w)));
    c.ready(chosen.length > 0);
  };
  draw();
  return { ans, pool, chosen, draw };
}
Ex.tr = (it, c) => {
  const b = bankBuilder(it, c);
  if (it.aud) { /* se reproduce tras comprobar */ }
  return { el: h('div', null, h('h2', { class: 'q' }, 'Traduce al euskera'), h('p', { class: 'src' }, it.es), b.ans, b.pool),
    check() { const given = b.chosen.map(t => t.w).join(' '); return { ok: E.matches(it.eu, given), correct: it.eu, speak: it.eu }; } };
};
Ex.dict = (it, c) => {
  setTimeout(() => Snd.speak(it.eu), 250);
  const head = h('div', null, h('h2', { class: 'q' }, 'Escribe lo que oyes'), h('div', { class: 'big' }, speakBtn(it.eu), speakBtn(it.eu, true)));
  if (it.typed) {
    const input = h('input', { class: 'inp', type: 'text', autocapitalize: 'none', autocomplete: 'off', autocorrect: 'off', spellcheck: 'false', placeholder: 'Dictado…' });
    input.addEventListener('input', () => c.ready(input.value.trim().length > 0));
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') c.submit(); });
    head.appendChild(input);
    return { el: head, check() { input.disabled = true; return { ok: E.matches(it.eu, input.value), correct: it.eu, note: it.es, speak: null }; } };
  }
  const b = bankBuilder(it, c);
  head.appendChild(b.ans); head.appendChild(b.pool);
  return { el: head, check() { return { ok: E.matches(it.eu, b.chosen.map(t => t.w).join(' ')), correct: it.eu, note: it.es }; } };
};
Ex.say = (it, c) => {
  let res = null, busy = false;
  const out = h('div', { class: 'sayout' });
  const mic = h('button', { class: 'mic', type: 'button', 'aria-label': 'Hablar' }, '🎤');
  const status = h('p', { class: 'hint' }, Rec.supported() && S.set.mic ? 'Pulsa el micrófono y di la frase en voz alta.' : 'Reconocimiento de voz no disponible: escucha, repite en voz alta y autoevalúate.');
  const setRes = (r) => { res = r; clear(out);
    if (r.self) { out.appendChild(h('p', null, r.ok ? '✅ Lo has dicho bien' : '🔁 Hay que repetir')); }
    else {
      out.appendChild(h('p', { class: 'heard' }, 'He oído: «', r.alt || '—', '»'));
      out.appendChild(h('div', { class: 'words' }, E.tokens(it.eu).map((w, i) => h('span', { class: 'w ' + (r.words[i] ? 'okw' : 'badw') }, w))));
      out.appendChild(h('p', { class: 'hint' }, 'Similitud: ' + Math.round(r.score * 100) + ' %'));
    }
    c.ready(true); };
  const doListen = async () => {
    if (busy) return; busy = true; mic.classList.add('rec'); status.textContent = 'Escuchando…'; Snd.stop();
    try { const alts = await Rec.listen(); const r = E.speechScore(it.eu, alts); setRes(r); status.textContent = r.ok ? '¡Muy bien!' : 'Inténtalo de nuevo o continúa.'; }
    catch (e) { const m = String(e.message || e); status.textContent = /not-allowed|permission/i.test(m) ? 'Permiso de micrófono denegado: actívalo en los ajustes del navegador/app.' : /language/i.test(m) ? 'Tu dispositivo no reconoce euskera.' : /no-speech/i.test(m) ? 'No te he oído. Prueba otra vez.' : 'Error de reconocimiento: ' + m; }
    mic.classList.remove('rec'); busy = false;
  };
  mic.addEventListener('click', doListen);
  const self = h('div', { class: 'selfrow' },
    h('button', { class: 'btn ghost', type: 'button', onclick: () => setRes({ self: true, ok: true }) }, '✅ Lo he dicho bien'),
    h('button', { class: 'btn ghost', type: 'button', onclick: () => setRes({ self: true, ok: false }) }, '🔁 Repetir'));
  const useMic = Rec.supported() && S.set.mic;
  return { el: h('div', null, h('h2', { class: 'q' }, 'Di en voz alta'), h('p', { class: 'say' }, it.eu), h('p', { class: 'src' }, it.es),
    h('div', { class: 'big' }, speakBtn(it.eu), speakBtn(it.eu, true), useMic ? mic : null), status, out, useMic ? h('button', { class: 'link', type: 'button', onclick: () => setRes({ self: true, ok: true }) }, 'No puedo hablar ahora (autoevaluar)') : self),
    check() { return { ok: !!(res && res.ok), correct: it.eu, speak: null }; }, skippable: true };
};
Ex.mt = (it, c) => {
  const L = E.shuffle(it.pairs.map(p => p[0])), R = E.shuffle(it.pairs.map(p => p[1]));
  let a = null, done = 0, errs = 0; const map = {}; it.pairs.forEach(p => { map[p[0]] = p[1]; });
  const colL = h('div', { class: 'col' }), colR = h('div', { class: 'col' }), bl = [], br = [];
  const mk = (txt, side, arr, col) => { const b = h('button', { class: 'opt', type: 'button' }, txt); b._v = txt; b._s = side; arr.push(b); col.appendChild(b);
    b.addEventListener('click', () => {
      if (b.disabled) return;
      if (side === 'L') { bl.forEach(x => x.classList.remove('sel')); b.classList.add('sel'); a = b; Snd.speak(txt); return; }
      if (!a) return;
      if (map[a._v] === txt) { a.classList.remove('sel'); a.classList.add('ok'); b.classList.add('ok'); a.disabled = true; b.disabled = true; a = null; done++; if (done === it.pairs.length) c.ready(true); }
      else { errs++; b.classList.add('bad'); setTimeout(() => b.classList.remove('bad'), 450); }
    }); };
  L.forEach(t => mk(t, 'L', bl, colL)); R.forEach(t => mk(t, 'R', br, colR));
  return { el: h('div', null, h('h2', { class: 'q' }, 'Une cada palabra con su significado'), h('div', { class: 'cols' }, colL, colR)), check() { return { ok: errs <= 2, correct: it.pairs.map(p => p[0] + ' = ' + p[1]).join(' · ') }; } };
};
Ex.cmp = (it, c) => {
  let sel = null, shown = !it.audio;
  const lines = h('div', { class: 'dlg' }, it.lines.map((l, i) => h('p', { class: 'line', id: 'ln' + i }, h('b', null, l[0] + ': '), l[1])));
  if (!shown) lines.style.display = 'none';
  const play = h('button', { class: 'btn play', type: 'button', onclick: () => Snd.seq(it.lines) }, '▶ ' + (it.audio ? 'Escuchar el diálogo' : 'Escuchar'));
  const toggle = h('button', { class: 'link', type: 'button', onclick: () => { shown = !shown; lines.style.display = shown ? '' : 'none'; toggle.textContent = shown ? 'Ocultar texto' : 'Ver texto (pierde la gracia 😉)'; } }, it.audio ? 'Ver texto (pierde la gracia 😉)' : 'Ocultar texto');
  const box = optionList(E.shuffle(E.uniq([it.a].concat(it.w))), (o) => { sel = o; c.ready(true); });
  if (it.audio) setTimeout(() => Snd.seq(it.lines), 350);
  return { el: h('div', null, h('h2', { class: 'q' }, it.audio ? '🎧 Comprensión oral' : '📖 Comprensión lectora'), h('p', { class: 'hint' }, it.title), play, lines, toggle, h('p', { class: 'q2' }, it.q), box),
    check() { box.mark(it.a, sel); if (it.audio) { shown = true; lines.style.display = ''; } return { ok: sel === it.a, correct: it.a }; } };
};
Ex.wr = (it, c) => {
  const ta = h('textarea', { class: 'inp area', rows: '3', autocapitalize: 'none', autocomplete: 'off', spellcheck: 'false', placeholder: 'Idatzi hemen…' });
  ta.addEventListener('input', () => c.ready(ta.value.trim().length > 3));
  return { el: h('div', null, h('h2', { class: 'q' }, '✍️ Expresión escrita'), h('p', { class: 'src' }, it.prompt), ta),
    check() { const t = E.norm(ta.value); const missing = (it.req || []).filter(r => !new RegExp(r, 'i').test(t)); ta.disabled = true;
      return { ok: missing.length === 0, correct: it.model, note: missing.length ? 'Faltaban elementos clave en tu texto.' : 'Tu texto contiene los elementos clave. Compáralo con el modelo.', speak: it.model }; } };
};

/* ---------- ejecutor de lecciones ---------- */
function runLesson(items, o) {
  Snd.stop();
  const st = { q: items.slice(), i: 0, hearts: o.exam ? 99 : 5, total: items.length, done: 0, first: 0, miss: 0, secs: {}, skipped: 0, cc: 0, cw: 0, idle1: 0, idle2: 0, bubT: 0 };
  const clearIdle = () => { clearTimeout(st.idle1); clearTimeout(st.idle2); clearTimeout(st.bubT); };
  const ambient = () => (st.cw >= 2 ? 'depresivo' : st.cc >= 3 ? 'racha' : 'normal');
  const step = () => {
    Snd.stop(); clearIdle();
    if (st.hearts <= 0) return fail();
    if (st.i >= st.q.length) return finish();
    const it = st.q[st.i]; clear(root);
    let ready = false, checked = false, arm = () => {};
    const btn = h('button', { class: 'btn primary big-btn', type: 'button', disabled: true }, o.exam ? 'Hurrengoa' : 'Egiaztatu');
    const fb = h('div', { class: 'fb' });
    const foot = h('div', { class: 'foot' }, fb, btn);
    const ctx = {
      ready(b) { ready = b; if (!checked) btn.disabled = !b; arm(); },
      submit() { if (ready && !checked) onBtn(); },
    };
    const ex = Ex[it.t](it, ctx);
    const body = h('div', { class: 'exbody' }, ex.el);
    const bar = h('div', { class: 'bar' }, h('i', { style: 'width:' + Math.round(100 * st.done / st.total) + '%' }));
    const bub = h('div', { class: 'gz-bub', style: 'display:none' });
    const say = (mood, text) => { gz.innerHTML = Guzki.image(mood); bub.textContent = text; bub.style.display = 'block'; clearTimeout(st.bubT); st.bubT = setTimeout(() => { bub.style.display = 'none'; }, 3200); };
    const gz = o.exam ? null : h('button', { class: 'gz-mini', type: 'button', 'aria-label': 'Guzki', html: Guzki.image(ambient()), onclick: () => { const m = ['sorpresa', 'acierto', 'duda'][E.rnd(3)]; say(m, Guzki.line(m)); } });
    const top = h('div', { class: 'top' },
      h('button', { class: 'x', type: 'button', 'aria-label': 'Cerrar', onclick: () => { if (confirm('¿Salir de la lección? Perderás el progreso de esta sesión.')) { clearIdle(); Snd.stop(); o.onExit(); } } }, '✕'),
      bar, o.exam ? h('span', { class: 'sec' }, (it.sec || '').split('·')[0]) : h('span', { class: 'hearts' }, '❤️ ' + st.hearts), gz);
    root.appendChild(h('div', { class: 'lesson' }, top, bub, body, foot));
    if (!o.exam) {
      arm = () => { clearTimeout(st.idle1); clearTimeout(st.idle2); if (checked) return;
        st.idle1 = setTimeout(() => say('impaciente', Guzki.line('impaciente')), 25000);
        st.idle2 = setTimeout(() => say('enfadado', Guzki.line('enfadado')), 50000); };
      arm();
    }
    if (ex.skippable && !o.exam) { const sk = h('button', { class: 'link skip', type: 'button', onclick: () => { st.skipped++; st.i++; st.total--; step(); } }, 'Saltar'); body.appendChild(sk); }
    function onBtn() {
      if (checked) { st.i++; step(); return; }
      checked = true; clearIdle(); const r = ex.check();
      if (o.exam) { const s = (st.secs[it.sec] = st.secs[it.sec] || { ok: 0, n: 0 }); s.n++; if (r.ok) s.ok++; st.done++; st.i++; step(); return; }
      if (r.ok) { if (!it._retry) st.first++; st.done++; weakRemove(it); }
      else { st.miss++; st.hearts--; weakAdd(it); st.q.push(Object.assign({}, it, { _retry: true })); }
      let mood, gmsg;
      if (r.ok) { st.cc++; const rec = st.cw > 0; st.cw = 0; Guz.gain(2); mood = st.cc >= 3 ? 'racha' : rec ? 'bien' : 'acierto'; gmsg = Guzki.line(mood, st.cc); }
      else {
        st.cw++; st.cc = 0;
        mood = st.cw >= 3 ? 'toxico' : st.cw === 2 ? 'depresivo' : st.hearts === 1 ? 'sorpresa' : 'duda';
        gmsg = mood === 'sorpresa' ? '¡Hara! Te queda una sola vida.' : Guzki.line(mood);
        try { if (navigator.vibrate) navigator.vibrate(40); } catch (e) { /* sin vibración */ }
      }
      fb.className = 'fb show ' + (r.ok ? 'good' : 'wrong');
      clear(fb); const fbt = h('div', { class: 'fbtxt' });
      fbt.appendChild(h('b', null, r.ok ? '✔ Zuzen! ' + ['Primeran!', 'Ederki!', 'Bikain!', 'Ondo!'][E.rnd(4)] : '✘ Erantzun zuzena:'));
      if (!r.ok && r.correct) fbt.appendChild(h('div', { class: 'corr' }, r.correct));
      if (r.ok && r.correct && (it.t === 'tr' || it.t === 'dict')) fbt.appendChild(h('div', { class: 'corr' }, r.correct));
      if (r.note) fbt.appendChild(h('div', { class: 'note' }, r.note));
      if (it.ex) fbt.appendChild(h('div', { class: 'note' }, 'ℹ️ ' + it.ex));
      const sp = r.speak === undefined ? (it.t === 'tr' || it.t === 'dict' ? it.eu : null) : r.speak;
      if (sp) { fbt.appendChild(h('div', null, speakBtn(sp), speakBtn(sp, true))); if (r.ok) Snd.speak(sp); }
      fbt.appendChild(h('div', { class: 'gmsg' }, '🌻 ' + gmsg));
      fb.appendChild(h('div', { class: 'fbrow' }, h('div', { class: 'fb-guz', html: Guzki.image(mood) }), fbt));
      gz.innerHTML = Guzki.image(mood);
      btn.textContent = 'Jarraitu'; btn.disabled = false; btn.className = 'btn big-btn ' + (r.ok ? 'primary' : 'danger');
      const hb = top.querySelector && top.querySelector('.hearts'); if (hb) hb.textContent = '❤️ ' + st.hearts;
    }
    btn.addEventListener('click', onBtn);
  };
  const fail = () => {
    clearIdle(); clear(root);
    root.appendChild(h('div', { class: 'center' }, h('div', { class: 'guz-big', html: Guzki.image('depresivo') }), h('h2', null, 'Bizirik gabe!'), h('p', null, 'Te has quedado sin vidas. Repasa la gramática y vuelve a intentarlo: ¡la práctica hace al maestro!'),
      h('button', { class: 'btn primary', onclick: () => o.onRetry() }, 'Reintentar'), h('button', { class: 'btn ghost', onclick: () => o.onExit() }, 'Salir')));
  };
  const finish = () => {
    clearIdle();
    if (o.exam) return o.onFinish(st);
    const ok = st.total - 0; const stars3 = st.miss === 0 ? 3 : st.miss <= 2 ? 2 : 1;
    const xp = Math.max(5, st.first * 4 + 10 + (stars3 === 3 ? 10 : 0));
    addXp(xp); if (o.onDone) o.onDone(stars3);
    Guz.gain(10 + st.first); Notif.reschedule(); setTimeout(() => Notif.offer(), 700);
    const gm = stars3 === 3 ? 'euforia' : stars3 === 2 ? 'acierto' : 'bien';
    clear(root);
    root.appendChild(h('div', { class: 'center' }, h('div', { class: 'guz-big', html: Guzki.image(gm) }), h('div', { class: 'bubble solo' }, Guzki.line(gm)), h('h2', null, 'Lezioa osatuta!'),
      h('div', { class: 'stars' }, '★'.repeat(stars3) + '☆'.repeat(3 - stars3)),
      h('p', null, `Aciertos a la primera: ${st.first}/${ok} · Errores: ${st.miss}`), h('p', { class: 'xp' }, '+' + xp + ' XP'),
      h('button', { class: 'btn primary', onclick: () => o.onExit() }, 'Jarraitu')));
  };
  step();
}

/* ---------- vistas ---------- */
const view = { tab: 'path', level: 'A1', open: null };
const TABS = [['path', '🗺️', 'Ruta'], ['practice', '💪', 'Práctica'], ['exam', '📝', 'Examen'], ['guide', '📚', 'Guía'], ['settings', '⚙️', 'Ajustes']];
function nav() {
  return h('nav', { class: 'nav' }, TABS.map(t => h('button', { class: 'tab' + (view.tab === t[0] ? ' on' : ''), type: 'button', onclick: () => { Snd.stop(); view.tab = t[0]; view.open = null; render(); } }, h('span', { class: 'ti' }, t[1]), h('span', null, t[2]))));
}
function statsBar() {
  const t = S.days[today()] || 0, g = S.set.goal;
  return h('div', { class: 'stats' }, h('span', null, '🔥 ' + S.streak), h('span', null, '⭐ ' + S.xp + ' XP'),
    h('span', { class: 'goal' }, h('i', { style: 'width:' + Math.min(100, Math.round(100 * t / g)) + '%' }), h('em', null, `${Math.min(t, g)}/${g} XP hoy`)));
}
function unitUnlocked(u) {
  if (S.set.unlockAll) return true;
  const list = E.UNITS, i = list.indexOf(u);
  if (i === 0) return true;
  const prev = list[i - 1];
  if (prev.lv !== u.lv) return true; // A2 se abre a quien lo desee: comienza sin bloqueo
  return stars(prev.id, 'test') > 0;
}
function lessonUnlocked(u, li) { if (S.set.unlockAll) return true; if (!unitUnlocked(u)) return false; return li === 0 || stars(u.id, E.LESSONS[li - 1].id) > 0; }

function guzCard() {
  const hm = Guz.homeMood(), wilt = Guz.wilt(), lvl = Guz.level();
  const fig = h('div', { class: 'guz-fig', role: 'button', 'aria-label': 'Acariciar a Guzki', html: Guzki.image(hm.mood, { wilt }) });
  const bub = h('div', { class: 'bubble' }, hm.msg);
  let busy = false;
  fig.addEventListener('click', () => {
    if (busy) return; busy = true;
    const m = ['sorpresa', 'acierto', 'duda'][E.rnd(3)];
    fig.innerHTML = Guzki.image(m, { wilt }); bub.textContent = Guzki.line(m);
    setTimeout(() => { fig.innerHTML = Guzki.image(hm.mood, { wilt }); bub.textContent = hm.msg; busy = false; }, 2200);
  });
  return h('div', { class: 'guz-card' }, fig, h('div', { class: 'guz-side' }, bub,
    h('div', { class: 'hp' }, h('span', null, lvl.icon + ' ' + lvl.name), h('span', { class: 'hpbar' }, h('i', { style: 'width:' + S.guz.hp + '%' })))));
}
function viewPath() {
  const wrap = h('div', { class: 'page' }, statsBar(), guzCard());
  wrap.appendChild(h('div', { class: 'seg' }, ['A1', 'A2', 'B1', 'B2', 'C1'].map(l => h('button', { class: view.level === l ? 'on' : '', type: 'button', onclick: () => { view.level = l; render(); } }, l))));
  const warn = (!Snd.hasEu()) ? h('div', { class: 'warn' }, '⚠️ No he detectado una voz en euskera en este dispositivo. Se usará una voz de respaldo (pronunciación aproximada). Mira Ajustes → Voz.') : null;
  if (warn) wrap.appendChild(warn);
  E.UNITS.filter(u => u.lv === view.level).forEach((u, ui) => {
    const unlocked = unitUnlocked(u);
    const doneN = E.LESSONS.filter(l => stars(u.id, l.id) > 0).length;
    const card = h('div', { class: 'unit' + (unlocked ? '' : ' locked') },
      h('div', { class: 'uh' }, h('span', { class: 'uic' }, unlocked ? u.ic : '🔒'), h('div', { class: 'ut' }, h('b', null, `${u.id.toUpperCase().replace('-', '·')} ${u.t}`), h('small', null, u.es)),
        h('button', { class: 'link', type: 'button', onclick: () => { view.open = u.id; view.tab = 'guide'; render(); } }, '📘 Guía')),
      h('div', { class: 'prog' }, h('i', { style: 'width:' + Math.round(100 * doneN / E.LESSONS.length) + '%' })),
      h('div', { class: 'lessons' }, E.LESSONS.map((l, li) => {
        const un = lessonUnlocked(u, li), s = stars(u.id, l.id);
        return h('button', { class: 'ls' + (s ? ' done' : '') + (un ? '' : ' lock'), type: 'button', disabled: !un, title: l.name, onclick: () => startLesson(u, l.id) },
          h('span', { class: 'lic' }, un ? l.ic : '🔒'), h('span', { class: 'lnm' }, l.name), h('span', { class: 'st' }, s ? '★'.repeat(s) : ''));
      })));
    wrap.appendChild(card);
  });
  return wrap;
}
function startLesson(u, lid) {
  if (lid === 'gram') {
    clear(root);
    root.appendChild(h('div', { class: 'page' }, h('button', { class: 'link', onclick: () => render() }, '← Volver'), h('h2', null, u.ic + ' ' + u.t), h('article', { class: 'note', html: u.g }),
      h('button', { class: 'btn primary', onclick: () => launch(u, lid) }, 'Hasi praktika · Empezar')));
    return;
  }
  launch(u, lid);
}
function launch(u, lid) {
  const items = E.buildLesson(u, lid);
  runLesson(items, { title: u.t, onExit: () => { view.tab = 'path'; view.level = u.lv; render(); }, onRetry: () => launch(u, lid), onDone: (s) => setStars(u.id, lid, s) });
}

function viewPractice() {
  const wrap = h('div', { class: 'page' }, statsBar(), h('h2', null, 'Práctica libre'), h('p', { class: 'hint' }, 'Series ilimitadas generadas al azar para automatizar la gramática.'));
  const go = (items, title) => runLesson(items, { title, onExit: () => render(), onRetry: () => go(items.map(x => x), title), onDone: () => { } });
  const mk = (fn, n) => { const a = []; for (let i = 0; i < n; i++) a.push(fn()); return a; };
  const cards = [
    ['🧠', `Repaso de errores (${S.weak.length})`, 'Vuelve a practicar lo que has fallado', () => S.weak.length ? go(E.shuffle(S.weak.map(w => Object.assign({}, w.it))).slice(0, 14), 'Errores') : alert('¡Aún no tienes errores guardados!')],
    ['🔁', 'Conjugaciones: repaso completo', `${E.tableReviewDeck().length} formas; todas las tablas y las 6 personas, sin repetir`, () => go(E.tableReviewDeck(), 'Conjugaciones · repaso completo')],
    ['🏷️', 'Declinación (casos)', 'gen., dat., loc., all., abl., com., ben.', () => go(mk(() => E.caseItem(), 14), 'Casos')],
    ['🔢', 'Números 1-100', 'Del 1 al 100, ida y vuelta, con audio', () => go(mk(() => (Math.random() < 0.5 ? E.numItem() : E.numRevItem()), 14), 'Zenbakiak')],
    ['⏰', 'La hora', 'Zer ordu da?', () => go(mk(() => E.timeItem(), 12), 'Ordua')],
    ['📅', 'Habitual y futuro: todos los verbos', `${E.habFutureDeck().length} formas; cada verbo una vez por tiempo`, () => go(E.habFutureDeck(), 'Habitual · futuro')],
    ['🎯', 'Finalidad -tzera / -tzeko', `${E.finalReviewDeck().length} formas; ambas estructuras sin repetir`, () => go(E.finalReviewDeck(), 'Finalidad · -tzera / -tzeko')],
    ['👤', 'Genitivo, dativo y comitativo de nombres', 'Mikelen, Aneri, Anarekin…', () => go(mk(() => E.genItem(), 12), 'Izenak')],
    ['🎧', 'Escucha libre A1–C1', 'Diálogos y dictados de todas las unidades', () => {
      const pool = E.UNITS.flatMap(u => E.buildLesson(u, 'listen')); go(E.pick(pool, 12), 'Entzumena'); }],
    ['🎤', 'Pronunciación libre', 'Repite frases de todas las unidades', () => { const pool = E.UNITS.flatMap(u => (u.p || []).map(p => E.mkSay(p))); go(E.pick(pool, 10), 'Mintzamena'); }],
    ['🔤', 'Vocabulario mixto', 'Todas las palabras de A1 a C1', () => { const all = E.UNITS.flatMap(u => u.v || []); go(mk(() => E.mkVocab(all, E.rnd(all.length), ['eu-es', 'es-eu', 'vl'][E.rnd(3)]), 16), 'Hiztegia'); }],
  ];
  cards.forEach(c => wrap.appendChild(h('button', { class: 'card', type: 'button', onclick: c[3] }, h('span', { class: 'cic' }, c[0]), h('span', { class: 'ctx' }, h('b', null, c[1]), h('small', null, c[2])))));
  wrap.appendChild(h('h3', null, 'Tabla concreta'));
  const sel = h('select', { class: 'inp' }, E.TABLES.map(t => h('option', { value: t.id }, t.name)));
  wrap.appendChild(sel);
  wrap.appendChild(h('button', { class: 'btn ghost', onclick: () => go(mk(() => E.tableItem(sel.value), 12), 'Tabla') }, 'Practicar esta tabla'));
  return wrap;
}

function viewExam() {
  const wrap = h('div', { class: 'page' }, statsBar(), h('h2', null, '📝 Simulacro de examen'),
    h('p', { class: 'hint' }, 'A1–C1: sesión sin pistas ni feedback inmediato, con las cinco destrezas: comprensión oral, lectora, gramática/vocabulario, expresión escrita y oral. El resultado es orientativo: el formato y la puntuación oficiales los fija HABE, así que consulta su guía y modelos de examen.'));
  ['A1', 'A2', 'B1', 'B2', 'C1'].forEach(lv => wrap.appendChild(h('button', { class: 'card', type: 'button', onclick: () => startExam(lv) }, h('span', { class: 'cic' }, ({A1:'🌱',A2:'🌿',B1:'🌳',B2:'🏔️',C1:'🌄'})[lv]), h('span', { class: 'ctx' }, h('b', null, 'Simulacro ' + lv), h('small', null, '≈ 45 ejercicios · 20-30 min')))));
  if (S.exams.length) {
    wrap.appendChild(h('h3', null, 'Historial'));
    S.exams.slice(-8).reverse().forEach(e => wrap.appendChild(h('div', { class: 'row' }, h('b', null, e.lv + ' · ' + e.date), h('span', { class: e.pct >= 60 ? 'okw' : 'badw' }, e.pct + ' %'))));
  }
  return wrap;
}
function startExam(lv) {
  const secs = E.buildExam(E.UNITS.filter(u => u.lv === lv));
  const items = secs.flatMap(s => s.items.map(i => Object.assign({}, i, { sec: s.name })));
  runLesson(items, { exam: true, title: 'Simulacro ' + lv, onExit: () => render(), onRetry: () => startExam(lv),
    onFinish: (st) => {
      let ok = 0, n = 0; const rows = secs.map(s => { const r = st.secs[s.name] || { ok: 0, n: 0 }; ok += r.ok; n += r.n; return [s.name, r.n ? Math.round(100 * r.ok / r.n) : 0, r.ok, r.n]; });
      const pct = n ? Math.round(100 * ok / n) : 0;
      S.exams.push({ lv, date: today(), pct }); addXp(30); save();
      clear(root);
      root.appendChild(h('div', { class: 'page' }, h('div', { class: 'center' }, h('div', { class: 'guz-big', html: Guzki.image(pct >= 85 ? 'euforia' : pct >= 60 ? 'acierto' : pct >= 40 ? 'duda' : 'depresivo') }), h('h2', null, `${pct} %`), h('p', null, pct >= 60 ? 'Nivel suficiente según este simulacro. ¡Sigue repasando!' : 'Aún no llegas al 60 %: repasa las secciones más bajas.')),
        rows.map(r => h('div', { class: 'row' }, h('span', null, r[0]), h('b', { class: r[1] >= 60 ? 'okw' : 'badw' }, `${r[2]}/${r[3]} · ${r[1]} %`))),
        h('p', { class: 'hint' }, 'La expresión escrita se corrige solo de forma básica (presencia de elementos clave). Pide a un profesor que revise tus redacciones y práctica la oral con un hablante.'),
        h('button', { class: 'btn primary', onclick: () => render() }, 'Cerrar')));
    } });
}

function viewGuide() {
  const wrap = h('div', { class: 'page' }, statsBar(), h('h2', null, '📚 Guía de gramática A1–C1'));
  ['A1', 'A2', 'B1', 'B2', 'C1'].forEach(lv => {
    wrap.appendChild(h('h3', null, 'Nivel ' + lv));
    E.UNITS.filter(u => u.lv === lv).forEach(u => {
      const det = h('details', { class: 'gd' }, h('summary', null, u.ic + ' ' + u.t + ' — ' + u.es), h('article', { class: 'note', html: u.g }));
      if (view.open === u.id) det.setAttribute('open', '');
      wrap.appendChild(det);
    });
  });
  return wrap;
}

function viewSettings() {
  const wrap = h('div', { class: 'page' }, statsBar(), h('h2', null, '⚙️ Ajustes'));
  const eu = Snd.eu();
  wrap.appendChild(h('h3', null, '🔊 Voz'));
  wrap.appendChild(h('p', { class: 'hint' }, eu ? 'Motor integrado disponible: ' + eu.name + ' (' + eu.lang + '). La voz y su pronunciación dependen del sistema.' : Snd.hasEu() ? 'La app puede solicitar euskera (eu-ES) al motor de voz del dispositivo; instala antes los datos de voz en euskera. La disponibilidad y pronunciación dependen del sistema.' : 'No se detecta una voz eu-ES en este dispositivo. En Android, instala euskera en Ajustes → Sistema → Idiomas → Síntesis de voz. El navegador puede no ofrecer euskera. Esta app integra el control de audio, pero no incluye una voz grabada ni paquetes de voz.'));
  const vs = h('select', { class: 'inp' }, h('option', { value: '' }, 'Automática'), Snd.voices.map(v => h('option', { value: v.voiceURI }, v.name + ' (' + v.lang + ')')));
  vs.value = S.set.voice; vs.addEventListener('change', () => { S.set.voice = vs.value; save(); });
  wrap.appendChild(vs);
  const rate = h('input', { type: 'range', min: '0.5', max: '1.2', step: '0.05', value: String(S.set.rate) });
  rate.addEventListener('input', () => { S.set.rate = parseFloat(rate.value); save(); });
  wrap.appendChild(h('label', { class: 'lbl' }, 'Velocidad de la voz', rate));
  const audioTest = h('p', { class: 'hint', role: 'status' }, 'Prueba pendiente: pulsa el botón y comprueba manualmente que oyes la frase en euskera. La app no puede certificar por sí sola el idioma ni la calidad de la voz.');
  wrap.appendChild(audioTest);
  wrap.appendChild(h('button', { class: 'btn ghost', onclick: async () => { audioTest.textContent = 'Solicitud de reproducción enviada; comprueba si se oye «Kaixo! Euskara ikasten ari naiz.» y si la voz suena en euskera.'; await Snd.speak('Kaixo! Euskara ikasten ari naiz.'); } }, '▶ Probar voz en euskera'));
  wrap.appendChild(h('h3', null, '🎤 Micrófono'));
  const mic = h('input', { type: 'checkbox' }); mic.checked = !!S.set.mic; mic.addEventListener('change', () => { S.set.mic = mic.checked; save(); });
  wrap.appendChild(h('label', { class: 'lbl row' }, 'Usar reconocimiento de voz en pronunciación', mic));
  const mt = h('p', { class: 'hint' }, Rec.supported() ? 'Reconocimiento disponible (idioma eu-ES).' : 'Este navegador no ofrece reconocimiento de voz. Usa Chrome en Android o la versión APK con el plugin de reconocimiento.');
  wrap.appendChild(mt);
  wrap.appendChild(h('button', { class: 'btn ghost', onclick: async () => { try { mt.textContent = 'Di algo en euskera…'; const a = await Rec.listen(); mt.textContent = 'He oído: «' + a[0] + '»'; } catch (e) { mt.textContent = 'Error: ' + (e.message || e); } } }, '🎤 Probar micrófono'));
  wrap.appendChild(h('h3', null, '🎯 Objetivo diario (XP)'));
  const goal = h('select', { class: 'inp' }, [10, 20, 30, 50, 80].map(n => h('option', { value: n }, n + ' XP')));
  goal.value = String(S.set.goal); goal.addEventListener('change', () => { S.set.goal = parseInt(goal.value, 10); save(); render(); });
  wrap.appendChild(goal);
  wrap.appendChild(h('h3', null, '🌻 Guzki · avisos'));
  const rem = h('input', { type: 'checkbox' }); rem.checked = !!S.set.remind;
  rem.addEventListener('change', async () => {
    if (rem.checked) {
      if (!Notif.available()) { rem.checked = false; alert('Los avisos solo funcionan en la app instalada (APK), no en el navegador.'); return; }
      if (!(await Notif.enable())) { rem.checked = false; S.set.remind = false; save(); alert('Permiso de notificaciones denegado. Actívalo en Ajustes de Android → Apps → Euskara → Notificaciones.'); return; }
    }
    S.set.remind = rem.checked; save(); Notif.reschedule();
  });
  wrap.appendChild(h('label', { class: 'lbl row' }, 'Guzki me avisa si no estudio', rem));
  const hr = h('select', { class: 'inp' }, [8, 9, 10, 12, 14, 16, 17, 18, 19, 20, 21, 22].map(n => h('option', { value: n }, 'Aviso a las ' + n + ':00')));
  hr.value = String(S.set.remindHour); hr.addEventListener('change', () => { S.set.remindHour = parseInt(hr.value, 10); save(); Notif.reschedule(); });
  wrap.appendChild(hr);
  wrap.appendChild(h('button', { class: 'btn ghost', onclick: async () => { if (!Notif.available()) { alert('Solo disponible en la app APK.'); return; } if (!(await Notif.enable())) { alert('Falta el permiso de notificaciones.'); return; } alert((await Notif.test()) ? 'Cierra la app: sonará en 5 segundos.' : 'No se pudo programar el aviso.'); } }, '🔔 Probar aviso (5 s)'));
  wrap.appendChild(h('p', { class: 'hint' }, 'Cada día completo sin estudiar le quita salud a Guzki: se pone mustio, se enfada y se marchita. Con cada acierto y lección recupera salud. Salud actual: ' + S.guz.hp + ' %.'));
  const gal = h('details', { class: 'gd' }, h('summary', null, '🌻 Conoce a Guzki (sus 11 caras)'),
    h('div', { class: 'galeria' }, Guzki.LIST.map(x => h('div', { class: 'gcell' }, h('div', { html: Guzki.image(x[0]) }), h('small', null, x[1])))));
  wrap.appendChild(gal);
  wrap.appendChild(h('h3', null, '🔓 Progreso'));
  const ua = h('input', { type: 'checkbox' }); ua.checked = !!S.set.unlockAll; ua.addEventListener('change', () => { S.set.unlockAll = ua.checked; save(); });
  wrap.appendChild(h('label', { class: 'lbl row' }, 'Desbloquear todas las lecciones', ua));
  wrap.appendChild(h('button', { class: 'btn ghost', onclick: () => { const t = JSON.stringify(S); const a = h('a', { href: 'data:application/json;charset=utf-8,' + encodeURIComponent(t), download: 'euskara-progreso.json' }); document.body.appendChild(a); a.click(); a.remove(); } }, '⬇️ Exportar progreso'));
  const f = h('input', { type: 'file', accept: 'application/json' });
  f.addEventListener('change', () => { const r = new FileReader(); r.onload = () => { try { S = Object.assign({}, DEF, JSON.parse(r.result)); fixS(); save(); render(); } catch (e) { alert('Archivo no válido'); } }; if (f.files[0]) r.readAsText(f.files[0]); });
  wrap.appendChild(h('label', { class: 'lbl' }, '⬆️ Importar progreso', f));
  wrap.appendChild(h('button', { class: 'btn danger', onclick: () => { if (confirm('¿Borrar todo el progreso?')) { S = JSON.parse(JSON.stringify(DEF)); save(); render(); } } }, 'Borrar progreso'));
  wrap.appendChild(h('p', { class: 'hint' }, 'eGuzkara · contenido original (A1–C1) inspirado en descriptores del MCER. No es material oficial de HABE y no garantiza el aprobado: úsalo junto con los modelos de examen oficiales.'));
  return wrap;
}

function render() {
  Guz.tick();
  clear(root);
  const v = { path: viewPath, practice: viewPractice, exam: viewExam, guide: viewGuide, settings: viewSettings }[view.tab]();
  root.appendChild(v); root.appendChild(nav());
  try { window.scrollTo(0, 0); } catch (e) { /* noop */ }
}
window.__euskara = { render, S: () => S, runLesson, Ex, Guz, Notif, addDays, dfmt };
render();
Notif.reschedule();
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) navigator.serviceWorker.register('sw.js').catch(() => { /* sin SW */ });
})();
