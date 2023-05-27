import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './MoviesCard.css';
import posterAuto from '../../images/poster_auto.png';
import flag from '../../images/flag.svg';
import flagSave from '../../images/flag_save.svg';

function MoviesCard() {
  return (
    <div className="movies-card">
      <div className="movies-card__container-info">
      <div className="movies-card__container-title-time">
      <p className="movies-card__title">33 слова о дизайне</p>
      <p className="movies-card__time">1ч 47м</p>        
      </div>
      <img src={flag} className="movies-card__flag" alt='флажок выбора фильма' />
      </div>
      <img src={posterAuto} className="movies-card__image" alt='постер фильма' />
    </div>
  );
}

export default MoviesCard; 