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
        <>
            <Header onBurgerButtonClick={() => setIsNavigationOpened(true)} isLogged={true} />
            <main>
                <SearchForm />
                <MoviesCardList cards={cardsData} isSavedMode />
                <div className="savedMovies"></div>
            </main>
            <Footer />
            <Navigation onCloseButtonClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />
            <Overlay onOverlayClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />
        </>
    );
}

export default SavedMovies; 