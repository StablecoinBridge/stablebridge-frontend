import React from 'react';

interface MarketTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MarketTabs: React.FC<MarketTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['Market Cap', 'TVL', 'Holders', 'Volume', 'Savings'];
  
  return (
    <div className="flex border-b border-gray-100">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === tab 
              ? 'text-white border-b-2 border-purple-500' 
              : 'text-purple-500 hover:text-purple-400'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default MarketTabs;