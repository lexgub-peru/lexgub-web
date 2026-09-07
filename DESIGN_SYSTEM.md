# LEXGUB PERÚ — Design System

Sistema visual único del proyecto. Toda la hoja de estilos vive en
`app/globals.css`; no se añaden capas nuevas encima.

---

## 1. Marca

### La decisión

El isotipo figurativo del gallo **se descartó**. Se probaron tres gestos
—cresta estilizada, perfil heráldico y pluma— renderizados a 44, 28, 20 y
14 px sobre marfil y sobre navy. Ninguno sobrevivía por debajo de 20 px sin
volverse ilustración: leían como garabato, mancha y hoja. Un símbolo que no
aguanta el tamaño de una pestaña del navegador no es una marca.

La identidad es, por tanto, **tipográfica**:

```
LEXGUB │ PERÚ
```

- **LEXGUB** — Source Serif 4, peso 700, interletrado 0,095 em.
- **Filete** — regla vertical dorada, 3 % de la altura de mayúscula, opacidad 0,82.
- **PERÚ** — Source Serif 4, peso 600, interletrado 0,175 em, 80 % de la altura de LEXGUB.
- Proporción del lockup: **8,2 : 1** (ancho / alto, incluido el aire del acento de la Ú).

Las letras se entregan como **trazados**, no como `<text>`. Un logotipo con
`<text>` cambia de forma si la tipografía no está disponible —un PDF, una
tarjeta, LinkedIn— y baila mientras la fuente carga. Los trazados se generaron
desde la propia Source Serif 4 con fontTools.

Un solo archivo sirve sobre cualquier fondo: «LEXGUB» hereda `currentColor` y
«PERÚ» toma `--brand-peru`.

### La marca reducida

Monograma **LG** en caja: navy, letras marfil, filete dorado interior. Es lo
que se usa cuando no cabe el lockup completo — favicon, avatar, sello.

### Componentes

| Componente | Uso |
| --- | --- |
| `<LexGubWordmark />` | El lockup. Marca principal. |
| `<LexGubMarca />` | Monograma LG en caja. |
| `<LexGubBrand />` | Lockup + bajada «DERECHO PÚBLICO PARA UN MEJOR ESTADO». |
| `<LexGubBrand compact />` | Lockup solo, una línea. Barra y pie. |

### Archivos

| Archivo | Contenido |
| --- | --- |
| `public/brand/lexgub-wordmark.svg` | Maestro: `currentColor` + `--brand-peru`. |
| `public/brand/lexgub-dark.svg` | Para fondo oscuro: marfil + oro. |
| `public/brand/lexgub-light.svg` | Para fondo claro: navy + oro oscuro. |
| `public/brand/lexgub-mark.svg` | Monograma LG en caja. Avatar y redes. |
| `public/brand/lexgub-monogram.svg` | Letras LG sueltas, para sellar documentos. |
| `app/icon.svg` | Favicon: el monograma. |

### Usos correctos

- Altura mínima del lockup: **14 px**. Por debajo, el monograma.
- El logotipo no se estira, no se inclina, no lleva sombra ni relieve.
- El filete dorado no se sustituye por una barra, un guion ni un punto.
- Sobre fotografía, solo la variante `dark` y sobre zona oscura y uniforme.
- No se combina con escudos, balanzas, columnas ni banderas.

---

## 2. Color

| Rol | Significado | Token |
| --- | --- | --- |
| Navy | Conocimiento, auditores, institucionalidad | `--navy` `#071B2D` · `--navy-2` `#102E49` · `--navy-deep` `#04121F` |
| Vino | Autoridades, decisiones, asesoría | `--wine` `#74172B` · `--wine-deep` `#52101F` · `--wine-bright` `#8F2A3E` |
| Oro | Jerarquía, detalle, marca | `--gold` `#C8A35D` · `--gold-light` `#E0C584` · `--gold-dark` `#8A6526` |
| Marfil | Claridad editorial | `--ivory` / `--bg` `#F8F5EE` · `--surface` `#FFFDFC` |

Texto: `--ink` `#172333`, secundario `--muted` `#65717D`. Líneas: `--line`
`#E0DACE`.

El oro nunca es fondo extenso: es acento, filete y jerarquía. `--gold-dark`
existe porque `--gold` no contrasta lo suficiente sobre marfil.

---

## 3. Tipografía

- Titulares y marca: **Source Serif 4** (`--font-serif`).
- Texto, navegación y metadatos: **IBM Plex Sans** (`--font-sans`).

| Token | Valor | 390 px | 1440 px |
| --- | --- | --- | --- |
| `--fs-hero` | `clamp(1.9rem, 4.4vw, 3.8rem)` | 30,4 px | 60,8 px |
| `--fs-h1` | `clamp(1.95rem, 4.4vw, 3.4rem)` | 31,2 px | 54,4 px |
| `--fs-h2` | `clamp(1.55rem, 3vw, 2.5rem)` | 24,8 px | 40 px |
| `--fs-h3` | `clamp(1.1rem, 1.6vw, 1.32rem)` | 17,6 px | 21,1 px |
| `--fs-dek` | `clamp(1rem, 1.2vw, 1.12rem)` | 16 px | 17,9 px |

