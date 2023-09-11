import React from 'react';
import './AboutMe.css';
import photoStudent from '../../images/photo_my.png';

function AboutMe() {
    return (
        <section className="about-me ">
            <h2 className="about-me__title">Студент</h2 >
            <div className="about-me__profile-container ">
                <div className="about-me__profile-container-text-link" >
                    <div className="about-me__profile-container-text" >
                        <p className="about-me__student-name">Ольга</p>
                        <p className="about-me__student-profession">Фронтенд-разработчик, 37 лет</p>
                        <p className="about-me__student-info">Больше 10 лет работала в сфере строительства и проектирования, участвовала в строительстве и сдаче в эксплуатацию нескольких промышленных объектов. 2 года назад заинтересовалась сферой IT, прошла обучение и хочу попробовать себя в новой специальности.</p>
                    </div>
                    <a target="_blank" className="about-me__link-github" href="https://github.com/" rel="noreferrer">Github</a>
                </div>
                <img src={photoStudent} className="about-me__photo" alt='фото студента' />
            </div>
        </section>
    );
}

export default AboutMe; 