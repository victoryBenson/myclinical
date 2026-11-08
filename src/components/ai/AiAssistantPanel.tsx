import React, { useEffect, useState } from "react";
import { Card, Empty, Spin, Tag } from "antd";
import { Bot, Lock, ShieldCheck } from "lucide-react";
import { aiService } from "../../services/ai.service";
import type { AiAssistantSummary, AiSystemStatus } from "../../types/ai";
import AiStatusBanner from "./AiStatusBanner";

interface AiAssistantPanelProps {
  className?: string;
}

/**
 * Reusable AI Assistant Readiness & Catalog Panel.
 * - Queries the backend `/ai/status` and `/ai/assistants` endpoints.
 * - Never presents fabricated AI responses or non-functional chat inputs when no provider is configured.
 * - Displays only the assistants authorised for the logged-in user's RBAC role.
 */
const AiAssistantPanel: React.FC<AiAssistantPanelProps> = ({
  className = "",
}) => {
  const [status, setStatus] = useState<AiSystemStatus | null>(null);
  const [assistants, setAssistants] = useState<AiAssistantSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const loadAiReadiness = async () => {
      try {
        setLoading(true);
        const [statusRes, assistantsRes] = await Promise.all([
          aiService.getStatus(),
          aiService.getAssistants(),
        ]);
        if (mounted) {
          setStatus(statusRes);
          setAssistants(assistantsRes);
          setError(null);
        }
      } catch {
        if (mounted) {
          setError(
            "Unable to query AI integration status. Core hospital workflows remain unaffected."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void loadAiReadiness();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <Card className={`rounded-2xl shadow-sm dark:bg-gray-800 ${className}`}>
        <div className="flex items-center justify-center py-6 gap-2 text-gray-500">
          <Spin size="small" />
          <span className="text-sm">Loading AI integration readiness...</span>
        </div>
      </Card>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <AiStatusBanner status={status} />

      {error && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/40 p-3 text-xs text-amber-800 dark:text-amber-300">
          {error}
        </div>
      )}

      <Card
        title={
          <div className="flex items-center gap-2">
            <Bot size={18} className="text-emerald-600" />
            <span className="text-sm font-semibold">
              Role-Authorised AI Assistants Catalog
            </span>
          </div>
        }
        className="rounded-2xl shadow-sm dark:bg-gray-800"
      >
        {assistants.length === 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No AI assistants are assigned to your current staff role."
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {assistants.map((assistant) => (
              <div
                key={assistant.id}
                className="rounded-xl border border-gray-200 dark:border-gray-700 p-3.5 flex flex-col justify-between gap-2"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                      {assistant.name}
                    </h4>
                    <Tag
                      color={
                        assistant.operationalState === "ready"
                          ? "success"
                          : "default"
                      }
                    >
                      {assistant.operationalState === "ready"
                        ? "Ready"
                        : "Awaiting Provider Config"}
                    </Tag>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {assistant.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-500">
                  {assistant.requiresHumanReview && (
                    <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                      <ShieldCheck size={12} />
                      Human Review Required
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 ml-auto">
                    <Lock size={11} />
                    RBAC Scoped
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default AiAssistantPanel;
