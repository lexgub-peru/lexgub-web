import PildoraLexGub from './components/PildoraLexGub';
import { HomeSearchBand } from './components/GlobalSearch';
import ProblemRoutes from './components/ProblemRoutes';
import {
  IconAlert,
  IconArrowRight,
  IconBook,
  IconChecklist,
  IconClock,
  IconContract,
  IconDocument,
  IconEvidence,
  IconLandmark,
  IconScale,
  IconSearch,
  IconShield,
} from './components/icons';

const areas = [
  {
    title: 'Control gubernamental',
    description: 'Sistema Nacional de Control, servicios de control previo, simultáneo y posterior, criterios de actuación y fuentes oficiales.',
    href: '/control-gubernamental',
    tag: 'Núcleo',
    icon: IconShield,
  },
  {
    title: 'Auditoría de cumplimiento',
    description: 'Planificación, procedimientos, evidencia suficiente y apropiada, desviaciones, comentarios y estructura del informe.',
    href: '/guias#auditoria-cumplimiento',
    tag: 'Guía',
    icon: IconBook,
  },
  {
    title: 'Acción de Oficio Posterior',
    description: 'Cuándo corresponde, delimitación del hecho, evidencia disponible, comunicación y seguimiento del plan de acción.',
    href: '/guias#aop',
    tag: 'Control posterior',
    icon: IconClock,
  },
  {
    title: 'Control simultáneo',
    description: 'Control concurrente, visita de control y orientación de oficio. Situaciones adversas y seguimiento de acciones preventivas y correctivas.',
    href: '/guias#control-simultaneo',
    tag: 'Oportuno',
    icon: IconLandmark,
  },
  {
    title: 'Denuncias y alertas',
    description: 'Competencia, recepción, evaluación, hechos concretos, evidencia, trazabilidad y decisión sobre la actuación de control pertinente.',
    href: '/guias#denuncias',
    tag: 'Ciudadanía',
    icon: IconAlert,
  },
  {
    title: 'Contrataciones públicas',
    description: 'Ruta de revisión del expediente contractual, régimen temporal aplicable, actuación preparatoria, selección, ejecución y responsabilidades.',
    href: '/guias#contrataciones',
    tag: 'Materia frecuente',
    icon: IconContract,
  },
];

const quickLinks = [
  ['Biblioteca jurídica', '/normativa', IconDocument],
  ['Jurisprudencia LexGub', '/jurisprudencia', IconScale],
  ['Asistente LexGub', '/asistente', IconSearch],
  ['Herramientas y checklists', '/herramientas', IconChecklist],
] as const;

