import React, { useState } from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import { cardsData } from '../../data.js'
import Navigation from '../Navigation/Navigation.js';
import Overlay from '../Overlay/Overlay.js';
import './Movies.css';

function Movies() {
    const [isLoading, setIsLoading] = useState();
    const [isNavigationOpened, setIsNavigationOpened] = useState(false);

    function loadMore() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }
    return (
        <>
            <Header onBurgerButtonClick={() => setIsNavigationOpened(true)} isLogged={true} />
            <main>
                <SearchForm />
                <MoviesCardList cards={cardsData} />
                {!isLoading &&
                    <button onClick={loadMore} className="movies__button-add">Ещё</button>
                }
                {isLoading && <Preloader />}
            </main>
            <Footer />
            <Navigation onCloseButtonClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />
            <Overlay onOverlayClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />
        </>
    );
}

export default Movies; 