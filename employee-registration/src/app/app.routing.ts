import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-emp', component: AddEmployeeComponent },
  { path: 'list-emp', component: ListEmployeeComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
