import React from 'react';
import { PoolStats } from '@/types';
import { formatCurrency, formatPercent } from '@/lib/formatters';
import { RefreshCw } from 'lucide-react';

interface PoolsHeaderProps {
  stats: PoolStats;
  selectedTimeframe: '7d' | '30d';
  setSelectedTimeframe: (timeframe: '7d' | '30d') => void;
}

const PoolsHeader: React.FC<PoolsHeaderProps> = ({ 
  stats, 
  selectedTimeframe, 
  setSelectedTimeframe 
}) => {
  return (
    <div className="flex flex-col w-full mt-2 mb-6 animate-fade-up">
      <div className="flex items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-teal-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">Pools</h1>
        </div>
        
        <div className="ml-auto flex items-center gap-2">
          <button 
            className={`time-button ${selectedTimeframe === '7d' ? 'active' : ''}`}
            onClick={() => setSelectedTimeframe('7d')}
          >
            7d
          </button>
          <button 
            className={`time-button ${selectedTimeframe === '30d' ? 'active' : ''}`}
            onClick={() => setSelectedTimeframe('30d')}
          >
            30d
          </button>
          <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors duration-300">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="stat-box">
          <span className="text-sm text-gray-500 mb-1">TVL</span>
          <span className="text-xl font-medium text-teal-600">{formatCurrency(stats.tvl)}</span>
        </div>
        <div className="stat-box">
          <span className="text-sm text-gray-500 mb-1">Avg. APR</span>
          <span className="text-xl font-medium text-teal-600">{formatPercent(stats.apr)}</span>
        </div>
        <div className="stat-box">
          <span className="text-sm text-gray-500 mb-1">Rewards</span>
          <span className="text-xl font-medium text-teal-600">{formatCurrency(stats.rewards)}</span>
        </div>
      </div>
    </div>
  );
};

export default PoolsHeader;
