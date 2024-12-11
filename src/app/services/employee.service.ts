import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../types/employee';
import { Filters } from '../types/filters';
import { employees as initialEmployees } from '../data/employees';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<Employee[]>(initialEmployees);
  employees$ = this.employeesSubject.asObservable();

  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return this.employees$;
  }

  addEmployee(employeeData: Omit<Employee, 'id'>): void {
    const newEmployee: Employee = {
      ...employeeData,
      id: uuidv4(),
      avatarId: Math.floor(Math.random() * 10) + 1
    };
    
    const currentEmployees = this.employeesSubject.value;
    this.employeesSubject.next([...currentEmployees, newEmployee]);
  }

  updateEmployee(id: string, employeeData: Partial<Employee>): void {
    const currentEmployees = this.employeesSubject.value;
    const updatedEmployees = currentEmployees.map(emp => 
      emp.id === id ? { ...emp, ...employeeData } : emp
    );
    this.employeesSubject.next(updatedEmployees);
  }

  deleteEmployee(id: string): void {
    const currentEmployees = this.employeesSubject.value;
    const filteredEmployees = currentEmployees.filter(emp => emp.id !== id);
    this.employeesSubject.next(filteredEmployees);
  }

  filterEmployees(filters: Filters, searchTerm: string): Employee[] {
    return this.employeesSubject.value
      .filter(employee => {
        // Department filter
        if (filters.department && !employee.designation.toLowerCase().includes(filters.department.toLowerCase())) {
          return false;
        }

        // Experience filter
        if (filters.experience) {
          const exp = parseFloat(employee.experience);
          switch (filters.experience) {
            case '5+':
              if (exp < 5) return false;
              break;
            case '3-5':
              if (exp < 3 || exp >= 5) return false;
              break;
            case '1-3':
              if (exp < 1 || exp >= 3) return false;
              break;
            case '0-1':
              if (exp >= 1) return false;
              break;
          }
        }

        // Year of joining filter
        if (filters.yearOfJoining && employee.dateOfJoining !== filters.yearOfJoining) {
          return false;
        }

        // Location filter
        if (filters.location && employee.location?.toLowerCase() !== filters.location.toLowerCase()) {
          return false;
        }

        // Team filter
        if (filters.team && employee.companyName !== filters.team) {
          return false;
        }

        // Search term filter
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return (
            employee.name.toLowerCase().includes(searchLower) ||
            employee.email.toLowerCase().includes(searchLower) ||
            employee.designation.toLowerCase().includes(searchLower)
          );
        }

        return true;
      });
  }
}