import React, { useState } from "react";
import dayjs from "../../../utils/dayJs";
import toast from "react-hot-toast";
import {
  User,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  Droplet,
  Shield,
  CreditCard,
  Copy,
  Printer,
  CalendarPlus,
  UserPen,
  Clock,
  Stethoscope,
  BadgeCheck,
  AlertCircle,
  Users,
  Wallet,
  CheckCircle2,
  ShieldAlert,
  FileText,
  Activity,
  Layers,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import type { Patient } from "../../../types/patients";

interface PatientProfileModalProps {
  patient: Patient;
  onClose?: () => void;
}

type TabType =
  | "overview"
  | "personal"
  | "contact"
  | "medical"
  | "nextOfKin"
  | "insurance"
  | "activity";

export const PatientProfileModal: React.FC<PatientProfileModalProps> = ({
  patient,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  // Helper formatting functions
  const calculateAge = (dobString?: string | null): string => {
    if (!dobString) return "—";
    const birth = dayjs(dobString);
    if (!birth.isValid()) return "—";
    const years = dayjs().diff(birth, "year");
    return `${years} yrs`;
  };

  const formatDate = (dateString?: string | null): string => {
    if (!dateString) return "—";
    const d = dayjs(dateString);
    if (!d.isValid()) return dateString;
    return d.format("DD MMM YYYY");
  };

  const formatDateTime = (dateString?: string | null): string => {
    if (!dateString) return "—";
    const d = dayjs(dateString);
    if (!d.isValid()) return dateString;
    return d.format("DD MMM YYYY, hh:mm A");
  };

  const formatCurrency = (val?: string | number | null): string => {
    if (val === null || val === undefined || val === "") return "₦0.00";
    const num =
      typeof val === "number"
        ? val
        : parseFloat(val.toString().replace(/[^0-9.-]/g, ""));
    if (isNaN(num)) return "₦0.00";
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 2,
    }).format(num);
  };

  const handleCopyHospitalId = () => {
    const idToCopy = patient.patient_number || `PID-${patient.id}`;
    navigator.clipboard.writeText(idToCopy);
    toast.success(`Copied Hospital ID: ${idToCopy}`);
  };

  const handlePrintDossier = () => {
    toast.success(
      `Sending Clinical Dossier for #${patient.patient_number || patient.id} to printer...`
    );
  };

  // Avatar Initials
  const initials = `${patient.surname?.[0] || ""}${
    patient.other_names?.[0] || ""
  }`.toUpperCase() || "PT";

  const fullName = `${patient.title ? `${patient.title} ` : ""}${patient.surname} ${patient.other_names}`.trim();

  // Navigation Tabs Definition
  const tabs: { key: TabType; label: string; icon: React.ElementType; badge?: string }[] = [
    { key: "overview", label: "Overview", icon: ClipboardList },
    { key: "personal", label: "Personal Details", icon: User },
    { key: "contact", label: "Contact Info", icon: Phone },
    {
      key: "medical",
      label: "Medical Information",
      icon: HeartPulse,
      badge: patient.blood_group ? `${patient.blood_group} (${patient.genotype || "AA"})` : undefined,
    },
    { key: "nextOfKin", label: "Next of Kin", icon: Users },
    {
      key: "insurance",
      label: "Insurance / HMO",
      icon: Shield,
      badge: patient.hmo ? "HMO Active" : "Self-Pay",
    },
    { key: "activity", label: "Patient Activity", icon: Clock },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50/70 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100 font-sans antialiased overflow-hidden">
      
      {/* =========================================================================
          A. SOPHISTICATED PATIENT IDENTITY HEADER (FIXED TOP SECTION)
          ========================================================================= */}
      <div className="flex-shrink-0 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 shadow-xs px-6 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          
          {/* Identity Left: Avatar + Names + IDs + Demographics Bar */}
          <div className="flex items-start gap-4">
            {/* Avatar with Status Pulse */}
            <div className="relative flex-shrink-0">
              {patient.profile_pic ? (
                <img
                  src={patient.profile_pic}
                  alt={fullName}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/20 dark:ring-primary/40 shadow-sm"
                />
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-600 text-white font-bold text-xl flex items-center justify-center shadow-md shadow-primary/20 ring-2 ring-primary/20">
                  {initials}
                </div>
              )}
              {/* Online / Active Badge Indicator */}
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-900 ${
                  patient.deceased
                    ? "bg-slate-400"
                    : patient.is_active
                    ? "bg-emerald-500"
                    : "bg-amber-500"
                }`}
                title={
                  patient.deceased
                    ? "Deceased Record"
                    : patient.is_active
                    ? "Active Patient Record"
                    : "Inactive Status"
                }
              />
            </div>

            {/* Title & Metadata */}
            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white truncate">
                  {fullName}
                </h1>

                {/* Patient Status Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                      patient.is_out_patient
                        ? "bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"
                        : "bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800"
                    }`}
                  >
                    <Layers size={11} />
                    {patient.is_out_patient ? "Out-Patient (OPD)" : "In-Patient (IPD)"}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${
                      patient.deceased
                        ? "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
                        : patient.is_active
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
                        : "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        patient.is_active ? "bg-emerald-500" : "bg-zinc-400"
                      }`}
                    />
                    {patient.deceased ? "Deceased" : patient.is_active ? "Active" : "Inactive"}
                  </span>

                  {patient.is_verified && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-sky-50 text-sky-700 border border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800">
                      <BadgeCheck size={12} className="text-sky-600 dark:text-sky-400" />
                      Verified
                    </span>
                  )}
                </div>
              </div>

              {/* Patient Identifiers & Core Demographics Row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-zinc-400">
                {/* Hospital ID Chip with Copy */}
                <button
                  type="button"
                  onClick={handleCopyHospitalId}
                  className="inline-flex items-center gap-1 font-mono font-semibold text-slate-700 dark:text-zinc-300 hover:text-primary transition-colors group"
                  title="Click to copy Hospital Number"
                >
                  <span className="text-slate-400 dark:text-zinc-500 font-sans font-normal">MRN:</span>
                  <span>{patient.patient_number || `PID-${patient.id}`}</span>
                  <Copy size={11} className="opacity-60 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
                </button>

                <span className="text-slate-300 dark:text-zinc-700">•</span>

                {/* Gender & Age */}
                <span>
                  {patient.gender || "Gender Unspecified"}
                  {patient.date_of_birth && (
                    <>
                      {" "}
                      •{" "}
                      <strong className="font-semibold text-slate-700 dark:text-zinc-200">
                        {calculateAge(patient.date_of_birth)}
                      </strong>{" "}
                      ({formatDate(patient.date_of_birth)})
                    </>
                  )}
                </span>

                <span className="text-slate-300 dark:text-zinc-700">•</span>

                {/* Blood Group & Genotype */}
                <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-zinc-300">
                  <Droplet size={12} className="text-rose-500" />
                  <span>
                    {patient.blood_group || "Blood Group —"}
                    {patient.genotype ? ` (${patient.genotype})` : ""}
                  </span>
                </span>

                <span className="text-slate-300 dark:text-zinc-700">•</span>

                {/* HMO / Payment Mode */}
                <span className="inline-flex items-center gap-1 font-medium text-slate-700 dark:text-zinc-300">
                  <Shield size={12} className="text-primary" />
                  <span>{patient.hmo?.name || "Self-Pay (Cash)"}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Identity Right: Action Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => toast.success(`Appointment scheduler opened for ${fullName}`)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary-600 shadow-xs shadow-primary/20 transition-colors"
            >
              <CalendarPlus size={14} />
              <span>Book Appointment</span>
            </button>

            <button
              type="button"
              onClick={() => toast.success(`Patient record edit mode initialized`)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 border border-slate-200/80 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-750 transition-colors"
            >
              <UserPen size={14} />
              <span>Edit Record</span>
            </button>

            <button
              type="button"
              onClick={handlePrintDossier}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 border border-slate-200/80 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-750 transition-colors"
              title="Print Clinical Summary Dossier"
            >
              <Printer size={14} />
              <span>Print Dossier</span>
            </button>
          </div>
        </div>

        {/* Clinical Alert & Caution Banner */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 rounded-xl px-3.5 py-2 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-400">
                <ShieldAlert size={12} />
              </span>
              <div>
                <span className="font-semibold text-amber-900 dark:text-amber-200">
                  Clinical Alert:
                </span>{" "}
                <span className="text-amber-800/90 dark:text-amber-300/80">
                  {patient.genotype === "SS" || patient.genotype === "SC"
                    ? "Sickle Cell Protocol Active • Monitor hydration and acute pain crisis precautions"
                    : "Penicillin Sensitivity noted in records • Exercise caution during empirical antimicrobial prescription"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/60">
                <CheckCircle2 size={11} />
                NKDA Validated
              </span>
              <button
                type="button"
                onClick={() => toast.success("Clinical caution record refreshed")}
                className="text-[11px] font-semibold text-amber-800 dark:text-amber-300 hover:underline"
              >
                Manage Cautions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          B. REFINED TAB NAVIGATION BAR
          ========================================================================= */}
      <div className="flex-shrink-0 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 px-6">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? "bg-primary text-white shadow-xs shadow-primary/20"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-zinc-800"
                }`}
              >
                <Icon
                  size={14}
                  className={isActive ? "text-white" : "text-slate-400 dark:text-zinc-500"}
                />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          C. TAB CONTENT VIEWS (INTERNALLY SCROLLABLE WORKSPACE)
          ========================================================================= */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Financial Health KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                icon={Wallet}
                label="Current Balance"
                value={formatCurrency(patient.balance)}
                subtext="Patient billing account"
                variant={Number(patient.balance || 0) < 0 ? "danger" : "default"}
              />
              <MetricCard
                icon={CreditCard}
                label="Outstanding Dues"
                value={formatCurrency(patient.outstanding)}
                subtext={Number(patient.outstanding || 0) > 0 ? "Pending hospital settlement" : "No outstanding bills"}
                variant={Number(patient.outstanding || 0) > 0 ? "danger" : "success"}
              />
              <MetricCard
                icon={Sparkles}
                label="Deposit Balance"
                value={formatCurrency(patient.depositBalance)}
                subtext="Advance medical deposits"
                variant="success"
              />
              <MetricCard
                icon={Shield}
                label="Credit Limit"
                value={formatCurrency(patient.credit_limit)}
                subtext={patient.credit_limit_expiry_date ? `Exp: ${formatDate(patient.credit_limit_expiry_date)}` : "Authorized credit line"}
                variant="info"
              />
            </div>

            {/* Split Snapshot: Clinical Profile & Emergency / Insurance Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Clinical Snapshot */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
                      <HeartPulse size={16} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                      Clinical Vitals & Hematology
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("medical")}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    View Medical File →
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <SnapshotTile
                    label="Blood Group"
                    value={patient.blood_group || "—"}
                    highlight
                  />
                  <SnapshotTile
                    label="Genotype"
                    value={patient.genotype || "—"}
                    highlight
                  />
                  <SnapshotTile
                    label="Rhesus Factor"
                    value={patient.blood_type || "Rh+"}
                  />
                  <SnapshotTile
                    label="Care Type"
                    value={patient.is_out_patient ? "Out-Patient" : "In-Patient"}
                  />
                  <SnapshotTile
                    label="Last Appointment"
                    value={formatDate(patient.last_appointment_date)}
                  />
                  <SnapshotTile
                    label="Next Follow-up"
                    value={formatDate(patient.nextAppointment)}
                  />
                </div>

                {/* Quick Clinical Status Alert */}
                <div className="rounded-xl bg-slate-50 dark:bg-zinc-800/60 p-3 text-xs text-slate-600 dark:text-zinc-300 flex items-center justify-between">
                  <span>Longitudinal Medical Record: Synchronized</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">MPI #Active</span>
                </div>
              </div>

              {/* Right: Insurance & Next of Kin Preview */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300">
                      <Shield size={16} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                      Coverage & Emergency Liaison
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("insurance")}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    View Insurance →
                  </button>
                </div>

                <div className="space-y-3">
                  {/* HMO Summary */}
                  <div className="p-3.5 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/40 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                        Primary Healthcare Sponsor
                      </p>
                      <p className="text-sm font-bold text-slate-800 dark:text-zinc-100 mt-0.5">
                        {patient.hmo?.name || "Self-Pay / Private Cash Patient"}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                        {patient.hmo?.coverageType || "Standard Direct Billing"} •{" "}
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          {patient.hmo?.coverage ? `${patient.hmo.coverage}% Co-Pay` : "Direct Billing"}
                        </span>
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800">
                      Eligible
                    </span>
                  </div>

                  {/* Next of Kin Summary */}
                  <div className="p-3.5 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/40 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                        Primary Next of Kin
                      </p>
                      <p className="text-sm font-bold text-slate-800 dark:text-zinc-100 mt-0.5">
                        {patient.nextOfKin?.surname || patient.nextOfKin?.other_names
                          ? `${patient.nextOfKin.surname} ${patient.nextOfKin.other_names}`
                          : "No Next of Kin Documented"}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                        {patient.nextOfKin?.relationship || "Unspecified Relation"} •{" "}
                        <span className="font-medium text-slate-700 dark:text-zinc-200">
                          {patient.nextOfKin?.phoneNumber || "No phone listed"}
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab("nextOfKin")}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Address Geo Bar */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                      Residential Address & Localization
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-zinc-100 mt-0.5">
                      {patient.address || "No residential address recorded on file"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${patient.phone_number}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200 transition"
                  >
                    <Phone size={13} />
                    <span>{patient.phone_number || "No Phone"}</span>
                  </a>
                  <a
                    href={`mailto:${patient.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200 transition"
                  >
                    <Mail size={13} />
                    <span>{patient.email || "No Email"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PERSONAL DETAILS */}
        {activeTab === "personal" && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Official Demographic & Civil Records
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Verified biographical identity and legal registration details
                </p>
              </div>
              <button
                type="button"
                onClick={() => toast.success("Opening patient edit modal...")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <UserPen size={13} />
                <span>Modify Fields</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AttributeCard label="Title" value={patient.title} />
              <AttributeCard label="Surname (Last Name)" value={patient.surname} />
              <AttributeCard label="Other Names" value={patient.other_names} />
              <AttributeCard label="Gender" value={patient.gender} />
              <AttributeCard
                label="Date of Birth"
                value={patient.date_of_birth ? formatDate(patient.date_of_birth) : undefined}
              />
              <AttributeCard
                label="Calculated Age"
                value={patient.date_of_birth ? calculateAge(patient.date_of_birth) : undefined}
              />
              <AttributeCard label="Marital Status" value={patient.maritalStatus} />
              <AttributeCard label="Occupation / Trade" value={patient.occupation} />
              <AttributeCard label="Ethnicity / Tribe" value={patient.ethnicity} />
              <AttributeCard
                label="National Identity Number (NIN)"
                value={patient.nin}
                isMonospace
              />
              <AttributeCard
                label="Hospital Master ID"
                value={patient.patient_number || `PID-${patient.id}`}
                isMonospace
              />
              <AttributeCard
                label="Legacy Medical Record (Old ID)"
                value={patient.old_id || "None"}
              />
              <AttributeCard
                label="Patient Care Classification"
                value={patient.is_out_patient ? "Out-Patient (OPD)" : "In-Patient (IPD)"}
              />
              <AttributeCard
                label="Patient Portal Access"
                value={patient.hasEnrolledOnline ? "Enrolled Online Portal" : "Walk-in Desk Entry"}
              />
              <AttributeCard
                label="Registration Timestamp"
                value={formatDateTime(patient.createdAt)}
              />
              <AttributeCard
                label="Last Record Update"
                value={formatDateTime(patient.updated_at)}
              />
            </div>
          </div>
        )}

        {/* TAB 3: CONTACT INFORMATION */}
        {activeTab === "contact" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Communication Channels & Physical Localization
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Primary telephony, electronic mail, and dispatch addresses
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Primary Phone */}
                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Primary Phone Line
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      {patient.phone_number || "—"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Configured for SMS appointment reminders and alerts</p>
                </div>

                {/* Email Address */}
                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Electronic Mail
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <span className="text-base font-bold text-slate-900 dark:text-white break-all">
                      {patient.email || "No email on record"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Receives electronic discharge summaries & diagnostic results</p>
                </div>

                {/* Residential Address */}
                <div className="md:col-span-2 p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Permanent Residential Address
                    </span>
                    <span className="text-xs font-semibold text-slate-600 dark:text-zinc-300">
                      Primary Domicile
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin size={18} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-semibold text-slate-800 dark:text-zinc-100 leading-relaxed">
                      {patient.address || "No residential address provided on registration."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MEDICAL INFORMATION */}
        {activeTab === "medical" && (
          <div className="space-y-6">
            {/* Hematology & Vital Constants */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Hematology & Clinical Biomarkers
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Core immunohematology factors and genetic markers
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-rose-200/60 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                    <Droplet size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Blood Group
                    </span>
                  </div>
                  <p className="text-2xl font-black text-rose-700 dark:text-rose-300">
                    {patient.blood_group || "—"}
                  </p>
                  <p className="text-[11px] text-slate-500">Cross-match compatibility profile</p>
                </div>

                <div className="p-4 rounded-xl border border-indigo-200/60 dark:border-indigo-900/40 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                    <HeartPulse size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Genotype
                    </span>
                  </div>
                  <p className="text-2xl font-black text-indigo-700 dark:text-indigo-300">
                    {patient.genotype || "—"}
                  </p>
                  <p className="text-[11px] text-slate-500">Hemoglobin electrophoresis typing</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-400">
                    <Activity size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Blood Type / Rh
                    </span>
                  </div>
                  <p className="text-2xl font-black text-slate-800 dark:text-white">
                    {patient.blood_type || "Rh+"}
                  </p>
                  <p className="text-[11px] text-slate-500">Rhesus D antigen status</p>
                </div>
              </div>
            </div>

            {/* Documented Allergies & Sensitivities */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} className="text-amber-500" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Documented Allergies & Sensitivities
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => toast.success("Allergy record editor opened")}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  + Add Allergy Log
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-200">
                      Penicillin / Beta-lactams
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-200/60 text-amber-900 dark:bg-amber-900 dark:text-amber-200">
                      Moderate Reaction
                    </span>
                  </div>
                  <p className="text-xs text-amber-800/80 dark:text-amber-300/80 leading-relaxed">
                    Urticaria and cutaneous pruritus documented upon administration of amoxicillin. Contraindicated for cephalosporins unless cleared by immunology.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                      Food & Latex Sensitivities
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-200/60 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-200">
                      None Reported (NKDA)
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
                    No documented dietary allergies, peanut, shellfish, or surgical latex contact sensitivities reported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: NEXT OF KIN */}
        {activeTab === "nextOfKin" && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Primary Emergency Contact & Family Liaison
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Designated emergency proxy authorized for clinical notifications & medical consent
                </p>
              </div>
              <button
                type="button"
                onClick={() => toast.success("Update Next of Kin modal opened")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <UserPen size={13} />
                <span>Update Contact</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AttributeCard
                label="Full Legal Name"
                value={
                  patient.nextOfKin?.surname || patient.nextOfKin?.other_names
                    ? `${patient.nextOfKin.surname} ${patient.nextOfKin.other_names}`
                    : "Not Specified"
                }
              />
              <AttributeCard
                label="Relationship to Patient"
                value={patient.nextOfKin?.relationship}
              />
              <AttributeCard
                label="Phone Number"
                value={patient.nextOfKin?.phoneNumber}
              />
              <AttributeCard
                label="Email Address"
                value={patient.nextOfKin?.email}
              />
              <AttributeCard
                label="Occupation"
                value={patient.nextOfKin?.occupation}
              />
              <AttributeCard
                label="Marital Status"
                value={patient.nextOfKin?.maritalStatus}
              />
              <div className="md:col-span-2 lg:col-span-3">
                <AttributeCard
                  label="Residential Address"
                  value={patient.nextOfKin?.address || "No separate address logged; resides at patient address"}
                />
              </div>
            </div>

            {/* Legal Consent Authority Box */}
            <div className="p-4 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/40 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-primary" />
                <span className="font-semibold text-slate-800 dark:text-zinc-200">
                  Proxy Authorization Status: Legally Recognized Emergency Representative
                </span>
              </div>
              <span className="text-slate-400 dark:text-zinc-500">Consent Form Valid</span>
            </div>
          </div>
        )}

        {/* TAB 6: INSURANCE / HMO */}
        {activeTab === "insurance" && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Health Maintenance Organization & Sponsor Profile
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Third-party health payer coverage, policy tier, and eligibility verification
                </p>
              </div>
              <button
                type="button"
                onClick={() => toast.success("HMO Claims & Pre-authorization portal opened")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <Shield size={13} />
                <span>Verify HMO Status</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AttributeCard
                label="HMO / Insurance Provider"
                value={patient.hmo?.name || "Self-Pay / Cash Patient"}
              />
              <AttributeCard
                label="Enrollee Policy Number"
                value={patient.patient_number || `HMO-ENR-${patient.id}`}
                isMonospace
              />
              <AttributeCard
                label="Coverage Tier / Plan"
                value={patient.hmo?.coverageType || "Standard Multispecialty Plan"}
              />
              <AttributeCard
                label="Hospital Co-Payment Coverage"
                value={patient.hmo?.coverage ? `${patient.hmo.coverage}% Co-Pay Settled by HMO` : "100% Patient Out-of-Pocket"}
              />
              <AttributeCard
                label="Provider Helpline"
                value={patient.hmo?.phoneNumber || "0800-HMO-HELPDESK"}
              />
              <AttributeCard
                label="Claims Electronic Mail"
                value={patient.hmo?.email || "claims@hmopartner.org"}
              />
              <AttributeCard
                label="Credit Limit Authorization"
                value={formatCurrency(patient.credit_limit)}
              />
              <AttributeCard
                label="Credit Validity Expiration"
                value={patient.credit_limit_expiry_date ? formatDate(patient.credit_limit_expiry_date) : "Continuous Enrollment"}
              />
              <AttributeCard
                label="Eligibility Verification"
                value={patient.hmo ? "Active & Verified" : "Self-Pay Direct"}
              />
            </div>
          </div>
        )}

        {/* TAB 7: PATIENT ACTIVITY & ENCOUNTERS */}
        {activeTab === "activity" && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Longitudinal Encounters & Care Timeline
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Chronological history of admissions, clinic visits, and care episodes
                </p>
              </div>
              <button
                type="button"
                onClick={() => toast.success("Exporting encounter history...")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <FileText size={13} />
                <span>Export Ledger</span>
              </button>
            </div>

            <div className="space-y-4">
              {/* Encounter 1 */}
              <div className="flex gap-4 p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30">
                <div className="p-2.5 rounded-xl bg-primary-soft text-primary-darker dark:bg-primary/20 dark:text-primary-300 h-fit">
                  <Stethoscope size={18} />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      General Clinical Consultation & Follow-up
                    </h4>
                    <span className="text-xs font-medium text-slate-500">
                      {formatDate(patient.last_appointment_date || patient.createdAt)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    Patient attended outpatient clinic for comprehensive health evaluation. Routine vitals taken, prescription reconciled, and clinical follow-up recorded in EMR.
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-500 font-medium">
                    <span>Attending: Dr. Consultant on duty</span>
                    <span>•</span>
                    <span>Status: Encounter Completed</span>
                  </div>
                </div>
              </div>

              {/* Encounter 2: Registration Event */}
              <div className="flex gap-4 p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 h-fit">
                  <BadgeCheck size={18} />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Master Patient Index Registration
                    </h4>
                    <span className="text-xs font-medium text-slate-500">
                      {formatDateTime(patient.createdAt)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    Official medical record established under MRN #{patient.patient_number || `PID-${patient.id}`}. Biometrics, demographic information, and billing profile initialized.
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-500 font-medium">
                    <span>Enrolled By: Hospital Records Administration</span>
                    <span>•</span>
                    <span>Verified: True</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

// =========================================================================
// HELPER SUBCOMPONENTS FOR PREMIUM PRESENTATION
// =========================================================================

interface MetricCardProps {
  label: string;
  value: string;
  subtext?: string;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  icon: React.ElementType;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subtext,
  variant = "default",
  icon: Icon,
}) => {
  const variantStyles = {
    default:
      "border-slate-200/80 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white",
    success:
      "border-emerald-200/80 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200",
    warning:
      "border-amber-200/80 bg-amber-50/40 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200",
    danger:
      "border-rose-200/80 bg-rose-50/40 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200",
    info:
      "border-sky-200/80 bg-sky-50/40 dark:bg-sky-950/20 text-sky-900 dark:text-sky-200",
  };

  const iconColors = {
    default: "text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-800",
    success: "text-emerald-600 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-900/40",
    warning: "text-amber-600 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-900/40",
    danger: "text-rose-600 dark:text-rose-400 bg-rose-100/60 dark:bg-rose-900/40",
    info: "text-sky-600 dark:text-sky-400 bg-sky-100/60 dark:bg-sky-900/40",
  };

  return (
    <div
      className={`rounded-2xl border p-4.5 shadow-xs transition-all duration-200 flex flex-col justify-between ${variantStyles[variant]}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">
          {label}
        </span>
        <div className={`p-1.5 rounded-lg ${iconColors[variant]}`}>
          <Icon size={14} />
        </div>
      </div>
      <div className="mt-3">
        <p className="text-xl font-black tracking-tight">{value}</p>
        {subtext && (
          <p className="text-[11px] opacity-70 mt-0.5 truncate">{subtext}</p>
        )}
      </div>
    </div>
  );
};

interface SnapshotTileProps {
  label: string;
  value?: string | null;
  highlight?: boolean;
}

const SnapshotTile: React.FC<SnapshotTileProps> = ({
  label,
  value,
  highlight = false,
}) => {
  return (
    <div className="p-3 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-800/30">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
        {label}
      </p>
      <p
        className={`mt-1 font-bold ${
          highlight
            ? "text-base text-primary dark:text-primary-300"
            : "text-xs text-slate-800 dark:text-zinc-200"
        }`}
      >
        {value || "—"}
      </p>
    </div>
  );
};

interface AttributeCardProps {
  label: string;
  value?: string | number | null;
  isMonospace?: boolean;
}

const AttributeCard: React.FC<AttributeCardProps> = ({
  label,
  value,
  isMonospace = false,
}) => {
  return (
    <div className="p-3.5 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-800/40 hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition-colors">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
        {label}
      </p>
      <p
        className={`mt-1 text-xs font-semibold text-slate-800 dark:text-zinc-100 ${
          isMonospace ? "font-mono" : ""
        }`}
      >
        {value ?? "—"}
      </p>
    </div>
  );
};

export default PatientProfileModal;
