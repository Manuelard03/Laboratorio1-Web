import React from 'react';
import './IntroSection.css';
import Button from '../../components/Button/Button';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <h1>Organiza <br />tus <br />proyectos,<br />explora tu creatividad</h1>
        <p>Con ayuda de la IA.</p>
        
        <div className="intro-buttons">
        <Button text="Obtén Notion gratis" type="tertiary" />
        <Button text="Solicita una demo" type="four" />
        </div>

      </div>
      <div className="intro-image">
        <img src="\src\assets\img\hero-illo.webp" alt="illustration" />
      </div>
    </section>
  );
};

export default IntroSection;
