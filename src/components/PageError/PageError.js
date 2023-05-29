import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageError.css';

function PageError() {
  return (
    <div className="pageError">
      <div className="pageError__error-groupe">
        <p className="pageError__error-number">404</p>
        <p className="pageError__error-message">Страница не найдена</p>
      </div>
      <NavLink to="/" className="pageError__link">Назад</NavLink>
    </div>
  );
}

export default PageError; 