import React from 'react';
import './MoviesCard.css';

function MoviesCard({ isSaved, title, time, cardImage }) {
  return (
    <div className="movies-card">
      <div className="movies-card__container-info">
        <div className="movies-card__container-title-time">
          <p className="movies-card__title">{title}</p>
          <p className="movies-card__time">{time}</p>
        </div>
        <div className={isSaved ? "movies-card__flag movies-card__flag_active" : "movies-card__flag"} ></div>
      </div>
      <img src={cardImage} className="movies-card__image" alt='постер фильма' />
    </div>
  );
}

export default MoviesCard; 