import Link from 'next/link';
import {
  IconAlert,
  IconArrowRight,
  IconBook,
  IconChecklist,
  IconDocument,
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
  ['Contrataciones públicas', 'contrataciones'],
  ['Responsabilidad administrativa', 'responsabilidad administrativa'],
  ['SERVIR', 'SERVIR'],
];

const modulos = [
  { titulo: 'Biblioteca jurídica', texto: 'Normas, directivas, manuales y documentos clave.', href: '/normativa', icon: IconBook },
  { titulo: 'Jurisprudencia LexGub', texto: 'Resoluciones, precedentes y criterios relevantes.', href: '/jurisprudencia', icon: IconScale },
  { titulo: 'Radar normativo', texto: 'Cambios y alertas jurídicas seleccionados por utilidad práctica.', href: '/radar', icon: IconDocument },
  { titulo: 'Píldoras LexGub', texto: 'Explicaciones claras en formato breve.', href: '/pildoras', icon: IconAlert },
  { titulo: 'Herramientas', texto: 'Formatos, matrices y recursos prácticos.', href: '/herramientas', icon: IconChecklist },
  { titulo: 'Asistente LexGub', texto: 'Apoyo para ubicar fuentes y ordenar la consulta.', href: '/asistente', icon: IconSearch },
];

const temas = [
  {
    etiqueta: 'ACTUALIDAD',
    titulo: 'Excepción al informe previo en Obras por Impuestos',
    texto: 'La medida no elimina el control: desplaza el énfasis hacia la entidad y los controles simultáneo y posterior.',
    href: '/columna/oxi-informe-previo-el-nino-2026',
    audiencia: 'ambos',
  },
  {
    etiqueta: 'GUÍA PRÁCTICA',
    titulo: 'Qué hacer ante una solicitud del OCI',
    texto: 'Qué se pide, en qué plazo y cómo responder de forma completa y verificable.',
    href: '/autoridades',
    audiencia: 'autoridades',
  },
  {
    etiqueta: 'ANÁLISIS',
    titulo: 'Cómo leer un informe de control',
    texto: 'Distinguir hecho descrito, criterio invocado y recomendación formulada.',
    href: '/autoridades',
    audiencia: 'autoridades',
  },
  {
    etiqueta: 'ARTÍCULO',
    titulo: 'Evidencia suficiente y apropiada',
    texto: 'La suficiencia se refiere a la cantidad de evidencia; su carácter apropiado, a la calidad, pertinencia y fiabilidad.',
    href: '/auditores',
    audiencia: 'auditores',
  },
];

const servicios = [
  'Asesoría ante requerimientos y actuaciones de control',
  'Revisión jurídica de desviaciones, informes y documentación',
  'Contrataciones públicas',
  'Responsabilidad administrativa',
  'Revisión crítica de casos complejos',
  'Capacitación y talleres especializados',
];

const fuentes: [string, string][] = [
  ['El Peruano', 'https://elperuano.pe/'],
  ['SPIJ', 'https://spij.minjus.gob.pe/'],
  ['Contraloría', 'https://www.gob.pe/contraloria'],
  ['SERVIR', 'https://www.gob.pe/servir'],
  ['OECE', 'https://www.gob.pe/oece'],
  ['Poder Judicial', 'https://www.pj.gob.pe/'],
  ['Tribunal Constitucional', 'https://www.tc.gob.pe/'],
];

