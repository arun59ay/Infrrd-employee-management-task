import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../types/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html' 
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() share = new EventEmitter<void>();

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onShare() {
    this.share.emit();
  }
}