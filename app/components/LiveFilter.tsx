'use client';

import { useRef } from 'react';
import { IconSearch } from './icons';

type LiveFilterProps = {
  placeholder: string;
  /** IDs of the containers whose direct search-items should be filtered. */
  containerIds: string[];
  /** ID of the element shown when a search leaves zero results across all containers. */
  emptyStateId?: string;
  itemSelector?: string;
  label: string;
};

export default function LiveFilter({
  placeholder,
  containerIds,
  emptyStateId,
  itemSelector = '[data-search-item]',
  label,
}: LiveFilterProps) {
  const inputId = useRef(`live-filter-${Math.random().toString(36).slice(2, 9)}`);

  function handleChange(value: string) {
    const query = value.trim().toLocaleLowerCase('es');
    let totalVisible = 0;

    containerIds.forEach((id) => {
      const container = document.getElementById(id);
      if (!container) return;
      const items = container.querySelectorAll<HTMLElement>(itemSelector);
      items.forEach((item) => {
        const text = (item.getAttribute('data-search-text') ?? item.textContent ?? '').toLocaleLowerCase('es');
        const match = query === '' || text.includes(query);
        item.hidden = !match;
        if (match) totalVisible += 1;
      });
    });

    if (emptyStateId) {
      const empty = document.getElementById(emptyStateId);
      if (empty) empty.hidden = totalVisible !== 0;
    }
  }

  return (
    <div className="liveFilter">
      <IconSearch className="liveFilterIcon" />
      <label className="srOnly" htmlFor={inputId.current}>{label}</label>
      <input
        id={inputId.current}
        type="search"
        placeholder={placeholder}
        autoComplete="off"
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
