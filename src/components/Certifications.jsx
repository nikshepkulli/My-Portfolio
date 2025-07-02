import React, { useState, useEffect } from 'react';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.jpg';
// Remove this import: import clickmeGif from '../assets/clickme.gif';
import '../styles/Certifications.css';

const certifications = [
  {
    img: cert1,
    name: "MongoDBCertificate",
    link: "https://github.com/nikshepkulli/niku/tree/master/MongoDB%20Certificates",
  },
  {
    img: cert2,
    name: "ForageCertificate",
    link: "https://github.com/nikshepkulli/niku/tree/master/Forage%20Certificate",
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection - fixed to match App.jsx
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < certifications.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle certification click
  const handleCertificationClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // Mobile layout - show all certifications vertically
  if (isMobile) {
    return (
      <div className="certifications-section-mobile">
        <div className="certifications-mobile-header">
          <h2>
            <div className="certifications-mobile-title-large">My</div>
            <div className="certifications-mobile-title-small">Certifications</div>
          </h2>
        </div>
        <div className="certifications-mobile-list">
          {certifications.map((certification, index) => (
            <div 
              key={index} 
              className="certification-mobile-item clickable-section"
              onClick={() => handleCertificationClick(certification.link)}
            >
              <img
                src={certification.img}
                alt={`certification-${index}`}
                className="certification-mobile-img"
              />
              <div className="certification-mobile-info">
                <div className="certification-mobile-name">
                  {certification.name}
                </div>
                {/* Removed the hand icon link */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop layout - keep original carousel
  return (
    <div 
      className="carousel-box clickable-section"
      onClick={() => handleCertificationClick(certifications[currentIndex].link)}
    >
      {/* Add the rotated title structure */}
      <div className="certifications-title-container">
        <div className="certifications-title-small">Certifications</div>
        <div className="certifications-title-large">My</div>
      </div>
      
      <div className="certifications-carousel-frame">
        <button
          className="certifications-arrow left"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <div className="carousel-content">
          <img
            src={certifications[currentIndex].img}
            alt="certification"
            className="carousel-img"
          />
          <div className="certification-name-container">
            <div className="carousel-name">
              {certifications[currentIndex].name}
            </div>
            {/* Removed the hand icon link */}
          </div>
        </div>
        <button
          className="certifications-arrow right"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          disabled={currentIndex === certifications.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Certifications;