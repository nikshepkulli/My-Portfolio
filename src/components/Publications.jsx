import React, { useState, useEffect } from 'react';
import pub1 from '../assets/pub1.png';
import pub2 from '../assets/pub2.png';
// Remove this import: import clickmeGif from '../assets/clickme.gif';
import '../styles/Publications.css';

const publications = [
  {
    img: pub1,
    name: "SpringerPublication",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-53963-3_7",
  },
  {
    img: pub2,
    name: "AIRCCPublication",
    link: "https://aircconline.com/csit/papers/vol14/csit142214.pdf",
  },
];

const Publications = () => {
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
    if (currentIndex < publications.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle publication click
  const handlePublicationClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // Mobile layout - show all publications vertically
  if (isMobile) {
    return (
      <div className="publications-section-mobile">
        <div className="publications-mobile-header">
          <h2>
            <div className="publications-mobile-title-large">My</div>
            <div className="publications-mobile-title-small">Publications</div>
          </h2>
        </div>
        <div className="publications-mobile-list">
          {publications.map((publication, index) => (
            <div 
              key={index} 
              className="publication-mobile-item clickable-section"
              onClick={() => handlePublicationClick(publication.link)}
            >
              <img
                src={publication.img}
                alt={`publication-${index}`}
                className="publication-mobile-img"
              />
              <div className="publication-mobile-info">
                <div className="publication-mobile-name">
                  {publication.name}
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
      onClick={() => handlePublicationClick(publications[currentIndex].link)}
    >
      {/* Add the rotated title structure */}
      <div className="publications-title-container">
        <div className="publications-title-small">Publications</div>
        <div className="publications-title-large">My</div>
      </div>
      
      <div className="publications-carousel-frame">
        <button
          className="publications-arrow left"
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
            src={publications[currentIndex].img}
            alt="publication"
            className="carousel-img"
          />
          <div className="publication-name-container">
            <div className="carousel-name">
              {publications[currentIndex].name}
            </div>
            {/* Removed the hand icon link */}
          </div>
        </div>
        <button
          className="publications-arrow right"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          disabled={currentIndex === publications.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Publications;