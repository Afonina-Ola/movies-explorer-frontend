import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import "./Register.css";
import smile from "../../images/smile.svg";

function Register({ errorMessage, handleRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  return (
    <main className="register">
      <form
        onSubmit={(e) =>
          handleRegister(e, values.email, values.password, values.name)
        }
        className="register__form"
      >
        <NavLink to="/" className="register__smile-link">
          <img
            src={smile}
            className="register__smile"
            alt="улыбающийся смайл"
          />
        </NavLink>
        <span className="register__greeting">Добро пожаловать!</span>
        <fieldset className="register__form-input-container">
          <h3 className="register__input-title">Имя</h3>
          <input
            required
            onChange={handleChange}
            type="text"
            className="register__input"
            name="name"
            placeholder="Имя"
          />
          {Boolean(errors["name"]) && (
            <span className="register__error-message">{errors["name"]}</span>
          )}

          <h3 className="register__input-title">E-mail</h3>
          <input
            required
            onChange={handleChange}
            type="email"
            className="register__input"
            name="email"
            placeholder="E-mail"
          />
          {Boolean(errors["email"]) && (
            <span className="register__error-message">{errors["email"]}</span>
          )}

          <h3 className="register__input-title">Пароль</h3>
          <input
            required
            onChange={handleChange}
            type="password"
            className="register__input"
            name="password"
            placeholder="Пароль"
          />
          {Boolean(errors["password"]) && (
            <span className="register__error-message">{errors["password"]}</span>
          )}
        </fieldset>

        <div className="register__button-groupe">
          {errorMessage.length > 0 && (
            <p className="register__error-message">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={!isValid}
            className="register__button"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
      <NavLink to="/signin" className="register__link">
        Уже зарегистрированы?
        <span className="register__link-entrance">Войти</span>
      </NavLink>
    </main>
  );
}

export default Register;
