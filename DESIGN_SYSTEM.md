# LEXGUB PERÚ — Design System V5

Sistema visual único del proyecto. Sustituye las capas `globals + design-v3 + design-v4`,
que se consolidaron en `app/globals.css`.

## 1. Regla de color

| Rol | Significado | Token |
| --- | --- | --- |
| Navy | Conocimiento, auditores, institucionalidad | `--navy` `#071B2D`, `--navy-2` `#102E49`, `--navy-deep` `#04121F` |
| Vino | Autoridades, decisiones, asesoría | `--wine` `#74172B`, `--wine-deep` `#52101F`, `--wine-bright` `#8F2A3E` |
| Oro | Jerarquía, detalle, marca | `--gold` `#C8A35D`, `--gold-light` `#E0C584`, `--gold-dark` `#8A6526` |
| Marfil | Claridad editorial | `--ivory` / `--bg` `#F8F5EE`, `--surface` `#FFFDFC` |

Texto: `--ink` `#172333`, secundario `--muted` `#65717D`. Líneas: `--line` `#E0DACE`.

Los gradientes son sutiles y siempre dentro de una misma familia. El oro nunca
se usa como fondo extenso: es acento, filete y jerarquía.

## 2. Tipografía

- Titulares: **Source Serif 4** (`--font-serif`).
- Texto y metadatos: **IBM Plex Sans** (`--font-sans`).
- Escala fluida por tokens: `--fs-hero`, `--fs-h1`, `--fs-h2`, `--fs-h3`, `--fs-dek`.

Los tamaños se definen con `clamp()`, de modo que el `h1` de portada va de
33,6 px en 390 px a 64,8 px en 1440 px sin saltos.

## 3. Marca

`app/components/Brand.tsx` expone tres variantes:

| Variante | Uso |
| --- | --- |
| `<LexGubIsotipo />` | Solo el gallo. Favicon, redes, usos reducidos. |
| `<LexGubBrand />` | Lockup completo con bajada institucional. |
| `<LexGubBrand compact />` | Una línea, para barra de navegación y pie. |

El gallo se construye con tres planos: cuerpo (navy sobre claro, marfil sobre
oscuro), cola y pico en oro, cresta en vino. Sin escudo, sin balanza y sin
efectos tridimensionales. La prop `tone` adapta el cuerpo al fondo.

## 4. Arquitectura de audiencias

Dos rutas de entrada, visualmente distintas y de la misma marca:

- `/auditores` — identidad navy, organizada por el flujo real del trabajo de control.
- `/autoridades` — identidad vino, organizada por preguntas reales y momentos del control.

La orientación de `/autoridades` es preventiva y lícita: responder correctamente,
conservar evidencia, ordenar documentación y comprender el procedimiento. El
sistema no orienta a ocultar información, alterar documentos ni obstruir el control.

Los contenidos reutilizables declaran audiencia (`auditores` | `autoridades` |
`ambos`); ver `app/data/pildoras.ts`.

## 5. Componentes de portada

| Clase | Función |
| --- | --- |
| `.v5Hero` | Cabecera con buscador protagonista y búsquedas frecuentes. |
| `.v5Rutas` / `.v5Ruta` | Las dos tarjetas de entrada, en navy y vino. |
| `.v5Split` | Rejilla principal + columna lateral. |
| `.v5Modulos` | Los seis módulos de capacidades. |
| `.v5Fundador` | Ficha del fundador, retrato contenido. |
| `.v5Temas` | Tarjetas editoriales con etiqueta por audiencia. |
| `.v5Servicios` | Servicios sin promesa de resultado. |
| `.v5Fuentes` | Franja de fuentes oficiales, solo texto. |

## 6. Reglas de contenido

- No se enlaza ninguna ruta inexistente: el menú solo apunta a páginas reales.
- No hay acceso ni registro simulados; el CTA de la barra es «Solicitar asesoría».
- Las fuentes oficiales se citan por nombre, nunca con sus escudos o logos, y
  siempre acompañadas del aviso de independencia.
- No se publican testimonios, cifras de casos, años de experiencia ni
  afiliaciones institucionales.

## 7. Responsive

Verificado en 390, 412, 430, 768, 1024 y 1440 px, sin desbordamiento horizontal.

En móvil la portada se reordena a: hero, buscador, auditores, autoridades,
módulos, fundador, temas, servicios, fuentes y pie. El menú principal pasa a
cajón por debajo de 1240 px, dado que son once destinos.
