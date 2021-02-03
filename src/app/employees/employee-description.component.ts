import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-description',
  templateUrl: './employee-description.component.html',
  styleUrls: ['./employee-description.component.css']
})

export class EmployeeDescriptionComponent implements OnInit {

  pageTitle: string = 'Employee Description'
  employee: IEmployee | undefined;
  errorMessage: string = '';

  constructor(private router: Router
              ,private route: ActivatedRoute
              ,private employeeService: EmployeeService) { }


  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if(param) {
      const id = +param;
      this.getEmployee(id);
    }
  }

  getEmployee(id: number): void {
    this.employeeService.getEmployee(id).subscribe({
      next: employee => this.employee = employee,
      error: err => this.errorMessage = err
    });
  } 

  onBack(): void {
    this.router.navigate(['/employees'])
  }

}