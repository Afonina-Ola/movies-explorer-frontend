import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';
import smile from '../../images/smile.svg';

function Register({ errorMessage }) {
  return (
    <main className="register">
      <form className="register__form" >
      <NavLink to="/" className="register__smile-link"><img src={smile} className="register__smile" alt='улыбающийся смайл' /></NavLink>        
        <p className="register__greeting">Добро пожаловать!</p>
        <fieldset className="register__form-input-container">
          <h3 className="register__input-title">Имя</h3>
          <input required type="text" className="register__input" name="name" placeholder="Имя" />
          <h3 className="register__input-title">E-mail</h3>
          <input required type="email" className="register__input" name="email" placeholder="E-mail" />
          <h3 className="register__input-title">Пароль</h3>
          <input required type="password" className="register__input" name="password" placeholder="Пароль" />
        </fieldset>
        <div className="register__button-groupe">
          {errorMessage.length > 0 && <p className="register__error-message">
            {errorMessage}
          </p>
          }
          <button type="submit" className="register__button">Зарегистрироваться</button>
        </div>
      </form>
      <NavLink to="/signin" className="register__link">Уже зарегистрированы?<span className="register__link-entrance">Войти</span></NavLink>
    </main>
  );
}

export default Register; 