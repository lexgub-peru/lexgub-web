import Link from 'next/link';
import {
  IconAlert,
  IconArrowRight,
  IconBook,
  IconDocument,
  IconEvidence,
  IconScale,
  IconSearch,
  IconShield,
} from '../components/icons';

export const metadata = {
  title: 'Conocimiento jurídico',
  description:
    'Centro de conocimiento LexGub: biblioteca jurídica, jurisprudencia, radar normativo, criterios, píldoras, columna, fuentes oficiales y tribunales.',
};

const areas = [
  { title: 'Biblioteca jurídica', text: 'Normas, directivas, manuales, vigencia y fuente oficial.', href: '/normativa', icon: IconBook },
  { title: 'Jurisprudencia', text: 'Problema jurídico, criterio, hechos relevantes y utilidad práctica.', href: '/jurisprudencia', icon: IconScale },
  { title: 'Radar normativo', text: 'Cambios relevantes ordenados por fecha y trazabilidad.', href: '/radar', icon: IconDocument },
  { title: 'Criterios LexGub', text: 'Razonamiento aplicado a evidencia, temporalidad y participación.', href: '/criterios', icon: IconEvidence },
  { title: 'Píldoras', text: 'Claves breves para consulta rápida.', href: '/pildoras', icon: IconAlert },
  { title: 'Columna', text: 'Análisis editorial de problemas actuales de derecho público.', href: '/columna', icon: IconSearch },
];

const verificacion = [
  ['Fuentes oficiales', '/fuentes'],
  ['Tribunales y precedentes', '/tribunales'],
  ['Guías prácticas', '/guias'],
  ['Glosario', '/glosario'],
];

export default function ConocimientoPage() {
  return (
    <>
      <section className="pageHero compactHero v6KnowledgeHero">
        <div className="eyebrow">CONOCIMIENTO LEXGUB</div>
        <h1>Una sola puerta para investigar, verificar y comprender.</h1>
        <p>
          El contenido jurídico de LexGub se organiza aquí para evitar menús saturados: primero encuentra la fuente,
          luego revisa la versión aplicable, el criterio y su utilidad práctica.
        </p>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <span>INVESTIGAR</span>
          <h2>Elige el tipo de conocimiento que necesitas</h2>
        </div>
        <div className="v6KnowledgeGrid">
          {areas.map((item) => (
            <Link className="v6KnowledgeCard" href={item.href} key={item.title}>
              <span className="cardIcon"><item.icon /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong className="cardLink">Abrir <IconArrowRight /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section softSection">
        <div className="sectionHeading">
          <span>VERIFICAR</span>
          <h2>Cuando necesitas ir al origen</h2>
        </div>
        <nav className="quickGrid" aria-label="Recursos de verificación">
          {verificacion.map(([label, href]) => (
            <Link className="quickCard" href={href} key={href}>
              <IconShield />
              <strong>{label}</strong>
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
