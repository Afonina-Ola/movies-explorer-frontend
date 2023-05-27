import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
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
                <button type="submit" className="profile__button-editing">Редактировать</button>
                <button type="submit" className="profile__button-exit">Выйти из аккаунта</button>
            </form>
        </div>
    );
}

export default Profile; 