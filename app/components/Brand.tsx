type BrandProps = {
  className?: string;
  compact?: boolean;
  tone?: 'dark' | 'light';
};

/**
 * Gallo de perfil: cresta, pico corto y barbilla colgante.
 * Trazado centrado ópticamente dentro del lienzo de 64.
 */
export function LexGubMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-11 -4)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M28 58C25.5 49 26 39.5 29.5 33L30 26L33 16L36 23L40 14L44 22L48 16L51 26C51.8 27.5 52.5 29 53 30L60 33L53 36C54.5 40 54 46 50.5 48C47 49.5 45 45.5 46 41C43.5 44 41.5 49.5 41.5 58Z M48.2 30A2.2 2.2 0 1 1 43.8 30A2.2 2.2 0 1 1 48.2 30Z"
        />
      </g>
    </svg>
  );
}

export default function LexGubBrand({ className = '', compact = false, tone = 'dark' }: BrandProps) {
  return (
    <span
      className={`lexgubBrand lexgubBrand--${tone} ${compact ? 'lexgubBrand--compact' : ''} ${className}`.trim()}
      aria-label="LEXGUB PERÚ"
    >
      <LexGubMark className="lexgubBrandMark" />
      <span className="lexgubBrandWords">
        <span className="lexgubBrandLine">
          <span className="lexgubBrandName">LEXGUB</span>
          <span className="lexgubBrandCountry">PERÚ</span>
        </span>
        {!compact && <span className="lexgubBrandTagline">CONTROL GUBERNAMENTAL · DERECHO PÚBLICO</span>}
      </span>
    </span>
  );
}
