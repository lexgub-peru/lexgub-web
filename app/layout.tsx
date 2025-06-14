import './globals.css';

export const metadata = {
  title: 'LEXGUB PERÚ',
  description: 'Plataforma jurídica y de control gubernamental',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{
        margin: 0,
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        background: '#f7f9fc',
        color: '#333',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {children}
        <footer style={{
          backgroundColor: '#1a202c',
          color: '#fff',
          textAlign: 'center',
          padding: '1rem',
          marginTop: '2rem'
        }}>
          © {new Date().getFullYear()} LEXGUB PERÚ — Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
