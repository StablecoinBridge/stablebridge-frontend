import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-[#090909] to-[#0d1f16] overflow-hidden border-t-4 border-l-4 border-mint">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="star w-4 h-4 top-[15%] left-[10%] animate-pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#333" />
          </svg>
        </div>
        <div className="star w-6 h-6 top-[35%] left-[25%] animate-float">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#333" />
          </svg>
        </div>
        <div className="star w-5 h-5 top-[10%] right-[15%] animate-pulse delay-300">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#333" />
          </svg>
        </div>
        <div className="star w-7 h-7 bottom-[30%] right-[10%] animate-float delay-700">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#333" />
          </svg>
        </div>
        <div className="star w-6 h-6 bottom-[15%] left-[15%] animate-pulse delay-500">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#333" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 pb-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8" 
              variants={itemVariants}
            >
              Transfer
              <br />
              stablecoins
              <br />
              between EVM
              <br />
              & non-EVM chains
            </motion.h1>
            <motion.div variants={itemVariants}>
              <a 
                href="#" 
                className="bg-mint text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-mint-dark transition-colors"
              >
                Swap stablecoins <span className="ml-2">→</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 hero-graphic relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src="/lovable-uploads/6988b2b9-5a66-44aa-bb56-256a734fa6ab.png" 
              alt="Cryptocurrency transfer illustration" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;