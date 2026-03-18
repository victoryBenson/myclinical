// import React, { useMemo, useState } from "react";
// import {
//   Table,
//   Tag,
//   Button,
//   Space,
//   Drawer,
//   Modal,
//   Select,
//   InputNumber,
//   message,
// } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import { Download } from "lucide-react";
// import dayjs from "../../utils/dayJs";
// import SectionHeader from "../../components/ui/SectionHeader";
// import SalesFilters from "../../components/pharmacy/SalesFilter";
// import { mockMedications, mockSales, mockPatients } from "../../data/pharmacy";
// import type { Sale, SaleItem } from "../../types/pharmacy.types";

// const { Option } = Select;

// const PharmacySales: React.FC = () => {
//   const [data, setData] = useState<Sale[]>(mockSales);
//   const [search, setSearch] = useState("");
//   const [patient, setPatient] = useState("all");
//   const [paymentStatus, setPaymentStatus] = useState("all");
//   const [dateRange, setDateRange] = useState<[any, any] | null>(null);
//   const [showFilters, setShowFilters] = useState(true);
//   const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [patientName, setPatientName] = useState("");
//   const [payment, setPayment] = useState<"paid" | "pending">("paid");
//   const [items, setItems] = useState<SaleItem[]>([]);

//   const filteredData = useMemo(() => {

//     return data.filter((sale) => {

//       const matchesSearch =
//         sale.patientName
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         sale.id.toString().includes(search);

//       const matchesPatient =
//         patient === "all" || sale.patientName === patient;

//       const matchesPayment =
//         paymentStatus === "all" ||
//         sale.paymentStatus === paymentStatus;

//       const matchesDate =
//         !dateRange ||
//         (dayjs(sale.createdAt).isAfter(dateRange[0]) &&
//           dayjs(sale.createdAt).isBefore(dateRange[1]));

//       return (
//         matchesSearch &&
//         matchesPatient &&
//         matchesPayment &&
//         matchesDate
//       );
//     });

//   }, [data, search, patient, paymentStatus, dateRange]);

//   const handleReset = () => {
//     setSearch("");
//     setPatient("all");
//     setPaymentStatus("all");
//     setDateRange([null, null]);
//   };

//   const exportCSV = () => {

//     const csvRows = [
//       ["ID", "Patient", "Items", "Total", "Payment", "Created"],
//       ...filteredData.map((item) => [
//         item.id,
//         item.patientName,
//         item.items.length,
//         item.totalAmount,
//         item.paymentStatus,
//         item.createdAt,
//       ]),
//     ];

//     const blob = new Blob(
//       [csvRows.map((row) => row.join(",")).join("\n")],
//       { type: "text/csv" }
//     );

//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "pharmacy_sales.csv";
//     link.click();
//   };

//   const addItem = () => {

//     setItems([
//       ...items,
//       {
//         medicationId: 0,
//         medicationName: "",
//         quantity: 1,
//         price: 0,
//       },
//     ]);
//   };

//   const updateItem = (
//     index: number,
//     field: keyof SaleItem,
//     value: any
//   ) => {

//     const updated = [...items];

//     updated[index] = {
//       ...updated[index],
//       [field]: value,
//     };

//     setItems(updated);
//   };

//   const createSale = () => {

//     const total = items.reduce(
//       (sum, item) => sum + item.quantity * item.price,
//       0
//     );

//     const newSale: Sale = {
//       id: Date.now(),
//       patientName: patientName || "Walk-in",
//       items,
//       totalAmount: total,
//       paymentStatus: payment,
//       createdAt: dayjs().format("YYYY-MM-DD"),
//     };

//     setData([...data, newSale]);

//     message.success("Sale recorded");

//     setItems([]);
//     setPatientName("");

//     setModalOpen(false);
//   };

//   const columns: ColumnsType<Sale> = [

//     { title: "ID", dataIndex: "id" },

//     { title: "Patient", dataIndex: "patientName" },

//     {
//       title: "Items",
//       render: (_, record) => record.items.length,
//     },

