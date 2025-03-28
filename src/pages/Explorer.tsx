import Header from "@/components/liquidity/Header";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import PoolsHeader from "@/components/liquidity/PoolsHeader";
import TransferListHeader from "@/components/explorer/TransferListHeader";
import TransferList from "@/components/explorer/TransferList";
import Pagination from "@/components/explorer/Pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Simulating multiple pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          <PoolsHeader
            title="Explorer"
            icon={<Search className="text-violet-600" />}
          />

          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-sm p-6">
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
    </>
  );
};

export default Explorer;
