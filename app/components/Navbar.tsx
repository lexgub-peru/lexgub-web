import Link from 'next/link';

const links = [
  { href: '/control-gubernamental', label: 'Control' },
  { href: '/guias', label: 'Guías' },
  { href: '/normativa', label: 'Normativa' },
  { href: '/herramientas', label: 'Herramientas' },
  { href: '/glosario', label: 'Glosario' },
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <Link className="brand" href="/">LEXGUB <span>PERÚ</span></Link>
      <div className="navlinks">
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </div>
    </nav>
  );
}
