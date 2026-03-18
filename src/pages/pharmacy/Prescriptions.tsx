// import React, { useMemo, useState } from "react";
// import { Table, Tag, Button, Space } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import type { Dayjs } from "dayjs";
// import dayjs from "../../utils/dayJs";
// import { Download } from "lucide-react";
// import SectionHeader from "../../components/ui/SectionHeader";
// import type { Prescription } from "../../types/pharmacy.types";
// import { mockPrescriptions } from "../../data/pharmacy";
// import PrescriptionFilters from "../../components/pharmacy/PrescriptionsFilter";
// import { Drawer, Modal, InputNumber, message } from "antd";


// const Prescriptions: React.FC = () => {
//   const [data, setData] = useState<Prescription[]>(mockPrescriptions);
//   const [showFilters, setShowFilters] = useState(true);
//     const [selectedPrescription, setSelectedPrescription] =
//   useState<Prescription | null>(null);

// const [drawerOpen, setDrawerOpen] = useState(false);
// const [dispenseModalOpen, setDispenseModalOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("all");
//   const [paymentStatus, setPaymentStatus] = useState("all");
//   const [doctor, setDoctor] = useState("all");
//   const [dateRange, setDateRange] =
//     useState<[Dayjs | null, Dayjs | null] | null>(null);

//   const resetFilters = () => {
//     setSearch("");
//     setStatus("all");
//     setPaymentStatus("all");
//     setDoctor("all");
//     setDateRange(null);
//   };

//   const updateStatus = (id: number, newStatus: any) => {
//     setData(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, status: newStatus } : item
//       )
//     );
//   };

//   const filteredData = useMemo(() => {
//     return data.filter(item => {

//       const matchesSearch =
//         item.patientName.toLowerCase().includes(search.toLowerCase()) ||
//         item.id.toString().includes(search);

//       const matchesStatus =
//         status === "all" || item.status === status;

//       const matchesPayment =
//         paymentStatus === "all" || item.paymentStatus === paymentStatus;

//       const matchesDoctor =
//         doctor === "all" || item.doctorName === doctor;

//       const matchesDate =
//         !dateRange ||
//         !dateRange[0] ||
//         !dateRange[1] ||
//         dayjs(item.date).isBetween(
//           dateRange[0],
//           dateRange[1],
//           "day",
//           "[]"
//         );

//       return (
//         matchesSearch &&
//         matchesStatus &&
//         matchesPayment &&
//         matchesDoctor &&
//         matchesDate
//       );
//     });
//   }, [data, search, status, paymentStatus, doctor, dateRange]);

//   const exportCSV = () => {
//     const csvRows = [
//       ["ID", "Patient", "Doctor", "Total", "Status", "Payment", "Date"],
//       ...filteredData.map(item => [
//         item.id,
//         item.patientName,
//         item.doctorName,
//         item.totalAmount,
//         item.status,
//         item.paymentStatus,
//         item.date,
//       ]),
//     ];

//     const blob = new Blob(
//       [csvRows.map(row => row.join(",")).join("\n")],
//       { type: "text/csv" }
//     );

//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "prescriptions.csv";
//     link.click();
//   };

//   const columns: ColumnsType<Prescription> = [
//     { title: "ID", dataIndex: "id" },
//     { title: "Patient", dataIndex: "patientName" },
//     { title: "Doctor", dataIndex: "doctorName" },
//     {
//       title: "Medications",
//       render: (_, record) => record.medications.length,
//     },
//     {
//       title: "Total (₦)",
//       dataIndex: "totalAmount",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       render: (status: string) => {
//         if (status === "pending")
//           return <Tag color="orange">Pending</Tag>;
//         if (status === "dispensed")
//           return <Tag color="green">Dispensed</Tag>;
//         return <Tag color="red">Cancelled</Tag>;
//       },
//     },
//     {
//       title: "Payment",
//       dataIndex: "paymentStatus",
//       render: (payment: string) =>
//         payment === "paid" ? (
//           <Tag color="green">Paid</Tag>
//         ) : (
//           <Tag color="red">Unpaid</Tag>
//         ),
//     },
//     { title: "Date", dataIndex: "date" },
//     {
//         title: "Actions",
//         render: (_, record) => (
//             <Space>
//             <Button
//                 size="small"
//                 onClick={() => {
//                 setSelectedPrescription(record);
//                 setDrawerOpen(true);
//                 }}
//             >
//                 View
//             </Button>

//             <Button
//                 size="small"
//                 type="primary"
//                 onClick={() => {
//                 setSelectedPrescription(record);
//                 setDispenseModalOpen(true);
//                 }}
//             >
//                 Dispense
//             </Button>
//             </Space>
//         ),
//         },
//     ];

//   return (
//     <div className="p-6 space-y-6">

//       <SectionHeader
//         title="Prescriptions"
//         subtitle="Manage and dispense patient prescriptions"
//       />

//       <div className="flex justify-between items-center">
//         <Button onClick={() => setShowFilters(!showFilters)}>
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </Button>

//         <Button
//           type="primary"
//           icon={<Download size={14} />}
//           onClick={exportCSV}
//         >
//           Export CSV
//         </Button>
//       </div>

