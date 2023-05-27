import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Header.css';
import smile from '../../images/smile.svg';

function Header() {
    // хук useState применен временно 
    const [isLogged, setIsLogged] = useState(true)
    return (
        <header className="header">
            <img src={smile} className="header__smile" alt='улыбающийся смайл' />
            {isLogged && <div className="header__container-logged">
                <div className="header__container-movies-link">
                    <NavLink to="/sign-in" className="header__movies-link">Фильмы</NavLink>
                    <NavLink to="/sign-in" className="header__movies-save-link">Сохранённые фильмы</NavLink >
                </div>
                <button className="header__account-button">Аккаунт</button>
            </div>}
            {!isLogged &&
                <div className="header__container-not-logged">
                    <NavLink to="/sign-in" className="header__not-logged-link">Регистрация</NavLink>
                    <button type="submit" className="header__not-logged-button">Войти</button>
                </div>
            }
        </header>
    );
}

export default Header; 