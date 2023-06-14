import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Navigation from "../Navigation/Navigation.js";
import Overlay from "../Overlay/Overlay.js";
import { getMovies } from "../../utils/MainApi.js";
import filterFilmsWithDuration from "../../utils/filterFilmsWithDuration.js";
import "./SavedMovies.css";

function SavedMovies({ loggedIn }) {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);
  const [searchFormValue, setSearchFormValue] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [savedFilms, setSavedFilms] = useState([]);
  const [updateSavedFilms, setUpdateSavedFilms] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((data) => {
        setSavedFilms(data);
        setFilteredMovies(data);
      })
      .catch((err) => console.log(err));
  }, [updateSavedFilms]);

  const body = document.querySelector(".body");

  const openNavigation = () => {
    body.classList.add("body_without-scroll");
    setIsNavigationOpened(true);
  };

  const handleSearchFormInputChange = (event) => {
    setSearchFormValue(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();

    if (searchFormValue.length === 0) {
      return alert("Нужно ввести ключевое слово");
    }

    let filtered = [];

    if (isShortFilm) {
      filtered = filterFilmsWithDuration(savedFilms).filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchFormValue.toLowerCase())
      );
    } else {
      filtered = savedFilms.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchFormValue.toLowerCase())
      );
    }
    setFilteredMovies(filtered);
  };

  const handleFilterCheckboxClick = () => {
    setIsShortFilm(!isShortFilm);
  };
  const closeNavigation = () => {
    body.classList.remove("body_without-scroll");
    setIsNavigationOpened(false);
  };

  return (
    <>
      <Header onBurgerButtonClick={openNavigation} isLogged={loggedIn} />
      <main>
        <SearchForm
          searchFormInputValue={searchFormValue}
          onSearchFormInputChange={handleSearchFormInputChange}
          onSearchFormSubmit={handleSearchFormSubmit}
          filterCheckboxSelected={isShortFilm}
          onFilterCheckboxClick={handleFilterCheckboxClick}
        />
        <MoviesCardList
          movies={filteredMovies}
          isSavedMode
          isSavedPage={true}
          searchFormInputValue={searchFormValue}
          onSearchFormInputChange={handleSearchFormInputChange}
          onSearchFormSubmit={handleSearchFormSubmit}
          filterCheckboxSelected={isShortFilm}
          onFilterCheckboxClick={handleFilterCheckboxClick}
          setUpdateSavedFilms={setUpdateSavedFilms}
        />
        {filteredMovies !== null && filteredMovies.length === 0 && (
          <p className="movies__not-found-movie">Ничего не найдено</p>
        )}
      </main>
      <Footer />
      <Navigation
        onCloseButtonClick={closeNavigation}
        isOpened={isNavigationOpened}
      />
      <Overlay onOverlayClick={closeNavigation} isOpened={isNavigationOpened} />
    </>
  );
}

export default SavedMovies;
