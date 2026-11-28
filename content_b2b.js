/* Contenido B2 · unidades 7-15 (material original; sin revisión de hablante nativo) */
(function () {
const { mc, fl, wr, U, vocabList: V, phraseList: P, dialog: D } = E;

U({ id: 'b2-7', lv: 'B2', t: 'Aspektu-aditzak', es: 'Verbos de aspecto: empezar, seguir, dejar, lograr…', ic: '⚙️',
g: `<h4>Fases y resultado de una acción</h4>
<ul><li><b>hasi</b> + -tzen: <i>Euskaraz hitz egiten hasi naiz</i>.</li>
<li><b>jarraitu</b> + -tzen: <i>Ikasten jarraitzen dut</i>.</li>
<li><b>-tzeari utzi</b>: <i>Erretzeari utzi diot</i> (he dejado de fumar).</li>
<li><b>lortu</b> + -tzea: <i>Azterketa gainditzea lortu dut</i> · <b>saiatu</b> + -tzen: <i>egiten saiatu naiz</i>.</li>
<li><b>-tzera ohitu</b>: <i>Goiz jaikitzera ohitu naiz</i> · <b>-tzea ahaztu</b>: <i>Atea ixtea ahaztu zait</i>.</li></ul>`,
v: V(`hasi = empezar
jarraitu = continuar
utzi = dejar (de hacer)
lortu = conseguir
saiatu = intentar
ohitu = acostumbrarse
ahaztu = olvidar
gogoratu = recordar
amaitu = terminar
gainditu = aprobar / superar
aurrera egin = avanzar
errepikatu = repetir`),
p: P(`Euskaraz hitz egiten hasi naiz | He empezado a hablar en euskera
Egunero ikasten jarraitzen dut | Sigo estudiando cada día
Erretzeari utzi diot | He dejado de fumar
Azterketa gainditzea lortu dut | He conseguido aprobar el examen
Goiz jaikitzera ohitu naiz | Me he acostumbrado a levantarme temprano
Atea ixtea ahaztu zait | Se me ha olvidado cerrar la puerta
Ahal dudan guztia egiten saiatuko naiz | Intentaré hacer todo lo que pueda
Giltzak hartzea gogoratu dut | He recordado coger las llaves
Poliki-poliki aurrera egiten ari naiz | Poco a poco voy avanzando
Jaten amaitu dugu | Hemos terminado de comer`),
x: [
  mc('«hitz egiten hasi naiz» indica…', 'inicio de la acción', ['fin de la acción', 'continuidad', 'imposibilidad']),
  mc('«jarraitu» →', 'continuar', ['empezar', 'olvidar', 'conseguir']),
  fl('Erretzeari ___ diot. (he dejado)', 'utzi', ['utzi', 'hasi', 'jarraitu', 'lortu']),
  mc('«lortu» →', 'conseguir', ['olvidar', 'dejar', 'intentar']),
  fl('Goiz jaikitzera ___ naiz. (me he acostumbrado)', 'ohitu', ['ohitu', 'hasi', 'utzi', 'ahaztu']),
  mc('«Atea ixtea ahaztu zait» →', 'Se me ha olvidado cerrar la puerta', ['He cerrado la puerta', 'Quiero cerrar la puerta', 'Cierro siempre la puerta']),
  fl('Euskaraz ikasten ___ dut. (sigo)', 'jarraitzen', ['jarraitzen', 'jarraitu', 'jarraituko', 'jarraitzeko']),
  mc('«saiatu» →', 'intentar', ['conseguir', 'dejar', 'terminar']),
  fl('Azterketa gainditzea ___ dut. (he conseguido)', 'lortu', ['lortu', 'saiatu', 'ahaztu', 'hasi']),
  mc('«Jaten amaitu dugu» →', 'Hemos terminado de comer', ['Empezamos a comer', 'Seguimos comiendo', 'Dejamos de comer']),
  mc('«-tzeari utzi» se usa para…', 'dejar de hacer algo', ['empezar algo', 'conseguir algo', 'olvidar algo']),
  fl('Poliki-poliki aurrera ___ ari naiz. (voy avanzando)', 'egiten', ['egiten', 'egin', 'egingo', 'egitea']),
],
d: [D('Elkarrizketa · Aurrerapenak', `A: Aurten euskaraz hitz egiten hasi zara?
B: Bai, eta ikasten jarraituko dut. Erretzeari ere utzi diot!
A: Zorionak! Zer lortu duzu orain arte?
B: Elkarrizketa laburrak egitea lortu dut, baina oraindik asko falta zait.`, [
  ['¿Qué ha empezado a hacer B este año?', 'Hablar en euskera', ['Fumar', 'Viajar', 'Escribir poesía']],
  ['¿Qué ha dejado B?', 'Fumar', ['El euskera', 'El trabajo', 'El café']],
  ['¿Qué ha conseguido B?', 'Mantener conversaciones cortas', ['Aprobar el examen', 'Un trabajo', 'Hablar perfecto']],
])],
w: [wr('Cuenta algo que has empezado, algo que has dejado y algo que has conseguido.', ['hasi', 'utzi', 'lortu'], 'Euskaraz hitz egiten hasi naiz. Kafea edateari utzi diot. Azterketa gainditzea lortu dut.')],
});

U({ id: 'b2-8', lv: 'B2', t: 'Kausa eta ondorioa', es: 'Causa y consecuencia', ic: '🔗',
g: `<h4>Explicar por qué ocurre algo y qué resulta</h4>
<ul><li><b>Causa:</b> <i>-(e)lako</i> (<i>trena galdu dudalako</i>) · <i>zeren</i> (porque, más hablado) · <i>dela eta</i> (debido a: <i>euria dela eta</i>) · <i>izan ere</i> (pues, de hecho).</li>
<li><b>Consecuencia:</b> <i>horregatik</i> (por eso) · <i>hortaz</i> (por tanto) · <i>ondorioz</i> (en consecuencia) · <i>hori dela eta</i> (por ello).</li></ul>`,
v: V(`kausa = causa
ondorioa = consecuencia
zergatik = por qué
horregatik = por eso
hortaz = por tanto
ondorioz = en consecuencia
izan ere = pues / de hecho
dela eta = debido a
eragin = influir / efecto
arrazoia = razón
bertan behera utzi = cancelar
zeren = porque`),
p: P(`Berandu iritsi naiz, trena galdu dudalako | He llegado tarde porque he perdido el tren
Euria dela eta, ekitaldia bertan behera geratu da | Debido a la lluvia, el acto se ha cancelado
Ez naiz joan, zeren nekatuta nengoen | No fui, porque estaba cansado/a
Izan ere, ez zuten garaiz abisatu | Pues no avisaron a tiempo
Horregatik erabaki dugu etxean geratzea | Por eso hemos decidido quedarnos en casa
Hortaz, bilera gaur ez da egingo | Por tanto, la reunión no se celebrará hoy
Lan asko dugu; ondorioz, ezin dugu atseden hartu | Tenemos mucho trabajo; en consecuencia, no podemos descansar
Hori dela eta, prezioak igo dira | Por ello, los precios han subido
Zein izan da arazoaren arrazoia? | ¿Cuál ha sido la causa del problema?
Neurri horrek ondorio onak izan ditu | Esa medida ha tenido buenas consecuencias`),
x: [
  mc('«Horregatik» introduce…', 'una consecuencia', ['una condición', 'una concesión', 'una pregunta']),
  mc('«-lako» en «galdu dudalako» expresa…', 'causa', ['finalidad', 'tiempo', 'condición']),
  mc('«Euria dela eta» →', 'debido a la lluvia', ['a pesar de la lluvia', 'para la lluvia', 'cuando llueve']),
  fl('Ez naiz joan, ___ nekatuta nengoen. (porque)', 'zeren', ['zeren', 'baina', 'nahiz', 'arren']),
  mc('«Izan ere» →', 'pues / de hecho (explicativo)', ['sin embargo', 'por tanto', 'aunque']),
  fl('Lan asko dugu; ___, ezin dugu atseden hartu. (en consecuencia)', 'ondorioz', ['ondorioz', 'zeren', 'arren', 'nahiz eta']),
  mc('«arrazoia» →', 'razón / causa', ['consecuencia', 'condición', 'plazo']),
  mc('«Hortaz» se usa para…', 'sacar una conclusión', ['dar un ejemplo', 'expresar duda', 'contrastar']),
  fl('Hori ___ eta, prezioak igo dira. (por ello)', 'dela', ['dela', 'delako', 'den', 'izan']),
  mc('«ondorioa» →', 'consecuencia', ['causa', 'pregunta', 'plazo']),
  mc('«Neurri horrek ondorio onak izan ditu» →', 'Esa medida ha tenido buenas consecuencias', ['Esa medida es cara', 'Esa medida se aprobará', 'Esa medida tiene dudas']),
  fl('Trena galdu ___, berandu iritsi naiz. (porque)', 'dudalako', ['dudalako', 'dudala', 'dudan', 'dudanean']),
],
d: [D('Elkarrizketa · Kontzertua', `A: Zergatik bertan behera utzi dute kontzertua?
B: Euria dela eta. Izan ere, aldez aurretik ez zuten ezer iragarri.
A: Horregatik ez da jende askorik etorri.
B: Hortaz, hurrengo asteburuan egingo dute.`, [
  ['¿Por qué cancelaron el concierto?', 'Por la lluvia', ['Por una huelga', 'Por falta de público', 'Por una avería']],
  ['¿Cuándo lo harán?', 'El próximo fin de semana', ['Mañana', 'Nunca', 'El mes que viene']],
])],
w: [wr('Explica un problema: causa y consecuencia, con dos conectores distintos.', ['lako|zeren|dela eta', 'horregatik|ondorioz|hortaz'], 'Berandu iritsi naiz, autobusa galdu dudalako. Horregatik bilera hasita zegoen.')],
});

U({ id: 'b2-9', lv: 'B2', t: 'Denbora-perpaus aurreratuak', es: 'Subordinadas temporales avanzadas', ic: '🕰️',
g: `<h4>Cuándo ocurre una acción respecto a otra</h4>
<ul><li><b>-tzean</b> (al + infinitivo): <i>Etxera iristean deituko dizut</i>.</li>
<li><b>-tzerakoan</b> (al ir a / cuando): <i>Irteterakoan, ez ahaztu giltzak</i>.</li>
<li><b>-ta gero / eta gero</b> (después de): <i>Lana amaitu eta gero</i>.</li>
<li><b>bezain laster</b> (en cuanto): <i>Iritsi bezain laster deituko dizut</i>.</li>
<li><b>-terako</b> (para cuando): <i>Zu iristerako</i> · <b>bitartean</b> (mientras).</li></ul>`,
v: V(`iristean = al llegar
irteterakoan = al salir
amaitu eta gero = después de terminar
bezain laster = en cuanto
ordurako = para entonces
bitartean = mientras
lehenik = primero
gero = luego
azkenik = por último
hasieran = al principio
amaieran = al final
tartean = entretanto`),
p: P(`Etxera iristean deituko dizut | Te llamaré al llegar a casa
Atea irekitzean, alarma jo du | Al abrir la puerta, ha sonado la alarma
Irteterakoan, ez ahaztu giltzak | Al salir, no olvides las llaves
Lana amaitu eta gero, atseden hartuko dut | Después de terminar el trabajo, descansaré
Iritsi bezain laster deituko dizut | Te llamaré en cuanto llegue
Zu iristerako, afaria prest egongo da | Para cuando llegues, la cena estará lista
Nik afaria prestatzen dudan bitartean, zuk mahaia jarri | Mientras yo preparo la cena, pon tú la mesa
Hasieran zaila izan zen, baina gero errazagoa | Al principio fue difícil, pero luego más fácil
Filmaren amaieran denek txalo egin zuten | Al final de la película todos aplaudieron
Bilera amaitu eta gero, bazkaltzera joango gara | Después de la reunión iremos a comer`),
x: [
  mc('«Etxera iristean» →', 'al llegar a casa', ['antes de llegar a casa', 'para llegar a casa', 'aunque llegue a casa']),
  mc('«Irteterakoan» →', 'al salir / cuando salgas', ['después de salir', 'sin salir', 'para salir']),
  fl('Iritsi bezain ___ deituko dizut. (en cuanto)', 'laster', ['laster', 'berandu', 'gutxi', 'asko']),
  mc('«Lana amaitu eta gero» →', 'después de terminar el trabajo', ['antes de terminar', 'mientras trabajo', 'si trabajo']),
  fl('Zu ___, afaria prest egongo da. (para cuando llegues)', 'iristerako', ['iristerako', 'iristean', 'iritsi', 'iristeko']),
  mc('«hasieran» →', 'al principio', ['al final', 'mientras', 'después']),
  mc('«amaieran» →', 'al final', ['al principio', 'antes', 'luego']),
  fl('Nik afaria prestatzen dudan ___, zuk mahaia jarri. (mientras)', 'bitartean', ['bitartean', 'ondoren', 'aurretik', 'bezain laster']),
  mc('«-tzean» se añade a…', 'la raíz del participio (iritsi → iristean)', ['un nombre', 'un adjetivo', 'un pronombre']),
  fl('Atea ___, alarma jo du. (al abrir)', 'irekitzean', ['irekitzean', 'irekita', 'irekitzeko', 'ireki']),
  mc('«ordurako» →', 'para entonces', ['hasta entonces', 'desde entonces', 'después de eso']),
  mc('«gero» →', 'luego / después', ['antes', 'mientras', 'siempre']),
],
d: [D('Elkarrizketa · Arratsaldea', `A: Noiz iritsiko zara etxera?
B: Zazpietarako. Iritsi bezain laster afaria prestatuko dut.
A: Ondo da. Nik, bitartean, erosketak egingo ditut.
B: Eta afaldu eta gero, filma ikusiko dugu?
A: Primeran!`, [
  ['¿Cuándo llegará B a casa?', 'Para las siete', ['A las ocho', 'A las seis', 'A medianoche']],
  ['¿Qué hará A mientras tanto?', 'La compra', ['La cena', 'Ver la película', 'Dormir']],
  ['¿Qué harán después de cenar?', 'Ver una película', ['Salir a bailar', 'Estudiar', 'Ir al cine']],
])],
w: [wr('Planifica tu tarde con tres expresiones temporales (al llegar, mientras, después de…).', ['tean|rakoan|bezain laster', 'bitartean', 'eta gero|ondoren'], 'Etxera iristean, afaria prestatuko dut. Afaria egiten dudan bitartean, musika entzungo dut. Afaldu eta gero, ikasiko dut.')],
});

U({ id: 'b2-10', lv: 'B2', t: 'Helburua eta xedea', es: 'Finalidad: para, a fin de, con la intención de', ic: '🎯',
g: `<h4>Expresar para qué se hace algo</h4>
<ul><li><b>-tzeko</b> (para): <i>Lan egiteko ikasten dut</i>. Con otro sujeto, este va delante: <i>Zuk ulertzeko, adibide bat jarriko dut</i>.</li>
<li><b>-tzearren</b> (a fin de): <i>Hizkuntza hobetzearren, irratia entzuten dut</i>.</li>
<li><b>asmoz</b> (con la intención de): <i>Euskaraz hitz egiteko asmoz etorri naiz</i>.</li>
<li><b>Zertarako?</b> (¿para qué?) · <b>horretarako</b> (para eso).</li></ul>`,
v: V(`zertarako = para qué
horretarako = para eso
xedea = finalidad
asmoz = con la intención de
helburua = objetivo
lortzeko = para lograr
ulertzeko = para entender
hobetzeko = para mejorar
aurrezteko = para ahorrar
denbora irabazi = ganar tiempo
esfortzua = esfuerzo
komunikazioa = comunicación`),
p: P(`Zertarako ikasten duzu euskara? | ¿Para qué estudias euskera?
Lan egiteko ikasten dut | Estudio para trabajar
Zuk ulertzeko, adibide bat jarriko dut | Para que lo entiendas, pondré un ejemplo
Dirua aurrezteko, ez dut kafe asko erosten | Para ahorrar dinero, no compro mucho café
Hizkuntza hobetzearren, irratia entzuten dut | A fin de mejorar el idioma, escucho la radio
Euskaraz hitz egiteko asmoz etorri naiz | He venido con la intención de hablar en euskera
Horretarako denbora behar da | Para eso hace falta tiempo
Denbora irabazteko, goiz jaikitzen naiz | Para ganar tiempo, me levanto temprano
Taldeak ondo funtzionatzeko, komunikazioa behar da | Para que el equipo funcione bien, hace falta comunicación
Helburua lortzeko, esfortzua egin behar da | Para lograr el objetivo, hay que esforzarse`),
x: [
  mc('«Zertarako?» →', '¿Para qué?', ['¿Cuándo?', '¿Dónde?', '¿Cómo?']),
  fl('Lan ___ ikasten dut. (para trabajar)', 'egiteko', ['egiteko', 'egitera', 'egiten', 'egin']),
  mc('«-tzearren» expresa…', 'finalidad (a fin de)', ['causa', 'concesión', 'condición']),
  mc('«Horretarako» →', 'para eso', ['por eso', 'después de eso', 'a pesar de eso']),
  fl('Zuk ___, adibide bat jarriko dut. (para que entiendas)', 'ulertzeko', ['ulertzeko', 'ulertzen', 'ulertu', 'ulertuko']),
  mc('«xedea» →', 'finalidad / objetivo', ['causa', 'duda', 'plazo']),
  fl('Euskaraz hitz egiteko ___ etorri naiz. (con la intención)', 'asmoz', ['asmoz', 'arren', 'bitartean', 'zeren']),
  mc('«aurrezteko» →', 'para ahorrar', ['para gastar', 'para ganar', 'para perder']),
  fl('Helburua ___, esfortzua egin behar da. (para lograr)', 'lortzeko', ['lortzeko', 'lortzen', 'lortu', 'lortuko']),
  mc('«Denbora irabazteko» →', 'para ganar tiempo', ['por perder tiempo', 'sin tiempo', 'después del tiempo']),
  mc('Para finalidad con otro sujeto se usa…', 'sujeto + -tzeko', ['sujeto + -lako', 'sujeto + -arren', 'sujeto + -tzean']),
  mc('«hobetzearren» →', 'a fin de mejorar', ['por mejorar el pasado', 'aunque mejore', 'cuando mejore']),
],
d: [D('Elkarrizketa · Zertarako?', `A: Zertarako ikasten duzu euskara?
B: Lan egiteko eta Euskal Herrian bizitzeko.
A: Eta horretarako zer egiten duzu?
B: Egunero irratia entzuten dut hizkuntza hobetzearren, eta astero euskaltegira joaten naiz.`, [
  ['¿Para qué estudia euskera B?', 'Para trabajar y vivir en el País Vasco', ['Para viajar', 'Para dar clases', 'Para un examen']],
  ['¿Qué hace cada día?', 'Escucha la radio', ['Va al euskaltegi', 'Escribe un diario', 'Ve la televisión']],
])],
w: [wr('Explica con qué fin estudias o trabajas, con dos estructuras de finalidad.', ['teko|tzeko|tzearren|asmoz', 'zertarako|horretarako|helburu'], 'Euskara ikasten dut, lan egiteko. Horretarako, egunero praktikatzen dut. Nire helburua euskaraz ondo hitz egitea da.')],
});

U({ id: 'b2-11', lv: 'B2', t: 'Idazlana: egitura', es: 'Redacción argumentativa: estructura', ic: '✍️',
g: `<h4>Introducción, desarrollo y conclusión</h4>
<ul><li><b>Sarrera:</b> presenta el tema (<i>Gaur egun…</i>) y tu postura.</li>
<li><b>Garapena:</b> ordena los argumentos (<i>lehenik, bigarrenik, horrez gain</i>), da ejemplos (<i>esate baterako, hala nola</i>) y contrasta (<i>hala ere</i>).</li>
<li><b>Ondorioa:</b> resume (<i>laburbilduz</i>) y cierra (<i>nire iritziz…</i>).</li></ul>
<p>Fórmula útil: <i>Ezin da ukatu…</i> (no se puede negar que…).</p>`,
v: V(`sarrera = introducción
garapena = desarrollo
ondorioa = conclusión
gaia = tema
tesia = tesis
adibidea = ejemplo
esate baterako = por ejemplo
hala nola = como (ejemplo)
ezin da ukatu = no se puede negar
gaur egun = hoy en día
batetik = por una parte
bestetik = por otra`),
p: P(`Gaur egun, teknologia oso garrantzitsua da gure bizitzan | Hoy en día la tecnología es muy importante en nuestra vida
Ezin da ukatu horrek abantailak dituela | No se puede negar que eso tiene ventajas
Lehenik, denbora aurrezten du | En primer lugar, ahorra tiempo
Bigarrenik, jendea hobeto komunikatzen da | En segundo lugar, la gente se comunica mejor
Esate baterako, urrutiko lagunekin hitz egin dezakegu | Por ejemplo, podemos hablar con amigos lejanos
Hala ere, arrisku batzuk ere badaude | Sin embargo, también hay algunos riesgos
Hala nola, pribatutasun falta | Como, por ejemplo, la falta de privacidad
Laburbilduz, teknologia egoki erabili behar da | En resumen, hay que usar la tecnología adecuadamente
Nire iritziz, hezkuntza funtsezkoa da | En mi opinión, la educación es fundamental
Testu honen xedea gaia aztertzea da | El objetivo de este texto es analizar el tema`),
x: [
  mc('«Sarrera» en un ensayo es…', 'la introducción', ['la conclusión', 'el ejemplo', 'el título']),
  mc('«Ondorioa» →', 'la conclusión', ['la introducción', 'el desarrollo', 'la pregunta']),
  mc('«Esate baterako» →', 'por ejemplo', ['en resumen', 'sin embargo', 'además']),
  fl('___ da ukatu horrek abantailak dituela. (no se puede negar)', 'Ezin', ['Ezin', 'Ez', 'Behar', 'Ahal']),
  mc('«Gaur egun» →', 'hoy en día', ['mañana', 'el año pasado', 'todos los días']),
  fl('___, denbora aurrezten du. (en primer lugar)', 'Lehenik', ['Lehenik', 'Azkenik', 'Hala ere', 'Beraz']),
  mc('«Hala nola» introduce…', 'ejemplos', ['conclusiones', 'contraste', 'causa']),
  mc('«Hala ere» introduce…', 'un contraste', ['un ejemplo', 'una conclusión', 'una introducción']),
  fl('___, teknologia egoki erabili behar da. (en resumen)', 'Laburbilduz', ['Laburbilduz', 'Lehenik', 'Esate baterako', 'Gaur egun']),
  mc('«garapena» →', 'el desarrollo', ['la introducción', 'la conclusión', 'el título']),
  fl('Nire ___, hezkuntza funtsezkoa da. (en mi opinión)', 'iritziz', ['iritziz', 'iritzia', 'iritzi', 'iritziak']),
  mc('«tesia» →', 'la tesis (idea principal)', ['el ejemplo', 'la conclusión', 'el resumen']),
],
d: [D('Elkarrizketa · Idazlana', `A: Idazlana hasi duzu?
B: Bai. Sarreran gaia aurkeztu dut eta garapenean bi argudio jarri ditut.
A: Eta ondorioa?
B: Laburbilduz, nire iritziz teknologia ondo erabili behar da.`, [
  ['¿Qué ha hecho B en la introducción?', 'Presentar el tema', ['Dar una conclusión', 'Citar a un autor', 'Hacer una pregunta']],
  ['¿Cuántos argumentos ha puesto en el desarrollo?', 'Dos', ['Uno', 'Tres', 'Ninguno']],
])],
w: [wr('Escribe una introducción de 2-3 frases a un ensayo sobre un tema actual.', ['gaur egun|gai', 'garrantzitsu|arazo|abantail'], 'Gaur egun, ingurumena gai garrantzitsua da. Testu honetan, arazoaren kausak aztertuko ditut.')],
});

U({ id: 'b2-12', lv: 'B2', t: 'Lan-harremanak eta bilerak', es: 'Reuniones y relaciones laborales', ic: '👔',
g: `<h4>Participar en una reunión</h4>
<p>Pedir la palabra: <i>Hitza hartu nahi nuke</i>. Acuerdo/desacuerdo: <b>Bat nator zurekin</b> (estoy de acuerdo) · <b>Ez nator bat proposamen horrekin</b> · <b>Ados nago</b>.</p>
<p>Gestión: <i>gai-zerrenda</i> (orden del día) · <i>akta</i> (acta) · <i>bozkatu</i> (votar) · <i>onartu</i> (aprobar) · <i>atzeratu</i> (aplazar) · <i>egitekoak banatu</i> (repartir tareas).</p>`,
v: V(`bilera = reunión
gai-zerrenda = orden del día
akta = acta
proposamena = propuesta
bozkatu = votar
onartu = aprobar
atzeratu = aplazar
epea = plazo
arduraduna = responsable
egitekoa = tarea
batzordea = comisión
hitza hartu = tomar la palabra`),
p: P(`Bilera hamarretan hasiko da | La reunión empezará a las diez
Gai-zerrenda aurrez bidali dugu | Hemos enviado el orden del día con antelación
Hitza hartu nahi nuke | Quisiera tomar la palabra
Bat nator zurekin | Estoy de acuerdo contigo
Ez nator bat proposamen horrekin | No estoy de acuerdo con esa propuesta
Proposamena onartu da | Se ha aprobado la propuesta
Bozkatu egin behar dugu | Tenemos que votar
Akta idatzi behar du arduradunak | El responsable tiene que redactar el acta
Epea bi astez luzatu dute | Han ampliado el plazo dos semanas
Egitekoak banatu ditugu | Hemos repartido las tareas`),
x: [
  mc('«gai-zerrenda» →', 'orden del día', ['acta', 'plazo', 'votación']),
  mc('«Bat nator zurekin» →', 'Estoy de acuerdo contigo', ['No te entiendo', 'Voy contigo', 'Quiero hablar contigo']),
  mc('«Ez nator bat» →', 'No estoy de acuerdo', ['No vengo', 'No estoy', 'No quiero']),
  mc('«Hitza hartu nahi nuke» →', 'Quisiera tomar la palabra', ['Quiero dar la palabra', 'Quiero perder la palabra', 'Quiero escribir la palabra']),
  mc('«akta» →', 'acta', ['plazo', 'tarea', 'votación']),
  fl('Proposamena ___ da. (se ha aprobado)', 'onartu', ['onartu', 'bozkatu', 'atzeratu', 'idatzi']),
  fl('Egitekoak ___ ditugu. (hemos repartido)', 'banatu', ['banatu', 'onartu', 'atzeratu', 'irakurri']),
  mc('«bozkatu» →', 'votar', ['aprobar', 'aplazar', 'proponer']),
  fl('Epea bi astez ___ dute. (ampliado)', 'luzatu', ['luzatu', 'laburtu', 'bozkatu', 'itxi']),
  mc('«arduraduna» →', 'responsable / encargado', ['plazo', 'acta', 'propuesta']),
  mc('«atzeratu» →', 'aplazar', ['aprobar', 'votar', 'proponer']),
  mc('«egitekoak» →', 'tareas', ['plazos', 'actas', 'votos']),
],
d: [D('Elkarrizketa · Bilera', `A: Bilera hasi dezakegu? Gai-zerrenda bidali dizuet.
B: Hitza hartu nahi nuke. Ez nator bat bigarren proposamenarekin.
A: Zergatik?
B: Epea laburregia delako. Atzeratzea proposatzen dut.
A: Ados, bozkatuko dugu.`, [
  ['¿Qué quiere B al empezar?', 'Tomar la palabra', ['Irse', 'Votar', 'Redactar el acta']],
  ['¿Por qué no está de acuerdo?', 'Porque el plazo es demasiado corto', ['Porque es caro', 'Porque no lo entiende', 'Porque falta gente']],
  ['¿Qué hacen al final?', 'Votar', ['Cerrar la reunión', 'Aprobar sin votar', 'Aplazar sin decidir']],
])],
w: [wr('Participa en una reunión: expresa acuerdo o desacuerdo y propón algo.', ['bat nator|ez nator|ados', 'proposatu|proposamen'], 'Bat nator proposamenarekin, baina epea luzatzea proposatzen dut.')],
});

U({ id: 'b2-13', lv: 'B2', t: 'Administrazioa eta tramiteak', es: 'Administración y trámites', ic: '🏛️',
g: `<h4>Realizar un trámite</h4>
<p>Lenguaje administrativo: <i>eskaera aurkeztu</i> (presentar una solicitud) · <i>inprimakia bete eta sinatu</i> · <i>hitzordua eskatu</i> · <i>izena eman</i> · <i>erroldatu</i> (empadronarse).</p>
<p>Impersonal con <b>behar da</b>: <i>NANa aurkeztu behar da</i>. Con <b>-(e)ko</b> + <i>beharreko</i>: <i>Bete beharreko inprimakia</i> (el formulario que hay que rellenar).</p>
<p><i>Epea amaitu baino lehen</i> (antes de que acabe el plazo).</p>`,
v: V(`eskaera = solicitud
inprimakia = formulario
hitzordua = cita previa
izena eman = inscribirse / matricularse
erroldatu = empadronarse
NAN = DNI
agiria = documento
ordainagiria = recibo
ebazpena = resolución
aurkeztu = presentar
udala = ayuntamiento
erregistroa = registro`),
p: P(`Eskaera udalean aurkeztu behar da | La solicitud hay que presentarla en el ayuntamiento
Inprimakia bete eta sinatu behar duzu | Tienes que rellenar y firmar el formulario
Hitzordua eskatu dut | He pedido cita
Izena eman nahi dut euskaltegian | Quiero matricularme en el euskaltegi
Erroldatzeko NAN eta ordainagiri bat behar dira | Para empadronarse hacen falta el DNI y un recibo
Bete beharreko inprimakia mahai gainean dago | El formulario que hay que rellenar está sobre la mesa
Ebazpena hilabeteko epean emango dute | Darán la resolución en un plazo de un mes
Agiri guztiak erregistroan aurkeztu ditut | He presentado todos los documentos en el registro
Zenbat denbora behar da tramitea egiteko? | ¿Cuánto tiempo hace falta para hacer el trámite?
Epea amaitu baino lehen aurkeztu behar da | Hay que presentarlo antes de que acabe el plazo`),
x: [
  mc('«inprimakia» →', 'formulario', ['plazo', 'cita', 'resolución']),
  mc('«hitzordua» →', 'cita previa', ['plazo', 'formulario', 'recibo']),
  fl('Eskaera udalean ___ behar da. (presentar)', 'aurkeztu', ['aurkeztu', 'aurkeztuko', 'aurkezten', 'aurkezteko']),
  mc('«erroldatu» →', 'empadronar(se)', ['matricularse', 'pagar', 'firmar']),
  mc('«ebazpena» →', 'resolución', ['solicitud', 'plazo', 'cita']),
  fl('Inprimakia bete eta ___ behar duzu. (firmar)', 'sinatu', ['sinatu', 'sinatzen', 'sinatuko', 'sinatzeko']),
  mc('«NAN» →', 'DNI', ['pasaporte', 'recibo', 'factura']),
  mc('«Bete beharreko inprimakia» →', 'el formulario que hay que rellenar', ['el formulario que rellené', 'rellenar formularios', 'el formulario difícil']),
  fl('Zenbat denbora behar da tramitea ___? (para hacer)', 'egiteko', ['egiteko', 'egiten', 'egin', 'egingo']),
  mc('«izena eman» →', 'matricularse / inscribirse', ['cambiar de nombre', 'decir el nombre', 'firmar']),
  mc('«agiria» →', 'documento', ['plazo', 'cita', 'calle']),
  fl('Epea amaitu ___ aurkeztu behar da. (antes de)', 'baino lehen', ['baino lehen', 'eta gero', 'bitartean', 'bezain laster']),
],
d: [D('Elkarrizketa · Erroldatzea', `A: Egun on. Erroldatu nahi dut.
B: Egun on. Hitzordua eskatu duzu?
A: Bai, hamarretarako.
B: Orduan, NANa eta ordainagiri bat aurkeztu behar dituzu, eta inprimakia bete eta sinatu.
A: Ebazpena noiz emango dute?
B: Hilabeteko epean.`, [
  ['¿Qué quiere hacer A?', 'Empadronarse', ['Matricularse', 'Pedir un permiso', 'Pagar una multa']],
  ['¿Qué documentos necesita?', 'DNI y un recibo', ['Pasaporte', 'Factura de la luz', 'Ningún documento']],
  ['¿Cuándo darán la resolución?', 'En un mes', ['Hoy', 'En una semana', 'En un año']],
])],
w: [wr('Pide información sobre un trámite: qué documentos hacen falta y cuánto tarda.', ['agiri|NAN|inprimaki', 'epe|denbora'], 'Tramite bat egin nahi dut. Zer agiri behar dira? Zenbat denbora behar da? Epea noiz amaitzen da?')],
});

U({ id: 'b2-14', lv: 'B2', t: 'Hizkuntza eta gizartea', es: 'Lengua y sociedad', ic: '🗣️',
g: `<h4>Hablar de la situación de una lengua</h4>
<p><b>Gero eta … gehiago</b> (cada vez más): <i>Gero eta jende gehiagok hitz egiten du euskaraz</i> · <i>Gero eta gazte gehiagok ikasten dute</i>.</p>
<p>Vocabulario sociolingüístico: <i>hiztuna, euskalduna, euskaldun berria, hizkuntza gutxitua, euskara batua, euskalkia, erabilera, transmisioa, eskola eredua</i> (modelos A, B y D).</p>`,
v: V(`hizkuntza = lengua
hiztuna = hablante
euskalduna = vascohablante
euskaldun berria = neovascohablante
hizkuntza gutxitua = lengua minorizada
euskara batua = euskera estándar
euskalkia = dialecto
normalizazioa = normalización
eskola eredua = modelo escolar
erabilera = uso
transmisioa = transmisión
eskubidea = derecho`),
p: P(`Gero eta jende gehiagok hitz egiten du euskaraz | Cada vez más gente habla euskera
Euskara batua hizkuntza estandarra da | El euskera batua es la lengua estándar
Bizkaiera eta gipuzkera euskalkiak dira | El bizkaino y el guipuzcoano son dialectos
Euskaldun berri asko euskaltegietan ikasi dute | Muchos neovascohablantes han aprendido en euskaltegis
Eskola ereduak A, B eta D dira | Los modelos escolares son A, B y D
Hizkuntza gutxitua babestu behar da | Hay que proteger la lengua minorizada
Euskararen erabilera kalean handitzea nahi dugu | Queremos que aumente el uso del euskera en la calle
Seme-alabei euskara transmititzea garrantzitsua da | Es importante transmitir el euskera a los hijos
Gero eta gazte gehiagok ikasten dute euskaraz | Cada vez más jóvenes estudian en euskera
Hiztun guztiek hizkuntza-eskubideak dituzte | Todos los hablantes tienen derechos lingüísticos`),
x: [
  mc('«Gero eta … gehiago» expresa…', 'aumento progresivo (cada vez más)', ['comparación fija', 'causa', 'condición']),
  mc('«euskalkia» →', 'dialecto', ['lengua estándar', 'escuela', 'derecho']),
  mc('«euskaldun berria» →', 'neovascohablante', ['hablante nativo', 'turista', 'profesor']),
  fl('Gero eta jende ___ hitz egiten du euskaraz. (más)', 'gehiagok', ['gehiagok', 'gehiago', 'gehien', 'gutxiago']),
  mc('«Euskara batua» →', 'euskera estándar', ['dialecto bizkaino', 'lengua antigua', 'método de enseñanza']),
  fl('Hizkuntza ___ babestu behar da. (minorizada)', 'gutxitua', ['gutxitua', 'handia', 'berria', 'zaharra']),
  mc('«erabilera» →', 'uso', ['derecho', 'dialecto', 'modelo']),
  mc('«transmisioa» →', 'transmisión', ['traducción', 'uso', 'escuela']),
  mc('Los modelos escolares A, B y D se refieren a…', 'el papel del euskera en la enseñanza', ['tres dialectos', 'tres exámenes', 'tres ciudades']),
  mc('«eskubideak» →', 'derechos', ['deberes', 'plazos', 'modelos']),
  fl('Euskararen ___ kalean handitzea nahi dugu. (uso)', 'erabilera', ['erabilera', 'transmisioa', 'eredua', 'hiztuna']),
  mc('«hiztuna» →', 'hablante', ['escritor', 'profesor', 'alumno']),
],
d: [D('Elkarrizketa · Euskararen egoera', `A: Zer iruditzen zaizu euskararen egoerari buruz?
B: Gero eta jende gehiagok ikasten du, baina erabilera kalean ez da hainbeste handitu.
A: Eskolak lagundu du, ezta?
B: Bai, D eredua asko hedatu da. Hala ere, familian transmititzea garrantzitsua da.`, [
  ['¿Qué ha crecido mucho según B?', 'El número de personas que aprenden euskera', ['El uso en la calle', 'El número de dialectos', 'La inmigración']],
  ['¿Qué modelo se ha extendido?', 'El modelo D', ['El modelo A', 'El modelo B', 'Ninguno']],
])],
w: [wr('Da tu opinión sobre cómo promover el uso del euskera, usando «gero eta».', ['gero eta', 'euskara'], 'Gero eta jende gehiagok ikasten du euskara, baina erabilera handitzeko kalean praktikatu behar dugu.')],
});

U({ id: 'b2-15', lv: 'B2', t: 'Eztabaida: alde eta aurka', es: 'Debate: a favor y en contra', ic: '⚔️',
g: `<h4>Defender, rebatir y conceder</h4>
<ul><li>Postura: <b>alde nago</b> (estoy a favor) · <b>aurka nago</b> (estoy en contra) · <b>ados nago</b> · <b>ez nago ados</b>.</li>
<li>Conceder: <i>Arrazoia daukazu, baina…</i> · <i>Egia da, ordea, …</i> · <i>Aitortu behar dut…</i></li>
<li>Rebatir con cortesía: <i>Zure argudioa ulertzen dut, baina ez dut partekatzen</i>.</li></ul>`,
v: V(`alde = a favor
aurka = en contra
arrazoia = razón
ikuspuntua = punto de vista
eztabaida = debate
argudioa = argumento
aitortu = reconocer
onartu = aceptar
zalantza = duda
konponbidea = solución
adostasuna = consenso
partekatu = compartir`),
p: P(`Ados nago zurekin | Estoy de acuerdo contigo
Ez nago ados proposamen horrekin | No estoy de acuerdo con esa propuesta
Neurri horren alde nago | Estoy a favor de esa medida
Neurri horren aurka nago | Estoy en contra de esa medida
Arrazoia daukazu, baina ez da erraza | Tienes razón, pero no es fácil
Egia da, ordea, kostua handia dela | Es cierto, sin embargo, que el coste es alto
Aitortu behar dut zalantzak ditudala | Debo reconocer que tengo dudas
Ikuspuntu desberdinak ditugu | Tenemos puntos de vista diferentes
Konponbide bat bilatu behar dugu elkarrekin | Tenemos que buscar una solución juntos
Zure argudioa ulertzen dut, baina ez dut partekatzen | Entiendo tu argumento, pero no lo comparto`),
x: [
  mc('«Ados nago» →', 'Estoy de acuerdo', ['Estoy en contra', 'No lo sé', 'Estoy cansado']),
  mc('«aurka nago» →', 'estoy en contra', ['estoy a favor', 'estoy de acuerdo', 'estoy dudando']),
  fl('Neurri horren ___ nago. (a favor)', 'alde', ['alde', 'aurka', 'ados', 'kontra']),
  mc('«Arrazoia daukazu» →', 'Tienes razón', ['Tienes dudas', 'Tienes tiempo', 'Tienes prisa']),
  mc('«ordea» →', 'sin embargo / en cambio', ['por tanto', 'además', 'porque']),
  fl('Zure argudioa ulertzen dut, ___ ez dut partekatzen. (pero)', 'baina', ['baina', 'eta', 'edo', 'beraz']),
  mc('«aitortu» →', 'reconocer', ['negar', 'dudar', 'proponer']),
  mc('«konponbidea» →', 'solución', ['duda', 'argumento', 'plazo']),
  fl('Ikuspuntu ___ ditugu. (diferentes)', 'desberdinak', ['desberdinak', 'desberdina', 'desberdin', 'desberdinek']),
  mc('«eztabaida» →', 'debate', ['plazo', 'acuerdo', 'solución']),
  mc('«Ez nago ados» →', 'No estoy de acuerdo', ['Estoy de acuerdo', 'Estoy a favor', 'No lo sé']),
  fl('Konponbide bat bilatu behar dugu ___. (juntos)', 'elkarrekin', ['elkarrekin', 'bakarrik', 'astiro', 'berandu']),
],
d: [D('Elkarrizketa · Neurria', `A: Neurri horren alde zaude?
B: Ez, aurka nago, kostua handia delako.
A: Egia da, baina abantaila asko ditu.
B: Arrazoia daukazu, baina zalantzak ditut.
A: Ikuspuntu desberdinak ditugu. Konponbide bat bilatu behar dugu elkarrekin.`, [
  ['¿Qué postura tiene B?', 'En contra de la medida', ['A favor', 'Indiferente', 'No se sabe']],
  ['¿Por qué?', 'Porque el coste es alto', ['Porque es lenta', 'Porque es injusta', 'Porque no la entiende']],
  ['¿Qué proponen al final?', 'Buscar una solución juntos', ['Votar', 'Abandonar el debate', 'Esperar un año']],
])],
w: [wr('Defiende o rechaza una medida con dos argumentos y una concesión.', ['alde|aurka', 'egia da|arrazoia', 'baina|ordea'], 'Neurri horren aurka nago, garestia delako. Egia da abantailak dituela, baina kostua handiegia da.')],
});
})();
