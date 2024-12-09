import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../types/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html' 
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() share = new EventEmitter<void>();
}