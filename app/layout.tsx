import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'LEXGUB PERÚ',
  description: 'Plataforma privada de inteligencia jurídica especializada en derecho público, control gubernamental y gestión pública peruana.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} LEXGUB PERÚ · Plataforma jurídica independiente.</footer>
      </body>
    </html>
  );
}
