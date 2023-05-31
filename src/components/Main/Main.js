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
  return (
    <>
      <Header onBurgerButtonClick={() => setIsNavigationOpened(true)} isLogged={false} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />     
        <Navigation onCloseButtonClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />
        <Overlay onOverlayClick={() => setIsNavigationOpened(false)} isOpened={isNavigationOpened} />      
    </>
  );
}

export default Main; 