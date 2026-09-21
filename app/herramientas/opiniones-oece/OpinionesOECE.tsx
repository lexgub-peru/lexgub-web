'use client';

import { useMemo, useState } from 'react';
import styles from './OpinionesOECE.module.css';

type Opinion = {
  numero: string;
  fecha: string;
  tema: string;
  marco: 'Ley N.° 32069' | 'Ley N.° 30225' | 'Transición 30225/32069' | 'Verificar en opinión';
  resumen: string;
  href: string;
  keywords: string[];
};

const opinions: Opinion[] = [
  {
    numero: 'D000068-2026-OECE-DTN',
    fecha: '15 jul 2026',
    tema: 'Obras',
    marco: 'Verificar en opinión',
    resumen: 'Procedimiento para la aprobación de prestaciones adicionales en contratos de ejecución de obra bajo el sistema de solo construcción.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8386347-opinion-n-d000068-2026-oece-dtn',
    keywords: ['obra', 'adicional', 'prestaciones adicionales', 'solo construcción', 'ejecución'],
  },
  {
    numero: 'D000064-2026-OECE-DTN',
    fecha: '6 jul 2026',
    tema: 'Selección',
    marco: 'Verificar en opinión',
    resumen: 'Configuración de factores de evaluación facultativos y su relación con las Bases Estándar.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8353897-opinion-n-d000064-2026-oece-dtn',
    keywords: ['factores de evaluación', 'bases estándar', 'selección', 'evaluación'],
  },
  {
    numero: 'D000067-2026-OECE-DTN',
    fecha: '15 jul 2026',
    tema: 'Ejecución contractual',
    marco: 'Transición 30225/32069',
    resumen: 'Posibilidad de aplicar el adelanto por avance de la Ley N.° 32069 a un contrato celebrado bajo la Ley N.° 30225.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8386293-opinion-n-d000067-2026-oece-dtn',
    keywords: ['adelanto por avance', 'transición', 'contrato', 'vigencia', 'ley 30225', 'ley 32069'],
  },
  {
    numero: 'D000071-2026-OECE-DTN',
    fecha: '16 jul 2026',
    tema: 'Ejecución contractual',
    marco: 'Verificar en opinión',
    resumen: 'Consulta sobre el procedimiento de resolución de contrato.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8420934-opinion-n-d000071-2026-oece-dtn',
    keywords: ['resolución de contrato', 'contrato', 'ejecución contractual', 'procedimiento'],
  },
  {
    numero: 'D000072-2026-OECE-DTN',
    fecha: '16 jul 2026',
    tema: 'Consorcios',
    marco: 'Verificar en opinión',
    resumen: 'Experiencia del postor adquirida en consorcio en el marco de la normativa de contrataciones públicas.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8420944-opinion-n-d000072-2026-oece-dtn',
    keywords: ['consorcio', 'experiencia del postor', 'postor', 'experiencia'],
  },
  {
    numero: 'D000035-2026-OECE-DTN',
    fecha: '14 abr 2026',
    tema: 'Impedimentos',
    marco: 'Ley N.° 30225',
    resumen: 'Impedimentos para contratar con el Estado bajo la Ley N.° 30225, vigente hasta el 21 de abril de 2025.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8014628-opinion-n-d000035-2026-oece-dtn',
    keywords: ['impedimentos', 'contratar con el estado', 'ley 30225', 'proveedor'],
  },
  {
    numero: 'D000036-2026-OECE-DTN',
    fecha: '15 abr 2026',
    tema: 'Obras',
    marco: 'Ley N.° 30225',
    resumen: 'Aplicación de penalidades por ausencia del personal en obra bajo la anterior normativa de contrataciones del Estado.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8039386-opinion-n-d000036-2026-oece-dtn',
    keywords: ['penalidad', 'personal', 'obra', 'ausencia', 'ley 30225'],
  },
  {
    numero: 'D000051-2026-OECE-DTN',
    fecha: '29 may 2026',
    tema: 'Consorcios',
    marco: 'Ley N.° 30225',
    resumen: 'Consultas vinculadas al representante común del consorcio bajo la anterior normativa de contrataciones del Estado.',
    href: 'https://www.gob.pe/institucion/oece/informes-publicaciones/8199953-opinion-n-d000051-2026-oece-dtn',
    keywords: ['consorcio', 'representante común', 'ley 30225', 'representación'],
  },
];

const temas = ['Todos', ...Array.from(new Set(opinions.map((item) => item.tema)))];
const marcos = ['Todos', 'Ley N.° 32069', 'Ley N.° 30225', 'Transición 30225/32069', 'Verificar en opinión'];

