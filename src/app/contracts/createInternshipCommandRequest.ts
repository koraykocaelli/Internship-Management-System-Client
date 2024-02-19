
export interface CreateInternshipCommandRequest {
  advisorID: string;
  studentID: string;
  studentNo: string;
//   formFile: File; // Assuming File is the correct equivalent in TypeScript
  fullName: string;
  tcNo: string;
  internshipStartDate: string;
  internshipEndDate: string;
  department: string;
  studentGSMNumber: string;
  companyName: string;
  numberOfEmployees: number;
  companyPhone: string;
  companyAddress: string;
  requestedGovernmentAidAmount: number;
  receivesSalary: boolean;
  doesNotReceiveSalary: boolean;
  gender: Gender;
  age: number;
  receivesHealthInsurance: boolean;
  birthDate: string;
  emailSendingDate: string;
  level: InternshipLevel | null;
}
  
  export enum InternshipLevel {
    InternshipI = 1,
    InternshipII = 2,
    InternshipIII = 3,
  }
  
  export enum Gender {
    Male = 0,
    Female = 1,
  }