import Link from 'next/link';

type AuthorCardProps = {
  compact?: boolean;
};

export default function AuthorCard({ compact = false }: AuthorCardProps) {
  return (
    <aside className={`authorCard ${compact ? 'authorCard--compact' : ''}`.trim()} aria-label="Sobre el autor">
      <div className="authorCardKicker">SOBRE EL AUTOR</div>
      <div className="authorCardTop">
        <img
          src="/marvyn-gallo-author.webp"
          alt="Marvyn Enrique Gallo Rojas"
          width="720"
          height="720"
          loading="lazy"
          className="authorCardPhoto"
        />
        <div className="authorCardIdentity">
          <h2>Marvyn Enrique Gallo Rojas</h2>
          <span>Abogado</span>
        </div>
      </div>
      <p>
        Especializado en control gubernamental, auditoría, contrataciones públicas y derecho administrativo,
        con enfoque en evidencia, fuente oficial y análisis jurídico crítico.
      </p>
      <div className="authorCardTags" aria-label="Áreas de especialidad">
        <span>Control gubernamental</span>
        <span>Auditoría</span>
        <span>Contrataciones públicas</span>
        <span>Derecho administrativo</span>
      </div>
      <Link className="authorCardLink" href="/servicios">Perfil y servicios <span aria-hidden="true">→</span></Link>
    </aside>
  );
}
