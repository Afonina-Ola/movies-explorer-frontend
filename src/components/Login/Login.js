import React from "react";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import { NavLink } from "react-router-dom";
import "./Login.css";
import smile from "../../images/smile.svg";

function Login({ handleLogin, errorMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  return (
    <main className="login">
      <form
        onSubmit={(e) => handleLogin(e, values.email, values.password)}
        className="login__form"
      >
        <NavLink to="/" className="login__smile-link">
          <img src={smile} className="login__smile" alt="улыбающийся смайл" />
        </NavLink>
        <p className="login__greeting">Рады видеть!</p>
        <fieldset className="login__form-input-container">
          <h3 className="login__input-title">E-mail</h3>
          <input
            onChange={handleChange}
            required
            type="email"
            className="login__input"
            name="email"
            placeholder="E-mail"
          />
          {Boolean(errors["email"]) && (
            <span className="login__error-message">{errors["email"]}</span>
          )}

          <h3 className="login__input-title">Пароль</h3>
          <input
            onChange={handleChange}
            required
            type="password"
            className="login__input"
            name="password"
            placeholder="Пароль"
          />
          {Boolean(errors["password"]) && (
            <span className="login__error-message">{errors["password"]}</span>
          )}
        </fieldset>

        <div className="login__button-groupe">
          {errorMessage.length > 0 && (
            <p className="login__error-message">{errorMessage}</p>
          )}
          <button disabled={!isValid} type="submit" className="login__button">
            Войти
          </button>
        </div>
      </form>
      <NavLink to="/signup" className="login__link">
        Ещё не зарегистрированы?
        <span className="login__link-entrance">Регистрация</span>
      </NavLink>
    </main>
  );
}

export default Login;
