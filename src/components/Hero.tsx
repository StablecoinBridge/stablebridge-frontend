import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from '../assets/stable.gif'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between z-10 pt-12 lg:pt-24 relative md:max-w-5xl">
        <motion.div
          className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Transfer
            <br />
            stablecoins
            <br />
            between EVM
            <br />& non-EVM chains
          </h1>

          <motion.button
            className="bg-purple-800 flex items-center gap-2 text-white py-3 px-6 rounded-full font-medium hover:bg-allbridge-darkGreen "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/swap")}
          >
            Swap stablecoins <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <IllustrationComponent />
        </motion.div>
      </div>

      <BackgroundElements />
    </div>
  );
};

const IllustrationComponent = () => {
  return (
    <div className="relative w-full h-full -translate-y-10">
      <img src={logo} alt="Hero" className="w-full h-full object-cover" />
    </div>
  );
};

const BackgroundElements = () => {
  return (
    <div className="parallax-bg">
      {/* Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 14 + 6}px`,
            height: `${Math.random() * 14 + 6}px`,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M12,1L15.36,8.9L24,9.92L17.5,15.34L19.2,24L12,19.5L4.8,24L6.5,15.34L0,9.92L8.64,8.9L12,1Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
