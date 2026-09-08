import Link from 'next/link';
import { pildorasPara } from '../data/pildoras';
import {
  IconArrowRight,
  IconBook,
  IconChecklist,
  IconClock,
  IconContract,
  IconEvidence,
  IconLandmark,
  IconScale,
  IconShield,
} from '../components/icons';

export const metadata = {
  title: 'Para auditores',
  description:
    'Normativa aplicable, jurisprudencia útil, herramientas y criterios para el trabajo de control gubernamental: auditoría de cumplimiento, control específico, AOP y control simultáneo.',
};

const servicios = [
  {
    titulo: 'Auditoría de cumplimiento',
    texto: 'Planificación, criterios, evidencia, desviaciones, comunicación y evaluación de comentarios.',
    href: '/guias#auditoria-cumplimiento',
    icon: IconBook,
  },
  {
    titulo: 'Servicio de Control Específico',
    texto: 'Hechos delimitados con evidencia de presunta irregularidad, bajo metodología y fases propias.',
    href: '/guias#control-especifico',
    icon: IconEvidence,
  },
  {
    titulo: 'Acción de Oficio Posterior',
    texto: 'Alcance puntual sobre hechos ya ocurridos advertibles con información disponible.',
    href: '/guias#aop',
    icon: IconClock,
  },
  {
    titulo: 'Control simultáneo',
    texto: 'Situaciones adversas sobre procesos en curso, con seguimiento de acciones.',
    href: '/guias#control-simultaneo',
    icon: IconLandmark,
  },
  {
    titulo: 'Control concurrente, visita y orientación de oficio',
    texto: 'Las tres modalidades del servicio simultáneo y cuándo corresponde cada una.',
    href: '/control-gubernamental',
    icon: IconShield,
  },
  {
    titulo: 'Denuncias y alertas',
    texto: 'Competencia, concreción, verificabilidad y decisión sobre la actuación pertinente.',
    href: '/guias#denuncias',
    icon: IconContract,
  },
];

const razonamiento = [
  ['Evidencia suficiente y apropiada', 'La suficiencia se refiere a la cantidad de evidencia; su carácter apropiado, a la calidad, pertinencia y fiabilidad.'],
  ['Hecho acreditado', 'Afirmación respaldada por evidencia identificada, contrastada y valorada.'],
  ['Indicio', 'Dato que permite una hipótesis razonable, pero que por sí solo no acredita el hecho final.'],
  ['Inferencia', 'Conclusión razonada a partir de hechos o indicios. Debe explicitarse, no presentarse como dato directo.'],
  ['Causalidad', 'Vínculo concreto entre conducta, obligación y resultado. No se presume.'],
  ['Participación', 'Se individualiza por actos concretos y deberes específicos, nunca solo por el cargo.'],
  ['Motivación', 'La conclusión debe poder reconstruirse: qué se afirmó, con qué evidencia y bajo qué criterio.'],
];

const trabajo = [
  ['Matrices y checklists', 'Instrumentos de revisión antes de cerrar un informe.', '/herramientas'],
  ['Selector de servicio de control', 'Ayuda a discriminar qué actuación corresponde a un caso.', '/herramientas/selector-servicio'],
  ['Mapa de validez procedimental', 'Separa temporalidad, fuente aplicable y puntos de revisión antes de sostener un vicio o riesgo de invalidez.', '/herramientas/validez-control'],
  ['Delimitación de hechos', 'Conducta, tiempo, lugar, operación y participantes.', '/guias'],
  ['Evaluación de comentarios', 'Argumento por argumento, contrastado con la evidencia.', '/herramientas'],
  ['Normativa temporalmente aplicable', 'Qué versión regía en la fecha del hecho examinado.', '/normativa'],
  ['Glosario técnico', 'Precisión terminológica en condición, criterio, efecto e indicio.', '/glosario'],
];

