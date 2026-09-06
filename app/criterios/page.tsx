import type { Metadata } from 'next';
import styles from './Criterios.module.css';

export const metadata: Metadata = {
  title: 'Criterios LexGub',
  description: 'Criterios editoriales de LEXGUB PERÚ sobre temporalidad normativa, evidencia, participación y delimitación de instrumentos de control.',
};

const criterios = [
  {
    number: '001',
    id: 'temporalidad',
    label: 'Temporalidad',
    title: 'La versión vigente hoy no demuestra qué regla gobernó el hecho.',
    body:
      'Antes de aplicar una ley, reglamento o directiva, fija la fecha o periodo de la conducta y reconstruye la versión normativa correspondiente. Las modificatorias posteriores y las disposiciones transitorias pueden cambiar por completo el análisis.',
    rule:
      'Regla de trabajo: fecha del hecho → versión aplicable → disposiciones transitorias → recién después, contraste jurídico.',
  },
  {
    number: '002',
    id: 'inferencia',
    label: 'Evidencia',
    title: 'Una inferencia debe mostrarse como razonamiento, no disfrazarse de dato.',
    body:
      'Un documento puede acreditar un dato y, a partir de varios datos, puede formularse una inferencia. Son niveles distintos. Una conclusión sólida identifica la evidencia de base y explica el razonamiento que conecta esa evidencia con la afirmación final.',
    rule:
      'Regla de trabajo: distingue siempre documento, hecho acreditado, indicio, inferencia y conclusión.',
  },
  {
    number: '003',
    id: 'participacion',
    label: 'Participación',
    title: 'El cargo identifica un posible deber; no prueba por sí solo la intervención.',
    body:
      'La individualización exige revisar funciones aplicables, actos concretos, conocimiento, oportunidad de actuación y evidencia de participación. Pertenecer a un comité, oficina o nivel jerárquico no reemplaza el análisis de la conducta efectivamente atribuible.',
    rule:
      'Regla de trabajo: deber funcional + acto concreto + evidencia de intervención + nexo con el hecho examinado.',
  },
  {
    number: '004',
    id: 'comision-investigadora',
    label: 'Competencia',
    title: 'Un informe de comisión investigadora no sustituye por sí mismo un servicio de control.',
    body:
      'Un informe de una comisión investigadora puede constituir antecedente, fuente de información o insumo para evaluar hechos. Pero no adquiere automáticamente la naturaleza, metodología, garantías ni efectos de una auditoría de cumplimiento u otro servicio del Sistema Nacional de Control.',
    rule:
      'Regla de trabajo: identifica primero la naturaleza jurídica del documento y luego determina qué valor puede tener dentro del análisis de control.',
  },
];

export default function CriteriosPage() {
  return (
    <>
      <section className={styles.hero}>
        <span className={styles.kicker}>CRITERIOS LEXGUB · ANÁLISIS EDITORIAL</span>
        <h1>Reglas de razonamiento para no perder rigor en el caso concreto.</h1>
        <p>
          Criterios de trabajo construidos desde normativa, evidencia y práctica jurídica. No son precedentes vinculantes ni opiniones institucionales: son posiciones editoriales abiertas a revisión cuando cambie la fuente o aparezca mejor evidencia.
        </p>
      </section>

      <aside className={styles.notice}>
        <strong>Cómo leer esta sección.</strong> Un criterio LexGub no reemplaza la norma aplicable. Sirve para ordenar el análisis y hacer explícito el razonamiento que debe verificarse en cada expediente.
      </aside>

      <section className={styles.grid} aria-label="Criterios LexGub">
        {criterios.map((criterio) => (
          <article className={styles.card} id={criterio.id} key={criterio.number} data-number={criterio.number}>
            <div className={styles.cardTop}>
              <span className={styles.number}>CRITERIO {criterio.number}</span>
              <span className={styles.label}>{criterio.label}</span>
            </div>
            <h2>{criterio.title}</h2>
            <p>{criterio.body}</p>
            <div className={styles.rule}><strong>{criterio.rule}</strong></div>
          </article>
        ))}
      </section>

      <section className={styles.sources}>
        <span>FUENTES DE CONTRASTE</span>
        <h2>El criterio se sostiene solo mientras la fuente lo sostenga.</h2>
        <p>
          LexGub prioriza texto oficial, versión temporalmente aplicable y trazabilidad del razonamiento. Si una fuente cambia, el criterio debe revisarse.
        </p>
        <div className={styles.sourceLinks}>
          <a href="https://www.leyes.congreso.gob.pe/Documentos/Leyes/27785.pdf" target="_blank" rel="noreferrer">Ley N.° 27785 ↗</a>
          <a href="https://www.gob.pe/institucion/contraloria/informes-publicaciones/4301933-texto-integrado-normas-generales-de-control-gubernamental" target="_blank" rel="noreferrer">NGCG — texto integrado ↗</a>
          <a href="https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg" target="_blank" rel="noreferrer">Auditoría de Cumplimiento ↗</a>
          <a href="/normativa">Biblioteca Jurídica LexGub →</a>
        </div>
      </section>
    </>
  );
}
