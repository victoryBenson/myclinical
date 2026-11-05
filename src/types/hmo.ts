export interface Hmo {
  id: number;
  name: string;
  phoneNumber?: string;
  email?: string;
  logo?: string;
  coverage: number;
  coverageType?: string;
}