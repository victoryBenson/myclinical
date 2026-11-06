import React from "react";
import {
  ClipboardList,
  FlaskConical,
  Clock,
  CheckCircle2,
  PlusCircle,
  Activity,
  FileCheck2,
} from "lucide-react";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";

import { mockRequests } from "../../data/lab.mock";
import TableRow from "../../components/Lab/TableRow";
import QueueItem from "../../components/Lab/QueueItem";
import QuickButton from "../../components/Lab/QuickButton";
import StatsCard from "../../components/ui/StatsCard";

const LabDashboard: React.FC = () => {
  const navigate = useNavigate();
  const total = mockRequests.length;
  const waiting = mockRequests.filter((r) => r.status === "waiting").length;
  const processing = mockRequests.filter((r) => r.status === "processing").length;
  const completed = mockRequests.filter((r) => r.status === "completed").length;

  return (
    <div className="p-6 space-y-6">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-5 lg:p-6 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary/10 px-2.5 py-0.5 rounded-full">
              Pharmacy & Diagnostics
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
              <CheckCircle2 size={12} /> Pathology Lab Online
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <FlaskConical className="h-6 w-6 text-primary" />
            Medical Laboratory & Diagnostics Control
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Real-time accessioning, specimen analysis queue, quality control telemetry and diagnostic verifications
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Tag color="purple" className="font-semibold text-xs py-1 px-3 rounded-lg">
            ANALYZERS CONNECTED
          </Tag>
        </div>
      </div>

      {/* Balanced 4-Card Operational Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Test Requests"
          value={total}
          icon={ClipboardList}
          iconBg="bg-primary-soft dark:bg-primary/20"
          iconColor="text-primary-dark dark:text-primary-300"
        />

        <StatsCard
          title="Specimens Waiting"
          value={waiting}
          icon={Clock}
          iconBg="bg-amber-50 dark:bg-amber-950/40"
          iconColor="text-amber-600 dark:text-amber-400"
          valueColor="text-amber-600 dark:text-amber-400"
        />

        <StatsCard
          title="In Processing / Analysis"
          value={processing}
          icon={FlaskConical}
          iconBg="bg-sky-50 dark:bg-sky-950/40"
          iconColor="text-sky-600 dark:text-sky-400"
          valueColor="text-sky-600 dark:text-sky-400"
        />

        <StatsCard
          title="Verified & Completed"
          value={completed}
          icon={CheckCircle2}
          iconBg="bg-emerald-50 dark:bg-emerald-950/40"
          iconColor="text-emerald-600 dark:text-emerald-400"
          valueColor="text-emerald-600 dark:text-emerald-400"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-gray-700">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Activity size={18} className="text-primary" />
                Laboratory Accession Queue Overview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Specimen staging across phlebotomy, analyzer runs and pathologist verification
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <QueueItem label="Waiting for Specimen Collection" count={waiting} />
            <QueueItem label="Under Technical Analysis" count={processing} />
            <QueueItem label="Pathology Completed & Signed" count={completed} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-6 space-y-4">
          <div className="pb-3 border-b border-slate-100 dark:border-gray-700">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Bench Quick Actions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Direct access to pathology workflows
            </p>
          </div>

          <div className="space-y-3">
            <QuickButton
              label="New Test Order"
              icon={PlusCircle}
              onClick={() => navigate("/pharmacy-diagnostics/lab-requests/new")}
            />
            <QuickButton
              label="Specimen Worklist Queue"
              icon={Clock}
              onClick={() => navigate("/pharmacy-diagnostics/lab-queue")}
            />
            <QuickButton
              label="Enter & Verify Results"
              icon={FileCheck2}
              onClick={() => navigate("/pharmacy-diagnostics/lab-results")}
            />
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100 dark:border-gray-700">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Recent Diagnostic Accessions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Latest physician orders and clinical laboratory tests
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/pharmacy-diagnostics/lab-requests")}
            className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View Full Registry →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-gray-700 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                <th className="py-3">Patient</th>
                <th>Test Ordered</th>
                <th>Priority</th>
                <th>Accession Status</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-gray-700/50">
              {mockRequests.slice(0, 6).map((request) => (
                <TableRow key={request.id} request={request} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LabDashboard;
