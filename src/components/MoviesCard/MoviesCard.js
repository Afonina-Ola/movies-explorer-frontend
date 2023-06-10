import React, { useState } from "react";
import { addMovie } from "../../utils/MainApi";

import "./MoviesCard.css";

function MoviesCard({
  isSaved,
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  movieId,
  nameRU,
  nameEN,
}) {
  const [isLiked, setIsLiked] = useState(isSaved);

  console.log(isLiked, isSaved);

  const handleLikeClick = () => {
    if (isLiked) {
    } else {
      addMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail: image,
        movieId,
        nameRU,
        nameEN,
      })
        .then((data) => {
          setIsLiked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="movies-card" rel="noreferrer">
      <a className="movies-card__link" href={trailerLink}>
        <div className="movies-card__container-info">
          <div className="movies-card__container-title-time">
            <p className="movies-card__title">{nameRU}</p>
            <p className="movies-card__time">{duration}</p>
          </div>
        </div>
        <img src={image} className="movies-card__image" alt="постер фильма" />
      </a>
      <div
        onClick={handleLikeClick}
        className={
          isLiked
            ? "movies-card__flag movies-card__flag_active"
            : "movies-card__flag"
        }
      ></div>
    </div>
  );
}

export default MoviesCard;
