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
  Pill,
  Boxes,
  Truck,
  ShoppingCart,
  Receipt,
} from "lucide-react";

export const sidebarModules = [
    {
    title: "Patient's Module",
    items: [
      { name: "Dashboard", path: "/", icon: LayoutDashboard },
      { name: "Patients", path: "/patients", icon: Users },
      { name: "Appointment", path: "/admissions/new", icon: ClipboardList },
      { name: "Admissions", path: "/admissions", icon: ClipboardList },
    ],
  },
  {
    title: "Lab Module",
      items: [
        { name: "Dashboard", path: "/lab", icon: LayoutDashboard },
        { name: "New Request", path: "/lab/new-request", icon: ClipboardPlus },
        { name: "Requests", path: "/lab/requests", icon: ListChecks },
        { name: "Queue", path: "/lab/queue", icon: Clock },
        { name: "Results", path: "/lab/results", icon: FlaskConical },
        { name: "Reports", path: "/lab/reports", icon: FileText },
    ],
},
{
  title: "Pharmacy",
  items: [
    { name: "Dashboard", path: "/pharmacy", icon: LayoutDashboard },
    { name: "Medications", path: "/pharmacy/medications", icon: Pill },
    { name: "Inventory", path: "/pharmacy/inventory", icon: Boxes },
    { name: "Prescriptions", path: "/pharmacy/prescriptions", icon: ClipboardList },
    { name: "Suppliers", path: "/pharmacy/suppliers", icon: Truck },
    { name: "Purchase Orders", path: "/pharmacy/purchase-orders", icon: ShoppingCart },
    { name: "Sales", path: "/pharmacy/sales", icon: Receipt },
    { name: "Reports", path: "/pharmacy/reports", icon: FileText },
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