import React from "react";
import { Card, Tag } from "antd";
import { FileText, ShieldAlert, Clock } from "lucide-react";
import type { AiCompletionResponse } from "../../types/ai";
import AiFeedbackControls from "./AiFeedbackControls";

interface AiSummaryCardProps {
  title: string;
  response: AiCompletionResponse;
  className?: string;
}

/**
 * Reusable AI Summary Presentation Card.
 * Displays source citations, mandatory clinician review badge, and feedback/approval controls.
 */
const AiSummaryCard: React.FC<AiSummaryCardProps> = ({
  title,
  response,
  className = "",
}) => {
  return (
    <Card
      className={`rounded-2xl shadow-sm border border-emerald-200 dark:border-emerald-900 dark:bg-gray-800 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
            <FileText size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Assistant: {response.assistantId} • Model: {response.model}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {response.requiresHumanReview && (
            <Tag color="warning" className="flex items-center gap-1">
              <ShieldAlert size={12} />
              Requires Clinician Review
            </Tag>
          )}
          <Tag className="flex items-center gap-1 text-xs">
            <Clock size={11} />
            {response.latencyMs}ms
          </Tag>
        </div>
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-line leading-relaxed mb-3">
        {response.outputText}
      </div>

      {response.sources && response.sources.length > 0 && (
        <div className="mb-3 pt-2 border-t border-dashed border-gray-200 dark:border-gray-700">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
            Grounded Hospital Record Sources:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {response.sources.map((src) => (
              <Tag key={`${src.entityType}-${src.entityId}`} color="cyan">
                {src.label} ({src.entityType}:{src.entityId})
              </Tag>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
        <p className="text-xs italic text-amber-700 dark:text-amber-400">
          {response.disclaimer}
        </p>
        <AiFeedbackControls
          requestId={response.requestId}
          assistantId={response.assistantId}
          showClinicianSignOff={response.requiresHumanReview}
        />
      </div>
    </Card>
  );
};

export default AiSummaryCard;
