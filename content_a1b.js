/* Contenido A1 · unidades 9-15 (material original) */
(function () {
const { mc, fl, wr, U } = E;

U({ id: 'a1-9', lv: 'A1', t: 'Ukan: zer daukat?', es: 'Tener (ukan/eduki) y ergativo', ic: '🎒',
g: `<h4>UKAN (tener/haber) · presente · NOR-NORK</h4>
<table><tr><th></th><th>nik</th><th>zuk</th><th>hark</th><th>guk</th><th>zuek</th><th>haiek</th></tr>
<tr><td>1 objeto</td><td><b>dut</b></td><td><b>duzu</b></td><td><b>du</b></td><td><b>dugu</b></td><td><b>duzue</b></td><td><b>dute</b></td></tr>
<tr><td>varios</td><td><b>ditut</b></td><td><b>dituzu</b></td><td><b>ditu</b></td><td><b>ditugu</b></td><td><b>dituzue</b></td><td><b>dituzte</b></td></tr></table>
<ul><li>El auxiliar concuerda con el <b>objeto</b>: <i>Liburua dut</i> / <i>Bi liburu ditut</i> (con numerales ≥ 2 → plural).</li>
<li>El sujeto de un verbo transitivo lleva <b>-k</b> (ergativo): <i>Anek liburua du</i>, <i>Mikelek bi anai ditu</i>. Los pronombres cambian: <b>nik, zuk, hark, guk, zuek, haiek</b>.</li>
<li>Edad: <i>Zenbat urte dituzu?</i> → <i>Hogeita bost urte ditut.</i> (urte = plural → ditut).</li>
<li>Sinónimo coloquial: <b>eduki</b>: <i>daukat, daukazu, dauka, daukagu, daukazue, daukate</i>.</li>
<li>Pregunta: <i>Ba al duzu kotxea?</i> → <i>Bai, badut.</i> / <i>Ez, ez dut.</i></li></ul>`,
v: [['kotxea', 'el coche'], ['ordenagailua', 'el ordenador'], ['telefonoa', 'el teléfono'], ['anaia', 'el hermano (de un chico)'], ['arreba', 'la hermana (de un chico)'], ['semea', 'el hijo'], ['alaba', 'la hija'], ['dirua', 'el dinero'], ['urtea', 'el año'], ['lagunak', 'los amigos'], ['lan asko', 'mucho trabajo'], ['denbora', 'el tiempo']],
p: [['Kotxea dut', 'Tengo coche'], ['Bi anai ditut', 'Tengo dos hermanos'], ['Zenbat urte dituzu?', '¿Cuántos años tienes?'], ['Hogeita bost urte ditut', 'Tengo veinticinco años'], ['Anek ordenagailua du', 'Ane tiene ordenador'], ['Guk etxe handia dugu', 'Nosotros tenemos una casa grande'], ['Zuek lagun asko dituzue', 'Vosotros tenéis muchos amigos'], ['Ba al duzu telefonoa?', '¿Tienes teléfono?']],
gen: [['tbl', 'ukan'], ['tbl', 'ukanpl'], ['tbl', 'eduki']],
x: [
  fl('Nik kotxea ___.', 'dut', ['dut', 'ditut', 'du', 'dugu']),
  fl('Zuk bi anai ___.', 'dituzu', ['dituzu', 'duzu', 'ditut', 'ditu']),
  fl('Anek liburua ___.', 'du', ['du', 'ditu', 'dut', 'dute']),
  fl('Guk etxea ___.', 'dugu', ['dugu', 'ditugu', 'duzue', 'dut']),
  fl('Zuek gela bat ___.', 'duzue', ['duzue', 'dituzue', 'duzu', 'dute']),
  fl('Haiek lau seme ___.', 'dituzte', ['dituzte', 'dute', 'ditugu', 'ditu']),
  fl('Mikel___ ordenagailua du. (sujeto ergativo)', 'ek', ['ek', 'k', 'a', 'ak']),
  fl('Ane___ bi lagun ditu. (sujeto ergativo)', 'k', ['k', 'ek', 'a', 'ak']),
  fl('Hogeita bi urte ___ (yo tengo)', 'ditut', ['ditut', 'dut', 'dituzu', 'ditu']),
  mc('«Zenbat urte dituzu?» →', '¿Cuántos años tienes?', ['¿Cuántos hermanos tienes?', '¿Cuántos años hay?', '¿Cuánto cuesta?']),
  mc('«Bai, badut» responde a…', 'Ba al duzu kotxea?', ['Ba al zara irakaslea?', 'Non zaude?', 'Nora zoaz?']),
  mc('Pronombre sujeto de un verbo transitivo para «nosotros»:', 'guk', ['gu', 'gure', 'guri']),
],
d: [{ title: 'Elkarrizketa 9 · Familia eta urteak', lines: [['A', 'Zenbat urte dituzu?'], ['B', 'Hogeita bost urte ditut. Eta zuk?'], ['A', 'Nik hogeita hiru ditut. Bi anai ditut.'], ['B', 'Nik arreba bat dut.']],
  qs: [['¿Cuántos años tiene B?', '25', ['23', '35', '52']], ['¿Cuántos hermanos tiene A?', 'Dos', ['Uno', 'Tres', 'Ninguno']], ['¿Qué tiene B?', 'Una hermana', ['Dos hermanos', 'Un coche', 'Un hijo']]] }],
w: [wr('Di cuántos años tienes y si tienes hermanos.', ['urte', 'ditut|dut'], 'Hogeita hamar urte ditut. Bi anai ditut.')],
});

U({ id: 'a1-10', lv: 'A1', t: 'Eguneroko ohiturak', es: 'Presente habitual (-tzen/-ten)', ic: '☀️',
g: `<h4>Aspecto habitual: participio → <b>-tzen / -ten</b> + auxiliar</h4>
<p>Estructura: <b>[complementos] + verbo habitual + auxiliar</b>: <i>Goizean kafea edaten dut.</i></p>
<table><tr><th>participio</th><th>habitual</th><th>participio</th><th>habitual</th></tr>
<tr><td>egin</td><td>egiten</td><td>jan</td><td>jaten</td></tr><tr><td>edan</td><td>edaten</td><td>ikusi</td><td>ikusten</td></tr>
<tr><td>ikasi</td><td>ikasten</td><td>irakurri</td><td>irakurtzen</td></tr><tr><td>joan</td><td>joaten</td><td>etorri</td><td>etortzen</td></tr>
<tr><td>jaiki</td><td>jaikitzen</td><td>sartu</td><td>sartzen</td></tr><tr><td>gosaldu</td><td>gosaltzen</td><td>bazkaldu</td><td>bazkaltzen</td></tr><tr><td>afaldu</td><td>afaltzen</td><td>hartu</td><td>hartzen</td></tr></table>
<ul><li>Regla práctica: se quita la -i/-u final y se añade <b>-tzen</b> (o <b>-ten</b> tras n, s, l…). Memoriza la lista.</li>
<li><b>Auxiliar</b>: verbos intransitivos (jaiki, joan, etorri, ibili, bizi) → <b>izan</b> (<i>naiz, zara…</i>); transitivos (jan, edan, egin, ikusi) → <b>ukan</b> (<i>dut, duzu…</i>).</li>
<li>Frecuencia: <b>beti</b> siempre · <b>askotan</b> a menudo · <b>batzuetan</b> a veces · <b>egunero</b> cada día · <b>astero</b> cada semana · <b>inoiz ez</b> nunca.</li>
<li>Momentos: goizean, arratsaldean, gauean, asteburuan.</li></ul>`,
v: [['jaiki', 'levantarse'], ['gosaldu', 'desayunar'], ['bazkaldu', 'comer (mediodía)'], ['afaldu', 'cenar'], ['lo egin', 'dormir'], ['lan egin', 'trabajar'], ['ikasi', 'estudiar'], ['irakurri', 'leer'], ['entzun', 'escuchar'], ['beti', 'siempre'], ['egunero', 'cada día'], ['asteburua', 'el fin de semana']],
p: [['Zazpietan jaikitzen naiz', 'Me levanto a las siete'], ['Gosaltzeko kafea edaten dut', 'Para desayunar tomo café'], ['Lanera autobusez joaten naiz', 'Voy al trabajo en autobús'], ['Anek liburuak irakurtzen ditu', 'Ane lee libros'], ['Arratsaldean euskara ikasten dugu', 'Por la tarde estudiamos euskera'], ['Gauean telebista ikusten dut', 'Por la noche veo la tele'], ['Asteburuan ez dut lan egiten', 'El fin de semana no trabajo'], ['Zer egiten duzu egunero?', '¿Qué haces cada día?']],
gen: ['hab'],
x: [
  fl('Goizean kafea ___ dut. (edan)', 'edaten', ['edaten', 'edatzen', 'edan', 'edango']),
  fl('Zortzietan lanera ___ naiz. (joan)', 'joaten', ['joaten', 'joatzen', 'joan', 'joango']),
  fl('Egunero euskara ___ dut. (ikasi)', 'ikasten', ['ikasten', 'ikastzen', 'ikasi', 'ikasiko']),
  fl('Zer ___ duzu asteburuan? (egin)', 'egiten', ['egiten', 'egitzen', 'egin', 'egingo']),
  fl('Gu goizean jaikitzen ___. (aux.)', 'gara', ['gara', 'dugu', 'gaude', 'zarete']),
  fl('Anek telebista ikusten ___. (aux.)', 'du', ['du', 'da', 'dago', 'ditu']),
  fl('Zuek nora joaten ___? (aux.)', 'zarete', ['zarete', 'duzue', 'zaudete', 'zara']),
  fl('Nik liburuak irakurtzen ___. (aux., varios objetos)', 'ditut', ['ditut', 'dut', 'naiz', 'ditu']),
  mc('Participio «jan» → habitual', 'jaten', ['jatzen', 'janten', 'jango']),
  mc('Participio «etorri» → habitual', 'etortzen', ['etorten', 'etorritzen', 'etorriko']),
  mc('«Beti» significa…', 'siempre', ['nunca', 'a veces', 'hoy']),
  mc('«Inoiz ez» significa…', 'nunca', ['siempre', 'a veces', 'a menudo']),
  mc('«Egunero lan egiten dut» →', 'Trabajo cada día', ['Trabajé ayer', 'Trabajaré mañana', 'Estoy trabajando']),
],
d: [{ title: 'Elkarrizketa 10 · Egunerokoa', lines: [['A', 'Zer egiten duzu goizean?'], ['B', 'Zazpietan jaikitzen naiz, kafea hartzen dut eta lanera joaten naiz.'], ['A', 'Nola joaten zara?'], ['B', 'Autobusez joaten naiz. Eta zu?'], ['A', 'Ni oinez joaten naiz.']],
  qs: [['¿A qué hora se levanta B?', 'A las siete', ['A las ocho', 'A las seis', 'A las nueve']], ['¿Cómo va B al trabajo?', 'En autobús', ['A pie', 'En coche', 'En tren']], ['¿Cómo va A?', 'A pie', ['En autobús', 'En coche', 'En bici']]] }],
w: [wr('Cuenta qué haces por la mañana (levantarte, desayunar…).', ['jaikitzen|gosaltzen|edaten|hartzen', 'naiz|dut'], 'Zazpietan jaikitzen naiz eta gosaltzen dut.')],
});

U({ id: 'a1-11', lv: 'A1', t: 'Ari izan: orain zer egiten?', es: 'Acción en curso (ari izan)', ic: '🍳',
g: `<h4>Estructura: verbo habitual (-tzen/-ten) + <b>ari</b> + IZAN</h4>
<p><i>Jaten <b>ari naiz</b>.</i> Estoy comiendo. · <i>Zer egiten <b>ari zara</b>?</i> ¿Qué estás haciendo?</p>
<table><tr><th>ni</th><th>zu</th><th>hura</th><th>gu</th><th>zuek</th><th>haiek</th></tr><tr><td>ari naiz</td><td>ari zara</td><td>ari da</td><td>ari gara</td><td>ari zarete</td><td>ari dira</td></tr></table>
<ul><li>⚠️ <b>Siempre se usa IZAN</b> como auxiliar, incluso con verbos transitivos: <i>Kafea edaten ari naiz</i> (NO «ari dut»).</li>
<li>Con sustantivos de actividad: <i>Lanean ari naiz</i> (estoy trabajando).</li>
<li>Excepción: fenómenos meteorológicos usan ukan: <i>Euria ari du</i> (está lloviendo), <i>Elurra ari du</i>.</li></ul>`,
v: [['afaria', 'la cena'], ['bazkaria', 'la comida'], ['telebista', 'la televisión'], ['musika', 'la música'], ['sukaldea', 'la cocina'], ['prestatu', 'preparar'], ['hitz egin', 'hablar'], ['ikusi', 'ver'], ['entzun', 'escuchar'], ['euria', 'la lluvia'], ['orain', 'ahora'], ['elurra', 'la nieve']],
p: [['Jaten ari naiz', 'Estoy comiendo'], ['Zer egiten ari zara?', '¿Qué estás haciendo?'], ['Ane lanean ari da', 'Ane está trabajando'], ['Telebista ikusten ari gara', 'Estamos viendo la tele'], ['Zuek euskara ikasten ari zarete', 'Vosotros estáis estudiando euskera'], ['Haiek bazkaltzen ari dira', 'Ellos están comiendo'], ['Afaria prestatzen ari naiz', 'Estoy preparando la cena'], ['Euria ari du', 'Está lloviendo']],
gen: [['tbl', 'izan']],
x: [
  fl('Ni afaltzen ___ naiz.', 'ari', ['ari', 'ere', 'al', 'ez']),
  fl('Zuek zer egiten ___ zarete?', 'ari', ['ari', 'ere', 'al', 'dira']),
  fl('Mikel lan egiten ___ da.', 'ari', ['ari', 'ere', 'ez', 'du']),
  fl('Anek liburua irakurtzen ari ___. (aux.)', 'da', ['da', 'du', 'dago', 'dira']),
  fl('Nik kafea edaten ari ___. (aux.)', 'naiz', ['naiz', 'dut', 'nago', 'zara']),
  fl('Gu musika entzuten ari ___.', 'gara', ['gara', 'dugu', 'gaude', 'dira']),
  mc('«Jaten ari naiz» →', 'Estoy comiendo', ['Como siempre', 'Comeré', 'Comí']),
  mc('«Telebista ikusten ari gara» →', 'Estamos viendo la tele', ['Vemos la tele a menudo', 'Veremos la tele', 'Vimos la tele']),
  mc('¿Qué auxiliar usa «ari» con verbos transitivos?', 'izan (naiz, da…)', ['ukan (dut, du…)', 'egon (nago…)', 'ninguno']),
  mc('«Está lloviendo» →', 'Euria ari du', ['Euria ari da', 'Euria egiten ari naiz', 'Euria dago']),
],
d: [{ title: 'Elkarrizketa 11 · Telefonoz', lines: [['Ane', 'Kaixo, Jon! Zer egiten ari zara?'], ['Jon', 'Telebista ikusten ari naiz. Eta zu?'], ['Ane', 'Ni sukaldean nago. Afaria prestatzen ari naiz.'], ['Jon', 'Zer prestatzen ari zara?'], ['Ane', 'Arroza eta arraina.']],
  qs: [['¿Qué hace Jon?', 'Ve la tele', ['Prepara la cena', 'Trabaja', 'Duerme']], ['¿Dónde está Ane?', 'En la cocina', ['En el salón', 'En el trabajo', 'En la calle']], ['¿Qué prepara Ane?', 'Arroz y pescado', ['Pan y leche', 'Sopa', 'Carne']]] }],
});

U({ id: 'a1-12', lv: 'A1', t: 'Ezezkoa eta partitiboa', es: 'Negación, indefinidos y partitivo', ic: '🚫',
g: `<h4>Negación: <b>ez</b> + auxiliar</h4>
<ul><li><i>Ez naiz irakaslea.</i> · <i>Ez dago etxean.</i> · <i>Ez dut kafea edaten.</i> → <b>ez</b> va justo delante del auxiliar.</li>
<li>Respuestas: <b>Bai</b> (sí) / <b>Ez</b> (no): <i>Ez, ez dut kafea edaten.</i></li>
<li><b>Ni ere</b> yo también · <b>Ni ere ez</b> yo tampoco · <b>Nik ez</b> yo no.</li></ul>
<h4>Indefinidos negativos</h4>
<p><b>ezer</b> nada · <b>inor</b> nadie · <b>inon</b> en ningún sitio · <b>inoiz</b> nunca → se usan con <b>ez</b>: <i>Ez dut ezer ulertzen. Ez dago inor etxean. Ez dut inoiz kafea edaten.</i></p>
<h4>Partitivo <b>-(r)ik</b></h4>
<p>En frases negativas (y preguntas) el objeto indeterminado toma <b>-rik</b> en lugar de -a/bat: <i>Kotxea dut → Ez dut kotxe<b>rik</b></i> · <i>Dirua dugu → Ez dugu diru<b>rik</b></i> · <i>Ez dago autobus<b>ik</b></i> (tras consonante -ik).</p>`,
v: [['ezer', 'nada'], ['inor', 'nadie'], ['inon', 'en ningún sitio'], ['inoiz', 'nunca'], ['batzuetan', 'a veces'], ['ere', 'también'], ['kotxerik', 'ningún coche'], ['dirurik', 'dinero (partitivo)'], ['ulertu', 'entender'], ['jakin', 'saber'], ['egia', 'la verdad'], ['gezurra', 'la mentira']],
p: [['Ez naiz irakaslea', 'No soy profesor'], ['Ez dut kafea edaten', 'No tomo café'], ['Ez dago inor etxean', 'No hay nadie en casa'], ['Ez dut ezer ulertzen', 'No entiendo nada'], ['Ez dugu dirurik', 'No tenemos dinero'], ['Ez daukat kotxerik', 'No tengo coche'], ['Ni ere ez', 'Yo tampoco'], ['Ez, ez naiz Bilbokoa', 'No, no soy de Bilbao']],
gen: [['tbl', 'izan']],
x: [
  fl('___ naiz irakaslea. (no)', 'Ez', ['Ez', 'Bai', 'Ere', 'Ari']),
  fl('Ez dut kafea ___. (edan, habitual)', 'edaten', ['edaten', 'edan', 'edango', 'edatzen']),
  fl('Ez dut diru___. (partitivo)', 'rik', ['rik', 'ik', 'a', 'ak']),
  fl('Ez daukat kotxe___. (partitivo)', 'rik', ['rik', 'ik', 'a', 'ra']),
  fl('Ez dago autobus___. (partitivo)', 'ik', ['ik', 'rik', 'ak', 'a']),
  fl('Ez dut ___ ulertzen. (nada)', 'ezer', ['ezer', 'inor', 'inon', 'inoiz']),
  fl('Ez dago ___ etxean. (nadie)', 'inor', ['inor', 'ezer', 'inon', 'inoiz']),
  fl('Ez dut ___ kafea edaten. (nunca)', 'inoiz', ['inoiz', 'inor', 'ezer', 'inon']),
  mc('«No soy de Bilbao» →', 'Ez naiz Bilbokoa', ['Ez dut Bilbokoa', 'Ez da Bilbokoa naiz', 'Naiz ez Bilbokoa']),
  mc('«Yo tampoco» →', 'Ni ere ez', ['Ni ere bai', 'Nik ez ere', 'Ni ez naiz']),
  mc('«Ez dago inor» →', 'No hay nadie', ['No hay nada', 'No está aquí', 'Nadie va']),
  mc('«Ez dut ezer ikusten» →', 'No veo nada', ['No veo a nadie', 'No veo nunca', 'Veo todo']),
],
d: [{ title: 'Elkarrizketa 12 · Kafea?', lines: [['A', 'Kafea edaten duzu?'], ['B', 'Ez, ez dut kafea edaten. Tea edaten dut.'], ['A', 'Eta esnea?'], ['B', 'Ez dut esnerik edaten. Ni ez, baina nire ahizpak bai.']],
  qs: [['¿Qué bebe B?', 'Té', ['Café', 'Leche', 'Agua']], ['¿B bebe leche?', 'No', ['Sí', 'A veces', 'Mucho']], ['¿Quién sí bebe leche?', 'La hermana de B', ['A', 'La madre', 'Nadie']]] }],
w: [wr('Escribe dos frases negativas sobre ti (p. ej., no tienes coche, no tomas café).', ['ez'], 'Ez dut kotxerik. Ez dut kafea edaten.')],
});

U({ id: 'a1-13', lv: 'A1', t: 'Gustatu, nahi eta erosketak', es: 'Gustar, querer y comprar', ic: '🛒',
g: `<h4>GUSTATU (gustar) · NOR-NORI</h4>
<p>La persona a quien le gusta va en <b>dativo</b> y el verbo concuerda con lo que gusta:</p>
<table><tr><th></th><th>niri</th><th>zuri</th><th>hari</th><th>guri</th><th>zuei</th><th>haiei</th></tr>
<tr><td>1 cosa</td><td><b>zait</b></td><td><b>zaizu</b></td><td><b>zaio</b></td><td><b>zaigu</b></td><td><b>zaizue</b></td><td><b>zaie</b></td></tr>
<tr><td>varias</td><td><b>zaizkit</b></td><td><b>zaizkizu</b></td><td><b>zaizkio</b></td><td><b>zaizkigu</b></td><td><b>zaizkizue</b></td><td><b>zaizkie</b></td></tr></table>
<ul><li><i>Niri kafea gustatzen zait.</i> · <i>Niri sagarrak gustatzen zaizkit.</i> · <i>Anari ez zaio ardoa gustatzen.</i></li>
<li>Con verbos: <i>Niri euskaraz hitz egitea gustatzen zait.</i></li>
<li><b>Maite dut</b> = quiero/amo (ukan): <i>Nire familia maite dut.</i></li></ul>
<h4>NAHI (querer) y precios</h4>
<ul><li><i>Kafe bat nahi dut.</i> · <i>Zer nahi duzu?</i> · <i>Ogia eta esnea nahi ditut.</i> (varios objetos → ditut)</li>
<li><b>Zenbat balio du?</b> (¿cuánto cuesta?, 1 cosa) · <b>Zenbat balio dute?</b> (varias) → <i>Bi euro balio du.</i> / <i>Zenbat da?</i> → <i>Hiru euro dira.</i></li></ul>`,
v: [['ogia', 'el pan'], ['esnea', 'la leche'], ['kafea', 'el café'], ['ura', 'el agua'], ['arraina', 'el pescado'], ['haragia', 'la carne'], ['fruta', 'la fruta'], ['sagarra', 'la manzana'], ['arroza', 'el arroz'], ['ardoa', 'el vino'], ['garagardoa', 'la cerveza'], ['euroa', 'el euro']],
p: [['Niri kafea gustatzen zait', 'Me gusta el café'], ['Zuri arrainak gustatzen zaizkizu?', '¿Te gusta el pescado? (plural)'], ['Anari ez zaio ardoa gustatzen', 'A Ane no le gusta el vino'], ['Kafe bat nahi dut, mesedez', 'Quiero un café, por favor'], ['Zer nahi duzu?', '¿Qué quieres?'], ['Zenbat balio du?', '¿Cuánto cuesta?'], ['Bi euro dira', 'Son dos euros'], ['Ogia eta esnea nahi ditut', 'Quiero pan y leche']],
gen: [['tbl', 'gus'], ['tbl', 'gusp']],
x: [
  fl('Niri kafea gustatzen ___.', 'zait', ['zait', 'zaizu', 'zaizkit', 'zaio']),
  fl('Zuri musika gustatzen ___?', 'zaizu', ['zaizu', 'zait', 'zaizkizu', 'zaigu']),
  fl('Anari sagarrak gustatzen ___.', 'zaizkio', ['zaizkio', 'zaio', 'zaizkie', 'zaizkit']),
  fl('Guri txokolatea gustatzen ___.', 'zaigu', ['zaigu', 'zaizkigu', 'zait', 'zaizue']),
  fl('Niri patatak gustatzen ___.', 'zaizkit', ['zaizkit', 'zait', 'zaizkizu', 'zaizkio']),
  fl('Zuei arrainak gustatzen ___.', 'zaizkizue', ['zaizkizue', 'zaizue', 'zaizkie', 'zaizkigu']),
  fl('___ ez zaio ardoa gustatzen. (a él)', 'Hari', ['Hari', 'Zuri', 'Niri', 'Guri']),
  fl('Kafe bat ___ dut. (quiero)', 'nahi', ['nahi', 'gustatzen', 'maite', 'behar']),
  fl('Ogia eta esnea nahi ___. (aux.)', 'ditut', ['ditut', 'dut', 'zait', 'zaizkit']),
  mc('«Me gusta el pan» →', 'Niri ogia gustatzen zait', ['Nik ogia gustatzen dut', 'Niri ogia gustatzen zaizkit', 'Niri ogiak gustatzen zait']),
  mc('«Me gustan las manzanas» →', 'Niri sagarrak gustatzen zaizkit', ['Niri sagarrak gustatzen zait', 'Nik sagarrak gustatzen ditut', 'Niri sagarra gustatzen zaizkit']),
  mc('«Zenbat balio du?» →', '¿Cuánto cuesta?', ['¿Cuántos años tienes?', '¿Cuánto es de tiempo?', '¿Cuántos hay?']),
],
d: [{ title: 'Elkarrizketa 13 · Dendan', lines: [['Saltzailea', 'Egun on! Zer nahi duzu?'], ['Bezeroa', 'Egun on! Ogi bat eta esne bat nahi ditut, mesedez.'], ['Saltzailea', 'Hemen dituzu. Hiru euro dira.'], ['Bezeroa', 'Hartu. Eskerrik asko!'], ['Saltzailea', 'Ez horregatik. Agur!']],
  qs: [['¿Qué compra el cliente?', 'Pan y leche', ['Pan y vino', 'Café y leche', 'Fruta']], ['¿Cuánto cuesta en total?', '3 euros', ['2 euros', '13 euros', '5 euros']], ['«Ez horregatik» significa…', 'de nada', ['gracias', 'perdón', 'hasta luego']]] }],
w: [wr('Pide un café y un bocadillo/pan en un bar (con «nahi dut» y «mesedez»).', ['nahi', 'mesedez'], 'Kafe bat eta ogi bat nahi ditut, mesedez.')],
});

U({ id: 'a1-14', lv: 'A1', t: 'Familia eta deskribapena', es: 'Familia, descripción y genitivo', ic: '👨‍👩‍👧',
g: `<h4>Genitivo (de) · <b>-en / -ren</b></h4>
<ul><li>Tras <b>consonante</b>: <b>-en</b> → <i>Mikelen etxea</i>, <i>Jonen liburua</i>, <i>Mirenen ama</i>.</li>
<li>Tras <b>vocal</b>: <b>-ren</b> → <i>Aneren arreba</i>, <i>Amaiaren lagunak</i>, <i>amaren telefonoa</i>.</li>
<li>El poseedor va <b>antes</b> que lo poseído: <i>Anaren anaia</i> = el hermano de Ana.</li></ul>
<h4>Familia</h4>
<p>ama, aita, anaia (hermano de chico), neba (hermano de chica), arreba (hermana de chico), ahizpa (hermana de chica), neba-arrebak (hermanos), osaba, izeba, aitona, amona, seme, alaba, senarra, emaztea.</p>
<h4>Descripción: <b>Nolakoa da?</b></h4>
<p>altua, baxua, gaztea, zaharra, polita, handia, txikia, argala, indartsua, jatorra (amable), alaia (alegre). <i>Nire arreba altua da.</i> · <i>Haien etxea handia da.</i></p>`,
v: [['ama', 'madre'], ['aita', 'padre'], ['anaia', 'hermano (de un chico)'], ['neba', 'hermano (de una chica)'], ['arreba', 'hermana (de un chico)'], ['ahizpa', 'hermana (de una chica)'], ['aitona', 'abuelo'], ['amona', 'abuela'], ['altua', 'alto'], ['baxua', 'bajo'], ['gaztea', 'joven'], ['zaharra', 'mayor/viejo'], ['polita', 'bonito']],
p: [['Nire ama irakaslea da', 'Mi madre es profesora'], ['Mikelen anaia altua da', 'El hermano de Mikel es alto'], ['Aneren arreba gaztea da', 'La hermana de Ane es joven'], ['Nolakoa da zure laguna?', '¿Cómo es tu amigo?'], ['Nire familia handia da', 'Mi familia es grande'], ['Nik bi neba ditut', 'Tengo dos hermanos (soy chica)'], ['Amonaren etxea polita da', 'La casa de la abuela es bonita'], ['Gure aitona oso zaharra da', 'Nuestro abuelo es muy mayor']],
gen: ['gen'],
x: [
  fl('Mikel___ etxea (de Mikel)', 'en', ['en', 'ren', 'ek', 'ri']),
  fl('Ane___ liburua (de Ane)', 'ren', ['ren', 'en', 'ak', 'ra']),
  fl('Jon___ gela (de Jon)', 'en', ['en', 'ren', 'ek', 'ak']),
  fl('Ama___ telefonoa (de la madre)', 'ren', ['ren', 'en', 'k', 'ri']),
  fl('Miren___ lagunak (de Miren)', 'en', ['en', 'ren', 'ek', 'ri']),
  mc('«El libro de Ane» →', 'Aneren liburua', ['Anen liburua', 'Ane liburuaren', 'Liburua Aneren']),
  mc('«La madre de Mikel» →', 'Mikelen ama', ['Mikelren ama', 'Ama Mikelen', 'Mikeli ama']),
  mc('Una chica habla de su hermano:', 'neba', ['anaia', 'arreba', 'osaba']),
  mc('Un chico habla de su hermana:', 'arreba', ['ahizpa', 'neba', 'izeba']),
  mc('«Nolakoa da zure arreba?» pregunta por…', 'cómo es', ['dónde está', 'cuántos años tiene', 'qué hace']),
  mc('«Altua» significa…', 'alto', ['bajo', 'joven', 'grande']),
],
d: [{ title: 'Elkarrizketa 14 · Familia', lines: [['A', 'Zure familia handia da?'], ['B', 'Bai, handia da. Hiru neba-arreba ditut.'], ['A', 'Nolakoa da zure arreba?'], ['B', 'Altua eta alaia da. Ikaslea da.']],
  qs: [['¿Cuántos hermanos tiene B?', 'Tres', ['Dos', 'Cuatro', 'Uno']], ['¿Cómo es su hermana?', 'Alta y alegre', ['Baja y seria', 'Joven y simpática', 'Mayor y alta']], ['¿Qué es su hermana?', 'Estudiante', ['Profesora', 'Médica', 'Camarera']]] }],
w: [wr('Describe a un familiar (quién es y cómo es).', ['nire|nire ama|nire aita|nire', 'da'], 'Nire ama irakaslea da. Altua da.')],
});

U({ id: 'a1-15', lv: 'A1', t: 'Gelan eta kalean', es: 'Imperativo básico y lenguaje de clase', ic: '🏫',
g: `<h4>Imperativo (forma sencilla): participio / raíz</h4>
<p>Muchas órdenes usan el participio o la raíz, sin auxiliar: <b>Ireki</b> atea · <b>Itxi</b> leihoa · <b>Entzun</b> eta <b>errepikatu</b> · <b>Irakurri</b> testua · <b>Idatzi</b> zure izena · <b>Begiratu</b> · <b>Jarri</b> hemen · <b>Hitz egin</b> poliki.</p>
<p>Con movimiento: <b>Zatoz</b> hona (ven aquí) · <b>Zoaz</b> etxera (vete a casa) · <b>Zatozte</b> / <b>Zoazte</b> (plural).</p>
<h4>Lenguaje de clase</h4>
<ul><li><b>Ez dut ulertzen.</b> No entiendo. · <b>Ez dakit.</b> No sé. · <b>Badakit.</b> Lo sé.</li>
<li><b>Berriz esan, mesedez.</b> Repítelo, por favor. · <b>Poliki hitz egin, mesedez.</b> Habla despacio, por favor.</li>
<li><b>Nola esaten da «casa» euskaraz?</b> ¿Cómo se dice «casa» en euskera?</li>
<li><b>Zer esan nahi du «etxea»?</b> ¿Qué significa «etxea»? · <b>Galdera bat dut.</b> Tengo una pregunta.</li>
<li>Corrección: <b>zuzena</b> (correcto) / <b>okerra</b> (incorrecto).</li></ul>
<p>La orden negativa («no abras») requiere formas especiales que se estudian más adelante (B1).</p>`,
v: [['ireki', 'abrir'], ['itxi', 'cerrar'], ['entzun', 'escuchar'], ['errepikatu', 'repetir'], ['irakurri', 'leer'], ['idatzi', 'escribir'], ['begiratu', 'mirar'], ['poliki', 'despacio'], ['zuzena', 'correcto'], ['okerra', 'incorrecto'], ['galdera', 'la pregunta'], ['erantzuna', 'la respuesta']],
p: [['Ireki liburuak', 'Abrid los libros'], ['Entzun eta errepikatu', 'Escucha y repite'], ['Irakurri testua', 'Lee el texto'], ['Idatzi zure izena', 'Escribe tu nombre'], ['Zatoz hona', 'Ven aquí'], ['Poliki hitz egin, mesedez', 'Habla despacio, por favor'], ['Nola esaten da «casa» euskaraz?', '¿Cómo se dice «casa» en euskera?'], ['Galdera bat dut', 'Tengo una pregunta']],
x: [
  fl('___ atea! (abre la puerta)', 'Ireki', ['Ireki', 'Itxi', 'Entzun', 'Idatzi']),
  fl('___ leihoa, mesedez. (cierra)', 'Itxi', ['Itxi', 'Ireki', 'Jarri', 'Irakurri']),
  fl('Entzun eta ___. (repite)', 'errepikatu', ['errepikatu', 'idatzi', 'ireki', 'begiratu']),
  fl('___ hona, Ane! (ven)', 'Zatoz', ['Zatoz', 'Zoaz', 'Nator', 'Dator']),
  fl('Poliki hitz ___, mesedez.', 'egin', ['egin', 'egiten', 'egingo', 'ikusi']),
  mc('«Ez dut ulertzen» →', 'No entiendo', ['No tengo', 'No quiero', 'No voy']),
  mc('«Berriz esan, mesedez» →', 'Repítelo, por favor', ['Dilo bajo, por favor', 'No lo digas', 'Escríbelo, por favor']),
  mc('«Zuzena» significa…', 'correcto', ['incorrecto', 'despacio', 'pregunta']),
  mc('«Idatzi zure izena» →', 'Escribe tu nombre', ['Lee tu nombre', 'Di tu nombre', 'Borra tu nombre']),
  mc('«Galdera bat dut» →', 'Tengo una pregunta', ['Tengo una respuesta', 'Tengo un problema', 'Tengo una duda de tiempo']),
],
d: [{ title: 'Elkarrizketa 15 · Euskara klasean', lines: [['Irakaslea', 'Egun on, guztiok! Ireki liburuak eta irakurri testua.'], ['Ikaslea', 'Barkatu, ez dut ulertzen. Poliki hitz egin, mesedez.'], ['Irakaslea', 'Bai, noski. Ireki liburua eta irakurri testua.'], ['Ikaslea', 'Ah, ulertzen dut. Eskerrik asko!']],
  qs: [['¿Qué pide la profesora?', 'Abrir el libro y leer el texto', ['Escribir el nombre', 'Cerrar la puerta', 'Salir al patio']], ['¿Qué pide la alumna?', 'Que hable despacio', ['Que repita el nombre', 'Un lápiz', 'Que abra la puerta']], ['Al final, la alumna…', 'entiende', ['sigue sin entender', 'se va', 'se enfada']]] }],
w: [wr('Pide a alguien que hable despacio y te lo repita.', ['poliki', 'mesedez'], 'Poliki hitz egin eta berriz esan, mesedez.')],
});
})();
