import Link from 'next/link';
import LexGubBrand from './Brand';

const columns = [
  {
    heading: 'Rutas',
    links: [
      ['Para auditores', '/auditores'],
      ['Para autoridades y gestores', '/autoridades'],
      ['Control gubernamental', '/control-gubernamental'],
      ['Asesoría y consultoría', '/servicios'],
      ['Quiénes somos', '/lexgub'],
      ['Contacto', '/contacto'],
    ],
  },
  {
    heading: 'Conocimiento',
    links: [
      ['Biblioteca jurídica', '/normativa'],
      ['Jurisprudencia LexGub', '/jurisprudencia'],
      ['Radar normativo', '/radar'],
      ['Criterios LexGub', '/criterios'],
      ['Píldoras LexGub', '/pildoras'],
      ['Columna LexGub', '/columna'],
    ],
  },
  {
    heading: 'Recursos',
    links: [
      ['Asistente LexGub · Beta', '/asistente'],
      ['Herramientas', '/herramientas'],
      ['Guías prácticas', '/guias'],
      ['Glosario', '/glosario'],
      ['Tribunales y precedentes', '/tribunales'],
      ['Fuentes oficiales', '/fuentes'],
    ],
  },
];


export default function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <div className="footerBrand">
          <Link href="/" className="lexgubFooterBrand" aria-label="LEXGUB PERÚ — Inicio">
            <LexGubBrand compact tone="dark" />
          </Link>
          <p>Asesoría · Consultoría · Conocimiento jurídico especializado</p>
        </div>

        <div className="footerColumns">
          {columns.map((column) => (
            <div key={column.heading} className="footerColumn">
              <span>{column.heading}</span>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={`${column.heading}-${label}`}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="footerDisclaimer">
        LEXGUB PERÚ es una empresa privada e independiente de asesoría, consultoría y conocimiento jurídico especializado.
        No pertenece ni representa a la Contraloría General de la República ni a otra entidad pública. La información publicada
        tiene finalidad profesional, académica e informativa; verifique siempre la vigencia y fuente oficial aplicable al caso concreto.
      </p>
      <div className="footerBottom">© {new Date().getFullYear()} LEXGUB PERÚ · Todos los derechos reservados.</div>
    </footer>
  );
}
