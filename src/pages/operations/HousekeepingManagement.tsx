import React from "react";
import HmisPlaceholderPage from "../../components/ui/HmisPlaceholderPage";
import { Sparkles, CheckCircle2, Clock, Users } from "lucide-react";

export const HousekeepingManagement: React.FC = () => {
  return (
    <HmisPlaceholderPage
      title="Housekeeping & Environmental Hygiene"
      subtitle="Ward cleaning rosters, terminal room disinfection, spill kits, hygiene audit scores and sanitary supply control"
      department="Operations & Facilities"
      badge="Environmental Hygiene"
      icon={Sparkles}
      tabs={[
        { key: "cleaning-schedules", label: "Ward Cleaning Shifts" },
        { key: "terminal-cleans", label: "Bed Discharge Terminal Cleans", count: 8 },
        { key: "hygiene-audits", label: "Fluorescent Gel Cleanliness Audits" },
        { key: "chemicals-stock", label: "Disinfectants & Chemical Stores" },
      ]}
      metrics={[
        { title: "Housekeeping Staff on Duty", value: "38 Staff", icon: Users },
        { title: "Terminal Cleans Completed", value: "19 Today", icon: CheckCircle2, valueColor: "text-emerald-600" },
        { title: "Avg Room Turnaround", value: "22 Minutes", icon: Clock },
        { title: "Hygiene ATP Swab Pass Rate", value: "98.6%", icon: Sparkles },
      ]}
      capabilities={[
        "Automated bed release alerts: when ADT discharges a patient, housekeeping receives immediate bed notification",
        "Color-coded cleaning rag protocols preventing cross-contamination between toilets, patient beds, and sterile areas",
        "Ultraviolet-C (UV-C) terminal room disinfection tracking logs for isolation rooms",
      ]}
    />
  );
};

export default HousekeepingManagement;
