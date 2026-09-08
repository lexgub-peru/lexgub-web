'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import styles from './ValidezControl.module.css';

type ServiceKey = 'auditoria' | 'sce' | 'simultaneo' | 'aop';

type ServiceInfo = {
  label: string;
  norm: string;
  internalHref: string;
  officialHref: string;
  note: string;
};

const services: Record<ServiceKey, ServiceInfo> = {
  auditoria: {
    label: 'Auditoría de cumplimiento',
    norm: 'Directiva N.° 001-2022-CG/NORM y Manual de Auditoría de Cumplimiento',
    internalHref: '/normativa/directiva-001-2022-cg-norm',
    officialHref: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
    note: 'Revise la Directiva y el Manual en conjunto, además de sus modificatorias y disposiciones transitorias.',
  },
  sce: {
    label: 'Servicio de Control Específico',
    norm: 'Directiva N.° 007-2021-CG/NORM',
    internalHref: '/normativa/directiva-007-2021-cg-norm',
    officialHref: 'https://www.gob.pe/institucion/contraloria/normas-legales/3723463-007-2021-cg-norm',
    note: 'La versión integrada y sus modificatorias son decisivas para reconstruir la regla vigente en cada etapa.',
  },
  simultaneo: {
    label: 'Servicio de Control Simultáneo',
    norm: 'Directiva N.° 013-2022-CG/NORM',
    internalHref: '/normativa/directiva-013-2022-cg-norm',
    officialHref: 'https://www.gob.pe/institucion/contraloria/normas-legales/3656507-013-2022-cg-norm',
    note: 'Identifique además la modalidad concreta: control concurrente, visita de control u orientación de oficio.',
  },
  aop: {
    label: 'Acción de Oficio Posterior',
    norm: 'Directiva N.° 007-2023-CG/VCIC',
    internalHref: '/normativa/directiva-007-2023-cg-vcic',
    officialHref: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    note: 'No confunda su alcance puntual con el de otros servicios de control posterior de mayor profundidad.',
  },
};

