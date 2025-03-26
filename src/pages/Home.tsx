import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Developers from "@/components/Developers";

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.backgroundColor = "#090909";
    
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  return (
    
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="min-h-screen bg-[#090909] text-white"
    // >
    //   <Navbar />
    //   <Hero />
    //   <Stats />
    //   <Mission />
    //   <Developers />
    // </motion.div>
    <motion.div 
      className="min-h-screen bg-allbridge-black overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-8 bg-mint"></div>
      <div className="bg-black">
        <Navbar />
        <Hero />
      </div>
      
    </motion.div>
  );
};

export default Home;