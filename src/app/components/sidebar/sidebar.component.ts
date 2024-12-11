import { Component, Output, EventEmitter } from '@angular/core';
import { Filters } from '../../types/filters';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() filterChange = new EventEmitter<Filters>();
  @Output() searchClick = new EventEmitter<void>();
  @Output() resetSearch = new EventEmitter<void>();

  activeItem = '';

  setActiveItem(item: string): void {
    if (this.activeItem === item) {
      return;
    }
    
    this.activeItem = item;
    
    if (item === 'search') {
      this.searchClick.emit();
    } else {
      this.resetSearch.emit();
    }
  }

  handleSearchClick(): void {
    this.setActiveItem('search');
  }
}