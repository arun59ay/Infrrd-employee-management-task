import { v4 as uuidv4 } from 'uuid';
import { Employee } from '../types/employee';

export const employees: Employee[] = [
  {
    id: uuidv4(),
    name: 'Andrew Bridgen',
    companyName: 'OCBC Singapore',
    email: 'andrew@infrrd.ai',
    contactNo: '7406559241',
    designation: 'Senior Software Developer',
    avatarId: 1,
    experience: '5.8',
    dateOfJoining: '2017',
    reportingManager: 'Lalit Agarwal',
    location: 'Bangalore',
    rating: 3.9
  },
  {
    id: uuidv4(),
    name: 'Sarah Johnson',
    companyName: 'Product Team',
    email: 'sarah@infrrd.ai',
    contactNo: '7406559242',
    designation: 'Technical Lead',
    avatarId: 2,
    experience: '4.5',
    dateOfJoining: '2019',
    reportingManager: 'Lalit Agarwal',
    location: 'Mumbai',
    rating: 4.0
  },
  {
    id: uuidv4(),
    name: 'Michael Chen',
    companyName: 'IDC',
    email: 'michael@infrrd.ai',
    contactNo: '7406559243',
    designation: 'Quality Assurance',
    avatarId: 3,
    experience: '3.2',
    dateOfJoining: '2020',
    reportingManager: 'Lalit Agarwal',
    location: 'Bangalore',
    rating: 3.0
  },
  {
    id: uuidv4(),
    name: 'Emily Rodriguez',
    companyName: 'Radian',
    email: 'emily@infrrd.ai',
    contactNo: '7406559244',
    designation: 'Software Developer',
    avatarId: 4,
    experience: '2.5',
    dateOfJoining: '2021',
    reportingManager: 'Lalit Agarwal',
    location: 'Delhi',
    rating: 4.5
  },
  {
    id: uuidv4(),
    name: 'David Kim',
    companyName: 'Rustify',
    email: 'david@infrrd.ai',
    contactNo: '7406559245',
    designation: 'Manager',
    avatarId: 5,
    experience: '7.0',
    dateOfJoining: '2018',
    reportingManager: 'Lalit Agarwal',
    location: 'Hyderabad',
    rating: 5.0
  }
];