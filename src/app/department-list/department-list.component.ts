import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departmentList = [
   {"id":1,"Dname":"Anagualr"},
   {"id":2,"Dname":"Python"},
   {"id":3,"Dname":"MongoDb"},
   {"id":4,"Dname":"ReactJs"},
   {"id":5,"Dname":"viewJs"},
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSelect(department)
  {
    //console.log("clicked");
    this.route.navigate(['/departDetails',department.id]);
  }

}
