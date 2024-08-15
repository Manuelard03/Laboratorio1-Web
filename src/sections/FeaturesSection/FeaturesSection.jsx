import React from 'react';
import './FeaturesSection.css';
import Label from '../../components/Label/Label';
import InfoCard from '../../components/InfoCard/InfoCard';

const FeaturesSection = ({ cardsData, label, mainTitle, description, linkText, linkHref }) => {
  return (
    <div className="features-section">
      <div className="features-content">
        <Label text={label} />
        <h1>{mainTitle}</h1>
        <p>{description}</p>
        <a href={linkHref} className="features-link">{linkText}</a>
      </div>
      <div className="info-cards">
        {cardsData.map((card, index) => (
          <InfoCard key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
