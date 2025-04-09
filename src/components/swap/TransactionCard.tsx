import { useState } from "react";
import { ArrowDownUpIcon, CircleDollarSign, Droplet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import TokenRow from "@/components/swap/TokenRow";

const TransactionCard = () => {
  const [extraGas, setExtraGas] = useState(true);

  return (
    <div className="bg-[rgba(255,255,255,0.7)] backdrop-blur-sm rounded-3xl shadow-lg p-8 w-[450px]">
      {/* USDT Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className="text-5xl font-light text-gray-400 mb-4">0.0</div>
          <div className="flex justify-between items-center mb-4 border rounded-full p-1">
            <TokenRow
              symbol="USDT"
              network="from Avalanche"
              iconColor="#26A17B"
              networkIcon="🔺"
            />
          </div>
        </div>
        <button className="bg-purple-100 hover:bg-gray-200 transition-colors text-gray-700 px-5 py-2 rounded-full text-sm">
          Connect wallet
        </button>

        <div className="flex justify-center my-4">
          <div className="bg-purple-100 w-8 h-8 flex items-center justify-center rounded-full text-gray-500">
            <ArrowDownUpIcon size={20} />
          </div>
        </div>
      </div>

      {/* USDC Section */}
      <div className="mb-8">
        <div className="text-5xl font-light text-gray-400 mb-4">0.0</div>
        <div className="flex justify-between items-center mb-4">
          <TokenRow
            symbol="USDC"
            network="to Base"
            iconColor="#2775CA"
            networkIcon="🔵"
          />
        </div>
        <div className="flex gap-3">
          <button className="bg-purple-100 hover:bg-gray-200 transition-colors text-gray-700 px-5 py-2 rounded-full text-sm">
            Connect wallet
          </button>
          <button className="bg-purple-100 hover:bg-gray-200 transition-colors text-gray-700 px-5 py-2 rounded-full text-sm">
            Paste address
          </button>
        </div>
      </div>

      {/* Extra settings */}
      <div className="mt-8">
        <div className="flex justify-between items-center py-3 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Droplet size={18} className="text-purple-500" />
            <span>Extra gas</span>
            <span className="text-gray-400 text-xs">ⓘ</span>
          </div>
          <Switch checked={extraGas} onCheckedChange={setExtraGas} />
        </div>

        <div className="flex justify-between items-center py-3 text-sm border-t border-gray-100">
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="bg-purple-100 p-1 rounded">
              <CircleDollarSign size={16} className="text-purple-700" />
            </span>
            <span>Relayer fee</span>
            <span className="text-gray-400 text-xs">ⓘ</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-purple-100 text-gray-600 font-normal"
            >
              <span className="mr-1">AVAX</span>
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-100 text-gray-600 font-normal"
            >
              <span className="mr-1">USDT</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Send button */}
      <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full py-6">
        Send
      </Button>
    </div>
  );
};

export default TransactionCard;
