import React from "react";
import type { LucideIcon } from "lucide-react";

interface QuickButtonProps {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const QuickButton: React.FC<QuickButtonProps> = ({
  label,
  icon: Icon,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full flex items-center gap-3 bg-slate-50 dark:bg-gray-750 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-700 dark:text-slate-200 px-4 py-3 rounded-xl border border-slate-200/80 dark:border-gray-700 transition-all font-medium text-xs group"
  >
    <Icon size={16} className="text-primary group-hover:text-white transition-colors" />
    <span>{label}</span>
  </button>
);

export default QuickButton;
