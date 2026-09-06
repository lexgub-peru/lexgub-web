import LiveFilter from '../components/LiveFilter';

const terms = [
  ['Control gubernamental', 'Supervisión, vigilancia y verificación de los actos y resultados de la gestión pública, conforme al marco del Sistema Nacional de Control.'],
  ['Sistema Nacional de Control', 'Conjunto de órganos, normas, métodos y procedimientos estructurados e integrados funcionalmente para conducir y desarrollar el control gubernamental de forma descentralizada.'],
  ['Contraloría General de la República', 'Ente técnico rector del Sistema Nacional de Control, con autonomía conforme a la Constitución y la Ley N.° 27785.'],
  ['Órgano de Control Institucional (OCI)', 'Órgano especializado responsable de realizar control gubernamental en la entidad o ámbito que le corresponde, sujeto a la normativa y conducción funcional del Sistema.'],
  ['Control simultáneo', 'Servicio realizado durante un proceso en curso para identificar y comunicar situaciones adversas que puedan afectar su continuidad, resultado o logro de objetivos.'],
  ['Situación adversa', 'Condición identificada en control simultáneo que puede afectar la continuidad, el resultado o el logro de objetivos del proceso en curso y que debe ser comunicada conforme a la directiva aplicable.'],
  ['Control posterior', 'Control realizado después de ejecutados los actos u operaciones, mediante los servicios previstos por las Normas Generales de Control Gubernamental y normativa específica.'],
  ['Auditoría de cumplimiento', 'Servicio de control posterior orientado a determinar en qué medida la materia examinada cumple la normativa, disposiciones internas y estipulaciones contractuales aplicables.'],
  ['Acción de Oficio Posterior (AOP)', 'Modalidad de control posterior de alcance puntual regulada por directiva específica para hechos ya ocurridos respecto de los cuales se advierten indicios de irregularidad con información disponible.'],
  ['Servicio de Control Específico', 'Servicio de control posterior dirigido al examen de hechos específicos con evidencia de presunta irregularidad bajo su metodología propia.'],
  ['Evidencia de auditoría', 'Información utilizada para sustentar las conclusiones del trabajo. Su valoración exige suficiencia y apropiación en función del objetivo y del riesgo.'],
  ['Criterio', 'Norma, disposición, cláusula, parámetro o deber aplicable con el que se compara el hecho examinado. Debe ser específico y temporalmente pertinente.'],
  ['Condición', 'Hecho o situación determinada a partir de evidencia y descrita de manera objetiva dentro de la estructura de un hallazgo o desviación, según el servicio aplicable.'],
  ['Efecto', 'Consecuencia adversa real o potencial, cuantitativa o cualitativa, derivada de la diferencia entre la condición y el criterio cuando la normativa del servicio exige su identificación.'],
  ['Indicio', 'Dato o circunstancia que permite formular una hipótesis razonable, pero que por sí solo no necesariamente acredita el hecho final ni una responsabilidad.'],
  ['Hecho acreditado', 'Afirmación fáctica respaldada por evidencia que ha sido identificada, contrastada y valorada de forma suficiente para la finalidad del análisis.'],
  ['Inferencia', 'Conclusión razonada que se obtiene a partir de uno o más hechos o indicios. Debe explicitarse y no presentarse como si fuera un dato documental directo.'],
  ['Comentarios o aclaraciones', 'Respuesta que formula la persona a quien se comunican hechos o desviaciones conforme al procedimiento aplicable, y que debe ser evaluada objetivamente junto con la evidencia presentada.'],
  ['Recomendación', 'Medida formulada como resultado del servicio de control dentro del alcance y finalidad establecidos por la normativa aplicable.'],
  ['Plan de acción', 'Instrumento mediante el cual la entidad organiza las acciones que adoptará respecto de resultados o recomendaciones cuando la normativa correspondiente así lo establece.'],
];

export default function GlosarioPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">GLOSARIO LEXGUB</div>
        <h1>Hablar con precisión también es controlar mejor</h1>
        <p>Definiciones de orientación para lectura rápida. Cuando una directiva defina expresamente un término, prevalece siempre esa definición normativa.</p>
      </section>

      <section className="section glossarySection">
        <div className="alphabetNote">
          <strong>Importante</strong>
          <p>Un mismo concepto puede tener matices según el servicio de control. Usa este glosario como mapa inicial y confirma la definición en la norma específica.</p>
        </div>
        <LiveFilter
          label="Buscar término del glosario"
          placeholder="Buscar un término (ej. evidencia, indicio, criterio)…"
          containerIds={['glossary-grid']}
          emptyStateId="glossary-empty"
        />
        <div className="glossaryGrid" id="glossary-grid">
          {terms.map(([term, definition]) => (
            <article className="glossaryCard" data-search-item key={term}>
              <h2>{term}</h2>
              <p>{definition}</p>
            </article>
          ))}
        </div>
        <p className="emptyState" id="glossary-empty" hidden>Ningún término coincide con la búsqueda. Prueba con otra palabra clave o revisa la Biblioteca Normativa.</p>
      </section>

      <section className="section sourceCallout">
        <div><span className="sectionKicker">FUENTE RECTORA</span><h2>Normas Generales de Control Gubernamental</h2></div>
        <p>Para conceptos, clasificación de servicios y reglas comunes, revisa la versión vigente de las NGCG y sus modificatorias.</p>
        <a className="primaryButton" href="https://www.gob.pe/institucion/contraloria/normas-legales/2593584-295-2021-cg" target="_blank" rel="noreferrer">Abrir RC N.° 295-2021-CG ↗</a>
      </section>
    </>
  );
}
