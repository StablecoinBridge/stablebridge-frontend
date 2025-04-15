import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Header from "@/components/liquidity/Header";
import Footer from "@/components/liquidity/Footer";

const History = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          "container max-w-6xl px-4 md:px-6 lg:px-8 py-4 md:py-8 mx-auto transition-all duration-300",
          isScrolled ? "mt-[72px]" : ""
        )}
      >
        {/* <Index /> */}
      </div>
      <Footer />
    </div>
  );
};

export default History;
