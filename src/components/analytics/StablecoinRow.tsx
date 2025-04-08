
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import CurrencyIcon from './CurrencyIcon';

interface StablecoinRowProps {
  name: 'EURA' | 'USDA';
  tvl: string;
  supply: string;
  apy: string;
  equity: string;
  onClick?: () => void;
}

const StablecoinRow: React.FC<StablecoinRowProps> = ({ 
  name, tvl, supply, apy, equity, onClick 
}) => {
  return (
    <div 
      className="grid grid-cols-5 items-center bg-purple-100 py-4 border-b border-gray-100 cursor-pointer hover:bg-purple-200 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <CurrencyIcon currency={name} size="lg" />
        <span className="font-medium text-purple-500">{name}</span>
        <ArrowUpRight size={16} className="text-purple-500" />
      </div>
      <div className="text-purple-500">{tvl}</div>
      <div className="text-purple-500">{supply}</div>
      <div className="text-purple-500">{apy}</div>
      <div className="text-purple-500">{equity}</div>
    </div>
  );
};

export default StablecoinRow;