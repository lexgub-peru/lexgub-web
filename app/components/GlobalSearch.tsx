'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { IconSearch } from './icons';
import {
  scoreSearchItem,
  searchCatalog,
  searchKinds,
  type SearchKind,
} from '../data/search-catalog-v2';
import styles from './GlobalSearch.module.css';

type FilterKind = 'Todo' | SearchKind;

function getResults(query: string, kind: FilterKind, limit?: number) {
  const scored = searchCatalog
    .map((item) => ({ item, score: scoreSearchItem(item, query) }))
    .filter(({ item, score }) => {
      if (kind !== 'Todo' && item.kind !== kind) return false;
      return query.trim() ? score > 0 : Boolean(item.featured);
    })
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'es'));

  return typeof limit === 'number' ? scored.slice(0, limit) : scored;
}

function SearchInput({ query, setQuery, autoFocus }: { query: string; setQuery: (value: string) => void; autoFocus?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!autoFocus) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(timer);
  }, [autoFocus]);

  return (
    <div className={styles.inputWrap}>
      <IconSearch className={styles.inputIcon} />
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Busca AOP, Ley 32069, TSRA, SPIJ, evidencia, PAD…"
        aria-label="Buscar en LexGub"
        autoComplete="off"
      />
    </div>
  );
}

function SearchFilters({ kind, setKind }: { kind: FilterKind; setKind: (value: FilterKind) => void }) {
  return (
    <div className={styles.filters} aria-label="Filtrar resultados por tipo">
      {(['Todo', ...searchKinds] as FilterKind[]).map((filter) => (
        <button
          type="button"
          key={filter}
          className={`${styles.filter} ${filter === kind ? styles.filterActive : ''}`}
          onClick={() => setKind(filter)}
          aria-pressed={filter === kind}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

function ResultList({ query, kind, limit, onSelect }: { query: string; kind: FilterKind; limit?: number; onSelect?: () => void }) {
  const results = useMemo(() => getResults(query, kind, limit), [query, kind, limit]);
  const showingFeatured = !query.trim();

  return (
    <>
      <div className={styles.meta}>
        <span>{showingFeatured ? 'Accesos destacados' : `${results.length} ${results.length === 1 ? 'resultado' : 'resultados'}`}</span>
        <span>{kind === 'Todo' ? 'Todo LexGub' : kind}</span>
      </div>
      <div className={styles.results} aria-live="polite">
        {results.length > 0 ? (
          results.map(({ item }) => (
            <Link className={styles.result} href={item.href} key={item.id} onClick={onSelect}>
              <div className={styles.resultMain}>
                <span className={styles.kind}>{item.kind}{item.verified ? ' · VERIFICADA' : ''}</span>
                <strong>{item.title}</strong>
                <p>{item.subtitle}</p>
              </div>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          ))
        ) : (
          <div className={styles.empty}>
            <strong>No encontré una coincidencia exacta.</strong>
            <p>Prueba con el número de la norma, una sigla, tribunal, institución o concepto jurídico.</p>
          </div>
        )}
      </div>
    </>
  );
}

export function GlobalSearchButton() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<FilterKind>('Todo');

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
      if (isShortcut) {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  function close() {
    setOpen(false);
    setKind('Todo');
  }

  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => setOpen(true)} aria-label="Buscar en LexGub">
        <IconSearch />
        <span>Buscar</span>
        <kbd>⌘K</kbd>
      </button>

      {open && (
        <div className={styles.overlay} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-label="Buscador LexGub">
            <div className={styles.header}>
              <SearchInput query={query} setQuery={setQuery} autoFocus />
              <button type="button" className={styles.close} onClick={close} aria-label="Cerrar buscador">×</button>
            </div>
            <SearchFilters kind={kind} setKind={setKind} />
            <ResultList query={query} kind={kind} limit={12} onSelect={close} />
          </section>
        </div>
      )}
    </>
  );
}

export function SearchPageExperience({ initialQuery = '' }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [kind, setKind] = useState<FilterKind>('Todo');

  return (
    <section className={styles.pageShell}>
      <div className={styles.pageIntro}>
        <span>BUSCADOR LEXGUB</span>
        <h1>Encuentra la norma, el criterio o la fuente oficial que necesitas.</h1>
        <p>Una búsqueda transversal sobre Biblioteca Jurídica, fuentes oficiales, guías, herramientas, glosario, criterios y análisis editoriales.</p>
      </div>
      <div className={styles.pagePanel}>
        <div className={styles.header}><SearchInput query={query} setQuery={setQuery} autoFocus /></div>
        <SearchFilters kind={kind} setKind={setKind} />
        <ResultList query={query} kind={kind} />
      </div>
    </section>
  );
}

export function HomeSearchBand() {
  const suggestions = [
    ['AOP', 'AOP'],
    ['Ley 32069', 'Ley 32069'],
    ['TSRA', 'TSRA'],
    ['SPIJ', 'SPIJ'],
    ['PAD', 'PAD'],
    ['Denuncias', 'denuncias'],
  ];

  return (
    <section className={styles.band} aria-labelledby="home-search-title">
      <div className={styles.bandTop}>
        <div className={styles.bandCopy}>
          <span>BUSCADOR TRANSVERSAL</span>
          <h2 id="home-search-title">Busca como realmente trabajas.</h2>
          <p>Una sola consulta para recorrer normas, fuentes oficiales, criterios, herramientas y análisis LexGub.</p>
        </div>
        <form className={styles.bandForm} action="/buscar" method="get">
          <input name="q" type="search" placeholder="Ej. AOP, Ley 32069, TSRA, evidencia…" aria-label="Buscar en LexGub" />
          <button type="submit">Buscar en LexGub</button>
        </form>
      </div>
      <div className={styles.suggestions} aria-label="Búsquedas sugeridas">
        {suggestions.map(([label, query]) => <Link key={label} href={`/buscar?q=${encodeURIComponent(query)}`}>{label}</Link>)}
      </div>
    </section>
  );
}
