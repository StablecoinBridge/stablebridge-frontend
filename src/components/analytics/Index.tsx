import React, { useState } from 'react';
import DashboardHeader from '@/components/analytics/DashboardHeader';
import TableHeader from '@/components/analytics/TableHeader';
import StablecoinRow from '@/components/analytics/StablecoinRow';
import MarketTabs from '@/components/analytics/MarketTabs';
import StablecoinChart from '@/components/analytics/StablecoinChart';

// This mock data is no longer used directly as we're generating better data in the StablecoinChart component
const generateMockChartData = () => {
  const data = [];
  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  const years = ['2024', '2024', '2025', '2025', '2025', '2025'];
  
  // Starting values
  let euraValue = 18.28;
  let usdaValue = 27.42;
  
  for (let i = 0; i < 6; i++) {
    // Random fluctuations but general downward trend
    euraValue = Math.max(9, euraValue + (Math.random() * 0.8 - 0.4));
    usdaValue = Math.max(18, usdaValue + (Math.random() * 1 - 0.6));
    
    data.push({
      date: `${months[i]} ${years[i]}`,
      EURA: parseFloat(euraValue.toFixed(2)),
      USDA: parseFloat(usdaValue.toFixed(2)),
    });
  }
  
  return data;
};

const Index = () => {
  const [activeTab, setActiveTab] = useState('Market Cap');
  const chartData = generateMockChartData();
  
  // Table header definitions
  const tableHeaders = [
    { label: 'Stablecoin', tooltip: 'Stablecoin type' },
    { label: 'TVL', tooltip: 'Total Value Locked' },
    { label: 'Supply', tooltip: 'Current circulating supply' },
    { label: 'APY', tooltip: 'Annual Percentage Yield' },
    { label: 'Equity', tooltip: 'Equity value' },
  ];

  return (
    <div className="min-h-screen p-6 md:p-8 max-w-[1400px] mx-auto">
      <DashboardHeader />
      
      <div className="mb-8">
        <TableHeader headers={tableHeaders} />
        
        <StablecoinRow 
          name="EURA"
          tvl="18.13m€" 
          supply="13.42m EURA" 
          apy="3.68%" 
          equity="3.057m€" 
        />
        
        <StablecoinRow 
          name="USDA"
          tvl="13.16m€" 
          supply="14.64m USDA" 
          apy="4.79%" 
          equity="502.3k€" 
        />
      </div>
      
      <MarketTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="mt-6">
        <StablecoinChart data={chartData} />
      </div>
    </div>
  );
};

export default Index;
