import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
}) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer p-5 flex justify-between items-center">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">
        {value}
      </h3>
    </div>
    <Icon className="text-primary" size={22} />
  </div>
);

export default StatCard;