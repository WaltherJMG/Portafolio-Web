import React from 'react';
import Avatar from '../../assets/avatar.png';
import CV from '../../assets/CV - WALTHER.pdf';
import GitHub from '../../assets/github-violet.svg';
import Linkedin from '../../assets/linkedin-violet.svg';
import File from '../../assets/file-violet.svg';
import './Inicio.css';

const Inicio = () => {
    return (
        <main id="inicio">
            <div className="main-max-contain">
                <div className="contain">
                    <span className="eyebrow">Disponible para proyectos web y sistemas</span>
                    <h1><span>Walther</span> Matute</h1>
                    <h3>Desarrollador Junior Web & Sistemas</h3>
                    <p>Creo sistemas web funcionales, interfaces responsivas y soluciones conectadas a datos. Trabajo con frontend, bases backend, redes y administracion de sistemas para construir proyectos utiles, claros y mantenibles.</p>
                    <div className="main-social">
                        <a className="primary-link" href="#proyectos">Ver proyectos</a>
                        <a href={CV} download="CV Walther"><img src={File} alt="" /> CV</a>
                        <a href="https://www.linkedin.com/in/walther-garcia-42a9a32ab/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" /> Linkedin</a>
                        <a href="https://github.com/WaltherJMG" target="_blank" rel="noreferrer"><img src={GitHub} alt="" /> Github</a>
                    </div>
                </div>
                <div className="main-overlay">
                    <img className="avatar" src={Avatar} alt="Retrato de Walther Matute" width="450" height="450" decoding="async" fetchPriority="high" />
                    <div className="overlay"></div>
                </div>
            </div>
        </main>
    );
};

export default Inicio;
