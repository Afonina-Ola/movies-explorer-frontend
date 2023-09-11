import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import magnifier from "../../images/magnifier.svg";

function SearchForm({
  onSearchFormInputChange,
  onSearchFormSubmit,
  searchFormInputValue,
  filterCheckboxSelected,
  onFilterCheckboxClick,
}) {
  return (
    <form onSubmit={onSearchFormSubmit} noValidate className="search-form">
      <div className="search-form__button-input-container">
        <fieldset className="search-form__input-container">
          <img src={magnifier} className="search-form__magnifier" alt="лупа" />
          <input
            value={searchFormInputValue}
            onChange={onSearchFormInputChange}
            required
            type="text"
            className="search-form__input-movie"
            name="name"
            placeholder="Фильм"
          />
        </fieldset>
        <button type="submit" className="search-form__button"></button>
      </div>
      <div className="search-form__filterCheckbox">
        <FilterCheckbox
          filterCheckboxSelected={filterCheckboxSelected}
          onFilterCheckboxClick={onFilterCheckboxClick}
        />
        <p className="search-form__genre">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
