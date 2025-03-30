import { cn } from "@/lib/utils";

type PlayerRowProps = {
  rank: number;
  name: string;
  score: string;
  trophy: "gold" | "silver" | "bronze" | null;
};

const PlayerRow = ({ rank, name, score, trophy }: PlayerRowProps) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-between py-2 px-4 rounded-full bg-white border border-gray-100",
        trophy === "gold" && "bg-amber-50/60",
        trophy === "silver" && "bg-slate-50/60",
        trophy === "bronze" && "bg-orange-50/60"
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-gray-500 font-medium text-sm w-5 text-right">{rank}.</span>
        <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <img 
            src={`https://api.dicebear.com/7.x/bottts/svg?seed=${name}`} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-medium text-violet-800 text-sm">{name}</span>
        {trophy && (
          <div className="ml-1">
            {trophy === "gold" && (
              <div className="text-amber-500">
                <span className="text-xl">🏆</span>
              </div>
            )}
            {trophy === "silver" && (
              <div className="text-slate-400">
                <span className="text-xl">🏆</span>
              </div>
            )}
            {trophy === "bronze" && (
              <div className="text-amber-700">
                <span className="text-xl">🏆</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium text-violet-900 text-sm">{score}</span>
        <div className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center">
          <span className="text-violet-700 text-xs">₮</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerRow;