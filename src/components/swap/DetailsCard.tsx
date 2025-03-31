import { ChevronDown, RefreshCw } from "lucide-react";

const DetailsCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 w-[360px]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-purple-700">
          <h3 className="text-lg font-medium">Details</h3>
        </div>
        <button className="text-gray-400">
          <RefreshCw size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <span className="text-xs bg-red-100 text-red-500 px-1 py-0.5 rounded">🔺</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-purple-700 text-xs">T</span>
              <span className="text-sm">0.00</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center">
              <span className="text-purple-700 text-xs">~2 min</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-px bg-gray-200 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
              <span className="text-xs text-gray-400">→</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="mb-1">
            <span className="text-xs bg-blue-100 text-blue-500 px-1 py-0.5 rounded">🔵</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-blue-500 text-xs">C</span>
              <span className="text-sm">0.00</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-gray-600 text-sm">
            <span className="mr-1">0.026421</span>
            <span className="text-xs text-red-500">🔺</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <span className="text-sm font-medium">0</span>
              <span className="text-xs text-purple-600">↑</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 h-0.5 rounded-full w-full mb-3 relative">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 flex items-center">
            <span className="text-xs text-gray-500">Wormhole</span>
            <ChevronDown size={12} className="text-gray-500 ml-1" />
          </div>
        </div>
        
        <div className="flex justify-end mb-4">
          <div className="text-gray-600 text-sm">
            <span className="mr-1">0.026421</span>
            <span className="text-xs text-purple-600">🔺</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Swap fee</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">LP fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Swap</span>
              <span>$0</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-3">
            <span className="mr-1 invisible">Swap fee</span>
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">LP fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Swap</span>
              <span>$0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
