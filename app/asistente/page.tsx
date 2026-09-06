import LexGubAssistant from './LexGubAssistant';
import styles from './Asistente.module.css';

export const metadata = {
  title: 'Asistente LexGub · Beta',
  description:
    'Orientador documental de LexGub que cruza normas, jurisprudencia, fuentes oficiales, guías y herramientas con énfasis en privacidad, temporalidad y verificación.',
};

export default function AsistentePage() {
  return <div className={styles.page}>
    <header className={styles.hero}>
      <div>
        <div className={styles.eyebrow}>ASISTENTE LEXGUB · BETA · PRIVACIDAD POR DISEÑO</div>
        <h1>Una puerta inteligente al conocimiento que ya verificamos.</h1>
      </div>
      <p>
        Esta primera versión no inventa respuestas ni envía tu consulta a un modelo externo. Interpreta palabras clave y
        recupera rutas de investigación dentro del contenido público de LexGub. La evolución futura podrá incorporar IA con
        recuperación de fuentes, siempre manteniendo trazabilidad y protección de información sensible.
      </p>
    </header>

    <LexGubAssistant />
  </div>;
}
