import { Component, Output, EventEmitter } from '@angular/core';
import { Filters } from '../../types/filters';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() filterChange = new EventEmitter<Filters>();

  activeItem = '';
  isFilterOpen = false;
  currentFilters: Filters = {
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  };

  setActiveItem(item: string): void {
    this.activeItem = item;
  }

  handleSearchClick(): void {
    this.activeItem = 'search';
    this.isFilterOpen = true;
  }

  handleClose(): void {
    this.isFilterOpen = false;
  }

  handleFilterChange(filters: Filters): void {
    this.currentFilters = { ...filters };
    this.filterChange.emit(this.currentFilters);
  }
}
