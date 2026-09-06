import Link from 'next/link';
import { IconShield } from './icons';

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
          <div className="brand footerBrandMark">
            <IconShield className="brandIcon" />
            <span className="brandWord">LEXGUB <span className="brandAccent">PERÚ</span></span>
          </div>
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
