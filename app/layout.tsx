import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: {
    default: 'LEXGUB PERÚ | Control gubernamental y derecho público',
    template: '%s | LEXGUB PERÚ',
  },
  description: 'Plataforma jurídica independiente especializada en control gubernamental peruano, auditoría de cumplimiento, control simultáneo, control posterior, denuncias y gestión pública.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          <div className="footerInner">
            <div><strong>LEXGUB PERÚ</strong><span>Control gubernamental · Derecho público · Gestión pública</span></div>
            <div className="footerLinks"><a href="/normativa">Normativa</a><a href="/guias">Guías</a><a href="/contacto">Contacto</a></div>
          </div>
          <p className="footerDisclaimer">Plataforma jurídica independiente. No representa ni sustituye a la Contraloría General de la República ni a otra entidad pública. El contenido es informativo y debe contrastarse con la normativa oficial vigente y las circunstancias del caso concreto.</p>
          <div className="footerBottom">© {new Date().getFullYear()} LEXGUB PERÚ · Todos los derechos reservados.</div>
        </footer>
      </body>
    </html>
  );
}
