import type { Metadata } from 'next';
import Link from 'next/link';
import {
  IconArrowRight,
  IconBook,
  IconEvidence,
  IconScale,
  IconSearch,
  IconShield,
} from '../components/icons';
import { siteConfig } from '../lib/site';
import styles from './LexGub.module.css';

export const metadata: Metadata = {
  title: 'LexGub Perú | Misión, visión, historia e identidad institucional',
  description:
    'Conoce LexGub Perú, empresa de asesoría, consultoría y conocimiento jurídico especializado en control gubernamental y derecho público.',
  openGraph: {
    title: 'LexGub Perú | Asesoría, consultoría y conocimiento jurídico especializado',
    description: 'Misión, visión, historia, principios e identidad institucional de LexGub Perú.',
    url: `${siteConfig.url}/lexgub`,
    type: 'website',
  },
};

const values = [
  {
    icon: IconShield,
    title: 'Rigor',
    text: 'La conclusión debe poder reconstruirse desde la fuente, el hecho y la evidencia.',
  },
  {
    icon: IconScale,
    title: 'Independencia',
    text: 'Analizamos problemas jurídicos sin confundir asesoría especializada con posición institucional de una entidad pública.',
  },
  {
    icon: IconEvidence,
    title: 'Integridad',
    text: 'Diferenciamos dato, indicio, inferencia, opinión y responsabilidad; preservamos reserva y confidencialidad.',
  },
  {
    icon: IconBook,
    title: 'Utilidad',
    text: 'Convertimos información dispersa en rutas de trabajo, criterios, herramientas y decisiones mejor sustentadas.',
  },
  {
    icon: IconSearch,
    title: 'Innovación responsable',
    text: 'Usamos tecnología para buscar, relacionar y explicar mejor; nunca para reemplazar la verificación jurídica.',
  },
];

const history = [
  {
    number: '01',
    title: 'Una necesidad práctica',
    text: 'LexGub nace al constatar que el trabajo en control gubernamental exige consultar normas, directivas, jurisprudencia, precedentes e informes distribuidos entre múltiples fuentes y periodos normativos.',
  },
  {
    number: '02',
    title: 'Sistematizar antes de opinar',
    text: 'El proyecto empieza a ordenar fuentes oficiales y a trabajar una metodología propia: identificar el hecho, fijar su fecha, reconstruir la norma aplicable, revisar la evidencia y recién después formular una conclusión.',
  },
  {
    number: '03',
    title: 'De repositorio a conocimiento',
    text: 'La biblioteca evoluciona hacia fichas normativas, jurisprudencia explicada, criterios, guías, Píldoras LexGub, herramientas y rutas de investigación orientadas a problemas reales.',
  },
  {
    number: '04',
    title: 'Firma y plataforma especializada',
    text: 'LexGub se consolida como empresa de asesoría, consultoría y conocimiento jurídico especializado, integrando análisis profesional, investigación, formación y tecnología jurídica en una misma propuesta.',
  },
];

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: `${siteConfig.url}/lexgub`,
  email: 'lexgub.peru@gmail.com',
  description:
    'Empresa peruana de asesoría, consultoría y conocimiento jurídico especializado en control gubernamental, auditoría, contrataciones públicas, derecho administrativo y gestión pública.',
  areaServed: {
    '@type': 'Country',
    name: 'Perú',
  },
  knowsAbout: [
    'Control gubernamental',
    'Auditoría',
    'Contrataciones públicas',
    'Derecho administrativo',
    'Gestión pública',
    'Razonamiento probatorio',
  ],
};

