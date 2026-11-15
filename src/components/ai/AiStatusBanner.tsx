import React from "react";
import { Alert, Tag } from "antd";
import { ShieldCheck, Cpu } from "lucide-react";
import type { AiSystemStatus } from "../../types/ai";

interface AiStatusBannerProps {
  status: AiSystemStatus | null;
  loading?: boolean;
  className?: string;
}

/**
 * Truthful AI-Readiness Status Banner.
 * Explicitly communicates whether an AI provider is active or unconfigured,
 * and reassures clinicians that core hospital workflows operate independently.
 */
const AiStatusBanner: React.FC<AiStatusBannerProps> = ({
  status,
  loading = false,
  className = "",
}) => {
  if (loading) {
    return (
      <div
        className={`rounded-xl border border-gray-200 dark:border-gray-700 p-3 text-sm text-gray-500 ${className}`}
      >
        Checking Ithere Care AI integration boundary status...
      </div>
    );
  }

  if (!status) {
    return null;
  }

  const isLive = status.aiEnabled && status.activeProvider.configured;

  return (
    <Alert
      className={`rounded-xl ${className}`}
      type={isLive ? "success" : "info"}
      showIcon
      icon={<Cpu size={18} className="mt-0.5" />}
      message={
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            Ithere Care AI Integration Boundary:{" "}
            {isLive ? status.activeProvider.displayName : "Standby (No Live Provider Configured)"}
          </span>
          <div className="flex items-center gap-1.5">
            <Tag color={isLive ? "success" : "default"}>
              {isLive ? "AI Provider Active" : "Core HMIS Mode"}
            </Tag>
            {status.governancePolicy.humanInTheLoopMandatory && (
              <Tag color="processing" className="flex items-center gap-1">
                <ShieldCheck size={12} />
                Clinician Review Mandatory
              </Tag>
            )}
          </div>
        </div>
      }
      description={
        <span className="text-xs text-gray-600 dark:text-gray-300">
          {status.activeProvider.message}
        </span>
      }
    />
  );
};

export default AiStatusBanner;
