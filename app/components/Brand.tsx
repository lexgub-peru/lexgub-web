type BrandProps = {
  className?: string;
  /** Versión de una sola línea, para barra de navegación y pie. */
  compact?: boolean;
  tone?: 'dark' | 'light';
};

/**
 * Logotipo puramente tipográfico. Sin isotipo: la marca descansa en la
 * composición de las letras, el filete y la línea de bajada.
 */
export default function LexGubBrand({ className = '', compact = false, tone = 'dark' }: BrandProps) {
  return (
    <span
      className={`lexgubBrand lexgubBrand--${tone} ${compact ? 'lexgubBrand--compact' : ''} ${className}`.trim()}
      aria-label="LEXGUB PERÚ"
    >
      <span className="lexgubBrandLine">
        <span className="lexgubBrandName">LEXGUB</span>
        <span className="lexgubBrandCountry">PERÚ</span>
      </span>
      {!compact && (
        <>
          <span className="lexgubBrandRule" aria-hidden="true" />
          <span className="lexgubBrandTagline">CONTROL · DERECHO PÚBLICO · EVIDENCIA</span>
        </>
      )}
    </span>
  );
}
