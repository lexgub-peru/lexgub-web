type IconProps = {
  className?: string;
  'aria-hidden'?: boolean;
};

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Escudo — marca institucional / autoridad de control. */
export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3.2 5 5.8v5.1c0 4.6 2.9 7.9 7 9.9 4.1-2 7-5.3 7-9.9V5.8L12 3.2Z" />
      <path d="m9 12.1 2.1 2.1 4-4.2" />
    </svg>
  );
}

/** Balanza — legalidad, criterio jurídico. */
export function IconScale({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3v16.6M7 4.6h10M4 9.6l3.4-5 3.4 5M4 9.6c0 1.8 1.5 3.2 3.4 3.2S10.8 11.4 10.8 9.6M13.2 9.6l3.4-5 3.4 5M13.2 9.6c0 1.8 1.5 3.2 3.4 3.2s3.4-1.4 3.4-3.2M8 21h8" />
    </svg>
  );
}

/** Libro abierto — guías y biblioteca normativa. */
export function IconBook({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 5.6c-1.4-1-3.6-1.6-6-1.6v13.6c2.4 0 4.6.6 6 1.6 1.4-1 3.6-1.6 6-1.6V4c-2.4 0-4.6.6-6 1.6Z" />
      <path d="M12 5.6v13" />
    </svg>
  );
}

/** Lupa — búsqueda. */
export function IconSearch({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.6" />
      <path d="m20 20-4.3-4.3" />
    </svg>
  );
}

/** Checklist — herramientas prácticas. */
export function IconChecklist({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M8 5.5h11M8 12h11M8 18.5h11" />
      <path d="m3.2 5.5 1 1 1.8-2M3.2 12l1 1 1.8-2M3.2 18.5l1 1 1.8-2" />
    </svg>
  );
}

/** Alerta — denuncias, situaciones adversas. */
export function IconAlert({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3.5 2.6 20h18.8L12 3.5Z" />
      <path d="M12 9.6v4.2" />
      <circle cx="12" cy="16.9" r="0.15" fill="currentColor" stroke="none" />
      <path d="M12 16.6v.5" />
    </svg>
  );
}

/** Documento — normativa, fichas y fuentes oficiales. */
export function IconDocument({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 3.4h7.2L19 8.2V20a.6.6 0 0 1-.6.6H7A.6.6 0 0 1 6.4 20V4a.6.6 0 0 1 .6-.6Z" />
      <path d="M14.2 3.4V8.2H19M9 12.4h6M9 16h6" />
    </svg>
  );
}

/** Contrato / expediente — contrataciones públicas. */
export function IconContract({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 3.6h9.2L20 8.4V19a.9.9 0 0 1-.9.9H6a.9.9 0 0 1-.9-.9V4.5a.9.9 0 0 1 .9-.9Z" />
      <path d="M14.4 3.6V8.4H20M8.4 12h7.2M8.4 15.4h4.6" />
    </svg>
  );
}

/** Lupa+documento — análisis probatorio. */
export function IconEvidence({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6.5 3.5h7.8L19 8.2v11.3a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <circle cx="11.3" cy="13.2" r="2.6" />
      <path d="m13.4 15.3 2 2" />
    </svg>
  );
}

/** Torre / institución — control simultáneo, gestión pública. */
export function IconLandmark({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 9.6 12 4l8 5.6M5 9.6v9M9 9.6v9M15 9.6v9M19 9.6v9M3.4 20.4h17.2" />
    </svg>
  );
}

/** Reloj — temporalidad, control posterior. */
export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3.2 1.9" />
    </svg>
  );
}

/** Correo — contacto. */
export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 5.6h16v12.8H4z" />
      <path d="m4.4 6 7.6 6.4L19.6 6" />
    </svg>
  );
}

/** Flecha — enlaces y llamadas a la acción. */
export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

/** Menú hamburguesa — navegación móvil. */
export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

/** Cierre — cerrar menú móvil. */
export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />
    </svg>
  );
}
