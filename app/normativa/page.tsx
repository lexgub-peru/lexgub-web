const fuentes = [
  ['Contraloría General de la República', 'Normas de control gubernamental, directivas, manuales y documentos técnicos oficiales.', 'https://www.gob.pe/contraloria'],
  ['OECE', 'Ley General de Contrataciones Públicas, reglamento, directivas e interpretación normativa.', 'https://www.gob.pe/oece'],
  ['SERVIR', 'Normativa del sistema administrativo de gestión de recursos humanos y criterios del Tribunal del Servicio Civil.', 'https://www.gob.pe/servir'],
  ['Diario Oficial El Peruano', 'Publicación oficial de normas legales y disposiciones vigentes.', 'https://elperuano.pe/'],
];

export default function NormativaPage() {
  return (
    <section className="contentPage">
      <div className="eyebrow">BASE NORMATIVA</div>
      <h1>Fuentes oficiales primero.</h1>
      <p>LexGub 2.0 se diseñará para identificar la norma aplicable por fecha, régimen, vigencia y fuente oficial antes de emitir una conclusión jurídica.</p>
      <div className="resourceList">
        {fuentes.map(([name, description, href]) => (
          <a className="resourceCard" key={name} href={href} target="_blank" rel="noreferrer">
            <strong>{name}</strong>
            <span>{description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
