import Link from 'next/link';
import { pildoras } from '../data/pildoras';
import { IconArrowRight } from '../components/icons';

export const metadata = {
  title: 'Píldoras LexGub',
  description:
    'Explicaciones breves de control gubernamental, normativa y jurisprudencia, cada una con su fuente oficial verificable.',
};

const etiquetaAudiencia: Record<string, string> = {
  auditores: 'Para auditores',
  autoridades: 'Para autoridades',
  ambos: 'General',
};

export default function PildorasPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">PÍLDORAS LEXGUB</div>
        <h1>Claves breves, con fuente oficial detrás</h1>
        <p>
          Explicaciones cortas sobre normativa, servicios de control y criterios relevantes. Cada píldora enlaza a la
          fuente que la respalda: son un punto de partida, no un sustituto de la lectura de la norma.
        </p>
      </section>

      <section className="section">
        <ul className="pildoraGrid">
          {pildoras.map((p) => {
            const Icon = p.icon;
            const externa = p.href.startsWith('http');
            return (
              <li className="pildoraCard" key={p.title}>
                <div className="pildoraCardTop">
                  <span className="pildoraIcon"><Icon /></span>
                  <div>
                    <span className="pildoraCategoria">{p.category}</span>
                    <span className={`pildoraAudiencia pildoraAudiencia--${p.audience}`}>
                      {etiquetaAudiencia[p.audience]}
                    </span>
                  </div>
                </div>
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
                <div className="pildoraPie">
                  {externa ? (
                    <a href={p.href} target="_blank" rel="noreferrer">
                      Ver fuente oficial <IconArrowRight />
                    </a>
                  ) : (
                    <Link href={p.href}>
                      Ver ficha <IconArrowRight />
                    </Link>
                  )}
                  <small>{p.source}</small>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="section softSection">
        <div className="legalNotice wideNotice">
          <strong>Cómo usar las píldoras</strong>
          <p>
            Son resúmenes de orientación. Antes de citar cualquiera de estos contenidos en un informe, oficio o
            decisión, abra la fuente oficial enlazada y verifique la versión vigente en la fecha del hecho analizado.
          </p>
        </div>
      </section>
    </>
  );
}
