// src/components/ClickMe.jsx
import React from 'react';
import clickMeGif from '../assets/clickme.gif';
import '../styles/ClickMe.css'; // Ensure you have the appropriate styles

const ClickMe = ({ onClick, className = '', size = 'medium' }) => {
  return (
    <div 
      className={`clickme-container ${size} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <img 
        src={clickMeGif} 
        alt="Click to show more" 
        className="clickme-gif"
      />
    </div>
  );
};

export default ClickMe;