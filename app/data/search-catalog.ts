import { normas } from './normativa-v2';

export type SearchKind =
  | 'Norma'
  | 'Guía'
  | 'Herramienta'
  | 'Glosario'
  | 'Criterio'
  | 'Columna'
  | 'Centro';

export type SearchItem = {
  id: string;
  kind: SearchKind;
  title: string;
  subtitle: string;
  href: string;
  keywords: string[];
  featured?: boolean;
  verified?: boolean;
};

const staticItems: SearchItem[] = [
  {
    id: 'centro-control',
    kind: 'Centro',
    title: 'Centro de control gubernamental',
    subtitle: 'Mapa de servicios de control, principios, evidencia y fuentes oficiales.',
    href: '/control-gubernamental',
    keywords: ['control gubernamental', 'sistema nacional de control', 'cgr', 'oci', 'servicios de control'],
    featured: true,
  },
  {
    id: 'guia-auditoria',
    kind: 'Guía',
    title: 'Auditoría de cumplimiento',
    subtitle: 'Ruta de trabajo: materia, criterio, evidencia, desviación, comentarios y cierre.',
    href: '/guias#auditoria-cumplimiento',
    keywords: ['auditoría', 'cumplimiento', 'desviación', 'evidencia', 'comentarios', 'informe'],
    featured: true,
  },
  {
    id: 'guia-aop',
    kind: 'Guía',
    title: 'Acción de Oficio Posterior',
    subtitle: 'Delimitación del hecho, evidencia disponible, criterio y seguimiento.',
    href: '/guias#aop',
    keywords: ['aop', 'acción de oficio posterior', 'control posterior', 'hecho irregular'],
    featured: true,
  },
  {
    id: 'guia-control-especifico',
    kind: 'Guía',
    title: 'Servicio de Control Específico',
    subtitle: 'Examen de hechos específicos con evidencia de presunta irregularidad.',
    href: '/guias#control-especifico',
    keywords: ['sce', 'control específico', 'hechos con presunta irregularidad', 'responsabilidad'],
  },
  {
    id: 'guia-simultaneo',
    kind: 'Guía',
    title: 'Control simultáneo',
    subtitle: 'Control concurrente, visita de control, orientación de oficio y situaciones adversas.',
    href: '/guias#control-simultaneo',
    keywords: ['control simultáneo', 'situación adversa', 'control concurrente', 'visita de control', 'orientación de oficio'],
    featured: true,
  },
  {
    id: 'guia-denuncias',
    kind: 'Guía',
    title: 'Denuncias, alertas e información ciudadana',
    subtitle: 'Competencia, concreción, verificabilidad, evidencia y decisión de actuación.',
    href: '/guias#denuncias',
    keywords: ['denuncia', 'alerta', 'hoja de recepción', 'gestión de denuncias', 'participación ciudadana'],
    featured: true,
  },
  {
    id: 'guia-contrataciones',
    kind: 'Guía',
    title: 'Revisión de contrataciones públicas',
    subtitle: 'Régimen temporal, expediente, selección, ejecución contractual y responsabilidades.',
    href: '/guias#contrataciones',
    keywords: ['contrataciones', 'ley 32069', 'ley 30225', 'oece', 'seace', 'expediente de contratación'],
    featured: true,
  },
  {
    id: 'herramienta-requerimiento',
    kind: 'Herramienta',
    title: 'Requerimiento de información útil',
    subtitle: 'Checklist para pedir documentos con una finalidad probatoria concreta.',
    href: '/herramientas',
    keywords: ['oficio', 'requerimiento', 'información', 'documentos', 'prueba', 'evidencia'],
  },
  {
    id: 'herramienta-matriz-hecho',
    kind: 'Herramienta',
    title: 'Matriz mínima del hecho',
    subtitle: 'Hecho, fecha, fuente, criterio, efecto e información faltante en una sola revisión.',
    href: '/herramientas',
    keywords: ['matriz', 'hecho', 'criterio', 'evidencia', 'efecto', 'participación'],
  },
  {
    id: 'herramienta-comentarios',
    kind: 'Herramienta',
    title: 'Evaluación de comentarios o aclaraciones',
    subtitle: 'Checklist para responder argumento por argumento y valorar nueva evidencia.',
    href: '/herramientas',
    keywords: ['comentarios', 'aclaraciones', 'descargos', 'evaluación', 'no desvirtúa', 'evidencia'],
  },
  {
    id: 'herramienta-aop',
    kind: 'Herramienta',
    title: 'Revisión de una AOP',
    subtitle: 'Control final de hecho, evidencia, criterio, consecuencia y recomendación.',
    href: '/herramientas',
    keywords: ['aop', 'acción de oficio posterior', 'checklist', 'informe', 'revisión'],
  },
  {
    id: 'herramienta-situacion-adversa',
    kind: 'Herramienta',
    title: 'Situación adversa en control simultáneo',
    subtitle: 'Checklist para redactar una situación útil, objetiva y sustentada.',
    href: '/herramientas',
    keywords: ['situación adversa', 'control simultáneo', 'acción preventiva', 'acción correctiva'],
  },
  {
    id: 'herramienta-expediente-contratacion',
    kind: 'Herramienta',
    title: 'Mapa del expediente de contratación',
    subtitle: 'Documentos para reconstruir una contratación desde el requerimiento hasta el pago.',
    href: '/herramientas',
    keywords: ['expediente', 'contratación', 'requerimiento', 'bases', 'oferta', 'contrato', 'conformidad', 'pago'],
  },
  {
    id: 'glosario-control',
    kind: 'Glosario',
    title: 'Control gubernamental',
    subtitle: 'Supervisión, vigilancia y verificación de los actos y resultados de la gestión pública.',
    href: '/glosario',
    keywords: ['control gubernamental', 'sistema nacional de control', 'supervisión', 'vigilancia'],
  },
  {
    id: 'glosario-situacion-adversa',
    kind: 'Glosario',
    title: 'Situación adversa',
    subtitle: 'Condición identificada en control simultáneo que puede afectar continuidad, resultado u objetivos.',
    href: '/glosario',
    keywords: ['situación adversa', 'control simultáneo', 'riesgo'],
  },
  {
    id: 'glosario-evidencia',
    kind: 'Glosario',
    title: 'Evidencia de auditoría',
    subtitle: 'Información utilizada para sustentar conclusiones; exige suficiencia y apropiación.',
    href: '/glosario',
    keywords: ['evidencia', 'suficiente', 'apropiada', 'prueba', 'auditoría'],
  },
  {
    id: 'glosario-criterio',
    kind: 'Glosario',
    title: 'Criterio',
    subtitle: 'Norma, disposición, cláusula, parámetro o deber aplicable con el que se compara el hecho.',
    href: '/glosario',
    keywords: ['criterio', 'norma', 'deber', 'condición', 'hallazgo'],
  },
  {
    id: 'glosario-condicion',
    kind: 'Glosario',
    title: 'Condición',
    subtitle: 'Hecho o situación determinada a partir de evidencia y descrita objetivamente.',
    href: '/glosario',
    keywords: ['condición', 'hecho', 'desviación', 'hallazgo'],
  },
  {
    id: 'glosario-indicio',
    kind: 'Glosario',
    title: 'Indicio',
    subtitle: 'Dato o circunstancia que permite formular una hipótesis, sin acreditar por sí solo el hecho final.',
    href: '/glosario',
    keywords: ['indicio', 'hipótesis', 'prueba', 'evidencia'],
  },
  {
    id: 'glosario-inferencia',
    kind: 'Glosario',
    title: 'Inferencia',
    subtitle: 'Conclusión razonada obtenida a partir de hechos o indicios y que debe explicitarse.',
    href: '/glosario',
    keywords: ['inferencia', 'razonamiento probatorio', 'hechos', 'indicios'],
  },
  {
    id: 'criterio-temporalidad',
    kind: 'Criterio',
    title: 'La versión vigente hoy no demuestra qué regla gobernó el hecho',
    subtitle: 'Criterio LexGub 001 · Temporalidad normativa y reconstrucción del marco aplicable.',
    href: '/criterios#temporalidad',
    keywords: ['temporalidad', 'vigencia', 'modificatorias', 'fecha del hecho', 'norma aplicable'],
    featured: true,
  },
  {
    id: 'criterio-inferencia',
    kind: 'Criterio',
    title: 'Una inferencia debe mostrarse como razonamiento, no como dato',
    subtitle: 'Criterio LexGub 002 · Diferencia entre evidencia, hecho, indicio e inferencia.',
    href: '/criterios#inferencia',
    keywords: ['inferencia', 'evidencia', 'indicio', 'hecho acreditado', 'razonamiento probatorio'],
  },
  {
    id: 'criterio-participacion',
    kind: 'Criterio',
    title: 'El cargo no prueba por sí solo la intervención',
    subtitle: 'Criterio LexGub 003 · Individualización de deber, acto concreto y evidencia de participación.',
    href: '/criterios#participacion',
    keywords: ['participación', 'responsabilidad', 'cargo', 'deber funcional', 'individualización'],
  },
  {
    id: 'criterio-comision-investigadora',
    kind: 'Criterio',
    title: 'Un informe de comisión investigadora no sustituye por sí mismo un servicio de control',
    subtitle: 'Criterio LexGub 004 · Naturaleza jurídica, competencia y valor como insumo.',
    href: '/criterios#comision-investigadora',
    keywords: ['comisión investigadora', 'auditoría', 'servicio de control', 'competencia', 'informe'],
  },
  {
    id: 'columna-oxi-2026',
    kind: 'Columna',
    title: 'Excepción al informe previo en Obras por Impuestos: rapidez, control y riesgos',
    subtitle: 'Análisis del D.U. N.° 010-2026 y del desplazamiento temporal del control previo.',
    href: '/columna/oxi-informe-previo-el-nino-2026',
    keywords: ['obras por impuestos', 'oxi', 'informe previo', 'decreto de urgencia 010-2026', 'el niño'],
    featured: true,
  },
  {
    id: 'biblioteca',
    kind: 'Centro',
    title: 'Biblioteca Jurídica LexGub',
    subtitle: 'Normativa por materia, vigencia, versión integrada, modificatorias y fuente oficial.',
    href: '/normativa',
    keywords: ['biblioteca', 'normativa', 'directivas', 'resoluciones', 'leyes', 'vigencia'],
    featured: true,
  },
];

