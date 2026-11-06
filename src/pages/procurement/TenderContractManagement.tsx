import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { FileSignature, Calendar, CheckCircle2, Clock } from "lucide-react";

export const TenderContractManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Tender & Contract Management"
      subtitle="Capital equipment tenders, annual maintenance contracts (AMC), service level agreements (SLAs) and bidding"
      department="Procurement & Supply Chain"
      badge="Contracts & Tenders"
      icon={FileSignature}
      tabs={[
        { key: "active-contracts", label: "Active Annual Contracts", count: 18 },
        { key: "open-tenders", label: "Open Hospital Bids / RFPs", count: 2 },
        { key: "expiring-contracts", label: "Expiring Contracts (Next 90d)", count: 4 },
        { key: "sla-performance", label: "SLA Vendor Compliance Tracking" },
      ]}
      metrics={[
        { title: "Active Equipment AMCs", value: "18 Contracts", icon: FileSignature },
        { title: "Annual Contract Value", value: "₦28,400,000", icon: CheckCircle2 },
        { title: "Expiring Within 90 Days", value: "4 Contracts", icon: Calendar, valueColor: "text-amber-500" },
        { title: "Average Vendor SLA Uptime", value: "98.4%", icon: Clock, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Biomedical equipment AMC tracking (MRI, CT, Ventilators, Anaesthesia machines) with guaranteed technician response SLAs",
        "Automated contract expiration reminders 90, 60, and 30 days prior to renewal",
        "Digital RFP bid evaluation matrix comparing technical compliance and total cost of ownership",
      ]}
    />
  );
};

export default TenderContractManagement;
