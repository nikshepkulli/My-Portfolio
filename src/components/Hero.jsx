// src/components/Hero.jsx
import '../styles/Hero.css';
import ProfileImage from '../assets/Profile.jpg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hey there,</h1>
        <h2>I'm Nikshep A Kulli</h2>
        <p>Full-Stack Developer | DevOps-Focused Full-Stack Engineer</p>
        
        {/* Slogan content embedded here */}
        <div className="slogan">
          <div className="slogan-box">
            <div className="title-container">
              <span className="title-large">Job</span>
              <span className="title-small">Position</span>
            </div>
            <div className="job-title">
              <div>Senior</div>
              <div>Software</div>
              <div>Engineer</div>
            </div>
          </div>
          
          <div className="slogan-box">
            <div className="title-container">
              <span className="title-large">My</span>
              <span className="title-small">Slogan</span>
            </div>
            <div className="tagline">
              <div>If things</div>
              <div>are working</div>
              <div>well,</div>
              <div>don't disturb!</div>
            </div>
          </div>
        </div>
        
        {/* Linktree Block */}
        <div className="linktree">
          <h3>Get In Touch</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            🌐 Visit My Linktree
          </a>
        </div>
      </div>
      
      <img src={ProfileImage} alt="Nikshep A Kulli" className="profile-image" />
    </section>
  );
};

export default Hero;