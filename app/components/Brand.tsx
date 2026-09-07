/**
 * LEXGUB PERÚ — sistema de marca V5.
 *
 * Tres variantes funcionales:
 *   <LexGubIsotipo />              solo el gallo
 *   <LexGubBrand />                lockup horizontal: gallo + LEXGUB | PERÚ
 *   <LexGubBrand compact />        versión reducida para barra y pie
 *
 * El isotipo evita una representación literal del ave: combina barridos curvos
 * de cola en oro con una silueta compacta de cuello/cabeza. La cresta vino es
 * el único acento cálido. El resultado debe leerse como marca, no como dibujo.
 */

type Tone = 'dark' | 'light';

const CUERPO: Record<Tone, string> = {
  light: '#0B2137',
  dark: '#F4F1E8',
};

export function LexGubIsotipo({ className = '', tone = 'light' }: { className?: string; tone?: Tone }) {
  const body = CUERPO[tone];

  return (
    <svg
      className={className}
      viewBox="0 0 72 72"
      role="img"
      aria-label="Isotipo LexGub Perú"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cola: tres barridos ascendentes, inspirados en una pluma y no en un ave literal. */}
      <path
        d="M10 52C16 31 29 17 50 13C39 20 31 31 28 44C26 52 20 58 12 61"
        fill="none"
        stroke="#C8A35D"
        strokeWidth="6.4"
        strokeLinecap="round"
      />
      <path
        d="M15 54C21 36 31 25 46 21C37 28 32 37 31 47C30 53 27 58 22 62"
        fill="none"
        stroke="#E0C584"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <path
        d="M20 55C24 43 31 35 40 31C35 37 33 43 34 50C34 55 32 59 29 62"
        fill="none"
        stroke="#8A6526"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Cuello/cabeza: una sola masa limpia, sin patas ni detalles figurativos. */}
      <path
        fill={body}
        d="M29 59C26 51 26 42 28 34C30 25 36 18 44 16C50 14 57 16 61 21C55 19 50 21 47 25C42 31 41 39 45 46C47 50 50 53 54 55C46 53 38 54 29 59Z"
      />

      {/* Pico mínimo. */}
      <path fill="#C8A35D" d="M57 23L69 27L57 30Z" />

      {/* Cresta: tres pétalos geométricos. */}
      <path fill="#74172B" d="M43 15C41 11 42 7 45 5C47 8 47 12 46 15Z" />
      <path fill="#74172B" d="M47 15C46 10 49 6 52 5C53 9 51 13 50 16Z" />
      <path fill="#74172B" d="M51 16C52 11 56 9 59 10C58 14 55 16 51 18Z" />

      {/* Ojo discreto para conservar reconocimiento a tamaños medianos. */}
      <circle cx="53.5" cy="22.5" r="1.4" fill={tone === 'dark' ? '#0B2137' : '#F8F5EE'} />
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
          <span className="lgBrandTagline">ASESORÍA · CONTROL · DERECHO PÚBLICO</span>
        )}
      </span>
    </span>
  );
}
