// src/components/Projects.jsx
import React, { useState } from 'react';
import '../styles/Projects.css';
import robotLogo from '../assets/robot.png';
import lakehouseLogo from '../assets/lakehouse.svg';

const Projects = () => {
  const [expanded, setExpanded] = useState({
    robotics: false,
    lakehouse: false
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
        
        {/* Claims Lakehouse Project */}
        <div
          className={`project-block clickable-project ${expanded.lakehouse ? 'expanded' : ''}`}
          onClick={() => toggleExpand('lakehouse')}
          style={{ cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
        >
          <img src={lakehouseLogo} alt="Claims Lakehouse Logo" className="project-img project-logo-img" />
          <div className="project-header-row">
            <h3 className="project-title">Claims Lakehouse Analytics</h3>
            <span className="project-company">Data &amp; AI Engineering</span>
            <span className="project-date">2026</span>
          </div>
          {expanded.lakehouse && (
            <div className="project-details">
              <ul>
                <li>Health-insurance claims data platform: raw copy of every feed, record-level cleaning with quarantined rows and stated reasons, and a reconciliation check so no row silently vanishes.</li>
                <li>Spark and Delta Lake pipeline with streaming quality gates, dbt models, Great Expectations checks and an Airflow DAG.</li>
                <li>Terraform for AWS, Azure and Snowflake; CI with 23 checks on every pull request.</li>
                <li>Member and provider ids replaced by keyed tokens in analyst-ready tables. All data is synthetic.</li>
              </ul>
              <div className="project-gallery-section">
                <button
                  className="gallery-button"
                  onClick={(e) => handleLinkClick(e, 'https://nikshepkulli.github.io/claims-lakehouse/')}
                  style={{ background: 'linear-gradient(135deg, #0e7490 0%, #4f46e5 100%)', border: 'none', borderRadius: '8px', color: 'white', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '15px', width: '100%' }}
                >
                  View live dashboard
                </button>
                <button
                  className="gallery-button"
                  onClick={(e) => handleLinkClick(e, 'https://github.com/nikshepkulli/claims-lakehouse')}
                  style={{ background: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)', border: 'none', borderRadius: '8px', color: 'white', padding: '12px 24px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '15px', width: '100%' }}
                >
                  View code on GitHub
                </button>
              </div>
            </div>
          )}
        </div>

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