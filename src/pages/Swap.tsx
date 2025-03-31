import { useEffect, useState } from "react";
import TransactionCard from "@/components/swap/TransactionCard";
import BestRatesCard from "@/components/swap/BestRatesCard";
import DetailsCard from "@/components/swap/DetailsCard";
import { Settings, Star } from "lucide-react";
import Header from "@/components/liquidity/Header";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import Footer from "@/components/liquidity/Footer";

const Swap = () => {
  const { darkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCards, setActiveCards] = useState<{ [key: string]: boolean }>({
    rates: false,
    details: false,
  });

  const toggleCard = (card: string) => {
    setActiveCards((prev) => ({
      ...prev,
      [card]: !prev[card],
    }));
  };
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
        "min-h-screen justify-between flex flex-col",
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-white to-purple-300 text-foreground"
      )}
    >
      <Header />
      <div
        className={cn(
          "container flex flex-col items-center justify-center relative max-w-5xl px-4 md:px-6 lg:px-8 py-4 md:py-8 mx-auto transition-all duration-300",
          isScrolled ? "mt-[72px]" : ""
        )}
      >
        {/* Left side icons */}
        <div
          className={`absolute top-2 transition-all duration-300 z-20 ${
            activeCards.rates ? "left-14" : "left-44"
          }`}
        >
          <button
            onClick={() => toggleCard("rates")}
            className={`p-3 rounded-full bg-white shadow-md transition-all hover:shadow-lg ${
              activeCards.rates ? "text-purple-600 " : "text-purple-700"
            }`}
          >
            <Star size={20} />
          </button>
        </div>

        {/* Right side icon */}
        <div
          className={`absolute right-10 transition-all top-2 duration-300 z-20 ${
            activeCards.details ? "right-10" : "right-54"
          }`}
        >
          <button
            onClick={() => toggleCard("details")}
            className={`p-3 rounded-full bg-white shadow-md transition-all hover:shadow-lg ${
              activeCards.details ? "text-purple-600" : "text-purple-700"
            }`}
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Left popup card */}
        <div
          className={`absolute -left-24 top-6 transition-all duration-300 z-10 ${
            activeCards.rates
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10 pointer-events-none"
          }`}
        >
          <BestRatesCard />
        </div>

        {/* Right popup card */}
        <div
          className={`absolute -right-26 top-10 transition-all duration-300 z-10 ${
            activeCards.details
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none"
          }`}
        >
          <DetailsCard />
        </div>

        {/* Center card */}
        <div className="z-10">
          <TransactionCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Swap;
