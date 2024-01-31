import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentIntershipApprovalComponent } from './student-intership-approval.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentIntershipApprovalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: StudentIntershipApprovalComponent}
    ])
  ]
})
export class StudentIntershipApprovalModule { }
