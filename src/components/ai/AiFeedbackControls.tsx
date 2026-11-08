import React, { useState } from "react";
import { Button, Space, Tooltip } from "antd";
import { ThumbsUp, ThumbsDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import { aiService } from "../../services/ai.service";
import type { AiFeedbackPayload } from "../../types/ai";

interface AiFeedbackControlsProps {
  requestId: string;
  assistantId: string;
  showClinicianSignOff?: boolean;
  onFeedbackRecorded?: (rating: AiFeedbackPayload["rating"]) => void;
}

const AiFeedbackControls: React.FC<AiFeedbackControlsProps> = ({
  requestId,
  assistantId,
  showClinicianSignOff = false,
  onFeedbackRecorded,
}) => {
  const [submittedRating, setSubmittedRating] = useState<
    AiFeedbackPayload["rating"] | null
  >(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFeedback = async (
    rating: AiFeedbackPayload["rating"],
    clinicianApproved?: boolean
  ) => {
    try {
      setSubmitting(true);
      await aiService.submitFeedback({
        requestId,
        assistantId,
        rating,
        clinicianApproved,
      });
      setSubmittedRating(rating);
      onFeedbackRecorded?.(rating);
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedRating) {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400">
        <CheckCircle2 size={14} />
        <span>AI audit feedback recorded ({submittedRating})</span>
      </div>
    );
  }

  return (
    <Space size="small" wrap>
      {showClinicianSignOff && (
        <Button
          size="small"
          type="primary"
          disabled={submitting}
          onClick={() => handleFeedback("helpful", true)}
        >
          Confirm &amp; Approve Draft
        </Button>
      )}
      <Tooltip title="Helpful & accurate">
        <Button
          size="small"
          icon={<ThumbsUp size={13} />}
          disabled={submitting}
          onClick={() => handleFeedback("helpful")}
        />
      </Tooltip>
      <Tooltip title="Not helpful">
        <Button
          size="small"
          icon={<ThumbsDown size={13} />}
          disabled={submitting}
          onClick={() => handleFeedback("unhelpful")}
        />
      </Tooltip>
      <Tooltip title="Flag clinical/factual inaccuracy">
        <Button
          size="small"
          danger
          icon={<AlertTriangle size={13} />}
          disabled={submitting}
          onClick={() => handleFeedback("inaccurate", false)}
        >
          Flag Issue
        </Button>
      </Tooltip>
    </Space>
  );
};

export default AiFeedbackControls;
