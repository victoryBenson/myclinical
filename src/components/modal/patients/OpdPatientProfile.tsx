import React from "react";
import type { Patient } from "../../../types/patients";
import dayjs from "../../../utils/dayJs";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";

interface OpdPatientProfileProps {
  patient: Patient;
  onOpenComprehensive?: () => void;
}

export const OpdPatientProfile: React.FC<OpdPatientProfileProps> = ({
  patient,
  onOpenComprehensive,
}) => {
  const calculateAge = (dobString?: string | null): string => {
    if (!dobString) return "—";
    const birth = dayjs(dobString);
    if (!birth.isValid()) return "—";
    return `${dayjs().diff(birth, "year")} yrs`;
  };

  const formatDate = (dateString?: string | null): string => {
    if (!dateString) return "—";
    const d = dayjs(dateString);
    if (!d.isValid()) return dateString;
    return d.format("DD MMM YYYY");
  };

  const initials = `${patient?.surname?.[0] || ""}${
    patient?.other_names?.[0] || ""
  }`.toUpperCase() || "OP";

  const fullName = `${patient?.title ? `${patient.title} ` : ""}${patient?.surname || ""} ${patient?.other_names || ""}`.trim();

  return (
    <div className="space-y-6 pt-2 font-sans antialiased text-slate-800 dark:text-zinc-100">
      {/* Header Profile Identity */}
      <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-850 border border-slate-200/80 dark:border-zinc-800">
        <div className="flex items-center gap-3.5">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-lg flex items-center justify-center shadow-sm">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {fullName || "Unnamed Patient"}
              </h2>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800">
                <Layers size={10} />
                OPD Care
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 font-mono">
              MRN: {patient?.patient_number || `PID-${patient?.id}`}
            </p>
          </div>
        </div>

        {onOpenComprehensive && (
          <button
            type="button"
            onClick={onOpenComprehensive}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary-600 shadow-xs transition"
          >
            <span>Full Profile</span>
            <ArrowRight size={13} />
          </button>
        )}
      </div>

      {/* Main Grid: Identity & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Details */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200/80 dark:border-zinc-800 p-4 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-zinc-800 text-xs font-bold uppercase tracking-wider text-slate-400">
            <User size={13} className="text-primary" />
            <span>Biographical Specifics</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Gender</p>
              <p className="font-semibold text-slate-800 dark:text-zinc-200 mt-0.5">{patient?.gender || "—"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Age / DOB</p>
              <p className="font-semibold text-slate-800 dark:text-zinc-200 mt-0.5">
                {calculateAge(patient?.date_of_birth)} ({formatDate(patient?.date_of_birth)})
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Marital Status</p>
              <p className="font-semibold text-slate-800 dark:text-zinc-200 mt-0.5">{patient?.maritalStatus || "—"}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Blood / Genotype</p>
              <p className="font-semibold text-rose-600 dark:text-rose-400 mt-0.5">
                {patient?.blood_group || "—"} ({patient?.genotype || "—"})
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200/80 dark:border-zinc-800 p-4 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-zinc-800 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Phone size={13} className="text-primary" />
            <span>Contact Channels</span>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-slate-400" />
              <span className="font-semibold text-slate-800 dark:text-zinc-200">{patient?.phone_number || "—"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-slate-400" />
              <span className="font-semibold text-slate-800 dark:text-zinc-200 break-all">{patient?.email || "No email on record"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={13} className="text-slate-400" />
              <span className="font-semibold text-slate-800 dark:text-zinc-200">{patient?.hmo?.name || "Self-Pay / Cash Patient"}</span>
            </div>
          </div>
        </div>

        {/* Full Residential Address Block */}
        <div className="md:col-span-2 bg-slate-50/60 dark:bg-zinc-850 rounded-xl border border-slate-200/80 dark:border-zinc-800 p-4 flex items-start gap-3">
          <MapPin size={16} className="text-rose-500 mt-0.5 flex-shrink-0" />
          <div className="text-xs">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Permanent Domicile / Address
            </p>
            <p className="font-semibold text-slate-800 dark:text-zinc-100 mt-1 leading-relaxed">
              {patient?.address || "No residential address provided upon outpatient registration."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpdPatientProfile;
