import React from 'react';
import Nav from './components/Nav/Nav'
import Inicio from './components/Inicio/Inicio'
import About from './components/Sobre mi/About';
import Proyectos from './components/Proyectos/Proyectos'
import Skills from './components/Skills/Skills'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import './App.css'
function App() {
  return (
    <>
      <div className="conta">
        <Nav />
        <Inicio />
        <About />
        <Proyectos />
        <Skills />
        <Contacto />
        <Footer />
      </div>
    </>
  )
}

export default App
