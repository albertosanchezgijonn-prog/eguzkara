/* Uso: node tools/export-phrases.js
   Genera phrases.tsv con todas las frases/palabras en euskera de la app:
   <clave-de-fichero>\t<texto>
   Convierte cada línea en audio (mp3/ogg) con la voz que prefieras (p. ej. Aholab, Google Cloud, un hablante nativo…),
   guárdalo como audio/<clave>.mp3 y ejecuta: node tools/make-audio-index.js */
const fs = require('fs'); global.window = global;
const E = require('../core.js'); global.E = E;
['content_a1a.js', 'content_a1b.js', 'content_a2a.js', 'content_a2b.js'].forEach(f => (0, eval)(fs.readFileSync(__dirname + '/../' + f, 'utf8')));
const set = new Map();
const add = (t) => { const k = E.norm(t).replace(/ /g, '_'); if (k && !set.has(k)) set.set(k, t); };
E.UNITS.forEach(u => { (u.p || []).forEach(p => add(p[0])); (u.v || []).forEach(v => add(v[0])); (u.d || []).forEach(d => d.lines.forEach(l => add(l[1]))); });
fs.writeFileSync('phrases.tsv', [...set].map(([k, t]) => k + '\t' + t).join('\n'));
console.log(set.size + ' textos exportados a phrases.tsv');
