import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FlaskConical, CheckCircle2, AlertCircle } from "lucide-react";

type Priority = "normal" | "urgent";

interface LabFormData {
  patient: string;
  test: string;
  priority: Priority;
  notes: string;
}

const NewLabRequest: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LabFormData>({
    patient: "",
    test: "",
    priority: "normal",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patient || !formData.test) {
      toast.error("Please select both a patient and an investigation test");
      return;
    }
    toast.success(`Lab order submitted for ${formData.patient}! Accession code generated.`);
    setFormData({
      patient: "",
      test: "",
      priority: "normal",
      notes: "",
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-5 lg:p-6 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary/10 px-2.5 py-0.5 rounded-full">
              Pharmacy & Diagnostics
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
              <CheckCircle2 size={12} /> Test Ordering Station
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <FlaskConical className="h-6 w-6 text-primary" />
            Order Laboratory Investigation
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Create physician diagnostic test requisitions, specimen accessioning instructions, and clinical indications
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Patient */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Select Patient <span className="text-rose-500">*</span>
              </label>
              <select
                name="patient"
                value={formData.patient}
                onChange={handleChange}
                required
                className="w-full h-11 border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white rounded-xl px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              >
                <option value="">-- Choose Patient --</option>
                <option value="Jane Doe">Jane Doe (PID-2024-001)</option>
                <option value="John Smith">John Smith (PID-2024-002)</option>
                <option value="Sarah Johnson">Sarah Johnson (PID-2024-003)</option>
                <option value="Michael Brown">Michael Brown (PID-2024-004)</option>
              </select>
            </div>

            {/* Test */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Diagnostic Test / Investigation <span className="text-rose-500">*</span>
              </label>
              <select
                name="test"
                value={formData.test}
                onChange={handleChange}
                required
                className="w-full h-11 border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white rounded-xl px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
              >
                <option value="">-- Choose Diagnostic Test --</option>
                <option value="Full Blood Count">Full Blood Count (FBC / CBC)</option>
                <option value="Malaria Test">Malaria Parasite (MP Smear / RDT)</option>
                <option value="Urinalysis">Urinalysis (Microscopy & Chemistry)</option>
                <option value="Liver Function Test">Liver Function Panel (LFT)</option>
                <option value="Renal Function Test">Renal / Kidney Profile (U/E/Cr)</option>
                <option value="Fasting Blood Sugar">Fasting Blood Glucose (FBS)</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                Order Urgency / Triage Priority
              </label>
              <div className="flex gap-4">
                <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition text-xs font-semibold ${
                  formData.priority === "normal"
                    ? "border-primary bg-primary/5 text-primary-700 dark:text-primary-300 ring-1 ring-primary"
                    : "border-slate-200 dark:border-gray-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700"
                }`}>
                  <input
                    type="radio"
                    name="priority"
                    value="normal"
                    checked={formData.priority === "normal"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span>Routine / Normal</span>
                </label>

                <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition text-xs font-semibold ${
                  formData.priority === "urgent"
                    ? "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 ring-1 ring-rose-500"
                    : "border-slate-200 dark:border-gray-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-700"
                }`}>
                  <input
                    type="radio"
                    name="priority"
                    value="urgent"
                    checked={formData.priority === "urgent"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className="flex items-center gap-1.5">
                    <AlertCircle size={14} className="text-rose-600" />
                    STAT / Emergency Urgent
                  </span>
                </label>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Clinical Indication & Specimen Instructions
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white rounded-xl p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                placeholder="Enter clinical notes, tentative diagnosis, fasting requirements, or allergy warnings..."
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-medium shadow-sm transition-all"
              >
                Submit Laboratory Request
              </button>
            </div>
          </form>
        </div>

        {/* Quick Actions Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/80 dark:border-gray-700 shadow-sm p-6 space-y-4 h-fit">
          <div className="pb-3 border-b border-slate-100 dark:border-gray-700">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Bench Navigation
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Related diagnostic modules
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/pharmacy-diagnostics/lab-requests")}
            className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-gray-700/60 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-200 font-medium text-xs border border-slate-200/80 dark:border-gray-700 transition"
          >
            → View All Open Lab Requests
          </button>

          <button
            type="button"
            onClick={() => navigate("/pharmacy-diagnostics/lab-queue")}
            className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-gray-700/60 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-200 font-medium text-xs border border-slate-200/80 dark:border-gray-700 transition"
          >
            → Access Specimen Worklist Queue
          </button>

          <button
            type="button"
            onClick={() => navigate("/pharmacy-diagnostics/lab-results")}
            className="w-full text-left p-3 rounded-xl bg-slate-50 dark:bg-gray-700/60 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-200 font-medium text-xs border border-slate-200/80 dark:border-gray-700 transition"
          >
            → Result Verification Desk
          </button>

          <div className="pt-4 border-t border-slate-100 dark:border-gray-700">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              💡 Laboratory Best Practice:
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Requests marked as STAT/Urgent are prioritized automatically at the phlebotomy bay and assigned directly to the automated analyzer run queue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLabRequest;
