import React from 'react';
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
  return (
     <div className="container">
      {/* All your components here */}

    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem', 
      color: 'black' 
    }}>
      {/* Stack Hero and About vertically */}
      <Hero />
      <About />

      {/* Flex container for Publications and Certifications only */}
      <div
        style={{
          width: '100%',
          maxWidth: '1400px', // Increased max-width
          margin: '0 auto 0.2rem auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'nowrap', // Prevent wrapping
          gap: '10rem',
        }}
      >
        <Publications />
        <Certifications />
      </div>

      {/* FIXED: Changed marginTop from '10rem' to '2rem' */}
      <div style={{ marginTop: '2rem' }}>
        <Education />
        <Experience/>
        <Achievements />
        <TechnicalSkills/>
        <Projects />
        <Contact />
      </div>
    </div>
    </div>
  );
}

export default App;