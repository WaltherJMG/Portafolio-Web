import React, { useEffect, useRef, useState } from 'react';
import logoNav from '../../assets/logo-nav.webp';
import Bar from '../../assets/menu.svg';
import Close from '../../assets/close.svg';
import './Nav.css';

const Nav = () => {
	const [classOption, setClassOption] = useState('inicio');
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const scrolledRef = useRef(false);

	useEffect(() => {
		let frameId = 0;
		const handleScroll = () => {
			if (frameId) return;

			frameId = window.requestAnimationFrame(() => {
				const nextScrolled = window.scrollY > 24;

				if (scrolledRef.current !== nextScrolled) {
					scrolledRef.current = nextScrolled;
					setIsScrolled(nextScrolled);
				}

				frameId = 0;
			});
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (frameId) window.cancelAnimationFrame(frameId);
		};
	}, []);

	const handleSection = (seccion) => {
		setClassOption(seccion);
		document.getElementById(seccion)?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	return (
		<nav className={isScrolled ? 'nav-scrolled' : ''}>
			<div className="nav-max-contain">
				<div className="nav-img">
					<img src={logoNav} alt="Walther Matute" />
				</div>
				<ul className={`menu ${menuOpen ? 'open' : 'cerrar'}`}>
					<button className="close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menu">
						<img src={Close} alt="" />
					</button>
					<li><button className={classOption === 'inicio' ? 'active' : ''} onClick={() => handleSection('inicio')}>Inicio</button></li>
					<li><button className={classOption === 'about' ? 'active' : ''} onClick={() => handleSection('about')}>Sobre mi</button></li>
					<li><button className={classOption === 'proyectos' ? 'active' : ''} onClick={() => handleSection('proyectos')}>Proyectos</button></li>
					<li><button className={classOption === 'habilidades' ? 'active' : ''} onClick={() => handleSection('habilidades')}>Habilidades</button></li>
					<li><button className={classOption === 'contacto' ? 'active' : ''} onClick={() => handleSection('contacto')}>Contacto</button></li>
				</ul>
				<button className="bar" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
					<img src={Bar} alt="" />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
