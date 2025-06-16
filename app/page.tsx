import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Bienvenido a LEXGUB PERÚ</h2>
        <p>Tu plataforma jurídica de consulta, normativa y análisis legal. MEGR</p>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e2e8f0', borderRadius: '8px' }}>
          <strong>📢 Aviso importante:</strong> Esta es una versión preliminar. Estamos trabajando para integrar funciones de inteligencia artificial que te ayuden con análisis legales automatizados.
        </div>
      </main>
    </>
  );
}
