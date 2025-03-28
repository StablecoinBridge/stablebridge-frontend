import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Chain, PoolStats } from '@/types';
import { getChains, pools, poolStats } from '@/data/pools';

interface PoolsContextType {
  selectedChain: Chain;
  setSelectedChain: (chain: Chain) => void;
  selectedTimeframe: '7d' | '30d';
  setSelectedTimeframe: (timeframe: '7d' | '30d') => void;
  filteredPools: typeof pools;
  stats: PoolStats;
  chains: Chain[];
}

const PoolsContext = createContext<PoolsContextType | undefined>(undefined);

export const PoolsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedChain, setSelectedChain] = useState<Chain>('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d'>('7d');
  const [filteredPools, setFilteredPools] = useState(pools);
  const chains = getChains();

  // Update filtered pools when chain selection changes
  React.useEffect(() => {
    if (selectedChain === 'All') {
      setFilteredPools(pools);
    } else {
      setFilteredPools(pools.filter(pool => pool.chain === selectedChain));
    }
  }, [selectedChain]);

  const value = {
    selectedChain,
    setSelectedChain,
    selectedTimeframe,
    setSelectedTimeframe,
    filteredPools,
    stats: poolStats,
    chains,
  };

  return (
    <PoolsContext.Provider value={value}>
      {children}
    </PoolsContext.Provider>
  );
};

export const usePools = () => {
  const context = useContext(PoolsContext);
  if (context === undefined) {
    throw new Error('usePools must be used within a PoolsProvider');
  }
  return context;
}; 