
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <h1 className="text-4xl font-bold text-primary mb-4 md:mb-0">Angle Collateralization</h1>
      
      <div className="flex gap-4">
        <InfoCard 
          title="Angle TVL" 
          value="31.28m€" 
          tooltipText="Total Value Locked in Angle Protocol"
        />
        <InfoCard 
          title="Stablecoins Market Cap" 
          value="26.8m€" 
          tooltipText="Total market capitalization of all Angle stablecoins"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;

interface InfoCardProps {
  title: string;
  value: string;
  tooltipText: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, value, tooltipText }) => {
  return (
    <div className="bg-purple-100 w-48 rounded-lg p-4 border border-gray-100">
      <div className="flex items-center gap-2 text-purple-400 mb-1">
        <span>{title}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info size={16} className="text-purple-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="text-2xl font-medium text-purple-500">{value}</div>
    </div>
  );
};
