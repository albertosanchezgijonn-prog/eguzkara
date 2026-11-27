# eGuzkara · euskera A1–B2 con Guzki

40 unidades (15 de A1 + 13 de A2 + 6 de B1 + 6 de B2), cada una con: nota de gramática, vocabulario, frases, diálogos (audio + lectura), pronunciación y test final.
Además: práctica libre generada al azar (conjugaciones, casos, números, horas, formas verbales), repaso de errores, simulacro de examen y guía de gramática.

## Cómo tenerla en el móvil Android

### A) Más rápido: instalarla como app (PWA)
1. Sube esta carpeta a cualquier hosting estático con HTTPS (GitHub Pages, Netlify, Cloudflare Pages…).
2. Abre la URL en **Chrome para Android** → menú ⋮ → **Instalar aplicación**.
   Funciona sin conexión y el micrófono/voz van con el motor de Chrome.

### B) APK con GitHub Actions (sin instalar nada)
1. Crea un repositorio y sube el contenido de esta carpeta. Copia `tools/build-apk.workflow.txt` a `.github/workflows/build-apk.yml`.
2. Pestaña **Actions → Build Android APK → Run workflow**.
3. Descarga el artefacto `eguzkara-debug-apk` → `app-debug.apk` e instálalo (permite «orígenes desconocidos»).

### C) APK en local (Android Studio)
```bash
npm install
npm run web
npx cap add android
# añade <uses-permission android:name="android.permission.RECORD_AUDIO"/> en android/app/src/main/AndroidManifest.xml
npx cap sync android
npx cap open android    # Build > Build APK(s)
```
La versión APK usa los plugins `@capacitor-community/text-to-speech` y `@capacitor-community/speech-recognition`
(el WebView de Android no trae reconocimiento de voz web).

## Guzki, la mascota
* Las ilustraciones adjuntas de Guzki se integran en los ejercicios, las pantallas de resultado, la galería y los iconos de la app/PWA; se guardan optimizadas en `assets/guzki/`.
* Aparece en la pantalla principal, en cada ejercicio (esquina superior y panel de resultado) y al terminar lecciones/simulacros.
* **Reacciones:** acierto → «¡Bai! Ederki!» · 3 seguidos → racha · fallo → duda (o sorpresa si queda 1 vida) · 2 fallos → depresivo · 3 fallos → tóxico · recupera el ánimo al acertar · lección perfecta → euforia.
* **Impaciencia:** si tardas 25 s en responder se impacienta; a los 50 s se enfada.
* **Salud (0-100):** cada día completo sin estudiar resta 20; cada acierto suma 2 y cada lección 10+. Con poca salud se marchita (pétalos caídos, color apagado).
* **Pantalla principal:** su ánimo depende de la hora, la racha, el objetivo diario y los días sin estudiar.
* **Avisos (solo APK):** notificaciones diarias a la hora elegida; el tono escala (¿Seguimos? → ¡Ea, ea! → Esto ya es personal… → Me estoy marchitando…). Ajustes → Guzki.
* Dibujado en SVG por capas (`guzki.js`); `node tools/guzki-sheet.js` genera una hoja con todas sus caras.

## Ampliación B1 y B2
* Se incorporan 12 unidades intermedias con gramática explicada, vocabulario, frases, diálogos con preguntas, ejercicios y tareas de escritura: pasado narrativo; conectores temporales; relativas; estilo indirecto; argumentación; obligación y consejo; hipótesis; concesión; relativas complejas; inferencia; registro formal y síntesis.
* El material B1/B2 es original y de práctica; **no es un temario oficial ni ha sido revisado por un docente nativo**. Las formas avanzadas pueden variar según contexto y variedad; conviene contrastarlas antes de usarlas como modelo evaluativo.

## Repaso de verbos
* «Conjugaciones: repaso completo» genera una pregunta por forma de todas las tablas y por cada una de las seis personas, sin repetir dentro de la ronda.
* El repaso de habitual/futuro cubre cada verbo una vez por forma; el de finalidad cubre -tzera y -tzeko una vez por verbo.

## Voz y pronunciación
* **Audio integrado:** los controles de escucha usan síntesis de voz del navegador o del dispositivo (solicitud `eu-ES`), y pueden usar clips locales si se añaden a `audio/`. La app no trae grabaciones ni un paquete de voz eu-ES: hay que instalar una voz de euskera compatible en el sistema. La voz, disponibilidad y pronunciación dependen del dispositivo.
* **Estado de la prueba:** las pruebas automatizadas verifican que el código y los controles de audio se cargan; no prueban que un dispositivo emita audio ni certifican pronunciación vasca. Pulsa «Probar voz en euskera» en Ajustes y confirma manualmente. No se ha probado aquí reproducción audible en hardware.
  1. `node tools/export-phrases.js` → crea `phrases.tsv` (clave + texto).
  2. Genera/graba el audio de cada línea y guárdalo como `audio/<clave>.mp3`.
  3. `node tools/make-audio-index.js` → `audio/index.json`. La app lo usará automáticamente.
* **Pronunciación:** el micrófono transcribe lo que dices (eu-ES) y se compara con la frase objetivo (≥ 72 % de similitud = correcto, palabra a palabra en verde/rojo).
  Es un indicador útil, no una evaluación fonética profesional. Si tu dispositivo no reconoce euskera hay modo de autoevaluación.

## Límites a tener en cuenta
* Contenido **original**, inspirado en descriptores de nivel A1–B2 del MCER para euskera. **No es material oficial de HABE** ni garantiza el aprobado:
  practica además con los modelos de examen oficiales y con un profesor/hablante, sobre todo la expresión escrita y oral.
* El simulacro es orientativo (formato, duración y puntuación oficiales los fija HABE).
* Revisa el contenido con un docente de euskera antes de usarlo como única fuente.

## Estructura
`core.js` lógica (pruebas automatizadas con Node) · `content_*.js` unidades · `app.js` interfaz · `sw.js` offline · `tools/` utilidades de audio · `test.js`, `smoke.js` pruebas (`npm test`).
