import React, { useState, useEffect } from 'react';
import AppWindow from './components/AppWindow.jsx';
import AboutMe from './components/AboutMe.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [windowSize, setWindowSize] = useState('normal');

  // Define tab configuration
  const tabs = [
    { id: 'about', title: 'About Me', icon: 'fa-user' },
    { id: 'education', title: 'Education', icon: 'fa-graduation-cap' },
    { id: 'projects', title: 'Projects', icon: 'fa-code' },
    { id: 'contact', title: 'Contact', icon: 'fa-envelope' }
  ];

  // Adjust window size based on active tab
  useEffect(() => {
    if (activeTab === 'about') {
      setWindowSize('normal');
    } else if (activeTab === 'education' || activeTab === 'projects') {
      setWindowSize('large');
    } else {
      setWindowSize('medium');
    }
  }, [activeTab]);

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return <AboutMe />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app-container">
      <AppWindow 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        windowSize={windowSize}
      >
        {renderContent()}
      </AppWindow>
    </div>
  );
};

export default App;