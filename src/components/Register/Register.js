import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Register.css';
import smile from '../../images/smile.svg';

function Register() {
  return (
    <div className="register">
      <form className="register__form" >
        <img src={smile} className="register__smile" alt='улыбающийся смайл' />
        <p className="register__greeting">Добро пожаловать!</p>
        <fieldset className="register__form-input-container">
          <h3 className="register__input-title">Имя</h3>
          <input required type="text" className="register__input" name="name" placeholder="Имя" />
          <h3 className="register__input-title">E-mail</h3>
          <input required type="email" className="register__input" name="email" placeholder="E-mail" />
          <h3 className="register__input-title">Пароль</h3>
          <input required type="password" className="register__input" name="password" placeholder="Пароль" />
        </fieldset>
        <button type="submit" className="register__button">Зарегистрироваться</button>
      </form>
      <NavLink to="/sign-in" className="register__link">Уже зарегистрированы?<span class="register__link-entrance">Войти</span></NavLink>
    </div>
  );
}

export default Register; 