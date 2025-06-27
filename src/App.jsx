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
      <div style={{
        minHeight: '100vh',
        padding: '2rem',
        color: 'black'
      }}>
        {/* Stack Hero and About vertically */}
        <Hero />
        <About />

        {/* Publications and Certifications - ALWAYS STACKED VERTICALLY */}
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto 0.2rem auto',
          display: 'flex',
          flexDirection: 'column', // ALWAYS VERTICAL
          alignItems: 'center',
          gap: '2rem',
        }}>
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