function formatDate(value: string) {
  if (!value) return 'Pendiente';
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

export default function ValidezControl() {
  const [service, setService] = useState<ServiceKey | ''>('');
  const [factDate, setFactDate] = useState('');
  const [actionDate, setActionDate] = useState('');
  const [sourceVerified, setSourceVerified] = useState(false);
  const [competenceVerified, setCompetenceVerified] = useState(false);
  const [participationVerified, setParticipationVerified] = useState(false);
  const [deadlinesVerified, setDeadlinesVerified] = useState(false);
  const [motivationVerified, setMotivationVerified] = useState(false);

  const selected = service ? services[service] : null;
  const baseReady = Boolean(service && factDate && actionDate);

  const checks = useMemo(
    () => [
      {
        level: 'critica',
        title: 'Competencia y habilitación de la actuación',
        ok: competenceVerified,
        text: 'Verifique competencia del órgano, alcance del servicio y habilitación para la actuación concreta. Una duda aquí exige revisión prioritaria antes de avanzar.',
      },
      {
        level: 'critica',
        title: 'Versión normativa y fuente oficial',
        ok: sourceVerified,
        text: 'No basta citar el número de la directiva. Debe reconstruirse la versión aplicable, incluidas modificatorias y reglas transitorias.',
      },
      {
        level: 'alta',
        title: 'Comunicación, participación o contradicción',
        ok: participationVerified,
        text: 'Revise las comunicaciones, oportunidades de participación, comentarios o aclaraciones que correspondan según el servicio y la etapa.',
      },
      {
        level: 'alta',
        title: 'Plazos, hitos y formalidades relevantes',
        ok: deadlinesVerified,
        text: 'Contraste plazos, designaciones, notificaciones y actos esenciales con la norma vigente en la fecha de la actuación.',
      },
      {
        level: 'media',
        title: 'Motivación y trazabilidad de la conclusión',
        ok: motivationVerified,
        text: 'El expediente debe permitir reconstruir qué se afirmó, con qué evidencia, bajo qué criterio y cómo se respondió a los elementos relevantes.',
      },
    ],
    [competenceVerified, sourceVerified, participationVerified, deadlinesVerified, motivationVerified],
  );

  const pending = checks.filter((item) => !item.ok);
  const pendingCritical = pending.filter((item) => item.level === 'critica').length;

  return (
    <div className={styles.workspace}>
      <section className={styles.panel} aria-labelledby="datos-base">
        <div className={styles.sectionHead}>
          <span>01 · DATOS BASE</span>
          <h2 id="datos-base">Fija primero el marco del análisis</h2>
          <p>Estos tres datos evitan mezclar el criterio aplicable al hecho con la regla procedimental de la actuación de control.</p>
        </div>

        <div className={styles.fields}>
          <label className={styles.field}>
            <span>Servicio de control</span>
            <select value={service} onChange={(event) => setService(event.target.value as ServiceKey | '')}>
              <option value="">Seleccionar…</option>
              <option value="auditoria">Auditoría de cumplimiento</option>
              <option value="sce">Servicio de Control Específico</option>
              <option value="simultaneo">Control simultáneo</option>
              <option value="aop">Acción de Oficio Posterior</option>
            </select>
          </label>

          <label className={styles.field}>
            <span>Fecha del hecho examinado</span>
            <input type="date" value={factDate} onChange={(event) => setFactDate(event.target.value)} />
            <small>Ayuda a fijar el criterio y las obligaciones vigentes cuando ocurrió el hecho.</small>
          </label>

          <label className={styles.field}>
            <span>Fecha de la actuación de control</span>
            <input type="date" value={actionDate} onChange={(event) => setActionDate(event.target.value)} />
            <small>Ayuda a ubicar el marco procedimental vigente cuando se realizó la actuación.</small>
          </label>
        </div>

        {selected && (
          <div className={styles.normCard}>
            <div>
              <span>NORMA CABECERA</span>
              <strong>{selected.norm}</strong>
              <p>{selected.note}</p>
            </div>
            <div className={styles.normActions}>
              <Link href={selected.internalHref}>Ver ficha LexGub</Link>
              <a href={selected.officialHref} target="_blank" rel="noreferrer">Abrir fuente oficial ↗</a>
            </div>
          </div>
        )}

        <label className={styles.verifyRow}>
          <input type="checkbox" checked={sourceVerified} onChange={(event) => setSourceVerified(event.target.checked)} />
          <span>He contrastado la versión aplicable con una fuente oficial y revisado modificatorias o reglas transitorias relevantes.</span>
        </label>
      </section>

      <section className={styles.panel} aria-labelledby="ruta-analisis">
        <div className={styles.sectionHead}>
          <span>02 · RUTA DE ANÁLISIS</span>
          <h2 id="ruta-analisis">Cinco pasos antes de sostener un vicio procedimental</h2>
        </div>

        <ol className={styles.flow}>
          <li>
            <b>1</b>
            <div><strong>Clasifica el servicio</strong><p>{selected ? selected.label : 'Identifica primero qué servicio y modalidad se está evaluando.'}</p></div>
          </li>
          <li>
            <b>2</b>
            <div><strong>Separa las dos fechas</strong><p>Hecho: {formatDate(factDate)} · actuación: {formatDate(actionDate)}. La regla temporal no siempre es idéntica para ambos planos.</p></div>
          </li>
          <li>
            <b>3</b>
            <div><strong>Reconstruye la cadena normativa</strong><p>Norma base, modificatorias, versión integrada y disposiciones transitorias. La fecha por sí sola no sustituye esa revisión.</p></div>
          </li>
          <li>
            <b>4</b>
            <div><strong>Contrasta garantías y actos esenciales</strong><p>Competencia, comunicaciones, participación, plazos y demás exigencias relevantes para la etapa concreta.</p></div>
          </li>
          <li>
            <b>5</b>
            <div><strong>Explica el efecto jurídico</strong><p>No toda infracción formal produce nulidad. Debe justificarse qué regla se incumplió, por qué era aplicable y qué consecuencia jurídica corresponde.</p></div>
          </li>
        </ol>

        {!baseReady && (
          <div className={styles.notice}>Completa servicio, fecha del hecho y fecha de la actuación para tener una base temporal mínima.</div>
        )}
      </section>

      <section className={styles.panel} aria-labelledby="tamizaje">
        <div className={styles.sectionHead}>
          <span>03 · TAMIZAJE</span>
          <h2 id="tamizaje">Marca lo que ya has verificado en el expediente</h2>
          <p>Una casilla sin marcar significa “pendiente de verificar”, no “incumplido”.</p>
        </div>

        <div className={styles.checkGrid}>
          <label><input type="checkbox" checked={competenceVerified} onChange={(e) => setCompetenceVerified(e.target.checked)} /><span><strong>Competencia</strong>Órgano, servicio, alcance y habilitación identificados.</span></label>
          <label><input type="checkbox" checked={participationVerified} onChange={(e) => setParticipationVerified(e.target.checked)} /><span><strong>Participación y comunicaciones</strong>Se verificaron las actuaciones que la directiva exige para esta etapa.</span></label>
          <label><input type="checkbox" checked={deadlinesVerified} onChange={(e) => setDeadlinesVerified(e.target.checked)} /><span><strong>Plazos e hitos</strong>Se contrastaron plazos, notificaciones y formalidades relevantes.</span></label>
          <label><input type="checkbox" checked={motivationVerified} onChange={(e) => setMotivationVerified(e.target.checked)} /><span><strong>Motivación y trazabilidad</strong>La conclusión puede reconstruirse desde hecho, criterio y evidencia.</span></label>
        </div>
      </section>

      <section className={styles.panel} aria-labelledby="mapa-riesgos">
        <div className={styles.sectionHead}>
          <span>04 · MAPA DE PRIORIDAD</span>
          <h2 id="mapa-riesgos">Qué revisar primero</h2>
          <p>El color indica prioridad de revisión, no una declaración automática de nulidad o invalidez.</p>
        </div>

        <div className={styles.riskList}>
          {checks.map((item) => (
            <article key={item.title} className={`${styles.riskItem} ${styles[`risk_${item.level}`]} ${item.ok ? styles.risk_ok : ''}`}>
              <div className={styles.riskTop}>
                <span>{item.ok ? 'VERIFICADO' : item.level === 'critica' ? 'PRIORIDAD CRÍTICA' : item.level === 'alta' ? 'PRIORIDAD ALTA' : 'PRIORIDAD MEDIA'}</span>
                <strong>{item.title}</strong>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.summary}>
          <strong>
            {pending.length === 0
              ? 'Tamizaje completo: no quedan controles pendientes en esta herramienta.'
              : pendingCritical > 0
                ? `Hay ${pending.length} puntos pendientes, incluidos ${pendingCritical} de prioridad crítica.`
                : `Hay ${pending.length} puntos pendientes de verificación.`}
          </strong>
          <p>
            {pending.length === 0
              ? 'Eso no equivale a declarar la validez de la actuación. La conclusión jurídica depende del expediente, la norma aplicable y la naturaleza del eventual defecto.'
              : 'Antes de sostener una nulidad, identifica la regla incumplida, su vigencia, el carácter esencial o subsanable del defecto y el efecto que el ordenamiento atribuye a ese incumplimiento.'}
          </p>
        </div>
      </section>

      <section className={styles.disclaimer}>
        <strong>Límite de la herramienta</strong>
        <p>
          Este mapa es orientativo. No determina nulidad, validez, responsabilidad ni resultado de un procedimiento. La aplicación temporal puede depender de disposiciones transitorias, del tipo de norma y de la etapa concreta. Verifique siempre la fuente oficial y el expediente íntegro antes de adoptar una conclusión.
        </p>
      </section>
    </div>
  );
}
