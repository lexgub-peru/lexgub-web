import AuthorCard from '../../components/AuthorCard';

export const metadata = {
  title: 'OxI ante El Niño: excepción al informe previo de Contraloría',
  description: 'Análisis del Decreto de Urgencia N.° 010-2026 y la excepción temporal al informe previo de la Contraloría en determinadas intervenciones mediante Obras por Impuestos.',
  authors: [{ name: 'Marvyn Enrique Gallo Rojas' }],
};

export default function ArticlePage() {
  return (
    <article className="editorialArticlePage">
      <header className="articleMasthead">
        <div className="articleMastheadInner">
          <span>COLUMNA LEXGUB</span>
          <small>Análisis jurídico independiente · Control gubernamental</small>
        </div>
      </header>

      <div className="articleLayout">
        <div className="articleMainColumn">
          <nav className="articleBreadcrumb" aria-label="Ruta del artículo">
            <a href="/">Inicio</a><span>›</span><a href="/columna">Columna</a><span>›</span><span>Obras por Impuestos</span>
          </nav>

          <header className="articleHeader editorialArticleHeader">
            <div className="articleMeta">COLUMNA LEXGUB · ACTUALIDAD NORMATIVA · 06 SEPTIEMBRE 2026</div>
            <h1>Excepción al informe previo en Obras por Impuestos: rapidez, control y riesgos.</h1>
            <p className="dek">
              El Decreto de Urgencia N.° 010-2026 acelera determinadas intervenciones mediante Obras por Impuestos ante el Fenómeno El Niño.
              La medida no elimina el control gubernamental: modifica el momento en que una parte de ese control interviene.
            </p>
            <div className="articleFacts" aria-label="Datos del artículo">
              <span>06 septiembre 2026</span>
              <span>Control previo · Obras por Impuestos</span>
              <span>Lectura: 6 min</span>
            </div>
            <div className="articleMobileAuthor" aria-label="Autor del artículo">
              <img src="/marvyn-gallo-author.webp" alt="Marvyn Enrique Gallo Rojas" width="100" height="100" />
              <div>
                <strong>Marvyn Enrique Gallo Rojas</strong>
                <span>Abogado · Control gubernamental y auditoría</span>
              </div>
            </div>
          </header>

          <div className="articleBody editorialArticleBody">
            <p>
              El 2 de septiembre de 2026 se publicó el Decreto de Urgencia N.° 010-2026, que establece medidas extraordinarias
              para ejecutar intervenciones mediante el mecanismo de Obras por Impuestos ante el Fenómeno El Niño. Entre sus medidas,
              el artículo 12 introduce una regla excepcional: durante la vigencia del decreto, las entidades comprendidas en su ámbito
              no requieren solicitar el informe previo de la Contraloría General de la República para las intervenciones ejecutadas al amparo de esa norma.
            </p>

            <h2>1. Lo primero: no confundir excepción con ausencia de control</h2>
            <p>
              El mismo artículo precisa que la excepción no limita las competencias constitucionales y legales de la Contraloría para ejercer
              control gubernamental, incluido el control simultáneo y posterior. Por tanto, jurídicamente no estamos ante una desaparición del control,
              sino ante una reconfiguración temporal de una de sus manifestaciones.
            </p>

            <blockquote>
              <span>“El control no desaparece: cambia el momento en que actúa.”</span>
              <cite>Marvyn Enrique Gallo Rojas</cite>
            </blockquote>

            <h2>2. ¿Qué cambia en términos prácticos?</h2>
            <p>
              La eliminación temporal de la exigencia de solicitar informe previo reduce un paso ex ante dentro de las intervenciones comprendidas por el decreto.
              Esto puede contribuir a acelerar decisiones en un contexto de urgencia, pero también incrementa la importancia de la calidad del expediente,
              de la evaluación financiera y jurídica interna y de la trazabilidad de las decisiones adoptadas por la propia entidad.
            </p>

            <p>
              El informe previo de la Contraloría no equivale, por sí mismo, a una autorización ni a una aprobación de la operación. Sin embargo,
              cumple una función preventiva dentro del diseño de control previo. Cuando esa revisión deja de ser exigible excepcionalmente,
              la entidad no queda liberada de sustentar la legalidad, razonabilidad y consistencia financiera de su decisión.
            </p>

            <h2>3. El verdadero desafío: velocidad sin degradar evidencia</h2>
            <p>
              En contextos de emergencia existe una tensión legítima entre rapidez y control. Pero esa tensión no debería resolverse reduciendo la calidad documental.
              Al contrario: cuando se simplifica una etapa previa, adquieren mayor relevancia la motivación de la decisión, la identificación de riesgos,
              la consistencia del expediente y la posibilidad de reconstruir posteriormente por qué se actuó de determinada manera.
            </p>

            <p>Desde una perspectiva de control gubernamental, conviene observar al menos tres puntos:</p>
            <ol>
              <li><strong>Capacidad financiera y sostenibilidad:</strong> la aceleración procedimental no elimina la necesidad de verificar que la decisión sea financieramente responsable.</li>
              <li><strong>Control simultáneo oportuno:</strong> si el objetivo de la medida es ganar tiempo, un control simultáneo tardío perdería buena parte de su utilidad preventiva.</li>
              <li><strong>Responsabilidad documental:</strong> la ausencia de un informe previo no convierte en irrelevantes los informes técnicos, legales, presupuestales y de gestión que sustentan la intervención.</li>
            </ol>

            <h2>4. Una lectura que merece debate</h2>
            <p>
              La medida puede ser defendida desde la necesidad de ejecutar con rapidez frente a un riesgo climático extraordinario. También puede ser cuestionada
              desde la perspectiva de si el Estado está trasladando hacia etapas simultáneas o posteriores riesgos que antes eran examinados antes de ejecutar.
              Ambas posiciones merecen ser discutidas con evidencia y no con una premisa automática de que más trámites significan necesariamente más control,
              o de que menos trámites significan necesariamente mejor gestión.
            </p>

            <h2>5. Tesis provisional LexGub</h2>
            <p>
              La excepción creada por el Decreto de Urgencia N.° 010-2026 no suprime el control gubernamental, pero sí desplaza el equilibrio entre prevención previa,
              responsabilidad decisoria de la entidad y controles simultáneo y posterior. Su evaluación real dependerá de si la reducción del tiempo ex ante se traduce
              en ejecución oportuna sin pérdida de trazabilidad, calidad técnica y disciplina financiera.
            </p>

            <div className="articleSource">
              <strong>Fuente oficial:</strong> Decreto de Urgencia N.° 010-2026, publicado el 2 de septiembre de 2026 en el Diario Oficial El Peruano.{' '}
              <a href="https://busquedas.elperuano.pe/dispositivo/EX/2550403-1" target="_blank" rel="noreferrer">Consultar norma completa ↗</a>
              <p>Este texto es análisis editorial e informativo. No sustituye la revisión integral de la norma ni constituye asesoría jurídica para un caso concreto.</p>
            </div>
          </div>
        </div>

        <aside className="articleSidebar">
          <AuthorCard compact />
          <section className="articlePillCard" aria-label="Píldora LexGub relacionada">
            <span className="articlePillKicker">PÍLDORA LEXGUB</span>
            <h2>¿Sabías que...?</h2>
            <p>
              Una excepción al informe previo no equivale a una exclusión del Sistema Nacional de Control. La norma debe leerse junto con las competencias
              de control simultáneo y posterior que permanecen vigentes.
            </p>
            <a href="https://busquedas.elperuano.pe/dispositivo/EX/2550403-1" target="_blank" rel="noreferrer">Ver fuente oficial →</a>
          </section>
        </aside>
      </div>

      <section className="relatedArticles">
        <div>
          <span className="sectionKicker">PRÓXIMOS TEMAS</span>
          <h2>La agenda editorial de LexGub</h2>
        </div>
        <div className="relatedArticleGrid">
          <article><span>Control simultáneo</span><strong>Cuándo una situación adversa exige algo más que una comunicación formal.</strong></article>
          <article><span>Auditoría</span><strong>Evidencia suficiente y apropiada: dónde termina el indicio y empieza la conclusión.</strong></article>
          <article><span>Contrataciones</span><strong>Temporalidad normativa: el error de aplicar la regla vigente hoy al hecho de ayer.</strong></article>
        </div>
      </section>
    </article>
  );
}
