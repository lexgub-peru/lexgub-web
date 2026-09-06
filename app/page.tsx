import Image from 'next/image';
import PildoraLexGub from './components/PildoraLexGub';
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
  ['Normativa esencial', '/normativa', IconDocument],
  ['Guías de trabajo', '/guias', IconBook],
  ['Herramientas y checklists', '/herramientas', IconChecklist],
  ['Glosario de control', '/glosario', IconSearch],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero portalHero">
        <div className="heroBrandPanel" aria-label="Identidad de LEXGUB PERÚ">
          <Image
            src="/lexgub-logo.webp"
            alt="LEXGUB PERÚ"
            width={420}
            height={164}
            priority
            className="heroBrandLogo"
          />
        </div>
        <div className="eyebrow">LEXGUB PERÚ · CONTROL GUBERNAMENTAL</div>
        <h1>Derecho, control y evidencia para trabajar con criterio.</h1>
        <p>
          Plataforma jurídica independiente especializada en control gubernamental peruano. Reúne normativa oficial,
          rutas de análisis, guías prácticas y herramientas para auditores, abogados, servidores y gestores públicos.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href="/control-gubernamental">Entrar al centro de control</a>
          <a className="secondaryButton" href="/normativa">Consultar normativa</a>
        </div>
        <div className="heroNote">Contenido informativo especializado. La conclusión jurídica depende siempre del caso concreto, la evidencia y la norma vigente aplicable.</div>
      </section>

      <section className="statStrip" aria-label="Principios LexGub">
        <article><IconDocument /><strong>Fuente oficial</strong><span>Norma y documento verificable.</span></article>
        <article><IconClock /><strong>Temporalidad</strong><span>La regla aplicable se determina por la fecha del hecho.</span></article>
        <article><IconEvidence /><strong>Evidencia</strong><span>Se distingue hecho acreditado, indicio e inferencia.</span></article>
        <article><IconScale /><strong>Revisión crítica</strong><span>No se presume irregularidad ni responsabilidad.</span></article>
      </section>

      <PildoraLexGub />

      <section className="section portalSection">
        <div className="sectionHeading splitHeading">
          <div>
            <span>ÁREAS DE TRABAJO</span>
            <h2>Una biblioteca pensada para casos reales</h2>
          </div>
          <p>Empieza por el tipo de actuación o la materia que necesitas revisar.</p>
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
      </section>

      <section className="section softSection">
        <div className="sectionHeading">
          <span>ACCESO RÁPIDO</span>
          <h2>Lo que más se consulta</h2>
        </div>
        <div className="quickGrid">
          {quickLinks.map(([label, href, Icon]) => (
            <a key={href} href={href} className="quickCard">
              <Icon />
              <strong>{label}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section methodologySection">
        <div className="methodologyCopy">
          <span className="eyebrow">MÉTODO LEXGUB</span>
          <h2>Antes de concluir, reconstruye.</h2>
          <p>Una revisión sólida no empieza buscando una infracción. Empieza identificando qué ocurrió, cuándo ocurrió, quién intervino, qué evidencia lo demuestra y qué norma era exigible en ese momento.</p>
        </div>
        <ol className="methodSteps">
          <li><strong>Hecho</strong><span>Delimita conducta, tiempo, lugar, operación y participantes.</span></li>
          <li><strong>Evidencia</strong><span>Verifica autenticidad, suficiencia, pertinencia y consistencia.</span></li>
          <li><strong>Criterio</strong><span>Determina la obligación jurídica específica y temporalmente aplicable.</span></li>
          <li><strong>Contraste</strong><span>Explica la diferencia entre lo acreditado y lo exigido.</span></li>
          <li><strong>Consecuencia</strong><span>Evalúa efecto, riesgo, causalidad y eventual participación sin anticipar responsabilidad.</span></li>
        </ol>
      </section>
    </>
  );
}
