import React from "react";
import {
  ClipboardList,
  FlaskConical,
  Clock,
  AlertTriangle,
  PlusCircle,
} from "lucide-react";

import { mockRequests } from "../../data/lab.mock";
import TableRow from "../../components/Lab/TableRow";
import QueueItem from "../../components/Lab/QueueItem";
import QuickButton from "../../components/Lab/QuickButton";
import SectionHeader from "../../components/ui/SectionHeader";
import StatsCard from "../../components/ui/StatsCard";


const LabDashboard: React.FC = () => {
  const total = mockRequests.length;
  const waiting = mockRequests.filter(r => r.status === "waiting").length;
  const processing = mockRequests.filter(r => r.status === "processing").length;
  const completed = mockRequests.filter(r => r.status === "completed").length;

  return (
    <div className="p-6 space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <StatsCard
          title="Total Requests"
          value={total}
          icon={ClipboardList}
          iconBg="bg-primary/10"
          iconColor="text-primary"
        />

        <StatsCard
          title="Waiting"
          value={waiting}
          icon={Clock}
          iconBg="bg-yellow-100 dark:bg-yellow-900"
          iconColor="text-yellow-600"
          valueColor="text-yellow-600"
        />

        <StatsCard
          title="Processing"
          value={processing}
          icon={FlaskConical}
          iconBg="bg-blue-100 dark:bg-blue-900"
          iconColor="text-blue-600"
          valueColor="text-blue-600"
        />

        <StatsCard
          title="Completed"
          value={completed}
          icon={AlertTriangle}
          iconBg="bg-green-100 dark:bg-green-900"
          iconColor="text-green-600"
          valueColor="text-green-600"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-6">
            <SectionHeader title="Lab Queue Overview" />

            <div className="space-y-4">
                <QueueItem label="Waiting" count={waiting} />
                <QueueItem label="Processing" count={processing} />
                <QueueItem label="Completed" count={completed} />
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <SectionHeader title="Quick Actions" />

          <div className="space-y-3">
            <QuickButton label="New Lab Request" icon={PlusCircle} />
            <QuickButton label="View Queue" icon={Clock} />
            <QuickButton label="Enter Results" icon={FlaskConical} />
          </div>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <SectionHeader title="Recent Lab Requests" subtitle="Latest activity in the lab" action={
            <button className="text-primary text-sm font-medium">
            View All
            </button>
        } />

        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-3">Patient</th>
              <th className="text-left">Test</th>
              <th className="text-left">Priority</th>
              <th className="text-left">Status</th>
              <th className="text-left">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {mockRequests.map(request => (
              <TableRow key={request.id} request={request} />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default LabDashboard;