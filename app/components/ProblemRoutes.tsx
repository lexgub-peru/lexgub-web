import Link from 'next/link';
import {
  IconAlert,
  IconChecklist,
  IconClock,
  IconContract,
  IconEvidence,
  IconScale,
} from './icons';
import styles from './ProblemRoutes.module.css';

const routes = [
  {
    eyebrow: 'VIGENCIA',
    title: '¿Qué norma regía en la fecha del hecho?',
    text: 'Reconstruye la versión aplicable, sus modificatorias y la fuente oficial antes de citar.',
    href: '/normativa',
    action: 'Abrir Biblioteca',
    icon: IconClock,
  },
  {
    eyebrow: 'CRITERIO',
    title: '¿Existe jurisprudencia sobre este problema?',
    text: 'Busca la razón decisoria, los hechos relevantes y el alcance real del pronunciamiento.',
    href: '/jurisprudencia',
    action: 'Ver Jurisprudencia',
    icon: IconScale,
  },
  {
    eyebrow: 'RUTA DE CONTROL',
    title: '¿Qué servicio de control debo contrastar?',
    text: 'Usa un selector orientativo para ordenar momento, alcance y evidencia sin reemplazar la decisión profesional.',
    href: '/herramientas/selector-servicio',
    action: 'Abrir selector Beta',
    icon: IconChecklist,
  },
  {
    eyebrow: 'EVIDENCIA',
    title: '¿La conclusión está realmente probada?',
    text: 'Separa documento, hecho acreditado, indicio e inferencia antes de atribuir participación o responsabilidad.',
    href: '/buscar?q=evidencia%20inferencia%20prueba',
    action: 'Explorar evidencia',
    icon: IconEvidence,
  },
  {
    eyebrow: 'CONTRATACIÓN',
    title: '¿Qué hizo realmente el comité o funcionario?',
    text: 'Reconstruye etapa, deber funcional, actuación concreta, régimen temporal y prueba de intervención.',
    href: '/buscar?q=contratacion%20comite%20participacion',
    action: 'Investigar el problema',
    icon: IconContract,
  },
  {
    eyebrow: 'ORIENTACIÓN',
    title: 'Tengo una duda, pero no quiero exponer mi caso.',
    text: 'El Asistente LexGub organiza una ruta sobre conocimiento público y recuerda no ingresar datos reservados.',
    href: '/asistente',
    action: 'Abrir Asistente',
    icon: IconAlert,
    featured: true,
  },
];

export default function ProblemRoutes() {
  return (
    <section className={styles.section} aria-labelledby="problem-routes-title">
      <div className={styles.heading}>
        <div>
          <span>EMPIEZA POR EL PROBLEMA</span>
          <h2 id="problem-routes-title">¿Qué necesitas resolver hoy?</h2>
        </div>
        <p>
          LexGub no obliga a pensar como está organizada una entidad. Entra por la pregunta de trabajo y desde allí conecta
          norma, jurisprudencia, fuente y herramienta.
        </p>
      </div>

      <div className={styles.grid}>
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.title}
              href={route.href}
              className={`${styles.card} ${route.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.icon}><Icon /></span>
                <span className={styles.eyebrow}>{route.eyebrow}</span>
              </div>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
              <strong>{route.action} <span aria-hidden="true">→</span></strong>
            </Link>
          );
        })}
      </div>

      <div className={styles.flow} aria-label="Flujo de conocimiento LexGub">
        <span>FUENTE OFICIAL</span><i>→</i><span>NORMA APLICABLE</span><i>→</i><span>CRITERIO</span><i>→</i><span>EVIDENCIA</span><i>→</i><span>HERRAMIENTA</span>
      </div>
    </section>
  );
}