//     {
//       title: "Total (₦)",
//       dataIndex: "totalAmount",
//     },

//     {
//       title: "Payment",
//       render: (_, record) =>
//         record.paymentStatus === "paid"
//           ? <Tag color="green">Paid</Tag>
//           : <Tag color="orange">Pending</Tag>,
//     },

//     { title: "Created", dataIndex: "createdAt" },

//     {
//       title: "Actions",
//       render: (_, record) => (
//         <Button
//           size="small"
//           onClick={() => {
//             setSelectedSale(record);
//             setDrawerOpen(true);
//           }}
//         >
//           View
//         </Button>
//       ),
//     },
//   ];

//   return (

//     <div className="p-6 space-y-6">

//       <SectionHeader
//         title="Pharmacy Sales"
//         subtitle="Manage pharmacy medication sales"
//       />

//       <div className="flex justify-between">

//         <Button
//           onClick={() => setShowFilters(!showFilters)}
//         >
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </Button>

//         <Space>

//           <Button
//             type="primary"
//             onClick={() => setModalOpen(true)}
//           >
//             New Sale
//           </Button>

//           <Button
//             icon={<Download size={14} />}
//             onClick={exportCSV}
//           >
//             Export CSV
//           </Button>

//         </Space>

//       </div>

//       {showFilters && (

//         <div className="bg-white p-4 rounded-2xl shadow-sm">

//           <SalesFilters
//             search={search}
//             setSearch={setSearch}
//             patient={patient}
//             setPatient={setPatient}
//             paymentStatus={paymentStatus}
//             setPaymentStatus={setPaymentStatus}
//             dateRange={dateRange}
//             setDateRange={setDateRange}
//             onReset={handleReset}
//           />

//         </div>

//       )}

//       <div className="bg-white p-4 rounded-2xl shadow-sm">

//         <Table
//           columns={columns}
//           dataSource={filteredData}
//           rowKey="id"
//           pagination={{ pageSize: 10 }}
//         />

//       </div>

//       <Drawer
//         title="Sale Details"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         width={420}
//       >

//         {selectedSale && (

//           <div className="space-y-3">

//             <p>
//               <strong>Patient:</strong> {selectedSale.patientName}
//             </p>

//             <p>
//               <strong>Status:</strong> {selectedSale.paymentStatus}
//             </p>

//             <div>

//               <strong>Items</strong>

//               <ul className="ml-4 list-disc">

//                 {selectedSale.items.map((item, index) => (

//                   <li key={index}>
//                     {item.medicationName} — {item.quantity}
//                   </li>

//                 ))}

//               </ul>

//             </div>

//             <p className="font-semibold text-lg">
//               Total: ₦{selectedSale.totalAmount}
//             </p>

//           </div>

//         )}

//       </Drawer>

//       <Modal
//         title="New Pharmacy Sale"
//         open={modalOpen}
//         onCancel={() => setModalOpen(false)}
//         onOk={createSale}
//       >

//         <div className="space-y-4">

//           <div>

//             <label className="block text-sm mb-1">
//               Patient
//             </label>

//             <Select
//               placeholder="Select patient"
//               value={patientName}
//               onChange={setPatientName}
//               style={{ width: "100%" }}
//             >
//               <Option value="Walk-in">Walk-in</Option>
//               {mockPatients.map((p) => (
//                     <Option key={p.id} value={p.name}>
//                         {p.name}
//                     </Option>
//                     ))}
//             </Select>

//           </div>

//           {items.map((item, index) => (

//             <Space key={index} style={{ display: "flex" }}>

//               <Select
//                 placeholder="Medication"
//                 style={{ width: 200 }}
//                 onChange={(value) => {

//                   const med = mockMedications.find(
//                     (m) => m.name === value
//                   );

//                   updateItem(index, "medicationName", value);
//                   updateItem(index, "medicationId", med?.id);
//                   updateItem(index, "price", med?.unitPrice || 0 );

//                 }}
//               >

//                 {mockMedications.map((m) => (

