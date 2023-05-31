import React from 'react';
import './Portfolio.css';
import indicator from '../../images/indicator.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item"> <a className="portfolio__item-container" target="_blank" href="https://github.com/Afonina-Ola/russian-travel" rel="noreferrer">
                    <p className="portfolio__item-text">Статичный сайт</p>
                    <img src={indicator} className="portfolio__item-indicator" alt='рисунок стрелочки' />
                </a></li>
                <li className="portfolio__item"> <a target="_blank" className="portfolio__item-container" href="https://github.com/Afonina-Ola/russian-travel" rel="noreferrer">
                    <p className="portfolio__item-text">Адаптивный сайт</p>
                    <img src={indicator} className="portfolio__item-indicator" alt='рисунок стрелочки' />
                </a></li>
                <li className="portfolio__item"> <a target="_blank" className="portfolio__item-container" href="https://github.com/Afonina-Ola/react-mesto-api-full-gha" rel="noreferrer">
                    <p className="portfolio__item-text">Одностраничное приложение</p>
                    <img src={indicator} className="portfolio__item-indicator" alt='рисунок стрелочки' />
                </a></li>
            </ul>
        </section>
    );
}

export default Portfolio;

