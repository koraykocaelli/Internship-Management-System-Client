import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoModule } from './student-info/student-info.module';
import { StudentIntershipApprovalModule } from './student-intership-approval/student-intership-approval.module';
import { StudentIntershipInfoModule } from './student-intership-info/student-intership-info.module';
import { FileUploadDialogModule } from './file-upload-dialog/file-upload-dialog.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StudentInfoModule,
    StudentIntershipApprovalModule,
    StudentIntershipInfoModule,
    FileUploadDialogModule

    
  ],
})
export class ComponentsModule { }
