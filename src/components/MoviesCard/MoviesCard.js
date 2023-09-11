import React, { useState } from "react";
import { addMovie, deleteMoviesCard } from "../../utils/MainApi";

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
  isSavedPage,
  baseId,
  setUpdateSavedFilms,
}) {
  const [isLiked, setIsLiked] = useState(isSaved);
  const [cardId, setcardId] = useState(baseId);

  const addCardLike = () => {
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
        setcardId(data._id);
        setIsLiked(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteLikeFilm = () => {
    if (!cardId) {
      console.log("Не передан id фильма");
      return;
    }
    deleteMoviesCard(cardId).then((data) => {
      setIsLiked(false);
      if (isSavedPage) {
        setUpdateSavedFilms((prev) => !prev);
      }
    });
  };

  return (
    <div className="movies-card" rel="noreferrer">
      <a target="_blank" className="movies-card__link" href={trailerLink}>
        <div className="movies-card__container-info">
          <div className="movies-card__container-title-time">
            <p className="movies-card__title">{nameRU}</p>
            <p className="movies-card__time">{duration}</p>
          </div>
        </div>
        <img src={image} className="movies-card__image" alt="постер фильма" />
      </a>
      {!isSavedPage && (
        <div
          onClick={isLiked ? deleteLikeFilm : addCardLike}
          className={
            isLiked
              ? "movies-card__flag movies-card__flag_active"
              : "movies-card__flag"
          }
        ></div>
      )}
      {isSavedPage && (
        <div
          onClick={deleteLikeFilm}
          className="movies-card__flag movies-card__flag_delete"
        ></div>
      )}
    </div>
  );
}

export default MoviesCard;
