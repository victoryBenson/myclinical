import React from "react";
import {
  BedDouble,
  AlertTriangle,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import StatsCard from "../../components/ui/StatsCard";
import SectionHeader from "../../components/ui/SectionHeader";
import { Tag } from "antd";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { COLORS } from "../../theme/themeConfig";

const huddleFeed = [
  { time: "07:30", unit: "ICU", event: "Shift Handover completed. 10/12 beds occupied. 2 ventilators active.", status: "Normal" },
  { time: "08:15", unit: "Theatre", event: "OR 1 & OR 3 running scheduled elective surgeries. OR 2 standby for trauma.", status: "Active" },
  { time: "09:00", unit: "Emergency", event: "Triage Alert: Red Priority 1 case received (MVA). Trauma team engaged.", status: "Priority" },
  { time: "09:45", unit: "Blood Bank", event: "Blood group O-negative reserve at 4 units. Request dispatched to regional center.", status: "Notice" },
];

export const HospitalDashboard: React.FC = () => {
  const chartData = [
    { time: "00:00", admissions: 2, emergency: 4 },
    { time: "04:00", admissions: 1, emergency: 3 },
    { time: "08:00", admissions: 8, emergency: 12 },
    { time: "12:00", admissions: 15, emergency: 18 },
    { time: "16:00", admissions: 11, emergency: 14 },
    { time: "20:00", admissions: 6, emergency: 9 },
  ];

  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Hospital Command Center"
        subtitle="Real-time clinical telemetry, bed availability and hospital operations feed"
        action={
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            <Tag color="green" className="font-semibold text-xs py-0.5 px-2.5">
              SYSTEM LIVE • 24/7
            </Tag>
          </div>
        }
      />

      {/* Primary Hospital Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Inpatient Occupancy"
          value="84% (168/200 Beds)"
          icon={BedDouble}
          iconBg="bg-primary-soft dark:bg-primary/20"
          iconColor="text-primary-darker dark:text-primary-300"
        />
        <StatsCard
          title="Emergency Dept Triage"
          value="14 Active (2 Critical)"
          icon={AlertTriangle}
          iconBg="bg-warning-soft dark:bg-warning-dark/30"
          iconColor="text-warning"
          valueColor="text-warning"
        />
        <StatsCard
          title="Scheduled Surgeries Today"
          value="9 Cases (3 in OR)"
          icon={HeartPulse}
          iconBg="bg-info-soft dark:bg-info-dark/30"
          iconColor="text-info"
        />
        <StatsCard
          title="Physicians & Staff on Duty"
          value="142 On Shift"
          icon={Stethoscope}
          iconBg="bg-emerald-50 dark:bg-emerald-950/40"
          iconColor="text-emerald-600"
        />
      </div>

      {/* Live Hospital Activity Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold text-base text-slate-800 dark:text-white">
                Live Admission & Emergency Intake Velocity
              </h3>
              <p className="text-xs text-slate-400">Past 24-hour hourly patient influx</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-primary" /> Admissions
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-warning" /> Emergency
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="admissions"
                stroke={COLORS.primary.DEFAULT}
                strokeWidth={2.5}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="emergency"
                stroke={COLORS.warning.DEFAULT}
                strokeWidth={2.5}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Live Clinical Events Feed */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-slate-200/80 dark:border-gray-700 space-y-3">
          <h3 className="font-bold text-sm text-slate-800 dark:text-white pb-2 border-b border-slate-100 dark:border-gray-700">
            Daily Clinical Live Stream
          </h3>
          <div className="space-y-3 max-h-72 overflow-y-auto custom-scrollbar pr-1">
            {huddleFeed.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-gray-700/60 text-xs space-y-1"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">{item.unit}</span>
                  <span className="font-mono text-[10px] text-slate-400">{item.time}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
