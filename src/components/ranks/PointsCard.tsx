import { cn } from "@/lib/utils";

type PointsCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const PointsCard = ({ icon, title, description, className }: PointsCardProps) => {
  return (
    <div className={cn("flex items-start p-3 rounded-xl", className)}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center text-violet-600">
        {icon}
      </div>
      <div className="ml-3">
        <h3 className="font-medium text-violet-800">{title}</h3>
        <p className="text-violet-600 text-xs font-medium">{description}</p>
      </div>
    </div>
  );
};

export default PointsCard;
