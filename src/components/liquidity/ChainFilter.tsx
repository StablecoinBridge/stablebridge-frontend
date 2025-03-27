import React from 'react';
import { Chain } from '@/types';
import { getChainIcon } from '@/components/icons/ChainIcons';

interface ChainFilterProps {
  chains: Chain[];
  selectedChain: Chain;
  setSelectedChain: (chain: Chain) => void;
}

const ChainFilter: React.FC<ChainFilterProps> = ({ 
  chains, 
  selectedChain, 
  setSelectedChain 
}) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {chains.map((chain) => (
        <button
          key={chain}
          className={`filter-button ${selectedChain === chain ? 'active' : ''}`}
          onClick={() => setSelectedChain(chain)}
        >
          <span className="flex items-center gap-1.5">
            {getChainIcon(chain)}
            <span>{chain}</span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default ChainFilter;