import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Wallet, FileText, CheckCircle2, TrendingUp, Layers, FileSpreadsheet } from "lucide-react";

export const PayrollManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Payroll & Compensation Management"
      subtitle="Monthly salary processing, grade structures, statutory PAYE tax, pensions, deductions and digital payslips"
      department="Administration & HR"
      badge="Compensation Engine"
      icon={Wallet}
      tabs={[
        { key: "overview", label: "Payroll Overview", icon: Wallet },
        { key: "structure", label: "Salary Structure & Scales", icon: Layers },
        { key: "processing", label: "Payroll Processing", icon: TrendingUp },
        { key: "payslips", label: "Employee Payslips", icon: FileText },
        { key: "deductions", label: "Deductions & Statutory Taxes", icon: Wallet },
        { key: "history", label: "Payroll History", icon: CheckCircle2 },
        { key: "reports", label: "Payroll Reports", icon: FileSpreadsheet },
      ]}
      metrics={[
        { title: "Monthly Net Payroll", value: "₦42,800,000", icon: Wallet },
        { title: "Staff Processed", value: "348 Employees", icon: FileText },
        { title: "Statutory PAYE Tax", value: "₦5,120,000", icon: CheckCircle2 },
        { title: "Pension Remittance (8% + 10%)", value: "₦6,450,000", icon: TrendingUp },
      ]}
      capabilities={[
        "CONHESS (Consolidated Health Salary Scale) and CONMESS (Medical Salary Scale) compliant grading",
        "Automated integration with biometric attendance for lateness, unpaid leave, and overtime allowances",
        "Direct export of bank batch schedules for automated one-click payroll disbursement",
        "Self-service employee portal for instant viewing and downloading of encrypted monthly payslips",
      ]}
    />
  );
};

export default PayrollManagement;
