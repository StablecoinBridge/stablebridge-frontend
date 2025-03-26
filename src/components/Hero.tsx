import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between z-10 pt-12 lg:pt-24 relative">
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
            <br />
            & non-EVM chains
          </h1>
          
          <motion.button
            className="flex items-center gap-2 bg-allbridge-green text-black py-3 px-6 rounded-full font-medium hover:bg-allbridge-darkGreen transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Main Device */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="rounded-xl bg-allbridge-gray overflow-hidden shadow-lg green-glow">
          <div className="p-3 bg-black rounded-t-xl">
            <div className="w-2 h-2 rounded-full bg-red-500 inline-block mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 inline-block mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 inline-block"></div>
          </div>
          <div className="p-4 text-xs text-white">
            <div className="mb-4">
              <div className="text-allbridge-green mb-1">Messaging</div>
              <div className="flex justify-between mb-1">
                <span className="text-white/60">Lorem ipsum</span>
                <span className="text-white">+0.001</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-allbridge-green mb-1">Extra gas</div>
              <div className="flex justify-between mb-1">
                <span className="text-white/60">Lorem ipsum</span>
                <span className="text-white">+0.08</span>
              </div>
            </div>
            <div>
              <div className="text-allbridge-green mb-1">Relayer fee</div>
              <div className="flex justify-between mb-1">
                <span className="text-white/60">Lorem ipsum</span>
                <span className="text-white">+0.004</span>
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-white/10">
              <div className="text-center text-sm text-allbridge-green">Send</div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Left Coin Stack */}
      <motion.div 
        className="absolute top-1/2 left-[15%] transform -translate-y-1/4 w-[80px] md:w-[100px] z-10"
        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-teal-500 rounded-full transform -rotate-12"></div>
          <div className="absolute top-1 left-0 w-full h-full bg-teal-600 rounded-full transform -rotate-6"></div>
          <div className="absolute top-2 left-0 w-full h-full bg-teal-700 rounded-full"></div>
          <div className="relative pt-6 pb-4 text-center">
            <span className="text-white font-bold">Pool</span>
          </div>
        </div>
      </motion.div>
      
      {/* Right Coin Stack */}
      <motion.div 
        className="absolute bottom-1/4 right-[10%] w-[80px] md:w-[100px] z-10"
        animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full transform rotate-12"></div>
          <div className="absolute top-1 left-0 w-full h-full bg-blue-600 rounded-full transform rotate-6"></div>
          <div className="absolute top-2 left-0 w-full h-full bg-blue-700 rounded-full"></div>
          <div className="relative pt-6 pb-4 text-center">
            <span className="text-white font-bold">Pool</span>
          </div>
        </div>
      </motion.div>
      
      {/* Other Floating Cards */}
      <motion.div 
        className="absolute top-[15%] left-[60%] w-[100px] md:w-[120px] bg-black rounded-lg p-2 shadow-lg"
        animate={{ y: [0, -7, 0], x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <div className="rounded-full w-6 h-6 bg-purple-500 mb-1 flex items-center justify-center">
          <span className="text-white text-xs">Ξ</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[20%] left-[20%] w-[100px] md:w-[120px] bg-black rounded-lg p-2 shadow-lg"
        animate={{ y: [0, 7, 0], x: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.7 }}
      >
        <div className="rounded-full w-6 h-6 bg-cyan-500 mb-1 flex items-center justify-center">
          <span className="text-white text-xs">S</span>
        </div>
      </motion.div>
      
      {/* Green Flow Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[150px] flex items-center justify-center">
        <motion.div 
          className="w-full h-[60px] md:h-[80px]"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M100,50 C200,120 300,0 400,50 C500,100 600,0 700,50" 
              stroke="#36D9AC" 
              strokeWidth="8" 
              strokeLinecap="round"
              className="green-glow"
            />
          </svg>
        </motion.div>
      </div>
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
