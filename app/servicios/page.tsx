import AuthorCard from '../components/AuthorCard';

export const metadata = {
  title: 'Perfil y servicios profesionales',
  description: 'Servicios jurídicos especializados en control gubernamental, auditoría, contrataciones públicas y revisión legal de actuaciones de gestión pública.',
};

const services = [
  {
    tag: 'Control gubernamental',
    title: 'Asesoría y revisión jurídica especializada',
    text: 'Análisis de actuaciones de control, delimitación de hechos, identificación del criterio aplicable, revisión de evidencia y consistencia jurídica de conclusiones.',
  },
  {
    tag: 'Auditoría',
    title: 'Soporte legal para auditorías y servicios de control',
    text: 'Revisión de matrices, desviaciones, comentarios, atribución de participación, causalidad y suficiencia del sustento documental.',
  },
  {
    tag: 'Contrataciones públicas',
    title: 'Revisión de expedientes y controversias',
    text: 'Análisis de actuaciones preparatorias, selección, ejecución contractual, modificaciones, penalidades, conformidades y responsabilidades.',
  },
  {
    tag: 'Gestión pública',
    title: 'Informes, opiniones y estrategia jurídica',
    text: 'Elaboración y revisión de informes legales, respuestas institucionales, procedimientos administrativos y documentos de sustento técnico-jurídico.',
  },
  {
    tag: 'Capacitación',
    title: 'Talleres y formación especializada',
    text: 'Capacitación práctica para equipos legales, servidores y profesionales sobre control, evidencia, redacción y razonamiento jurídico.',
  },
  {
    tag: 'Revisión crítica',
    title: 'Segunda lectura de casos complejos',
    text: 'Revisión independiente de expedientes, hipótesis de irregularidad, argumentos, fuentes normativas y riesgos antes de adoptar una posición final.',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="servicesEditorialHero">
        <div className="servicesEditorialHeroInner">
          <div>
            <div className="eyebrow">PERFIL PROFESIONAL · SERVICIOS</div>
            <h1>Especialización jurídica aplicada al control gubernamental y la auditoría.</h1>
            <p>
              LexGub Perú también funciona como carta de presentación profesional para asesoría, revisión jurídica,
              capacitación y análisis especializado en materias de control y gestión pública.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="mailto:lexgub.peru@gmail.com">Escribir a LexGub</a>
              <a className="secondaryButton" href="/columna">Ver publicaciones</a>
            </div>
          </div>
          <AuthorCard compact />
        </div>
      </section>

      <section className="professionalLanding editorialProfessionalLanding">
        <div className="professionalIntro">
          <div>
            <span className="sectionKicker">PRÁCTICA PROFESIONAL</span>
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

        <div className="professionalCta">
          <p>
            Para consultas profesionales, propuestas de capacitación, revisión de documentos o colaboración académica y editorial,
            puede escribirse directamente a LexGub Perú.
          </p>
          <a className="primaryButton" href="mailto:lexgub.peru@gmail.com">Contactar</a>
        </div>

        <p className="ethicsNote">
          LexGub Perú es una iniciativa jurídica independiente. La aceptación de cualquier encargo profesional queda sujeta a la
          normativa de incompatibilidades, impedimentos, deberes éticos y conflictos de interés aplicables a los profesionales involucrados.
        </p>
      </section>
    </>
  );
}
