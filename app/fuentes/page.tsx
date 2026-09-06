import { officialPortals } from '../data/official-resources';
import OfficialResourceBrowser from './OfficialResourceBrowser';
import styles from './OfficialSources.module.css';

export const metadata = {
  title: 'Fuentes Oficiales',
  description: 'Centro de verificación jurídica de LexGub: El Peruano, SPIJ, Contraloría, TSRA, OECE y SERVIR, con normas, directivas, formatos, resoluciones y precedentes.',
};

export default function FuentesPage() {
  return <div className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.eyebrow}>FUENTES OFICIALES · VERIFICACIÓN CRUZADA</div>
      <h1>No basta encontrar una norma. Hay que saber de dónde viene, qué versión rige y dónde verificarla.</h1>
      <p>LexGub conecta cada vez más su Biblioteca con la publicación oficial, el texto sistematizado y la fuente institucional. El objetivo es que puedas leer, verificar y descargar sin depender de copias informales.</p>
    </header>

    <section className={styles.method} aria-label="Método de verificación LexGub">
      <div><strong>1. Publicación</strong><span>Contrasta la publicación en El Peruano cuando corresponda y fija la fecha de vigencia.</span></div>
      <div><strong>2. Texto vigente</strong><span>Revisa SPIJ o la versión integrada oficial para detectar modificatorias, derogaciones y concordancias.</span></div>
      <div><strong>3. Fuente especializada</strong><span>Vuelve a la entidad emisora para anexos, formatos editables, resoluciones, precedentes y documentos técnicos.</span></div>
    </section>

    <section>
      <div className={styles.libraryHeader}><div><div className={styles.eyebrow}>PORTALES RECTORES</div><h2>Seis puertas de entrada confiables.</h2></div><p>El Peruano y SPIJ ocupan un lugar central. A ellos se suman los repositorios oficiales especializados de Contraloría, OECE y SERVIR.</p></div>
      <div className={styles.portalGrid}>
        {officialPortals.map((p) => <a className={styles.portal} href={p.url} target="_blank" rel="noreferrer" key={p.id}>
          <div className={styles.portalTop}><span>{p.institution}</span><span className={styles.access}>{p.access === 'libre' ? 'ACCESO LIBRE' : 'ACCESO MIXTO'}</span></div>
          <h2>{p.name}</h2><p>{p.description}</p>
          <div className={styles.chips}>{p.capabilities.map((c) => <span key={c}>{c}</span>)}</div>
        </a>)}
      </div>
    </section>

    <section>
      <div className={styles.libraryHeader}><div><div className={styles.eyebrow}>BIBLIOTECA DOCUMENTAL</div><h2>Normas, técnicas, formatos, resoluciones y precedentes.</h2></div><p>Esta colección crecerá por capas. Primero incorporamos fuentes oficiales útiles para el trabajo real; luego indexaremos resoluciones y precedentes individualmente.</p></div>
      <OfficialResourceBrowser />
    </section>

    <section className={styles.verification}>
      <h2>Regla LexGub de verificación</h2>
      <p>Un botón “Descargar” no convierte por sí solo un documento en vigente. Antes de usarlo en un informe o decisión, verifica la fecha del hecho, la publicación oficial, las modificatorias y el estado actual. Para normas generales, consulta <a href="https://diariooficial.elperuano.pe/normas" target="_blank" rel="noreferrer">El Peruano</a> y <a href="https://spij.minjus.gob.pe/" target="_blank" rel="noreferrer">SPIJ</a>; para directivas, anexos y criterios especializados, revisa además la fuente de la entidad emisora.</p>
    </section>
  </div>;
}
