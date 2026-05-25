import React, { useState } from "react";
import toast from "react-hot-toast";
import type { Patient } from "../../types/patients";
import { Input, Select, Steps } from "antd";
import CustomDatePicker from "../../components/ui/CustomDatePicker";
const { Option } = Select;  


const CreateNewPatient: React.FC = () => {
    const [formData, setFormData] = useState<Partial<Patient>>({});
    const [currentStep, setCurrentStep] = useState(0);
    const next = () => setCurrentStep((prev) => prev + 1);
    const prev = () => setCurrentStep((prev) => prev - 1);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    toast.success("Patient Created Successfully");
  };

  const steps = [
  {
    title: "Personal",
  },
  {
    title: "Next of Kin",
  },
  {
    title: "Medical",
  },
  {
    title: "Review",
  },
];

  return (
    <>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200/70">
        
        <Steps
            current={currentStep}
            items={steps}
            className="mb-8"
        />

        <form onSubmit={handleSubmit}>
            
            {currentStep === 0 && (
                <div className="space-y-8">

                    <div>
                    <h3 className="text-lg font-semibold text-zinc-800">
                        Personal Information
                    </h3>

                    <p className="text-sm text-zinc-500 mt-1">
                        Enter the patient's basic bio-data and identification details.
                    </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Title
                        </label>

                        <Select
                        placeholder="Select Title"
                        value={formData.title}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            title: value,
                            })
                        }
                        className="w-full"
                        >
                        <Option value="mr">Mr.</Option>
                        <Option value="mrs">Mrs.</Option>
                        <Option value="miss">Miss</Option>
                        <Option value="dr">Dr.</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Surname
                        </label>

                        <Input
                        placeholder="Enter surname"
                        value={formData.surname || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            surname: e.target.value,
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Other Names
                        </label>

                        <Input
                        placeholder="Enter other names"
                        value={formData.other_names || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            other_names: e.target.value,
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Gender
                        </label>

                        <Select
                        placeholder="Select Gender"
                        value={formData.gender}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            gender: value,
                            })
                        }
                        className="w-full"
                        >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Date of Birth
                        </label>

                        <CustomDatePicker
                            onChange={(_, dateString) =>
                                setFormData((prev) => ({
                                ...prev,
                                date_of_birth: dateString ?? undefined,
                                }))
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Marital Status
                        </label>

                        <Select
                        placeholder="Select Status"
                        value={formData.maritalStatus}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            maritalStatus: value,
                            })
                        }
                        className="w-full"
                        >
                        <Option value="single">Single</Option>
                        <Option value="married">Married</Option>
                        <Option value="divorced">Divorced</Option>
                        <Option value="widowed">Widowed</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Occupation
                        </label>

                        <Input
                        placeholder="Enter occupation"
                        value={formData.occupation || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            occupation: e.target.value,
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Ethnicity
                        </label>

                        <Input
                        placeholder="Enter ethnicity"
                        value={formData.ethnicity || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            ethnicity: e.target.value,
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        NIN
                        </label>

                        <Input
                        placeholder="Enter NIN"
                        value={formData.nin || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            nin: e.target.value,
                            })
                        }
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Phone Number
                        </label>

                        <Input
                        placeholder="Enter phone number"
                        value={formData.phone_number || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            phone_number: e.target.value,
                            })
                        }
                        />
                    </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">
                            Email Address
                            </label>

                            <Input
                            type="email"
                            placeholder="Enter email address"
                            value={formData.email || ""}
                            onChange={(e) =>
                                setFormData({
                                ...formData,
                                email: e.target.value,
                                })
                            }
                            />
                        </div>
                        
                        <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                            HMO
                            </label>
                        <Select
                            placeholder="Select Hmo"
                            value={formData.hmo?.id}
                            // onChange={(value) =>
                            //     setFormData({
                            //     ...formData,
                            //     hmo: { id: value, name: formData.hmo?.name || "" },
                            //     })
                            // }
                            className="w-full"
                            >
                            <Option value="1">Axamansard</Option>
                            <Option value="2">NNPC</Option>
                            <Option value="3">CIGNA</Option>
                            <Option value="4">UNITED NATIONS</Option>
                        </Select>
                        </div>

                        {/* Address */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3">
                            <label className="block text-sm font-medium text-zinc-700 mb-2">
                            Residential Address
                            </label>

                            <Input.TextArea
                            placeholder="Enter full residential address"
                            rows={4}
                            value={formData.address || ""}
                            onChange={(e) =>
                                setFormData({
                                ...formData,
                                address: e.target.value,
                                })
                            }
                            className="rounded-xl"
                            />
                        </div>

                    </div>
                </div>
            )}
            {currentStep === 1 && (
                <div className="space-y-8">

                    <div>
                        <h3 className="text-lg font-semibold text-zinc-800">
                            Next of Kin Information
                        </h3>

                        <p className="text-sm text-zinc-500 mt-1">
                            Enter the details of the patient's next of kin or emergency contact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Surname
                        </label>

                        <Input
                        placeholder="Enter surname"
                        value={formData.nextOfKin?.surname || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                surname: e.target.value,
                            },
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Other Names
                        </label>

                        <Input
                        placeholder="Enter other names"
                        value={formData.nextOfKin?.other_names || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                other_names: e.target.value,
                            },
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Relationship
                        </label>

                        <Select
                        placeholder="Select relationship"
                        className="w-full"
                        value={formData.nextOfKin?.relationship}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                relationship: value,
                            },
                            })
                        }
                        >
                        <Option value="father">Father</Option>
                        <Option value="mother">Mother</Option>
                        <Option value="brother">Brother</Option>
                        <Option value="sister">Sister</Option>
                        <Option value="husband">Husband</Option>
                        <Option value="wife">Wife</Option>
                        <Option value="guardian">Guardian</Option>
                        <Option value="friend">Friend</Option>
                        <Option value="other">Other</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Gender
                        </label>

                        <Select
                        placeholder="Select gender"
                        className="w-full"
                        value={formData.nextOfKin?.gender}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                gender: value,
                            },
                            })
                        }
                        >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Phone Number
                        </label>

                        <Input
                        placeholder="Enter phone number"
                            value={formData.nextOfKin?.phoneNumber || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                phoneNumber: e.target.value,
                            },
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Email Address
                        </label>

                        <Input
                        type="email"
                        placeholder="Enter email address"
                        value={formData.nextOfKin?.email || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                email: e.target.value,
                            },
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Occupation
                        </label>

                        <Input
                        placeholder="Enter occupation"
                        value={formData.nextOfKin?.occupation || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                occupation: e.target.value,
                            },
                            })
                        }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Marital Status
                        </label>

                        <Select
                        placeholder="Select marital status"
                        className="w-full"
                        value={formData.nextOfKin?.maritalStatus}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                ...formData.nextOfKin,
                                maritalStatus: value,
                            },
                            })
                        }
                        >
                        <Option value="single">Single</Option>
                        <Option value="married">Married</Option>
                        <Option value="divorced">Divorced</Option>
                        <Option value="widowed">Widowed</Option>
                        </Select>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Residential Address
                        </label>

                        <Input.TextArea
                        placeholder="Enter residential address"
                        rows={4}
                        value={formData.nextOfKin?.address || ""}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            nextOfKin: {
                                id: formData.nextOfKin?.id ?? 0,
                                ...formData.nextOfKin,
                                address: e.target.value,
                            },
                            })
                        }
                        className="rounded-xl"
                        />
                    </div>

                    </div>
                </div>
            )}  
            {currentStep === 2 && (
                <div className="space-y-8">

                    <div>
                    <h3 className="text-lg font-semibold text-zinc-800">
                        Medical Information
                    </h3>

                    <p className="text-sm text-zinc-500 mt-1">
                        Enter the patient’s clinical and medical profile information.
                    </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Blood Group
                        </label>

                        <Select
                        placeholder="Select blood group"
                        className="w-full"
                        value={formData.blood_group}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            blood_group: value,
                            })
                        }
                        >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Blood Type
                        </label>

                        <Select
                        placeholder="Select blood type"
                        className="w-full"
                        value={formData.blood_type}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            blood_type: value,
                            })
                        }
                        >
                        <Option value="positive">Positive</Option>
                        <Option value="negative">Negative</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Genotype
                        </label>

                        <Select
                        placeholder="Select genotype"
                        className="w-full"
                        value={formData.genotype}
                        onChange={(value) =>
                            setFormData({
                            ...formData,
                            genotype: value,
                            })
                        }
                        >
                        <Option value="AA">AA</Option>
                        <Option value="AS">AS</Option>
                        <Option value="SS">SS</Option>
                        <Option value="AC">AC</Option>
                        <Option value="SC">SC</Option>
                        </Select>
                    </div>

                    </div>
                </div>
            )}
            {currentStep === 3 && (
                <div className="space-y-8">

                    {/* Header */}
                    <div>
                    <h3 className="text-lg font-semibold text-zinc-800">
                        Review Patient Information
                    </h3>

                    <p className="text-sm text-zinc-500 mt-1">
                        Please review all patient details before submission.
                    </p>
                    </div>

                    <div className="space-y-6">

                    <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-5">
                        <h4 className="text-sm font-semibold text-zinc-800 mb-4">
                        Personal Information
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">

                        <div>
                            <p className="text-zinc-500">Title</p>
                            <p className="font-medium text-zinc-800">
                            {formData.title || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Surname</p>
                            <p className="font-medium text-zinc-800">
                            {formData.surname || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Other Names</p>
                            <p className="font-medium text-zinc-800">
                            {formData.other_names || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Gender</p>
                            <p className="font-medium text-zinc-800 capitalize">
                            {formData.gender || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Date of Birth</p>
                            <p className="font-medium text-zinc-800">
                            {formData.date_of_birth || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Marital Status</p>
                            <p className="font-medium text-zinc-800 capitalize">
                            {formData.maritalStatus || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Occupation</p>
                            <p className="font-medium text-zinc-800">
                            {formData.occupation || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Ethnicity</p>
                            <p className="font-medium text-zinc-800">
                            {formData.ethnicity || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">NIN</p>
                            <p className="font-medium text-zinc-800">
                            {formData.nin || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Phone Number</p>
                            <p className="font-medium text-zinc-800">
                            {formData.phone_number || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Email Address</p>
                            <p className="font-medium text-zinc-800">
                            {formData.email || "-"}
                            </p>
                        </div>

                        <div className="md:col-span-2 lg:col-span-3">
                            <p className="text-zinc-500">Residential Address</p>
                            <p className="font-medium text-zinc-800">
                            {formData.address || "-"}
                            </p>
                        </div>


                        </div>
                    </div>

                    {/* NEXT OF KIN */}
                    <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-5">
                        <h4 className="text-sm font-semibold text-zinc-800 mb-4">
                        Next of Kin Information
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">

                        <div>
                            <p className="text-zinc-500">Surname</p>
                            <p className="font-medium text-zinc-800">
                            {formData.nextOfKin?.surname || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Other Names</p>
                            <p className="font-medium text-zinc-800">
                            {formData.nextOfKin?.other_names || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Relationship</p>
                            <p className="font-medium text-zinc-800 capitalize">
                            {formData.nextOfKin?.relationship || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Gender</p>
                            <p className="font-medium text-zinc-800 capitalize">
                            {formData.nextOfKin?.gender || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Phone Number</p>
                            <p className="font-medium text-zinc-800">
                            {formData.nextOfKin?.phoneNumber || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Email Address</p>
                            <p className="font-medium text-zinc-800">
                            {formData.nextOfKin?.email || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Occupation</p>
                            <p className="font-medium text-zinc-800">
                            {formData.nextOfKin?.occupation || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Marital Status</p>
                            <p className="font-medium text-zinc-800 capitalize">
                            {formData.nextOfKin?.maritalStatus || "-"}
                            </p>
                        </div>

                        <div className="md:col-span-2 lg:col-span-3">
                            <p className="text-zinc-500">Address</p>
                            <p className="font-medium text-zinc-800">
                            {formData.nextOfKin?.address || "-"}
                            </p>
                        </div>

                        </div>
                    </div>

                    <div className="bg-zinc-50 border border-zinc-200/70 rounded-2xl p-5">
                        <h4 className="text-sm font-semibold text-zinc-800 mb-4">
                        Medical Information
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">

                        <div>
                            <p className="text-zinc-500">Blood Group</p>
                            <p className="font-medium text-zinc-800">
                            {formData.blood_group || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Blood Type</p>
                            <p className="font-medium text-zinc-800">
                            {formData.blood_type || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Genotype</p>
                            <p className="font-medium text-zinc-800">
                            {formData.genotype || "-"}
                            </p>
                        </div>

                        </div>
                    </div>

                    </div>

                </div>
         )}         

            <div className="flex justify-between mt-10">
            <button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                className="px-5 py-2 rounded-xl border border-zinc-300 text-zinc-600 disabled:opacity-50"
            >
                Previous
            </button>

            {currentStep < steps.length - 1 ? (
                <button
                type="button"
                onClick={next}
                className="px-6 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition"
                >
                Next
                </button>
            ) : (
                <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition"
                >
                Submit Patient
                </button>
            )}
            </div>
        </form>
        </div>
    </>
  );
};

export default CreateNewPatient;