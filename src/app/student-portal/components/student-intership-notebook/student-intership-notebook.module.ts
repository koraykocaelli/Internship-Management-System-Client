import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentIntershipNotebookComponent } from './student-intership-notebook.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StudentIntershipNotebookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: StudentIntershipNotebookComponent}
    ])
  ]
})
export class StudentIntershipNotebookModule { }
