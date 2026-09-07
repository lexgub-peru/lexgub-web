import type { MetadataRoute } from 'next';
import { normas } from './data/normativa-v2';
import { jurisprudencia } from './data/jurisprudencia';
import { siteConfig } from './lib/site';

const staticRoutes = [
  '/',
  '/auditores',
  '/autoridades',
  '/lexgub',
  '/control-gubernamental',
  '/normativa',
  '/jurisprudencia',
  '/radar',
  '/fuentes',
  '/tribunales',
  '/criterios',
  '/columna',
  '/columna/oxi-informe-previo-el-nino-2026',
  '/guias',
  '/herramientas',
  '/herramientas/selector-servicio',
  '/glosario',
  '/pildoras',
  '/asistente',
  '/servicios',
  '/contacto',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date('2026-09-07T00:00:00-05:00');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: updatedAt,
    changeFrequency:
      index === 0
        ? 'daily'
        : route.startsWith('/columna') || ['/criterios', '/fuentes', '/tribunales', '/jurisprudencia', '/radar'].includes(route)
          ? 'weekly'
          : 'monthly',
    priority:
      route === '/'
        ? 1
        : ['/auditores', '/autoridades'].includes(route)
          ? 0.95
          : ['/lexgub', '/normativa', '/jurisprudencia', '/radar', '/fuentes', '/tribunales', '/columna', '/criterios'].includes(route)
            ? 0.9
            : route === '/asistente' || route === '/pildoras' || route === '/herramientas/selector-servicio'
              ? 0.75
              : 0.7,
  }));

  const normativeEntries: MetadataRoute.Sitemap = normas
    .filter((norma) => norma.verificacion === 'verificado')
    .map((norma) => ({
      url: `${siteConfig.url}/normativa/${norma.id}`,
      lastModified: updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  const jurisprudenceEntries: MetadataRoute.Sitemap = jurisprudencia
    .filter((item) => item.verificado)
    .map((item) => ({
      url: `${siteConfig.url}/jurisprudencia/${item.id}`,
      lastModified: updatedAt,
      changeFrequency: 'monthly',
      priority: 0.82,
    }));

  return [...staticEntries, ...normativeEntries, ...jurisprudenceEntries];
}
