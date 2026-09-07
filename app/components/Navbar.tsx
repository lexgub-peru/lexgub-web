'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LexGubBrand from './Brand';
import { GlobalSearchButton } from './GlobalSearch';
import { IconClose, IconMenu } from './icons';

/**
 * Barra superior: nueve destinos. Es el máximo que cabe a 1440 px junto a la
 * marca, el buscador y el CTA sin que los enlaces pisen el logotipo.
 * «Inicio» no aparece porque esa función la cumple la marca.
 * Solo rutas que existen: no se enlaza nada que devuelva 404.
 */
const principal = [
  { href: '/auditores', label: 'Para auditores' },
  { href: '/autoridades', label: 'Para autoridades' },
  { href: '/normativa', label: 'Biblioteca' },
  { href: '/jurisprudencia', label: 'Jurisprudencia' },
  { href: '/radar', label: 'Radar' },
  { href: '/herramientas', label: 'Herramientas' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/lexgub', label: 'LexGub' },
  { href: '/contacto', label: 'Contacto' },
];

/**
 * Mapa completo del cajón. El cajón está disponible en todas las anchuras
 * —no solo en móvil— para que ninguna ruta dependa de que quepa en la barra.
 */
const enCajon = [
  { href: '/', label: 'Inicio' },
  ...principal,
  { href: '/pildoras', label: 'Píldoras' },
  { href: '/asistente', label: 'Asistente LexGub' },
];

/** Material complementario, en pastillas al pie del cajón. */
const complementario = [
  { href: '/control-gubernamental', label: 'Control gubernamental' },
  { href: '/criterios', label: 'Criterios' },
  { href: '/columna', label: 'Columna' },
  { href: '/guias', label: 'Guías' },
  { href: '/glosario', label: 'Glosario' },
  { href: '/tribunales', label: 'Tribunales y precedentes' },
  { href: '/fuentes', label: 'Fuentes oficiales' },
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
          {principal.map((link) => navLink(link))}
        </div>

        <div className="navActions">
          <GlobalSearchButton />
          <Link className="navCta" href="/contacto">Solicitar asesoría</Link>
          <button
            type="button"
            className="navToggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Cerrar el menú' : 'Abrir el menú completo'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <div id="mobile-nav" className="navDrawer" data-state={open ? 'open' : 'closed'} aria-hidden={!open}>
        <div className="navDrawerInner">
        <div className="navDrawerLinks">
          {enCajon.map((link) => navLink(link, true))}
        </div>
        <div className="navDrawerGroup">
          <span>Consulta y análisis</span>
          <div className="navDrawerChips">
            {complementario.map((link) => navLink(link, true))}
          </div>
        </div>
        <p className="navDrawerNote">
          LexGub Perú · conocimiento jurídico y asesoría especializada en control gubernamental.
        </p>
        </div>
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
