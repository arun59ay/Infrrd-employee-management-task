import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../../types/employee';
import { Filters } from '../../types/filters'; // Assuming you have a Filters type

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnChanges {
  @Input() employees: Employee[] = [];
  @Input() searchTerm = '';
  @Input() filters: Filters = {
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  };

  @Output() searchChange = new EventEmitter<string>();

  isFilterOpen = false;
  showBangaloreOnly = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employees'] || changes['filters'] || changes['searchTerm']) {
      this.applyFilters();
    }
  }

  // Apply all filters (search term, Bangalore-only, and the rest of the filters)
  get filteredEmployees(): Employee[] {
    return this.employees
      .filter(emp => {
        // Filter by Bangalore location if enabled
        if (this.showBangaloreOnly && emp.location !== 'Bangalore') {
          return false;
        }

        // Apply search term filter
        if (this.searchTerm && !this.isMatchingSearch(emp)) {
          return false;
        }

        // Apply additional filters (e.g., department, experience, etc.)
        return this.isMatchingFilters(emp);
      });
  }

  // Check if an employee matches the search term
  isMatchingSearch(employee: Employee): boolean {
    const searchLower = this.searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchLower) ||
      employee.email.toLowerCase().includes(searchLower)
    );
  }

  // Check if an employee matches the selected filters
  isMatchingFilters(employee: Employee): boolean {
    const { department, experience, yearOfJoining, location, team } = this.filters;

    // Department filter
    if (department && !employee.designation.toLowerCase().includes(department.toLowerCase())) {
      return false;
    }

    // Experience filter
    if (experience && !this.isMatchingExperience(employee.experience, experience)) {
      return false;
    }

    // Year of Joining filter
    if (yearOfJoining && employee.dateOfJoining !== yearOfJoining) {
      return false;
    }

    // Location filter
    if (location && employee.location?.toLowerCase() !== location.toLowerCase()) {
      return false;
    }

    // Team filter
    if (team && employee.companyName !== team) {
      return false;
    }

    return true;
  }

  // Check if the employee's experience matches the selected experience filter
  isMatchingExperience(experience: string, filterExperience: string): boolean {
    const exp = parseFloat(experience);
    switch (filterExperience) {
      case '5+':
        return exp >= 5;
      case '3-5':
        return exp >= 3 && exp < 5;
      case '1-3':
        return exp >= 1 && exp < 3;
      case '0-1':
        return exp < 1;
      default:
        return true;
    }
  }

  // Toggle the Bangalore-only filter
  toggleBangalore(): void {
    this.showBangaloreOnly = !this.showBangaloreOnly;
  }

  // Handle changes to the search term
  onSearchChange(searchTerm: string): void {
    this.searchChange.emit(searchTerm);
  }

  // Handle filter changes
  handleFilterChange(filters: Filters): void {
    this.filters = filters;
    this.applyFilters(); // Apply filters to employees after the change
  }

  // Apply filters when filters or search term changes
  applyFilters(): void {
    // This can be a place where you might want to interact with a service to fetch filtered data.
  }

  // Handle share click (you can implement sharing functionality here)
  handleShare(): void {
    console.log('Share clicked');
  }
}
