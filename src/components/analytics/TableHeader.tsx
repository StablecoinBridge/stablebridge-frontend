
import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TableHeaderProps {
  headers: { label: string; tooltip: string }[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <div className="grid grid-cols-5 py-3 border-b border-gray-100 text-sm uppercase tracking-wider text-purple-500">
      {headers.map((header, index) => (
        <div key={index} className="flex items-center gap-1">
          <span>{header.label}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={14} className="text-purple-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{header.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
};

export default TableHeader;