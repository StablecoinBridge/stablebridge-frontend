import { ChevronRight } from "lucide-react";

interface TokenRowProps {
  symbol: string;
  network: string;
  iconColor: string;
  networkIcon: string;
  onClick: () => void;
}

const TokenRow = ({ symbol, network, iconColor, networkIcon, onClick }: TokenRowProps) => {
  return (
    <div className="flex justify-between items-center cursor-pointer w-full" onClick={onClick}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-full">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: iconColor }}
          >
            {symbol === "USDT" ? "T" : "C"}
          </div>
        </div>
        <div>
          <p className="font-medium">{symbol}</p>
          <p className="text-sm text-gray-500 flex items-center">
            {network} <span className="ml-1">{networkIcon}</span>
          </p>
        </div>
      </div>
      <ChevronRight className="text-gray-400" size={20} />
    </div>
  );
};

export default TokenRow;
