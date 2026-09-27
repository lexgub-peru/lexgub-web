# LexGub — Sistema de producción

Objetivo: que tu intervención sea **aprobar o corregir**, no editar.

## Flujo

| Paso | Quién | Salida | Dónde |
| --- | --- | --- | --- |
| 1. Tema | Claude propone · tú apruebas | Fila en `03-temas.md` | repo |
| 2. Investigación y fuentes | Claude | Matriz de verificación con URL oficial | `04-guiones.md §5` |
| 3. Guion | Claude | Guion con tiempos, VO, pantalla | `04-guiones.md` |
| 4. **Aprobación jurídica** | **Tú** | Matriz sin «P» | — |
| 5. Narración | Tú (grabas con el móvil) **o** voz sintética aprobada | `vo.wav` | `produccion/<pieza>/` |
| 6. Diseño visual y animación | Claude (HTML → vídeo con Chromium) | `animatic.html` → `.webm` | `produccion/<pieza>/` |
| 7. Montaje final (voz + imagen + música + subtítulos) | Claude, con ffmpeg | `final.mp4` + `.srt` | `produccion/<pieza>/` |
| 8. Miniatura, título, descripción | Claude | PNG + texto | `miniaturas/`, guion |
| 9. **Publicación** | **Tú** (o Claude con navegador vinculado) | Vídeo programado | YouTube Studio |

El prototipo `produccion/s1/s1-animatic-borrador.webm` (1080×1920, 54 s, sin voz)
demuestra los pasos 6 y 8 funcionando: escenas, resaltado, línea de tiempo,
bifurcación de rutas, subtítulos quemados y cierre de marca, generados sin
edición manual. Tiene la marca «BORRADOR · SIN VOZ» y **no es publicable**.

## Narración: recomendación

Recomiendo **tu propia voz** grabada con el móvil, sin aparecer en cámara:

- Da credibilidad profesional que una voz sintética no da en contenido jurídico.
- Evita la etiqueta de «contenido alterado o sintético» que YouTube exige
  declarar cuando corresponde.
- Coste cero y 5 minutos por pieza: lees el guion aprobado en un cuarto con
  cortinas o ropa alrededor, a 20 cm del móvil, y me envías el audio.

Con el audio, sincronizo subtítulos y escenas a la voz real.

## Especificaciones

| | Short | Vídeo principal |
| --- | --- | --- |
| Resolución | 1080×1920, 30 fps | 1920×1080, 30 fps |
| Duración | 30–60 s | 3–5 min |
| Subtítulos | Quemados (centro-bajo, fuera de la zona de botones) + `.srt` | Solo `.srt` (activables) |
| Márgenes seguros Short | 80 px laterales; nada crítico en los 330 px inferiores ni 220 px superiores | — |
| Música | Biblioteca de audio de YouTube (gratuita, sin atribución), −28 a −32 LUFS bajo la voz | Igual |
| Efectos | Clic suave al aparecer celdas; «whoosh» corto en cambio de escena; nada más | Igual |
| Ritmo | Cambio visual cada 2–4 s | Cada 4–8 s |
| Voz | −14 LUFS integrado, pico −1 dBTP | Igual |

## Reglas editoriales en pantalla

- Documentos reales: solo públicos y de fuente oficial; se muestra el número de
  norma y la fuente. Nunca expedientes, oficios ni informes con datos personales.
- Casos: siempre anonimizados («Servidor A», «Entidad X»).
- Nada de logos o escudos institucionales como elemento gráfico.
- Una cita literal en pantalla solo si se copió de la fuente oficial.
- Aviso de independencia en la descripción de cada vídeo y en la tarjeta final
  del vídeo principal.

## Herramientas (todas gratuitas / ya disponibles)

- Chromium + Playwright: animación y render (ya en el entorno).
- ffmpeg: mezcla de audio, subtítulos, exportación MP4 (H.264 + AAC).
- Biblioteca de audio de YouTube: música y efectos.

No se contrata ninguna herramienta externa ni prueba gratuita.
