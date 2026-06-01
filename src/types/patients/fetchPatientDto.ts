export interface Hmo { 
    id: number; 
    name: string; 
    phoneNumber?: string; 
    email?: string; 
    logo?: string; 
    coverage: number; 
    coverageType?: string; 
} 

export interface NextOfKin { 
    id: number; 
    surname: string; 
    other_names: string; 
    gender?: string; 
    phoneNumber?: string; 
    relationship?: string; 
    address?: string; 
    maritalStatus?: string; 
    occupation?: string; 
    email?: string; 
    createdAt: string; 
    updatedAt: string; 
    deletedAt?: string | null; 
} 

export interface Patient { 
    id: number; 
    patient_number: string; 
    old_id: string | null; 
    surname: string; 
    other_names: string; 
    title: string; 
    date_of_birth: string; 
    gender: string; 
    maritalStatus: string; 
    ethnicity: string; 
    occupation: string; 
    phone_number: string; 
    email: string; 
    address: string; 
    blood_group: string; 
    blood_type: string; 
    genotype: string; 
    nin: string; 
    profile_pic: string | null; 
    deceased: boolean; 
    is_active: boolean; 
    is_verified: boolean; 
    hasEnrolledOnline: boolean; 
    is_out_patient: boolean; 
    balance: string; 
    outstanding: string; 
    depositBalance: string; 
    credit_limit: string; 
    credit_limit_expiry_date: string | null; 
    nextAppointment: string | null; 
    last_appointment_date: string | null; 
    hmo: Hmo | null; 
    nextOfKin: NextOfKin | null; 
    createdBy: string | null; 
    updatedBy: string | null; 
    deletedBy: string | null; 
    createdAt: string; 
    updated_at: string; 
    deleted_at: string | null; 
}