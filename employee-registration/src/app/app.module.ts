import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import {ListEmployeeComponent} from "./list-employee/list-employee.component";

import {BsDatepickerModule} from "ngx-bootstrap/datepicker"

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {EmployeeService} from './service/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [AuthenticationService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
