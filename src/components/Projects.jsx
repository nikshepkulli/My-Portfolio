// src/components/Projects.jsx
import React, { useState } from 'react';
import '../styles/Projects.css';
import prj1 from '../assets/prj1.webp';
import prj2 from '../assets/prj2.webp';
import prj3 from '../assets/prj3.webp';
import clickmeGif from '../assets/clickme.gif'; // Update this path if needed

const Projects = () => {
  const [expanded, setExpanded] = useState({
    cerner: false,
    sixD: false,
    probots: false
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
        <div className="project-block">
          <img src={prj1} alt="Cerner Project" className="project-img" />
          <div className="project-header-row">
            <h3 className="project-title">Cerner Corporation</h3>
            <img
              src={clickmeGif}
              alt="Toggle details"
              className="gif-toggle"
              onClick={() => toggleExpand('cerner')}
            />
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
        <div className="project-block">
          <img src={prj2} alt="6D Project" className="project-img" />
          <div className="project-header-row">
            <h3 className="project-title">6D Technology</h3>
            <img
              src={clickmeGif}
              alt="Toggle details"
              className="gif-toggle"
              onClick={() => toggleExpand('sixD')}
            />
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
        <div className="project-block">
          <img src={prj3} alt="Probots Project" className="project-img" />
          <div className="project-header-row">
            <h3 className="project-title">Probots Techno Solutions</h3>
            <img
              src={clickmeGif}
              alt="Toggle details"
              className="gif-toggle"
              onClick={() => toggleExpand('probots')}
            />
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

      </div>
    </section>
  );
};

export default Projects;