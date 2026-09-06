'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { jurisprudencia, textoJurisprudencia } from '../data/jurisprudencia';
import styles from './Jurisprudencia.module.css';

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es').trim();
}

export default function JurisprudenciaBrowser() {
  const [q, setQ] = useState('');
  const [organo, setOrgano] = useState('todos');
  const [materia, setMateria] = useState('todas');

  const materias = Array.from(new Set(jurisprudencia.map((j) => j.materia)));
  const results = useMemo(() => {
    const needle = normalize(q);
    return jurisprudencia.filter((j) => {
      if (organo !== 'todos' && j.organo !== organo) return false;
      if (materia !== 'todas' && j.materia !== materia) return false;
      if (!needle) return true;
      return normalize(textoJurisprudencia(j)).includes(needle) || needle.split(/\s+/).every((token) => normalize(textoJurisprudencia(j)).includes(token));
    });
  }, [q, organo, materia]);

  return <>
    <div className={styles.filters}>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar comité de recepción, prueba indiciaria, Contraloría, tipicidad…"
        aria-label="Buscar jurisprudencia"
      />
      <select value={organo} onChange={(e) => setOrgano(e.target.value)} aria-label="Filtrar por órgano">
        <option value="todos">Todos los órganos</option>
        <option value="Corte Suprema">Corte Suprema</option>
        <option value="Tribunal Constitucional">Tribunal Constitucional</option>
      </select>
      <select value={materia} onChange={(e) => setMateria(e.target.value)} aria-label="Filtrar por materia">
        <option value="todas">Todas las materias</option>
        {materias.map((m) => <option key={m} value={m}>{m}</option>)}
      </select>
    </div>

    <div className={styles.count}>
      <span>{results.length} {results.length === 1 ? 'decisión' : 'decisiones'} verificadas</span>
      <span>Fuente: Poder Judicial / Tribunal Constitucional</span>
    </div>

    {results.length ? <div className={styles.grid}>
      {results.map((j) => <article className={styles.card} key={j.id}>
        <div className={styles.meta}>
          <span>{j.organo}</span>
          <span>{j.tipo}</span>
          <span>{j.materia}</span>
        </div>
        <span className={styles.number}>{j.numero}</span>
        <h2>{j.titulo}</h2>
        <p>{j.criterio}</p>
        <p className={styles.problem}><strong>Problema jurídico:</strong> {j.problemaJuridico}</p>
        <div className={styles.tags}>{j.temas.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <Link className={styles.open} href={`/jurisprudencia/${j.id}`}>Abrir ficha LexGub <span>→</span></Link>
      </article>)}
    </div> : <div className={styles.empty}>No hay coincidencias. Prueba con una materia más amplia o con el número de la casación.</div>}
  </>;
}
