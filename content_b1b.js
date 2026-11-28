/* Contenido B1 · unidades 7-15 (material original; sin revisión de hablante nativo) */
(function () {
const { mc, fl, wr, U, vocabList: V, phraseList: P, dialog: D } = E;

U({ id: 'b1-7', lv: 'B1', t: 'Etxebizitza eta auzoa', es: 'Vivienda, alquiler y barrio', ic: '🏠',
g: `<h4>Describir y alquilar una vivienda</h4>
<p>Existencia: <b>dago/daude</b> (hay) · posesión de la vivienda: <b>du/ditu</b> (tiene). <i>Pisu honetan hiru logela <b>daude</b></i> · <i>Pisu honek hiru logela <b>ditu</b></i>.</p>
<p>Negación con partitivo: <i>Igogailurik ez dago</i>. Cercanía: <i>metrotik hurbil</i>. Precio: <i>Zortziehun euro ordaintzen dut hilean</i>.</p>`,
v: V(`alokairua = alquiler
pisua = piso
logela = dormitorio
sukaldea = cocina
komuna = baño
egongela = salón
terraza = terraza
igogailua = ascensor
auzoa = barrio
jabea = propietario/a
maizterra = inquilino/a
fidantza = fianza`),
p: P(`Pisu bat bilatzen ari naiz auzo honetan | Estoy buscando un piso en este barrio
Zenbat da alokairua hilean? | ¿Cuánto es el alquiler al mes?
Pisu honek hiru logela ditu | Este piso tiene tres dormitorios
Egongela handia eta argitsua da | El salón es grande y luminoso
Igogailurik ez dago eraikinean | No hay ascensor en el edificio
Metrotik hurbil dago | Está cerca del metro
Fidantza bi hilabetekoa da | La fianza es de dos meses
Jabeak etxea alokatu nahi du | El propietario quiere alquilar la casa
Maizter berriak datorren astean sartuko dira | Los nuevos inquilinos entrarán la semana que viene
Terraza txiki bat dugu | Tenemos una terraza pequeña`),
x: [
  mc('«alokairua» →', 'alquiler', ['fianza', 'barrio', 'piso']),
  mc('«logela» →', 'dormitorio', ['cocina', 'salón', 'baño']),
  fl('Pisu honetan hiru logela ___. (hay)', 'daude', ['daude', 'ditu', 'dira', 'dago']),
  fl('Pisu honek hiru logela ___. (tiene)', 'ditu', ['ditu', 'daude', 'dira', 'du']),
  mc('«Igogailurik ez dago» significa…', 'No hay ascensor', ['Hay un ascensor nuevo', 'El ascensor está roto', 'Quiero un ascensor']),
  mc('«maizterra» →', 'inquilino/a', ['propietario/a', 'vecino/a', 'portero/a']),
  fl('Metro___ hurbil dago. (cerca del metro)', 'tik', ['tik', 'ra', 'an', 'rekin']),
  mc('«Zenbat da alokairua hilean?» pregunta por…', 'el precio mensual', ['el tamaño', 'la dirección', 'la fecha de entrada']),
  fl('Pisu bat ___ ari naiz. (buscando)', 'bilatzen', ['bilatzen', 'bilatu', 'bilatuko', 'bila']),
  mc('«jabea» →', 'propietario/a', ['inquilino/a', 'fianza', 'barrio']),
  fl('Egongela handia ___ argitsua da. (y)', 'eta', ['eta', 'baina', 'edo', 'ere']),
  mc('«fidantza» →', 'fianza', ['alquiler', 'terraza', 'ascensor']),
],
d: [D('Elkarrizketa · Pisu bila', `A: Egun on! Pisu bat bilatzen ari naiz auzo honetan.
B: Egun on! Badaukat bat, hiru logela ditu eta metrotik hurbil dago.
A: Zenbat da alokairua hilean?
B: Zortziehun euro, eta fidantza bi hilabetekoa da.
A: Igogailua dago?
B: Ez, baina bigarren pisuan dago.`, [
  ['¿Cuánto cuesta el alquiler?', '800 euros al mes', ['500 euros al mes', '800 euros al año', 'No se dice']],
  ['¿Qué tiene el piso?', 'Tres dormitorios', ['Una terraza grande', 'Ascensor', 'Dos baños']],
  ['¿Hay ascensor?', 'No, pero está en un segundo piso', ['Sí, nuevo', 'Sí, roto', 'No se menciona']],
])],
w: [wr('Describe tu casa ideal: cuántas habitaciones tiene y dónde está.', ['logela', 'dago|dut|ditu'], 'Nire etxe ideala handia da. Hiru logela ditu eta mendiaren ondoan dago.')],
});

U({ id: 'b1-8', lv: 'B1', t: 'Lan-bilaketa eta elkarrizketa', es: 'Buscar trabajo y entrevista', ic: '📄',
g: `<h4>Currículum y entrevista</h4>
<p>Duración con <b>-z</b>: <i>Bi urtez lan egin dut</i> (he trabajado dos años). Profesión como función: <i>dendari gisa</i> (de dependiente/a).</p>
<p>Preguntas típicas: <b>Zergatik nahi duzu lan hau?</b> · <b>Zer esperientzia duzu?</b> · <b>Nolako pertsona zara?</b></p>
<p>Gustos con verbo: <i>Taldean lan egitea gustatzen zait</i>.</p>`,
v: V(`curriculuma = currículum
lan eskaintza = oferta de empleo
elkarrizketa = entrevista
esperientzia = experiencia
ikasketak = estudios
titulua = título
kontratua = contrato
arduratsua = responsable
hautagaia = candidato/a
aukeratu = elegir
dendaria = dependiente/a
bezeroa = cliente`),
p: P(`Lan eskaintza ikusi dut eta curriculuma bidali dut | He visto la oferta y he enviado el currículum
Bi urtez dendari gisa lan egin dut | He trabajado dos años como dependiente/a
Zer esperientzia duzu? | ¿Qué experiencia tienes?
Zergatik nahi duzu lan hau? | ¿Por qué quieres este trabajo?
Nire ustez, pertsona arduratsua naiz | En mi opinión, soy una persona responsable
Taldean lan egitea gustatzen zait | Me gusta trabajar en equipo
Ikasketak joan den urtean amaitu nituen | Terminé los estudios el año pasado
Elkarrizketa bihar dut goizeko hamarretan | Tengo la entrevista mañana a las diez de la mañana
Kontratua sinatu dugu | Hemos firmado el contrato
Hautagai asko aurkeztu dira | Se han presentado muchos candidatos`),
x: [
  mc('«elkarrizketa» (laboral) →', 'entrevista', ['contrato', 'título', 'sueldo']),
  mc('«hautagaia» →', 'candidato/a', ['jefe/a', 'compañero/a', 'cliente']),
  mc('«Bi urtez lan egin dut» significa…', 'He trabajado durante dos años', ['Trabajaré dos años', 'Hace dos años que no trabajo', 'Empiezo a trabajar en dos años']),
  fl('Hiru urte___ lan egin dut. (durante)', 'z', ['z', 'tik', 'ra', 'an']),
  mc('«Zer esperientzia duzu?» →', '¿Qué experiencia tienes?', ['¿Qué estudios tienes?', '¿Cuánto cobras?', '¿Dónde vives?']),
  fl('Curriculuma ___ dut. (he enviado)', 'bidali', ['bidali', 'bidaliko', 'bidaltzen', 'bidaltzeko']),
  mc('«arduratsua» →', 'responsable (cualidad)', ['perezoso', 'cansado', 'enfadado']),
  fl('Taldean lan egitea gustatzen ___. (me)', 'zait', ['zait', 'dut', 'naiz', 'dit']),
  mc('«Ikasketak amaitu nituen» está en…', 'pasado', ['futuro', 'presente', 'imperativo']),
  fl('Kontratua ___ dugu. (hemos firmado)', 'sinatu', ['sinatu', 'sinatzen', 'sinatuko', 'sinatzeko']),
  mc('«lan eskaintza» →', 'oferta de empleo', ['contrato', 'entrevista', 'título']),
  mc('«aukeratu» →', 'elegir', ['firmar', 'enviar', 'terminar']),
],
d: [D('Elkarrizketa · Lan-elkarrizketa', `A: Egun on. Zergatik nahi duzu lan hau?
B: Dendetan lan egin dut hiru urtez, eta bezeroekin lan egitea gustatzen zait.
A: Zer esperientzia duzu taldean lan egiten?
B: Asko. Nire ustez, pertsona arduratsua eta langilea naiz.
A: Primeran. Datorren astean deituko dizugu.`, [
  ['¿Cuánto tiempo trabajó B en tiendas?', 'Tres años', ['Un año', 'Seis meses', 'Diez años']],
  ['¿Qué le gusta a B?', 'Trabajar con clientes', ['Trabajar solo', 'Viajar', 'Escribir informes']],
  ['¿Cuándo le llamarán?', 'La semana que viene', ['Hoy', 'Mañana', 'Nunca']],
])],
w: [wr('Escribe 3 frases para una entrevista: experiencia, cualidad y por qué quieres el trabajo.', ['lan egin|esperientzia', 'naiz'], 'Bi urtez dendari gisa lan egin dut. Pertsona arduratsua naiz. Lan hau nahi dut taldean lan egitea gustatzen zaidalako.')],
});

U({ id: 'b1-9', lv: 'B1', t: 'Egitura inpertsonalak', es: 'Construcciones impersonales («se habla…»)', ic: '👥',
g: `<h4>«Se» impersonal: participio habitual + <b>da / dira</b></h4>
<p><i>Hemen euskaraz <b>hitz egiten da</b></i> (aquí se habla euskera) · <i>Euskal Herrian sagardoa <b>edaten da</b></i> · <i>Dendak zortzietan <b>irekitzen dira</b></i>.</p>
<p>Pasado: <i>Lehen ez <b>zen</b> horrela egiten</i>. Obligación impersonal: <i>Hemen ez da erre <b>behar</b></i> · <i>Isilik egon <b>behar da</b></i>.</p>`,
v: V(`hitz egin = hablar
erre = fumar
sagardoa = sidra
ohitura = costumbre
saldu = vender
erosi = comprar
ireki = abrir
itxi = cerrar
isilik = en silencio
erabili = usar
jakin = saber
batez ere = sobre todo`),
p: P(`Hemen euskaraz hitz egiten da | Aquí se habla euskera
Euskal Herrian sagardoa edaten da | En el País Vasco se bebe sidra
Dendak zortzietan irekitzen dira | Las tiendas se abren a las ocho
Hemen ez da erre behar | Aquí no se debe fumar
Liburutegian isilik egon behar da | En la biblioteca hay que estar en silencio
Lehen ez zen horrela egiten | Antes no se hacía así
Euskaraz «eskerrik asko» esaten da | En euskera se dice «eskerrik asko»
Han fruta asko saltzen da | Allí se vende mucha fruta
Gaur egun asko erabiltzen da internet | Hoy en día se usa mucho internet`),
x: [
  mc('«Euskaraz hitz egiten da» significa…', 'Se habla euskera', ['Hablo euskera', 'Hablaré euskera', 'Habla bien euskera']),
  fl('Hemen ez da erre ___. (hay que)', 'behar', ['behar', 'ahal', 'nahi', 'komeni']),
  mc('«Dendak irekitzen dira» →', 'Las tiendas se abren', ['Abro la tienda', 'He abierto las tiendas', 'Voy a cerrar la tienda']),
  fl('Euskal Herrian sagardoa ___ da. (se bebe)', 'edaten', ['edaten', 'edan', 'edango', 'edatea']),
  mc('«Lehen ez zen horrela egiten» indica…', 'algo que antes no se hacía', ['algo que ocurrirá', 'una orden', 'un deseo']),
  fl('Liburutegian isilik egon ___ da. (hay que)', 'behar', ['behar', 'ahal', 'nahi', 'nahiz']),
  mc('«Han fruta asko saltzen da» →', 'Allí se vende mucha fruta', ['Allí compro fruta', 'Allí he vendido fruta', 'Aquí no hay fruta']),
  fl('Euskaraz «eskerrik asko» ___ da. (se dice)', 'esaten', ['esaten', 'esan', 'esango', 'esatea']),
  mc('La construcción impersonal se forma con…', 'participio habitual + da/dira', ['participio + dut', 'futuro + du', 'raíz + zaitez']),
  fl('Dendak zortzietan ___ dira. (se abren)', 'irekitzen', ['irekitzen', 'ireki', 'irekiko', 'irekitzeko']),
  mc('«Gaur egun asko erabiltzen da internet» →', 'Hoy en día se usa mucho internet', ['Uso internet cada día', 'Internet se usará mañana', 'Internet no funciona']),
  fl('Lehen ez ___ horrela egiten. (era)', 'zen', ['zen', 'da', 'zuen', 'dut']),
],
d: [D('Elkarrizketa · Ohiturak', `A: Zer ohitura dituzue Euskal Herrian?
B: Hemen sagardoa edaten da, batez ere neguan.
A: Eta dendak zer ordutan irekitzen dira?
B: Normalean goizeko bederatzietan. Igandeetan ez dira irekitzen.`, [
  ['¿Qué se bebe sobre todo en invierno?', 'Sidra', ['Vino', 'Café', 'Agua']],
  ['¿A qué hora abren normalmente las tiendas?', 'A las nueve de la mañana', ['A las ocho', 'A las diez', 'A mediodía']],
  ['¿Qué pasa los domingos?', 'Las tiendas no abren', ['Abren más tarde', 'Abren todo el día', 'Hay rebajas']],
])],
w: [wr('Explica dos costumbres de tu ciudad con la forma impersonal (se come…, se hace…).', ['jaten da|egiten da|edaten da|esaten da|irekitzen da|saltzen da'], 'Nire herrian ogi gozoa jaten da. Jaietan kalean dantzatzen da.')],
});

U({ id: 'b1-10', lv: 'B1', t: 'Aginteraren forma', es: 'Imperativo: órdenes y peticiones', ic: '📣',
g: `<h4>Imperativo con «zu» y «zuek»</h4>
<p><b>Transitivos:</b> participio + <b>ezazu</b> (zu) / <b>ezazue</b> (zuek): <i>Ireki ezazu atea</i> · <i>Ireki ezazue liburuak</i>. Negativa: <i>Ez ezazu atea ireki</i>.</p>
<p><b>Intransitivos:</b> <i>Zatoz hona</i> (ven) · <i>Zatozte</i> (venid) · <i>Zoaz</i> (ve) · <i>Zoazte</i> · <i>Zaude geldi</i> (quédate). Negativa: <i>Ez zaitez berandu iritsi</i>.</p>
<p>Para suavizar, añade <b>mesedez</b>.</p>`,
v: V(`ireki = abrir
itxi = cerrar
hartu = coger / tomar
utzi = dejar
eman = dar
ekarri = traer
eraman = llevar
itzuli = devolver / volver
itxaron = esperar
etorri = venir
joan = ir
mesedez = por favor`),
p: P(`Ireki ezazu atea, mesedez | Abre la puerta, por favor
Itxi ezazu leihoa | Cierra la ventana
Zatoz hona! | ¡Ven aquí!
Zoaz etxera | Vete a casa
Zaude geldi | Quédate quieto
Ez ezazu atea ireki | No abras la puerta
Ez zaitez berandu iritsi | No llegues tarde
Ireki ezazue liburuak | Abrid los libros
Zatozte nirekin | Venid conmigo
Itxaron ezazu pixka bat | Espera un poco`),
x: [
  mc('«Ireki ezazu atea» expresa…', 'una orden dirigida a una persona (zu)', ['una pregunta', 'un hecho pasado', 'un deseo propio']),
  mc('«Zatoz hona!» significa…', '¡Ven aquí!', ['¡Vete de aquí!', '¡Estoy aquí!', 'Voy a venir']),
  mc('«Zoaz» →', 'vete (tú)', ['ven (tú)', 'vamos', 'van']),
  fl('Ez ___ atea ireki. (no abras)', 'ezazu', ['ezazu', 'zaitez', 'dut', 'zara']),
  fl('Ez ___ berandu iritsi. (no llegues tarde)', 'zaitez', ['zaitez', 'ezazu', 'zara', 'duzu']),
  mc('«Zatozte nirekin» se dirige a…', 'varias personas (zuek)', ['una persona', 'él/ella', 'nadie']),
  mc('«Itxi ezazu leihoa» →', 'Cierra la ventana', ['Abre la ventana', 'He cerrado la ventana', 'La ventana está cerrada']),
  fl('___ geldi! (quédate)', 'Zaude', ['Zaude', 'Zatoz', 'Zoaz', 'Zaitez']),
  mc('«Ireki ezazue liburuak» →', 'Abrid los libros', ['Abre el libro', 'He abierto los libros', 'No abráis los libros']),
  fl('Zoa___ etxera. (vosotros, id)', 'zte', ['zte', 'z', 'te', 'kio']),
  mc('Para «no» + orden transitiva con zu se usa…', 'ez + ezazu + objeto + participio', ['ez + dut', 'ez + zaitez + participio transitivo', 'solo ezazu sin ez']),
  fl('Itxaron ___ pixka bat. (espera)', 'ezazu', ['ezazu', 'zaitez', 'duzu', 'zaude']),
],
d: [D('Elkarrizketa · Etxean', `A: Kaixo, sartu!
B: Eskerrik asko. Itxi ezazu atea, mesedez, hotza dago.
A: Bai, noski. Zatoz hona eta eseri.
B: Ez ezazu telebista piztu, mesedez, hitz egin nahi dut.
A: Ados. Zer gertatu da?`, [
  ['¿Qué pide B que cierre?', 'La puerta', ['La ventana', 'La tele', 'El libro']],
  ['¿Qué no quiere B que haga A?', 'Encender la televisión', ['Cerrar la puerta', 'Hablar', 'Sentarse']],
])],
w: [wr('Escribe tres órdenes o peticiones amables a un compañero (una negativa).', ['ezazu|zatoz|zoaz|zaude', 'ez '], 'Ireki ezazu leihoa, mesedez. Ez ezazu atea itxi. Zatoz nirekin.')],
});

U({ id: 'b1-11', lv: 'B1', t: 'Denbora-adierazpenak', es: 'Expresiones de tiempo: hace, dentro de, desde, hasta', ic: '⏰',
g: `<h4>Situar los hechos en el tiempo</h4>
<ul><li><b>duela</b> (hace): <i>Duela bi urte etorri nintzen</i>.</li>
<li><b>barru</b> (dentro de): <i>Ordubete barru etorriko naiz</i>.</li>
<li><b>-tik hona</b> (desde hace): <i>Hiru urtetik hona bizi naiz hemen</i> · <b>Noiztik?</b> (¿desde cuándo?).</li>
<li><b>arte</b> (hasta): <i>Bostak arte lan egingo dut</i> · <b>Noiz arte?</b></li></ul>`,
v: V(`duela = hace
barru = dentro de
-tik hona = desde hace
arte = hasta
noiztik = desde cuándo
noiz arte = hasta cuándo
aurten = este año
iaz = el año pasado
atzo = ayer
bihar = mañana
etzi = pasado mañana
laster = pronto`),
p: P(`Duela bi urte etorri nintzen hona | Vine aquí hace dos años
Ordubete barru etorriko naiz | Vendré dentro de una hora
Noiztik bizi zara hemen? | ¿Desde cuándo vives aquí?
Hiru urtetik hona bizi naiz hemen | Vivo aquí desde hace tres años
Bostak arte lan egingo dut | Trabajaré hasta las cinco
Noiz arte geratuko zara? | ¿Hasta cuándo te quedarás?
Joan den astean Bilbon izan nintzen | La semana pasada estuve en Bilbao
Datorren hilean oporrak hasiko dira | El mes que viene empezarán las vacaciones
Iaz ez nuen oporrik hartu | El año pasado no cogí vacaciones
Laster itzuliko naiz | Volveré pronto`),
x: [
  mc('«Duela bi urte» significa…', 'hace dos años', ['dentro de dos años', 'durante dos años', 'hasta dentro de dos años']),
  mc('«Ordubete barru» significa…', 'dentro de una hora', ['hace una hora', 'durante una hora', 'una hora después de ayer']),
  fl('___ bizi zara hemen? (¿desde cuándo?)', 'Noiztik', ['Noiztik', 'Noiz arte', 'Noiz', 'Non']),
  fl('Hiru urtetik ___ bizi naiz hemen. (desde hace)', 'hona', ['hona', 'arte', 'barru', 'duela']),
  mc('«Noiz arte?» pregunta…', 'hasta cuándo', ['desde cuándo', 'cuándo ocurrió', 'cómo']),
  fl('Bostak ___ lan egingo dut. (hasta)', 'arte', ['arte', 'barru', 'duela', 'hona']),
  mc('«iaz» →', 'el año pasado', ['este año', 'el año que viene', 'ayer']),
  mc('«aurten» →', 'este año', ['el año pasado', 'todo el año', 'el mes que viene']),
  fl('___ bi urte etorri nintzen hona. (hace)', 'Duela', ['Duela', 'Barru', 'Arte', 'Hona']),
  mc('«Joan den astean» →', 'la semana pasada', ['la semana que viene', 'esta semana', 'hace dos semanas']),
  fl('Ordubete ___ etorriko naiz. (dentro de)', 'barru', ['barru', 'duela', 'hona', 'iaz']),
  mc('«Laster itzuliko naiz» →', 'Volveré pronto', ['Volví ayer', 'No volveré', 'He vuelto ya']),
],
d: [D('Elkarrizketa · Noiztik?', `A: Noiztik bizi zara Donostian?
B: Bi urtetik hona. Duela hiru urte Bilbon bizi nintzen.
A: Eta noiz arte geratuko zara hemen?
B: Ez dakit. Datorren urtera arte, behintzat.`, [
  ['¿Desde cuándo vive B en Donostia?', 'Desde hace dos años', ['Desde hace tres años', 'Desde ayer', 'Desde siempre']],
  ['¿Dónde vivía hace tres años?', 'En Bilbao', ['En Donostia', 'En Vitoria', 'En Pamplona']],
  ['¿Hasta cuándo se queda seguro?', 'Hasta el año que viene, al menos', ['Hasta mañana', 'Toda la vida', 'Hasta el verano']],
])],
w: [wr('Cuenta desde cuándo haces algo y qué pasaba hace años.', ['hona|duela'], 'Bi urtetik hona euskara ikasten ari naiz. Duela hiru urte ez nekien ezer.')],
});

U({ id: 'b1-12', lv: 'B1', t: 'Bidaiak eta turismoa', es: 'Viajes y turismo', ic: '🧳',
g: `<h4>Organizar un viaje</h4>
<p>Reservas y planes: <i>Hegaldia erreserbatu dut</i> · <i>Hotelean bi gau pasatuko ditugu</i> · <i>Museoa bisitatzera joango gara</i> (ir a + verbo: <b>-tzera</b>).</p>
<p>Posibilidad impersonal: <b>ikus daiteke</b> (se puede ver): <i>Hemendik mendia ikus daiteke</i>.</p>
<p>Obligación: <i>Geltokira joan behar dugu garaiz</i>.</p>`,
v: V(`hegaldia = vuelo
ostatua = alojamiento
erreserbatu = reservar
maleta = maleta
txartela = billete
ibilbidea = ruta
turista = turista
gida = guía
bisitatu = visitar
hondartza = playa
museoa = museo
geltokia = estación
bidaia = viaje`),
p: P(`Udan Irlandara bidaiatuko dugu | En verano viajaremos a Irlanda
Hegaldia atzo erreserbatu dut | He reservado el vuelo ayer
Hotelean bi gau pasatuko ditugu | Pasaremos dos noches en el hotel
Museoa bisitatzera joango gara | Iremos a visitar el museo
Hemendik hondartza ikus daiteke | Desde aquí se puede ver la playa
Gidak ibilbide polita proposatu digu | El guía nos ha propuesto una ruta bonita
Maleta egin behar dut | Tengo que hacer la maleta
Geltokira joan behar dugu garaiz | Tenemos que ir a la estación a tiempo
Bidaia luzea izan da, baina oso polita | Ha sido un viaje largo, pero muy bonito
Hegaldia ordubetez atzeratu dute | Han retrasado el vuelo una hora`),
x: [
  mc('«hegaldia» →', 'vuelo', ['maleta', 'ruta', 'hotel']),
  mc('«erreserbatu» →', 'reservar', ['visitar', 'volver', 'atrasar']),
  fl('Hotelean gela bat ___ dut. (he reservado)', 'erreserbatu', ['erreserbatu', 'erreserbatuko', 'erreserbatzen', 'erreserbatzeko']),
  mc('«Museoa bisitatzera joango gara» expresa…', 'ir a visitar (movimiento con finalidad)', ['una obligación', 'un pasado habitual', 'una condición']),
  fl('Hemendik mendia ikus ___. (se puede ver)', 'daiteke', ['daiteke', 'dezake', 'da', 'dago']),
  mc('«gida» →', 'guía', ['turista', 'alojamiento', 'estación']),
  mc('«Maleta egin behar dut» →', 'Tengo que hacer la maleta', ['He perdido la maleta', 'Compré una maleta', 'La maleta es grande']),
  fl('Geltokira joan ___ dugu garaiz. (tenemos que)', 'behar', ['behar', 'ahal', 'nahi', 'komeni']),
  mc('«ibilbidea» →', 'ruta / itinerario', ['alojamiento', 'billete', 'playa']),
  fl('Udan Irlandara ___ dugu. (viajaremos)', 'bidaiatuko', ['bidaiatuko', 'bidaiatu', 'bidaiatzen', 'bidaiatzeko']),
  mc('«Hegaldia atzeratu dute» →', 'Han retrasado el vuelo', ['Han cancelado el hotel', 'Han reservado el vuelo', 'Han perdido el equipaje']),
  mc('«hondartza» →', 'playa', ['museo', 'monte', 'estación']),
],
d: [D('Elkarrizketa · Oporrak', `A: Oporretan nora joango zarete?
B: Irlandara. Hegaldia erreserbatu dugu eta hotelean bi gau pasatuko ditugu.
A: Zer bisitatuko duzue?
B: Museo bat eta kostaldeko ibilbide bat. Gidak oso polita dela esan digu.`, [
  ['¿Adónde irán de vacaciones?', 'A Irlanda', ['A Bilbao', 'A Francia', 'A Italia']],
  ['¿Cuántas noches pasarán en el hotel?', 'Dos', ['Una', 'Cinco', 'Diez']],
  ['¿Qué visitarán?', 'Un museo y una ruta por la costa', ['Un castillo', 'Una montaña nevada', 'Una playa solamente']],
])],
w: [wr('Planifica un viaje: destino, alojamiento y una actividad.', ['bidaiatu|joan', 'hotel|ostatu', 'bisitatu|ikusi'], 'Udan Irlandara joango gara. Hotel batean egongo gara. Museoa bisitatuko dugu.')],
});

U({ id: 'b1-13', lv: 'B1', t: 'Asmoak, nahiak eta gogoak', es: 'Planes, deseos y ganas', ic: '🎯',
g: `<h4>Expresar intenciones y deseos</h4>
<ul><li><b>nahi dut</b> + infinitivo: <i>Euskara ikasi nahi dut</i> · cortés: <b>nahi nuke</b> (querría).</li>
<li><b>-tzeko asmoa dut</b> (tengo intención de): <i>Euskaltegira joateko asmoa dut</i>.</li>
<li><b>gogoa</b> (ganas): <i>Bidaiatzeko gogoa dut</i>; en negativa, partitivo: <i>Ez dut gogorik</i>.</li>
<li><b>irrikitan nago</b> (estoy deseando) · <b>erabaki dut + -tzea</b> (he decidido).</li></ul>`,
v: V(`asmoa = intención / plan
gogoa = ganas
nahia = deseo
irrikitan = con ansia
ametsa = sueño
helburua = objetivo
erabaki = decidir
saiatu = intentar
lortu = conseguir
ilusioa = ilusión
atzeratu = aplazar
hasi = empezar`),
p: P(`Euskara ikasi nahi dut | Quiero aprender euskera
Kafe bat hartu nahi nuke | Querría tomar un café
Udan Euskal Herrian bizitzeko asmoa dut | Tengo la intención de vivir en el País Vasco en verano
Gaur ez dut ikasteko gogorik | Hoy no tengo ganas de estudiar
Bidaiatzeko gogoa dut | Tengo ganas de viajar
Oporren zain irrikitan nago | Estoy deseando que lleguen las vacaciones
Nire helburua azterketa gainditzea da | Mi objetivo es aprobar el examen
Erabaki dut euskaltegira joatea | He decidido ir al euskaltegi
Saiatuko naiz egunero ikasten | Intentaré estudiar cada día
Amets bat dut, euskaraz ondo hitz egitea | Tengo un sueño: hablar bien en euskera`),
x: [
  mc('«Kafe bat hartu nahi nuke» expresa…', 'un deseo cortés', ['una obligación', 'un hecho pasado', 'una prohibición']),
  mc('«asmoa» →', 'intención', ['ganas', 'objetivo', 'sueño']),
  fl('Gaur ez dut ikasteko ___. (ganas)', 'gogorik', ['gogorik', 'gogoa', 'asmoa', 'nahia']),
  mc('«irrikitan nago» →', 'estoy deseando', ['estoy cansado', 'estoy enfadado', 'estoy seguro']),
  mc('«helburua» →', 'objetivo', ['sueño', 'ganas', 'duda']),
  fl('Erabaki dut euskaltegira ___. (ir)', 'joatea', ['joatea', 'joan', 'joango', 'joaten']),
  mc('«Saiatuko naiz» →', 'Intentaré', ['He intentado', 'Intento siempre', 'No quiero']),
  mc('«Nire helburua azterketa gainditzea da» →', 'Mi objetivo es aprobar el examen', ['Mi examen es difícil', 'Quiero hacer el examen', 'He suspendido el examen']),
  fl('Bidaiatzeko ___ dut. (tengo ganas)', 'gogoa', ['gogoa', 'gogorik', 'asmorik', 'helburu']),
  mc('«ametsa» →', 'sueño', ['ganas', 'plan', 'decisión']),
  fl('Euskara ikasi ___ dut. (quiero)', 'nahi', ['nahi', 'behar', 'ahal', 'komeni']),
  mc('«atzeratu» →', 'aplazar / retrasar', ['empezar', 'conseguir', 'decidir']),
],
d: [D('Elkarrizketa · Udako asmoak', `A: Zer asmo duzu uda honetarako?
B: Euskaltegira joateko asmoa dut. Euskara ondo ikasi nahi dut.
A: Eta oporrik hartuko duzu?
B: Bai, baina ez dut urrutira joateko gogorik. Etxean geratuko naiz.`, [
  ['¿Qué quiere hacer B en verano?', 'Ir al euskaltegi', ['Viajar lejos', 'Trabajar', 'No hacer nada']],
  ['¿Tiene ganas de viajar lejos?', 'No', ['Sí, mucho', 'Solo en avión', 'No se dice']],
])],
w: [wr('Cuenta un objetivo, un plan y algo que no te apetece hacer.', ['nahi|asmoa|helburua', 'gogorik'], 'Nire helburua euskara ondo ikastea da. Udan euskaltegira joateko asmoa dut. Gaur ez dut ikasteko gogorik.')],
});

U({ id: 'b1-14', lv: 'B1', t: 'Partizipio-adjektiboak', es: 'Participios como adjetivo: -ta, -tako', ic: '🧩',
g: `<h4>Estados resultantes y participios adjetivales</h4>
<p><b>-ta + egon</b> (estado): <i>Denda itxita dago</i> · <i>Leihoa irekita dago</i> · <i>Nekatuta nago</i>.</p>
<p><b>-tako / -dako</b> (adjetivo participial, antepuesto al nombre): <i>erositako liburua</i> (el libro comprado) · <i>egindako lana</i> (el trabajo hecho) · <i>idatzitako gutuna</i> · <i>galdutako giltzak</i>.</p>
<p>Con agente: <i>Nik egindako tarta</i> (la tarta hecha por mí).</p>`,
v: V(`itxita = cerrado
irekita = abierto
apurtuta = roto
nekatuta = cansado
bukatuta = terminado
prest = listo
egindako = hecho
erositako = comprado
idatzitako = escrito
ikusitako = visto
galdutako = perdido
ahaztutako = olvidado`),
p: P(`Denda itxita dago | La tienda está cerrada
Leihoa irekita dago | La ventana está abierta
Telefonoa apurtuta daukat | Tengo el teléfono roto
Lana bukatuta dago | El trabajo está terminado
Atzo erositako liburua irakurtzen ari naiz | Estoy leyendo el libro comprado ayer
Nik egindako tarta jan duzu | Te has comido la tarta hecha por mí
Ikusitako filma oso ona zen | La película vista era muy buena
Galdutako giltzak aurkitu ditut | He encontrado las llaves perdidas
Anek idatzitako gutuna jaso dut | He recibido la carta escrita por Ane
Nekatuta nago, baina pozik | Estoy cansado, pero contento`),
x: [
  mc('«Denda itxita dago» →', 'La tienda está cerrada', ['La tienda cerrará', 'Cierro la tienda', 'Voy a cerrar la tienda']),
  fl('Leihoa ___ dago. (abierta)', 'irekita', ['irekita', 'ireki', 'irekiko', 'irekitzen']),
  mc('«erositako liburua» →', 'el libro comprado', ['el libro que compraré', 'comprar libros', 'el libro de la tienda']),
  fl('Atzo ___ liburua irakurtzen ari naiz. (comprado)', 'erositako', ['erositako', 'erosiko', 'erosten', 'erosi']),
  mc('«egindako lana» →', 'el trabajo hecho', ['el trabajo que haré', 'hacer el trabajo', 'el trabajo difícil']),
  fl('Nekatuta ___. (estoy)', 'nago', ['nago', 'dut', 'zait', 'dira']),
  mc('«ikusitako» viene de…', 'ikusi', ['ikasi', 'ikertu', 'ikusiko']),
  fl('Anek ___ gutuna jaso dut. (escrita)', 'idatzitako', ['idatzitako', 'idatziko', 'idazten', 'idatzi']),
  mc('«apurtuta» →', 'roto', ['nuevo', 'perdido', 'cerrado']),
  fl('Galdutako giltzak ___ ditut. (he encontrado)', 'aurkitu', ['aurkitu', 'aurkituko', 'aurkitzen', 'aurkitzeko']),
  mc('«-tako» en «irakurritako» expresa…', 'algo ya leído (participio adjetival)', ['futuro', 'finalidad', 'causa']),
  fl('Lana ___ dago. (terminado)', 'bukatuta', ['bukatuta', 'bukatu', 'bukatuko', 'bukatzen']),
],
d: [D('Elkarrizketa · Leiho apurtua', `A: Mikel, zer gertatu da? Leihoa apurtuta dago!
B: Atzo jolasean ari ginen eta pilota sartu da.
A: Eta orain zer egingo duzu?
B: Lasai, atzo erositako beira daukat eta ordezkatuko dut.`, [
  ['¿Qué está roto?', 'La ventana', ['La puerta', 'La pantalla', 'La pelota']],
  ['¿Qué tiene B para arreglarlo?', 'Un cristal comprado ayer', ['Una ventana vieja', 'Pegamento', 'Nada']],
])],
w: [wr('Describe objetos o situaciones con participios (algo cerrado, algo hecho por ti).', ['ta dago|ta daukat|tako|dako'], 'Denda itxita dago. Nik egindako tarta oso goxoa da.')],
});

U({ id: 'b1-15', lv: 'B1', t: 'Kexak eta erreklamazioak', es: 'Quejas y reclamaciones', ic: '📝',
g: `<h4>Reclamar con claridad y cortesía</h4>
<p>Presentar el problema: <i>Arazo bat dut</i> · <i>Produktua apurtuta iritsi zait</i> · <i>Telebistak ez du funtzionatzen</i>.</p>
<p>Pedir una solución: <i>Dirua itzultzea eskatzen dut</i> · <i>Produktua ordezkatuko dugu</i>. Cortesía: <i>Barkatu eragozpenak</i>.</p>
<p>Una queja eficaz: datos concretos (qué, cuándo, factura) y una petición clara.</p>`,
v: V(`kexa = queja
erreklamazioa = reclamación
arazoa = problema
dirua itzuli = devolver el dinero
faktura = factura
bezeroa = cliente
zerbitzua = servicio
akatsa = error / defecto
ordezkatu = sustituir
barkamena = disculpa
eragozpena = molestia
funtzionatu = funcionar`),
p: P(`Kexa bat jarri nahi dut | Quiero poner una queja
Produktua apurtuta iritsi zait | El producto me ha llegado roto
Telebistak ez du funtzionatzen | La televisión no funciona
Dirua itzultzea eskatzen dut | Pido que me devuelvan el dinero
Faktura hemen daukat | Tengo aquí la factura
Zerbitzua oso motela izan da | El servicio ha sido muy lento
Barkatu eragozpenak | Disculpe las molestias
Produktua ordezkatuko dugu | Sustituiremos el producto
Akats bat egon da fakturan | Ha habido un error en la factura
Erreklamazio-orria bete behar duzu | Tiene que rellenar la hoja de reclamaciones`),
x: [
  mc('«kexa» →', 'queja', ['factura', 'servicio', 'descuento']),
  mc('«Barkatu eragozpenak» →', 'Disculpe las molestias', ['Gracias por la compra', 'Hasta luego', 'Quiero una queja']),
  fl('Telebistak ez du ___. (funciona)', 'funtzionatzen', ['funtzionatzen', 'funtzionatu', 'funtzionatuko', 'funtzionatzeko']),
  mc('«akatsa» →', 'error / defecto', ['servicio', 'cliente', 'factura']),
  fl('Dirua ___ eskatzen dut. (devolver)', 'itzultzea', ['itzultzea', 'itzuli', 'itzuliko', 'itzultzen']),
  mc('«Produktua ordezkatuko dugu» →', 'Sustituiremos el producto', ['Hemos roto el producto', 'Devolvéis el dinero', 'Compramos el producto']),
  mc('«Produktua apurtuta iritsi zait» →', 'El producto me ha llegado roto', ['He roto el producto', 'El producto es barato', 'No he recibido nada']),
  fl('Erreklamazio-orria bete ___ duzu. (tiene que)', 'behar', ['behar', 'ahal', 'nahi', 'komeni']),
  mc('«bezeroa» →', 'cliente', ['jefe', 'vecino', 'profesor']),
  fl('Zerbitzua oso motela ___. (ha sido)', 'izan da', ['izan da', 'izan du', 'egon da', 'izango da']),
  mc('«faktura» →', 'factura', ['queja', 'servicio', 'producto']),
  mc('Una queja formal conviene que sea…', 'clara y educada, con datos concretos', ['agresiva y vaga', 'sin datos', 'muy larga y sin motivo']),
],
d: [D('Elkarrizketa · Dendan', `A: Egun on. Zer arazo duzu?
B: Atzo telebista bat erosi nuen, baina ez du funtzionatzen.
A: Faktura daukazu?
B: Bai, hemen daukat.
A: Barkatu eragozpenak. Produktua ordezkatuko dugu edo dirua itzuliko dizugu.
B: Dirua itzuli nahi dut, mesedez.`, [
  ['¿Qué compró B ayer?', 'Una televisión', ['Un móvil', 'Una lavadora', 'Un ordenador']],
  ['¿Qué problema tiene?', 'No funciona', ['Es cara', 'Llegó tarde', 'Es muy grande']],
  ['¿Qué prefiere B?', 'Que le devuelvan el dinero', ['Cambiar el producto', 'Esperar', 'Arreglarlo él mismo']],
])],
w: [wr('Escribe una queja breve: qué compraste, qué problema hay y qué pides.', ['erosi', 'arazo|ez du funtzionatzen|apurtuta', 'eskatu|eskatzen|nahi'], 'Atzo telebista bat erosi nuen. Ez du funtzionatzen. Dirua itzultzea eskatzen dut.')],
});
})();
