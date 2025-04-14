import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Smartphone,
  CheckCircle,
  LayoutGrid,
  Lock,
  Landmark,
  BookOpen,
  Wallet,
  BookText,
  Twitter,
  MessageSquare,
  Youtube,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const NavItem = ({
  label,
  active,
  route,
}: {
  label: string;
  active: boolean;
  route: string;
}) => {
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
          ? "border border-purple-600 text-white hover:border-purple-500"
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

  const menuItems = [
    {
      icon: <Smartphone size={18} />,
      title: "Mobile",
      description:
        "Trade 8-10x cheaper & 3x faster than any other wallets on a fully-native app.",
    },
    {
      icon: <CheckCircle size={18} />,
      title: "Verify",
      description:
        "Token verification standards to boost transparency and collaboration.",
    },
    {
      icon: <LayoutGrid size={18} />,
      title: "Portfolio",
      description:
        "Track your portfolio, across multiple wallets, in one place.",
    },
    {
      icon: <Lock size={18} />,
      title: "Lock",
      description:
        "Open-source, audited and free to release your project's tokens over time.",
    },
    {
      icon: <Landmark size={18} />,
      title: "Governance",
      description: "The first voting platform for Cats in history.",
    },
    {
      icon: <BookOpen size={18} />,
      title: "Research",
      description:
        "Deep dive into discussions and research around all things Jupiter.",
    },
    {
      icon: <Wallet size={18} />,
      title: "Onboard",
      description:
        "Buy SOL with your credit card or bridge assets from other chains.",
    },
    {
      icon: <BookText size={18} />,
      title: "Jupiter Guides",
      description: "User guides and use guides to get started.",
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={18} />, name: "Twitter" },
    { icon: <MessageSquare size={18} />, name: "Discord" },
    { icon: <Youtube size={18} />, name: "Youtube" },
    { icon: <BookOpen size={18} />, name: "Reddit" },
  ];
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
        <div className="hidden md:flex space-x-8 items-center">
          <NavItem
            label="StableBridge Core"
            active={currentPath === "/swap"}
            route="/swap"
          />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <motion.span
                className="text-white/60 cursor-pointer text-sm transition-colors hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                More
              </motion.span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <div className="p-2">
                {menuItems.map((item, i) => (
                  <DropdownItem
                    key={i}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
              <div className="border-t border-gray-800">
                <div className="flex justify-between">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex flex-col items-center px-3 py-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.icon}
                      <span className="text-xs mt-1">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
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

interface DropdownItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-100 cursor-pointer transition-colors">
      <div className="mt-0.5 text-purple-500">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-purple-700">{title}</h4>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
    </div>
  );
};
