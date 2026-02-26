import React from "react";
import { Modal, Descriptions, Tag, Button } from "antd";
import type { LabResult } from "../../types/lab.types";

interface LabResultModalProps {
  open: boolean;
  onClose: () => void;
  result: LabResult | null;
  isDark: boolean;
}

const LabResultModal: React.FC<LabResultModalProps> = ({
  open,
  onClose,
  result,
  isDark,
}) => {
  if (!result) return null;

  return (
    <Modal
      open={open}
      title="Lab Test Details"
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
      centered
      bodyStyle={{
        padding: "1.5rem",
        backgroundColor: isDark ? "#1F2937" : "#fff", // bg-gray-800 for dark
        color: isDark ? "#F3F4F6" : "#111827", // text-gray-100
      }}
      className={isDark ? "dark-modal" : ""}
    >
      <Descriptions
        bordered
        column={1}
        labelStyle={{ fontWeight: 600, width: 150 }}
        contentStyle={{ color: isDark ? "#F3F4F6" : "#4B5563" }}
      >
        <Descriptions.Item label="Request ID">{result.requestId}</Descriptions.Item>
        <Descriptions.Item label="Patient">{result.patientName}</Descriptions.Item>
        <Descriptions.Item label="Test">{result.testName}</Descriptions.Item>
        <Descriptions.Item label="Technician">{result.technician}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag
            color={
              result.status === "pending"
                ? "orange"
                : result.status === "verified"
                ? "green"
                : "red"
            }
          >
            {result.status.toUpperCase()}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Completed At">{result.completedAt}</Descriptions.Item>
        <Descriptions.Item label="Notes">{result.notes || "N/A"}</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default LabResultModal;