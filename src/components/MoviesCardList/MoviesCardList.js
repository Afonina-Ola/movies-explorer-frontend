import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';

function MoviesCardList({ cards, isSavedMode }) {
    return (
        <div className="movies-card-list">
            {!isSavedMode &&
                <>
                    {cards.map(({ isSaved, title, time, cardImage, id }) => (
                        <MoviesCard key={id} isSaved={isSaved} title={title} time={time} cardImage={cardImage} />
                    ))}
                </>}
            {isSavedMode && <>
                {cards.filter((card) => card.isSaved === true).map(({ isSaved, title, time, cardImage, id }) => (
                    <MoviesCard key={id} isSaved={isSaved} title={title} time={time} cardImage={cardImage} />
                ))}
            </>}
        </div>
    );
}

export default MoviesCardList; 