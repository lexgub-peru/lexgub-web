import { IconArrowRight, IconClock, IconLandmark, IconShield } from '../components/icons';

const services = [
  {
    type: 'Control previo',
    moment: 'Antes de ejecutar determinados actos u operaciones',
    purpose: 'Intervención excepcional prevista expresamente por norma. No sustituye la responsabilidad de la entidad sobre sus decisiones.',
    icon: IconShield,
  },
  {
    type: 'Control simultáneo',
    moment: 'Durante un proceso en curso',
    purpose: 'Identifica oportunamente situaciones adversas que puedan afectar continuidad, resultado o logro de objetivos para que la entidad adopte acciones.',
    icon: IconLandmark,
  },
  {
    type: 'Control posterior',
    moment: 'Después de ejecutados los actos u operaciones',
    purpose: 'Examina hechos, resultados, cumplimiento y responsabilidades conforme al servicio de control aplicable y la evidencia obtenida.',
    icon: IconClock,
  },
];

const posterior = [
  ['Auditoría de cumplimiento', 'Examen objetivo y profesional para determinar en qué medida la materia examinada cumple la normativa aplicable, disposiciones internas y estipulaciones contractuales pertinentes.', '/guias#auditoria-cumplimiento'],
  ['Servicio de Control Específico', 'Atiende hechos con evidencia de presunta irregularidad bajo la metodología y requisitos de su directiva específica.', '/guias#control-especifico'],
  ['Acción de Oficio Posterior', 'Actuación posterior de alcance puntual respecto de hechos con indicios de irregularidad que pueden ser advertidos con información disponible.', '/guias#aop'],
];

const simultaneous = [
  ['Control concurrente', 'Acompañamiento sistemático y multidisciplinario a hitos de control de un proceso en curso.'],
  ['Visita de control', 'Verificación de una o más actividades de un proceso en curso en el lugar donde se desarrolla.'],
  ['Orientación de oficio', 'Revisión principalmente documental sobre actividades de un proceso en curso para advertir situaciones adversas.'],
];

const legalPrinciples = [
  ['Legalidad', 'Toda conclusión debe vincular el hecho acreditado con una obligación jurídica vigente y aplicable al momento de la conducta.'],
  ['Objetividad', 'La hipótesis inicial puede estar equivocada. Deben incorporarse elementos de cargo y de descargo que sean relevantes.'],
  ['Evidencia', 'La conclusión se sostiene en evidencia suficiente y apropiada; no en sospechas, coincidencias o afirmaciones no corroboradas.'],
  ['Debido proceso', 'Cuando el servicio comprende comunicación de hechos o desviaciones, la persona debe conocer la imputación fáctica y poder formular comentarios conforme a la normativa aplicable.'],
  ['Causalidad', 'No basta identificar un incumplimiento: cuando corresponda atribuir participación o responsabilidad, debe explicarse la vinculación concreta entre conducta, obligación y resultado.'],
  ['Temporalidad normativa', 'Las reformas posteriores no se aplican automáticamente a hechos anteriores. Primero se determina el régimen vigente en la fecha relevante.'],
];

