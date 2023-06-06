import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageError.css';

function PageError() {
  return (
    <div className="page-error">
      <div className="page-error__error-groupe">
        <p className="page-error__error-number">404</p>
        <p className="page-error__error-message">Страница не найдена</p>
      </div>
      <NavLink to="/" className="page-error__link">Назад</NavLink>
    </div>
  );
}

export default PageError; 