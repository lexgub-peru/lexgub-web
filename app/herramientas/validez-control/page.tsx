import ValidezControl from './ValidezControl';
import styles from './ValidezControl.module.css';

export const metadata = {
  title: 'Mapa de validez y riesgos procedimentales | LexGub',
  description:
    'Herramienta orientativa para fijar servicio de control, temporalidad, fuente oficial y puntos de revisión procedimental antes de evaluar posibles vicios o riesgos de invalidez.',
};

export default function ValidezControlPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.eyebrow}>HERRAMIENTA LEXGUB · BETA</div>
        <h1>Mapa de validez y riesgos procedimentales</h1>
        <p>
          Antes de hablar de nulidad, fija el servicio de control, separa la fecha del hecho de la fecha de la actuación
          y ubica la versión normativa realmente aplicable. Esta herramienta ordena ese análisis y muestra qué puntos
          todavía requieren verificación.
        </p>
      </header>

      <ValidezControl />
    </div>
  );
}
