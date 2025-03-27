import React from 'react';
import { Pool } from '@/types';
import { formatCurrency, formatPercent } from '@/lib/formatters';
import { getChainIcon } from '@/components/icons/ChainIcons';
import { getTokenIcon } from '@/components/icons/TokenIcons';
import { ExternalLink } from 'lucide-react';

interface PoolCardProps {
  pool: Pool;
  chainName: string;
}

const PoolCard: React.FC<PoolCardProps> = ({ pool, chainName }) => {
  return (
    <div className="pool-card animate-fade-up">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
          {getChainIcon(chainName)}
          <span className="ml-2 font-semibold">{chainName}</span>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center">
          {getTokenIcon(pool.token)}
          <span className="ml-2 font-semibold">{pool.token}</span>
          <div className="ml-1 p-1 rounded bg-secondary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-gray-500 text-sm mb-1">TVL</div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-teal-500 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <path d="M12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z" fill="currentColor"/>
              </svg>
              <span className="font-medium">{formatCurrency(pool.tvl)}</span>
            </div>
            <div className="text-gray-500 text-xs mt-1">
              Imbalance <span className="text-green-500">{pool.imbalance}</span>
            </div>
          </div>
          
          <div>
            <div className="text-gray-500 text-sm mb-1">APR for 7d</div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-teal-500 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
                <path d="M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="currentColor"/>
              </svg>
              <span className="font-medium">{formatPercent(pool.apr)}</span>
            </div>
            <div className="w-4 h-4 mt-1"></div>
          </div>
          
          <div>
            <div className="text-gray-500 text-sm mb-1">Your LP</div>
            <div className="flex items-center">
              <span className="text-sm">-</span>
              <span className="font-medium ml-1">{formatCurrency(pool.yourLP || 0)}</span>
            </div>
            <div className="w-4 h-4 mt-1"></div>
          </div>
          
          <div>
            <div className="text-gray-500 text-sm mb-1">Earned</div>
            <div className="flex items-center">
              <span className="text-sm">$</span>
              <span className="font-medium ml-1">{formatCurrency(pool.earned || 0)}</span>
            </div>
            <div className="w-4 h-4 mt-1"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="connect-pool-button">
            Connect to {chainName}
            <ExternalLink className="ml-1 w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoolCard;