//       {showFilters && (
//         <div className="bg-white rounded-2xl shadow-sm p-4">
//           <PrescriptionFilters
//             search={search}
//             setSearch={setSearch}
//             status={status}
//             setStatus={setStatus}
//             paymentStatus={paymentStatus}
//             setPaymentStatus={setPaymentStatus}
//             doctor={doctor}
//             setDoctor={setDoctor}
//             dateRange={dateRange}
//             setDateRange={setDateRange}
//             onReset={resetFilters}
//           />
//         </div>
//       )}

//       <div className="bg-white rounded-2xl shadow-sm p-4">
//         <Table
//           columns={columns}
//           dataSource={filteredData}
//           rowKey="id"
//           pagination={{ pageSize: 10 }}
//         />
//       </div>

//         <Drawer
//             title="Prescription Details"
//             open={drawerOpen}
//             onClose={() => setDrawerOpen(false)}
//             width={480}
//             >
//             {selectedPrescription && (
//                 <div className="space-y-4">

//                 <p><strong>Patient:</strong> {selectedPrescription.patientName}</p>
//                 <p><strong>Doctor:</strong> {selectedPrescription.doctorName}</p>
//                 <p><strong>Date:</strong> {selectedPrescription.date}</p>
//                 <p><strong>Status:</strong> {selectedPrescription.status}</p>
//                 <p><strong>Payment:</strong> {selectedPrescription.paymentStatus}</p>

//                 <div>
//                     <strong>Medications:</strong>
//                     <ul className="list-disc ml-6 mt-2">
//                     {selectedPrescription.medications.map((med, index) => (
//                         <li key={index}>{med}</li>
//                     ))}
//                     </ul>
//                 </div>

//                 <p className="text-lg font-semibold">
//                     Total: ₦{selectedPrescription.totalAmount}
//                 </p>

//                 <Button
//                     type="primary"
//                     onClick={() => window.print()}
//                 >
//                     Print Receipt
//                 </Button>
//                 </div>
//             )}
//         </Drawer>

//         <Modal
//             title="Dispense Prescription"
//             open={dispenseModalOpen}
//             onCancel={() => setDispenseModalOpen(false)}
//             onOk={() => {
//                 if (selectedPrescription) {
//                 updateStatus(selectedPrescription.id, "dispensed");
//                 message.success("Prescription dispensed successfully");
//                 setDispenseModalOpen(false);
//                 }
//             }}
//             >
//             {selectedPrescription && (
//                 <div className="space-y-4">
//                 {selectedPrescription.medications.map((med, index) => (
//                     <div key={index} className="flex justify-between items-center">
//                     <span>{med}</span>
//                     <InputNumber min={1} defaultValue={1} />
//                     </div>
//                 ))}
//                 </div>
//             )}
//         </Modal>

//     </div>
//   );
// };

// export default Prescriptions;


import React, { useMemo, useState } from "react";
import { Table, Tag, Button, Space, Drawer, Modal, InputNumber, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Dayjs } from "dayjs";
import dayjs from "../../utils/dayJs";
import { Download } from "lucide-react";
import SectionHeader from "../../components/ui/SectionHeader";
import type { Prescription } from "../../types/pharmacy.types";
import { mockPrescriptions, mockMedications } from "../../data/pharmacy";
import PrescriptionFilters from "../../components/pharmacy/PrescriptionsFilter";

