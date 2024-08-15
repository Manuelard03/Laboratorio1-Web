import React from 'react';
import './Button.css';

const Button = ({ text, onClick, type = 'primary', size = 'medium', disabled = false }) => {
  return (
    <button 
      className={`btn btn-${type} btn-${size}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
