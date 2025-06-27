import React, { useState, useEffect } from 'react';
import pub1 from '../assets/pub1.png';
import pub2 from '../assets/pub2.png';
import clickmeGif from '../assets/clickme.gif';
import '../styles/Publications.css';

const publications = [
  {
    img: pub1,
    name: "SpringerPublication",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-53963-3_7",
  },
  {
    img: pub2,
    name: "AIRCC Publication",
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

  // Mobile layout - show all publications vertically
  if (isMobile) {
    return (
      <div className="publications-section-mobile">
        <div className="publications-mobile-header">
          <h2>MY PUBLICATIONS</h2>
        </div>
        <div className="publications-mobile-list">
          {publications.map((publication, index) => (
            <div key={index} className="publication-mobile-item">
              <img
                src={publication.img}
                alt={`publication-${index}`}
                className="publication-mobile-img"
              />
              <div className="publication-mobile-info">
                <div className="publication-mobile-name">
                  {publication.name}
                </div>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-mobile-link"
                >
                  <img
                    src={clickmeGif}
                    alt="Click me to open publication"
                    className="publication-mobile-gif"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop layout - keep original carousel
  return (
    <div className="carousel-box">
      {/* Add the rotated title structure */}
      <div className="publications-title-container">
        <div className="publications-title-small">Publications</div>
        <div className="publications-title-large">My</div>
      </div>
      
      <div className="publications-carousel-frame">
        <button
          className="publications-arrow left"
          onClick={prevSlide}
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
            <a
              href={publications[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-link"
            >
              <img
                src={clickmeGif}
                alt="Click me to open publication"
                className="clickme-gif"
              />
            </a>
          </div>
        </div>
        <button
          className="publications-arrow right"
          onClick={nextSlide}
          disabled={currentIndex === publications.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Publications;