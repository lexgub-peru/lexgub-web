import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EstadoChip } from '../../components/CompendioNormativo';
import { etiquetaVigencia, getMateria, getNorma, normas } from '../../data/normativa';

export function generateStaticParams() {
  return normas.map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const norma = getNorma(id);
  if (!norma) return { title: 'Ficha no encontrada' };
  return {
    title: `${norma.numero} — ${norma.titulo}`,
    description: norma.resumenLexGub,
  };
}

export default async function FichaNormativaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const norma = getNorma(id);
  if (!norma) notFound();

  const materia = getMateria(norma.materia);
  const relacionadas = norma.relacionadas.map(getNorma).filter((n) => n !== undefined);

  return (
    <article className="fichaPage">
      <nav className="articleBreadcrumb fichaBreadcrumb" aria-label="Ruta de la ficha">
        <Link href="/">Inicio</Link><span>›</span>
        <Link href="/normativa">Compendio normativo</Link><span>›</span>
        <span>{norma.numero}</span>
      </nav>

      <header className="fichaCabecera">
        <div className="fichaCabeceraChips">
          <span className="fichaTipo">{norma.tipo}</span>
          <EstadoChip vigencia={norma.vigencia} />
          {materia && <span className="fichaChip fichaChip--materia">{materia.letra}. {materia.nombre}</span>}
        </div>
        <h1>{norma.numero}</h1>
        <p className="dek">{norma.titulo}</p>
      </header>

      {norma.verificacion === 'por-verificar' && (
        <aside className="fichaAviso" role="note">
          <strong>Dato pendiente de confirmación</strong>
          <p>{norma.notaVerificacion ?? 'Esta ficha contiene información que aún no ha sido contrastada con fuente oficial.'}</p>
        </aside>
      )}

      <section className="fichaDatos" aria-label="Datos de la norma">
        <dl>
          <div>
            <dt>Materia</dt>
            <dd>{materia ? `${materia.letra}. ${materia.nombre}` : '—'}</dd>
          </div>
          <div>
            <dt>Tipo</dt>
            <dd>{norma.tipo}</dd>
          </div>
          <div>
            <dt>Fecha de emisión</dt>
            <dd>{norma.fechaEmision ?? <span className="fichaSinDato">No contrastada en esta revisión</span>}</dd>
          </div>
          <div>
            <dt>Fecha de publicación</dt>
            <dd>{norma.fechaPublicacion ?? <span className="fichaSinDato">No contrastada en esta revisión</span>}</dd>
          </div>
          <div>
            <dt>Resolución que la aprueba</dt>
            <dd>
              {norma.resolucionAprobatoria ? (
                <>
                  {norma.resolucionAprobatoria.fuente ? (
                    <a href={norma.resolucionAprobatoria.fuente} target="_blank" rel="noreferrer">
                      {norma.resolucionAprobatoria.norma} ↗
                    </a>
                  ) : (
                    norma.resolucionAprobatoria.norma
                  )}
                  {norma.resolucionAprobatoria.verificacion === 'por-verificar' && (
                    <span className="fichaSinDato"> · pendiente de confirmación</span>
                  )}
                </>
              ) : (
                <span className="fichaSinDato">No confirmada</span>
              )}
            </dd>
          </div>
          <div>
            <dt>Última modificación identificada</dt>
            <dd>
              {norma.modificatorias.length > 0
                ? norma.modificatorias[norma.modificatorias.length - 1].norma
                : <span className="fichaSinDato">Ninguna registrada</span>}
            </dd>
          </div>
          <div>
            <dt>Estado</dt>
            <dd>{etiquetaVigencia[norma.vigencia]}</dd>
          </div>
          <div>
            <dt>Versión integrada</dt>
            <dd>
              {norma.versionIntegrada?.disponible ? (
                norma.versionIntegrada.url ? (
                  <a href={norma.versionIntegrada.url} target="_blank" rel="noreferrer">Disponible ↗</a>
                ) : 'Disponible'
              ) : 'No registrada'}
            </dd>
          </div>
        </dl>

        <div className="fichaAcciones fichaAcciones--cabecera">
          <a className="fichaAccion fichaAccion--principal" href={norma.fuenteOficial} target="_blank" rel="noreferrer">
            Fuente oficial ↗
          </a>
          {norma.pdf && (
            <a className="fichaAccion" href={norma.pdf} target="_blank" rel="noreferrer">Descargar PDF oficial ↗</a>
          )}
          {norma.versionIntegrada?.url && (
            <a className="fichaAccion" href={norma.versionIntegrada.url} target="_blank" rel="noreferrer">Versión integrada ↗</a>
          )}
        </div>
      </section>

      <div className="fichaCuerpo">
        <section className="fichaBloque">
          <h2>¿Para qué sirve?</h2>
          <p>{norma.resumenLexGub}</p>
        </section>

        {norma.puntosClave.length > 0 && (
          <section className="fichaBloque">
            <h2>Puntos clave</h2>
            <ul className="fichaPuntos">
              {norma.puntosClave.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </section>
        )}

        {norma.sustituyeA && (
          <section className="fichaBloque">
            <h2>Marco al que sustituye</h2>
            <div className="fichaTimelineItem">
              <strong>{norma.sustituyeA.norma}</strong>
              {norma.sustituyeA.sumilla && <p>{norma.sustituyeA.sumilla}</p>}
            </div>
          </section>
        )}

        {norma.modificatorias.length > 0 && (
          <section className="fichaBloque">
            <h2>Modificatorias</h2>
            <ol className="fichaTimeline">
              {norma.modificatorias.map((m) => (
                <li key={m.norma}>
                  <div className="fichaTimelineItem">
                    <strong>
                      {m.fuente ? (
                        <a href={m.fuente} target="_blank" rel="noreferrer">{m.norma} ↗</a>
                      ) : m.norma}
                    </strong>
                    {m.fecha && <span className="fichaTimelineFecha">{m.fecha}</span>}
                    {m.sumilla && <p>{m.sumilla}</p>}
                    {m.verificacion === 'por-verificar' && (
                      <span className="fichaSinDato">Pendiente de confirmación</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {norma.usoPractico && (
          <section className="fichaBloque">
            <h2>Uso práctico LexGub</h2>
            <p>{norma.usoPractico}</p>
          </section>
        )}

        <section className="fichaBloque fichaVigencia">
          <h2>Control de vigencia</h2>
          <p>
            Antes de aplicar esta norma a un caso, determine qué versión estaba vigente en la fecha del hecho analizado.
            Una modificatoria posterior no se aplica automáticamente a hechos anteriores.
          </p>
        </section>

        {relacionadas.length > 0 && (
          <section className="fichaBloque">
            <h2>Normas relacionadas</h2>
            <ul className="fichaRelacionadas">
              {relacionadas.map((r) => (
                <li key={r.id}>
                  <Link href={`/normativa/${r.id}`}>
                    <strong>{r.numero}</strong>
                    <span>{r.titulo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="fichaPie">
          Ficha informativa elaborada por LexGub Perú. No sustituye la lectura íntegra de la norma ni constituye
          asesoría jurídica para un caso concreto.{' '}
          <Link href="/normativa">Volver al compendio</Link>
        </p>
      </div>
    </article>
  );
}
