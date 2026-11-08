import api from "./api";
import type {
  AiAssistantSummary,
  AiChatRequest,
  AiCompletionResponse,
  AiFeedbackPayload,
  AiInsightsRequest,
  AiSearchRequest,
  AiSummariseRequest,
  AiSystemStatus,
} from "../types/ai";

function unwrapEnvelope<T>(payload: unknown): T {
  if (
    payload &&
    typeof payload === "object" &&
    "data" in (payload as Record<string, unknown>)
  ) {
    return (payload as { data: T }).data;
  }
  return payload as T;
}

export const aiService = {
  async getStatus(): Promise<AiSystemStatus> {
    const response = await api.get("/ai/status");
    return unwrapEnvelope<AiSystemStatus>(response.data);
  },

  async getAssistants(): Promise<AiAssistantSummary[]> {
    const response = await api.get("/ai/assistants");
    const data = unwrapEnvelope<AiAssistantSummary[]>(response.data);
    return Array.isArray(data) ? data : [];
  },

  async chat(payload: AiChatRequest): Promise<AiCompletionResponse> {
    const response = await api.post("/ai/chat", payload);
    return unwrapEnvelope<AiCompletionResponse>(response.data);
  },

  async summarise(payload: AiSummariseRequest): Promise<AiCompletionResponse> {
    const response = await api.post("/ai/summarise", payload);
    return unwrapEnvelope<AiCompletionResponse>(response.data);
  },

  async search(payload: AiSearchRequest): Promise<AiCompletionResponse> {
    const response = await api.post("/ai/search", payload);
    return unwrapEnvelope<AiCompletionResponse>(response.data);
  },

  async getInsights(payload: AiInsightsRequest): Promise<AiCompletionResponse> {
    const response = await api.post("/ai/insights", payload);
    return unwrapEnvelope<AiCompletionResponse>(response.data);
  },

  async submitFeedback(payload: AiFeedbackPayload): Promise<{
    recorded: boolean;
    requestId: string;
    recordedAt: string;
  }> {
    const response = await api.post("/ai/feedback", payload);
    return unwrapEnvelope(response.data);
  },
};
