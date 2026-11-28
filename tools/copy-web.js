const fs = require('fs'), path = require('path');
const out = path.join(__dirname, '..', 'www');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
['index.html', 'core.js', 'guzki.js', 'content_a1a.js', 'content_a1b.js', 'content_a2a.js', 'content_a2b.js', 'content_a2c.js', 'content_b1.js', 'content_b1b.js', 'content_b2.js', 'content_b2b.js', 'content_c1a.js', 'content_c1b.js', 'app.js', 'sw.js', 'manifest.webmanifest'].forEach(f => fs.copyFileSync(path.join(__dirname, '..', f), path.join(out, f)));
fs.cpSync(path.join(__dirname, '..', 'icons'), path.join(out, 'icons'), { recursive: true });
fs.cpSync(path.join(__dirname, '..', 'assets'), path.join(out, 'assets'), { recursive: true });
fs.cpSync(path.join(__dirname, '..', 'audio'), path.join(out, 'audio'), { recursive: true });
console.log('www/ listo');
