const checklists = [
  {
    title: 'Requerimiento de información útil',
    description: 'Antes de enviar un oficio, verifica que cada pedido tenga una finalidad probatoria concreta.',
    items: [
      'Identifica el hecho o aspecto que necesitas acreditar.',
      'Pide documentos existentes; evita solicitar que la entidad produzca análisis que no forman parte de sus archivos.',
      'Delimita periodo, procedimiento, contrato, orden, obra o expediente.',
      'Evita fórmulas abiertas como “toda documentación relacionada” salvo que el expediente esté claramente definido.',
      'Incluye entregables, conformidades, pagos y documentos de ejecución cuando el riesgo no se limita a la contratación inicial.',
      'Solicita archivos legibles, íntegros y, cuando corresponda, en formato digital nativo.',
      'Fija plazo razonable y canal de remisión conforme al marco aplicable.',
    ],
  },
  {
    title: 'Matriz mínima del hecho',
    description: 'Una hoja simple para evitar que la revisión se disperse.',
    items: [
      'Hecho: descripción concreta y neutral.',
      'Fecha o periodo relevante.',
      'Entidad, unidad orgánica y proceso involucrado.',
      'Persona o cargo interviniente, solo si está acreditado.',
      'Documento o fuente que prueba cada afirmación.',
      'Criterio jurídico aplicable y vigencia.',
      'Diferencia entre lo acreditado y lo exigido.',
      'Efecto, riesgo o consecuencia cuando sea exigible.',
      'Información faltante y procedimiento para obtenerla.',
    ],
  },
  {
    title: 'Evaluación de comentarios o aclaraciones',
    description: 'No basta responder “no desvirtúa”. La evaluación debe hacerse argumento por argumento.',
    items: [
      'Resume fielmente el argumento de la persona, sin caricaturizarlo.',
      'Identifica qué hecho, criterio, participación o efecto cuestiona.',
      'Verifica si adjunta nueva evidencia y si esta es auténtica, pertinente y suficiente.',
      'Contrasta su argumento con la evidencia ya incorporada.',
      'Distingue alegaciones jurídicas de controversias fácticas.',
      'Explica por qué el argumento modifica o no la conclusión preliminar.',
      'Corrige el hecho si el comentario revela una imprecisión, aunque la conclusión principal se mantenga.',
      'Evita introducir una imputación nueva que no fue comunicada oportunamente.',
    ],
  },
  {
    title: 'Revisión de una AOP',
    description: 'Control rápido antes de cerrar el proyecto de informe.',
    items: [
      'El hecho está delimitado y ocurrió antes de la actuación de control.',
      'La evidencia citada realmente demuestra la condición descrita.',
      'El criterio corresponde a la fecha del hecho y a la operación examinada.',
      'No se mezclan hechos distintos para aparentar una sola irregularidad.',
      'El lenguaje diferencia indicio, hecho acreditado e inferencia.',
      'La consecuencia para la gestión o intereses del Estado está explicada.',
      'La recomendación corresponde al tipo de servicio y no excede su alcance.',
      'Las fechas, montos, nombres y documentos han sido verificados contra su fuente.',
    ],
  },
  {
    title: 'Situación adversa en control simultáneo',
    description: 'La situación adversa debe ser útil para la entidad, no una narración genérica.',
    items: [
      'El proceso continúa en ejecución.',
      'La condición se describe con hechos observables y evidencia.',
      'Se identifica la disposición, obligación o parámetro pertinente.',
      'Se explica de qué manera la situación puede afectar continuidad, resultado u objetivos.',
      'No se atribuye responsabilidad individual como si se tratara de control posterior.',
      'La redacción permite a la entidad entender qué debe evaluar o corregir.',
      'El seguimiento distingue acciones preventivas y correctivas.',
    ],
  },
  {
    title: 'Expediente de contratación',
    description: 'Mapa documental para reconstruir una contratación de principio a fin.',
    items: [
      'Requerimiento y sustento de necesidad.',
      'Términos de referencia o especificaciones técnicas y sus modificaciones.',
      'Indagación de mercado, cotizaciones y determinación del valor o cuantía aplicable.',
      'Certificación o disponibilidad presupuestal.',
      'Bases, consultas, observaciones e integración cuando corresponda.',
      'Ofertas y documentación presentada por postores.',
      'Actas de admisión, evaluación, calificación y buena pro.',
      'Contrato u orden y garantías.',
      'Entregables, informes, partes, bitácoras, valorizaciones y conformidades.',
      'Penalidades, ampliaciones, adicionales, reducciones, modificaciones y controversias.',
      'Comprobantes, devengados y pagos.',
      'SEACE y otros registros públicos pertinentes.',
    ],
  },
];

export default function HerramientasPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">HERRAMIENTAS DE TRABAJO</div>
        <h1>Checklists para revisar antes de firmar</h1>
        <p>Listas breves construidas para detectar omisiones frecuentes en control, análisis legal y revisión documental.</p>
      </section>

      <section className="section toolsIntro">
        <div className="legalNotice wideNotice">
          <strong>Cómo usar estas listas</strong>
          <p>Una checklist no reemplaza el juicio profesional. Si una casilla no aplica, explica por qué. Si un punto relevante no está en la lista, agrégalo: el caso concreto manda sobre el formato.</p>
        </div>
      </section>

      <section className="section toolsGridSection">
        <div className="toolsGrid">
          {checklists.map((checklist, index) => (
            <article className="toolCard" key={checklist.title}>
              <div className="toolHeading"><span>{String(index + 1).padStart(2, '0')}</span><h2>{checklist.title}</h2></div>
              <p>{checklist.description}</p>
              <ul className="checkList">
                {checklist.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section darkSection reviewBox">
        <div>
          <span className="eyebrow">REVISIÓN FINAL</span>
          <h2>Las cinco preguntas que deberían sobrevivir a cualquier formato</h2>
        </div>
        <ol className="bigQuestions">
          <li>¿Puedo demostrar cada afirmación relevante con una fuente identificable?</li>
          <li>¿La norma que cito estaba vigente y era aplicable al hecho?</li>
          <li>¿Estoy confundiendo una irregularidad con una mera deficiencia, riesgo o discrepancia interpretativa?</li>
          <li>¿La participación de cada persona está probada por actos concretos y deberes específicos?</li>
          <li>¿Mi conclusión seguiría siendo razonable si un tercero leyera también toda la evidencia de descargo?</li>
        </ol>
      </section>
    </>
  );
}
