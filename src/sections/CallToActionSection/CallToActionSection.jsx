import React from 'react';
import './CallToActionSection.css';
import Button from '../../components/Button/Button';

const CallToActionSection = () => {
  return (
    <section className="CTA-section">
      <div className="CTA-content">
        <h1>Empieza hoy mismo, gratis.</h1>
        <p>Primero prueba todas las funciones. Más adelante podrás suscribirte y agregar a tu equipo.</p>
        
        <div className="intro-buttons">
        <Button text="Obtén Notion gratis" type="tertiary" />
        <Button text="Solicita una demo" type="four" />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;