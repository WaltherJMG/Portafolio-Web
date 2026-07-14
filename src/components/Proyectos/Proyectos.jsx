import React from 'react';
import Aromao from '../../assets/aromao.webp';
import TicTacTo from '../../assets/tic-tac-to.webp';
import Landing from '../../assets/LANDING.webp';
import Sistema from '../../assets/SISTEMA.webp';
import GitHub from '../../assets/github.png';
import './Proyectos.css';

const projects = [
    {
        title: 'Aromao Coffee',
        image: Aromao,
        type: 'Landing comercial',
        description: 'Sitio promocional para una marca de cafe con enfoque visual, secciones comerciales y presentacion de producto.',
        stack: ['HTML', 'CSS'],
    },
    {
        title: 'Tic Tac Toe',
        image: TicTacTo,
        type: 'Juego interactivo',
        description: 'Juego clasico con manejo de turnos, validacion de ganador y estados de partida en el navegador.',
        stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Landing Page',
        image: Landing,
        type: 'Reto frontend',
        description: 'Pagina de aterrizaje basada en un reto de Frontend Mentor, optimizada para lectura y adaptacion responsive.',
        stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Gestion de Inventario',
        image: Sistema,
        type: 'Sistema Web',
        description: 'Sistema de gestion de inventario para una empresa automotriz, con funcionalidades de registro, actualizacion y eliminacion de productos.',
        stack: ['HTML', 'CSS', 'JavaScript'],
    },
];

const Proyectos = () => {
    return (
        <section id="proyectos">
            <div className="projets-contain">
                <span className="section-kicker">Trabajo aplicado</span>
                <h1>Mis <span>Proyectos</span></h1>
                <p className="section-intro">Una seleccion de interfaces y ejercicios donde aplico estructura, estilos responsivos e interaccion con JavaScript.</p>
            </div>
            <div className="projects-contain-cards projets-contain">
                {projects.map((project, index) => (
                    <article className="card" key={project.title}>
                        <div className="project-visual">
                            <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                            <div className="browser-dots" aria-hidden="true">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <img src={project.image} alt={`Vista previa de ${project.title}`} width="900" height="430" loading="lazy" decoding="async" />
                        </div>
                        <div className="card-information">
                            <div>
                                <span className="project-type">{project.type}</span>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div className="project-stack">
                                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                            </div>
                            <div className="card-social">
                                <a href="https://github.com/MegaDSeo" target="_blank" rel="noreferrer">
                                    <img src={GitHub} alt="" /> Codigo
                                </a>
                                <a href="#contacto">Consultar</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Proyectos;
