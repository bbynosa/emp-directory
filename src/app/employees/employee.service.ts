import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    private employeeUrl = 'http://employeedirectorywebapi.azurewebsites.net/api/employees/';
    
    constructor(private http: HttpClient) {}

    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getEmployee(id: number): Observable<IEmployee | undefined> {
        return this.getEmployees()
          .pipe(
            map((employees: IEmployee[]) => employees.find(e => e.EmployeeId === id))
          );
      }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}