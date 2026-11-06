import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Sparkles, HeartPulse, Shield, Wallet } from "lucide-react";

export const EmployeeBenefits: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Employee Benefits & Welfare"
      subtitle="Staff medical health scheme, pension administrators, staff cooperative loans, life insurance and gratuity schemes"
      department="Administration & HR"
      badge="Staff Welfare"
      icon={Sparkles}
      tabs={[
        { key: "medical-scheme", label: "Staff & Dependent Medical Scheme" },
        { key: "pensions", label: "Pension Fund Administrators (PFA)" },
        { key: "welfare-loans", label: "Cooperative & Salary Advance Loans", count: 18 },
        { key: "life-insurance", label: "Group Life & Disability Policy" },
      ]}
      metrics={[
        { title: "Staff Enrolled in Health Plan", value: "348 (100%)", icon: HeartPulse, valueColor: "text-emerald-600" },
        { title: "Dependents Covered", value: "680 Dependents", icon: Sparkles },
        { title: "PFAs Connected", value: "14 Administrators", icon: Shield },
        { title: "Active Welfare Loans", value: "₦4,800,000", icon: Wallet },
      ]}
      capabilities={[
        "Automatic waiver/rebate application for staff and immediate family receiving medical treatment in the hospital",
        "Direct export of monthly RSA (Retirement Savings Account) schedules to National Pension Commission compliant formats",
        "Salary advance and cooperative loan repayment deductions linked directly to payroll",
      ]}
    />
  );
};

export default EmployeeBenefits;
