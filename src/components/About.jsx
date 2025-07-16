// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "🚀 Innovative Entrepreneur & Full-Stack Technologist with over 5 years of experience building solutions from concept to scale across hardware, software, and data science domains. Currently serving as Co-Founder & CTO of Starteryou Inc., where I architect and lead a platform connecting 100,000+ teenagers with meaningful employment opportunities across America.",
    "🔧 My unique strength lies in bridging the physical and digital worlds - from designing PCBs and building embedded systems like hexapod robots from scratch, to developing AI-powered platforms that serve real-world communities. I've successfully led cross-functional teams of 12+ developers, implemented enterprise-grade security infrastructure, and delivered scalable solutions that drive measurable business impact.",
    "🏆 At Cerner Corporation, I earned four innovation awards including recognition for AI-powered ventilator optimization and interactive gesture-based applications. My technical versatility spans the entire stack: Java, Python, C++, React, Node.js, AWS, MongoDB, Arduino, Raspberry Pi - enabling me to solve complex problems whether they require machine learning algorithms, embedded systems programming, or full-stack development.",
    "📚 Beyond technology, I'm a published researcher with articles in international conferences covering COVID-19 social media analysis and de-dollarization economics through NLP. As an Adjunct Professor at Sacred Heart University, I've earned outstanding teaching evaluations across multiple courses—consistently achieving 4.5-5.0/5.0 ratings with students praising my ability to make complex concepts accessible through real-world examples and hands-on learning. My courses in MongoDB, Advanced Database Design, Text-Based Analysis, Data Science Architecture, and Big Data Analytics have helped hundreds of students master cutting-edge technologies through interactive assignments and practical GitHub integration.",
    "🌱 My entrepreneurial vision centers on agricultural innovation - leveraging my combined expertise in data science, AI, electronics, and software engineering to create transformative solutions for farmers. I believe technology should solve real-world problems, and I'm passionate about applying my diverse skill set to revolutionize how we approach food production and rural technology adoption.",
    "💡 Whether building enterprise software, designing hardware systems, or developing AI models, I thrive on turning complex challenges into elegant solutions that drive meaningful impact. With carpentry skills that complement my technical expertise, I approach every project with both analytical precision and hands-on craftsmanship - truly capable of building anything from scratch."
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