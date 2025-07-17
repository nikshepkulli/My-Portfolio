// src/components/Projects.jsx
import React, { useState } from 'react';
import '../styles/Projects.css';
import robotLogo from '../assets/robot.png';

const Projects = () => {
  const [expanded, setExpanded] = useState({
    robotics: false
  });

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle external link clicks to prevent event bubbling
  const handleLinkClick = (e, url) => {
    e.stopPropagation(); // Prevent the card from toggling when button is clicked
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects">
      <div className="projects-title-container">
        <div className="title-vertical">
          <span className="title-my">My</span>
          <span className="title-projects">Projects</span>
        </div>
      </div>
      <div className="projects-container">
        
        {/* Robotics Project */}
        <div 
          className={`project-block clickable-project ${expanded.robotics ? 'expanded' : ''}`}
          onClick={() => toggleExpand('robotics')}
          style={{
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
          }}
        >
          <img src={robotLogo} alt="Robotics Logo" className="project-img project-logo-img" />
          <div className="project-header-row">
            <h3 className="project-title">Robotics</h3>
            <span className="project-company">Personal Project</span>
            <span className="project-date">2018 - 2019</span>
          </div>
          {expanded.robotics && (
            <div className="project-details">
              <ul>
                <li>Designed and built a hexapod robot with advanced locomotion capabilities.</li>
                <li>Implemented servo motor control systems for multi-directional movement.</li>
                <li>Programmed inverse kinematics algorithms for smooth gait patterns.</li>
                <li>Integrated sensor feedback systems for obstacle detection and avoidance.</li>
              </ul>
              
              {/* Gallery Button */}
              <div className="project-gallery-section">
                <button 
                  className="gallery-button"
                  onClick={(e) => handleLinkClick(e, 'https://photos.app.goo.gl/QdTQ17xtBoWvkacp9')}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    marginTop: '15px',
                    width: '100%',
                    maxWidth: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  <span>📸</span>
                  <span>View Gallery</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;