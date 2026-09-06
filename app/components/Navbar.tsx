'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LexGubBrand from './Brand';
import { GlobalSearchButton } from './GlobalSearch';
import { IconClose, IconMenu } from './icons';

/** Navegación principal: prioriza conocimiento antes que oferta comercial. */
const primary = [
  { href: '/', label: 'Inicio' },
  { href: '/control-gubernamental', label: 'Control' },
  { href: '/normativa', label: 'Biblioteca' },
  { href: '/tribunales', label: 'Tribunales' },
  { href: '/criterios', label: 'Criterios' },
  { href: '/columna', label: 'Columna' },
];

/** Material de consulta y perfil, agrupado como capa secundaria. */
const consulta = [
  { href: '/fuentes', label: 'Fuentes oficiales' },
  { href: '/guias', label: 'Guías' },
  { href: '/herramientas', label: 'Herramientas' },
  { href: '/glosario', label: 'Glosario' },
  { href: '/servicios', label: 'Perfil y servicios' },
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

  function navLink(link: { href: string; label: string }, inDrawer = false) {
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={isActive(link.href) ? 'page' : undefined}
        className={isActive(link.href) ? 'navActive' : undefined}
        tabIndex={inDrawer && !open ? -1 : undefined}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <>
      <a className="skipLink" href="#contenido">Saltar al contenido</a>

      <nav className="navbar" aria-label="Navegación principal">
        <Link className="lexgubNavBrand" href="/" aria-label="LEXGUB PERÚ — Inicio">
          <LexGubBrand compact tone="dark" />
        </Link>

        <div className="navlinks">
          {primary.map((link) => navLink(link))}
        </div>

        <GlobalSearchButton />

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

      <div id="mobile-nav" className="navDrawer" data-state={open ? 'open' : 'closed'} aria-hidden={!open}>
        <div className="navDrawerLinks">
          {primary.map((link) => navLink(link, true))}
        </div>
        <div className="navDrawerGroup">
          <span>Consulta</span>
          <div className="navDrawerChips">
            {consulta.map((link) => navLink(link, true))}
          </div>
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