//                   <Option key={m.id} value={m.name}>
//                     {m.name}
//                   </Option>

//                 ))}

//               </Select>

//               <InputNumber
//                 min={1}
//                 placeholder="Qty"
//                 onChange={(v) =>
//                   updateItem(index, "quantity", v)
//                 }
//               />

//             </Space>

//           ))}

//           <Button onClick={addItem}>
//             Add Medication
//           </Button>

//         </div>

//       </Modal>

//     </div>
//   );
// };

// export default PharmacySales;


import React, { useMemo, useState } from "react";
import {
  Table,
  Tag,
  Button,
  Space,
  Drawer,
  Modal,
  Select,
  InputNumber,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Download } from "lucide-react";
import dayjs from "../../utils/dayJs";

import SectionHeader from "../../components/ui/SectionHeader";
import SalesFilters from "../../components/pharmacy/SalesFilter";

import {
  mockMedications,
  mockSales,
  mockPatients,
} from "../../data/pharmacy";

import type { Sale, SaleItem } from "../../types/pharmacy.types";

const { Option } = Select;

const PharmacySales: React.FC = () => {
  const [data, setData] = useState<Sale[]>(mockSales);
  const [search, setSearch] = useState("");
  const [patient, setPatient] = useState("all");
  const [paymentStatus, setPaymentStatus] = useState("all");
  const [dateRange, setDateRange] = useState<[any, any] | null>(null);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedSale, setSelectedSale] = useState<Sale | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [patientName, setPatientName] = useState("");
  const [payment, setPayment] = useState<"paid" | "pending">("paid");

  const [items, setItems] = useState<SaleItem[]>([]);


  const filteredData = useMemo(() => {
    return data.filter((sale) => {
      const matchesSearch =
        sale.patientName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        sale.id.toString().includes(search);

      const matchesPatient =
        patient === "all" || sale.patientName === patient;

      const matchesPayment =
        paymentStatus === "all" ||
        sale.paymentStatus === paymentStatus;

      const matchesDate =
        !dateRange ||
        (dateRange[0] &&
          dateRange[1] &&
          dayjs(sale.createdAt).isAfter(dateRange[0]) &&
          dayjs(sale.createdAt).isBefore(dateRange[1]));

      return (
        matchesSearch &&
        matchesPatient &&
        matchesPayment &&
        matchesDate
      );
    });
  }, [data, search, patient, paymentStatus, dateRange]);

  const handleReset = () => {
    setSearch("");
    setPatient("all");
    setPaymentStatus("all");
    setDateRange(null);
  };

  /*
  ==========================
  EXPORT CSV
  ==========================
  */

  const exportCSV = () => {
    const csvRows = [
      ["ID", "Patient", "Items", "Total", "Payment", "Created"],
      ...filteredData.map((item) => [
        item.id,
        item.patientName,
        item.items.length,
        item.totalAmount,
        item.paymentStatus,
        item.createdAt,
      ]),
    ];

    const blob = new Blob(
      [csvRows.map((row) => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "pharmacy_sales.csv";
    link.click();
  };

  /*
  ==========================
  ITEMS MANAGEMENT
  ==========================
  */

  const addItem = () => {
    setItems([
      ...items,
      {
        medicationId: 0,
        medicationName: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const removeItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const updateItem = (
    index: number,
    field: keyof SaleItem,
    value: any
  ) => {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setItems(updated);
  };

  /*
  ==========================
  TOTAL
  ==========================
  */

  const totalAmount = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  }, [items]);

  /*
  ==========================
  CREATE SALE
  ==========================
  */

  const createSale = () => {
    if (items.length === 0) {
      message.error("Add at least one medication");
      return;
    }

    const newSale: Sale = {
      id: Date.now(),
      patientName: patientName || "Walk-in",
      items,
      totalAmount,
      paymentStatus: payment,
      createdAt: dayjs().format("YYYY-MM-DD"),
    };

    setData([...data, newSale]);

    message.success("Sale recorded");

    setItems([]);
    setPatientName("");
    setModalOpen(false);
  };

  /*
  ==========================
  TABLE
  ==========================
  */

  const columns: ColumnsType<Sale> = [
    { title: "ID", dataIndex: "id" },

    { title: "Patient", dataIndex: "patientName" },

    {
      title: "Items",
      render: (_, record) => record.items.length,
    },

    {
      title: "Total (₦)",
      dataIndex: "totalAmount",
    },

    {
      title: "Payment",
      render: (_, record) =>
        record.paymentStatus === "paid" ? (
          <Tag color="green">Paid</Tag>
        ) : (
          <Tag color="orange">Pending</Tag>
        ),
    },

    { title: "Created", dataIndex: "createdAt" },

    {
      title: "Actions",
      render: (_, record) => (
        <Button
          size="small"
          onClick={() => {
            setSelectedSale(record);
            setDrawerOpen(true);
          }}
        >
          View
        </Button>
      ),
    },
  ];

  /*
  ==========================
  UI
  ==========================
  */

  return (
    <div className="p-6 space-y-6">

      <SectionHeader
        title="Pharmacy Sales"
        subtitle="Manage pharmacy medication sales"
      />

      <div className="flex justify-between">

        <Button
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        <Space>

          <Button
            type="primary"
            onClick={() => setModalOpen(true)}
          >
            New Sale
          </Button>

          <Button
            icon={<Download size={14} />}
            onClick={exportCSV}
          >
            Export CSV
          </Button>

        </Space>

      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <SalesFilters
            search={search}
            setSearch={setSearch}
            patient={patient}
            setPatient={setPatient}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onReset={handleReset}
          />
        </div>
      )}

      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>

      <Drawer
        title="Sale Details"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={420}
      >

        {selectedSale && (
          <div className="space-y-3">

            <p>
              <strong>Patient:</strong>{" "}
              {selectedSale.patientName}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {selectedSale.paymentStatus}
            </p>

            <div>

              <strong>Items</strong>

              <ul className="ml-4 list-disc">

                {selectedSale.items.map((item, index) => (
                  <li key={index}>
                    {item.medicationName} — Qty {item.quantity}
                  </li>
                ))}

              </ul>

            </div>

            <p className="font-semibold text-lg">
              Total: ₦{selectedSale.totalAmount}
            </p>

          </div>
        )}

      </Drawer>

      <Modal
        title="New Pharmacy Sale"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={createSale}
        width={650}
      >

        <div className="space-y-4">

          <div>

            <label className="block text-sm mb-1">
              Patient
            </label>

            <Select
              placeholder="Select patient"
              value={patientName}
              onChange={setPatientName}
              style={{ width: "100%" }}
            >

              <Option value="Walk-in">Walk-in</Option>

              {mockPatients.map((p) => (
                <Option key={p.id} value={p.name}>
                  {p.name}
                </Option>
              ))}

            </Select>

          </div>

          {items.map((item, index) => (

            <Space key={index} style={{ display: "flex" }}>

              <Select
                placeholder="Medication"
                style={{ width: 220 }}
                value={item.medicationName}
                onChange={(value) => {

                  const med = mockMedications.find(
                    (m) => m.name === value
                  );

                  updateItem(index, "medicationName", value);
                  updateItem(index, "medicationId", med?.id);
                  updateItem(index, "price", med?.unitPrice || 0);
                }}
              >

                {mockMedications.map((m) => (
                  <Option key={m.id} value={m.name}>
                    {m.name}
                  </Option>
                ))}

              </Select>

              <InputNumber
                min={1}
                value={item.quantity}
                onChange={(v) =>
                  updateItem(index, "quantity", v)
                }
              />

              <span>₦{item.price}</span>

              <Button
                danger
                onClick={() => removeItem(index)}
              >
                Remove
              </Button>

            </Space>

          ))}

          <Button onClick={addItem}>
            Add Medication
          </Button>

          <div className="text-right font-semibold text-lg">
            Total: ₦{totalAmount}
          </div>

        </div>

      </Modal>

    </div>
  );
};

export default PharmacySales;
