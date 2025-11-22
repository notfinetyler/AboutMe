import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "ClutterHuck (Developer)",
      description: "Decluttering app promoting SDG 12 \"Responsible Consumption and Production\", with options to sell, auction, and donate unwanted items.",
      technologies: ["React", "TypeScript", "Supabase", "Jest", "Playwright"],
      link: "#"
    },
    {
      title: "BioTech Lab Inventory System (Front-End Dev)",
      description: "A specialized lab inventory system for item stocks distributed and sold by BioTech Laboratories Philippines.",
      technologies: ["React", "JavaScript", "Dart", "SQL"],
      link: "#"
    },
    {
      title: "Pro-ject (Designer, Front-End Dev)",
      description: "A forum website that encourages student collaboration and producivity.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "ThatSkyMusic",
      description: "A simplified DAW for aspiring music producers having trouble navigating modern music production software.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "#"
    }
  ];

  return (
    <div className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default Projects;