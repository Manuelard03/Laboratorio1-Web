import React from 'react';
import './Logo.css';

const Logo = ({ src, alt }) => {
  return (
    <div className="logo">
      <img src={src} alt={alt} className="logo-image" />
    </div>
  );
};

export default Logo;