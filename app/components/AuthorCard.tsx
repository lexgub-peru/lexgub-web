import Link from 'next/link';

type AuthorCardProps = {
  compact?: boolean;
};

export default function AuthorCard({ compact = false }: AuthorCardProps) {
  return (
    <aside className={`authorCard ${compact ? 'authorCard--compact' : ''}`.trim()} aria-label="Sobre el fundador y autor">
      <div className="authorCardKicker">FUNDADOR · AUTOR</div>
      <div className="authorCardTop">
        <img
          src="/marvyn-gallo-retrato.webp"
          alt="Marvyn Enrique Gallo Rojas"
          width="640"
          height="800"
          loading="lazy"
          className="authorCardPhoto"
        />
        <div className="authorCardIdentity">
          <h2>Marvyn Enrique Gallo Rojas</h2>
          <span>Abogado · Fundador de LexGub Perú</span>
        </div>
      </div>
      <p>
        Especializado en control gubernamental, auditoría, contrataciones públicas y derecho administrativo,
        con enfoque en evidencia, fuente oficial, temporalidad normativa y análisis jurídico riguroso.
      </p>
      <div className="authorCardTags" aria-label="Áreas de especialidad">
        <span>Control gubernamental</span>
        <span>Auditoría</span>
        <span>Contrataciones públicas</span>
        <span>Derecho administrativo</span>
      </div>
      <Link className="authorCardLink" href="/lexgub">Conocer fundador y LexGub <span aria-hidden="true">→</span></Link>
    </aside>
  );
}
