import LiveFilter from '../components/LiveFilter';
import { IconArrowRight, IconBook, IconDocument, IconLandmark, IconScale } from '../components/icons';

const core = [
  {
    title: 'Ley N.° 27785 — Ley Orgánica del Sistema Nacional de Control y de la Contraloría General de la República',
    note: 'Base legal del Sistema Nacional de Control, control gubernamental, atribuciones y organización general.',
    href: 'https://www.leyes.congreso.gob.pe/Documentos/Leyes/27785.pdf',
    type: 'Ley',
  },
  {
    title: 'Texto Integrado de las Normas Generales de Control Gubernamental',
    note: 'Versión integrada publicada por la Contraloría el 15 de abril de 2026. Fuente central para principios, servicios de control y reglas comunes.',
    href: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/4301933-texto-integrado-normas-generales-de-control-gubernamental',
    type: 'NGCG · 2026',
  },
  {
    title: 'Resolución de Contraloría N.° 295-2021-CG',
    note: 'Resolución que aprobó las actuales Normas Generales de Control Gubernamental. La página oficial permite revisar normativa relacionada y modificatorias.',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/2593584-295-2021-cg',
    type: 'Resolución',
  },
];

const services = [
  {
    title: 'Auditoría de Cumplimiento — Directiva N.° 001-2022-CG/NORM y Manual',
    note: 'Aprobados por RC N.° 001-2022-CG. Incluye anexos oficiales: carpeta de servicio, plan, cédulas, matriz de desviaciones y formatos.',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
    type: 'Control posterior',
  },
  {
    title: 'Servicio de Control Simultáneo — Directiva N.° 013-2022-CG/NORM',
    note: 'Marco del control concurrente, visita de control y orientación de oficio. Revisar modificatorias, incluida la RC N.° 219-2025-CG.',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/3042483-218-2022-cg',
    type: 'Control simultáneo',
  },
  {
    title: 'Resolución de Contraloría N.° 219-2025-CG',
    note: 'Modifica diversos numerales de la Directiva N.° 013-2022-CG/NORM del Servicio de Control Simultáneo.',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/6831451-219-2025-cg',
    type: 'Modificatoria',
  },
  {
    title: 'Acción de Oficio Posterior — Directiva N.° 007-2023-CG/VCIC',
    note: 'Directiva vigente aprobada en 2023 para la Acción de Oficio Posterior. Sustituyó marcos anteriores de esta modalidad.',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    type: 'Control posterior',
  },
  {
    title: 'Servicio de Control Específico a Hechos con Presunta Irregularidad — Directiva N.° 007-2021-CG/NORM',
    note: 'Regula el examen de hechos específicos con evidencia de presunta irregularidad y contiene anexos de trabajo.',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/3723463-007-2021-cg-norm',
    type: 'Control posterior',
  },
  {
    title: 'Recepción, Evaluación y Atención de Denuncias — Directiva N.° 009-2020-CG/GCSD',
    note: 'Marco de gestión de denuncias y formatos oficiales publicados por la Contraloría.',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/3659545-009-2020-cg-gcsd',
    type: 'Servicio relacionado',
  },
];

const external = [
  ['Contraloría General de la República', 'Normas, directivas, resoluciones, informes, anexos y documentos técnicos.', 'https://www.gob.pe/contraloria'],
  ['Buscador de informes de control', 'Consulta pública de informes emitidos por el Sistema Nacional de Control.', 'https://buscador-informes.contraloria.gob.pe/BuscadorCGR/Informes/Avanzado.html'],
  ['OECE', 'Ley General de Contrataciones Públicas, reglamento, directivas, interpretación normativa y Tribunal.', 'https://www.gob.pe/oece'],
  ['SERVIR', 'Normativa del Sistema Administrativo de Gestión de Recursos Humanos y Tribunal del Servicio Civil.', 'https://www.gob.pe/servir'],
  ['Diario Oficial El Peruano', 'Publicación oficial de normas legales y disposiciones del ordenamiento peruano.', 'https://elperuano.pe/'],
  ['Congreso — Archivo Digital de la Legislación', 'Textos legales publicados por el Congreso de la República.', 'https://www.leyes.congreso.gob.pe/'],
];

