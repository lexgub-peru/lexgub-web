import Image from 'next/image';
import Link from 'next/link';

const columns = [
  {
    heading: 'Explorar',
    links: [
      ['Control Gubernamental', '/control-gubernamental'],
      ['Guías prácticas', '/guias'],
      ['Biblioteca normativa', '/normativa'],
    ],
  },
  {
    heading: 'Recursos',
    links: [
      ['Herramientas y checklists', '/herramientas'],
      ['Glosario de control', '/glosario'],
      ['Contacto', '/contacto'],
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <div className="footerBrand">
          <Link href="/" className="footerLogoLink" aria-label="LEXGUB PERÚ — Inicio">
            <Image
              src="/lexgub-logo.webp"
              alt="LEXGUB PERÚ"
              width={420}
              height={164}
              className="footerLogo"
            />
          </Link>
          <p>Control gubernamental · Derecho público · Gestión pública</p>
        </div>

        <div className="footerColumns">
          {columns.map((column) => (
            <div key={column.heading} className="footerColumn">
              <span>{column.heading}</span>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={href}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="footerDisclaimer">
        LEXGUB PERÚ es una plataforma jurídica independiente. No pertenece ni representa a la Contraloría General de la
        República ni a otra entidad pública. Verifique siempre la vigencia y fuente oficial de la normativa aplicable.
      </p>
      <div className="footerBottom">© {new Date().getFullYear()} LEXGUB PERÚ · Todos los derechos reservados.</div>
    </footer>
  );
}