export default function ControlGubernamentalPage() {
  return (
    <>
      <section className="pageHero">
        <div className="eyebrow">CENTRO DE CONTROL GUBERNAMENTAL</div>
        <h1>Mapa jurídico del control gubernamental peruano</h1>
        <p>Una ruta para entender qué servicio corresponde, qué evidencia necesitas y qué fuente normativa debes revisar antes de adoptar una conclusión.</p>
        <div className="pageHeroActions">
          <a className="primaryButton" href="#servicios">Ver servicios de control</a>
          <a className="darkOutlineButton" href="/normativa">Normativa esencial</a>
        </div>
      </section>

      <section className="section introGrid">
        <div>
          <span className="sectionKicker">MARCO GENERAL</span>
          <h2>¿Qué controla el Sistema Nacional de Control?</h2>
        </div>
        <div className="proseBlock">
          <p>El control gubernamental comprende la supervisión, vigilancia y verificación de los actos y resultados de la gestión pública, atendiendo al grado de eficiencia, eficacia, transparencia y economía, así como al cumplimiento de las normas legales y lineamientos de política y planes de acción.</p>
          <p>En la práctica, esto exige separar tres preguntas: <strong>qué ocurrió</strong>, <strong>qué debía ocurrir jurídicamente</strong> y <strong>qué demuestra la evidencia</strong>. LexGub organiza la consulta alrededor de esas tres preguntas.</p>
          <a className="textLink" href="https://www.leyes.congreso.gob.pe/Documentos/Leyes/27785.pdf" target="_blank" rel="noreferrer">Ley N.° 27785 — fuente oficial del Congreso ↗</a>
        </div>
      </section>

      <section id="servicios" className="section softSection">
        <div className="sectionHeading">
          <span>SERVICIOS DE CONTROL</span>
          <h2>El momento del control cambia la herramienta jurídica</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.type}>
              <span className="cardIcon"><service.icon /></span>
              <span className="serviceNumber">0{index + 1}</span>
              <h3>{service.type}</h3>
              <strong>{service.moment}</strong>
              <p>{service.purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section twoColumnSection">
        <div className="stickyTitle">
          <span className="sectionKicker">CONTROL SIMULTÁNEO</span>
          <h2>Actuar mientras el proceso todavía puede corregirse</h2>
          <p>La finalidad no es declarar responsabilidad, sino advertir situaciones adversas de manera oportuna y comunicar sus elementos objetivos.</p>
          <a className="textLink" href="https://www.gob.pe/institucion/contraloria/normas-legales/3042483-218-2022-cg" target="_blank" rel="noreferrer">Directiva N.° 013-2022-CG/NORM y anexos ↗</a>
        </div>
        <div className="stackList">
          {simultaneous.map(([title, description]) => (
            <article key={title}><h3>{title}</h3><p>{description}</p></article>
          ))}
          <div className="legalNotice"><strong>Actualización relevante</strong><p>La regulación del Servicio de Control Simultáneo fue modificada, entre otras, por la Resolución de Contraloría N.° 219-2025-CG. Antes de usar un formato o plazo, revisa siempre la versión vigente o integrada.</p></div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="sectionHeading lightHeading">
          <span>CONTROL POSTERIOR</span>
          <h2>No todos los hechos se examinan con el mismo servicio</h2>
          <p>La elección depende del objeto, la información disponible, el alcance requerido y los presupuestos de la normativa específica.</p>
        </div>
        <div className="posteriorGrid">
          {posterior.map(([title, description, href]) => (
            <a key={title} href={href} className="posteriorCard">
              <h3>{title}</h3>
              <p>{description}</p>
              <span>Ver ruta práctica <IconArrowRight /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <span>RAZONAMIENTO JURÍDICO</span>
          <h2>Seis controles antes de afirmar una irregularidad</h2>
        </div>
        <div className="principleList">
          {legalPrinciples.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section softSection decisionSection">
        <div className="sectionHeading">
          <span>DECISIÓN INICIAL</span>
          <h2>¿Qué deberías preguntarte cuando llega un caso?</h2>
        </div>
        <div className="decisionFlow">
          <article><strong>1. Competencia</strong><p>¿El hecho pertenece al ámbito del Sistema Nacional de Control y al órgano que lo recibe?</p></article>
          <article><strong>2. Concreción</strong><p>¿Se puede identificar conducta, operación, periodo, entidad y participantes o áreas involucradas?</p></article>
          <article><strong>3. Evidencia disponible</strong><p>¿Hay documentos o datos verificables o solo una afirmación pendiente de corroboración?</p></article>
          <article><strong>4. Momento</strong><p>¿El proceso sigue en curso o el hecho ya concluyó? Esto puede cambiar el tipo de servicio aplicable.</p></article>
          <article><strong>5. Criterio</strong><p>¿Existe una obligación concreta infringida? Identifica norma, cláusula, directiva o deber funcional.</p></article>
          <article><strong>6. Herramienta adecuada</strong><p>¿Corresponde gestión de denuncia, control simultáneo, AOP, control específico, auditoría u otra actuación?</p></article>
        </div>
      </section>

      <section className="section sourceCallout">
        <div>
          <span className="sectionKicker">REGLA DE ORO</span>
          <h2>La página ayuda a orientar; la fuente oficial decide.</h2>
        </div>
        <p>LexGub no reemplaza la consulta de la norma vigente ni las disposiciones internas aplicables al caso. Por eso cada guía remite a la resolución, directiva o fuente institucional correspondiente.</p>
        <a className="primaryButton" href="/normativa">Abrir biblioteca normativa</a>
      </section>
    </>
  );
}
