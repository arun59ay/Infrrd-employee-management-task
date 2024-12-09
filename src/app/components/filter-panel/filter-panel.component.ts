import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Filters } from '../../types/filters';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit, OnChanges {
  @Input() isOpen = false;
  @Input() currentFilters: Filters = {
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  };
  @Output() close = new EventEmitter<void>();
  @Output() filterChange = new EventEmitter<Filters>();

  tempFilters: Filters = {
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  };

  ngOnInit() {
    this.resetTempFilters();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Ensure filters are reset when the filter panel is opened or the filters change
    if (changes['currentFilters'] && !changes['currentFilters'].firstChange) {
      this.resetTempFilters();
    }
  }

  // Reset tempFilters to match currentFilters
  resetTempFilters() {
    this.tempFilters = { ...this.currentFilters };
  }

  // Emit the updated filters to parent component
  applyFilters(): void {
    this.filterChange.emit({ ...this.tempFilters });
    this.close.emit();
  }

  // Clear all filters and notify the parent component
  clearFilters(): void {
    const clearedFilters = {
      department: '',
      experience: '',
      yearOfJoining: '',
      location: '',
      team: ''
    };
    this.tempFilters = { ...clearedFilters };
    this.filterChange.emit(clearedFilters);
    this.close.emit();
  }
}
