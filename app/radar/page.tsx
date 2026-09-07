import Link from 'next/link';
import { pildoras } from '../data/pildoras';
import { IconArrowRight } from '../components/icons';

export const metadata = {
  title: 'Radar Normativo LexGub',
  description:
    'Cambios normativos, jurisprudencia y alertas de control gubernamental seleccionados por utilidad práctica y enlazados a su fuente oficial.',
};

const radar = pildoras.filter((item) =>
  ['Norma clave', 'Actualización normativa', 'Actualidad · Obras por Impuestos', 'AOP', 'Jurisprudencia · Contrataciones'].includes(item.category),
);

const etiquetaAudiencia: Record<string, string> = {
  auditores: 'Para auditores',
  autoridades: 'Para autoridades',
  ambos: 'Interés general',
};

export default function RadarPage() {
  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">RADAR NORMATIVO LEXGUB</div>
        <h1>Lo que cambió, lo que importa y dónde verificarlo.</h1>
        <p>
          Una selección de cambios, decisiones y alertas con impacto práctico en control gubernamental y derecho público.
          El Radar no busca volumen: prioriza utilidad, temporalidad y trazabilidad hacia la fuente oficial.
        </p>
      </section>

      <section className="section">
        <ul className="pildoraGrid">
          {radar.map((item) => {
            const Icon = item.icon;
            const externa = item.href.startsWith('http');
            return (
              <li className="pildoraCard" key={item.title}>
                <div className="pildoraCardTop">
                  <span className="pildoraIcon"><Icon /></span>
                  <div>
                    <span className="pildoraCategoria">{item.category}</span>
                    <span className={`pildoraAudiencia pildoraAudiencia--${item.audience}`}>
                      {etiquetaAudiencia[item.audience]}
                    </span>
                  </div>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <div className="pildoraPie">
                  {externa ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Ver fuente oficial <IconArrowRight />
                    </a>
                  ) : (
                    <Link href={item.href}>Ver ficha <IconArrowRight /></Link>
                  )}
                  <small>{item.source}</small>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="section softSection">
        <div className="legalNotice wideNotice">
          <strong>Criterio editorial del Radar</strong>
          <p>
            La inclusión de una novedad no significa que sea aplicable automáticamente a todos los casos. Antes de utilizarla,
            identifique la fecha del hecho o procedimiento, revise su régimen transitorio y confirme la versión vigente en la fuente oficial.
          </p>
        </div>
      </section>
    </>
  );
}
