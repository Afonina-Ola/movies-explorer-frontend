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

    const body = document.querySelector('.body');

    const openNavigation = () => {
        body.classList.add('body_without-scroll')
        setIsNavigationOpened(true);
    }

    const closeNavigation = () => {
        body.classList.remove('body_without-scroll')
        setIsNavigationOpened(false)
    }

    return (
        <>
            <Header onBurgerButtonClick={openNavigation} isLogged={true} />
            <main>
                <SearchForm />
                <MoviesCardList cards={cardsData} isSavedMode />
                <div className="savedMovies"></div>
            </main>
            <Footer />
            <Navigation onCloseButtonClick={closeNavigation} isOpened={isNavigationOpened} />
            <Overlay onOverlayClick={closeNavigation} isOpened={isNavigationOpened} />
        </>
    );
}

export default SavedMovies; 