const fuentes = [
  ['Compendio normativo', '/normativa'],
  ['Jurisprudencia LexGub', '/jurisprudencia'],
  ['Criterios', '/criterios'],
  ['Tribunales y precedentes', '/tribunales'],
  ['Fuentes oficiales', '/fuentes'],
];

export default function AuditoresPage() {
  const pildoras = pildorasPara('auditores').slice(0, 3);

  return (
    <div className="audiencePage audiencePage--auditores">
      <section className="audienceHero audienceHero--auditores">
        <div className="audienceHeroInner">
          <span className="audienceKicker">PARA AUDITORES</span>
          <h1>Herramientas y conocimiento para un control más efectivo.</h1>
          <p>
            Material organizado según el flujo real del trabajo de control: qué servicio corresponde, qué evidencia lo
            sostiene, qué criterio era exigible y cómo se documenta. Con fuente oficial en cada paso.
          </p>
          <div className="audienceHeroLinks">
            <Link className="primaryButton" href="/normativa">Compendio normativo</Link>
            <Link className="secondaryButton" href="/herramientas">Herramientas y matrices</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <span>SERVICIOS DE CONTROL</span>
          <h2>Empieza por la actuación que corresponde</h2>
        </div>
        <div className="audienceGrid">
          {servicios.map((s) => (
            <Link className="audienceCard" key={s.titulo} href={s.href}>
              <span className="cardIcon"><s.icon /></span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <strong className="cardLink">Abrir <IconArrowRight /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section softSection">
        <div className="sectionHeading">
          <span>EVIDENCIA Y RAZONAMIENTO</span>
          <h2>Distinciones que sostienen una conclusión</h2>
        </div>
        <dl className="conceptList">
          {razonamiento.map(([termino, definicion]) => (
            <div key={termino}>
              <dt>{termino}</dt>
              <dd>{definicion}</dd>
            </div>
          ))}
        </dl>
        <p className="conceptNote">
          Ninguna de estas nociones sustituye la definición que la directiva aplicable establezca para el servicio
          concreto. Cuando la norma define expresamente un término, prevalece esa definición.
        </p>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <span>TRABAJO DEL AUDITOR</span>
          <h2>Instrumentos de revisión</h2>
        </div>
        <ul className="audienceList">
          {trabajo.map(([titulo, texto, href]) => (
            <li key={titulo}>
              <Link href={href}>
                <strong>{titulo}</strong>
                <span>{texto}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section softSection">
        <div className="sectionHeading">
          <span>PÍLDORAS PARA AUDITORES</span>
          <h2>Claves breves con fuente verificable</h2>
        </div>
        <ul className="pildoraGrid pildoraGrid--compacta">
          {pildoras.map((p) => {
            const Icon = p.icon;
            const externa = p.href.startsWith('http');
            return (
              <li className="pildoraCard" key={p.title}>
                <div className="pildoraCardTop">
                  <span className="pildoraIcon"><Icon /></span>
                  <span className="pildoraCategoria">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="pildoraPie">
                  {externa ? (
                    <a href={p.href} target="_blank" rel="noreferrer">Ver fuente oficial <IconArrowRight /></a>
                  ) : (
                    <Link href={p.href}>Ver ficha <IconArrowRight /></Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <Link className="cardLink conceptNote" href="/pildoras">Ver todas las píldoras <IconArrowRight /></Link>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <span>FUENTES</span>
          <h2>Dónde verificar</h2>
        </div>
        <nav className="quickGrid" aria-label="Fuentes para auditores">
          {fuentes.map(([label, href]) => (
            <Link key={href} href={href} className="quickCard">
              <IconScale />
              <strong>{label}</strong>
            </Link>
          ))}
        </nav>
      </section>

      <section className="section softSection">
        <div className="legalNotice wideNotice">
          <strong>Advertencia de uso</strong>
          <p>
            LexGub Perú es una iniciativa privada e independiente. Este material es de orientación técnica y no
            sustituye la normativa aplicable, las disposiciones internas de la entidad ni el juicio profesional del
            equipo de control. <Link href="/fuentes">Consulte siempre la fuente oficial</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
