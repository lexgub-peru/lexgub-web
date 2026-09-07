import Link from 'next/link';
import LiveFilter from '../components/LiveFilter';
import { IconArrowRight } from '../components/icons';
import { entradasRadar, etiquetaTipo, porAnio, textoRadar } from '../data/radar';

export const metadata = {
  title: 'Radar normativo',
  description:
    'Seguimiento cronológico de normas, modificatorias y jurisprudencia de control gubernamental ya contrastadas con su fuente oficial.',
};

const grupos = porAnio(entradasRadar);
const totalVerificadas = entradasRadar.filter((e) => e.verificado).length;

export default function RadarPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">RADAR NORMATIVO LEXGUB</div>
        <h1>Lo que cambió, en orden y con fuente</h1>
        <p>
          Línea de tiempo de las normas, modificatorias y sentencias que ya forman parte del compendio LexGub. Sirve
          para ver de un vistazo cómo se ha ido moviendo el marco normativo del control gubernamental y llegar en un
          clic a la ficha o al texto oficial.
        </p>
      </section>

      <section className="section">
        <div className="radarAviso">
          <strong>Qué es y qué no es.</strong> No es un boletín de novedades: no consulta fuentes externas ni anticipa
          publicaciones. Reúne lo que ya está incorporado al compendio, con la fecha que consta en la fuente.{' '}
          {totalVerificadas === entradasRadar.length
            ? `Las ${entradasRadar.length} entradas están contrastadas con fuente oficial identificada.`
            : `De ${entradasRadar.length} entradas, ${totalVerificadas} están contrastadas con fuente oficial identificada; las ${entradasRadar.length - totalVerificadas} restantes aparecen marcadas como pendientes de verificar.`}
        </div>

        <LiveFilter
          label="Filtrar el radar normativo"
          placeholder="Filtrar por norma, materia, órgano o año…"
          containerIds={['radar-lista']}
          emptyStateId="radar-vacio"
        />

        <div id="radar-lista" className="radarTimeline">
          {grupos.map(([anio, entradas]) => (
            // El año también es filtrable, y su texto incluye el de sus entradas: así
            // el bloque completo desaparece cuando ninguna coincide, en lugar de dejar
            // un encabezado de año con la lista vacía debajo.
            <section
              key={anio}
              className="radarAnio"
              data-search-item
              data-search-text={`${anio} ${entradas.map(textoRadar).join(' ')}`}
            >
              <h2 className="radarAnioTitulo">{anio}</h2>
              <ul className="radarEntradas">
                {entradas.map((e) => (
                  <li
                    key={e.id}
                    className={`radarEntrada radarEntrada--${e.tipo}`}
                    data-search-item
                    data-search-text={textoRadar(e)}
                  >
                    <div className="radarEntradaMeta">
                      <span className={`radarTipo radarTipo--${e.tipo}`}>{etiquetaTipo[e.tipo]}</span>
                      <time>{e.fecha}</time>
                      {!e.verificado && <span className="radarPendiente">Por verificar</span>}
                    </div>
                    <h3>{e.titulo}</h3>
                    {e.contexto && <p className="radarContexto">{e.contexto}</p>}
                    <p className="radarSumilla">{e.sumilla}</p>
                    <div className="radarEnlaces">
                      {e.href && (
                        <Link href={e.href}>
                          Ver ficha <IconArrowRight />
                        </Link>
                      )}
                      {e.fuente && (
                        <a href={e.fuente} target="_blank" rel="noreferrer">
                          Fuente oficial <IconArrowRight />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p id="radar-vacio" className="radarVacio" hidden>
          No hay entradas que coincidan con ese filtro.
        </p>
      </section>

      <section className="section softSection">
        <div className="legalNotice wideNotice">
          <strong>Criterio editorial del Radar</strong>
          <p>
            La inclusión de una norma o resolución no significa que sea aplicable automáticamente a todos los casos.
            Antes de utilizarla, identifique la fecha del hecho o procedimiento, revise su régimen transitorio y
            confirme la versión vigente en la fuente oficial.
          </p>
        </div>
      </section>
    </>
  );
}
