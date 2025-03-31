import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Moon,
  Sun,
  Repeat2,
  Database,
  Wallet,
  PieChart,
  Search,
  Star,
  Clock,
} from "lucide-react";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
  icon?: React.ElementType; // Change to React.ElementType for proper icon type
  route?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  active = false,
  icon: Icon,
  route,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200",
        active
          ? "text-violet-600 bg-violet-50"
          : "text-gray-600 hover:text-violet-600 hover:bg-violet-50/50"
      )}
      onClick={() => {
        if (route) {
          navigate(route);
        }
      }}  
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}{" "}
      {/* Ensure icon is rendered only if provided */}
      {children}
    </div>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { darkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={cn(
      "w-full flex items-center px-6 py-4 transition-all duration-300 z-50",
      isScrolled ? "fixed top-0 left-0 right-0 bg-white shadow-sm backdrop-blur-sm bg-opacity-30" : ""
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo className="h-8 w-8 text-purple-600" />

          <div className="hidden md:flex items-center gap-2">


            <NavItem active={currentPath === "/swap"} icon={Repeat2} route="/swap">
              Swap
            </NavItem>
            <NavItem active={currentPath === "/liquidity"} icon={Database} route="/liquidity">
              Liquidity
            </NavItem>
            <NavItem active={currentPath === "/yield"} icon={PieChart} route="/yield">
              Yield
            </NavItem>
            <NavItem active={currentPath === "/explorer"} icon={Search} route="/explorer">
                Explorer
            </NavItem>
            <NavItem active={currentPath === "/ranks"} icon={Star} route="/ranks">
              Ranks
            </NavItem>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 flex items-center justify-center rounded-full text-violet-500 bg-violet-50 transition-colors hover:bg-secondary/80"
          >
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 flex items-center justify-center rounded-full text-violet-500 bg-violet-50 transition-colors hover:bg-secondary/80"
          >
            <Clock className="h-4 w-4" />
          </button>
          <div className="connect-button flex items-center gap-2 bg-violet-50 text-violet-500 font-semibold px-4 py-2 rounded-full">
            <Wallet className="w-3.5 h-3.5" />
            Connect wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
