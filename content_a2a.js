/* Contenido A2 · unidades 1-7 (material original) */
(function () {
const { mc, fl, wr, U } = E;

U({ id: 'a2-1', lv: 'A2', t: 'Iragana: izan eta egon', es: 'Pasado de ser y estar', ic: '⏪',
g: `<h4>IZAN y EGON · pasado</h4>
<table><tr><th></th><th>ni</th><th>zu</th><th>hura</th><th>gu</th><th>zuek</th><th>haiek</th></tr>
<tr><td>izan</td><td><b>nintzen</b></td><td><b>zinen</b></td><td><b>zen</b></td><td><b>ginen</b></td><td><b>zineten</b></td><td><b>ziren</b></td></tr>
<tr><td>egon</td><td><b>nengoen</b></td><td><b>zeunden</b></td><td><b>zegoen</b></td><td><b>geunden</b></td><td><b>zeundeten</b></td><td><b>zeuden</b></td></tr></table>
<ul><li><i>Txikia nintzen.</i> Era pequeño. · <i>Atzo etxean nengoen.</i> Ayer estaba en casa.</li>
<li>Marcadores: <b>atzo</b> ayer · <b>herenegun</b> anteayer · <b>iaz</b> el año pasado · <b>joan den astean</b> la semana pasada · <b>duela bi urte</b> hace dos años · <b>orduan</b> entonces · <b>lehen</b> antes.</li>
<li>Pregunta: <i>Non zeunden atzo?</i> → <i>Lanean nengoen.</i></li></ul>`,
v: [['atzo', 'ayer'], ['herenegun', 'anteayer'], ['iaz', 'el año pasado'], ['orduan', 'entonces'], ['lehen', 'antes'], ['joan den astean', 'la semana pasada'], ['duela bi urte', 'hace dos años'], ['txikia', 'pequeño'], ['gaixorik', 'enfermo'], ['nekatuta', 'cansado'], ['pozik', 'contento'], ['oporretan', 'de vacaciones']],
p: [['Atzo etxean nengoen', 'Ayer estaba en casa'], ['Txikia nintzen', 'Era pequeño'], ['Non zeunden atzo?', '¿Dónde estabas ayer?'], ['Zuek lagunak zineten', 'Vosotros erais amigos'], ['Haiek lanean zeuden', 'Ellos estaban en el trabajo'], ['Ane eskolan zegoen', 'Ane estaba en la escuela'], ['Atzo gu kalean geunden', 'Ayer estábamos en la calle'], ['Duela bi urte ikaslea nintzen', 'Hace dos años era estudiante']],
gen: [['tbl', 'izanp'], ['tbl', 'egonp']],
x: [
  fl('Atzo ni etxean ___.', 'nengoen', ['nengoen', 'nintzen', 'zegoen', 'nago']),
  fl('Txikitan ni oso lotsatia ___.', 'nintzen', ['nintzen', 'nengoen', 'zen', 'naiz']),
  fl('Atzo zu non ___?', 'zeunden', ['zeunden', 'zinen', 'zegoen', 'zaude']),
  fl('Atzo gu etxean ___.', 'geunden', ['geunden', 'ginen', 'gaude', 'zeuden']),
  fl('Haiek atzo lanean ___.', 'zeuden', ['zeuden', 'ziren', 'zegoen', 'daude']),
  fl('Ane txikia ___.', 'zen', ['zen', 'zegoen', 'da', 'zinen']),
  fl('Zuek lagunak ___.', 'zineten', ['zineten', 'zeundeten', 'zarete', 'ziren']),
  fl('Duela bi urte ni ikaslea ___.', 'nintzen', ['nintzen', 'nengoen', 'naiz', 'zen']),
  mc('«Atzo etxean nengoen» →', 'Ayer estaba en casa', ['Ayer fui a casa', 'Hoy estoy en casa', 'Mañana estaré en casa']),
  mc('«Txikia nintzen» →', 'Era pequeño', ['Soy pequeño', 'Estuve pequeño', 'Seré pequeño']),
  mc('«Herenegun» significa…', 'anteayer', ['ayer', 'mañana', 'pasado mañana']),
  mc('«Joan den astean» significa…', 'la semana pasada', ['la semana que viene', 'esta semana', 'cada semana']),
],
d: [{ title: 'Elkarrizketa 16 · Atzo', lines: [['Ane', 'Non zeunden atzo arratsaldean?'], ['Jon', 'Lanean nengoen. Eta zu?'], ['Ane', 'Ni etxean nengoen, nekatuta. Eta Mikel non zegoen?'], ['Jon', 'Mikel Donostian zegoen, lagunekin.']],
  qs: [['¿Dónde estaba Jon ayer por la tarde?', 'En el trabajo', ['En casa', 'En San Sebastián', 'En el cine']], ['¿Cómo estaba Ane?', 'Cansada', ['Enferma', 'Contenta', 'Triste']], ['¿Con quién estaba Mikel?', 'Con amigos', ['Con Ane', 'Con su familia', 'Solo']]] }],
w: [wr('Di dónde estabas ayer por la tarde.', ['atzo', 'nengoen'], 'Atzo arratsaldean etxean nengoen.')],
});

U({ id: 'a2-2', lv: 'A2', t: 'Iragana: egin nuen / egin dut', es: 'Pasado perifrástico y perfecto', ic: '✅',
g: `<h4>Participio + auxiliar en pasado</h4>
<ul><li><b>Pasado simple</b> (acción terminada en un tiempo ya cerrado): participio + <b>nintzen / nuen…</b> → <i>Atzo Bilbora <b>joan nintzen</b>.</i> · <i>Atzo ogia <b>erosi nuen</b>.</i></li>
<li><b>Perfecto</b> (relacionado con el presente: hoy, esta mañana, ya…): participio + <b>naiz / dut…</b> → <i>Gaur goizean kafea <b>hartu dut</b>.</i> · <i>Etxera <b>etorri naiz</b>.</i></li></ul>
<table><tr><th>UKAN pasado</th><th>nik</th><th>zuk</th><th>hark</th><th>guk</th><th>zuek</th><th>haiek</th></tr>
<tr><td>1 objeto</td><td><b>nuen</b></td><td><b>zenuen</b></td><td><b>zuen</b></td><td><b>genuen</b></td><td><b>zenuten</b></td><td><b>zuten</b></td></tr>
<tr><td>varios</td><td><b>nituen</b></td><td><b>zenituen</b></td><td><b>zituen</b></td><td><b>genituen</b></td><td><b>zenituzten</b></td><td><b>zituzten</b></td></tr></table>
<p>Participios útiles: egin, joan, etorri, ikusi, jan, edan, erosi, hartu, ikasi, irakurri, idatzi, ireki, itxi, eman, esan, jaiki, sartu, atera, ibili, lagundu, gelditu.</p>
<p>Pregunta: <i>Zer egin zenuen asteburuan?</i></p>`,
v: [['erosi', 'comprar'], ['ikusi', 'ver'], ['hartu', 'tomar/coger'], ['irten', 'salir'], ['bidaiatu', 'viajar'], ['bisitatu', 'visitar'], ['film bat', 'una película'], ['asteburua', 'el fin de semana'], ['larunbata', 'sábado'], ['igandea', 'domingo'], ['gaur goizean', 'esta mañana'], ['dagoeneko', 'ya']],
p: [['Atzo ogia erosi nuen', 'Ayer compré pan'], ['Bilbora joan nintzen', 'Fui a Bilbao'], ['Zer egin zenuen atzo?', '¿Qué hiciste ayer?'], ['Atzo film bat ikusi genuen', 'Ayer vimos una película'], ['Gaur goizean kafea hartu dut', 'Esta mañana he tomado café'], ['Etxera etorri naiz', 'He venido a casa'], ['Bi liburu irakurri nituen', 'Leí dos libros'], ['Zuek zinemara joan zineten', 'Vosotros fuisteis al cine']],
gen: [['tbl', 'ukanp'], ['tbl', 'ukanppl'], ['tbl', 'izanp']],
x: [
  fl('Atzo ogia erosi ___. (nik)', 'nuen', ['nuen', 'nintzen', 'dut', 'zuen']),
  fl('Atzo Bilbora joan ___. (ni)', 'nintzen', ['nintzen', 'nuen', 'naiz', 'zen']),
  fl('Zuk atzo zer egin ___?', 'zenuen', ['zenuen', 'zinen', 'zuen', 'duzu']),
  fl('Gu zinemara joan ___. (atzo)', 'ginen', ['ginen', 'genuen', 'gara', 'ziren']),
  fl('Zuek atzo filma ikusi ___.', 'zenuten', ['zenuten', 'zineten', 'zuten', 'duzue']),
  fl('Ane atzo etorri ___.', 'zen', ['zen', 'zuen', 'da', 'zegoen']),
  fl('Nik hiru liburu irakurri ___.', 'nituen', ['nituen', 'nuen', 'ditut', 'nintzen']),
  fl('Gaur goizean kafea hartu ___. (nik, perfecto)', 'dut', ['dut', 'nuen', 'naiz', 'ditut']),
  fl('Gaur etxera etorri ___. (ni, perfecto)', 'naiz', ['naiz', 'nintzen', 'dut', 'nago']),
  mc('«Ayer compré pan» →', 'Atzo ogia erosi nuen', ['Atzo ogia erosi nintzen', 'Atzo ogia erosi dut', 'Atzo ogia erostzen nuen']),
  mc('«He ido a casa» →', 'Etxera joan naiz', ['Etxera joan dut', 'Etxera joan nuen', 'Etxera joaten naiz']),
  mc('«¿Qué hiciste ayer?» →', 'Zer egin zenuen atzo?', ['Zer egin duzu atzo?', 'Zer egingo duzu atzo?', 'Zer egiten duzu atzo?']),
  mc('«Atzo film bat ikusi genuen» →', 'Ayer vimos una película', ['Ayer ibamos al cine', 'Mañana veremos una película', 'Hemos visto una película']),
],
d: [{ title: 'Elkarrizketa 17 · Asteburua', lines: [['A', 'Zer egin zenuen asteburuan?'], ['B', 'Larunbatean Bilbora joan nintzen eta lagunekin bazkaldu nuen.'], ['A', 'Eta igandean?'], ['B', 'Igandean etxean egon nintzen eta film bat ikusi nuen.']],
  qs: [['¿Adónde fue B el sábado?', 'A Bilbao', ['A San Sebastián', 'Al cine', 'Se quedó en casa']], ['¿Con quién comió?', 'Con amigos', ['Con su familia', 'Solo', 'Con A']], ['¿Qué hizo el domingo?', 'Se quedó en casa y vio una película', ['Fue a Bilbao', 'Trabajó', 'Salió con amigos']]] }],
w: [wr('Cuenta qué hiciste ayer (dos acciones).', ['atzo', 'nuen|nintzen'], 'Atzo ogia erosi nuen eta lanera joan nintzen.')],
});

U({ id: 'a2-3', lv: 'A2', t: 'Datiboa: niri, zuri, hari', es: 'Dativo (a quién): dit, dizu, dio…', ic: '🎁',
g: `<h4>Verbos con tres participantes: NOR-NORI-NORK (dar, decir, regalar, escribir, enseñar…)</h4>
<p>Estructura: <b>Nork + nori + zer + participio + auxiliar</b> → <i>Anek niri liburu bat eman dit.</i></p>
<h4>Dativo (nori)</h4>
<p>Nombres: <b>-ri</b> tras vocal (<i>Aneri, amari, irakasleari</i>), <b>-i</b> tras consonante (<i>Mikeli, Joni</i>). Pronombres: <b>niri, zuri, hari, guri, zuei, haiei</b>.</p>
<table><tr><th>hark →</th><th>niri</th><th>zuri</th><th>hari</th><th>guri</th><th>zuei</th><th>haiei</th></tr>
<tr><td>1 cosa</td><td><b>dit</b></td><td><b>dizu</b></td><td><b>dio</b></td><td><b>digu</b></td><td><b>dizue</b></td><td><b>die</b></td></tr>
<tr><td>varias</td><td><b>dizkit</b></td><td><b>dizkizu</b></td><td><b>dizkio</b></td><td><b>dizkigu</b></td><td><b>dizkizue</b></td><td><b>dizkie</b></td></tr></table>
<table><tr><th>→ a él/ella</th><th>nik</th><th>zuk</th><th>hark</th><th>guk</th><th>zuek</th><th>haiek</th></tr>
<tr><td>1 cosa</td><td><b>diot</b></td><td><b>diozu</b></td><td><b>dio</b></td><td><b>diogu</b></td><td><b>diozue</b></td><td><b>diote</b></td></tr></table>
<p>Nik zuri: <b>dizut</b> (1 cosa) / <b>dizkizut</b> (varias). Verbos: eman (dar), esan (decir), bidali (enviar), erakutsi (enseñar), idatzi (escribir), deitu (llamar), erosi (comprar), azaldu (explicar), utzi (prestar/dejar).</p>`,
v: [['eman', 'dar'], ['esan', 'decir'], ['bidali', 'enviar'], ['erakutsi', 'enseñar'], ['idatzi', 'escribir'], ['deitu', 'llamar'], ['galdetu', 'preguntar'], ['azaldu', 'explicar'], ['utzi', 'prestar'], ['oparia', 'el regalo'], ['gutuna', 'la carta'], ['mezua', 'el mensaje']],
p: [['Anek niri liburu bat eman dit', 'Ane me ha dado un libro'], ['Nik zuri gutuna bidali dizut', 'Yo te he enviado la carta'], ['Zuk Mikeli deitu diozu?', '¿Has llamado a Mikel?'], ['Irakasleak ariketak ematen dizkigu', 'La profesora nos da ejercicios'], ['Amak niri oparia erosi dit', 'Mi madre me ha comprado un regalo'], ['Nik Aneri egia esan diot', 'Le he dicho la verdad a Ane'], ['Nork esan dizu hori?', '¿Quién te ha dicho eso?'], ['Aneri mezua bidali diot', 'Le he enviado el mensaje a Ane']],
gen: [['tbl', 'datsg'], ['tbl', 'datpl'], ['tbl', 'datnik']],
x: [
  fl('Nik zuri gutuna bidali ___. (te lo he enviado)', 'dizut', ['dizut', 'diot', 'dit', 'dizu']),
  fl('Nik Anari egia esan ___. (le he dicho)', 'diot', ['diot', 'dizut', 'dio', 'dit']),
  fl('Zuk Mikeli liburua eman ___. (le has dado)', 'diozu', ['diozu', 'dizu', 'dio', 'didazu']),
  fl('Anek niri oparia eman ___. (me ha dado)', 'dit', ['dit', 'dizu', 'diot', 'dio']),
  fl('Anek guri hori esan ___. (nos ha dicho)', 'digu', ['digu', 'dit', 'diogu', 'dizu']),
  fl('Anek zuei deitu ___. (os ha llamado)', 'dizue', ['dizue', 'dizu', 'diozue', 'die']),
  fl('Anek haiei esan ___. (les ha dicho)', 'die', ['die', 'dio', 'dizue', 'diote']),
  fl('Anek niri bi liburu eman ___. (varios objetos)', 'dizkit', ['dizkit', 'dit', 'dizkio', 'ditut']),
  fl('Nik zuri bi gutun bidali ___. (varios)', 'dizkizut', ['dizkizut', 'dizut', 'dizkit', 'dizkiot']),
  mc('Dativo de «Ane»', 'Aneri', ['Anek', 'Aneren', 'Anerekin']),
  mc('Dativo de «Mikel»', 'Mikeli', ['Mikelek', 'Mikelen', 'Mikelekin']),
  mc('Dativo de «ama»', 'amari', ['amak', 'amaren', 'amarekin']),
  mc('«Nork esan dizu hori?» →', '¿Quién te ha dicho eso?', ['¿A quién se lo has dicho?', '¿Qué te ha dicho?', '¿Quién lo dirá?']),
],
d: [{ title: 'Elkarrizketa 18 · Deia', lines: [['A', 'Mikel, zuk Aneri deitu diozu?'], ['B', 'Ez, oraindik ez diot deitu. Zergatik?'], ['A', 'Nik gaur goizean deitu diot eta esan dit bihar etorriko dela.'], ['B', 'Bikain! Orduan, ez diot deituko.']],
  qs: [['¿Mikel ha llamado a Ane?', 'Todavía no', ['Sí, esta mañana', 'Sí, ayer', 'Nunca llama']], ['¿Quién ha llamado a Ane esta mañana?', 'A', ['B', 'Ane llamó', 'Nadie']], ['¿Qué ha dicho Ane?', 'Que vendrá mañana', ['Que no viene', 'Que está enferma', 'Que ya vino']]] }],
w: [wr('Escribe qué le has regalado o enviado a alguien (con dizkio/dio/diot).', ['diot|dizut|dio|dizkiot'], 'Nik Aneri liburu bat eman diot.')],
});

U({ id: 'a2-4', lv: 'A2', t: 'Etorkizuna: -ko / -go', es: 'Futuro', ic: '🔮',
g: `<h4>Futuro: participio + <b>-ko</b> (tras n: <b>-go</b>) + auxiliar</h4>
<table><tr><th>participio</th><th>futuro</th><th>participio</th><th>futuro</th></tr>
<tr><td>ikusi</td><td>ikus<b>iko</b></td><td>egin</td><td>egin<b>go</b></td></tr>
<tr><td>etorri</td><td>etorriko</td><td>joan</td><td>joango</td></tr>
<tr><td>erosi</td><td>erosiko</td><td>jan / edan</td><td>jango / edango</td></tr>
<tr><td>hartu</td><td>hartuko</td><td>esan / eman</td><td>esango / emango</td></tr>
<tr><td>ikasi</td><td>ikasiko</td><td>izan / egon</td><td>izango / egongo</td></tr></table>
<p>Regla: -ko por defecto; si el participio acaba en <b>-n</b> → <b>-go</b>. El auxiliar es el mismo que en presente: <i>Bihar Bilbora joango naiz. · Asteburuan lagunak ikusiko ditut.</i></p>
<p>Marcadores: <b>bihar</b> mañana · <b>etzi</b> pasado mañana · <b>datorren astean</b> la semana que viene · <b>hurrengo urtean</b> el año próximo · <b>laster</b> pronto.</p>
<p>Tiempo: <i>Nolako eguraldia egingo du?</i> → <i>Euria egingo du / Eguraldi ona egingo du.</i></p>`,
v: [['bihar', 'mañana'], ['etzi', 'pasado mañana'], ['datorren astean', 'la semana que viene'], ['hurrengo urtean', 'el año próximo'], ['laster', 'pronto'], ['eguraldia', 'el tiempo'], ['euria', 'la lluvia'], ['eguzkia', 'el sol'], ['hotza', 'el frío'], ['beroa', 'el calor'], ['haizea', 'el viento'], ['azterketa', 'el examen']],
p: [['Bihar Bilbora joango naiz', 'Mañana iré a Bilbao'], ['Etzi lanera etorriko naiz', 'Pasado mañana vendré al trabajo'], ['Datorren astean euskara azterketa egingo dugu', 'La semana que viene haremos el examen de euskera'], ['Zer egingo duzu asteburuan?', '¿Qué harás el fin de semana?'], ['Bihar euria egingo du', 'Mañana lloverá'], ['Eguraldi ona egingo du', 'Hará buen tiempo'], ['Laster etorriko gara', 'Vendremos pronto'], ['Asteburuan lagunak ikusiko ditut', 'El fin de semana veré a mis amigos']],
gen: ['fut'],
x: [
  fl('Bihar Bilbora ___ naiz. (joan)', 'joango', ['joango', 'joaten', 'joan', 'joanko']),
  fl('Asteburuan lagunak ___ ditut. (ikusi)', 'ikusiko', ['ikusiko', 'ikusten', 'ikusigo', 'ikusi']),
  fl('Etzi euskara azterketa ___ dut. (egin)', 'egingo', ['egingo', 'egiko', 'egiten', 'egin']),
  fl('Datorren astean etxera ___ gara. (etorri)', 'etorriko', ['etorriko', 'etorrigo', 'etortzen', 'etorri']),
  fl('Zuek bihar zer ___ duzue? (egin)', 'egingo', ['egingo', 'egiten', 'egiko', 'egin']),
  fl('Bihar euria ___ du. (egin)', 'egingo', ['egingo', 'egiten', 'egiko', 'egin']),
  fl('Ane bihar etxean ___ da. (egon)', 'egongo', ['egongo', 'egonko', 'egoten', 'egon']),
  mc('Futuro de «ikasi»', 'ikasiko', ['ikasigo', 'ikasten', 'ikasko']),
  mc('Futuro de «jan»', 'jango', ['janko', 'jaten', 'jatiko']),
  mc('Futuro de «hartu»', 'hartuko', ['hartugo', 'hartzen', 'hartuen']),
  mc('«Bihar etorriko naiz» →', 'Vendré mañana', ['Vine ayer', 'Vengo siempre', 'Estoy viniendo']),
  mc('«Etzi» significa…', 'pasado mañana', ['mañana', 'ayer', 'hoy']),
],
d: [{ title: 'Elkarrizketa 19 · Asteburuko planak', lines: [['A', 'Zer egingo duzu asteburuan?'], ['B', 'Larunbatean Donostiara joango naiz. Igandean etxean egongo naiz eta ikasiko dut. Eta zuk?'], ['A', 'Nire lagunak etorriko dira eta elkarrekin bazkalduko dugu.'], ['B', 'Primeran! Eguraldi ona egingo du.']],
  qs: [['¿Qué hará B el sábado?', 'Ir a San Sebastián', ['Quedarse en casa', 'Estudiar', 'Comer con amigos']], ['¿Qué hará A?', 'Comerá con sus amigos', ['Irá a Bilbao', 'Estudiará', 'Trabajará']], ['¿Qué tiempo hará?', 'Bueno', ['Lluvioso', 'Frío', 'Ventoso']]] }],
w: [wr('Escribe qué harás mañana (con -ko/-go).', ['ko|go', 'bihar'], 'Bihar lanera joango naiz eta arratsaldean ikasiko dut.')],
});

U({ id: 'a2-5', lv: 'A2', t: 'Nahi, behar, ezin, dezaket', es: 'Querer, deber, no poder, poder', ic: '💪',
g: `<h4>Verbos modales con participio</h4>
<ul><li><b>nahi dut</b> + participio = quiero: <i>Euskara ikasi nahi dut.</i></li>
<li><b>behar dut</b> + participio = tengo que / necesito: <i>Lanera joan behar dut.</i> · negativo: <i>Ez duzu etorri behar.</i> (no hace falta)</li>
<li><b>ezin dut</b> + participio = no puedo: <i>Ezin dut etorri.</i> · <i>Ezin naiz joan.</i> (el auxiliar es el del verbo: izan/ukan)</li>
<li><b>-ke</b> (poder): <b>dezaket, dezakezu, dezake, dezakegu, dezakezue, dezakete</b> + verbo en raíz: <i>Euskaraz hitz egin dezaket.</i> · <i>Igeri egin dezaket.</i></li>
<li><b>jakin</b> (saber): <b>dakit, dakizu, daki, dakigu, dakizue, dakite</b> → <i>Euskaraz badakit.</i> · <i>Ba al dakizu igeri egiten?</i></li></ul>
<p>Con sustantivo: <i>Dirua behar dut.</i> (necesito dinero) · <i>Kafea nahi dut.</i></p>`,
v: [['nahi', 'querer'], ['behar', 'necesitar/deber'], ['ezin', 'no poder'], ['jakin', 'saber'], ['igeri egin', 'nadar'], ['gidatu', 'conducir'], ['kantatu', 'cantar'], ['dantzatu', 'bailar'], ['lan asko', 'mucho trabajo'], ['denbora', 'tiempo'], ['noski', 'por supuesto'], ['primeran', 'genial']],
p: [['Euskara ikasi nahi dut', 'Quiero aprender euskera'], ['Lanera joan behar dut', 'Tengo que ir al trabajo'], ['Ezin dut etorri', 'No puedo venir'], ['Euskaraz hitz egin dezaket', 'Puedo hablar en euskera'], ['Ez duzu etorri behar', 'No tienes que venir'], ['Ingelesez badakit', 'Sé inglés'], ['Zer egin nahi duzu gaur?', '¿Qué quieres hacer hoy?'], ['Lan asko dut eta ezin dut atera', 'Tengo mucho trabajo y no puedo salir']],
gen: [['tbl', 'dezake'], ['tbl', 'jakin']],
x: [
  fl('Kafe bat hartu ___ dut. (quiero)', 'nahi', ['nahi', 'behar', 'ezin', 'dezaket']),
  fl('Etxera joan ___ dut. (tengo que)', 'behar', ['behar', 'nahi', 'ezin', 'gustatzen']),
  fl('Gaur ___ dut etorri. (no puedo)', 'ezin', ['ezin', 'nahi', 'behar', 'ez']),
  fl('Nik euskaraz hitz egin ___.', 'dezaket', ['dezaket', 'dezakezu', 'dezake', 'dezakegu']),
  fl('Zuk igeri egin ___.', 'dezakezu', ['dezakezu', 'dezaket', 'dezakete', 'dezake']),
  fl('Haiek euskaraz hitz egin ___.', 'dezakete', ['dezakete', 'dezakezue', 'dezake', 'dezakegu']),
  fl('Ingelesez ___ (yo sé).', 'badakit', ['badakit', 'badakizu', 'badaki', 'badakigu']),
  fl('Zuek euskaraz ___? (¿sabéis?)', 'badakizue', ['badakizue', 'badakite', 'badakigu', 'badakizu']),
  mc('«Tengo que trabajar» →', 'Lan egin behar dut', ['Lan egin nahi dut', 'Lan egin dezaket', 'Lan egiten dut']),
  mc('«No puedo venir» →', 'Ezin dut etorri', ['Ez dut etorri nahi', 'Ez dut etorri behar', 'Ez naiz etorri']),
  mc('«No tienes que venir» →', 'Ez duzu etorri behar', ['Ezin duzu etorri', 'Ez duzu etorri nahi', 'Etorri behar duzu']),
  mc('«Euskara ikasi nahi dut» →', 'Quiero aprender euskera', ['Puedo aprender euskera', 'Tengo que aprender euskera', 'Aprendí euskera']),
],
d: [{ title: 'Elkarrizketa 20 · Zinemara?', lines: [['A', 'Zer nahi duzu egin gaur?'], ['B', 'Zinemara joan nahi dut, baina ezin dut. Lan asko dut eta etxera joan behar dut.'], ['A', 'Ba, bihar joango gara.'], ['B', 'Primeran!']],
  qs: [['¿Qué quiere hacer B?', 'Ir al cine', ['Ir a casa', 'Trabajar', 'Estudiar']], ['¿Por qué no puede?', 'Tiene mucho trabajo', ['Está enfermo', 'No tiene dinero', 'No le gusta']], ['¿Cuándo irán?', 'Mañana', ['Hoy', 'El sábado', 'Nunca']]] }],
w: [wr('Escribe una cosa que quieres hacer y otra que no puedes hacer hoy.', ['nahi', 'ezin'], 'Zinemara joan nahi dut, baina ezin dut.')],
});

U({ id: 'a2-6', lv: 'A2', t: 'Helburua: -tzera / -tzeko', es: 'Finalidad: ir a… / para…', ic: '🎯',
g: `<h4>-tzera (con joan / etorri): «ir a hacer algo»</h4>
<p>Se forma con el habitual (-tzen/-ten) cambiando <b>-n</b> por <b>-ra</b>: <i>erosten → eros<b>tera</b></i>, <i>ikusten → ikus<b>tera</b></i>, <i>irakurtzen → irakurtzera</i>, <i>egiten → egitera</i>, <i>jaten → jatera</i>.</p>
<p><i>Ogia erostera noa.</i> · <i>Lagunak ikustera etorri naiz.</i> · <i>Euskara ikastera joan nintzen.</i></p>
<h4>-tzeko: «para hacer algo» (finalidad)</h4>
<p>Cambia <b>-n</b> por <b>-ko</b>: <i>egiten → egiteko</i>, <i>ikasten → ikasteko</i>. <i>Lanera joateko autobusa hartzen dut.</i> · <i>Euskara ikasteko ikastaroa egiten dut.</i> · <i>Kafea egiteko ura behar dut.</i></p>
<p>También con sustantivos: <b>-rako</b> «para»: <i>Bilborako txartela</i>, <i>bihar-rako</i> (para mañana).</p>`,
v: [['erostera', 'a comprar'], ['ikustera', 'a ver'], ['jatera', 'a comer'], ['ikastera', 'a estudiar'], ['joateko', 'para ir'], ['ikasteko', 'para estudiar'], ['egiteko', 'para hacer'], ['ikastaroa', 'el curso'], ['erosketak', 'las compras'], ['elkarrekin', 'juntos'], ['noski', 'por supuesto'], ['denda', 'la tienda']],
p: [['Ogia erostera noa', 'Voy a comprar pan'], ['Lagunak ikustera etorri naiz', 'He venido a ver a mis amigos'], ['Euskara ikastera Donostiara joan nintzen', 'Fui a San Sebastián a aprender euskera'], ['Lanera joateko autobusa hartzen dut', 'Cojo el autobús para ir al trabajo'], ['Euskara ikasteko ikastaroa egiten dut', 'Hago un curso para aprender euskera'], ['Kafea egiteko ura behar dut', 'Necesito agua para hacer café'], ['Erosketak egitera goaz', 'Vamos a hacer la compra'], ['Elkarrekin joango gara', 'Iremos juntos']],
gen: ['fin'],
x: [
  fl('Ogia ___ noa. (erosi → ir a comprar)', 'erostera', ['erostera', 'erosteko', 'erosiko', 'erosten']),
  fl('Liburuak ___ goaz. (irakurri → ir a leer)', 'irakurtzera', ['irakurtzera', 'irakurtzeko', 'irakurriko', 'irakurten']),
  fl('Euskara ___ etorri naiz. (ikasi → a estudiar)', 'ikastera', ['ikastera', 'ikasteko', 'ikasiko', 'ikasten']),
  fl('Lagunak ___ noa. (ikusi → a ver)', 'ikustera', ['ikustera', 'ikusteko', 'ikusiko', 'ikusten']),
  fl('Lanera ___ autobusa hartzen dut. (joan → para ir)', 'joateko', ['joateko', 'joatera', 'joango', 'joaten']),
  fl('Euskara ___ ikastaroa egiten dut. (ikasi → para estudiar)', 'ikasteko', ['ikasteko', 'ikastera', 'ikasiko', 'ikasten']),
  fl('Kafea ___ ura behar dut. (egin → para hacer)', 'egiteko', ['egiteko', 'egitera', 'egingo', 'egiten']),
  mc('«Ogia erostera noa» →', 'Voy a comprar pan', ['Compro pan para ir', 'Iré a comprar pan mañana', 'He comprado pan']),
  mc('«Euskara ikasteko» →', 'para aprender euskera', ['a aprender euskera (ir)', 'aprenderé euskera', 'aprendo euskera']),
  mc('«Bilborako txartela» →', 'El billete para Bilbao', ['El billete de Bilbao', 'El billete en Bilbao', 'El billete desde Bilbao']),
],
d: [{ title: 'Elkarrizketa 21 · Erosketak', lines: [['Ane', 'Nora zoaz?'], ['Mikel', 'Dendara noa, ogia erostera. Eta zu?'], ['Ane', 'Nik ere erosketak egin behar ditut. Elkarrekin joango gara?'], ['Mikel', 'Bai, noski!']],
  qs: [['¿A qué va Mikel a la tienda?', 'A comprar pan', ['A trabajar', 'A ver a un amigo', 'A comer']], ['¿Qué propone Ane?', 'Ir juntos', ['Ir a casa', 'Esperar', 'Ir mañana']]] }],
});

U({ id: 'a2-7', lv: 'A2', t: 'Konparazioa', es: 'Comparativos y superlativos', ic: '⚖️',
g: `<h4>Comparativo y superlativo</h4>
<table><tr><th>adjetivo</th><th>comparativo (-ago)</th><th>superlativo (-en)</th></tr>
<tr><td>handia</td><td>handi<b>agoa</b></td><td>handi<b>ena</b></td></tr><tr><td>altua</td><td>altuagoa</td><td>altuena</td></tr>
<tr><td>txikia</td><td>txikiagoa</td><td>txikiena</td></tr><tr><td>azkarra (rápido)</td><td>azkarragoa</td><td>azkarrena</td></tr>
<tr><td>garestia (caro)</td><td>garestiagoa</td><td>garestiena</td></tr><tr><td>merkea (barato)</td><td>merkeagoa</td><td>merkeena</td></tr>
<tr><td>ona (bueno)</td><td><b>hobea</b></td><td><b>onena / hoberena</b></td></tr><tr><td>txarra (malo)</td><td><b>okerragoa</b></td><td>txarrena</td></tr>
<tr><td>asko (mucho)</td><td><b>gehiago</b></td><td><b>gehien</b></td></tr><tr><td>gutxi (poco)</td><td><b>gutxiago</b></td><td><b>gutxien</b></td></tr></table>
<ul><li><b>baino</b> = que: <i>Ane Mikel <b>baino</b> altuagoa da.</i></li>
<li><b>bezain</b> = tan… como: <i>Mikel Ane <b>bezain</b> altua da.</i></li>
<li><b>askoz</b> = mucho más: <i>Askoz handiagoa da.</i></li>
<li>Superlativo: <i>Hau da handiena.</i> (el más grande)</li></ul>`,
v: [['handiagoa', 'más grande'], ['txikiagoa', 'más pequeño'], ['altuagoa', 'más alto'], ['azkarragoa', 'más rápido'], ['motela', 'lento'], ['garestia', 'caro'], ['merkea', 'barato'], ['hobea', 'mejor'], ['okerragoa', 'peor'], ['gehiago', 'más'], ['gutxiago', 'menos'], ['askoz', 'mucho más']],
p: [['Ane Mikel baino altuagoa da', 'Ane es más alta que Mikel'], ['Mikel Ane bezain altua da', 'Mikel es tan alto como Ane'], ['Hau da handiena', 'Este es el más grande'], ['Trena autobusa baino azkarragoa da', 'El tren es más rápido que el autobús'], ['Autobusa merkeagoa da', 'El autobús es más barato'], ['Bilbo Donostia baino handiagoa da', 'Bilbao es más grande que San Sebastián'], ['Hau hobea da', 'Este es mejor'], ['Gaur gehiago ikasi dut', 'Hoy he estudiado más']],
x: [
  mc('«más grande» →', 'handiagoa', ['handiena', 'handia', 'handiegia']),
  mc('«el más alto» →', 'altuena', ['altuagoa', 'altua', 'altuen']),
  mc('«mejor» →', 'hobea', ['onagoa', 'onena', 'ona']),
  mc('«más caro» →', 'garestiagoa', ['garestiena', 'garestia', 'garestiago']),
  mc('«el más barato» →', 'merkeena', ['merkeagoa', 'merkea', 'merkena']),
  mc('«peor» →', 'okerragoa', ['txarragoa', 'hobea', 'onena']),
  mc('«más» (cantidad) →', 'gehiago', ['asko', 'gehien', 'gutxi']),
  fl('Ane Mikel ___ altuagoa da. (que)', 'baino', ['baino', 'bezain', 'eta', 'ere']),
  fl('Mikel Ane ___ altua da. (tan… como)', 'bezain', ['bezain', 'baino', 'eta', 'ere']),
  fl('Hau da ___. (el más grande)', 'handiena', ['handiena', 'handiagoa', 'handia', 'handiegia']),
  fl('Bilbo Donostia ___ handiagoa da.', 'baino', ['baino', 'bezain', 'gehien', 'askoz']),
  mc('«Trena autobusa baino azkarragoa da» →', 'El tren es más rápido que el autobús', ['El autobús es más rápido que el tren', 'El tren es tan rápido como el autobús', 'El tren es el más rápido']),
],
d: [{ title: 'Elkarrizketa 22 · Garraioa', lines: [['A', 'Zein da azkarragoa, trena ala autobusa?'], ['B', 'Trena azkarragoa da autobusa baino.'], ['A', 'Eta merkeagoa?'], ['B', 'Autobusa merkeagoa da.']],
  qs: [['¿Qué es más rápido?', 'El tren', ['El autobús', 'Los dos igual', 'El coche']], ['¿Qué es más barato?', 'El autobús', ['El tren', 'Los dos igual', 'El avión']]] }],
});
})();
