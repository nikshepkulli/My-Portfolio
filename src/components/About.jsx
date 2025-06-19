// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "Currently working as a Senior Software Engineer at Starteryou Inc., leading the vision and strategy for a platform that connects teenagers and college students with meaningful part-time job opportunities. Oversee software development, ensuring alignment between the tech stack and business objectives. Drive continuous improvement in product offerings with a focus on scalability, performance, and security. Our tech ecosystem includes: React, Vite, Node.js, MongoDB, AWS (EC2, Docker), Secure HTTPS architecture. Previously served as a Research Assistant at Sacred Heart University, where I contributed to a 50% reduction in laboratory accidents through innovative solutions. Worked on data-driven projects using Python, R, and SQL, including: Breast cancer prediction, Sentiment analysis, COVID-19 tweet modeling. Achieved high accuracy and meaningful outcomes in all research projects."
  ];

  return (
    <section className="about">
      <div className="about-content">
        <h2>
          <div className="about-large">About</div>
          <div className="me-small">Me</div>
        </h2>
        
        {paragraph.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default About;