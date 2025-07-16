import React, { useState } from "react";
import "../styles/Experience.css"; // Ensure path is correct

// Import company logos
import cernerLogo from '../assets/cerner.png';
import sixDLogo from '../assets/6D.png';
import probotsLogo from '../assets/probots.png';
import starteryouLogo from '../assets/starteryou.png';
import robotLogo from '../assets/robot.png';
import sacredheartLogo from '../assets/sacredheart.png';
import britishairwaysLogo from '../assets/britishairways.png';

const Experiences = [
  {
    key: 'starteryou',
    title: 'Senior Software Engineer',
    company: 'Starteryou Inc., New York, NY (Remote)',
    date: 'Jul 2024 – Present',
    logo: starteryouLogo,
    points: [
      "Lead the vision and strategy for an innovative platform connecting teenagers and college students with meaningful part-time job opportunities.",
      "Oversee development of robust software solutions using a modern tech stack: React with Vite, Bootstrap, Node.js, MongoDB, AWS (EC2), Docker, Kubernetes",
      "Implement secure communication protocols and manage SSL certificates.",
      "Utilize GitHub for source control and CI/CD processes.",
      "Design scalable, container-based infrastructure with plans for Kubernetes orchestration.",
      "Mentor emerging tech talent and foster a culture of innovation.",
      "Ensure user-centric platform development and continuous technological improvement.",
    ]
  },
  {
    key: 'professor',
    title: 'Adjunct Professor',
    company: 'Sacred Heart University, Fairfield, CT',
    date: 'Jan 2024 - Dec 2024',
    logo: sacredheartLogo,
    points: [
      "Specialize in instructing courses on Data Science Architecture, Big Data, Data Structures, MongoDB, and Text-Based Analysis.",
      "Employ interactive teaching methods to facilitate deep understanding and engagement.",
      "Integrate industry insights and continuously update course material.",
      "Provide real-world applications through industry expertise.",
    ]
  },
  {
    key: 'british_airways',
    title: 'Data Science Virtual Intern',
    company: 'British Airways, Fairfield, CT',
    date: 'May 2023 - May 2023',
    logo: britishairwaysLogo,
    points: [
      "Developed web scraping techniques using Beautiful Soup.",
      "Performed data analysis and visualization using Python libraries.",
      "Uncovered competitor strategies and market dynamics.",
      "Predicted customer buying behavior using ML (85% accuracy).",
      "Empowered marketing strategy and business optimization.",
    ]
  },
  {
    key: 'research_assistant',
    title: 'Research Assistant',
    company: 'Sacred Heart University, Fairfield, CT',
    date: 'Jan 2023 - May 2023',
    logo: sacredheartLogo,
    points: [
      "Achieved 95% accuracy in breast cancer prediction using linear regression.",
      "Sentiment analysis on tweets with 85% accuracy.",
      "LDA analysis on COVID-19 tweets.",
      "Designed Vinyl Rack for IDEA Lab (30% capacity increase).",
      "Demonstrated strong data-driven and analytical skills.",
    ]
  },
  {
    key: 'cerner',
    title: 'Software Engineer II',
    company: 'Oracle Cerner, Bengaluru, India',
    date: 'Dec 2019 – Aug 2022',
    logo: cernerLogo,
    points: [
      "Improved features for Operations team (50% workload reduction).",
      "Revamped data framework with Olympus and Jetstream.",
      "Optimized script management and crash resolution.",
      "Worked on AI and ML-based life-saving leaf blower technology for Cerner.",
      "Wrote Call Home scripts using SQL, PL-SQL, T-SQL, VB Script, PowerShell.",
      "Improved Jetstream framework CSV reader and Call Home data collection.",
      "Created Java Native Interface using JavaScript & C++.",
      "Enhanced server identification scripts and crash gather dumps collection.",
    ]
  },
  {
    key: 'sixD',
    title: 'Software Engineer',
    company: '6D Technologies, Bengaluru, India',
    date: 'Aug 2019 – Dec 2019',
    logo: sixDLogo,
    points: [
      "Developed SMSC GUI and served as React UI & backend dev for Sony Ericsson's MAGIK.",
      "Achieved 40% system efficiency and 25% downtime reduction.",
      "Constructed tree structure React component using JSON & Reactstrap.",
      "Built Spring Boot services with CRUD for tree view.",
      "Implemented MSISDN report viewing using Java and JSP servlets.",
    ]
  },
  {
    key: 'probots',
    title: 'Probots Techno Solutions',
    company: 'Probots Techno Solutions',
    date: '2017 - 2018',
    logo: probotsLogo,
    points: [
      "Created native C/C++ API for dialysis unit control.",
      "Built Android GPS tracker app for Alpine Star.",
      "Bluetooth remote for video via RTMP/RTSP.",
      "Pet tracker app with Arduino, Maps API, JSON.",
      "Custom camera app with photo/QR & autofocus.",
      "Live video streaming via RTSP and RTMP.",
    ]
  }
];

const Experience = () => {
  const [expandedExperiences, setExpandedExperiences] = useState([]);

  const toggleExperienceExpand = (key) => {
    setExpandedExperiences((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="experience-section">
      {/* Rotated Title */}
      <h1 className="experience-title-large">My</h1>
      <h2 className="experience-title-small">Experience</h2>
      
      <div className="experience-content">
        {/* All 8 experiences displayed as experience cards */}
        <div className="experience-container">
          {Experiences.map((experience) => (
            <div 
              key={experience.key}
              className={`experience-block ${expandedExperiences.includes(experience.key) ? 'expanded' : ''}`}
              onClick={() => toggleExperienceExpand(experience.key)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}
            >
              <img src={experience.logo} alt={`${experience.title} Logo`} className="experience-img experience-logo-img" />
              <div className="experience-header-row">
                <div className="experience-info">
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-date">{experience.date}</p>
                </div>
              </div>
              {expandedExperiences.includes(experience.key) && (
                <ul className="experience-details">
                  {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;