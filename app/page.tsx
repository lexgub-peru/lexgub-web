const modules = [
  ['Auditoría de cumplimiento', 'Estructura hechos, criterios, evidencia, desviaciones y revisión supervisora.'],
  ['Control gubernamental', 'AOP, control simultáneo, denuncias, alertas, seguimiento y actuaciones de control.'],
  ['Contrataciones públicas', 'Análisis por régimen aplicable, normativa vigente, criterios OECE y Tribunal.'],
  ['PAD y SERVIR', 'Procedimiento disciplinario, tipicidad, imputación, defensa, motivación y precedentes.'],
  ['Análisis probatorio', 'Distingue hechos acreditados, indicios, inferencias, afirmaciones y conclusiones.'],
  ['Revisión crítica', 'Cuestiona causalidad, suficiencia probatoria, competencia, motivación y solidez jurídica.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow">LEXGUB 2.0 · EN DESARROLLO</div>
        <h1>Inteligencia jurídica para el control gubernamental y la gestión pública peruana.</h1>
        <p>Una plataforma privada orientada al análisis normativo, probatorio y documental con trazabilidad de fuentes y revisión crítica.</p>
        <div className="heroActions">
          <a className="primaryButton" href="#modulos">Explorar módulos</a>
          <a className="secondaryButton" href="/normativa">Ver base normativa</a>
        </div>
      </section>

      <section className="principles">
        <article><strong>Fuente oficial primero</strong><span>La norma, resolución o precedente debe poder verificarse.</span></article>
        <article><strong>No asumir irregularidad</strong><span>Primero se reconstruyen hechos, evidencia, criterio y causalidad.</span></article>
        <article><strong>Norma temporalmente aplicable</strong><span>El análisis parte de la fecha del hecho y del régimen jurídico correspondiente.</span></article>
      </section>

      <section id="modulos" className="section">
        <div className="sectionHeading">
          <span>Especialización</span>
          <h2>Núcleo profesional de LexGub</h2>
        </div>
        <div className="moduleGrid">
          {modules.map(([title, description]) => (
            <article className="moduleCard" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
