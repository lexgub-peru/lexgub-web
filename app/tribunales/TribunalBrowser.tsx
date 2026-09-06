'use client';

import { useMemo, useState } from 'react';
import { officialResources, type OfficialResource } from '../data/official-resources-v2';
import styles from '../fuentes/OfficialSources.module.css';

const tribunalResources = officialResources.filter((r) =>
  r.type === 'Resoluciones' || r.type === 'Precedentes' ||
  r.id === 'oece-acuerdos-sala-plena' || r.id === 'servir-tsc-sala1-2026'
);

function norm(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const statusLabel = { vigente: 'VIGENTE', historico: 'HISTÓRICO', consulta: 'CONSULTA' } as const;

export default function TribunalBrowser() {
  const [q, setQ] = useState('');
  const [institution, setInstitution] = useState('todas');
  const [type, setType] = useState('todos');

  const results = useMemo(() => {
    const needle = norm(q.trim());
    return tribunalResources.filter((r) => {
      const haystack = norm([r.title, r.subtitle, r.institution, r.type, r.matter, ...r.tags].join(' '));
      if (needle && !haystack.includes(needle)) return false;
      if (institution !== 'todas' && r.institution !== institution) return false;
      if (type !== 'todos' && r.type !== type) return false;
      return true;
    });
  }, [q, institution, type]);

  return <>
    <div className={styles.filters} style={{ gridTemplateColumns: 'minmax(260px,2fr) 1fr 1fr' }}>
      <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar principio de confianza, prescripción, irretroactividad, TCE…" aria-label="Buscar precedentes y resoluciones" />
      <select value={institution} onChange={(e) => setInstitution(e.target.value)} aria-label="Filtrar por tribunal">
        <option value="todas">Todos los tribunales</option>
        <option value="CGR">CGR · TSRA</option>
        <option value="OECE">OECE · TCP/TCE</option>
        <option value="SERVIR">SERVIR · TSC</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filtrar por tipo">
        <option value="todos">Resoluciones y precedentes</option>
        <option value="Precedentes">Precedentes / criterios</option>
        <option value="Resoluciones">Resoluciones</option>
        <option value="Compendio">Compendios / Sala Plena</option>
      </select>
    </div>
    <div className={styles.count}>{results.length} entradas verificadas en fuentes institucionales</div>
    <div className={styles.resourceGrid}>
      {results.map((r) => <TribunalCard resource={r} key={r.id} />)}
    </div>
  </>;
}

function TribunalCard({ resource: r }: { resource: OfficialResource }) {
  return <article className={styles.resource}>
    <div className={styles.resourceMeta}><span>{r.institution}</span><span>{r.type}</span><span>{statusLabel[r.status]}</span></div>
    <h3>{r.title}</h3>
    <p>{r.subtitle}</p>
    {r.note && <p className={styles.note}>{r.note}</p>}
    <div className={styles.actions}>
      <a href={r.verifyUrl} target="_blank" rel="noreferrer">Ficha oficial ↗</a>
      {r.downloadUrl && <a href={r.downloadUrl} target="_blank" rel="noreferrer">PDF / compendio ↗</a>}
      {r.elPeruanoUrl && <a href={r.elPeruanoUrl} target="_blank" rel="noreferrer">El Peruano ↗</a>}
      {r.spijUrl && <a href={r.spijUrl} target="_blank" rel="noreferrer">SPIJ ↗</a>}
    </div>
  </article>;
}
