import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "../model/employee.model";
import {Observable} from 'rxjs'; 
import { of } from 'rxjs';
 

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/emp-portal/employees';

  getUsers() {
   //  let employees = [
   //];
   //return Observable.bind(employees).delay(5000);
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<Employee>(this.baseUrl + '/' + id);
  }

  createUser(emp: Employee) {
    return this.http.post(this.baseUrl, emp);
  }

  updateUser(emp: Employee) {
    return this.http.put(this.baseUrl + '/' + emp.id, emp);
  }
  
}
