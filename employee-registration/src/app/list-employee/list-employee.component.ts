import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../model/employee.model";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  emp: Employee[];

  constructor(private router: Router, private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getUsers()
      .subscribe( data => {
        this.emp = data;
      });
  }

  addUser(): void {
    this.router.navigate(['add-emp']);
  };
}
