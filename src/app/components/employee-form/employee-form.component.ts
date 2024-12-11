import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../types/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee?: Employee;
  @Output() save = new EventEmitter<Partial<Employee>>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;
  isEdit = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.isEdit = !!this.employee;
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: [this.employee?.name || '', [Validators.required]],
      email: [this.employee?.email || '', [Validators.required, Validators.email]],
      contactNo: [this.employee?.contactNo || '', [Validators.required]],
      designation: [this.employee?.designation || '', [Validators.required]],
      companyName: [this.employee?.companyName || '', [Validators.required]],
      experience: [this.employee?.experience || '', [Validators.required]],
      dateOfJoining: [this.employee?.dateOfJoining || '', [Validators.required]],
      reportingManager: [this.employee?.reportingManager || '', [Validators.required]],
      location: [this.employee?.location || '', [Validators.required]],
      rating: [this.employee?.rating || 0, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}