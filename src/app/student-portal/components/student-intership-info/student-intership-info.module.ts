import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentIntershipInfoComponent } from './student-intership-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentIntershipInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: StudentIntershipInfoComponent}
    ])
  ]
})
export class StudentIntershipInfoModule { }
