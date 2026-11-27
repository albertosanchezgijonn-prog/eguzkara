/* Se ejecuta automáticamente antes de "cap sync" (hook capacitor:sync:before).
   Añade al AndroidManifest los permisos de micrófono y notificaciones si faltan. Es idempotente. */
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
if (!fs.existsSync(f)) process.exit(0);
let x = fs.readFileSync(f, 'utf8');
['android.permission.RECORD_AUDIO', 'android.permission.POST_NOTIFICATIONS'].forEach(p => {
  if (!x.includes(p)) x = x.replace('</manifest>', '    <uses-permission android:name="' + p + '" />\n</manifest>');
});
fs.writeFileSync(f, x);
console.log('AndroidManifest: permisos comprobados');
