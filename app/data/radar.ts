import { jurisprudencia } from './jurisprudencia';
import { normas, type Norma, type Referencia } from './normativa-v2';

/**
 * Radar normativo — seguimiento de cambios ya contrastados con fuente oficial.
 *
 * NO es un boletín de novedades ni un agregador de noticias: no consulta
 * ninguna fuente externa en tiempo de ejecución ni infiere nada. Se limita a
 * ordenar cronológicamente lo que ya está publicado en el compendio y en el
 * repertorio de jurisprudencia, cada entrada con su enlace oficial.
 *
 * Regla: si un dato no está verificado en su ficha de origen, aquí tampoco se
 * presenta como cierto — se hereda la marca `verificacion` y se muestra.
 */

export type TipoEntrada = 'norma' | 'modificatoria' | 'jurisprudencia';

export type EntradaRadar = {
  id: string;
  tipo: TipoEntrada;
  /** Fecha tal como figura en la fuente. No se normaliza ni se reescribe. */
  fecha: string;
  /** Clave de orden derivada de `fecha`; null si el texto no es interpretable. */
  orden: number | null;
  anio: number | null;
  titulo: string;
  sumilla: string;
  /** Ficha interna, cuando existe. */
  href?: string;
  /** Enlace a la fuente oficial, cuando la ficha de origen lo declara. */
  fuente?: string;
  /** Norma o resolución de la que cuelga la entrada. */
  contexto?: string;
  verificado: boolean;
};

const MESES: Record<string, number> = {
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
  julio: 7, agosto: 8, septiembre: 9, setiembre: 9, octubre: 10,
  noviembre: 11, diciembre: 12,
};

/**
 * Interpreta «12 de mayo de 2023». Devuelve null ante cualquier variante que no
 * reconozca: es preferible dejar una entrada sin ordenar que inventarle fecha.
 */
export function claveFecha(texto: string): { orden: number; anio: number } | null {
  const m = /(\d{1,2})\s+de\s+([a-záéíóú]+)\s+de\s+(\d{4})/i.exec(texto.toLocaleLowerCase('es'));
  if (!m) {
    const soloAnio = /\b(19|20)\d{2}\b/.exec(texto);
    if (!soloAnio) return null;
    const anio = Number(soloAnio[0]);
    return { orden: anio * 10000, anio };
  }
  const mes = MESES[m[2]];
  if (!mes) return null;
  const anio = Number(m[3]);
  return { orden: anio * 10000 + mes * 100 + Number(m[1]), anio };
}

function fechaDeNorma(n: Norma): string | undefined {
  // La exigible suele ser la de publicación; la de emisión solo como respaldo.
  return n.fechaPublicacion ?? n.fechaEmision;
}

function entradaNorma(n: Norma): EntradaRadar | null {
  const fecha = fechaDeNorma(n);
  if (!fecha) return null;
  const k = claveFecha(fecha);
  return {
    id: `norma-${n.id}`,
    tipo: 'norma',
    fecha,
    orden: k?.orden ?? null,
    anio: k?.anio ?? null,
    titulo: `${n.numero} — ${n.titulo}`,
    sumilla: n.resumenLexGub,
    href: `/normativa/${n.id}`,
    fuente: n.fuenteOficial,
    verificado: n.verificacion === 'verificado',
  };
}

function entradaModificatoria(n: Norma, r: Referencia, i: number): EntradaRadar | null {
  if (!r.fecha) return null;
  const k = claveFecha(r.fecha);
  return {
    id: `mod-${n.id}-${i}`,
    tipo: 'modificatoria',
    fecha: r.fecha,
    orden: k?.orden ?? null,
    anio: k?.anio ?? null,
    titulo: r.norma,
    sumilla: r.sumilla ?? 'Modifica la norma indicada. Consulte el texto oficial.',
    href: `/normativa/${n.id}`,
    fuente: r.fuente,
    contexto: n.numero,
    verificado: r.verificacion === 'verificado',
  };
}

const entradasNormativas: EntradaRadar[] = normas.flatMap((n) => [
  entradaNorma(n),
  ...n.modificatorias.map((r, i) => entradaModificatoria(n, r, i)),
]).filter((e): e is EntradaRadar => e !== null);

const entradasJurisprudencia: EntradaRadar[] = jurisprudencia.map((j) => {
  const k = claveFecha(j.fecha);
  return {
    id: `jur-${j.id}`,
    tipo: 'jurisprudencia' as const,
    fecha: j.fecha,
    orden: k?.orden ?? null,
    anio: k?.anio ?? null,
    titulo: `${j.numero} — ${j.titulo}`,
    sumilla: j.criterio,
    href: `/jurisprudencia/${j.id}`,
    contexto: j.organo,
    verificado: true,
  };
});

/** Más reciente primero. Lo que no se pudo fechar queda al final, no se descarta. */
export const entradasRadar: EntradaRadar[] = [...entradasNormativas, ...entradasJurisprudencia]
  .sort((a, b) => {
    if (a.orden === null) return 1;
    if (b.orden === null) return -1;
    return b.orden - a.orden;
  });

export const etiquetaTipo: Record<TipoEntrada, string> = {
  norma: 'Norma',
  modificatoria: 'Modificatoria',
  jurisprudencia: 'Jurisprudencia',
};

/** Agrupa por año conservando el orden. Las entradas sin año van en 'Sin fecha determinada'. */
export function porAnio(entradas: EntradaRadar[]): [string, EntradaRadar[]][] {
  const grupos = new Map<string, EntradaRadar[]>();
  for (const e of entradas) {
    const clave = e.anio ? String(e.anio) : 'Sin fecha determinada';
    const lista = grupos.get(clave);
    if (lista) lista.push(e);
    else grupos.set(clave, [e]);
  }
  return [...grupos.entries()];
}

export function textoRadar(e: EntradaRadar): string {
  return [e.titulo, e.sumilla, e.contexto, e.fecha, etiquetaTipo[e.tipo]]
    .filter(Boolean)
    .join(' ');
}
