import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  isSavedMode,
  setUpdateSavedFilms,
  isSavedPage,
}) {
  return (
    <section className="movies-card-list">
      {Boolean(movies) && Boolean(movies.length) && (
        <>
          {movies.map(
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
              baseId,
              _id,
            }) => (
              <MoviesCard
                key={id || _id}
                isSaved={isSaved}
                nameRU={nameRU}
                duration={duration}
                image={
                  isSavedMode
                    ? image
                    : `https://api.nomoreparties.co${image.url}`
                }
                title={nameRU}
                time={duration}
                country={country}
                director={director}
                year={year}
                description={description}
                trailerLink={trailerLink}
                movieId={id}
                nameEN={nameEN}
                baseId={isSavedMode ? _id : baseId}
                isSavedPage={isSavedPage}
                setUpdateSavedFilms={setUpdateSavedFilms}
              />
            )
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