const typeIcons: Record<string, typeof IconDocument> = {
  Ley: IconScale,
  Resolución: IconDocument,
  Modificatoria: IconDocument,
};

function iconForType(type: string) {
  if (type.startsWith('NGCG')) return IconBook;
  if (type.toLowerCase().includes('control')) return IconLandmark;
  return typeIcons[type] ?? IconDocument;
}

function NormList({ items, id }: { items: typeof core; id: string }) {
  return (
    <div className="normGrid" id={id}>
      {items.map((item) => {
        const Icon = iconForType(item.type);
        return (
          <a className="normCard" data-search-item key={item.title} href={item.href} target="_blank" rel="noreferrer">
            <span className="cardIcon"><Icon /></span>
            <span className="cardTag">{item.type}</span>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
            <strong>Fuente oficial <IconArrowRight /></strong>
          </a>
        );
      })}
    </div>
  );
}

export default function NormativaPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">BIBLIOTECA NORMATIVA</div>
        <h1>Empieza por la norma, no por la conclusión</h1>
        <p>Selección de fuentes oficiales para control gubernamental. Antes de aplicar una regla, verifica vigencia, modificatorias, régimen temporal y disposiciones complementarias.</p>
      </section>

      <section className="verificationBar">
        <strong>Última verificación editorial: septiembre de 2026.</strong>
        <span>La normativa puede cambiar. El enlace oficial debe revisarse nuevamente al momento de usarlo en un informe, oficio o decisión.</span>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <LiveFilter
          label="Buscar norma, directiva o fuente"
          placeholder="Buscar por título, tipo o materia (ej. contrataciones, denuncias, AOP)…"
          containerIds={['norm-core', 'norm-services', 'norm-external']}
          emptyStateId="norm-empty"
        />
      </section>

      <section className="section" style={{ paddingTop: '28px' }}>
        <div className="sectionHeading"><span>MARCO ESENCIAL</span><h2>Las fuentes que deberían estar abiertas en casi toda revisión</h2></div>
        <NormList items={core} id="norm-core" />
      </section>

      <section className="section softSection">
        <div className="sectionHeading"><span>SERVICIOS DE CONTROL</span><h2>Directivas y manuales de trabajo</h2></div>
        <NormList items={services} id="norm-services" />
      </section>

      <section className="section">
        <div className="sectionHeading"><span>FUENTES INSTITUCIONALES</span><h2>Dónde continuar la investigación jurídica</h2></div>
        <div className="sourceDirectory" id="norm-external">
          {external.map(([name, description, href]) => (
            <a data-search-item key={name} href={href} target="_blank" rel="noreferrer">
              <div><strong>{name}</strong><p>{description}</p></div><span>↗</span>
            </a>
          ))}
        </div>
        <p className="emptyState" id="norm-empty" hidden>Ninguna fuente coincide con la búsqueda. Ajusta los términos o revisa el glosario para identificar el nombre técnico correcto.</p>
      </section>

      <section className="section temporalRule">
        <div>
          <span className="sectionKicker">CONTROL DE VIGENCIA</span>
          <h2>Una norma actual no siempre gobierna un hecho antiguo</h2>
        </div>
        <ol>
          <li>Fija la fecha exacta o periodo de la conducta examinada.</li>
          <li>Identifica la versión de la ley, reglamento, directiva o bases vigente en ese momento.</li>
          <li>Revisa modificatorias, disposiciones transitorias y reglas de entrada en vigencia.</li>
          <li>Distingue normas sustantivas de reglas procedimentales aplicables al servicio de control actual.</li>
          <li>Guarda la fuente oficial que respalda la versión utilizada.</li>
        </ol>
      </section>
    </>
  );
}
