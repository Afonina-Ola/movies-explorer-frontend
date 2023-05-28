import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import magnifier from '../../images/magnifier.svg';

function SearchForm() {
    return (
        <form className="searchForm">
            <div className="searchForm__button-input-container">
                <fieldset className="searchForm__input-container">
                    <img src={magnifier} className="searchForm__magnifier" alt='лупа' />
                    <input required type="text" className="searchForm__input-movie" name="name" placeholder="Фильм" />
                </fieldset>
                <button type="submit" className="searchForm__button"></button>
            </div>
            <div className="searchForm__filterCheckbox">
                <FilterCheckbox />
                <p className="searchForm__genre">Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm; 