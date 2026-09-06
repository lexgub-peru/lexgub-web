import {
  normalizeSearch,
  searchCatalog as baseCatalog,
  searchKinds as baseKinds,
  type SearchItem as BaseSearchItem,
  type SearchKind as BaseSearchKind,
} from './search-catalog';
import { officialResources } from './official-resources-v2';

export type SearchKind = BaseSearchKind | 'Fuente';
export type SearchItem = Omit<BaseSearchItem, 'kind'> & { kind: SearchKind };

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

export const searchCatalog: SearchItem[] = [...(baseCatalog as SearchItem[]), ...sourceItems];
export const searchKinds: SearchKind[] = [...baseKinds, 'Fuente'];

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

  if (item.kind === 'Norma' || item.kind === 'Fuente') score += 4;
  if (item.verified) score += 3;
  return score;
}
