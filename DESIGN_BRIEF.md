# LEXGUB PERÚ — Brief de rediseño frontend

## Contexto
LEXGUB PERÚ es una plataforma jurídica independiente especializada en control gubernamental, auditoría, contrataciones públicas y gestión pública peruana. No pertenece a la Contraloría General de la República ni a otra entidad pública.

## Objetivo del rediseño
Mejorar de forma importante la experiencia visual y la usabilidad sin perder seriedad jurídica. Debe sentirse como un producto profesional peruano de alto nivel, pensado para auditores, abogados, funcionarios y servidores públicos.

## Principios visuales
- Sobrio, elegante, profesional y moderno.
- Evitar estética genérica de plantilla SaaS o "AI slop".
- Priorizar legibilidad, jerarquía visual y navegación clara.
- No copiar la identidad visual oficial de la Contraloría ni de otras entidades públicas.
- Usar una paleta propia basada en azul profundo, marfil/blanco cálido y acento dorado/cobre discreto.
- Buena experiencia móvil primero, porque una parte importante del uso será desde Android.
- Accesibilidad: contraste suficiente, tamaños legibles, foco visible, navegación clara.

## Arquitectura que debe conservarse
Rutas existentes relevantes:
- /
- /control-gubernamental
- /guias
- /normativa
- /herramientas
- /glosario
- /contacto

No eliminar contenido jurídico. Se puede reorganizar visualmente, resumir tarjetas y mejorar la navegación, pero no cambiar criterios legales ni inventar normativa.

## Portada deseada
Debe comunicar inmediatamente:
1. Qué es LexGub.
2. Para quién sirve.
3. Qué problemas resuelve.
4. Acceso directo a Control Gubernamental, Guías, Normativa y Herramientas.

Evitar una portada demasiado vacía. Incluir una sección de acceso rápido y un bloque tipo "Centro de consulta" con las materias principales.

## Centro de Control Gubernamental
Debe ser el corazón del producto. Crear una experiencia de navegación por tarjetas o categorías para:
- Auditoría de Cumplimiento
- Acción de Oficio Posterior
- Servicio de Control Específico
- Control Simultáneo
- Denuncias y alertas
- Contrataciones públicas
- Análisis probatorio
- Responsabilidad y revisión jurídica

## Normativa
La sección debe diferenciar claramente:
- Norma base
- Directivas y manuales
- Modificatorias
- Fuente oficial
- Estado/advertencia de vigencia cuando corresponda

Diseñar tarjetas o fichas normativas limpias, con un botón visible "Ver fuente oficial".

## Herramientas
Presentar checklists y matrices como utilidades prácticas. Ejemplos:
- Checklist de requerimiento de información
- Matriz de hechos y evidencia
- Revisión de comentarios
- Checklist AOP
- Situaciones adversas
- Expediente de contratación

## Navegación
Crear una cabecera responsive de alta calidad. En móvil debe usar menú hamburguesa o navegación compacta. El usuario nunca debe sentirse perdido.

## Footer
Mantener aviso visible de independencia:
"LEXGUB PERÚ es una plataforma jurídica independiente. No pertenece ni representa a la Contraloría General de la República ni a otra entidad pública. Verifique siempre la vigencia y fuente oficial de la normativa aplicable."

## Reglas técnicas
- Proyecto Next.js 16 + React 19 + TypeScript estricto.
- No degradar el build.
- No introducir dependencias pesadas sin necesidad.
- Preferir CSS limpio y componentes reutilizables.
- Mantener responsive design.
- Ejecutar npm install y npm run build antes de finalizar.
- Trabajar únicamente sobre la rama `claude-redesign`.
- No hacer merge a `main`.
- Al terminar, crear un Pull Request hacia `main` con resumen de cambios.

## Resultado esperado
Una web que se vea como una plataforma jurídica profesional real, no como un prototipo. Debe transmitir autoridad técnica, independencia, claridad y especialización en control gubernamental peruano.