import { Injectable } from '@angular/core';
import { Employee } from '../types/employee';
import { Filters } from '../types/filters';
import { employees } from '../data/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = employees;

  // Method to filter employees based on filters and search term
  filterEmployees(filters: Filters, searchTerm: string): Employee[] {
    return this.employees
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

        return true;
      })
      .filter(emp =>
        !searchTerm ||
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }
}
