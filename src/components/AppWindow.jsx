import React from 'react';
import TabBar from './TabBar';

const AppWindow = ({ children, activeTab, setActiveTab, tabs, windowSize }) => {
  // Determine window class based on size
  const getWindowClass = () => {
    switch(windowSize) {
      case 'normal': return 'window-normal';
      case 'medium': return 'window-medium';
      case 'large': return 'window-large';
      default: return 'window-normal';
    }
  };

  return (
    <div className={`app-window ${getWindowClass()}`}>
      {/* Window Header */}
      <div className="window-header">
        <div className="window-title">
          <i className="fas fa-laptop-code"></i>
          <span>Portfolio</span>
        </div>
        <div className="window-controls">
          <div className="control-btn close"></div>
          <div className="control-btn minimize"></div>
          <div className="control-btn maximize"></div>
        </div>
      </div>
      
      {/* Tab Bar */}
      <TabBar 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      {/* Content Area */}
      <div className="window-content">
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppWindow;