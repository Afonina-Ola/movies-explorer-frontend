import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Preloader from "../Preloader/Preloader.js";
import Navigation from "../Navigation/Navigation.js";
import Overlay from "../Overlay/Overlay.js";
import { getAllMovies } from "../../utils/MoviesApi.js";
import useCurrentWidth from "../../hooks/useCurrentWidth.js";
import "./Movies.css";
import filterFilmsWithDuration from "../../utils/filterFilmsWithDuration.js";
import { getMovies } from "../../utils/MainApi.js";

function Movies({ loggedIn }) {
  const [isLoading, setIsLoading] = useState();
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);
  const [searchFormValue, setSearchFormValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [visibleMovies, setVisibleMovies] = useState(null);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [cardViewRules, setCardViewRules] = useState({
    firstView: null,
    countOfLoadCards: null,
  });
  const [savedFilms, setSavedFilms] = useState([]);
  const [savedFilmsIds, setSavedFilmsIds] = useState([]);
  const [isSavedFilmsLoading, setIsSavedFilmsLoading] = useState(true);
  const [updateSavedFilms, setUpdateSavedFilms] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  const width = useCurrentWidth();

  function loadMore() {
    // текущее количество фильмов
    const currentCountFilms = visibleMovies.length;
    // добавленные фильмы
    const filmsToAdded = filteredMovies.slice(
      currentCountFilms,
      currentCountFilms + cardViewRules.countOfLoadCards
    );

    localStorage.setItem(
      "visible-movies",
      JSON.stringify([...visibleMovies, ...filmsToAdded])
    );
    // происходит объединение текущегоо количества фильмов с добавленными
    setVisibleMovies([...visibleMovies, ...filmsToAdded]);
  }

  const body = document.querySelector(".body");

  const openNavigation = () => {
    body.classList.add("body_without-scroll");
    setIsNavigationOpened(true);
  };

  const closeNavigation = () => {
    body.classList.remove("body_without-scroll");
    setIsNavigationOpened(false);
  };

  const handleSearchFormInputChange = (event) => {
    setSearchFormValue(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchFormValue.length === 0) {
      return alert("Нужно ввести ключевое слово");
    }
    localStorage.setItem("search-value", searchFormValue);
    setIsLoading(true);
    setIsRequestError(false);
    getAllMovies()
      .then((data) => {
        if (data.length > 0) {
          // фильтрует полученные с beatfilm-movies фильмы на соответсвие запросу пользователя
          let filtered = [];

          if (isShortFilm) {
            filtered = filterFilmsWithDuration(data).filter((movie) =>
              movie.nameRU.toLowerCase().includes(searchFormValue.toLowerCase())
            );
          } else {
            filtered = data.filter((movie) =>
              movie.nameRU.toLowerCase().includes(searchFormValue.toLowerCase())
            );
          }

          localStorage.setItem("movies", JSON.stringify(filtered));

          setFilteredMovies(filtered);
          //обрезает массив отфильтрованных фильмов в зависимости от расширения экрана
          const firstScreen = filtered.slice(0, cardViewRules.firstView);
          localStorage.setItem("visible-movies", JSON.stringify(firstScreen));
          setVisibleMovies(firstScreen);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsRequestError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFilterCheckboxClick = () => {
    localStorage.setItem("is-short-film", !isShortFilm);
    setIsShortFilm(!isShortFilm);
  };

  useEffect(() => {
    const films = localStorage.getItem("movies");
    const visibleFilms = localStorage.getItem("visible-movies");

    if (films) {
      setFilteredMovies(JSON.parse(films));
    }
    if (visibleFilms) {
      setVisibleMovies(JSON.parse(visibleFilms));
    }

    setSearchFormValue(localStorage.getItem("search-value"));
    const isShort = localStorage.getItem("is-short-film");

    if (isShort === "false" || !isShort) {
      setIsShortFilm(false);
    } else {
      setIsShortFilm(true);
    }
  }, []);

  useEffect(() => {
    const screenWidth = width;

    if (screenWidth >= 1280 || (screenWidth < 1280 && screenWidth > 768)) {
      setCardViewRules({ firstView: 12, countOfLoadCards: 3 });
      return;
    }
    if (screenWidth < 768 && screenWidth > 480) {
      setCardViewRules({ firstView: 8, countOfLoadCards: 2 });
      return;
    }
    if (screenWidth < 480) {
      setCardViewRules({ firstView: 5, countOfLoadCards: 2 });
      return;
    }
    return () => {};
  }, [width]);

  useEffect(() => {
    setIsSavedFilmsLoading(true);
    getMovies()
      .then((data) => {
        setSavedFilms(data);
        const ids = data.map((film) => film.movieId);
        setSavedFilmsIds(ids);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsSavedFilmsLoading(false));
  }, [updateSavedFilms]);

  useEffect(() => {
    if (isSavedFilmsLoading) return;
    if (visibleMovies) {
      // Устанавливаем значение иконки лайка
      const movies = visibleMovies.map((movie) => {
        if (savedFilmsIds.length) {
          savedFilmsIds.includes(movie.id)
            ? (movie.isSaved = true)
            : (movie.isSaved = false);
        }

        if (savedFilms.length) {
          const selectedFilm = savedFilms.find(
            (item) => item.movieId === movie.id
          );
          movie.baseId = selectedFilm ? selectedFilm._id : null;
        }

        // добавляем id из нашей базы

        return movie;
      });
      setAllMovies(movies);
    }
  }, [
    filteredMovies,
    isSavedFilmsLoading,
    savedFilms,
    savedFilmsIds,
    visibleMovies,
  ]);

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
          movies={allMovies}
          isShortFilm={isShortFilm}
          setUpdateSavedFilms={setUpdateSavedFilms}
        />
        {filteredMovies !== null && filteredMovies.length === 0 && (
          <p className="movies__not-found-movie">Ничего не найдено</p>
        )}
        {isRequestError === true && (
          <p className="movies__not-found-movie">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )}
        {!isLoading &&
          visibleMovies &&
          filteredMovies &&
          visibleMovies.length < filteredMovies.length && (
            <button onClick={loadMore} className="movies__button-add">
              Ещё
            </button>
          )}
        {isLoading && <Preloader />}
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

export default Movies;
