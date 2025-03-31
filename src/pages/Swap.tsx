import { useState } from "react";
import TransactionCard from "@/components/swap/TransactionCard";
import BestRatesCard from "@/components/swap/BestRatesCard";
import DetailsCard from "@/components/swap/DetailsCard";
import { Settings, Star } from "lucide-react";

const Swap = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#edf5f3]">
      <div className="relative max-w-5xl w-full flex items-center justify-center">
        {/* Left side icons */}
        <div className="absolute left-14 top-2 flex flex-col gap-4 z-20">
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
        <div className="absolute right-10 top-2 z-20">
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
    </div>
  );
};

export default Swap;
