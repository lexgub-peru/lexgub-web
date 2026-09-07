/**
 * LEXGUB PERÚ — sistema de marca V5.
 *
 * Tres variantes funcionales:
 *   <LexGubIsotipo />              solo el gallo
 *   <LexGubBrand />                lockup horizontal: gallo + LEXGUB | PERÚ
 *   <LexGubBrand compact />        versión reducida para barra y pie
 *
 * El gallo se construye con tres planos de color: cuerpo (navy o marfil según
 * el fondo), cola y pico en oro, y cresta en vino. Sin escudo ni balanza.
 */

type Tone = 'dark' | 'light';

const CUERPO: Record<Tone, string> = {
  light: '#0B2137',
  dark: '#F4F1E8',
};

export function LexGubIsotipo({ className = '', tone = 'light' }: { className?: string; tone?: Tone }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label="LexGub Perú"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cola: barrido sólido en oro */}
      <path fill="#C8A35D" d="M34 44c13 2 22-7 26-25 4 22-4 36-19 40-1-5-3-10-7-15Z" />
      {/* Cuerpo, cuello y cabeza */}
      <path fill={CUERPO[tone]} d="M26 14c5 0 8 4 8 9 0 3-1 5-2 7 3 4 4 9 4 15 0 8-4 13-10 13-7 0-11-6-10-14 1-6 2-11 4-15-2-2-3-4-3-7 0-5 4-8 9-8Z" />
      {/* Cresta */}
      <path fill="#74172B" d="m21 14 1-7 3 5 2-7 3 7 3-5 1 8c-4-2-9-2-13-1Z" />
      {/* Pico */}
      <path fill="#C8A35D" d="m19 20-10 3 10 3Z" />
      {/* Patas */}
      <path
        fill="none"
        stroke="#C8A35D"
        strokeWidth="2.2"
        strokeLinecap="round"
        d="M25 58v5M32 58v5"
      />
      {/* Ojo */}
      <circle cx="24.5" cy="18.5" r="1.6" fill={tone === 'dark' ? '#0B2137' : '#F8F5EE'} />
    </svg>
  );
}

type BrandProps = {
  className?: string;
  /** Una sola línea, sin bajada. Para barra de navegación y pie. */
  compact?: boolean;
  tone?: Tone;
  /** Oculta la bajada institucional incluso en la versión completa. */
  sinBajada?: boolean;
};

export default function LexGubBrand({
  className = '',
  compact = false,
  tone = 'dark',
  sinBajada = false,
}: BrandProps) {
  return (
    <span
      className={`lgBrand lgBrand--${tone} ${compact ? 'lgBrand--compact' : ''} ${className}`.trim()}
      aria-label="LEXGUB PERÚ"
    >
      <LexGubIsotipo className="lgBrandMark" tone={tone} />
      <span className="lgBrandText">
        <span className="lgBrandLine">
          <span className="lgBrandName">LEXGUB</span>
          <span className="lgBrandBar" aria-hidden="true" />
          <span className="lgBrandCountry">PERÚ</span>
        </span>
        {!compact && !sinBajada && (
          <span className="lgBrandTagline">DERECHO PÚBLICO PARA UN MEJOR ESTADO</span>
        )}
      </span>
    </span>
  );
}
