import React from 'react';
import './Skills.css';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/CSS.webp';
import Bootstrap from '../../assets/Bootstrap.webp';
import Js from '../../assets/JavaScript.png';
import Rct from '../../assets/react.svg';
import Pytn from '../../assets/Python.webp';
import C from '../../assets/C.webp';
import Java from '../../assets/Java.webp';

const skillGroups = [
    {
        title: 'Frontend',
        description: 'Interfaces responsivas, componentes reutilizables y experiencias claras para el usuario.',
        accent: 'blue',
        skills: [
            { name: 'HTML', icon: HTML },
            { name: 'CSS', icon: CSS },
            { name: 'JavaScript', icon: Js },
            { name: 'React Js', icon: Rct },
            { name: 'Bootstrap', icon: Bootstrap },
        ],
    },
    {
        title: 'Backend',
        description: 'Bases para construir APIs, manejar rutas, servicios y logica del servidor.',
        accent: 'green',
        skills: [
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'Python', icon: Pytn },
        ],
    },
    {
        title: 'Datos',
        description: 'Modelado inicial, consultas y persistencia para aplicaciones web.',
        accent: 'amber',
        skills: [
            { name: 'PostgreSQL' },
        ],
    },
    {
        title: 'Lenguajes',
        description: 'Fundamentos de programacion, estructuras y resolucion de problemas.',
        accent: 'cyan',
        skills: [
            { name: 'Java', icon: Java },
            { name: 'C++', icon: C },
        ],
    },
];

const highlights = ['Responsive UI', 'APIs REST', 'Componentes React', 'Bases de datos'];

const Skills = () => {
    return (
        <section id="habilidades">
            <div className="skills-contain">
                <div className="skills-heading">
                    <span className="section-kicker">Stack tecnico</span>
                    <h1><span>Mis</span> Habilidades</h1>
                    <p className="section-intro">Tecnologias organizadas por area para mostrar con claridad que puedo construir en frontend, backend y datos.</p>
                </div>

                <div className="skills-showcase">
                    <aside className="skills-summary">
                        <span className="summary-number">10</span>
                        <p>Tecnologias principales para crear interfaces, servicios web y soluciones conectadas a datos.</p>
                        <div className="summary-tags">
                            {highlights.map((item) => <span key={item}>{item}</span>)}
                        </div>
                    </aside>

                    <div className="skills-tecnology">
                        {skillGroups.map((group) => (
                            <article className={`skill-group ${group.accent}`} key={group.title}>
                                <div className="skill-group-header">
                                    <span className="group-mark">{group.title.slice(0, 2)}</span>
                                    <div>
                                        <h2>{group.title}</h2>
                                        <p>{group.description}</p>
                                    </div>
                                </div>
                                <div className="skill-list">
                                    {group.skills.map((skill) => (
                                        <div className="skill-item" key={skill.name}>
                                            {skill.icon ? (
                                                <img src={skill.icon} alt={skill.name} width="24" height="24" loading="lazy" decoding="async" />
                                            ) : (
                                                <span className="skill-initials">{skill.name.slice(0, 2)}</span>
                                            )}
                                            <h3>{skill.name}</h3>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
