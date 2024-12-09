export type Designation = 
  | 'Software Developer'
  | 'Senior Software Developer'
  | 'Quality Assurance'
  | 'Technical Lead'
  | 'Manager';

export type Department =
  | 'Front End Development'
  | 'ML Engineering'
  | 'Quality Analyst'
  | 'Human Resource Management'
  | 'Research & Development';

export interface Employee {
  id: string;
  name: string;
  companyName: string;
  email: string;
  contactNo: string;
  designation: Designation;
  avatarId: number;
  experience: string;
  dateOfJoining: string;
  reportingManager: string;
  location?: string;
  rating: number;
}

export interface EmployeeFormData extends Omit<Employee, 'id'> {}