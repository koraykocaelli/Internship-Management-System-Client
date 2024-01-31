import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoModule } from './student-info/student-info.module';
import { StudentIntershipApprovalModule } from './student-intership-approval/student-intership-approval.module';
import { StudentIntershipNotebookModule } from './student-intership-notebook/student-intership-notebook.module';
import { StudentIntershipInfoModule } from './student-intership-info/student-intership-info.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentInfoModule,
    StudentIntershipApprovalModule,
    StudentIntershipInfoModule,
    StudentIntershipNotebookModule
  ],
})
export class ComponentsModule { }
