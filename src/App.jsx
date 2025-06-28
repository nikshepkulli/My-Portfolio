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
import ClickMe from './components/ClickMe';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Inline styles for responsive layout
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

  // Override styles for desktop side-by-side
  const componentOverrideStyle = isMobile ? {} : {
    transform: 'scale(0.85)', // Scale down components to fit side by side
    transformOrigin: 'center',
  };

  return (
    <div className="container">
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        color: 'black'
      }}>
        {/* Stack Hero and About vertically */}
        <Hero />
        <About />

        {/* Publications and Certifications - Responsive Layout */}
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