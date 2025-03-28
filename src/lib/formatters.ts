
export const formatCurrency = (amount: number, maximumFractionDigits = 2): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits,
      minimumFractionDigits: 2,
    }).format(amount);
  };
  
  export const formatPercent = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(value / 100);
  };