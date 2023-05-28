import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ isSaved, title, time, cardImage }) {
  return (
    <section className="movies-card">
      <div className="movies-card__container-info">
        <div className="movies-card__container-title-time">
          <p className="movies-card__title">{title}</p>
          <p className="movies-card__time">{time}</p>
        </div>
        <div className={isSaved ? "movies-card__flag movies-card__flag_active" : "movies-card__flag"} ></div>
      </div>
      <img src={cardImage} className="movies-card__image" alt='постер фильма' />
    </section>
  );
}

export default MoviesCard; 