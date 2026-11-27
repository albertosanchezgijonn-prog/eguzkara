/* Uso: node tools/make-audio-index.js
   Lee audio/*.mp3|ogg|wav|m4a (nombre = clave de phrases.tsv) y crea audio/index.json */
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'audio'); const idx = {};
fs.readdirSync(dir).filter(f => /\.(mp3|ogg|wav|m4a)$/i.test(f)).forEach(f => { idx[path.parse(f).name.replace(/_/g, ' ')] = f; });
fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify(idx, null, 1));
console.log(Object.keys(idx).length + ' clips indexados');
