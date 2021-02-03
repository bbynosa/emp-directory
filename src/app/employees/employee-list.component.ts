import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';


@Component ({
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
    
    pageTitle: string = 'Employee List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'Name';
    employees: IEmployee[] = [];
    errorMessage: string;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe({
            next: employees => this.employees = employees,
            error: err => this.errorMessage = err
        });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}