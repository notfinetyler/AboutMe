import React from 'react';
import clutterhuck from '../assets/images/clutterhuckLogo.png';

const Projects = () => {
  const projects = [
    {
      title: "ClutterHuck (Developer)",
      description: "Decluttering app promoting SDG 12 \"Responsible Consumption and Production\", with options to sell, auction, and donate unwanted items.",
      technologies: ["React", "TypeScript", "Supabase", "Jest", "Playwright"],
      link: "https://github.com/carloscailao/ClutterHuck",
      image: {clutterhuck}
    },
    {
      title: "BioTech Lab System (Front-End Developer)",
      description: "An inventory system containing transactions from the company's suppliers and their clients.",
      technologies: ["React", "JavaScript", "Dart", "SQL"],
      link: "https://github.com/Patthethicc/Biotech_Lab_System",
      iimage: {clutterhuck}
    },
    {
      title: "Pro-ject (Designer, Front-End Develoer)",
      description: "A forum website that encourages student collaboration and producivity.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/Patthethicc/CCAPDEVgroup11",
      image: {clutterhuck}
    },
    {
      title: "ThatSkyMusic",
      description: "A simplified DAW for aspiring music producers having trouble navigating modern music production software.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/notfinetyler/MyMusicProject",
      image: {clutterhuck}
    }
  ];

  return (
    <div className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="project-placeholder" style={{ display: 'none' }}>
                <i className="fas fa-code"></i>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                <i className="fas fa-external-link-alt"></i> View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;