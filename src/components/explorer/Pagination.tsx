import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <div className="flex sm:flex-row flex-col items-center justify-end gap-1">
      <button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          currentPage === 1 ? "text-gray-300" : "text-gray-600 hover:bg-gray-100"
        )}
      >
        <ChevronsLeft size={16} />
      </button>
      
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          currentPage === 1 ? "text-gray-300" : "text-gray-600 hover:bg-gray-100"
        )}
      >
        <ChevronLeft size={16} />
      </button>
      
      <div className="px-3 text-sm text-gray-600">
        Page {currentPage}
      </div>
      
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          currentPage === totalPages ? "text-gray-300" : "text-gray-600 hover:bg-gray-100"
        )}
      >
        <ChevronRight size={16} />
      </button>
      
      <button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          currentPage === totalPages ? "text-gray-300" : "text-gray-600 hover:bg-gray-100"
        )}
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
