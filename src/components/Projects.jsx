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
            <ul className="project-details">
              <li>Designed and built a hexapod robot with advanced locomotion capabilities.</li>
              <li>Implemented servo motor control systems for multi-directional movement.</li>
              <li>Programmed inverse kinematics algorithms for smooth gait patterns.</li>
              <li>Integrated sensor feedback systems for obstacle detection and avoidance.</li>
              <li>View project documentation and videos: <a href="https://photos.google.com/share/hexapod-robot" target="_blank" rel="noopener noreferrer">https://photos.google.com/share/hexapod-robot</a></li>
            </ul>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;