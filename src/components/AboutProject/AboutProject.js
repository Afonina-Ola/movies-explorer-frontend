import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className="about-project">
            <h2 className="about-project__title" id="project-info">О проекте</h2>
            <div className="about-project__text-container">
                <div className="about-project__text-item">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__text-item">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__scheme">
                <p className="about-project__scheme-back-end">1 неделя</p>
                <p className="about-project__scheme-front-end">4 недели</p>
            </div>
            <div className="about-project__scheme-text">
                <p className="about-project__scheme-back-end-text">Back-end</p>
                <p className="about-project__scheme-front-end-text">Front-end</p>
            </div>
        </div>
    );
}

export default AboutProject; 