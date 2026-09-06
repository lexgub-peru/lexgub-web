type BrandProps = {
  className?: string;
  compact?: boolean;
  tone?: 'dark' | 'light';
};

export function LexGubMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 205"
      role="img"
      aria-label="Escudo de LexGub Perú con gallo y balanza"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lexgubShield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#102b46" />
          <stop offset="1" stopColor="#071827" />
        </linearGradient>
        <linearGradient id="lexgubGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1d27a" />
          <stop offset="0.5" stopColor="#c9a35f" />
          <stop offset="1" stopColor="#9a6f2c" />
        </linearGradient>
      </defs>

      <path
        d="M90 6 165 34v58c0 49-30 82-75 105C45 174 15 141 15 92V34Z"
        fill="url(#lexgubShield)"
        stroke="url(#lexgubGold)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M90 17 154 41v50c0 42-25 70-64 91-39-21-64-49-64-91V41Z"
        fill="none"
        stroke="#e3c06c"
        strokeOpacity=".48"
        strokeWidth="1.7"
      />

      {/* Cola del gallo */}
      <path d="M108 103c14-23 28-35 43-41-9 14-13 27-11 40" fill="none" stroke="#fffdf8" strokeWidth="10" strokeLinecap="round" />
      <path d="M111 109c18-13 31-18 44-18-10 9-15 18-17 29" fill="none" stroke="#fffdf8" strokeWidth="9" strokeLinecap="round" />
      <path d="M106 96c8-24 19-40 34-49-5 14-5 27 0 38" fill="none" stroke="#fffdf8" strokeWidth="8" strokeLinecap="round" />

      {/* Cuerpo y cabeza */}
      <path
        d="M72 64c10 2 18 11 21 24 4 18 11 25 24 20 9-3 16-10 24-18-3 13-2 23 5 31-14-5-25 0-31 10-7 12-13 20-24 23-13 4-27-1-35-12-8-11-10-24-5-37 4-12 10-23 17-31 2-4 3-7 4-10Z"
        fill="#fffdf8"
      />
      <circle cx="69" cy="54" r="15" fill="#fffdf8" />
      <path d="M57 50 40 56l18 7Z" fill="url(#lexgubGold)" />
      <circle cx="72" cy="52" r="3.2" fill="#0a1a2b" />
      <path d="M58 40c-2-8 5-13 10-6 0-9 9-11 12-3 4-7 12-5 12 3-7 0-12 4-15 9Z" fill="#fffdf8" />
      <path d="M58 64c-8 3-11 10-7 16 7 1 12-2 15-9" fill="none" stroke="#fffdf8" strokeWidth="6" strokeLinecap="round" />

      {/* Balanza */}
      <g fill="none" stroke="url(#lexgubGold)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M90 113v52" strokeWidth="5.2" />
        <path d="M55 124h70" strokeWidth="5.2" />
        <circle cx="90" cy="121" r="6" fill="#c9a35f" stroke="none" />
        <path d="M61 126 49 151h24Z" strokeWidth="3.8" />
        <path d="m119 126-12 25h24Z" strokeWidth="3.8" />
        <path d="M47 153c5 7 22 7 28 0" strokeWidth="3.8" />
        <path d="M105 153c5 7 22 7 28 0" strokeWidth="3.8" />
        <path d="M78 168h24" strokeWidth="5.2" />
      </g>
    </svg>
  );
}

export default function LexGubBrand({ className = '', compact = false, tone = 'dark' }: BrandProps) {
  return (
    <span className={`lexgubBrand lexgubBrand--${tone} ${compact ? 'lexgubBrand--compact' : ''} ${className}`.trim()}>
      <LexGubMark className="lexgubBrandMark" />
      <span className="lexgubBrandWords" aria-label="LEXGUB PERÚ">
        <span className="lexgubBrandName">LEXGUB</span>
        <span className="lexgubBrandCountry">PERÚ</span>
      </span>
    </span>
  );
}
