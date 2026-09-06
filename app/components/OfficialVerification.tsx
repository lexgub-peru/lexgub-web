export default function OfficialVerification({ officialUrl }: { officialUrl: string }) {
  return (
    <section className="fichaBloque">
      <h2>Verificación cruzada</h2>
      <p>
        LexGub recomienda comprobar la norma en tres niveles: publicación oficial, texto sistematizado y fuente de la entidad emisora.
        No todos los documentos internos o anexos se publican individualmente en El Peruano; cuando no exista una publicación específica,
        use el buscador oficial y contraste la resolución aprobatoria.
      </p>
      <div className="fichaAcciones">
        <a className="fichaAccion fichaAccion--principal" href={officialUrl} target="_blank" rel="noreferrer">Fuente emisora ↗</a>
        <a className="fichaAccion" href="https://diariooficial.elperuano.pe/normas" target="_blank" rel="noreferrer">Buscar en El Peruano ↗</a>
        <a className="fichaAccion" href="https://spij.minjus.gob.pe/" target="_blank" rel="noreferrer">Consultar SPIJ ↗</a>
        <a className="fichaAccion" href="/fuentes">Centro de fuentes LexGub</a>
      </div>
    </section>
  );
}
