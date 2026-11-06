import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CheckCircle2, Pill, Receipt, Clock } from "lucide-react";

export const DischargePlanning: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Discharge Planning & Care Coordination"
      subtitle="Multidisciplinary discharge checklists, take-home prescriptions (TTO), billing clearance and outpatient follow-ups"
      department="Clinical Services"
      badge="Discharge Lounge"
      icon={CheckCircle2}
      tabs={[
        { key: "today-discharges", label: "Scheduled for Discharge Today", count: 14 },
        { key: "medication-clearance", label: "Pharmacy TTO Status", count: 8 },
        { key: "billing-clearance", label: "Finance / Billing Clearance", count: 6 },
        { key: "follow-up-bookings", label: "Post-Discharge Appointments", count: 14 },
      ]}
      metrics={[
        { title: "Targeted Discharges", value: "14 Patients", icon: Clock },
        { title: "Medically Cleared", value: "11 Patients", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "TTO Meds Prepared", value: "8 Completed", icon: Pill },
        { title: "Billing Reconciled", value: "6 Cleared", icon: Receipt },
      ]}
      capabilities={[
        "Multi-stage electronic discharge clearance: Physician sign-off, Nursing review, Pharmacy TTO, Billing settlement",
        "Automated comprehensive discharge letter generation with instructions and warning signs",
        "Automated booking of specialty follow-up clinic slots before patient leaves premises",
      ]}
      workflowStages={[
        { step: 1, title: "Medical Sign-off", desc: "Attending consultant signs discharge summary and creates TTO prescription." },
        { step: 2, title: "Pharmacy Dispense", desc: "Pharmacist verifies and dispenses take-home medications with instructions." },
        { step: 3, title: "Financial Clearance", desc: "Cashier or HMO desk clears outstanding hospital charges and receipts." },
        { step: 4, title: "Bed Vacated", desc: "Patient escorted out, bed released to housekeeping for terminal cleaning." },
      ]}
    />
  );
};

export default DischargePlanning;
