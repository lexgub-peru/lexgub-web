'use client';

import { useEffect, useState } from 'react';
import { pildoras as pills } from '../data/pildoras';
import { IconArrowRight } from './icons';

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
