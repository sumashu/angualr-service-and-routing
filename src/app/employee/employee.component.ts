import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employee = [] ; 

  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit():void {
    this._employeeservice.getEmployee()
    .subscribe(data=> this.employee = data)
  }

}
