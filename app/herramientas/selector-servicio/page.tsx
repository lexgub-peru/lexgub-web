import SelectorServicio from './SelectorServicio';
import styles from './SelectorServicio.module.css';

export const metadata = {
  title: 'Selector orientativo de servicio de control | LexGub',
  description:
    'Herramienta orientativa para ordenar el análisis entre control simultáneo, AOP, Servicio de Control Específico y Auditoría de Cumplimiento según momento, alcance y evidencia.',
};

export default function SelectorServicioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.eyebrow}>HERRAMIENTA LEXGUB · BETA</div>
        <h1>Selector orientativo de servicio de control</h1>
        <p>
          Ordena el problema antes de escoger una ruta. La herramienta no determina qué servicio corresponde ni sustituye la
          competencia, programación o evaluación profesional: te ayuda a identificar qué directivas debes contrastar.
        </p>
      </header>

      <SelectorServicio />
    </main>
  );
}
