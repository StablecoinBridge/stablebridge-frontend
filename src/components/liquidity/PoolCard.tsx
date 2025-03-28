import React from "react";
import { Pool } from "@/types";
import { formatCurrency, formatPercent } from "@/lib/formatters";
import { getTokenIcon } from "@/components/icons/TokenIcons";
import { CircleAlert, ExternalLink } from "lucide-react";

interface PoolCardProps {
  pool: Pool;
  chainName: string;
}

const PoolCard: React.FC<PoolCardProps> = ({ pool, chainName }) => {
  return (
    <>
      <div
        className="bg-[#F9FCFB] backdrop-blur-sm bg-opacity-30 rounded-full p-2 px-4 animate-fade-up"
        style={{
          animationDelay: `${parseInt(pool.id) * 50}ms`,
          animation: "slide-up 0.5s ease-out forwards",
          opacity: 1,
          transform: "translateY(10px)",
        }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center">
            {getTokenIcon(pool.token)}
            <span className="ml-2 font-semibold">{pool.token}</span>
            <div className="ml-1 p-1 rounded bg-violet-100">
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>

          <div className="flex-1 flex justify-between items-center gap-4">
            <div className="">
              <div className="flex items-center gap-2">
                <div className="text-violet-500 text-sm">TVL</div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-violet-500 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-medium text-violet-500">
                    {formatCurrency(pool.tvl)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-violet-500 font-medium text-xs mt-1">
                Imbalance <CircleAlert className="w-3 h-3 text-violet-500" />
                <span className="text-violet-600">{pool.imbalance}</span>
              </div>
            </div>

            <div className="flex items-center translate-y-2 flex-col">
              <div className="text-violet-500 text-sm mb-1">APR for 7d</div>
              <div className="flex items-center gap-1">
                <span className="font-medium text-violet-500">
                  {formatPercent(pool.apr)}
                </span>
                <svg
                  className="w-4 h-4 text-violet-500 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 mt-1"></div>
            </div>

            <div className="flex flex-col gap-2 bg-violet-50 rounded-lg p-2">
              <div className="flex items-center gap-2">
                <div className="text-violet-500 text-sm">Your LP</div>
                <div className="flex items-center">
                  <span className="text-sm">-</span>
                  <span className="font-medium ml-1">
                    {formatCurrency(pool.yourLP || 0)}
                  </span>
                </div>
                <div className="w-4 h-4 mt-1"></div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-violet-500 text-sm">Earned</div>
                <div className="flex items-center">
                  <span className="text-sm">$</span>
                  <span className="font-medium ml-1">
                    {formatCurrency(pool.earned || 0)}
                  </span>
                </div>
                <div className="w-4 h-4 mt-1"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-[200px]">
            <button className="bg-violet-100 rounded-full p-2 text-violet-600 w-full font-semibold py-3 px-2">
              Connect to {chainName}
            </button>
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolCard;
