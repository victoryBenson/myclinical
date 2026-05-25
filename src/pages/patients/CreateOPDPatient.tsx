import React, { useState } from "react";
import SectionHeader from "../../components/ui/SectionHeader";
import toast from "react-hot-toast";

type Priority = "normal" | "urgent";

interface LabFormData {
  patient: string;
  test: string;
  priority: Priority;
  notes: string;
}

const CreateOPDPatient: React.FC = () => {
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
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    toast.success("Lab request submitted!");
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="space-y-5">

            {/* Patient */}
            <div>
            <label className="block text-sm font-medium mb-1">
                Select Patient
            </label>
            <select
                name="patient"
                value={formData.patient}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <option value="">-- Choose Patient --</option>
                <option value="Jane Doe">Jane Doe</option>
                <option value="John Smith">John Smith</option>
                <option value="Sarah Johnson">Sarah Johnson</option>
            </select>
            </div>

            {/* Test */}
            <div>
            <label className="block text-sm font-medium mb-1">
                Select Test
            </label>
            <select
                name="test"
                value={formData.test}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
                <option value="">-- Choose Test --</option>
                <option value="Full Blood Count">Full Blood Count</option>
                <option value="Malaria Test">Malaria Test</option>
                <option value="Urinalysis">Urinalysis</option>
            </select>
            </div>

            {/* Priority */}
            <div>
            <label className="block text-sm font-medium mb-2">
                Priority
            </label>
            <div className="flex gap-6">
                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="priority"
                    value="normal"
                    checked={formData.priority === "normal"}
                    onChange={handleChange}
                />
                Normal
                </label>

                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="priority"
                    value="urgent"
                    checked={formData.priority === "urgent"}
                    onChange={handleChange}
                />
                Urgent
                </label>
            </div>
            </div>

            {/* Notes */}
            <div>
            <label className="block text-sm font-medium mb-1">
                Notes
            </label>
            <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Additional information..."
            />
            </div>

            {/* Submit */}
            <div className="pt-4">
            <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition"
            >
                Submit Request
            </button>
            </div>

        </form>
    </>
  );
};

export default CreateOPDPatient;