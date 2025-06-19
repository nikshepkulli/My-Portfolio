import React, { useState } from 'react';
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