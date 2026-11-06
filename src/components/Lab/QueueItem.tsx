import React from "react";

interface QueueItemProps {
  label: string;
  count: number;
}

const QueueItem: React.FC<QueueItemProps> = ({
  label,
  count,
}) => (
  <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-gray-750 border border-slate-100 dark:border-gray-700">
    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{label}</span>
    <span className="bg-primary/10 text-primary-600 dark:text-primary-400 text-xs px-2.5 py-0.5 rounded-full font-bold">
      {count}
    </span>
  </div>
);

export default QueueItem;
