import React from "react";
import { Shield, LifeBuoy, FileText, Twitter, Github, LightbulbIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const NavItem = ({ 
  icon: Icon, 
  text, 
  className 
}: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  text: string; 
  className?: string;
}) => {
  return (
    <a 
      href="#" 
      className={cn(
        "flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-900 transition-colors", 
        className
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </a>
  );
};

const Footer = () => {
  return (
    <nav className="w-full bg-[hsl(var(--navbar-mint))] px-4 py-3 border-b border-gray-200/20">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center w-full justify-between">
          <a href="/" className="mr-8">
            <Shield className="h-5 w-5" />
          </a>
          
          <div className="hidden md:flex items-center space-x-6 ">
            <NavItem icon={LifeBuoy} text="Support" />
            <NavItem icon={Shield} text="Allbridge" />
            <NavItem icon={FileText} text="Guides" />
            <NavItem icon={Twitter} text="Twitter" />
            <NavItem icon={Github} text="Github" />
          </div>
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <span>Need help?</span>
            <LightbulbIcon className="h-4 w-4 text-yellow-400" />
          </a>
        </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Footer;