import React, { useState } from 'react';
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