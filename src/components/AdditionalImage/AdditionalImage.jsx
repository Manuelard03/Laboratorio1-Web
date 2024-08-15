import React from 'react';
import './AdditionalImage.css';

const AdditionalImage = ({ src, alt }) => {
  return (
    <div className="additional-image-container">
      <img src={src} alt={alt} />
    </div>
  );
};

export default AdditionalImage;
