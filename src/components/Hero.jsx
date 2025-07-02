// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
// Fix the profile image import path
import ProfileImage from '../assets/Profile.jpg.png';

const Hero = () => {
  const [showPdfDropdown, setShowPdfDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleResumeClick = () => {
    setShowPdfDropdown(!showPdfDropdown);
  };

  const closePdfDropdown = () => {
    setShowPdfDropdown(false);
  };

  const handleOpenPDF = () => {
    window.open('./assets/resume/nikshep-resume.pdf', '_blank');
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = './assets/resume/nikshep-resume.pdf';
    link.download = 'Nikshep_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Glad you're here,</h1>
          <h2>I'm Nikshep A Kulli</h2>
          <p>Full-Stack Developer | DevOps-Focused Full-Stack Engineer</p>
                   
          <div className="slogan">
            <div className="slogan-box">
              <div className="title-container">
                <span className="title-large">Job</span>
                <span className="title-small">Position</span>
              </div>
              <div className="job-title">
                <div>Senior</div>
                <div>Software</div>
                <div>Engineer</div>
              </div>
            </div>
                       
            <div className="slogan-box">
              <div className="title-container">
                <span className="title-large">My</span>
                <span className="title-small">Slogan</span>
              </div>
              <div className="tagline">
                <div>If things</div>
                <div>are working</div>
                <div>well,</div>
                <div>don't disturb!</div>
              </div>
            </div>
          </div>

          <div className="contact-sections">
            <div className="linktree-section">
              <h3>Get In Touch</h3>
              <a href="https://linktr.ee/kullitech" target="_blank" rel="noopener noreferrer">
                ⚪ Visit My Linktree
              </a>
            </div>
                       
            <div className="resume-section">
              <h3>My Resume</h3>
              <button onClick={handleResumeClick} className="resume-link">
                📄 Resume
              </button>
            </div>
          </div>
        </div>
               
        {/* Fixed profile image container */}
        <div className="hero-image-container">
          <img 
            src={ProfileImage} 
            alt="Nikshep A Kulli - Professional Portrait" 
            className="profile-image"
            onError={(e) => {
              console.log('Profile image failed to load:', e.target.src);
              // Fallback to a placeholder or hide the image
              e.target.style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* PDF Dropdown Modal */}
      {showPdfDropdown && (
        <div className="pdf-dropdown-overlay" onClick={closePdfDropdown}>
          <div className="pdf-dropdown-content" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-dropdown-header">
              <h2>My Resume</h2>
              <div className="pdf-dropdown-controls">
                <button onClick={closePdfDropdown} className="pdf-close-btn">
                  ✕
                </button>
              </div>
            </div>
            
            <div className="pdf-dropdown-viewer">
              {!isMobile ? (
                <iframe
                  src="./assets/resume/nikshep-resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  width="100%"
                  height="100%"
                  title="Resume PDF"
                  frameBorder="0"
                >
                  <p>
                    Your browser does not support PDFs. 
                    <a href="./assets/resume/nikshep-resume.pdf" target="_blank">
                      Download the PDF
                    </a>
                  </p>
                </iframe>
              ) : (
                <div className="mobile-resume-options">
                  <button 
                    className="resume-option-btn open-btn"
                    onClick={handleOpenPDF}
                  >
                    📄 OPEN RESUME PDF
                  </button>
                  <button 
                    className="resume-option-btn download-btn"
                    onClick={handleDownloadPDF}
                  >
                    ⬇️ DOWNLOAD PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;