import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { getMovies } from "../../utils/MainApi";
import "./MoviesCardList.css";

function MoviesCardList({ cards, isSavedMode }) {
  const [savedFilms, setSavedFilms] = useState([]);
  const [savedFilmsIds, setSavedFilmsIds] = useState([]);

  useEffect(() => {
    getMovies()
      .then((data) => {
        setSavedFilms(data);
        const ids = data.map((film) => film.movieId);
        setSavedFilmsIds(ids);
      })
      .catch((err) => console.log(err));
  }, []);

  let allMovies = [];
  if (cards) {
    allMovies = cards.map((movie) => {
      savedFilmsIds.includes(movie.id)
        ? (movie.isSaved = true)
        : (movie.isSaved = false);
      return movie;
    });
  }

  console.log(savedFilmsIds);

  return (
    <section className="movies-card-list">
      {!isSavedMode && savedFilms.length && cards && cards.length && (
        <>
          {allMovies.map(
            ({
              isSaved,
              country,
              director,
              duration,
              year,
              description,
              image,
              trailerLink,
              nameRU,
              nameEN,
              id,
            }) => (
              <MoviesCard
                key={id}
                isSaved={isSaved}
                nameRU={nameRU}
                duration={duration}
                image={`https://api.nomoreparties.co${image.url}`}
                title={nameRU}
                time={duration}
                country={country}
                director={director}
                year={year}
                description={description}
                trailerLink={trailerLink}
                movieId={id}
                nameEN={nameEN}
              />
            )
          )}
        </>
      )}
      {isSavedMode && savedFilms && (
        <>
          {savedFilms.map(
            ({
              isSaved,
              country,
              director,
              duration,
              year,
              description,
              image,
              trailerLink,
              thumbnail,
              movieId,
              nameRU,
              nameEN,
            }) => (
              <MoviesCard
                key={movieId}
                isSaved={isSaved}
                nameRU={nameRU}
                duration={duration}
                image={image}
                title={nameRU}
                time={duration}
                country={country}
                director={director}
                year={year}
                description={description}
                trailerLink={trailerLink}
                thumbnail={thumbnail}
                movieId={movieId}
                nameEN={nameEN}
              />
            )
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
