import type { LucideIcon } from "lucide-react";

interface QuickButtonProps {
  label: string;
  icon: LucideIcon;
}

const QuickButton: React.FC<QuickButtonProps> = ({
  label,
  icon: Icon,
}) => (
  <button className="w-full flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-xl transition">
    <Icon size={18} />
    {label}
  </button>
);

export default QuickButton;