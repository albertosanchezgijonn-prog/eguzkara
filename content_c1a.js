/* Contenido C1 · unidades 1-8 (material original; sin revisión de hablante nativo) */
(function () {
const { mc, fl, wr, U, vocabList: V, phraseList: P, dialog: D } = E;

U({ id: 'c1-1', lv: 'C1', t: 'Erregistroak eta estiloa', es: 'Registros y estilo', ic: '🎭',
g: `<h4>Elegir el registro adecuado</h4>
<p>El registro depende del lector y de la situación. <b>Formal</b> (cartas a instituciones, textos escritos): <i>Jakinarazten dizuet…</i> · <i>Eskerrak ematen dizkizuet…</i>. <b>Informal</b> (amistades): lenguaje más relajado.</p>
<p>En el trato directo existe el tratamiento de confianza <b>hika</b> (muy vivo en muchos dialectos) y el habitual <b>zuka</b>. El <b>euskara batua</b> es el estándar de la escritura y los medios; los <b>euskalkiak</b> tienen sus particularidades.</p>
<p>Verbos más formales: <i>adierazi, azaldu, jakinarazi, aipatu</i>.</p>`,
v: V(`erregistroa = registro
formala = formal
kolokiala = coloquial
estandarra = estándar
euskalkia = dialecto
hika = trato de confianza («hi»)
zuka = trato con «zu»
adierazi = expresar
jakinarazi = comunicar
aipatu = mencionar
azaldu = explicar
hitz-aukera = elección de palabras`),
p: P(`Erregistro formala idatzizko testuetan erabiltzen da | El registro formal se usa en textos escritos
Hika hitz egitea euskalki askotan ohikoa da | Hablar de «hi» es habitual en muchos dialectos
Zuka hitz egiten diot ezagutzen ez dudan jendeari | Hablo de «zu» a la gente que no conozco
Jakinarazten dizuet bilera atzeratu dela | Les comunico que la reunión se ha aplazado
Eskerrak ematen dizkizuet zuen laguntzagatik | Les doy las gracias por su ayuda
Hitz-aukera egokia funtsezkoa da | Una elección de palabras adecuada es fundamental
Euskalki bakoitzak bere berezitasunak ditu | Cada dialecto tiene sus particularidades
Testuaren erregistroa irakurleari egokitu behar zaio | El registro del texto debe adaptarse al lector
Albistegian euskara estandarra erabiltzen da | En el informativo se usa euskera estándar
Elkarrizketa informalean hizkera lasaiagoa erabil daiteke | En una conversación informal se puede usar un lenguaje más relajado`),
x: [
  mc('«erregistroa» →', 'registro (nivel de lengua)', ['dialecto', 'alfabeto', 'examen']),
  mc('«jakinarazi» es más…', 'formal que «esan»', ['coloquial que «esan»', 'igual que «galdetu»', 'solo dialectal']),
  mc('«hika» →', 'tratamiento de confianza', ['tratamiento formal', 'plural', 'futuro']),
  mc('«euskalkia» →', 'dialecto', ['registro', 'texto', 'verbo']),
  fl('Albistegian euskara ___ erabiltzen da. (estándar)', 'estandarra', ['estandarra', 'euskalkia', 'hikazkoa', 'kolokiala']),
  mc('Una carta a una institución usa…', 'registro formal', ['registro coloquial', 'hika', 'jerga']),
  fl('Jakinarazten ___ bilera atzeratu dela. (les comunico)', 'dizuet', ['dizuet', 'dizut', 'dizu', 'diot']),
  mc('«hitz-aukera» →', 'elección de palabras', ['pronunciación', 'ortografía', 'conjugación']),
  fl('Eskerrak ___ dizkizuet. (doy)', 'ematen', ['ematen', 'eman', 'emango', 'emateko']),
  mc('«adierazi» →', 'expresar / manifestar', ['preguntar', 'olvidar', 'llamar']),
  mc('Adaptar el registro significa…', 'ajustarlo al lector y a la situación', ['usar siempre el mismo', 'usar solo dialecto', 'evitar verbos']),
  mc('«estandarra» →', 'estándar', ['dialectal', 'antiguo', 'oral']),
],
d: [D('Elkarrizketa · Zer erregistro?', `A: Zer erregistro erabili behar dut instituzio bati idazteko?
B: Formala, jakina. Jakinarazten dizuet edo Eskatzen dizuet bezalako egiturak erabil ditzakezu.
A: Eta lagun bati idazten badiot?
B: Orduan, hizkera lasaiagoa erabil dezakezu.`, [
  ['¿Qué registro se usa con una institución?', 'El formal', ['El coloquial', 'El dialectal', 'Da igual']],
  ['¿Qué se puede usar con un amigo?', 'Un lenguaje más relajado', ['Siempre el mismo', 'Fórmulas administrativas', 'Solo el estándar']],
])],
w: [wr('Redacta dos frases: una formal para una institución y otra informal para un amigo.', ['jakinarazten|eskatzen|eskertu', 'kaixo|aupa|zer moduz'], 'Jakinarazten dizuet eskaera aurkeztu dudala. Kaixo, Ane! Zer moduz? Bihar ikusiko gara.')],
});

U({ id: 'c1-2', lv: 'C1', t: 'Perpaus konplexuak eta nominalizazioa', es: 'Oraciones complejas y nominalización', ic: '🧱',
g: `<h4>Construir oraciones largas sin perder claridad</h4>
<p>La <b>nominalización</b> convierte un verbo en sujeto o complemento: <i>Euskaraz hitz egite<b>a</b> ez da erraza</i> · <i>Ikaste<b>ak</b> ahalegina eskatzen du</i>.</p>
<p>Orden: la información nueva (el foco) suele ir justo antes del verbo. Las subordinadas suelen anteponerse a la principal. Si la oración se alarga, conviene dividirla o aclarar con pronombres y signos de puntuación.</p>`,
v: V(`nominalizazioa = nominalización
ahalegina = esfuerzo
perpaus nagusia = oración principal
mendeko perpausa = oración subordinada
azpimarratu = subrayar / destacar
lotu = unir
ñabardura = matiz
zehaztasuna = precisión
esaldia = frase
argitasuna = claridad
laburtu = acortar
ugari = abundante`),
p: P(`Euskaraz hitz egitea ez da erraza, baina merezi du | Hablar en euskera no es fácil, pero merece la pena
Ikasteak ahalegina eskatzen du | Estudiar requiere esfuerzo
Atzo ezagutu genuen pertsonak esan zigun bilera atzeratuko zutela | La persona que conocimos ayer nos dijo que aplazarían la reunión
Perpaus luzeetan argitasuna zaindu behar da | En las oraciones largas hay que cuidar la claridad
Mendeko perpausak nagusiaren aurretik joan ohi dira | Las subordinadas suelen ir antes de la principal
Informazio berria aditzaren aurretik jartzen da ohi | La información nueva suele colocarse justo antes del verbo
Esaldi luzeegiak laburtu behar dira | Hay que acortar las frases demasiado largas
Zehaztasunak testua sinesgarriago egiten du | La precisión hace el texto más creíble
Irakurtzeak buruari mesede egiten dio | Leer le hace bien a la mente
Ñabardurak ondo azaltzea ez da erraza | Explicar bien los matices no es fácil`),
x: [
  mc('«Hitz egitea zaila da» usa…', 'una nominalización como sujeto', ['un verbo auxiliar', 'un adverbio', 'una pregunta']),
  mc('«mendeko perpausa» →', 'oración subordinada', ['oración principal', 'párrafo', 'título']),
  mc('«ahalegina» →', 'esfuerzo', ['plazo', 'claridad', 'duda']),
  fl('Ikaste___ ahalegina eskatzen du. (estudiar, sujeto)', 'ak', ['ak', 'a', 'ek', 'ei']),
  mc('Para dar claridad a una oración larga conviene…', 'dividirla o ordenar bien sus partes', ['quitar todos los verbos', 'usar solo dialecto', 'duplicar el sujeto']),
  fl('Euskaraz hitz egite___ erraza da. (hablar, sujeto)', 'a', ['a', 'ak', 'ra', 'tik']),
  mc('«ñabardura» →', 'matiz', ['ejemplo', 'pregunta', 'título']),
  mc('«zehaztasuna» →', 'precisión', ['duda', 'plazo', 'estilo']),
  fl('Perpaus luzeetan ___ zaindu behar da. (claridad)', 'argitasuna', ['argitasuna', 'ahalegina', 'ñabardura', 'esaldia']),
  mc('«laburtu» →', 'acortar', ['alargar', 'traducir', 'repetir']),
  mc('La información nueva suele ir…', 'justo antes del verbo', ['al final del párrafo', 'siempre al inicio', 'después del auxiliar']),
  fl('Esaldi luzeegiak ___ behar dira. (acortar)', 'laburtu', ['laburtu', 'luzatu', 'ahaztu', 'ireki']),
],
d: [D('Elkarrizketa · Idazkera', `A: Testu hau oso zaila da irakurtzeko.
B: Bai, perpaus luzeegiak ditu. Laburtu egin behar dira.
A: Eta zer egin dezaket argitasuna hobetzeko?
B: Mendeko perpausak ondo ordenatu eta informazio berria aditzaren aurretik jarri.`, [
  ['¿Qué problema tiene el texto?', 'Frases demasiado largas', ['Demasiados ejemplos', 'Poco vocabulario', 'Faltan títulos']],
  ['¿Qué consejo da B?', 'Ordenar bien las subordinadas', ['Escribir más', 'Usar dialecto', 'Quitar los verbos']],
])],
w: [wr('Escribe dos frases: una con nominalización como sujeto y otra con una subordinada antepuesta.', ['tzea|tea|tzeak|teak', 'zen|dela|den'], 'Euskaraz idaztea ez da erraza. Atzo ezagutu nuen pertsonak esan zidan bihar etorriko dela.')],
});

U({ id: 'c1-3', lv: 'C1', t: 'Modalizazioa: omen, bide, antza', es: 'Modalización: «dicen que», «probablemente»', ic: '🔮',
g: `<h4>Marcar la fuente y el grado de seguridad</h4>
<ul><li><b>omen</b> (se dice que, según dicen): <i>Bihar euria egingo <b>omen</b> du</i> · <i>Etorri <b>omen</b> da</i>. Va tras el participio y delante del auxiliar.</li>
<li><b>bide</b> (probablemente): <i>Etorri <b>bide</b> da</i>.</li>
<li><b>antza denez / dirudienez</b> (al parecer, por lo visto), <b>segur aski / seguruenik</b> (seguramente), <b>agian</b> (quizá).</li></ul>
<p>Distingue lo que sabes, lo que oyes y lo que supones.</p>`,
v: V(`omen = se dice que
bide = probablemente
antza denez = al parecer
dirudienez = por lo visto
segur aski = seguramente
seguruenik = con toda probabilidad
agian = quizá
zurrumurrua = rumor
iturria = fuente
berretsi = confirmar
ukatu = negar
litekeena = probable`),
p: P(`Bihar euria egingo omen du | Dicen que mañana lloverá
Hori esan omen du ministroak | Dicen que lo ha dicho el ministro
Etorri bide da | Probablemente ha venido
Antza denez, bilera atzeratu dute | Al parecer han aplazado la reunión
Dirudienez, errepidea itxita dago | Por lo visto, la carretera está cerrada
Segur aski berandu iritsiko dira | Seguramente llegarán tarde
Zurrumurruak dio hiria itxiko dutela | El rumor dice que cerrarán la ciudad
Iturri ofizialek ez dute berretsi | Las fuentes oficiales no lo han confirmado
Agian bihar jakingo dugu | Quizá mañana lo sabremos
Seguruenik arazoa konponduko da | Con toda probabilidad el problema se resolverá`),
x: [
  mc('«omen» expresa…', 'información de oídas (se dice que)', ['certeza propia', 'orden', 'deseo']),
  mc('«bide» expresa…', 'probabilidad', ['rumor', 'orden', 'prohibición']),
  mc('«Antza denez» →', 'al parecer', ['sin duda', 'por favor', 'aunque']),
  fl('Bihar euria egingo ___ du. (dicen que)', 'omen', ['omen', 'bide', 'ere', 'ez']),
  fl('Etorri ___ da. (probablemente)', 'bide', ['bide', 'omen', 'ba', 'al']),
  mc('«segur aski» →', 'seguramente', ['nunca', 'quizá no', 'de ningún modo']),
  mc('«zurrumurrua» →', 'rumor', ['fuente', 'noticia oficial', 'prueba']),
  mc('«iturria» →', 'fuente', ['rumor', 'plazo', 'titular']),
  fl('Iturri ofizialek ez dute ___. (confirmado)', 'berretsi', ['berretsi', 'bidali', 'irakurri', 'ahaztu']),
  mc('«dirudienez» →', 'por lo visto', ['por suerte', 'por favor', 'por desgracia']),
  mc('«agian» →', 'quizá', ['siempre', 'jamás', 'mañana']),
  mc('«omen» se coloca…', 'tras el participio, antes del auxiliar', ['al principio de la frase', 'tras el auxiliar siempre', 'antes del sujeto']),
],
d: [D('Elkarrizketa · Zurrumurruak', `A: Entzun duzu? Bihar greba egingo omen dute.
B: Antza denez, bai, baina iturri ofizialek ez dute berretsi.
A: Segur aski trenak ere geldituko dira.
B: Agian. Bihar jakingo dugu.`, [
  ['¿Qué se dice que ocurrirá mañana?', 'Habrá huelga', ['Lloverá', 'Cerrarán la ciudad', 'Subirán los precios']],
  ['¿Está confirmado?', 'No, las fuentes oficiales no lo han confirmado', ['Sí, oficialmente', 'Sí, por el sindicato', 'No se menciona']],
])],
w: [wr('Escribe tres frases: un rumor (omen), una suposición (bide o seguruenik) y una duda (agian).', ['omen', 'bide|seguruenik|segur aski', 'agian'], 'Bihar euria egingo omen du. Etorri bide da. Agian ez gara joango.')],
});

U({ id: 'c1-4', lv: 'C1', t: 'Partikulak eta diskurtso-markatzaileak', es: 'Partículas y marcadores del discurso', ic: '🧂',
g: `<h4>Dar ritmo y matices al discurso</h4>
<ul><li><b>ordea</b> (sin embargo) y <b>berriz</b> (en cambio) contrastan: <i>Mikel etorri da; Ane, <b>berriz</b>, ez</i>.</li>
<li><b>bestalde</b> (por otra parte), <b>gainera</b> (además), <b>hala ere</b> (aun así).</li>
<li><b>hain zuzen ere</b> (precisamente), <b>alegia / hots</b> (es decir), <b>jakina / noski</b> (claro).</li></ul>`,
v: V(`ordea = sin embargo
berriz = en cambio
bestalde = por otra parte
hain zuzen ere = precisamente
alegia = es decir
hots = o sea
jakina = claro
noski = por supuesto
gainera = además
hala ere = aun así
zehazki = exactamente
adibidez = por ejemplo`),
p: P(`Mikel etorri da; Ane, berriz, ez da etorri | Mikel ha venido; Ane, en cambio, no ha venido
Proiektua interesgarria da; bestalde, garestia da | El proyecto es interesante; por otra parte, es caro
Hain zuzen ere, horixe esan nahi nuen | Precisamente eso quería decir
Euskaldun berria da, alegia, euskara helduaroan ikasi du | Es neovascohablante, es decir, aprendió euskera de adulto/a
Jakina, laguntzen dizut | Claro, te ayudo
Gaixorik zegoen; hala ere, lanera joan zen | Estaba enfermo; aun así, fue a trabajar
Ez zen oso azkarra; ordea, oso arduratsua zen | No era muy rápido; sin embargo, era muy responsable
Hori, gainera, ez da egia | Eso, además, no es verdad
Noski, ados nago zurekin | Por supuesto, estoy de acuerdo contigo
Zehazki, zer gertatu zen atzo? | Exactamente, ¿qué ocurrió ayer?`),
x: [
  mc('«berriz» en «Ane, berriz, ez da etorri» expresa…', 'contraste (en cambio)', ['causa', 'finalidad', 'condición']),
  mc('«ordea» →', 'sin embargo', ['además', 'por eso', 'mientras']),
  mc('«bestalde» →', 'por otra parte', ['por tanto', 'por ejemplo', 'primero']),
  fl('___ zuzen ere, horixe esan nahi nuen. (precisamente)', 'Hain', ['Hain', 'Bestalde', 'Gainera', 'Hala']),
  mc('«alegia» →', 'es decir', ['sin embargo', 'por ejemplo', 'aunque']),
  mc('«jakina» →', 'claro', ['quizá', 'nunca', 'después']),
  fl('Gaixorik zegoen; ___ ere, lanera joan zen. (aun así)', 'hala', ['hala', 'hain', 'bestalde', 'berriz']),
  mc('«gainera» →', 'además', ['sin embargo', 'por eso', 'antes']),
  fl('Hori, ___, ez da egia. (además)', 'gainera', ['gainera', 'ordea', 'berriz', 'jakina']),
  mc('«noski» →', 'por supuesto', ['quizá', 'aunque', 'cuando']),
  mc('«zehazki» →', 'exactamente', ['rápidamente', 'por suerte', 'también']),
  mc('«hots» se usa para…', 'reformular («o sea»)', ['negar', 'preguntar', 'ordenar']),
],
d: [D('Elkarrizketa · Eztabaida', `A: Proiektua interesgarria da, baina garestia.
B: Egia da. Bestalde, abantaila asko ditu.
A: Hala ere, kostua kontuan hartu behar dugu.
B: Jakina. Hain zuzen ere, horregatik bilatu behar dugu finantzaketa.`, [
  ['¿Qué problema ve A?', 'Que es caro', ['Que es lento', 'Que es aburrido', 'Que es ilegal']],
  ['¿Qué propone B?', 'Buscar financiación', ['Cancelar el proyecto', 'Esperar', 'Reducir el equipo']],
])],
w: [wr('Contrasta dos ideas con «ordea» o «berriz» y añade «gainera».', ['ordea|berriz', 'gainera'], 'Hiria polita da; kostaldea, berriz, mendia baino lasaiagoa da. Gainera, jendea oso atsegina da.')],
});

U({ id: 'c1-5', lv: 'C1', t: 'Narrazioa: iraganeko denborak', es: 'Narración: tiempos del pasado', ic: '📖',
g: `<h4>Contar una historia</h4>
<p>El pasado narrativo se apoya en tres recursos: el <b>pasado puntual</b> (<i>gertatu zen, ireki zen, esan zuen</i>), el <b>pasado en curso</b> (<i>afaltzen ari zen</i>) y el <b>pasado habitual</b> (<i>kontatzen zituen</i>).</p>
<p>Conectores narrativos: <b>bat-batean</b> (de repente), <b>handik gutxira</b> (poco después), <b>ordurako</b> (para entonces), <b>gero</b>, <b>azkenean</b>, <b>orduan</b>.</p>`,
v: V(`kontatu = contar
gertatu = ocurrir
iritsi = llegar
handik gutxira = poco después
ordurako = para entonces
bat-batean = de repente
gero = luego
azkenean = al final
orduan = entonces
kontakizuna = relato
pertsonaia = personaje
harrigarria = sorprendente`),
p: P(`Atzo gauean zerbait harrigarria gertatu zen | Anoche ocurrió algo sorprendente
Etxera iritsi nintzenean, jendea afaltzen ari zen | Cuando llegué a casa, la gente estaba cenando
Bat-batean, atea ireki zen | De repente se abrió la puerta
Handik gutxira, norbait sartu zen | Poco después entró alguien
Ordurako, gehienak etxera joan ziren | Para entonces, la mayoría se había ido a casa
Nire aitak istorio zaharrak kontatzen zituen | Mi padre contaba historias antiguas
Gero, denek barre egin zuten | Luego todos se rieron
Azkenean, dena azaldu zuen | Al final lo explicó todo
Kontakizunaren hasieran pertsonaiak aurkezten dira | Al principio del relato se presentan los personajes
Orduan ez genekien zer gertatuko zen | Entonces no sabíamos qué iba a pasar`),
x: [
  mc('«ari zen» indica…', 'una acción en curso en el pasado', ['una acción futura', 'un hábito presente', 'una orden']),
  mc('«Bat-batean» →', 'de repente', ['poco a poco', 'siempre', 'después']),
  mc('«Handik gutxira» →', 'poco después', ['hace mucho', 'por eso', 'a menudo']),
  fl('Jendea afaltzen ___ zen. (estaba)', 'ari', ['ari', 'egon', 'izan', 'joan']),
  mc('«kontatu» →', 'contar', ['olvidar', 'cantar', 'cambiar']),
  mc('«ordurako» →', 'para entonces', ['desde entonces', 'hasta entonces', 'después de eso']),
  fl('Nire aitak istorio zaharrak ___ zituen. (contaba)', 'kontatzen', ['kontatzen', 'kontatu', 'kontatuko', 'kontatzeko']),
  mc('«azkenean» →', 'al final', ['al principio', 'antes', 'mientras']),
  mc('«kontakizuna» →', 'relato', ['personaje', 'título', 'pregunta']),
  fl('Atea ___ zen. (se abrió)', 'ireki', ['ireki', 'irekiko', 'irekitzen', 'irekita']),
  mc('«Orduan ez genekien…» →', 'Entonces no sabíamos…', ['Ahora sabemos…', 'Nunca sabremos…', 'Quizá sepamos…']),
  mc('«harrigarria» →', 'sorprendente', ['aburrido', 'cansado', 'conocido']),
],
d: [D('Elkarrizketa · Gau bat', `A: Zer gertatu zen atzo gauean?
B: Etxera iritsi nintzenean, denak afaltzen ari ziren. Bat-batean, argia amatatu zen.
A: Eta gero?
B: Handik gutxira, norbait sartu zen kandela batekin. Azkenean, denek barre egin zuten.`, [
  ['¿Qué hacían todos al llegar B?', 'Cenaban', ['Dormían', 'Veían la tele', 'Jugaban']],
  ['¿Qué ocurrió de repente?', 'Se apagó la luz', ['Sonó el teléfono', 'Llamaron a la puerta', 'Llovió']],
  ['¿Cómo acabó?', 'Todos se rieron', ['Todos se fueron', 'Hubo una pelea', 'Nadie habló']],
])],
w: [wr('Cuenta en 3-4 frases algo que te ocurrió (usa «ari zen» o «ari nintzen» y un conector narrativo).', ['ari zen|ari nintzen|ari ziren', 'bat-batean|handik gutxira|gero|azkenean'], 'Etxean afaltzen ari nintzen. Bat-batean, norbaitek deitu zuen. Azkenean, lagun zahar bat zen.')],
});

U({ id: 'c1-6', lv: 'C1', t: 'Aditz trinko ohikoenak', es: 'Verbos sintéticos frecuentes: eraman, ekarri, ibili', ic: '🧭',
g: `<h4>Formas sintéticas de uso diario</h4>
<table><tr><th></th><th>nik</th><th>zuk</th><th>hark</th><th>guk</th><th>zuek</th><th>haiek</th></tr>
<tr><th>eraman (llevar)</th><td>daramat</td><td>daramazu</td><td>darama</td><td>daramagu</td><td>daramazue</td><td>daramate</td></tr>
<tr><th>ekarri (traer)</th><td>dakart</td><td>dakarzu</td><td>dakar</td><td>dakargu</td><td>dakarzue</td><td>dakarte</td></tr>
<tr><th>ibili (andar)</th><td>nabil</td><td>zabiltza</td><td>dabil</td><td>gabiltza</td><td>zabiltzate</td><td>dabiltza</td></tr></table>
<p>Estas formas (singular de objeto) incluyen verbo y auxiliar en una sola palabra. <i>Maleta bat daramat</i> · <i>Ogia dakart</i> · <i>Mendian nabil goizero</i>.</p>`,
v: V(`eraman = llevar
ekarri = traer
ibili = andar / moverse
jaso = recoger / recibir
bidali = enviar
daramat = llevo
dakart = traigo
nabil = ando
sintetikoa = sintético
trinkoa = compacto
ohikoena = el más habitual
poltsa = bolso / bolsa`),
p: P(`Maleta bat daramat | Llevo una maleta
Zuk zer daramazu poltsan? | ¿Qué llevas en el bolso?
Nik ogia dakart | Yo traigo el pan
Hark ez dakar ezer | Él/ella no trae nada
Nola zabiltza? | ¿Cómo andas? ¿Cómo te va?
Mendian nabil goizero | Ando por el monte cada mañana
Gu elkarrekin gabiltza | Andamos juntos
Zuek berandu zabiltzate beti | Vosotros andáis siempre tarde
Haiek asko dabiltza | Ellos andan mucho
Guk oparia dakargu | Nosotros traemos el regalo`),
x: [
  mc('«daramat» →', 'llevo', ['traigo', 'ando', 'tengo']),
  mc('«dakart» →', 'traigo', ['llevo', 'ando', 'digo']),
  mc('«nabil» →', 'ando / me muevo', ['traigo', 'llevo', 'voy']),
  fl('Nik ogia ___. (traigo)', 'dakart', ['dakart', 'daramat', 'nabil', 'dut']),
  fl('Maleta bat ___. (llevo)', 'daramat', ['daramat', 'dakart', 'nabil', 'dut']),
  fl('Mendian ___ goizero. (ando)', 'nabil', ['nabil', 'dabil', 'daramat', 'dakart']),
  fl('Zuk zer ___ poltsan? (llevas)', 'daramazu', ['daramazu', 'dakarzu', 'zabiltza', 'duzu']),
  mc('«zabiltza» corresponde a…', 'zu', ['ni', 'hura', 'gu']),
  fl('Haiek asko ___. (andan)', 'dabiltza', ['dabiltza', 'dabil', 'daramate', 'dakarte']),
  mc('«gabiltza» corresponde a…', 'gu', ['zuek', 'haiek', 'ni']),
  fl('Zuek berandu ___ beti. (andáis)', 'zabiltzate', ['zabiltzate', 'zabiltza', 'zarete', 'dabiltza']),
  mc('Estas formas se llaman…', 'sintéticas (verbo y auxiliar en una palabra)', ['perifrásticas', 'nominales', 'impersonales']),
],
d: [D('Elkarrizketa · Oparia', `A: Nola zabiltza, Ane? Zer daramazu poltsan?
B: Oparia daramat Mikelentzat. Eta zuk?
A: Nik ogia eta ardoa dakartzat.
B: Primeran! Gaur denok elkarrekin gabiltza.`, [
  ['¿Qué lleva Ane en el bolso?', 'Un regalo para Mikel', ['Pan', 'Vino', 'Un libro']],
  ['¿Qué trae A?', 'Pan y vino', ['Un regalo', 'Fruta', 'Nada']],
])],
gen: [['tbl', 'eraman'], ['tbl', 'ekarri'], ['tbl', 'ibili']],
w: [wr('Escribe tres frases con daramat/daramazu, dakart/dakarzu y nabil/zabiltza.', ['darama', 'dakar', 'nabil|zabiltza|gabiltza'], 'Maleta bat daramat. Nik ogia dakart. Mendian nabil goizero.')],
});

U({ id: 'c1-7', lv: 'C1', t: 'Kolokazioak eta hitz-elkarketak', es: 'Colocaciones y combinaciones léxicas', ic: '🔗',
g: `<h4>Combinaciones fijas con verbos frecuentes</h4>
<p>Muchos verbos forman combinaciones que no se traducen palabra por palabra: <b>erabakia hartu</b> (tomar una decisión), <b>parte hartu</b> (participar), <b>kontuan hartu</b> (tener en cuenta), <b>galdera egin</b> (hacer una pregunta), <b>arazoari aurre egin</b> (hacer frente al problema), <b>garrantzia eman</b> (dar importancia), <b>ondorioak atera</b> (sacar conclusiones), <b>arreta jarri</b> (prestar atención).</p>
<p>Aprende la combinación entera, no solo la palabra suelta.</p>`,
v: V(`erabakia hartu = tomar una decisión
parte hartu = participar
kontuan hartu = tener en cuenta
galdera egin = hacer una pregunta
aurre egin = hacer frente
garrantzia eman = dar importancia
ondorioak atera = sacar conclusiones
arreta jarri = prestar atención
ardura hartu = asumir la responsabilidad
denbora galdu = perder tiempo
hitza eman = dar la palabra
lan egin = trabajar`),
p: P(`Erabakia hartu aurretik, guztia kontuan hartu behar da | Antes de tomar la decisión hay que tenerlo todo en cuenta
Ekitaldian parte hartu dut | He participado en el acto
Arazoari aurre egin behar diogu | Tenemos que hacer frente al problema
Galdera bat egin nahi dizut | Quiero hacerte una pregunta
Garrantzi handia ematen diot osasunari | Doy mucha importancia a la salud
Ardura hartu du proiektuaz | Ha asumido la responsabilidad del proyecto
Ondorioak atera ditugu | Hemos sacado conclusiones
Denbora galtzea ez da komeni | No conviene perder tiempo
Arreta jarri behar duzu | Tienes que prestar atención
Hitza eman dit | Me ha dado su palabra`),
x: [
  mc('«erabakia hartu» →', 'tomar una decisión', ['tomar café', 'perder una decisión', 'olvidar una decisión']),
  mc('«parte hartu» →', 'participar', ['abandonar', 'partir', 'repartir']),
  mc('«kontuan hartu» →', 'tener en cuenta', ['perder la cuenta', 'contar dinero', 'olvidar']),
  fl('Galdera bat ___ nahi dizut. (hacer)', 'egin', ['egin', 'hartu', 'eman', 'jarri']),
  fl('Arazoari ___ egin behar diogu. (frente)', 'aurre', ['aurre', 'atzera', 'gain', 'azpi']),
  mc('«ondorioak atera» →', 'sacar conclusiones', ['sacar fotos', 'cambiar de tema', 'terminar el trabajo']),
  fl('Arreta ___ behar duzu. (prestar)', 'jarri', ['jarri', 'hartu', 'galdu', 'atera']),
  mc('«ardura hartu» →', 'asumir la responsabilidad', ['evitar el trabajo', 'recibir un regalo', 'pagar una deuda']),
  fl('Garrantzi handia ___ diot osasunari. (doy)', 'ematen', ['ematen', 'hartzen', 'egiten', 'jartzen']),
  mc('«denbora galdu» →', 'perder tiempo', ['ganar tiempo', 'dar tiempo', 'tomar tiempo prestado']),
  mc('Las colocaciones se aprenden mejor…', 'como combinación completa', ['palabra por palabra', 'solo en traducción', 'por orden alfabético']),
  fl('Ekitaldian parte ___ dut. (he participado)', 'hartu', ['hartu', 'egin', 'eman', 'jarri']),
],
d: [D('Elkarrizketa · Erabakia', `A: Erabakia hartu aurretik, guztia kontuan hartu behar dugu.
B: Bai. Zer arazori egin behar diogu aurre?
A: Denbora galtzea eta kostua. Ardura hartu behar du norbaitek.
B: Nik hartuko dut. Hitza ematen dizut.`, [
  ['¿Qué hay que hacer antes de decidir?', 'Tenerlo todo en cuenta', ['Votar', 'Esperar un año', 'Llamar al jefe']],
  ['¿Quién asumirá la responsabilidad?', 'B', ['A', 'Nadie', 'Un comité']],
])],
w: [wr('Escribe tres frases con colocaciones de la unidad (por ejemplo erabakia hartu, parte hartu, kontuan hartu).', ['hartu', 'egin|eman|jarri|atera'], 'Erabakia hartu aurretik, guztia kontuan hartu dut. Ekitaldian parte hartu nahi dut. Galdera bat egin dut.')],
});

U({ id: 'c1-8', lv: 'C1', t: 'Hitz-osaera: atzizkiak', es: 'Formación de palabras: sufijos', ic: '🧬',
g: `<h4>Ampliar vocabulario con sufijos</h4>
<ul><li><b>-tasun</b>: sustantivos abstractos (<i>aska → askatasun</i>, <i>berdin → berdintasun</i>, <i>elkar → elkartasun</i>).</li>
<li><b>-garri</b>: lo que provoca o merece algo (<i>ikusgarri, ulergarri, sinesgarri, kezkagarri</i>).</li>
<li><b>-le</b>: quien hace (<i>irakasle, idazle, irakurle, ikasle</i>).</li>
<li><b>-kuntza / -keta / -tza</b>: acción o resultado (<i>hezkuntza, ikerketa, ezagutza</i>).</li>
<li><b>-tsu</b>: que tiene mucho (<i>osasuntsu, indartsu</i>) · <b>-ezin</b>: imposible (<i>ahaztezin, ikusezin</i>).</li></ul>`,
v: V(`askatasuna = libertad
berdintasuna = igualdad
elkartasuna = solidaridad
ikusgarria = espectacular
ulergarria = comprensible
sinesgarria = creíble
kezkagarria = preocupante
irakaslea = profesor/a
idazlea = escritor/a
ezagutza = conocimiento
hezkuntza = educación
ikerketa = investigación`),
p: P(`Askatasuna eta berdintasuna funtsezkoak dira | La libertad y la igualdad son fundamentales
Elkartasuna gizarte osoaren ardura da | La solidaridad es responsabilidad de toda la sociedad
Testua ulergarria eta sinesgarria da | El texto es comprensible y creíble
Irakasleak ikasleei ezagutza helarazten die | El profesor transmite conocimiento a los alumnos
Hezkuntza sistemak aldaketak behar ditu | El sistema educativo necesita cambios
Ikerketa honek emaitza ikusgarriak eman ditu | Esta investigación ha dado resultados espectaculares
Idazle gazte batek liburu berria argitaratu du | Un escritor joven ha publicado un libro nuevo
Janari osasuntsua garrantzitsua da | La comida saludable es importante
Egoera kezkagarria da | La situación es preocupante
Ikusezina dirudien arazoa oso larria da | El problema que parece invisible es muy grave`),
x: [
  mc('El sufijo -tasun forma…', 'sustantivos abstractos', ['verbos', 'adverbios', 'pronombres']),
  mc('El sufijo -garri indica…', 'lo que provoca o merece algo', ['agente', 'lugar', 'tiempo']),
  mc('El sufijo -le forma…', 'agentes (quien hace)', ['abstractos', 'adjetivos de lugar', 'adverbios']),
  fl('ikus + ___ = espectacular', 'garri', ['garri', 'tasun', 'le', 'tsu']),
  fl('irakas + ___ = profesor/a', 'le', ['le', 'garri', 'tasun', 'ezin']),
  fl('aska + ___ = libertad', 'tasun', ['tasun', 'garri', 'le', 'tsu']),
  mc('«ikerketa» →', 'investigación', ['educación', 'libertad', 'conocimiento']),
  mc('«hezkuntza» →', 'educación', ['investigación', 'igualdad', 'escritor']),
  fl('osasun + ___ = saludable', 'tsu', ['tsu', 'garri', 'le', 'tasun']),
  mc('«sinesgarria» →', 'creíble', ['peligroso', 'aburrido', 'olvidado']),
  mc('«kezkagarria» →', 'preocupante', ['divertido', 'creíble', 'cercano']),
  mc('«ikusezina» →', 'invisible', ['espectacular', 'visible', 'comprensible']),
],
d: [D('Elkarrizketa · Hitzak', `A: «Askatasuna» hitza nola sortzen da?
B: Aska hitzari -tasun atzizkia gehituta. Berdintasuna eta elkartasuna ere horrela sortzen dira.
A: Eta «ikusgarria»?
B: Ikus aditzari -garri gehituta. Ikuskizun ikusgarri bat ikusi dut atzo.`, [
  ['¿Cómo se forma «askatasuna»?', 'Aska + -tasun', ['Aska + -garri', 'Aska + -le', 'Aska + -tsu']],
  ['¿Cómo se forma «ikusgarria»?', 'Ikus + -garri', ['Ikus + -tasun', 'Ikus + -le', 'Ikus + -tsu']],
])],
w: [wr('Escribe tres frases con palabras formadas con sufijos de la unidad.', ['tasun|garri|le|tsu|kuntza|keta'], 'Berdintasuna funtsezkoa da. Egoera kezkagarria da. Idazle gazte batek liburu berria idatzi du.')],
});
})();
