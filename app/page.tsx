import Link from 'next/link';
import {
  IconArrowRight,
  IconBook,
  IconChecklist,
  IconDocument,
  IconEvidence,
  IconLandmark,
  IconScale,
  IconSearch,
  IconShield,
} from './components/icons';

const busquedasFrecuentes: [string, string][] = [
  ['OCI', 'OCI'],
  ['Informe de control', 'informe de control'],
  ['Auditoría de cumplimiento', 'auditoría de cumplimiento'],
  ['SCE', 'control específico'],
  ['AOP', 'acción de oficio posterior'],
  ['Contrataciones', 'contrataciones públicas'],
];

const resolver = [
  { title: 'Buscar una norma', text: 'Vigencia, modificatorias y fuente oficial.', href: '/normativa', icon: IconBook },
  { title: 'Revisar jurisprudencia', text: 'Criterios, precedentes y utilidad práctica.', href: '/jurisprudencia', icon: IconScale },
  { title: 'Entender un informe de control', text: 'Hecho, criterio, recomendación y respuesta.', href: '/autoridades', icon: IconDocument },
  { title: 'Responder un requerimiento OCI/CGR', text: 'Ordena información, plazos y sustento.', href: '/autoridades', icon: IconEvidence },
  { title: 'Usar una herramienta', text: 'Selectores, mapas de revisión y checklists.', href: '/herramientas', icon: IconChecklist },
  { title: 'Solicitar asesoría', text: 'Acompañamiento técnico y jurídico especializado.', href: '/servicios', icon: IconLandmark },
];

const actualidad = [
  { eyebrow: 'RADAR', title: 'Cambios normativos con trazabilidad', href: '/radar' },
  { eyebrow: 'PÍLDORAS', title: 'Claves breves para el trabajo diario', href: '/pildoras' },
  { eyebrow: 'COLUMNA', title: 'Análisis jurídico de problemas actuales', href: '/columna' },
];

export default function Home() {
  return (
    <>
      <section className="v5Hero v6Hero v7Hero">
        <div className="v5HeroInner">
          <p className="v5HeroKicker">DERECHO PÚBLICO PARA UN MEJOR ESTADO</p>
          <h1>
            Conocimiento jurídico y asesoría especializada para <em>decidir con criterio.</em>
          </h1>
          <p className="v5HeroDek">
            LexGub conecta fuente oficial, temporalidad, evidencia y análisis para auditores, autoridades y gestores públicos.
          </p>

          <form className="v5Search" action="/buscar" method="get" role="search">
            <label className="srOnly" htmlFor="hero-q">Buscar en LexGub Perú</label>
            <IconSearch className="v5SearchIcon" />
            <input id="hero-q" name="q" type="search" placeholder="Buscar norma, criterio o resolución…" autoComplete="off" />
            <button type="submit">Buscar</button>
          </form>

          <div className="v5Frecuentes">
            <span>Búsquedas frecuentes:</span>
            {busquedasFrecuentes.map(([label, q]) => (
              <Link key={label} href={`/buscar?q=${encodeURIComponent(q)}`}>{label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="v7TrustStrip" aria-label="Principios LexGub">
        <span>FUENTE OFICIAL</span>
        <i>·</i>
        <span>TEMPORALIDAD NORMATIVA</span>
        <i>·</i>
        <span>EVIDENCIA</span>
        <i>·</i>
        <span>ANÁLISIS JURÍDICO</span>
      </section>

      <section className="v5Rutas v6Rutas" aria-label="Elige tu ruta">
        <Link className="v5Ruta v5Ruta--auditores" href="/auditores">
          <span className="v5RutaIcono"><IconShield /></span>
          <div className="v5RutaCuerpo">
            <h2>Soy auditor</h2>
            <p>Normas, evidencia, criterios y herramientas para el trabajo de control.</p>
          </div>
          <span className="v5RutaCta">Entrar <IconArrowRight /></span>
        </Link>
        <Link className="v5Ruta v5Ruta--autoridades" href="/autoridades">
          <span className="v5RutaIcono"><IconLandmark /></span>
          <div className="v5RutaCuerpo">
            <h2>Soy autoridad o gestor</h2>
            <p>Comprende requerimientos, informes, riesgos y opciones de respuesta técnica.</p>
          </div>
          <span className="v5RutaCta">Entrar <IconArrowRight /></span>
        </Link>
      </section>

      <section className="section v6ResolveSection">
        <div className="sectionHeading">
          <span>¿QUÉ NECESITAS RESOLVER?</span>
          <h2>Empieza por tu problema, no por el menú.</h2>
        </div>
        <div className="v6ResolveGrid">
          {resolver.map((item) => (
            <Link className="v6ResolveCard" href={item.href} key={item.title}>
              <span className="cardIcon"><item.icon /></span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <IconArrowRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="section softSection v6CurrentSection">
        <div className="sectionHeading splitHeading">
          <div><span>CONOCIMIENTO</span><h2>Lo esencial, sin saturarte.</h2></div>
          <Link className="cardLink" href="/conocimiento">Ver centro de conocimiento <IconArrowRight /></Link>
        </div>
        <div className="v6CurrentGrid">
          {actualidad.map((item) => (
            <Link className="v6CurrentCard" href={item.href} key={item.title}>
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <strong className="cardLink">Abrir <IconArrowRight /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section v6BottomGrid">
        <div className="v6ToolPanel v7ToolPanel">
          <span className="sectionKicker">HERRAMIENTAS</span>
          <h2>Ordena el análisis antes de concluir.</h2>
          <p>Usa el selector de servicio, el mapa de validez y los checklists como apoyo de revisión, sin sustituir el juicio profesional.</p>
          <div className="heroActions">
            <Link className="primaryButton" href="/herramientas">Ver herramientas</Link>
            <Link className="authorOutlineButton" href="/asistente">Asistente LexGub</Link>
          </div>
        </div>

        <aside className="v7InstitutionalCard" aria-label="Contacto institucional LexGub Perú">
          <span>CONTACTO INSTITUCIONAL</span>
          <h2>Una identidad jurídica sobria, independiente y verificable.</h2>
          <p>
            LexGub Perú desarrolla conocimiento, herramientas y servicios especializados en derecho público con una metodología basada en fuente oficial, evidencia y trazabilidad.
          </p>
          <a className="v7Email" href="mailto:lexgub.peru@gmail.com?subject=Contacto%20LexGub%20Per%C3%BA">lexgub.peru@gmail.com</a>
          <Link className="cardLink" href="/lexgub">Conocer LexGub <IconArrowRight /></Link>
        </aside>
      </section>

      <section className="v6ServiceBand v7ServiceBand">
        <div>
          <span>ASESORÍA Y CONSULTORÍA</span>
          <h2>Cuando el problema requiere análisis aplicado al caso.</h2>
          <p>Revisión jurídica, procedimientos de control, contrataciones, responsabilidad administrativa y capacitación especializada.</p>
        </div>
        <div className="heroActions">
          <Link className="wineButton" href="/contacto">Solicitar asesoría <IconArrowRight /></Link>
          <Link className="ghostButton" href="/servicios">Ver servicios</Link>
        </div>
      </section>
    </>
  );
}
