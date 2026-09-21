import OpinionesOECE from './OpinionesOECE';
import styles from './OpinionesOECE.module.css';

export const metadata = {
  title: 'Opiniones Técnicas OECE | LexGub',
  description:
    'Explorador LexGub para localizar Opiniones Técnicas OECE por problema jurídico, tema y régimen normativo, con acceso directo a la fuente oficial.',
};

export default function OpinionesOECEPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.eyebrow}>HERRAMIENTA LEXGUB · CONTRATACIONES PÚBLICAS</div>
        <h1>Opiniones Técnicas OECE</h1>
        <p>
          Busca por el problema jurídico, no solo por el número de opinión. La herramienta te ayuda a ubicar criterios,
          identificar el régimen normativo que debes comprobar y llegar a la fuente oficial antes de usar una opinión en
          un informe, oficio, evaluación o análisis jurídico.
        </p>
      </header>

      <OpinionesOECE />
    </main>
  );
}
