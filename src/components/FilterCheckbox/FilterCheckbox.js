import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ filterCheckboxSelected, onFilterCheckboxClick }) {
  return (
    <button
      type="button"
      onClick={onFilterCheckboxClick}
      className="filter-checkbox__container"
    >
      <span
        className={
          filterCheckboxSelected
            ? "filter-checkbox__circle filter-checkbox__circle_active"
            : "filter-checkbox__circle"
        }
      ></span>
    </button>
  );
}

export default FilterCheckbox;
