import { motion } from "framer-motion";

const Developers = () => {
  return (
    <div className="w-full bg-dark-bg pt-10 pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Developers
        </motion.h2>

        <motion.div 
          className="w-full rounded-2xl overflow-hidden bg-card-dark relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-full p-10 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Allbridge Core</h3>
                <p className="text-gray-text mb-8 max-w-md">
                  Bring cross-chain transfers directly to your protocol
                </p>
                <a href="#" className="border border-mint text-mint font-medium px-6 py-3 rounded-full flex items-center justify-center hover:bg-mint/10 transition-all duration-300">
                  Allbridge Core Docs
                </a>
              </div>
              
              <div className="relative md:w-1/2 flex justify-end">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-mint/10 md:block hidden"
                  animate={{ 
                    opacity: [0.4, 0.6, 0.4] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden hidden md:block">
            <img 
              src="/lovable-uploads/628d0011-a4a4-4ec4-af51-57e9fe72383c.png" 
              alt="Allbridge logo close-up" 
              className="h-full w-full object-cover object-left opacity-30"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Developers;