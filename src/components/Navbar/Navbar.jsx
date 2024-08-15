import React, { useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="\src\assets\img\logo-notion.webp" alt="Notion Logo" />
          <h2 className='Webname'>Notion</h2>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#product">Producto <i className="fas fa-chevron-down"></i></a>
          <a href="#download">Descargar <i className="fas fa-chevron-down"></i></a>
          <a href="#solutions">Soluciones <i className="fas fa-chevron-down"></i></a>
          <a href="#resources">Recursos <i className="fas fa-chevron-down"></i></a>
          <a href="#prices">Precios</a>
        </div>

        <div className="navbar-cta">
          <Button text="Inicia sesión" type="btn-outline" />
          <Button text="Obtén Notion gratis" type="primary" />
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
