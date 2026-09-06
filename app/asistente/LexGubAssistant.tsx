'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { scoreSearchItem, searchCatalog, type SearchItem } from '../data/search-catalog-v2';
import styles from './Asistente.module.css';

const suggestions = [
  '¿Qué revisar para una AOP?',
  'Busco jurisprudencia sobre prueba suficiente y comité de recepción',
  '¿Qué norma rige el PAD y la prescripción?',
  'Necesito revisar una denuncia y saber qué documentos pedir',
  '¿Qué cambió con la Ley 32069?',
];

function norm(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
}

function routeFor(query: string) {
  const q = norm(query);
  if (/denuncia|alerta|audiencia publica/.test(q)) {
    return {
      title: 'Empieza por competencia, concreción y verificabilidad.',
      text: 'Antes de elegir una actuación de control, identifica el hecho concreto, la competencia, la fecha, la evidencia disponible y qué información puede verificarse razonablemente. Revisa primero la Directiva de Gestión de Denuncias y luego la guía práctica.',
    };
  }
  if (/aop|accion de oficio posterior/.test(q)) {
    return {
      title: 'Primero delimita el hecho ya ocurrido y la evidencia disponible.',
      text: 'La AOP no es una auditoría abreviada. Verifica la directiva específica, el momento del hecho, el criterio vigente y si el alcance puede resolverse con información disponible o razonablemente obtenible.',
    };
  }
  if (/pad|servir|disciplin|prescrip/.test(q)) {
    return {
      title: 'Fija dos fechas antes de analizar el PAD.',
      text: 'Separa la fecha de la conducta de la fecha de inicio del procedimiento. Luego contrasta la Ley del Servicio Civil, su directiva disciplinaria, el TUO de la LPAG y los precedentes del Tribunal del Servicio Civil aplicables.',
    };
  }
  if (/contrat|comite|seleccion|recepcion|obra|seace|oece|osce/.test(q)) {
    return {
      title: 'Reconstruye el expediente por etapas y no atribuyas responsabilidad por el cargo.',
      text: 'Identifica primero el régimen temporal de contratación. Después separa requerimiento, selección, ejecución y recepción. Para una persona concreta, ubica el deber funcional, el acto específico y la evidencia de participación; luego contrasta jurisprudencia y resoluciones administrativas.',
    };
  }
  if (/sancion|tsra|responsabilidad|culpa|dolo|tipic|infraccion/.test(q)) {
    return {
      title: 'Separa tipo infractor, conducta, prueba y temporalidad.',
      text: 'No basta identificar una irregularidad. Revisa el tipo vigente a la fecha del hecho, la conducta atribuida, la evidencia de participación, el elemento subjetivo cuando corresponda y los precedentes/decisiones que realmente tengan fuerza aplicable.',
    };
  }
  if (/prueba|evidencia|indicio|inferencia|motiv/.test(q)) {
    return {
      title: 'Construye la cadena de prueba antes de escribir la conclusión.',
      text: 'Distingue documento, hecho acreditado, indicio e inferencia. Una irregularidad puede ser un hecho base, pero no demuestra por sí sola dolo, concertación o responsabilidad. Busca decisiones que expliciten el razonamiento probatorio.',
    };
  }
  return {
    title: 'Empieza fijando hecho, fecha, evidencia y pregunta jurídica.',
    text: 'LexGub prioriza la fuente oficial y la temporalidad. Usa los resultados como ruta de investigación: abre primero normas y fuentes, luego jurisprudencia/precedentes y finalmente guías o herramientas para trabajar el caso.',
  };
}

