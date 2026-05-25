import type { LabRequest } from "../../types/lab";

interface TableRowProps {
  request: LabRequest;
}

const TableRow: React.FC<TableRowProps> = ({ request }) => {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="py-3">{request.patientName}</td>
      <td>{request.testName}</td>
      <td>{request.priority}</td>
      <td>{request.status}</td>
      <td>{request.date}</td>
    </tr>
  );
};

export default TableRow;