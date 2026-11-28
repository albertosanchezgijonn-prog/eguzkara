/* ============================================================
   eGuzkara · núcleo lógico (sin DOM, probado con Node)
   ============================================================ */
(function (root) {
'use strict';
const E = {};

/* ---------- utilidades ---------- */
E.rnd = (n) => Math.floor(Math.random() * n);
E.shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = E.rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
E.pick = (a, n) => E.shuffle(a).slice(0, n);
E.uniq = (a) => [...new Set(a)];
E.norm = (s) => String(s).toLowerCase()
  .replace(/ñ/g, '\u0001').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0001/g, 'ñ')
  .replace(/[¿?¡!.,;:"“”«»()\-–—]/g, ' ').replace(/\s+/g, ' ').trim();
E.tokens = (s) => E.norm(s).split(' ').filter(Boolean);
/* respuesta correcta con alternativas separadas por | */
E.matches = (ans, given) => String(ans).split('|').some(a => E.norm(a) === E.norm(given));
E.lev = (a, b) => {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
};
E.sim = (a, b) => { a = E.norm(a); b = E.norm(b); const L = Math.max(a.length, b.length); return L ? 1 - E.lev(a, b) / L : 1; };
/* Evaluación de pronunciación: mejor alternativa del reconocedor */
E.speechScore = (target, alts) => {
  let best = 0, bestAlt = alts[0] || '';
  for (const a of alts) { const s = E.sim(target, a); if (s > best) { best = s; bestAlt = a; } }
  const tt = E.tokens(target), at = E.tokens(bestAlt);
  const words = tt.map(w => at.some(x => x === w || E.sim(x, w) >= 0.8));
  return { score: best, alt: bestAlt, words, ok: best >= 0.72 };
};

/* ---------- numerales ---------- */
const N1 = ['zero', 'bat', 'bi', 'hiru', 'lau', 'bost', 'sei', 'zazpi', 'zortzi', 'bederatzi', 'hamar',
  'hamaika', 'hamabi', 'hamahiru', 'hamalau', 'hamabost', 'hamasei', 'hamazazpi', 'hemezortzi', 'hemeretzi'];
E.numToEu = (n) => {
  if (n < 20) return N1[n];
  if (n === 100) return 'ehun';
  const base = { 20: 'hogei', 40: 'berrogei', 60: 'hirurogei', 80: 'laurogei' };
  const t = Math.floor(n / 20) * 20, r = n - t;
  return r === 0 ? base[t] : base[t] + 'ta ' + N1[r];
};
/* hogei + ta → hogeita ; berrogei + ta → berrogeita (regular) */

/* ---------- hora ---------- */
const HR = ['', 'ordu bata', 'biak', 'hirurak', 'laurak', 'bostak', 'seiak', 'zazpiak', 'zortziak', 'bederatziak', 'hamarrak', 'hamaikak', 'hamabiak'];
E.timeToEu = (h, m) => {
  const H = (x) => HR[((x - 1) % 12) + 1];
  const v = (x) => (((x - 1) % 12) + 1) === 1 ? 'da' : 'dira';
  if (m === 0) return `${H(h)} ${v(h)}`;
  if (m === 15) return `${H(h)} eta laurden ${v(h)}`;
  if (m === 30) return `${H(h)} eta erdi ${v(h)}`;
  if (m === 45) return `${H(h + 1)} laurden gutxi ${v(h + 1)}`;
  return '';
};
E.cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------- declinación (singular determinado y topónimos) ---------- */
const isV = (c) => 'aeiou'.includes(c);
/* sustantivo común con artículo: stem = lema sin artículo */
E.cases = (noun) => {
  const end = noun.slice(-1), a = end === 'a', v = isV(end);
  return {
    abs: a ? noun : noun + 'a',
    gen: noun + (a ? 'ren' : 'aren'),
    dat: noun + (a ? 'ri' : 'ari'),
    loc: noun + (a ? 'n' : v ? 'an' : 'ean'),
    all: noun + (v ? 'ra' : 'era'),
    abl: noun + (v ? 'tik' : 'etik'),
    com: noun + (a ? 'rekin' : 'arekin'),
    ben: noun + (a ? 'rentzat' : 'arentzat'),
  };
};
E.casesFix = E.cases;
/* nombres propios de persona */
E.personCases = (name) => {
  const v = isV(name.slice(-1));
  return { erg: name + (v ? 'k' : 'ek'), dat: name + (v ? 'ri' : 'i'), gen: name + (v ? 'ren' : 'en'), com: name + (v ? 'rekin' : 'ekin'), ben: name + (v ? 'rentzat' : 'entzat') };
};
/* topónimos acabados en vocal */
E.placeCases = (p) => ({ loc: p + 'n', all: p + 'ra', abl: p + 'tik', lgen: p + 'ko' });

const CASE_ES = {
  abs: (n, g) => `${g === 'f' ? 'la' : 'el'} ${n}`,
  gen: (n, g) => `${g === 'f' ? 'de la' : 'del'} ${n}`,
  dat: (n, g) => `${g === 'f' ? 'a la' : 'al'} ${n} (a quien se da algo)`,
  loc: (n, g) => `en ${g === 'f' ? 'la' : 'el'} ${n}`,
  all: (n, g) => `a${g === 'f' ? ' la' : 'l'} ${n} (hacia)`,
  abl: (n, g) => `desde ${g === 'f' ? 'la' : 'el'} ${n}`,
  com: (n, g) => `con ${g === 'f' ? 'la' : 'el'} ${n}`,
  ben: (n, g) => `para ${g === 'f' ? 'la' : 'el'} ${n}`,
};
E.CASE_ES = CASE_ES;
/* [lema vasco, castellano, género] */
/* [lema vasco, castellano, género, animado] */
E.NOUNS = [
  ['etxe', 'casa', 'f', 0], ['kale', 'calle', 'f', 0], ['gela', 'habitación', 'f', 0], ['mahai', 'mesa', 'f', 0], ['eskola', 'escuela', 'f', 0],
  ['ama', 'madre', 'f', 1], ['aita', 'padre', 'm', 1], ['lagun', 'amigo', 'm', 1], ['autobus', 'autobús', 'm', 0], ['tren', 'tren', 'm', 0],
  ['denda', 'tienda', 'f', 0], ['liburu', 'libro', 'm', 0], ['sukalde', 'cocina', 'f', 0], ['mutil', 'chico', 'm', 1], ['neska', 'chica', 'f', 1],
  ['ospitale', 'hospital', 'm', 0], ['parke', 'parque', 'm', 0], ['irakasle', 'profesor', 'm', 1], ['gizon', 'hombre', 'm', 1], ['lantoki', 'lugar de trabajo', 'm', 0],
];
E.caseItem = (kinds) => {
  const [n, es, g, an] = E.NOUNS[E.rnd(E.NOUNS.length)];
  const c = E.cases(n);
  /* con personas no se usan -n/-ra/-tik (se usan -gan/-gana/-gandik) */
  const valid = an ? ['gen', 'dat', 'com', 'ben'] : ['gen', 'loc', 'all', 'abl', 'com', 'ben'];
  let ks = (kinds || valid).filter(x => valid.includes(x));
  if (!ks.length) return E.caseItem(kinds);
  const k = ks[E.rnd(ks.length)];
  const wrong = E.pick(valid.filter(x => x !== k && c[x] !== c[k]), 3).map(x => c[x]);
  return { t: Math.random() < 0.5 ? 'mc' : 'fl', q: `${n} (${es}) → «${CASE_ES[k](es, g)}»`, a: c[k], w: wrong,
    ex: `${n} → ${c[k]}`, tag: 'caso-' + k };
};
E.caseFlItem = (kinds) => { const it = E.caseItem(kinds); it.t = 'fl'; return it; };

/* ---------- tablas de verbos ---------- */
const P = ['ni', 'zu', 'hura', 'gu', 'zuek', 'haiek'];
const PES = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'];
const PN = ['nik', 'zuk', 'hark', 'guk', 'zuek', 'haiek'];
const PD = ['niri', 'zuri', 'hari', 'guri', 'zuei', 'haiei'];
E.P = P; E.PES = PES; E.PN = PN; E.PD = PD;
E.TABLES = [
  { id: 'izan', name: 'izan · presente (ser)', p: P, f: ['naiz', 'zara', 'da', 'gara', 'zarete', 'dira'], ex: ['ikaslea', '', '', '', '', ''] },
  { id: 'izanp', name: 'izan · pasado (era/fue)', p: P, f: ['nintzen', 'zinen', 'zen', 'ginen', 'zineten', 'ziren'] },
  { id: 'egon', name: 'egon · presente (estar)', p: P, f: ['nago', 'zaude', 'dago', 'gaude', 'zaudete', 'daude'] },
  { id: 'egonp', name: 'egon · pasado', p: P, f: ['nengoen', 'zeunden', 'zegoen', 'geunden', 'zeundeten', 'zeuden'] },
  { id: 'ukan', name: 'ukan · presente, 1 objeto (tener/haber)', p: PN, f: ['dut', 'duzu', 'du', 'dugu', 'duzue', 'dute'] },
  { id: 'ukanpl', name: 'ukan · presente, varios objetos', p: PN, f: ['ditut', 'dituzu', 'ditu', 'ditugu', 'dituzue', 'dituzte'] },
  { id: 'ukanp', name: 'ukan · pasado, 1 objeto', p: PN, f: ['nuen', 'zenuen', 'zuen', 'genuen', 'zenuten', 'zuten'] },
  { id: 'ukanppl', name: 'ukan · pasado, varios objetos', p: PN, f: ['nituen', 'zenituen', 'zituen', 'genituen', 'zenituzten', 'zituzten'] },
  { id: 'joan', name: 'joan · presente (ir)', p: P, f: ['noa', 'zoaz', 'doa', 'goaz', 'zoazte', 'doaz'] },
  { id: 'etorri', name: 'etorri · presente (venir)', p: P, f: ['nator', 'zatoz', 'dator', 'gatoz', 'zatozte', 'datoz'] },
  { id: 'jakin', name: 'jakin · presente (saber)', p: PN, f: ['dakit', 'dakizu', 'daki', 'dakigu', 'dakizue', 'dakite'] },
  { id: 'eduki', name: 'eduki · presente (tener)', p: PN, f: ['daukat', 'daukazu', 'dauka', 'daukagu', 'daukazue', 'daukate'] },
  { id: 'gus', name: 'gustatu · 1 cosa (gustar)', p: PD, f: ['zait', 'zaizu', 'zaio', 'zaigu', 'zaizue', 'zaie'] },
  { id: 'gusp', name: 'gustatu · varias cosas (gustan)', p: PD, f: ['zaizkit', 'zaizkizu', 'zaizkio', 'zaizkigu', 'zaizkizue', 'zaizkie'] },
  { id: 'datsg', name: 'dar/decir a alguien · 1 cosa (hark →)', p: ['niri', 'zuri', 'hari', 'guri', 'zuei', 'haiei'], f: ['dit', 'dizu', 'dio', 'digu', 'dizue', 'die'] },
  { id: 'datpl', name: 'dar/decir a alguien · varias cosas (hark →)', p: PD, f: ['dizkit', 'dizkizu', 'dizkio', 'dizkigu', 'dizkizue', 'dizkie'] },
  { id: 'datnik', name: 'dar/decir (nik/zuk/hark… → a él/ella)', p: PN, f: ['diot', 'diozu', 'dio', 'diogu', 'diozue', 'diote'] },
  { id: 'dezake', name: 'poder · -ke (hacer algo)', p: PN, f: ['dezaket', 'dezakezu', 'dezake', 'dezakegu', 'dezakezue', 'dezakete'] },
  { id: 'lakoizan', name: 'izan → -(e)la (que es/son…)', p: P, f: ['naizela', 'zarela', 'dela', 'garela', 'zaretela', 'direla'], from: ['naiz', 'zara', 'da', 'gara', 'zarete', 'dira'] },
  { id: 'lakoukan', name: 'ukan → -(e)la (que tiene…)', p: PN, f: ['dudala', 'duzula', 'duela', 'dugula', 'duzuela', 'dutela'], from: ['dut', 'duzu', 'du', 'dugu', 'duzue', 'dute'] },
  { id: 'lakoegon', name: 'egon → -(e)la (que está…)', p: P, f: ['nagoela', 'zaudela', 'dagoela', 'gaudela', 'zaudetela', 'daudela'], from: ['nago', 'zaude', 'dago', 'gaude', 'zaudete', 'daude'] },
  { id: 'eraman', name: 'eraman · presente (llevar)', p: PN, f: ['daramat', 'daramazu', 'darama', 'daramagu', 'daramazue', 'daramate'] },
  { id: 'ekarri', name: 'ekarri · presente (traer)', p: PN, f: ['dakart', 'dakarzu', 'dakar', 'dakargu', 'dakarzue', 'dakarte'] },
  { id: 'ibili', name: 'ibili · presente (andar)', p: P, f: ['nabil', 'zabiltza', 'dabil', 'gabiltza', 'zabiltzate', 'dabiltza'] },
];
// Ronda exhaustiva: una pregunta por celda, sin reemplazo ni duplicados.
// Recorre todas las tablas disponibles y las seis personas de cada paradigma.
E.tableReviewDeck = () => E.shuffle(E.TABLES.flatMap(T => T.f.map((form, i) => ({
  t: 'fl', q: `${T.name} · ${T.p[i]} (${PES[i]}): ___`, a: form,
  ex: `${T.p[i]} → ${form}`, tag: `tab-${T.id}-p${i + 1}`
}))));

E.tableItem = (id) => {
  const T = id ? E.TABLES.find(t => t.id === id) : E.TABLES[E.rnd(E.TABLES.length)];
  const i = E.rnd(6);
  if (T.from) {
    const w = E.pick(T.f.filter((_, k) => k !== i), 3);
    return { t: 'fl', q: `${T.name}: «${T.from[i]}» → ___`, a: T.f[i], w, ex: `${T.from[i]} → ${T.f[i]}`, tag: 'tab-' + T.id };
  }
  if (Math.random() < 0.5) {
    return { t: 'fl', q: `${T.p[i]} + ${T.name}: ___`, a: T.f[i], w: E.pick(T.f.filter((_, k) => k !== i), 3), ex: `${T.p[i]} → ${T.f[i]}`, tag: 'tab-' + T.id };
  }
  const prons = T.p.filter((_, k) => T.f[k] !== T.f[i]);
  const sameForms = T.p.filter((_, k) => T.f[k] === T.f[i]);
  return { t: 'mc', q: `${T.name}: ¿a qué persona corresponde «${T.f[i]}»?`, a: T.p[i], w: E.pick(prons.filter(x => !sameForms.includes(x)), 3), ex: `${T.f[i]} ⇒ ${T.p[i]}`, tag: 'tab-' + T.id };
};

/* ---------- números y horas ---------- */
E.numItem = () => {
  const n = 1 + E.rnd(100), w = E.numToEu(n);
  if (Math.random() < 0.5) {
    const wr = E.uniq([E.numToEu(Math.max(1, n + 1)), E.numToEu(Math.max(1, n - 1)), E.numToEu(Math.min(100, n + 10)), E.numToEu(Math.max(1, n - 10)), E.numToEu(((n * 3) % 100) + 1)]).filter(x => x !== w);
    return { t: 'mc', q: `¿Cómo se dice ${n} en euskera?`, a: w, w: E.pick(wr, 3), tag: 'num' };
  }
  return { t: 'fl', q: `Escribe en euskera: ${n}`, a: w, ex: w, tag: 'num' };
};
E.numRevItem = () => {
  const n = 1 + E.rnd(100), w = E.numToEu(n);
  const wr = E.uniq([n + 1, n - 1, n + 10, n - 10, ((n * 3) % 100) + 1].filter(x => x >= 1 && x <= 100 && x !== n));
  return { t: 'mc', q: `¿Qué número es «${w}»?`, a: String(n), w: E.pick(wr, 3).map(String), aud: w, tag: 'num' };
};
E.timeItem = () => {
  const h = 1 + E.rnd(12), m = [0, 15, 30, 45][E.rnd(4)];
  const text = E.cap(E.timeToEu(h, m));
  const dig = `${h}:${String(m).padStart(2, '0')}`;
  const wrongs = [];
  while (wrongs.length < 3) {
    const hh = 1 + E.rnd(12), mm = [0, 15, 30, 45][E.rnd(4)];
    const d = `${hh}:${String(mm).padStart(2, '0')}`;
    if (d !== dig && !wrongs.includes(d)) wrongs.push(d);
  }
  if (Math.random() < 0.5) return { t: 'mc', q: `Zer ordu da? → «${text}»`, a: dig, w: wrongs, aud: text, tag: 'ordua' };
  const eu = [E.timeToEu(h, m)];
  const ws = E.tokens(eu[0]);
  return { t: 'tr', es: `Son las ${dig} (formato 12 h)`, eu: eu[0], bank: E.uniq(ws.concat(E.pick(['eta', 'laurden', 'erdi', 'gutxi', 'dira', 'da', 'zazpiak', 'bostak'], 2))), tag: 'ordua' };
};

/* ---------- participio → -tzen / -ko ---------- */
E.VERBS = [
  // participio, habitual, futuro, es
  ['egin', 'egiten', 'egingo', 'hacer'], ['jan', 'jaten', 'jango', 'comer'], ['edan', 'edaten', 'edango', 'beber'],
  ['ikusi', 'ikusten', 'ikusiko', 'ver'], ['ikasi', 'ikasten', 'ikasiko', 'estudiar/aprender'], ['irakurri', 'irakurtzen', 'irakurriko', 'leer'],
  ['idatzi', 'idazten', 'idatziko', 'escribir'], ['esan', 'esaten', 'esango', 'decir'], ['eman', 'ematen', 'emango', 'dar'],
  ['joan', 'joaten', 'joango', 'ir'], ['etorri', 'etortzen', 'etorriko', 'venir'], ['erosi', 'erosten', 'erosiko', 'comprar'],
  ['hartu', 'hartzen', 'hartuko', 'tomar/coger'], ['sartu', 'sartzen', 'sartuko', 'entrar/meter'], ['jaiki', 'jaikitzen', 'jaikiko', 'levantarse'],
  ['ibili', 'ibiltzen', 'ibiliko', 'andar'], ['entzun', 'entzuten', 'entzungo', 'oír/escuchar'], ['gosaldu', 'gosaltzen', 'gosalduko', 'desayunar'],
  ['bazkaldu', 'bazkaltzen', 'bazkalduko', 'comer (mediodía)'], ['afaldu', 'afaltzen', 'afalduko', 'cenar'], ['ireki', 'irekitzen', 'irekiko', 'abrir'],
  ['itxi', 'ixten', 'itxiko', 'cerrar'], ['lagundu', 'laguntzen', 'lagunduko', 'ayudar'], ['jolastu', 'jolasten', 'jolastuko', 'jugar'],
  ['izan', 'izaten', 'izango', 'ser/estar'], ['egon', 'egoten', 'egongo', 'estar/quedarse'], ['ordaindu', 'ordaintzen', 'ordainduko', 'pagar'],
  ['erabili', 'erabiltzen', 'erabiliko', 'usar'], ['prestatu', 'prestatzen', 'prestatuko', 'preparar'], ['kantatu', 'kantatzen', 'kantatuko', 'cantar'],
];
E.habItem = () => {
  const v = E.VERBS[E.rnd(E.VERBS.length)];
  const w = E.pick(E.VERBS.filter(x => x !== v).map(x => x[1]), 3);
  return Math.random() < 0.5 ? { t: 'mc', q: `${v[0]} (${v[3]}) → forma habitual -tzen/-ten`, a: v[1], w, tag: 'hab' }
    : { t: 'fl', q: `${v[0]} (${v[3]}) → forma habitual: ___`, a: v[1], w, tag: 'hab' };
};
E.futItem = () => {
  const v = E.VERBS[E.rnd(E.VERBS.length)];
  const w = E.pick(E.VERBS.filter(x => x !== v).map(x => x[2]), 3);
  return Math.random() < 0.5 ? { t: 'mc', q: `${v[0]} (${v[3]}) → futuro -ko/-go`, a: v[2], w, tag: 'fut' }
    : { t: 'fl', q: `${v[0]} (${v[3]}) → futuro: ___`, a: v[2], w, tag: 'fut' };
};
// Series completas y equilibradas: cada verbo aparece una vez por forma objetivo.
E.habFutureDeck = () => E.shuffle(E.VERBS.flatMap(v => [
  { t: 'fl', q: `${v[0]} (${v[3]}) → habitual -tzen/-ten: ___`, a: v[1], tag: 'hab-' + v[0] },
  { t: 'fl', q: `${v[0]} (${v[3]}) → futuro -ko/-go: ___`, a: v[2], tag: 'fut-' + v[0] },
]));

E.finalItem = () => { // -tzera / -tzeko
  const v = E.VERBS[E.rnd(E.VERBS.length)];
  const kind = Math.random() < 0.5 ? ['tzera', 'era', 'ir a ... (finalidad)'] : ['tzeko', 'eko', 'para ... (finalidad)'];
  const hab = v[1], stem = hab.replace(/n$/, ''), a = stem + (kind[0] === 'tzera' ? 'ra' : 'ko');
  return { t: 'fl', q: `${v[0]} (${v[3]}) + «${kind[2]}» → ___`, a, w: [], ex: `${hab} → ${a}`, tag: 'xede' };
};

E.finalReviewDeck = () => E.shuffle(E.VERBS.flatMap(v => {
  const stem = v[1].replace(/n$/, '');
  return [
    { t: 'fl', q: `${v[0]} (${v[3]}) → «ir a …» (-tzera): ___`, a: stem + 'ra', ex: `${v[1]} → ${stem}ra`, tag: 'xede-tzera-' + v[0] },
    { t: 'fl', q: `${v[0]} (${v[3]}) → «para …» (-tzeko): ___`, a: stem + 'ko', ex: `${v[1]} → ${stem}ko`, tag: 'xede-tzeko-' + v[0] },
  ];
}));

/* ---------- genitivo de nombres ---------- */
E.NAMES = ['Mikel', 'Ane', 'Jon', 'Miren', 'Amaia', 'Iker', 'Leire', 'Gorka', 'Nerea', 'Unai', 'Itziar', 'Aitor'];
E.genItem = () => {
  const n = E.NAMES[E.rnd(E.NAMES.length)], pc = E.personCases(n);
  const things = [['etxea', 'la casa'], ['liburua', 'el libro'], ['ama', 'la madre'], ['gela', 'la habitación'], ['lagunak', 'los amigos']];
  const th = things[E.rnd(things.length)];
  const k = ['gen', 'com', 'ben', 'dat'][E.rnd(4)];
  const sentences = { gen: [`${pc.gen} ${th[0]}`, `${th[1]} de ${n}`], com: [pc.com, `con ${n}`], ben: [pc.ben, `para ${n}`], dat: [pc.dat, `a ${n} (dativo)`] };
  const a = sentences[k][0];
  const wr = E.uniq(Object.values(pc).map(x => k === 'gen' ? x + ' ' + th[0] : x)).filter(x => x !== a);
  return { t: Math.random() < 0.5 ? 'mc' : 'fl', q: `«${sentences[k][1]}» → ${n}…`, a, w: E.pick(wr, 3), tag: 'izen-' + k };
};

/* registro de generadores usables en los datos de cada unidad */
E.GEN = {
  tbl: (id) => () => E.tableItem(id), case: (kinds) => () => E.caseItem(kinds), caseFl: (kinds) => () => E.caseFlItem(kinds),
  num: () => E.numItem(), numRev: () => E.numRevItem(), time: () => E.timeItem(), hab: () => E.habItem(), fut: () => E.futItem(),
  fin: () => E.finalItem(), gen: () => E.genItem(),
};

/* ---------- construcción de ejercicios a partir de datos ---------- */
const fix = (it) => it;
/* hueco automático: oculta una palabra de una frase y ofrece 3 distractores de otras frases de la unidad */
E.mkCloze = (p, allPhrases) => {
  const clean = (w) => w.replace(/[¿?¡!.,;:«»"()]/g, '');
  const words = p[0].split(' ');
  const cand = words.map((w, i) => [clean(w), i]).filter(x => x[0].length >= 4);
  if (!cand.length) return null;
  const [ans, idx] = cand[E.rnd(cand.length)];
  const shown = words.map((w, i) => (i === idx ? w.replace(ans, '___') : w)).join(' ');
  const seen = new Set([E.norm(ans)]); const pool = [];
  allPhrases.filter(q => q !== p).forEach(q => q[0].split(' ').forEach(w => { const c = clean(w); const k = E.norm(c); if (c.length >= 3 && !seen.has(k)) { seen.add(k); pool.push(c); } }));
  if (pool.length < 3) return null;
  const opts = E.shuffle([ans].concat(E.pick(pool, 3)));
  return { t: 'fl', q: shown + '  (' + p[1] + ')', a: ans, opts, w: opts, tag: 'cloze' };
};
E.mkTr = (p, allPhrases) => {
  const bank = E.tokens(p[0]);
  const others = E.uniq(allPhrases.filter(q => q !== p).flatMap(q => E.tokens(q[0]))).filter(x => !bank.includes(x));
  return { t: 'tr', es: p[1], eu: p[0], bank: E.shuffle(bank.concat(E.pick(others, Math.min(3, others.length)))), aud: p[0] };
};
E.mkLs = (p, allPhrases) => ({ t: 'ls', eu: p[0], a: p[1], w: E.pick(allPhrases.filter(q => q[1] !== p[1]).map(q => q[1]), 3) });
E.mkDict = (p, allPhrases, typed) => {
  const bank = E.tokens(p[0]);
  const others = E.uniq(allPhrases.filter(q => q !== p).flatMap(q => E.tokens(q[0]))).filter(x => !bank.includes(x));
  return { t: 'dict', eu: p[0], es: p[1], typed: !!typed, bank: E.shuffle(bank.concat(E.pick(others, Math.min(2, others.length)))) };
};
E.mkSay = (p) => ({ t: 'say', eu: p[0], es: p[1] });
E.mkVocab = (vv, i, mode) => {
  const v = vv[i], others = vv.filter((_, k) => k !== i);
  if (mode === 'eu-es') return { t: 'mc', q: `¿Qué significa «${v[0]}»?`, a: v[1], w: E.pick(others.map(x => x[1]), 3), aud: v[0], tag: 'vocab' };
  if (mode === 'es-eu') return { t: 'mc', q: `¿Cómo se dice «${v[1]}» en euskera?`, a: v[0], w: E.pick(others.map(x => x[0]), 3), tag: 'vocab' };
  return { t: 'vl', eu: v[0], es: v[1], a: v[0], w: E.pick(others.map(x => x[0]), 3) };
};
E.mkMatch = (vv) => { const s = E.pick(vv, Math.min(5, vv.length)); return { t: 'mt', pairs: s }; };
E.mkCmp = (d, qi, audio) => { const q = d.qs[qi]; return { t: 'cmp', title: d.title, lines: d.lines, q: q[0], a: q[1], w: q[2], audio }; };

/* Genera la reserva de ejercicios de una unidad */
E.buildPools = (u) => {
  const P = u.p || [], V = u.v || [];
  const gen = (u.gen || []).map(g => (typeof g === 'function' ? g : typeof g === 'string' ? (() => E.GEN[g]()) : E.GEN[g[0]](g[1])));
  const mkG = (n) => { const out = []; if (!gen.length) return out; for (let i = 0; i < n; i++) out.push(gen[i % gen.length]()); return out; };
  const gram = () => E.shuffle((u.x || []).slice()).concat(mkG(14)).concat(gen.length ? [] : E.pick(P.map(p => E.mkCloze(p, P)).filter(Boolean), 6));
  const vocab = () => {
    const out = [E.mkMatch(V), E.mkMatch(V)];
    V.forEach((_, i) => { out.push(E.mkVocab(V, i, 'eu-es')); out.push(E.mkVocab(V, i, 'es-eu')); out.push(E.mkVocab(V, i, 'vl')); });
    return out;
  };
  const phrases = () => P.map(p => E.mkTr(p, P)).concat(P.map(p => E.mkLs(p, P)));
  const listen = () => {
    const out = [];
    (u.d || []).forEach(d => d.qs.forEach((_, qi) => out.push(E.mkCmp(d, qi, true))));
    P.forEach(p => out.push(E.mkDict(p, P, u.lv === 'A2')));
    P.slice(0, 4).forEach(p => out.push(E.mkLs(p, P)));
    return out;
  };
  const read = () => {
    const out = [];
    (u.d || []).forEach(d => d.qs.forEach((_, qi) => out.push(E.mkCmp(d, qi, false))));
    (u.w || []).forEach(w => out.push(Object.assign({ t: 'wr' }, w)));
    return out;
  };
  const speak = () => P.map(p => E.mkSay(p)).concat(V.slice(0, 4).map((_, i) => ({ t: 'say', eu: V[i][0], es: V[i][1] })));
  return { gram, vocab, phrases, listen, read, speak };
};

E.LESSONS = [
  { id: 'gram', name: 'Gramática', ic: '📘', n: 12 },
  { id: 'vocab', name: 'Vocabulario', ic: '🔤', n: 12 },
  { id: 'phrases', name: 'Frases', ic: '🧩', n: 10 },
  { id: 'listen', name: 'Escucha y dictado', ic: '🎧', n: 10 },
  { id: 'read', name: 'Lectura y escritura', ic: '📖', n: 8 },
  { id: 'speak', name: 'Pronunciación', ic: '🎤', n: 8 },
  { id: 'test', name: 'Test de la unidad', ic: '🏆', n: 16 },
];
E.buildLesson = (u, lessonId, size) => {
  const pools = E.buildPools(u);
  const L = E.LESSONS.find(l => l.id === lessonId);
  const n = size || L.n;
  let items;
  if (lessonId === 'test') {
    items = [].concat(E.pick(pools.gram(), 5), E.pick(pools.vocab().filter(x => x.t !== 'mt'), 2), E.pick(pools.phrases(), 3), E.pick(pools.listen(), 3), E.pick(pools.speak(), 1), E.pick(pools.read().filter(x => x.t === 'cmp'), 2));
    items = E.shuffle(items);
  } else if (lessonId === 'gram') {
    items = E.pick(pools.gram(), n);
  } else if (lessonId === 'listen' || lessonId === 'read') {
    const all = pools[lessonId]();
    const cmp = all.filter(x => x.t === 'cmp'), wr = all.filter(x => x.t === 'wr'), rest = all.filter(x => x.t !== 'cmp' && x.t !== 'wr');
    items = [].concat(cmp, E.pick(rest, Math.max(0, n - cmp.length - wr.length)), E.pick(wr, 1)).slice(0, n + 2);
    if (lessonId === 'listen') items = E.shuffle(items);
  } else {
    items = E.pick(pools[lessonId](), n);
  }
  return items.filter(Boolean);
};

/* ---------- examen simulacro ---------- */
E.buildExam = (units) => {
  const sections = [];
  const pools = units.map(u => ({ u, p: E.buildPools(u) }));
  const flat = (key) => pools.flatMap(x => x.p[key]());
  const cmpL = E.pick(flat('listen').filter(x => x.t === 'cmp'), 8).concat(E.pick(flat('listen').filter(x => x.t === 'ls'), 4));
  const cmpR = E.pick(flat('read').filter(x => x.t === 'cmp'), 8);
  const gramQ = E.pick(flat('gram').filter(x => x.t === 'mc' || x.t === 'fl'), 20);
  const wr = E.pick(flat('read').filter(x => x.t === 'wr'), 2);
  const say = E.pick(flat('speak'), 4);
  return [
    { id: 'ent', name: 'Entzumena · Comprensión oral', items: cmpL },
    { id: 'irak', name: 'Irakurmena · Comprensión lectora', items: cmpR },
    { id: 'gram', name: 'Gramatika eta hiztegia · Gramática y vocabulario', items: gramQ },
    { id: 'idaz', name: 'Idazmena · Expresión escrita', items: wr },
    { id: 'mint', name: 'Mintzamena · Expresión oral', items: say },
  ].filter(s => s.items.length);
};

/* constructores de ejercicios para los ficheros de contenido */
E.mc = (q, a, w, ex) => ({ t: 'mc', q, a, w, ex });
E.fl = (q, a, opts, ex) => ({ t: 'fl', q, a, opts: opts || null, w: opts || [], ex });
E.wr = (prompt, req, model) => ({ prompt, req, model });
/* ayudantes para escribir contenido de forma compacta */
E.vocabList = (s) => s.trim().split('\n').map(l => l.split('=').map(t => t.trim()));
E.phraseList = (s) => s.trim().split('\n').map(l => l.split('|').map(t => t.trim()));
E.dialog = (title, text, qs) => ({ title, lines: text.trim().split('\n').map(l => { const i = l.indexOf(':'); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }), qs });

E.UNITS = [];
E.U = (u) => { E.UNITS.push(u); };

root.E = E;
if (typeof module !== 'undefined') module.exports = E;
})(typeof window !== 'undefined' ? window : globalThis);
