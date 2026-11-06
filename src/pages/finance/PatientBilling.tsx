import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Receipt, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export const PatientBilling: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Patient Billing & Invoicing"
      subtitle="Charge capture, proforma invoices, inpatient interim bills, final discharge invoices and insurance co-pays"
      department="Finance & Billing"
      badge="Charge Capture & Invoices"
      icon={Receipt}
      tabs={[
        { key: "inpatient-bills", label: "Inpatient Running Bills", count: 168 },
        { key: "opd-invoices", label: "Outpatient Invoices", count: 94 },
        { key: "unbilled-orders", label: "Unbilled Clinical Orders", count: 12 },
        { key: "proforma", label: "Proforma Cost Estimates" },
        { key: "settled-invoices", label: "Settled Invoices Archive" },
      ]}
      metrics={[
        { title: "Active Inpatient Charges", value: "₦14,800,000", icon: Receipt },
        { title: "Invoices Generated Today", value: "148 Invoices", icon: FileText },
        { title: "Unbilled Clinical Orders", value: "12 Orders", icon: AlertTriangle, valueColor: "text-amber-500" },
        { title: "Invoice Clearance Velocity", value: "96.4%", icon: CheckCircle2, valueColor: "text-emerald-600" },
      ]}
      capabilities={[
        "Automatic clinical charge capture directly from doctor orders, theatre logs, pharmacy and nursing MAR",
        "Itemized bill generation with split billing (patient co-pay + HMO covered portion)",
        "Interim statement printing for long-stay inpatients with payment deposit tracking",
      ]}
    />
  );
};

export default PatientBilling;
