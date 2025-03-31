import { motion } from "framer-motion";
import { Button } from "./ui/button";
import logo from '../assets/logo-purple.png'
const Mission = () => {
  return (
    <div className="w-full py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 md:max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              StableBridge mission  
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-text leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Our mission is to make the blockchain world borderless 
              by providing a cross-chain infrastructure to freely move 
              assets between EVM with non-EVM blockchains
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Button className="bg-white text-black text-lg font-medium w-3/5 h-[60px] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
                Discover products
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full max-w-md">
              <img 
                src={logo} 
                alt="Allbridge logo" 
                className="w-full h-auto object-contain"
              />

              {/* Animated decorative elements */}
              <motion.div 
                className="absolute -top-10 right-10"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <div className="w-8 h-8 bg-mint rounded-full blur-md opacity-60"></div>
              </motion.div>

              <motion.div 
                className="absolute bottom-0 -left-10"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="w-10 h-10 bg-mint rounded-full blur-md opacity-50"></div>
              </motion.div>

              <motion.div 
                className="absolute bottom-20 right-0"
                animate={{ 
                  y: [0, 6, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="w-6 h-6 bg-blue-accent rounded-full blur-md opacity-70"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;