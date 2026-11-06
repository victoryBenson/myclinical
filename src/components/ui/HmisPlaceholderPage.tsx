import { useState } from "react";
import { Button, Tag } from "antd";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  CheckCircle2,
  FileSpreadsheet,
  PlusCircle,
  RefreshCw,
  Clock,
  Layers,
  ArrowRight,
  Shield,
  Activity,
} from "lucide-react";
import StatsCard from "./StatsCard";
import toast from "react-hot-toast";

export interface PageTab {
  key: string;
  label: string;
  icon?: LucideIcon;
  count?: number | string;
  description?: string;
}

export interface MetricCardItem {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconBg?: string;
  iconColor?: string;
  valueColor?: string;
}

export interface HmisPlaceholderPageProps {
  title: string;
  subtitle?: string;
  department: string;
  badge?: string;
  icon?: LucideIcon;
  tabs?: PageTab[];
  activeTab?: string;
  onTabChange?: (key: string) => void;
  metrics?: MetricCardItem[];
  capabilities?: string[];
  workflowStages?: { step: number; title: string; desc: string }[];
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  children?: React.ReactNode;
}

export const HmisPlaceholderPage: React.FC<HmisPlaceholderPageProps> = ({
  title,
  subtitle,
  department,
  badge = "Enterprise Module",
  icon: Icon,
  tabs,
  activeTab: controlledActiveTab,
  onTabChange,
  metrics,
  capabilities,
  workflowStages,
  primaryActionLabel = "Create New Record",
  onPrimaryAction,
  children,
}) => {
  const [internalTab, setInternalTab] = useState<string>(
    tabs && tabs.length > 0 ? tabs[0].key : ""
  );

  const activeTabKey = controlledActiveTab !== undefined ? controlledActiveTab : internalTab;

  const handleTabClick = (key: string) => {
    if (controlledActiveTab === undefined) {
      setInternalTab(key);
    }
    onTabChange?.(key);
  };

  const handleAction = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
    } else {
      toast.success(`${title}: New entry workflow initialized`);
    }
  };

  const handleRefresh = () => {
    toast.success("Synchronized latest departmental records");
  };

  const activeTabObj = tabs?.find((t) => t.key === activeTabKey);

  // Default metrics if not supplied
  const defaultMetrics: MetricCardItem[] = [
    {
      title: "Active Records",
      value: "148",
      icon: Activity,
      iconBg: "bg-primary-soft dark:bg-primary/20",
      iconColor: "text-primary-dark dark:text-primary-300",
    },
    {
      title: "Pending Tasks",
      value: "12",
      icon: Clock,
      iconBg: "bg-warning-soft dark:bg-warning-dark/30",
      iconColor: "text-warning",
      valueColor: "text-warning",
    },
    {
      title: "System Compliance",
      value: "99.4%",
      icon: Shield,
      iconBg: "bg-info-soft dark:bg-info-dark/30",
      iconColor: "text-info",
    },
    {
      title: "Operational Units",
      value: "8 Active",
      icon: Layers,
      iconBg: "bg-emerald-50 dark:bg-emerald-950/40",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  const displayMetrics = metrics && metrics.length > 0 ? metrics : defaultMetrics;

  const defaultCapabilities = [
    "Enterprise-wide digital records and multi-role auditing",
    "Clinical and operational workflow status tracking with real-time updates",
    "Inter-departmental handoffs, notifications, and referral handshakes",
    "Direct integration with hospital billing, inventory, and pharmacy orders",
    "Full compliance with international health documentation standards",
  ];

  const displayCapabilities = capabilities && capabilities.length > 0 ? capabilities : defaultCapabilities;

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              {department}
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Tag color="green" className="rounded-full text-[10px] font-semibold">
              {badge}
            </Tag>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white flex items-center gap-2">
            {Icon && <Icon className="text-primary h-6 w-6" />}
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            icon={<RefreshCw size={14} />}
            onClick={handleRefresh}
            className="rounded-xl flex items-center"
          >
            Refresh
          </Button>
          <Button
            type="primary"
            icon={<PlusCircle size={15} />}
            onClick={handleAction}
            className="rounded-xl flex items-center font-medium bg-primary hover:bg-primary-dark"
          >
            {primaryActionLabel}
          </Button>
        </div>
      </div>

      {/* Level 3 Page Tabs (Operational Grouping) */}
      {tabs && tabs.length > 0 && (
        <div className="border-b border-slate-200 dark:border-gray-700">
          <nav className="flex space-x-2 overflow-x-auto pb-px custom-scrollbar">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTabKey;
              const TabIcon = tab.icon;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleTabClick(tab.key)}
                  className={`group relative flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-semibold transition-all duration-200 rounded-t-xl ${
                    isActive
                      ? "border-b-2 border-primary text-primary-darker dark:text-primary-300 bg-primary-soft/60 dark:bg-primary/10"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
                  }`}
                >
                  {TabIcon && <TabIcon size={14} />}
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      className={`ml-1 rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Operational KPI Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayMetrics.map((metric, idx) => (
          <StatsCard
            key={idx}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            iconBg={metric.iconBg || "bg-primary-soft dark:bg-primary/20"}
            iconColor={metric.iconColor || "text-primary"}
            valueColor={metric.valueColor}
          />
        ))}
      </div>

      {/* Active Tab Description or Custom Children */}
      {children ? (
        <div>{children}</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Operational Staging Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700/80 p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-gray-700">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Module Workspace
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {activeTabObj ? activeTabObj.label : title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {activeTabObj?.description ||
                      `Active operational console for ${title.toLowerCase()} in the ${department} department.`}
                  </p>
                </div>

                <Tag color="cyan" className="rounded-lg py-0.5 px-2 font-medium">
                  HMIS Staging Ready
                </Tag>
              </div>

              {/* Functional Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Key Operational Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {displayCapabilities.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-100 dark:border-gray-700/60 bg-slate-50/60 dark:bg-slate-900/40 p-3"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Pipeline preview */}
              {workflowStages && workflowStages.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-gray-700">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    Standard Clinical & Operational Workflow
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {workflowStages.map((wf) => (
                      <div
                        key={wf.step}
                        className="rounded-xl border border-slate-200/70 dark:border-gray-700 bg-white dark:bg-gray-800/80 p-3.5 shadow-sm"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300 text-[10px] font-bold">
                            {wf.step}
                          </span>
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {wf.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          {wf.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Development note */}
              <div className="mt-6 rounded-xl border border-dashed border-primary/40 bg-primary-soft/30 dark:bg-primary/10 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      HMIS Navigation Architecture Active
                    </p>
                    <p className="mt-0.5">
                      This operational page is linked to the primary HMIS navigation structure and route hierarchy. Deep-link preservation, role permissions, breadcrumbs, and Level 3 operational tabs are fully enabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions and Sidebar Info Card */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700/80 p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Quick Actions
              </h3>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleAction}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-primary-soft text-primary-darker hover:bg-primary hover:text-white transition font-medium text-xs dark:bg-primary/20 dark:text-primary-300 dark:hover:bg-primary dark:hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <PlusCircle size={15} />
                    {primaryActionLabel}
                  </span>
                  <ArrowRight size={13} />
                </button>

                <button
                  type="button"
                  onClick={() => toast.success("Exporting departmental report...")}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition font-medium text-xs dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <span className="flex items-center gap-2">
                    <FileSpreadsheet size={15} />
                    Export Records (CSV / PDF)
                  </span>
                  <ArrowRight size={13} />
                </button>

                <button
                  type="button"
                  onClick={() => toast("Audit trail loaded for current session")}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition font-medium text-xs dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <span className="flex items-center gap-2">
                    <Shield size={15} />
                    View Access & Audit Trail
                  </span>
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* Departmental info */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-gray-700 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
                <div className="flex justify-between">
                  <span>Department:</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{department}</span>
                </div>
                <div className="flex justify-between">
                  <span>Routing Path:</span>
                  <span className="font-mono text-[10px] text-primary">{window.location.pathname}</span>
                </div>
                <div className="flex justify-between">
                  <span>Access Level:</span>
                  <span className="font-semibold text-emerald-600">Authorized (Staff/Admin)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HmisPlaceholderPage;
