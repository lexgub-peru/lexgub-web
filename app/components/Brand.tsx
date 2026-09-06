type BrandProps = {
  className?: string;
  compact?: boolean;
  tone?: 'dark' | 'light';
};

export function LexGubMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <circle cx="34" cy="28" r="9" />
        <path d="M29 18c-1-6 5-10 9-5 1-6 8-7 10-2 5-3 9 2 6 7-8-2-15 0-20 5Z" />
        <path d="m25 25-13 5 13 5Z" />
        <path d="M31 36c9 1 15 7 18 17 3 11 9 16 18 15 6 0 12-4 18-11-2 9 0 17 6 24-12-4-22 0-28 8H37c-12-7-18-18-17-30 0-10 4-18 11-23Z" />
        <path d="M25 39c-7 2-10 8-7 14 6 1 11-2 14-7Z" />
      </g>
      <path d="M62 62c11-21 21-33 31-39-5 13-5 25 0 35" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M64 67c12-14 22-21 30-22-6 9-9 18-8 27" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M48 78v10M59 76l5 12M42 89h13M60 89h12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
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
        {!compact && <span className="lexgubBrandTagline">CONTROL · DERECHO PÚBLICO · EVIDENCIA</span>}
      </span>
    </span>
  );
}
