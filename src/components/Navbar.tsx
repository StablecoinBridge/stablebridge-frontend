
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <motion.nav 
      className="w-full px-6 md:px-12 py-6 flex justify-between items-center z-10 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <span className="font-semibold text-white">Company</span>
        </motion.div>
        
        <nav className="hidden md:flex gap-8">
          <NavItem label="Allbridge Core" active={false} />
          <NavItem label="Allbridge Classic" active={false} />
        </nav>
      </div>
      
      <div className="flex items-center gap-3">
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 12.5C22.5 15 20.5 17 18 17H14C11.5 17 9.5 15 9.5 12.5C9.5 10 11.5 8 14 8H18C20.5 8 22.5 10 22.5 12.5Z" stroke="white" strokeWidth="1.5"/>
            <path d="M22.5 19.5C22.5 22 20.5 24 18 24H14C11.5 24 9.5 22 9.5 19.5C9.5 17 11.5 15 14 15H18C20.5 15 22.5 17 22.5 19.5Z" stroke="white" strokeWidth="1.5"/>
          </svg>
          <span className="ml-2 text-white font-semibold text-lg">Allbridge</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-3">
          <NavButton label="Developers" variant="outline" />
          <NavButton label="Contacts" variant="filled" />
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ label, active }: { label: string; active: boolean }) => {
  return (
    <motion.span
      className={cn(
        "text-white/60 cursor-pointer text-sm transition-colors hover:text-white",
        active && "text-white"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.span>
  );
};

const NavButton = ({ label, variant }: { label: string; variant: 'outline' | 'filled' }) => {
  return (
    <motion.button
      className={cn(
        "py-2 px-5 rounded-full text-sm font-medium transition-colors",
        variant === 'outline' 
          ? "border border-gray-700 text-white hover:border-gray-500" 
          : "bg-white text-black hover:bg-gray-100"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

export default Navbar;