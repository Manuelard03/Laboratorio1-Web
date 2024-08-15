import React from 'react';
import './Card.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} className="card-icon" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
