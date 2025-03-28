
import { ListFilter } from "lucide-react";

const TransferListHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ListFilter size={20} className="text-[#6d8a81]" />
        <h1 className="text-lg font-medium text-[#2d4b42]">All transfers</h1>
      </div>
    </div>
  );
};

export default TransferListHeader;
