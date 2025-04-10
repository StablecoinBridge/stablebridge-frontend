import React from "react";
import TransferRow from "./TransferRow";
import { useGetStableCoinsTransfer } from "@/lib/api/coins";
import { useSearchParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

interface TransferListProps {
  currentPage: number;
}

const TransferList: React.FC<TransferListProps> = ({}) => {
  const [searchParams] = useSearchParams();
  const selectedChain = searchParams.get("chain");
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");
  const { data: { items = [] } = {}, isLoading } = useGetStableCoinsTransfer({
    chain: selectedChain,
    page,
    limit,
  });
  console.log(items);
  // Display 10 items per page

  const currentTransfers = items.map((transfer: any) => ({
    ...transfer,
    status: (transfer.status === "success" ||
    transfer.status === "pending" ||
    transfer.status === "failed"
      ? transfer.status
      : "pending") as "pending" | "success" | "failed",
    from: {
      ...transfer.from,
      tokenType: "USDT",
      amount: transfer.fromAmount,
      address: transfer.fromAddress,
      iconBg: "bg-[#3b82f6]",
      icon: transfer.fromChainSymbol,
    },
    to: {
      ...transfer.to,
      tokenType: "USDC",
      amount: transfer.toAmount,
      address: transfer.toAddress,
      iconBg: "bg-[#3b82f6]",
      icon: transfer.toChainSymbol,
    },
  }));

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full h-12 rounded-lg" />
              <Skeleton className="w-full h-12 rounded-lg" />
              <Skeleton className="w-full h-12 rounded-lg" />
            </div>
          ))}

        </div>
      ) : (
        <>
          {currentTransfers.map((transfer: any, index: number) => (
            <TransferRow key={index} transfer={transfer} />
          ))}
        </>
      )}
    </div>
  );
};

export default TransferList;
