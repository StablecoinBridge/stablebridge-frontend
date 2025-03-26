import { motion } from "framer-motion";

const Stats = () => {
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full bg-dark-bg relative py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-y-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Cross lines */}
          <div className="hidden md:block">
            <div className="cross-line w-px h-full left-1/2 top-0"></div>
            <div className="cross-line w-full h-px left-0 top-1/2"></div>
            <div className="absolute w-8 h-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-bg rounded-full border border-gray-700 z-10"></div>
            <motion.div 
              className="absolute w-6 h-6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#333" />
              </svg>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div className="text-center md:text-left" variants={statVariants}>
            <p className="text-gray-text text-xl mb-2">Unique wallets</p>
            <p className="stats-value text-mint">875,341</p>
          </motion.div>
          
          <motion.div className="text-center md:text-right" variants={statVariants}>
            <p className="text-gray-text text-xl mb-2">TVL</p>
            <p className="stats-value text-dollar">$45,795,959</p>
          </motion.div>
          
          <motion.div className="text-center md:text-left" variants={statVariants}>
            <p className="text-gray-text text-xl mb-2">Total transfers</p>
            <p className="stats-value text-mint">1,728,627</p>
          </motion.div>
          
          <motion.div className="text-center md:text-right" variants={statVariants}>
            <p className="text-gray-text text-xl mb-2">Blockchains</p>
            <p className="stats-value text-blue-accent">21</p>
          </motion.div>

          {/* Floating icons near transfer stats */}
          <motion.div 
            className="absolute left-1/4 -translate-x-1/2 top-[55%] md:block hidden"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/lovable-uploads/168ca6b6-2e47-4987-9259-46a4f155ec6b.png" alt="Transfer icon" className="w-10 h-10 opacity-80" />
          </motion.div>
        </motion.div>

        {/* Blockchain icons row */}
        <motion.div 
          className="mt-24 flex justify-between items-center overflow-x-auto pb-4 space-x-8 md:space-x-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="blockchain-icon flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5"/>
                <path d="M8 12L12 16L16 12M12 8L12 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
