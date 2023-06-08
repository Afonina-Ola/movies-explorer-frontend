import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ cards, isSavedMode }) {
  return (
    <section className="movies-card-list">
      {!isSavedMode && cards && (
        <>
          {cards.map(({ isSaved, nameRU, duration, image, id }) => (
            <MoviesCard
              key={id}
              isSaved={isSaved}
              title={nameRU}
              time={duration}
              cardImage={image.url}
            />
          ))}
        </>
      )}
      {isSavedMode && cards && (
        <>
          {cards
            .filter((card) => card.isSaved === true)
            .map(({ isSaved, nameRU, duration, image, id }) => (
              <MoviesCard
                key={id}
                isSaved={isSaved}
                title={nameRU}
                time={duration}
                cardImage={image.url}
              />
            ))}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
