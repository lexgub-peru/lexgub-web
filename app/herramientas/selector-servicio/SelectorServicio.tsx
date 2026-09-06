'use client';

import { useMemo, useState } from 'react';
import styles from './SelectorServicio.module.css';

type Moment = 'curso' | 'concluido' | 'incierto' | '';
type Scope = 'puntual' | 'amplio' | '';
type Evidence = 'si' | 'no' | '';
type Depth = 'puntual' | 'desarrollado' | '';

type Route = {
  label: string;
  title: string;
  text: string;
  links: { label: string; href: string }[];
  note: string;
};

const sources = {
  simultaneo: 'https://www.gob.pe/institucion/contraloria/normas-legales/3656507-013-2022-cg-norm',
  aop: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
  sce: 'https://www.gob.pe/institucion/contraloria/normas-legales/3723463-007-2021-cg-norm',
  auditoria: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
  denuncias: 'https://www.gob.pe/institucion/contraloria/normas-legales/3464328-020-2022-cg-gcsd',
};

function getRoute(moment: Moment, scope: Scope, evidence: Evidence, depth: Depth): Route | null {
  if (!moment) return null;

  if (moment === 'incierto') {
    return {
      label: 'PASO PREVIO',
      title: 'Primero fija si el hecho está en curso o ya concluyó.',
      text: 'El momento del hecho cambia la ruta de análisis. Reconstruye fechas, estado del proceso y qué actuación todavía puede afectar el resultado antes de escoger una directiva.',
      links: [
        { label: 'Biblioteca Jurídica', href: '/normativa' },
        { label: 'Asistente LexGub', href: '/asistente' },
      ],
      note: 'Sin una línea temporal mínima, cualquier selección del servicio sería prematura.',
    };
  }

  if (moment === 'curso') {
    return {
      label: 'RUTA A CONTRASTAR',
      title: 'Control Simultáneo',
      text: 'Cuando el proceso, actividad o hito continúa en ejecución, la primera familia normativa a contrastar es el Servicio de Control Simultáneo. La modalidad concreta depende del objetivo, oportunidad y condiciones previstas en la directiva vigente.',
      links: [
        { label: 'Directiva de Control Simultáneo', href: sources.simultaneo },
        { label: 'Guía LexGub', href: '/guias#control-simultaneo' },
      ],
      note: 'El selector no decide la modalidad ni reemplaza la programación o competencia del órgano de control.',
    };
  }

  if (moment === 'concluido' && !scope) return null;

  if (scope === 'amplio') {
    return {
      label: 'RUTA A CONTRASTAR',
      title: 'Auditoría de Cumplimiento',
      text: 'Si la necesidad es examinar de manera estructurada una materia, proceso u operación con varios objetivos, criterios y procedimientos, contrasta la Directiva y el Manual de Auditoría de Cumplimiento. La amplitud por sí sola no obliga a elegir esta modalidad.',
      links: [
        { label: 'Directiva y Manual', href: sources.auditoria },
        { label: 'Guía LexGub', href: '/guias#auditoria-cumplimiento' },
      ],
      note: 'No uses “auditoría” como sinónimo genérico de cualquier revisión posterior.',
    };
  }

  if (scope === 'puntual' && !evidence) return null;

  if (evidence === 'no') {
    return {
      label: 'ANTES DEL SERVICIO',
      title: 'Fortalece la evaluación y delimitación del hecho.',
      text: 'Si todavía no existe información objetiva suficiente para delimitar el hecho, no fuerces una conclusión sobre el servicio. Distingue denuncia, alerta o información inicial de la actuación de control que eventualmente corresponda.',
      links: [
        { label: 'Gestión de Denuncias', href: sources.denuncias },
        { label: 'Guía de denuncias', href: '/guias#denuncias' },
      ],
      note: 'La ausencia de evidencia suficiente para delimitar no equivale a inexistencia del hecho.',
    };
  }

  if (evidence === 'si' && !depth) return null;

  if (depth === 'puntual') {
    return {
      label: 'RUTA A CONTRASTAR',
      title: 'Acción de Oficio Posterior',
      text: 'Para un hecho ya ocurrido, delimitado y de alcance puntual, con información objetiva disponible, contrasta primero la Directiva de Acción de Oficio Posterior. Verifica sus requisitos actuales y no la trates como una auditoría abreviada.',
      links: [
        { label: 'Directiva AOP', href: sources.aop },
        { label: 'Guía LexGub AOP', href: '/guias#aop' },
      ],
      note: 'La existencia de evidencia no significa que toda revisión puntual deba canalizarse necesariamente como AOP.',
    };
  }

  return {
    label: 'RUTA A CONTRASTAR',
    title: 'Servicio de Control Específico',
    text: 'Si el hecho concluido presenta evidencia de presunta irregularidad y exige un desarrollo más profundo del hecho, criterio, efecto y participación, contrasta la Directiva del Servicio de Control Específico a Hechos con Presunta Irregularidad.',
    links: [
      { label: 'Directiva SCE', href: sources.sce },
      { label: 'Guía LexGub', href: '/guias#control-especifico' },
    ],
    note: 'La herramienta no atribuye responsabilidad ni sustituye la evaluación de competencia, alcance y condiciones de la directiva vigente.',
  };
}