export default function Home() {
  return (
    <>
      <section className="editorialHomeHero">
        <div className="editorialHomeHeroInner">
          <div className="editorialHomeCopy">
            <div className="eyebrow">LEXGUB PERÚ · CONOCIMIENTO JURÍDICO ESPECIALIZADO</div>
            <h1>Analiza mejor. Verifica antes. Decide con evidencia.</h1>
            <p>
              Normas, jurisprudencia, criterios y herramientas para control gubernamental, auditoría, contrataciones públicas
              y derecho administrativo, conectados con fuente oficial, temporalidad y razonamiento probatorio.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="/asistente">Preguntar a LexGub</a>
              <a className="secondaryButton" href="/normativa">Explorar Biblioteca</a>
            </div>
            <div className="heroIntelligence" aria-label="Características del Asistente LexGub">
              <strong>Asistente LexGub · Beta</strong>
              <span>orientación documental</span>
              <span>·</span>
              <span>fuentes verificables</span>
              <span>·</span>
              <span>privacidad por diseño</span>
            </div>
            <div className="editorialHeroTopics" aria-label="Áreas principales">
              <span>Control</span><span>Auditoría</span><span>Contrataciones</span><span>Gestión pública</span>
            </div>
          </div>

          <a className="homeFeaturedArticle" href="/columna/oxi-informe-previo-el-nino-2026">
            <span className="homeFeaturedLabel">EN PORTADA · ACTUALIDAD NORMATIVA</span>
            <h2>Excepción al informe previo en Obras por Impuestos: rapidez, control y riesgos.</h2>
            <p>
              La excepción temporal introducida para determinadas intervenciones ante El Niño no elimina el control gubernamental:
              desplaza parte del énfasis hacia la responsabilidad de la entidad y los controles simultáneo y posterior.
            </p>
            <div className="homeFeaturedAuthor">
              <img src="/marvyn-gallo-author.webp" alt="Marvyn Enrique Gallo Rojas" width="560" height="700" />
              <div>
                <strong>Marvyn Enrique Gallo Rojas</strong>
                <span>Abogado · Columna LexGub</span>
              </div>
            </div>
            <strong className="homeFeaturedLink">Leer análisis <IconArrowRight /></strong>
          </a>
        </div>
      </section>

      <section className="homePrinciples" aria-label="Principios LexGub">
        <article><IconDocument /><strong>Fuente oficial</strong><span>Norma y documento verificable.</span></article>
        <article><IconClock /><strong>Temporalidad</strong><span>La regla se determina por la fecha del hecho.</span></article>
        <article><IconEvidence /><strong>Evidencia</strong><span>Hecho, indicio e inferencia no son lo mismo.</span></article>
        <article><IconScale /><strong>Revisión crítica</strong><span>No se presume irregularidad ni responsabilidad.</span></article>
      </section>

      <HomeSearchBand />

      <ProblemRoutes />

      <PildoraLexGub />

      <section className="section portalSection homeLibrarySection">
        <div className="sectionHeading splitHeading">
          <div>
            <span>CENTRO DE CONSULTA</span>
            <h2>Una base jurídica pensada para problemas reales.</h2>
          </div>
          <p>Busca la norma, entiende el criterio, verifica la fuente y conviértelo en una ruta de trabajo.</p>
        </div>
        <div className="moduleGrid areaGrid">
          {areas.map((area) => (
            <a className="moduleCard areaCard" key={area.title} href={area.href}>
              <span className="cardIcon"><area.icon /></span>
              <span className="cardTag">{area.tag}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <strong className="cardLink">Abrir guía <IconArrowRight /></strong>
            </a>
          ))}
        </div>
        <nav className="quickGrid" aria-label="Accesos rápidos">
          {quickLinks.map(([label, href, Icon]) => (
            <a key={href} href={href} className="quickCard">
              <Icon />
              <strong>{label}</strong>
            </a>
          ))}
        </nav>
      </section>

      <section className="section softSection methodologySection">
        <div className="methodologyCopy">
          <span className="sectionKicker">MÉTODO LEXGUB</span>
          <h2>Antes de concluir, reconstruye.</h2>
          <p>Una revisión sólida empieza identificando qué ocurrió, cuándo ocurrió, quién intervino, qué evidencia lo demuestra y qué norma era exigible en ese momento.</p>
        </div>
        <ol className="methodSteps">
          <li><strong>Hecho</strong><span>Delimita conducta, tiempo, lugar, operación y participantes.</span></li>
          <li><strong>Evidencia</strong><span>Verifica autenticidad, suficiencia, pertinencia y consistencia.</span></li>
          <li><strong>Criterio</strong><span>Determina la obligación jurídica específica y temporalmente aplicable.</span></li>
          <li><strong>Contraste</strong><span>Explica la diferencia entre lo acreditado y lo exigido.</span></li>
          <li><strong>Consecuencia</strong><span>Evalúa efecto, riesgo, causalidad y participación sin anticipar responsabilidad.</span></li>
        </ol>
      </section>

      <section className="homeAuthorSection">
        <div className="homeAuthorInner">
          <img src="/marvyn-gallo-author.webp" alt="Marvyn Enrique Gallo Rojas" width="560" height="700" />
          <div className="homeAuthorCopy">
            <span className="sectionKicker">AUTOR</span>
            <h2>Marvyn Enrique Gallo Rojas</h2>
            <p>
              Abogado especializado en control gubernamental, auditoría, contrataciones públicas y derecho administrativo.
            </p>
          </div>
          <div className="homeAuthorActions">
            <a className="authorOutlineButton" href="/columna">Publicaciones</a>
            <a className="authorOutlineButton" href="/servicios">Perfil</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="homeServicesBand">
          <div>
            <span className="eyebrow">SERVICIOS</span>
            <h2>Acompañamiento jurídico especializado</h2>
            <p>
              Revisión de informes de control, análisis de expedientes de contratación, evaluación de comentarios y
              sustento jurídico para procedimientos ante el Sistema Nacional de Control.
            </p>
          </div>
          <a className="primaryButton" href="/servicios">Ver servicios</a>
        </div>
      </section>
    </>
  );
}
