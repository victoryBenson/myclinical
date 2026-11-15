import React from "react";
import { Card, Tag } from "antd";
import { TrendingUp } from "lucide-react";
import type { AiCompletionResponse } from "../../types/ai";
import AiFeedbackControls from "./AiFeedbackControls";

interface AiInsightCardProps {
  domainLabel: string;
  response: AiCompletionResponse;
  className?: string;
}

/**
 * Reusable AI Operational & Management Insight Card.
 */
const AiInsightCard: React.FC<AiInsightCardProps> = ({
  domainLabel,
  response,
  className = "",
}) => {
  return (
    <Card
      className={`rounded-2xl shadow-sm dark:bg-gray-800 border border-sky-100 dark:border-sky-900 ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
            <TrendingUp size={16} />
          </div>
          <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">
            {domainLabel}
          </span>
        </div>
        <Tag color="processing">Operational Insight</Tag>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed mb-3">
        {response.outputText}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {response.disclaimer}
        </span>
        <AiFeedbackControls
          requestId={response.requestId}
          assistantId={response.assistantId}
        />
      </div>
    </Card>
  );
};

export default AiInsightCard;
