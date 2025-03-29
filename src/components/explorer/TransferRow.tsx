import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import TokenIcon from "./TokenIcon";
import { useTheme } from "@/contexts/ThemeContext";

interface TransferRowProps {
  transfer: {
    id: string;
    status: "success" | "pending" | "failed";
    from: {
      address: string;
      token: string;
      amount: string;
      tokenType: "USDC" | "USDT";
      iconBg: string;
    };
    to: {
      address: string;
      token: string;
      amount: string;
      tokenType: "USDC" | "USDT" | "USDC.e";
      iconBg: string;
    };
    timestamp: string;
  };
}

const TransferRow: React.FC<TransferRowProps> = ({ transfer }) => {
  const { darkMode } = useTheme();
  
  // Truncate blockchain address to first 8 chars + ... + last 8 chars
  const formatAddress = (address: string) => {
    if (!address) return "";
    const start = address.substring(0, 8);
    const end = address.substring(address.length - 8);
    return `${start}...${end}`;
  };

  return (
    <div className={cn(
      "flex flex-col md:flex-row items-start justify-between py-4 border-b",
      darkMode ? "border-gray-700" : "border-[#eaefed]"
    )}>
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <div
          className={cn(
            "w-5 h-5 rounded-full flex items-center justify-center",
            transfer.status === "success" 
              ? darkMode ? "bg-green-900/30" : "bg-[#e8f5ef]" 
              : darkMode ? "bg-gray-700" : "bg-[#f0f0f0]"
          )}
        >
          {transfer.status === "success" && (
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          )}
        </div>
        <span className={cn(
          "text-sm font-mono",
          darkMode ? "text-gray-400" : "text-[#6e7c8c]"
        )}>
          {formatAddress(transfer.id)}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 flex-1 justify-between md:justify-center">
        <div className="flex flex-col items-end md:items-center">
          <div className="flex items-center">
            <TokenIcon bg={transfer.from.iconBg} />
            <span className={cn(
              "text-sm font-medium ml-2",
              darkMode ? "text-gray-200" : "text-gray-900"
            )}>
              {transfer.from.address}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <span className={cn(
              "text-sm",
              darkMode ? "text-gray-400" : "text-[#4d5e6f]"
            )}>
              {transfer.from.amount} {transfer.from.tokenType}
            </span>
          </div>
        </div>

        <div className="flex items-center mx-2 md:mx-6 gap-2">
          <ChevronRight size={20} className={cn(
            darkMode ? "text-violet-400" : "text-violet-500"
          )} />
          <div className="flex flex-col">
            <div className={cn(
              "h-7 w-7 flex items-center justify-center rounded-full",
              darkMode ? "bg-teal-900/30" : "bg-teal-50"
            )}>
              <svg viewBox="0 0 24 24" className={cn(
                "h-6 w-6",
                darkMode ? "text-teal-400" : "text-teal-500"
              )}>
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 9v6M9 12h6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className={cn(
              "h-7 w-7 flex items-center justify-center rounded-full",
              darkMode ? "bg-purple-900/30" : "bg-purple-50"
            )}>
              <svg viewBox="0 0 24 24" className={cn(
                "h-6 w-6",
                darkMode ? "text-purple-400" : "text-purple-500"
              )}>
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 9v6M9 12h6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <div className="flex items-center">
            <TokenIcon bg={transfer.to.iconBg} />
            <span className={cn(
              "text-sm font-medium ml-2",
              darkMode ? "text-gray-200" : "text-gray-900"
            )}>
              {transfer.to.address}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <span className={cn(
              "text-sm",
              darkMode ? "text-gray-400" : "text-[#4d5e6f]"
            )}>
              {transfer.to.amount} {transfer.to.tokenType}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:block ml-4 text-sm text-[#6e7c8c]">
        {transfer.timestamp}
      </div>
    </div>
  );
};

export default TransferRow;
