import React from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import { cardsData } from '../../data.js'
import './SavedMovies.css';

function SavedMovies() {
    return (
        <section>
            <Header isLogged={true} />
            <SearchForm />
            <MoviesCardList cards={cardsData} isSavedMode />
            <div className="savedMovies"></div>
            <Footer />
        </section>
    );
}

export default SavedMovies; 