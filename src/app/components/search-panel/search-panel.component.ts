import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  @Input() searchTerm = '';
  @Output() searchChange = new EventEmitter<string>();
  @Output() toggleFilters = new EventEmitter<void>();
}