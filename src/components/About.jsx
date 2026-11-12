// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const yearsExp = new Date().getFullYear() - 2018; // career start; auto-updates
  const paragraph = [
    `I build AI and cloud systems that people actually use, and lead the teams that ship them. ${yearsExp}+ years across Java/Spring Boot microservices, React and Node.js, AWS and Azure, and production RAG/LLM systems.`,
    "As Co-founder & CTO of Starteryou I took a two-sided student–employer platform from zero to 15,000+ users and 342 employer partners: architecture, a 12-person team, CI/CD and Terraform on AWS and Azure, and a production RAG-based AI assistant. Most recently I was Head of Engineering at Organic Mandya, where I grew the team to 6, set up mobile CI/CD and led the Shopify-to-custom commerce migration strategy.",
    "Before that I spent nearly three years at Cerner (Oracle Health) building secure Spring Boot microservices and data pipelines in regulated healthcare, earning four innovation awards. I hold an M.S. in Computer Science (Data Science, GPA 3.9), have published NLP research, and taught graduate data architecture as an Adjunct Professor at Sacred Heart University.",
    "Open to AI Engineer, Forward Deployed Engineer, Lead Software Engineer and Engineering Manager roles in Bengaluru. Immediate joiner."
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

