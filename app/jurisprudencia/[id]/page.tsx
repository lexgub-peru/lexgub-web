import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getJurisprudencia, jurisprudencia } from '../../data/jurisprudencia';
import styles from '../Jurisprudencia.module.css';

export function generateStaticParams() {
  return jurisprudencia.map((j) => ({ id: j.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getJurisprudencia(id);
  if (!item) return { title: 'Jurisprudencia no encontrada' };
  return {
    title: `${item.numero} | Jurisprudencia LexGub`,
    description: item.criterio,
  };
}

export default async function JurisprudenciaFicha({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getJurisprudencia(id);
  if (!item) notFound();

  return <article className={styles.fichaPage}>
    <nav className={styles.breadcrumb} aria-label="Ruta de la ficha">
      <Link href="/">Inicio</Link><span>›</span>
      <Link href="/jurisprudencia">Jurisprudencia</Link><span>›</span>
      <span>{item.numero}</span>
    </nav>

    <header className={styles.fichaHero}>
      <div className={styles.eyebrow}>{item.organo} · {item.tipo}</div>
      <span className={styles.number}>{item.numero}</span>
      <h1>{item.titulo}</h1>
      <p className={styles.dek}>{item.criterio}</p>
    </header>

    <section className={styles.fichaMeta} aria-label="Datos de la decisión">
      <div><span>Órgano</span><strong>{item.organo}</strong></div>
      <div><span>Sala / Pleno</span><strong>{item.sala}</strong></div>
      <div><span>Fecha</span><strong>{item.fecha}</strong></div>
      <div><span>Materia</span><strong>{item.materia}</strong></div>
    </section>

    <div className={styles.actions}>
      <a href={item.fuenteOficial} target="_blank" rel="noreferrer">Verificar en fuente oficial ↗</a>
      {item.pdfOficial && <a href={item.pdfOficial} target="_blank" rel="noreferrer">Abrir / descargar PDF ↗</a>}
      {item.elPeruanoUrl && <a href={item.elPeruanoUrl} target="_blank" rel="noreferrer">El Peruano ↗</a>}
      {item.spijUrl && <a href={item.spijUrl} target="_blank" rel="noreferrer">SPIJ ↗</a>}
    </div>

    <section className={styles.block}>
      <h2>Problema jurídico</h2>
      <p>{item.problemaJuridico}</p>
    </section>

    <section className={styles.block}>
      <h2>Criterio del órgano jurisdiccional</h2>
      <p>{item.criterio}</p>
    </section>

    <section className={styles.block}>
      <h2>Hechos relevantes para comprender la decisión</h2>
      <ul>{item.hechosRelevantes.map((h) => <li key={h}>{h}</li>)}</ul>
    </section>

    <section className={styles.block}>
      <h2>Normas interpretadas o involucradas</h2>
      <ul>{item.normasInterpretadas.map((n) => <li key={n}>{n}</li>)}</ul>
    </section>

    <section className={styles.block}>
      <h2>¿Para qué le sirve a un auditor o abogado?</h2>
      <ul>{item.utilidadPractica.map((u) => <li key={u}>{u}</li>)}</ul>
    </section>

    <aside className={styles.callout}>
      <strong>Control de temporalidad</strong>
      <p>{item.temporalidad}</p>
    </aside>

    <aside className={styles.callout}>
      <strong>Alcance y cautela de cita</strong>
      <p>{item.alcance}</p>
    </aside>

    <section className={styles.block}>
      <h2>Temas relacionados</h2>
      <div className={styles.tags}>{item.temas.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </section>

    <section className={styles.block}>
      <h2>Conexiones LexGub</h2>
      <ul>
        <li><Link href="/normativa">Biblioteca Jurídica: revisa la norma y su versión aplicable.</Link></li>
        <li><Link href="/criterios">Criterios LexGub: contrasta temporalidad, evidencia e individualización.</Link></li>
        <li><Link href="/fuentes">Fuentes Oficiales: verifica publicación, texto vigente y repositorio institucional.</Link></li>
        <li><Link href="/asistente">Asistente LexGub: explora recursos relacionados sin pegar información reservada.</Link></li>
      </ul>
    </section>

    <p className={styles.block}>
      LexGub resume y sistematiza para facilitar la investigación. La cita profesional debe efectuarse siempre desde la
      resolución íntegra y su fuente oficial.
    </p>
  </article>;
}
