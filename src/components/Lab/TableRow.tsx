import React from "react";
import type { LabRequest } from "../../types/lab";

interface TableRowProps {
  request: LabRequest;
}

const TableRow: React.FC<TableRowProps> = ({ request }) => {
  return (
    <tr className="hover:bg-slate-50/80 dark:hover:bg-gray-750/50 transition-colors border-b border-slate-100 dark:border-gray-700/60 text-xs">
      <td className="py-3 font-semibold text-slate-900 dark:text-white">{request.patientName}</td>
      <td className="text-slate-700 dark:text-slate-300">{request.testName}</td>
      <td>
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
          request.priority === "urgent"
            ? "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400"
            : request.priority === "high"
            ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
            : "bg-slate-100 text-slate-700 dark:bg-gray-700 dark:text-slate-300"
        }`}>
          {request.priority}
        </span>
      </td>
      <td>
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
          request.status === "completed"
            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
            : request.status === "processing"
            ? "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400"
            : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
        }`}>
          {request.status}
        </span>
      </td>
      <td className="text-slate-500 dark:text-slate-400">{request.date}</td>
    </tr>
  );
};

export default TableRow;
