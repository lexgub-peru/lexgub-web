import Link from 'next/link';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/normativa', label: 'Normativa' },
  { href: '/contacto', label: 'Contacto' },
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
