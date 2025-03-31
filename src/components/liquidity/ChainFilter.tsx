import React from "react";
import { Chain } from "@/types";
import { getChainIcon } from "@/components/icons/ChainIcons";

interface ChainFilterProps {
  chains: Chain[];
  selectedChain: Chain;
  setSelectedChain: (chain: Chain) => void;
}

const ChainFilter: React.FC<ChainFilterProps> = ({
  chains,
  selectedChain,
  setSelectedChain,
}) => {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      {chains.map((chain) => (
        <button
          key={chain}
          className={`cursor-pointer ${
            selectedChain === chain ? "scale-110" : ""
          }`}
          onClick={() => setSelectedChain(chain)}
        >
          <span className="flex items-center gap-1.5">
            {getChainIcon(chain)}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ChainFilter;
