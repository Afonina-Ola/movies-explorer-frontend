import React from 'react';
import './Promo.css';
import promoLogo from '../../images/promo_logo.svg';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__text-container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
        <p className="promo__info-text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="#project-info" className="promo__link-container">Узнать больше  </a>
      </div>
      <img src={promoLogo} className="promo__logo" alt='логотип' />
    </div>
  );
}

export default Promo; 