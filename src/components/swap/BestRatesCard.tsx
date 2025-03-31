import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RateRowProps {
  fromSymbol: string;
  fromNetwork: string;
  toSymbol: string;
  toNetwork: string;
  rate: string;
}

const RateRow = ({ fromSymbol, fromNetwork, toSymbol, toNetwork, rate }: RateRowProps) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center">
        <div className="flex items-center gap-1">
          <div 
            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: fromSymbol === "USDC" ? "#2775CA" : "#26A17B" }}
          >
            {fromSymbol === "USDC" ? "C" : "T"}
          </div>
          <span className="text-sm">{fromSymbol}</span>
          <span className="text-xs text-blue-400">{fromNetwork}</span>
        </div>
        <ChevronRight className="mx-2 text-gray-400" size={14} />
        <div className="flex items-center gap-1">
          <div 
            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: toSymbol === "USDC" ? "#2775CA" : "#26A17B" }}
          >
            {toSymbol === "USDC" ? "C" : "T"}
          </div>
          <span className="text-sm">{toSymbol}</span>
          <span className="text-xs text-blue-400">{toNetwork}</span>
        </div>
      </div>
      <div className="text-right text-sm font-medium">{rate}</div>
    </div>
  );
};

const BestRatesCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 w-[360px]">
      <div className="flex items-center gap-2 mb-3 text-purple-700">
        <h3 className="text-lg font-medium">Best Rates</h3>
        <span className="text-sm text-gray-400">ⓘ</span>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Send</p>
        <div className="text-3xl font-medium text-purple-800 mb-3">100</div>
        <div className="flex gap-2 mb-4">
          <Badge className="bg-purple-600 hover:bg-purple-700">$100</Badge>
          <Badge variant="outline">$1000</Badge>
          <Badge variant="outline">$10000</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-3 text-xs text-gray-500 mb-2">
        <div>From</div>
        <div>To</div>
        <div className="text-right">Receive</div>
      </div>
      
      <div className="space-y-1">
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDT" toNetwork="💰" rate="100.10" />
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDC" toNetwork="🔴" rate="100.09" />
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDT" toNetwork="🔴" rate="100.08" />
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDC" toNetwork="≡" rate="100.06" />
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDT" toNetwork="🔺" rate="100.06" />
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDT" toNetwork="↑" rate="100.04" />
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDC" toNetwork="⚬" rate="100.04" />
        <RateRow fromSymbol="USDC" fromNetwork="↗" toSymbol="USDT" toNetwork="⚬" rate="100.03" />
      </div>
    </div>
  );
};

export default BestRatesCard;