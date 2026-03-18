import React from "react";
import { Card } from "antd";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconBg: string;     
  iconColor: string;  
  valueColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor,
  valueColor,
}) => {
  return (
    <Card className="rounded-2xl shadow-sm dark:bg-gray-800 hover:shadow-md transition-all cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl ${iconBg}`}>
          <Icon size={20} className={iconColor} />
        </div>

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h3 className={`text-xl font-semibold ${valueColor || ""}`}>
            {value}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;