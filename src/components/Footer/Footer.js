import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__copyright-container">
        <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
        <p className="footer__copyright">Яндекс.Практикум Github</p>
      </div>
    </footer>
  );
}

export default Footer; 