// src/components/TechnicalSkills.jsx
import React from 'react';
import '../styles/TechnicalSkills.css';

const skills = {
  'Programming Languages': ['Java', 'R', 'C', 'JavaScript', 'Python', 'C#'],
  'Big Data / Database': ['Hadoop', 'Cassandra', 'MongoDB', 'PostgreSQL'],
  'ML / AI Libraries and Tools': [
    'Keras', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'Pytest',
    'NLTK', 'SpaCy', 'Hugging Face', 'Seaborn'
  ],
  'DevOps / Tools': ['Jira', 'Jenkins', 'Git', 'Docker', 'Kubernetes', 'Airflow'],
  'Operating Systems': ['Linux', 'Windows'],
  'Frameworks': ['Spring', 'Hibernate', 'Django'],
};

const localImages = ['NLTK', 'SpaCy', 'Hugging Face', 'Seaborn', 'Django']; // tools with no devicon logo

const getIconPath = (tool) => {
  const mapping = {
    Java: 'java',
    R: 'r',
    C: 'c',
    'C#': 'csharp',
    Python: 'python',
    JavaScript: 'javascript',
    Hadoop: 'hadoop',
    Cassandra: 'cassandra',
    MongoDB: 'mongodb',
    PostgreSQL: 'postgresql',
    Keras: 'keras',
    Pandas: 'pandas',
    NumPy: 'numpy',
    'Scikit-learn': 'scikitlearn',
    Jupyter: 'jupyter',
    Docker: 'docker',
    Git: 'git',
    Jenkins: 'jenkins',
    Kubernetes: 'kubernetes',
    Linux: 'linux',
    Windows: 'windows8',
    Jira: 'jira',
    Airflow: 'apacheairflow',
    Spring: 'spring',
    Hibernate: 'hibernate',
    Pytest: 'pytest',
  };

  // If tool is in Devicon mapping
  if (mapping[tool]) {
    const icon = mapping[tool];
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
  }

  // If tool is listed in localImages
  if (localImages.includes(tool)) {
    const fileName = tool.toLowerCase().replace(/\s/g, '') + '.png'; // e.g. huggingface.png
    return `/icons/${fileName}`;
  }

  // Fallback
  return '';
};

const TechnicalSkills = () => {
  return (
    <section className="technical-skills">
      {/* Rotated Title */}
      <h1 className="technical-title-large">Technical</h1>
      <h2 className="technical-title-small">Skills</h2>
      
      <div className="skills-content">
        <div className="skills-grid">
          {Object.entries(skills).map(([category, tools]) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>
              <ul>
                {tools.map((tool) => (
                  <li key={tool}>
                    <img
                      src={getIconPath(tool)}
                      alt={tool}
                      className="skill-icon"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;