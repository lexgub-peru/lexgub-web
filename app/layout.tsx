import type { Metadata } from 'next';
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import './design-v3.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { siteConfig } from './lib/site';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: 'LEXGUB PERÚ | Control gubernamental, asesoría y conocimiento jurídico',
    template: '%s | LEXGUB PERÚ',
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  keywords: [
    'control gubernamental Perú',
    'asesoría control gubernamental',
    'consultoría derecho público',
    'Contraloría General de la República',
    'auditoría de cumplimiento',
    'acción de oficio posterior',
    'control simultáneo',
    'contrataciones públicas',
    'derecho administrativo',
    'gestión pública',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'LEXGUB PERÚ | Control gubernamental, asesoría y conocimiento jurídico',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary',
    title: 'LEXGUB PERÚ | Control gubernamental, asesoría y conocimiento jurídico',
    description: siteConfig.description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111824',
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    founder: {
      '@type': 'Person',
      name: siteConfig.author,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/buscar?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
