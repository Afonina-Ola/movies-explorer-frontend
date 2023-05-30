import React from 'react';
import AccountButton from '../AccountButton/AccountButton.js';
import './Navigation.css';
import closeIcon from '../../images/close-icon.svg';
import { NavLink } from 'react-router-dom';

function Navigation({ isOpened, onCloseButtonClick }) {


  return (
    <div className={isOpened ? "navigation navigation_opened" : 'navigation'}>
      <button onClick={onCloseButtonClick} className="navigation__close-button">
        <img src={closeIcon} className="navigation__close-icon" alt='логотип' />
      </button>

      <div className="navigation__links">
        <NavLink className="navigation__link navigation__link_active" to="/">Главная</NavLink>
        <NavLink className="navigation__link" to="/movies">Фильмы</NavLink>
        <NavLink className="navigation__link" to="/saved-movies">Сохранённые фильмы</NavLink>
      </div>
      <AccountButton />
    </div>
  );
}

export default Navigation; 