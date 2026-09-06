export const metadata = {
  title: 'Columna LexGub',
  description: 'Análisis, debate normativo, actualidad, jurisprudencia comentada y pastillas de control gubernamental peruano.',
};

const topics = [
  ['Actualidad y debate', 'Cambios normativos y decisiones públicas que merecen una lectura crítica desde el control gubernamental.'],
  ['Jurisprudencia comentada', 'Criterios de tribunales y resoluciones relevantes explicados desde sus hechos, regla y consecuencias prácticas.'],
  ['Pastilla LexGub', 'Datos breves, curiosidades jurídicas, fragmentos normativos y recordatorios útiles para la práctica diaria.'],
  ['Control y evidencia', 'Notas sobre razonamiento probatorio, causalidad, temporalidad y construcción de conclusiones sostenibles.'],
];

export default function ColumnaPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">COLUMNA LEXGUB</div>
        <h1>Ideas, debate normativo y actualidad para pensar mejor el control.</h1>
        <p>
          Un espacio editorial independiente para analizar cambios normativos, jurisprudencia, decisiones públicas y problemas
          reales de control gubernamental sin reducirlos a titulares.
        </p>
      </section>

      <main className="columnLanding">
        <section className="columnFeatured">
          <div className="featureVisual">
            <span>Debate LexGub · 06 septiembre 2026</span>
            <strong>Rapidez frente al riesgo: la excepción al informe previo en Obras por Impuestos ante El Niño.</strong>
          </div>
          <div>
            <div className="columnMeta">Actualidad normativa · Control previo · OxI</div>
            <h2>¿Eliminar una revisión previa significa reducir el control?</h2>
            <p>
              El Decreto de Urgencia N.° 010-2026 introduce una excepción temporal para determinadas intervenciones ejecutadas
              mediante Obras por Impuestos ante el Fenómeno El Niño. La pregunta relevante no es solo qué control desaparece,
              sino qué responsabilidades se desplazan y qué controles permanecen.
            </p>
            <a className="primaryButton" href="/columna/oxi-informe-previo-el-nino-2026">Leer análisis</a>
          </div>
        </section>

        <section className="columnTopics" aria-label="Líneas editoriales">
          {topics.map(([title, text], index) => (
            <article className="columnTopic" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
