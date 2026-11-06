import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { CreditCard, CheckCircle2, Clock } from "lucide-react";

export const CashierPos: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Cashier & Point of Sale (POS)"
      subtitle="Patient receipting, multi-mode payment collection (Cash, Card, Transfer), shift handovers and till balance"
      department="Finance & Billing"
      badge="Cashier POS"
      icon={CreditCard}
      tabs={[
        { key: "counter-checkout", label: "Patient Checkout & Receipting" },
        { key: "shift-tills", label: "Active Cashier Shift Tills", count: 6 },
        { key: "daily-transactions", label: "Today's Transaction Journal" },
        { key: "eod-balancing", label: "End-of-Day Till Balancing" },
      ]}
      metrics={[
        { title: "Today's Till Collections", value: "₦3,840,000", icon: CreditCard, valueColor: "text-emerald-600" },
        { title: "POS Card Payments", value: "₦2,450,000", icon: CreditCard },
        { title: "Direct Bank Transfers", value: "₦950,000", icon: CheckCircle2 },
        { title: "Physical Cash in Tills", value: "₦440,000", icon: Clock },
      ]}
      capabilities={[
        "Instant thermal receipt printing with QR code payment verification",
        "Multiple payment splitting across cash, card and digital transfers on a single transaction",
        "Strict end-of-shift cashier till balancing with supervisor sign-off and vault transfer logs",
      ]}
    />
  );
};

export default CashierPos;
