export type AiCapabilityType =
  | "chat"
  | "summarise"
  | "search"
  | "insights"
  | "clinical_documentation"
  | "decision_support";

export type AiDomainCategory =
  | "clinical_intelligence"
  | "hospital_operations"
  | "management_intelligence";

export interface AiProviderHealth {
  providerKey: string;
  displayName: string;
  configured: boolean;
  available: boolean;
  mode: "disabled" | "noop" | "external_api" | "self_hosted";
  defaultModel: string | null;
  message: string;
}

export interface AiSystemStatus {
  product: string;
  parentOrganization: string;
  aiEnabled: boolean;
  activeProvider: AiProviderHealth;
  registeredProviders: string[];
  registeredAssistantsCount: number;
  governancePolicy: {
    coreHospitalWorkflowsIndependent: boolean;
    humanInTheLoopMandatory: boolean;
    rbacEnforced: boolean;
    allowExternalPhiTransmission: boolean;
    rateLimitPerMinute: number;
  };
  checkedAt: string;
}

export interface AiAssistantSummary {
  id: string;
  name: string;
  category: AiDomainCategory;
  capabilities: AiCapabilityType[];
  description: string;
  allowedRoles: string[];
  requiredPermissions: string[];
  requiresHumanReview: boolean;
  allowsPhiContext: boolean;
  clinicalDisclaimer: string;
  operationalState: "ready" | "awaiting_provider_configuration";
}

export interface AiSourceReference {
  entityType: string;
  entityId: string;
  label: string;
}

export interface AiTokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCostUsd?: number;
}

export interface AiCompletionResponse {
  requestId: string;
  provider: string;
  model: string;
  assistantId: string;
  capability: AiCapabilityType;
  outputText: string;
  structuredData?: Record<string, unknown>;
  sources?: AiSourceReference[];
  requiresHumanReview: boolean;
  disclaimer: string;
  usage: AiTokenUsage;
  latencyMs: number;
  generatedAt: string;
}

export interface AiChatRequest {
  assistantId: string;
  message: string;
  patientId?: string;
  encounterId?: string;
  contextMetadata?: Record<string, unknown>;
}

export interface AiSummariseRequest {
  targetType:
    | "patient_record"
    | "clinical_encounter"
    | "lab_report"
    | "discharge_summary"
    | "operational_report";
  targetId: string;
  focusInstructions?: string;
}

export interface AiSearchRequest {
  query: string;
  scopes?: string[];
  limit?: number;
}

export interface AiInsightsRequest {
  domain:
    | "clinical_overview"
    | "outpatient_flow"
    | "ward_occupancy"
    | "pharmacy_inventory"
    | "laboratory_turnaround"
    | "revenue_and_hmo"
    | "workforce_distribution";
  timeframe?: string;
}

export interface AiFeedbackPayload {
  requestId: string;
  assistantId: string;
  rating: "helpful" | "unhelpful" | "inaccurate" | "unsafe";
  clinicianApproved?: boolean;
  comment?: string;
}
