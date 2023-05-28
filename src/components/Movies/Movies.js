import React, { useState } from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import { cardsData } from '../../data.js'
import './Movies.css';

function Movies() {
    const [isLoading, setIsLoading] = useState()

    function loadMore() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }
    return (
        <section>
            <Header isLogged={true} />
            <SearchForm />
            <MoviesCardList cards={cardsData} />
            {!isLoading &&
                <button onClick={loadMore} className="movies__button-add">Ещё</button>
            }
            {isLoading && <Preloader />}
            <Footer />
        </section>
    );
}

export default Movies; 