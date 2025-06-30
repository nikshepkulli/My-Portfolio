import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Make these functions available globally - moved inside useEffect
  useEffect(() => {
    window.showResumePageFunction = () => {
      console.log('Showing resume page...');
      setShowResume(true);
    };
    
    window.hideResumePageFunction = () => {
      console.log('Hiding resume page...');
      setShowResume(false);
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      // Clean up global functions
      delete window.showResumePageFunction;
      delete window.hideResumePageFunction;
    };
  }, []);

  const containerStyle = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto 2rem auto',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'center',
    gap: isMobile ? '2rem' : '2rem',
  };

  // Show resume page
  if (showResume) {
    return <Resume />;
  }

  // Show main page
  return (
    <div className="container">
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        color: 'black'
      }}>
        <Hero />
        <About />
        
        <div style={containerStyle}>
          <Publications />
          <Certifications />
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <Education />
          <Experience />
          <Achievements />
          <TechnicalSkills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;