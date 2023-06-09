import React from 'react';
import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  // хук useState применен временно для демонстрации работы чекбокса
  const [active, setActive] = useState();
  return (
    <button type='button' onClick={() => setActive(!active)} className="filter-checkbox__container">
      <span className={active ? 'filter-checkbox__circle filter-checkbox__circle_active' : "filter-checkbox__circle"}></span>
    </button >
  );
}

export default FilterCheckbox; 