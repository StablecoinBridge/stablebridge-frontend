import { useState, useEffect } from 'react';
import Header from '@/components/liquidity/Header';
import PoolsHeader from '@/components/liquidity/PoolsHeader';
import ChainFilter from '@/components/liquidity/ChainFilter';
import PoolCard from '@/components/liquidity/PoolCard';
import { getChains, pools, poolStats } from '@/data/pools';
import { Chain } from '@/types';

const Liquidity = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedChain, setSelectedChain] = useState<Chain>('All');
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d'>('7d');
  const [filteredPools, setFilteredPools] = useState(pools);
  const chains = getChains();

  useEffect(() => {
    if (selectedChain === 'All') {
      setFilteredPools(pools);
    } else {
      setFilteredPools(pools.filter(pool => pool.chain === selectedChain));
    }
  }, [selectedChain]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="container px-4 md:px-6 lg:px-8 py-4 md:py-8 max-w-7xl mx-auto">
        <PoolsHeader 
          stats={poolStats} 
          selectedTimeframe={selectedTimeframe} 
          setSelectedTimeframe={setSelectedTimeframe} 
        />
        
        <div className="flex flex-col my-4">
          <div className="flex flex-wrap justify-between items-center">
            <ChainFilter 
              chains={chains} 
              selectedChain={selectedChain} 
              setSelectedChain={setSelectedChain} 
            />
            
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center h-9 px-4 text-sm rounded-lg bg-white border border-gray-200 shadow-sm">
                <span className="mr-2 text-gray-500">Chain - Token</span>
                <svg 
                  className="w-4 h-4 text-gray-500" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
              
              <div className="flex items-center">
                <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-gray-200 shadow-sm text-gray-500">
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18M3 12h18M3 18h18"/>
                  </svg>
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-500 text-white shadow-sm ml-2">
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 10H6M12 4v12"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            {filteredPools.map((pool) => (
              <PoolCard key={pool.id} pool={pool} chainName={pool.chain} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