export default function Home() {
  return (
    <>
      <section className="v5Hero">
        <div className="v5HeroInner">
          <p className="v5HeroKicker">DERECHO PÚBLICO PARA UN MEJOR ESTADO</p>
          <h1>
            Conocimiento jurídico y asesoría estratégica para <em>decidir con criterio.</em>
          </h1>
          <p className="v5HeroDek">
            En LexGub Perú ayudamos a auditores, autoridades y gestores públicos a trabajar con normas, evidencia,
            informes y fuentes oficiales para tomar decisiones mejor sustentadas y responder adecuadamente frente a los
            desafíos del control gubernamental.
          </p>

          <form className="v5Search" action="/buscar" method="get" role="search">
            <label className="srOnly" htmlFor="hero-q">Buscar en LexGub Perú</label>
            <IconSearch className="v5SearchIcon" />
            <input
              id="hero-q"
              name="q"
              type="search"
              placeholder="Buscar norma, criterio, resolución, precedente o tema…"
              autoComplete="off"
            />
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

      <section className="v5Rutas" aria-label="Rutas de entrada">
        <Link className="v5Ruta v5Ruta--auditores" href="/auditores">
          <span className="v5RutaIcono"><IconShield /></span>
          <div className="v5RutaCuerpo">
            <h2>Para auditores</h2>
            <p>Herramientas y conocimiento para un control más efectivo.</p>
            <ul>
              <li>Normativa aplicable</li>
              <li>Jurisprudencia útil</li>
              <li>Herramientas y matrices</li>
              <li>Píldoras de control</li>
            </ul>
          </div>
          <span className="v5RutaCta">Entrar para auditores <IconArrowRight /></span>
        </Link>

        <Link className="v5Ruta v5Ruta--autoridades" href="/autoridades">
          <span className="v5RutaIcono"><IconLandmark /></span>
          <div className="v5RutaCuerpo">
            <h2>Para autoridades y gestores públicos</h2>
            <p>Asesoría, conocimiento y guía para una respuesta técnica, oportuna y sustentada.</p>
            <ul>
              <li>Cómo responder a un requerimiento</li>
              <li>Cómo leer un informe de control</li>
              <li>Riesgos frecuentes</li>
              <li>Asesoría especializada</li>
            </ul>
          </div>
          <span className="v5RutaCta">Entrar para autoridades <IconArrowRight /></span>
        </Link>
      </section>

      <section className="v5Split">
        <div className="v5SplitMain">
          <div className="v5SectionHead">
            <h2>Qué puedes hacer en LexGub</h2>
            <span>TODO EN UN SOLO LUGAR, PARA UNA MEJOR GESTIÓN PÚBLICA</span>
          </div>
          <div className="v5Modulos">
            {modulos.map((m) => (
              <Link className="v5Modulo" key={m.titulo} href={m.href}>
                <span className="v5ModuloIcono"><m.icon /></span>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
                <span className="v5ModuloFlecha" aria-hidden="true"><IconArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>

        <aside className="v5Fundador" aria-label="Fundador">
          <span className="v5FundadorTitulo">Fundador</span>
          <img
            src="/marvyn-gallo-retrato.webp"
            alt="Marvyn Enrique Gallo Rojas"
            width="640"
            height="800"
            className="v5FundadorFoto"
          />
          <h3>Marvyn Enrique Gallo Rojas</h3>
          <p className="v5FundadorRol">Abogado · Fundador de LexGub Perú</p>
          <p className="v5FundadorBio">
            Especializado en control gubernamental, auditoría, contrataciones públicas y derecho administrativo, con
            enfoque en evidencia, fuente oficial, temporalidad normativa y análisis jurídico riguroso.
          </p>
          <p className="v5FundadorBio">Fundador y director de la línea jurídica y editorial de LexGub Perú.</p>
          <blockquote className="v5FundadorCita">Instituciones más fuertes para un país más justo.</blockquote>
          <Link className="cardLink" href="/lexgub">Conocer LexGub <IconArrowRight /></Link>
        </aside>
      </section>

      <section className="v5Split v5Split--soft">
        <div className="v5SplitMain">
          <div className="v5SectionHead">
            <h2>Temas clave para el día a día</h2>
            <span>GUÍAS Y ANÁLISIS PARA MEJORES DECISIONES</span>
          </div>
          <div className="v5Temas">
            {temas.map((t) => (
              <Link className={`v5Tema v5Tema--${t.audiencia}`} key={t.titulo} href={t.href}>
                <span className="v5TemaEtiqueta">{t.etiqueta}</span>
                <h3>{t.titulo}</h3>
                <p>{t.texto}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="v5Servicios" aria-label="Nuestros servicios">
          <div className="v5SectionHead">
            <h2>Nuestros servicios</h2>
            <span>ASESORÍA ESPECIALIZADA</span>
          </div>
          <ul className="v5ServiciosLista">
            {servicios.map((s) => (
              <li key={s}><IconDocument />{s}</li>
            ))}
          </ul>
          <div className="v5ServiciosCta">
            <Link className="wineButton" href="/contacto">Solicitar asesoría <IconArrowRight /></Link>
            <Link className="ghostButton" href="/servicios">Ver todos los servicios</Link>
          </div>
          <p className="v5ServiciosNota">
            El acompañamiento es técnico y jurídico. No garantizamos resultados en procedimientos de control.
          </p>
        </aside>
      </section>

      <section className="v5Fuentes" aria-label="Fuentes oficiales">
        <div className="v5FuentesInner">
          <p className="v5FuentesTitulo">
            <IconShield />
            FUENTES OFICIALES QUE RESPALDAN NUESTRO CONTENIDO
          </p>
          <ul>
            {fuentes.map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer">{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="v5FuentesNota">
          LexGub es una iniciativa privada e independiente y no representa a dichas entidades. Verifique siempre la
          vigencia y la fuente oficial de la normativa aplicable.
        </p>
      </section>
    </>
  );
}
