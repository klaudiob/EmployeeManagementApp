import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

const routes: Routes = [
  {
  path: "employees-list",
  component:EmployeesListComponent
  },
  {
    path: "**",redirectTo:'employees-list'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
