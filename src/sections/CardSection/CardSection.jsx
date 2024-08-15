import React from 'react';
import Card from '../../components/Card/Card';
import './CardSection.css';
import { cardsData5, cardsData6} from '../../data/cardData';

const CardSection = () => {
  const sections = [
    { data: cardsData5 },
    { data: cardsData6 }
  ];

  return (
    <div className="card-section">
        <h2>Todo lo que necesitas <br />para trabajar <br />de forma eficaz</h2>
      {sections.map((section, index) => (
        <div key={index}>
          <div className="cards-container">
            {section.data.map((card, idx) => (
              <Card key={idx} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
