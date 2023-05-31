import React from 'react';
import './Techs.css';

function Techs() {
    const tabs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2 >
            <div className="techs__text-container">
                <h3 className="techs__subtitle">7 технологий</h3>
                <p className="techs__info-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="techs__table">
                {tabs.map((item) => (
                    <div key={item} className="techs__table-item">
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Techs; 