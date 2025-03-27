import React from 'react';
import { cn } from '@/lib/utils';
import { Moon, Sun } from "lucide-react";
import Logo from './Logo';

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children, active = false, icon }) => {
  return (
    <div className={cn(
      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200",
      active 
        ? "text-teal-600 bg-teal-50" 
        : "text-gray-600 hover:text-teal-600 hover:bg-teal-50/50"
    )}>
      {icon}
      {children}
    </div>
  );
};

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-8">
        <Logo className="h-8 w-8 text-teal-600" />
        
        <div className="hidden md:flex items-center gap-2">
          <NavItem active icon={<div className="w-1.5 h-1.5 rounded-full bg-teal-500" />}>Swap</NavItem>
          <NavItem>Liquidity</NavItem>
          <NavItem>Yield</NavItem>
          <NavItem>Explorer</NavItem>
          <NavItem>Ranks</NavItem>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleDarkMode}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        
        <div className="connect-button">
          Connect wallet
        </div>
      </div>
    </div>
  );
};

export default Header;
