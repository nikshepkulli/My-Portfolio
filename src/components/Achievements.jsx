import React, { useState, useEffect } from "react";
import "../styles/Achievements.css";
// Removed ClickMe import since we're not using the icon anymore
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
      <div 
        className="achievements-container clickable-achievements"
        onClick={toggleView}
        style={{
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
        }}
      >
        {/* Title - clickable when PDF is not open */}
        {!isOpen && (
          <div className="achievements-header">
            <h2 className="achievements-title">Achievements</h2>
            <p
              className="achievement-highlight"
              style={{ margin: "10px 0 0", fontSize: "0.95rem", lineHeight: 1.55, opacity: 0.9 }}
            >
              <strong>Adjunct Professor</strong> — Sacred Heart University (2024): taught MongoDB,
              Data Architecture, C++/Data Structures &amp; NLP.
            </p>
          </div>
        )}

        {/* Show title when PDF is open */}
        {isOpen && (
          <div className="achievements-header">
            <h2 className="achievements-title">Achievements</h2>
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