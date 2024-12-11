import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employee } from './types/employee';
import { Filters } from './types/filters';
import { EmployeeService } from './services/employee.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  selectedTeam = '';
  searchTerm = '';
  isSearchVisible = false;
  activeFilters: Filters = {
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  };

  private destroy$ = new Subject<void>();

  constructor(
    private employeeService: EmployeeService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    // Subscribe to search visibility changes
    this.searchService.searchVisible$
      .pipe(takeUntil(this.destroy$))
      .subscribe(visible => this.isSearchVisible = visible);

    // Subscribe to search term changes
    this.searchService.searchTerm$
      .pipe(takeUntil(this.destroy$))
      .subscribe(term => this.searchTerm = term);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

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
    this.searchService.setSearchTerm(term);
  }

  onSearchClick(): void {
    this.searchService.setSearchVisible(true);
  }

  onResetSearch(): void {
    this.searchService.resetSearch();
  }
}