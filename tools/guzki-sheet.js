/* Uso: node tools/guzki-sheet.js  -> guzki_sheet.png (requiere 'sharp') */
const G = require('../guzki.js');
const W = 212, H = 250, cols = 4;
const items = [...G.LIST, ['depresivo', 'Marchito', 1]];
let body = '';
items.forEach((it, i) => {
  const x = (i % cols) * W, y = Math.floor(i / cols) * (H + 24);
  body += G.svg(it[0], it[2] ? { wilt: 1 } : {}).replace('<svg ', `<svg x="${x}" y="${y}" width="${W}" height="${H}" `) +
    `<text x="${x + W / 2}" y="${y + H + 16}" text-anchor="middle" font-family="Arial" font-size="14" fill="#166534" font-weight="bold">${it[1]}</text>`;
});
const rows = Math.ceil(items.length / cols);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W * cols}" height="${rows * (H + 24)}"><rect width="100%" height="100%" fill="#FEF7E8"/>${body}</svg>`;
require('fs').writeFileSync('guzki_sheet.svg', svg);
let sharp; try { sharp = require('sharp'); } catch (e) { try { sharp = require('/usr/lib/node_modules/sharp'); } catch (e2) { console.log('sin sharp: solo SVG'); process.exit(0); } }
sharp(Buffer.from(svg)).png().toFile('guzki_sheet.png').then(() => console.log('guzki_sheet.png'));
