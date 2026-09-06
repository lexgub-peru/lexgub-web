'use client';

import Link from 'next/link';
import { useId, useMemo, useState } from 'react';
import {
  etiquetaVigencia,
  materias,
  normas,
  textoBusqueda,
  tiposNorma,
  type EstadoVigencia,
  type MateriaId,
  type Norma,
  type TipoNorma,
} from '../data/normativa';
import { IconSearch } from './icons';

type FiltroVigencia = 'todas' | 'vigentes' | 'historicas';

const fichas = normas.map((n) => ({ norma: n, texto: textoBusqueda(n) }));

const anios = Array.from(new Set(normas.map((n) => n.anio).filter((a): a is number => typeof a === 'number'))).sort(
  (a, b) => b - a,
);

const tiposEnUso = tiposNorma.filter((t) => normas.some((n) => n.tipo === t));

function esVigente(v: EstadoVigencia) {
  return v === 'vigente' || v === 'modificada';
}

export default function CompendioNormativo() {
  const buscadorId = useId();
  const [consulta, setConsulta] = useState('');
  const [materia, setMateria] = useState<MateriaId | 'todas'>('todas');
  const [tipo, setTipo] = useState<TipoNorma | 'todos'>('todos');
  const [vigencia, setVigencia] = useState<FiltroVigencia>('todas');
  const [anio, setAnio] = useState<number | 'todos'>('todos');

  const resultados = useMemo(() => {
    const q = consulta.trim().toLocaleLowerCase('es');
    return fichas
      .filter(({ norma, texto }) => {
        if (q && !texto.includes(q)) return false;
        if (materia !== 'todas' && norma.materia !== materia) return false;
        if (tipo !== 'todos' && norma.tipo !== tipo) return false;
        if (vigencia === 'vigentes' && !esVigente(norma.vigencia)) return false;
        if (vigencia === 'historicas' && esVigente(norma.vigencia)) return false;
        if (anio !== 'todos' && norma.anio !== anio) return false;
        return true;
      })
      .map(({ norma }) => norma);
  }, [consulta, materia, tipo, vigencia, anio]);

  const agrupados = useMemo(() => {
    return materias
      .map((m) => ({ materia: m, items: resultados.filter((n) => n.materia === m.id) }))
      .filter((g) => g.items.length > 0);
  }, [resultados]);

  const hayFiltros = consulta !== '' || materia !== 'todas' || tipo !== 'todos' || vigencia !== 'todas' || anio !== 'todos';

  function limpiar() {
    setConsulta('');
    setMateria('todas');
    setTipo('todos');
    setVigencia('todas');
    setAnio('todos');
  }

  return (
    <div className="compendio">
      <div className="compendioBuscador">
        <IconSearch className="liveFilterIcon" />
        <label className="srOnly" htmlFor={buscadorId}>Buscar en el compendio normativo</label>
        <input
          id={buscadorId}
          type="search"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Buscar norma, número o materia (ej. control simultáneo, denuncias, 219-2025)…"
          autoComplete="off"
        />
      </div>

      <div className="compendioFiltros" role="group" aria-label="Filtros del compendio">
        <label>
          <span>Materia</span>
          <select value={materia} onChange={(e) => setMateria(e.target.value as MateriaId | 'todas')}>
            <option value="todas">Todas las materias</option>
            {materias.map((m) => (
              <option key={m.id} value={m.id}>{m.letra}. {m.nombre}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Tipo</span>
          <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoNorma | 'todos')}>
            <option value="todos">Todos los tipos</option>
            {tiposEnUso.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Vigencia</span>
          <select value={vigencia} onChange={(e) => setVigencia(e.target.value as FiltroVigencia)}>
            <option value="todas">Vigentes e históricas</option>
            <option value="vigentes">Solo vigentes</option>
            <option value="historicas">Solo históricas</option>
          </select>
        </label>

        <label>
          <span>Año</span>
          <select value={anio} onChange={(e) => setAnio(e.target.value === 'todos' ? 'todos' : Number(e.target.value))}>
            <option value="todos">Todos los años</option>
            {anios.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="compendioResumen">
        <span aria-live="polite">
          {resultados.length} {resultados.length === 1 ? 'ficha' : 'fichas'}
          {hayFiltros ? ' según los filtros aplicados' : ' en el compendio'}
        </span>
        {hayFiltros && (
          <button type="button" onClick={limpiar}>Limpiar filtros</button>
        )}
      </div>

      {agrupados.length === 0 ? (
        <p className="emptyState">
          Ninguna ficha coincide con la búsqueda. Prueba con el número de la norma, la materia o una palabra clave
          como «denuncias», «control simultáneo» o «auditoría».
        </p>
      ) : (
        agrupados.map(({ materia: m, items }) => (
          <section className="compendioMateria" key={m.id} aria-labelledby={`materia-${m.id}`}>
            <header>
              <span className="compendioMateriaLetra">{m.letra}</span>
              <div>
                <h2 id={`materia-${m.id}`}>{m.nombre}</h2>
                <p>{m.descripcion}</p>
              </div>
            </header>
            <ul className="compendioLista">
              {items.map((n) => <FichaFila key={n.id} norma={n} />)}
            </ul>
          </section>
        ))
      )}

      <MateriasEnPreparacion />
    </div>
  );
}

function FichaFila({ norma }: { norma: Norma }) {
  return (
    <li className="fichaFila">
      <div className="fichaFilaCabecera">
        <span className="fichaTipo">{norma.tipo}</span>
        <EstadoChip vigencia={norma.vigencia} />
        {norma.verificacion === 'por-verificar' && (
          <span className="fichaChip fichaChip--aviso" title="Contiene datos pendientes de confirmación en fuente oficial">
            Por verificar
          </span>
        )}
      </div>

      <Link href={`/normativa/${norma.id}`} className="fichaTitulo">
        <strong>{norma.numero}</strong>
        <span>{norma.titulo}</span>
      </Link>

      <p className="fichaResumen">{norma.resumenLexGub}</p>

      <div className="fichaMetaLinea">
        {norma.resolucionAprobatoria && (
          <span>Aprobada por {norma.resolucionAprobatoria.norma}</span>
        )}
        {norma.modificatorias.length > 0 && (
          <span>{norma.modificatorias.length} {norma.modificatorias.length === 1 ? 'modificatoria' : 'modificatorias'}</span>
        )}
        {norma.versionIntegrada?.disponible && <span>Versión integrada disponible</span>}
      </div>

      <div className="fichaAcciones">
        <Link className="fichaAccion fichaAccion--principal" href={`/normativa/${norma.id}`}>Ver ficha</Link>
        <a className="fichaAccion" href={norma.fuenteOficial} target="_blank" rel="noreferrer">Fuente oficial ↗</a>
        {norma.pdf && (
          <a className="fichaAccion" href={norma.pdf} target="_blank" rel="noreferrer">PDF oficial ↗</a>
        )}
      </div>
    </li>
  );
}

export function EstadoChip({ vigencia }: { vigencia: EstadoVigencia }) {
  return (
    <span className={`fichaChip fichaChip--${vigencia}`}>{etiquetaVigencia[vigencia]}</span>
  );
}

/** Materias declaradas del compendio que aún no tienen fichas cargadas. */
function MateriasEnPreparacion() {
  const vacias = materias.filter((m) => !normas.some((n) => n.materia === m.id));
  if (vacias.length === 0) return null;

  return (
    <section className="compendioPendientes" aria-label="Materias en preparación">
      <h2>Materias en preparación</h2>
      <p>
        Estas materias forman parte del plan del compendio. No se publican fichas hasta contrastar cada norma,
        su resolución aprobatoria y sus modificatorias con fuente oficial.
      </p>
      <ul>
        {vacias.map((m) => (
          <li key={m.id}><strong>{m.letra}.</strong> {m.nombre}</li>
        ))}
      </ul>
    </section>
  );
}
