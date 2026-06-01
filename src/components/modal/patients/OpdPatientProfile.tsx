import React from 'react';
import type { Patient } from '../../../types/patients';
import { User, Contact, MapPin } from 'lucide-react';

const OpdPatientProfile = ({ patient }: { patient: Patient }) => {
  
  const sections = [
    {
      title: "Identity Specifics",
      icon: User,
      fields: [
        { label: "Title", value: patient?.title },
        { label: "Surname", value: patient?.surname },
        { label: "Other Names", value: patient?.other_names },
        { label: "Gender", value: patient?.gender },
        { label: "Date of Birth", value: patient?.date_of_birth },
        { label: "Marital Status", value: patient?.maritalStatus },
      ]
    },
    {
      title: "Contact & Localization",
      icon: Contact,
      fields: [
        { label: "Phone Number", value: patient?.phone_number },
        { label: "Email Address", value: patient?.email, className: "break-all" },
      ]
    }
  ];

  return (
    <div className="space-y-6 pt-4 font-sans text-zinc-800">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT / CENTER COLUMNS: IDENTITY & CONTACT INFO */}
        <div className="lg:col-span-2 space-y-6">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="bg-white rounded-xl border border-zinc-200/60 p-5 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 pb-1 border-b border-zinc-100">
                <section.icon size={14} className="text-primary" />
                <h3 className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                  {section.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {section.fields.map((field, fIdx) => (
                  <div key={fIdx} className="group">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 transition-colors group-hover:text-zinc-500">
                      {field.label}
                    </p>
                    <p className={`text-xs font-semibold text-zinc-800 mt-1 capitalize ${field.className || ""}`}>
                      {field.value || "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: PERMANENT ADDRESS GEO BLOCK */}
        <div className="lg:col-span-1">
          <div className="h-full bg-primary-ultraLight/40 rounded-xl border border-primary-soft p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-1 border-b border-primary-soft">
                <MapPin size={14} className="text-primary" />
                <h3 className="text-xs uppercase font-bold tracking-wider text-primary-deepest/60">
                  Residential Location
                </h3>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-primary-deepest/50">
                  Permanent Address
                </p>
                <p className="text-xs font-bold text-zinc-800 mt-1.5 leading-relaxed">
                  {patient?.address || "—"}
                </p>
              </div>
            </div>
            
            <div className="hidden lg:block pt-4 text-[11px] font-medium text-primary-dark/60 border-t border-primary-soft/60">
              OPD Verified Entry
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OpdPatientProfile;