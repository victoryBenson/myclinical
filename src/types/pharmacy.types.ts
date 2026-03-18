export type StockStatus = "in_stock" | "low_stock" | "out_of_stock";

export interface Medication {
  id: number;
  name: string;
  category: string;
  stock: number;
  unitPrice: number;
  expiryDate: string;
  status: StockStatus;
}

export type PaymentStatus =
  | "unpaid"
  | "paid";


export type PrescriptionStatus =
  | "created"
  | "paid"
  | "pending"
  | "dispensed"
  | "cancelled";


export interface Prescription {
  id: number;
  patientName: string;
  doctorName: string;
  medications: {
    medicationId: number;
    name: string;
    quantity: number;
    unitPrice: number;
  }[];
  totalAmount: number;
  paymentStatus: "unpaid" | "paid";
  status: PrescriptionStatus;
  createdAt: string;
  paidAt?: string;
  dispensedAt?: string;
}

export interface Supplier {
  id: number;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  paymentTerms: string; 
  status: "active" | "inactive";
  createdAt: string;
};

export type SupplierStatus = "active" | "inactive";

export type PurchaseStatus =
  | "pending"
  | "ordered"
  | "received"
  | "cancelled";

export interface PurchaseItem {
  medicationId: number;
  medicationName: string;
  quantity: number;
  unitCost: number;
}

export interface PurchaseOrder {
  id: number;
  supplierName: string;
  items: PurchaseItem[];
  totalAmount: number;
  status: PurchaseStatus;
  createdAt: string;
  receivedAt?: string;
}

export interface SaleItem {
  medicationId: number;
  medicationName: string;
  quantity: number;
  price: number;
}

export interface Sale {
  id: number;
  patientName: string;
  items: SaleItem[];
  totalAmount: number;
  // paymentStatus: "pending" | "paid";
  paymentStatus: string;
  createdAt: string;
}

