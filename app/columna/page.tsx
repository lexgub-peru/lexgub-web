import Link from 'next/link';

export const metadata = {
  title: 'Columna LexGub',
  description: 'Análisis, debate normativo y actualidad para auditores, autoridades y gestores públicos, con fuente oficial y enfoque en control gubernamental.',
};

const topics = [
  ['Actualidad y debate', 'Cambios normativos y decisiones públicas que merecen una lectura crítica desde el control gubernamental.'],
  ['Jurisprudencia comentada', 'Criterios de tribunales y resoluciones relevantes explicados desde sus hechos, regla y consecuencias prácticas.'],
  ['Píldora LexGub', 'Datos breves, curiosidades jurídicas, fragmentos normativos y recordatorios útiles para la práctica diaria.'],
  ['Control y evidencia', 'Notas sobre razonamiento probatorio, causalidad, temporalidad y construcción de conclusiones sostenibles.'],
];

export default function ColumnaPage() {
  return (
    <>
      <section className="columnEditorialHero">
        <div className="columnEditorialHeroInner">
          <div>
            <div className="eyebrow">COLUMNA LEXGUB</div>
            <h1>Ideas, debate normativo y actualidad para decidir mejor.</h1>
            <p>
              Análisis independiente para auditores, autoridades y gestores públicos. Cada nota busca separar el dato de la inferencia,
              explicar el alcance real de la norma y ofrecer una ruta de verificación en fuente oficial.
            </p>
            <div className="heroActions">
              <Link className="primaryButton" href="/auditores">Contenido para auditores</Link>
              <Link className="secondaryButton" href="/autoridades">Contenido para autoridades</Link>
            </div>
          </div>
          <div className="columnEditorialSignature">
            <img src="/marvyn-gallo-retrato.webp" alt="Marvyn Enrique Gallo Rojas" width="640" height="800" />
            <div>
              <strong>Marvyn Enrique Gallo Rojas</strong>
              <span>Abogado · Fundador de LexGub Perú</span>
            </div>
          </div>
        </div>
      </section>

      <div className="columnLanding editorialColumnLanding">
        <a className="editorialFeaturedStory" href="/columna/oxi-informe-previo-el-nino-2026">
          <div className="editorialFeaturedStoryCopy">
            <span>ACTUALIDAD NORMATIVA · PARA AMBAS AUDIENCIAS · 06 SEPTIEMBRE 2026</span>
            <h2>Excepción al informe previo en Obras por Impuestos: rapidez, control y riesgos.</h2>
            <p>
              El Decreto de Urgencia N.° 010-2026 introduce una excepción temporal para determinadas intervenciones ejecutadas mediante
              Obras por Impuestos ante el Fenómeno El Niño. La pregunta relevante no es solo qué revisión deja de exigirse, sino qué
              responsabilidades se desplazan y qué controles permanecen.
            </p>
            <strong>Leer análisis completo →</strong>
          </div>
          <div className="editorialFeaturedStoryAside">
            <span className="editorialFeaturedNumber">01</span>
            <p>Control previo · Obras por Impuestos · Gestión de riesgos</p>
          </div>
        </a>

        <section className="columnTopics editorialTopicGrid" aria-label="Líneas editoriales">
          {topics.map(([title, text], index) => (
            <article className="columnTopic" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
