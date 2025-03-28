import Header from "@/components/liquidity/Header";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import PoolsHeader from "@/components/liquidity/PoolsHeader";
import { Search } from "lucide-react";
const Explorer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-300 text-foreground flex flex-col">
        <Header />
        <div
          className={cn(
            "container max-w-5xl px-4 md:px-6 lg:px-8 py-4 md:py-8 mx-auto transition-all duration-300",
            isScrolled ? "mt-[72px]" : ""
          )}
        >
          <PoolsHeader title="Explorer" icon={<Search className="text-violet-600" />} />

          <div className="grid grid-cols-1 gap-6 mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default Explorer;
