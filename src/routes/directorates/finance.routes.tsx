import { lazy } from "react";
import { Route } from "react-router-dom";

const FinanceOverview = lazy(() => import("../../pages/finance/FinanceOverview"));
const PatientBilling = lazy(() => import("../../pages/finance/PatientBilling"));
const CashierPos = lazy(() => import("../../pages/finance/CashierPos"));
const AccountsReceivable = lazy(() => import("../../pages/finance/AccountsReceivable"));
const AccountsPayable = lazy(() => import("../../pages/finance/AccountsPayable"));
const GeneralLedger = lazy(() => import("../../pages/finance/GeneralLedger"));
const ExpenseManagement = lazy(() => import("../../pages/finance/ExpenseManagement"));
const BudgetManagement = lazy(() => import("../../pages/finance/BudgetManagement"));
const RevenueCycleManagement = lazy(() => import("../../pages/finance/RevenueCycleManagement"));
const PaymentReconciliation = lazy(() => import("../../pages/finance/PaymentReconciliation"));
const FinancialReports = lazy(() => import("../../pages/finance/FinancialReports"));

export const financeRoutes = (
  <>
    <Route path="/finance" element={<FinanceOverview />} />
    <Route path="/finance/overview" element={<FinanceOverview />} />
    <Route path="/finance/billing" element={<PatientBilling />} />
    <Route path="/invoices" element={<PatientBilling />} />
    <Route path="/finance/cashier" element={<CashierPos />} />
    <Route path="/payments" element={<CashierPos />} />
    <Route path="/finance/receivable" element={<AccountsReceivable />} />
    <Route path="/finance/payable" element={<AccountsPayable />} />
    <Route path="/finance/general-ledger" element={<GeneralLedger />} />
    <Route path="/finance/expenses" element={<ExpenseManagement />} />
    <Route path="/finance/budget" element={<BudgetManagement />} />
    <Route path="/finance/rcm" element={<RevenueCycleManagement />} />
    <Route path="/finance/reconciliation" element={<PaymentReconciliation />} />
    <Route path="/finance/reports" element={<FinancialReports />} />
  </>
);
