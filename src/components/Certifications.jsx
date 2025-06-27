import React, { useState, useEffect } from 'react';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.jpg';
import clickmeGif from '../assets/clickme.gif';
import '../styles/Certifications.css';

const certifications = [
  {
    img: cert1,
    name: "MongoDB Certificate",
    link: "https://github.com/nikshepkulli/niku/tree/master/MongoDB%20Certificates",
  },
  {
    img: cert2,
    name: "Forage Certificate",
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

  // Mobile layout - show all certifications vertically
  if (isMobile) {
    return (
      <div className="certifications-section-mobile">
        <div className="certifications-mobile-header">
          <h2>MY CERTIFICATIONS</h2>
        </div>
        <div className="certifications-mobile-list">
          {certifications.map((certification, index) => (
            <div key={index} className="certification-mobile-item">
              <img
                src={certification.img}
                alt={`certification-${index}`}
                className="certification-mobile-img"
              />
              <div className="certification-mobile-info">
                <div className="certification-mobile-name">
                  {certification.name}
                </div>
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-mobile-link"
                >
                  <img
                    src={clickmeGif}
                    alt="Click me to open certification"
                    className="certification-mobile-gif"
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
    <div className="certifications-carousel-box">
      {/* Rotated Title */}
      <div className="certifications-title-container">
        <div className="certifications-title-large">My</div>
        <div className="certifications-title-small">Certifications</div>
      </div>
             
      <div className="certifications-carousel-frame">
        <button
          className="certifications-arrow left"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <div className="certifications-carousel-content">
          <img
            src={certifications[currentIndex].img}
            alt="certification"
            className="certifications-carousel-img"
          />
          <div className="certification-name-container">
            <div className="certifications-carousel-name">
              {certifications[currentIndex].name}
            </div>
            <a
              href={certifications[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="certifications-carousel-link"
            >
              <img
                src={clickmeGif}
                alt="Click me to open certification"
                className="clickme-gif"
              />
            </a>
          </div>
        </div>
        <button
          className="certifications-arrow right"
          onClick={nextSlide}
          disabled={currentIndex === certifications.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Certifications;