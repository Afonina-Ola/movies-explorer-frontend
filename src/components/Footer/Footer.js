import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__content'>
        <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
        <div className="footer__links">
          <a href='https://github.com/' target='_blank' className="footer__link" rel="noreferrer">Яндекс.Практикум</a>
          <a href='https://practicum.yandex.ru/' target='_blank' className="footer__link" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 