import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#090909";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center">
        <motion.h1 
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          This page doesn't exist in this blockchain.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/" className="bg-mint text-black font-medium px-6 py-3 rounded-full flex items-center justify-center hover:bg-mint-dark transition-all duration-300">
            Return Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
