import AuthorCard from '../components/AuthorCard';

export const metadata = {
  title: 'Asesoría y consultoría especializada',
  description: 'Asesoría jurídica especializada para autoridades, gestores públicos, equipos y profesionales frente a requerimientos, auditorías, informes de control, contrataciones públicas y responsabilidad administrativa.',
};

const services = [
  {
    tag: 'Requerimientos OCI · CGR',
    title: 'Respuesta técnica ante solicitudes y actuaciones de control',
    text: 'Revisión del alcance del requerimiento, identificación de plazos, organización de la documentación existente y estructuración de una respuesta completa, trazable y jurídicamente consistente.',
    deliverables: 'Matriz de requerimiento · inventario documental · ruta de respuesta · revisión jurídica del proyecto',
  },
  {
    tag: 'Auditoría · SCE · AOP',
    title: 'Revisión de desviaciones, hechos e informes de control',
    text: 'Análisis del hecho comunicado, criterio invocado, evidencia citada, participación atribuida y argumentos disponibles, respetando las reglas propias de cada servicio de control.',
    deliverables: 'Matriz hecho-evidencia-criterio · revisión de argumentos · línea temporal · observaciones de consistencia',
  },
  {
    tag: 'Contrataciones públicas',
    title: 'Revisión de expedientes y decisiones de contratación',
    text: 'Análisis de actuaciones preparatorias, selección, ejecución contractual, modificaciones, penalidades, conformidades y responsabilidades bajo el régimen temporalmente aplicable.',
    deliverables: 'Mapa del expediente · línea temporal · matriz de actuaciones · análisis jurídico focalizado',
  },
  {
    tag: 'Responsabilidad administrativa',
    title: 'Análisis de participación, deber funcional y sustento probatorio',
    text: 'Revisión de la actuación concreta atribuida, deberes funcionales, causalidad, evidencia y motivación, diferenciando irregularidad, participación y responsabilidad.',
    deliverables: 'Matriz de participación · contraste normativo · vacíos probatorios · memorando de riesgos jurídicos',
  },
  {
    tag: 'Gestión pública',
    title: 'Informes, opiniones y estrategia jurídica preventiva',
    text: 'Elaboración y revisión de informes legales, respuestas institucionales y documentos de sustento para decisiones que deben poder explicarse y verificarse posteriormente.',
    deliverables: 'Opinión legal · revisión de proyecto · estructura argumental · control de motivación y vigencia',
  },
  {
    tag: 'Capacitación',
    title: 'Talleres y formación especializada',
    text: 'Capacitación aplicada para autoridades, equipos legales, auditores, servidores y profesionales sobre control, evidencia, contrataciones, redacción y razonamiento jurídico.',
    deliverables: 'Taller aplicado · casos prácticos · materiales de trabajo · checklists y rutas de consulta',
  },
];

const audiences = [
  {
    kicker: 'AUTORIDADES Y GESTORES',
    title: 'Entender el control antes de responder',
    text: 'Para quienes reciben requerimientos, comunicaciones, desviaciones o informes y necesitan ordenar el expediente, comprender la actuación y preparar una respuesta técnicamente sustentada.',
  },
  {
    kicker: 'EQUIPOS Y ORGANIZACIONES',
    title: 'Prevenir, ordenar y documentar mejor',
    text: 'Para equipos técnicos y legales que requieren criterios comunes, trazabilidad documental, capacitación o revisión independiente de decisiones y expedientes.',
  },
  {
    kicker: 'PROFESIONALES',
    title: 'Segunda lectura para casos complejos',
    text: 'Para abogados, auditores y especialistas que necesitan contrastar una hipótesis, reconstruir la temporalidad o poner a prueba el sustento antes de cerrar una posición.',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="servicesEditorialHero">
        <div className="servicesEditorialHeroInner">
          <div>
            <div className="eyebrow">LEXGUB PERÚ · ASESORÍA Y CONSULTORÍA</div>
            <h1>Cuando llega el control, entender el problema cambia la calidad de la respuesta.</h1>
            <p>
              LexGub brinda asesoría y consultoría especializada para autoridades, gestores públicos, equipos y profesionales que
              deben responder requerimientos, comprender auditorías o informes de control, revisar contrataciones o analizar posibles responsabilidades.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="mailto:lexgub.peru@gmail.com?subject=Consulta%20profesional%20LexGub">Plantear una consulta</a>
              <a className="secondaryButton" href="/autoridades">Guía para autoridades</a>
            </div>
          </div>
          <AuthorCard compact />
        </div>
      </section>

      <section className="professionalLanding editorialProfessionalLanding">
        <div className="professionalIntro">
          <div>
            <span className="sectionKicker">PARA QUIÉN</span>
            <h2>La asesoría empieza por identificar la actuación y la decisión que debe sustentarse.</h2>
          </div>
          <p>
            No todos los casos requieren el mismo producto. A veces la necesidad es ordenar una respuesta a un OCI; otras, entender una
            desviación, reconstruir qué norma regía, revisar un expediente contractual o someter una conclusión a una segunda lectura crítica.
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
            <h2>Del requerimiento a la evidencia: servicios para problemas concretos.</h2>
          </div>
          <p>
            El enfoque no consiste en confirmar una versión previamente asumida. Cada asunto se reconstruye desde los hechos, la documentación,
            el régimen temporal aplicable y los argumentos que puedan sostener —o debilitar— una conclusión.
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
            La asesoría no garantiza resultados ni sustituye las competencias de los órganos de control o de las autoridades que deban resolver.
          </p>
        </section>

        <div className="professionalCta">
          <p>
            Si recibió un requerimiento, una comunicación de desviación, un informe de control o necesita revisar un expediente antes de adoptar una decisión,
            puede plantear el caso inicialmente de forma general para evaluar el alcance posible de la asesoría.
          </p>
          <a className="primaryButton" href="mailto:lexgub.peru@gmail.com?subject=Consulta%20profesional%20LexGub">Solicitar contacto</a>
        </div>

        <p className="ethicsNote">
          LexGub Perú es una iniciativa jurídica privada e independiente. La aceptación de cualquier encargo profesional queda sujeta a la
          normativa de incompatibilidades, impedimentos, deberes éticos, confidencialidad y conflictos de interés aplicables a los profesionales involucrados.
          LexGub no orienta a ocultar información, alterar documentos, retrasar actuaciones u obstruir el control, ni utiliza información reservada o no pública para alimentar su plataforma abierta.
        </p>
      </section>
    </>
  );
}
