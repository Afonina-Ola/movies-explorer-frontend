import React from 'react';
import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  // хук useState применен временно для демонстрации работы чекбокса
  const [active, setActive] = useState();
  return (
    <button type='button' onClick={() => setActive(!active)} className="filterCheckbox__container">
      <div className={active ? 'filterCheckbox__circle filterCheckbox__circle_active' : "filterCheckbox__circle"}></div>
    </button >
  );
}

export default FilterCheckbox; 