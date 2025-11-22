import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "De La Salle University - Manila",
      degree: "BS in Computer Science Major in Software Technology",
      period: "2023 - 2027",
      details: "Specialized in Software Development and Machine Learning with experience in AR development."
    },
    {
      institution: "San Beda College - Alabang",
      degree: "STEM-IT for TechVox",
      period: "2017 - 2023",
      details: "Graduated with experience in web development, technical directing, and sound designing."
    },
    {
      institution: "Creotec Philippines Inc.",
      degree: "Developer Team",
      period: "2022 - 2023",
      details: "Accomplished OJT for Mobile App Development."
    },
  ];

  return (
    <div className="education-section">
      <h2>Education & Certifications</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-header">
              <h3>{edu.institution}</h3>
              <span className="edu-period">{edu.period}</span>
            </div>
            <div className="edu-body">
              <p className="edu-degree">{edu.degree}</p>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;