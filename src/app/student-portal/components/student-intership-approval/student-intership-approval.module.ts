import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInternshipApprovalComponent } from './student-intership-approval.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadModule } from '../../../services/common/file-upload/file-upload.module';



@NgModule({
  declarations: [
    StudentInternshipApprovalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FileUploadModule,
    RouterModule.forChild([
      {path: "", component: StudentInternshipApprovalComponent}
    ])

  ],
  exports:[
    FileUploadModule
  ]
})
export class StudentIntershipApprovalModule { }
