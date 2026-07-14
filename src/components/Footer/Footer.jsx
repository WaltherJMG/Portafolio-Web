import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [classOption, setClassOption] = useState('inicio');

    const handleSection = (seccion) => {
        setClassOption(seccion);
        document.getElementById(seccion)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer>
            <div className="footer-contain">
                <hr />
                <div className="footer-info">
                    <p>Copyright 2026 Walther Matute. Todos los derechos reservados.</p>
                    <ul>
                        <li><button className={classOption === 'about' ? 'active' : ''} onClick={() => handleSection('about')}>Sobre mi</button></li>
                        <li><button className={classOption === 'proyectos' ? 'active' : ''} onClick={() => handleSection('proyectos')}>Proyectos</button></li>
                        <li><button className={classOption === 'habilidades' ? 'active' : ''} onClick={() => handleSection('habilidades')}>Habilidades</button></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
