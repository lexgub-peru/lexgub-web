'use client';

import { useEffect, useState } from 'react';
import { jurisprudencia } from '../data/jurisprudencia';
import { IconArrowRight, IconBook, IconClock, IconDocument, IconLandmark, IconScale } from './icons';

const basePills = [
  {
    category: 'Sabías que · Control gubernamental',
    title: 'El control gubernamental es un proceso integral y permanente.',
    summary:
      'La Contraloría describe el control gubernamental como la supervisión, vigilancia y verificación de los actos y resultados de la gestión pública, y precisa que comprende control interno y externo.',
    source: 'Contraloría — Normas de control',
    href: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/2465590-normas-de-control-',
    icon: IconLandmark,
  },
  {
    category: 'Norma clave',
    title: 'Las NGCG cuentan con un Texto Integrado publicado en abril de 2026.',
    summary:
      'La Contraloría publicó el 15 de abril de 2026 el Texto Integrado de las Normas Generales de Control Gubernamental. Para un caso actual conviene partir de esa versión y verificar cualquier modificación posterior.',
    source: 'Texto Integrado — NGCG',
    href: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/4301933-texto-integrado-normas-generales-de-control-gubernamental',
    icon: IconBook,
  },
  {
    category: 'Actualización normativa',
    title: 'La RC N.° 219-2025-CG modificó la Directiva de Control Simultáneo.',
    summary:
      'La Resolución modificó diversos numerales de la Directiva N.° 013-2022-CG/NORM e incorporó el numeral 7.5. Antes de usar plazos, formatos o reglas del servicio, debe revisarse siempre la versión vigente.',
    source: 'Resolución de Contraloría N.° 219-2025-CG',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/6831451-219-2025-cg',
    icon: IconClock,
  },
  {
    category: 'Actualidad · Obras por Impuestos',
    title: 'El DU N.° 010-2026 exceptúa temporalmente el informe previo para determinadas intervenciones ante El Niño.',
    summary:
      'El artículo 12 dispone que, durante la vigencia del decreto, las entidades comprendidas no requieren solicitar informe previo de la Contraloría para las intervenciones ejecutadas a su amparo. La norma mantiene expresamente el control simultáneo y posterior.',
    source: 'Diario Oficial El Peruano — DU N.° 010-2026',
    href: 'https://busquedas.elperuano.pe/dispositivo/EX/2550403-1',
    icon: IconDocument,
  },
  {
    category: 'AOP',
    title: 'La Acción de Oficio Posterior tiene una directiva específica.',
    summary:
      'La Directiva N.° 007-2023-CG/VCIC regula la Acción de Oficio Posterior. LexGub la trata como una ruta propia porque no todo hecho concluido exige el mismo servicio de control posterior.',
    source: 'Directiva N.° 007-2023-CG/VCIC',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    icon: IconDocument,
  },
  {
    category: 'Jurisprudencia · Contrataciones',
    title: 'El OECE mantiene un compendio oficial de resoluciones del TCP.',
    summary:
      'El repositorio permite revisar decisiones sobre apelaciones, procedimientos sancionadores y reconsideraciones. LexGub irá convirtiendo resoluciones relevantes en fichas de criterio, sin sustituir la lectura de la decisión completa.',
    source: 'OECE — Resoluciones del Tribunal de Contrataciones Públicas',
    href: 'https://www.gob.pe/institucion/oece/colecciones/68030-resoluciones-del-tribunal-de-contrataciones-publicas',
    icon: IconScale,
  },
];

const jurisprudencePills = jurisprudencia.flatMap((entry) => {
  if (!entry.pildora) return [];
  return [{
    category: `Jurisprudencia · ${entry.organo}`,
    title: entry.pildora.title,
    summary: entry.pildora.summary,
    source: entry.numero,
    href: `/jurisprudencia/${entry.id}`,
    icon: IconScale,
  }];
});

const pills = [...basePills, ...jurisprudencePills];

function dayIndex(length: number) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const day = Math.floor(diff / 86_400_000);
  return day % length;
}

export default function PildoraLexGub() {
  const [index, setIndex] = useState(0);
  const [dateLabel, setDateLabel] = useState('Selección diaria');

  useEffect(() => {
    const now = new Date();
    setIndex(dayIndex(pills.length));
    setDateLabel(
      new Intl.DateTimeFormat('es-PE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(now),
    );
  }, []);

  const pill = pills[index];
  const Icon = pill.icon;

  function previous() {
    setIndex((current) => (current - 1 + pills.length) % pills.length);
  }

  function next() {
    setIndex((current) => (current + 1) % pills.length);
  }

  return (
    <section className="dailyPillSection" aria-labelledby="pildora-title">
      <div className="dailyPillIntro">
        <span className="sectionKicker">PÍLDORA LEXGUB</span>
        <h2 id="pildora-title">Un dato útil cada día</h2>
        <p>
          Normas, control gubernamental, decisiones relevantes y pequeñas claves para mantener el criterio jurídico activo.
        </p>
        <div className="dailyPillControls" aria-label="Cambiar Píldora LexGub">
          <button type="button" onClick={previous} aria-label="Ver píldora anterior">←</button>
          <span>{index + 1} / {pills.length}</span>
          <button type="button" onClick={next} aria-label="Ver píldora siguiente">→</button>
        </div>
      </div>

      <article className="dailyPillCard" aria-live="polite">
        <div className="dailyPillMeta">
          <span className="dailyPillIcon"><Icon /></span>
          <div>
            <strong>{pill.category}</strong>
            <span>{dateLabel}</span>
          </div>
        </div>
        <h3>{pill.title}</h3>
        <p>{pill.summary}</p>
        <div className="dailyPillFooter">
          <a href={pill.href} target={pill.href.startsWith('http') ? '_blank' : undefined} rel={pill.href.startsWith('http') ? 'noreferrer' : undefined}>
            {pill.href.startsWith('http') ? 'Ver fuente oficial' : 'Abrir ficha LexGub'} <IconArrowRight />
          </a>
          <small>{pill.source}</small>
        </div>
      </article>
    </section>
  );
}
