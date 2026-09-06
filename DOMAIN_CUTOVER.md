# LEXGUB PERÚ — Preparación para dominio propio

La aplicación ya está preparada para cambiar de la URL temporal de Vercel a un dominio propio sin reescribir rutas, sitemap o robots.

## Dominio objetivo

- Principal recomendado: `https://lexgub.com`
- Redirección recomendada: `https://www.lexgub.com` → `https://lexgub.com`
- Mantener la URL de Vercel como respaldo técnico, no como URL principal de difusión.

## Paso técnico clave

Antes del deployment definitivo con el dominio conectado, configurar en Vercel:

`NEXT_PUBLIC_SITE_URL=https://lexgub.com`

Esta variable alimenta automáticamente:

- `metadataBase`;
- Open Graph;
- datos estructurados;
- `robots.txt`;
- `sitemap.xml`;
- URLs institucionales y de jurisprudencia.

Después de guardar la variable, realizar un deployment de producción.

## Conexión del dominio

1. Comprar `lexgub.com` en Vercel o registrar el dominio con otro proveedor.
2. Abrir el proyecto `lexgub-web` → Settings → Domains.
3. Añadir `lexgub.com` y asignarlo a Production.
4. Añadir `www.lexgub.com` y configurarlo para redirigir al dominio principal.
5. No eliminar inmediatamente la URL `lexgub-web-d7yc.vercel.app`.
6. Esperar a que Vercel confirme DNS y SSL válidos.

## Verificación antes de anunciar el dominio

Comprobar:

- `/`
- `/lexgub`
- `/asistente`
- `/normativa`
- `/jurisprudencia`
- `/robots.txt`
- `/sitemap.xml`

Además verificar que los metadatos y fuentes absolutas usen `https://lexgub.com` y no el dominio temporal.

## Indexación

Después del cambio:

1. Crear/validar la propiedad `https://lexgub.com` en Google Search Console.
2. Enviar `https://lexgub.com/sitemap.xml`.
3. Solicitar indexación de Inicio, LexGub, Biblioteca, Jurisprudencia y artículos principales.
4. Mantener una sola URL canónica de difusión para evitar señales duplicadas.

## Principio

El cambio de dominio no es una migración de contenido: el proyecto, rutas y base jurídica permanecen en Vercel. Se cambia la identidad pública y las URLs absolutas de la aplicación.
