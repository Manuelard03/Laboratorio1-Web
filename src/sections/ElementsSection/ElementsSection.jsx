import React from 'react';
import './ElementsSection.css';
import InfoCard from '../../components/InfoCard/InfoCard';

const ElementsSection = ({ cardsData, label, mainTitle, description, linkText, linkHref }) => {
  return (
    <div className="elements-section">
      <div className="elements-content">
        <h1>{mainTitle}</h1>
      </div>
      <div className="info-cards">
        {cardsData.map((card, index) => (
          <InfoCard key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default ElementsSection;