import React, { useState } from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Navigation from '../Navigation/Navigation.js';
import Overlay from '../Overlay/Overlay.js';

function Main() {
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
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
      <Navigation onCloseButtonClick={closeNavigation} isOpened={isNavigationOpened} />
      <Overlay onOverlayClick={closeNavigation} isOpened={isNavigationOpened} />
    </>
  );
}

export default Main; 