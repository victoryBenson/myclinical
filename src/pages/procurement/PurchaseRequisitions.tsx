import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { ClipboardList, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export const PurchaseRequisitions: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Purchase Requisitions & Indents"
      subtitle="Departmental purchase requests, stock indents, budget checks and multi-level approval workflows"
      department="Procurement & Supply Chain"
      badge="Requisition Desk"
      icon={ClipboardList}
      tabs={[
        { key: "pending-approval", label: "Pending Approvals", count: 12 },
        { key: "approved-requests", label: "Approved (Ready for PO)", count: 8 },
        { key: "my-requisitions", label: "My Department Requests" },
        { key: "requisition-archive", label: "Requisitions History" },
      ]}
      metrics={[
        { title: "Pending Requisitions", value: "12 Requests", icon: Clock, valueColor: "text-amber-500" },
        { title: "Approved This Month", value: "84 Requests", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Emergency Requisitions", value: "2 Fast Track", icon: AlertTriangle, valueColor: "text-rose-500" },
        { title: "Avg Approval Time", value: "4.2 Hours", icon: ClipboardList },
      ]}
      capabilities={[
        "Real-time budget availability checks before departmental requisition submission",
        "Configurable multi-stage approval hierarchy (Unit Supervisor -> Department Head -> Procurement Officer -> MD)",
        "Direct one-click conversion of approved requisitions into vendor purchase orders",
      ]}
    />
  );
};

export default PurchaseRequisitions;
