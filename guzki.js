/* ============================================================
   Guzki · mascota de EGUZKARA
   - Dibujo SVG por capas (pétalos, cara, ojos, cejas, boca, brazos,
     piernas/botas, mochila, camiseta) con 11 estados de ánimo.
   - Frases por estado y textos de los avisos.
   Sin dependencias ni DOM: devuelve cadenas SVG.
   ============================================================ */
(function (root) {
'use strict';

const C = { green: '#166534', green2: '#22C55E', gold: '#FBBF24', face: '#FCD34D', cream: '#FEF7E8',
  boot: '#8B5E34', bootD: '#5b3a1e', shade: '#D4A373', ink: '#3b2410', olive: '#8a8a22', oliveD: '#5f5f14',
  mouth: '#7f1d1d', tongue: '#f87171', red: '#ef4444' };
const hex = (c) => [1, 3, 5].map(i => parseInt(c.substr(i, 2), 16));
const mix = (a, b, t) => { const A = hex(a), B = hex(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
const f1 = (n) => Math.round(n * 10) / 10;

/* ---------- piezas ---------- */
function petalPath(cx, cy, R, r, n, rot) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const a = rot + (Math.PI * 2 * i) / (n * 2);
    const rad = i % 2 === 0 ? R * (0.92 + 0.08 * ((i * 5) % 3) / 2) : r;
    pts.push(f1(cx + rad * Math.cos(a)) + ',' + f1(cy + rad * Math.sin(a)));
  }
  return 'M' + pts.join('L') + 'Z';
}
const lauburu = (cx, cy, s, col, sw) => `<g transform="translate(${cx} ${cy}) scale(${s})" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round">` +
  [0, 90, 180, 270].map(a => `<path transform="rotate(${a})" d="M0 0C0 -9 9 -9 9 -3"/>`).join('') + '</g>';
const star = (cx, cy, r, fill) => {
  const p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p.push(f1(cx + rr * Math.cos(a)) + ',' + f1(cy + rr * Math.sin(a))); }
  return `<polygon points="${p.join(' ')}" fill="${fill}" stroke="#B45309" stroke-width="1.5" stroke-linejoin="round"/>`;
};
const spark = (cx, cy, r, col, delay) => `<g class="g-sp" style="animation-delay:${delay || 0}s"><path d="M${cx} ${cy - r}L${cx + r * 0.25} ${cy - r * 0.25}L${cx + r} ${cy}L${cx + r * 0.25} ${cy + r * 0.25}L${cx} ${cy + r}L${cx - r * 0.25} ${cy + r * 0.25}L${cx - r} ${cy}L${cx - r * 0.25} ${cy - r * 0.25}Z" fill="${col}"/></g>`;

function eye(cx, cy, kind, s) {
  const white = (rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
  const pupil = (dx, dy, rx, ry) => `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="${rx}" ry="${ry}" fill="${C.ink}"/><circle cx="${cx + dx - 2.5}" cy="${cy + dy - 3.5}" r="2.6" fill="#fff"/>`;
  const lid = (yo, yi) => {
    const ox = cx + s * 14, ix = cx - s * 14;
    return `<path d="M${ox} ${cy - 18}L${ix} ${cy - 18}L${ix} ${cy + yi}L${ox} ${cy + yo}Z" fill="${C.faceNow}"/>` +
      `<path d="M${ox} ${cy + yo}L${ix} ${cy + yi}" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>`;
  };
  switch (kind) {
    case 'big': return white(12, 14.5) + pupil(0, 1, 8, 10);
    case 'wide': return white(13, 16) + pupil(0, 0, 4.5, 5.5);
    case 'side': return white(11, 13) + pupil(4, -3, 6.5, 8);
    case 'arc': return `<path d="M${cx - 10} ${cy + 4}Q${cx} ${cy - 10} ${cx + 10} ${cy + 4}" fill="none" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round"/>`;
    case 'half': return white(11, 13) + pupil(0, 3, 7, 8) + lid(-2, -2);
    case 'angry': return white(11, 13) + pupil(0, 3, 7, 8) + lid(-10, 2);
    case 'sad': return white(11, 13) + pupil(0, 4, 7, 8) + lid(2, -9);
    case 'squint': return white(11, 13) + pupil(3, 3, 6, 7) + lid(-7, -1);
    default: return white(11, 13) + pupil(0, 1, 7, 9);
  }
}
function brows(kind) {
  if (!kind) return '';
  const P = (d) => `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="4.5" stroke-linecap="round"/>`;
  switch (kind) {
    case 'up': return P('M71 66Q82 58 93 66') + P('M107 66Q118 58 129 66');
    case 'one': return P('M71 72H93') + P('M107 63Q118 53 129 63');
    case 'angry': return P('M68 60L94 72') + P('M132 60L106 72');
    case 'sad': return P('M70 74L94 63') + P('M130 74L106 63');
    case 'mild': return P('M70 66L94 70') + P('M130 66L106 70');
    default: return P('M72 69H92') + P('M108 69H128');
  }
}
function mouth(kind) {
  const L = (d) => `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
  const F = (d) => `<path d="${d}" fill="${C.mouth}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>`;
  switch (kind) {
    case 'smile': return L('M88 112Q100 124 112 112');
    case 'bigsmile': return F('M82 108Q100 142 118 108Z') + `<ellipse cx="100" cy="126" rx="8" ry="4.5" fill="${C.tongue}"/>`;
    case 'huge': return F('M77 103Q100 152 123 103Z') + `<ellipse cx="100" cy="130" rx="11" ry="6" fill="${C.tongue}"/>`;
    case 'o': return `<ellipse cx="100" cy="119" rx="6.5" ry="8.5" fill="${C.mouth}" stroke="${C.ink}" stroke-width="3"/>`;
    case 'wavy': return L('M86 119q7 -7 14 0t14 0');
    case 'frown': return L('M88 124Q100 109 112 124');
    case 'flat': return L('M90 118H110');
    case 'smirk': return L('M88 119Q103 124 113 108');
    case 'grit': return F('M84 125Q100 106 116 125Z') + `<path d="M90 118Q100 112 110 118L108 122Q100 117 92 122Z" fill="#fff"/>`;
    default: return L('M88 112Q100 124 112 112');
  }
}

/* ---------- estados de ánimo ---------- */
/* arms: [cx,cy,hx,hy] (brazo izquierdo / derecho). El hombro es fijo. */
const MOODS = {
  normal:     { eyes: 'open',   brow: null,    mouth: 'smile',    cheeks: .35, blink: 1, arms: [[48, 176, 48, 198], [152, 176, 152, 198]] },
  acierto:    { eyes: 'big',    brow: 'up',    mouth: 'bigsmile', cheeks: .45, blink: 1, arms: [[36, 156, 44, 128], [164, 156, 156, 128]], fist: 1 },
  racha:      { eyes: 'arc',    brow: null,    mouth: 'bigsmile', cheeks: .5,  arms: [[48, 176, 48, 198], [166, 146, 156, 114]], fist: 1 },
  bien:       { eyes: 'arc',    brow: null,    mouth: 'smile',    cheeks: .4,  arms: [[48, 176, 48, 198], [162, 164, 158, 140]], thumb: 'R' },
  duda:       { eyes: 'side',   brow: 'one',   mouth: 'wavy',     cheeks: .2,  blink: 1, arms: [[76, 184, 108, 176], [136, 172, 116, 142]] },
  sorpresa:   { eyes: 'wide',   brow: 'up',    mouth: 'o',        cheeks: .2,  arms: [[40, 168, 38, 144], [160, 168, 162, 144]] },
  depresivo:  { eyes: 'sad',    brow: 'sad',   mouth: 'frown',    cheeks: 0,   arms: [[58, 184, 56, 206], [142, 184, 144, 206]] },
  toxico:     { eyes: 'squint', brow: 'mild',  mouth: 'smirk',    cheeks: .15, arms: [[84, 186, 114, 172], [116, 186, 86, 172]] },
  impaciente: { eyes: 'half',   brow: 'flat',  mouth: 'flat',     cheeks: .1,  arms: [[40, 170, 74, 186], [160, 170, 126, 186]] },
  enfadado:   { eyes: 'angry',  brow: 'angry', mouth: 'grit',     cheeks: .6,  red: 1, arms: [[44, 182, 56, 204], [156, 182, 144, 204]], fist: 1 },
  euforia:    { eyes: 'arc',    brow: null,    mouth: 'huge',     cheeks: .6,  arms: [[66, 190, 88, 178], [134, 190, 112, 178]] },
};

function extras(mood) {
  switch (mood) {
    case 'acierto': return '<g stroke-linecap="round" stroke-width="4" fill="none"><path d="M172 34L184 24" stroke="#22C55E"/><path d="M180 50L194 48" stroke="#FBBF24"/><path d="M164 22L166 8" stroke="#F97316"/><path d="M28 34L16 24" stroke="#FBBF24"/><path d="M20 50L6 48" stroke="#22C55E"/></g>';
    case 'racha': return spark(172, 36, 11, '#F97316', 0) + spark(26, 40, 8, '#FBBF24', .4) + spark(186, 80, 6, '#22C55E', .8);
    case 'bien': return '<g class="g-sp">' + star(168, 34, 14, '#FBBF24') + '</g>';
    case 'duda': return `<text x="166" y="48" font-family="system-ui,Arial,sans-serif" font-size="40" font-weight="800" fill="${C.green2}" stroke="${C.green}" stroke-width="1.5">?</text>`;
    case 'sorpresa': return '<g stroke="#ef4444" stroke-width="4.5" stroke-linecap="round" fill="none"><path d="M168 8L172 28"/><path d="M184 16L178 32"/><path d="M154 14L160 30"/></g>';
    case 'toxico': return `<g class="g-mark" stroke="${C.red}" stroke-width="4" stroke-linecap="round" fill="none"><path d="M166 24Q176 20 182 28"/><path d="M168 34Q178 30 184 38"/><path d="M178 14L174 44"/></g>`;
    case 'impaciente': return `<g class="g-mark" stroke="${C.red}" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M136 208Q142 214 136 220"/><path d="M142 204Q150 214 142 224"/><path d="M148 200Q158 214 148 228"/></g>`;
    case 'enfadado': return `<g class="g-mark" stroke="${C.red}" stroke-width="4.5" stroke-linecap="round" fill="none"><path d="M164 22Q174 18 180 26"/><path d="M164 34Q174 30 180 38"/><path d="M176 14L172 44"/></g><g class="g-steam" fill="#fff" stroke="#cbd5e1" stroke-width="2"><circle cx="22" cy="46" r="7"/><circle cx="12" cy="38" r="5"/></g>`;
    case 'euforia': return spark(24, 30, 10, '#FBBF24', 0) + spark(178, 26, 12, '#F97316', .3) + spark(14, 120, 7, '#22C55E', .6) + spark(190, 122, 8, '#FBBF24', .9) + spark(100, -2, 7, '#FBBF24', .5);
    default: return '';
  }
}

/* ---------- ensamblado ---------- */
function svg(mood, o) {
  o = o || {};
  const m = MOODS[mood] || MOODS.normal; mood = MOODS[mood] ? mood : 'normal';
  const w = mood === 'depresivo' ? Math.max(o.wilt || 0, 0.85) : Math.min(1, Math.max(0, o.wilt || 0));
  const pBack = mix('#F59E0B', '#9a7d2c', w), pFront = mix(C.gold, '#b99f45', w), face = mix(C.face, '#d7c46e', w), rim = mix('#E8A317', '#9a8a3c', w);
  C.faceNow = face;
  const wt = w > 0 ? ` transform="translate(0 ${f1(w * 18)}) translate(100 92) scale(1 ${f1(1 - w * 0.3)}) translate(-100 -92)"` : '';
  const arm = (cls, sx, sy, a) => `<path class="${cls}" d="M${sx} ${sy}Q${a[0]} ${a[1]} ${a[2]} ${a[3]}" fill="none" stroke="${C.oliveD}" stroke-width="14" stroke-linecap="round"/>` +
    `<path class="${cls}" d="M${sx} ${sy}Q${a[0]} ${a[1]} ${a[2]} ${a[3]}" fill="none" stroke="${C.olive}" stroke-width="9.5" stroke-linecap="round"/>`;
  const hand = (cls, sx, sy, a, thumb) => `<g class="${cls}" style="transform-origin:${sx}px ${sy}px"><circle cx="${a[2]}" cy="${a[3]}" r="${m.fist ? 9.5 : 8}" fill="${C.olive}" stroke="${C.oliveD}" stroke-width="2.5"/>` +
    (thumb ? `<rect x="${a[2] - 3.5}" y="${a[3] - 17}" width="7" height="12" rx="3.5" fill="${C.olive}" stroke="${C.oliveD}" stroke-width="2"/>` : '') + '</g>';
  const armsBehind = `<g class="g-armL" style="transform-origin:62px 162px">${arm('', 62, 162, m.arms[0])}</g><g class="g-armR" style="transform-origin:138px 162px">${arm('', 138, 162, m.arms[1])}</g>`;
  const hands = hand('g-armL', 62, 162, m.arms[0], m.thumb === 'L') + hand('g-armR', 138, 162, m.arms[1], m.thumb === 'R');
  const boot = (x, cls, left) => `<g class="${cls}"><rect x="${left ? 84 : 108}" y="198" width="8" height="12" fill="${C.olive}" stroke="${C.oliveD}" stroke-width="2"/>` +
    `<path d="${left ? 'M72 224V214Q72 206 82 206H94Q98 206 98 212V224Z' : 'M128 224V214Q128 206 118 206H106Q102 206 102 212V224Z'}" fill="${C.boot}" stroke="${C.bootD}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<path d="${left ? 'M73 221H97' : 'M103 221H127'}" stroke="${C.shade}" stroke-width="2.5"/></g>`;
  const rays = mood === 'euforia' ? '<g class="g-rays" stroke="#FBBF24" stroke-width="5" stroke-linecap="round">' +
    Array.from({ length: 16 }, (_, i) => { const a = i * Math.PI / 8, r1 = 88, r2 = i % 2 ? 98 : 106; return `<path d="M${f1(100 + r1 * Math.cos(a))} ${f1(92 + r1 * Math.sin(a))}L${f1(100 + r2 * Math.cos(a))} ${f1(92 + r2 * Math.sin(a))}"/>`; }).join('') + '</g>' : '';
  const cloud = mood === 'depresivo' ? '<g><ellipse cx="86" cy="12" rx="18" ry="9" fill="#94a3b8"/><ellipse cx="108" cy="8" rx="20" ry="10" fill="#a3b0c2"/><ellipse cx="122" cy="14" rx="14" ry="8" fill="#94a3b8"/></g>' +
    '<g class="g-rain" stroke="#38bdf8" stroke-width="3" stroke-linecap="round">' + [80, 100, 120].map((x, i) => `<line x1="${x}" y1="26" x2="${x - 2}" y2="34" style="animation-delay:${i * 0.35}s"/>`).join('') + '</g>' : '';
  const coin = mood === 'euforia' ? `<g class="g-coin"><circle cx="100" cy="176" r="16" fill="#FBBF24" stroke="#B45309" stroke-width="3"/><circle cx="100" cy="176" r="11" fill="none" stroke="#fff3bf" stroke-width="1.5"/>${lauburu(100, 176, 0.62, C.green, 3.4)}</g>` : '';
  const cheeks = m.cheeks ? `<ellipse cx="68" cy="106" rx="9" ry="5.5" fill="${m.red ? '#ef4444' : '#F97316'}" opacity="${m.cheeks}"/><ellipse cx="132" cy="106" rx="9" ry="5.5" fill="${m.red ? '#ef4444' : '#F97316'}" opacity="${m.cheeks}"/>` : '';
  const eyes = `<g class="g-eyes${m.blink ? ' blink' : ''}">${eye(82, 88, m.eyes, -1)}${eye(118, 88, m.eyes, 1)}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" class="guz m-${mood}" viewBox="-6 -10 212 250" role="img" aria-label="Guzki (${mood})">` +
    `<ellipse cx="100" cy="228" rx="46" ry="6" fill="${C.shade}" opacity=".45"/>${rays}` +
    `<g class="g-all">` +
    `<rect x="54" y="146" width="92" height="54" rx="14" fill="#15803d" stroke="#0f4d26" stroke-width="3"/><rect x="50" y="170" width="14" height="24" rx="5" fill="${C.green2}" stroke="#0f4d26" stroke-width="2.5"/><rect x="136" y="170" width="14" height="24" rx="5" fill="${C.green2}" stroke="#0f4d26" stroke-width="2.5"/>` +
    `${boot(0, 'g-bootL', true)}${boot(0, 'g-bootR', false)}` +
    `<path d="M72 148H128V198Q128 204 122 204H78Q72 204 72 198Z" fill="${C.cream}" stroke="${C.shade}" stroke-width="3" stroke-linejoin="round"/>` +
    `<path d="M80 146L82 202M120 146L118 202" stroke="${C.green}" stroke-width="6" stroke-linecap="round"/>` +
    lauburu(100, 187, 0.95, C.green, 3.4) +
    armsBehind +
    `<g class="g-head">` +
    `<g${wt}><path d="${petalPath(100, 92, 82, 60, 15, -Math.PI / 2)}" fill="${pBack}" stroke="${rim}" stroke-width="2.5" stroke-linejoin="round"/>` +
    `<path d="${petalPath(100, 92, 76, 54, 15, -Math.PI / 2 + Math.PI / 15)}" fill="${pFront}" stroke="${rim}" stroke-width="2" stroke-linejoin="round"/></g>` +
    `<circle cx="100" cy="92" r="47" fill="${face}" stroke="${rim}" stroke-width="2.5"/>` +
    cheeks + eyes + brows(m.brow) + mouth(m.mouth) +
    `</g>` + hands + coin + `</g>` + cloud + extras(mood) +
    `</svg>`;
}

/* ---------- frases ---------- */
const LINES = {
  normal: ['Kaixo! 👋', 'Zer moduz?', 'Prest nago, ¿y tú?'],
  acierto: ['Bai! Ederki!', 'Primeran!', 'Ondo! 🎉', 'Bikain!'],
  racha: ['¡Imparable!', '¡Qué racha! 🔥', '¡Nadie te para!'],
  bien: ['¡Aurrera!', '¡Así, así!', 'Poco a poco…', '¡Ya me siento mejor!'],
  duda: ['Hmm…', '¿Seguro? Mírala otra vez.', 'Hmm… casi.'],
  sorpresa: ['¡Hara!', '¡Anda! ¿En serio?', '¡Cosquillas, jeje!'],
  depresivo: ['Me estoy marchitando…', 'Ay, mis pétalos…', 'Esto duele…'],
  toxico: ['Esto ya es personal…', '¿Lo haces a propósito?', 'Mis pétalos lo han visto todo…'],
  impaciente: ['¿Seguimos?', 'Tic, tac, tic, tac…', '¿Sigues ahí?'],
  enfadado: ['¡Ea, ea!', '¡Despierta, que me enfado!', '¡Venga ya!'],
  euforia: ['¡ESTOY FLORECIENDO!', '¡Floración completa! 🌻', '¡Eres increíble!'],
};
const line = (mood, n) => {
  const a = LINES[mood] || LINES.normal;
  if (mood === 'racha' && n >= 3 && Math.random() < 0.6) return '¡' + n + ' seguidas! ¡Imparable!';
  return a[Math.floor(Math.random() * a.length)];
};
/* avisos: away = días que llevarías sin estudiar cuando suene */
const reminder = (away, streak) => {
  if (away <= 1) return streak > 0 ? '¿Seguimos? Tu racha de ' + streak + (streak === 1 ? ' día' : ' días') + ' está en juego.' : '¿Seguimos? Hoy aún no hemos hecho nada de euskera.';
  if (away === 2) return '¡Ea, ea! Dos días sin venir. Me estoy poniendo mustio…';
  if (away === 3) return 'Esto ya es personal… 3 días sin euskera.';
  if (away <= 5) return 'Me estoy marchitando… Una lección y revivo.';
  return 'Guzki se ha marchitado del todo 🥀. Vuelve y lo riego con aciertos.';
};
const LIST = [['acierto', '¡Acierto!'], ['racha', 'Racha'], ['bien', 'Bien'], ['duda', 'Duda'], ['sorpresa', 'Sorpresa'], ['depresivo', 'Depresivo'], ['toxico', 'Tóxico'], ['impaciente', 'Impaciente'], ['enfadado', 'Enfadado'], ['euforia', 'Euforia final'], ['normal', 'Normal']];

const ART = { normal: 'normal', acierto: 'acierto', racha: 'racha', bien: 'bien', sorpresa: 'sorpresa', duda: 'duda', depresivo: 'depresivo', toxico: 'toxico', impaciente: 'impaciente', enfadado: 'enfadado', euforia: 'euforia' };
const image = (mood) => {
  const key = ART[mood] || 'normal';
  const label = String(mood || 'normal').replace(/[<>"&]/g, '');
  return `<img class="guzki-art art-${key}" src="assets/guzki/${key}.webp" alt="Guzki: ${label}" loading="lazy" decoding="async">`;
};
const G = { svg, image, line, reminder, LINES, LIST, MOODS: Object.keys(MOODS) };
root.Guzki = G;
if (typeof module !== 'undefined') module.exports = G;
})(typeof window !== 'undefined' ? window : globalThis);
