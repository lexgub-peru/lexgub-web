'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1a202c',
      padding: '1rem 2rem',
      color: '#fff'
    }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>LEXGUB PERÚ</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
        <Link href="/nosotros" style={{ color: '#fff', textDecoration: 'none' }}>Nosotros</Link>
        <Link href="/normativa" style={{ color: '#fff', textDecoration: 'none' }}>Normativa</Link>
        <Link href="/contacto" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</Link>
      </div>
    </nav>
  );
}
