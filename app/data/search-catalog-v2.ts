import {
  normalizeSearch,
  searchCatalog as baseCatalog,
  searchKinds as baseKinds,
  type SearchItem as BaseSearchItem,
  type SearchKind as BaseSearchKind,
} from './search-catalog';
import { officialResources } from './official-resources-v2';
import { jurisprudencia } from './jurisprudencia';

export type SearchKind = BaseSearchKind | 'Fuente' | 'Jurisprudencia';
export type SearchItem = Omit<BaseSearchItem, 'kind'> & { kind: SearchKind };

const centers: SearchItem[] = [
  {
    id: 'centro-fuentes-oficiales',
    kind: 'Centro',
    title: 'Fuentes Oficiales LexGub',
    subtitle: 'El Peruano, SPIJ, Contraloría, TSRA, OECE y SERVIR para verificar y descargar desde el origen.',
    href: '/fuentes',
    keywords: ['fuentes oficiales', 'el peruano', 'spij', 'cgr', 'oece', 'servir', 'descargar', 'verificar'],
    featured: true,
    verified: true,
  },
  {
    id: 'centro-tribunales',
    kind: 'Centro',
    title: 'Tribunales, precedentes y resoluciones',
    subtitle: 'TSRA, Tribunal de Contrataciones Públicas/Estado y Tribunal del Servicio Civil en un repertorio verificable.',
    href: '/tribunales',
    keywords: ['tsra', 'tcp', 'tce', 'osce', 'oece', 'tsc', 'servir', 'precedentes', 'sala plena', 'resoluciones'],
    featured: true,
    verified: true,
  },
  {
    id: 'centro-jurisprudencia',
    kind: 'Centro',
    title: 'Jurisprudencia LexGub',
    subtitle: 'Corte Suprema y Tribunal Constitucional: problema jurídico, criterio, hechos relevantes, temporalidad y utilidad práctica.',
    href: '/jurisprudencia',
    keywords: ['jurisprudencia', 'casación', 'corte suprema', 'tribunal constitucional', 'sentencia fuente', 'prueba', 'contraloría'],
    featured: true,
    verified: true,
  },
  {
    id: 'centro-asistente',
    kind: 'Centro',
    title: 'Asistente LexGub · Beta',
    subtitle: 'Orientador privado de consulta que cruza normas, jurisprudencia, fuentes, guías y herramientas sin enviar tu consulta a servicios externos.',
    href: '/asistente',
    keywords: ['asistente', 'bot', 'orientador', 'buscar', 'servicio de control', 'vigencia', 'consulta'],
    featured: true,
    verified: true,
  },
  {
    id: 'herramienta-selector-servicio',
    kind: 'Herramienta',
    title: 'Selector orientativo de servicio de control',
    subtitle: 'Ordena momento, alcance y evidencia para identificar qué directivas de control conviene contrastar.',
    href: '/herramientas/selector-servicio',
    keywords: ['selector', 'servicio de control', 'control simultáneo', 'aop', 'acción de oficio posterior', 'sce', 'control específico', 'auditoría de cumplimiento'],
    featured: true,
    verified: true,
  },
];

const sourceItems: SearchItem[] = officialResources.map((resource) => ({
  id: `fuente-${resource.id}`,
  kind: 'Fuente',
  title: resource.title,
  subtitle: `${resource.institution} · ${resource.subtitle}`,
  href: `/fuentes?q=${encodeURIComponent(resource.title)}`,
  keywords: [resource.institution, resource.type, resource.matter, resource.status, ...resource.tags],
  verified: true,
  featured: [
    'cgr-normas-control',
    'cgr-tecnicas-auditoria',
    'cgr-tsra-resoluciones',
    'cgr-tsra-ap-002-2024',
    'oece-tcp',
    'oece-tce-historico',
    'servir-precedentes',
    'servir-precedentes-2025',
    'spij-portal',
    'el-peruano-normas',
  ].includes(resource.id),
}));

const jurisprudenceItems: SearchItem[] = jurisprudencia.map((item) => ({
  id: `juris-${item.id}`,
  kind: 'Jurisprudencia',
  title: item.numero,
  subtitle: `${item.organo} · ${item.titulo}`,
  href: `/jurisprudencia/${item.id}`,
  keywords: [
    item.organo,
    item.sala,
    item.tipo,
    item.materia,
    item.titulo,
    item.problemaJuridico,
    item.criterio,
    item.temporalidad,
    item.alcance,
    ...item.temas,
    ...item.normasInterpretadas,
    ...item.utilidadPractica,
  ],
  verified: true,
  featured: ['cas-52028-2022-junin', 'cas-241-2019-ancash', 'tc-00026-2021-pi'].includes(item.id),
}));

export const searchCatalog: SearchItem[] = [
  ...centers,
  ...(baseCatalog as SearchItem[]),
  ...jurisprudenceItems,
  ...sourceItems,
];
export const searchKinds: SearchKind[] = [...baseKinds, 'Jurisprudencia', 'Fuente'];

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

  if (item.kind === 'Norma' || item.kind === 'Fuente' || item.kind === 'Jurisprudencia') score += 4;
  if (item.verified) score += 3;
  return score;
}
