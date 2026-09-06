import { IconAlert, IconArrowRight, IconBook, IconClock, IconContract, IconEvidence, IconLandmark } from '../components/icons';

const guideSections = [
  {
    id: 'auditoria-cumplimiento',
    title: 'Auditoría de cumplimiento',
    badge: 'Control posterior',
    icon: IconBook,
    summary: 'Ruta de trabajo para examinar una materia y determinar su conformidad con la normativa, disposiciones internas y estipulaciones contractuales aplicables.',
    steps: [
      'Delimita materia a examinar, periodo, entidad, objetivos y alcance.',
      'Identifica criterios jurídicos específicos y vigentes para cada procedimiento.',
      'Diseña procedimientos que permitan obtener evidencia suficiente y apropiada; evita procedimientos que solo confirmen una hipótesis previa.',
      'Documenta la evidencia y su vínculo con cada hecho relevante.',
      'Si adviertes una desviación, construye condición, criterio, efecto y demás elementos exigidos por la normativa aplicable.',
      'Individualiza la participación a partir de funciones, actos concretos, conocimiento, oportunidad de actuación y evidencia; no solo por el cargo ocupado.',
      'Comunica los hechos conforme al procedimiento y evalúa los comentarios uno por uno, contrastándolos con la evidencia.',
      'Revisa coherencia entre matriz, comunicación, evaluación de comentarios, conclusiones y recomendaciones antes de cerrar el informe.',
    ],
    source: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
    sourceLabel: 'RC N.° 001-2022-CG — Directiva y Manual de Auditoría de Cumplimiento',
  },
  {
    id: 'aop',
    title: 'Acción de Oficio Posterior',
    badge: 'Control posterior',
    icon: IconClock,
    summary: 'Útil para hechos puntuales ya ocurridos cuando la información disponible permite advertir indicios de irregularidad y corresponde comunicar el resultado bajo su directiva específica.',
    steps: [
      'Define con precisión el hecho: qué ocurrió, cuándo, en qué operación y qué entidad intervino.',
      'Verifica que el hecho sea posterior y que el análisis pueda efectuarse con información disponible o razonablemente obtenible.',
      'Separa hechos comprobados de hipótesis, opiniones o afirmaciones del denunciante.',
      'Identifica la norma o deber concreto presuntamente vulnerado y su vigencia temporal.',
      'Explica de manera comprensible por qué el hecho puede afectar los intereses del Estado o la correcta gestión pública.',
      'Evita ampliar artificialmente la AOP a materias que exigen una auditoría o un servicio de control específico de mayor alcance.',
      'Verifica que el informe sea consistente con la evidencia citada y que sus recomendaciones se ajusten a la directiva.',
      'Realiza el seguimiento de las acciones comunicadas conforme a la normativa vigente.',
    ],
    source: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    sourceLabel: 'Directiva N.° 007-2023-CG/VCIC — Acción de Oficio Posterior',
  },
  {
    id: 'control-especifico',
    title: 'Servicio de Control Específico a Hechos con Presunta Irregularidad',
    badge: 'Control posterior',
    icon: IconEvidence,
    summary: 'Servicio dirigido al examen de hechos específicos con evidencia de presunta irregularidad, conforme a sus condiciones, fases y metodología particular.',
    steps: [
      'Verifica que existan hechos delimitados y evidencia que justifique la actuación, no solo sospechas generales.',
      'Elabora el análisis preliminar sin anticipar una conclusión definitiva de responsabilidad.',
      'Identifica personas, deberes funcionales y actos concretos solo cuando exista evidencia de vinculación.',
      'Planifica procedimientos dirigidos a probar o descartar cada elemento relevante del hecho.',
      'Mantén trazabilidad entre evidencia, hecho, criterio, participación y resultado del servicio.',
      'Evalúa contradicciones y elementos de descargo antes de formular conclusiones.',
    ],
    source: 'https://www.gob.pe/institucion/contraloria/normas-legales/3723463-007-2021-cg-norm',
    sourceLabel: 'Directiva N.° 007-2021-CG/NORM — Servicio de Control Específico',
  },
  {
    id: 'control-simultaneo',
    title: 'Control simultáneo',
    badge: 'Proceso en curso',
    icon: IconLandmark,
    summary: 'La pregunta central es si existe una situación que, mientras el proceso sigue en ejecución, puede afectar su continuidad, resultado o logro de objetivos.',
    steps: [
      'Confirma que el proceso o actividad se encuentre en curso.',
      'Identifica la modalidad aplicable: control concurrente, visita de control u orientación de oficio.',
      'Describe la situación adversa con hechos objetivos y evidencia verificable.',
      'Relaciona la situación con la normativa, especificación, obligación o condición que permita explicar el riesgo.',
      'Explica la consecuencia posible o materializada para el proceso sin convertir el informe simultáneo en una imputación de responsabilidad.',
      'Distingue acción preventiva de acción correctiva y registra el seguimiento según la directiva vigente.',
      'Cuando el proceso ya terminó, reevalúa si corresponde una actuación posterior en lugar de forzar un servicio simultáneo.',
    ],
    source: 'https://www.gob.pe/institucion/contraloria/normas-legales/3042483-218-2022-cg',
    sourceLabel: 'RC N.° 218-2022-CG — Directiva N.° 013-2022-CG/NORM',
  },
  {
    id: 'denuncias',
    title: 'Denuncias, alertas e información ciudadana',
    badge: 'Gestión de denuncias',
    icon: IconAlert,
    summary: 'Recibir información no equivale automáticamente a tener un hecho probado. La primera tarea es evaluar competencia, concreción, verificabilidad y relevancia para el control.',
    steps: [
      'Registra el origen, fecha y contenido de la información recibida conforme al procedimiento aplicable.',
      'Determina si el relato contiene hechos concretos: quién, qué, cuándo, dónde y cómo.',
      'Evalúa competencia material y territorial del órgano que recibe la información.',
      'Identifica documentos, registros o fuentes que permitan verificar los hechos sin pedir información inútil o imposible.',
      'No confundas una alerta o manifestación genérica con una denuncia que cumple los elementos requeridos por la normativa.',
      'Decide la actuación pertinente según riesgo, momento del hecho, evidencia disponible y normativa específica.',
      'Comunica al denunciante solo aquello que corresponda conforme a las reglas de reserva, protección y procedimiento.',
    ],
    source: 'https://www.gob.pe/institucion/contraloria/normas-legales/3659545-009-2020-cg-gcsd',
    sourceLabel: 'Directiva N.° 009-2020-CG/GCSD — Recepción, Evaluación y Atención de Denuncias',
  },
  {
    id: 'contrataciones',
    title: 'Revisión de contrataciones públicas',
    badge: 'Materia transversal',
    icon: IconContract,
    summary: 'La contratación debe analizarse por etapas y bajo el régimen jurídico vigente cuando ocurrieron los hechos. No mezcles automáticamente la Ley N.° 30225 con la Ley N.° 32069.',
    steps: [
      'Fija primero la fecha y el régimen de contratación aplicable al procedimiento examinado.',
      'Reconstruye la necesidad pública: requerimiento, términos de referencia o especificaciones, indagación de mercado y disponibilidad presupuestal.',
      'Revisa reglas del procedimiento de selección, criterios de evaluación, admisión, calificación y otorgamiento de buena pro.',
      'Contrasta la oferta ganadora con las exigencias de las bases y los documentos efectivamente presentados.',
      'Examina contrato, garantías, plazo, entregables, conformidades, penalidades, modificaciones, adicionales y pagos según corresponda.',
      'Cruza evidencia documental con SEACE, actos administrativos, registros de ejecución y fuentes externas válidas.',
      'No atribuyas responsabilidad por pertenecer a un comité o área: identifica el deber individual, la decisión concreta y la evidencia de participación.',
    ],
    source: 'https://www.gob.pe/institucion/oece/informes-publicaciones/6444155-ley-',
    sourceLabel: 'Ley N.° 32069 — Ley General de Contrataciones Públicas (OECE)',
  },
];

export default function GuiasPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">GUÍAS PRÁCTICAS</div>
        <h1>Rutas de análisis para trabajar sin perder el hilo jurídico</h1>
        <p>No son formatos cerrados. Son secuencias de revisión para ordenar hechos, evidencia, criterio y decisión.</p>
      </section>

      <nav className="guideIndex" aria-label="Índice de guías">
        {guideSections.map((guide) => <a key={guide.id} href={`#${guide.id}`}>{guide.title}</a>)}
      </nav>

      <div className="guideContainer">
        {guideSections.map((guide, guideIndex) => (
          <section className="guideSection" id={guide.id} key={guide.id}>
            <aside>
              <span className="cardIcon"><guide.icon /></span>
              <span className="guideNumber">{String(guideIndex + 1).padStart(2, '0')}</span>
              <span className="cardTag">{guide.badge}</span>
            </aside>
            <div className="guideContent">
              <h2>{guide.title}</h2>
              <p className="guideSummary">{guide.summary}</p>
              <ol className="checkSteps">
                {guide.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <a className="sourceButton" href={guide.source} target="_blank" rel="noreferrer">Fuente oficial: {guide.sourceLabel} <IconArrowRight /></a>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
