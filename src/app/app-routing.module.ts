import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/departments', pathMatch:'full'},
  {path:'employeelist', component:EmployeeListComponent},
  {path:'departments', component:DepartmentListComponent},
  {path:'departDetails',component:DepartmentDetailsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentDetailsComponent]
