import React from 'react';
import Perfil from '../../assets/perfil.png';
import './About.css';

const facts = [
    ['Edad', '21 años'],
    ['Formacion', 'Ingenieria TI'],
    ['Enfoque', 'Sistemas web'],
];

const capabilities = [
    'Desarrollo de sistemas',
    'Soporte tecnico',
    'Gestion de redes',
    'Mantenimiento web',
    'Documentacion',
    'Aprendizaje rapido',
];

const About = () => {
    return (
        <div className="container">
            <section id="about">
                <div className="about-contain">
                    <div className="about-shell">
                        <div className="about-heading">
                            <span className="section-kicker">Perfil profesional</span>
                            <h1>Sobre <span>mi</span></h1>
                        </div>

                        <div className="about-profile">
                            <div className="profile-card">
                                <img src={Perfil} alt="Walther Matute" width="96" height="96" loading="lazy" decoding="async" />
                                <div>
                                    <span className="profile-status">Disponible para practicas o proyectos</span>
                                    <h2>Walther Matute</h2>
                                    <p>Desarrollador junior</p>
                                </div>
                            </div>

                            <div className="about-summary">
                                <p>Estudiante de Ingenieria en Tecnologias de la Informacion. Desarrollo interfaces web y sistemas funcionales con bases de frontend, backend, datos, redes y administracion de sistemas.</p>
                                <p>Busco aportar en equipos donde pueda construir, mantener y mejorar soluciones reales mientras sigo creciendo como desarrollador.</p>
                            </div>
                        </div>

                        <div className="about-grid">
                            <div className="about-facts">
                                {facts.map(([label, value]) => (
                                    <div key={label}>
                                        <span>{label}</span>
                                        <strong>{value}</strong>
                                    </div>
                                ))}
                            </div>

                            <div className="about-capabilities">
                                {capabilities.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
