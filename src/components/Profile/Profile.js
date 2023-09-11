import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.js";
import Navigation from "../Navigation/Navigation.js";
import Overlay from "../Overlay/Overlay.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

import "./Profile.css";

function Profile({
  errorMessage,
  onProfileFormSubmit,
  setLoggedIn,
  loggedIn,
  setCurrentUser,
}) {
  const history = useHistory();

  const [isNavigationOpened, setIsNavigationOpened] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, handleDefaultValues } =
    useFormWithValidation();

  const body = document.querySelector(".body");

  const openNavigation = () => {
    body.classList.add("body_without-scroll");
    setIsNavigationOpened(true);
  };

  const closeNavigation = () => {
    body.classList.remove("body_without-scroll");
    setIsNavigationOpened(false);
  };

  const checkUserDataEdited = () => {
    if (
      currentUser.name !== values.name ||
      currentUser.email !== values.email
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    handleDefaultValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("is-short-film");
    localStorage.removeItem("visible-movies");
    localStorage.removeItem("search-value");
    localStorage.removeItem("movies");
    localStorage.removeItem("all-server-movies");
    setCurrentUser({});
    setLoggedIn(false);
    history.push("/");
  };

  return (
    <>
      <Header onBurgerButtonClick={openNavigation} isLogged={loggedIn} />
      <main className="profile">
        <form
          onSubmit={(e) => onProfileFormSubmit(e, values)}
          className="profile__container"
        >
          <p className="profile__greeting">Привет, {currentUser.name}!</p>
          <fieldset className="profile__form-input-container">
            <div className="profile__input-container">
              <h3 className="profile__input-title">Имя</h3>
              <input
                onChange={handleChange}
                value={values.name}
                required
                type="text"
                className="profile__input"
                name="name"
                placeholder="Имя"
              />
              {Boolean(errors["name"]) && (
                <span className="profile__error-message">{errors["name"]}</span>
              )}
            </div>

            <div className="profile__input-container">
              <h3 className="profile__input-title">E-mail</h3>
              <input
                onChange={handleChange}
                value={values.email}
                required
                type="email"
                className="profile__input"
                name="email"
                placeholder="E-mail"
              />
              {Boolean(errors["email"]) && (
                <span className="profile__error-message">
                  {errors["email"]}
                </span>
              )}
            </div>
          </fieldset>
          <div className="profile__button-groupe">
            {errorMessage.length > 0 && (
              <p className="profile__error-message">{errorMessage}</p>
            )}
            <button
              disabled={!isValid || !checkUserDataEdited()}
              type="submit"
              className="profile__button-editing"
            >
              Редактировать
            </button>
          </div>
          <button
            onClick={logout}
            type="button"
            className="profile__button-exit"
          >
            Выйти из аккаунта
          </button>
        </form>
      </main>
      <Navigation
        onCloseButtonClick={closeNavigation}
        isOpened={isNavigationOpened}
      />
      <Overlay onOverlayClick={closeNavigation} isOpened={isNavigationOpened} />
    </>
  );
}

export default Profile;
