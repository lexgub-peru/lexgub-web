import Navbar from '../components/Navbar';

export default function Normativa() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Normativa</h2>
        <ul>
          <li><a href="https://www.osce.gob.pe" target="_blank" rel="noopener noreferrer">Ley de Contrataciones del Estado – OSCE</a></li>
          <li><a href="https://www.gob.pe/contraloria" target="_blank" rel="noopener noreferrer">Directivas de la Contraloría</a></li>
          <li><a href="https://www.servir.gob.pe" target="_blank" rel="noopener noreferrer">Normativa de SERVIR</a></li>
        </ul>
      </main>
    </>
  );
}
