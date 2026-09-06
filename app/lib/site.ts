export const siteConfig = {
  name: 'LEXGUB PERÚ',
  shortName: 'LEXGUB',
  description:
    'Plataforma jurídica independiente especializada en control gubernamental peruano, auditoría de cumplimiento, control simultáneo, control posterior, contrataciones públicas y gestión pública.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lexgub-web-d7yc.vercel.app',
  locale: 'es_PE',
  language: 'es-PE',
  author: 'Marvyn Enrique Gallo Rojas',
} as const;
