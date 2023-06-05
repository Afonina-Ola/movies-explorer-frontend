import React, { useState } from 'react';
import Header from '../Header/Header.js';
import Navigation from '../Navigation/Navigation.js';
import Overlay from '../Overlay/Overlay.js';
import './Profile.css';

function Profile({ errorMessage }) {
    const [isNavigationOpened, setIsNavigationOpened] = useState(false);

    const body = document.querySelector('.body');

    const openNavigation = () => {
        body.classList.add('body_without-scroll')
        setIsNavigationOpened(true);
    }

    const closeNavigation = () => {
        body.classList.remove('body_without-scroll')
        setIsNavigationOpened(false)
    }

    return (
        <>
            <Header onBurgerButtonClick={openNavigation} isLogged={true} />
            <main className="profile">
                <form className="profile__container">
                    <p className="profile__greeting">Привет, Виталий!</p>
                    <fieldset className="profile__form-input-container">
                        <div className="profile__input-container">
                            <h3 className="profile__input-title">Имя</h3>
                            <input required type="text" className="profile__input" name="name" placeholder="Имя" />
                        </div>
                        <div className="profile__input-container">
                            <h3 className="profile__input-title">E-mail</h3>
                            <input required type="email" className="profile__input" name="email" placeholder="E-mail" />
                        </div>
                    </fieldset>
                    <div className="profile__button-groupe">
                        {errorMessage.length > 0 && <p className="profile__error-message">
                            {errorMessage}
                        </p>
                        }
                        <button type="submit" className="profile__button-editing">Редактировать</button>
                    </div>
                    <button type="submit" className="profile__button-exit">Выйти из аккаунта</button>
                </form>
            </main>
            <Navigation onCloseButtonClick={closeNavigation} isOpened={isNavigationOpened} />
            <Overlay onOverlayClick={closeNavigation} isOpened={isNavigationOpened} />
        </>
    );
}

export default Profile; 