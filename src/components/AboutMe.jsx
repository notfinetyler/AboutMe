import React from 'react';
import myImage from '../assets/images/mee.png';

const AboutMe = () => {
  const proficiencies = [
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'fa-brands fa-js', color: '#3178C6' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
    { name: 'HTML / CSS', icon: 'fa-brands fa-html5', color: '#E34F26' },
    { name: 'Adobe Premiere Pro', icon: 'fa-solid fa-film', color: '#9999FF' },
    { name: 'FL Studio 21', icon: 'fa-solid fa-music', color: '#FF6B6B' }
  ];

  const learning = [
    { name: 'C / C++', icon: 'fa-solid fa-code', color: '#00599C' },
    { name: 'JUCE (C++ Framework)', icon: 'fa-solid fa-microchip', color: '#4A90E2' },
    { name: 'Java', icon: 'fa-brands fa-java', color: '#ED8B00' },
    { name: 'Flutter (Dart Framework)', icon: 'fa-brands fa-flutter', color: '#02569B' },
    { name: 'Jest / Playwright', icon: 'fa-solid fa-vial', color: '#C33D4F' },
    { name: 'Da Vinci Resolve', icon: 'fa-solid fa-palette', color: '#E74C3C' }
  ];

  return (
    <div className="about-section">
      <div className="profile-container">
        <div className="profile-image">
          <img src={myImage} alt='Tyrrelle Mendoza' className='profile-img'></img>
        </div>
        <div className="profile-info">
          <h1>Tyrrelle Mendoza</h1>
          <h2>UI/UX Designer</h2>
          <p>
            Programmer born music producer, content creator, video editor, and tarot reader.

          </p>
        </div>
      </div>
      
      <div className="skills-comparison">
        <div className="skills-column">
          <h3 className="skills-header">
            <i className="fa-solid fa-check-circle"></i> Proficiencies
          </h3>
          <div className="skills-list">
            {proficiencies.map((skill, index) => (
              <div 
                className="skill-item"
                key={index}
                style={{
                  '--skill-color': skill.color
                }}
              >
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-column">
          <h3 className="skills-header">
            <i className="fa-solid fa-graduation-cap"></i>Learning
          </h3>
          <div className="skills-list">
            {learning.map((skill, index) => (
              <div 
                className="skill-item"
                key={index}
                style={{
                  '--skill-color': skill.color
                }}
              >
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;