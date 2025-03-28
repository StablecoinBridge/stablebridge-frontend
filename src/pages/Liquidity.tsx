import { useState, useEffect } from "react";
import Header from "@/components/liquidity/Header";
import PoolsHeader from "@/components/liquidity/PoolsHeader";
import PoolCard from "@/components/liquidity/PoolCard";
import { getChains, pools, poolStats } from "@/data/pools";
import { Chain } from "@/types";
import { cn } from "@/lib/utils";

const Liquidity = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedChain, setSelectedChain] = useState<Chain>("All");
  const [selectedTimeframe, setSelectedTimeframe] = useState<"7d" | "30d">(
    "7d"
  );
  const [filteredPools, setFilteredPools] = useState(pools);
  const [isScrolled, setIsScrolled] = useState(false);
  const chains = getChains();

  useEffect(() => {
    if (selectedChain === "All") {
      setFilteredPools(pools);
    } else {
      setFilteredPools(pools.filter((pool) => pool.chain === selectedChain));
    }
  }, [selectedChain]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-300 text-foreground flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={cn(
          "container px-4 md:px-6 lg:px-8 py-4 md:py-8 max-w-7xl mx-auto transition-all duration-300",
          isScrolled ? "mt-[72px]" : ""
        )}
      >
        <PoolsHeader
          stats={poolStats}
          selectedTimeframe={selectedTimeframe}
          setSelectedTimeframe={setSelectedTimeframe}
          chains={chains}
          selectedChain={selectedChain}
          setSelectedChain={setSelectedChain}
        />

        <div className="flex flex-col my-4">
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
