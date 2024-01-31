import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: StudentInfoComponent}
    ])
  ]
})
export class StudentInfoModule { }
