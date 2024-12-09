import { Component } from '@angular/core';
import { Employee } from './types/employee';
import { Filters } from './types/filters';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedTeam = '';
  searchTerm = '';
  activeFilters: Filters = {
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  };

  constructor(private employeeService: EmployeeService) {}

  get filteredEmployees(): Employee[] {
    return this.employeeService.filterEmployees(this.activeFilters, this.searchTerm);
  }

  onTeamChange(team: string): void {
    this.selectedTeam = team;
    this.activeFilters = { ...this.activeFilters, team };
  }

  onFilterChange(filters: Filters): void {
    this.activeFilters = filters;
  }

  onSearchChange(term: string): void {
    this.searchTerm = term;
  }
}