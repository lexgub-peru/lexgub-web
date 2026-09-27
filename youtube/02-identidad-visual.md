# LexGub — Identidad visual para vídeo y redes

## Concepto

**«Línea de control»**. El símbolo es una **L** que, al cerrarse sobre sí misma,
forma una **G** cuadrada. Encima, separada, una barra en verde: la línea que se
verifica, el resaltado de un artículo, el punto de control. No hay balanzas,
columnas, mazos, escudos ni colores institucionales del Estado.

- **L + G**: LexGub. Se lee como letra a 24 px.
- **Geometría ortogonal**: rigor, estructura, norma.
- **Barra verde separada**: control / verificación. Es el mismo gesto que el
  resaltado de artículos en los vídeos, de modo que la marca y el formato
  editorial hablan el mismo idioma.

### Relación con la marca de la web

La web usa hoy el lockup tipográfico serif **LEXGUB │ PERÚ** sobre navy, marfil
y oro (`DESIGN_SYSTEM.md`). Esa estética es la que pediste evitar para vídeo
(azul marino de bufete). Por eso la identidad audiovisual es una **evolución**,
no un reemplazo silencioso: grafito + verde. Si la apruebas, conviene migrar
también la web para que exista una sola marca; esa decisión queda pendiente de
tu autorización y no se ha tocado la web.

## Paleta

| Token | Hex | Uso |
| --- | --- | --- |
| `ink` | `#0B1016` | Fondo principal (grafito, no navy). |
| `ink-2` | `#141B24` | Superficies, tarjetas en vídeo. |
| `line` | `#1F2A36` | Retícula, divisores. |
| `paper` | `#F1F3EE` | Texto y trazo del símbolo. |
| `muted` | `#8C97A5` | Texto secundario, fuentes citadas. |
| `signal` | `#2FD89B` | Acento: resaltado de artículos, «regla», verificación. |
| `alert` | `#FFB547` | Solo para «excepción / ojo». Nunca rojo (evita alarmismo). |

## Tipografía

- **Inter Tight** (500–800): titulares, miniaturas, rótulos.
- **IBM Plex Mono** (400–600): etiquetas, números de norma, marcas de tiempo.
  Refuerza lo «técnico/verificable».
- Ambas con licencia SIL OFL 1.1 (copias en `brand/fonts/`), uso comercial libre.

## Archivos

| Archivo | Medidas | Uso |
| --- | --- | --- |
| `brand/png/lexgub-avatar-1080.png` | 1080×1080 | Avatar YouTube, TikTok, Instagram, LinkedIn; marca de agua. |
| `brand/png/lexgub-banner-2560x1440.png` | 2560×1440 | Banner YouTube. Contenido dentro de la zona segura 1546×423. |
| `brand/src/lexgub-symbol.svg` | vectorial | Símbolo sin fondo (para fondos oscuros). |
| `brand/src/lexgub-symbol-app.svg` | vectorial | Símbolo con fondo: favicon, app. |
| `brand/src/thumb.html` | 1280×720 | Plantilla de miniatura parametrizable. |
| `miniaturas/*.png` | 1280×720 | Miniaturas de los 4 primeros vídeos. |

Regenerar cualquier pieza:

```bash
cd youtube/brand
NODE_PATH=$(npm root -g) node ../render.js src/banner.html png/lexgub-banner-2560x1440.png 2560 1440
NODE_PATH=$(npm root -g) node ../render-url.js src/thumb.html "k=KICKER&t=TITULAR%20%3Cem%3EACENTO%3C%2Fem%3E&s=SELLO" ../miniaturas/nueva.png 1280 720
```

## Reglas de uso

- El símbolo se usa siempre con la barra verde y nunca girado.
- Tamaño mínimo: 16 px.
- Sobre fondo claro: trazo en `ink`, barra en `#1FA774` (verde oscurecido para contraste).
- Miniaturas: máximo 6 palabras, una sola en verde. Sin caras de sorpresa, sin flechas rojas.
- Nunca mostrar logos, escudos ni la marca de CGR, OECE, SERVIR o el Tribunal
  Constitucional. Los documentos oficiales se muestran como texto/captura del
  documento, citando la fuente, no el logotipo institucional como elemento gráfico.
