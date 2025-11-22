import React from 'react';

const TabBar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="tab-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <i className={`fas ${tab.icon}`}></i>
          <span>{tab.title}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;