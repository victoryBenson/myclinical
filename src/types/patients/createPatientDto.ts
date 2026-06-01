export interface CreatePatientDto {
  title: string;
  surname: string;
  other_names: string;

  date_of_birth: string;
  gender: string;

  maritalStatus: string;

  ethnicity?: string;
  occupation?: string;

  phone_number: string;
  email: string;
  address: string;

  nin: string;

  blood_group: string;
  blood_type?: string;
  genotype: string;

  hmo?: number | null;

  nextOfKin?: {
    surname: string;
    other_names: string;

    relationship: string;
    gender: string;

    phoneNumber: string;
    address: string;

    email?: string;
    occupation?: string;
    maritalStatus?: string;
  } | null;
}