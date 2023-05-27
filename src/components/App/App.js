import React from 'react';
// Добавили компонент Header с логотипом проекта
// import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import '../../index.css';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function App() {
  return (
    <div className="root">
      <Promo />
      {/* <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <MoviesCard />
      <Register /> 
      <Login />
     <Profile /> 
     <FilterCheckbox/>
      <Footer/> */}
      <Header />
    </div>
  );
}

export default App; 