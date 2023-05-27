import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Login.css';
import smile from '../../images/smile.svg';

function Login() {
  return (
    <div className="login">
      <form className="login__form" >
        <img src={smile} className="login__smile" alt='улыбающийся смайл' />
        <p className="login__greeting">Рады видеть!</p>
        <fieldset className="login__form-input-container">
                <h3 className="login__input-title">E-mail</h3>
          <input required type="email" className="login__input" name="email" placeholder="E-mail" />
          <h3 className="login__input-title">Пароль</h3>
          <input required type="password" className="login__input" name="password" placeholder="Пароль" />
        </fieldset>
        <button type="submit" className="login__button">Войти</button>
      </form>
      <NavLink to="/sign-in" className="login__link">Ещё не зарегистрированы?<span class="login__link-entrance">Регистрация</span></NavLink>
    </div>
  );
}

export default Login; 