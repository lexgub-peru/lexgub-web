import JurisprudenciaBrowser from './JurisprudenciaBrowser';
import { jurisprudencia } from '../data/jurisprudencia';
import styles from './Jurisprudencia.module.css';

export const metadata = {
  title: 'Jurisprudencia LexGub',
  description:
    'Jurisprudencia peruana sistematizada para control gubernamental, contrataciones, responsabilidad administrativa y razonamiento probatorio: problema jurídico, criterio, temporalidad, utilidad práctica y fuente oficial.',
};

export default function JurisprudenciaPage() {
  const supreme = jurisprudencia.filter((j) => j.organo === 'Corte Suprema').length;
  const tc = jurisprudencia.filter((j) => j.organo === 'Tribunal Constitucional').length;

  return <div className={styles.page}>
    <header className={styles.hero}>
      <div>
        <div className={styles.eyebrow}>JURISPRUDENCIA LEXGUB · ANÁLISIS Y TRAZABILIDAD</div>
        <h1>No coleccionamos sentencias. Reconstruimos el criterio que sirve para trabajar.</h1>
      </div>
      <p>
        Cada ficha distingue el problema jurídico, el verdadero criterio del órgano jurisdiccional, los hechos relevantes,
        la norma interpretada, la temporalidad y la utilidad práctica. Los antecedentes de una sentencia no se presentan como
        si fueran el holding.
      </p>
    </header>

    <section className={styles.stats} aria-label="Cobertura del repertorio">
      <div><strong>{jurisprudencia.length}</strong><span>decisiones iniciales verificadas</span></div>
      <div><strong>{supreme}</strong><span>Corte Suprema</span></div>
      <div><strong>{tc}</strong><span>Tribunal Constitucional</span></div>
    </section>

    <JurisprudenciaBrowser />

    <section className={styles.method}>
      <div>
        <div className={styles.eyebrow}>MÉTODO DE LECTURA</div>
        <h2>Antes de citar una sentencia, identifica qué decidió realmente.</h2>
      </div>
      <ol>
        <li><strong>Hechos.</strong> Separa la imputación, la defensa y lo que finalmente quedó probado.</li>
        <li><strong>Problema jurídico.</strong> Determina qué cuestión llegó al órgano que emitió el pronunciamiento.</li>
        <li><strong>Criterio.</strong> Aísla la razón decisoria y no la confundas con argumentos de parte o instancias anuladas.</li>
        <li><strong>Fuerza.</strong> Distingue precedente, sentencia fuente, casación relevante y resolución de caso concreto.</li>
        <li><strong>Temporalidad.</strong> Verifica la norma vigente cuando ocurrieron los hechos y cuándo se emitió la decisión.</li>
        <li><strong>Uso auditor.</strong> Traduce la sentencia en preguntas de revisión, no en conclusiones automáticas de responsabilidad.</li>
      </ol>
    </section>
  </div>;
}
