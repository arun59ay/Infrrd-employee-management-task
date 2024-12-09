import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterPanelComponent } from './filter-panel.component';
import { LucideAngularModule, X } from 'lucide-angular';

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPanelComponent ],
      imports: [
        FormsModule,
        LucideAngularModule.pick({ X })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter changes on apply', () => {
    spyOn(component.filterChange, 'emit');
    spyOn(component.close, 'emit');

    const testFilters = {
      department: 'Front End Development',
      experience: '5+',
      yearOfJoining: '2020',
      location: 'Bangalore',
      team: 'OCBC Singapore'
    };

    component.tempFilters = testFilters;
    component.applyFilters();

    expect(component.filterChange.emit).toHaveBeenCalledWith(testFilters);
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should clear filters', () => {
    spyOn(component.filterChange, 'emit');

    component.clearFilters();

    expect(component.tempFilters).toEqual({
      department: '',
      experience: '',
      yearOfJoining: '',
      location: '',
      team: ''
    });
    expect(component.filterChange.emit).toHaveBeenCalledWith({
      department: '',
      experience: '',
      yearOfJoining: '',
      location: '',
      team: ''
    });
  });
});