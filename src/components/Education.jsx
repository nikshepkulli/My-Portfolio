// src/components/Education.jsx
import React from "react";
import "../styles/Education.css"; // Make sure this path is correct

const EducationList = [
  {
    degree: "Master of Science in Data Science",
    institution: "Sacred Heart University, Fairfield, CT",
    date: "Aug 2022 – Dec 2023",
    highlights: ["GPA: 3.9/4.0"],
  },
  {
    degree: "Bachelor of Engineering in Electrical & Electronics Engineering",
    institution: "M. S. Ramaiah University, Bengaluru, India",
    date: "Jun 2014 – Jul 2018",
    highlights: ["GPA: 3.5/4.0"],
  },
  {
    degree: "Diploma in Electrical & Electronics Engineering",
    institution: "P. V. P Polytechnic, Bengaluru, India",
    date: "Apr 2011 – May 2014",
    highlights: ["GPA: 3.8/4.0"],
  },
];

const Education = () => {
  return (
    <section className="education-section">
      {/* Rotated Title */}
      <div className="education-title-container">
        <div className="education-title-large">My</div>
        <div className="education-title-small">Education</div>
      </div>
      
      <div className="education-content">
        {EducationList.map((edu, idx) => (
          <div className="education-entry" key={idx}>
            <h3 className="degree">{edu.degree}</h3>
            <h4 className="institution">{edu.institution}</h4>
            <p className="date">{edu.date}</p>
            {edu.highlights.length > 0 && (
              <div className="highlight-text">
                {edu.highlights.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;