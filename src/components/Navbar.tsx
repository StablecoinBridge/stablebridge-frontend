import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const NavItem = ({ label, active, route }: { label: string; active: boolean; route: string }) => {
  const navigate = useNavigate();
  return (
    <motion.span
      className={cn(
        "text-white/60 cursor-pointer text-sm transition-colors hover:text-white",
        active && "text-white"
      )}
      onClick={() => navigate(route)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.span>
  );
};

const NavButton = ({
  label,
  variant,
}: {
  label: string;
  variant: "outline" | "filled";
}) => {
  return (
    <motion.button
      className={cn(
        "py-2 px-5 rounded-full text-sm font-medium transition-colors",
        variant === "outline"
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

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-5 px-6 md:px-10 flex items-center justify-between relative z-50"
    >
      <div className="flex items-center space-x-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <a href="/" className="text-white font-semibold">
            Company
          </a>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          <NavItem label="StableBridge Core" active={currentPath === "/liquidity"} route="/liquidity" />
          <NavItem label="StableBridge Classic" active={currentPath === "/classic"} route="/classic" />
        </div>
      </div>

      <div className="hidden md:block">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="text-white font-semibold ml-2">StableBridge</span>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <NavButton label="Developers" variant="outline" />
        <NavButton label="Contacts" variant="filled" />
      </div>
    </motion.header>
  );
};

export default Navbar;
