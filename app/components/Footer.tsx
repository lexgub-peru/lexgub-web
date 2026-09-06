import Link from 'next/link';
import LexGubBrand from './Brand';

const columns = [
  {
    heading: 'Explorar',
    links: [
      ['Control Gubernamental', '/control-gubernamental'],
      ['Biblioteca Jurídica', '/normativa'],
      ['Jurisprudencia LexGub', '/jurisprudencia'],
      ['Criterios LexGub', '/criterios'],
      ['Columna LexGub', '/columna'],
    ],
  },
  {
    heading: 'LexGub',
    links: [
      ['Quiénes somos', '/lexgub'],
      ['Misión, visión e historia', '/lexgub'],
      ['Fundador', '/lexgub'],
      ['Asesoría y consultoría', '/servicios'],
      ['Contacto', '/contacto'],
    ],
  },
  {
    heading: 'Recursos',
    links: [
      ['Asistente LexGub · Beta', '/asistente'],
      ['Tribunales administrativos', '/tribunales'],
      ['Fuentes oficiales', '/fuentes'],
      ['Guías prácticas', '/guias'],
      ['Herramientas', '/herramientas'],
      ['Glosario', '/glosario'],
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
