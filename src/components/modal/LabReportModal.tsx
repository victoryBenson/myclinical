import React from "react";
import { Modal, Descriptions, Tag, Button, Timeline, Divider } from "antd";
import { FileText, Printer, CheckCircle, XCircle } from "lucide-react";
import type { LabReport } from "../../types/lab";

interface Props {
  open: boolean;
  onClose: () => void;
  report: LabReport | null;
}

const LabReportModal: React.FC<Props> = ({
  open,
  onClose,
  report,
}) => {
  if (!report) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleApprove = () => {
    console.log("Approved:", report.reportId);
  };

  const handleReject = () => {
    console.log("Rejected:", report.reportId);
  };

  return (
    <Modal
      open={open}
      title="Lab Report Details"
      onCancel={onClose}
      width={800}
      centered
      footer={[
        <Button key="print" icon={<Printer size={14} />} onClick={handlePrint}>
          Print
        </Button>,
        <Button
          key="reject"
          danger
          icon={<XCircle size={14} />}
          onClick={handleReject}
        >
          Reject
        </Button>,
        <Button
          key="approve"
          type="primary"
          icon={<CheckCircle size={14} />}
          onClick={handleApprove}
        >
          Approve
        </Button>,
      ]}
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Report ID">
          {report.reportId}
        </Descriptions.Item>

        <Descriptions.Item label="Patient">
          {report.patientName}
        </Descriptions.Item>

        <Descriptions.Item label="Test">
          {report.testName}
        </Descriptions.Item>

        <Descriptions.Item label="Status">
          <Tag
            color={
              report.status === "approved"
                ? "green"
                : report.status === "pending"
                ? "orange"
                : "red"
            }
          >
            {report.status.toUpperCase()}
          </Tag>
        </Descriptions.Item>

        <Descriptions.Item label="Issued Date">
          {report.issuedAt}
        </Descriptions.Item>

        <Descriptions.Item label="Remarks">
          {report.remarks || "N/A"}
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <h3 className="font-semibold mb-3">Report Timeline</h3>
      <Timeline
        items={[
          {
            children: `Created on ${report.createdAt}`,
          },
          {
            children: `Processed by Lab Technician`,
          },
          {
            children:
              report.status === "approved"
                ? "Approved by Supervisor"
                : "Pending Approval",
          },
        ]}
      />

      <Divider />

      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <FileText size={16} />
        Report Preview
      </h3>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          PDF Preview Placeholder
        </p>
      </div>

      <Divider />

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">Authorized By</p>
          <p className="text-xs text-gray-500">
            Dr. John Supervisor
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium">Digital Signature</p>
          <p className="italic text-primary">
            {report.status === "approved"
              ? "✔ Electronically Signed"
              : "Awaiting Signature"}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LabReportModal;