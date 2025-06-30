import React, { useState, useEffect } from "react";
import "../styles/Achievements.css";
import ClickMe from "../components/ClickMe";
import achievementsPDF from "../assets/Achievements.pdf";

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleView = () => setIsOpen(!isOpen);

  const handleOpenPDF = () => {
    window.open(achievementsPDF, '_blank');
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = achievementsPDF;
    link.download = 'Achievements.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <>
            {/* Desktop view - show iframe */}
            {!isMobile && (
              <iframe
                src={achievementsPDF}
                className="achievements-pdf"
                width="100%"
                height="500px"
                title="Achievements PDF"
              />
            )}

            {/* Mobile view - show buttons */}
            {isMobile && (
              <div className="mobile-pdf-options">
                <button 
                  className="pdf-option-btn open-btn"
                  onClick={handleOpenPDF}
                >
                  📄 OPEN ACHIEVEMENTS PDF
                </button>
                <button 
                  className="pdf-option-btn download-btn"
                  onClick={handleDownloadPDF}
                >
                  ⬇️ DOWNLOAD PDF
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Achievements;