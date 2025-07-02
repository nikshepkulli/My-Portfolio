// src/components/TechnicalSkills.jsx
import React from 'react';
import '../styles/TechnicalSkills.css';

const skills = {
  'Programming Languages': ['Java', 'R', 'C', 'JavaScript', 'Python', 'C#'],
  'Big Data / Database': ['Hadoop', 'Cassandra', 'MongoDB', 'PostgreSQL'],
  'ML / AI Libraries and Tools': [
    'Keras', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'Pytest',
    'NLTK', 'SpaCy', 'Hugging Face', 'Seaborn', 'Matplotlib'
  ],
  'DevOps / Tools': ['Jira', 'Jenkins', 'Git', 'Docker', 'Kubernetes', 'Airflow'],
  'Operating Systems': ['Linux', 'Windows'],
  'Frameworks': ['Spring', 'Hibernate', 'Django'],
};

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
    Matplotlib: 'matplotlib',
  };

  // Custom icon mappings for tools without DevIcon support
  const customIcons = {
    'NLTK': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzMzNzNkYyIvPgo8dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OTFRLPC90ZXh0Pgo8L3N2Zz4K',
    'SpaCy': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzA5YTNkNSIvPgo8dGV4dCB4PSIxMiIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNwYUN5PC90ZXh0Pgo8L3N2Zz4K',
    'Hugging Face': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    'Seaborn': 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  };

  // Check custom icons first
  if (customIcons[tool]) {
    return customIcons[tool];
  }

  // If tool is in Devicon mapping
  if (mapping[tool]) {
    const icon = mapping[tool];
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
  }

  // Fallback to a generic icon
  return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
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
                      onError={(e) => { 
                        // Fallback to a generic code icon if the specific icon fails
                        e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
                      }}
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