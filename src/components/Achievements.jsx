import React, { useState } from "react";
import "../styles/Achievements.css";
import ClickMe from "../components/ClickMe"; // Add this import
import achievementsPDF from "../assets/Achievements.pdf";

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleView = () => setIsOpen(!isOpen);

  return (
    <div className="center-wrapper">
      <div className="achievements-container">
        {/* Title with ClickMe GIF beside it */}
        {!isOpen && (
          <div className="achievements-header">
            <h2 className="achievements-title">Achievements</h2>
            <ClickMe 
              onClick={toggleView}
              size="small"
              width="30px"
              height="30px"
            />
          </div>
        )}
        
        {/* Show title with close option when PDF is open */}
        {isOpen && (
          <div className="achievements-header">
            <h2 className="achievements-title">Achievements</h2>
            <div className="achievements-close" onClick={toggleView}>
              <span>✕</span>
            </div>
          </div>
        )}
        
        {isOpen && (
          <iframe
            src={achievementsPDF}
            className="achievements-pdf"
            width="100%"
            height="500px"
            title="Achievements PDF"
          />
        )}
      </div>
    </div>
  );
};

export default Achievements;