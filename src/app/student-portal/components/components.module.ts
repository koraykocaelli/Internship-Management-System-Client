import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoModule } from './student-info/student-info.module';
import { StudentIntershipApprovalModule } from './student-intership-approval/student-intership-approval.module';
import { StudentIntershipNotebookModule } from './student-intership-notebook/student-intership-notebook.module';
import { StudentIntershipInfoModule } from './student-intership-info/student-intership-info.module';
import { WorkPlaceInfoModule } from './work-place-info/work-place-info.module';
import { FileUploadDialogModule } from './file-upload-dialog/file-upload-dialog.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StudentInfoModule,
    StudentIntershipApprovalModule,
    StudentIntershipInfoModule,
    StudentIntershipNotebookModule,
    WorkPlaceInfoModule,
    FileUploadDialogModule

    
  ],
})
export class ComponentsModule { }
