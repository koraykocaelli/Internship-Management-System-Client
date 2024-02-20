import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentIntershipApprovalComponent } from './student-intership-approval.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from '../../../services/common/file-upload/file-upload.module';



@NgModule({
  declarations: [
    StudentIntershipApprovalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FileUploadModule,
    RouterModule.forChild([
      {path: "", component: StudentIntershipApprovalComponent}
    ])

  ],
  exports:[
    FileUploadModule
  ]
})
export class StudentIntershipApprovalModule { }
