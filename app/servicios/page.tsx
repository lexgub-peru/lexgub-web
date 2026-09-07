import AuthorCard from '../components/AuthorCard';

export const metadata = {
  title: 'Asesoría y consultoría especializada',
  description: 'Servicios jurídicos especializados en control gubernamental, auditoría, contrataciones públicas, derecho administrativo y revisión legal de actuaciones de gestión pública.',
};

const services = [
  {
    tag: 'Control gubernamental',
    title: 'Asesoría y revisión jurídica especializada',
    text: 'Análisis de actuaciones de control, delimitación de hechos, identificación del criterio aplicable, revisión de evidencia y consistencia jurídica de conclusiones.',
    deliverables: 'Informe de revisión · matriz de observaciones · ruta normativa · comentarios de consistencia',
  },
  {
    tag: 'Auditoría',
    title: 'Soporte legal para auditorías y servicios de control',
    text: 'Revisión de matrices, desviaciones, comentarios, atribución de participación, causalidad y suficiencia del sustento documental.',
    deliverables: 'Segunda lectura · matriz hecho-evidencia-criterio · observaciones al sustento · propuesta de mejora',
  },
  {
    tag: 'Contrataciones públicas',
    title: 'Revisión de expedientes y controversias',
    text: 'Análisis de actuaciones preparatorias, selección, ejecución contractual, modificaciones, penalidades, conformidades y responsabilidades.',
    deliverables: 'Mapa del expediente · línea temporal · matriz de actuaciones · análisis jurídico focalizado',
  },
  {
    tag: 'Gestión pública',
    title: 'Informes, opiniones y estrategia jurídica',
    text: 'Elaboración y revisión de informes legales, respuestas institucionales, procedimientos administrativos y documentos de sustento técnico-jurídico.',
    deliverables: 'Opinión legal · revisión de proyecto · estructura argumental · control de motivación y vigencia',
  },
  {
    tag: 'Capacitación',
    title: 'Talleres y formación especializada',
    text: 'Capacitación práctica para equipos legales, servidores y profesionales sobre control, evidencia, redacción y razonamiento jurídico.',
    deliverables: 'Taller aplicado · casos prácticos · materiales de trabajo · checklists y rutas de consulta',
  },
  {
    tag: 'Revisión crítica',
    title: 'Segunda lectura de casos complejos',
    text: 'Revisión independiente de expedientes, hipótesis de irregularidad, argumentos, fuentes normativas y riesgos antes de adoptar una posición final.',
    deliverables: 'Memorando de riesgos · argumentos a favor y en contra · vacíos probatorios · fuentes por verificar',
  },
];

const audiences = [
  {
    kicker: 'PROFESIONALES',
    title: 'Decisiones con mejor sustento',
    text: 'Para abogados, auditores y especialistas que necesitan una segunda lectura, ordenar fuentes o poner a prueba una conclusión antes de cerrarla.',
  },
  {
    kicker: 'EQUIPOS',
    title: 'Criterio común y trazabilidad',
    text: 'Para equipos técnicos y legales que requieren una metodología compartida para revisar expedientes, evidencia, temporalidad y motivación.',
  },
  {
    kicker: 'ORGANIZACIONES',
    title: 'Capacitación y análisis especializado',
    text: 'Para organizaciones que requieren formación, revisión jurídica o soporte metodológico en materias de control y gestión pública, sujeto a las reglas aplicables.',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="servicesEditorialHero">
        <div className="servicesEditorialHeroInner">
          <div>
            <div className="eyebrow">LEXGUB PERÚ · ASESORÍA Y CONSULTORÍA</div>
            <h1>Especialización jurídica para decisiones que deben poder explicarse y verificarse.</h1>
            <p>
              LexGub combina práctica jurídica, metodología probatoria y fuentes oficiales para revisar problemas complejos de control gubernamental,
              auditoría, contrataciones públicas, derecho administrativo y gestión pública.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="mailto:lexgub.peru@gmail.com">Plantear una consulta</a>
              <a className="secondaryButton" href="/lexgub">Conocer LexGub</a>
            </div>
          </div>
          <AuthorCard compact />
        </div>
      </section>

      <section className="professionalLanding editorialProfessionalLanding">
        <div className="professionalIntro">
          <div>
            <span className="sectionKicker">PARA QUIÉN</span>
            <h2>El servicio empieza por entender la decisión que necesitas sustentar.</h2>
          </div>
          <p>
            No todos los problemas requieren un informe extenso. Algunos necesitan una segunda lectura, otros una reconstrucción temporal,
            una matriz de evidencia, una ruta normativa o una capacitación focalizada. El alcance se define según el problema real.
          </p>
        </div>

        <div className="servicesAudience">
          {audiences.map((audience) => (
            <article key={audience.title}>
              <span>{audience.kicker}</span>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>

        <div className="professionalIntro">
          <div>
            <span className="sectionKicker">ÁREAS DE SERVICIO</span>
            <h2>Servicios construidos sobre evidencia, fuente oficial y criterio jurídico.</h2>
          </div>
          <p>
            El enfoque no consiste en confirmar una hipótesis previamente asumida. Cada caso se reconstruye desde los hechos,
            la evidencia disponible, el régimen temporal aplicable y los argumentos que puedan sostener —o debilitar— una conclusión.
          </p>
        </div>

        <div className="serviceCards">
          {services.map((service) => (
            <article className="professionalCard" key={service.title}>
              <span>{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <small className="serviceDeliverables"><strong>Entregables posibles:</strong> {service.deliverables}</small>
            </article>
          ))}
        </div>

        <section className="professionalMethod">
          <div>
            <span className="eyebrow">MÉTODO DE TRABAJO</span>
            <h2>La calidad jurídica empieza antes de redactar.</h2>
          </div>
          <ul>
            <li><strong>Reconstrucción fáctica:</strong> qué ocurrió, cuándo, dónde y quién intervino.</li>
            <li><strong>Control de vigencia:</strong> qué norma era exigible en el momento relevante.</li>
            <li><strong>Examen probatorio:</strong> qué está acreditado, qué es indicio y qué depende de inferencia.</li>
            <li><strong>Contradicción:</strong> búsqueda activa de argumentos y elementos que cuestionen la hipótesis inicial.</li>
            <li><strong>Trazabilidad:</strong> cada afirmación relevante debe poder remontarse a una fuente o evidencia identificable.</li>
          </ul>
        </section>

        <section className="servicesPromiseBand">
          <div>
            <span>PROPUESTA DE VALOR</span>
            <h2>No vendemos certeza artificial.</h2>
          </div>
          <p>
            Entregamos análisis que muestra qué está acreditado, qué norma corresponde, dónde existe incertidumbre y qué debe verificarse antes de decidir.
            Esa transparencia es parte del servicio y también una protección frente a conclusiones apresuradas.
          </p>
        </section>

        <div className="professionalCta">
          <p>
            Para consultas profesionales, propuestas de capacitación, revisión de documentos o colaboración académica y editorial,
            puede escribirse directamente a LexGub Perú.
          </p>
          <a className="primaryButton" href="mailto:lexgub.peru@gmail.com">Contactar</a>
        </div>

        <p className="ethicsNote">
          LexGub Perú es una iniciativa jurídica privada e independiente. La aceptación de cualquier encargo profesional queda sujeta a la
          normativa de incompatibilidades, impedimentos, deberes éticos, confidencialidad y conflictos de interés aplicables a los profesionales involucrados.
          LexGub no utiliza ni solicita información reservada o no pública para alimentar su plataforma abierta.
        </p>
      </section>
    </>
  );
}
