import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import './lexgub-brand.css';
import './lexgub-editorial.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

export const metadata = {
  title: {
    default: 'LEXGUB PERÚ | Control gubernamental y derecho público',
    template: '%s | LEXGUB PERÚ',
  },
  description: 'Plataforma jurídica independiente especializada en control gubernamental peruano, auditoría de cumplimiento, control simultáneo, control posterior, denuncias y gestión pública.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1928',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
