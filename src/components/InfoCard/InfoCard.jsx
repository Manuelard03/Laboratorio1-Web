import React from 'react';
import './InfoCard.css';

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="info-card">
      <img src={icon} alt={title} className="info-card-icon" />
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
    </div>
  );
};

export default InfoCard;
