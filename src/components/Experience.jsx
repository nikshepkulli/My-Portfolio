import React, { useState } from "react";
import "../styles/Experience.css"; // Ensure path is correct
// Removed FaChevronDown, FaChevronUp imports since we're not using arrows anymore
// Remove this import: import clickMeGif from "../assets/clickme.gif";

const Experiences = [
  {
    title: "Senior Software Engineer",
    company: "Starteryou Inc., New York, NY (Remote)",
    date: "Jul 2024 – Present",
    points: [
      "1. Lead the vision and strategy for an innovative platform connecting teenagers and college students with meaningful part-time job opportunities.",
      "2. Oversee development of robust software solutions using a modern tech stack:",
      "   Front-end: React with Vite, Bootstrap",
      "   Back-end: Node.js",
      "   Database: MongoDB",
      "   Infrastructure: AWS (EC2), Docker, Kubernetes",
      "3. Implement secure communication protocols and manage SSL certificates.",
      "4. Utilize GitHub for source control and CI/CD processes.",
      "5. Design scalable, container-based infrastructure with plans for Kubernetes orchestration.",
      "6. Mentor emerging tech talent and foster a culture of innovation.",
      "7. Ensure user-centric platform development and continuous technological improvement.",
    ],
  },
  {
    title: "Adjunct Professor",
    company: "Sacred Heart University, Fairfield, CT",
    date: "Jan 2024 - Dec 2024",
    points: [
      "1. Specialize in instructing courses on Data Science Architecture, Big Data, Data Structures, MongoDB, and Text-Based Analysis.",
      "2. Employ interactive teaching methods to facilitate deep understanding and engagement.",
      "3. Integrate industry insights and continuously update course material.",
      "4. Provide real-world applications through industry expertise.",
    ],
  },
  {
    title: "Data Science Virtual Intern",
    company: "British Airways, Fairfield, CT",
    date: "May 2023 - May 2023",
    points: [
      "1. Developed web scraping techniques using Beautiful Soup.",
      "2. Performed data analysis and visualization using Python libraries.",
      "3. Uncovered competitor strategies and market dynamics.",
      "4. Predicted customer buying behavior using ML (85% accuracy).",
      "5. Empowered marketing strategy and business optimization.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Sacred Heart University, Fairfield, CT",
    date: "Jan 2023 - May 2023",
    points: [
      "1. Achieved 95% accuracy in breast cancer prediction using linear regression.",
      "2. Sentiment analysis on tweets with 85% accuracy.",
      "3. LDA analysis on COVID-19 tweets.",
      "4. Designed Vinyl Rack for IDEA Lab (30% capacity increase).",
      "5. Demonstrated strong data-driven and analytical skills.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Oracle Cerner, Bengaluru, India",
    date: "Dec 2019 – Aug 2022",
    points: [
      "1. Improved features for Operations team (50% workload reduction).",
      "2. Revamped data framework with Olympus and Jetstream.",
      "3. Optimized script management and crash resolution.",
    ],
  },
  {
    title: "Software Engineer",
    company: "6D Technologies, Bengaluru, India",
    date: "Aug 2019 – Dec 2019",
    points: [
      "1. Developed SMSC GUI and served as React UI & backend dev for Sony Ericsson's MAGIK.",
      "   Achieved 40% system efficiency and 25% downtime reduction.",
    ],
  },
];

const Experience = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="experience-section">
      {/* Rotated Title */}
      <h1 className="experience-title-large">My</h1>
      <h2 className="experience-title-small">Experience</h2>
      
      <div className="experience-content">
        {Experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`experience-card clickable-experience-card ${expandedIndexes.includes(index) ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <div className="experience-header">
              <div className="title-with-icon">
                <h3 className="title-text">{exp.title}</h3>
                {/* Removed the expand-icon span and chevron icons */}
              </div>
              <p>{exp.date}</p>
            </div>
            
            {expandedIndexes.includes(index) && (
              <div className="experience-details">
                <h4>{exp.company}</h4>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;