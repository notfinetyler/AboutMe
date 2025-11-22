import React from 'react';

const Contact = () => {
  const socialLinks = [
    { 
      platform: "GitHub", 
      icon: "fa-brands fa-github", 
      url: "https://github.com", 
      color: "#61DAFB" // GitHub's actual color is #181717, but using React blue for consistency
    },
    { 
      platform: "LinkedIn", 
      icon: "fa-brands fa-linkedin", 
      url: "https://linkedin.com", 
      color: "#0A66C2" 
    },
    { 
      platform: "YouTube", 
      icon: "fa-brands fa-youtube", 
      url: "https://twitter.com", 
      color: "#f21d1dff" 
    },
    { 
      platform: "Facebook", 
      icon: "fa-brands fa-facebook", 
      url: "https://facebook.com", 
      color: "#1877F2" 
    },
    { 
      platform: "Instagram", 
      icon: "fa-brands fa-instagram", 
      url: "https://instagram.com", 
      color: "#E4405F" 
    },
    { 
      platform: "Email", 
      icon: "fa-solid fa-envelope", 
      url: "mailto:hello@example.com", 
      color: "#EA4335"
    }
  ];

  return (
    <div className="contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        Feel free to reach out if you have any questions or would like to collaborate!
      </p>
      
      <div className="contact-links">
        {socialLinks.map((link, index) => (
          <a 
            href={link.url} 
            className="contact-link"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              '--social-color': link.color
            }}
          >
            <div className="contact-icon">
              <i className={link.icon}></i>
            </div>
            <span>{link.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;