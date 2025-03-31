import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownUp, ArrowRight, Coins, Cylinder, Flame } from "lucide-react";
import Header from "@/components/liquidity/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/liquidity/Footer";

import { useTheme } from "@/contexts/ThemeContext";

const Swap = () => {

      
  const { darkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.backgroundColor = "#090909";


    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  return (

    <div
      className={cn(
        "min-h-screen flex flex-col justify-between",
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-white to-purple-300 text-foreground"
      )}
    >
      <Header />
      <div
        className={cn(
          "w-96  mx-auto rounded-4xl my-4 min-h-125 items-center border pe-6 py-4 z-50 backdrop-blur-lg bg-purple shadow ",
          isScrolled ? "mt-[72px]" : ""
        )}
      >
        <div className="grid grid-cols-2 gap-4 p-2 ">
          <div className="">
            <h1 className="text-2xl ps-6 mt-4"> 0.0</h1>

          </div>
          <div className="flex w-full">
            <motion.button
              className="w-100 shadow border bg-purple flex items-center gap-2 bg-allbridge-green text-black py-1 px-6 rounded-full hover:bg-allbridge-darkGreen transition-colors float-right"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-5">
                <img src="path/to/image.jpg" />
                <div>
                  <strong>USDT</strong>
                  <br />
                  <span className="text-[10px]">Arbrtium</span>
                </div>
              </div>{" "}
              <ArrowRight size={18} />
            </motion.button>
          </div>
          <div className="connect-button text-center bg-violet-50 text-violet-500 font-semibold mx-3 py-2 rounded-full">
            Connect wallet
          </div>
        </div>
        <div className="flex items-center  text-violet-500 gap-30 sm:flex sm:flex-row-reverse py-3 ">
          <strong>~1min</strong>
          <div>
            <ArrowDownUp size={18}/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-2 ">
          <div className="">
            <h1 className="text-2xl ps-6 mt-4"> 0.0</h1>
          </div>
          <div className="flex w-full">
            <motion.button
              className=" mx-auto w-64 shadow border bg-purple flex items-center gap-2 bg-allbridge-green text-black py-1 px-6 rounded-full font-medium hover:bg-allbridge-darkGreen transition-colors float-right"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-5">
                <img src="path/to/image.jpg" />
                <div>
                  <strong>USDT</strong>
                  <br />
                  <span className="text-[10px]">Arbrtium</span>
                </div>
              </div>{" "}
              <ArrowRight size={18} />
            </motion.button>
          </div>
          <div className="connect-button text-center bg-violet-50 text-violet-500 font-semibold  py-2 rounded-full">
            Connect wallet
          </div>
          <div className="connect-button text-center border text-violet-500 font-semibold  py-2 rounded-full">
            Paste address
          </div>
        </div>

        <div className=" w-full grid grid-cols-2 mt-2 gap-4 p-2 bg-violet-50 text-violet-500 mx-3 rounded-2xl">
          <div className="flex items-center ps-3 gap-4 py-1 ">
            <Flame size={18} />
            <div>
              <strong>Extar Gas</strong>
            </div>
          </div>

          <div className="flex flex-row-reverse  items-center pe-5">
            <Coins/>
          </div>
        </div>
        <div className=" w-full grid grid-cols-2 mt-2 gap-4 p-2 bg-violet-50 text-violet-500 mx-3 rounded-2xl">
          <div className="flex items-center ps-3 gap-4 py-1 ">
            <Cylinder size={18}/>
            <div>
              <strong>Relayer fee</strong>
            </div>
          </div>

          <div className="flex flex-row-reverse  items-center pe-5">
            <Coins/>
          </div>
        </div>

        <button className=" w-full mt-5 connect-button text-center bg-purple-50 text-white-500 font-semibold mx-3 py-2 rounded-full">
         <span className=" text-violet-500">Send</span>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Swap;
