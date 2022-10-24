import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from "../../shared/employee";
import { EmployeesService } from '../employees.service';
@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.scss"]
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  employeeForm:any=FormGroup;
  constructor(
    private employeesService: EmployeesService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loadEmployees();
    this.employeeForm = this.createEmployeeForm();
  }

  addEmployee(): void{
    this.employeesService.addEmployee(this.employeeForm.value).subscribe(() => {
      this.loadEmployees();
      this.employeeForm.reset()
    })
  }
  removeEmployee(id: number): void {
    this.employeesService.removeEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
  private createEmployeeForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      position: ["", Validators.required],
      salary: ["", Validators.required]
    });
  }
  private loadEmployees(): void {
    this.employeesService
      .getEmployees()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }
}