export default function OpinionesOECE() {
  const [query, setQuery] = useState('');
  const [tema, setTema] = useState('Todos');
  const [marco, setMarco] = useState('Todos');

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('es');
    return opinions.filter((opinion) => {
      const matchesTema = tema === 'Todos' || opinion.tema === tema;
      const matchesMarco = marco === 'Todos' || opinion.marco === marco;
      const haystack = [opinion.numero, opinion.tema, opinion.marco, opinion.resumen, ...opinion.keywords]
        .join(' ')
        .toLocaleLowerCase('es');
      return matchesTema && matchesMarco && (!q || haystack.includes(q));
    });
  }, [query, tema, marco]);

  return (
    <>
      <section className={styles.official}>
        <div className={styles.sectionHeading}>
          <span>FUENTES OFICIALES</span>
          <h2>Empieza por el OECE, no por el resumen.</h2>
          <p>LexGub organiza la ruta; la fuente de autoridad sigue siendo el documento oficial.</p>
        </div>
        <div className={styles.sourceGrid}>
          <a href="https://www.gob.pe/institucion/oece/colecciones/66839-opiniones-de-la-direccion-tecnico-normativa-oece" target="_blank" rel="noreferrer">
            <strong>Compendio de Opiniones DTN</strong>
            <span>Consulta las opiniones publicadas oficialmente por el OECE.</span>
          </a>
          <a href="https://www.gob.pe/institucion/oece/informes-publicaciones/7168876-buscador-de-interpretacion-normativa-ley-n-32069" target="_blank" rel="noreferrer">
            <strong>Buscador · Ley N.° 32069</strong>
            <span>Versión 1.0 del buscador oficial, actualizada al 31/07/2026.</span>
          </a>
          <a href="https://www.gob.pe/institucion/oece/informes-publicaciones/1953832-buscador-de-interpretacion-normativa-ley-n-30225" target="_blank" rel="noreferrer">
            <strong>Buscador · Ley N.° 30225</strong>
            <span>Consulta criterios emitidos bajo el régimen anterior cuando siga siendo aplicable.</span>
          </a>
        </div>
      </section>

      <section className={styles.explorer}>
        <div className={styles.sectionHeading}>
          <span>EXPLORADOR 2026</span>
          <h2>Busca por casuística y problema jurídico.</h2>
          <p>Catálogo inicial verificado contra publicaciones oficiales del OECE. Se ampliará progresivamente.</p>
        </div>

        <div className={styles.filters}>
          <label>
            <span>Palabra clave</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej. adicionales, consorcio, resolución…"
            />
          </label>
          <label>
            <span>Tema</span>
            <select value={tema} onChange={(event) => setTema(event.target.value)}>
              {temas.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>Régimen</span>
            <select value={marco} onChange={(event) => setMarco(event.target.value)}>
              {marcos.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className={styles.resultMeta}>
          <strong>{filtered.length}</strong> {filtered.length === 1 ? 'opinión encontrada' : 'opiniones encontradas'}
        </div>

        <div className={styles.cards}>
          {filtered.map((opinion) => (
            <article className={styles.card} key={opinion.numero}>
              <div className={styles.cardTop}>
                <span className={styles.topic}>{opinion.tema}</span>
                <span className={styles.date}>{opinion.fecha}</span>
              </div>
              <h3>Opinión N.° {opinion.numero}</h3>
              <p>{opinion.resumen}</p>
              <div className={styles.regime}>
                <span>Régimen</span>
                <strong>{opinion.marco}</strong>
              </div>
              <a href={opinion.href} target="_blank" rel="noreferrer">Abrir fuente oficial →</a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>No hay coincidencias. Prueba con otra palabra o elimina alguno de los filtros.</div>
        )}
      </section>

      <section className={styles.method}>
        <div className={styles.sectionHeading}>
          <span>MÉTODO LEXGUB</span>
          <h2>Cómo usar una opinión sin convertirla en una “norma”.</h2>
        </div>
        <ol>
          <li><strong>Fija el hecho y la fecha.</strong><span>Primero determina cuándo ocurrió y qué obligación estaba vigente.</span></li>
          <li><strong>Define el régimen aplicable.</strong><span>No mezcles automáticamente Ley N.° 32069 con contratos o procedimientos sujetos a la Ley N.° 30225.</span></li>
          <li><strong>Lee la opinión completa.</strong><span>Revisa consulta, análisis, conclusiones y límites del criterio; no uses solo el título o un resumen.</span></li>
          <li><strong>Contrasta la norma primaria.</strong><span>Verifica Ley, Reglamento, directivas, bases estándar y modificaciones vigentes a la fecha relevante.</span></li>
          <li><strong>Busca criterios complementarios.</strong><span>Cuando el caso lo exija, contrasta también resoluciones del TCP, pronunciamientos y otros documentos oficiales.</span></li>
        </ol>
        <div className={styles.notice}>
          <strong>Regla de prudencia</strong>
          <p>
            Si la ficha pública no permite identificar con seguridad el régimen aplicable, LexGub lo marca como
            “Verificar en opinión” en vez de presumirlo. La temporalidad forma parte del análisis jurídico.
          </p>
        </div>
      </section>
    </>
  );
}
