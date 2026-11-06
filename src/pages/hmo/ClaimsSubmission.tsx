import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Receipt, CheckCircle2, Clock, FileSpreadsheet } from "lucide-react";

export const ClaimsSubmission: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Claims Submission & Batching"
      subtitle="Electronic claims batching, ICD-10 diagnostic coding, medical justification attachments and transmission"
      department="HMO & Insurance"
      badge="Claims Dispatch"
      icon={Receipt}
      tabs={[
        { key: "unbatched-claims", label: "Unbatched Settled Encounters", count: 86 },
        { key: "ready-for-dispatch", label: "Validated Batches Ready", count: 4 },
        { key: "dispatched-batches", label: "Submitted Batches (This Month)", count: 18 },
        { key: "claim-validation-audit", label: "Claim Scrubber Error Audit" },
      ]}
      metrics={[
        { title: "Claims Ready to Dispatch", value: "₦4,850,000", icon: Receipt },
        { title: "Batches Submitted (MTD)", value: "18 Batches", icon: FileSpreadsheet, valueColor: "text-emerald-600" },
        { title: "First-Pass Clean Claim Score", value: "98.4%", icon: CheckCircle2 },
        { title: "Avg Batching Cycle", value: "Weekly", icon: Clock },
      ]}
      capabilities={[
        "Automated pre-submission claims scrubber flagging missing PA codes, invalid ICD-10s, or tariff mismatches",
        "Export in standard EDI 837 health claim formats, Excel, and HMO-specific upload formats",
        "Electronic signature embedding and clinical note attachment bundling in a single click",
      ]}
    />
  );
};

export default ClaimsSubmission;