Medidas de línea: titular de portada 20ch, entradilla 58ch, cuerpo editorial
74ch. Sin ellas el texto se estira y deja de leerse.

---

## 4. Superficie

| Token | Valor | Nota |
| --- | --- | --- |
| `--radius` | `8px` | Tarjetas y controles. |
| `--radius-lg` | `12px` | Bloques grandes. |
| `--shadow-card` | `0 10px 26px rgba(8,22,35,.05)` | Discreta. |
| `--shadow-card-hover` | `0 16px 38px rgba(8,22,35,.09)` | Discreta. |
| `--max` / `--wide` | `1240px` / `1380px` | Anchos de contenedor. |

La jerarquía la marcan el filete, el color y el espacio, no el relieve.

---

## 5. Cabecera

- Altura **68 px** (62 px por debajo de 700 px).
- La marca no se encoge nunca (`flex: 0 0 auto`). Sin esa regla la barra la
  comprimía hasta 0 px antes de dejar que los enlaces se desbordaran, y
  acababan pisándola.
- En móvil el lockup mide **21 px de alto → 172 px de ancho**, el 48 % del
  ancho útil a 390 px.
- Nueve destinos en la barra. Es el máximo que cabe a 1260 px junto a la
  marca, el buscador y el CTA. Por debajo de 1260 px pasan al cajón.
- «Inicio» no está en la barra: esa función la cumple la marca.
- El **cajón está disponible en todas las anchuras**, no solo en móvil: guarda
  el mapa completo del sitio, de modo que ninguna ruta depende de que quepa
  arriba. A partir de 900 px se despliega en tres columnas.
- El disparador del buscador pasa a solo icono por debajo de 1440 px: es lo
  que libera el ancho que necesitan los nueve enlaces.
- No hay acceso ni registro simulados. El CTA es «Solicitar asesoría».

---

## 6. Arquitectura de audiencias

Dos entradas, visualmente distintas y de la misma marca:

- `/auditores` — navy. Organizada por el flujo real del trabajo de control.
- `/autoridades` — vino. Organizada por preguntas reales y momentos del control.

La orientación de `/autoridades` es preventiva y lícita: responder
correctamente, conservar evidencia, ordenar documentación y comprender el
procedimiento. El sistema no orienta a ocultar información, alterar
documentos, retrasar actuaciones ni obstruir el control.

Los contenidos reutilizables declaran audiencia (`auditores` | `autoridades` |
`ambos`); ver `app/data/pildoras.ts`.

---

## 7. Componentes de portada

| Clase | Función |
| --- | --- |
| `.v5Hero` | Cabecera con buscador protagonista y búsquedas frecuentes. |
| `.v5Rutas` / `.v5Ruta` | Las dos tarjetas de entrada, en navy y vino. |
| `.v5Split` | Rejilla principal + columna lateral. |
| `.v5Modulos` | Los seis módulos de capacidades. |
| `.v5Fundador` | Ficha del fundador; retrato en óvalo con filete dorado. |
| `.v5Temas` | Tarjetas editoriales con etiqueta por audiencia. |
| `.v5Servicios` | Servicios sin promesa de resultado. |
| `.v5Fuentes` | Franja de fuentes oficiales, solo texto. |

---

## 8. Radar normativo

`/radar` es una **línea de tiempo de contenido ya verificado**, no un boletín
de novedades. `app/data/radar.ts` ordena cronológicamente las normas, sus
modificatorias y la jurisprudencia que ya están en el compendio, heredando de
cada ficha su marca `verificacion` y su enlace oficial. No consulta ninguna
fuente externa en tiempo de ejecución ni infiere fechas: lo que no se puede
interpretar queda al final, sin fecha inventada.

---

## 9. Reglas de contenido

- No se enlaza ninguna ruta inexistente: el menú solo apunta a páginas reales.
- Las fuentes oficiales se citan por nombre, nunca con sus escudos o logos, y
  siempre con el aviso de independencia.
- No se publican testimonios, cifras de casos, años de experiencia, cargos,
  reconocimientos ni afiliaciones.
- Un dato no verificado no se presenta como cierto: se marca.

---

## 10. Responsive

Verificado con Playwright en **390, 412, 430, 768, 1024 y 1440 px** sobre las
once rutas principales: **cero desbordamientos horizontales**.

Puntos de corte reales del sistema:

| Anchura | Qué cambia |
| --- | --- |
| ≥ 1440 px | El buscador muestra su etiqueta y el atajo ⌘K. |
| ≥ 1260 px | Los nueve enlaces se ven en la barra. |
| ≥ 900 px | El cajón se despliega en tres columnas. |
| ≤ 700 px | Marca a 21 px, cabecera a 62 px, pastillas más densas. |
| ≤ 560 px | El CTA «Solicitar asesoría» se repliega al cajón. |