const Prescriptions: React.FC = () => {
  const [data, setData] = useState<Prescription[]>(mockPrescriptions);
  const [showFilters, setShowFilters] = useState(true);
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dispenseModalOpen, setDispenseModalOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [paymentStatus, setPaymentStatus] = useState("all");
  const [doctor, setDoctor] = useState("all");
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null] | null>(null);

  const resetFilters = () => {
    setSearch("");
    setStatus("all");
    setPaymentStatus("all");
    setDoctor("all");
    setDateRange(null);
  };

  const updateStatus = (id: number, newStatus: any) => {
    setData(prev =>
      prev.map(item => {
        if (item.id === id) {
          if (newStatus === "dispensed") {
            return {
              ...item,
              status: "dispensed",
              dispensedAt: dayjs().format("YYYY-MM-DD HH:mm"),
            };
          }
          return { ...item, status: newStatus };
        }
        return item;
      })
    );
  };

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch =
        item.patientName.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toString().includes(search);

      const matchesStatus =
        status === "all" || item.status === status;

      const matchesPayment =
        paymentStatus === "all" || item.paymentStatus === paymentStatus;

      const matchesDoctor =
        doctor === "all" || item.doctorName === doctor;

      const matchesDate =
        !dateRange ||
        !dateRange[0] ||
        !dateRange[1] ||
        dayjs(item.createdAt).isBetween(
          dateRange[0],
          dateRange[1],
          "day",
          "[]"
        );

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPayment &&
        matchesDoctor &&
        matchesDate
      );
    });
  }, [data, search, status, paymentStatus, doctor, dateRange]);

  const exportCSV = () => {
    const csvRows = [
      ["ID", "Patient", "Doctor", "Total", "Status", "Payment", "Date"],
      ...filteredData.map(item => [
        item.id,
        item.patientName,
        item.doctorName,
        item.totalAmount,
        item.status,
        item.paymentStatus,
        item.createdAt,
      ]),
    ];

    const blob = new Blob(
      [csvRows.map(row => row.join(",")).join("\n")],
      { type: "text/csv" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "prescriptions.csv";
    link.click();
  };

  const renderTimeline = (prescription: Prescription) => (
    <div className="flex gap-6 text-sm text-gray-500 mt-4">
      <div>
        <p className="font-semibold">Created</p>
        <p>{prescription.createdAt}</p>
      </div>

      <div>
        <p className="font-semibold">Paid</p>
        <p>{prescription.paidAt || "Pending"}</p>
      </div>

      <div>
        <p className="font-semibold">Dispensed</p>
        <p>{prescription.dispensedAt || "Pending"}</p>
      </div>
    </div>
  );

  const columns: ColumnsType<Prescription> = [
    { title: "ID", dataIndex: "id" },
    { title: "Patient", dataIndex: "patientName" },
    { title: "Doctor", dataIndex: "doctorName" },
    {
      title: "Medications",
      render: (_, record) => record.medications.length,
    },
    { title: "Total (₦)", dataIndex: "totalAmount" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        if (status === "pending")
          return <Tag color="orange">Pending</Tag>;
        if (status === "dispensed")
          return <Tag color="green">Dispensed</Tag>;
        return <Tag color="red">Cancelled</Tag>;
      },
    },
    {
      title: "Payment",
      dataIndex: "paymentStatus",
      render: (payment: string) =>
        payment === "paid" ? (
          <Tag color="green">Paid</Tag>
        ) : (
          <Tag color="red">Unpaid</Tag>
        ),
    },
    { title: "Date", dataIndex: "createdAt" },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            onClick={() => {
              setSelectedPrescription(record);
              setDrawerOpen(true);
            }}
          >
            View
          </Button>

          <Button
            size="small"
            type="primary"
            disabled={
              record.paymentStatus !== "paid" ||
              record.status === "dispensed"
            }
            onClick={() => {
              setSelectedPrescription(record);
              setDispenseModalOpen(true);
            }}
          >
            Dispense
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <SectionHeader
        title="Prescriptions"
        subtitle="Manage and dispense patient prescriptions"
      />

      <div className="flex justify-between items-center">
        <Button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>

        <Button
          type="primary"
          icon={<Download size={14} />}
          onClick={exportCSV}
        >
          Export CSV
        </Button>
      </div>

      {showFilters && (
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <PrescriptionFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            paymentStatus={paymentStatus}
            setPaymentStatus={setPaymentStatus}
            doctor={doctor}
            setDoctor={setDoctor}
            dateRange={dateRange}
            setDateRange={setDateRange}
            onReset={resetFilters}
          />
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm p-4">
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>

      {/* Drawer */}
      <Drawer
        title="Prescription Details"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={480}
      >
        {selectedPrescription && (
          <div className="space-y-4">
            <p><strong>Patient:</strong> {selectedPrescription.patientName}</p>
            <p><strong>Doctor:</strong> {selectedPrescription.doctorName}</p>
            <p><strong>Date:</strong> {selectedPrescription.createdAt}</p>
            <p><strong>Status:</strong> {selectedPrescription.status}</p>
            <p><strong>Payment:</strong> {selectedPrescription.paymentStatus}</p>

            <div>
              <strong>Medications:</strong>
              <ul className="list-disc ml-6 mt-2">
                {selectedPrescription.medications.map((med, index) => (
                  <li key={index}>{med.name}</li>
                ))}
              </ul>
            </div>

            <p className="text-lg font-semibold">
              Total: ₦{selectedPrescription.totalAmount}
            </p>

            {renderTimeline(selectedPrescription)}

            <Button
              type="primary"
              onClick={() => window.print()}
            >
              Print Receipt
            </Button>
          </div>
        )}
      </Drawer>

      {/* Dispense Modal */}
      <Modal
        title="Dispense Prescription"
        open={dispenseModalOpen}
        onCancel={() => setDispenseModalOpen(false)}
        onOk={() => {
          if (!selectedPrescription) return;

          if (selectedPrescription.paymentStatus !== "paid") {
            message.error("Payment must be completed before dispensing.");
            return;
          }

          if (selectedPrescription.status === "dispensed") {
            message.warning("Already dispensed.");
            return;
          }

          // Deduct stock
          selectedPrescription.medications.forEach((medName) => {
            const medication = mockMedications.find(
              m => m.name === medName.name
            );
            if (medication) {
              medication.stock -= 1;
            }
          });

          updateStatus(selectedPrescription.id, "dispensed");

          message.success("Prescription dispensed successfully");
          setDispenseModalOpen(false);
        }}
      >
        {selectedPrescription && (
          <div className="space-y-4">
            {selectedPrescription.medications.map((med, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{med.name}</span>
                <InputNumber min={1} defaultValue={1} />
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Prescriptions;