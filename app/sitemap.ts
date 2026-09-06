import type { MetadataRoute } from 'next';
import { normas } from './data/normativa-v2';
import { siteConfig } from './lib/site';

const staticRoutes = [
  '/',
  '/control-gubernamental',
  '/normativa',
  '/criterios',
  '/columna',
  '/columna/oxi-informe-previo-el-nino-2026',
  '/guias',
  '/herramientas',
  '/glosario',
  '/servicios',
  '/contacto',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date('2026-09-06T00:00:00-05:00');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: updatedAt,
    changeFrequency: index === 0 ? 'daily' : route.startsWith('/columna') || route === '/criterios' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/normativa' || route === '/columna' || route === '/criterios' ? 0.9 : 0.7,
  }));

  const normativeEntries: MetadataRoute.Sitemap = normas
    .filter((norma) => norma.verificacion === 'verificado')
    .map((norma) => ({
      url: `${siteConfig.url}/normativa/${norma.id}`,
      lastModified: updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [...staticEntries, ...normativeEntries];
}
