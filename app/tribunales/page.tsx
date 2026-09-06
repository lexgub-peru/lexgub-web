import Link from 'next/link';
import TribunalBrowser from './TribunalBrowser';
import styles from '../fuentes/OfficialSources.module.css';

export const metadata = {
  title: 'Tribunales administrativos, precedentes y resoluciones',
  description: 'Repertorio LexGub de resoluciones, precedentes administrativos y acuerdos de Sala Plena del TSRA, Tribunal de Contrataciones y Tribunal del Servicio Civil, con fuente oficial.',
};

const tribunals = [
  {
    acronym: 'TSRA',
    title: 'Tribunal Superior de Responsabilidades Administrativas',
    institution: 'Contraloría General de la República',
    text: 'Resoluciones y precedentes administrativos de observancia obligatoria en responsabilidad administrativa funcional.',
    href: 'https://doc.contraloria.gob.pe/tsra/web/index.html',
  },
  {
    acronym: 'TCP / TCE',
    title: 'Tribunal de Contrataciones Públicas',
    institution: 'OECE · histórico OSCE',
    text: 'Resoluciones sobre recursos de apelación, procedimientos sancionadores y Acuerdos de Sala Plena, con separación del régimen vigente e histórico.',
    href: 'https://www.gob.pe/institucion/oece/colecciones/68030-resoluciones-del-tribunal-de-contrataciones-publicas',
  },
  {
    acronym: 'TSC',
    title: 'Tribunal del Servicio Civil',
    institution: 'SERVIR',
    text: 'Resoluciones de las Salas y precedentes administrativos sobre servicio civil, PAD, prescripción, notificación, nulidad y otras materias.',
    href: 'https://www.gob.pe/institucion/servir/tema/tribunal-del-servicio-civil',
  },
];

export default function TribunalesPage() {
  return <div className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.eyebrow}>TRIBUNALES ADMINISTRATIVOS · PRECEDENTES · RESOLUCIONES</div>
      <h1>El criterio importa tanto como la norma, pero no todos los pronunciamientos tienen la misma fuerza.</h1>
      <p>LexGub separa resoluciones individuales, precedentes de observancia obligatoria, acuerdos de Sala Plena y simples repositorios de consulta. Cada entrada conserva su vínculo a la fuente institucional para verificar y descargar.</p>
    </header>

    <section className={styles.portalGrid} aria-label="Tribunales administrativos">
      {tribunals.map((t) => <a className={styles.portal} href={t.href} target="_blank" rel="noreferrer" key={t.acronym}>
        <div className={styles.portalTop}><span>{t.institution}</span><span className={styles.access}>{t.acronym}</span></div>
        <h2>{t.title}</h2><p>{t.text}</p>
        <div className={styles.chips}><span>Fuente oficial</span><span>PDF</span><span>Búsqueda</span></div>
      </a>)}
    </section>

    <section>
      <div className={styles.libraryHeader}>
        <div><div className={styles.eyebrow}>REPERTORIO VERIFICADO</div><h2>Busca por tribunal, materia o criterio.</h2></div>
        <p>La primera capa prioriza precedentes útiles y los compendios oficiales de resoluciones. Las decisiones especialmente relevantes irán adquiriendo fichas individuales de análisis.</p>
      </div>
      <TribunalBrowser />
    </section>

    <section className={styles.verification}>
      <h2>¿Buscas Corte Suprema o Tribunal Constitucional?</h2>
      <p>
        La jurisprudencia judicial vive en una capa distinta. Allí LexGub reconstruye problema jurídico, criterio, hechos relevantes,
        temporalidad y utilidad práctica sin confundir los antecedentes de una sentencia con lo que realmente decidió el órgano jurisdiccional.{' '}
        <Link href="/jurisprudencia"><strong>Abrir Jurisprudencia LexGub →</strong></Link>
      </p>
    </section>

    <section className={styles.verification}>
      <h2>Fuerza jurídica: no confundir categorías</h2>
      <p>Que una resolución sea relevante no significa que sea precedente vinculante. LexGub solo utilizará expresiones como “observancia obligatoria” o “precedente” cuando la fuente oficial así lo identifique. Los demás pronunciamientos se presentan como resoluciones o criterios de consulta, respetando su naturaleza jurídica.</p>
    </section>
  </div>;
}
