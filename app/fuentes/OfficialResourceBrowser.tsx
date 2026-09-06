'use client';

import { useEffect, useMemo, useState } from 'react';
import { officialResources, type OfficialResource } from '../data/official-resources-v2';
import styles from './OfficialSources.module.css';

function norm(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const statusLabel = { vigente: 'VIGENTE', historico: 'HISTÓRICO', consulta: 'CONSULTA' } as const;

export default function OfficialResourceBrowser() {
  const [q, setQ] = useState('');
  const [institution, setInstitution] = useState('todas');
  const [type, setType] = useState('todos');
  const [matter, setMatter] = useState('todas');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('q');
    if (query) setQ(query);
  }, []);

  const institutions = Array.from(new Set(officialResources.map((r) => r.institution)));
  const types = Array.from(new Set(officialResources.map((r) => r.type)));
  const matters = Array.from(new Set(officialResources.map((r) => r.matter)));

  const results = useMemo(() => {
    const needle = norm(q.trim());
    return officialResources.filter((r) => {
      const haystack = norm([r.title, r.subtitle, r.institution, r.type, r.matter, r.status, ...r.tags].join(' '));
      if (needle && !haystack.includes(needle)) return false;
      if (institution !== 'todas' && r.institution !== institution) return false;
      if (type !== 'todos' && r.type !== type) return false;
      if (matter !== 'todas' && r.matter !== matter) return false;
      return true;
    });
  }, [q, institution, type, matter]);

  return (
    <>
      <div className={styles.filters}>
        <input value={q} onChange={(e) => setQ(e.target.value)} type="search" placeholder="Buscar técnica, directiva, TSRA, SERVIR, OSCE/OECE…" aria-label="Buscar recurso oficial" />
        <select value={institution} onChange={(e) => setInstitution(e.target.value)} aria-label="Filtrar por institución">
          <option value="todas">Todas las instituciones</option>
          {institutions.map((i) => <option value={i} key={i}>{i}</option>)}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filtrar por tipo">
          <option value="todos">Todos los tipos</option>
          {types.map((i) => <option value={i} key={i}>{i}</option>)}
        </select>
        <select value={matter} onChange={(e) => setMatter(e.target.value)} aria-label="Filtrar por materia">
          <option value="todas">Todas las materias</option>
          {matters.map((i) => <option value={i} key={i}>{i}</option>)}
        </select>
      </div>
      <div className={styles.count}>{results.length} recursos oficiales encontrados</div>
      {results.length ? <div className={styles.resourceGrid}>{results.map((r) => <ResourceCard resource={r} key={r.id} />)}</div> : <div className={styles.empty}>No hay coincidencias. Prueba con otra materia, número o institución.</div>}
    </>
  );
}

function ResourceCard({ resource: r }: { resource: OfficialResource }) {
  return <article className={styles.resource}>
    <div className={styles.resourceMeta}><span>{r.institution}</span><span>{r.type}</span><span>{r.matter}</span><span>{statusLabel[r.status]}</span></div>
    <h3>{r.title}</h3>
    <p>{r.subtitle}</p>
    {r.note && <p className={styles.note}>{r.note}</p>}
    {r.formats?.length ? <p className={styles.formats}>Formatos disponibles en la fuente: {r.formats.join(' · ')}</p> : null}
    <div className={styles.actions}>
      <a href={r.verifyUrl} target="_blank" rel="noreferrer">Verificar en fuente oficial ↗</a>
      {r.downloadUrl && <a href={r.downloadUrl} target="_blank" rel="noreferrer">Descargar desde fuente ↗</a>}
      {r.elPeruanoUrl && <a href={r.elPeruanoUrl} target="_blank" rel="noreferrer">El Peruano ↗</a>}
      {r.spijUrl && <a href={r.spijUrl} target="_blank" rel="noreferrer">SPIJ ↗</a>}
    </div>
  </article>;
}
