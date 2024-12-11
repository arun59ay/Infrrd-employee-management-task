import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../types/employee';
import { Filters } from '../../types/filters';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  @Input() employees: Employee[] = [];
  @Input() searchTerm = '';
  @Input() isSearchVisible = false;
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<Filters>();

  showAddForm = false;
  showEditForm = false;
  showDeleteConfirm = false;
  selectedEmployee?: Employee;
  isFilterOpen = false;
  showBangaloreOnly = false;
  currentFilters: Filters = {
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  };

  constructor(private employeeService: EmployeeService) {}

  get filteredEmployees(): Employee[] {
    return this.employeeService.filterEmployees(this.currentFilters, this.searchTerm);
  }

  onAddEmployee(): void {
    this.showAddForm = true;
  }

  onEditEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    this.showEditForm = true;
  }

  onDeleteEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
    this.showDeleteConfirm = true;
  }

  handleSave(employeeData: Partial<Employee>): void {
    if (this.showEditForm && this.selectedEmployee) {
      this.employeeService.updateEmployee(this.selectedEmployee.id, employeeData);
    } else {
      this.employeeService.addEmployee(employeeData as Omit<Employee, 'id'>);
    }
    this.closeForm();
  }

  handleDelete(): void {
    if (this.selectedEmployee) {
      this.employeeService.deleteEmployee(this.selectedEmployee.id);
      this.showDeleteConfirm = false;
      this.selectedEmployee = undefined;
    }
  }

  handleShare(): void {
    console.log('Share clicked');
  }

  toggleBangalore(): void {
    this.showBangaloreOnly = !this.showBangaloreOnly;
    this.currentFilters = {
      ...this.currentFilters,
      location: this.showBangaloreOnly ? 'Bangalore' : ''
    };
  }

  handleFilterChange(filters: Filters): void {
    this.currentFilters = filters;
    this.filterChange.emit(filters);
  }

  private closeForm(): void {
    this.showAddForm = false;
    this.showEditForm = false;
    this.selectedEmployee = undefined;
  }
}