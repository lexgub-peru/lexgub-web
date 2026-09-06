'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IconClose, IconMenu } from './icons';

const links = [
  { href: '/control-gubernamental', label: 'Control Gubernamental' },
  { href: '/guias', label: 'Guías' },
  { href: '/normativa', label: 'Normativa' },
  { href: '/herramientas', label: 'Herramientas' },
  { href: '/columna', label: 'Columna' },
  { href: '/servicios', label: 'Servicios' },
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
      <nav className="navbar" aria-label="Navegación principal">
        <Link className="brand navBrand" href="/" aria-label="LEXGUB PERÚ — Inicio">
          <Image
            src="/lexgub-logo.webp"
            alt=""
            width={420}
            height={164}
            priority
            className="navBrandLogo"
          />
        </Link>

        <div className="navlinks" data-state={open ? 'open' : 'closed'}>
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
          <Link href="/glosario" tabIndex={open ? 0 : -1}>Glosario</Link>
          <Link href="/contacto" tabIndex={open ? 0 : -1}>Contacto</Link>
        </div>
        <p className="navDrawerNote">Plataforma jurídica independiente especializada en control gubernamental peruano.</p>
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
