import Header from "@/components/liquidity/Header";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import PoolsHeader from "@/components/liquidity/PoolsHeader";
import TransferListHeader from "@/components/explorer/TransferListHeader";
import TransferList from "@/components/explorer/TransferList";
import Pagination from "@/components/explorer/Pagination";
import { Search } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Footer from "@/components/liquidity/Footer";

const Explorer: React.FC = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Simulating multiple pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={cn(
        "min-h-screen flex flex-col",
        darkMode 
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100" 
          : "bg-gradient-to-b from-white to-purple-300 text-foreground"
      )}>
        <Header />
        <div
          className={cn(
            "container max-w-5xl px-4 md:px-6 lg:px-8 py-4 md:py-8 mx-auto transition-all duration-300",
            isScrolled ? "mt-[72px]" : ""
          )}
        >
          <PoolsHeader
            title="Explorer"
            icon={<Search className={cn(
              darkMode ? "text-violet-400" : "text-violet-600"
            )} />}
          />

          <div className={cn(
            "w-full md:max-w-4xl rounded-3xl shadow-sm p-6",
            darkMode 
              ? "bg-gray-800 border border-gray-700" 
              : "bg-white"
          )}>
            <div className="flex items-center justify-between mb-6">
              <TransferListHeader />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
            <TransferList currentPage={currentPage} />
            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explorer;
