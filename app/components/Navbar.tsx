'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LexGubBrand from './Brand';
import { IconClose, IconMenu } from './icons';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/control-gubernamental', label: 'Control' },
  { href: '/normativa', label: 'Normativa' },
  { href: '/columna', label: 'Columna' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('navOpen', open);
    return () => document.documentElement.classList.remove('navOpen');
  }, [open]);

  function isActive(href: string) {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  }

  return (
    <>
      <a className="skipLink" href="#contenido">Saltar al contenido</a>
      <nav className="navbar editorialNavbar" aria-label="Navegación principal">
        <Link className="lexgubNavBrand" href="/" aria-label="LEXGUB PERÚ — Inicio">
          <LexGubBrand compact tone="dark" />
        </Link>

        <div className="navlinks editorialNavlinks" data-state={open ? 'open' : 'closed'}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={isActive(link.href) ? 'navActive' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="navToggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className="navDrawer"
        data-state={open ? 'open' : 'closed'}
        aria-hidden={!open}
      >
        <div className="navDrawerLinks">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={isActive(link.href) ? 'navActive' : undefined}
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/guias" tabIndex={open ? 0 : -1}>Guías</Link>
          <Link href="/herramientas" tabIndex={open ? 0 : -1}>Herramientas</Link>
          <Link href="/glosario" tabIndex={open ? 0 : -1}>Glosario</Link>
        </div>
        <p className="navDrawerNote">LexGub Perú · análisis jurídico independiente, control gubernamental y derecho público.</p>
      </div>
      <button
        type="button"
        className="navScrim"
        data-state={open ? 'open' : 'closed'}
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
