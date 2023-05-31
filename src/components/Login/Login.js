import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import smile from '../../images/smile.svg';

function Login({ errorMessage }) {
  return (
    <main className="login">
      <form className="login__form" >
        <NavLink to="/" className="login__smile-link"><img src={smile} className="login__smile" alt='улыбающийся смайл' /></NavLink>
        <p className="login__greeting">Рады видеть!</p>
        <fieldset className="login__form-input-container">
          <h3 className="login__input-title">E-mail</h3>
          <input required type="email" className="login__input" name="email" placeholder="E-mail" />
          <h3 className="login__input-title">Пароль</h3>
          <input required type="password" className="login__input" name="password" placeholder="Пароль" />
        </fieldset>
        <div className="login__button-groupe">
          {errorMessage.length > 0 && <p className="login__error-message">
            {errorMessage}
          </p>
          }
          <button type="submit" className="login__button">Войти</button>
        </div>
      </form>
      <NavLink to="/signup" className="login__link">Ещё не зарегистрированы?<span class="login__link-entrance">Регистрация</span></NavLink>
    </main>
  );
}

export default Login; 