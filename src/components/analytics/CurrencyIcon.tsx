
import React from 'react';

interface CurrencyIconProps {
  currency: 'EURA' | 'USDA';
  size?: 'sm' | 'md' | 'lg';
}

const CurrencyIcon: React.FC<CurrencyIconProps> = ({ currency, size = 'md' }) => {
  const sizeClass = {
    sm: 'w-4 h-4 text-[8px]',
    md: 'w-6 h-6 text-xs',
    lg: 'w-8 h-8 text-sm',
  }[size];

  const symbol = currency === 'EURA' ? '€' : '$';
  
  return (
    <div className={`${sizeClass} rounded-full bg-white flex items-center justify-center`}>
      <span className="text-black font-semibold">{symbol}</span>
    </div>
  );
};

export default CurrencyIcon;