import React, { useState } from "react";
import toast from "react-hot-toast";
import { Input, Select, Steps, Form } from "antd";
import CustomDatePicker from "../../components/ui/CustomDatePicker";
import { usePatientStore } from "../../store/patient.store";
import type { CreatePatientDto } from "../../types/patients/createPatientDto";

const { Option } = Select;  

const CreateOpdPatient: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const prev = () => setCurrentStep((prev) => prev - 1);
    const [loading, setLoading] = useState(false)
    const { createPatient } = usePatientStore();
    const [form] = Form.useForm();
    const values = form.getFieldsValue(true);

    const next = async () => {
        try {
            if (currentStep === 0) {
            await form.validateFields([
                "title",
                "surname",
                "other_names",
                "gender",
                "phone_number",
                // "hmo",
                "date_of_birth",
                "maritalStatus",
                "nin",
                "email",
                "address"
            ]);
            }

            if (currentStep === 1) {
            await form.validateFields([
                ["nextOfKin", "surname"],
                ["nextOfKin", "other_names"],
                ["nextOfKin", "phoneNumber"],
                ["nextOfKin", "relationship"],
                ["nextOfKin", "gender"],
                ["nextOfKin", "address"]
            ]);
            }

            if (currentStep === 2) {
            await form.validateFields([
                "blood_group",
                "genotype",
            ]);
            }

            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.log("Validation failed");
        }
    };

  
const handleSubmit = async () => {
  try {
    setLoading(true);

    const formValues = await form.getFieldsValue(true);

    const payload: CreatePatientDto = {
    ...formValues,
    date_of_birth: formValues.date_of_birth
        ? formValues.date_of_birth.format?.("YYYY-MM-DD")
        : null,

    is_out_patient: true
    };
    
    await createPatient(payload);

    toast.success("Patient Created Successfully");
    form.resetFields();
    setCurrentStep(0);
  } catch (error: any) {
    console.log(error?.response?.data);
    toast.error("Failed to create patient");
  } finally {
    setLoading(false);
  }
};

    const steps = [
        {
            title: "Personal",
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

        <Form  form={form} layout="vertical" preserve={true}>           
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
                        
                        <Form.Item
                            label="Title"
                            name="title" 
                        >
                            <Select
                                placeholder="Select Title"                               
                                className="w-full"
                                
                                >
                                <Option value="mr">Mr.</Option>
                                <Option value="mrs">Mrs.</Option>
                                <Option value="miss">Miss</Option>
                                <Option value="dr">Dr.</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item
                            label="Surname"
                            name="surname"
                            rules={[
                                {
                                required: true,
                                message: "Surname is required",
                                },
                            ]}
                            >
                            <Input placeholder="Enter surname" />
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item
                            label="Other Names"
                            name="other_names"
                            rules={[
                            {
                                required: true,
                                message: "Other names are required",
                            },
                            ]}
                        >
                            <Input placeholder="Enter other names"/>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[
                            {
                                required: true,
                                message: "Please select gender",
                            },
                            ]}
                        >
                            <Select
                            placeholder="Select Gender"
                            className="w-full"
                            >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item
                            label="Date of Birth"
                            name="date_of_birth"
                            rules={[
                                {
                                required: true,
                                message: "Date of birth is required",
                                },
                            ]}
                         >
                        <CustomDatePicker disableFutureDates={true} />
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item
                            label="Marital Status"
                            name="maritalStatus"
                            rules={[
                            {
                                required: true,
                                message: "Please select marital status",
                            },
                            ]}
                        >
                            <Select
                            placeholder="Select Status"
                            className="w-full"
                            >
                            <Option value="single">Single</Option>
                            <Option value="married">Married</Option>
                            <Option value="divorced">Divorced</Option>
                            <Option value="widowed">Widowed</Option>
                            </Select>
                        </Form.Item>

                    </div>

                    <div>
                        <Form.Item
                            label="Phone Number"
                            name="phone_number"
                            rules={[
                            {
                                required: true,
                                message: "Phone number is required",
                            },
                             {
                                pattern: /^[0-9]+$/,
                                message: "Only numbers are allowed",
                            },
                            ]}
                        >
                            <Input
                                placeholder="Enter phone number"
                                maxLength={11}
                                inputMode="numeric"
                            />
                        </Form.Item>
                    </div>

                        <div>
                            <Form.Item
                            label="Email Address"
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: "Email address is required",
                            },
                            ]}
                            >
                            <Input
                            type="email"
                            placeholder="Enter email address"
                           
                            />
                            </Form.Item>
                        </div>
                        
                        <div>
                            <Form.Item
                            label="HMO"
                            name="hmo"
                            // rules={[
                            // {
                            //     required: true,
                            //     message: "HMO is required",
                            // },
                            // ]}
                            >
                                <Select
                                    placeholder="Select Hmo"
                                    
                                    className="w-full"
                                    >
                                    <Option value={1}>Axamansard</Option>
                                    <Option value={2}>NNPC</Option>
                                    <Option value={3}>CIGNA</Option>
                                    <Option value={4}>UNITED NATIONS</Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-3">
                            <Form.Item
                            label="Residential Address"
                            name="address"
                            rules={[
                            {
                                required: true,
                                message: "Residential address is required",
                            },
                            ]}
                            >
                                <Input.TextArea
                                placeholder="Enter full residential address"
                                rows={4}
                                
                                className="rounded-xl"
                                />
                            </Form.Item>
                        </div>

                    </div>
                </div>
            )}

            {currentStep === 1 && (
                <div className="space-y-8">

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
                            {values.title || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Surname</p>
                            <p className="font-medium text-zinc-800">
                            {values.surname || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Other Names</p>
                            <p className="font-medium text-zinc-800">
                            {values.other_names || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Gender</p>
                            <p className="font-medium text-zinc-800 capitalize">
                            {values.gender || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Date of Birth</p>
                            <p className="font-medium text-zinc-800">
                            {values.date_of_birth?.format?.("YYYY-MM-DD") || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Marital Status</p>
                            <p className="font-medium text-zinc-800 capitalize">
                            {values.maritalStatus || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Phone Number</p>
                            <p className="font-medium text-zinc-800">
                            {values.phone_number || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-zinc-500">Email Address</p>
                            <p className="font-medium text-zinc-800">
                            {values.email || "-"}
                            </p>
                        </div>

                        <div className="md:col-span-2 lg:col-span-3">
                            <p className="text-zinc-500">Residential Address</p>
                            <p className="font-medium text-zinc-800">
                            {values.address || "-"}
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
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-6 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition disabled:opacity-50"
                    >
                    {loading ? "Submitting..." : "Submit Patient"}
                </button>
            )}
            </div>
        </Form>
        </div>
    </>
  );
};

export default CreateOpdPatient;