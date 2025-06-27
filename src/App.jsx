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

  // Mobile detection - ONLY for screens 768px and below
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const mobile = width <= 768;
      setIsMobile(mobile);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

        {/* Publications and Certifications - CONDITIONAL LAYOUT */}
        {isMobile ? (
          // MOBILE ONLY: Stack vertically
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            margin: '0 auto 0.2rem auto'
          }}>
            <Publications />
            <Certifications />
          </div>
        ) : (
          // DESKTOP: Keep your EXACT original layout
          <div style={{
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto 0.2rem auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            gap: '10rem',
          }}>
            <Publications />
            <Certifications />
          </div>
        )}

        {/* FIXED: Changed marginTop from '10rem' to '2rem' */}
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