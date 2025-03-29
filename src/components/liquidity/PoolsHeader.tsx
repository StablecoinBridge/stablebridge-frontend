import React from "react";
import { formatCurrency, formatPercent } from "@/lib/formatters";
import { Database, Grid2x2Icon, RefreshCw } from "lucide-react";
import ChainFilter from "./ChainFilter";
import { usePools } from "@/contexts/PoolsContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PoolsHeader: React.FC<{ title?: string, icon?: React.ReactNode }> = ({ title = "Pools", icon = <Database className="text-violet-600" /> }) => {
  const { stats, selectedTimeframe, setSelectedTimeframe, chains, selectedChain, setSelectedChain } = usePools();

  return (
    <div className="flex flex-col w-full mt-2 mb-6 animate-fade-up">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <h1 className="text-3xl font-semibold text-violet-800">{title}</h1>
        </div>

        <ChainFilter
          chains={chains}
          selectedChain={selectedChain}
          setSelectedChain={setSelectedChain}
        />
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-2 ml-auto">
            <Select>
              <SelectTrigger className="rounded-full focus:outline-none focus:ring-0 focus:shadow-none bg-white text-sm w-[180px] px-4 h-12">
                <SelectValue placeholder="Chain - Token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chain">Chain - Token</SelectItem>
                <SelectItem value="token">Token - Chain</SelectItem>
                <SelectItem value="apr">APR</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-100 text-violet-500 ml-2">
                <Grid2x2Icon className="w-5 h-5" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-400 border-gray-200 text-white">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-auto">
          <div className="flex flex-col justify-center">
            <span className="text-sm text-violet-500 font-semibold mb-1">
              TVL
            </span>
            <span className="text-2xl font-medium text-violet-600">
              {formatCurrency(stats.tvl)}
            </span>
          </div>
          <div className="flex flex-col justify-center border-l border-violet-200 pl-4 border-r">
            <span className="text-sm text-violet-500 font-semibold mb-1">
              Avg. APR
            </span>
            <span className="text-2xl font-medium text-violet-600">
              {formatPercent(stats.apr)}
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm text-violet-500 font-semibold mb-1">
              Rewards
            </span>
            <span className="text-2xl font-medium text-violet-600">
              {formatCurrency(stats.rewards)}
            </span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            className={`text-sm font-semibold h-9 w-9 flex items-center justify-center rounded-full ${
              selectedTimeframe === "7d"
                ? "bg-violet-600 text-white"
                : "bg-violet-100 text-violet-600"
            }`}
            onClick={() => setSelectedTimeframe("7d")}
          >
            7d
          </button>
          <button
            className={`text-sm font-semibold h-9 w-9 flex items-center justify-center rounded-full ${
              selectedTimeframe === "30d"
                ? "bg-violet-600 text-white"
                : "bg-violet-100 text-violet-600"
            }`}
            onClick={() => setSelectedTimeframe("30d")}
          >
            30d
          </button>
          <button className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center hover:bg-accent transition-colors duration-300">
            <RefreshCw className="w-4 h-4 text-violet-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoolsHeader;