export default function SelectorServicio() {
  const [moment, setMoment] = useState<Moment>('');
  const [scope, setScope] = useState<Scope>('');
  const [evidence, setEvidence] = useState<Evidence>('');
  const [depth, setDepth] = useState<Depth>('');

  const route = useMemo(() => getRoute(moment, scope, evidence, depth), [moment, scope, evidence, depth]);

  function resetFromMoment(value: Moment) {
    setMoment(value);
    setScope('');
    setEvidence('');
    setDepth('');
  }

  function reset() {
    setMoment('');
    setScope('');
    setEvidence('');
    setDepth('');
  }

  return (
    <div className={styles.shell}>
      <section className={styles.questions} aria-label="Preguntas del selector">
        <Question
          number="01"
          title="¿El proceso, actividad u operación relevante sigue en ejecución?"
          value={moment}
          options={[
            ['curso', 'Sí, continúa en curso'],
            ['concluido', 'No, el hecho ya concluyó'],
            ['incierto', 'Todavía no puedo determinarlo'],
          ]}
          onChange={(value) => resetFromMoment(value as Moment)}
        />

        {moment === 'concluido' && (
          <Question
            number="02"
            title="¿Tu necesidad es revisar un hecho puntual o una materia/proceso más amplio?"
            value={scope}
            options={[
              ['puntual', 'Un hecho específico y delimitable'],
              ['amplio', 'Una materia, proceso u operación más amplia'],
            ]}
            onChange={(value) => {
              setScope(value as Scope);
              setEvidence('');
              setDepth('');
            }}
          />
        )}

        {moment === 'concluido' && scope === 'puntual' && (
          <Question
            number="03"
            title="¿Ya existe información objetiva que permita delimitar el hecho?"
            value={evidence}
            options={[
              ['si', 'Sí, existe evidencia o información verificable'],
              ['no', 'No, todavía es una noticia, alerta o alegación inicial'],
            ]}
            onChange={(value) => {
              setEvidence(value as Evidence);
              setDepth('');
            }}
          />
        )}

        {moment === 'concluido' && scope === 'puntual' && evidence === 'si' && (
          <Question
            number="04"
            title="¿El objetivo es abordar un hecho puntual o requiere desarrollar con mayor profundidad participación y efectos?"
            value={depth}
            options={[
              ['puntual', 'Hecho puntual con alcance acotado'],
              ['desarrollado', 'Requiere examen más desarrollado del hecho y participación'],
            ]}
            onChange={(value) => setDepth(value as Depth)}
          />
        )}

        {(moment || scope || evidence || depth) && <button className={styles.reset} type="button" onClick={reset}>Reiniciar selector</button>}
      </section>

      <aside className={styles.result} aria-live="polite">
        {!route ? (
          <div className={styles.empty}>
            <span>RESULTADO ORIENTATIVO</span>
            <h2>Responde las preguntas que aparezcan a la izquierda.</h2>
            <p>LexGub mostrará la familia normativa que conviene contrastar y te llevará directamente a la fuente oficial.</p>
          </div>
        ) : (
          <div className={styles.resultCard}>
            <span>{route.label}</span>
            <h2>{route.title}</h2>
            <p>{route.text}</p>
            <div className={styles.links}>
              {route.links.map((link) => (
                <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {link.label} <b aria-hidden="true">→</b>
                </a>
              ))}
            </div>
            <div className={styles.note}><strong>Cautela:</strong> {route.note}</div>
          </div>
        )}
      </aside>
    </div>
  );
}

function Question({
  number,
  title,
  value,
  options,
  onChange,
}: {
  number: string;
  title: string;
  value: string;
  options: [string, string][];
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className={styles.question}>
      <legend><span>{number}</span>{title}</legend>
      <div className={styles.options}>
        {options.map(([id, label]) => (
          <button
            type="button"
            key={id}
            className={value === id ? styles.active : ''}
            aria-pressed={value === id}
            onClick={() => onChange(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
