// src/components/Projects.jsx
import React, { useState } from 'react';
import '../styles/Projects.css';
import prj1 from '../assets/prj1.webp';
import prj2 from '../assets/prj2.webp';
import prj3 from '../assets/prj3.webp';

// Import company logos
import cernerLogo from '../assets/cerner.png';
import sixDLogo from '../assets/6D.png';
import probotsLogo from '../assets/probots.png';
import starteryouLogo from '../assets/starteryou.png';

const Projects = () => {
  const [expanded, setExpanded] = useState({
    cerner: false,
    sixD: false,
    probots: false,
    starteryou: false
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
        
        {/* Cerner Corporation */}
        <div 
          className={`project-block clickable-project ${expanded.cerner ? 'expanded' : ''}`}
          onClick={() => toggleExpand('cerner')}
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
          <img src={cernerLogo} alt="Cerner Logo" className="project-img project-logo-img" />
          <div className="project-header-row">
            <h3 className="project-title">Cerner Corporation</h3>
          </div>
          {expanded.cerner && (
            <ul className="project-details">
              <li>Worked on AI and ML-based life-saving leaf blower technology for Cerner.</li>
              <li>Wrote Call Home scripts using SQL, PL-SQL, T-SQL, VB Script, PowerShell.</li>
              <li>Improved Jetstream framework CSV reader and Call Home data collection.</li>
              <li>Created Java Native Interface using JavaScript & C++.</li>
              <li>Enhanced server identification scripts and crash gather dumps collection.</li>
              <li>Eliminated sensitive password display in Millennium domain.</li>
              <li>Streamlined Workflow Analyzer using CorrelationID and timers.</li>
              <li>Designed CallHome UI portal using Django and Python.</li>
              <li>JavaScript for datastore creation in Olympus UI.</li>
            </ul>
          )}
        </div>

        {/* 6D Technology */}
        <div 
          className={`project-block clickable-project ${expanded.sixD ? 'expanded' : ''}`}
          onClick={() => toggleExpand('sixD')}
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
          <img src={sixDLogo} alt="6D Technology Logo" className="project-img project-logo-img" />
          <div className="project-header-row">
            <h3 className="project-title">6D Technology</h3>
          </div>
          {expanded.sixD && (
            <ul className="project-details">
              <li>Constructed tree structure React component using JSON & Reactstrap.</li>
              <li>Built Spring Boot services with CRUD for tree view.</li>
              <li>Implemented MSISDN report viewing using Java and JSP servlets.</li>
            </ul>
          )}
        </div>

        {/* Probots Techno Solutions */}
        <div 
          className={`project-block clickable-project ${expanded.probots ? 'expanded' : ''}`}
          onClick={() => toggleExpand('probots')}
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
          <img src={probotsLogo} alt="Probots Logo" className="project-img project-logo-img" />
          <div className="project-header-row">
            <h3 className="project-title">Probots Techno Solutions</h3>
          </div>
          {expanded.probots && (
            <ul className="project-details">
              <li>Created native C/C++ API for dialysis unit control.</li>
              <li>Built Android GPS tracker app for Alpine Star.</li>
              <li>Bluetooth remote for video via RTMP/RTSP.</li>
              <li>Pet tracker app with Arduino, Maps API, JSON.</li>
              <li>Custom camera app with photo/QR & autofocus.</li>
              <li>Live video streaming via RTSP and RTMP.</li>
            </ul>
          )}
        </div>

        {/* Starteryou Inc */}
        <div 
          className={`project-block clickable-project ${expanded.starteryou ? 'expanded' : ''}`}
          onClick={() => toggleExpand('starteryou')}
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
          <img src={starteryouLogo} alt="Starteryou Logo" className="project-img project-logo-img" />
          <div className="project-header-row">
            <h3 className="project-title">Starteryou Inc</h3>
          </div>
          {expanded.starteryou && (
            <ul className="project-details">
              <li>Co-founded and led platform connecting teenagers and college students with part-time job opportunities.</li>
              <li>Developed and managed scalable multi-environment infrastructure for development and production needs.</li>
              <li>Implemented HTTPS encryption using Let's Encrypt, enabling secure communication across the platform.</li>
              <li>Enhanced database access control by enabling IP whitelisting on MongoDB server to restrict unauthorized access.</li>
              <li>Designed and developed caching and cookie management mechanisms integrated with metadata-driven framework.</li>
            </ul>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;