import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  action,
  className = "",
}) => {
  return (
    <div className={`flex justify-between items-center mb-4 ${className}`}>
      <div>
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;