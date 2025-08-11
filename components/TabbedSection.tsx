

import React, { useState } from 'react';

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabbedSectionProps {
  tabs: Tab[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

export const TabbedSection: React.FC<TabbedSectionProps> = ({ tabs, activeTab: controlledActiveTab, onTabChange }) => {
  const [internalActiveTab, setInternalActiveTab] = useState(0);
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  if (!tabs || tabs.length === 0) {
    return null;
  }

  const handleTabClick = (index: number) => {
    if (onTabChange) {
      onTabChange(index);
    }
    if (!isControlled) {
      setInternalActiveTab(index);
    }
  };

  return (
    <div>
      <div className="border-b border-gray-700">
        <nav className="-mb-px flex space-x-2 sm:space-x-6 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              id={`tab-${index}`}
              onClick={() => handleTabClick(index)}
              className={`whitespace-nowrap py-4 px-2 sm:px-4 border-b-2 font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-400 rounded-t-md ${
                activeTab === index
                  ? 'border-teal-400 text-teal-300'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
              }`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tab-panel-${index}`}
            >
              {tab.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.title}
            id={`tab-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            hidden={activeTab !== index}
            className="focus:outline-none ring-offset-gray-800"
            tabIndex={0}
          >
            {activeTab === index && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};