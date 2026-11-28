/* Contenido A2 · unidades 14-15 (material original; sin revisión de hablante nativo) */
(function () {
const { mc, fl, wr, U, vocabList: V, phraseList: P, dialog: D } = E;

U({ id: 'a2-14', lv: 'A2', t: 'Telefonoa eta teknologia', es: 'Teléfono, mensajes y tecnología', ic: '📱',
g: `<h4>Comunicarse: deitu, bidali, konektatu</h4>
<p><b>Deitu</b> lleva dativo: <i>Aneri deitu diot</i> (he llamado a Ane) · <i>Zuri deituko dizut</i> (te llamaré). <b>Bidali</b> también: <i>Mezu bat bidali dizut</i>.</p>
<p>El medio se expresa con <b>-z</b> o con <b>bidez</b>: <i>telefonoz, posta elektronikoz, WhatsApp bidez</i>.</p>
<p>Problemas técnicos: <i>Bateria agortu zait</i> (se me ha acabado la batería) · <i>Pasahitza ahaztu zait</i> · <i>Ezin naiz wifira konektatu</i>.</p>`,
v: V(`telefono mugikorra = móvil
ordenagailua = ordenador
internet = internet
wifia = wifi
mezua = mensaje
posta elektronikoa = correo electrónico
pasahitza = contraseña
bateria = batería
kargatu = cargar
deitu = llamar
bidali = enviar
konektatu = conectar(se)
pantaila = pantalla
aplikazioa = aplicación
argazkia = foto`),
p: P(`Zure telefono zenbakia zein da? | ¿Cuál es tu número de teléfono?
Aneri deituko diot gaur arratsaldean | Llamaré a Ane esta tarde
Mezu bat bidali dizut | Te he enviado un mensaje
Bateria agortu zait | Se me ha acabado la batería
Ezin naiz wifira konektatu | No puedo conectarme al wifi
Pasahitza ahaztu zait | Se me ha olvidado la contraseña
Posta elektronikoz bidaliko dizut | Te lo enviaré por correo electrónico
Argazkiak bidaliko dizkizut | Te enviaré las fotos
Telefonoa kargatzen ari naiz | Estoy cargando el teléfono
Pantaila apurtuta dago | La pantalla está rota`),
x: [
  mc('«telefono mugikorra» →', 'móvil', ['pantalla', 'contraseña', 'batería']),
  mc('«pasahitza» →', 'contraseña', ['aplicación', 'foto', 'mensaje']),
  mc('«Aneri deitu diot» significa…', 'He llamado a Ane', ['Ane me ha llamado', 'Llamaré a Ane', 'Ane ha llamado a Mikel']),
  mc('«Mezu bat bidali dizut» significa…', 'Te he enviado un mensaje', ['Me has enviado un mensaje', 'Te enviaré un mensaje', 'Has leído el mensaje']),
  fl('Telefono___ hitz egin dugu. (por teléfono)', 'z', ['z', 'ekin', 'rentzat', 'tik']),
  fl('Posta elektroniko___ bidaliko dizut. (por correo electrónico)', 'z', ['z', 'ra', 'ekin', 'tik']),
  mc('«Bateria agortu zait» significa…', 'Se me ha acabado la batería', ['He cargado la batería', 'La batería es nueva', 'Quiero comprar una batería']),
  fl('Zein da zure telefono ___? (número)', 'zenbakia', ['zenbakia', 'mezua', 'pantaila', 'argazkia']),
  mc('«konektatu» →', 'conectar(se)', ['cargar', 'enviar', 'llamar']),
  fl('Zuri deituko ___ bihar. (a ti, yo)', 'dizut', ['dizut', 'dut', 'dizu', 'diot']),
  mc('«pantaila» →', 'pantalla', ['aplicación', 'batería', 'contraseña']),
  mc('«Wifira konektatu» significa…', 'conectarse al wifi', ['cargar el móvil', 'enviar un mensaje', 'llamar por teléfono']),
],
d: [D('Elkarrizketa · Wifi arazoa', `A: Kaixo, Mikel! Zer moduz?
B: Kaixo, Ane. Ondo, baina ezin naiz wifira konektatu.
A: Pasahitza sartu duzu?
B: Bai, baina ahaztu zait zein den.
A: Ez kezkatu. Mezu bat bidaliko dizut pasahitzarekin.
B: Mila esker!`, [
  ['¿Qué problema tiene Mikel?', 'No puede conectarse al wifi', ['Se le ha roto la pantalla', 'No tiene batería', 'Ha perdido el móvil']],
  ['¿Qué hará Ane?', 'Enviarle un mensaje con la contraseña', ['Llamarle por teléfono', 'Cambiar el wifi', 'Ir a su casa']],
])],
w: [wr('Escribe un mensaje corto: te has quedado sin batería y llamarás luego.', ['bateria', 'deitu'], 'Bateria agortu zait. Geroago deituko dizut.')],
});

U({ id: 'a2-15', lv: 'A2', t: 'Lana eta lanbideak', es: 'Trabajo y profesiones', ic: '💼',
g: `<h4>Hablar del trabajo</h4>
<p>La profesión se dice con el artículo: <i>Irakaslea naiz</i> · <i>Medikua da</i>. El lugar de trabajo va en inesivo: <i>Ospitalean lan egiten dut</i> · <i>Bulegoan lan egiten dugu</i>.</p>
<p>Preguntas: <b>Zer lanbide duzu?</b> · <b>Non egiten duzu lan?</b> · <b>Zer ordutan hasten zara lanean?</b></p>
<p><b>-z</b> con una profesión equivale a «de»: <i>Zerbitzari gisa lan egiten dut</i> (trabajo de camarero/a).</p>`,
v: V(`lanbidea = profesión
irakaslea = profesor/a
medikua = médico/a
sukaldaria = cocinero/a
zerbitzaria = camarero/a
ingeniaria = ingeniero/a
langilea = trabajador/a
lankidea = compañero/a de trabajo
nagusia = jefe/a
bulegoa = oficina
ordutegia = horario
soldata = sueldo`),
p: P(`Zer lanbide duzu? | ¿Cuál es tu profesión?
Irakaslea naiz eskola batean | Soy profesor/a en un colegio
Ospitalean lan egiten du | Trabaja en un hospital
Nire lankideak oso atseginak dira | Mis compañeros de trabajo son muy agradables
Zortzietan hasten naiz lanean | Empiezo a trabajar a las ocho
Bulegoan lan egiten dugu | Trabajamos en una oficina
Nire nagusia oso langilea da | Mi jefe es muy trabajador
Ordutegi malgua dut | Tengo un horario flexible
Soldata ez da oso handia | El sueldo no es muy alto
Zerbitzari gisa lan egiten dut | Trabajo de camarero/a`),
x: [
  mc('«Irakaslea naiz» significa…', 'Soy profesor/a', ['Tengo un profesor', 'Quiero ser profesor', 'Era profesor']),
  mc('«lankidea» →', 'compañero/a de trabajo', ['jefe/a', 'sueldo', 'horario']),
  mc('«soldata» →', 'sueldo', ['horario', 'oficina', 'profesión']),
  fl('Ospital___ lan egiten dut. (en un hospital)', 'ean', ['ean', 'era', 'etik', 'ekin']),
  fl('Bulego___ lan egiten dugu. (en la oficina)', 'an', ['an', 'ra', 'tik', 'rekin']),
  mc('«Zer lanbide duzu?» pregunta por…', 'la profesión', ['la edad', 'el horario', 'el sueldo']),
  fl('Zortzietan hasten naiz ___. (en el trabajo)', 'lanean', ['lanean', 'lanera', 'lanetik', 'lanarekin']),
  mc('«nagusia» en el trabajo es…', 'el jefe / la jefa', ['el compañero', 'el cliente', 'el sueldo']),
  mc('«ordutegia» →', 'horario', ['soldata', 'bulegoa', 'lanbidea']),
  fl('Nire lankide___ oso atseginak dira. (mis compañeros)', 'ak', ['ak', 'a', 'ek', 'ei']),
  mc('«zerbitzaria» →', 'camarero/a', ['cocinero/a', 'médico/a', 'ingeniero/a']),
  fl('Medikua ___. (soy)', 'naiz', ['naiz', 'da', 'dut', 'nago']),
],
d: [D('Elkarrizketa · Lanbidea', `A: Zer lanbide duzu?
B: Sukaldaria naiz, jatetxe batean lan egiten dut.
A: Eta zer ordutegi duzu?
B: Arratsaldeko zazpietatik gauerdira arte lan egiten dut.
A: Eta lankideak?
B: Oso atseginak dira, baina soldata ez da handia.`, [
  ['¿Cuál es la profesión de B?', 'Cocinero/a', ['Camarero/a', 'Profesor/a', 'Médico/a']],
  ['¿Hasta qué hora trabaja B?', 'Hasta medianoche', ['Hasta las siete', 'Hasta las tres', 'Hasta mediodía']],
  ['¿Qué dice B de sus compañeros?', 'Que son muy agradables', ['Que son pocos', 'Que son jefes', 'Que no los conoce']],
])],
w: [wr('Presenta tu trabajo: profesión, dónde trabajas y a qué hora empiezas.', ['lan egiten|lanean', 'naiz|dut'], 'Irakaslea naiz. Eskola batean lan egiten dut. Bederatzietan hasten naiz lanean.')],
});
})();
