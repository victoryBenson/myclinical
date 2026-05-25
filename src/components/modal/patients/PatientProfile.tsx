import type { Patient } from "../../../types/patients";
import {
  Phone,
  Mail,
  MapPin,
  Droplets,
  Shield,
  CalendarDays,
  User2,
  HeartPulse,
  CreditCard,
  FileText,
  ClipboardList,
  Activity,
  NotebookPen,
  Pill,
  FlaskConical,
  ChevronRight,
  User,
  CalendarPlus,
  UserPen,
  UserPlus,
} from "lucide-react";

const PatientProfileModal = ({ patient }: { patient: Patient }) => {
  const workspaceNav = [
    { icon: ClipboardList, label: "Overview" },
    { icon: Activity, label: "Vitals" },
    { icon: NotebookPen, label: "Clinical Notes" },
    { icon: FlaskConical, label: "Lab Results" },
    { icon: Pill, label: "Prescriptions" },
    { icon: CreditCard, label: "Billing" },
    { icon: CalendarDays, label: "Appointments" },
    { icon: FileText, label: "Documents" },
  ];

  const quickVitals = [
    { icon: User2, label: "Gender", value: patient.gender },
    { icon: CalendarDays, label: "DOB", value: patient.date_of_birth },
    { icon: Phone, label: "Phone", value: patient.phone_number },
    { icon: Mail, label: "Email", value: patient.email },
    { icon: MapPin, label: "Address", value: patient.address },
    { icon: Droplets, label: "Blood Group", value: patient.blood_group },
    { icon: HeartPulse, label: "Genotype", value: patient.genotype },
    { icon: Shield, label: "HMO", value: patient.hmo?.name || "Cash Patient" },
  ];

  const financialMetrics = [
    { label: "Balance", value: `₦${patient.balance}`, variant: "warning" as const },
    { label: "Outstanding", value: `₦${patient.outstanding}`, variant: "danger" as const },
    { label: "Deposit", value: `₦${patient.depositBalance}`, variant: "brandSuccess" as const },
    { label: "Credit Limit", value: `₦${patient.credit_limit}` },
  ];

  const personalInfo = [
    { label: "Marital Status", value: patient.maritalStatus },
    { label: "Occupation", value: patient.occupation },
    { label: "Ethnicity", value: patient.ethnicity },
    { label: "NIN", value: patient.nin },
    { label: "Blood Type", value: patient.blood_type },
    { label: "Last Appointment", value: patient.last_appointment_date },
  ];

  const nextOfKinInfo = [
    { label: "Full Name", value: `${patient.nextOfKin?.surname || ""} ${patient.nextOfKin?.other_names || ""}`.trim() },
    { label: "Relationship", value: patient.nextOfKin?.relationship },
    { label: "Phone", value: patient.nextOfKin?.phoneNumber },
    { label: "Occupation", value: patient.nextOfKin?.occupation },
  ];

  return (
    <div className="flex h-full bg-zinc-50 font-sans text-zinc-800 overflow-hidden">
      
      <aside className="w-[280px] rounded-lg bg-primary text-white flex flex-col border-r border-primary-dark/30">
        
        <div className="p-6 border-b border-white/10 flex flex-col items-center text-center">
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center text-2xl font-bold text-white shadow-inner">
              {patient.surname.charAt(0)}
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
          </div>

          <h2 className="mt-4 text-base font-bold tracking-tight text-white leading-tight">
            {patient.surname.charAt(0).toUpperCase() + patient.surname.slice(1)} {patient.other_names.charAt(0).toUpperCase() + patient.other_names.slice(1)}
          </h2>
          <p className="text-xs font-medium text-primary-subtle opacity-80 mt-1">
            ID: {patient.patient_number}
          </p>

          <div className="flex gap-2 w-full mt-5">
            <button className="flex-1 gap-2 justify-center px-3 py-2 items-center flex rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 text-xs font-semibold transition-all">
              <UserPen size={16} />
              Edit info
            </button>
            <button className="flex items-center justify-center gap-2 flex-1 px- py-2 rounded-xl bg-white hover:bg-zinc-50 text-primary text-xs font-semibold shadow-md shadow-primary-darker/20 transition-all">
              <UserPlus size={16} />
              Admit
            </button>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex-1
            overflow-y-auto
            px-3
            py-6
            custom-scrollbar
            transition-all
            duration-300">
          <p className="text-[10px] uppercase font-bold tracking-widest text-primary-light/80 mb-3 px-3">
            Patient Workspace
          </p>
          <nav className="space-y-1">
            {workspaceNav.map((item, index) => {
              const isActive = index === 0;
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? "bg-white text-primary font-bold shadow-sm" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={16} className={isActive ? "text-primary" : "text-white/70 group-hover:text-white"} />
                    <span className="text-xs">{item.label}</span>
                  </div>
                  <ChevronRight size={14} className={`opacity-40 transition-transform group-hover:translate-x-0.5 ${isActive ? "text-primary opacity-80" : ""}`} />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Info */}
        <div className="p-4 border-t border-white/10 bg-primary-darker/10">
          <div className="flex items-center justify-between bg-white/10 border border-white/5 rounded-xl p-3">
            <span className="text-[11px] font-medium text-primary-subtle">Account Status</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white text-primary text-[10px] font-bold">
              Active
            </span>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8 space-y-6">
        
        <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-6 space-y-6">
          <div className="flex flex-col xl:flex-row justify-between gap-8 pb-2">
            
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-ultraLight border border-primary-soft flex items-center justify-center text-xl font-bold text-primary">
                  <User size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-zinc-900 tracking-tight">
                      {patient.surname.charAt(0).toUpperCase() + patient.surname.slice(1)} {patient.other_names.charAt(0).toUpperCase() + patient.other_names.slice(1)}
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-soft text-primary-deepest text-[10px] font-bold">
                      In-Patient
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">{patient.email || "No email provided address"}</p>
                </div>
              </div>

          
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold shadow-sm transition">
                  <UserPen size={16} />
                  Edit Profile
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 text-xs font-semibold transition">
                  <CalendarPlus size={16} />
                  Book Appointment
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-zinc-600 border border-zinc-200/60 text-xs font-medium transition">
                  <NotebookPen size={16} />
                  Add Clinical Note
                </button>
              </div>
            </div>

            {/* Quick Context Attributes Grid Layout Block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-2 gap-x-6 gap-y-3.5 bg-zinc-50/60 border border-zinc-100 p-4 rounded-xl xl:min-w-[360px]">
              {quickVitals.map((info, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="p-1 rounded-lg bg-primary-ultraLight text-primary">
                    <info.icon size={13} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">{info.label}</p>
                    <p className="text-xs font-semibold text-zinc-800 mt-0.5 break-all">{info.value || "—"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-zinc-100">
            {financialMetrics.map((metric, idx) => (
              <DataTile 
                key={idx}
                label={metric.label}
                value={`₦${Number(metric.value.replace(/₦|,/g, "")).toLocaleString() || "₦0"}`}
                variant={metric.variant}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto border-b border-zinc-100 bg-zinc-50/40 px-6">
            {["Patient Information", "Next Of Kin", "Appointments", "Medical History", "Billing", "Documents"].map((tab, idx) => (
              <button
                key={tab}
                className={`px-4 py-3.5 text-xs font-semibold tracking-wide border-b-2 whitespace-nowrap transition-all
                  ${idx === 0 
                    ? "border-primary text-primary" 
                    : "border-transparent text-zinc-400 hover:text-zinc-600"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 space-y-8">
            {/* Demographic Specifics Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase font-bold tracking-wider text-zinc-400">Demographic Specifics</h3>
                <button className="text-xs text-primary font-semibold hover:text-primary-dark transition-all">Modify</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {personalInfo.map((info, idx) => (
                  <DataTile key={idx} label={info.label} value={info.value} compact />
                ))}
              </div>
            </section>

            {/* Next of Kin Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase font-bold tracking-wider text-zinc-400">Emergency & Next of Kin</h3>
                <button className="text-xs text-primary font-semibold hover:text-primary-dark transition-all">Update</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {nextOfKinInfo.map((info, idx) => (
                  <DataTile key={idx} label={info.label} value={info.value} compact />
                ))}
              </div>
            </section>
          </div>
        </div>

      </main>
    </div>
  );
};


interface DataTileProps {
  label: string;
  value?: string | null;
  compact?: boolean;
  variant?: "default" | "brandSuccess" | "warning" | "danger";
}

const DataTile = ({ label, value, compact = false, variant = "default" }: DataTileProps) => {
  const variantStyles = {
    default: "bg-zinc-50/50 border-zinc-200/60 text-zinc-800",
    brandSuccess: "bg-primary-ultraLight border-primary-soft text-primary-deepest",
    warning: "bg-amber-50/60 border-amber-200/60 text-amber-900",
    danger: "bg-rose-50/60 border-rose-200/60 text-rose-900",
  };

  return (
    <div className={`rounded-xl border p-4 transition-all duration-200 ${variantStyles[variant]}`}>
      <p className="text-[10px] uppercase font-bold tracking-wider opacity-60">{label}</p>
      <p className={`font-bold tracking-tight text-zinc-900 mt-1
        ${compact ? "text-xs font-semibold text-zinc-800" : "text-xl lg:text-2xl"}
      `}>
        {value || "—"}
      </p>
    </div>
  );
};

export default PatientProfileModal;