export default function LexGubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>LEXGUB PERÚ · IDENTIDAD INSTITUCIONAL</span>
          <h1>Asesoría, consultoría y conocimiento jurídico especializado.</h1>
          <p>
            LexGub Perú es una empresa peruana especializada en control gubernamental, auditoría,
            contrataciones públicas, derecho administrativo y gestión pública. Integra análisis jurídico,
            evidencia, fuentes oficiales y tecnología para convertir problemas complejos en rutas de trabajo verificables.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primary} href="/servicios">Conocer servicios <IconArrowRight /></Link>
            <Link className={styles.secondary} href="/asistente">Explorar LexGub <IconArrowRight /></Link>
          </div>
        </div>

        <aside className={styles.identityCard}>
          <span>PRINCIPIO RECTOR</span>
          <blockquote>“Primero la fuente. Luego la evidencia. Después el análisis.”</blockquote>
          <div className={styles.method}>
            <strong>FUENTE OFICIAL</strong><i>→</i><strong>NORMA APLICABLE</strong><i>→</i><strong>CRITERIO</strong><i>→</i><strong>EVIDENCIA</strong><i>→</i><strong>SOLUCIÓN</strong>
          </div>
        </aside>
      </section>

      <section className={styles.missionVision}>
        <article>
          <span>01 · MISIÓN</span>
          <h2>Rigor que se convierte en una solución útil.</h2>
          <p>
            Brindar asesoría, consultoría y conocimiento jurídico especializado de alta calidad en control gubernamental,
            auditoría, contrataciones públicas, derecho administrativo y gestión pública, mediante el análisis riguroso de la
            normativa, la evidencia y las fuentes oficiales, generando soluciones prácticas, responsables y técnicamente sustentadas.
          </p>
        </article>
        <article className={styles.vision}>
          <span>02 · VISIÓN</span>
          <h2>Ser una referencia peruana en conocimiento jurídico aplicado.</h2>
          <p>
            Consolidarnos como una firma peruana de referencia en asesoría, consultoría y conocimiento especializado en control
            gubernamental y derecho público, reconocida por la calidad del análisis, independencia de criterio, innovación
            tecnológica, confiabilidad de las fuentes y capacidad para transformar información compleja en mejores decisiones.
          </p>
        </article>
      </section>

      <section className={styles.historySection}>
        <header className={styles.sectionHeading}>
          <div>
            <span>NUESTRA HISTORIA</span>
            <h2>LexGub nació para resolver un problema que se repite todos los días.</h2>
          </div>
          <p>
            Encontrar una norma no siempre significa comprenderla. Y conocer la versión vigente hoy no siempre permite saber qué regla gobernó un hecho ocurrido años atrás.
          </p>
        </header>
        <div className={styles.timeline}>
          {history.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.institutionSection}>
        <div className={styles.institutionMark} aria-hidden="true">L</div>
        <div className={styles.institutionCopy}>
          <span>IDENTIDAD INSTITUCIONAL</span>
          <h2>Una marca jurídica construida para que el contenido sea el protagonista.</h2>
          <p>
            LexGub se presenta públicamente como una plataforma y firma especializada. La arquitectura editorial privilegia la trazabilidad de las fuentes, la claridad metodológica y la utilidad profesional por encima de la exposición de identidades personales.
          </p>
          <p>
            Para consultas, coordinación institucional o servicios profesionales, el canal público de contacto es el correo de LexGub Perú.
          </p>
          <a className={styles.contactMail} href="mailto:lexgub.peru@gmail.com?subject=Contacto%20LexGub%20Per%C3%BA">
            lexgub.peru@gmail.com <IconArrowRight />
          </a>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <header className={styles.sectionHeading}>
          <div>
            <span>CÓMO TRABAJAMOS</span>
            <h2>Cinco principios para que la tecnología no sustituya el criterio.</h2>
          </div>
          <p>
            LexGub no busca acumular documentos. Busca que una persona pueda verificar una fuente, entender su alcance y utilizarla correctamente.
          </p>
        </header>
        <div className={styles.valuesGrid}>
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title}>
                <span className={styles.valueIcon}><Icon /></span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.independence}>
        <div>
          <span>INDEPENDENCIA Y RESPONSABILIDAD</span>
          <h2>Especialización sin confusión institucional.</h2>
        </div>
        <p>
          LexGub Perú es una iniciativa privada e independiente. No pertenece ni representa a la Contraloría General de la República
          ni a otra entidad pública. La asesoría y consultoría se presta respetando las incompatibilidades, impedimentos, deberes de
          confidencialidad y reglas éticas que resulten aplicables en cada caso.
        </p>
      </section>
    </>
  );
}