function getResults(query: string): SearchItem[] {
  if (!query.trim()) return [];
  return searchCatalog
    .map((item) => ({ item, score: scoreSearchItem(item, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ item }) => item);
}

export default function LexGubAssistant() {
  const [draft, setDraft] = useState('');
  const [query, setQuery] = useState('');

  const results = useMemo(() => getResults(query), [query]);
  const route = useMemo(() => routeFor(query), [query]);

  function consult(value?: string) {
    const next = (value ?? draft).trim();
    if (!next) return;
    setDraft(next);
    setQuery(next);
  }

  return <>
    <div className={styles.privacy} role="note">
      <div className={styles.privacyIcon}>!</div>
      <div>
        <strong>Consulta sin información reservada.</strong>
        <p>
          No pegues datos personales, expedientes no públicos, documentos de circulación restringida ni información obtenida
          por razón de una función pública. Esta versión procesa la consulta localmente en tu navegador y busca únicamente
          dentro del índice público de LexGub.
        </p>
      </div>
    </div>

    <div className={styles.shell}>
      <section className={styles.console} aria-label="Asistente LexGub">
        <div className={styles.consoleTop}>
          <span className={styles.label}>LEXGUB ASISTENTE · BETA</span>
          <h2>Describe qué necesitas revisar.</h2>
          <p>No intenta reemplazar tu criterio profesional: organiza una ruta y recupera fuentes verificables.</p>
        </div>

        <div className={styles.inputRow}>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Ej. Integro un comité de recepción: ¿qué debo revisar para distinguir función, evidencia y responsabilidad?"
            aria-label="Consulta para el Asistente LexGub"
            onKeyDown={(e) => {
              if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') consult();
            }}
          />
          <button type="button" onClick={() => consult()}>Orientarme</button>
        </div>

        <div className={styles.prompts} aria-label="Consultas sugeridas">
          {suggestions.map((s) => <button key={s} type="button" onClick={() => consult(s)}>{s}</button>)}
        </div>

        <div className={styles.answer} aria-live="polite">
          {!query ? <div className={styles.empty}>
            <strong>Prueba una consulta de trabajo.</strong>
            <p>El asistente cruzará Biblioteca Jurídica, jurisprudencia, tribunales, fuentes oficiales, guías y herramientas.</p>
          </div> : <>
            <div className={styles.answerHead}>
              <h3>Ruta LexGub</h3>
              <span>{results.length} recursos relacionados</span>
            </div>
            <div className={styles.route}>
              <strong>{route.title}</strong>
              <p>{route.text}</p>
            </div>
            {results.length ? <div className={styles.results}>
              {results.map((item) => <Link className={styles.result} key={item.id} href={item.href}>
                <div>
                  <span className={styles.kind}>{item.kind}{item.verified ? ' · VERIFICADO' : ''}</span>
                  <strong>{item.title}</strong>
                  <p>{item.subtitle}</p>
                </div>
                <span className={styles.arrow}>→</span>
              </Link>)}
            </div> : <div className={styles.empty}>
              <strong>Aún no hay una coincidencia suficiente.</strong>
              <p>Prueba con el número de la norma, tribunal, servicio de control o concepto principal.</p>
            </div>}
          </>}
          <div className={styles.disclaimer}>
            Orientación documental y de investigación. No constituye asesoría jurídica, no determina responsabilidad y no sustituye
            la lectura íntegra de la fuente oficial ni el análisis del expediente concreto.
          </div>
        </div>
      </section>

      <aside className={styles.side}>
        <div className={styles.sideCard}>
          <span>01 · NORMA</span>
          <h3>¿Qué regla estaba vigente?</h3>
          <p>Fija la fecha del hecho y reconstruye la versión aplicable antes de usar una norma actual.</p>
          <Link href="/normativa">Abrir Biblioteca →</Link>
        </div>
        <div className={styles.sideCard}>
          <span>02 · CRITERIO</span>
          <h3>¿Cómo fue interpretada?</h3>
          <p>Contrasta jurisprudencia judicial, precedentes administrativos y criterios LexGub sin confundir su fuerza jurídica.</p>
          <Link href="/jurisprudencia">Ver jurisprudencia →</Link>
        </div>
        <div className={styles.sideCard}>
          <span>03 · FUENTE</span>
          <h3>¿Dónde lo verifico?</h3>
          <p>El Peruano, SPIJ, Contraloría, Poder Judicial, Tribunal Constitucional, OECE y SERVIR.</p>
          <Link href="/fuentes">Ver fuentes →</Link>
        </div>
        <div className={styles.sideCard}>
          <span>04 · TRABAJO</span>
          <h3>¿Cómo lo aplico?</h3>
          <p>Usa guías y checklists como apoyo operativo, siempre subordinados al caso concreto.</p>
          <Link href="/herramientas">Abrir herramientas →</Link>
        </div>
      </aside>
    </div>
  </>;
}
