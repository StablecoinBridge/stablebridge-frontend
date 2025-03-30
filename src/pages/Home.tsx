import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Developers from "@/components/Developers";
import Ecosystems from "@/components/Ecosystem";
import Enabling from "@/components/Enabling";

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
    <motion.div 
      className="min-h-[30vh] backgroundImage px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#000000] mt-4 rounded-t-2xl">
        <Navbar />
        <Hero />
        <Stats />
        <Mission />
        <Developers />
        <Ecosystems/>
        <Enabling />
      </div>
    </motion.div>
  );
};

export default Home;