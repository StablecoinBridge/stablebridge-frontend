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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark-bg text-white"
    >
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Developers />
    </motion.div>
  );
};

export default Home;