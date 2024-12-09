import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results-header',
  templateUrl: './results-header.component.html',
  styleUrls: ['./results-header.component.scss']
})
export class ResultsHeaderComponent {
  @Input() count = 0;
  @Input() showBangaloreOnly = false;
  @Output() toggleBangalore = new EventEmitter<void>();
}