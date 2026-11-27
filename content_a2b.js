/* Contenido A2 · unidades 8-13 (material original) */
(function () {
const { mc, fl, wr, U } = E;

U({ id: 'a2-8', lv: 'A2', t: 'Kasuak: -rekin, -z, -rentzat, -gatik', es: 'Casos: con, por/en, para, a causa de', ic: '🔗',
g: `<h4>Casos más frecuentes en A2</h4>
<table><tr><th>caso</th><th>sentido</th><th>tras vocal / consonante</th><th>ejemplo</th></tr>
<tr><td>comitativo</td><td>con</td><td><b>-rekin</b> / <b>-ekin</b></td><td>Anarekin, Mikelekin</td></tr>
<tr><td>destinativo</td><td>para (persona)</td><td><b>-rentzat</b> / <b>-entzat</b></td><td>Anarentzat, Mikelentzat</td></tr>
<tr><td>instrumental</td><td>en/por (medio, idioma)</td><td><b>-z</b></td><td>autobusez, trenez, oinez, euskaraz, ingelesez</td></tr>
<tr><td>motivativo</td><td>por (causa)</td><td><b>-gatik</b></td><td>zuregatik (por ti)</td></tr>
<tr><td>ablativo animado</td><td>a casa de / hacia (persona)</td><td><b>-rengana</b> / <b>-engana</b></td><td>medikuarengana, Mikelengana</td></tr></table>
<h4>Pronombres</h4>
<table><tr><th></th><th>ni</th><th>zu</th><th>hura</th><th>gu</th><th>zuek</th><th>haiek</th></tr>
<tr><td>con</td><td>nirekin</td><td>zurekin</td><td>harekin</td><td>gurekin</td><td>zuekin</td><td>haiekin</td></tr>
<tr><td>para</td><td>niretzat</td><td>zuretzat</td><td>harentzat</td><td>guretzat</td><td>zuentzat</td><td>haientzat</td></tr>
<tr><td>por</td><td>nigatik</td><td>zuregatik</td><td>harengatik</td><td>gugatik</td><td>zuengatik</td><td>haiengatik</td></tr></table>
<p>Con nombres comunes (singular determinado): <i>etxearekin, etxearentzat</i>; tras -a: <i>gelarekin, gelarentzat</i>.</p>`,
v: [['autoz', 'en coche'], ['trenez', 'en tren'], ['hegazkinez', 'en avión'], ['bizikletaz', 'en bici'], ['oinez', 'a pie'], ['euskaraz', 'en euskera'], ['gaztelaniaz', 'en castellano'], ['ingelesez', 'en inglés'], ['elkarrekin', 'juntos'], ['bakarrik', 'solo'], ['medikua', 'el médico'], ['oparia', 'el regalo']],
p: [['Mikelekin joan naiz', 'He ido con Mikel'], ['Anarekin hitz egin dut', 'He hablado con Ana'], ['Autobusez etorri naiz', 'He venido en autobús'], ['Hau Anarentzat da', 'Esto es para Ana'], ['Nirekin etorri nahi duzu?', '¿Quieres venir conmigo?'], ['Zurekin joango naiz', 'Iré contigo'], ['Medikuarengana noa', 'Voy al médico'], ['Euskaraz hitz egiten dut', 'Hablo en euskera'], ['Zuregatik etorri naiz', 'He venido por ti']],
gen: [['caseFl', ['com', 'ben', 'gen']], ['case', ['com', 'ben', 'gen']]],
x: [
  mc('«contigo» →', 'zurekin', ['zuretzat', 'zuregatik', 'zuk']),
  mc('«con él/ella» →', 'harekin', ['harentzat', 'haren', 'harengatik']),
  mc('«para mí» →', 'niretzat', ['nirekin', 'nigatik', 'nire']),
  mc('«para nosotros» →', 'guretzat', ['gurekin', 'gure', 'gugatik']),
  mc('«por ti (a causa de ti)» →', 'zuregatik', ['zurekin', 'zuretzat', 'zure']),
  mc('«en inglés» →', 'ingelesez', ['ingelesean', 'ingelesera', 'ingelesekin']),
  mc('«a pie» →', 'oinez', ['oinean', 'oinekin', 'oinera']),
  mc('«ir al médico» →', 'medikuarengana joan', ['medikuarekin joan', 'medikuan joan', 'medikuarentzat joan']),
  fl('Ane___ joan naiz. (con Ane)', 'rekin', ['rekin', 'ekin', 'rentzat', 'z']),
  fl('Mikel___ joan naiz. (con Mikel)', 'ekin', ['ekin', 'rekin', 'entzat', 'z']),
  fl('Hau Ane___ da. (para Ane)', 'rentzat', ['rentzat', 'entzat', 'rekin', 'ren']),
  fl('Autobus___ etorri naiz. (en autobús)', 'ez', ['ez', 'ekin', 'etik', 'era']),
  fl('Euskara___ hitz egiten dut. (en euskera)', 'z', ['z', 'ekin', 'rentzat', 'tik']),
  fl('Mikel___ noa. (voy a casa de Mikel)', 'engana', ['engana', 'rengana', 'era', 'ekin']),
],
d: [{ title: 'Elkarrizketa 23 · Bidaia', lines: [['A', 'Nola joango zara Donostiara?'], ['B', 'Trenez joango naiz, Anarekin.'], ['A', 'Eta nola itzuliko zarete?'], ['B', 'Autobusez, merkeagoa delako.']],
  qs: [['¿Cómo irá B a San Sebastián?', 'En tren', ['En autobús', 'En coche', 'En avión']], ['¿Con quién irá?', 'Con Ana', ['Con Mikel', 'Solo', 'Con A']], ['¿Cómo volverán?', 'En autobús', ['En tren', 'A pie', 'En bici']]] }],
w: [wr('Di con quién vas a ir de viaje y cómo.', ['rekin|ekin', 'ez'], 'Anarekin joango naiz trenez.')],
});

U({ id: 'a2-9', lv: 'A2', t: 'Perpaus osagarriak: -ela, -elako', es: 'Subordinadas: que… / porque…', ic: '🧠',
g: `<h4>Completivas con <b>-(e)la</b> («que…»)</h4>
<p>Se añade <b>-(e)la</b> al auxiliar conjugado: <i>da → dela</i>, <i>naiz → naizela</i>. Se usa con uste dut (creo), badakit (sé), esan du (ha dicho), ikusi dut (he visto)…</p>
<table><tr><th>izan</th><th>naiz→naizela</th><th>zara→zarela</th><th>da→dela</th><th>gara→garela</th><th>zarete→zaretela</th><th>dira→direla</th></tr>
<tr><th>ukan</th><td>dut→dudala</td><td>duzu→duzula</td><td>du→duela</td><td>dugu→dugula</td><td>duzue→duzuela</td><td>dute→dutela</td></tr>
<tr><th>egon</th><td>nago→nagoela</td><td>zaude→zaudela</td><td>dago→dagoela</td><td>gaude→gaudela</td><td>zaudete→zaudetela</td><td>daude→daudela</td></tr></table>
<p><i>Uste dut Ane etxean <b>dagoela</b>.</i> · <i>Badakit zu euskalduna <b>zarela</b>.</i> · <i>Esan du bihar etorriko <b>dela</b>.</i></p>
<h4>Causales con <b>-(e)lako</b> («porque…»)</h4>
<p><i>Ez naiz etorri, gaixorik <b>nengoelako</b>.</i> · <i>Etxean nago, nekatuta <b>nagoelako</b>.</i> En pasado: nintzen → nintzelako, nuen → nuelako, nengoen → nengoelako.</p>
<p>Pregunta: <b>Zergatik?</b> → respuesta con -(e)lako.</p>`,
v: [['uste dut', 'creo que'], ['badakit', 'sé que'], ['esan du', 'ha dicho que'], ['ikusi dut', 'he visto que'], ['zergatik', 'por qué'], ['gaixorik', 'enfermo'], ['nekatuta', 'cansado'], ['arrazoia', 'la razón'], ['egia', 'la verdad'], ['pena da', 'es una pena'], ['hobeto', 'mejor (adv.)'], ['orain', 'ahora']],
p: [['Uste dut Ane etxean dagoela', 'Creo que Ane está en casa'], ['Badakit zu euskalduna zarela', 'Sé que eres vascohablante'], ['Esan du bihar etorriko dela', 'Ha dicho que vendrá mañana'], ['Uste dut euskaraz hitz egiten duzula', 'Creo que hablas euskera'], ['Ez naiz etorri, gaixorik nengoelako', 'No he venido porque estaba enfermo'], ['Etxean nago, nekatuta nagoelako', 'Estoy en casa porque estoy cansado'], ['Zergatik ez zara etorri?', '¿Por qué no has venido?'], ['Pena da!', '¡Qué pena!']],
gen: [['tbl', 'lakoizan'], ['tbl', 'lakoukan'], ['tbl', 'lakoegon']],
x: [
  fl('Uste dut Ane etxean ___. (dago + -la)', 'dagoela', ['dagoela', 'dagola', 'dagoelako', 'dago']),
  fl('Badakit zu euskalduna ___. (zara + -la)', 'zarela', ['zarela', 'zarala', 'zarelako', 'zara']),
  fl('Esan du bihar etorriko ___. (da + -la)', 'dela', ['dela', 'dala', 'delako', 'da']),
  fl('Uste dut zuk euskaraz hitz egiten ___. (duzu + -la)', 'duzula', ['duzula', 'duzuela', 'duzulako', 'duzu']),
  fl('Uste dut haiek ikasleak ___. (dira + -la)', 'direla', ['direla', 'dirala', 'direlako', 'dira']),
  fl('Uste dut nik arrazoia ___. (dut + -la)', 'dudala', ['dudala', 'dutala', 'dudalako', 'dut']),
  fl('Ez naiz etorri, gaixorik ___. (nengoen + -lako)', 'nengoelako', ['nengoelako', 'nengoela', 'nagoelako', 'nengoen']),
  fl('Etxean nago, nekatuta ___. (nago + -lako)', 'nagoelako', ['nagoelako', 'nagoela', 'nengoelako', 'nago']),
  mc('«Creo que es bueno» →', 'Uste dut ona dela', ['Uste dut ona da', 'Uste dut ona delako', 'Ona dela dut uste ez']),
  mc('«Ha dicho que vendrá» →', 'Esan du etorriko dela', ['Esan du etorriko da', 'Esan du etorriko delako', 'Esan du etorri dela ez']),
  mc('«-(e)lako» expresa…', 'causa (porque)', ['finalidad (para)', 'tiempo (cuando)', 'condición (si)']),
  mc('«Zergatik?» se responde con…', '-(e)lako', ['-(e)la', '-tzeko', '-ko']),
],
d: [{ title: 'Elkarrizketa 24 · Zergatik?', lines: [['A', 'Zergatik ez zara etorri atzo?'], ['B', 'Ez naiz etorri, gaixorik nengoelako.'], ['A', 'Pena da! Uste dut hobeto zaudela orain.'], ['B', 'Bai, orain hobeto nago, eskerrik asko.']],
  qs: [['¿Por qué no vino B?', 'Estaba enfermo', ['Estaba cansado', 'Tenía trabajo', 'No quería']], ['¿Cómo cree A que está B ahora?', 'Mejor', ['Peor', 'Igual', 'Enfermo']]] }],
w: [wr('Explica por qué no puedes salir hoy (con -(e)lako).', ['lako', 'ezin|ez'], 'Ezin dut atera, lan asko dudalako.')],
});

U({ id: 'a2-10', lv: 'A2', t: 'Iragan ohikoa: txikitan', es: 'Pasado habitual: «solía…»', ic: '🕰️',
g: `<h4>Pasado habitual: verbo habitual (-tzen/-ten) + <b>auxiliar de pasado</b></h4>
<p><i>Lehen kafea <b>edaten nuen</b>.</i> (Antes tomaba café.) · <i>Txikitan egunero eskolara oinez <b>joaten nintzen</b>.</i> · <i>Igandeetan amonarekin <b>bazkaltzen genuen</b>.</i></p>
<ul><li>Auxiliares (pasado): izan → <b>nintzen, zinen, zen, ginen, zineten, ziren</b>; ukan → <b>nuen, zenuen, zuen, genuen, zenuten, zuten</b> (varios: <b>nituen, zenituen…</b>).</li>
<li>Marcadores: <b>txikitan</b> de pequeño · <b>lehen</b> antes · <b>orduan</b> entonces · <b>garai hartan</b> en aquella época · <b>igandeetan</b> los domingos · <b>egunero</b> cada día.</li>
<li>Descripciones en pasado: <i>Orduan Madrilen bizi nintzen.</i> · <i>Oso lotsatia nintzen.</i></li>
<li>Pregunta: <i>Zer egiten zenuen txikitan?</i></li></ul>`,
v: [['txikitan', 'de pequeño'], ['lehen', 'antes'], ['orduan', 'entonces'], ['garai hartan', 'en aquella época'], ['igandeetan', 'los domingos'], ['hondartza', 'la playa'], ['jolastu', 'jugar'], ['lotsatia', 'tímido'], ['amona', 'la abuela'], ['bizi', 'vivir'], ['egunero', 'cada día'], ['futbola', 'el fútbol']],
p: [['Lehen kafea edaten nuen', 'Antes tomaba café'], ['Txikitan Lekeition bizi nintzen', 'De pequeño vivía en Lekeitio'], ['Egunero hondartzara joaten ginen', 'Íbamos a la playa cada día'], ['Igandeetan amonarekin bazkaltzen genuen', 'Los domingos comíamos con la abuela'], ['Zer egiten zenuen txikitan?', '¿Qué hacías de pequeño?'], ['Igeri egiten genuen eta jolasten genuen', 'Nadábamos y jugábamos'], ['Orduan ez nuen telefonorik', 'Entonces no tenía teléfono'], ['Oso lotsatia nintzen', 'Era muy tímido']],
gen: ['hab', [ 'tbl', 'izanp' ], ['tbl', 'ukanp']],
x: [
  fl('Lehen kafea ___ nuen. (edan)', 'edaten', ['edaten', 'edan', 'edango', 'edatzen']),
  fl('Txikitan egunero eskolara oinez ___ nintzen. (joan)', 'joaten', ['joaten', 'joan', 'joango', 'joatzen']),
  fl('Igandeetan gu amonarekin bazkaltzen ___.', 'genuen', ['genuen', 'ginen', 'dugu', 'genituen']),
  fl('Haiek egunero jolasten ___.', 'zuten', ['zuten', 'ziren', 'dute', 'zenuten']),
  fl('Zuk zer egiten ___ txikitan?', 'zenuen', ['zenuen', 'zinen', 'duzu', 'zuen']),
  fl('Ane beti goiz jaikitzen ___. (izan, pasado)', 'zen', ['zen', 'zuen', 'da', 'zegoen']),
  fl('Orduan ni Madrilen bizi ___.', 'nintzen', ['nintzen', 'nengoen', 'nuen', 'naiz']),
  mc('«Antes bebía café» →', 'Lehen kafea edaten nuen', ['Lehen kafea edan nuen', 'Lehen kafea edango dut', 'Orain kafea edaten dut']),
  mc('«De pequeño vivía en Lekeitio» →', 'Txikitan Lekeition bizi nintzen', ['Txikitan Lekeition bizi naiz', 'Txikitan Lekeitiora joan nintzen', 'Txikitan Lekeitiotik nator']),
  mc('«Íbamos a la playa» →', 'Hondartzara joaten ginen', ['Hondartzara joan ginen', 'Hondartzara joango gara', 'Hondartzan geunden']),
  mc('«txikitan» significa…', 'de pequeño', ['de mayor', 'mañana', 'ahora']),
],
d: [{ title: 'Elkarrizketa 25 · Txikitan', lines: [['A', 'Txikitan non bizi zinen?'], ['B', 'Lekeition bizi nintzen. Egunero hondartzara joaten ginen anaiarekin.'], ['A', 'Zer egiten zenuten han?'], ['B', 'Igeri egiten genuen eta jolasten genuen.']],
  qs: [['¿Dónde vivía B de pequeño?', 'En Lekeitio', ['En Bilbao', 'En Donostia', 'En Madrid']], ['¿Con quién iba a la playa?', 'Con su hermano', ['Con su abuela', 'Con A', 'Solo']], ['¿Qué hacían allí?', 'Nadar y jugar', ['Comer', 'Estudiar', 'Trabajar']]] }],
w: [wr('Cuenta algo que hacías de pequeño (con -tzen + nuen/nintzen).', ['txikitan|lehen', 'nuen|nintzen|genuen|ginen'], 'Txikitan egunero jolasten nuen.')],
});

U({ id: 'a2-11', lv: 'A2', t: 'Osasuna eta gorputza', es: 'Salud y cuerpo', ic: '🩺',
g: `<h4>Partes del cuerpo</h4>
<p>burua (cabeza), begia (ojo), belarria (oreja), sudurra (nariz), ahoa (boca), eztarria (garganta), hortza (diente), eskua (mano), besoa (brazo), hanka (pierna), bizkarra (espalda), sabela (vientre), bihotza (corazón).</p>
<h4>Expresar dolor y enfermedad</h4>
<ul><li><b>Mina dut</b>: <i>Buruko mina dut.</i> (dolor de cabeza) · <i>Hortz mina dut.</i> · <i>Sabeleko mina dut.</i> · <i>Bizkarreko mina dut.</i></li>
<li><b>Sukarra dut</b> tengo fiebre · <b>Eztula dut</b> tengo tos · <b>Gaixorik nago</b> estoy enfermo · <b>Nekatuta nago</b> estoy cansado.</li>
<li>Consejos: <i>Pastila bat hartu behar duzu.</i> · <i>Atseden hartu behar duzu.</i> · <i>Etxean gelditu behar zara.</i> · <i>Egunean hiru aldiz.</i></li>
<li>Ir al médico: <i>Medikuarengana joan behar dut.</i> · <i>Zer duzu?</i> ¿Qué te pasa?</li></ul>`,
v: [['burua', 'la cabeza'], ['begia', 'el ojo'], ['sudurra', 'la nariz'], ['ahoa', 'la boca'], ['eztarria', 'la garganta'], ['eskua', 'la mano'], ['hanka', 'la pierna'], ['bizkarra', 'la espalda'], ['sabela', 'el vientre'], ['mina', 'el dolor'], ['sukarra', 'la fiebre'], ['pastila', 'la pastilla']],
p: [['Buruko mina dut', 'Me duele la cabeza'], ['Sukarra dut', 'Tengo fiebre'], ['Gaixorik nago', 'Estoy enfermo'], ['Zer duzu?', '¿Qué te pasa?'], ['Bizkarreko mina dut', 'Me duele la espalda'], ['Medikuarengana joan behar dut', 'Tengo que ir al médico'], ['Pastila bat hartu behar duzu', 'Tienes que tomar una pastilla'], ['Atseden hartu behar duzu', 'Tienes que descansar'], ['Egunean hiru aldiz', 'Tres veces al día']],
x: [
  fl('Buruko ___ dut. (dolor)', 'mina', ['mina', 'sukarra', 'eztula', 'gaixorik']),
  fl('___ dut. (tengo fiebre)', 'Sukarra', ['Sukarra', 'Mina', 'Eztula', 'Nekea']),
  fl('Medikua___ joan behar dut. (al médico)', 'rengana', ['rengana', 'rekin', 'rentzat', 'tik']),
  fl('Gaixorik ___. (estoy)', 'nago', ['nago', 'naiz', 'dut', 'noa']),
  fl('Pastila bat hartu ___ duzu. (tienes que)', 'behar', ['behar', 'nahi', 'ezin', 'mina']),
  mc('«Me duele la cabeza» →', 'Buruko mina dut', ['Burua nago', 'Burua dut mina ez', 'Sukarra dut']),
  mc('«Tengo fiebre» →', 'Sukarra dut', ['Sukarra naiz', 'Sukarra nago', 'Sukar dago']),
  mc('«Eztarria» es…', 'la garganta', ['la cabeza', 'la mano', 'el ojo']),
  mc('«Atseden hartu behar duzu» →', 'Tienes que descansar', ['Tienes que comer', 'Quieres descansar', 'Descansaste']),
  mc('«Egunean hiru aldiz» →', 'tres veces al día', ['tres días a la semana', 'hace tres días', 'en tres días']),
  mc('«Zer duzu?» en la consulta pregunta…', '¿Qué te pasa?', ['¿Qué tienes en la mano?', '¿Qué haces?', '¿Cuánto cuesta?']),
],
d: [{ title: 'Elkarrizketa 26 · Medikuarenean', lines: [['Medikua', 'Zer duzu?'], ['Pazientea', 'Buruko mina dut eta sukarra.'], ['Medikua', 'Noiztik?'], ['Pazientea', 'Atzotik.'], ['Medikua', 'Pastila bat hartu behar duzu egunean hiru aldiz eta etxean gelditu.']],
  qs: [['¿Qué le pasa al paciente?', 'Dolor de cabeza y fiebre', ['Dolor de espalda', 'Tos', 'Dolor de muelas']], ['¿Desde cuándo?', 'Desde ayer', ['Desde hoy', 'Desde hace una semana', 'Desde el lunes']], ['¿Qué tiene que hacer?', 'Tomar una pastilla tres veces al día', ['Ir al hospital', 'Beber agua', 'Salir a correr']]] }],
w: [wr('Dile al médico qué te duele y desde cuándo.', ['mina|sukarra|gaixorik', 'dut|nago'], 'Buruko mina dut atzotik.')],
});

U({ id: 'a2-12', lv: 'A2', t: 'Jatetxean, geltokian, kalean', es: 'Restaurante, transporte y direcciones', ic: '🗺️',
g: `<h4>En el restaurante / tienda</h4>
<ul><li><b>Zer hartuko duzu?</b> ¿Qué va a tomar? · <b>Menua, mesedez.</b> · <b>Kontua, mesedez.</b> (la cuenta) · <b>Zenbat da guztira?</b> (¿cuánto es en total?) · <b>Txartelarekin ordaindu dezaket?</b></li></ul>
<h4>Transporte</h4>
<ul><li><b>Zer ordutan irteten da trena?</b> ¿A qué hora sale el tren? · <b>Noiz iristen da?</b> ¿Cuándo llega? · <b>Txartel bat nahi dut Bilborako.</b> Quiero un billete para Bilbao (<b>-rako</b> = destino/para).</li></ul>
<h4>Direcciones</h4>
<ul><li><b>Non dago geltokia?</b> → <b>Joan zuzen</b> (sigue recto), <b>biratu ezkerrera / eskuinera</b> (gira a la izquierda/derecha), <b>gurutzatu kalea</b> (cruza la calle), <b>bigarren kalean</b> (en la segunda calle).</li>
<li><b>Ondoan, aurrean, atzean, gertu, urrun</b> (cerca/lejos). <b>Zenbat denbora behar da?</b> → <i>Bost minutu oinez.</i></li></ul>`,
v: [['menua', 'el menú'], ['kontua', 'la cuenta'], ['txartela', 'la tarjeta/billete'], ['geltokia', 'la estación'], ['ezkerra', 'izquierda'], ['eskuina', 'derecha'], ['zuzen', 'recto'], ['biratu', 'girar'], ['gurutzatu', 'cruzar'], ['gertu', 'cerca'], ['urrun', 'lejos'], ['minutua', 'el minuto']],
p: [['Zer hartuko duzu?', '¿Qué va a tomar?'], ['Menua, mesedez', 'El menú, por favor'], ['Kontua, mesedez', 'La cuenta, por favor'], ['Txartelarekin ordaindu dezaket?', '¿Puedo pagar con tarjeta?'], ['Zer ordutan irteten da trena?', '¿A qué hora sale el tren?'], ['Txartel bat nahi dut Bilborako', 'Quiero un billete para Bilbao'], ['Non dago geltokia?', '¿Dónde está la estación?'], ['Joan zuzen eta biratu eskuinera', 'Ve recto y gira a la derecha'], ['Zenbat denbora behar da?', '¿Cuánto tiempo hace falta?']],
x: [
  fl('___ dago geltokia? (¿dónde?)', 'Non', ['Non', 'Nora', 'Noiz', 'Zer']),
  fl('Joan ___. (recto)', 'zuzen', ['zuzen', 'ezkerrera', 'eskuinera', 'gertu']),
  fl('___ eskuinera. (gira)', 'Biratu', ['Biratu', 'Gurutzatu', 'Ireki', 'Itxi']),
  fl('Txartel bat nahi dut Bilbo___. (para Bilbao)', 'rako', ['rako', 'ra', 'tik', 'rentzat']),
  fl('Zer ordutan ___ da trena? (sale)', 'irteten', ['irteten', 'irten', 'irtengo', 'iristen']),
  fl('Kontua, ___. (por favor)', 'mesedez', ['mesedez', 'barkatu', 'eskerrik', 'agur']),
  mc('«a la izquierda» →', 'ezkerrera', ['eskuinera', 'zuzen', 'gertu']),
  mc('«a la derecha» →', 'eskuinera', ['ezkerrera', 'zuzen', 'urrun']),
  mc('«Zenbat denbora behar da?» →', '¿Cuánto tiempo hace falta?', ['¿Qué hora es?', '¿Cuánto cuesta?', '¿A qué hora sale?']),
  mc('«Txartelarekin ordaindu dezaket?» →', '¿Puedo pagar con tarjeta?', ['¿Dónde pago?', '¿Cuánto es?', '¿Tiene tarjeta?']),
  mc('«Gurutzatu kalea» →', 'Cruza la calle', ['Gira la calle', 'Sigue la calle', 'Abre la calle']),
],
d: [{ title: 'Elkarrizketa 27 · Bidea', lines: [['A', 'Barkatu, non dago geltokia?'], ['B', 'Joan zuzen eta bigarren kalean biratu ezkerrera. Han dago, ospitalearen ondoan.'], ['A', 'Zenbat denbora behar da?'], ['B', 'Bost minutu oinez.']],
  qs: [['¿Dónde hay que girar?', 'En la segunda calle a la izquierda', ['En la primera a la derecha', 'En la segunda a la derecha', 'Seguir recto siempre']], ['¿Qué hay al lado de la estación?', 'El hospital', ['La escuela', 'El parque', 'La tienda']], ['¿Cuánto se tarda?', '5 minutos a pie', ['15 minutos a pie', '5 minutos en bus', '50 minutos']]] }],
w: [wr('Pregunta dónde está la estación y pide un billete para Bilbao.', ['non', 'txartel'], 'Non dago geltokia? Txartel bat nahi dut Bilborako.')],
});

U({ id: 'a2-13', lv: 'A2', t: 'Gonbidapenak eta mezuak', es: 'Invitaciones, citas y mensajes', ic: '🎉',
g: `<h4>Invitar, aceptar, rechazar</h4>
<ul><li><b>Etorri nahi duzu?</b> ¿Quieres venir? · <b>Zer ordutan geldituko gara?</b> ¿A qué hora quedamos? · <b>Non geldituko gara?</b> ¿Dónde quedamos?</li>
<li>Aceptar: <b>Bai, pozik!</b> · <b>Ados!</b> · <b>Primeran!</b> · <b>Noski!</b></li>
<li>Rechazar con cortesía: <b>Ezin dut, barkatu.</b> · <b>Pena da, baina lana dut.</b></li></ul>
<h4>Celebraciones y mensajes</h4>
<ul><li><b>Zorionak!</b> felicidades · <b>Urte askotarako!</b> ¡por muchos años! · <b>Nire urtebetetzea da.</b> es mi cumpleaños.</li>
<li>Inicio: <b>Kaixo, Ane!</b> · Cierre: <b>Laster arte</b> · <b>Besarkada bat</b> (un abrazo) · <b>Agur</b>.</li>
<li>Estructura útil: <i>Larunbatean festa egingo dut etxean. Etorri nahi duzu? Zazpietan hasiko gara.</i></li></ul>`,
v: [['gonbidatu', 'invitar'], ['festa', 'la fiesta'], ['urtebetetzea', 'el cumpleaños'], ['zorionak', 'felicidades'], ['ados', 'de acuerdo'], ['pozik', 'contento'], ['pena da', 'es una pena'], ['geldituko gara', 'quedaremos'], ['plaza', 'la plaza'], ['mezua', 'el mensaje'], ['besarkada', 'el abrazo'], ['laster arte', 'hasta pronto']],
p: [['Larunbatean nire urtebetetzea da', 'El sábado es mi cumpleaños'], ['Etorri nahi duzu?', '¿Quieres venir?'], ['Bai, pozik!', '¡Sí, encantado!'], ['Ezin dut, barkatu', 'No puedo, perdona'], ['Zer ordutan geldituko gara?', '¿A qué hora quedamos?'], ['Zazpietan nire etxean', 'A las siete en mi casa'], ['Ados, primeran!', '¡De acuerdo, genial!'], ['Zorionak!', '¡Felicidades!'], ['Laster arte', 'Hasta pronto']],
x: [
  fl('Etorri ___ duzu? (quieres)', 'nahi', ['nahi', 'behar', 'ezin', 'ahal']),
  fl('Ezin ___, barkatu. (no puedo)', 'dut', ['dut', 'naiz', 'du', 'nago']),
  fl('Zer ordutan ___ gara? (quedamos)', 'geldituko', ['geldituko', 'gelditu', 'gelditzen', 'geldigo']),
  fl('___! (¡felicidades!)', 'Zorionak', ['Zorionak', 'Barkatu', 'Agur', 'Ados']),
  mc('Aceptas una invitación con…', 'Bai, pozik!', ['Ezin dut, barkatu', 'Zergatik?', 'Pena da']),
  mc('Rechazas con cortesía con…', 'Ezin dut, barkatu', ['Bai, pozik!', 'Ados!', 'Primeran!']),
  mc('«Besarkada bat» →', 'Un abrazo', ['Un beso', 'Un regalo', 'Una carta']),
  mc('«Ados» significa…', 'de acuerdo', ['por favor', 'lo siento', 'hasta luego']),
  mc('«Nire urtebetetzea da» →', 'Es mi cumpleaños', ['Es mi casa', 'Es mi cumpleaños de ayer', 'Fue mi fiesta']),
  mc('«Laster arte» →', 'Hasta pronto', ['Hasta mañana', 'Hasta nunca', 'Buenas noches']),
],
d: [{ title: 'Elkarrizketa 28 · Gonbidapena', lines: [['Ane', 'Kaixo, Mikel! Larunbatean nire urtebetetzea da. Etorri nahi duzu?'], ['Mikel', 'Bai, pozik! Zer ordutan geldituko gara?'], ['Ane', 'Zazpietan, nire etxean.'], ['Mikel', 'Ados. Zer eraman behar dut?'], ['Ane', 'Ez, ez duzu ezer eraman behar.']],
  qs: [['¿Qué celebra Ane?', 'Su cumpleaños', ['Una boda', 'Un viaje', 'Un examen']], ['¿A qué hora quedan?', 'A las siete', ['A las seis', 'A las ocho', 'A las cinco']], ['¿Qué tiene que llevar Mikel?', 'Nada', ['Un regalo', 'Comida', 'Bebida']]] },
  { title: 'Mezua · Ane-ren oharra', lines: [['Ane', 'Kaixo, Mikel!'], ['Ane', 'Larunbatean festa egingo dut etxean.'], ['Ane', 'Zazpietan hasiko gara. Etorri nahi duzu?'], ['Ane', 'Besarkada bat. Ane.']],
  qs: [['¿Qué va a hacer Ane el sábado?', 'Una fiesta en casa', ['Un viaje', 'Un examen', 'Una cena en un bar']], ['¿Cuándo empieza?', 'A las siete', ['A las nueve', 'A las doce', 'A las cinco']]] }],
w: [wr('Escribe un mensaje corto invitando a un amigo a una fiesta (día, hora).', ['etorri|nahi', 'larunbat|igande|bihar|ostiral'], 'Kaixo! Larunbatean festa egingo dut. Etorri nahi duzu? Zazpietan hasiko gara.')],
});
})();
