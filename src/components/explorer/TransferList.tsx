import React from "react";
import TransferRow from "./TransferRow";
import { transferData } from "@/data/transferData";

interface TransferListProps {
  currentPage: number;
}

const TransferList: React.FC<TransferListProps> = ({ currentPage }) => {
  // Display 10 items per page
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransfers = transferData.map(transfer => ({
    ...transfer,
    status: (transfer.status === "success" || transfer.status === "pending" || transfer.status === "failed" 
      ? transfer.status 
      : "pending") as "pending" | "success" | "failed",
    from: {
      ...transfer.from,
      tokenType: transfer.from.tokenType as "USDC" | "USDT"
    },
    to: {
      ...transfer.to,
      tokenType: transfer.to.tokenType as "USDC" | "USDT"
    }
  })).slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-4">
      {currentTransfers.map((transfer, index) => (
        <TransferRow key={index} transfer={transfer} />
      ))}
    </div>
  );
};

export default TransferList;