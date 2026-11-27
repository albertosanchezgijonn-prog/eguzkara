/* Contenido A1 · unidades 1-8 (material original) */
(function () {
const { mc, fl, wr, U } = E;

U({ id: 'a1-1', lv: 'A1', t: 'Soinuak eta agurrak', es: 'Sonidos y saludos', ic: '👋',
g: `<h4>Pronunciación</h4>
<p>El euskera se lee <b>como se escribe</b>: cada letra suena siempre igual. No se escriben tildes en euskera batua.</p>
<table><tr><th>Grafía</th><th>Sonido</th><th>Ejemplo</th></tr>
<tr><td>a e i o u</td><td>como en español</td><td>aita, ama</td></tr>
<tr><td>h</td><td>muda</td><td>hemen → «emen»</td></tr>
<tr><td>g</td><td>siempre fuerte (gue, gui)</td><td>gizon → «guizon», gero → «guero»</td></tr>
<tr><td>z</td><td>«s» apical (como la s castellana)</td><td>zu, zer, etxea</td></tr>
<tr><td>s</td><td>«s» más suave y aplanada</td><td>sagarra, asko</td></tr>
<tr><td>x</td><td>«sh»</td><td>xake, Xabier</td></tr>
<tr><td>tx</td><td>«ch»</td><td>txakurra, etxea</td></tr>
<tr><td>ts / tz</td><td>«ts» (ts suave / tz apical)</td><td>zortzi, bost</td></tr>
<tr><td>j</td><td>varía según zona (y/j)</td><td>jan, joan</td></tr>
<tr><td>r / rr</td><td>vibrante simple / múltiple (la r inicial suena fuerte)</td><td>ama / arratsalde</td></tr>
<tr><td>ñ, ll</td><td>ñ / «ll» (y)</td><td>Iñaki</td></tr></table>
<h4>Saludos básicos</h4>
<ul><li><b>Kaixo</b> hola · <b>Agur</b> adiós · <b>Egun on</b> buenos días · <b>Arratsalde on</b> buenas tardes · <b>Gabon</b> buenas noches</li>
<li><b>Zer moduz?</b> ¿qué tal? → <b>Ondo</b> / <b>Txarto</b> / <b>Hala-hala</b> (así así)</li>
<li><b>Eskerrik asko</b> gracias · <b>Mesedez</b> por favor · <b>Barkatu</b> perdón · <b>Ongi etorri</b> bienvenido</li></ul>`,
v: [['kaixo', 'hola'], ['agur', 'adiós'], ['egun on', 'buenos días'], ['arratsalde on', 'buenas tardes'], ['gabon', 'buenas noches'], ['eskerrik asko', 'muchas gracias'], ['mesedez', 'por favor'], ['barkatu', 'perdón'], ['bai', 'sí'], ['ez', 'no'], ['ondo', 'bien'], ['txarto', 'mal']],
p: [['Kaixo!', 'Hola'], ['Egun on', 'Buenos días'], ['Arratsalde on', 'Buenas tardes'], ['Gabon', 'Buenas noches'], ['Zer moduz?', '¿Qué tal?'], ['Ondo, eskerrik asko', 'Bien, gracias'], ['Ez dut ulertzen', 'No entiendo'], ['Mesedez, errepikatu', 'Por favor, repite'], ['Ongi etorri', 'Bienvenido'], ['Agur eta ondo ibili', 'Adiós y que te vaya bien']],
x: [
  mc('¿Cómo suena «tx» en «etxea»?', 'como «ch» (e-che-a)', ['como «ts»', 'como «tr»', 'como «x» francesa']),
  mc('¿Cómo se pronuncia la «h» en «hemen»?', 'no se pronuncia', ['como la «j» española', 'como «g»', 'como «k»']),
  mc('«gizon» se lee…', '«guizon»', ['«jizon»', '«yizon»', '«zizon»']),
  mc('«xake» (ajedrez) empieza por un sonido…', '«sh»', ['«ch»', '«j»', '«s»']),
  mc('La «z» vasca (zu, zer) suena como…', 'una «s» apical', ['la «z» castellana de «zapato» (θ)', 'una «th» inglesa', 'una «ch»']),
  mc('¿Qué saludo usas por la mañana?', 'Egun on', ['Gabon', 'Arratsalde on', 'Agur']),
  mc('«Eskerrik asko» significa…', 'muchas gracias', ['por favor', 'perdón', 'bienvenido']),
  mc('«Zer moduz?» significa…', '¿Qué tal?', ['¿Cómo te llamas?', '¿Qué es?', '¿Dónde estás?']),
  fl('Arratsalde ___ (buenas tardes)', 'on', ['on', 'ona', 'ondo']),
  fl('Gau ___ (buenas noches)', 'on', ['on', 'ez', 'asko']),
  fl('___ asko! (muchas gracias)', 'Eskerrik', ['Eskerrik', 'Mesedez', 'Barkatu']),
  mc('«Ez dut ulertzen» significa…', 'no entiendo', ['no tengo', 'no estoy', 'no voy']),
],
d: [{ title: 'Elkarrizketa 1 · Saludo', lines: [['A', 'Egun on!'], ['B', 'Egun on! Zer moduz?'], ['A', 'Ondo, eskerrik asko. Eta zu?'], ['B', 'Ni ere ondo.']],
  qs: [['¿Cómo está A?', 'Bien', ['Mal', 'Así así', 'Cansado']], ['¿En qué momento del día se saludan?', 'Por la mañana', ['Por la tarde', 'Por la noche', 'Al despedirse']], ['«Ni ere ondo» significa…', 'yo también bien', ['yo no estoy bien', 'yo soy bueno', 'yo bebo bien']]] }],
w: [wr('Saluda a alguien por la mañana y pregunta qué tal (en euskera).', ['egun on|kaixo', 'zer moduz'], 'Egun on! Zer moduz?')],
});

U({ id: 'a1-2', lv: 'A1', t: 'Izan: nor naiz?', es: 'Ser: presentaciones', ic: '🧑',
g: `<h4>IZAN (ser) · presente</h4>
<table><tr><th>ni</th><th>zu</th><th>hura</th><th>gu</th><th>zuek</th><th>haiek</th></tr><tr><td><b>naiz</b></td><td><b>zara</b></td><td><b>da</b></td><td><b>gara</b></td><td><b>zarete</b></td><td><b>dira</b></td></tr></table>
<ul><li>Orden: <b>Sujeto + atributo + verbo</b> → <i>Ni Mikel naiz</i> (el verbo va al final).</li>
<li>Los pronombres pueden omitirse: <i>Irakaslea naiz</i>.</li>
<li>Con sujeto plural, el atributo va en plural: <i>Gu ikasleak gara</i>.</li>
<li><b>-koa / -koak</b> = «de (lugar)»: <i>Bilbokoa naiz</i> (soy de Bilbao); <i>Bilbokoak gara</i>.</li>
<li>Nacionalidades: euskalduna, espainiarra, frantsesa, ingelesa, alemaniarra, italiarra.</li></ul>
<h4>Preguntas</h4><p><b>Nor zara?</b> ¿Quién eres? · <b>Zer zara?</b> ¿Qué eres (profesión)? · <b>Nongoa zara?</b> ¿De dónde eres?</p>`,
v: [['ikaslea', 'estudiante'], ['irakaslea', 'profesor/a'], ['medikua', 'médico'], ['sukaldaria', 'cocinero'], ['zerbitzaria', 'camarero'], ['langilea', 'trabajador'], ['laguna', 'amigo'], ['euskalduna', 'vascohablante'], ['espainiarra', 'español'], ['frantsesa', 'francés'], ['ingelesa', 'inglés']],
p: [['Ni Mikel naiz', 'Yo soy Mikel'], ['Zu irakaslea zara', 'Tú eres profesor'], ['Ane ikaslea da', 'Ane es estudiante'], ['Gu Bilbokoak gara', 'Nosotros somos de Bilbao'], ['Zuek lagunak zarete', 'Vosotros sois amigos'], ['Haiek euskaldunak dira', 'Ellos son vascohablantes'], ['Nongoa zara?', '¿De dónde eres?'], ['Donostiakoa naiz', 'Soy de San Sebastián'], ['Ni sukaldaria naiz', 'Yo soy cocinero']],
gen: [['tbl', 'izan']],
x: [
  fl('Ni ikaslea ___.', 'naiz', ['naiz', 'zara', 'da', 'gara']),
  fl('Zu irakaslea ___.', 'zara', ['naiz', 'zara', 'da', 'zarete']),
  fl('Ane medikua ___.', 'da', ['da', 'dira', 'zara', 'naiz']),
  fl('Gu euskaldunak ___.', 'gara', ['gara', 'garate', 'dira', 'zarete']),
  fl('Zuek lagunak ___.', 'zarete', ['zarete', 'zara', 'dira', 'gara']),
  fl('Mikel eta Ane ikasleak ___.', 'dira', ['dira', 'da', 'gara', 'zarete']),
  fl('Nongoa ___ zu?', 'zara', ['zara', 'naiz', 'da', 'zarete']),
  fl('Ni Bilbo___ naiz. (de Bilbao)', 'koa', ['koa', 'ko', 'koak', 'tik']),
  mc('«Zu irakaslea zara» significa…', 'Tú eres profesor', ['Yo soy profesor', 'Él es profesor', 'Vosotros sois profesores']),
  mc('«Bilbokoa naiz» significa…', 'Soy de Bilbao', ['Voy a Bilbao', 'Estoy en Bilbao', 'Vengo de Bilbao']),
  mc('La forma de izan para «vosotros» es…', 'zarete', ['zara', 'gara', 'dira']),
  mc('«Nongoa zara?» pregunta…', 'el origen', ['el nombre', 'la profesión', 'la edad']),
  mc('«Zer zara zu?» pregunta…', 'la profesión', ['el origen', 'el nombre', 'el lugar']),
  mc('Gu Donostiako___ gara.', 'ak', ['a', 'ek', 'ko'], 'Sujeto plural → -koak: Donostiakoak.'),
],
d: [{ title: 'Elkarrizketa 2 · Aurkezpena', lines: [['Ane', 'Kaixo! Ni Ane naiz. Zu nor zara?'], ['Mikel', 'Kaixo, Ane! Ni Mikel naiz.'], ['Ane', 'Nongoa zara?'], ['Mikel', 'Donostiakoa naiz. Eta zu?'], ['Ane', 'Ni Bilbokoa naiz. Ikaslea naiz.']],
  qs: [['¿De dónde es Mikel?', 'De San Sebastián', ['De Bilbao', 'De Vitoria', 'De Pamplona']], ['¿De dónde es Ane?', 'De Bilbao', ['De San Sebastián', 'De Eibar', 'De Madrid']], ['¿Qué es Ane?', 'Estudiante', ['Profesora', 'Médica', 'Cocinera']]] }],
w: [wr('Preséntate: di cómo te llamas y de dónde eres.', ['naiz', 'ni|izena'], 'Ni Jon naiz. Madrilekoa naiz.')],
});

U({ id: 'a1-3', lv: 'A1', t: 'Galderak eta jabetzak', es: 'Preguntas y posesivos', ic: '❓',
g: `<h4>Palabras interrogativas</h4>
<table><tr><td><b>Zer</b> qué</td><td><b>Nor</b> quién</td><td><b>Non</b> dónde</td><td><b>Nora</b> adónde</td></tr>
<tr><td><b>Nondik</b> desde dónde</td><td><b>Nongo/a</b> de dónde</td><td><b>Noiz</b> cuándo</td><td><b>Zenbat</b> cuánto</td></tr>
<tr><td><b>Zein</b> cuál</td><td><b>Zergatik</b> por qué</td><td><b>Nolako</b> cómo (es)</td><td><b>Zer moduz</b> qué tal</td></tr></table>
<p>La palabra interrogativa va <b>justo antes del verbo</b>: <i>Zein da zure izena?</i></p>
<h4>Preguntas de sí/no</h4><p>Con entonación o con <b>al</b> antes del verbo: <i>Euskalduna al zara?</i> → <b>Bai</b>, naiz. / <b>Ez</b>, ez naiz.</p>
<h4>Posesivos</h4>
<table><tr><th>nire</th><th>zure</th><th>haren / bere</th><th>gure</th><th>zuen</th><th>haien</th></tr><tr><td>mi</td><td>tu</td><td>su</td><td>nuestro</td><td>vuestro</td><td>su (de ellos)</td></tr></table>
<p><i>Nire izena Ane da.</i> · <i>Zure etxea handia da.</i></p>`,
v: [['zer', 'qué'], ['nor', 'quién'], ['non', 'dónde'], ['nora', 'adónde'], ['noiz', 'cuándo'], ['zenbat', 'cuánto'], ['zein', 'cuál'], ['zergatik', 'por qué'], ['izena', 'nombre'], ['nire', 'mi'], ['zure', 'tu'], ['gure', 'nuestro']],
p: [['Zein da zure izena?', '¿Cuál es tu nombre?'], ['Nire izena Ane da', 'Mi nombre es Ane'], ['Nongoa zara?', '¿De dónde eres?'], ['Euskalduna al zara?', '¿Eres vascohablante?'], ['Bai, euskalduna naiz', 'Sí, soy vascohablante'], ['Zer da hau?', '¿Qué es esto?'], ['Nor da hura?', '¿Quién es aquél?'], ['Hau gure etxea da', 'Esta es nuestra casa'], ['Zure telefonoa zein da?', '¿Cuál es tu teléfono?']],
x: [
  fl('___ da zure izena? (¿cuál?)', 'Zein', ['Zein', 'Nor', 'Zenbat', 'Non']),
  fl('___ zara? (¿de dónde?)', 'Nongoa', ['Nongoa', 'Nora', 'Noiz', 'Zer']),
  fl('Hau ___ etxea da. (mi casa)', 'nire', ['nire', 'zure', 'gure', 'haien']),
  fl('Hau ___ liburua da. (tu libro)', 'zure', ['zure', 'nire', 'zuen', 'gure']),
  fl('Hau ___ gela da. (nuestra habitación)', 'gure', ['gure', 'nire', 'zuen', 'haien']),
  fl('Hori ___ etxea da. (vuestra casa)', 'zuen', ['zuen', 'zure', 'gure', 'haren']),
  fl('Hura ___ ama da. (la madre de ella)', 'haren', ['haren', 'zure', 'nire', 'gure']),
  fl('Euskalduna ___ zara? (partícula de pregunta)', 'al', ['al', 'ez', 'bai', 'ere']),
  mc('«Noiz» significa…', 'cuándo', ['dónde', 'quién', 'cuánto']),
  mc('«Zenbat» significa…', 'cuánto', ['cuál', 'cuándo', 'por qué']),
  mc('«Zergatik» significa…', 'por qué', ['dónde', 'quién', 'qué']),
  mc('«Nire izena Jon da» significa…', 'Mi nombre es Jon', ['Tu nombre es Jon', 'Su nombre es Jon', 'Nuestro nombre es Jon']),
  mc('Respuesta correcta a «Ikaslea al zara?» (sí)', 'Bai, ikaslea naiz', ['Bai, ikaslea zara', 'Ez, ikaslea naiz', 'Bai, ikaslea da']),
],
d: [{ title: 'Elkarrizketa 3 · Datuak', lines: [['Irakaslea', 'Egun on! Zein da zure izena?'], ['Leire', 'Nire izena Leire da.'], ['Irakaslea', 'Nongoa zara?'], ['Leire', 'Gasteizkoa naiz.'], ['Irakaslea', 'Ikaslea al zara?'], ['Leire', 'Bai, ikaslea naiz.']],
  qs: [['¿Cómo se llama la alumna?', 'Leire', ['Ane', 'Miren', 'Amaia']], ['¿De dónde es?', 'De Vitoria-Gasteiz', ['De Bilbao', 'De Donostia', 'De Iruñea']], ['¿Es estudiante?', 'Sí', ['No', 'Es profesora', 'No se sabe']]] }],
w: [wr('Pregunta a alguien cómo se llama y de dónde es.', ['zein|zer', 'izena', 'nongoa'], 'Zein da zure izena? Nongoa zara?')],
});

U({ id: 'a1-4', lv: 'A1', t: 'Hau, hori, hura: gauzak', es: 'Demostrativos, artículo y plural', ic: '📦',
g: `<h4>Demostrativos</h4>
<table><tr><th></th><th>singular</th><th>plural</th></tr><tr><td>cerca de mí</td><td><b>hau</b></td><td><b>hauek</b></td></tr><tr><td>cerca de ti</td><td><b>hori</b></td><td><b>horiek</b></td></tr><tr><td>lejos</td><td><b>hura</b></td><td><b>haiek</b></td></tr></table>
<h4>Artículo y plural</h4>
<ul><li>El artículo es sufijo: <b>-a</b> (singular) / <b>-ak</b> (plural). <i>etxe → etxea → etxeak</i>. Si acaba en -a no se duplica: <i>gela → gela → gelak</i>.</li>
<li>Indeterminado: <b>bat</b> detrás: <i>liburu bat</i>. Con números: <i>bi liburu</i> (sin plural).</li>
<li>El adjetivo va <b>detrás</b> y concuerda: <i>etxe handia / etxe handiak</i>; <i>liburu berde bat</i>.</li>
<li>Colores: zuria, beltza, gorria, urdina, berdea, horia.</li></ul>
<p><b>Zer da hau?</b> → <i>Hau mahaia da.</i> · <i>Hauek mahaiak dira.</i></p>`,
v: [['etxea', 'la casa'], ['mahaia', 'la mesa'], ['liburua', 'el libro'], ['atea', 'la puerta'], ['leihoa', 'la ventana'], ['aulkia', 'la silla'], ['gela', 'la habitación'], ['zuria', 'blanco'], ['beltza', 'negro'], ['gorria', 'rojo'], ['urdina', 'azul'], ['berdea', 'verde'], ['handia', 'grande'], ['txikia', 'pequeño']],
p: [['Hau etxea da', 'Esto es la casa'], ['Hori liburu bat da', 'Eso es un libro'], ['Hura autobusa da', 'Aquello es el autobús'], ['Hauek mahaiak dira', 'Estas son las mesas'], ['Horiek gorriak dira', 'Esas son rojas'], ['Etxe handi bat da', 'Es una casa grande'], ['Liburu berde bat da', 'Es un libro verde'], ['Zer da hau?', '¿Qué es esto?']],
x: [
  fl('___ mahaia da. (esto, cerca de mí)', 'Hau', ['Hau', 'Hori', 'Hura', 'Hauek']),
  fl('___ liburuak dira. (esos, cerca de ti)', 'Horiek', ['Horiek', 'Hauek', 'Haiek', 'Hori']),
  fl('___ autobusa da. (aquello, lejos)', 'Hura', ['Hura', 'Hau', 'Hori', 'Haiek']),
  mc('Plural de «liburua»', 'liburuak', ['liburuek', 'liburuas', 'liburuen']),
  mc('Plural de «gela»', 'gelak', ['gelaak', 'gelek', 'gelaz']),
  mc('Plural de «mahaia»', 'mahaiak', ['mahaik', 'mahaiek', 'mahaiaz']),
  mc('«un libro» se dice…', 'liburu bat', ['bat liburu', 'liburua bat', 'liburu batak']),
  mc('«dos casas» se dice…', 'bi etxe', ['bi etxeak', 'etxe bi', 'bi etxea']),
  fl('Etxe handi___ da. (es la casa grande)', 'a', ['a', 'ak', 'ek', 'ra']),
  fl('Etxe handi___ dira. (las casas grandes)', 'ak', ['ak', 'a', 'ek', 'rik']),
  mc('«una casa grande» →', 'etxe handi bat', ['etxe bat handia', 'bat etxe handia', 'handi etxe bat']),
  mc('«Horiek gorriak dira» →', 'Esas son rojas', ['Eso es rojo', 'Esas son azules', 'Estas son rojas']),
],
d: [{ title: 'Elkarrizketa 4 · Gelan', lines: [['A', 'Zer da hau?'], ['B', 'Hau liburu bat da.'], ['A', 'Eta hori?'], ['B', 'Hori telefonoa da. Eta hauek mahaiak dira.'], ['A', 'Mahai gorria polita da!']],
  qs: [['¿Qué es «hau»?', 'Un libro', ['Un teléfono', 'Una mesa', 'Una silla']], ['¿Qué son «hauek»?', 'Mesas', ['Libros', 'Teléfonos', 'Sillas']], ['¿De qué color es la mesa?', 'Roja', ['Azul', 'Verde', 'Blanca']]] }],
});

U({ id: 'a1-5', lv: 'A1', t: 'Zenbakiak', es: 'Los números 0-100', ic: '🔢',
g: `<h4>1-20</h4><p>0 <b>zero</b> · 1 <b>bat</b> · 2 <b>bi</b> · 3 <b>hiru</b> · 4 <b>lau</b> · 5 <b>bost</b> · 6 <b>sei</b> · 7 <b>zazpi</b> · 8 <b>zortzi</b> · 9 <b>bederatzi</b> · 10 <b>hamar</b></p>
<p>11 <b>hamaika</b> · 12 <b>hamabi</b> · 13 <b>hamahiru</b> · 14 <b>hamalau</b> · 15 <b>hamabost</b> · 16 <b>hamasei</b> · 17 <b>hamazazpi</b> · 18 <b>hemezortzi</b> · 19 <b>hemeretzi</b> · 20 <b>hogei</b></p>
<h4>Sistema vigesimal (de 20 en 20)</h4>
<p>20 <b>hogei</b> · 40 <b>berrogei</b> (2×20) · 60 <b>hirurogei</b> (3×20) · 80 <b>laurogei</b> (4×20) · 100 <b>ehun</b></p>
<ul><li>21 = <i>hogei<b>ta</b> bat</i> · 25 = <i>hogeita bost</i> · 30 = <i>hogeita hamar</i> · 31 = <i>hogeita hamaika</i> · 35 = <i>hogeita hamabost</i></li>
<li>50 = <i>berrogeita hamar</i> · 66 = <i>hirurogeita sei</i> · 70 = <i>hirurogeita hamar</i> · 99 = <i>laurogeita hemeretzi</i></li>
<li>Con numerales el sustantivo no toma plural: <i>hiru etxe</i>.</li></ul>
<p>Operaciones: <b>gehi</b> (+), <b>ken</b> (−): <i>Bi gehi hiru bost da.</i></p>`,
v: [['bat', '1'], ['bi', '2'], ['hiru', '3'], ['lau', '4'], ['bost', '5'], ['sei', '6'], ['zazpi', '7'], ['zortzi', '8'], ['bederatzi', '9'], ['hamar', '10'], ['hamaika', '11'], ['hogei', '20']],
p: [['Zenbat da?', '¿Cuánto es?'], ['Hamabost euro dira', 'Son quince euros'], ['Hogeita bi urte', 'Veintidós años'], ['Berrogeita hamar', 'Cincuenta'], ['Ehun euro', 'Cien euros'], ['Hiru gehi lau zazpi da', 'Tres más cuatro son siete'], ['Hemezortzi ikasle daude', 'Hay dieciocho estudiantes'], ['Laurogeita bost', 'Ochenta y cinco']],
gen: ['num', 'numRev'],
x: [
  fl('Hiru gehi lau ___ da.', 'zazpi', ['zazpi', 'sei', 'zortzi', 'bost']),
  fl('Bost gehi bost ___ da.', 'hamar', ['hamar', 'bederatzi', 'hamaika', 'hogei']),
  fl('Hamar ken lau ___ da.', 'sei', ['sei', 'zazpi', 'bost', 'lau']),
  mc('«hemezortzi» es…', '18', ['8', '28', '80']),
  mc('«laurogei» es…', '80', ['40', '60', '90']),
  mc('«berrogei» es…', '40', ['14', '60', '4']),
  mc('«hirurogeita hamar» es…', '70', ['63', '30', '90']),
  mc('«hogeita hamaika» es…', '31', ['21', '30', '110']),
],
d: [{ title: 'Elkarrizketa 5 · Telefonoa', lines: [['A', 'Zein da zure telefono zenbakia?'], ['B', 'Sei, bat, bost, lau, zortzi, zazpi, bi, hiru, bederatzi.'], ['A', 'Sei, bat, bost, lau, zortzi, zazpi, bi, hiru, bederatzi. Zuzena al da?'], ['B', 'Bai, zuzena da.']],
  qs: [['¿Con qué cifra empieza el número?', '6', ['1', '9', '4']], ['¿Cuántas cifras tiene?', '9', ['6', '8', '10']], ['¿Es correcto lo que repite A?', 'Sí', ['No', 'A medias', 'No se sabe']]] }],
});

U({ id: 'a1-6', lv: 'A1', t: 'Ordua, egunak eta hilabeteak', es: 'La hora, los días y los meses', ic: '⏰',
g: `<h4>Zer ordu da?</h4>
<ul><li>1:00 <b>Ordu bata da</b> · 2:00 <b>Biak dira</b> · 3:00 <b>Hirurak dira</b> · 4 <b>Laurak</b> · 5 <b>Bostak</b> · 6 <b>Seiak</b> · 7 <b>Zazpiak</b> · 8 <b>Zortziak</b> · 9 <b>Bederatziak</b> · 10 <b>Hamarrak</b> · 11 <b>Hamaikak</b> · 12 <b>Hamabiak</b></li>
<li>y media → <b>eta erdi</b>: <i>Hirurak eta erdi dira</i> · y cuarto → <b>eta laurden</b> · menos cuarto → <b>laurden gutxi</b> (la hora siguiente): <i>Hirurak laurden gutxi dira</i> (2:45)</li>
<li><b>Zer ordutan?</b> ¿A qué hora? → <b>-etan</b>: bietan, hirutan, lauretan, bostetan, seietan, zazpietan, zortzietan, bederatzietan, hamarretan, hamaiketan, hamabietan; a la una: <i>ordubatean</i>.</li></ul>
<h4>Días</h4><p>astelehena, asteartea, asteazkena, osteguna, ostirala, larunbata, igandea</p>
<h4>Meses</h4><p>urtarrila, otsaila, martxoa, apirila, maiatza, ekaina, uztaila, abuztua, iraila, urria, azaroa, abendua</p>
<p>Fecha: <i>Gaur maiatzaren 12a da.</i> (mes con -aren + número + a). Estaciones: udaberria, uda, udazkena, negua.</p>`,
v: [['astelehena', 'lunes'], ['asteartea', 'martes'], ['asteazkena', 'miércoles'], ['osteguna', 'jueves'], ['ostirala', 'viernes'], ['larunbata', 'sábado'], ['igandea', 'domingo'], ['gaur', 'hoy'], ['bihar', 'mañana'], ['atzo', 'ayer'], ['ordua', 'la hora'], ['urtarrila', 'enero']],
p: [['Zer ordu da?', '¿Qué hora es?'], ['Ordu bata da', 'Es la una'], ['Hamarrak dira', 'Son las diez'], ['Zortziak eta erdi dira', 'Son las ocho y media'], ['Hirurak laurden gutxi dira', 'Son las tres menos cuarto'], ['Zer egun da gaur?', '¿Qué día es hoy?'], ['Gaur ostirala da', 'Hoy es viernes'], ['Klasea bostetan da', 'La clase es a las cinco']],
gen: ['time'],
x: [
  fl('Zer ___ da? (¿qué hora es?)', 'ordu', ['ordu', 'egun', 'hil', 'urte']),
  fl('Zer ___ da gaur? (¿qué día es hoy?)', 'egun', ['egun', 'ordu', 'hil', 'urte']),
  mc('«Hamabiak dira» →', 'Son las doce', ['Son las once', 'Son las dos', 'Es la una']),
  mc('«Zazpiak eta erdi dira» →', '7:30', ['7:15', '6:30', '7:45']),
  mc('«Bostak laurden gutxi dira» →', '4:45', ['5:15', '5:45', '4:15']),
  mc('«Hirutan» →', 'a las tres', ['son las tres', 'a las cuatro', 'a las dos']),
  mc('Gaur larunbata da. ¿Qué día es mañana?', 'igandea', ['ostirala', 'astelehena', 'osteguna']),
  mc('«abuztua» es el mes de…', 'agosto', ['abril', 'septiembre', 'julio']),
  mc('«Gaur maiatzaren 12a da» →', 'Hoy es 12 de mayo', ['Hoy es mayo y doce horas', 'Mañana es 12 de mayo', 'Ayer fue 12 de mayo']),
],
d: [{ title: 'Elkarrizketa 6 · Ordua', lines: [['A', 'Barkatu, zer ordu da?'], ['B', 'Hamaikak eta laurden dira.'], ['A', 'Eskerrik asko. Zer ordutan da klasea?'], ['B', 'Hamabietan.']],
  qs: [['¿Qué hora es?', '11:15', ['11:45', '12:15', '10:15']], ['¿A qué hora es la clase?', 'A las doce', ['A las once', 'A las diez', 'A la una']]] }],
w: [wr('Pregunta qué hora es y responde que son las ocho y media.', ['zer ordu', 'zortziak eta erdi'], 'Zer ordu da? Zortziak eta erdi dira.')],
});

U({ id: 'a1-7', lv: 'A1', t: 'Egon eta kokapena', es: 'Estar, lugar y existencia', ic: '📍',
g: `<h4>EGON (estar) · presente</h4>
<table><tr><th>ni</th><th>zu</th><th>hura</th><th>gu</th><th>zuek</th><th>haiek</th></tr><tr><td><b>nago</b></td><td><b>zaude</b></td><td><b>dago</b></td><td><b>gaude</b></td><td><b>zaudete</b></td><td><b>daude</b></td></tr></table>
<ul><li><b>izan</b> = identidad/cualidad (<i>Ane irakaslea da</i>); <b>egon</b> = lugar/estado (<i>Ane etxean dago</i>).</li>
<li><b>Dago / daude</b> también significa «hay»: <i>Mahaian liburu bat dago. Gelan bi aulki daude.</i></li>
<li>Locativo <b>-n</b> («en»): etxe→<i>etxean</i>, gela→<i>gelan</i>, kale→<i>kalean</i>, Bilbo→<i>Bilbon</i>, Donostia→<i>Donostian</i>.</li>
<li>Posposiciones: <b>gainean</b> (encima), <b>azpian</b> (debajo), <b>ondoan</b> (al lado), <b>aurrean</b> (delante), <b>atzean</b> (detrás), <b>barruan</b> (dentro), <b>kanpoan</b> (fuera), <b>artean</b> (entre): <i>mahai gainean</i>.</li>
<li>Adverbios: <b>hemen</b> aquí · <b>hor</b> ahí · <b>han</b> allí.</li></ul>
<p><b>Non</b> zaude? → Etxean nago.</p>`,
v: [['gainean', 'encima'], ['azpian', 'debajo'], ['ondoan', 'al lado'], ['aurrean', 'delante'], ['atzean', 'detrás'], ['barruan', 'dentro'], ['kanpoan', 'fuera'], ['hemen', 'aquí'], ['hor', 'ahí'], ['han', 'allí'], ['lanean', 'en el trabajo'], ['bulegoa', 'la oficina']],
p: [['Etxean nago', 'Estoy en casa'], ['Non zaude?', '¿Dónde estás?'], ['Liburua mahai gainean dago', 'El libro está encima de la mesa'], ['Gelan bi aulki daude', 'En la habitación hay dos sillas'], ['Zuek lanean zaudete', 'Vosotros estáis en el trabajo'], ['Gu hemen gaude', 'Nosotros estamos aquí'], ['Ane eskolan dago', 'Ane está en la escuela'], ['Haiek kanpoan daude', 'Ellos están fuera']],
gen: [['tbl', 'egon'], ['caseFl', ['loc']]],
x: [
  fl('Ni etxean ___.', 'nago', ['nago', 'zaude', 'dago', 'gaude']),
  fl('Zu lanean ___.', 'zaude', ['zaude', 'nago', 'zaudete', 'dago']),
  fl('Ane eskolan ___.', 'dago', ['dago', 'daude', 'zaude', 'nago']),
  fl('Gu Bilbon ___.', 'gaude', ['gaude', 'gara', 'daude', 'zaudete']),
  fl('Zuek hemen ___.', 'zaudete', ['zaudete', 'zaude', 'daude', 'gaude']),
  fl('Haiek kanpoan ___.', 'daude', ['daude', 'dago', 'dira', 'gaude']),
  fl('Liburua mahai ___ dago. (encima)', 'gainean', ['gainean', 'azpian', 'ondoan', 'barruan']),
  fl('Katua aulkiaren ___ dago. (debajo)', 'azpian', ['azpian', 'gainean', 'atzean', 'kanpoan']),
  fl('Gelan bi aulki ___. (hay)', 'daude', ['daude', 'dago', 'dira', 'zaude']),
  mc('«Non zaude?» →', '¿Dónde estás?', ['¿Quién eres?', '¿Adónde vas?', '¿De dónde eres?']),
  mc('Para «Ane está en casa» usamos…', 'Ane etxean dago', ['Ane etxean da', 'Ane etxea dago', 'Ane etxera dago']),
  mc('«Donostia» + locativo →', 'Donostian', ['Donostiatik', 'Donostiara', 'Donostiaren']),
],
d: [{ title: 'Elkarrizketa 7 · Non zaude?', lines: [['Ane', 'Kaixo, Mikel. Non zaude?'], ['Mikel', 'Etxean nago. Eta zu, non zaude?'], ['Ane', 'Lanean nago, bulegoan.'], ['Mikel', 'Ah, ondo! Agur!']],
  qs: [['¿Dónde está Mikel?', 'En casa', ['En la oficina', 'En la calle', 'En la escuela']], ['¿Dónde está Ane?', 'En la oficina', ['En casa', 'En un bar', 'En la escuela']]] }],
});

U({ id: 'a1-8', lv: 'A1', t: 'Joan eta etorri', es: 'Ir, venir y casos de movimiento', ic: '🚌',
g: `<h4>JOAN (ir) y ETORRI (venir) · presente</h4>
<table><tr><th></th><th>ni</th><th>zu</th><th>hura</th><th>gu</th><th>zuek</th><th>haiek</th></tr>
<tr><td>joan</td><td><b>noa</b></td><td><b>zoaz</b></td><td><b>doa</b></td><td><b>goaz</b></td><td><b>zoazte</b></td><td><b>doaz</b></td></tr>
<tr><td>etorri</td><td><b>nator</b></td><td><b>zatoz</b></td><td><b>dator</b></td><td><b>gatoz</b></td><td><b>zatozte</b></td><td><b>datoz</b></td></tr></table>
<h4>Casos de movimiento</h4>
<ul><li><b>-ra</b> adónde (allativo): etxe→<i>etxera</i>, gela→<i>gelara</i>, Bilbo→<i>Bilbora</i>; tras consonante <b>-era</b>: <i>autobusera</i>. <b>Nora</b> zoaz?</li>
<li><b>-tik</b> desde dónde (ablativo): <i>etxetik, gelatik, Bilbotik</i>; tras consonante <b>-etik</b>. <b>Nondik</b> zatoz?</li>
<li><b>-ko</b> de (lugar): <i>Bilbo<b>ko</b> trena</i>, <i>etxe<b>ko</b> atea</i>.</li>
<li>Medio de transporte: <b>-z</b> → <i>autobusez, trenez, autoz, oinez</i> (a pie), <i>bizikletaz</i>.</li>
<li>Hacia el hablante: <b>hona</b> (hacia aquí), <b>horra</b>, <b>hara</b>.</li></ul>`,
v: [['lana', 'el trabajo'], ['eskola', 'la escuela'], ['denda', 'la tienda'], ['ospitalea', 'el hospital'], ['geltokia', 'la estación'], ['kalea', 'la calle'], ['parkea', 'el parque'], ['taberna', 'el bar'], ['liburutegia', 'la biblioteca'], ['autobusez', 'en autobús'], ['oinez', 'a pie'], ['hona', 'hacia aquí']],
p: [['Eskolara noa', 'Voy a la escuela'], ['Nora zoaz?', '¿Adónde vas?'], ['Lanetik nator', 'Vengo del trabajo'], ['Nondik zatoz?', '¿De dónde vienes?'], ['Bilbora goaz', 'Vamos a Bilbao'], ['Autobusez noa lanera', 'Voy al trabajo en autobús'], ['Zuek Donostiatik zatozte', 'Vosotros venís de San Sebastián'], ['Ane dendara doa', 'Ane va a la tienda']],
gen: [['tbl', 'joan'], ['tbl', 'etorri'], ['caseFl', ['all', 'abl']]],
x: [
  fl('Ni eskolara ___.', 'noa', ['noa', 'zoaz', 'doa', 'goaz']),
  fl('Zu lanera ___.', 'zoaz', ['zoaz', 'noa', 'zoazte', 'doaz']),
  fl('Ane dendara ___.', 'doa', ['doa', 'doaz', 'noa', 'dator']),
  fl('Gu Bilbora ___.', 'goaz', ['goaz', 'gatoz', 'doaz', 'zoazte']),
  fl('Ni lanetik ___.', 'nator', ['nator', 'noa', 'zatoz', 'dator']),
  fl('Zu nondik ___?', 'zatoz', ['zatoz', 'zoaz', 'nator', 'zatozte']),
  fl('Haiek Donostiatik ___.', 'datoz', ['datoz', 'doaz', 'dator', 'gatoz']),
  mc('Casa → «a casa»', 'etxera', ['etxetik', 'etxean', 'etxeko']),
  mc('Casa → «desde casa»', 'etxetik', ['etxera', 'etxean', 'etxeko']),
  mc('Autobus → «al autobús (hacia)»', 'autobusera', ['autobusra', 'autobusa', 'autobusean']),
  mc('«Autobusez noa» →', 'Voy en autobús', ['Voy al autobús', 'Vengo del autobús', 'Estoy en el autobús']),
  mc('«Bilboko trena» →', 'El tren de Bilbao', ['El tren a Bilbao', 'El tren en Bilbao', 'Bilbao es un tren']),
],
d: [{ title: 'Elkarrizketa 8 · Kalean', lines: [['Ane', 'Kaixo, Jon! Nora zoaz?'], ['Jon', 'Dendara noa. Zu nondik zatoz?'], ['Ane', 'Lanetik nator. Orain etxera noa.'], ['Jon', 'Autobusez zoaz?'], ['Ane', 'Ez, oinez noa.']],
  qs: [['¿Adónde va Jon?', 'A la tienda', ['Al trabajo', 'A casa', 'A la escuela']], ['¿De dónde viene Ane?', 'Del trabajo', ['De la tienda', 'De casa', 'De Bilbao']], ['¿Cómo va Ane a casa?', 'A pie', ['En autobús', 'En coche', 'En tren']]] }],
w: [wr('Di adónde vas ahora y cómo vas (p. ej. a casa, a pie).', ['noa', 'etxera|lanera|eskolara|dendara|kalera'], 'Etxera noa, oinez.')],
});
})();
