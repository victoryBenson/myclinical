import {
  LayoutDashboard,
  FlaskConical,
  Users,
  ClipboardList,
  CreditCard,
  Package,
  ClipboardPlus,
  ListChecks,
  Clock,
  FileText,
} from "lucide-react";

export const sidebarModules = [
  {
    title: "Lab Module",
      items: [
        { name: "Dashboard", path: "/", icon: LayoutDashboard },
        { name: "New Request", path: "/lab/new-request", icon: ClipboardPlus },
        { name: "Requests", path: "/lab/requests", icon: ListChecks },
        { name: "Queue", path: "/lab/queue", icon: Clock },
        { name: "Results", path: "/lab/results", icon: FlaskConical },
        { name: "Reports", path: "/lab/reports", icon: FileText },
    ],
  },
  {
    title: "Patients Module",
    items: [
      { name: "All Patients", path: "/patients", icon: Users },
      { name: "Admissions", path: "/admissions", icon: ClipboardList },
    ],
  },
  {
    title: "Billing Module",
    items: [
      { name: "Payments", path: "/payments", icon: CreditCard },
      { name: "Invoices", path: "/invoices", icon: ClipboardList },
    ],
  },
  {
    title: "Inventory Module",
    items: [
      { name: "Products", path: "/products", icon: Package },
      { name: "Stock Logs", path: "/stock-logs", icon: ClipboardList },
    ],
  },
];