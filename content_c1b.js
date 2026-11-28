/* Contenido C1 · unidades 9-15 (material original; sin revisión de hablante nativo) */
(function () {
const { mc, fl, wr, U, vocabList: V, phraseList: P, dialog: D } = E;

U({ id: 'c1-9', lv: 'C1', t: 'Esapideak eta lokuzio finkoak', es: 'Expresiones fijas y locuciones', ic: '🗨️',
g: `<h4>Expresiones que se aprenden enteras</h4>
<p>Conectores fijos: <b>azken finean</b> (al fin y al cabo) · <b>nolanahi ere</b> (en cualquier caso) · <b>gutxi gorabehera</b> (más o menos) · <b>aurrez aurre</b> (cara a cara) · <b>ahoz aho</b> (de boca en boca) · <b>hitzez hitz</b> (palabra por palabra).</p>
<p>Locuciones verbales: <b>buruz ikasi</b> (aprender de memoria) · <b>burua hautsi</b> (romperse la cabeza) · <b>esku hartu</b> (intervenir) · <b>begi onez ikusi</b> (ver con buenos ojos) · <b>hanka sartu</b> (meter la pata).</p>`,
v: V(`azken finean = al fin y al cabo
nolanahi ere = en cualquier caso
gutxi gorabehera = más o menos
aurrez aurre = cara a cara
ahoz aho = de boca en boca
hitzez hitz = palabra por palabra
buruz ikasi = aprender de memoria
burua hautsi = romperse la cabeza
esku hartu = intervenir
begi onez ikusi = ver con buenos ojos
hanka sartu = meter la pata
batez ere = sobre todo`),
p: P(`Azken finean, guztiok gara berdinak | Al fin y al cabo, todos somos iguales
Nolanahi ere, bihar jakingo dugu | En cualquier caso, mañana lo sabremos
Aurrez aurre hitz egitea hobe da | Es mejor hablar cara a cara
Berria ahoz aho zabaldu da | La noticia se ha difundido de boca en boca
Poema hau buruz ikasi behar dut | Tengo que aprender este poema de memoria
Burua hautsi dut arazo hau konpontzeko | Me he roto la cabeza para resolver este problema
Poliziak esku hartu behar izan zuen | La policía tuvo que intervenir
Proposamena begi onez ikusi dute | Han visto la propuesta con buenos ojos
Hanka sartu dut, barkatu | He metido la pata, perdona
Gutxi gorabehera ehun lagun etorri ziren | Vinieron más o menos cien personas`),
x: [
  mc('«azken finean» →', 'al fin y al cabo', ['al principio', 'por ejemplo', 'de repente']),
  mc('«nolanahi ere» →', 'en cualquier caso', ['nunca', 'por supuesto que no', 'primero']),
  mc('«aurrez aurre» →', 'cara a cara', ['de espaldas', 'por teléfono', 'por escrito']),
  mc('«ahoz aho» →', 'de boca en boca', ['por escrito', 'en silencio', 'a gritos']),
  fl('Poema hau ___ ikasi behar dut. (de memoria)', 'buruz', ['buruz', 'ahoz', 'hitzez', 'aurrez']),
  mc('«burua hautsi» →', 'romperse la cabeza (pensar mucho)', ['hacerse daño', 'enfadarse', 'dormir']),
  fl('Poliziak ___ hartu behar izan zuen. (intervenir)', 'esku', ['esku', 'buru', 'hanka', 'begi']),
  mc('«begi onez ikusi» →', 'ver con buenos ojos', ['ver mal', 'no ver', 'ver de lejos']),
  mc('«hanka sartu» →', 'meter la pata', ['dar un paso', 'correr', 'caer']),
  fl('___ gorabehera ehun lagun etorri ziren. (más o menos)', 'Gutxi', ['Gutxi', 'Asko', 'Batez', 'Azken']),
  mc('«hitzez hitz» →', 'palabra por palabra', ['de memoria', 'cara a cara', 'sin hablar']),
  mc('Las locuciones fijas se aprenden…', 'como bloques completos', ['traduciendo cada palabra', 'solo por escrito', 'evitando su uso']),
],
d: [D('Elkarrizketa · Hanka sartu', `A: Hanka sartu dut, Mikelekin hitz egitean.
B: Zer esan duzu?
A: Aurrez aurre esan beharko nion. Azken finean, berria ahoz aho zabaldu da.
B: Nolanahi ere, barkamena eskatu behar diozu.`, [
  ['¿Qué ha hecho A?', 'Meter la pata', ['Intervenir', 'Aprender un poema', 'Viajar']],
  ['¿Cómo debería haberlo dicho?', 'Cara a cara', ['Por escrito', 'Por teléfono', 'No decirlo']],
  ['¿Qué consejo da B?', 'Pedir disculpas', ['Ignorarlo', 'Negarlo', 'Esperar']],
])],
w: [wr('Escribe tres frases con expresiones fijas de la unidad.', ['azken finean|nolanahi ere|aurrez aurre|ahoz aho|buruz ikasi|gutxi gorabehera'], 'Azken finean, aurrez aurre hitz egitea hobe da. Gutxi gorabehera ehun lagun etorri ziren.')],
});

U({ id: 'c1-10', lv: 'C1', t: 'Argudio-egitura eta erretorika', es: 'Argumentación y retórica', ic: '⚖️',
g: `<h4>Defender una tesis y refutar</h4>
<p>Secuencia: <b>tesia</b> → <b>argudioak</b> → <b>kontrargudioa</b> → <b>gezurtatzea</b> → <b>ondorioa</b>.</p>
<p>Fórmulas: <i>Egia da…, baina…</i> · <i>Onartu behar da…</i> · <i>Horrek ez du esan nahi… -nik</i> (eso no significa que…) · <i>Ez da hori kontua</i> · <i>Argudio hori ez dago… oinarrituta</i> · <i>Hala eta guztiz ere…</i></p>`,
v: V(`tesia = tesis
argudioa = argumento
kontrargudioa = contraargumento
frogatu = demostrar
ukatu = negar
oinarritu = basar
defendatu = defender
gezurtatu = refutar
bidegabea = injusto
zuzena = justo
onartu = admitir
ikuspegia = enfoque`),
p: P(`Nire tesia da euskarak babes handiagoa behar duela | Mi tesis es que el euskera necesita más protección
Egia da arazoak daudela, baina konponbidea badago | Es cierto que hay problemas, pero hay solución
Horrek ez du esan nahi neurria bidegabea denik | Eso no significa que la medida sea injusta
Argudio hori ez dago datuetan oinarrituta | Ese argumento no está basado en datos
Kontrargudio hau gezurtatu egin daiteke | Este contraargumento se puede refutar
Onartu behar da ikuspegi horrek bere zentzua duela | Hay que admitir que ese enfoque tiene su sentido
Ez da hori kontua | No es de eso de lo que se trata
Hala eta guztiz ere, nire iritzia ez da aldatzen | Aun así, mi opinión no cambia
Ondorioz, proposamena defendatzen dut | En consecuencia, defiendo la propuesta
Ezin dugu frogatu, baina badirudi egia dela | No podemos demostrarlo, pero parece que es verdad`),
x: [
  mc('«tesia» →', 'tesis', ['ejemplo', 'conclusión', 'duda']),
  mc('«kontrargudioa» →', 'contraargumento', ['conclusión', 'ejemplo', 'título']),
  mc('«gezurtatu» →', 'refutar', ['aceptar', 'repetir', 'resumir']),
  fl('Argudio hori ez dago datuetan ___. (basado)', 'oinarrituta', ['oinarrituta', 'frogatuta', 'ukatuta', 'defendatuta']),
  mc('«bidegabea» →', 'injusto', ['justo', 'necesario', 'suficiente']),
  mc('«Ez da hori kontua» →', 'No es de eso de lo que se trata', ['Eso no cuenta', 'No me importa nada', 'No lo cuento']),
  fl('Horrek ez du esan nahi neurria bidegabea ___. (que sea)', 'denik', ['denik', 'dela', 'den', 'delako']),
  mc('«Onartu behar da…» introduce…', 'una concesión', ['una pregunta', 'una orden', 'una despedida']),
  fl('Ezin dugu ___, baina badirudi egia dela. (demostrar)', 'frogatu', ['frogatu', 'ukatu', 'ahaztu', 'bidali']),
  mc('«defendatu» →', 'defender', ['atacar', 'olvidar', 'cambiar']),
  mc('«Hala eta guztiz ere» →', 'aun así', ['por ejemplo', 'en primer lugar', 'por eso']),
  mc('Un buen texto argumentativo…', 'responde también a los contraargumentos', ['los ignora', 'solo repite la tesis', 'evita ejemplos']),
],
d: [D('Elkarrizketa · Argudioak', `A: Nire tesia da neurria zuzena dela.
B: Egia da neurri batzuk onak direla, baina horrek ez du esan nahi guztiak direnik.
A: Onartu behar dut kostua handia dela. Hala eta guztiz ere, abantailak gehiago dira.
B: Argudio hori datuetan oinarritu behar duzu.`, [
  ['¿Cuál es la tesis de A?', 'Que la medida es justa', ['Que es injusta', 'Que es cara', 'Que es nueva']],
  ['¿Qué concede A?', 'Que el coste es alto', ['Que hay pocas ventajas', 'Que la medida es injusta', 'Nada']],
  ['¿Qué pide B?', 'Basar el argumento en datos', ['Cambiar de tesis', 'Votar', 'Abandonar']],
])],
w: [wr('Defiende una tesis con una concesión y una refutación (Egia da…, baina…).', ['tesia|iritzia|uste dut', 'egia da|onartu behar da', 'baina|hala eta guztiz ere'], 'Nire iritzia da hezkuntza garrantzitsuena dela. Egia da kostua handia dela, baina emaitzak oso onak dira.')],
});

U({ id: 'c1-11', lv: 'C1', t: 'Testu akademikoa eta ikerketa', es: 'Texto académico e investigación', ic: '🎓',
g: `<h4>Escribir y leer informes de investigación</h4>
<p>Partes: <b>helburua</b>, <b>metodologia</b>, <b>emaitzak</b>, <b>ondorioak</b>, <b>bibliografia</b>. Fórmulas: <i>Datuen arabera…</i> · <i>Emaitzek … berresten dute</i> · <i>Ondorioztatzen da…</i> · <i>Aurretik egindako ikerketak kontuan hartu dira</i>.</p>
<p>El estilo académico prefiere formas impersonales (<i>aztertu da, ikusi da</i>) y precisión en los datos.</p>`,
v: V(`ikerketa = investigación
ikertzailea = investigador/a
helburua = objetivo
metodologia = metodología
emaitza = resultado
hipotesia = hipótesis
lagina = muestra
bibliografia = bibliografía
datuak = datos
ondorioztatu = concluir
berretsi = confirmar
orokortu = generalizar`),
p: P(`Ikerketa honen helburua hizkuntza-erabilera aztertzea da | El objetivo de esta investigación es analizar el uso de la lengua
Metodologiak hiru fase ditu | La metodología tiene tres fases
Datuen arabera, erabilera handitu egin da | Según los datos, el uso ha aumentado
Emaitzek hipotesia berresten dute | Los resultados confirman la hipótesis
Lagin handiagoa behar da emaitzak orokortzeko | Hace falta una muestra mayor para generalizar los resultados
Iturri guztiak bibliografian agertzen dira | Todas las fuentes aparecen en la bibliografía
Ondorioztatzen da neurriak eragina izan duela | Se concluye que las medidas han tenido efecto
Ikertzaileek beste azterketa bat egin dute | Los investigadores han hecho otro estudio
Aurretik egindako ikerketak kontuan hartu dira | Se han tenido en cuenta las investigaciones previas
Etorkizunean, ikerketa gehiago beharko dira | En el futuro harán falta más investigaciones`),
x: [
  mc('«metodologia» →', 'metodología', ['bibliografía', 'muestra', 'resultado']),
  mc('«emaitza» →', 'resultado', ['objetivo', 'fuente', 'hipótesis']),
  mc('«lagina» →', 'muestra', ['dato', 'fuente', 'conclusión']),
  fl('___ arabera, erabilera handitu egin da. (según los datos)', 'Datuen', ['Datuen', 'Lanaren', 'Gaiaren', 'Hitzaren']),
  mc('«ondorioztatu» →', 'concluir', ['empezar', 'dudar', 'copiar']),
  fl('Emaitzek hipotesia ___ dute. (confirman)', 'berresten', ['berresten', 'ukatzen', 'ahazten', 'bidaltzen']),
  mc('«bibliografia» →', 'bibliografía', ['metodología', 'conclusión', 'muestra']),
  mc('«hipotesia» →', 'hipótesis', ['dato', 'fuente', 'tarea']),
  fl('Lagin handiagoa behar da emaitzak ___. (generalizar)', 'orokortzeko', ['orokortzeko', 'orokortzen', 'orokortu', 'orokortuko']),
  mc('El estilo académico prefiere…', 'precisión e impersonalidad', ['humor y coloquialismos', 'frases muy cortas sin datos', 'opiniones sin fuentes']),
  mc('«ikertzailea» →', 'investigador/a', ['profesor/a', 'escritor/a', 'periodista']),
  fl('Ikerketa honen ___ hizkuntza-erabilera aztertzea da. (objetivo)', 'helburua', ['helburua', 'emaitza', 'lagina', 'iturria']),
],
d: [D('Elkarrizketa · Ikerketa-txostena', `A: Txostenaren helburua zein da?
B: Hizkuntza-erabilera aztertzea. Metodologiak hiru fase ditu.
A: Eta emaitzek zer erakusten dute?
B: Datuen arabera, erabilera handitu da. Hala ere, lagin handiagoa behar da emaitzak orokortzeko.`, [
  ['¿Cuál es el objetivo del informe?', 'Analizar el uso de la lengua', ['Medir el tráfico', 'Evaluar un examen', 'Comparar dialectos']],
  ['¿Qué muestran los datos?', 'Que el uso ha aumentado', ['Que ha disminuido', 'Que no cambia', 'Que no hay datos']],
  ['¿Qué hace falta para generalizar?', 'Una muestra mayor', ['Más tiempo', 'Otro autor', 'Más dinero']],
])],
w: [wr('Redacta tres frases de un informe: objetivo, resultado y conclusión.', ['helburua|aztertzea', 'datuen arabera|emaitzek', 'ondorioztatzen da|ondorioz'], 'Ikerketaren helburua erabilera aztertzea da. Datuen arabera, erabilera handitu da. Ondorioztatzen da neurriak eragina izan duela.')],
});

U({ id: 'c1-12', lv: 'C1', t: 'Literatura eta kultura', es: 'Literatura y cultura vasca', ic: '📚',
g: `<h4>Hablar de libros, poesía y tradición</h4>
<p>Géneros: <i>eleberria</i> (novela), <i>ipuina</i> (cuento), <i>olerkia</i> (poema), <i>saiakera</i> (ensayo), <i>antzerkia</i> (teatro).</p>
<p>La <b>bertsolaritza</b> es la tradición del verso improvisado cantado: el <i>bertsolaria</i> improvisa y compite en <i>txapelketak</i>. <i>Obabakoak</i> es una conocida colección de relatos de Bernardo Atxaga. En Durango se celebra una feria anual de libro y disco vascos.</p>`,
v: V(`eleberria = novela
ipuina = cuento
olerkia = poema
saiakera = ensayo
antzerkia = teatro
idazlea = escritor/a
bertsolaria = bertsolari (improvisador)
bertsolaritza = arte del verso improvisado
txapelketa = campeonato
argitaratu = publicar
itzuli = traducir
azoka = feria`),
p: P(`Bertsolaritza ahozko tradizio bizia da | El bertsolarismo es una tradición oral viva
Bertsolariak kantuz inprobisatzen du | El bertsolari improvisa cantando
Txapelketan bertsolari onenak lehiatzen dira | En el campeonato compiten los mejores bertsolaris
Eleberri hau hainbat hizkuntzatara itzuli da | Esta novela se ha traducido a varios idiomas
Obabakoak Bernardo Atxagaren ipuin-bilduma ezaguna da | Obabakoak es una conocida colección de relatos de Bernardo Atxaga
Olerki hori buruz ikasi nuen eskolan | Aprendí ese poema de memoria en el colegio
Idazle gazte askok euskaraz idazten dute | Muchos escritores jóvenes escriben en euskera
Durangoko Azokan liburu eta disko asko saltzen dira | En la Feria de Durango se venden muchos libros y discos
Liburuak argitaratzea ez da erraza | Publicar libros no es fácil
Ipuin hau umeentzat idatzi da | Este cuento está escrito para niños`),
x: [
  mc('«eleberria» →', 'novela', ['cuento', 'poema', 'ensayo']),
  mc('«olerkia» →', 'poema', ['novela', 'teatro', 'feria']),
  mc('«bertsolaria» →', 'improvisador/a de versos cantados', ['novelista', 'traductor', 'editor']),
  fl('Txapelketan bertsolari onenak ___ dira. (compiten)', 'lehiatzen', ['lehiatzen', 'itzultzen', 'argitaratzen', 'saltzen']),
  mc('«itzuli» (un libro) →', 'traducir', ['vender', 'leer', 'publicar']),
  mc('«argitaratu» →', 'publicar', ['traducir', 'leer', 'olvidar']),
  fl('Obabakoak ___ ipuin-bilduma ezaguna da. (de Atxaga)', 'Atxagaren', ['Atxagaren', 'Atxagak', 'Atxagarekin', 'Atxagatik']),
  mc('«azoka» →', 'feria', ['campeonato', 'novela', 'editorial']),
  mc('«ipuina» →', 'cuento', ['poema', 'ensayo', 'feria']),
  fl('Eleberri hau hainbat hizkuntzatara ___ da. (traducido)', 'itzuli', ['itzuli', 'itzuliko', 'itzultzen', 'itzultzeko']),
  mc('«ahozko tradizioa» →', 'tradición oral', ['tradición escrita', 'novela', 'feria']),
  mc('«idazlea» →', 'escritor/a', ['lector/a', 'traductor/a', 'editor/a']),
],
d: [D('Elkarrizketa · Liburuak', `A: Zer irakurtzen ari zara?
B: Eleberri bat, Anek gomendatu didana. Hainbat hizkuntzatara itzuli da.
A: Eta bertsolaritza gustatzen zaizu?
B: Bai, txapelketak ikustera joaten naiz. Ahozko tradizio bizia da.`, [
  ['¿Qué lee B?', 'Una novela', ['Un poema', 'Un ensayo', 'Un periódico']],
  ['¿Quién se la recomendó?', 'Ane', ['Mikel', 'Un profesor', 'Nadie']],
  ['¿Qué le gusta a B?', 'La bertsolaritza', ['El teatro', 'El cine', 'La ópera']],
])],
w: [wr('Escribe tres frases sobre un libro, un poema o una tradición cultural vasca.', ['eleberri|olerki|ipuin|bertso', 'da|dut|zen'], 'Eleberri bat irakurtzen ari naiz. Bertsolaritza ahozko tradizio bizia da. Olerki hori buruz ikasi nuen.')],
});

U({ id: 'c1-13', lv: 'C1', t: 'Hedabideak eta komunikazioa', es: 'Medios de comunicación', ic: '📰',
g: `<h4>Leer y producir textos periodísticos</h4>
<p>Géneros: <i>albistea</i> (noticia), <i>erreportajea</i>, <i>elkarrizketa</i>, <i>iritzi-artikulua</i>, <i>komunikatua</i>. Medios: <i>egunkaria, albistegia, irratia, sare sozialak</i>.</p>
<p>Verificar <b>iturriak</b> es clave. Para distinguir hecho y opinión usa fórmulas ya vistas: <i>omen, antza denez, iturri ofizialen arabera</i>.</p>`,
v: V(`albistea = noticia
albistegia = informativo
egunkaria = periódico
kazetaria = periodista
prentsaurrekoa = rueda de prensa
erreportajea = reportaje
titularra = titular
komunikatua = comunicado
zuzenean = en directo
iragarkia = anuncio
iritzi-artikulua = artículo de opinión
informazio faltsua = información falsa`),
p: P(`Albistegia gauero zuzenean ematen dute | Dan el informativo en directo cada noche
Kazetariak elkarrizketa egin dio alkateari | La periodista ha entrevistado al alcalde
Prentsaurrekoan neurri berriak aurkeztu dituzte | En la rueda de prensa han presentado nuevas medidas
Titularrak ez du istorio osoa kontatzen | El titular no cuenta toda la historia
Komunikatua hedabide guztietara bidali dute | Han enviado el comunicado a todos los medios
Iturriak egiaztatzea funtsezkoa da | Verificar las fuentes es fundamental
Erreportaje honek arazo handi bat azaltzen du | Este reportaje expone un gran problema
Egunkariak albiste hori argitaratu du | El periódico ha publicado esa noticia
Sare sozialetan zurrumurruak azkar zabaltzen dira | En las redes sociales los rumores se difunden rápido
Informazio faltsua detektatzea zaila izan daiteke | Detectar información falsa puede ser difícil`),
x: [
  mc('«albistegia» →', 'informativo', ['periódico', 'anuncio', 'artículo']),
  mc('«kazetaria» →', 'periodista', ['escritor', 'profesor', 'editor']),
  mc('«prentsaurrekoa» →', 'rueda de prensa', ['reportaje', 'anuncio', 'informativo']),
  fl('Albistegia gauero ___ ematen dute. (en directo)', 'zuzenean', ['zuzenean', 'berandu', 'astiro', 'bakarrik']),
  mc('«titularra» →', 'titular', ['comunicado', 'reportaje', 'anuncio']),
  mc('«komunikatua» →', 'comunicado', ['titular', 'rumor', 'entrevista']),
  fl('Iturriak ___ funtsezkoa da. (verificar)', 'egiaztatzea', ['egiaztatzea', 'ukatzea', 'ahaztea', 'idaztea']),
  mc('«informazio faltsua» →', 'información falsa', ['información oficial', 'comunicado', 'reportaje']),
  fl('Kazetariak elkarrizketa ___ dio alkateari. (ha hecho)', 'egin', ['egin', 'eman', 'hartu', 'jarri']),
  mc('«iritzi-artikulua» →', 'artículo de opinión', ['noticia', 'comunicado', 'anuncio']),
  mc('Para atribuir una información a oídas se usa…', 'omen', ['bide', 'arren', 'baina']),
  mc('«iragarkia» →', 'anuncio', ['titular', 'reportaje', 'periodista']),
],
d: [D('Elkarrizketa · Albistea', `A: Entzun duzu albistea? Prentsaurrekoan neurri berriak aurkeztu dituzte.
B: Bai, baina titularrak ez du istorio osoa kontatzen.
A: Zer egingo dugu?
B: Iturriak egiaztatu behar ditugu, sare sozialetan zurrumurruak azkar zabaltzen baitira.`, [
  ['¿Qué se presentó en la rueda de prensa?', 'Nuevas medidas', ['Un libro', 'Unas elecciones', 'Una película']],
  ['¿Qué problema ve B en el titular?', 'No cuenta toda la historia', ['Es falso', 'Es muy largo', 'Es antiguo']],
  ['¿Qué propone B?', 'Verificar las fuentes', ['Compartirlo', 'Ignorarlo', 'Llamar al periodista']],
])],
w: [wr('Escribe un titular y dos frases de una noticia breve.', ['aurkeztu|iragarri|argitaratu|egin', 'da|dute|du'], 'Udalak neurri berriak aurkeztu ditu. Prentsaurrekoan alkateak azaldu du plana. Herritarrek iritzia eman dezakete.')],
});

U({ id: 'c1-14', lv: 'C1', t: 'Politika eta gizartea', es: 'Política y sociedad', ic: '🏛️',
g: `<h4>Instituciones y participación ciudadana</h4>
<p>Instituciones: <i>udala</i> (ayuntamiento), <i>foru aldundia</i> (diputación foral), <i>Eusko Jaurlaritza</i> (Gobierno Vasco), <i>Eusko Legebiltzarra</i> (Parlamento Vasco).</p>
<p>Vocabulario: <i>hauteskundeak, alderdia, herritarra, eskubidea, betebeharra, lege, gehiengoa, parte-hartzea</i>. Verbos: <i>bozkatu, onartu, iragarri, aurkeztu</i>.</p>`,
v: V(`hauteskundeak = elecciones
alderdia = partido
herritarra = ciudadano/a
eskubidea = derecho
betebeharra = deber
legea = ley
gehiengoa = mayoría
parte-hartzea = participación
udala = ayuntamiento
foru aldundia = diputación foral
Eusko Jaurlaritza = Gobierno Vasco
Eusko Legebiltzarra = Parlamento Vasco`),
p: P(`Hauteskundeetan herritarrek bozkatzen dute | En las elecciones los ciudadanos votan
Eusko Legebiltzarrak lege berria onartu du | El Parlamento Vasco ha aprobado una nueva ley
Eusko Jaurlaritzak neurri berriak iragarri ditu | El Gobierno Vasco ha anunciado nuevas medidas
Udalak herritarren iritzia bildu nahi du | El ayuntamiento quiere recoger la opinión ciudadana
Herritar guztiek eskubideak eta betebeharrak dituzte | Todos los ciudadanos tienen derechos y deberes
Alderdiek programak aurkeztu dituzte | Los partidos han presentado sus programas
Foru aldundiek garrantzi handia dute Euskadin | Las diputaciones forales tienen mucha importancia en Euskadi
Parte-hartze handiagoa behar da | Hace falta mayor participación
Legea aldatzeko, gehiengoa behar da | Para cambiar la ley hace falta mayoría
Eztabaida politikoa errespetuz egin behar da | El debate político debe hacerse con respeto`),
x: [
  mc('«hauteskundeak» →', 'elecciones', ['partidos', 'leyes', 'derechos']),
  mc('«alderdia» →', 'partido', ['ley', 'ciudadano', 'mayoría']),
  mc('«eskubidea» →', 'derecho', ['deber', 'ley', 'voto']),
  mc('«betebeharra» →', 'deber', ['derecho', 'ley', 'partido']),
  fl('Hauteskundeetan herritarrek ___ dute. (votan)', 'bozkatzen', ['bozkatzen', 'onartzen', 'iragartzen', 'idazten']),
  mc('«Eusko Legebiltzarra» →', 'Parlamento Vasco', ['Gobierno Vasco', 'ayuntamiento', 'diputación']),
  mc('«Eusko Jaurlaritza» →', 'Gobierno Vasco', ['Parlamento Vasco', 'ayuntamiento', 'partido']),
  fl('Legea aldatzeko, ___ behar da. (mayoría)', 'gehiengoa', ['gehiengoa', 'betebeharra', 'alderdia', 'udala']),
  mc('«parte-hartzea» →', 'participación', ['mayoría', 'elección', 'derecho']),
  mc('«udala» →', 'ayuntamiento', ['gobierno', 'parlamento', 'partido']),
  fl('Alderdiek programak ___ dituzte. (presentado)', 'aurkeztu', ['aurkeztu', 'bozkatu', 'ukatu', 'galdu']),
  mc('«legea» →', 'ley', ['derecho', 'deber', 'elección']),
],
d: [D('Elkarrizketa · Parte-hartzea', `A: Udalak herritarren iritzia bildu nahi du.
B: Primeran. Parte-hartze handiagoa behar da.
A: Herritar guztiek eskubideak eta betebeharrak dituzte.
B: Bai, eta eztabaida errespetuz egin behar da.`, [
  ['¿Qué quiere el ayuntamiento?', 'Recoger la opinión ciudadana', ['Cambiar la ley', 'Convocar elecciones', 'Subir los impuestos']],
  ['¿Qué hace falta según B?', 'Mayor participación', ['Más dinero', 'Más leyes', 'Menos debate']],
])],
w: [wr('Escribe tres frases sobre instituciones, derechos o participación ciudadana.', ['udala|legebiltzarra|jaurlaritza|alderdi|herritar', 'da|dute|du|behar'], 'Udalak herritarren iritzia bildu nahi du. Herritar guztiek eskubideak dituzte. Parte-hartze handiagoa behar da.')],
});

U({ id: 'c1-15', lv: 'C1', t: 'Zientzia, teknologia eta etika', es: 'Ciencia, tecnología y ética', ic: '🔬',
g: `<h4>Debatir sobre innovación y sus riesgos</h4>
<p>Vocabulario: <i>adimen artifiziala, berrikuntza, datu pertsonalak, pribatutasuna, energia berriztagarriak, garapen iraunkorra, erronka, arriskua, abantaila, etika</i>.</p>
<p>Combina lo aprendido: concesión (<i>egia da…, baina…</i>), causa-consecuencia (<i>horregatik, ondorioz</i>), modalización (<i>dirudienez, seguruenik</i>) y estructura argumentativa para defender una postura matizada.</p>`,
v: V(`adimen artifiziala = inteligencia artificial
berrikuntza = innovación
datu pertsonalak = datos personales
pribatutasuna = privacidad
energia berriztagarriak = energías renovables
garapen iraunkorra = desarrollo sostenible
erronka = reto
arriskua = riesgo
abantaila = ventaja
etika = ética
zientzia = ciencia
babestu = proteger`),
p: P(`Adimen artifizialak aukera berriak irekitzen ditu | La inteligencia artificial abre nuevas posibilidades
Datu pertsonalak babestu behar dira | Hay que proteger los datos personales
Pribatutasuna eskubide funtsezkoa da | La privacidad es un derecho fundamental
Berrikuntzak ekonomia hobetu dezake | La innovación puede mejorar la economía
Energia berriztagarriak etorkizunaren giltza dira | Las energías renovables son la clave del futuro
Erronka handienetako bat garapen iraunkorra da | Uno de los mayores retos es el desarrollo sostenible
Teknologiak abantailak eta arriskuak ditu | La tecnología tiene ventajas y riesgos
Erabaki etikoak hartzea ez da erraza | Tomar decisiones éticas no es fácil
Ikertzaileek gaiaren inguruko eztabaida zabaldu dute | Los investigadores han abierto el debate sobre el tema
Zientziak gizarteari lagundu behar dio | La ciencia debe ayudar a la sociedad`),
x: [
  mc('«adimen artifiziala» →', 'inteligencia artificial', ['energía renovable', 'datos personales', 'privacidad']),
  mc('«pribatutasuna» →', 'privacidad', ['innovación', 'riesgo', 'ciencia']),
  mc('«berrikuntza» →', 'innovación', ['privacidad', 'ética', 'ventaja']),
  fl('Datu pertsonalak ___ behar dira. (proteger)', 'babestu', ['babestu', 'ukatu', 'ahaztu', 'saldu']),
  mc('«erronka» →', 'reto', ['ventaja', 'ley', 'dato']),
  mc('«arriskua» →', 'riesgo', ['ventaja', 'reto', 'ciencia']),
  fl('Teknologiak abantailak eta ___ ditu. (riesgos)', 'arriskuak', ['arriskuak', 'erronkak', 'legeak', 'datuak']),
  mc('«garapen iraunkorra» →', 'desarrollo sostenible', ['crecimiento rápido', 'energía nuclear', 'innovación social']),
  mc('«energia berriztagarriak» →', 'energías renovables', ['energías caras', 'energías antiguas', 'energías sucias']),
  fl('Erabaki ___ hartzea ez da erraza. (éticas)', 'etikoak', ['etikoak', 'etikoa', 'etika', 'etikoek']),
  mc('Un debate matizado sobre tecnología conviene que…', 'reconozca ventajas y riesgos', ['solo alabe', 'solo critique', 'evite datos']),
  mc('«abantaila» →', 'ventaja', ['riesgo', 'reto', 'ley']),
],
d: [D('Elkarrizketa · Teknologia eta etika', `A: Adimen artifizialak aukera berriak irekitzen ditu.
B: Egia da, baina datu pertsonalak babestu behar dira.
A: Pribatutasuna eskubide funtsezkoa da. Ondorioz, legeak behar dira.
B: Bai. Erabaki etikoak hartzea ez da erraza, baina beharrezkoa da.`, [
  ['¿Qué abre la inteligencia artificial?', 'Nuevas posibilidades', ['Nuevas leyes', 'Nuevos riesgos solamente', 'Nada']],
  ['¿Qué hay que proteger según B?', 'Los datos personales', ['Las empresas', 'Las energías', 'Los medios']],
  ['¿Qué se necesita según A?', 'Leyes', ['Más datos', 'Menos ciencia', 'Más anuncios']],
])],
w: [wr('Escribe una opinión matizada sobre una tecnología: ventaja, riesgo y propuesta.', ['abantaila|aukera', 'arrisku|babestu', 'behar'], 'Teknologiak abantaila asko ditu, baina arriskuak ere baditu. Datu pertsonalak babestu behar dira.')],
});
})();
