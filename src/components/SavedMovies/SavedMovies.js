import React, { useState } from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Navigation from '../Navigation/Navigation.js';
import Overlay from '../Overlay/Overlay.js';
import { cardsData } from '../../data.js'
import './SavedMovies.css';

function SavedMovies() {
    const [isNavigationOpened, setIsNavigationOpened] = useState(false);
    return (
        <section>
            <Header onBurgerButtonClick={() => setIsNavigationOpened(true)} isLogged={true} />
            <SearchForm />
            <MoviesCardList cards={cardsData} isSavedMode />
            <div className="savedMovies"></div>
            <Footer />
            <Navigation onCloseButtonClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />
            <Overlay onOverlayClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />
        </section>
    );
}

export default SavedMovies; 