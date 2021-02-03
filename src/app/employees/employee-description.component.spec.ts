import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDescriptionComponent } from './employee-description.component';

describe('EmployeeDescriptionComponent', () => {
  let component: EmployeeDescriptionComponent;
  let fixture: ComponentFixture<EmployeeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
