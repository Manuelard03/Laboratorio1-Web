import React from 'react';
import './LogoReplacements.css';

const LogoReplacements = ({ logos, customClass }) => {
  return (
    <div className={`logo-replacements ${customClass}`}>
      <span className="replacement-text">Sustituye a</span>
      {logos.map((logo, index) => (
        <div key={index} className="logo-item">
          <img src={logo.src} alt={logo.alt} className="logo-icon" />
          <span>{logo.alt}</span>
        </div>
      ))}
    </div>
  );
};

export default LogoReplacements;
