import { useState, useEffect } from "react";
import Header from "@/components/liquidity/Header";
import PoolsHeader from "@/components/liquidity/PoolsHeader";
import PoolCard from "@/components/liquidity/PoolCard";
import { cn } from "@/lib/utils";
import { getChainIcon } from "@/components/icons/ChainIcons";
import Footer from "@/components/liquidity/Footer";
  

import { usePools } from "@/contexts/PoolsContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Chain } from "@/types";


const Liquidity = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { filteredPools } = usePools();
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Group pools by chain
  const groupedPools = filteredPools.reduce((acc, pool) => {
    if (!acc[pool.chain]) {
      acc[pool.chain] = [];
    }
    acc[pool.chain].push(pool);
    return acc;
  }, {} as Record<string, typeof filteredPools>);

  return (
    <div className={cn(
      "min-h-screen flex flex-col",
      darkMode 
        ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100" 
        : "bg-gradient-to-b from-white to-purple-300 text-foreground"
    )}>
      <Header />
      <div
        className={cn(
          "container max-w-5xl px-4 md:px-6 lg:px-8 py-4 md:py-8 mx-auto transition-all duration-300",
          isScrolled ? "mt-[72px]" : ""
        )}
      >
        <PoolsHeader />

        <div className="grid grid-cols-1 gap-6 mx-auto">
          {Object.entries(groupedPools).map(([chain, chainPools]) => (
            <div key={chain} className="">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                )}>
                  {getChainIcon(chain as Chain)}
                </div>
                <h2 className={cn(
                  "text-lg font-medium",
                  darkMode ? "text-gray-100" : "text-gray-900"
                )}>
                  {chain}
                </h2>
              </div>
              <div className="space-y-4">
                {chainPools.map((pool) => (
                  <PoolCard key={pool.id} pool={pool} chainName={pool.chain} />
                ))}
              </div>
            </div>
          ))}
          {filteredPools.length === 0 && (
            <div className={cn(
              "text-center py-8",
              darkMode ? "text-gray-400" : "text-gray-500"
            )}>
              No pools found for the selected chain
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Liquidity;
