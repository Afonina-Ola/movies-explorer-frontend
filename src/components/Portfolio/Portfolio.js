import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Portfolio.css';
import indicator from '../../images/indicator.svg';

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul class="portfolio__list">
            <li class="portfolio__item"> <a target="_blank" class="portfolio__item-container" href="https://github.com/Afonina-Ola/russian-travel" rel="noreferrer">
                <p class="portfolio__item-text">Статичный сайт</p>
                <img src={indicator} className="portfolio__item-indicator" alt='рисунок стрелочки' />
            </a></li>
            <li class="portfolio__item"> <a target="_blank" class="portfolio__item-container" href="https://github.com/Afonina-Ola/russian-travel" rel="noreferrer">
                <p class="portfolio__item-text">Адаптивный сайт</p>
                <img src={indicator} className="portfolio__item-indicator" alt='рисунок стрелочки' />
            </a></li>
            <li class="portfolio__item"> <a target="_blank" class="portfolio__item-container" href="https://github.com/Afonina-Ola/react-mesto-api-full-gha" rel="noreferrer">
                <p class="portfolio__item-text">Одностраничное приложение</p>
                <img src={indicator} className="portfolio__item-indicator" alt='рисунок стрелочки' />
            </a></li>
            </ul>
        </div>
    );
}

export default Portfolio; 