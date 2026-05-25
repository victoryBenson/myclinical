import type { Medication, Prescription, PurchaseOrder, Supplier } from "../types/pharmacy";

export const pharmacyStats = {
  totalMedications: 128,
  totalStockUnits: 5420,
  lowStock: 12,
  expiringSoon: 8,
  todaySales: 245000,
};

export const recentSales = [
  {
    id: 1,
    invoiceNo: "INV-2026-001",
    patient: "John Doe",
    patientId: "PT-1023",
    pharmacist: "Dr. Sarah Kim",
    itemsCount: 3,
    totalQuantity: 5,
    subtotal: 13000,
    discount: 1000,
    amount: 12000,
    paymentMethod: "Cash",
    status: "Paid",
    date: "2026-03-04 09:45 AM",
  },
  {
    id: 2,
    invoiceNo: "INV-2026-002",
    patient: "Mary Smith",
    patientId: "PT-1108",
    pharmacist: "Dr. James Lee",
    itemsCount: 2,
    totalQuantity: 2,
    subtotal: 9000,
    discount: 500,
    amount: 8500,
    paymentMethod: "Card",
    status: "Paid",
    date: "2026-03-04 11:20 AM",
  },
  {
    id: 3,
    invoiceNo: "INV-2026-003",
    patient: "Michael Brown",
    patientId: "PT-1204",
    pharmacist: "Dr. Anita Patel",
    itemsCount: 4,
    totalQuantity: 6,
    subtotal: 18000,
    discount: 2000,
    amount: 16000,
    paymentMethod: "Transfer",
    status: "Paid",
    date: "2026-03-03 03:15 PM",
  },
  {
    id: 4,
    invoiceNo: "INV-2026-004",
    patient: "Grace Wilson",
    patientId: "PT-1342",
    pharmacist: "Dr. Sarah Kim",
    itemsCount: 1,
    totalQuantity: 1,
    subtotal: 5000,
    discount: 0,
    amount: 5000,
    paymentMethod: "Cash",
    status: "Pending",
    date: "2026-03-02 10:05 AM",
  },
  {
    id: 5,
    invoiceNo: "INV-2026-005",
    patient: "Daniel Johnson",
    patientId: "PT-1410",
    pharmacist: "Dr. James Lee",
    itemsCount: 5,
    totalQuantity: 8,
    subtotal: 25000,
    discount: 2500,
    amount: 22500,
    paymentMethod: "Card",
    status: "Paid",
    date: "2026-03-01 01:40 PM",
  },
];


export const mockMedications: Medication[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    stock: 120,
    unitPrice: 150,
    expiryDate: "2027-05-01",
    status: "in_stock",
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    category: "Antibiotics",
    stock: 25,
    unitPrice: 300,
    expiryDate: "2026-10-15",
    status: "low_stock",
  },
  {
    id: 3,
    name: "Vitamin C",
    category: "Supplements",
    stock: 0,
    unitPrice: 200,
    expiryDate: "2026-03-01",
    status: "out_of_stock",
  },
];

export type InventoryStatus =
  | "active"
  | "expired"
  | "depleted";

export interface InventoryItem {
  id: number;
  medicationName: string;
  batchNumber: string;
  supplier: string;
  quantityReceived: number;
  quantityRemaining: number;
  purchasePrice: number;
  expiryDate: string;
  dateReceived: string;
  status: InventoryStatus;
}


export const mockInventory: InventoryItem[] = [
  {
    id: 1,
    medicationName: "Paracetamol 500mg",
    batchNumber: "PCM-2026-A1",
    supplier: "Emzor Pharmaceuticals",
    quantityReceived: 500,
    quantityRemaining: 320,
    purchasePrice: 100,
    expiryDate: "2027-05-01",
    dateReceived: "2026-01-10",
    status: "active",
  },
  {
    id: 2,
    medicationName: "Amoxicillin 250mg",
    batchNumber: "AMX-2026-B3",
    supplier: "Fidson Healthcare",
    quantityReceived: 200,
    quantityRemaining: 0,
    purchasePrice: 220,
    expiryDate: "2026-10-15",
    dateReceived: "2025-12-20",
    status: "depleted",
  },
];


export const mockPrescriptions: Prescription[] = [
  {
    id: 1,
    patientName: "John Doe",
    doctorName: "Dr. Adams",
    medications: [
      { medicationId: 1, name: "Paracetamol 500mg", quantity: 2, unitPrice: 150 },
      { medicationId: 3, name: "Vitamin C", quantity: 1, unitPrice: 200 },
    ],
    totalAmount: 3500,
    status: "pending",
    paymentStatus: "unpaid",
    createdAt: "2026-03-01",
  },
  {
    id: 2,
    patientName: "Mary Smith",
    doctorName: "Dr. James",
    medications: [
      { medicationId: 2, name: "Amoxicillin 250mg", quantity: 1, unitPrice: 300 },
    ],
    totalAmount: 4200,
    status: "dispensed",
    paymentStatus: "paid",
    createdAt: "2026-03-03",
  },
];

export const mockSuppliers: Supplier[] = [
  {
    id: 1,
    name: "Emzor Pharmaceuticals",
    contactPerson: "David Johnson",
    phone: "08012345678",
    email: "sales@emzor.com",
    address: "12 Industrial Layout, Lagos",
    paymentTerms: "30 Days Credit",
    status: "active",
    createdAt: "2026-01-15",
  },
  {
    id: 2,
    name: "Fidson Healthcare",
    contactPerson: "Sarah Ade",
    phone: "08087654321",
    email: "orders@fidson.com",
    address: "Ikeja, Lagos",
    paymentTerms: "Cash on Delivery",
    status: "active",
    createdAt: "2026-02-01",
  },
];

export const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: 1,
    supplierName: "Emzor Pharmaceuticals",
    items: [
      {
        medicationId: 1,
        medicationName: "Paracetamol 500mg",
        quantity: 100,
        unitCost: 80,
      },
      {
        medicationId: 2,
        medicationName: "Vitamin C",
        quantity: 50,
        unitCost: 120,
      },
    ],
    totalAmount: 14000,
    status: "received",
    createdAt: "2026-03-01",
    receivedAt: "2026-03-03",
  },
  {
    id: 2,
    supplierName: "Fidson Healthcare",
    items: [
      {
        medicationId: 3,
        medicationName: "Amoxicillin 250mg",
        quantity: 200,
        unitCost: 150,
      },
    ],
    totalAmount: 30000,
    status: "pending",
    createdAt: "2026-03-04",
  },
];


export const mockPatients = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Mary James" },
];


export const mockSales = [
  {
    id: 1001,
    patientName: "John Doe",
    items: [
      { medicationId: 1, medicationName: "Paracetamol", quantity: 2, price: 500 }
    ],
    totalAmount: 1000,
    paymentStatus: "paid",
    createdAt: "2026-03-01"
  },
  {
    id: 1002,
    patientName: "Mary James",
    items: [
      { medicationId: 2, medicationName: "Amoxicillin", quantity: 1, price: 1200 }
    ],
    totalAmount: 1200,
    paymentStatus: "pending",
    createdAt: "2026-03-03"
  }
];