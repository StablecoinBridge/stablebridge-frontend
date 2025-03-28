import React from "react";
import { cn } from "@/lib/utils";

interface TokenIconProps {
  bg: string;
}

const TokenIcon: React.FC<TokenIconProps> = ({ bg }) => {
  return (
    <div 
      className={cn(
        "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium",
        bg
      )}
    >
      T
    </div>
  );
};

export default TokenIcon;