const normativeItems: SearchItem[] = normas.map((norma) => ({
  id: `norma-${norma.id}`,
  kind: 'Norma',
  title: norma.numero,
  subtitle: norma.titulo,
  href: `/normativa/${norma.id}`,
  keywords: [
    norma.tipo,
    norma.resumenLexGub,
    ...(norma.palabrasClave ?? []),
    ...(norma.modificatorias ?? []).flatMap((m) => [m.norma, m.sumilla ?? '']),
  ],
  verified: norma.verificacion === 'verificado',
  featured: ['ley-27785', 'ngcg-texto-integrado', 'ley-32069', 'ds-006-2026-jus'].includes(norma.id),
}));

export const searchCatalog: SearchItem[] = [...normativeItems, ...staticItems];

export const searchKinds: SearchKind[] = ['Norma', 'Guía', 'Herramienta', 'Glosario', 'Criterio', 'Columna', 'Centro'];

export function normalizeSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
    .trim();
}

export function scoreSearchItem(item: SearchItem, rawQuery: string): number {
  const query = normalizeSearch(rawQuery);
  if (!query) return item.featured ? 20 : 0;

  const title = normalizeSearch(item.title);
  const subtitle = normalizeSearch(item.subtitle);
  const keywords = normalizeSearch(item.keywords.join(' '));
  const tokens = query.split(/\s+/).filter(Boolean);

  let score = 0;
  if (title === query) score += 160;
  if (title.startsWith(query)) score += 100;
  if (title.includes(query)) score += 70;
  if (subtitle.includes(query)) score += 35;
  if (keywords.includes(query)) score += 30;

  for (const token of tokens) {
    if (title.includes(token)) score += 24;
    if (subtitle.includes(token)) score += 12;
    if (keywords.includes(token)) score += 10;
  }

  if (item.kind === 'Norma') score += 4;
  if (item.verified) score += 3;
  return score;
}
