import React from 'react';
import { Link, Route } from 'react-router-dom';
import './AboutMe.css';
import photoStudent from '../../images/photo_student.png';

function AboutMe() {
    return (
        <div className="about-me ">
            <h2 className="about-me__title">Студент</h2 >
            <div className="about-me__profile-container ">
                <div className="about-me__profile-container-text-link" >
                    <div className="about-me__profile-container-text" >
                        <p className="about-me__student-name">Виталий</p>
                        <p className="about-me__student-profession">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__student-info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015&nbsp;года работал в компании «СКБ Контур». После того, как прошёл курс по веб&nbsp;-&nbsp;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <a target="_blank" className="about-me__link-github" href="https://github.com/" rel="noreferrer">Github</a>
                </div>
                <img src={photoStudent} className="about-me__photo" alt='фото студента' />
            </div>
        </div>
    );
}

export default AboutMe; 