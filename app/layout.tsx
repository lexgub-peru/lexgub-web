import './globals.css';

export const metadata = { title: 'LEXGUB PERÚ', description: 'Plataforma jurídica' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{
        margin: 0, fontFamily: 'Segoe UI, Roboto, sans-serif',
        background: '#f7f9fc', color: '#333',
        minHeight: '100vh', display: 'flex', flexDirection: 'column'
      }}>
        <header style={{ backgroundColor: '#1a202c', color: '#fff', padding: '1rem', textAlign: 'center' }}>
          <h1>LEXGUB PERÚ</h1>
          <p>Plataforma institucional.</p>
        </header>

        <main style={{ flex: 1, padding: '2rem', textAlign: 'center' }}>
          {children}
        </main>

        <footer style={{ backgroundColor: '#1a202c', color: '#fff', textAlign: 'center', padding: '1rem' }}>
          © {new Date().getFullYear()} LEXGUB PERÚ — Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
