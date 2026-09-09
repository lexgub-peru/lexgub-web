import Link from 'next/link';

type AuthorCardProps = {
  compact?: boolean;
};

export default function AuthorCard({ compact = false }: AuthorCardProps) {
  return (
    <aside className={`authorCard ${compact ? 'authorCard--compact' : ''}`.trim()} aria-label="Sobre LexGub Perú">
      <div className="authorCardKicker">EQUIPO EDITORIAL</div>
      <div className="authorCardIdentity">
        <h2>LexGub Perú</h2>
        <span>Derecho público · Control gubernamental · Gestión pública</span>
      </div>
      <p>
        Contenido jurídico especializado elaborado con enfoque en fuente oficial, evidencia, temporalidad normativa y análisis crítico.
      </p>
      <div className="authorCardTags" aria-label="Áreas de especialidad">
        <span>Control gubernamental</span>
        <span>Auditoría</span>
        <span>Contrataciones públicas</span>
        <span>Derecho administrativo</span>
      </div>
      <a className="authorCardLink" href="mailto:lexgub.peru@gmail.com?subject=Contacto%20LexGub%20Per%C3%BA">lexgub.peru@gmail.com <span aria-hidden="true">→</span></a>
      {!compact && <Link className="authorCardLink" href="/lexgub">Conocer LexGub <span aria-hidden="true">→</span></Link>}
    </aside>
  );
}
