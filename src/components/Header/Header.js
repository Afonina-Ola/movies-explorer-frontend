import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import AccountButton from '../AccountButton/AccountButton.js';
import smile from '../../images/smile.svg';
import burger from '../../images/burger-icon.svg';

function Header({ isLogged, onBurgerButtonClick }) {
    return (
        <header className="header">
            <NavLink to="/" className="header__smile-link"><img src={smile} className="header__smile" alt='улыбающийся смайл' /></NavLink>
            {isLogged && <div className="header__container-logged">
                <div className="header__container-movies-link">
                    <NavLink to="/movies" className="header__movies-link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="header__movies-save-link">Сохранённые фильмы</NavLink >
                </div>
                <AccountButton className={'header__account-button'} />
            </div>}
            {!isLogged ?
                (<div className="header__container-not-logged">
                    <NavLink to="/signup" className="header__not-logged-link-registration">Регистрация</NavLink>
                    <NavLink to="/signin" className="header__not-logged-link-entrance">Войти</NavLink>
                </div>) : (
                    <button onClick={onBurgerButtonClick} className='header__burger-button'>
                        <img src={burger} alt='burger' />
                    </button>)
            }
        </header>
    );
}

export default Header; 